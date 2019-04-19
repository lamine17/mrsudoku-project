// Compiled by ClojureScript 1.10.339 {}
goog.provide('clojure.core.rrb_vector');
goog.require('cljs.core');
goog.require('clojure.core.rrb_vector.protocols');
goog.require('clojure.core.rrb_vector.rrbt');
goog.require('clojure.core.rrb_vector.interop');
/**
 * Concatenates the given vectors in logarithmic time.
 */
clojure.core.rrb_vector.catvec = (function clojure$core$rrb_vector$catvec(var_args){
var G__12597 = arguments.length;
switch (G__12597) {
case 0:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___12599 = arguments.length;
var i__4532__auto___12600 = (0);
while(true){
if((i__4532__auto___12600 < len__4531__auto___12599)){
args_arr__4546__auto__.push((arguments[i__4532__auto___12600]));

var G__12601 = (i__4532__auto___12600 + (1));
i__4532__auto___12600 = G__12601;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4547__auto__);

}
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$1 = (function (v1){
return v1;
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$2 = (function (v1,v2){
return clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$3 = (function (v1,v2,v3){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),v3);
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$4 = (function (v1,v2,v3,v4){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4));
});

clojure.core.rrb_vector.catvec.cljs$core$IFn$_invoke$arity$variadic = (function (v1,v2,v3,v4,vn){
return clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,clojure.core.rrb_vector.protocols._splicev.call(null,v1,v2),clojure.core.rrb_vector.protocols._splicev.call(null,v3,v4)),cljs.core.apply.call(null,clojure.core.rrb_vector.catvec,vn));
});

/** @this {Function} */
clojure.core.rrb_vector.catvec.cljs$lang$applyTo = (function (seq12592){
var G__12593 = cljs.core.first.call(null,seq12592);
var seq12592__$1 = cljs.core.next.call(null,seq12592);
var G__12594 = cljs.core.first.call(null,seq12592__$1);
var seq12592__$2 = cljs.core.next.call(null,seq12592__$1);
var G__12595 = cljs.core.first.call(null,seq12592__$2);
var seq12592__$3 = cljs.core.next.call(null,seq12592__$2);
var G__12596 = cljs.core.first.call(null,seq12592__$3);
var seq12592__$4 = cljs.core.next.call(null,seq12592__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12593,G__12594,G__12595,G__12596,seq12592__$4);
});

clojure.core.rrb_vector.catvec.cljs$lang$maxFixedArity = (4);

/**
 * Returns a new vector containing the elements of the given vector v
 *   lying between the start (inclusive) and end (exclusive) indices in
 *   logarithmic time. end defaults to end of vector. The resulting
 *   vector shares structure with the original, but does not hold on to
 *   any elements of the original vector lying outside the given index
 *   range.
 */
clojure.core.rrb_vector.subvec = (function clojure$core$rrb_vector$subvec(var_args){
var G__12603 = arguments.length;
switch (G__12603) {
case 2:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,cljs.core.count.call(null,v));
});

clojure.core.rrb_vector.subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
return clojure.core.rrb_vector.protocols._slicev.call(null,v,start,end);
});

clojure.core.rrb_vector.subvec.cljs$lang$maxFixedArity = 3;

/**
 * Creates a new vector containing the args.
 */
clojure.core.rrb_vector.vector = (function clojure$core$rrb_vector$vector(var_args){
var G__12611 = arguments.length;
switch (G__12611) {
case 0:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___12618 = arguments.length;
var i__4532__auto___12619 = (0);
while(true){
if((i__4532__auto___12619 < len__4531__auto___12618)){
args_arr__4546__auto__.push((arguments[i__4532__auto___12619]));

var G__12620 = (i__4532__auto___12619 + (1));
i__4532__auto___12619 = G__12620;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((4)),(0),null));
return clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4547__auto__);

}
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$0 = (function (){
var arr__12612 = [];
return (new clojure.core.rrb_vector.rrbt.Vector(0,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__12612,null,(0)));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$1 = (function (x1){
var arr__12613 = [null];
(arr__12613[(0)] = x1);

return (new clojure.core.rrb_vector.rrbt.Vector(1,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__12613,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$2 = (function (x1,x2){
var arr__12614 = [null,null];
(arr__12614[(0)] = x1);

(arr__12614[(1)] = x2);

return (new clojure.core.rrb_vector.rrbt.Vector(2,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__12614,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$3 = (function (x1,x2,x3){
var arr__12615 = [null,null,null];
(arr__12615[(0)] = x1);

(arr__12615[(1)] = x2);

(arr__12615[(2)] = x3);

return (new clojure.core.rrb_vector.rrbt.Vector(3,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__12615,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$4 = (function (x1,x2,x3,x4){
var arr__12616 = [null,null,null,null];
(arr__12616[(0)] = x1);

(arr__12616[(1)] = x2);

(arr__12616[(2)] = x3);

(arr__12616[(3)] = x4);

return (new clojure.core.rrb_vector.rrbt.Vector(4,(5),cljs.core.PersistentVector.EMPTY_NODE,arr__12616,null,null));
});

clojure.core.rrb_vector.vector.cljs$core$IFn$_invoke$arity$variadic = (function (x1,x2,x3,x4,xn){
return cljs.core.into.call(null,clojure.core.rrb_vector.vector.call(null,x1,x2,x3,x4),xn);
});

/** @this {Function} */
clojure.core.rrb_vector.vector.cljs$lang$applyTo = (function (seq12606){
var G__12607 = cljs.core.first.call(null,seq12606);
var seq12606__$1 = cljs.core.next.call(null,seq12606);
var G__12608 = cljs.core.first.call(null,seq12606__$1);
var seq12606__$2 = cljs.core.next.call(null,seq12606__$1);
var G__12609 = cljs.core.first.call(null,seq12606__$2);
var seq12606__$3 = cljs.core.next.call(null,seq12606__$2);
var G__12610 = cljs.core.first.call(null,seq12606__$3);
var seq12606__$4 = cljs.core.next.call(null,seq12606__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12607,G__12608,G__12609,G__12610,seq12606__$4);
});

clojure.core.rrb_vector.vector.cljs$lang$maxFixedArity = (4);

/**
 * Returns a vector containing the contents of coll.
 * 
 *   If coll is a vector, returns an RRB vector using the internal tree
 *   of coll.
 */
clojure.core.rrb_vector.vec = (function clojure$core$rrb_vector$vec(coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return clojure.core.rrb_vector.rrbt._as_rrbt.call(null,coll);
} else {
return cljs.core.apply.call(null,clojure.core.rrb_vector.vector,coll);
}
});

//# sourceMappingURL=rrb_vector.js.map
