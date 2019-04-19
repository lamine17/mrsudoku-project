// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__13798){
var map__13799 = p__13798;
var map__13799__$1 = ((((!((map__13799 == null)))?(((((map__13799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13799):map__13799);
var operation = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__13799__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__13801_13813 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__13802_13814 = null;
var count__13803_13815 = (0);
var i__13804_13816 = (0);
while(true){
if((i__13804_13816 < count__13803_13815)){
var vec__13805_13817 = cljs.core._nth.call(null,chunk__13802_13814,i__13804_13816);
var k_13818 = cljs.core.nth.call(null,vec__13805_13817,(0),null);
var cb_13819 = cljs.core.nth.call(null,vec__13805_13817,(1),null);
try{cb_13819.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e13808){var e_13820 = e13808;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_13818,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_13820);
}

var G__13821 = seq__13801_13813;
var G__13822 = chunk__13802_13814;
var G__13823 = count__13803_13815;
var G__13824 = (i__13804_13816 + (1));
seq__13801_13813 = G__13821;
chunk__13802_13814 = G__13822;
count__13803_13815 = G__13823;
i__13804_13816 = G__13824;
continue;
} else {
var temp__5720__auto___13825 = cljs.core.seq.call(null,seq__13801_13813);
if(temp__5720__auto___13825){
var seq__13801_13826__$1 = temp__5720__auto___13825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13801_13826__$1)){
var c__4351__auto___13827 = cljs.core.chunk_first.call(null,seq__13801_13826__$1);
var G__13828 = cljs.core.chunk_rest.call(null,seq__13801_13826__$1);
var G__13829 = c__4351__auto___13827;
var G__13830 = cljs.core.count.call(null,c__4351__auto___13827);
var G__13831 = (0);
seq__13801_13813 = G__13828;
chunk__13802_13814 = G__13829;
count__13803_13815 = G__13830;
i__13804_13816 = G__13831;
continue;
} else {
var vec__13809_13832 = cljs.core.first.call(null,seq__13801_13826__$1);
var k_13833 = cljs.core.nth.call(null,vec__13809_13832,(0),null);
var cb_13834 = cljs.core.nth.call(null,vec__13809_13832,(1),null);
try{cb_13834.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e13812){var e_13835 = e13812;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_13833,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_13835);
}

var G__13836 = cljs.core.next.call(null,seq__13801_13826__$1);
var G__13837 = null;
var G__13838 = (0);
var G__13839 = (0);
seq__13801_13813 = G__13836;
chunk__13802_13814 = G__13837;
count__13803_13815 = G__13838;
i__13804_13816 = G__13839;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
