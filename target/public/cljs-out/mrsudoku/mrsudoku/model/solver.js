// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.solver');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mrsudoku.model.grid');
goog.require('mrsudoku.model.conflict');
mrsudoku.model.solver.var_block = (function mrsudoku$model$solver$var_block(grid,num){
var pos = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
var block = mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.block.call(null,grid,num));
var b = mrsudoku.model.grid.block.call(null,grid,num);
var index = (1);
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,b)){
if(cljs.core.not.call(null,mrsudoku.model.grid.cell_value.call(null,cljs.core.first.call(null,b)))){
var G__10917 = cljs.core.rest.call(null,b);
var G__10918 = (index + (1));
var G__10919 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')),clojure.set.difference.call(null,pos,block));
b = G__10917;
index = G__10918;
res = G__10919;
continue;
} else {
var G__10920 = cljs.core.rest.call(null,b);
var G__10921 = (index + (1));
var G__10922 = res;
b = G__10920;
index = G__10921;
res = G__10922;
continue;
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.to_var_block = (function mrsudoku$model$solver$to_var_block(grid,num){
var collig = new cljs.core.PersistentArrayMap(null, 6, [(1),mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.row.call(null,grid,(((((num - (1)) / (3)) | (0)) * (3)) + (1)))),(2),mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.row.call(null,grid,(((((num - (1)) / (3)) | (0)) * (3)) + (2)))),(3),mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.row.call(null,grid,(((((num - (1)) / (3)) | (0)) * (3)) + (3)))),(4),mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.col.call(null,grid,((cljs.core.mod.call(null,(num - (1)),(3)) * (3)) + (1)))),(5),mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.col.call(null,grid,((cljs.core.mod.call(null,(num - (1)),(3)) * (3)) + (2)))),(6),mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.col.call(null,grid,((cljs.core.mod.call(null,(num - (1)),(3)) * (3)) + (3))))], null);
var pos = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [(7),null,(1),null,(4),null,(6),null,(3),null,(2),null,(9),null,(5),null,(8),null], null), null);
var block = mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.block.call(null,grid,num));
var b = mrsudoku.model.grid.block.call(null,grid,num);
var index = (1);
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,b)){
if(cljs.core.not.call(null,mrsudoku.model.grid.cell_value.call(null,cljs.core.first.call(null,b)))){
var G__10923 = cljs.core.rest.call(null,b);
var G__10924 = (index + (1));
var G__10925 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')),clojure.set.difference.call(null,pos,clojure.set.union.call(null,cljs.core.get.call(null,collig,((((index - (1)) / (3)) | (0)) + (1))),cljs.core.get.call(null,collig,(cljs.core.mod.call(null,(index - (1)),(3)) + (4))),block)));
b = G__10923;
index = G__10924;
res = G__10925;
continue;
} else {
var G__10926 = cljs.core.rest.call(null,b);
var G__10927 = (index + (1));
var G__10928 = res;
b = G__10926;
index = G__10927;
res = G__10928;
continue;
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.grid = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null,(8))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(4)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(2)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(4)),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(2)),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null,(9))], null)], null)], null);
cljs.core.count.call(null,mrsudoku.model.conflict.values.call(null,mrsudoku.model.grid.block.call(null,mrsudoku.model.solver.grid,(1))));
/**
 * take a graph, a start summit, a set of visited summits and a match and return a flag indicated if the augment succeed or not
 */
mrsudoku.model.solver.augment = (function mrsudoku$model$solver$augment(var_args){
var G__10930 = arguments.length;
switch (G__10930) {
case 4:
return mrsudoku.model.solver.augment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mrsudoku.model.solver.augment.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.solver.augment.cljs$core$IFn$_invoke$arity$4 = (function (graph,src,visited,match){
return mrsudoku.model.solver.augment.call(null,graph,src,visited,match,cljs.core.PersistentHashSet.EMPTY);
});

mrsudoku.model.solver.augment.cljs$core$IFn$_invoke$arity$5 = (function (graph,src,visited,match,just_visited){
var dests = cljs.core.get.call(null,graph,src);
var visited__$1 = visited;
while(true){
if(cljs.core.seq.call(null,dests)){
if(cljs.core.truth_(just_visited.call(null,cljs.core.first.call(null,dests)))){
var G__10935 = cljs.core.rest.call(null,dests);
var G__10936 = visited__$1;
dests = G__10935;
visited__$1 = G__10936;
continue;
} else {
var temp__5718__auto__ = cljs.core.get.call(null,match,cljs.core.first.call(null,dests));
if(cljs.core.truth_(temp__5718__auto__)){
var old_src = temp__5718__auto__;
var vec__10931 = mrsudoku.model.solver.augment.call(null,graph,old_src,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),match,cljs.core.conj.call(null,just_visited,cljs.core.first.call(null,dests)));
var found = cljs.core.nth.call(null,vec__10931,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10931,(1),null);
var match_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10931,(2),null);
if(cljs.core.truth_(found)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,visited_SINGLEQUOTE_,cljs.core.assoc.call(null,match_SINGLEQUOTE_,cljs.core.first.call(null,dests),src)], null);
} else {
var G__10937 = cljs.core.rest.call(null,dests);
var G__10938 = visited_SINGLEQUOTE_;
dests = G__10937;
visited__$1 = G__10938;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),cljs.core.assoc.call(null,match,cljs.core.first.call(null,dests),src)], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,visited__$1,match], null);
}
break;
}
});

mrsudoku.model.solver.augment.cljs$lang$maxFixedArity = 5;

