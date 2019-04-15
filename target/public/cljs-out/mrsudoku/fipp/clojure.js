// Compiled by ClojureScript 1.10.339 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13022 = arguments.length;
var i__4532__auto___13023 = (0);
while(true){
if((i__4532__auto___13023 < len__4531__auto___13022)){
args__4534__auto__.push((arguments[i__4532__auto___13023]));

var G__13024 = (i__4532__auto___13023 + (1));
i__4532__auto___13023 = G__13024;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq13021){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13021));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__13025){
var vec__13026 = p__13025;
var test = cljs.core.nth.call(null,vec__13026,(0),null);
var result = cljs.core.nth.call(null,vec__13026,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__13030){
var vec__13031 = p__13030;
var seq__13032 = cljs.core.seq.call(null,vec__13031);
var first__13033 = cljs.core.first.call(null,seq__13032);
var seq__13032__$1 = cljs.core.next.call(null,seq__13032);
var head = first__13033;
var first__13033__$1 = cljs.core.first.call(null,seq__13032__$1);
var seq__13032__$2 = cljs.core.next.call(null,seq__13032__$1);
var expr = first__13033__$1;
var more = seq__13032__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__13031,seq__13032,first__13033,seq__13032__$1,head,first__13033__$1,seq__13032__$2,expr,more){
return (function (p1__13029_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13029_SHARP_);
});})(clauses,default$,vec__13031,seq__13032,first__13033,seq__13032__$1,head,first__13033__$1,seq__13032__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__13035){
var vec__13036 = p__13035;
var seq__13037 = cljs.core.seq.call(null,vec__13036);
var first__13038 = cljs.core.first.call(null,seq__13037);
var seq__13037__$1 = cljs.core.next.call(null,seq__13037);
var head = first__13038;
var more = seq__13037__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__13036,seq__13037,first__13038,seq__13037__$1,head,more){
return (function (p1__13034_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13034_SHARP_);
});})(clauses,vec__13036,seq__13037,first__13038,seq__13037__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__13040){
var vec__13041 = p__13040;
var seq__13042 = cljs.core.seq.call(null,vec__13041);
var first__13043 = cljs.core.first.call(null,seq__13042);
var seq__13042__$1 = cljs.core.next.call(null,seq__13042);
var head = first__13043;
var first__13043__$1 = cljs.core.first.call(null,seq__13042__$1);
var seq__13042__$2 = cljs.core.next.call(null,seq__13042__$1);
var pred = first__13043__$1;
var first__13043__$2 = cljs.core.first.call(null,seq__13042__$2);
var seq__13042__$3 = cljs.core.next.call(null,seq__13042__$2);
var expr = first__13043__$2;
var more = seq__13042__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__13041,seq__13042,first__13043,seq__13042__$1,head,first__13043__$1,seq__13042__$2,pred,first__13043__$2,seq__13042__$3,expr,more){
return (function (p1__13039_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13039_SHARP_);
});})(clauses,default$,vec__13041,seq__13042,first__13043,seq__13042__$1,head,first__13043__$1,seq__13042__$2,pred,first__13043__$2,seq__13042__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__13045){
var vec__13046 = p__13045;
var seq__13047 = cljs.core.seq.call(null,vec__13046);
var first__13048 = cljs.core.first.call(null,seq__13047);
var seq__13047__$1 = cljs.core.next.call(null,seq__13047);
var head = first__13048;
var stmts = seq__13047__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13046,seq__13047,first__13048,seq__13047__$1,head,stmts){
return (function (p1__13044_SHARP_){
return fipp.visit.visit.call(null,p,p1__13044_SHARP_);
});})(vec__13046,seq__13047,first__13048,seq__13047__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__13050){
var vec__13051 = p__13050;
var seq__13052 = cljs.core.seq.call(null,vec__13051);
var first__13053 = cljs.core.first.call(null,seq__13052);
var seq__13052__$1 = cljs.core.next.call(null,seq__13052);
var head = first__13053;
var first__13053__$1 = cljs.core.first.call(null,seq__13052__$1);
var seq__13052__$2 = cljs.core.next.call(null,seq__13052__$1);
var test = first__13053__$1;
var more = seq__13052__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13051,seq__13052,first__13053,seq__13052__$1,head,first__13053__$1,seq__13052__$2,test,more){
return (function (p1__13049_SHARP_){
return fipp.visit.visit.call(null,p,p1__13049_SHARP_);
});})(vec__13051,seq__13052,first__13053,seq__13052__$1,head,first__13053__$1,seq__13052__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__13055){
var vec__13056 = p__13055;
var seq__13057 = cljs.core.seq.call(null,vec__13056);
var first__13058 = cljs.core.first.call(null,seq__13057);
var seq__13057__$1 = cljs.core.next.call(null,seq__13057);
var params = first__13058;
var body = seq__13057__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13056,seq__13057,first__13058,seq__13057__$1,params,body){
return (function (p1__13054_SHARP_){
return fipp.visit.visit.call(null,p,p1__13054_SHARP_);
});})(vec__13056,seq__13057,first__13058,seq__13057__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__13061){
var vec__13062 = p__13061;
var seq__13063 = cljs.core.seq.call(null,vec__13062);
var first__13064 = cljs.core.first.call(null,seq__13063);
var seq__13063__$1 = cljs.core.next.call(null,seq__13063);
var head = first__13064;
var first__13064__$1 = cljs.core.first.call(null,seq__13063__$1);
var seq__13063__$2 = cljs.core.next.call(null,seq__13063__$1);
var fn_name = first__13064__$1;
var more = seq__13063__$2;
var vec__13065 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__13065,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13065,(1),null);
var vec__13068 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__13068,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__13068,(1),null);
var vec__13071 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__13071,(0),null);
var body = cljs.core.nth.call(null,vec__13071,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__3938__auto__ = params;
if(cljs.core.truth_(and__3938__auto__)){
return (((docstring == null)) && ((attr_map == null)));
} else {
return and__3938__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__3938__auto__ = params;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__3938__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__13065,docstring,more__$1,vec__13068,attr_map,more__$2,vec__13071,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13062,seq__13063,first__13064,seq__13063__$1,head,first__13064__$1,seq__13063__$2,fn_name,more){
return (function (p1__13059_SHARP_){
return fipp.visit.visit.call(null,p,p1__13059_SHARP_);
});})(vec__13065,docstring,more__$1,vec__13068,attr_map,more__$2,vec__13071,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13062,seq__13063,first__13064,seq__13063__$1,head,first__13064__$1,seq__13063__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__13065,docstring,more__$1,vec__13068,attr_map,more__$2,vec__13071,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13062,seq__13063,first__13064,seq__13063__$1,head,first__13064__$1,seq__13063__$2,fn_name,more){
return (function (p1__13060_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__13060_SHARP_);
});})(vec__13065,docstring,more__$1,vec__13068,attr_map,more__$2,vec__13071,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13062,seq__13063,first__13064,seq__13063__$1,head,first__13064__$1,seq__13063__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__13076){
var vec__13077 = p__13076;
var seq__13078 = cljs.core.seq.call(null,vec__13077);
var first__13079 = cljs.core.first.call(null,seq__13078);
var seq__13078__$1 = cljs.core.next.call(null,seq__13078);
var head = first__13079;
var more = seq__13078__$1;
var vec__13080 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__13080,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13080,(1),null);
var vec__13083 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__13083,(0),null);
var body = cljs.core.nth.call(null,vec__13083,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__13080,fn_name,more__$1,vec__13083,params,body,vec__13077,seq__13078,first__13079,seq__13078__$1,head,more){
return (function (p1__13074_SHARP_){
return fipp.visit.visit.call(null,p,p1__13074_SHARP_);
});})(vec__13080,fn_name,more__$1,vec__13083,params,body,vec__13077,seq__13078,first__13079,seq__13078__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__13080,fn_name,more__$1,vec__13083,params,body,vec__13077,seq__13078,first__13079,seq__13078__$1,head,more){
return (function (p1__13075_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__13075_SHARP_);
});})(vec__13080,fn_name,more__$1,vec__13083,params,body,vec__13077,seq__13078,first__13079,seq__13078__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__13089){
var vec__13090 = p__13089;
var _ = cljs.core.nth.call(null,vec__13090,(0),null);
var params = cljs.core.nth.call(null,vec__13090,(1),null);
var body = cljs.core.nth.call(null,vec__13090,(2),null);
var form = vec__13090;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__13093 = cljs.core.split_with.call(null,((function (vec__13090,_,params,body,form){
return (function (p1__13086_SHARP_){
return cljs.core.not_EQ_.call(null,p1__13086_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__13090,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__13093,(0),null);
var rests = cljs.core.nth.call(null,vec__13093,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__13093,inits,rests,vec__13090,_,params,body,form){
return (function (p1__13087_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__13087_SHARP_ + (1)))].join(''));
});})(vec__13093,inits,rests,vec__13090,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13093,inits,rests,params_STAR_,body_STAR_,vec__13090,_,params,body,form){
return (function (p1__13088_SHARP_){
return fipp.visit.visit.call(null,p,p1__13088_SHARP_);
});})(vec__13093,inits,rests,params_STAR_,body_STAR_,vec__13090,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__13097){
var vec__13098 = p__13097;
var seq__13099 = cljs.core.seq.call(null,vec__13098);
var first__13100 = cljs.core.first.call(null,seq__13099);
var seq__13099__$1 = cljs.core.next.call(null,seq__13099);
var head = first__13100;
var clauses = seq__13099__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13098,seq__13099,first__13100,seq__13099__$1,head,clauses){
return (function (p1__13096_SHARP_){
return fipp.visit.visit.call(null,p,p1__13096_SHARP_);
});})(vec__13098,seq__13099,first__13100,seq__13099__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__13102){
var vec__13103 = p__13102;
var seq__13104 = cljs.core.seq.call(null,vec__13103);
var first__13105 = cljs.core.first.call(null,seq__13104);
var seq__13104__$1 = cljs.core.next.call(null,seq__13104);
var head = first__13105;
var first__13105__$1 = cljs.core.first.call(null,seq__13104__$1);
var seq__13104__$2 = cljs.core.next.call(null,seq__13104__$1);
var ns_sym = first__13105__$1;
var more = seq__13104__$2;
var vec__13106 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__13106,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13106,(1),null);
var vec__13109 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__13109,(0),null);
var specs = cljs.core.nth.call(null,vec__13109,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__13106,docstring,more__$1,vec__13109,attr_map,specs,vec__13103,seq__13104,first__13105,seq__13104__$1,head,first__13105__$1,seq__13104__$2,ns_sym,more){
return (function (p1__13101_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__13101_SHARP_);
});})(vec__13106,docstring,more__$1,vec__13109,attr_map,specs,vec__13103,seq__13104,first__13105,seq__13104__$1,head,first__13105__$1,seq__13104__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__13112){
var vec__13113 = p__13112;
var macro = cljs.core.nth.call(null,vec__13113,(0),null);
var arg = cljs.core.nth.call(null,vec__13113,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__13116 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__13116__$1 = (((G__13116 instanceof cljs.core.Keyword))?G__13116.fqn:null);
switch (G__13116__$1) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13116__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4324__auto__ = (function fipp$clojure$pretty_bindings_$_iter__13118(s__13119){
return (new cljs.core.LazySeq(null,(function (){
var s__13119__$1 = s__13119;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13119__$1);
if(temp__5720__auto__){
var s__13119__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13119__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13119__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13121 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13120 = (0);
while(true){
if((i__13120 < size__4323__auto__)){
var vec__13122 = cljs.core._nth.call(null,c__4322__auto__,i__13120);
var k = cljs.core.nth.call(null,vec__13122,(0),null);
var v = cljs.core.nth.call(null,vec__13122,(1),null);
cljs.core.chunk_append.call(null,b__13121,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__13128 = (i__13120 + (1));
i__13120 = G__13128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13121),fipp$clojure$pretty_bindings_$_iter__13118.call(null,cljs.core.chunk_rest.call(null,s__13119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13121),null);
}
} else {
var vec__13125 = cljs.core.first.call(null,s__13119__$2);
var k = cljs.core.nth.call(null,vec__13125,(0),null);
var v = cljs.core.nth.call(null,vec__13125,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__13118.call(null,cljs.core.rest.call(null,s__13119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__13130){
var vec__13131 = p__13130;
var seq__13132 = cljs.core.seq.call(null,vec__13131);
var first__13133 = cljs.core.first.call(null,seq__13132);
var seq__13132__$1 = cljs.core.next.call(null,seq__13132);
var head = first__13133;
var first__13133__$1 = cljs.core.first.call(null,seq__13132__$1);
var seq__13132__$2 = cljs.core.next.call(null,seq__13132__$1);
var bvec = first__13133__$1;
var body = seq__13132__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13131,seq__13132,first__13133,seq__13132__$1,head,first__13133__$1,seq__13132__$2,bvec,body){
return (function (p1__13129_SHARP_){
return fipp.visit.visit.call(null,p,p1__13129_SHARP_);
});})(vec__13131,seq__13132,first__13133,seq__13132__$1,head,first__13133__$1,seq__13132__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__13134_SHARP_){
return fipp.visit.visit.call(null,p,p1__13134_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__13135){
var vec__13136 = p__13135;
var seq__13137 = cljs.core.seq.call(null,vec__13136);
var first__13138 = cljs.core.first.call(null,seq__13137);
var seq__13137__$1 = cljs.core.next.call(null,seq__13137);
var head = first__13138;
var first__13138__$1 = cljs.core.first.call(null,seq__13137__$1);
var seq__13137__$2 = cljs.core.next.call(null,seq__13137__$1);
var fields = first__13138__$1;
var opts_PLUS_specs = seq__13137__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__13139){
var vec__13140 = p__13139;
var seq__13141 = cljs.core.seq.call(null,vec__13140);
var first__13142 = cljs.core.first.call(null,seq__13141);
var seq__13141__$1 = cljs.core.next.call(null,seq__13141);
var head = first__13142;
var opts_PLUS_specs = seq__13141__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function fipp$clojure$build_symbol_map_$_iter__13143(s__13144){
return (new cljs.core.LazySeq(null,(function (){
var s__13144__$1 = s__13144;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13144__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__13151 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__13151,(0),null);
var syms = cljs.core.nth.call(null,vec__13151,(1),null);
var iterys__4320__auto__ = ((function (s__13144__$1,vec__13151,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__13143_$_iter__13145(s__13146){
return (new cljs.core.LazySeq(null,((function (s__13144__$1,vec__13151,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__13146__$1 = s__13146;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__13146__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4320__auto__ = ((function (s__13146__$1,s__13144__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13151,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__13143_$_iter__13145_$_iter__13147(s__13148){
return (new cljs.core.LazySeq(null,((function (s__13146__$1,s__13144__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13151,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__13148__$1 = s__13148;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__13148__$1);
if(temp__5720__auto____$2){
var s__13148__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13148__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13148__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13150 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13149 = (0);
while(true){
if((i__13149 < size__4323__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4322__auto__,i__13149);
cljs.core.chunk_append.call(null,b__13150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__13154 = (i__13149 + (1));
i__13149 = G__13154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13150),fipp$clojure$build_symbol_map_$_iter__13143_$_iter__13145_$_iter__13147.call(null,cljs.core.chunk_rest.call(null,s__13148__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13150),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__13148__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__13143_$_iter__13145_$_iter__13147.call(null,cljs.core.rest.call(null,s__13148__$2)));
}
} else {
return null;
}
break;
}
});})(s__13146__$1,s__13144__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13151,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__13146__$1,s__13144__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13151,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__13143_$_iter__13145.call(null,cljs.core.rest.call(null,s__13146__$1)));
} else {
var G__13155 = cljs.core.rest.call(null,s__13146__$1);
s__13146__$1 = G__13155;
continue;
}
} else {
return null;
}
break;
}
});})(s__13144__$1,vec__13151,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__13144__$1,vec__13151,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,syms));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__13143.call(null,cljs.core.rest.call(null,s__13144__$1)));
} else {
var G__13156 = cljs.core.rest.call(null,s__13144__$1);
s__13144__$1 = G__13156;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var G__13158 = arguments.length;
switch (G__13158) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=clojure.js.map
