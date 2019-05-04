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
var _STAR_current_trace_STAR_12108 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__12109 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12110 = null;
var count__12111 = (0);
var i__12112 = (0);
while(true){
if((i__12112 < count__12111)){
var vec__12113 = cljs.core._nth.call(null,chunk__12110,i__12112);
var effect_key = cljs.core.nth.call(null,vec__12113,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12113,(1),null);
var temp__5718__auto___12129 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12129)){
var effect_fn_12130 = temp__5718__auto___12129;
effect_fn_12130.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12131 = seq__12109;
var G__12132 = chunk__12110;
var G__12133 = count__12111;
var G__12134 = (i__12112 + (1));
seq__12109 = G__12131;
chunk__12110 = G__12132;
count__12111 = G__12133;
i__12112 = G__12134;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12109);
if(temp__5720__auto__){
var seq__12109__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12109__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12109__$1);
var G__12135 = cljs.core.chunk_rest.call(null,seq__12109__$1);
var G__12136 = c__4351__auto__;
var G__12137 = cljs.core.count.call(null,c__4351__auto__);
var G__12138 = (0);
seq__12109 = G__12135;
chunk__12110 = G__12136;
count__12111 = G__12137;
i__12112 = G__12138;
continue;
} else {
var vec__12116 = cljs.core.first.call(null,seq__12109__$1);
var effect_key = cljs.core.nth.call(null,vec__12116,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12116,(1),null);
var temp__5718__auto___12139 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12139)){
var effect_fn_12140 = temp__5718__auto___12139;
effect_fn_12140.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12141 = cljs.core.next.call(null,seq__12109__$1);
var G__12142 = null;
var G__12143 = (0);
var G__12144 = (0);
seq__12109 = G__12141;
chunk__12110 = G__12142;
count__12111 = G__12143;
i__12112 = G__12144;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11765__auto___12145 = re_frame.interop.now.call(null);
var duration__11766__auto___12146 = (end__11765__auto___12145 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11766__auto___12146,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11765__auto___12145);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12108;
}} else {
var seq__12119 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12120 = null;
var count__12121 = (0);
var i__12122 = (0);
while(true){
if((i__12122 < count__12121)){
var vec__12123 = cljs.core._nth.call(null,chunk__12120,i__12122);
var effect_key = cljs.core.nth.call(null,vec__12123,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12123,(1),null);
var temp__5718__auto___12147 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12147)){
var effect_fn_12148 = temp__5718__auto___12147;
effect_fn_12148.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12149 = seq__12119;
var G__12150 = chunk__12120;
var G__12151 = count__12121;
var G__12152 = (i__12122 + (1));
seq__12119 = G__12149;
chunk__12120 = G__12150;
count__12121 = G__12151;
i__12122 = G__12152;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12119);
if(temp__5720__auto__){
var seq__12119__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12119__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12119__$1);
var G__12153 = cljs.core.chunk_rest.call(null,seq__12119__$1);
var G__12154 = c__4351__auto__;
var G__12155 = cljs.core.count.call(null,c__4351__auto__);
var G__12156 = (0);
seq__12119 = G__12153;
chunk__12120 = G__12154;
count__12121 = G__12155;
i__12122 = G__12156;
continue;
} else {
var vec__12126 = cljs.core.first.call(null,seq__12119__$1);
var effect_key = cljs.core.nth.call(null,vec__12126,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12126,(1),null);
var temp__5718__auto___12157 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___12157)){
var effect_fn_12158 = temp__5718__auto___12157;
effect_fn_12158.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12159 = cljs.core.next.call(null,seq__12119__$1);
var G__12160 = null;
var G__12161 = (0);
var G__12162 = (0);
seq__12119 = G__12159;
chunk__12120 = G__12160;
count__12121 = G__12161;
i__12122 = G__12162;
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
var seq__12163 = cljs.core.seq.call(null,value);
var chunk__12164 = null;
var count__12165 = (0);
var i__12166 = (0);
while(true){
if((i__12166 < count__12165)){
var map__12167 = cljs.core._nth.call(null,chunk__12164,i__12166);
var map__12167__$1 = ((((!((map__12167 == null)))?(((((map__12167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12167):map__12167);
var effect = map__12167__$1;
var ms = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__12167__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__12163,chunk__12164,count__12165,i__12166,map__12167,map__12167__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__12163,chunk__12164,count__12165,i__12166,map__12167,map__12167__$1,effect,ms,dispatch))
,ms);
}


var G__12171 = seq__12163;
var G__12172 = chunk__12164;
var G__12173 = count__12165;
var G__12174 = (i__12166 + (1));
seq__12163 = G__12171;
chunk__12164 = G__12172;
count__12165 = G__12173;
i__12166 = G__12174;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12163);
if(temp__5720__auto__){
var seq__12163__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12163__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12163__$1);
var G__12175 = cljs.core.chunk_rest.call(null,seq__12163__$1);
var G__12176 = c__4351__auto__;
var G__12177 = cljs.core.count.call(null,c__4351__auto__);
var G__12178 = (0);
seq__12163 = G__12175;
chunk__12164 = G__12176;
count__12165 = G__12177;
i__12166 = G__12178;
continue;
} else {
var map__12169 = cljs.core.first.call(null,seq__12163__$1);
var map__12169__$1 = ((((!((map__12169 == null)))?(((((map__12169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12169):map__12169);
var effect = map__12169__$1;
var ms = cljs.core.get.call(null,map__12169__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__12169__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__12163,chunk__12164,count__12165,i__12166,map__12169,map__12169__$1,effect,ms,dispatch,seq__12163__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__12163,chunk__12164,count__12165,i__12166,map__12169,map__12169__$1,effect,ms,dispatch,seq__12163__$1,temp__5720__auto__))
,ms);
}


var G__12179 = cljs.core.next.call(null,seq__12163__$1);
var G__12180 = null;
var G__12181 = (0);
var G__12182 = (0);
seq__12163 = G__12179;
chunk__12164 = G__12180;
count__12165 = G__12181;
i__12166 = G__12182;
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
var seq__12183 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__12184 = null;
var count__12185 = (0);
var i__12186 = (0);
while(true){
if((i__12186 < count__12185)){
var event = cljs.core._nth.call(null,chunk__12184,i__12186);
re_frame.router.dispatch.call(null,event);


var G__12187 = seq__12183;
var G__12188 = chunk__12184;
var G__12189 = count__12185;
var G__12190 = (i__12186 + (1));
seq__12183 = G__12187;
chunk__12184 = G__12188;
count__12185 = G__12189;
i__12186 = G__12190;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12183);
if(temp__5720__auto__){
var seq__12183__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12183__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12183__$1);
var G__12191 = cljs.core.chunk_rest.call(null,seq__12183__$1);
var G__12192 = c__4351__auto__;
var G__12193 = cljs.core.count.call(null,c__4351__auto__);
var G__12194 = (0);
seq__12183 = G__12191;
chunk__12184 = G__12192;
count__12185 = G__12193;
i__12186 = G__12194;
continue;
} else {
var event = cljs.core.first.call(null,seq__12183__$1);
re_frame.router.dispatch.call(null,event);


var G__12195 = cljs.core.next.call(null,seq__12183__$1);
var G__12196 = null;
var G__12197 = (0);
var G__12198 = (0);
seq__12183 = G__12195;
chunk__12184 = G__12196;
count__12185 = G__12197;
i__12186 = G__12198;
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
var seq__12199 = cljs.core.seq.call(null,value);
var chunk__12200 = null;
var count__12201 = (0);
var i__12202 = (0);
while(true){
if((i__12202 < count__12201)){
var event = cljs.core._nth.call(null,chunk__12200,i__12202);
clear_event.call(null,event);


var G__12203 = seq__12199;
var G__12204 = chunk__12200;
var G__12205 = count__12201;
var G__12206 = (i__12202 + (1));
seq__12199 = G__12203;
chunk__12200 = G__12204;
count__12201 = G__12205;
i__12202 = G__12206;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__12199);
if(temp__5720__auto__){
var seq__12199__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12199__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12199__$1);
var G__12207 = cljs.core.chunk_rest.call(null,seq__12199__$1);
var G__12208 = c__4351__auto__;
var G__12209 = cljs.core.count.call(null,c__4351__auto__);
var G__12210 = (0);
seq__12199 = G__12207;
chunk__12200 = G__12208;
count__12201 = G__12209;
i__12202 = G__12210;
continue;
} else {
var event = cljs.core.first.call(null,seq__12199__$1);
clear_event.call(null,event);


var G__12211 = cljs.core.next.call(null,seq__12199__$1);
var G__12212 = null;
var G__12213 = (0);
var G__12214 = (0);
seq__12199 = G__12211;
chunk__12200 = G__12212;
count__12201 = G__12213;
i__12202 = G__12214;
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
