// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_14235 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__14236 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14237 = null;
var count__14238 = (0);
var i__14239 = (0);
while(true){
if((i__14239 < count__14238)){
var vec__14240 = cljs.core._nth.call(null,chunk__14237,i__14239);
var effect_key = cljs.core.nth.call(null,vec__14240,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14240,(1),null);
var temp__5718__auto___14256 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14256)){
var effect_fn_14257 = temp__5718__auto___14256;
effect_fn_14257.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14258 = seq__14236;
var G__14259 = chunk__14237;
var G__14260 = count__14238;
var G__14261 = (i__14239 + (1));
seq__14236 = G__14258;
chunk__14237 = G__14259;
count__14238 = G__14260;
i__14239 = G__14261;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14236);
if(temp__5720__auto__){
var seq__14236__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14236__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14236__$1);
var G__14262 = cljs.core.chunk_rest.call(null,seq__14236__$1);
var G__14263 = c__4351__auto__;
var G__14264 = cljs.core.count.call(null,c__4351__auto__);
var G__14265 = (0);
seq__14236 = G__14262;
chunk__14237 = G__14263;
count__14238 = G__14264;
i__14239 = G__14265;
continue;
} else {
var vec__14243 = cljs.core.first.call(null,seq__14236__$1);
var effect_key = cljs.core.nth.call(null,vec__14243,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14243,(1),null);
var temp__5718__auto___14266 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14266)){
var effect_fn_14267 = temp__5718__auto___14266;
effect_fn_14267.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14268 = cljs.core.next.call(null,seq__14236__$1);
var G__14269 = null;
var G__14270 = (0);
var G__14271 = (0);
seq__14236 = G__14268;
chunk__14237 = G__14269;
count__14238 = G__14270;
i__14239 = G__14271;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13729__auto___14272 = re_frame.interop.now.call(null);
var duration__13730__auto___14273 = (end__13729__auto___14272 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13730__auto___14273,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__13729__auto___14272);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14235;
}} else {
var seq__14246 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14247 = null;
var count__14248 = (0);
var i__14249 = (0);
while(true){
if((i__14249 < count__14248)){
var vec__14250 = cljs.core._nth.call(null,chunk__14247,i__14249);
var effect_key = cljs.core.nth.call(null,vec__14250,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14250,(1),null);
var temp__5718__auto___14274 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14274)){
var effect_fn_14275 = temp__5718__auto___14274;
effect_fn_14275.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14276 = seq__14246;
var G__14277 = chunk__14247;
var G__14278 = count__14248;
var G__14279 = (i__14249 + (1));
seq__14246 = G__14276;
chunk__14247 = G__14277;
count__14248 = G__14278;
i__14249 = G__14279;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14246);
if(temp__5720__auto__){
var seq__14246__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14246__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14246__$1);
var G__14280 = cljs.core.chunk_rest.call(null,seq__14246__$1);
var G__14281 = c__4351__auto__;
var G__14282 = cljs.core.count.call(null,c__4351__auto__);
var G__14283 = (0);
seq__14246 = G__14280;
chunk__14247 = G__14281;
count__14248 = G__14282;
i__14249 = G__14283;
continue;
} else {
var vec__14253 = cljs.core.first.call(null,seq__14246__$1);
var effect_key = cljs.core.nth.call(null,vec__14253,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14253,(1),null);
var temp__5718__auto___14284 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14284)){
var effect_fn_14285 = temp__5718__auto___14284;
effect_fn_14285.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14286 = cljs.core.next.call(null,seq__14246__$1);
var G__14287 = null;
var G__14288 = (0);
var G__14289 = (0);
seq__14246 = G__14286;
chunk__14247 = G__14287;
count__14248 = G__14288;
i__14249 = G__14289;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__14290 = cljs.core.seq.call(null,value);
var chunk__14291 = null;
var count__14292 = (0);
var i__14293 = (0);
while(true){
if((i__14293 < count__14292)){
var map__14294 = cljs.core._nth.call(null,chunk__14291,i__14293);
var map__14294__$1 = ((((!((map__14294 == null)))?(((((map__14294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14294):map__14294);
var effect = map__14294__$1;
var ms = cljs.core.get.call(null,map__14294__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14294__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14290,chunk__14291,count__14292,i__14293,map__14294,map__14294__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14290,chunk__14291,count__14292,i__14293,map__14294,map__14294__$1,effect,ms,dispatch))
,ms);
}


var G__14298 = seq__14290;
var G__14299 = chunk__14291;
var G__14300 = count__14292;
var G__14301 = (i__14293 + (1));
seq__14290 = G__14298;
chunk__14291 = G__14299;
count__14292 = G__14300;
i__14293 = G__14301;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14290);
if(temp__5720__auto__){
var seq__14290__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14290__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14290__$1);
var G__14302 = cljs.core.chunk_rest.call(null,seq__14290__$1);
var G__14303 = c__4351__auto__;
var G__14304 = cljs.core.count.call(null,c__4351__auto__);
var G__14305 = (0);
seq__14290 = G__14302;
chunk__14291 = G__14303;
count__14292 = G__14304;
i__14293 = G__14305;
continue;
} else {
var map__14296 = cljs.core.first.call(null,seq__14290__$1);
var map__14296__$1 = ((((!((map__14296 == null)))?(((((map__14296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14296):map__14296);
var effect = map__14296__$1;
var ms = cljs.core.get.call(null,map__14296__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14296__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14290,chunk__14291,count__14292,i__14293,map__14296,map__14296__$1,effect,ms,dispatch,seq__14290__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14290,chunk__14291,count__14292,i__14293,map__14296,map__14296__$1,effect,ms,dispatch,seq__14290__$1,temp__5720__auto__))
,ms);
}


var G__14306 = cljs.core.next.call(null,seq__14290__$1);
var G__14307 = null;
var G__14308 = (0);
var G__14309 = (0);
seq__14290 = G__14306;
chunk__14291 = G__14307;
count__14292 = G__14308;
i__14293 = G__14309;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__14310 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14311 = null;
var count__14312 = (0);
var i__14313 = (0);
while(true){
if((i__14313 < count__14312)){
var event = cljs.core._nth.call(null,chunk__14311,i__14313);
re_frame.router.dispatch.call(null,event);


var G__14314 = seq__14310;
var G__14315 = chunk__14311;
var G__14316 = count__14312;
var G__14317 = (i__14313 + (1));
seq__14310 = G__14314;
chunk__14311 = G__14315;
count__14312 = G__14316;
i__14313 = G__14317;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14310);
if(temp__5720__auto__){
var seq__14310__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14310__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14310__$1);
var G__14318 = cljs.core.chunk_rest.call(null,seq__14310__$1);
var G__14319 = c__4351__auto__;
var G__14320 = cljs.core.count.call(null,c__4351__auto__);
var G__14321 = (0);
seq__14310 = G__14318;
chunk__14311 = G__14319;
count__14312 = G__14320;
i__14313 = G__14321;
continue;
} else {
var event = cljs.core.first.call(null,seq__14310__$1);
re_frame.router.dispatch.call(null,event);


var G__14322 = cljs.core.next.call(null,seq__14310__$1);
var G__14323 = null;
var G__14324 = (0);
var G__14325 = (0);
seq__14310 = G__14322;
chunk__14311 = G__14323;
count__14312 = G__14324;
i__14313 = G__14325;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__14326 = cljs.core.seq.call(null,value);
var chunk__14327 = null;
var count__14328 = (0);
var i__14329 = (0);
while(true){
if((i__14329 < count__14328)){
var event = cljs.core._nth.call(null,chunk__14327,i__14329);
clear_event.call(null,event);


var G__14330 = seq__14326;
var G__14331 = chunk__14327;
var G__14332 = count__14328;
var G__14333 = (i__14329 + (1));
seq__14326 = G__14330;
chunk__14327 = G__14331;
count__14328 = G__14332;
i__14329 = G__14333;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14326);
if(temp__5720__auto__){
var seq__14326__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14326__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14326__$1);
var G__14334 = cljs.core.chunk_rest.call(null,seq__14326__$1);
var G__14335 = c__4351__auto__;
var G__14336 = cljs.core.count.call(null,c__4351__auto__);
var G__14337 = (0);
seq__14326 = G__14334;
chunk__14327 = G__14335;
count__14328 = G__14336;
i__14329 = G__14337;
continue;
} else {
var event = cljs.core.first.call(null,seq__14326__$1);
clear_event.call(null,event);


var G__14338 = cljs.core.next.call(null,seq__14326__$1);
var G__14339 = null;
var G__14340 = (0);
var G__14341 = (0);
seq__14326 = G__14338;
chunk__14327 = G__14339;
count__14328 = G__14340;
i__14329 = G__14341;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
