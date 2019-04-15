(ns mrsudoku.model.solver
  (:require [cljs.test :refer-macros [deftest testing is are]]))


(defn augment
  "take a graph, a start summit, a set of visited summits and a match and return a flag indicated if the augment succeed or not"
   [graph src visited match]
  (loop [dests (get graph src),visited visited]
    (if (seq dests)
      (if-let [old-src (get match (first dests))]
       (let [[found,visited',match'] (augment graph old-src (conj visited (first dests)) match)]
        (if found
          [true ,visited',(assoc match' (first dests) src)]
          ;;found==false
          (recur (rest dests) visited')))
      ;;no match
      [true,(conj visited (first dests)),(assoc match (first dests) src)])
      [false,visited,match])))

(deftest augment_tests
(is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x1 #{} {}) [true,#{1},{1 :x1}]))
(is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x2 #{1} {1 :x1}) [true #{1 2} {1 :x1, 2 :x2}]))
(is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x3 #{1 2} {1 :x1, 2 :x2}) [true #{1 2 4} {1 :x1, 2 :x2,4 :x3}])))

;;essential function
(defn max-matching [graph]
  (loop [summits (keys graph),visited #{},match {}]
    (if (seq summits)
      (let [[found,visited',match'] (augment graph (first summits) visited match)]
        (recur (rest summits) visited' match'))
    match)))

(deftest match-matching_tests
  (is (= (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}}) {1 :x1, 2 :x2,4 :x3} )))
;;a confirmer...
(comment (defn dfs-pre
  ([graph vert f init] (first (dfs-pre graph vert f init #{})))
  ([graph vert f init visited] (if (visited vert) [init visited] (reduce (fn [[res,visited] v] (if (visited v) [res,visited] (dfs-pre graph v f (f res v) (conj visited v))))
  [(f init vert),#{vert}] (get graph vert))))))

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
    (is (= (inv-edges :A #{:B :C :D}) {:D #{:A}, :B #{:A}, :C #{:A}})))
;;essential function
  (defn transpose
    "transpose a graph..."
     [graph]
    (loop [ks (keys graph),res {}]
      (if (seq ks)
        (recur (rest ks) (merge-edges res (inv-edges (first ks) ((first ks) graph))))
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



(defn solve
  "Solve the sudoku `grid` by returing a full solved grid,
 or `nil` if the solver fails."
  [grid]
  ;; A compléter
  nil)
