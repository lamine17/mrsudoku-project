// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.solver_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mrsudoku.model.grid');
goog.require('mrsudoku.model.conflict');
goog.require('mrsudoku.model.solver');
mrsudoku.solver_test.sudoku_grid = cljs.core.deref.call(null,new cljs.core.Var(function(){return mrsudoku.model.grid.sudoku_grid;},new cljs.core.Symbol("mrsudoku.model.grid","sudoku-grid","mrsudoku.model.grid/sudoku-grid",-1361198756,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"mrsudoku.model.grid","mrsudoku.model.grid",-823520357,null),new cljs.core.Symbol(null,"sudoku-grid","sudoku-grid",-1763333319,null),"src/cljs/mrsudoku/model/grid.cljs",(27),(1),(16),(16),cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.grid.sudoku_grid)?mrsudoku.model.grid.sudoku_grid.cljs$lang$test:null)])));
mrsudoku.solver_test.alldiff_doms_td = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v1","v1",513124261),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"v2","v2",235023456),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(2),null,(5),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null);
mrsudoku.solver_test.mygraph = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"D","D",-8015893),null], null), null),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"F","F",-1115543258),null], null), null)], null);

//# sourceMappingURL=solver_test.js.map