(ns mrsudoku.model.solver
  (:require [cljs.test :refer-macros [deftest testing is are]]
            [mrsudoku.model.grid :as g]
            [mrsudoku.model.conflict :as cfl]))

;;main: to_var pour un block; puis mac-matching sur le retour
;;puis sur la nouvelle grille obtenue on fait un nouveau to_var sur le block suivant
;;etc.

(defn var_block [grid num]
  (let [pos #{1 2 3 4 5 6 7 8 9}
        block (cfl/values (g/block grid num))]
   (loop [b (g/block grid num),index 1,res {}]
    (if (seq b)
      (if-not (g/cell-value (first b))
        (recur
          (rest b)
          (inc index)
          (assoc res (keyword (str "v" index))
           (clojure.set/difference pos block)))
       (recur (rest b) (inc index) res))
      res))))


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


(def grid
  [[;; row 1
    [(g/mk-cell 5) (g/mk-cell 3) (g/mk-cell)
     (g/mk-cell 6) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell 9) (g/mk-cell 8)]
    [(g/mk-cell) (g/mk-cell 7) (g/mk-cell)
     (g/mk-cell 1) (g/mk-cell 9) (g/mk-cell 5)
     (g/mk-cell) (g/mk-cell) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell 6) (g/mk-cell)] ],
   [;; row 2
    [(g/mk-cell 8) (g/mk-cell) (g/mk-cell)
     (g/mk-cell 4) (g/mk-cell) (g/mk-cell)
     (g/mk-cell 7) (g/mk-cell) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell 6) (g/mk-cell)
     (g/mk-cell 8) (g/mk-cell) (g/mk-cell 3)
     (g/mk-cell) (g/mk-cell 2) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell 3)
     (g/mk-cell) (g/mk-cell) (g/mk-cell 1)
     (g/mk-cell) (g/mk-cell) (g/mk-cell 6)]],
   [;; row 3
    [(g/mk-cell) (g/mk-cell 6) (g/mk-cell)
      (g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell 4) (g/mk-cell 1) (g/mk-cell 9)
     (g/mk-cell) (g/mk-cell 8) (g/mk-cell)]
    [(g/mk-cell 2) (g/mk-cell 8) (g/mk-cell)
     (g/mk-cell) (g/mk-cell) (g/mk-cell 5)
     (g/mk-cell) (g/mk-cell 7) (g/mk-cell 9)]]])
(count (cfl/values (g/block grid 1)))
;;A ecrire fonction de parcourt des dimensions (block - ligne - colonne)
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


