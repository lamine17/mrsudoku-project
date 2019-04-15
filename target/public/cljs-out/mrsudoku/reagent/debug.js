// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8750__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8751__i = 0, G__8751__a = new Array(arguments.length -  0);
while (G__8751__i < G__8751__a.length) {G__8751__a[G__8751__i] = arguments[G__8751__i + 0]; ++G__8751__i;}
  args = new cljs.core.IndexedSeq(G__8751__a,0,null);
} 
return G__8750__delegate.call(this,args);};
G__8750.cljs$lang$maxFixedArity = 0;
G__8750.cljs$lang$applyTo = (function (arglist__8752){
var args = cljs.core.seq(arglist__8752);
return G__8750__delegate(args);
});
G__8750.cljs$core$IFn$_invoke$arity$variadic = G__8750__delegate;
return G__8750;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8753__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8754__i = 0, G__8754__a = new Array(arguments.length -  0);
while (G__8754__i < G__8754__a.length) {G__8754__a[G__8754__i] = arguments[G__8754__i + 0]; ++G__8754__i;}
  args = new cljs.core.IndexedSeq(G__8754__a,0,null);
} 
return G__8753__delegate.call(this,args);};
G__8753.cljs$lang$maxFixedArity = 0;
G__8753.cljs$lang$applyTo = (function (arglist__8755){
var args = cljs.core.seq(arglist__8755);
return G__8753__delegate(args);
});
G__8753.cljs$core$IFn$_invoke$arity$variadic = G__8753__delegate;
return G__8753;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