mrsudoku.model.solver.augment_tests = (function mrsudoku$model$solver$augment_tests(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.augment_tests.cljs$lang$var);
});
mrsudoku.model.solver.augment_tests.cljs$lang$test = (function (){
try{var values__8646__auto___10942 = (new cljs.core.List(null,mrsudoku.model.solver.augment.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247)], null)], null),null,(1),null)),(2),null));
var result__8647__auto___10943 = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto___10942);
if(cljs.core.truth_(result__8647__auto___10943)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto___10942),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto___10942),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10939){var t__8691__auto___10944 = e10939;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto___10944,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8646__auto___10945 = (new cljs.core.List(null,mrsudoku.model.solver.augment.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247)], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475)], null)], null),null,(1),null)),(2),null));
var result__8647__auto___10946 = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto___10945);
if(cljs.core.truth_(result__8647__auto___10946)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto___10945),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto___10945),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10940){var t__8691__auto___10947 = e10940;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),new cljs.core.PersistentArrayMap(null, 1, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto___10947,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.augment.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475)], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(4),new cljs.core.Keyword(null,"x3","x3",-1314178287)], null)], null),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(4),new cljs.core.Keyword(null,"x3","x3",-1314178287)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(4),new cljs.core.Keyword(null,"x3","x3",-1314178287)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e10941){var t__8691__auto__ = e10941;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"augment","augment",-1384158176,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(2),null], null), null),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(4),new cljs.core.Keyword(null,"x3","x3",-1314178287)], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.augment_tests.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.augment_tests;},new cljs.core.Symbol("mrsudoku.model.solver","augment_tests","mrsudoku.model.solver/augment_tests",1354684169,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"augment_tests","augment_tests",-1011346269,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",23,1,119,119,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.augment_tests)?mrsudoku.model.solver.augment_tests.cljs$lang$test:null)]));
mrsudoku.model.solver.max_matching = (function mrsudoku$model$solver$max_matching(graph){
var summits = cljs.core.keys.call(null,graph);
var visited = cljs.core.PersistentHashSet.EMPTY;
var match = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,summits)){
var vec__10948 = mrsudoku.model.solver.augment.call(null,graph,cljs.core.first.call(null,summits),visited,match);
var found = cljs.core.nth.call(null,vec__10948,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10948,(1),null);
var match_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10948,(2),null);
var G__10951 = cljs.core.rest.call(null,summits);
var G__10952 = visited_SINGLEQUOTE_;
var G__10953 = match_SINGLEQUOTE_;
summits = G__10951;
visited = G__10952;
match = G__10953;
continue;
} else {
return match;
}
break;
}
});
mrsudoku.model.solver.match_matching_tests = (function mrsudoku$model$solver$match_matching_tests(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.match_matching_tests.cljs$lang$var);
});
mrsudoku.model.solver.match_matching_tests.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.max_matching.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(4),new cljs.core.Keyword(null,"x3","x3",-1314178287)], null),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null)),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(4),new cljs.core.Keyword(null,"x3","x3",-1314178287)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null)),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(4),new cljs.core.Keyword(null,"x3","x3",-1314178287)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e10954){var t__8691__auto__ = e10954;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null)),new cljs.core.PersistentArrayMap(null, 3, [(1),new cljs.core.Keyword(null,"x1","x1",-1863922247),(2),new cljs.core.Keyword(null,"x2","x2",-1362513475),(4),new cljs.core.Keyword(null,"x3","x3",-1314178287)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.match_matching_tests.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.match_matching_tests;},new cljs.core.Symbol("mrsudoku.model.solver","match-matching_tests","mrsudoku.model.solver/match-matching_tests",-506997679,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"match-matching_tests","match-matching_tests",1993905963,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",30,1,134,134,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.match_matching_tests)?mrsudoku.model.solver.match_matching_tests.cljs$lang$test:null)]));
mrsudoku.model.solver.complete_matching_QMARK_ = (function mrsudoku$model$solver$complete_matching_QMARK_(vars,match){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,vars),cljs.core.count.call(null,match));
});
mrsudoku.model.solver.complete_matching_QMARK__test = (function mrsudoku$model$solver$complete_matching_QMARK__test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.complete_matching_QMARK__test.cljs$lang$var);
});
mrsudoku.model.solver.complete_matching_QMARK__test.cljs$lang$test = (function (){
try{var values__8646__auto___10957 = (new cljs.core.List(null,mrsudoku.model.solver.complete_matching_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),mrsudoku.model.solver.max_matching.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__8647__auto___10958 = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto___10957);
if(cljs.core.truth_(result__8647__auto___10958)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complete-matching?","complete-matching?",820823221,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto___10957),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complete-matching?","complete-matching?",820823221,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto___10957),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10955){var t__8691__auto___10959 = e10955;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complete-matching?","complete-matching?",820823221,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto___10959,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.complete_matching_QMARK_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null))),mrsudoku.model.solver.max_matching.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null))),(new cljs.core.List(null,false,null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complete-matching?","complete-matching?",820823221,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null))),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null))),false),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complete-matching?","complete-matching?",820823221,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null))),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null))),false),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e10956){var t__8691__auto__ = e10956;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"complete-matching?","complete-matching?",820823221,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null))),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null)], null))),false),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.complete_matching_QMARK__test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.complete_matching_QMARK__test;},new cljs.core.Symbol("mrsudoku.model.solver","complete-matching?_test","mrsudoku.model.solver/complete-matching?_test",-242388390,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"complete-matching?_test","complete-matching?_test",-1669024780,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",33,1,145,145,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.complete_matching_QMARK__test)?mrsudoku.model.solver.complete_matching_QMARK__test.cljs$lang$test:null)]));
mrsudoku.model.solver.graph_with_matching = (function mrsudoku$model$solver$graph_with_matching(graph,match){
return cljs.core.reduce.call(null,(function (mgraph,p__10960){
var vec__10961 = p__10960;
var src = cljs.core.nth.call(null,vec__10961,(0),null);
var dest = cljs.core.nth.call(null,vec__10961,(1),null);
return mrsudoku.model.grid.remove_edge.call(null,mrsudoku.model.grid.add_edge.call(null,mrsudoku.model.grid.add_vertex.call(null,mgraph,src),src,dest),dest,src);
}),graph,match);
});
mrsudoku.model.solver.alldiff_doms_td = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v1","v1",513124261),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"v2","v2",235023456),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(2),null,(5),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null);
mrsudoku.model.solver.graph_with_matching_test = (function mrsudoku$model$solver$graph_with_matching_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.graph_with_matching_test.cljs$lang$var);
});
mrsudoku.model.solver.graph_with_matching_test.cljs$lang$test = (function (){
try{var values__8646__auto___10966 = (new cljs.core.List(null,mrsudoku.model.solver.graph_with_matching.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),mrsudoku.model.solver.max_matching.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core.PersistentHashSet.EMPTY,(1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x1","x1",-1863922247),null], null), null),(2),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x2","x2",-1362513475),null], null), null),(4),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x3","x3",-1314178287),null], null), null)], null),null,(1),null)),(2),null));
var result__8647__auto___10967 = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto___10966);
if(cljs.core.truth_(result__8647__auto___10967)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"graph-with-matching","graph-with-matching",-1946387114,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core.PersistentHashSet.EMPTY,(1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x1","x1",-1863922247),null], null), null),(2),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x2","x2",-1362513475),null], null), null),(4),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x3","x3",-1314178287),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto___10966),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"graph-with-matching","graph-with-matching",-1946387114,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core.PersistentHashSet.EMPTY,(1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x1","x1",-1863922247),null], null), null),(2),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x2","x2",-1362513475),null], null), null),(4),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x3","x3",-1314178287),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto___10966),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10964){var t__8691__auto___10968 = e10964;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"graph-with-matching","graph-with-matching",-1946387114,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2),null], null), null),new cljs.core.Keyword(null,"x3","x3",-1314178287),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)], null))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(43),null], null), null),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core.PersistentHashSet.EMPTY,(1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x1","x1",-1863922247),null], null), null),(2),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x2","x2",-1362513475),null], null), null),(4),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x3","x3",-1314178287),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto___10968,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.graph_with_matching.call(null,mrsudoku.model.solver.alldiff_doms_td,mrsudoku.model.solver.max_matching.call(null,mrsudoku.model.solver.alldiff_doms_td)),(new cljs.core.List(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v2","v2",235023456),(1),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.Keyword(null,"v1","v1",513124261),(4),(6),(3),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.Keyword(null,"v3","v3",-372278121),(5)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(2),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v2","v2",235023456),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(6),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v5","v5",738627685),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v4","v4",1541454293),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v1","v1",513124261),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(6),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v3","v3",-372278121),null], null), null)]),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"graph-with-matching","graph-with-matching",-1946387114,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v2","v2",235023456),(1),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.Keyword(null,"v1","v1",513124261),(4),(6),(3),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.Keyword(null,"v3","v3",-372278121),(5)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(2),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v2","v2",235023456),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(6),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v5","v5",738627685),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v4","v4",1541454293),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v1","v1",513124261),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(6),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v3","v3",-372278121),null], null), null)])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"graph-with-matching","graph-with-matching",-1946387114,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v2","v2",235023456),(1),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.Keyword(null,"v1","v1",513124261),(4),(6),(3),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.Keyword(null,"v3","v3",-372278121),(5)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(2),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v2","v2",235023456),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(6),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v5","v5",738627685),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v4","v4",1541454293),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v1","v1",513124261),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(6),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v3","v3",-372278121),null], null), null)])),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e10965){var t__8691__auto__ = e10965;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"graph-with-matching","graph-with-matching",-1946387114,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),cljs.core.list(new cljs.core.Symbol(null,"max-matching","max-matching",1982198592,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v2","v2",235023456),(1),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.Keyword(null,"v1","v1",513124261),(4),(6),(3),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.Keyword(null,"v3","v3",-372278121),(5)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(2),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v2","v2",235023456),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(6),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v5","v5",738627685),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v4","v4",1541454293),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v1","v1",513124261),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(6),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v3","v3",-372278121),null], null), null)])),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.graph_with_matching_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.graph_with_matching_test;},new cljs.core.Symbol("mrsudoku.model.solver","graph-with-matching_test","mrsudoku.model.solver/graph-with-matching_test",-350838042,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"graph-with-matching_test","graph-with-matching_test",2115100936,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",34,1,156,156,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.graph_with_matching_test)?mrsudoku.model.solver.graph_with_matching_test.cljs$lang$test:null)]));
mrsudoku.model.solver.doms_from_sccomp = (function mrsudoku$model$solver$doms_from_sccomp(variables,comp){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,comp),(1))){
if(cljs.core.contains_QMARK_.call(null,variables,cljs.core.first.call(null,comp))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,comp),cljs.core.PersistentHashSet.EMPTY]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
var vars = clojure.set.select.call(null,(function (p1__10969_SHARP_){
return cljs.core.contains_QMARK_.call(null,variables,p1__10969_SHARP_);
}),comp);
var values = clojure.set.difference.call(null,comp,vars);
return cljs.core.zipmap.call(null,vars,cljs.core.repeat.call(null,values));
}
});
mrsudoku.model.solver.doms_from_scc = (function mrsudoku$model$solver$doms_from_scc(vars,scc){
var scc__$1 = scc;
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,scc__$1)){
var G__10970 = cljs.core.rest.call(null,scc__$1);
var G__10971 = cljs.core.merge.call(null,res,mrsudoku.model.solver.doms_from_sccomp.call(null,vars,cljs.core.first.call(null,scc__$1)));
scc__$1 = G__10970;
res = G__10971;
continue;
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.doms_from_sccomp_test = (function mrsudoku$model$solver$doms_from_sccomp_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.doms_from_sccomp_test.cljs$lang$var);
});
mrsudoku.model.solver.doms_from_sccomp_test.cljs$lang$test = (function (){
try{var values__8646__auto___10974 = (new cljs.core.List(null,mrsudoku.model.solver.doms_from_sccomp.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,mrsudoku.model.solver.alldiff_doms_td)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"v5","v5",738627685),null,(4),null,(6),null,new cljs.core.Keyword(null,"v4","v4",1541454293),null,new cljs.core.Keyword(null,"v3","v3",-372278121),null,(5),null], null), null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null),null,(1),null)),(2),null));
var result__8647__auto___10975 = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto___10974);
if(cljs.core.truth_(result__8647__auto___10975)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"doms-from-sccomp","doms-from-sccomp",-1764187848,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"v5","v5",738627685),null,(4),null,(6),null,new cljs.core.Keyword(null,"v4","v4",1541454293),null,new cljs.core.Keyword(null,"v3","v3",-372278121),null,(5),null], null), null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto___10974),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"doms-from-sccomp","doms-from-sccomp",-1764187848,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"v5","v5",738627685),null,(4),null,(6),null,new cljs.core.Keyword(null,"v4","v4",1541454293),null,new cljs.core.Keyword(null,"v3","v3",-372278121),null,(5),null], null), null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto___10974),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e10972){var t__8691__auto___10976 = e10972;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"doms-from-sccomp","doms-from-sccomp",-1764187848,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"v5","v5",738627685),null,(4),null,(6),null,new cljs.core.Keyword(null,"v4","v4",1541454293),null,new cljs.core.Keyword(null,"v3","v3",-372278121),null,(5),null], null), null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto___10976,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.doms_from_sccomp.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,mrsudoku.model.solver.alldiff_doms_td)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)),(new cljs.core.List(null,cljs.core.PersistentArrayMap.EMPTY,null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"doms-from-sccomp","doms-from-sccomp",-1764187848,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"doms-from-sccomp","doms-from-sccomp",-1764187848,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e10973){var t__8691__auto__ = e10973;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"doms-from-sccomp","doms-from-sccomp",-1764187848,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentHashSet.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null))),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(4),null], null), null)),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.doms_from_sccomp_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.doms_from_sccomp_test;},new cljs.core.Symbol("mrsudoku.model.solver","doms-from-sccomp_test","mrsudoku.model.solver/doms-from-sccomp_test",-2032494092,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"doms-from-sccomp_test","doms-from-sccomp_test",735271262,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",31,1,174,174,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.doms_from_sccomp_test)?mrsudoku.model.solver.doms_from_sccomp_test.cljs$lang$test:null)]));
/**
 * Depth-First Search algorithm
 */
mrsudoku.model.solver.dfs = (function mrsudoku$model$solver$dfs(var_args){
var G__10978 = arguments.length;
switch (G__10978) {
case 4:
return mrsudoku.model.solver.dfs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mrsudoku.model.solver.dfs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.solver.dfs.cljs$core$IFn$_invoke$arity$4 = (function (graph,vert,f,init){
return cljs.core.first.call(null,mrsudoku.model.solver.dfs.call(null,graph,vert,f,init,cljs.core.PersistentHashSet.EMPTY));
});

mrsudoku.model.solver.dfs.cljs$core$IFn$_invoke$arity$5 = (function (graph,vert,f,init,visited){
if(cljs.core.truth_(visited.call(null,vert))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,visited], null);
} else {
var verts = cljs.core.get.call(null,graph,vert);
var res = f.call(null,init,vert);
var visited__$1 = cljs.core.conj.call(null,visited,vert);
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__10979 = mrsudoku.model.solver.dfs.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10979,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10979,(1),null);
var G__10983 = cljs.core.rest.call(null,verts);
var G__10984 = res_SINGLEQUOTE_;
var G__10985 = visited_SINGLEQUOTE_;
verts = G__10983;
res = G__10984;
visited__$1 = G__10985;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,visited__$1], null);
}
break;
}
}
});