(deftest augment_tests
 (is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x1 #{} {}) [true,#{1},{1 :x1}]))
 (is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x2 #{1} {1 :x1} ) [true #{1 2} {1 :x1, 2 :x2}]))
 (is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x3 #{1 2} {1 :x1, 2 :x2}) [true #{1 2 4} {1 :x1, 2 :x2,4 :x3}])))

;;essential function
(defn max-matching [graph]
  (loop [summits (keys graph),visited #{},match {}]
    (if (seq summits)
      (let [[found,visited',match'] (augment graph (first summits) visited match)]
        (recur (rest summits) visited' match'))
     match)))



(deftest match-matching_tests
  (is (= (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}}) {1 :x1, 2 :x2,4 :x3})))
;;a confirmer...
(comment (defn dfs-pre
          ([graph vert f init] (first (dfs-pre graph vert f init #{})))
          ([graph vert f init visited] (if (visited vert) [init visited] (reduce (fn [[res,visited] v] (if (visited v) [res,visited] (dfs-pre graph v f (f res v) (conj visited v))))
                                                                          [(f init vert),#{vert}] (get graph vert))))))

(defn complete-matching? [vars match]
  (= (count vars) (count match)))

(deftest complete-matching?_test
  (is (= (complete-matching? (into #{} (keys {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}})) (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}})) true))
  (is (= (complete-matching? (into #{} (keys {:x1 #{1,4,43}, :x2 #{2}, :x3 #{2}})) (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{2}})) false)))

(defn graph-with-matching [graph match]
  (reduce (fn [mgraph [src dest]]
           (-> mgraph (g/add-vertex src)
                      (g/add-edge src dest)
                      (g/remove-edge dest src))) graph match))
;;(def alldiff-doms-td {:v1 #{1} :v2 #{2} :v3 #{5} :v4 #{4} :v5 #{6}})
(def alldiff-doms-td {:v1 #{1 3 2} :v2 #{1 2 4 5} :v3 #{4 6 5} :v4 #{4 5 6} :v5 #{4 5 6}})
(deftest graph-with-matching_test
  (is (= (graph-with-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}})) {:x1 #{4 43}, :x2 #{}, :x3 #{}, 1 #{:x1}, 2 #{:x2}, 4 #{:x3}}))
  (is (= (graph-with-matching alldiff-doms-td (max-matching alldiff-doms-td)) {:v2 #{4 2 5}, 1 #{:v2}, :v5 #{6 5}, :v1 #{1 2}, 4 #{:v5}, 6 #{:v4}, 3 #{:v1}, :v4 #{4 5}, :v3 #{4 6}, 5 #{:v3}})));;ATTENTION C'EST FAUX

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

(deftest doms-from-sccomp_test
  (is (= (doms-from-sccomp (into #{} (keys alldiff-doms-td)) #{:v5 4 6 :v4 :v3 5}) {:v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}}))
  (is (= (doms-from-sccomp (into #{} (keys alldiff-doms-td)) #{4}) {})))

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

(def mygraph {:A #{:F :B :C}, :B #{:C}, :C #{:D}, :D #{:E} :E #{:C}, :F #{:H :G}, :G #{:H :I}, :H #{:F :I}})

(deftest dfs_test
  (is (= (dfs mygraph :A conj #{}) #{:A :B :C :D :E :F :G :H :I})))

(defn dfs-post
  ([graph vert f init] (first (dfs-post graph vert f init #{})))
  ([graph vert f init visited] (if (visited vert)
                                [init visited]
                                (loop [verts (get graph vert), res init,visited (conj visited vert)]
                                 (if (seq verts)
                                  (let [[res',visited'] (dfs-post graph (first verts) f res visited)] (recur (rest verts) res' visited'))
              ;;no more child
                                  [(f res vert) visited])))))

(deftest dfs-post_test
  (is (= (dfs-post mygraph :A conj ()) '(:A :B :F :G :H :I :C :D :E))))

  ;;essential function
(defn dfs-stack [graph]
  (loop [verts (keys graph),stack (),visited #{}]
    (if (seq verts)
     (let [[stack',visited'] (dfs-post graph (first verts) conj stack visited)]
      (recur (rest verts) stack' visited'))
    ;;no more verts
     stack)))

(deftest dfs-stack_test
  (is (= (dfs-stack mygraph) '(:A :B :C :D :E :F :G :H :I))))

(defn merge-edges [edges1 edges2]
  (loop [s edges2,m edges1]
    (if (seq s)
     (let [[k,v2] (first s)]
      (if-let [v1 (get m k)]
       (recur (rest s) (assoc m k (clojure.set/union v1 v2)))
       (recur (rest s) (assoc m k v2))))
     m)))

(deftest merge-edges_test
  (is (= (merge-edges {:B #{:A}, :C #{:A}} {:C #{:B}}) {:B #{:A}, :C #{:A :B}})))

(defn sinks [graph verts]
  (reduce (fn [ngraph vert] (if (contains? ngraph vert) ngraph (assoc ngraph vert #{}))) graph verts))

(deftest sinks_test
  (is (= mygraph (sinks mygraph :A))))

(defn inv-edges [src dests]
  (zipmap dests (repeat #{src})))

(deftest inv-edges_test
  (is (= (inv-edges :A #{:B :C :D}) {:D #{:A}, :B #{:A}, :C #{:A}}))
  (is (= (inv-edges :A #{}) {})))
    ;;essential function

(defn transpose
  "transpose a graph..."
  [graph]
  (loop [ks (keys graph),res {}]
    (if (seq ks)
     (recur (rest ks) (merge-edges res (inv-edges (first ks) (get graph (first ks)))))
     (sinks res (keys graph)))))

(deftest transpose_test
  (is (= (transpose mygraph) {:A #{}, :B #{:A}, :C #{:A :B :E}, :D #{:C}, :E #{:D}, :F #{:A :H}, :G #{:F}, :H #{:F :G}, :I #{:G :H}})))

(defn compute-scc [graph]
  (let [stack (dfs-stack graph) t-graph (transpose graph)]
   (loop [s stack,visited #{},res []]
     (if (seq s)
      (if (visited (first s))
       (recur (rest s) visited res)
       (let [[comp visited'] (dfs-post t-graph (first s) conj #{} visited)]
         (recur (rest s) visited' (conj res comp))))
      res))))

(deftest compute-scc_test
  (is (= (compute-scc mygraph) [#{:A} #{:B} #{:C :D :E} #{:F :G :H} #{:I}])))


(compute-scc (to_var_block grid 3))
;;(deftest doms-from-scc_test
;;  (def scc1 (compute-scc (graph-with-matching alldiff-doms-td (max-matching alldiff-doms-td))))
;;  (is (= (doms-from-scc (into #{} (keys alldiff-doms-td)) scc1) {:v1 #{}, :v2 #{}, :v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}})))


;;(doms-from-scc (into #{} (keys alldiff-doms-td)) scc1)

(defn isolated-values [variables scc]
  (into #{} (map first (filter #(and (= (count %) 1) (not (variables (first %))))scc))))
;;(deftest isolated-values_test
  ;;(is (=(isolated-values (into #{} (keys alldiff-doms-td)) scc1) #{1 2 3})))

(defn values-known-by [doms value]
  (reduce (fn [res [v values]]
           (if (contains? values value)
            (conj res v)
            res)) #{} doms))

(deftest values-known-by_test
  (is (= (values-known-by alldiff-doms-td 1) #{:v1 :v2}))
  (is (= (values-known-by alldiff-doms-td 4) #{:v2 :v3 :v4 :v5})))

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
;;(deftest access_test
  ;;(is (= (access alldiff-doms-td scc1) {:v1 #{1 3 2}, :v2 #{1 2}, :v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}})))


(defn alldiff
  "simplify the 'doms' for the all-different constraint,returns nil if not satisfiable"
  [doms]
  (let [match (max-matching doms)]
   (if (complete-matching? doms match)
    (let [scc (compute-scc (graph-with-matching doms match))
          fg (println "scc =" scc)]
     (access doms scc))
    ;;incomlet
    nil)))

(deftest alldiff_test
  (is (= (alldiff alldiff-doms-td) {:v1 #{1 2 3} :v2 #{1 2} :v3 #{4 6 5} :v4 #{4 5 6} :v5 #{4 5 6}})))



(defn solve1 [grid]
  (max-matching (to_var_block grid 1))
  (max-matching (to_var_block grid 8))
  (max-matching (to_var_block grid 3))
  (first (val (first (alldiff (to_var_block grid 1)))))
  (alldiff (to_var_block grid 2))
  (alldiff (to_var_block grid 3))
 (alldiff (to_var_block grid 4)))
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
(defn fix-singleton [grid index doms]
          (loop [s doms,mygrid grid]
            (if (seq s)
             (if (= (count (val (first s))) 1)
               (let [var-num (manuel-parse (subs (str (key (first s))) 2))]
                (let [offset-y (inc (int (/ (dec var-num) 3))) , y (* (int (/ (dec index) 3)) 3), offset-x (inc (int (mod (dec var-num) 3))) ,x (* (int (mod (dec index) 3)) 3)]
                 (println "x " (+ x offset-x) " y " (+ y offset-y) " val " (first (val (first s))))
                 (recur (rest s) (g/change-cell mygrid (+ x offset-x) (+ y offset-y) (g/mk-cell (first (val (first s))))))))
               ;;pas singleton
              (recur (rest s) mygrid))
             mygrid)))

(defn solver [grid]
          (loop [mygrid grid,index 1,finish (cfl/grid-resolu? grid)]
           (if-not finish
             (let [alldiff-doms (alldiff (to_var_block mygrid index))]
              (if alldiff-doms
                (recur (fix-singleton mygrid index alldiff-doms) (inc (mod index 9)) (cfl/grid-resolu? mygrid))
                nil))
             mygrid)))
;;(fix-singleton grid 9 (to_var_block grid 9))

(defn solve
  "Solve the sudoku `grid` by returing a full solved grid,
 or `nil` if the solver fails."
  [grid]
  (solver grid)
 )
