(ns mrsudoku.model.conflict
  (:require [clojure.set :as set]
            [mrsudoku.model.grid :as g]))


;; ========================================================================
;; Fichier à compléter : il faut utiliser les fonctions du namespace grid.
;; et regarder également les tests dans `test/cljs/mrsudoku/conflict_test.cljs`
;; et bien sûr `test/cljs/mrsudoku/grid_test.cljs`  (et les autres tests ...)
;; ========================================================================

(defn values
  "Return the set of values of a vector or grid `cells`."
  [cells]
  (disj (into #{} (map g/cell-value cells)) nil))

(defn values-except
  "Return the set of values of a vector of cells, except the `except`-th."
  [cells except]
  {:pre [(<= 1 except (count cells))]}
  ;;un peu moche par contre...
 (loop [s cells,co 0,res []]
   (if (seq s)
     (if (= co (dec except))
       (recur (rest s) (inc co) res)
       (recur (rest s) (inc co) (conj res (nth cells co))))
     (values res))))

(defn mk-conflict [kind cx cy value]
  {:status :conflict
   :kind kind
   :value value})

(defn merge-conflict-kind
     [kind1 kind2] (if (= kind1 kind2) kind1 (let [res (if (keyword? kind2)(conj #{} kind2) kind2)] (loop [s (if (keyword? kind1)(conj #{} kind1)kind1),res res](if (seq s) (recur (rest s) (conj res (first s)))res)))))


(defn merge-conflict [conflict1 conflict2]
    (mk-conflict (merge-conflict-kind (get conflict1 :kind) (get conflict2 :kind)) 1 1 (get conflict1 :value)))


(defn merge-conflicts [& conflicts]
  (apply (partial merge-with merge-conflict) conflicts))

(defn update-conflicts
  [conflict-kind cx cy value conflicts]
  (if-let [conflict (get conflicts [cx, cy])]
    (assoc conflicts [cx, cy] (mk-conflict (merge-conflict-kind conflict-kind (:kind conflict))
                                           cx cy value))
    (assoc conflicts [cx, cy] (mk-conflict conflict-kind cx cy value))))

(defn conflict-value [values except cell]
  (when-let [value (g/cell-value cell)]
    (when (and (not= (:status cell) :init)
               (contains? (values-except values except) value))
      value)))

(defn col-conflicts
  "Returns a map of conflicts in a `col`."
  [col cx]
  (loop [cy 1, cells (seq col), conflicts {}]
    ;(println conflicts)
    (if (seq cells)
      (let [cell (first cells)]
        (if-let [value (conflict-value col cy cell)]
          (recur (+ cy 1) (rest cells) (update-conflicts :col cx cy value conflicts))
          (recur (+ cy 1) (rest cells) conflicts)))
      ;; no more cells
      conflicts)))

(defn cols-conflicts
  [grid] (reduce merge-conflicts {}
                 (map (fn [c] (col-conflicts (g/col grid c) c)) (range 1 10))))


(defn row-conflicts
   "Returns a map of conflicts in a `row`."
   [row cy]
   (loop [cx 1, cells (seq row), conflicts {}]
    (if (seq cells)
      (let [cell (first cells)]
        (if-let [value (conflict-value row cx cell)]
          (recur (+ cx 1) (rest cells) (update-conflicts :row cx cy value conflicts))
          (recur (+ cx 1) (rest cells) conflicts)))
     conflicts)))

(defn rows-conflicts
  "Returns a map of conflicts in all rows of `grid`"
  [grid]
  (reduce merge-conflicts {}
                 (map (fn [c] (row-conflicts (g/row grid c) c)) (range 1 10))))

(defn block-conflicts
  [block b]
  (g/reduce-block (fn [conflicts index cx cy cell]
                    (if-let [value (conflict-value block index cell)]
                      (update-conflicts :block cx cy value conflicts)
                      conflicts)) {} block b))

(defn blocks-conflicts
  [grid]
  (reduce merge-conflicts {}
          (map (fn [b] (block-conflicts (g/block grid b) b)) (range 1 10))))

(defn grid-conflicts
  "Compute all conflicts in the Sudoku grid."
  [grid]
  (println "compute conflicts")
  (println (g/grid->str grid))
  (merge-conflicts (rows-conflicts grid)
                   (cols-conflicts grid)
                   (blocks-conflicts grid)))

(defn grid-resolu? [grid]
  (loop [num 1]
    (if (= num 10)
     true
     (if (= (count (values (g/block grid num))) 9)
      (recur (inc num))
      false))))