mrsudoku.model.solver.dfs.cljs$lang$maxFixedArity = 5;

mrsudoku.model.solver.mygraph = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"D","D",-8015893),null], null), null),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"F","F",-1115543258),null], null), null)], null);
mrsudoku.model.solver.dfs_test = (function mrsudoku$model$solver$dfs_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.dfs_test.cljs$lang$var);
});
mrsudoku.model.solver.dfs_test.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.dfs.call(null,mrsudoku.model.solver.mygraph,new cljs.core.Keyword(null,"A","A",-1688942394),cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null,new cljs.core.Keyword(null,"E","E",230849842),null,new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs","dfs",-1508720487,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null,new cljs.core.Keyword(null,"E","E",230849842),null,new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs","dfs",-1508720487,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null,new cljs.core.Keyword(null,"E","E",230849842),null,new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e10986){var t__8691__auto__ = e10986;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs","dfs",-1508720487,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null,new cljs.core.Keyword(null,"E","E",230849842),null,new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.dfs_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.dfs_test;},new cljs.core.Symbol("mrsudoku.model.solver","dfs_test","mrsudoku.model.solver/dfs_test",-2026188465,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"dfs_test","dfs_test",337744613,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",18,1,191,191,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.dfs_test)?mrsudoku.model.solver.dfs_test.cljs$lang$test:null)]));
mrsudoku.model.solver.dfs_post = (function mrsudoku$model$solver$dfs_post(var_args){
var G__10988 = arguments.length;
switch (G__10988) {
case 4:
return mrsudoku.model.solver.dfs_post.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return mrsudoku.model.solver.dfs_post.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mrsudoku.model.solver.dfs_post.cljs$core$IFn$_invoke$arity$4 = (function (graph,vert,f,init){
return cljs.core.first.call(null,mrsudoku.model.solver.dfs_post.call(null,graph,vert,f,init,cljs.core.PersistentHashSet.EMPTY));
});

mrsudoku.model.solver.dfs_post.cljs$core$IFn$_invoke$arity$5 = (function (graph,vert,f,init,visited){
if(cljs.core.truth_(visited.call(null,vert))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,visited], null);
} else {
var verts = cljs.core.get.call(null,graph,vert);
var res = init;
var visited__$1 = cljs.core.conj.call(null,visited,vert);
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__10989 = mrsudoku.model.solver.dfs_post.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10989,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10989,(1),null);
var G__10993 = cljs.core.rest.call(null,verts);
var G__10994 = res_SINGLEQUOTE_;
var G__10995 = visited_SINGLEQUOTE_;
verts = G__10993;
res = G__10994;
visited__$1 = G__10995;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,res,vert),visited__$1], null);
}
break;
}
}
});

