// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.main.css_reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.log');
goog.require('goog.object');
goog.require('goog.Promise');
goog.require('goog.debug.Console');
if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.logger !== 'undefined')){
} else {
figwheel.main.css_reload.logger = goog.log.getLogger("Figwheel CSS Reload");
}

figwheel.main.css_reload.console_logging = (function figwheel$main$css_reload$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_20568 = (new goog.debug.Console());
var G__20556_20569 = c_20568.getFormatter();
goog.object.set(G__20556_20569,"showAbsoluteTime",false);

goog.object.set(G__20556_20569,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_20568);

}

var temp__5720__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.main.css_reload.console_logging', figwheel.main.css_reload.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.log_console !== 'undefined')){
} else {
figwheel.main.css_reload.log_console = figwheel.main.css_reload.console_logging.call(null);
}

figwheel.main.css_reload.add_cache_buster = (function figwheel$main$css_reload$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.main.css_reload.current_links = (function figwheel$main$css_reload$current_links(){
return cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["preload",null], null), null),(function (p1__20551_SHARP_){
return p1__20551_SHARP_.rel;
})),Array.prototype.slice.call(document.getElementsByTagName("link")));
});

figwheel.main.css_reload.truncate_url = (function figwheel$main$css_reload$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});

figwheel.main.css_reload.matches_file_QMARK_ = (function figwheel$main$css_reload$matches_file_QMARK_(file,link){
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__){
return (function (p1__20552_SHARP_,p2__20553_SHARP_){
if(cljs.core._EQ_.call(null,p1__20552_SHARP_,p2__20553_SHARP_)){
return p1__20552_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.main.css_reload.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.main.css_reload.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.get_correct_link = (function figwheel$main$css_reload$get_correct_link(file){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__20557){
var map__20558 = p__20557;
var map__20558__$1 = ((((!((map__20558 == null)))?(((((map__20558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20558):map__20558);
var match_length = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__20554_SHARP_){
return figwheel.main.css_reload.matches_file_QMARK_.call(null,file,p1__20554_SHARP_);
}),figwheel.main.css_reload.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});

figwheel.main.css_reload.clone_link = (function figwheel$main$css_reload$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.main.css_reload.add_cache_buster.call(null,url);

return clone;
});

figwheel.main.css_reload.create_link = (function figwheel$main$css_reload$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.main.css_reload.add_cache_buster.call(null,url);

return link;
});

figwheel.main.css_reload.add_link_to_document = (function figwheel$main$css_reload$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.main !== 'undefined') && (typeof figwheel.main.css_reload !== 'undefined') && (typeof figwheel.main.css_reload.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.main.css_reload.reload_css_deferred_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__20555_SHARP_){
return p1__20555_SHARP_.call(null,cljs.core.PersistentVector.EMPTY);
}))));
}

figwheel.main.css_reload.reload_css_file = (function figwheel$main$css_reload$reload_css_file(file,fin){
var temp__5718__auto__ = figwheel.main.css_reload.get_correct_link.call(null,file);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.main.css_reload.add_link_to_document.call(null,link,figwheel.main.css_reload.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,file);
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,null);
}
});

figwheel.main.css_reload.conj_reload_prom = (function figwheel$main$css_reload$conj_reload_prom(prom,file){
return prom.then((function (files){
return (new goog.Promise((function (succ,fail){
return figwheel.main.css_reload.reload_css_file.call(null,file,(function (f){
return succ.call(null,(cljs.core.truth_(f)?cljs.core.conj.call(null,files,f):files));
}));
})));
}));
});

