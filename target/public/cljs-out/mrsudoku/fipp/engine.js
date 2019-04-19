// Compiled by ClojureScript 1.10.339 {}
goog.provide('fipp.engine');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fipp.deque');
if((typeof fipp !== 'undefined') && (typeof fipp.engine !== 'undefined') && (typeof fipp.engine.serialize_node !== 'undefined')){
} else {
fipp.engine.serialize_node = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fipp.engine","serialize-node"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
fipp.engine.serialize = (function fipp$engine$serialize(doc){
if((doc == null)){
return null;
} else {
if(cljs.core.seq_QMARK_.call(null,doc)){
return cljs.core.mapcat.call(null,fipp.engine.serialize,doc);
} else {
if(typeof doc === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),doc], null)], null);
} else {
if((doc instanceof cljs.core.Keyword)){
return fipp.engine.serialize_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null));
} else {
if(cljs.core.vector_QMARK_.call(null,doc)){
return fipp.engine.serialize_node.call(null,doc);
} else {
throw cljs.core.ex_info.call(null,"Unexpected class for doc node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),doc], null));

}
}
}
}
}
});
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__12700){
var vec__12701 = p__12700;
var seq__12702 = cljs.core.seq.call(null,vec__12701);
var first__12703 = cljs.core.first.call(null,seq__12702);
var seq__12702__$1 = cljs.core.next.call(null,seq__12702);
var _ = first__12703;
var text = seq__12702__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__12704){
var vec__12705 = p__12704;
var seq__12706 = cljs.core.seq.call(null,vec__12705);
var first__12707 = cljs.core.first.call(null,seq__12706);
var seq__12706__$1 = cljs.core.next.call(null,seq__12706);
var _ = first__12707;
var text = seq__12706__$1;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.call(null,cljs.core.str,text)], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"escaped","escaped",-1007929769),(function (p__12708){
var vec__12709 = p__12708;
var _ = cljs.core.nth.call(null,vec__12709,(0),null);
var text = cljs.core.nth.call(null,vec__12709,(1),null);
if(typeof text === 'string'){
} else {
throw (new Error("Assert failed: (string? text)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"escaped","escaped",-1007929769),new cljs.core.Keyword(null,"text","text",-1790561697),text], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"span","span",1394872991),(function (p__12712){
var vec__12713 = p__12712;
var seq__12714 = cljs.core.seq.call(null,vec__12713);
var first__12715 = cljs.core.first.call(null,seq__12714);
var seq__12714__$1 = cljs.core.next.call(null,seq__12714);
var _ = first__12715;
var children = seq__12714__$1;
return fipp.engine.serialize.call(null,children);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"line","line",212345235),(function (p__12716){
var vec__12717 = p__12716;
var _ = cljs.core.nth.call(null,vec__12717,(0),null);
var inline = cljs.core.nth.call(null,vec__12717,(1),null);
var terminate = cljs.core.nth.call(null,vec__12717,(2),null);
var inline__$1 = (function (){var or__3949__auto__ = inline;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return " ";
}
})();
var terminate__$1 = (function (){var or__3949__auto__ = terminate;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})();
if(typeof inline__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? inline)"));
}

if(typeof terminate__$1 === 'string'){
} else {
throw (new Error("Assert failed: (string? terminate)"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"inline","inline",1399884222),inline__$1,new cljs.core.Keyword(null,"terminate","terminate",1256003496),terminate__$1], null)], null);
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"break","break",126570225),(function() { 
var G__12720__delegate = function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"break","break",126570225)], null)], null);
};
var G__12720 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12721__i = 0, G__12721__a = new Array(arguments.length -  0);
while (G__12721__i < G__12721__a.length) {G__12721__a[G__12721__i] = arguments[G__12721__i + 0]; ++G__12721__i;}
  _ = new cljs.core.IndexedSeq(G__12721__a,0,null);
} 
return G__12720__delegate.call(this,_);};
G__12720.cljs$lang$maxFixedArity = 0;
G__12720.cljs$lang$applyTo = (function (arglist__12722){
var _ = cljs.core.seq(arglist__12722);
return G__12720__delegate(_);
});
G__12720.cljs$core$IFn$_invoke$arity$variadic = G__12720__delegate;
return G__12720;
})()
);
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"group","group",582596132),(function (p__12723){
var vec__12724 = p__12723;
var seq__12725 = cljs.core.seq.call(null,vec__12724);
var first__12726 = cljs.core.first.call(null,seq__12725);
var seq__12725__$1 = cljs.core.next.call(null,seq__12725);
var _ = first__12726;
var children = seq__12725__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319)], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"end","end",-268185958)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"nest","nest",-314993663),(function (p__12727){
var vec__12728 = p__12727;
var seq__12729 = cljs.core.seq.call(null,vec__12728);
var first__12730 = cljs.core.first.call(null,seq__12729);
var seq__12729__$1 = cljs.core.next.call(null,seq__12729);
var _ = first__12730;
var args = seq__12729__$1;
var vec__12731 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(2),args));
var seq__12732 = cljs.core.seq.call(null,vec__12731);
var first__12733 = cljs.core.first.call(null,seq__12732);
var seq__12732__$1 = cljs.core.next.call(null,seq__12732);
var offset = first__12733;
var children = seq__12732__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"nest","nest",-314993663),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
cljs.core._add_method.call(null,fipp.engine.serialize_node,new cljs.core.Keyword(null,"align","align",1964212802),(function (p__12734){
var vec__12735 = p__12734;
var seq__12736 = cljs.core.seq.call(null,vec__12735);
var first__12737 = cljs.core.first.call(null,seq__12736);
var seq__12736__$1 = cljs.core.next.call(null,seq__12736);
var _ = first__12737;
var args = seq__12736__$1;
var vec__12738 = ((typeof cljs.core.first.call(null,args) === 'number')?args:cljs.core.cons.call(null,(0),args));
var seq__12739 = cljs.core.seq.call(null,vec__12738);
var first__12740 = cljs.core.first.call(null,seq__12739);
var seq__12739__$1 = cljs.core.next.call(null,seq__12739);
var offset = first__12740;
var children = seq__12739__$1;
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null)], null),fipp.engine.serialize.call(null,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"outdent","outdent",467209411)], null)], null));
}));
/**
 * A transducer which annotates the right-side of nodes assuming a
 *   hypothetical single-line formatting of the document. Groups and indentation
 *   directives are temporarily assumed to be zero-width. These values are used
 *   by subsequent passes to produce the final layout.
 */
