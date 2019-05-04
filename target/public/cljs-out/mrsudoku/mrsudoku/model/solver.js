// Compiled by ClojureScript 1.10.339 {}
goog.provide('mrsudoku.model.solver');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mrsudoku.model.grid');
goog.require('mrsudoku.model.conflict');
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
var G__27968 = cljs.core.rest.call(null,b);
var G__27969 = (index + (1));
var G__27970 = cljs.core.assoc.call(null,res,cljs.core.keyword.call(null,["v",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')),clojure.set.difference.call(null,pos,clojure.set.union.call(null,cljs.core.get.call(null,collig,((((index - (1)) / (3)) | (0)) + (1))),cljs.core.get.call(null,collig,(cljs.core.mod.call(null,(index - (1)),(3)) + (4))),block)));
b = G__27968;
index = G__27969;
res = G__27970;
continue;
} else {
var G__27971 = cljs.core.rest.call(null,b);
var G__27972 = (index + (1));
var G__27973 = res;
b = G__27971;
index = G__27972;
res = G__27973;
continue;
}
} else {
return res;
}
break;
}
});
/**
 * take a graph, a start summit, a set of visited summits and a match and return a flag indicated if the augment succeed or not
 */
mrsudoku.model.solver.augment = (function mrsudoku$model$solver$augment(var_args){
var G__27975 = arguments.length;
switch (G__27975) {
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
var G__27980 = cljs.core.rest.call(null,dests);
var G__27981 = visited__$1;
dests = G__27980;
visited__$1 = G__27981;
continue;
} else {
var temp__5718__auto__ = cljs.core.get.call(null,match,cljs.core.first.call(null,dests));
if(cljs.core.truth_(temp__5718__auto__)){
var old_src = temp__5718__auto__;
var vec__27976 = mrsudoku.model.solver.augment.call(null,graph,old_src,cljs.core.conj.call(null,visited__$1,cljs.core.first.call(null,dests)),match,cljs.core.conj.call(null,just_visited,cljs.core.first.call(null,dests)));
var found = cljs.core.nth.call(null,vec__27976,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27976,(1),null);
var match_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27976,(2),null);
if(cljs.core.truth_(found)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,visited_SINGLEQUOTE_,cljs.core.assoc.call(null,match_SINGLEQUOTE_,cljs.core.first.call(null,dests),src)], null);
} else {
var G__27982 = cljs.core.rest.call(null,dests);
var G__27983 = visited_SINGLEQUOTE_;
dests = G__27982;
visited__$1 = G__27983;
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

mrsudoku.model.solver.max_matching = (function mrsudoku$model$solver$max_matching(graph){
var summits = cljs.core.keys.call(null,graph);
var visited = cljs.core.PersistentHashSet.EMPTY;
var match = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,summits)){
var vec__27984 = mrsudoku.model.solver.augment.call(null,graph,cljs.core.first.call(null,summits),visited,match);
var found = cljs.core.nth.call(null,vec__27984,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27984,(1),null);
var match_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27984,(2),null);
var G__27987 = cljs.core.rest.call(null,summits);
var G__27988 = visited_SINGLEQUOTE_;
var G__27989 = match_SINGLEQUOTE_;
summits = G__27987;
visited = G__27988;
match = G__27989;
continue;
} else {
return match;
}
break;
}
});
mrsudoku.model.solver.complete_matching_QMARK_ = (function mrsudoku$model$solver$complete_matching_QMARK_(vars,match){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,vars),cljs.core.count.call(null,match));
});
mrsudoku.model.solver.graph_with_matching = (function mrsudoku$model$solver$graph_with_matching(graph,match){
return cljs.core.reduce.call(null,(function (mgraph,p__27990){
var vec__27991 = p__27990;
var src = cljs.core.nth.call(null,vec__27991,(0),null);
var dest = cljs.core.nth.call(null,vec__27991,(1),null);
return mrsudoku.model.grid.remove_edge.call(null,mrsudoku.model.grid.add_edge.call(null,mrsudoku.model.grid.add_vertex.call(null,mgraph,src),src,dest),dest,src);
}),graph,match);
});
mrsudoku.model.solver.doms_from_sccomp = (function mrsudoku$model$solver$doms_from_sccomp(variables,comp){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,comp),(1))){
if(cljs.core.contains_QMARK_.call(null,variables,cljs.core.first.call(null,comp))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,comp),cljs.core.PersistentHashSet.EMPTY]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
var vars = clojure.set.select.call(null,(function (p1__27994_SHARP_){
return cljs.core.contains_QMARK_.call(null,variables,p1__27994_SHARP_);
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
var G__27995 = cljs.core.rest.call(null,scc__$1);
var G__27996 = cljs.core.merge.call(null,res,mrsudoku.model.solver.doms_from_sccomp.call(null,vars,cljs.core.first.call(null,scc__$1)));
scc__$1 = G__27995;
res = G__27996;
continue;
} else {
return res;
}
break;
}
});
/**
 * Depth-First Search algorithm
 */