mrsudoku.model.solver.dfs_post.cljs$lang$maxFixedArity = 5;

mrsudoku.model.solver.dfs_post_test = (function mrsudoku$model$solver$dfs_post_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.dfs_post_test.cljs$lang$var);
});
mrsudoku.model.solver.dfs_post_test.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.dfs_post.call(null,mrsudoku.model.solver.mygraph,new cljs.core.Keyword(null,"A","A",-1688942394),cljs.core.conj,cljs.core.List.EMPTY),(new cljs.core.List(null,cljs.core.list(new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"E","E",230849842)),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs-post","dfs-post",-1078481643,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"E","E",230849842)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs-post","dfs-post",-1078481643,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"E","E",230849842)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e10996){var t__8691__auto__ = e10996;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs-post","dfs-post",-1078481643,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),cljs.core.List.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"E","E",230849842)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.dfs_post_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.dfs_post_test;},new cljs.core.Symbol("mrsudoku.model.solver","dfs-post_test","mrsudoku.model.solver/dfs-post_test",1861719547,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"dfs-post_test","dfs-post_test",-1014147951,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",23,1,204,204,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.dfs_post_test)?mrsudoku.model.solver.dfs_post_test.cljs$lang$test:null)]));
mrsudoku.model.solver.dfs_stack = (function mrsudoku$model$solver$dfs_stack(graph){
var verts = cljs.core.keys.call(null,graph);
var stack = cljs.core.List.EMPTY;
var visited = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__10997 = mrsudoku.model.solver.dfs_post.call(null,graph,cljs.core.first.call(null,verts),cljs.core.conj,stack,visited);
var stack_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10997,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10997,(1),null);
var G__11000 = cljs.core.rest.call(null,verts);
var G__11001 = stack_SINGLEQUOTE_;
var G__11002 = visited_SINGLEQUOTE_;
verts = G__11000;
stack = G__11001;
visited = G__11002;
continue;
} else {
return stack;
}
break;
}
});
mrsudoku.model.solver.dfs_stack_test = (function mrsudoku$model$solver$dfs_stack_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.dfs_stack_test.cljs$lang$var);
});
mrsudoku.model.solver.dfs_stack_test.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.dfs_stack.call(null,mrsudoku.model.solver.mygraph),(new cljs.core.List(null,cljs.core.list(new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"I","I",1827140963)),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs-stack","dfs-stack",-388821643,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"I","I",1827140963)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs-stack","dfs-stack",-388821643,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"I","I",1827140963)))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e11003){var t__8691__auto__ = e11003;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"dfs-stack","dfs-stack",-388821643,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327),new cljs.core.Keyword(null,"I","I",1827140963)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.dfs_stack_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.dfs_stack_test;},new cljs.core.Symbol("mrsudoku.model.solver","dfs-stack_test","mrsudoku.model.solver/dfs-stack_test",536669316,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"dfs-stack_test","dfs-stack_test",1928735794,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",24,1,216,216,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.dfs_stack_test)?mrsudoku.model.solver.dfs_stack_test.cljs$lang$test:null)]));
mrsudoku.model.solver.merge_edges = (function mrsudoku$model$solver$merge_edges(edges1,edges2){
var s = edges2;
var m = edges1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__11004 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__11004,(0),null);
var v2 = cljs.core.nth.call(null,vec__11004,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var v1 = temp__5718__auto__;
var G__11007 = cljs.core.rest.call(null,s);
var G__11008 = cljs.core.assoc.call(null,m,k,clojure.set.union.call(null,v1,v2));
s = G__11007;
m = G__11008;
continue;
} else {
var G__11009 = cljs.core.rest.call(null,s);
var G__11010 = cljs.core.assoc.call(null,m,k,v2);
s = G__11009;
m = G__11010;
continue;
}
} else {
return m;
}
break;
}
});
mrsudoku.model.solver.merge_edges_test = (function mrsudoku$model$solver$merge_edges_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.merge_edges_test.cljs$lang$var);
});
mrsudoku.model.solver.merge_edges_test.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.merge_edges.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null)], null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null)], null),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"merge-edges","merge-edges",95594749,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"merge-edges","merge-edges",95594749,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e11011){var t__8691__auto__ = e11011;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"merge-edges","merge-edges",95594749,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.merge_edges_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.merge_edges_test;},new cljs.core.Symbol("mrsudoku.model.solver","merge-edges_test","mrsudoku.model.solver/merge-edges_test",186975340,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"merge-edges_test","merge-edges_test",-1641298794,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",26,1,228,228,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.merge_edges_test)?mrsudoku.model.solver.merge_edges_test.cljs$lang$test:null)]));
mrsudoku.model.solver.sinks = (function mrsudoku$model$solver$sinks(graph,verts){
return cljs.core.reduce.call(null,(function (ngraph,vert){
if(cljs.core.contains_QMARK_.call(null,ngraph,vert)){
return ngraph;
} else {
return cljs.core.assoc.call(null,ngraph,vert,cljs.core.PersistentHashSet.EMPTY);
}
}),graph,verts);
});
mrsudoku.model.solver.sinks_test = (function mrsudoku$model$solver$sinks_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.sinks_test.cljs$lang$var);
});
mrsudoku.model.solver.sinks_test.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.mygraph,(new cljs.core.List(null,mrsudoku.model.solver.sinks.call(null,mrsudoku.model.solver.mygraph,new cljs.core.Keyword(null,"A","A",-1688942394)),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),cljs.core.list(new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),cljs.core.list(new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e11012){var t__8691__auto__ = e11012;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),cljs.core.list(new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null),new cljs.core.Keyword(null,"A","A",-1688942394))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.sinks_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.sinks_test;},new cljs.core.Symbol("mrsudoku.model.solver","sinks_test","mrsudoku.model.solver/sinks_test",-898258799,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"sinks_test","sinks_test",1064200251,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",20,1,234,234,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.sinks_test)?mrsudoku.model.solver.sinks_test.cljs$lang$test:null)]));
mrsudoku.model.solver.inv_edges = (function mrsudoku$model$solver$inv_edges(src,dests){
return cljs.core.zipmap.call(null,dests,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([src])));
});
mrsudoku.model.solver.inv_edges_test = (function mrsudoku$model$solver$inv_edges_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.inv_edges_test.cljs$lang$var);
});
mrsudoku.model.solver.inv_edges_test.cljs$lang$test = (function (){
try{var values__8646__auto___11015 = (new cljs.core.List(null,mrsudoku.model.solver.inv_edges.call(null,new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null)], null),null,(1),null)),(2),null));
var result__8647__auto___11016 = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto___11015);
if(cljs.core.truth_(result__8647__auto___11016)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inv-edges","inv-edges",-419040004,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto___11015),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inv-edges","inv-edges",-419040004,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto___11015),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11013){var t__8691__auto___11017 = e11013;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inv-edges","inv-edges",-419040004,null),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto___11017,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.inv_edges.call(null,new cljs.core.Keyword(null,"A","A",-1688942394),cljs.core.PersistentHashSet.EMPTY),(new cljs.core.List(null,cljs.core.PersistentArrayMap.EMPTY,null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inv-edges","inv-edges",-419040004,null),new cljs.core.Keyword(null,"A","A",-1688942394),cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inv-edges","inv-edges",-419040004,null),new cljs.core.Keyword(null,"A","A",-1688942394),cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e11014){var t__8691__auto__ = e11014;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inv-edges","inv-edges",-419040004,null),new cljs.core.Keyword(null,"A","A",-1688942394),cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.inv_edges_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.inv_edges_test;},new cljs.core.Symbol("mrsudoku.model.solver","inv-edges_test","mrsudoku.model.solver/inv-edges_test",860272263,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"inv-edges_test","inv-edges_test",-1672710275,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",24,1,240,240,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.inv_edges_test)?mrsudoku.model.solver.inv_edges_test.cljs$lang$test:null)]));
/**
 * transpose a graph...
 */
mrsudoku.model.solver.transpose = (function mrsudoku$model$solver$transpose(graph){
var ks = cljs.core.keys.call(null,graph);
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,ks)){
var G__11018 = cljs.core.rest.call(null,ks);
var G__11019 = mrsudoku.model.solver.merge_edges.call(null,res,mrsudoku.model.solver.inv_edges.call(null,cljs.core.first.call(null,ks),cljs.core.get.call(null,graph,cljs.core.first.call(null,ks))));
ks = G__11018;
res = G__11019;
continue;
} else {
return mrsudoku.model.solver.sinks.call(null,res,cljs.core.keys.call(null,graph));
}
break;
}
});
mrsudoku.model.solver.transpose_test = (function mrsudoku$model$solver$transpose_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.transpose_test.cljs$lang$var);
});
mrsudoku.model.solver.transpose_test.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.transpose.call(null,mrsudoku.model.solver.mygraph),(new cljs.core.List(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"D","D",-8015893),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"F","F",-1115543258),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"G","G",-738544397),null], null), null)]),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"transpose","transpose",1165804847,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"D","D",-8015893),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"F","F",-1115543258),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"G","G",-738544397),null], null), null)])),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"transpose","transpose",1165804847,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"D","D",-8015893),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"F","F",-1115543258),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"G","G",-738544397),null], null), null)])),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e11020){var t__8691__auto__ = e11020;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"transpose","transpose",1165804847,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"H","H",-938148327)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"D","D",-8015893),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"F","F",-1115543258),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"G","G",-738544397),null], null), null)])),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.transpose_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.transpose_test;},new cljs.core.Symbol("mrsudoku.model.solver","transpose_test","mrsudoku.model.solver/transpose_test",-281060567,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"transpose_test","transpose_test",2050234947,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",24,1,253,253,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.transpose_test)?mrsudoku.model.solver.transpose_test.cljs$lang$test:null)]));
mrsudoku.model.solver.compute_scc = (function mrsudoku$model$solver$compute_scc(graph){
var stack = mrsudoku.model.solver.dfs_stack.call(null,graph);
var t_graph = mrsudoku.model.solver.transpose.call(null,graph);
var s = stack;
var visited = cljs.core.PersistentHashSet.EMPTY;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core.truth_(visited.call(null,cljs.core.first.call(null,s)))){
var G__11024 = cljs.core.rest.call(null,s);
var G__11025 = visited;
var G__11026 = res;
s = G__11024;
visited = G__11025;
res = G__11026;
continue;
} else {
var vec__11021 = mrsudoku.model.solver.dfs_post.call(null,t_graph,cljs.core.first.call(null,s),cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,visited);
var comp = cljs.core.nth.call(null,vec__11021,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11021,(1),null);
var G__11027 = cljs.core.rest.call(null,s);
var G__11028 = visited_SINGLEQUOTE_;
var G__11029 = cljs.core.conj.call(null,res,comp);
s = G__11027;
visited = G__11028;
res = G__11029;
continue;
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.compute_scc_test = (function mrsudoku$model$solver$compute_scc_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.compute_scc_test.cljs$lang$var);
});
mrsudoku.model.solver.compute_scc_test.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.compute_scc.call(null,mrsudoku.model.solver.mygraph),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"C","C",-173629587),null,new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"I","I",1827140963),null], null), null)], null),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"compute-scc","compute-scc",-1198955295,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"C","C",-173629587),null,new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"I","I",1827140963),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"compute-scc","compute-scc",-1198955295,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"C","C",-173629587),null,new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"I","I",1827140963),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e11030){var t__8691__auto__ = e11030;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"compute-scc","compute-scc",-1198955295,null),new cljs.core.Symbol(null,"mygraph","mygraph",-1948040039,null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"A","A",-1688942394),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"B","B",-1422503380),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"C","C",-173629587),null,new cljs.core.Keyword(null,"E","E",230849842),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"G","G",-738544397),null,new cljs.core.Keyword(null,"H","H",-938148327),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"I","I",1827140963),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.compute_scc_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.compute_scc_test;},new cljs.core.Symbol("mrsudoku.model.solver","compute-scc_test","mrsudoku.model.solver/compute-scc_test",842907415,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"compute-scc_test","compute-scc_test",-1489799043,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",26,1,266,266,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.compute_scc_test)?mrsudoku.model.solver.compute_scc_test.cljs$lang$test:null)]));
mrsudoku.model.solver.compute_scc.call(null,mrsudoku.model.solver.to_var_block.call(null,mrsudoku.model.solver.grid,(3)));
mrsudoku.model.solver.isolated_values = (function mrsudoku$model$solver$isolated_values(variables,scc){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__11031_SHARP_){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__11031_SHARP_),(1))) && (cljs.core.not.call(null,variables.call(null,cljs.core.first.call(null,p1__11031_SHARP_)))));
}),scc)));
});
mrsudoku.model.solver.values_known_by = (function mrsudoku$model$solver$values_known_by(doms,value){
return cljs.core.reduce.call(null,(function (res,p__11032){
var vec__11033 = p__11032;
var v = cljs.core.nth.call(null,vec__11033,(0),null);
var values = cljs.core.nth.call(null,vec__11033,(1),null);
if(cljs.core.contains_QMARK_.call(null,values,value)){
return cljs.core.conj.call(null,res,v);
} else {
return res;
}
}),cljs.core.PersistentHashSet.EMPTY,doms);
});
mrsudoku.model.solver.values_known_by_test = (function mrsudoku$model$solver$values_known_by_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.values_known_by_test.cljs$lang$var);
});
mrsudoku.model.solver.values_known_by_test.cljs$lang$test = (function (){
try{var values__8646__auto___11038 = (new cljs.core.List(null,mrsudoku.model.solver.values_known_by.call(null,mrsudoku.model.solver.alldiff_doms_td,(1)),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v2","v2",235023456),null,new cljs.core.Keyword(null,"v1","v1",513124261),null], null), null),null,(1),null)),(2),null));
var result__8647__auto___11039 = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto___11038);
if(cljs.core.truth_(result__8647__auto___11039)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"values-known-by","values-known-by",958916174,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),(1)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v2","v2",235023456),null,new cljs.core.Keyword(null,"v1","v1",513124261),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto___11038),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"values-known-by","values-known-by",958916174,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),(1)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v2","v2",235023456),null,new cljs.core.Keyword(null,"v1","v1",513124261),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto___11038),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e11036){var t__8691__auto___11040 = e11036;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"values-known-by","values-known-by",958916174,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),(1)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"v2","v2",235023456),null,new cljs.core.Keyword(null,"v1","v1",513124261),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto___11040,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.values_known_by.call(null,mrsudoku.model.solver.alldiff_doms_td,(4)),(new cljs.core.List(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v2","v2",235023456),null,new cljs.core.Keyword(null,"v5","v5",738627685),null,new cljs.core.Keyword(null,"v4","v4",1541454293),null,new cljs.core.Keyword(null,"v3","v3",-372278121),null], null), null),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"values-known-by","values-known-by",958916174,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),(4)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v2","v2",235023456),null,new cljs.core.Keyword(null,"v5","v5",738627685),null,new cljs.core.Keyword(null,"v4","v4",1541454293),null,new cljs.core.Keyword(null,"v3","v3",-372278121),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"values-known-by","values-known-by",958916174,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),(4)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v2","v2",235023456),null,new cljs.core.Keyword(null,"v5","v5",738627685),null,new cljs.core.Keyword(null,"v4","v4",1541454293),null,new cljs.core.Keyword(null,"v3","v3",-372278121),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e11037){var t__8691__auto__ = e11037;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"values-known-by","values-known-by",958916174,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null),(4)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"v2","v2",235023456),null,new cljs.core.Keyword(null,"v5","v5",738627685),null,new cljs.core.Keyword(null,"v4","v4",1541454293),null,new cljs.core.Keyword(null,"v3","v3",-372278121),null], null), null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.values_known_by_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.values_known_by_test;},new cljs.core.Symbol("mrsudoku.model.solver","values-known-by_test","mrsudoku.model.solver/values-known-by_test",-1544193857,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"values-known-by_test","values-known-by_test",-553764863,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",30,1,289,289,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.values_known_by_test)?mrsudoku.model.solver.values_known_by_test.cljs$lang$test:null)]));
mrsudoku.model.solver.add_value = (function mrsudoku$model$solver$add_value(doms,vs,value){
var s = vs;
var res = doms;
while(true){
if(cljs.core.seq.call(null,s)){
var G__11043 = cljs.core.rest.call(null,s);
var G__11044 = cljs.core.update.call(null,res,cljs.core.first.call(null,s),((function (s,res){
return (function (p1__11042_SHARP_){
return cljs.core.conj.call(null,p1__11042_SHARP_,value);
});})(s,res))
);
s = G__11043;
res = G__11044;
continue;
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.access = (function mrsudoku$model$solver$access(doms,scc){
var scc_doms = mrsudoku.model.solver.doms_from_scc.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,doms)),scc);
var isolated = mrsudoku.model.solver.isolated_values.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,doms)),scc);
return cljs.core.reduce.call(null,((function (scc_doms,isolated){
return (function (doms_SINGLEQUOTE_,value){
return mrsudoku.model.solver.add_value.call(null,doms_SINGLEQUOTE_,mrsudoku.model.solver.values_known_by.call(null,doms,value),value);
});})(scc_doms,isolated))
,scc_doms,isolated);
});
/**
 * simplify the 'doms' for the all-different constraint,returns nil if not satisfiable
 */
