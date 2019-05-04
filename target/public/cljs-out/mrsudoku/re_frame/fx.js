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
var _STAR_current_trace_STAR_14301 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__14302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14303 = null;
var count__14304 = (0);
var i__14305 = (0);
while(true){
if((i__14305 < count__14304)){
var vec__14306 = cljs.core._nth.call(null,chunk__14303,i__14305);
var effect_key = cljs.core.nth.call(null,vec__14306,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14306,(1),null);
var temp__5718__auto___14322 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14322)){
var effect_fn_14323 = temp__5718__auto___14322;
effect_fn_14323.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14324 = seq__14302;
var G__14325 = chunk__14303;
var G__14326 = count__14304;
var G__14327 = (i__14305 + (1));
seq__14302 = G__14324;
chunk__14303 = G__14325;
count__14304 = G__14326;
i__14305 = G__14327;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14302);
if(temp__5720__auto__){
var seq__14302__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14302__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14302__$1);
var G__14328 = cljs.core.chunk_rest.call(null,seq__14302__$1);
var G__14329 = c__4351__auto__;
var G__14330 = cljs.core.count.call(null,c__4351__auto__);
var G__14331 = (0);
seq__14302 = G__14328;
chunk__14303 = G__14329;
count__14304 = G__14330;
i__14305 = G__14331;
continue;
} else {
var vec__14309 = cljs.core.first.call(null,seq__14302__$1);
var effect_key = cljs.core.nth.call(null,vec__14309,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14309,(1),null);
var temp__5718__auto___14332 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14332)){
var effect_fn_14333 = temp__5718__auto___14332;
effect_fn_14333.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14334 = cljs.core.next.call(null,seq__14302__$1);
var G__14335 = null;
var G__14336 = (0);
var G__14337 = (0);
seq__14302 = G__14334;
chunk__14303 = G__14335;
count__14304 = G__14336;
i__14305 = G__14337;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13732__auto___14338 = re_frame.interop.now.call(null);
var duration__13733__auto___14339 = (end__13732__auto___14338 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13733__auto___14339,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__13732__auto___14338);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14301;
}} else {
var seq__14312 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14313 = null;
var count__14314 = (0);
var i__14315 = (0);
while(true){
if((i__14315 < count__14314)){
var vec__14316 = cljs.core._nth.call(null,chunk__14313,i__14315);
var effect_key = cljs.core.nth.call(null,vec__14316,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14316,(1),null);
var temp__5718__auto___14340 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14340)){
var effect_fn_14341 = temp__5718__auto___14340;
effect_fn_14341.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14342 = seq__14312;
var G__14343 = chunk__14313;
var G__14344 = count__14314;
var G__14345 = (i__14315 + (1));
seq__14312 = G__14342;
chunk__14313 = G__14343;
count__14314 = G__14344;
i__14315 = G__14345;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14312);
if(temp__5720__auto__){
var seq__14312__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14312__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14312__$1);
var G__14346 = cljs.core.chunk_rest.call(null,seq__14312__$1);
var G__14347 = c__4351__auto__;
var G__14348 = cljs.core.count.call(null,c__4351__auto__);
var G__14349 = (0);
seq__14312 = G__14346;
chunk__14313 = G__14347;
count__14314 = G__14348;
i__14315 = G__14349;
continue;
} else {
var vec__14319 = cljs.core.first.call(null,seq__14312__$1);
var effect_key = cljs.core.nth.call(null,vec__14319,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14319,(1),null);
var temp__5718__auto___14350 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14350)){
var effect_fn_14351 = temp__5718__auto___14350;
effect_fn_14351.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14352 = cljs.core.next.call(null,seq__14312__$1);
var G__14353 = null;
var G__14354 = (0);
var G__14355 = (0);
seq__14312 = G__14352;
chunk__14313 = G__14353;
count__14314 = G__14354;
i__14315 = G__14355;
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
var seq__14356 = cljs.core.seq.call(null,value);
var chunk__14357 = null;
var count__14358 = (0);
var i__14359 = (0);
while(true){
if((i__14359 < count__14358)){
var map__14360 = cljs.core._nth.call(null,chunk__14357,i__14359);
var map__14360__$1 = ((((!((map__14360 == null)))?(((((map__14360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14360):map__14360);
var effect = map__14360__$1;
var ms = cljs.core.get.call(null,map__14360__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14360__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14356,chunk__14357,count__14358,i__14359,map__14360,map__14360__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14356,chunk__14357,count__14358,i__14359,map__14360,map__14360__$1,effect,ms,dispatch))
,ms);
}


var G__14364 = seq__14356;
var G__14365 = chunk__14357;
var G__14366 = count__14358;
var G__14367 = (i__14359 + (1));
seq__14356 = G__14364;
chunk__14357 = G__14365;
count__14358 = G__14366;
i__14359 = G__14367;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14356);
if(temp__5720__auto__){
var seq__14356__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14356__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14356__$1);
var G__14368 = cljs.core.chunk_rest.call(null,seq__14356__$1);
var G__14369 = c__4351__auto__;
var G__14370 = cljs.core.count.call(null,c__4351__auto__);
var G__14371 = (0);
seq__14356 = G__14368;
chunk__14357 = G__14369;
count__14358 = G__14370;
i__14359 = G__14371;
continue;
} else {
var map__14362 = cljs.core.first.call(null,seq__14356__$1);
var map__14362__$1 = ((((!((map__14362 == null)))?(((((map__14362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14362):map__14362);
var effect = map__14362__$1;
var ms = cljs.core.get.call(null,map__14362__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14362__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14356,chunk__14357,count__14358,i__14359,map__14362,map__14362__$1,effect,ms,dispatch,seq__14356__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14356,chunk__14357,count__14358,i__14359,map__14362,map__14362__$1,effect,ms,dispatch,seq__14356__$1,temp__5720__auto__))
,ms);
}


var G__14372 = cljs.core.next.call(null,seq__14356__$1);
var G__14373 = null;
var G__14374 = (0);
var G__14375 = (0);
seq__14356 = G__14372;
chunk__14357 = G__14373;
count__14358 = G__14374;
i__14359 = G__14375;
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
var seq__14376 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14377 = null;
var count__14378 = (0);
var i__14379 = (0);
while(true){
if((i__14379 < count__14378)){
var event = cljs.core._nth.call(null,chunk__14377,i__14379);
re_frame.router.dispatch.call(null,event);


var G__14380 = seq__14376;
var G__14381 = chunk__14377;
var G__14382 = count__14378;
var G__14383 = (i__14379 + (1));
seq__14376 = G__14380;
chunk__14377 = G__14381;
count__14378 = G__14382;
i__14379 = G__14383;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14376);
if(temp__5720__auto__){
var seq__14376__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14376__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14376__$1);
var G__14384 = cljs.core.chunk_rest.call(null,seq__14376__$1);
var G__14385 = c__4351__auto__;
var G__14386 = cljs.core.count.call(null,c__4351__auto__);
var G__14387 = (0);
seq__14376 = G__14384;
chunk__14377 = G__14385;
count__14378 = G__14386;
i__14379 = G__14387;
continue;
} else {
var event = cljs.core.first.call(null,seq__14376__$1);
re_frame.router.dispatch.call(null,event);


var G__14388 = cljs.core.next.call(null,seq__14376__$1);
var G__14389 = null;
var G__14390 = (0);
var G__14391 = (0);
seq__14376 = G__14388;
chunk__14377 = G__14389;
count__14378 = G__14390;
i__14379 = G__14391;
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
var seq__14392 = cljs.core.seq.call(null,value);
var chunk__14393 = null;
var count__14394 = (0);
var i__14395 = (0);
while(true){
if((i__14395 < count__14394)){
var event = cljs.core._nth.call(null,chunk__14393,i__14395);
clear_event.call(null,event);


var G__14396 = seq__14392;
var G__14397 = chunk__14393;
var G__14398 = count__14394;
var G__14399 = (i__14395 + (1));
seq__14392 = G__14396;
chunk__14393 = G__14397;
count__14394 = G__14398;
i__14395 = G__14399;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14392);
if(temp__5720__auto__){
var seq__14392__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14392__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14392__$1);
var G__14400 = cljs.core.chunk_rest.call(null,seq__14392__$1);
var G__14401 = c__4351__auto__;
var G__14402 = cljs.core.count.call(null,c__4351__auto__);
var G__14403 = (0);
seq__14392 = G__14400;
chunk__14393 = G__14401;
count__14394 = G__14402;
i__14395 = G__14403;
continue;
} else {
var event = cljs.core.first.call(null,seq__14392__$1);
clear_event.call(null,event);


var G__14404 = cljs.core.next.call(null,seq__14392__$1);
var G__14405 = null;
var G__14406 = (0);
var G__14407 = (0);
seq__14392 = G__14404;
chunk__14393 = G__14405;
count__14394 = G__14406;
i__14395 = G__14407;
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
