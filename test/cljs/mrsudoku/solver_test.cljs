(ns mrsudoku.solver-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [mrsudoku.model.grid :as g]
            [mrsudoku.model.conflict :as cfl]
            [mrsudoku.model.solver :refer [to_var_block
                                             augment
                                             max-matching
                                             complete-matching?
                                             graph-with-matching
                                             doms-from-sccomp
                                             doms-from-scc
                                             dfs
                                             dfs-post
                                             dfs-stack
                                             merge-edges
                                             sinks
                                             inv-edges
                                             transpose
                                             compute-scc
                                             isolated-values
                                             values-known-by
                                             add-value
                                             access
                                             alldiff
                                             strat-first
                                             strat-best
                                             nombre-solutions
                                             one-solution?]]))


(def ^:private sudoku-grid @#'g/sudoku-grid)
(def alldiff-doms-td {:v1 #{1 3 2} :v2 #{1 2 4 5} :v3 #{4 6 5} :v4 #{4 5 6} :v5 #{4 5 6}})
(def mygraph {:A #{:F :B :C}, :B #{:C}, :C #{:D}, :D #{:E} :E #{:C}, :F #{:H :G}, :G #{:H :I}, :H #{:F :I}})
(def scc1 (compute-scc (graph-with-matching alldiff-doms-td (max-matching alldiff-doms-td))))
;;quelque grilles
(def hardgrid
  [[;; row 1
    [(g/mk-cell 8) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell) (g/mk-cell 3)
     (g/mk-cell) (g/mk-cell 7) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell 6) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell 9) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell 2) (g/mk-cell) (g/mk-cell)] ],
   [;; row 2
    [(g/mk-cell) (g/mk-cell 5) (g/mk-cell)
     (g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell 7)
     (g/mk-cell) (g/mk-cell 4) (g/mk-cell 5)
     (g/mk-cell 1) (g/mk-cell ) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell 7) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell 3) (g/mk-cell )]],
   [;; row 3
    [(g/mk-cell) (g/mk-cell ) (g/mk-cell 1)
      (g/mk-cell) (g/mk-cell) (g/mk-cell 8)
     (g/mk-cell) (g/mk-cell 9) (g/mk-cell)]
    [(g/mk-cell) (g/mk-cell) (g/mk-cell)
     (g/mk-cell 5) (g/mk-cell) (g/mk-cell)
     (g/mk-cell) (g/mk-cell ) (g/mk-cell)]
    [(g/mk-cell ) (g/mk-cell 6) (g/mk-cell 8)
     (g/mk-cell) (g/mk-cell 1) (g/mk-cell)
     (g/mk-cell 4) (g/mk-cell ) (g/mk-cell)]]])

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