mrsudoku.model.solver.alldiff = (function mrsudoku$model$solver$alldiff(doms){
var match = mrsudoku.model.solver.max_matching.call(null,doms);
if(cljs.core.truth_(mrsudoku.model.solver.complete_matching_QMARK_.call(null,doms,match))){
var scc = mrsudoku.model.solver.compute_scc.call(null,mrsudoku.model.solver.graph_with_matching.call(null,doms,match));
var fg = cljs.core.println.call(null,"scc =",scc);
return mrsudoku.model.solver.access.call(null,doms,scc);
} else {
return null;
}
});
mrsudoku.model.solver.alldiff_test = (function mrsudoku$model$solver$alldiff_test(){
return cljs.test.test_var.call(null,mrsudoku.model.solver.alldiff_test.cljs$lang$var);
});
mrsudoku.model.solver.alldiff_test.cljs$lang$test = (function (){
try{var values__8646__auto__ = (new cljs.core.List(null,mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.alldiff_doms_td),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v1","v1",513124261),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"v2","v2",235023456),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null),null,(1),null)),(2),null));
var result__8647__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8646__auto__);
if(cljs.core.truth_(result__8647__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"alldiff","alldiff",-1920272509,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v1","v1",513124261),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"v2","v2",235023456),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8646__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"alldiff","alldiff",-1920272509,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v1","v1",513124261),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"v2","v2",235023456),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8646__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8647__auto__;
}catch (e11045){var t__8691__auto__ = e11045;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"alldiff","alldiff",-1920272509,null),new cljs.core.Symbol(null,"alldiff-doms-td","alldiff-doms-td",-149462991,null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v1","v1",513124261),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"v2","v2",235023456),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),new cljs.core.Keyword(null,"v3","v3",-372278121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v4","v4",1541454293),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.Keyword(null,"v5","v5",738627685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8691__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

mrsudoku.model.solver.alldiff_test.cljs$lang$var = new cljs.core.Var(function(){return mrsudoku.model.solver.alldiff_test;},new cljs.core.Symbol("mrsudoku.model.solver","alldiff_test","mrsudoku.model.solver/alldiff_test",-932590399,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"mrsudoku.model.solver","mrsudoku.model.solver",-2076449403,null),new cljs.core.Symbol(null,"alldiff_test","alldiff_test",2002980123,null),"/users/nfs/Etu1/3802151/3i020/mrsudoku-project/src/cljs/mrsudoku/model/solver.cljs",22,1,324,324,cljs.core.List.EMPTY,null,(cljs.core.truth_(mrsudoku.model.solver.alldiff_test)?mrsudoku.model.solver.alldiff_test.cljs$lang$test:null)]));
mrsudoku.model.solver.solve1 = (function mrsudoku$model$solver$solve1(grid){
mrsudoku.model.solver.max_matching.call(null,mrsudoku.model.solver.to_var_block.call(null,grid,(1)));

mrsudoku.model.solver.max_matching.call(null,mrsudoku.model.solver.to_var_block.call(null,grid,(8)));

mrsudoku.model.solver.max_matching.call(null,mrsudoku.model.solver.to_var_block.call(null,grid,(3)));

cljs.core.first.call(null,cljs.core.val.call(null,cljs.core.first.call(null,mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,grid,(1))))));

mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,grid,(2)));

mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,grid,(3)));

return mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,grid,(4)));
});
mrsudoku.model.solver.manuel_parse = (function mrsudoku$model$solver$manuel_parse(str){
if((cljs.core.compare.call(null,str,"1") === (0))){
return (1);
} else {
if((cljs.core.compare.call(null,str,"2") === (0))){
return (2);
} else {
if((cljs.core.compare.call(null,str,"3") === (0))){
return (3);
} else {
if((cljs.core.compare.call(null,str,"4") === (0))){
return (4);
} else {
if((cljs.core.compare.call(null,str,"5") === (0))){
return (5);
} else {
if((cljs.core.compare.call(null,str,"6") === (0))){
return (6);
} else {
if((cljs.core.compare.call(null,str,"7") === (0))){
return (7);
} else {
if((cljs.core.compare.call(null,str,"8") === (0))){
return (8);
} else {
return (9);

}
}
}
}
}
}
}
}
});
mrsudoku.model.solver.fix_singleton = (function mrsudoku$model$solver$fix_singleton(grid,index,doms){
var s = doms;
var mygrid = grid;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s))),(1))){
var var_num = mrsudoku.model.solver.manuel_parse.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cljs.core.first.call(null,s)))].join(''),(2)));
var offset_y = ((((var_num - (1)) / (3)) | (0)) + (1));
var y = ((((index - (1)) / (3)) | (0)) * (3));
var offset_x = ((cljs.core.mod.call(null,(var_num - (1)),(3)) | (0)) + (1));
var x = ((cljs.core.mod.call(null,(index - (1)),(3)) | (0)) * (3));
cljs.core.println.call(null,"x ",(x + offset_x)," y ",(y + offset_y)," val ",cljs.core.first.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s))));