mrsudoku.model.solver.dfs = (function mrsudoku$model$solver$dfs(var_args){
var G__27998 = arguments.length;
switch (G__27998) {
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
var vec__27999 = mrsudoku.model.solver.dfs.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27999,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27999,(1),null);
var G__28003 = cljs.core.rest.call(null,verts);
var G__28004 = res_SINGLEQUOTE_;
var G__28005 = visited_SINGLEQUOTE_;
verts = G__28003;
res = G__28004;
visited__$1 = G__28005;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,visited__$1], null);
}
break;
}
}
});

mrsudoku.model.solver.dfs.cljs$lang$maxFixedArity = 5;

mrsudoku.model.solver.dfs_post = (function mrsudoku$model$solver$dfs_post(var_args){
var G__28007 = arguments.length;
switch (G__28007) {
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
var vec__28008 = mrsudoku.model.solver.dfs_post.call(null,graph,cljs.core.first.call(null,verts),f,res,visited__$1);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28008,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28008,(1),null);
var G__28012 = cljs.core.rest.call(null,verts);
var G__28013 = res_SINGLEQUOTE_;
var G__28014 = visited_SINGLEQUOTE_;
verts = G__28012;
res = G__28013;
visited__$1 = G__28014;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,res,vert),visited__$1], null);
}
break;
}
}
});

mrsudoku.model.solver.dfs_post.cljs$lang$maxFixedArity = 5;

mrsudoku.model.solver.dfs_stack = (function mrsudoku$model$solver$dfs_stack(graph){
var verts = cljs.core.keys.call(null,graph);
var stack = cljs.core.List.EMPTY;
var visited = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,verts)){
var vec__28015 = mrsudoku.model.solver.dfs_post.call(null,graph,cljs.core.first.call(null,verts),cljs.core.conj,stack,visited);
var stack_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28015,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28015,(1),null);
var G__28018 = cljs.core.rest.call(null,verts);
var G__28019 = stack_SINGLEQUOTE_;
var G__28020 = visited_SINGLEQUOTE_;
verts = G__28018;
stack = G__28019;
visited = G__28020;
continue;
} else {
return stack;
}
break;
}
});
mrsudoku.model.solver.merge_edges = (function mrsudoku$model$solver$merge_edges(edges1,edges2){
var s = edges2;
var m = edges1;
while(true){
if(cljs.core.seq.call(null,s)){
var vec__28021 = cljs.core.first.call(null,s);
var k = cljs.core.nth.call(null,vec__28021,(0),null);
var v2 = cljs.core.nth.call(null,vec__28021,(1),null);
var temp__5718__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5718__auto__)){
var v1 = temp__5718__auto__;
var G__28024 = cljs.core.rest.call(null,s);
var G__28025 = cljs.core.assoc.call(null,m,k,clojure.set.union.call(null,v1,v2));
s = G__28024;
m = G__28025;
continue;
} else {
var G__28026 = cljs.core.rest.call(null,s);
var G__28027 = cljs.core.assoc.call(null,m,k,v2);
s = G__28026;
m = G__28027;
continue;
}
} else {
return m;
}
break;
}
});
mrsudoku.model.solver.sinks = (function mrsudoku$model$solver$sinks(graph,verts){
return cljs.core.reduce.call(null,(function (ngraph,vert){
if(cljs.core.contains_QMARK_.call(null,ngraph,vert)){
return ngraph;
} else {
return cljs.core.assoc.call(null,ngraph,vert,cljs.core.PersistentHashSet.EMPTY);
}
}),graph,verts);
});
mrsudoku.model.solver.inv_edges = (function mrsudoku$model$solver$inv_edges(src,dests){
return cljs.core.zipmap.call(null,dests,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([src])));
});
/**
 * transpose a graph...
 */