(deftest to_var_block_test
  (is (= (to_var_block sudoku-grid 1) {:v3 #{1 2 4}, :v5 #{2 4 7}, :v6 #{2 4 7}, :v7 #{1 2}})
    (= (to_var_block sudoku-grid 9) {:v3 #{4}, :v4 #{3 6}, :v5 #{3}, :v7 #{1 3 4 6}})))

(deftest augment_tests
  (is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x1 #{} {}) [true,#{1},{1 :x1}]))
  (is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x2 #{1} {1 :x1} ) [true #{1 2} {1 :x1, 2 :x2}]))
  (is (= (augment {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} :x3 #{1 2} {1 :x1, 2 :x2}) [true #{1 2 4} {1 :x1, 2 :x2,4 :x3}])))

(deftest match-matching_tests
  (is (= (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}}) {1 :x1, 2 :x2,4 :x3})))

(deftest complete-matching?_test
  (is (= (complete-matching? (into #{} (keys {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}})) (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}})) true))
  (is (= (complete-matching? (into #{} (keys {:x1 #{1,4,43}, :x2 #{2}, :x3 #{2}})) (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{2}})) false)))

(deftest graph-with-matching_test
  (is (= (graph-with-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}} (max-matching {:x1 #{1,4,43}, :x2 #{2}, :x3 #{4}})) {:x1 #{4 43}, :x2 #{}, :x3 #{}, 1 #{:x1}, 2 #{:x2}, 4 #{:x3}}))
  (is (= (graph-with-matching alldiff-doms-td (max-matching alldiff-doms-td)) {:v2 #{4 2 5}, 1 #{:v2}, :v5 #{6 5}, :v1 #{1 2}, 4 #{:v5}, 6 #{:v4}, 3 #{:v1}, :v4 #{4 5}, :v3 #{4 6}, 5 #{:v3}})))

(deftest doms-from-sccomp_test
  (is (= (doms-from-sccomp (into #{} (keys alldiff-doms-td)) #{:v5 4 6 :v4 :v3 5}) {:v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}}))
  (is (= (doms-from-sccomp (into #{} (keys alldiff-doms-td)) #{4}) {})))

(deftest doms-from-scc_test
  (is (= (doms-from-scc (into #{} (keys alldiff-doms-td)) scc1) {:v1 #{}, :v2 #{}, :v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}})))

(deftest dfs_test
  (is (= (dfs mygraph :A conj #{}) #{:A :B :C :D :E :F :G :H :I})))

(deftest dfs-post_test
  (is (= (dfs-post mygraph :A conj ()) '(:A :B :F :G :H :I :C :D :E))))

(deftest dfs-stack_test
  (is (= (dfs-stack mygraph) '(:A :B :C :D :E :F :G :H :I))))

(deftest merge-edges_test
  (is (= (merge-edges {:B #{:A}, :C #{:A}} {:C #{:B}}) {:B #{:A}, :C #{:A :B}})))

(deftest sinks_test
  (is (= mygraph (sinks mygraph :A))))

(deftest inv-edges_test
  (is (= (inv-edges :A #{:B :C :D}) {:D #{:A}, :B #{:A}, :C #{:A}}))
  (is (= (inv-edges :A #{}) {})))

(deftest transpose_test
  (is (= (transpose mygraph) {:A #{}, :B #{:A}, :C #{:A :B :E}, :D #{:C}, :E #{:D}, :F #{:A :H}, :G #{:F}, :H #{:F :G}, :I #{:G :H}})))

(deftest compute-scc_test
  (is (= (compute-scc mygraph) [#{:A} #{:B} #{:C :D :E} #{:F :G :H} #{:I}])))

(deftest isolated-values_test
  (is (=(isolated-values (into #{} (keys alldiff-doms-td)) scc1) #{1 2 3})))

(deftest values-known-by_test
  (is (= (values-known-by alldiff-doms-td 1) #{:v1 :v2}))
  (is (= (values-known-by alldiff-doms-td 4) #{:v2 :v3 :v4 :v5})))

(deftest access_test
  (is (= (access alldiff-doms-td scc1) {:v1 #{1 3 2}, :v2 #{1 2}, :v5 #{4 6 5}, :v4 #{4 6 5}, :v3 #{4 6 5}})))

(deftest alldiff_test
  (is (= (alldiff alldiff-doms-td) {:v1 #{1 2 3} :v2 #{1 2} :v3 #{4 6 5} :v4 #{4 5 6} :v5 #{4 5 6}})))

(deftest strat-first_test
  (is (= (first (strat-first sudoku-grid)) 1));;exemple [1 [:v5 #{1 2 4 7}]]
  (is (= (first (strat-first hardgrid)) 1));;exemple [1 [:v2 #{1 4 6 2}]]
  (= (second (second (strat-first emptygrid))) (into #{} (take 10 (range 1 10))))
  )

(deftest strat-best_test
  (is (= (strat-best sudoku-grid) [9 [:v3 #{4}]]));;ATTENTION il peu avoir un autre best car first sur un ensemble...
  (is (= (strat-best hardgrid) [9 [:v4 #{3 9}]])) ;;ATTENTION il peu avoir un autre best car first sur un ensemble...
  (is (= (second (second (strat-best emptygrid))) (into #{} (take 10 (range 1 10))))))

(deftest nombre-solutions_test
  (is (= (nombre-solutions sudoku-grid) 1))
  (is (= (nombre-solutions hardgrid) 1))
  (is (> (nombre-solutions emptygrid) 1))
  )

(deftest one-solution?_test
  (is (= (one-solution? sudoku-grid) true))
  (is (= (one-solution? hardgrid) true))
  (is (= (one-solution? emptygrid) false)))
