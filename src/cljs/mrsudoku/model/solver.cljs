(ns mrsudoku.model.solver
  (:require [cljs.test :refer-macros [deftest testing is are]]
            [mrsudoku.model.grid :as g]
            [mrsudoku.model.conflict :as cfl]))



(defn to_var_block [grid num]
  ;;On peut ameliorer cette fonction
  (let [collig {1 (cfl/values (g/row grid (+ (* (int (/ (dec num) 3)) 3) 1)))
                 2 (cfl/values (g/row grid (+ (* (int (/ (dec num) 3)) 3) 2)))
                 3 (cfl/values (g/row grid (+ (* (int (/ (dec num) 3)) 3) 3)))
                 4 (cfl/values (g/col grid (+ (* (mod (dec num) 3) 3) 1)))
                 5 (cfl/values (g/col grid (+ (* (mod (dec num) 3) 3) 2)))
                 6 (cfl/values (g/col grid (+ (* (mod (dec num) 3) 3) 3)))}
        pos #{1 2 3 4 5 6 7 8 9}
        block (cfl/values (g/block grid num))]
   (loop [b (g/block grid num),index 1,res {}]

    (if (seq b)
      (if-not ( g/cell-value (first b))
        (recur
          (rest b)
          (inc index)
          (assoc res (keyword (str "v" index))
           (clojure.set/difference pos
             (clojure.set/union (get collig (inc (int (/ (dec index) 3)))) (get collig (+ (mod (dec index) 3) 4 )) block))))
       (recur (rest b) (inc index) res))
      res))))