mrsudoku.model.solver.transpose = (function mrsudoku$model$solver$transpose(graph){
var ks = cljs.core.keys.call(null,graph);
var res = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.seq.call(null,ks)){
var G__28028 = cljs.core.rest.call(null,ks);
var G__28029 = mrsudoku.model.solver.merge_edges.call(null,res,mrsudoku.model.solver.inv_edges.call(null,cljs.core.first.call(null,ks),cljs.core.get.call(null,graph,cljs.core.first.call(null,ks))));
ks = G__28028;
res = G__28029;
continue;
} else {
return mrsudoku.model.solver.sinks.call(null,res,cljs.core.keys.call(null,graph));
}
break;
}
});
mrsudoku.model.solver.compute_scc = (function mrsudoku$model$solver$compute_scc(graph){
var stack = mrsudoku.model.solver.dfs_stack.call(null,graph);
var t_graph = mrsudoku.model.solver.transpose.call(null,graph);
var s = stack;
var visited = cljs.core.PersistentHashSet.EMPTY;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s)){
if(cljs.core.truth_(visited.call(null,cljs.core.first.call(null,s)))){
var G__28033 = cljs.core.rest.call(null,s);
var G__28034 = visited;
var G__28035 = res;
s = G__28033;
visited = G__28034;
res = G__28035;
continue;
} else {
var vec__28030 = mrsudoku.model.solver.dfs_post.call(null,t_graph,cljs.core.first.call(null,s),cljs.core.conj,cljs.core.PersistentHashSet.EMPTY,visited);
var comp = cljs.core.nth.call(null,vec__28030,(0),null);
var visited_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28030,(1),null);
var G__28036 = cljs.core.rest.call(null,s);
var G__28037 = visited_SINGLEQUOTE_;
var G__28038 = cljs.core.conj.call(null,res,comp);
s = G__28036;
visited = G__28037;
res = G__28038;
continue;
}
} else {
return res;
}
break;
}
});
mrsudoku.model.solver.isolated_values = (function mrsudoku$model$solver$isolated_values(variables,scc){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p1__28039_SHARP_){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__28039_SHARP_),(1))) && (cljs.core.not.call(null,variables.call(null,cljs.core.first.call(null,p1__28039_SHARP_)))));
}),scc)));
});
mrsudoku.model.solver.values_known_by = (function mrsudoku$model$solver$values_known_by(doms,value){
return cljs.core.reduce.call(null,(function (res,p__28040){
var vec__28041 = p__28040;
var v = cljs.core.nth.call(null,vec__28041,(0),null);
var values = cljs.core.nth.call(null,vec__28041,(1),null);
if(cljs.core.contains_QMARK_.call(null,values,value)){
return cljs.core.conj.call(null,res,v);
} else {
return res;
}
}),cljs.core.PersistentHashSet.EMPTY,doms);
});
mrsudoku.model.solver.add_value = (function mrsudoku$model$solver$add_value(doms,vs,value){
var s = vs;
var res = doms;
while(true){
if(cljs.core.seq.call(null,s)){
var G__28046 = cljs.core.rest.call(null,s);
var G__28047 = cljs.core.update.call(null,res,cljs.core.first.call(null,s),((function (s,res){
return (function (p1__28045_SHARP_){
return cljs.core.conj.call(null,p1__28045_SHARP_,value);
});})(s,res))
);
s = G__28046;
res = G__28047;
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
return mrsudoku.model.solver.access.call(null,doms,scc);
} else {
return null;
}
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
/**
 * fix all singleton of a grid
 */
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
var G__28048 = cljs.core.rest.call(null,s);
var G__28049 = mrsudoku.model.grid.change_cell.call(null,mygrid,(x + offset_x),(y + offset_y),mrsudoku.model.grid.mk_cell.call(null,cljs.core.first.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s)))));
s = G__28048;
mygrid = G__28049;
continue;
} else {
var G__28050 = cljs.core.rest.call(null,s);
var G__28051 = mygrid;
s = G__28050;
mygrid = G__28051;
continue;
}
} else {
return mygrid;
}
break;
}
});
/**
 * same as fix-singleton but with a boolean
 */
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
var G__28052 = cljs.core.rest.call(null,s);
var G__28053 = mrsudoku.model.grid.change_cell.call(null,mygrid,(x + offset_x),(y + offset_y),mrsudoku.model.grid.mk_cell.call(null,cljs.core.first.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s)))));
var G__28054 = true;
s = G__28052;
mygrid = G__28053;
fixed = G__28054;
continue;
} else {
var G__28055 = cljs.core.rest.call(null,s);
var G__28056 = mygrid;
var G__28057 = fixed;
s = G__28055;
mygrid = G__28056;
fixed = G__28057;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mygrid,fixed], null);
}
break;
}
});
/**
 * solve a simple grid with only singletons else INFINIT-LOOP!!! be carefull
 */