figwheel.main.css_reload.dispatch_on_css_load = (function figwheel$main$css_reload$dispatch_on_css_load(files){
return document.body.dispatchEvent((function (){var G__20560 = (new Event("figwheel.after-css-load",document.body));
goog.object.add(G__20560,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css-files","css-files",-502009265),files], null));

return G__20560;
})());
});

figwheel.main.css_reload.reload_css_files_STAR_ = (function figwheel$main$css_reload$reload_css_files_STAR_(files,on_cssload){
var seq__20561_20570 = cljs.core.seq.call(null,files);
var chunk__20562_20571 = null;
var count__20563_20572 = (0);
var i__20564_20573 = (0);
while(true){
if((i__20564_20573 < count__20563_20572)){
var file_20574 = cljs.core._nth.call(null,chunk__20562_20571,i__20564_20573);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_20574);


var G__20575 = seq__20561_20570;
var G__20576 = chunk__20562_20571;
var G__20577 = count__20563_20572;
var G__20578 = (i__20564_20573 + (1));
seq__20561_20570 = G__20575;
chunk__20562_20571 = G__20576;
count__20563_20572 = G__20577;
i__20564_20573 = G__20578;
continue;
} else {
var temp__5720__auto___20579 = cljs.core.seq.call(null,seq__20561_20570);
if(temp__5720__auto___20579){
var seq__20561_20580__$1 = temp__5720__auto___20579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20561_20580__$1)){
var c__4351__auto___20581 = cljs.core.chunk_first.call(null,seq__20561_20580__$1);
var G__20582 = cljs.core.chunk_rest.call(null,seq__20561_20580__$1);
var G__20583 = c__4351__auto___20581;
var G__20584 = cljs.core.count.call(null,c__4351__auto___20581);
var G__20585 = (0);
seq__20561_20570 = G__20582;
chunk__20562_20571 = G__20583;
count__20563_20572 = G__20584;
i__20564_20573 = G__20585;
continue;
} else {
var file_20586 = cljs.core.first.call(null,seq__20561_20580__$1);
cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,figwheel.main.css_reload.conj_reload_prom,file_20586);


var G__20587 = cljs.core.next.call(null,seq__20561_20580__$1);
var G__20588 = null;
var G__20589 = (0);
var G__20590 = (0);
seq__20561_20570 = G__20587;
chunk__20562_20571 = G__20588;
count__20563_20572 = G__20589;
i__20564_20573 = G__20590;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,figwheel.main.css_reload.reload_css_deferred_chain,(function (prom){
return prom.then((function (loaded_files){
if(cljs.core.truth_(cljs.core.not_empty.call(null,loaded_files))){
goog.log.info(figwheel.main.css_reload.logger,["loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,loaded_files))].join(''));

figwheel.main.css_reload.dispatch_on_css_load.call(null,loaded_files);
} else {
}

var temp__5720__auto___20591 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,loaded_files),cljs.core.set.call(null,files)));
if(cljs.core.truth_(temp__5720__auto___20591)){
var not_loaded_20592 = temp__5720__auto___20591;
goog.log.warning(figwheel.main.css_reload.logger,["Unable to reload ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,not_loaded_20592))].join(''));
} else {
}

return cljs.core.PersistentVector.EMPTY;
}));
}));
});

figwheel.main.css_reload.reload_css_files = (function figwheel$main$css_reload$reload_css_files(p__20565,files){
var map__20566 = p__20565;
var map__20566__$1 = ((((!((map__20566 == null)))?(((((map__20566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20566):map__20566);
var on_cssload = cljs.core.get.call(null,map__20566__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(!((goog.global.document == null))){
var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.distinct.call(null,files));
if(cljs.core.truth_(temp__5720__auto__)){
var files_SINGLEQUOTE_ = temp__5720__auto__;
return figwheel.main.css_reload.reload_css_files_STAR_.call(null,files_SINGLEQUOTE_,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

figwheel.main.css_reload.reload_css_files_remote = (function figwheel$main$css_reload$reload_css_files_remote(files_array){
figwheel.main.css_reload.reload_css_files.call(null,cljs.core.PersistentArrayMap.EMPTY,files_array);

return true;
});
goog.exportSymbol('figwheel.main.css_reload.reload_css_files_remote', figwheel.main.css_reload.reload_css_files_remote);

//# sourceMappingURL=css_reload.js.map