var G__11046 = cljs.core.rest.call(null,s);
var G__11047 = mrsudoku.model.grid.change_cell.call(null,mygrid,(x + offset_x),(y + offset_y),mrsudoku.model.grid.mk_cell.call(null,cljs.core.first.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s)))));
s = G__11046;
mygrid = G__11047;
continue;
} else {
var G__11048 = cljs.core.rest.call(null,s);
var G__11049 = mygrid;
s = G__11048;
mygrid = G__11049;
continue;
}
} else {
return mygrid;
}
break;
}
});
mrsudoku.model.solver.fix_singleton2 = (function mrsudoku$model$solver$fix_singleton2(grid,index,doms){
var s = doms;
var mygrid = grid;
var fixed = false;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s))),(1))){
var var_num = mrsudoku.model.solver.manuel_parse.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cljs.core.first.call(null,s)))].join(''),(2)));
var offset_y = ((((var_num - (1)) / (3)) | (0)) + (1));
var y = ((((index - (1)) / (3)) | (0)) * (3));
var offset_x = ((cljs.core.mod.call(null,(var_num - (1)),(3)) | (0)) + (1));
var x = ((cljs.core.mod.call(null,(index - (1)),(3)) | (0)) * (3));
cljs.core.println.call(null,"x ",(x + offset_x)," y ",(y + offset_y)," val ",cljs.core.first.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s))));