mrsudoku.model.solver.solver = (function mrsudoku$model$solver$solver(grid){
var mygrid = grid;
var index = (1);
var finish = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,grid);
while(true){
if(cljs.core.not.call(null,finish)){
var alldiff_doms = mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,mygrid,index));
if(cljs.core.truth_(alldiff_doms)){
var G__28058 = mrsudoku.model.solver.fix_singleton.call(null,mygrid,index,alldiff_doms);
var G__28059 = (cljs.core.mod.call(null,index,(9)) + (1));
var G__28060 = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,mygrid);
mygrid = G__28058;
index = G__28059;
finish = G__28060;
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
/**
 * try to fix singletons of the grid, return the new grid and true if did else the first grid (or nil) and false
 */
mrsudoku.model.solver.solve_once = (function mrsudoku$model$solver$solve_once(grid){
var mygrid = grid;
var index = (1);
var fixed = false;
while(true){
if((index < (10))){
var alldiff_doms = mrsudoku.model.solver.alldiff.call(null,mrsudoku.model.solver.to_var_block.call(null,mygrid,index));
if(cljs.core.truth_(alldiff_doms)){
var vec__28061 = mrsudoku.model.solver.fix_singleton2.call(null,mygrid,index,alldiff_doms);
var newgrid = cljs.core.nth.call(null,vec__28061,(0),null);
var isfixed = cljs.core.nth.call(null,vec__28061,(1),null);
var G__28064 = newgrid;
var G__28065 = (index + (1));
var G__28066 = (function (){var or__3949__auto__ = fixed;
if(or__3949__auto__){
return or__3949__auto__;
} else {
return isfixed;
}
})();
mygrid = G__28064;
index = G__28065;
fixed = G__28066;
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
var alldiff_doms = mrsudoku.model.solver.to_var_block.call(null,grid,index);
if((cljs.core.count.call(null,alldiff_doms) > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,alldiff_doms)], null);
} else {
var G__28067 = (index + (1));
index = G__28067;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.PersistentHashSet.EMPTY], null);
}
break;
}
});
mrsudoku.model.solver.strat_best = (function mrsudoku$model$solver$strat_best(grid){
var index = (1);
var myindex = (1);
var best = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v1","v1",513124261),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,(10),cljs.core.range.call(null,(1),(10))))], null);
while(true){
if((index < (10))){
var alldiff_doms = mrsudoku.model.solver.to_var_block.call(null,grid,index);
if((cljs.core.count.call(null,alldiff_doms) > (0))){
var s_28068 = alldiff_doms;
var best2_28069 = cljs.core.first.call(null,alldiff_doms);
while(true){
if(cljs.core.seq.call(null,s_28068)){
if((cljs.core.count.call(null,cljs.core.val.call(null,cljs.core.first.call(null,s_28068))) < cljs.core.count.call(null,cljs.core.val.call(null,best2_28069)))){
var G__28070 = cljs.core.rest.call(null,s_28068);
var G__28071 = cljs.core.first.call(null,s_28068);
s_28068 = G__28070;
best2_28069 = G__28071;
continue;
} else {
var G__28072 = cljs.core.rest.call(null,s_28068);
var G__28073 = best2_28069;
s_28068 = G__28072;
best2_28069 = G__28073;
continue;
}
} else {
mrsudoku.model.solver.best2 = best2_28069;
}
break;
}

var G__28074 = (index + (1));
var G__28075 = index;
var G__28076 = mrsudoku.model.solver.best2;
index = G__28074;
myindex = G__28075;
best = G__28076;
continue;
} else {
var G__28077 = (index + (1));
var G__28078 = myindex;
var G__28079 = best;
index = G__28077;
myindex = G__28078;
best = G__28079;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [myindex,best], null);
}
break;
}
});
mrsudoku.model.solver.fix_value = (function mrsudoku$model$solver$fix_value(grid,index,var$,val){
var var_num = mrsudoku.model.solver.manuel_parse.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join(''),(2)));
var offset_y = ((((var_num - (1)) / (3)) | (0)) + (1));
var y = ((((index - (1)) / (3)) | (0)) * (3));
var offset_x = ((cljs.core.mod.call(null,(var_num - (1)),(3)) | (0)) + (1));
var x = ((cljs.core.mod.call(null,(index - (1)),(3)) | (0)) * (3));
return mrsudoku.model.grid.change_cell.call(null,grid,(x + offset_x),(y + offset_y),mrsudoku.model.grid.mk_cell.call(null,val));
});
mrsudoku.model.solver.solver_cpx = (function mrsudoku$model$solver$solver_cpx(grid){
var mygrid = grid;
var finish = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,grid);
var fixed = true;
while(true){
if(cljs.core.not.call(null,finish)){
if(fixed){
var vec__28080 = mrsudoku.model.solver.solve_once.call(null,mygrid);
var grid_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28080,(0),null);
var fixed_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28080,(1),null);
if((grid_SINGLEQUOTE_ == null)){
return null;
} else {
var G__28086 = grid_SINGLEQUOTE_;
var G__28087 = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,grid_SINGLEQUOTE_);
var G__28088 = fixed_SINGLEQUOTE_;
mygrid = G__28086;
finish = G__28087;
fixed = G__28088;
continue;
}
} else {
var vec__28083 = mrsudoku.model.solver.strat_best.call(null,mygrid);
var index = cljs.core.nth.call(null,vec__28083,(0),null);
var doms = cljs.core.nth.call(null,vec__28083,(1),null);
var s = cljs.core.second.call(null,doms);
while(true){
if(cljs.core.seq.call(null,s)){
var newgrid = mrsudoku.model.solver.solver_cpx.call(null,mrsudoku.model.solver.fix_value.call(null,mygrid,index,cljs.core.first.call(null,doms),cljs.core.first.call(null,s)));
if((newgrid == null)){
var G__28089 = cljs.core.rest.call(null,s);
s = G__28089;
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
mrsudoku.model.solver.random_fix = (function mrsudoku$model$solver$random_fix(grid){
var x = (cljs.core.rand_int.call(null,(9)) + (1));
var y = (cljs.core.rand_int.call(null,(9)) + (1));
var value = (cljs.core.rand_int.call(null,(9)) + (1));
return mrsudoku.model.grid.change_cell.call(null,grid,x,y,mrsudoku.model.grid.mk_cell.call(null,value));
});
mrsudoku.model.solver.random_clear = (function mrsudoku$model$solver$random_clear(grid){
var x = (cljs.core.rand_int.call(null,(9)) + (1));
var y = (cljs.core.rand_int.call(null,(9)) + (1));
return mrsudoku.model.grid.change_cell.call(null,grid,x,y,mrsudoku.model.grid.mk_cell.call(null));
});
/**
 * on ne calcule pas vraiment le nombre de solutions mais si on a plus de 2 on arrete de calculer
 */
mrsudoku.model.solver.nombre_solutions = (function mrsudoku$model$solver$nombre_solutions(grid){
var mygrid = grid;
var finish = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,grid);
var fixed = true;
while(true){
if(cljs.core.not.call(null,finish)){
if(fixed){
var vec__28090 = mrsudoku.model.solver.solve_once.call(null,mygrid);
var grid_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28090,(0),null);
var fixed_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__28090,(1),null);
if((grid_SINGLEQUOTE_ == null)){
return (0);
} else {
var G__28096 = grid_SINGLEQUOTE_;
var G__28097 = mrsudoku.model.conflict.grid_resolu_QMARK_.call(null,grid_SINGLEQUOTE_);
var G__28098 = fixed_SINGLEQUOTE_;
mygrid = G__28096;
finish = G__28097;
fixed = G__28098;
continue;
}
} else {
var vec__28093 = mrsudoku.model.solver.strat_best.call(null,mygrid);
var index = cljs.core.nth.call(null,vec__28093,(0),null);
var doms = cljs.core.nth.call(null,vec__28093,(1),null);
var s = cljs.core.second.call(null,doms);
var solutions = (0);
while(true){
if(cljs.core.seq.call(null,s)){
if((solutions < (2))){
var G__28099 = cljs.core.rest.call(null,s);
var G__28100 = (solutions + mrsudoku.model.solver.nombre_solutions.call(null,mrsudoku.model.solver.fix_value.call(null,mygrid,index,cljs.core.first.call(null,doms),cljs.core.first.call(null,s))));
s = G__28099;
solutions = G__28100;
continue;
} else {
return solutions;
}
} else {
return solutions;
}
break;
}
}
} else {
return (1);
}
break;
}
});
mrsudoku.model.solver.one_solution_QMARK_ = (function mrsudoku$model$solver$one_solution_QMARK_(grid){
return cljs.core._EQ_.call(null,(1),mrsudoku.model.solver.nombre_solutions.call(null,grid));
});
mrsudoku.model.solver.emptygrid = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null),mrsudoku.model.grid.mk_cell.call(null)], null)], null)], null);
mrsudoku.model.solver.generate_grid = (function mrsudoku$model$solver$generate_grid(){
var mygrid = mrsudoku.model.solver.solver_cpx.call(null,mrsudoku.model.solver.random_fix.call(null,mrsudoku.model.solver.emptygrid));
var chance = (0);
while(true){
if((chance < (3))){
var newgrid = mrsudoku.model.solver.random_clear.call(null,mygrid);
if(cljs.core.truth_(mrsudoku.model.solver.one_solution_QMARK_.call(null,newgrid))){
var G__28101 = newgrid;
var G__28102 = chance;
mygrid = G__28101;
chance = G__28102;
continue;
} else {
var G__28103 = mygrid;
var G__28104 = (chance + (1));
mygrid = G__28103;
chance = G__28104;
continue;
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
return mrsudoku.model.solver.solver_cpx.call(null,grid);
});
mrsudoku.model.solver.generate = (function mrsudoku$model$solver$generate(grid){
return mrsudoku.model.solver.generate_grid.call(null);
});

//# sourceMappingURL=solver.js.map