;;la fonction proposee par le prof
(comment (defn augment
          "take a graph, a start summit, a set of visited summits and a match and return a flag indicated if the augment succeed or not"
          [graph src visited match]
          (loop [dests (get graph src),visited visited]
            (if (seq dests)
             (if (visited (first dests))
               (recur (rest dests) visited)
              (if-let [old-src (get match (first dests))]
                      (let [[found,visited',match'] (augment graph old-src (conj visited (first dests)) match)]
                       (if found
                         [true ,visited',(assoc match' (first dests) src)]
                         ;;found==false
                         (recur (rest dests) visited')))
                ;;no match
                      [true,(conj visited (first dests)),(assoc match (first dests) src)]))
             [false,visited,match]))))

;;la version finale de la fonction augment...
(defn augment
  "take a graph, a start summit, a set of visited summits and a match and return a flag indicated if the augment succeed or not"
  ([graph src visited match] (augment graph src visited match #{}))
  ([graph src visited match just-visited]
   (loop [dests (get graph src),visited visited]
    (if (seq dests)
     (if (just-visited (first dests))
       (recur (rest dests) visited)
      (if-let [old-src (get match (first dests))]
              (let [[found,visited',match'] (augment graph old-src (conj visited (first dests)) match (conj just-visited (first dests)))]
               (if found
                 [true ,visited',(assoc match' (first dests) src)]
                 ;;found==false
                 (recur (rest dests) visited')))
        ;;no match
              [true,(conj visited (first dests)),(assoc match (first dests) src)]))
     [false,visited,match]))))




;;essential function
(defn max-matching [graph]
  (loop [summits (keys graph),visited #{},match {}]
    (if (seq summits)
      (let [[found,visited',match'] (augment graph (first summits) visited match)]
        (recur (rest summits) visited' match'))
     match)))


(defn complete-matching? [vars match]
  (= (count vars) (count match)))



(defn graph-with-matching [graph match]
  (reduce (fn [mgraph [src dest]]
           (-> mgraph (g/add-vertex src)
                      (g/add-edge src dest)
                      (g/remove-edge dest src))) graph match))


(defn doms-from-sccomp [variables comp]
  (if (= (count comp)1)
    (if (contains? variables (first comp))
     {(first comp) #{}}
     {})
    (let [vars (clojure.set/select #(contains? variables %) comp), values (clojure.set/difference comp vars)]
     (zipmap vars (repeat values)))))

(defn doms-from-scc [vars scc]
  (loop [scc scc,res {}]
    (if (seq scc)
     (recur (rest scc) (merge res (doms-from-sccomp vars (first scc))))
     res)))



(defn dfs
  "Depth-First Search algorithm"
  ([graph vert f init] (first (dfs graph vert f init #{})))
  ([graph vert f init visited] (if (visited vert)
                                [init visited]
                                (loop [verts (get graph vert), res (f init vert), visited (conj visited vert)]
                                 (if (seq verts)
                                  (let [[res',visited'] (dfs graph (first verts) f res visited)] (recur (rest verts) res' visited'))
        ;;no more child
                                  [res visited])))))




(defn dfs-post
  ([graph vert f init] (first (dfs-post graph vert f init #{})))
  ([graph vert f init visited] (if (visited vert)
                                [init visited]
                                (loop [verts (get graph vert), res init,visited (conj visited vert)]
                                 (if (seq verts)
                                  (let [[res',visited'] (dfs-post graph (first verts) f res visited)] (recur (rest verts) res' visited'))
              ;;no more child
                                  [(f res vert) visited])))))



  ;;essential function
(defn dfs-stack [graph]
  (loop [verts (keys graph),stack (),visited #{}]
    (if (seq verts)
     (let [[stack',visited'] (dfs-post graph (first verts) conj stack visited)]
      (recur (rest verts) stack' visited'))
    ;;no more verts
     stack)))



(defn merge-edges [edges1 edges2]
  (loop [s edges2,m edges1]
    (if (seq s)
     (let [[k,v2] (first s)]
      (if-let [v1 (get m k)]
       (recur (rest s) (assoc m k (clojure.set/union v1 v2)))
       (recur (rest s) (assoc m k v2))))
     m)))



(defn sinks [graph verts]
  (reduce (fn [ngraph vert] (if (contains? ngraph vert) ngraph (assoc ngraph vert #{}))) graph verts))



(defn inv-edges [src dests]
  (zipmap dests (repeat #{src})))


    ;;essential function

(defn transpose
  "transpose a graph..."
  [graph]
  (loop [ks (keys graph),res {}]
    (if (seq ks)
     (recur (rest ks) (merge-edges res (inv-edges (first ks) (get graph (first ks)))))
     (sinks res (keys graph)))))



(defn compute-scc [graph]
  (let [stack (dfs-stack graph) t-graph (transpose graph)]
   (loop [s stack,visited #{},res []]
     (if (seq s)
      (if (visited (first s))
       (recur (rest s) visited res)
       (let [[comp visited'] (dfs-post t-graph (first s) conj #{} visited)]
         (recur (rest s) visited' (conj res comp))))
      res))))


(defn isolated-values [variables scc]
  (into #{} (map first (filter #(and (= (count %) 1) (not (variables (first %))))scc))))


(defn values-known-by [doms value]
  (reduce (fn [res [v values]]
           (if (contains? values value)
            (conj res v)
            res)) #{} doms))



;;ne marche pas apparement remplacer par un simple loop recur
(comment (defn add-value [doms vs value]
          (into doms (map (fn [var] (update doms var #(conj % value)))vs))))

(defn add-value [doms vs value]
  (loop [s vs,res doms]
    (if (seq s)
     (recur (rest s) (update res (first s) #(conj % value)))
     res)))

(defn access [doms scc]
  (let [scc-doms (doms-from-scc (into #{} (keys doms)) scc) isolated (isolated-values (into #{} (keys doms)) scc)]
    (reduce (fn [doms' value]
               (add-value doms' (values-known-by doms value) value))
            scc-doms
            isolated)))



(defn alldiff
  "simplify the 'doms' for the all-different constraint,returns nil if not satisfiable"
  [doms]
  (let [match (max-matching doms)]
   (if (complete-matching? doms match)
    (let [scc (compute-scc (graph-with-matching doms match))]
     (access doms scc))
    ;;incomlet
    nil)))

 ;;Suite à un problème de compatibiliter entre Javascripts et clojure Integer on a redéfini la méthode parse pour un chiffre entre 1 et 9...
(defn manuel-parse [str]
  (cond
             (== (compare str "1") 0) 1
             (== (compare str "2") 0) 2
             (== (compare str "3") 0) 3
             (== (compare str "4") 0) 4
             (== (compare str "5") 0) 5
             (== (compare str "6") 0) 6
             (== (compare str "7") 0) 7
             (== (compare str "8") 0) 8

             :else 9))
(defn fix-singleton
  "fix all singleton of a grid"
  [grid index doms]
          (loop [s doms,mygrid grid]
            (if (seq s)
             (if (= (count (val (first s))) 1)
               (let [var-num (manuel-parse (subs (str (key (first s))) 2))]
                (let [offset-y (inc (int (/ (dec var-num) 3))) , y (* (int (/ (dec index) 3)) 3), offset-x (inc (int (mod (dec var-num) 3))) ,x (* (int (mod (dec index) 3)) 3)]
                 (recur (rest s) (g/change-cell mygrid (+ x offset-x) (+ y offset-y) (g/mk-cell (first (val (first s))))))))
               ;;pas singleton
              (recur (rest s) mygrid))
             mygrid)))

(defn fix-singleton2
  "same as fix-singleton but with a boolean"
  [grid index doms]
  (loop [s doms,mygrid grid,fixed false];;fixed pour indique que fix-singleton a fixed au moins une valeur dans la grille.
    (if (seq s)
     (if (= (count (val (first s))) 1)
       (let [var-num (manuel-parse (subs (str (key (first s))) 2))]
        (let [offset-y (inc (int (/ (dec var-num) 3))) , y (* (int (/ (dec index) 3)) 3), offset-x (inc (int (mod (dec var-num) 3))) ,x (* (int (mod (dec index) 3)) 3)]
         (recur (rest s) (g/change-cell mygrid (+ x offset-x) (+ y offset-y) (g/mk-cell (first (val (first s))))) true)))
       ;;pas singleton
      (recur (rest s) mygrid fixed))
     [mygrid fixed])))

(defn solver
  "solve a simple grid with only singletons else INFINIT-LOOP!!! be carefull"
   [grid]
          (loop [mygrid grid,index 1,finish (cfl/grid-resolu? grid)]
           (if-not finish
             (let [alldiff-doms (alldiff (to_var_block mygrid index))]
              (if alldiff-doms
                (recur (fix-singleton mygrid index alldiff-doms) (inc (mod index 9)) (cfl/grid-resolu? mygrid))
                nil))
             mygrid)))

(defn solve-once
  "try to fix singletons of the grid, return the new grid and true if did else the first grid (or nil) and false"
  [grid]
         (loop [mygrid grid,index 1,fixed false]
          (if (< index 10)
            (let [alldiff-doms (alldiff (to_var_block mygrid index))]
             (if alldiff-doms
               (let [[newgrid,isfixed] (fix-singleton2 mygrid index alldiff-doms)]
                (recur newgrid (inc index) (or fixed isfixed)))
               [nil false]))
           [mygrid fixed])))


(defn strat-first [grid]
  (loop [index 1]
   (if (< index 10)
     (let [alldiff-doms (to_var_block grid index)]
      (if (> (count alldiff-doms) 0)
       [index (first alldiff-doms)]
       (recur (inc index))))
    [1 #{}])))

(defn strat-best [grid]
   (loop [index 1,myindex 1 best {:v1 (into #{} (take 10 (range 1 10)))}]
    (if (< index 10)
      (let [alldiff-doms (to_var_block grid index)]
       (if (> (count alldiff-doms) 0)
         (do (loop [s alldiff-doms,best2 (first alldiff-doms)]
              (if (seq s)
                (if (< (count (val (first s))) (count (val best2)))
                  (recur (rest s) (first s))
                  (recur (rest s) best2))
                (def best2 best2)))
             (recur (inc index) index best2))
        (recur (inc index) myindex best)))
     [myindex best])))





(defn fix-value [grid  index var val]
  (let [var-num (manuel-parse (subs (str var) 2))]
   (let [offset-y (inc (int (/ (dec var-num) 3))) , y (* (int (/ (dec index) 3)) 3), offset-x (inc (int (mod (dec var-num) 3))) ,x (* (int (mod (dec index) 3)) 3)]
    (g/change-cell grid (+ x offset-x) (+ y offset-y) (g/mk-cell val)))))


(defn solver-cpx [grid]
  (loop [mygrid grid,finish (cfl/grid-resolu? grid),fixed true]
    (if-not finish
      (if fixed
        (let [[grid' fixed'] (solve-once mygrid)]
          (if (nil? grid')
            nil
            (recur grid' (cfl/grid-resolu? grid') fixed')))
        (let [[index doms] (strat-best mygrid)]
          (loop [s (second doms)]
            (if (seq s)
              (let [newgrid (solver-cpx (fix-value mygrid index (first doms) (first s)))]
               (if (nil? newgrid)
                 (recur (rest s))
                 newgrid))
             nil))))
      mygrid)))


(defn random-fix [grid]
  (let [
    x (inc (rand-int 9))
    y (inc (rand-int 9))
    value (inc (rand-int 9))]
      (g/change-cell grid x y (g/mk-cell value))))

(defn random-clear [grid]
  (let [
      x (inc (rand-int 9))
      y (inc (rand-int 9))]
        (g/change-cell grid x y (g/mk-cell))))

(defn nombre-solutions
"on ne calcule pas vraiment le nombre de solutions mais si on a plus de 2 on arrete de calculer"
   [grid]
  (loop [mygrid grid,finish (cfl/grid-resolu? grid),fixed true]
    (if-not finish
      (if fixed
        (let [[grid' fixed'] (solve-once mygrid)]
          (if (nil? grid')
            0
            (recur grid' (cfl/grid-resolu? grid') fixed')))
        (let [[index doms] (strat-best mygrid)]
          (loop [s (second doms),solutions 0]
            (if (seq s)
              (if (< solutions 2)
                  (recur (rest s) (+ solutions (nombre-solutions (fix-value mygrid index (first doms) (first s)))))
                solutions)
             solutions))))
      1)))

(defn one-solution? [grid]
  (= 1 (nombre-solutions grid)))

  (def emptygrid
    [[;; row 1
    [(g/mk-cell ) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell ) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell ) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell ) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell ) (g/mk-cell) (g/mk-cell)] ],
    [;; row 2
    [(g/mk-cell) (g/mk-cell ) (g/mk-cell)
    (g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell ) (g/mk-cell)
    (g/mk-cell ) (g/mk-cell ) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell ) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell ) (g/mk-cell )]],
    [;; row 3
    [(g/mk-cell) (g/mk-cell ) (g/mk-cell)
    (g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell ) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
    (g/mk-cell ) (g/mk-cell) (g/mk-cell)
    (g/mk-cell) (g/mk-cell ) (g/mk-cell)]
    [(g/mk-cell ) (g/mk-cell ) (g/mk-cell)
    (g/mk-cell) (g/mk-cell ) (g/mk-cell)
    (g/mk-cell ) (g/mk-cell ) (g/mk-cell)]]])
    
(defn generate-grid []
  (loop [mygrid (solver-cpx (random-fix emptygrid)), chance 0];;on commence avec une grille pleine correcte
    (if (< chance 3)
      (let [newgrid (random-clear mygrid)]
      (if (one-solution? newgrid)
        (recur newgrid chance)
        (recur mygrid (inc chance))))
        mygrid)))



(defn solve
  "Solve the sudoku `grid` by returing a full solved grid,
 or `nil` if the solver fails."
  [grid]
  (solver-cpx grid))

(defn generate [grid]
  (generate-grid))