fipp.engine.annotate_rights = (function fipp$engine$annotate_rights(rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
return ((function (pos){
return (function() {
var G__12742 = null;
var G__12742__0 = (function (){
return rf.call(null);
});
var G__12742__1 = (function (res){
return rf.call(null,res);
});
var G__12742__2 = (function (res,node){
var delta = (function (){var G__12741 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node);
var G__12741__$1 = (((G__12741 instanceof cljs.core.Keyword))?G__12741.fqn:null);
switch (G__12741__$1) {
case "text":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
return cljs.core.count.call(null,new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node));

break;
case "escaped":
return (1);

break;
default:
return (0);

}
})();
var p = cljs.core._vreset_BANG_.call(null,pos,(cljs.core._deref.call(null,pos) + delta));
return rf.call(null,res,cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"right","right",-452581833),p));
});
G__12742 = function(res,node){
switch(arguments.length){
case 0:
return G__12742__0.call(this);
case 1:
return G__12742__1.call(this,res);
case 2:
return G__12742__2.call(this,res,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12742.cljs$core$IFn$_invoke$arity$0 = G__12742__0;
G__12742.cljs$core$IFn$_invoke$arity$1 = G__12742__1;
G__12742.cljs$core$IFn$_invoke$arity$2 = G__12742__2;
return G__12742;
})()
;})(pos))
});
fipp.engine.update_right = (function fipp$engine$update_right(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12747 = arguments.length;
var i__4532__auto___12748 = (0);
while(true){
if((i__4532__auto___12748 < len__4531__auto___12747)){
args__4534__auto__.push((arguments[i__4532__auto___12748]));

var G__12749 = (i__4532__auto___12748 + (1));
i__4532__auto___12748 = G__12749;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fipp.engine.update_right.cljs$core$IFn$_invoke$arity$variadic = (function (deque,f,args){
return fipp.deque.conjr.call(null,cljs.core.pop.call(null,deque),cljs.core.apply.call(null,f,cljs.core.peek.call(null,deque),args));
});

fipp.engine.update_right.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fipp.engine.update_right.cljs$lang$applyTo = (function (seq12744){
var G__12745 = cljs.core.first.call(null,seq12744);
var seq12744__$1 = cljs.core.next.call(null,seq12744);
var G__12746 = cljs.core.first.call(null,seq12744__$1);
var seq12744__$2 = cljs.core.next.call(null,seq12744__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12745,G__12746,seq12744__$2);
});

/**
 * Given printing options, returns a transducer which annotate the right-side
 *   of groups on their :begin nodes.  This includes the pruning algorithm which
 *   will annotate some :begin nodes as being :too-far to the right without
 *   calculating their exact sizes.
 */
fipp.engine.annotate_begins = (function fipp$engine$annotate_begins(p__12750){
var map__12751 = p__12750;
var map__12751__$1 = ((((!((map__12751 == null)))?(((((map__12751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12751):map__12751);
var options = map__12751__$1;
var width = cljs.core.get.call(null,map__12751__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__12751,map__12751__$1,options,width){
return (function (rf){
var pos = cljs.core.volatile_BANG_.call(null,(0));
var bufs = cljs.core.volatile_BANG_.call(null,fipp.deque.empty);
return ((function (pos,bufs,map__12751,map__12751__$1,options,width){
return (function() {
var G__12756 = null;
var G__12756__0 = (function (){
return rf.call(null);
});
var G__12756__1 = (function (res){
return rf.call(null,res);
});
var G__12756__2 = (function (res,p__12753){
var map__12754 = p__12753;
var map__12754__$1 = ((((!((map__12754 == null)))?(((((map__12754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12754):map__12754);
var node = map__12754__$1;
var op = cljs.core.get.call(null,map__12754__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__12754__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var buffers = cljs.core.deref.call(null,bufs);
if(cljs.core.empty_QMARK_.call(null,buffers)){
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319))){
var position_STAR_ = (right + width);
var buffer = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null);
cljs.core.vreset_BANG_.call(null,pos,position_STAR_);

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.create.call(null,buffer));

return res;
} else {
return rf.call(null,res,node);
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"end","end",-268185958))){
var buffer = cljs.core.peek.call(null,buffers);
var buffers_STAR_ = cljs.core.pop.call(null,buffers);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),right], null);
var nodes = fipp.deque.conjlr.call(null,begin,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer),node);
if(cljs.core.empty_QMARK_.call(null,buffers_STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return cljs.core.reduce.call(null,rf,res,nodes);
} else {
if(cljs.core.vector_QMARK_.call(null,buffers_STAR_)){
} else {
throw (new Error("Assert failed: (vector? buffers*)"));
}

if(cljs.core.vector_QMARK_.call(null,nodes)){
} else {
throw (new Error("Assert failed: (vector? nodes)"));
}

cljs.core.vreset_BANG_.call(null,bufs,fipp.engine.update_right.call(null,buffers_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.concat,nodes));

return res;
}
} else {
var buffers_STAR_ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"begin","begin",-319034319)))?fipp.deque.conjr.call(null,buffers,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(right + width),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),fipp.deque.empty], null)):fipp.engine.update_right.call(null,buffers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),fipp.deque.conjr,node));
var res__$1 = res;
while(true){
if((((right <= cljs.core.deref.call(null,pos))) && ((cljs.core.count.call(null,buffers_STAR_) <= width)))){
cljs.core.vreset_BANG_.call(null,bufs,buffers_STAR_);

return res__$1;
} else {
var buffer = cljs.core.first.call(null,buffers_STAR_);
var buffers_STAR__STAR_ = fipp.deque.popl.call(null,buffers_STAR_);
var begin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"too-far","too-far",85800617)], null);
var res_STAR_ = rf.call(null,res__$1,begin);
var res_STAR___$1 = cljs.core.reduce.call(null,rf,res_STAR_,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(buffer));
if(cljs.core.empty_QMARK_.call(null,buffers_STAR__STAR_)){
cljs.core.vreset_BANG_.call(null,pos,(0));

cljs.core.vreset_BANG_.call(null,bufs,fipp.deque.empty);

return res_STAR___$1;
} else {
cljs.core.vreset_BANG_.call(null,pos,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,buffers_STAR__STAR_)));

var G__12757 = buffers_STAR__STAR_;
var G__12758 = res_STAR___$1;
buffers_STAR_ = G__12757;
res__$1 = G__12758;
continue;
}
}
break;
}
}
}
});
G__12756 = function(res,p__12753){
switch(arguments.length){
case 0:
return G__12756__0.call(this);
case 1:
return G__12756__1.call(this,res);
case 2:
return G__12756__2.call(this,res,p__12753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12756.cljs$core$IFn$_invoke$arity$0 = G__12756__0;
G__12756.cljs$core$IFn$_invoke$arity$1 = G__12756__1;
G__12756.cljs$core$IFn$_invoke$arity$2 = G__12756__2;
return G__12756;
})()
;})(pos,bufs,map__12751,map__12751__$1,options,width))
});
;})(map__12751,map__12751__$1,options,width))
});
/**
 * Given printing options, returns a transducer which produces the fully
 *   laid-out strings.
 */
