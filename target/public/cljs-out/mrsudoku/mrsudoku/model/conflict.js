// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.conflict');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('mrsudoku.model.grid');
/**
 * Return the set of values of a vector or grid `cells`.
 */
mrsudoku.model.conflict.values = (function mrsudoku$model$conflict$values(cells){
return cljs.core.disj.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,mrsudoku.model.grid.cell_value,cells)),null);
});
/**
 * Return the set of values of a vector of cells, except the `except`-th.
 */
mrsudoku.model.conflict.values_except = (function mrsudoku$model$conflict$values_except(cells,except){
var s_21061 = cljs.core.map.call(null,mrsudoku.model.grid.cell_value,cells);
var co_21062 = (1);
while(true){
if(((cljs.core.seq.call(null,s_21061)) && ((co_21062 < except)))){
var G__21063 = cljs.core.rest.call(null,s_21061);
var G__21064 = (co_21062 + (1));
s_21061 = G__21063;
co_21062 = G__21064;
continue;
} else {
mrsudoku.model.conflict.elem = cljs.core.first.call(null,s_21061);
}
break;
}

return cljs.core.disj.call(null,mrsudoku.model.conflict.values.call(null,cells),mrsudoku.model.conflict.elem);
});
mrsudoku.model.conflict.mk_conflict = (function mrsudoku$model$conflict$mk_conflict(kind,cx,cy,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
mrsudoku.model.conflict.merge_conflict_kind = (function mrsudoku$model$conflict$merge_conflict_kind(kind1,kind2){
if(cljs.core._EQ_.call(null,kind1,kind2)){
return kind1;
} else {
var res = (((kind2 instanceof cljs.core.Keyword))?cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind2):kind2);
var s = (((kind1 instanceof cljs.core.Keyword))?cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,kind1):kind1);
var res__$1 = res;
while(true){
if(cljs.core.seq.call(null,s)){
var G__21065 = cljs.core.rest.call(null,s);
var G__21066 = cljs.core.conj.call(null,res__$1,cljs.core.first.call(null,s));
s = G__21065;
res__$1 = G__21066;
continue;
} else {
return res__$1;
}
break;
}
}
});
mrsudoku.model.conflict.merge_conflict = (function mrsudoku$model$conflict$merge_conflict(conflict1,conflict2){
return mrsudoku.model.conflict.mk_conflict.call(null,mrsudoku.model.conflict.merge_conflict_kind.call(null,cljs.core.get.call(null,conflict1,new cljs.core.Keyword(null,"kind","kind",-717265803)),cljs.core.get.call(null,conflict2,new cljs.core.Keyword(null,"kind","kind",-717265803))),(1),(1),cljs.core.get.call(null,conflict1,new cljs.core.Keyword(null,"value","value",305978217)));
});
mrsudoku.model.conflict.merge_conflicts = (function mrsudoku$model$conflict$merge_conflicts(var_args){
var args__4534__auto__ = [];
var len__4531__auto___21068 = arguments.length;
var i__4532__auto___21069 = (0);
while(true){
if((i__4532__auto___21069 < len__4531__auto___21068)){
args__4534__auto__.push((arguments[i__4532__auto___21069]));

var G__21070 = (i__4532__auto___21069 + (1));
i__4532__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mrsudoku.model.conflict.merge_conflicts.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mrsudoku.model.conflict.merge_conflicts.cljs$core$IFn$_invoke$arity$variadic = (function (conflicts){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.merge_with,mrsudoku.model.conflict.merge_conflict),conflicts);
});

mrsudoku.model.conflict.merge_conflicts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mrsudoku.model.conflict.merge_conflicts.cljs$lang$applyTo = (function (seq21067){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21067));
});

