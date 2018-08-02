!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!_[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--v&&0===m&&S()}(e,n),t&&t(e,n)};var n,r=!0,o="9595fc86a0a25a9129a5",i=1e4,c={},a=[],l=[];function s(e){var t=q[e];if(!t)return O;var r=function(r){return t.hot.active?(q[r]?-1===q[r].parents.indexOf(e)&&q[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),O(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return O[e]},set:function(t){O[e]=t}}};for(var i in O)Object.prototype.hasOwnProperty.call(O,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&p("prepare"),m++,O.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===u&&(g[e]||x(e),0===m&&0===v&&S())}},r.t=function(e,t){return 1&t&&(e=r(e)),O.t(e,-2&t)},r}var d=[],u="idle";function p(e){u=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var f,y,h,v=0,m=0,g={},w={},_={};function b(e){return+e+""===e?+e:e}function E(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=O.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;w={},g={},_=e.c,h=e.h,p("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});y={};return x(0),"prepare"===u&&0===m&&0===v&&S(),t});var t}function x(e){_[e]?(w[e]=!0,v++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=O.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):g[e]=!0}function S(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(b(n));e.resolve(t)}}function j(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,i,l,s;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((l=q[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<l.parents.length;a++){var s=l.parents[a],d=q[s];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(d.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),f(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var v={},m=[],g={},w=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var E in y)if(Object.prototype.hasOwnProperty.call(y,E)){var x;s=b(E);var S=!1,j=!1,k=!1,L="";switch((x=y[E]?d(s):{type:"disposed",moduleId:E}).chain&&(L="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+x.moduleId+L));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+L));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(S=new Error("Aborted because "+s+" is not accepted"+L));break;case"accepted":t.onAccepted&&t.onAccepted(x),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),k=!0;break;default:throw new Error("Unexception type "+x.type)}if(S)return p("abort"),Promise.reject(S);if(j)for(s in g[s]=y[s],f(m,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,s)&&(v[s]||(v[s]=[]),f(v[s],x.outdatedDependencies[s]));k&&(f(m,[x.moduleId]),g[s]=w)}var D,I=[];for(r=0;r<m.length;r++)s=m[r],q[s]&&q[s].hot._selfAccepted&&I.push({module:s,errorHandler:q[s].hot._selfAccepted});p("dispose"),Object.keys(_).forEach(function(e){!1===_[e]&&function(e){delete installedChunks[e]}(e)});for(var P,H,A=m.slice();A.length>0;)if(s=A.pop(),l=q[s]){var M={},T=l.hot._disposeHandlers;for(i=0;i<T.length;i++)(n=T[i])(M);for(c[s]=M,l.hot.active=!1,delete q[s],delete v[s],i=0;i<l.children.length;i++){var G=q[l.children[i]];G&&((D=G.parents.indexOf(s))>=0&&G.parents.splice(D,1))}}for(s in v)if(Object.prototype.hasOwnProperty.call(v,s)&&(l=q[s]))for(H=v[s],i=0;i<H.length;i++)P=H[i],(D=l.children.indexOf(P))>=0&&l.children.splice(D,1);for(s in p("apply"),o=h,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var U=null;for(s in v)if(Object.prototype.hasOwnProperty.call(v,s)&&(l=q[s])){H=v[s];var B=[];for(r=0;r<H.length;r++)if(P=H[r],n=l.hot._acceptedDependencies[P]){if(-1!==B.indexOf(n))continue;B.push(n)}for(r=0;r<B.length;r++){n=B[r];try{n(H)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:H[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<I.length;r++){var R=I[r];s=R.module,a=[s];try{O(s)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||U||(U=e)}}return U?(p("fail"),Promise.reject(U)):(p("idle"),new Promise(function(e){e(m)}))}var q={};function O(t){if(q[t])return q[t].exports;var r=q[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:E,apply:j,status:function(e){if(!e)return u;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:c[e]};return n=void 0,t}(t),parents:(l=a,a=[],l),children:[]};return e[t].call(r.exports,r,r.exports,s(t)),r.l=!0,r.exports}O.m=e,O.c=q,O.d=function(e,t,n){O.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},O.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},O.t=function(e,t){if(1&t&&(e=O(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(O.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)O.d(n,r,function(t){return e[t]}.bind(null,r));return n},O.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return O.d(t,"a",t),t},O.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},O.p="",O.h=function(){return o},s(0)(O.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.onload=function(){var e,t,r,o,i,c,a,l,s,d,u,p,f,y,h,v,m,g,w,_,b=document.querySelector(".hot_phone_wrap"),E=b.offsetTop;!function(){for(var e=document.querySelector(".carousel"),t=e.querySelector("ul"),n=e.querySelectorAll("a>img"),r=n.length,o=document.documentElement.clientWidth,i=0;i<r;i++)n[i].style.maxWidth="1920px",n[i].style.minWidth="1366px",n[i].style.width=o+"px";f();var c=e.querySelectorAll("a"),r=c.length,a=t.querySelectorAll("li"),l=null,s=0,d=0;function u(){for(var e=0;e<r;e++)c[e].style.transition="none";c[d].style.opacity="0",c[s].style.opacity="1",a[d].classList.remove("controlAnimate"),a[s].classList.add("controlAnimate")}function p(){d=s,s++,s%=r,u(),c[d].style.transition="opacity 1s ease-in-out",c[s].style.transition="opacity 1s ease-in-out"}function f(){var t=e.querySelectorAll("a>img"),n=t[0].offsetWidth,r=t[0].offsetHeight;e.style.width=n+"px",e.style.height=r+"px"}l=setInterval(p,3e3),function(){for(var e=0;e<a.length;e++)a[e].index=e;t.addEventListener("click",function(e){clearInterval(l),"LI"===e.target.nodeName&&(d=s,s=e.target.index,s%=r,u(),c[d].style.transition="opacity 1s ease-in-out",c[s].style.transition="opacity 1s ease-in-out")})}(),y=e.querySelector(".arrowLeft"),h=e.querySelector(".arrowRight"),e.addEventListener("mouseenter",function(){clearInterval(l),y.classList.add("arrow_active"),h.classList.add("arrow_active")}),e.addEventListener("mouseleave",function(){clearInterval(l),l=setInterval(p,3e3),y.classList.remove("arrow_active"),h.classList.remove("arrow_active")}),h.addEventListener("click",function(){clearInterval(l),d=s,s++,s%=r,u()}),y.addEventListener("click",function(){clearInterval(l),d=s,0===s&&(s=r),s--,s%=r,u()}),window.addEventListener("resize",function(){for(var e=document.documentElement.clientWidth,t=0;t<n.length;t++)n[t].style.width=e+"px";f()});var y,h}(),e=1,t=document.querySelector(".brand_wall_refresh"),r=t.querySelector("a>.img_refresh"),o=document.querySelectorAll(".brand_wall_3d"),i=o.length,c=!0,a=!0,t.addEventListener("click",function(){if(a){if(a=!1,c){var t=0;r.style.transition="transform .5s ease-in-out background .3s ease-in-out",r.style.transform="rotate("+360*e+"deg)";for(var n=0;n<i;n++)o[n].style.transition=".5s ease-in-out "+t+"s",o[n].style.transform="rotateY(180deg)",t+=.2;setTimeout(function(){a=!0},1e3*t)}else{var t=0;r.style.transition="transform .5s ease-in-out background .3s ease-in-out",r.style.transform="rotate("+360*e+"deg)";for(var n=i-1;n>=0;n--)o[n].style.transition=".5s ease-in-out "+t+"s",o[n].style.transform="rotateY(0deg)",t+=.2;setTimeout(function(){a=!0},1e3*t)}c=!c,e++}}),function(){var e=[{name:"三星 Galaxy S9+",href:"javascript:;",src:n(9),detail:"6GB+128GB 勃艮第红",price:6999},{name:"小米 MIX2",href:"javascript:;",src:n(10),detail:"8GB+128GB 全陶瓷版",price:3499},{name:"华为 Mate RS",href:"javascript:;",src:n(11),detail:"6G+256G 保时捷设计",price:9999},{name:"索尼 XZ Premium",href:"javascript:;",src:n(12),detail:"4G+64G 4k分辨率",price:4999},{name:"惠普 Spectre 13",href:"javascript:;",src:n(13),detail:"i5-8250U 8G 256G",price:8988},{name:"雷蛇 Blade 2018",href:"javascript:;",src:n(14),detail:"i7-8750H GTX 1060",price:13999},{name:"华为 MateBook X Pro",href:"javascript:;",src:n(15),detail:"i5-8250U 8G 256G 3K",price:7988},{name:"微星 GS65",href:"javascript:;",src:n(16),detail:"i7-8750H 144Hz",price:14699}];function t(e){this._init(e)}t.prototype={_init:function(e){this.name=e.name,this.src=e.src,this.href=e.href,this.detail=e.detail,this.price=e.price},bindDom:function(){return'<div class=moreProduct_item><div class=moreProduct_item_top><a href="'+this.href+'"><img src="'+this.src+'"></a><div class=moreProduct_item_bottom><p>'+this.name+'</p><div class="moreProduct_item_arguments clearfix"><div><span>'+this.detail+"</span></div><div><span>¥</span><span>"+this.price+"</span></div></div></div></div></div>"}};for(var r="",o=0;o<e.length;o++){var i=new t(e[o]);r+=i.bindDom()}document.querySelector(".moreProduct_wrap_content").innerHTML=r}(),l=document.querySelectorAll(".header_middle_nav>ul>li"),s=l[0],d=s.querySelector("a"),u=l[1],p=u.querySelector("a"),f=l[2],y=f.querySelector("a"),h=document.querySelector(".nav_brand"),v=document.querySelector(".nav_phone"),m=document.querySelector(".nav_laptop"),s.addEventListener("mouseover",function(){d.style.color="black",h.style.display="block"}),s.addEventListener("mouseout",function(){d.style.color="#8f8f8f",h.style.display="none"}),u.addEventListener("mouseover",function(){p.style.color="black",v.style.display="block"}),u.addEventListener("mouseout",function(){p.style.color="#8f8f8f",v.style.display="none"}),f.addEventListener("mouseover",function(){y.style.color="black",m.style.display="block"}),f.addEventListener("mouseout",function(){y.style.color="#8f8f8f",m.style.display="none"}),g=document.querySelector(".returnTop"),w=null,window.addEventListener("scroll",function(){var e=document.documentElement.scrollTop;g.style.display=e>=100?"block":"none"}),g.addEventListener("click",function(){clearInterval(w);var e=document.documentElement.scrollTop,t=e;w=setInterval(function(){(t-=Math.ceil(t/10))<=0&&(t=0,clearInterval(w)),document.documentElement.scrollTop=t},10)}),_=document.querySelector(".header_slide"),window.addEventListener("scroll",function(){var e=document.documentElement.scrollTop;_.style.top=e>=E?"0":"-200px"}),function(){var e=document.querySelectorAll(".hot_kind_content"),t=document.querySelectorAll(".hot_kind_left"),n=document.querySelectorAll(".hot_kind_right"),r=document.querySelector(".returnTop");window.addEventListener("resize",function(){!function(){if(document.documentElement.clientWidth<1500){for(var o=0;o<e.length;o++)e[o].style.width="1200px",t[o].querySelector("a").style.width="550px",n[o].querySelector("a").style.width="550px";r.style.marginLeft="600px"}else{for(var o=0;o<e.length;o++)e[o].style.width="1500px",t[o].querySelector("a").style.width="700px",n[o].querySelector("a").style.width="700px";r.style.marginLeft="800px"}}(),E=b.offsetTop})}()}},function(e,t){},,,,,,,,function(e,t,n){e.exports=n.p+"static/img/09.4068f70.jpg"},function(e,t,n){e.exports=n.p+"static/img/010.0c1ef64.jpg"},function(e,t,n){e.exports=n.p+"static/img/011.e7564a7.jpg"},function(e,t,n){e.exports=n.p+"static/img/012.fe5b2b7.jpg"},function(e,t,n){e.exports=n.p+"static/img/013.f261071.jpg"},function(e,t,n){e.exports=n.p+"static/img/014.8cc9655.jpg"},function(e,t,n){e.exports=n.p+"static/img/015.a108255.jpg"},function(e,t,n){e.exports=n.p+"static/img/016.8cbba25.jpg"}]);
//# sourceMappingURL=index.9595fc8.js.map