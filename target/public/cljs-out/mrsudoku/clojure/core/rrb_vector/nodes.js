// Compiled by ClojureScript 1.10.339 {}
goog.provide('clojure.core.rrb_vector.nodes');
goog.require('cljs.core');
clojure.core.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
clojure.core.rrb_vector.nodes.clone = (function clojure$core$rrb_vector$nodes$clone(shift,node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone.call(null,node.arr)));
});
clojure.core.rrb_vector.nodes.regular_QMARK_ = (function clojure$core$rrb_vector$nodes$regular_QMARK_(node){
return !((node.arr.length === (33)));
});
clojure.core.rrb_vector.nodes.ranges = (function clojure$core$rrb_vector$nodes$ranges(node){
return (node.arr[(32)]);
});
clojure.core.rrb_vector.nodes.last_range = (function clojure$core$rrb_vector$nodes$last_range(node){
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,node);
var i = ((rngs[(32)]) - (1));
return (rngs[i]);
});
clojure.core.rrb_vector.nodes.regular_ranges = (function clojure$core$rrb_vector$nodes$regular_ranges(shift,cnt){
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var i = (0);
var r = step;
while(true){
if((r < cnt)){
(rngs[i] = r);

var G__12052 = (i + (1));
var G__12053 = (r + step);
i = G__12052;
r = G__12053;
continue;
} else {
(rngs[i] = cnt);

(rngs[(32)] = (i + (1)));

return rngs;
}
break;
}
});
clojure.core.rrb_vector.nodes.overflow_QMARK_ = (function clojure$core$rrb_vector$nodes$overflow_QMARK_(root,shift,cnt){
while(true){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,root))){
return ((cnt >> (5)) > ((1) << shift));
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,root);
var slc = (rngs[(32)]);
var and__3938__auto__ = (slc === (32));
if(and__3938__auto__){
var or__3949__auto__ = (shift === (5));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var G__12054 = (root.arr[(slc - (1))]);
var G__12055 = (shift - (5));
var G__12056 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__12054;
shift = G__12055;
cnt = G__12056;
continue;
}
} else {
return and__3938__auto__;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_0 = (function clojure$core$rrb_vector$nodes$index_of_0(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if((((arr[l]) | (0)) === (0))){
return l;
} else {
if((((arr[h]) | (0)) === (0))){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if((((arr[mid]) | (0)) === (0))){
var G__12057 = l;
var G__12058 = mid;
l = G__12057;
h = G__12058;
continue;
} else {
var G__12059 = (mid + (1));
var G__12060 = h;
l = G__12059;
h = G__12060;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_nil = (function clojure$core$rrb_vector$nodes$index_of_nil(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if(((arr[l]) == null)){
return l;
} else {
if(((arr[h]) == null)){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if(((arr[mid]) == null)){
var G__12061 = l;
var G__12062 = mid;
l = G__12061;
h = G__12062;
continue;
} else {
var G__12063 = (mid + (1));
var G__12064 = h;
l = G__12063;
h = G__12064;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.first_child = (function clojure$core$rrb_vector$nodes$first_child(node){
return (node.arr[(0)]);
});
clojure.core.rrb_vector.nodes.last_child = (function clojure$core$rrb_vector$nodes$last_child(node){
var arr = node.arr;
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))){
return (arr[(clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1))]);
} else {
return (arr[((clojure.core.rrb_vector.nodes.ranges.call(null,node)[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.nodes.remove_leftmost_child = (function clojure$core$rrb_vector$nodes$remove_leftmost_child(shift,parent){
var arr = parent.arr;
if(((arr[(1)]) == null)){
return null;
} else {
var r_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent);
var new_arr = (new Array((cljs.core.truth_(r_QMARK_)?(32):(33))));
cljs.core.array_copy.call(null,arr,(1),new_arr,(0),(31));

if(cljs.core.not.call(null,r_QMARK_)){
var rngs_12065 = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var rng0_12066 = (rngs_12065[(0)]);
var new_rngs_12067 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_12068 = (rngs_12065[(32)]);
cljs.core.array_copy.call(null,rngs_12065,(1),new_rngs_12067,(0),(lim_12068 - (1)));

var i_12069 = (0);
while(true){
if((i_12069 < lim_12068)){
(new_rngs_12067[i_12069] = ((new_rngs_12067[i_12069]) - rng0_12066));

var G__12070 = (i_12069 + (1));
i_12069 = G__12070;
continue;
} else {
}
break;
}

(new_rngs_12067[(32)] = ((rngs_12065[(32)]) - (1)));

(new_rngs_12067[((rngs_12065[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_12067);
} else {
}

return cljs.core.__GT_VectorNode.call(null,parent.edit,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_leftmost_child = (function clojure$core$rrb_vector$nodes$replace_leftmost_child(shift,parent,pcnt,child,d){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent))){
var step = ((1) << shift);
var rng0 = (step - d);
var ncnt = (pcnt - d);
var li = ((shift >> (pcnt - (1))) & (31));
var arr = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_arr[(0)] = child);

cljs.core.array_copy.call(null,arr,(1),new_arr,(1),li);

(new_arr[(32)] = new_rngs);

(new_rngs[(0)] = rng0);

(new_rngs[li] = ncnt);

(new_rngs[(32)] = (li + (1)));

var i_12071 = (1);
while(true){
if((i_12071 <= li)){
(new_rngs[i_12071] = ((new_rngs[(i_12071 - (1))]) + step));

var G__12072 = (i_12071 + (1));
i_12071 = G__12072;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var new_arr = cljs.core.aclone.call(null,parent.arr);
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var li = ((rngs[(32)]) - (1));
(new_rngs[(32)] = (rngs[(32)]));

(new_arr[(32)] = new_rngs);

(new_arr[(0)] = child);

var i_12073 = (0);
while(true){
if((i_12073 <= li)){
(new_rngs[i_12073] = ((rngs[i_12073]) - d));

var G__12074 = (i_12073 + (1));
i_12073 = G__12074;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_rightmost_child = (function clojure$core$rrb_vector$nodes$replace_rightmost_child(shift,parent,child,d){
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,parent))){
var arr = parent.arr;
var i = (clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr) - (1));
if(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,child))){
var new_arr = cljs.core.aclone.call(null,arr);
(new_arr[i] = child);

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
} else {
var arr__$1 = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs[(32)] = (i + (1)));

(new_arr[(32)] = rngs);

cljs.core.array_copy.call(null,arr__$1,(0),new_arr,(0),i);

(new_arr[i] = child);

var j_12075 = (0);
var r_12076 = step;
while(true){
if((j_12075 <= i)){
(rngs[j_12075] = r_12076);

var G__12077 = (j_12075 + (1));
var G__12078 = (r_12076 + step);
j_12075 = G__12077;
r_12076 = G__12078;
continue;
} else {
}
break;
}

(rngs[i] = clojure.core.rrb_vector.nodes.last_range.call(null,child));

return cljs.core.__GT_VectorNode.call(null,null,arr__$1);
}
} else {
var rngs = clojure.core.rrb_vector.nodes.ranges.call(null,parent);
var new_rngs = cljs.core.aclone.call(null,rngs);
var i = ((rngs[(32)]) - (1));
var new_arr = cljs.core.aclone.call(null,parent.arr);
(new_arr[i] = child);

(new_arr[(32)] = new_rngs);

(new_rngs[i] = ((rngs[i]) + d));

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});
clojure.core.rrb_vector.nodes.new_path_STAR_ = (function clojure$core$rrb_vector$nodes$new_path_STAR_(shift,node){
var reg_QMARK_ = ((32) === node.arr.length);
var len = ((reg_QMARK_)?(32):(33));
var arr = (new Array(len));
var rngs = ((!(reg_QMARK_))?(function (){var G__12079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__12079[(0)] = node.arr.length);

(G__12079[(32)] = (1));

return G__12079;
})():null);
var ret = cljs.core.__GT_VectorNode.call(null,null,arr);
var arr_12080__$1 = arr;
var shift_12081__$1 = shift;
while(true){
if((shift_12081__$1 === (5))){
if(!(reg_QMARK_)){
(arr_12080__$1[(32)] = rngs);
} else {
}

(arr_12080__$1[(0)] = node);
} else {
var a_12082 = (new Array(len));
var e_12083 = cljs.core.__GT_VectorNode.call(null,null,a_12082);
(arr_12080__$1[(0)] = e_12083);

if(!(reg_QMARK_)){
(arr_12080__$1[(32)] = rngs);
} else {
}

var G__12084 = a_12082;
var G__12085 = (shift_12081__$1 - (5));
arr_12080__$1 = G__12084;
shift_12081__$1 = G__12085;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = (function (){var and__3938__auto__ = clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node);
if(cljs.core.truth_(and__3938__auto__)){
return (tlen === (32));
} else {
return and__3938__auto__;
}
})();
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil.call(null,arr);
var new_arr = (new Array((cljs.core.truth_(reg_QMARK_)?(32):(33))));
var rngs = ((cljs.core.not.call(null,clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node)))?clojure.core.rrb_vector.nodes.ranges.call(null,node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode.call(null,null,tail):clojure.core.rrb_vector.nodes.fold_tail.call(null,(arr[(li - (1))]),(shift - (5)),(cljs.core.truth_(clojure.core.rrb_vector.nodes.regular_QMARK_.call(null,node))?cljs.core.mod.call(null,cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})()),tail));
var new_rngs = ((cljs.core.not.call(null,reg_QMARK_))?(cljs.core.truth_(rngs)?cljs.core.aclone.call(null,rngs):clojure.core.rrb_vector.nodes.regular_ranges.call(null,shift,cnt)):null);
if((((((cret == null)) || ((shift === (5))))) && ((li === (32))))){
return null;
} else {
cljs.core.array_copy.call(null,arr,(0),new_arr,(0),li);

if(cljs.core.truth_(reg_QMARK_)){
} else {
if((((cret == null)) || ((shift === (5))))){
(new_rngs[li] = ((((li > (0)))?(new_rngs[(li - (1))]):((0) | (0))) + tlen));

(new_rngs[(32)] = (li + (1)));
} else {
if((li > (0))){
(new_rngs[(li - (1))] = ((new_rngs[(li - (1))]) + tlen));
} else {
}

(new_rngs[(32)] = li);
}
}

if(cljs.core.not.call(null,reg_QMARK_)){
(new_arr[(32)] = new_rngs);
} else {
}

if((cret == null)){
(new_arr[li] = clojure.core.rrb_vector.nodes.new_path_STAR_.call(null,(shift - (5)),cljs.core.__GT_VectorNode.call(null,null,tail)));
} else {
(new_arr[(((shift === (5)))?li:(li - (1)))] = cret);
}

return cljs.core.__GT_VectorNode.call(null,null,new_arr);
}
});

//# sourceMappingURL=nodes.js.map