mrsudoku.model.conflict.update_conflicts = (function mrsudoku$model$conflict$update_conflicts(conflict_kind,cx,cy,value,conflicts){
var temp__5718__auto__ = cljs.core.get.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null));
if(cljs.core.truth_(temp__5718__auto__)){
var conflict = temp__5718__auto__;
return cljs.core.assoc.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),mrsudoku.model.conflict.mk_conflict.call(null,mrsudoku.model.conflict.merge_conflict_kind.call(null,conflict_kind,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(conflict)),cx,cy,value));
} else {
return cljs.core.assoc.call(null,conflicts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),mrsudoku.model.conflict.mk_conflict.call(null,conflict_kind,cx,cy,value));
}
});
mrsudoku.model.conflict.conflict_value = (function mrsudoku$model$conflict$conflict_value(values,except,cell){
var temp__5720__auto__ = mrsudoku.model.grid.cell_value.call(null,cell);
if(cljs.core.truth_(temp__5720__auto__)){
var value = temp__5720__auto__;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"init","init",-1875481434))) && (cljs.core.contains_QMARK_.call(null,mrsudoku.model.conflict.values_except.call(null,values,except),value)))){
return value;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns a map of conflicts in a `col`.
 */
mrsudoku.model.conflict.col_conflicts = (function mrsudoku$model$conflict$col_conflicts(col,cx){
var cy = (1);
var cells = cljs.core.seq.call(null,col);
var conflicts = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,cells)){
var cell = cljs.core.first.call(null,cells);
var temp__5718__auto__ = mrsudoku.model.conflict.conflict_value.call(null,col,cy,cell);
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
var G__21071 = (cy + (1));
var G__21072 = cljs.core.rest.call(null,cells);
var G__21073 = mrsudoku.model.conflict.update_conflicts.call(null,new cljs.core.Keyword(null,"col","col",-1959363084),cx,cy,value,conflicts);
cy = G__21071;
cells = G__21072;
conflicts = G__21073;
continue;
} else {
var G__21074 = (cy + (1));
var G__21075 = cljs.core.rest.call(null,cells);
var G__21076 = conflicts;
cy = G__21074;
cells = G__21075;
conflicts = G__21076;
continue;
}
} else {
return conflicts;
}
break;
}
});
mrsudoku.model.conflict.cols_conflicts = (function mrsudoku$model$conflict$cols_conflicts(grid){
return cljs.core.reduce.call(null,mrsudoku.model.conflict.merge_conflicts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (c){
return mrsudoku.model.conflict.col_conflicts.call(null,mrsudoku.model.grid.col.call(null,grid,c),c);
}),cljs.core.range.call(null,(1),(10))));
});
/**
 * Returns a map of conflicts in a `row`.
 */
mrsudoku.model.conflict.row_conflicts = (function mrsudoku$model$conflict$row_conflicts(row,cy){
var cx = (1);
var cells = cljs.core.seq.call(null,row);
var conflicts = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,cells)){
var cell = cljs.core.first.call(null,cells);
var temp__5718__auto__ = mrsudoku.model.conflict.conflict_value.call(null,row,cy,cell);
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
var G__21077 = (cx + (1));
var G__21078 = cljs.core.rest.call(null,cells);
var G__21079 = mrsudoku.model.conflict.update_conflicts.call(null,new cljs.core.Keyword(null,"row","row",-570139521),cx,cy,value,conflicts);
cx = G__21077;
cells = G__21078;
conflicts = G__21079;
continue;
} else {
var G__21080 = (cx + (1));
var G__21081 = cljs.core.rest.call(null,cells);
var G__21082 = conflicts;
cx = G__21080;
cells = G__21081;
conflicts = G__21082;
continue;
}
} else {
return conflicts;
}
break;
}
});
/**
 * Returns a map of conflicts in all rows of `grid`
 */
mrsudoku.model.conflict.rows_conflicts = (function mrsudoku$model$conflict$rows_conflicts(grid){
return cljs.core.PersistentArrayMap.EMPTY;
});
mrsudoku.model.conflict.block_conflicts = (function mrsudoku$model$conflict$block_conflicts(block,b){
return mrsudoku.model.grid.reduce_block.call(null,(function (conflicts,index,cx,cy,cell){
var temp__5718__auto__ = mrsudoku.model.conflict.conflict_value.call(null,block,index,cell);
if(cljs.core.truth_(temp__5718__auto__)){
var value = temp__5718__auto__;
return mrsudoku.model.conflict.update_conflicts.call(null,new cljs.core.Keyword(null,"block","block",664686210),cx,cy,value,conflicts);
} else {
return conflicts;
}
}),cljs.core.PersistentArrayMap.EMPTY,block,b);
});
mrsudoku.model.conflict.blocks_conflicts = (function mrsudoku$model$conflict$blocks_conflicts(grid){
return cljs.core.reduce.call(null,mrsudoku.model.conflict.merge_conflicts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (b){
return mrsudoku.model.conflict.block_conflicts.call(null,mrsudoku.model.grid.block.call(null,grid,b),b);
}),cljs.core.range.call(null,(1),(10))));
});
/**
 * Compute all conflicts in the Sudoku grid.
 */
mrsudoku.model.conflict.grid_conflicts = (function mrsudoku$model$conflict$grid_conflicts(grid){
cljs.core.println.call(null,"compute conflicts");

cljs.core.println.call(null,mrsudoku.model.grid.grid__GT_str.call(null,grid));

return mrsudoku.model.conflict.merge_conflicts.call(null,mrsudoku.model.conflict.rows_conflicts.call(null,grid),mrsudoku.model.conflict.cols_conflicts.call(null,grid),mrsudoku.model.conflict.blocks_conflicts.call(null,grid));
});

//# sourceMappingURL=conflict.js.map