var G__11050 = cljs.core.rest.call(null,s);
var G__11051 = mrsudoku.model.grid.change_cell.call(null,mygrid,(x + offset_x),(y + offset_y),mrsudoku.model.grid.mk_cell.call(null,cljs.core.first.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s)))));
var G__11052 = true;
s = G__11050;
mygrid = G__11051;
fixed = G__11052;
continue;
} else {
var G__11053 = cljs.core.rest.call(null,s);
var G__11054 = mygrid;
var G__11055 = fixed;
s = G__11053;
mygrid = G__11054;
fixed = G__11055;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mygrid,fixed], null);
}
break;
}
});
mrsudoku.model.solver.solver = (function mrsudoku$model$solver$solver(grid){
var mygrid = grid;
var index = (1);
var finish = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,grid);
while(true){
if(cljs.core.not.call(null,finish)){
var alldiff_doms = mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,mygrid,index));
if(cljs.core.truth_(alldiff_doms)){
var G__11056 = mrsudoku.model.solver.fix_singleton.call(null,mygrid,index,alldiff_doms);
var G__11057 = (cljs.core.mod.call(null,index,(9)) + (1));
var G__11058 = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,mygrid);
mygrid = G__11056;
index = G__11057;
finish = G__11058;
continue;
} else {
return null;
}
} else {
return mygrid;
}
break;
}
});
mrsudoku.model.solver.solver2 = (function mrsudoku$model$solver$solver2(grid){
var mygrid = grid;
var index = (1);
var fixed = false;
while(true){
if((index < (10))){
var alldiff_doms = mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,mygrid,index));
if(cljs.core.truth_(alldiff_doms)){
var vec__11059 = mrsudoku.model.solver.fix_singleton2.call(null,mygrid,index,alldiff_doms);
var newgrid = cljs.core.nth.call(null,vec__11059,(0),null);
var isfixed = cljs.core.nth.call(null,vec__11059,(1),null);
var G__11062 = newgrid;
var G__11063 = (index + (1));
var G__11064 = (function (){var or__3949__auto__ = fixed;
if(or__3949__auto__){
return or__3949__auto__;
} else {
return isfixed;
}
})();
mygrid = G__11062;
index = G__11063;
fixed = G__11064;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mygrid,fixed], null);
}
break;
}
});
mrsudoku.model.solver.strat_first = (function mrsudoku$model$solver$strat_first(grid){
var index = (1);
while(true){
if((index < (10))){
var alldiff_doms = mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,grid,index));
if((cljs.core.count.call(null,alldiff_doms) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,alldiff_doms)], null);
} else {
var G__11065 = (index + (1));
index = G__11065;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.PersistentHashSet.EMPTY], null);
}
break;
}
});
mrsudoku.model.solver.strat_first.call(null,mrsudoku.model.solver.grid);
mrsudoku.model.solver.strat_best = (function mrsudoku$model$solver$strat_best(grid){
var index = (1);
var myindex = (1);
var best = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v1","v1",513124261),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,(10),cljs.core.range.call(null,(1),(10))))], null);
while(true){
if((index < (10))){
var alldiff_doms = mrsudoku.model.solver.to_var_block.call(null,grid,index);
if((cljs.core.count.call(null,alldiff_doms) > (0))){
var s_11066 = alldiff_doms;
var best2_11067 = cljs.core.first.call(null,alldiff_doms);
while(true){
if(cljs.core.seq.call(null,s_11066)){
if((cljs.core.count.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s_11066))) < cljs.core.count.call(null,cljs.core.val.call(null,best2_11067)))){
var G__11068 = cljs.core.rest.call(null,s_11066);
var G__11069 = cljs.core.first.call(null,s_11066);
s_11066 = G__11068;
best2_11067 = G__11069;
continue;
} else {
var G__11070 = cljs.core.rest.call(null,s_11066);
var G__11071 = best2_11067;
s_11066 = G__11070;
best2_11067 = G__11071;
continue;
}
} else {
mrsudoku.model.solver.best2 = best2_11067;
}
break;
}

var G__11072 = (index + (1));
var G__11073 = index;
var G__11074 = mrsudoku.model.solver.best2;
index = G__11072;
myindex = G__11073;
best = G__11074;
continue;
} else {
var G__11075 = (index + (1));
var G__11076 = myindex;
var G__11077 = best;
index = G__11075;
myindex = G__11076;
best = G__11077;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [myindex,best], null);
}
break;
}
});
mrsudoku.model.solver.hardgrid = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(2)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(4)),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(7)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(3)),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(9)),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(5)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(6)),mrsudoku.model.grid.mk_cell.call(null,(8)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(1)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null,(4)),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null)], null)], null);
mrsudoku.model.solver.emptygrid = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null)], null)], null);
mrsudoku.model.solver.fix_value = (function mrsudoku$model$solver$fix_value(grid,index,var$,val){
var var_num = mrsudoku.model.solver.manuel_parse.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join(''),(2)));
var offset_y = ((((var_num - (1)) / (3)) | (0)) + (1));
var y = ((((index - (1)) / (3)) | (0)) * (3));
var offset_x = ((cljs.core.mod.call(null,(var_num - (1)),(3)) | (0)) + (1));
var x = ((cljs.core.mod.call(null,(index - (1)),(3)) | (0)) * (3));
cljs.core.println.call(null,"x ",(x + offset_x)," y ",(y + offset_y)," val ",val);

return mrsudoku.model.grid.change_cell.call(null,grid,(x + offset_x),(y + offset_y),mrsudoku.model.grid.mk_cell.call(null,val));
});
mrsudoku.model.solver.solver3 = (function mrsudoku$model$solver$solver3(grid){
var mygrid = grid;
var finish = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,grid);
var fixed = true;
while(true){
if(cljs.core.not.call(null,finish)){
if(fixed){
var vec__11078 = mrsudoku.model.solver.solver2.call(null,mygrid);
var grid_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11078,(0),null);
var fixed_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__11078,(1),null);
if((grid_SINGLEQUOTE_ == null)){
return null;
} else {
var G__11084 = grid_SINGLEQUOTE_;
var G__11085 = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,grid_SINGLEQUOTE_);
var G__11086 = fixed_SINGLEQUOTE_;
mygrid = G__11084;
finish = G__11085;
fixed = G__11086;
continue;
}
} else {
var vec__11081 = mrsudoku.model.solver.strat_best.call(null,mygrid);
var index = cljs.core.nth.call(null,vec__11081,(0),null);
var doms = cljs.core.nth.call(null,vec__11081,(1),null);
var s = cljs.core.second.call(null,doms);
while(true){
if(cljs.core.seq.call(null,s)){
var newgrid = mrsudoku.model.solver.solver3.call(null,mrsudoku.model.solver.fix_value.call(null,mygrid,index,cljs.core.first.call(null,doms),cljs.core.first.call(null,s)));
if((newgrid == null)){
var G__11087 = cljs.core.rest.call(null,s);
s = G__11087;
continue;
} else {
return newgrid;
}
} else {
return null;
}
break;
}
}
} else {
return mygrid;
}
break;
}
});
/**
 * Solve the sudoku `grid` by returing a full solved grid,
 *  or `nil` if the solver fails.
 */
mrsudoku.model.solver.solve = (function mrsudoku$model$solver$solve(grid){
return cljs.core.first.call(null,mrsudoku.model.solver.solver4.call(null,mrsudoku.model.solver.hardgrid,true));
});

//# sourceMappingURL=solver.js.map
