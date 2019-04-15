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
var _STAR_current_trace_STAR_14149 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__14150 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14151 = null;
var count__14152 = (0);
var i__14153 = (0);
while(true){
if((i__14153 < count__14152)){
var vec__14154 = cljs.core._nth.call(null,chunk__14151,i__14153);
var effect_key = cljs.core.nth.call(null,vec__14154,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14154,(1),null);
var temp__5718__auto___14170 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14170)){
var effect_fn_14171 = temp__5718__auto___14170;
effect_fn_14171.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14172 = seq__14150;
var G__14173 = chunk__14151;
var G__14174 = count__14152;
var G__14175 = (i__14153 + (1));
seq__14150 = G__14172;
chunk__14151 = G__14173;
count__14152 = G__14174;
i__14153 = G__14175;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14150);
if(temp__5720__auto__){
var seq__14150__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14150__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14150__$1);
var G__14176 = cljs.core.chunk_rest.call(null,seq__14150__$1);
var G__14177 = c__4351__auto__;
var G__14178 = cljs.core.count.call(null,c__4351__auto__);
var G__14179 = (0);
seq__14150 = G__14176;
chunk__14151 = G__14177;
count__14152 = G__14178;
i__14153 = G__14179;
continue;
} else {
var vec__14157 = cljs.core.first.call(null,seq__14150__$1);
var effect_key = cljs.core.nth.call(null,vec__14157,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14157,(1),null);
var temp__5718__auto___14180 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14180)){
var effect_fn_14181 = temp__5718__auto___14180;
effect_fn_14181.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14182 = cljs.core.next.call(null,seq__14150__$1);
var G__14183 = null;
var G__14184 = (0);
var G__14185 = (0);
seq__14150 = G__14182;
chunk__14151 = G__14183;
count__14152 = G__14184;
i__14153 = G__14185;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__13722__auto___14186 = re_frame.interop.now.call(null);
var duration__13723__auto___14187 = (end__13722__auto___14186 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13723__auto___14187,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__13722__auto___14186);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_14149;
}} else {
var seq__14160 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14161 = null;
var count__14162 = (0);
var i__14163 = (0);
while(true){
if((i__14163 < count__14162)){
var vec__14164 = cljs.core._nth.call(null,chunk__14161,i__14163);
var effect_key = cljs.core.nth.call(null,vec__14164,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14164,(1),null);
var temp__5718__auto___14188 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14188)){
var effect_fn_14189 = temp__5718__auto___14188;
effect_fn_14189.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14190 = seq__14160;
var G__14191 = chunk__14161;
var G__14192 = count__14162;
var G__14193 = (i__14163 + (1));
seq__14160 = G__14190;
chunk__14161 = G__14191;
count__14162 = G__14192;
i__14163 = G__14193;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14160);
if(temp__5720__auto__){
var seq__14160__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14160__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14160__$1);
var G__14194 = cljs.core.chunk_rest.call(null,seq__14160__$1);
var G__14195 = c__4351__auto__;
var G__14196 = cljs.core.count.call(null,c__4351__auto__);
var G__14197 = (0);
seq__14160 = G__14194;
chunk__14161 = G__14195;
count__14162 = G__14196;
i__14163 = G__14197;
continue;
} else {
var vec__14167 = cljs.core.first.call(null,seq__14160__$1);
var effect_key = cljs.core.nth.call(null,vec__14167,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14167,(1),null);
var temp__5718__auto___14198 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14198)){
var effect_fn_14199 = temp__5718__auto___14198;
effect_fn_14199.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14200 = cljs.core.next.call(null,seq__14160__$1);
var G__14201 = null;
var G__14202 = (0);
var G__14203 = (0);
seq__14160 = G__14200;
chunk__14161 = G__14201;
count__14162 = G__14202;
i__14163 = G__14203;
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
var seq__14204 = cljs.core.seq.call(null,value);
var chunk__14205 = null;
var count__14206 = (0);
var i__14207 = (0);
while(true){
if((i__14207 < count__14206)){
var map__14208 = cljs.core._nth.call(null,chunk__14205,i__14207);
var map__14208__$1 = ((((!((map__14208 == null)))?(((((map__14208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14208):map__14208);
var effect = map__14208__$1;
var ms = cljs.core.get.call(null,map__14208__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14208__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14204,chunk__14205,count__14206,i__14207,map__14208,map__14208__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14204,chunk__14205,count__14206,i__14207,map__14208,map__14208__$1,effect,ms,dispatch))
,ms);
}


var G__14212 = seq__14204;
var G__14213 = chunk__14205;
var G__14214 = count__14206;
var G__14215 = (i__14207 + (1));
seq__14204 = G__14212;
chunk__14205 = G__14213;
count__14206 = G__14214;
i__14207 = G__14215;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14204);
if(temp__5720__auto__){
var seq__14204__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14204__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14204__$1);
var G__14216 = cljs.core.chunk_rest.call(null,seq__14204__$1);
var G__14217 = c__4351__auto__;
var G__14218 = cljs.core.count.call(null,c__4351__auto__);
var G__14219 = (0);
seq__14204 = G__14216;
chunk__14205 = G__14217;
count__14206 = G__14218;
i__14207 = G__14219;
continue;
} else {
var map__14210 = cljs.core.first.call(null,seq__14204__$1);
var map__14210__$1 = ((((!((map__14210 == null)))?(((((map__14210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14210):map__14210);
var effect = map__14210__$1;
var ms = cljs.core.get.call(null,map__14210__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14210__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14204,chunk__14205,count__14206,i__14207,map__14210,map__14210__$1,effect,ms,dispatch,seq__14204__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14204,chunk__14205,count__14206,i__14207,map__14210,map__14210__$1,effect,ms,dispatch,seq__14204__$1,temp__5720__auto__))
,ms);
}


var G__14220 = cljs.core.next.call(null,seq__14204__$1);
var G__14221 = null;
var G__14222 = (0);
var G__14223 = (0);
seq__14204 = G__14220;
chunk__14205 = G__14221;
count__14206 = G__14222;
i__14207 = G__14223;
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
var seq__14224 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14225 = null;
var count__14226 = (0);
var i__14227 = (0);
while(true){
if((i__14227 < count__14226)){
var event = cljs.core._nth.call(null,chunk__14225,i__14227);
re_frame.router.dispatch.call(null,event);


var G__14228 = seq__14224;
var G__14229 = chunk__14225;
var G__14230 = count__14226;
var G__14231 = (i__14227 + (1));
seq__14224 = G__14228;
chunk__14225 = G__14229;
count__14226 = G__14230;
i__14227 = G__14231;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14224);
if(temp__5720__auto__){
var seq__14224__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14224__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14224__$1);
var G__14232 = cljs.core.chunk_rest.call(null,seq__14224__$1);
var G__14233 = c__4351__auto__;
var G__14234 = cljs.core.count.call(null,c__4351__auto__);
var G__14235 = (0);
seq__14224 = G__14232;
chunk__14225 = G__14233;
count__14226 = G__14234;
i__14227 = G__14235;
continue;
} else {
var event = cljs.core.first.call(null,seq__14224__$1);
re_frame.router.dispatch.call(null,event);


var G__14236 = cljs.core.next.call(null,seq__14224__$1);
var G__14237 = null;
var G__14238 = (0);
var G__14239 = (0);
seq__14224 = G__14236;
chunk__14225 = G__14237;
count__14226 = G__14238;
i__14227 = G__14239;
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
var seq__14240 = cljs.core.seq.call(null,value);
var chunk__14241 = null;
var count__14242 = (0);
var i__14243 = (0);
while(true){
if((i__14243 < count__14242)){
var event = cljs.core._nth.call(null,chunk__14241,i__14243);
clear_event.call(null,event);


var G__14244 = seq__14240;
var G__14245 = chunk__14241;
var G__14246 = count__14242;
var G__14247 = (i__14243 + (1));
seq__14240 = G__14244;
chunk__14241 = G__14245;
count__14242 = G__14246;
i__14243 = G__14247;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14240);
if(temp__5720__auto__){
var seq__14240__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14240__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14240__$1);
var G__14248 = cljs.core.chunk_rest.call(null,seq__14240__$1);
var G__14249 = c__4351__auto__;
var G__14250 = cljs.core.count.call(null,c__4351__auto__);
var G__14251 = (0);
seq__14240 = G__14248;
chunk__14241 = G__14249;
count__14242 = G__14250;
i__14243 = G__14251;
continue;
} else {
var event = cljs.core.first.call(null,seq__14240__$1);
clear_event.call(null,event);


var G__14252 = cljs.core.next.call(null,seq__14240__$1);
var G__14253 = null;
var G__14254 = (0);
var G__14255 = (0);
seq__14240 = G__14252;
chunk__14241 = G__14253;
count__14242 = G__14254;
i__14243 = G__14255;
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
