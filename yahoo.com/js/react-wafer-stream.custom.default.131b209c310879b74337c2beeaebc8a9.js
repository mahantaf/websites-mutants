window.wafer&&window.wafer.ready((function(){var e="show-drawer",t=null,a=null,r="wafer-fetch-error",n="wafer-fetch-complete",i="stream-related-drawer",o="StreamRelated",s="react-wafer-stream",c="json",d="wafer-fetch",l="stream-uuid-list",u=[],f=document.querySelectorAll(".stream-items"),w=document.querySelector(".stream-ad-fetch"),m=window.innerWidth||document.documentElement.clientWidth,g="js-sponsored-moments-dwell-time",A=window.wafer&&window.wafer.utils,v={INARTICLE:9/16,reservemoments:16/9},p=function e(t){var a,r,n=t.getAttribute("data-da-position");if("reservemoments"===n&&(t=t.querySelector("#defaultRESERVEMOMENTS")),a=t.getAttribute("data-html"),r=t.getAttribute("data-darla-config"),a&&r){(r=JSON.parse(r)).dest;var i=window.DARLA.prefetched();if(!window.DARLA.config()||window.DARLA.inProgress()||i&&0!==i.length)setTimeout((function(){e(t)}),500);else{if(!r.h&&!r.w){var o=Math.floor(m*v[n]),s={flex:{h:{min:o},w:{min:m}},h:o,w:m};Object.assign(r,s)}var c=r.id;window.DARLA.addPos(r);var d=new window.DARLA.Response(c,{});a=unescape(a),d.add(c,a),window.DARLA.render(d),t.classList.remove("unprocessed-display-card")}}};window.wafer.on("fetch:success",(function(e){var t=e.elem;if(t&&t.classList&&(t.classList.contains("collections-view-more")&&(document.documentElement.classList.remove("Reader-closed"),document.documentElement.classList.add("Reader-open"),window.wafer.base.lock(document.getElementById("MainView")),window.scrollTo(0,0)),t.classList.contains("stream-batch-fetch"))){var a=document.getElementsByClassName("js-display-card unprocessed-display-card");a.length&&A.convertNodeListToArray(a).forEach((function(e){window.DARLA&&e?p(e):e.style.display="none"}));var r=window.rapidPageConfig&&window.rapidPageConfig.rapidConfig&&window.rapidPageConfig.rapidConfig.spaceid;r&&(window._comscore=window._comscore||[],window._comscore.push({c1:2,c14:window.YAHOO&&window.YAHOO.comscore&&window.YAHOO.comscore.c14||-1,c2:"7241469",c5:r,c7:document.location.href}),window.COMSCORE&&window.COMSCORE.purge())}}));var h=function e(t){var a=Math.floor(16*m/9),r=t.querySelector("#defaultRESERVEMOMENTS"),n=r&&r.getAttribute("data-html");if(n){var i=window.DARLA.prefetched();if(window.DARLA.inProgress()||i&&0!==i.length)setTimeout((function(){e(t)}),500);else{var o={dest:"defaultRESERVEMOMENTS",flex:{h:{min:a},w:{min:m}},h:a,id:"RESERVEMOMENTS",supports:{"exp-ovr":1,"exp-push":1,"resize-to":1},w:m};window.DARLA.addPos(o);var s=new window.DARLA.Response("RESERVEMOMENTS",{});n=unescape(n),s.add("RESERVEMOMENTS",n),window.DARLA.render(s)}}};if(f&&f.length){A.convertNodeListToArray(f).forEach((function(l){if(l.addEventListener("animationend",(function(e){var t=e&&e.target;e&&t&&"fadeOutAdConfirm"===e.animationName&&(t.classList.contains("ad-feedback-options")||(t.classList.contains("give-feedback-screen")?t=A.findAncestor(t,"stream-item"):t.classList.contains("comm-undo")&&(t=A.findAncestor(t,"stream-item-card")),t.parentNode&&(window.wafer.base.destroy(t),t.parentNode.removeChild(t))))})),l.addEventListener("click",(function(l){!function(l){window.location.href.indexOf("functest=1")>-1&&l.preventDefault();var u=l.target;if(A&&u){var f=A.findAncestor(u,"js-content-viewer");if(f){var w=A.findAncestor(f,"stream-cluster-item")||A.findAncestor(f,"js-stream-content");if(w){var m=w.getAttribute("data-uuid");if(m){var g=w&&w.getAttribute("data-parent-uuid");if(t=g&&document.querySelector('li[data-uuid="'+g+'"]')||w,a=t&&t.getElementsByClassName(i)[0]){if(t.classList.contains(e))return;var v=S(),p=window.YAHOO&&window.YAHOO.context||{},h={config:{leadItemUuid:g||m},ctrl:o,lang:p.lang,m_id:s,m_mode:c,region:p.region,site:p.site},y={dedupUuids:v.dedupUuids.join(","),uuid:m},L=a.getAttribute("data-cfg");if(L){var b=w.getAttribute("data-cposy");b=isNaN(b)?null:parseInt(b,10);try{var E=JSON.parse(L);null!==b&&(E.i13n.cposy=b),h.config=Object.assign(h.config,E)}catch(e){}}var N=a.getAttribute("data-bucket");N&&(h.bucket=N),h.config.ncpParams=h.config.ncpParams||{},h.config.ncpParams.query=h.config.ncpParams.query||{},h.config.ncpParams.query=Object.assign(y,h.config.ncpParams.query);var q=window.wafer.base.state.drawer,R=q&&q.adsToken;R&&(h.config.ncpParams.query.geminiDedupeToken=R),a.setAttribute("data-wf-body",JSON.stringify(h)),a.classList.remove(r,n),a.classList.add(d),window.wafer.base.sync(a.parentNode)}}}}}}(l)})),w&&window.wafer.base&&A){var u=w.getAttribute("data-wf-url"),f=w.getAttribute("data-wf-body");A.fetchWithCache(u,{body:f,cache:0}).then((function(e){if(e&&e.html){w.innerHTML=e.html;var t=w.querySelectorAll(".stream-ad"),a=w.getElementsByClassName("wafer-state")[0],r=l.querySelectorAll(".stream-ad-placeholder");if(t&&r)for(var n=t.length,i=r.length,o=0;o<i&&o<n;o++)r[o].replaceWith(t[o]);w.innerHTML="",a&&w.appendChild(a),window.wafer.base.sync(l)}})).catch((function(e){var t=l.querySelectorAll(".wafer-fetch.stream-batch-fetch");t.length&&A.convertNodeListToArray(t).forEach((function(e){var t=e.classList;t&&(t.add("wafer-fetch-error"),t.remove("wafer-fetch"))}))}))}var v=l.querySelectorAll("."+g+", ."+g+"-mon");if(v.length){A.convertNodeListToArray(v).forEach((function(e){e.classList&&e.classList.contains("js-reserve-moments")&&(window.DARLA?h(e):e.style.display="none")}));var y=v[0].querySelector(".js-panorama-scroll-view");y&&0===y.scrollLeft&&(y.scrollLeft=(y.scrollWidth-m)/2)}var L=!!window.DARLA,b=l.querySelectorAll(".js-display-card.unprocessed-display-card");b.length&&A.convertNodeListToArray(b).forEach((function(e){L&&e?p(e):e.style.display="none"}))}));var y,L,b=document.getElementById("scrollable-smad"),E=document.getElementById("scrollable-video"),N=window.innerHeight||document.documentElement.clientHeight,q={},R=function(e){return e&&(e=(e=(e=(e=(e=(e=e.replace(/\$\(V_AUTOPLAYED\)/,!1)).replace(/\$\(V_PLAYER_WIDTH\)/,b.clientHeight)).replace(/\$\(V_PLAYER_HEIGHT\)/,b.clientWidth)).replace(/\$\(V_SKIP_AVAIL\)/,!1)).replace(/\$\(V_EXPANDED\)/,!1)).replace(/\$\(V_AUD_INFO\)/,2)),e};if(b){var O=b.getBoundingClientRect();y=O.top-N,L=O.bottom-y,q.startActionUrl=b.getAttribute("data-video-quartile-start"),q.quartileActionUrl25=b.getAttribute("data-video-quartile-25"),q.quartileActionUrl50=b.getAttribute("data-video-quartile-50"),q.quartileActionUrl75=b.getAttribute("data-video-quartile-75"),q.quartileActionUrl100=b.getAttribute("data-video-quartile-100")}b&&E&&window.addEventListener("scroll",A.throttle((function(){var e=E&&E.duration,t=b.getBoundingClientRect();if(t.top<N&&t.bottom>0){E.currentTime=(window.pageYOffset-y)*e/L;var a=(N-t.top)/N*100;(a=5*Math.ceil(a/5))>=100&&q.quartileActionUrl100?(A.fireBeacon(R(q.quartileActionUrl100),{useNavigator:!1}),q.quartileActionUrl100=null):a>=75&&q.quartileActionUrl75?(A.fireBeacon(R(q.quartileActionUrl75),{useNavigator:!1}),q.quartileActionUrl75=null):a>=50&&q.quartileActionUrl50?(A.fireBeacon(R(q.quartileActionUrl50),{useNavigator:!1}),q.quartileActionUrl50=null):a>=25&&q.quartileActionUrl25?(A.fireBeacon(R(q.quartileActionUrl25),{useNavigator:!1}),q.quartileActionUrl25=null):a>=5&&q.startActionUrl&&(A.fireBeacon(R(q.startActionUrl),{useNavigator:!1}),q.startActionUrl=null)}}),16))}var S=function(){for(var e=Array.prototype.slice.call(document.getElementsByClassName(l)),t=0;t<e.length;t++){var a=e[t],r=a.text;a.classList.remove(l);try{var n=JSON.parse(r);n&&Array.isArray(n.uuidList)&&u.length+n.uuidList.length<=250&&(u=u.concat(n.uuidList))}catch(e){}}return{dedupUuids:u}};window.addEventListener("viewerClosed",(function(){if(t){var r=t,n=a&&!!a.getElementsByClassName("stream-realted-list")[0];!r.classList.contains(e)&&n&&(r.classList.add("drawer-beacon"),setTimeout((function(){r.classList.add(e)}),10)),a=null,t=null}}));window.wafer.on("video:adplaybackstart",(function(e){e&&e.elem&&e.elem.parentNode&&e.elem.parentNode.classList&&e.elem.parentNode.classList.contains("stream-video-ad-v2")&&e.elem.parentNode.classList.remove("video-endcard")})),window.wafer.on("video:playbackcomplete",(function(e){e&&e.elem&&e.elem.parentNode&&e.elem.parentNode.classList&&e.elem.parentNode.classList.contains("stream-video-ad-v2")&&e.elem.parentNode.classList.add("video-endcard")}));var T;(window.wafer.on("toggle:change",(function(e){if(e&&e.meta&&e.elem){var t=e.elem.getAttribute("data-wf-toggle-target");"show-drawer"===e.meta.className&&f&&f.length&&A.convertNodeListToArray(f).forEach((function(e){var a=e.querySelector(t),r=a&&a.getElementsByClassName("drawer-fetch-target")[0];setTimeout((function(){r&&(r.innerHTML="")}),300)}))}})),window.wafer.features.mutationObserver)&&(window.wafer.on("lightbox:close",(function(){T&&T.disconnect()})),window.wafer.on("lightbox:open",(function(e){var t=document.getElementById("fp-lightbox-bookmarks-modal");t&&(T=new MutationObserver((function(e){if(t.getElementsByClassName("wafer-fetch-complete")[0]){if(!t.querySelectorAll(".stream-item:not(.wafer-action-boundary-success)").length)return t.classList.add("has-wafer-fetch-error"),void(T&&T.disconnect());for(var a=0,r=e;a<r.length;a++){var n=r[a],i=n.target.classList;if("attributes"===n.type&&"class"===n.attributeName&&i&&i.contains("wafer-action-boundary-success")){window.wafer.base.sync(t);break}}}}))).observe(e.elem,{attributes:!0,childList:!0,subtree:!0})})))}));