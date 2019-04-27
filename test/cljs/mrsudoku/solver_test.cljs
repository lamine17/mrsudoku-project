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
                                             isolated-values
                                             values-known-by
                                             add-value
                                             access
                                             alldiff
                                             dfs-post
                                             dfs-stack
                                             merge-edges
                                             sinks
                                             inv-edges
                                             transpose
                                             compute-scc]]))
                                             


(def ^:private sudoku-grid @#'g/sudoku-grid)
(def alldiff-doms-td {:v1 #{1 3 2} :v2 #{1 2 4 5} :v3 #{4 6 5} :v4 #{4 5 6} :v5 #{4 5 6}})
(def mygraph {:A #{:F :B :C}, :B #{:C}, :C #{:D}, :D #{:E} :E #{:C}, :F #{:H :G}, :G #{:H :I}, :H #{:F :I}})
