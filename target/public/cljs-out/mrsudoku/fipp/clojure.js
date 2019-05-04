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
var len__4531__auto___12998 = arguments.length;
var i__4532__auto___12999 = (0);
while(true){
if((i__4532__auto___12999 < len__4531__auto___12998)){
args__4534__auto__.push((arguments[i__4532__auto___12999]));

var G__13000 = (i__4532__auto___12999 + (1));
i__4532__auto___12999 = G__13000;
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
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq12997){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12997));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__13001){
var vec__13002 = p__13001;
var test = cljs.core.nth.call(null,vec__13002,(0),null);
var result = cljs.core.nth.call(null,vec__13002,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__13006){
var vec__13007 = p__13006;
var seq__13008 = cljs.core.seq.call(null,vec__13007);
var first__13009 = cljs.core.first.call(null,seq__13008);
var seq__13008__$1 = cljs.core.next.call(null,seq__13008);
var head = first__13009;
var first__13009__$1 = cljs.core.first.call(null,seq__13008__$1);
var seq__13008__$2 = cljs.core.next.call(null,seq__13008__$1);
var expr = first__13009__$1;
var more = seq__13008__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__13007,seq__13008,first__13009,seq__13008__$1,head,first__13009__$1,seq__13008__$2,expr,more){
return (function (p1__13005_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13005_SHARP_);
});})(clauses,default$,vec__13007,seq__13008,first__13009,seq__13008__$1,head,first__13009__$1,seq__13008__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__13011){
var vec__13012 = p__13011;
var seq__13013 = cljs.core.seq.call(null,vec__13012);
var first__13014 = cljs.core.first.call(null,seq__13013);
var seq__13013__$1 = cljs.core.next.call(null,seq__13013);
var head = first__13014;
var more = seq__13013__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__13012,seq__13013,first__13014,seq__13013__$1,head,more){
return (function (p1__13010_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13010_SHARP_);
});})(clauses,vec__13012,seq__13013,first__13014,seq__13013__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__13016){
var vec__13017 = p__13016;
var seq__13018 = cljs.core.seq.call(null,vec__13017);
var first__13019 = cljs.core.first.call(null,seq__13018);
var seq__13018__$1 = cljs.core.next.call(null,seq__13018);
var head = first__13019;
var first__13019__$1 = cljs.core.first.call(null,seq__13018__$1);
var seq__13018__$2 = cljs.core.next.call(null,seq__13018__$1);
var pred = first__13019__$1;
var first__13019__$2 = cljs.core.first.call(null,seq__13018__$2);
var seq__13018__$3 = cljs.core.next.call(null,seq__13018__$2);
var expr = first__13019__$2;
var more = seq__13018__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__13017,seq__13018,first__13019,seq__13018__$1,head,first__13019__$1,seq__13018__$2,pred,first__13019__$2,seq__13018__$3,expr,more){
return (function (p1__13015_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__13015_SHARP_);
});})(clauses,default$,vec__13017,seq__13018,first__13019,seq__13018__$1,head,first__13019__$1,seq__13018__$2,pred,first__13019__$2,seq__13018__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__13021){
var vec__13022 = p__13021;
var seq__13023 = cljs.core.seq.call(null,vec__13022);
var first__13024 = cljs.core.first.call(null,seq__13023);
var seq__13023__$1 = cljs.core.next.call(null,seq__13023);
var head = first__13024;
var stmts = seq__13023__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13022,seq__13023,first__13024,seq__13023__$1,head,stmts){
return (function (p1__13020_SHARP_){
return fipp.visit.visit.call(null,p,p1__13020_SHARP_);
});})(vec__13022,seq__13023,first__13024,seq__13023__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__13026){
var vec__13027 = p__13026;
var seq__13028 = cljs.core.seq.call(null,vec__13027);
var first__13029 = cljs.core.first.call(null,seq__13028);
var seq__13028__$1 = cljs.core.next.call(null,seq__13028);
var head = first__13029;
var first__13029__$1 = cljs.core.first.call(null,seq__13028__$1);
var seq__13028__$2 = cljs.core.next.call(null,seq__13028__$1);
var test = first__13029__$1;
var more = seq__13028__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13027,seq__13028,first__13029,seq__13028__$1,head,first__13029__$1,seq__13028__$2,test,more){
return (function (p1__13025_SHARP_){
return fipp.visit.visit.call(null,p,p1__13025_SHARP_);
});})(vec__13027,seq__13028,first__13029,seq__13028__$1,head,first__13029__$1,seq__13028__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__13031){
var vec__13032 = p__13031;
var seq__13033 = cljs.core.seq.call(null,vec__13032);
var first__13034 = cljs.core.first.call(null,seq__13033);
var seq__13033__$1 = cljs.core.next.call(null,seq__13033);
var params = first__13034;
var body = seq__13033__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13032,seq__13033,first__13034,seq__13033__$1,params,body){
return (function (p1__13030_SHARP_){
return fipp.visit.visit.call(null,p,p1__13030_SHARP_);
});})(vec__13032,seq__13033,first__13034,seq__13033__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__13037){
var vec__13038 = p__13037;
var seq__13039 = cljs.core.seq.call(null,vec__13038);
var first__13040 = cljs.core.first.call(null,seq__13039);
var seq__13039__$1 = cljs.core.next.call(null,seq__13039);
var head = first__13040;
var first__13040__$1 = cljs.core.first.call(null,seq__13039__$1);
var seq__13039__$2 = cljs.core.next.call(null,seq__13039__$1);
var fn_name = first__13040__$1;
var more = seq__13039__$2;
var vec__13041 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__13041,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13041,(1),null);
var vec__13044 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__13044,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__13044,(1),null);
var vec__13047 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__13047,(0),null);
var body = cljs.core.nth.call(null,vec__13047,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__13041,docstring,more__$1,vec__13044,attr_map,more__$2,vec__13047,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13038,seq__13039,first__13040,seq__13039__$1,head,first__13040__$1,seq__13039__$2,fn_name,more){
return (function (p1__13035_SHARP_){
return fipp.visit.visit.call(null,p,p1__13035_SHARP_);
});})(vec__13041,docstring,more__$1,vec__13044,attr_map,more__$2,vec__13047,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13038,seq__13039,first__13040,seq__13039__$1,head,first__13040__$1,seq__13039__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__13041,docstring,more__$1,vec__13044,attr_map,more__$2,vec__13047,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13038,seq__13039,first__13040,seq__13039__$1,head,first__13040__$1,seq__13039__$2,fn_name,more){
return (function (p1__13036_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__13036_SHARP_);
});})(vec__13041,docstring,more__$1,vec__13044,attr_map,more__$2,vec__13047,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__13038,seq__13039,first__13040,seq__13039__$1,head,first__13040__$1,seq__13039__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__13052){
var vec__13053 = p__13052;
var seq__13054 = cljs.core.seq.call(null,vec__13053);
var first__13055 = cljs.core.first.call(null,seq__13054);
var seq__13054__$1 = cljs.core.next.call(null,seq__13054);
var head = first__13055;
var more = seq__13054__$1;
var vec__13056 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__13056,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13056,(1),null);
var vec__13059 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__13059,(0),null);
var body = cljs.core.nth.call(null,vec__13059,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__13056,fn_name,more__$1,vec__13059,params,body,vec__13053,seq__13054,first__13055,seq__13054__$1,head,more){
return (function (p1__13050_SHARP_){
return fipp.visit.visit.call(null,p,p1__13050_SHARP_);
});})(vec__13056,fn_name,more__$1,vec__13059,params,body,vec__13053,seq__13054,first__13055,seq__13054__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__13056,fn_name,more__$1,vec__13059,params,body,vec__13053,seq__13054,first__13055,seq__13054__$1,head,more){
return (function (p1__13051_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__13051_SHARP_);
});})(vec__13056,fn_name,more__$1,vec__13059,params,body,vec__13053,seq__13054,first__13055,seq__13054__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__13065){
var vec__13066 = p__13065;
var _ = cljs.core.nth.call(null,vec__13066,(0),null);
var params = cljs.core.nth.call(null,vec__13066,(1),null);
var body = cljs.core.nth.call(null,vec__13066,(2),null);
var form = vec__13066;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__13069 = cljs.core.split_with.call(null,((function (vec__13066,_,params,body,form){
return (function (p1__13062_SHARP_){
return cljs.core.not_EQ_.call(null,p1__13062_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__13066,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__13069,(0),null);
var rests = cljs.core.nth.call(null,vec__13069,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__13069,inits,rests,vec__13066,_,params,body,form){
return (function (p1__13063_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__13063_SHARP_ + (1)))].join(''));
});})(vec__13069,inits,rests,vec__13066,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13069,inits,rests,params_STAR_,body_STAR_,vec__13066,_,params,body,form){
return (function (p1__13064_SHARP_){
return fipp.visit.visit.call(null,p,p1__13064_SHARP_);
});})(vec__13069,inits,rests,params_STAR_,body_STAR_,vec__13066,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__13073){
var vec__13074 = p__13073;
var seq__13075 = cljs.core.seq.call(null,vec__13074);
var first__13076 = cljs.core.first.call(null,seq__13075);
var seq__13075__$1 = cljs.core.next.call(null,seq__13075);
var head = first__13076;
var clauses = seq__13075__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__13074,seq__13075,first__13076,seq__13075__$1,head,clauses){
return (function (p1__13072_SHARP_){
return fipp.visit.visit.call(null,p,p1__13072_SHARP_);
});})(vec__13074,seq__13075,first__13076,seq__13075__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__13078){
var vec__13079 = p__13078;
var seq__13080 = cljs.core.seq.call(null,vec__13079);
var first__13081 = cljs.core.first.call(null,seq__13080);
var seq__13080__$1 = cljs.core.next.call(null,seq__13080);
var head = first__13081;
var first__13081__$1 = cljs.core.first.call(null,seq__13080__$1);
var seq__13080__$2 = cljs.core.next.call(null,seq__13080__$1);
var ns_sym = first__13081__$1;
var more = seq__13080__$2;
var vec__13082 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__13082,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__13082,(1),null);
var vec__13085 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__13085,(0),null);
var specs = cljs.core.nth.call(null,vec__13085,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__13082,docstring,more__$1,vec__13085,attr_map,specs,vec__13079,seq__13080,first__13081,seq__13080__$1,head,first__13081__$1,seq__13080__$2,ns_sym,more){
return (function (p1__13077_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__13077_SHARP_);
});})(vec__13082,docstring,more__$1,vec__13085,attr_map,specs,vec__13079,seq__13080,first__13081,seq__13080__$1,head,first__13081__$1,seq__13080__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__13088){
var vec__13089 = p__13088;
var macro = cljs.core.nth.call(null,vec__13089,(0),null);
var arg = cljs.core.nth.call(null,vec__13089,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__13092 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__13092__$1 = (((G__13092 instanceof cljs.core.Keyword))?G__13092.fqn:null);
switch (G__13092__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13092__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4324__auto__ = (function fipp$clojure$pretty_bindings_$_iter__13094(s__13095){
return (new cljs.core.LazySeq(null,(function (){
var s__13095__$1 = s__13095;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13095__$1);
if(temp__5720__auto__){
var s__13095__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13095__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13095__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13097 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13096 = (0);
while(true){
if((i__13096 < size__4323__auto__)){
var vec__13098 = cljs.core._nth.call(null,c__4322__auto__,i__13096);
var k = cljs.core.nth.call(null,vec__13098,(0),null);
var v = cljs.core.nth.call(null,vec__13098,(1),null);
cljs.core.chunk_append.call(null,b__13097,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__13104 = (i__13096 + (1));
i__13096 = G__13104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13097),fipp$clojure$pretty_bindings_$_iter__13094.call(null,cljs.core.chunk_rest.call(null,s__13095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13097),null);
}
} else {
var vec__13101 = cljs.core.first.call(null,s__13095__$2);
var k = cljs.core.nth.call(null,vec__13101,(0),null);
var v = cljs.core.nth.call(null,vec__13101,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__13094.call(null,cljs.core.rest.call(null,s__13095__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__13106){
var vec__13107 = p__13106;
var seq__13108 = cljs.core.seq.call(null,vec__13107);
var first__13109 = cljs.core.first.call(null,seq__13108);
var seq__13108__$1 = cljs.core.next.call(null,seq__13108);
var head = first__13109;
var first__13109__$1 = cljs.core.first.call(null,seq__13108__$1);
var seq__13108__$2 = cljs.core.next.call(null,seq__13108__$1);
var bvec = first__13109__$1;
var body = seq__13108__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__13107,seq__13108,first__13109,seq__13108__$1,head,first__13109__$1,seq__13108__$2,bvec,body){
return (function (p1__13105_SHARP_){
return fipp.visit.visit.call(null,p,p1__13105_SHARP_);
});})(vec__13107,seq__13108,first__13109,seq__13108__$1,head,first__13109__$1,seq__13108__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__13110_SHARP_){
return fipp.visit.visit.call(null,p,p1__13110_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__13111){
var vec__13112 = p__13111;
var seq__13113 = cljs.core.seq.call(null,vec__13112);
var first__13114 = cljs.core.first.call(null,seq__13113);
var seq__13113__$1 = cljs.core.next.call(null,seq__13113);
var head = first__13114;
var first__13114__$1 = cljs.core.first.call(null,seq__13113__$1);
var seq__13113__$2 = cljs.core.next.call(null,seq__13113__$1);
var fields = first__13114__$1;
var opts_PLUS_specs = seq__13113__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__13115){
var vec__13116 = p__13115;
var seq__13117 = cljs.core.seq.call(null,vec__13116);
var first__13118 = cljs.core.first.call(null,seq__13117);
var seq__13117__$1 = cljs.core.next.call(null,seq__13117);
var head = first__13118;
var opts_PLUS_specs = seq__13117__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function fipp$clojure$build_symbol_map_$_iter__13119(s__13120){
return (new cljs.core.LazySeq(null,(function (){
var s__13120__$1 = s__13120;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13120__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__13127 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__13127,(0),null);
var syms = cljs.core.nth.call(null,vec__13127,(1),null);
var iterys__4320__auto__ = ((function (s__13120__$1,vec__13127,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__13119_$_iter__13121(s__13122){
return (new cljs.core.LazySeq(null,((function (s__13120__$1,vec__13127,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__13122__$1 = s__13122;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__13122__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4320__auto__ = ((function (s__13122__$1,s__13120__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13127,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__13119_$_iter__13121_$_iter__13123(s__13124){
return (new cljs.core.LazySeq(null,((function (s__13122__$1,s__13120__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13127,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__13124__$1 = s__13124;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__13124__$1);
if(temp__5720__auto____$2){
var s__13124__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13124__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__13124__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__13126 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__13125 = (0);
while(true){
if((i__13125 < size__4323__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4322__auto__,i__13125);
cljs.core.chunk_append.call(null,b__13126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__13130 = (i__13125 + (1));
i__13125 = G__13130;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13126),fipp$clojure$build_symbol_map_$_iter__13119_$_iter__13121_$_iter__13123.call(null,cljs.core.chunk_rest.call(null,s__13124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13126),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__13124__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__13119_$_iter__13121_$_iter__13123.call(null,cljs.core.rest.call(null,s__13124__$2)));
}
} else {
return null;
}
break;
}
});})(s__13122__$1,s__13120__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13127,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__13122__$1,s__13120__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__13127,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__13119_$_iter__13121.call(null,cljs.core.rest.call(null,s__13122__$1)));
} else {
var G__13131 = cljs.core.rest.call(null,s__13122__$1);
s__13122__$1 = G__13131;
continue;
}
} else {
return null;
}
break;
}
});})(s__13120__$1,vec__13127,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__13120__$1,vec__13127,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,syms));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__13119.call(null,cljs.core.rest.call(null,s__13120__$1)));
} else {
var G__13132 = cljs.core.rest.call(null,s__13120__$1);
s__13120__$1 = G__13132;
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
var G__13134 = arguments.length;
switch (G__13134) {
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