fipp.engine.format_nodes = (function fipp$engine$format_nodes(p__12759){
var map__12760 = p__12759;
var map__12760__$1 = ((((!((map__12760 == null)))?(((((map__12760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12760):map__12760);
var options = map__12760__$1;
var width = cljs.core.get.call(null,map__12760__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return ((function (map__12760,map__12760__$1,options,width){
return (function (rf){
var fits = cljs.core.volatile_BANG_.call(null,(0));
var length = cljs.core.volatile_BANG_.call(null,width);
var tab_stops = cljs.core.volatile_BANG_.call(null,cljs.core.list((0)));
var column = cljs.core.volatile_BANG_.call(null,(0));
return ((function (fits,length,tab_stops,column,map__12760,map__12760__$1,options,width){
return (function() {
var G__12766 = null;
var G__12766__0 = (function (){
return rf.call(null);
});
var G__12766__1 = (function (res){
return rf.call(null,res);
});
var G__12766__2 = (function (res,p__12762){
var map__12763 = p__12762;
var map__12763__$1 = ((((!((map__12763 == null)))?(((((map__12763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12763):map__12763);
var node = map__12763__$1;
var op = cljs.core.get.call(null,map__12763__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var right = cljs.core.get.call(null,map__12763__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var indent = cljs.core.peek.call(null,cljs.core.deref.call(null,tab_stops));
var G__12765 = op;
var G__12765__$1 = (((G__12765 instanceof cljs.core.Keyword))?G__12765.fqn:null);
switch (G__12765__$1) {
case "text":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,text)));

return rf.call(null,res_STAR_,text);

break;
case "escaped":
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node);
var res_STAR_ = (((cljs.core.deref.call(null,column) === (0)))?(function (){
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + indent));

return rf.call(null,res,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,indent," ")));
})()
:res);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + (1)));

return rf.call(null,res_STAR_,text);

break;
case "pass":
return rf.call(null,res,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));

break;
case "line":
if((cljs.core.deref.call(null,fits) === (0))){
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"terminate","terminate",1256003496).cljs$core$IFn$_invoke$arity$1(node)),"\n"].join(''));
} else {
var inline = new cljs.core.Keyword(null,"inline","inline",1399884222).cljs$core$IFn$_invoke$arity$1(node);
cljs.core._vreset_BANG_.call(null,column,(cljs.core._deref.call(null,column) + cljs.core.count.call(null,inline)));

return rf.call(null,res,inline);
}

break;
case "break":
cljs.core.vreset_BANG_.call(null,length,((right + width) - indent));

cljs.core.vreset_BANG_.call(null,column,(0));

return rf.call(null,res,"\n");

break;
case "nest":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(indent + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "align":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.conj.call(null,cljs.core._deref.call(null,tab_stops),(cljs.core.deref.call(null,column) + new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(node))));

return res;

break;
case "outdent":
cljs.core._vreset_BANG_.call(null,tab_stops,cljs.core.pop.call(null,cljs.core._deref.call(null,tab_stops)));

return res;

break;
case "begin":
cljs.core.vreset_BANG_.call(null,fits,(((cljs.core.deref.call(null,fits) > (0)))?(cljs.core.deref.call(null,fits) + (1)):((cljs.core._EQ_.call(null,right,new cljs.core.Keyword(null,"too-far","too-far",85800617)))?(0):(((right <= cljs.core.deref.call(null,length)))?(1):(0)
))));

return res;

break;
case "end":
cljs.core.vreset_BANG_.call(null,fits,(function (){var x__4037__auto__ = (0);
var y__4038__auto__ = (cljs.core.deref.call(null,fits) - (1));
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})());

return res;

break;
default:
throw cljs.core.ex_info.call(null,"Unexpected node op",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));

}
});
G__12766 = function(res,p__12762){
switch(arguments.length){
case 0:
return G__12766__0.call(this);
case 1:
return G__12766__1.call(this,res);
case 2:
return G__12766__2.call(this,res,p__12762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12766.cljs$core$IFn$_invoke$arity$0 = G__12766__0;
G__12766.cljs$core$IFn$_invoke$arity$1 = G__12766__1;
G__12766.cljs$core$IFn$_invoke$arity$2 = G__12766__2;
return G__12766;
})()
;})(fits,length,tab_stops,column,map__12760,map__12760__$1,options,width))
});
;})(map__12760,map__12760__$1,options,width))
});
fipp.engine.pprint_document = (function fipp$engine$pprint_document(document,options){
var options_12768__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(70)], null),options);
cljs.core.run_BANG_.call(null,cljs.core.print,cljs.core.eduction.call(null,fipp.engine.annotate_rights,fipp.engine.annotate_begins.call(null,options_12768__$1),fipp.engine.format_nodes.call(null,options_12768__$1),fipp.engine.serialize.call(null,document)));

return cljs.core.println.call(null);
});

//# sourceMappingURL=engine.js.map
