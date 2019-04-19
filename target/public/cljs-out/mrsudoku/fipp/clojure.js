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
var len__4531__auto___12995 = arguments.length;
var i__4532__auto___12996 = (0);
while(true){
if((i__4532__auto___12996 < len__4531__auto___12995)){
args__4534__auto__.push((arguments[i__4532__auto___12996]));

var G__12997 = (i__4532__auto___12996 + (1));
i__4532__auto___12996 = G__12997;
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
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq12994){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12994));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__12998){
var vec__12999 = p__12998;
var test = cljs.core.nth.call(null,vec__12999,(0),null);
var result = cljs.core.nth.call(null,vec__12999,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__13003){
var vec__13004 = p__13003;
var seq__13005 = cljs.core.seq.call(null,vec__13004);
var first__13006 = cljs.core.first.call(null,seq__13005);
var seq__13005__$1 = cljs.core.next.call(null,seq__13005);
var head = first__13006;
var first__13006__$1 = cljs.core.first.call(null,seq__13005__$1);
var seq__13005__$2 = cljs.core.next.call(null,seq__13005__$1);
var expr = first__13006__$1;
var more = seq__13005__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__13004,seq__13005,first__13006,seq__13005__$1,head,first__13006__$1,seq__13005__$2,expr,more){
return (function (p1__13002_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13002_SHARP_);
});})(clauses,default$,vec__13004,seq__13005,first__13006,seq__13005__$1,head,first__13006__$1,seq__13005__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__13008){
var vec__13009 = p__13008;
var seq__13010 = cljs.core.seq.call(null,vec__13009);
var first__13011 = cljs.core.first.call(null,seq__13010);
var seq__13010__$1 = cljs.core.next.call(null,seq__13010);
var head = first__13011;
var more = seq__13010__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__13009,seq__13010,first__13011,seq__13010__$1,head,more){
return (function (p1__13007_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13007_SHARP_);
});})(clauses,vec__13009,seq__13010,first__13011,seq__13010__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__13013){
var vec__13014 = p__13013;
var seq__13015 = cljs.core.seq.call(null,vec__13014);
var first__13016 = cljs.core.first.call(null,seq__13015);
var seq__13015__$1 = cljs.core.next.call(null,seq__13015);
var head = first__13016;
var first__13016__$1 = cljs.core.first.call(null,seq__13015__$1);
var seq__13015__$2 = cljs.core.next.call(null,seq__13015__$1);
var pred = first__13016__$1;
var first__13016__$2 = cljs.core.first.call(null,seq__13015__$2);
var seq__13015__$3 = cljs.core.next.call(null,seq__13015__$2);
var expr = first__13016__$2;
var more = seq__13015__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__13014,seq__13015,first__13016,seq__13015__$1,head,first__13016__$1,seq__13015__$2,pred,first__13016__$2,seq__13015__$3,expr,more){
return (function (p1__13012_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13012_SHARP_);
});})(clauses,default$,vec__13014,seq__13015,first__13016,seq__13015__$1,head,first__13016__$1,seq__13015__$2,pred,first__13016__$2,seq__13015__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__13018){
var vec__13019 = p__13018;
var seq__13020 = cljs.core.seq.call(null,vec__13019);
var first__13021 = cljs.core.first.call(null,seq__13020);
var seq__13020__$1 = cljs.core.next.call(null,seq__13020);
var head = first__13021;
var stmts = seq__13020__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13019,seq__13020,first__13021,seq__13020__$1,head,stmts){
return (function (p1__13017_SHARP_){
return fipp.visit.visit.call(null,p,p1__13017_SHARP_);
});})(vec__13019,seq__13020,first__13021,seq__13020__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__13023){
var vec__13024 = p__13023;
var seq__13025 = cljs.core.seq.call(null,vec__13024);
var first__13026 = cljs.core.first.call(null,seq__13025);
var seq__13025__$1 = cljs.core.next.call(null,seq__13025);
var head = first__13026;
var first__13026__$1 = cljs.core.first.call(null,seq__13025__$1);
var seq__13025__$2 = cljs.core.next.call(null,seq__13025__$1);
var test = first__13026__$1;
var more = seq__13025__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13024,seq__13025,first__13026,seq__13025__$1,head,first__13026__$1,seq__13025__$2,test,more){
return (function (p1__13022_SHARP_){
return fipp.visit.visit.call(null,p,p1__13022_SHARP_);
});})(vec__13024,seq__13025,first__13026,seq__13025__$1,head,first__13026__$1,seq__13025__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__13028){
var vec__13029 = p__13028;
var seq__13030 = cljs.core.seq.call(null,vec__13029);
var first__13031 = cljs.core.first.call(null,seq__13030);
var seq__13030__$1 = cljs.core.next.call(null,seq__13030);
var params = first__13031;
var body = seq__13030__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13029,seq__13030,first__13031,seq__13030__$1,params,body){
return (function (p1__13027_SHARP_){
return fipp.visit.visit.call(null,p,p1__13027_SHARP_);
});})(vec__13029,seq__13030,first__13031,seq__13030__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__13034){
var vec__13035 = p__13034;
var seq__13036 = cljs.core.seq.call(null,vec__13035);
var first__13037 = cljs.core.first.call(null,seq__13036);
var seq__13036__$1 = cljs.core.next.call(null,seq__13036);
var head = first__13037;
var first__13037__$1 = cljs.core.first.call(null,seq__13036__$1);
var seq__13036__$2 = cljs.core.next.call(null,seq__13036__$1);
var fn_name = first__13037__$1;
var more = seq__13036__$2;
var vec__13038 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__13038,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13038,(1),null);
var vec__13041 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__13041,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__13041,(1),null);
var vec__13044 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__13044,(0),null);
var body = cljs.core.nth.call(null,vec__13044,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__13038,docstring,more__$1,vec__13041,attr_map,more__$2,vec__13044,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13035,seq__13036,first__13037,seq__13036__$1,head,first__13037__$1,seq__13036__$2,fn_name,more){
return (function (p1__13032_SHARP_){
return fipp.visit.visit.call(null,p,p1__13032_SHARP_);
});})(vec__13038,docstring,more__$1,vec__13041,attr_map,more__$2,vec__13044,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13035,seq__13036,first__13037,seq__13036__$1,head,first__13037__$1,seq__13036__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__13038,docstring,more__$1,vec__13041,attr_map,more__$2,vec__13044,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13035,seq__13036,first__13037,seq__13036__$1,head,first__13037__$1,seq__13036__$2,fn_name,more){
return (function (p1__13033_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__13033_SHARP_);
});})(vec__13038,docstring,more__$1,vec__13041,attr_map,more__$2,vec__13044,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13035,seq__13036,first__13037,seq__13036__$1,head,first__13037__$1,seq__13036__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__13049){
var vec__13050 = p__13049;
var seq__13051 = cljs.core.seq.call(null,vec__13050);
var first__13052 = cljs.core.first.call(null,seq__13051);
var seq__13051__$1 = cljs.core.next.call(null,seq__13051);
var head = first__13052;
var more = seq__13051__$1;
var vec__13053 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__13053,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13053,(1),null);
var vec__13056 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__13056,(0),null);
var body = cljs.core.nth.call(null,vec__13056,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__13053,fn_name,more__$1,vec__13056,params,body,vec__13050,seq__13051,first__13052,seq__13051__$1,head,more){
return (function (p1__13047_SHARP_){
return fipp.visit.visit.call(null,p,p1__13047_SHARP_);
});})(vec__13053,fn_name,more__$1,vec__13056,params,body,vec__13050,seq__13051,first__13052,seq__13051__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__13053,fn_name,more__$1,vec__13056,params,body,vec__13050,seq__13051,first__13052,seq__13051__$1,head,more){
return (function (p1__13048_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__13048_SHARP_);
});})(vec__13053,fn_name,more__$1,vec__13056,params,body,vec__13050,seq__13051,first__13052,seq__13051__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__13062){
var vec__13063 = p__13062;
var _ = cljs.core.nth.call(null,vec__13063,(0),null);
var params = cljs.core.nth.call(null,vec__13063,(1),null);
var body = cljs.core.nth.call(null,vec__13063,(2),null);
var form = vec__13063;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__13066 = cljs.core.split_with.call(null,((function (vec__13063,_,params,body,form){
return (function (p1__13059_SHARP_){
return cljs.core.not_EQ_.call(null,p1__13059_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__13063,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__13066,(0),null);
var rests = cljs.core.nth.call(null,vec__13066,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__13066,inits,rests,vec__13063,_,params,body,form){
return (function (p1__13060_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__13060_SHARP_ + (1)))].join(''));
});})(vec__13066,inits,rests,vec__13063,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13066,inits,rests,params_STAR_,body_STAR_,vec__13063,_,params,body,form){
return (function (p1__13061_SHARP_){
return fipp.visit.visit.call(null,p,p1__13061_SHARP_);
});})(vec__13066,inits,rests,params_STAR_,body_STAR_,vec__13063,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__13070){
var vec__13071 = p__13070;
var seq__13072 = cljs.core.seq.call(null,vec__13071);
var first__13073 = cljs.core.first.call(null,seq__13072);
var seq__13072__$1 = cljs.core.next.call(null,seq__13072);
var head = first__13073;
var clauses = seq__13072__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13071,seq__13072,first__13073,seq__13072__$1,head,clauses){
return (function (p1__13069_SHARP_){
return fipp.visit.visit.call(null,p,p1__13069_SHARP_);
});})(vec__13071,seq__13072,first__13073,seq__13072__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__13075){
var vec__13076 = p__13075;
var seq__13077 = cljs.core.seq.call(null,vec__13076);
var first__13078 = cljs.core.first.call(null,seq__13077);
var seq__13077__$1 = cljs.core.next.call(null,seq__13077);
var head = first__13078;
var first__13078__$1 = cljs.core.first.call(null,seq__13077__$1);
var seq__13077__$2 = cljs.core.next.call(null,seq__13077__$1);
var ns_sym = first__13078__$1;
var more = seq__13077__$2;
var vec__13079 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__13079,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13079,(1),null);
var vec__13082 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__13082,(0),null);
var specs = cljs.core.nth.call(null,vec__13082,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__13079,docstring,more__$1,vec__13082,attr_map,specs,vec__13076,seq__13077,first__13078,seq__13077__$1,head,first__13078__$1,seq__13077__$2,ns_sym,more){
return (function (p1__13074_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__13074_SHARP_);
});})(vec__13079,docstring,more__$1,vec__13082,attr_map,specs,vec__13076,seq__13077,first__13078,seq__13077__$1,head,first__13078__$1,seq__13077__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__13085){
var vec__13086 = p__13085;
var macro = cljs.core.nth.call(null,vec__13086,(0),null);
var arg = cljs.core.nth.call(null,vec__13086,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__13089 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__13089__$1 = (((G__13089 instanceof cljs.core.Keyword))?G__13089.fqn:null);
switch (G__13089__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13089__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4324__auto__ = (function fipp$clojure$pretty_bindings_$_iter__13091(s__13092){
return (new cljs.core.LazySeq(null,(function (){
var s__13092__$1 = s__13092;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13092__$1);
if(temp__5720__auto__){
var s__13092__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13092__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13092__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13094 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13093 = (0);
while(true){
if((i__13093 < size__4323__auto__)){
var vec__13095 = cljs.core._nth.call(null,c__4322__auto__,i__13093);
var k = cljs.core.nth.call(null,vec__13095,(0),null);
var v = cljs.core.nth.call(null,vec__13095,(1),null);
cljs.core.chunk_append.call(null,b__13094,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__13101 = (i__13093 + (1));
i__13093 = G__13101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13094),fipp$clojure$pretty_bindings_$_iter__13091.call(null,cljs.core.chunk_rest.call(null,s__13092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13094),null);
}
} else {
var vec__13098 = cljs.core.first.call(null,s__13092__$2);
var k = cljs.core.nth.call(null,vec__13098,(0),null);
var v = cljs.core.nth.call(null,vec__13098,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__13091.call(null,cljs.core.rest.call(null,s__13092__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__13103){
var vec__13104 = p__13103;
var seq__13105 = cljs.core.seq.call(null,vec__13104);
var first__13106 = cljs.core.first.call(null,seq__13105);
var seq__13105__$1 = cljs.core.next.call(null,seq__13105);
var head = first__13106;
var first__13106__$1 = cljs.core.first.call(null,seq__13105__$1);
var seq__13105__$2 = cljs.core.next.call(null,seq__13105__$1);
var bvec = first__13106__$1;
var body = seq__13105__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13104,seq__13105,first__13106,seq__13105__$1,head,first__13106__$1,seq__13105__$2,bvec,body){
return (function (p1__13102_SHARP_){
return fipp.visit.visit.call(null,p,p1__13102_SHARP_);
});})(vec__13104,seq__13105,first__13106,seq__13105__$1,head,first__13106__$1,seq__13105__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__13107_SHARP_){
return fipp.visit.visit.call(null,p,p1__13107_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__13108){
var vec__13109 = p__13108;
var seq__13110 = cljs.core.seq.call(null,vec__13109);
var first__13111 = cljs.core.first.call(null,seq__13110);
var seq__13110__$1 = cljs.core.next.call(null,seq__13110);
var head = first__13111;
var first__13111__$1 = cljs.core.first.call(null,seq__13110__$1);
var seq__13110__$2 = cljs.core.next.call(null,seq__13110__$1);
var fields = first__13111__$1;
var opts_PLUS_specs = seq__13110__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__13112){
var vec__13113 = p__13112;
var seq__13114 = cljs.core.seq.call(null,vec__13113);
var first__13115 = cljs.core.first.call(null,seq__13114);
var seq__13114__$1 = cljs.core.next.call(null,seq__13114);
var head = first__13115;
var opts_PLUS_specs = seq__13114__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function fipp$clojure$build_symbol_map_$_iter__13116(s__13117){
return (new cljs.core.LazySeq(null,(function (){
var s__13117__$1 = s__13117;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13117__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__13124 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__13124,(0),null);
var syms = cljs.core.nth.call(null,vec__13124,(1),null);
var iterys__4320__auto__ = ((function (s__13117__$1,vec__13124,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__13116_$_iter__13118(s__13119){
return (new cljs.core.LazySeq(null,((function (s__13117__$1,vec__13124,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__13119__$1 = s__13119;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__13119__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4320__auto__ = ((function (s__13119__$1,s__13117__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13124,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__13116_$_iter__13118_$_iter__13120(s__13121){
return (new cljs.core.LazySeq(null,((function (s__13119__$1,s__13117__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13124,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__13121__$1 = s__13121;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__13121__$1);
if(temp__5720__auto____$2){
var s__13121__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13121__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13121__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13123 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13122 = (0);
while(true){
if((i__13122 < size__4323__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4322__auto__,i__13122);
cljs.core.chunk_append.call(null,b__13123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__13127 = (i__13122 + (1));
i__13122 = G__13127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13123),fipp$clojure$build_symbol_map_$_iter__13116_$_iter__13118_$_iter__13120.call(null,cljs.core.chunk_rest.call(null,s__13121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13123),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__13121__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__13116_$_iter__13118_$_iter__13120.call(null,cljs.core.rest.call(null,s__13121__$2)));
}
} else {
return null;
}
break;
}
});})(s__13119__$1,s__13117__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13124,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__13119__$1,s__13117__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13124,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__13116_$_iter__13118.call(null,cljs.core.rest.call(null,s__13119__$1)));
} else {
var G__13128 = cljs.core.rest.call(null,s__13119__$1);
s__13119__$1 = G__13128;
continue;
}
} else {
return null;
}
break;
}
});})(s__13117__$1,vec__13124,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__13117__$1,vec__13124,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,syms));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__13116.call(null,cljs.core.rest.call(null,s__13117__$1)));
} else {
var G__13129 = cljs.core.rest.call(null,s__13117__$1);
s__13117__$1 = G__13129;
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
var G__13131 = arguments.length;
switch (G__13131) {
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
