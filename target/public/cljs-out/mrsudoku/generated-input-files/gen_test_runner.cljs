(ns figwheel.main.generated.mrsudoku-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [mrsudoku.model.solver] [mrsudoku.grid-test] [mrsudoku.conflict-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote mrsudoku.model.solver) (quote mrsudoku.grid-test) (quote mrsudoku.conflict-test))