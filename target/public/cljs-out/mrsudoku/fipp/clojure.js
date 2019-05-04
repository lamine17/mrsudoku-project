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
var len__4531__auto___11101 = arguments.length;
var i__4532__auto___11102 = (0);
while(true){
if((i__4532__auto___11102 < len__4531__auto___11101)){
args__4534__auto__.push((arguments[i__4532__auto___11102]));

var G__11103 = (i__4532__auto___11102 + (1));
i__4532__auto___11102 = G__11103;
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
fipp.clojure.list_group.cljs$lang$applyTo = (function (seq11100){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11100));
});

fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__11104){
var vec__11105 = p__11104;
var test = cljs.core.nth.call(null,vec__11105,(0),null);
var result = cljs.core.nth.call(null,vec__11105,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__11109){
var vec__11110 = p__11109;
var seq__11111 = cljs.core.seq.call(null,vec__11110);
var first__11112 = cljs.core.first.call(null,seq__11111);
var seq__11111__$1 = cljs.core.next.call(null,seq__11111);
var head = first__11112;
var first__11112__$1 = cljs.core.first.call(null,seq__11111__$1);
var seq__11111__$2 = cljs.core.next.call(null,seq__11111__$1);
var expr = first__11112__$1;
var more = seq__11111__$2;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__11110,seq__11111,first__11112,seq__11111__$1,head,first__11112__$1,seq__11111__$2,expr,more){
return (function (p1__11108_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__11108_SHARP_);
});})(clauses,default$,vec__11110,seq__11111,first__11112,seq__11111__$1,head,first__11112__$1,seq__11111__$2,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__11114){
var vec__11115 = p__11114;
var seq__11116 = cljs.core.seq.call(null,vec__11115);
var first__11117 = cljs.core.first.call(null,seq__11116);
var seq__11116__$1 = cljs.core.next.call(null,seq__11116);
var head = first__11117;
var more = seq__11116__$1;
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__11115,seq__11116,first__11117,seq__11116__$1,head,more){
return (function (p1__11113_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__11113_SHARP_);
});})(clauses,vec__11115,seq__11116,first__11117,seq__11116__$1,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__11119){
var vec__11120 = p__11119;
var seq__11121 = cljs.core.seq.call(null,vec__11120);
var first__11122 = cljs.core.first.call(null,seq__11121);
var seq__11121__$1 = cljs.core.next.call(null,seq__11121);
var head = first__11122;
var first__11122__$1 = cljs.core.first.call(null,seq__11121__$1);
var seq__11121__$2 = cljs.core.next.call(null,seq__11121__$1);
var pred = first__11122__$1;
var first__11122__$2 = cljs.core.first.call(null,seq__11121__$2);
var seq__11121__$3 = cljs.core.next.call(null,seq__11121__$2);
var expr = first__11122__$2;
var more = seq__11121__$3;
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__11120,seq__11121,first__11122,seq__11121__$1,head,first__11122__$1,seq__11121__$2,pred,first__11122__$2,seq__11121__$3,expr,more){
return (function (p1__11118_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__11118_SHARP_);
});})(clauses,default$,vec__11120,seq__11121,first__11122,seq__11121__$1,head,first__11122__$1,seq__11121__$2,pred,first__11122__$2,seq__11121__$3,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__11124){
var vec__11125 = p__11124;
var seq__11126 = cljs.core.seq.call(null,vec__11125);
var first__11127 = cljs.core.first.call(null,seq__11126);
var seq__11126__$1 = cljs.core.next.call(null,seq__11126);
var head = first__11127;
var stmts = seq__11126__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__11125,seq__11126,first__11127,seq__11126__$1,head,stmts){
return (function (p1__11123_SHARP_){
return fipp.visit.visit.call(null,p,p1__11123_SHARP_);
});})(vec__11125,seq__11126,first__11127,seq__11126__$1,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__11129){
var vec__11130 = p__11129;
var seq__11131 = cljs.core.seq.call(null,vec__11130);
var first__11132 = cljs.core.first.call(null,seq__11131);
var seq__11131__$1 = cljs.core.next.call(null,seq__11131);
var head = first__11132;
var first__11132__$1 = cljs.core.first.call(null,seq__11131__$1);
var seq__11131__$2 = cljs.core.next.call(null,seq__11131__$1);
var test = first__11132__$1;
var more = seq__11131__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__11130,seq__11131,first__11132,seq__11131__$1,head,first__11132__$1,seq__11131__$2,test,more){
return (function (p1__11128_SHARP_){
return fipp.visit.visit.call(null,p,p1__11128_SHARP_);
});})(vec__11130,seq__11131,first__11132,seq__11131__$1,head,first__11132__$1,seq__11131__$2,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__11134){
var vec__11135 = p__11134;
var seq__11136 = cljs.core.seq.call(null,vec__11135);
var first__11137 = cljs.core.first.call(null,seq__11136);
var seq__11136__$1 = cljs.core.next.call(null,seq__11136);
var params = first__11137;
var body = seq__11136__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__11135,seq__11136,first__11137,seq__11136__$1,params,body){
return (function (p1__11133_SHARP_){
return fipp.visit.visit.call(null,p,p1__11133_SHARP_);
});})(vec__11135,seq__11136,first__11137,seq__11136__$1,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__11140){
var vec__11141 = p__11140;
var seq__11142 = cljs.core.seq.call(null,vec__11141);
var first__11143 = cljs.core.first.call(null,seq__11142);
var seq__11142__$1 = cljs.core.next.call(null,seq__11142);
var head = first__11143;
var first__11143__$1 = cljs.core.first.call(null,seq__11142__$1);
var seq__11142__$2 = cljs.core.next.call(null,seq__11142__$1);
var fn_name = first__11143__$1;
var more = seq__11142__$2;
var vec__11144 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__11144,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11144,(1),null);
var vec__11147 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__11147,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__11147,(1),null);
var vec__11150 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__11150,(0),null);
var body = cljs.core.nth.call(null,vec__11150,(1),null);
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
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__11144,docstring,more__$1,vec__11147,attr_map,more__$2,vec__11150,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11141,seq__11142,first__11143,seq__11142__$1,head,first__11143__$1,seq__11142__$2,fn_name,more){
return (function (p1__11138_SHARP_){
return fipp.visit.visit.call(null,p,p1__11138_SHARP_);
});})(vec__11144,docstring,more__$1,vec__11147,attr_map,more__$2,vec__11150,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11141,seq__11142,first__11143,seq__11142__$1,head,first__11143__$1,seq__11142__$2,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__11144,docstring,more__$1,vec__11147,attr_map,more__$2,vec__11150,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11141,seq__11142,first__11143,seq__11142__$1,head,first__11143__$1,seq__11142__$2,fn_name,more){
return (function (p1__11139_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__11139_SHARP_);
});})(vec__11144,docstring,more__$1,vec__11147,attr_map,more__$2,vec__11150,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__11141,seq__11142,first__11143,seq__11142__$1,head,first__11143__$1,seq__11142__$2,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__11155){
var vec__11156 = p__11155;
var seq__11157 = cljs.core.seq.call(null,vec__11156);
var first__11158 = cljs.core.first.call(null,seq__11157);
var seq__11157__$1 = cljs.core.next.call(null,seq__11157);
var head = first__11158;
var more = seq__11157__$1;
var vec__11159 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__11159,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11159,(1),null);
var vec__11162 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__11162,(0),null);
var body = cljs.core.nth.call(null,vec__11162,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__11159,fn_name,more__$1,vec__11162,params,body,vec__11156,seq__11157,first__11158,seq__11157__$1,head,more){
return (function (p1__11153_SHARP_){
return fipp.visit.visit.call(null,p,p1__11153_SHARP_);
});})(vec__11159,fn_name,more__$1,vec__11162,params,body,vec__11156,seq__11157,first__11158,seq__11157__$1,head,more))
,body):cljs.core.map.call(null,((function (vec__11159,fn_name,more__$1,vec__11162,params,body,vec__11156,seq__11157,first__11158,seq__11157__$1,head,more){
return (function (p1__11154_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__11154_SHARP_);
});})(vec__11159,fn_name,more__$1,vec__11162,params,body,vec__11156,seq__11157,first__11158,seq__11157__$1,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__11168){
var vec__11169 = p__11168;
var _ = cljs.core.nth.call(null,vec__11169,(0),null);
var params = cljs.core.nth.call(null,vec__11169,(1),null);
var body = cljs.core.nth.call(null,vec__11169,(2),null);
var form = vec__11169;
if(((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body)))){
var vec__11172 = cljs.core.split_with.call(null,((function (vec__11169,_,params,body,form){
return (function (p1__11165_SHARP_){
return cljs.core.not_EQ_.call(null,p1__11165_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__11169,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__11172,(0),null);
var rests = cljs.core.nth.call(null,vec__11172,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)]):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__11172,inits,rests,vec__11169,_,params,body,form){
return (function (p1__11166_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__11166_SHARP_ + (1)))].join(''));
});})(vec__11172,inits,rests,vec__11169,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)]):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__11172,inits,rests,params_STAR_,body_STAR_,vec__11169,_,params,body,form){
return (function (p1__11167_SHARP_){
return fipp.visit.visit.call(null,p,p1__11167_SHARP_);
});})(vec__11172,inits,rests,params_STAR_,body_STAR_,vec__11169,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__11176){
var vec__11177 = p__11176;
var seq__11178 = cljs.core.seq.call(null,vec__11177);
var first__11179 = cljs.core.first.call(null,seq__11178);
var seq__11178__$1 = cljs.core.next.call(null,seq__11178);
var head = first__11179;
var clauses = seq__11178__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__11177,seq__11178,first__11179,seq__11178__$1,head,clauses){
return (function (p1__11175_SHARP_){
return fipp.visit.visit.call(null,p,p1__11175_SHARP_);
});})(vec__11177,seq__11178,first__11179,seq__11178__$1,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__11181){
var vec__11182 = p__11181;
var seq__11183 = cljs.core.seq.call(null,vec__11182);
var first__11184 = cljs.core.first.call(null,seq__11183);
var seq__11183__$1 = cljs.core.next.call(null,seq__11183);
var head = first__11184;
var first__11184__$1 = cljs.core.first.call(null,seq__11183__$1);
var seq__11183__$2 = cljs.core.next.call(null,seq__11183__$1);
var ns_sym = first__11184__$1;
var more = seq__11183__$2;
var vec__11185 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__11185,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__11185,(1),null);
var vec__11188 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__11188,(0),null);
var specs = cljs.core.nth.call(null,vec__11188,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__11185,docstring,more__$1,vec__11188,attr_map,specs,vec__11182,seq__11183,first__11184,seq__11183__$1,head,first__11184__$1,seq__11183__$2,ns_sym,more){
return (function (p1__11180_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__11180_SHARP_);
});})(vec__11185,docstring,more__$1,vec__11188,attr_map,specs,vec__11182,seq__11183,first__11184,seq__11183__$1,head,first__11184__$1,seq__11183__$2,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__11191){
var vec__11192 = p__11191;
var macro = cljs.core.nth.call(null,vec__11192,(0),null);
var arg = cljs.core.nth.call(null,vec__11192,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__11195 = cljs.core.keyword.call(null,cljs.core.name.call(null,macro));
var G__11195__$1 = (((G__11195 instanceof cljs.core.Keyword))?G__11195.fqn:null);
switch (G__11195__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11195__$1)].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__4324__auto__ = (function fipp$clojure$pretty_bindings_$_iter__11197(s__11198){
return (new cljs.core.LazySeq(null,(function (){
var s__11198__$1 = s__11198;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__11198__$1);
if(temp__5720__auto__){
var s__11198__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11198__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__11198__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__11200 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__11199 = (0);
while(true){
if((i__11199 < size__4323__auto__)){
var vec__11201 = cljs.core._nth.call(null,c__4322__auto__,i__11199);
var k = cljs.core.nth.call(null,vec__11201,(0),null);
var v = cljs.core.nth.call(null,vec__11201,(1),null);
cljs.core.chunk_append.call(null,b__11200,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__11207 = (i__11199 + (1));
i__11199 = G__11207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11200),fipp$clojure$pretty_bindings_$_iter__11197.call(null,cljs.core.chunk_rest.call(null,s__11198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11200),null);
}
} else {
var vec__11204 = cljs.core.first.call(null,s__11198__$2);
var k = cljs.core.nth.call(null,vec__11204,(0),null);
var v = cljs.core.nth.call(null,vec__11204,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__11197.call(null,cljs.core.rest.call(null,s__11198__$2)));
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
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__11209){
var vec__11210 = p__11209;
var seq__11211 = cljs.core.seq.call(null,vec__11210);
var first__11212 = cljs.core.first.call(null,seq__11211);
var seq__11211__$1 = cljs.core.next.call(null,seq__11211);
var head = first__11212;
var first__11212__$1 = cljs.core.first.call(null,seq__11211__$1);
var seq__11211__$2 = cljs.core.next.call(null,seq__11211__$1);
var bvec = first__11212__$1;
var body = seq__11211__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__11210,seq__11211,first__11212,seq__11211__$1,head,first__11212__$1,seq__11211__$2,bvec,body){
return (function (p1__11208_SHARP_){
return fipp.visit.visit.call(null,p,p1__11208_SHARP_);
});})(vec__11210,seq__11211,first__11212,seq__11211__$1,head,first__11212__$1,seq__11211__$2,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__11213_SHARP_){
return fipp.visit.visit.call(null,p,p1__11213_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__11214){
var vec__11215 = p__11214;
var seq__11216 = cljs.core.seq.call(null,vec__11215);
var first__11217 = cljs.core.first.call(null,seq__11216);
var seq__11216__$1 = cljs.core.next.call(null,seq__11216);
var head = first__11217;
var first__11217__$1 = cljs.core.first.call(null,seq__11216__$1);
var seq__11216__$2 = cljs.core.next.call(null,seq__11216__$1);
var fields = first__11217__$1;
var opts_PLUS_specs = seq__11216__$2;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__11218){
var vec__11219 = p__11218;
var seq__11220 = cljs.core.seq.call(null,vec__11219);
var first__11221 = cljs.core.first.call(null,seq__11220);
var seq__11220__$1 = cljs.core.next.call(null,seq__11220);
var head = first__11221;
var opts_PLUS_specs = seq__11220__$1;
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function fipp$clojure$build_symbol_map_$_iter__11222(s__11223){
return (new cljs.core.LazySeq(null,(function (){
var s__11223__$1 = s__11223;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__11223__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__11230 = cljs.core.first.call(null,xs__6277__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__11230,(0),null);
var syms = cljs.core.nth.call(null,vec__11230,(1),null);
var iterys__4320__auto__ = ((function (s__11223__$1,vec__11230,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__11222_$_iter__11224(s__11225){
return (new cljs.core.LazySeq(null,((function (s__11223__$1,vec__11230,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__11225__$1 = s__11225;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__11225__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var sym = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4320__auto__ = ((function (s__11225__$1,s__11223__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__11230,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__11222_$_iter__11224_$_iter__11226(s__11227){
return (new cljs.core.LazySeq(null,((function (s__11225__$1,s__11223__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__11230,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__11227__$1 = s__11227;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__11227__$1);
if(temp__5720__auto____$2){
var s__11227__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11227__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__11227__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__11229 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__11228 = (0);
while(true){
if((i__11228 < size__4323__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__4322__auto__,i__11228);
cljs.core.chunk_append.call(null,b__11229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__11233 = (i__11228 + (1));
i__11228 = G__11233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11229),fipp$clojure$build_symbol_map_$_iter__11222_$_iter__11224_$_iter__11226.call(null,cljs.core.chunk_rest.call(null,s__11227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11229),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__11227__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__11222_$_iter__11224_$_iter__11226.call(null,cljs.core.rest.call(null,s__11227__$2)));
}
} else {
return null;
}
break;
}
});})(s__11225__$1,s__11223__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__11230,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__11225__$1,s__11223__$1,sym,xs__6277__auto____$1,temp__5720__auto____$1,vec__11230,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__11222_$_iter__11224.call(null,cljs.core.rest.call(null,s__11225__$1)));
} else {
var G__11234 = cljs.core.rest.call(null,s__11225__$1);
s__11225__$1 = G__11234;
continue;
}
} else {
return null;
}
break;
}
});})(s__11223__$1,vec__11230,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__11223__$1,vec__11230,pretty_fn,syms,xs__6277__auto__,temp__5720__auto__))
;
var fs__4321__auto__ = cljs.core.seq.call(null,iterys__4320__auto__.call(null,syms));
if(fs__4321__auto__){
return cljs.core.concat.call(null,fs__4321__auto__,fipp$clojure$build_symbol_map_$_iter__11222.call(null,cljs.core.rest.call(null,s__11223__$1)));
} else {
var G__11235 = cljs.core.rest.call(null,s__11223__$1);
s__11223__$1 = G__11235;
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
var G__11237 = arguments.length;
switch (G__11237) {
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
