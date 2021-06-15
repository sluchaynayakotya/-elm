!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function e(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function s(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function o(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function t(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function u(i){return r(6,i,function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return i(a,u,e,t,r,n)}}}}}})}function m(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function y(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function v(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function w(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function c(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}function k(n,r){for(var t,e=[],u=a(n,r,0,e);u&&(t=e.pop());u=a(t.a,t.b,0,e));return u}function a(n,r,t,e){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&S(5),!1;if(100<t)return e.push({a:n,b:r}),!0;for(var u in n.$<0&&(n=kr(n),r=kr(r)),n)if(!a(n[u],r[u],t+1,e))return!1;return!0}function l(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(void 0===n.$)return(t=l(n.a,r.a))||(t=l(n.b,r.b))?t:l(n.c,r.c);for(;n.b&&r.b&&!(t=l(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var i=e(function(n,r){r=l(n,r);return r<0?mr:r?pr:gr}),f=0;function j(n,r){var t,e={};for(t in n)e[t]=n[t];for(t in r)e[t]=r[t];return e}function b(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t={$:1,a:n.a,b:r};n=n.b;for(var e=t;n.b;n=n.b)e=e.b={$:1,a:n.a,b:r};return t}var d={$:0};function h(n,r){return{$:1,a:n,b:r}}var $=e(h);function _(n){for(var r=d,t=n.length;t--;)r={$:1,a:n[t],b:r};return r}function g(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var p=e(function(t,n){return _(g(n).sort(function(n,r){return l(t(n),t(r))}))});var x=s(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),A=e(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,{a:t,b:r}});function S(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var N=e(function(n,r){r%=n;return 0===n?S(11):0<r&&n<0||r<0&&0<n?r+n:r}),E=Math.cos,L=Math.sin;var T=Math.ceil,O=Math.floor,M=Math.log;var z=e(function(n,r){return r.join(n)});var C=e(function(n,r){return 0==r.indexOf(n)});function D(n){return n+""}var J={$:2,b:function(n){return"number"!=typeof n||(n<=-2147483647||2147483647<=n||(0|n)!==n)&&(!isFinite(n)||n%1)?Q("an INT",n):Sr(n)}},H={$:2,b:function(n){return"number"==typeof n?Sr(n):Q("a FLOAT",n)}},W={$:2,b:function(n){return Sr(n)}},F={$:2,b:function(n){return"string"==typeof n?Sr(n):n instanceof String?Sr(n+""):Q("a STRING",n)}};var q=e(function(n,r){return{$:6,d:n,b:r}}),G=e(function(n,r){return{$:7,e:n,b:r}});var K=e(function(n,r){return{$:10,b:r,h:n}});var P=e(function(n,r){return{$:9,f:n,g:[r]}}),R=s(function(n,r,t){return{$:9,f:n,g:[r,t]}}),I=e(function(n,r){try{return B(n,JSON.parse(r))}catch(n){return jr(m(_r,"This is not valid JSON! "+n.message,r))}}),X=e(B);function B(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Sr(n.c):Q("null",r);case 3:return U(r)?Y(n.b,r,_):Q("a LIST",r);case 4:return U(r)?Y(n.b,r,V):Q("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return Q("an OBJECT with a field named `"+t+"`",r);var e=B(n.b,r[t]);return Qr(e)?e:jr(m(xr,t,e.a));case 7:t=n.e;if(!U(r))return Q("an ARRAY",r);if(r.length<=t)return Q("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);e=B(n.b,r[t]);return Qr(e)?e:jr(m(Ar,t,e.a));case 8:if("object"!=typeof r||null===r||U(r))return Q("an OBJECT",r);var u,a=d;for(u in r)if(r.hasOwnProperty(u)){e=B(n.b,r[u]);if(!Qr(e))return jr(m(xr,u,e.a));a={$:1,a:{a:u,b:e.a},b:a}}return Sr(Cr(a));case 9:for(var i=n.f,o=n.g,c=0;c<o.length;c++){e=B(o[c],r);if(!Qr(e))return e;i=i(e.a)}return Sr(i);case 10:e=B(n.b,r);return Qr(e)?B(n.h(e.a),r):e;case 11:for(var f=d,b=n.g;b.b;b=b.b){e=B(b.a,r);if(Qr(e))return e;f={$:1,a:e.a,b:f}}return jr(Nr(Cr(f)));case 1:return jr(m(_r,n.a,r));case 0:return Sr(n.a)}}function Y(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=B(n,r[a]);if(!Qr(i))return jr(m(Ar,a,i.a));u[a]=i.a}return Sr(t(u))}function U(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function V(r){return m(Vr,r.length,function(n){return r[n]})}function Q(n,r){return jr(m(_r,"Expecting "+n,r))}function Z(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return Z(n.b,r.b);case 6:return n.d===r.d&&Z(n.b,r.b);case 7:return n.e===r.e&&Z(n.b,r.b);case 9:return n.f===r.f&&nn(n.g,r.g);case 10:return n.h===r.h&&Z(n.b,r.b);case 11:return nn(n.g,r.g)}}function nn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!Z(n[e],r[e]))return!1;return!0}var rn=e(function(n,r){return JSON.stringify(r,null,n)+""});function tn(n){return n}var en=s(function(n,r,t){return t[n]=r,t});function un(n){return{$:0,a:n}}var an=e(function(n,r){return{$:3,b:n,d:r}}),on=e(function(n,r){return{$:4,b:n,d:r}});var cn=0;function fn(n){n={$:0,e:cn++,f:n,g:null,h:[]};return hn(n),n}function bn(r){return{$:2,b:function(n){n({$:0,a:fn(r)})},c:null}}function sn(n,r){n.h.push(r),hn(n)}var vn=e(function(r,t){return{$:2,b:function(n){sn(r,t),n({$:0,a:f})},c:null}});var ln=!1,dn=[];function hn(n){if(dn.push(n),!ln){for(ln=!0;n=dn.shift();)!function(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return r.f.c=r.f.b(function(n){r.f=n,hn(r)});if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}(n);ln=!1}}function $n(n,r,t,e,u,a){r=m(X,n,r?r.flags:void 0);Qr(r)||S(2);var i={},r=t(r.a),o=r.a,c=a(f,o),a=function(n,r){var t,e;for(e in gn){var u=gn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=function(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,o=n.f;function c(t){return m(an,c,{$:5,b:function(n){var r=n.a;return 0===n.$?y(a,e,r,t):i&&o?v(u,e,r.i,r.j,t):y(u,e,i?r.i:r.j,t)}})}return e.h=fn(m(an,c,n.b))}(u,r)}return t}(i,f);function f(n,r){n=m(e,n,o);c(o=n.a,r),_n(i,n.b,u(o))}return _n(i,r.b,u(o)),a?{ports:a}:{}}var gn={};var pn=e(function(r,t){return{$:2,b:function(n){r.g(t),n({$:0,a:f})},c:null}}),mn=e(function(n,r){return m(vn,n.h,{$:0,a:r})});function yn(r){return function(n){return{$:1,k:r,l:n}}}function wn(n){return{$:2,m:n}}var kn=[],jn=!1;function _n(n,r,t){if(kn.push({p:n,q:r,r:t}),!jn){jn=!0;for(var e;e=kn.shift();)!function(n,r,t){var e,u={};for(e in xn(!0,r,u,null),xn(!1,t,u,null),n)sn(n[e],{$:"fx",a:u[e]||{i:d,j:d}})}(e.p,e.q,e.r);jn=!1}}function xn(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.t)n=r.s(n);return n}return m(n?gn[r].e:gn[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:d,j:d},n?t.i={$:1,a:r,b:t.i}:t.j={$:1,a:r,b:t.j},t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)xn(n,i.a,t,e);return;case 3:return void xn(n,r.o,t,{s:r.n,t:e})}}function An(n){gn[n]&&S(3)}function Sn(n,r){return An(n),gn[n]={e:Nn,u:r,a:En},yn(n)}var Nn=e(function(n,r){return r});function En(n){var t,i=[],o=gn[n].u,c=(t=0,{$:2,b:function(n){var r=setTimeout(function(){n({$:0,a:f})},t);return function(){clearTimeout(r)}},c:null});return gn[n].b=c,gn[n].c=s(function(n,r,t){for(;r.b;r=r.b)for(var e=i,u=o(r.a),a=0;a<e.length;a++)e[a](u);return c}),{subscribe:function(n){i.push(n)},unsubscribe:function(n){(n=(i=i.slice()).indexOf(n))<0||i.splice(n,1)}}}function Ln(n,r){return An(n),gn[n]={f:On,u:r,a:Mn},yn(n)}var Tn,On=e(function(r,t){return function(n){return r(t(n))}});function Mn(n,e){var u=d,a=gn[n].u,i={$:0,a:null};return gn[n].b=i,gn[n].c=s(function(n,r,t){return u=r,i}),{send:function(n){Qr(n=m(X,a,n))||S(4);for(var r=n.a,t=u;t.b;t=t.b)e(t.a(r))}}}var zn="undefined"!=typeof document?document:{};function Cn(n){return{$:0,a:n}}var Dn=e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:Gn(n),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:Gn(n),e:t,f:a,b:e}})})(void 0);var Jn=e(function(n,r){return{$:"a0",n:n,o:r}}),Hn=e(function(n,r){return{$:"a1",n:n,o:r}}),Wn=e(function(n,r){return{$:"a2",n:n,o:r}}),Fn=e(function(n,r){return{$:"a3",n:n,o:r}});var qn;function Gn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;"a2"!==e?(t=r[e]||(r[e]={}),"a3"===e&&"class"===u?Kn(t,u,a):t[u]=a):"className"===u?Kn(r,u,a):r[u]=a}return r}function Kn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function Pn(n,r){var t=n.$;if(5===t)return Pn(n.k||(n.k=n.m()),r);if(0===t)return zn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=Pn(e,a)).elm_event_node_ref=a,i}if(3===t)return Rn(i=n.h(n.g),r,n.d),i;var i=n.f?zn.createElementNS(n.f,n.c):zn.createElement(n.c);Tn&&"a"==n.c&&i.addEventListener("click",Tn(i)),Rn(i,r,n.d);for(var o=n.e,c=0;c<o.length;c++)i.appendChild(Pn(1===t?o[c]:o[c].b,r));return i}function Rn(n,r,t){for(var e in t){var u=t[e];"a1"===e?function(n,r){var t,e=n.style;for(t in r)e[t]=r[t]}(n,u):"a0"===e?function(n,r,t){var e,u=n.elmFs||(n.elmFs={});for(e in t){var a=t[e],i=u[e];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(e,i)}i=function(c,n){function f(n){var r=f.q,t=B(r.a,n);if(Qr(t)){for(var e,u=tt(r),r=t.a,a=u?u<3?r.a:r.y:r,t=1==u?r.b:3==u&&r.an,i=(t&&n.stopPropagation(),(2==u?r.b:3==u&&r.ak)&&n.preventDefault(),c);e=i.j;){if("function"==typeof e)a=e(a);else for(var o=e.length;o--;)a=e[o](a);i=i.p}i(a,t)}}return f.q=n,f}(r,a),n.addEventListener(e,i,qn&&{passive:tt(a)<2}),u[e]=i}else n.removeEventListener(e,i),u[e]=void 0}}(n,r,u):"a3"===e?function(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}(n,u):"a4"===e?function(n,r){for(var t in r){var e=r[t],u=e.f,e=e.o;void 0!==e?n.setAttributeNS(u,t,e):n.removeAttributeNS(u,t)}}(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){qn=!0}}))}catch(n){}function In(n,r){var t=[];return Bn(n,r,t,0),t}function Xn(n,r,t,e){e={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(e),e}function Bn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Xn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,c=i.length,f=c===o.length;f&&c--;)f=i[c]===o[c];if(f)return void(r.k=n.k);r.k=r.m();var b=[];return Bn(n.k,r.k,b,0),void(0<b.length&&Xn(t,1,e,b));case 4:for(var s=n.j,v=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof v?v=[v,h.j]:v.push(h.j),h=h.k;return l&&s.length!==v.length?void Xn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,v):s===v)||Xn(t,2,e,v),void Bn(d,h,t,e+1));case 0:return void(n.a!==r.a&&Xn(t,3,e,r.a));case 1:return void Yn(n,r,t,e,Vn);case 2:return void Yn(n,r,t,e,Qn);case 3:if(n.h!==r.h)return void Xn(t,0,e,r);b=Un(n.d,r.d);b&&Xn(t,4,e,b);b=r.i(n.g,r.g);return void(b&&Xn(t,5,e,b))}}}function Yn(n,r,t,e,u){var a;n.c===r.c&&n.f===r.f?((a=Un(n.d,r.d))&&Xn(t,4,e,a),u(n,r,t,e)):Xn(t,0,e,r)}function Un(n,r,t){var e,u,a,i,o;for(u in n)"a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u?u in r?(a=n[u])===(i=r[u])&&"value"!==u&&"checked"!==u||"a0"===t&&function(n,r){return n.$==r.$&&Z(n.a,r.a)}(a,i)||((e=e||{})[u]=i):(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null:(i=Un(n[u],r[u]||{},u))&&((e=e||{})[u]=i);for(o in r)o in n||((e=e||{})[o]=r[o]);return e}function Vn(n,r,t,e){var u=n.e,a=r.e,n=u.length,r=a.length;r<n?Xn(t,6,e,{v:r,i:n-r}):n<r&&Xn(t,7,e,{v:n,e:a});for(var i=n<r?n:r,o=0;o<i;o++){var c=u[o];Bn(c,a[o],t,++e),e+=c.b||0}}function Qn(n,r,t,e){for(var u=[],a={},i=[],o=n.e,c=r.e,f=o.length,b=c.length,s=0,v=0,l=e;s<f&&v<b;){var d,h=(d=o[s]).a,$=(S=c[v]).a,g=d.b,p=S.b,m=void 0,y=void 0;if(h!==$){var w,k,j,_,x=o[s+1],A=c[v+1];if(x&&(k=x.b,y=$===(w=x.a)),A&&(_=A.b,m=h===(j=A.a)),m&&y)Bn(g,_,u,++l),nr(a,u,h,p,v,i),l+=g.b||0,rr(a,u,h,k,++l),l+=k.b||0,s+=2,v+=2;else if(m)l++,nr(a,u,$,p,v,i),Bn(g,_,u,l),l+=g.b||0,s+=1,v+=2;else if(y)rr(a,u,h,g,++l),l+=g.b||0,Bn(k,p,u,++l),l+=k.b||0,s+=2,v+=1;else{if(!x||w!==j)break;rr(a,u,h,g,++l),nr(a,u,$,p,v,i),l+=g.b||0,Bn(k,_,u,++l),l+=k.b||0,s+=2,v+=2}}else Bn(g,p,u,++l),l+=g.b||0,s++,v++}for(;s<f;)rr(a,u,(d=o[s]).a,g=d.b,++l),l+=g.b||0,s++;for(;v<b;){var S,N=N||[];nr(a,u,(S=c[v]).a,S.b,void 0,N),v++}(0<u.length||0<i.length||N)&&Xn(t,8,e,{w:u,x:i,y:N})}var Zn="_elmW6BL";function nr(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var o=[];return Bn(i.z,e,o,i.r),i.r=u,void(i.s.s={w:o,A:i})}nr(n,r,t+Zn,e,u,a)}function rr(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Bn(e,a.z,i,u),void Xn(r,9,u,{w:i,A:a})}rr(n,r,t+Zn,e,u)}else{r=Xn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:r}}}function tr(n,r,t,e){!function n(r,t,e,u,a,i,o){var c=e[u];var f=c.r;for(;f===a;){var b,s=c.$;if(1===s?tr(r,t.k,c.s,o):8===s?(c.t=r,c.u=o,0<(b=c.s.w).length&&n(r,t,b,0,a,i,o)):9===s?(c.t=r,c.u=o,(s=c.s)&&(s.A.s=r,0<(b=s.w).length&&n(r,t,b,0,a,i,o))):(c.t=r,c.u=o),!(c=e[++u])||(f=c.r)>i)return u}var v=t.$;if(4===v){for(var l=t.k;4===l.$;)l=l.k;return n(r,l,e,u,a+1,i,r.elm_event_node_ref)}var d=t.e;var h=r.childNodes;for(var $=0;$<d.length;$++){var g=1===v?d[$]:d[$].b,p=++a+(g.b||0);if(a<=f&&f<=p&&(u=n(h[$],g,e,u,a,p,o),!(c=e[u])||(f=c.r)>i))return u;a=p}return u}(n,r,t,0,0,r.b,e)}function er(n,r,t,e){return 0===t.length?n:(tr(n,r,t,e),ur(n,t))}function ur(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,e=function(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,t=Pn(r,t);t.elm_event_node_ref||(t.elm_event_node_ref=n.elm_event_node_ref);e&&t!==n&&e.replaceChild(t,n);return t}(n,r.s,r.u);case 4:return Rn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return ur(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(Pn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=ur(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=zn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;t.appendChild(2===u.c?u.s:Pn(u.z,r.u))}return t}}(t.y,r);n=ur(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],o=i.A,o=2===o.c?o.s:Pn(o.z,r.u);n.insertBefore(o,n.childNodes[i.r])}e&&n.appendChild(e);return n}(n,r);case 5:return r.s(n);default:S(10)}}(u,e);u===n&&(n=e)}return n}function ar(n){if(3===n.nodeType)return{$:0,a:n.textContent};if(1!==n.nodeType)return{$:0,a:""};for(var r=d,t=n.attributes,e=t.length;e--;)var u=t[e],r={$:1,a:m(Fn,u.name,u.value),b:r};for(var a=n.tagName.toLowerCase(),i=d,o=n.childNodes,e=o.length;e--;)i={$:1,a:ar(o[e]),b:i};return y(Dn,a,r,i)}var ir=o(function(r,n,t,i){return $n(n,i,r.aY,r.a4,r.a2,function(t,n){var e=r.a5,u=i.node,a=ar(u);return cr(n,function(n){var r=e(n),n=In(a,r);u=er(u,a,n,t),a=r})})}),or="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function cr(t,e){e(t);var u=0;function a(){u=1===u?0:(or(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&or(a),u=2)}}var fr={addEventListener:function(){},removeEventListener:function(){}},br="undefined"!=typeof document?document:fr,sr="undefined"!=typeof window?window:fr;function vr(t,e){return{$:2,b:function(r){or(function(){var n=document.getElementById(t);r(n?{$:0,a:e(n)}:{$:1,a:et(t)})})},c:null}}function lr(){var n=br.body,r=br.documentElement;return{aP:Math.max(n.scrollWidth,n.offsetWidth,r.scrollWidth,r.offsetWidth,r.clientWidth),av:Math.max(n.scrollHeight,n.offsetHeight,r.scrollHeight,r.offsetHeight,r.clientHeight)}}var dr=e(function(t,e){return{$:2,b:function(n){var r=setInterval(function(){fn(e)},t);return function(){clearInterval(r)}},c:null}});function hr(n){return y(zr,e(function(n,r){return r+1}),0,n)}function $r(n){return y(it,bt(yr),ut(d),n)}var gr=1,pr=2,mr=0,yr=$,wr=s(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,a=y(n,t.b,t.c,y(wr,n,r,t.e));n=u,r=a,t=e}}),kr=function(n){return y(wr,s(function(n,r,t){return m(yr,{a:n,b:r},t)}),d,n)},jr=function(n){return{$:1,a:n}},_r=e(function(n,r){return{$:3,a:n,b:r}}),xr=e(function(n,r){return{$:0,a:n,b:r}}),Ar=e(function(n,r){return{$:1,a:n,b:r}}),Sr=function(n){return{$:0,a:n}},Nr=function(n){return{$:2,a:n}},Er=function(n){return{$:0,a:n}},Lr={$:1},Tr=rn,Or=D,Mr=e(function(n,r){return m(z,n,g(r))}),zr=s(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=m(n,t.a,r);n=u,r=a,t=e}}),Cr=function(n){return y(zr,yr,d,n)},Dr=o(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Jr=[],Hr=T,Wr=e(function(n,r){return M(r)/M(n)}),Fr=Hr(m(Wr,2,32)),qr=v(Dr,0,Fr,Jr,Jr),Gr=x,Kr=O,Pr=function(n){return n.length},Rr=e(function(n,r){return 0<l(n,r)?n:r}),Ir=A,Xr=e(function(n,r){for(;;){var t=m(Ir,32,n),e=t.b,t=m(yr,{$:0,a:t.a},r);if(!e.b)return Cr(t);n=e,r=t}}),Br=e(function(n,r){for(;;){var t=Hr(r/32);if(1===t)return m(Ir,32,n).a;n=m(Xr,n,d),r=t}}),Yr=e(function(n,r){if(r.c){var t=32*r.c,e=Kr(m(Wr,32,t-1)),n=n?Cr(r.f):r.f,n=m(Br,n,r.c);return v(Dr,Pr(r.e)+t,m(Rr,5,e*Fr),n,r.e)}return v(Dr,Pr(r.e),Fr,Jr,r.e)}),Ur=t(function(n,r,t,e,u){for(;;){if(r<0)return m(Yr,!1,{f:e,c:t/32|0,e:u});var a={$:1,a:y(Gr,32,r,n)};n=n,r=r-32,t=t,e=m(yr,a,e),u=u}}),Vr=e(function(n,r){if(0<n){var t=n%32;return w(Ur,r,n-t-32,n,d,y(Gr,t,n-t,r))}return qr}),Qr=function(n){return!n.$},Zr=P,nt=R,rt=function(n){return{$:0,a:n}},tt=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},R=function(n){return n},et=R,ut=un,C=ut(0),at=o(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,o=a.b;if(o.b){e=o.a,a=o.b;if(a.b){o=a.b;return m(n,u,m(n,i,m(n,e,m(n,a.a,500<t?y(zr,n,r,Cr(o)):v(at,n,r,t+1,o)))))}return m(n,u,m(n,i,m(n,e,r)))}return m(n,u,m(n,i,r))}return m(n,u,r)}return r}),it=s(function(n,r,t){return v(at,n,r,0,t)}),ot=e(function(t,n){return y(it,e(function(n,r){return m(yr,t(n),r)}),d,n)}),ct=an,ft=e(function(r,n){return m(ct,function(n){return ut(r(n))},n)}),bt=s(function(t,n,e){return m(ct,function(r){return m(ct,function(n){return ut(m(t,r,n))},e)},n)}),st=pn,vt=e(function(n,r){return bn(m(ct,st(n),r))});gn.Task={b:C,c:s(function(n,r,t){return m(ft,function(n){return 0},$r(m(ot,vt(n),r)))}),d:s(function(n,r,t){return ut(0)}),e:e(function(n,r){return m(ft,n,r)}),f:void 0};function lt(n){return{$:15,a:n}}function dt(n){return{$:0,a:n}}function ht(n){return{$:1,a:n}}var $t,gt=yn("Task"),pt=e(function(n,r){return gt(m(ft,n,r))}),C=ir,ir=function(n){return{ay:n}},mt=e(function(n,r){return{j:r,H:n}}),yt=wn,wt=q,q=e(function(n,r){return y(it,wt,r,n)}),F=F,kt=m(Zr,ir,m(q,_(["localStorage"]),F)),H=H,jt=y(nt,mt,m(q,_(["soundVolume"]),H),m(q,_(["screenRotation"]),H)),_t=I,xt=X,I=function(n){return{$:2,a:n}},At=s(function(n,r,t){return n(r(t))}),St=on,Nt=m(e(function(n,r){return gt(m(St,m(At,m(At,ut,n),jr),m(ct,m(At,m(At,ut,n),Sr),r)))}),I,function(n){return vr(n,function(n){var r=n.getBoundingClientRect(),t=sr.pageXOffset,n=sr.pageYOffset;return{aK:lr(),aO:{J:t,K:n,aP:br.documentElement.clientWidth,av:br.documentElement.clientHeight},ar:{J:t+r.left,K:n+r.top,aP:r.width,av:r.height}}})}("draggables-container")),Et=R,Lt=($t=Et,{$:2,b:function(n){n({$:0,a:$t(Date.now())})},c:null}),Tt=tn,Ot=Sn("setSoundVolume",Tt),Mt=wn,zt=e(function(n,r){return{$:0,a:n,b:r}}),Ct=e(function(n,r){return{aF:r,aM:n}}),Dt={$:-2},Jt=Dt,I=ut(m(Ct,Jt,Jt)),Ht=i,Wt=e(function(n,r){n:for(;;){if(-2===r.$)return Lr;var t=r.c,e=r.d,u=r.e;switch(m(Ht,n,r.b)){case 0:n=n,r=e;continue n;case 1:return Er(t);default:n=n,r=u;continue n}}}),Ft=t(function(n,r,t,e,u){return{$:-1,a:n,b:r,c:t,d:e,e:u}}),qt=t(function(n,r,t,e,u){if(-1!==u.$||u.a){if(-1!==e.$||e.a||-1!==e.d.$||e.d.a)return w(Ft,n,r,t,e,u);var a=e.d,i=e.e;return w(Ft,0,e.b,e.c,w(Ft,1,a.b,a.c,a.d,a.e),w(Ft,1,r,t,i,u))}var o=u.b,c=u.c,a=u.d,u=u.e;if(-1!==e.$||e.a)return w(Ft,n,o,c,w(Ft,0,r,t,e,a),u);var i;return w(Ft,0,r,t,w(Ft,1,e.b,e.c,e.d,i=e.e),w(Ft,1,o,c,a,u))}),Gt=s(function(n,r,t){if(-2===t.$)return w(Ft,0,n,r,Dt,Dt);var e=t.a,u=t.b,a=t.c,i=t.d,o=t.e;switch(m(Ht,n,u)){case 0:return w(qt,e,u,a,y(Gt,n,r,i),o);case 1:return w(Ft,e,u,r,i,o);default:return w(qt,e,u,a,i,y(Gt,n,r,o))}}),Kt=s(function(n,r,t){t=y(Gt,n,r,t);if(-1!==t.$||t.a)return t;return w(Ft,1,t.b,t.c,t.d,t.e)}),Pt=e(function(n,r){var t=n.a,e=n.b,n=m(Wt,t,r);return y(Kt,t,1===n.$?_([e]):m(yr,e,n.a),r)}),Rt=function(t){return{$:2,b:function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n({$:0,a:f})},c:null}},It=s(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.e,u=n,a=y(n,t.b,t.c,y(It,n,r,t.d));n=u,r=a,t=e}}),Xt=u(function(c,f,b,n,r,t){t=y(It,s(function(n,r,t){for(;;){var e=t.a,u=t.b;if(!e.b)return{a:e,b:y(b,n,r,u)};var a=e.a,i=a.a,o=a.b,a=e.b;if(0<=l(i,n))return 0<l(i,n)?{a:e,b:y(b,n,r,u)}:{a:a,b:v(f,i,o,r,u)};n=n,r=r,t={a:a,b:y(c,i,o,u)}}}),{a:kr(n),b:t},r),r=t.a,t=t.b;return y(zr,e(function(n,r){return y(c,n.a,n.b,r)}),t,r)}),Bt=mn,Yt=dr,Ut=bn,Vt=s(function(r,n,t){if(n.b){var e=n.a,u=n.b,n=Ut(m(Yt,e,m(Bt,r,e)));return m(ct,function(n){return y(Vt,r,u,y(Kt,e,n,t))},n)}return ut(t)});gn.Time={b:I,c:s(function(r,n,t){var e=t.aF,t=s(function(n,r,t){var e=t.c;return{a:t.a,b:t.b,c:m(ct,function(n){return e},Rt(r))}}),u=y(zr,Pt,Jt,n),e=c(Xt,s(function(n,r,t){var e=t.b,u=t.c;return{a:m(yr,n,t.a),b:e,c:u}}),o(function(n,r,t,e){var u=e.c;return{a:e.a,b:y(Kt,n,t,e.b),c:u}}),t,u,e,{a:d,b:Jt,c:ut(0)}),a=e.a,i=e.b;return m(ct,function(n){return ut(m(Ct,u,n))},m(ct,function(n){return y(Vt,r,a,i)},e.c))}),d:s(function(t,n,r){n=m(Wt,n,r.aM);if(1===n.$)return ut(r);var e=n.a;return m(ct,function(n){return ut(r)},m(ct,function(r){return $r(m(ot,function(n){return m(st,t,n(r))},e))},Lt))}),e:0,f:e(function(n,r){return m(zt,r.a,m(At,n,r.b))})};function Qt(n){return Ae(function(n){switch(n.$){case 0:return _([1]);case 1:return _([2,n.a,n.b,n.c,n.d,n.e]);case 2:return _([3,n.a,n.b,n.c]);default:return _([4,n.a,n.b,n.c])}}(n))}function Zt(n){var r=n.j;return m(Tr,0,(r=_([{a:"soundVolume",b:Tt(n.H)},{a:"screenRotation",b:Tt(r)}]),y(zr,e(function(n,r){return y(en,n.a,n.b,r)}),{},r)))}function ne(n){return n.b?Er(n.a):Lr}function re(n){return n}function te(f){return function(c){return function(o){return function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return{x:n,av:r,b:f,ad:i,ae:a,z:u,aN:e,aP:t,J:c,K:o}}}}}}}}}}}function ee(n){if(n.b&&n.b.b&&n.b.b.b&&n.b.b.b.b&&n.b.b.b.b.b&&n.b.b.b.b.b.b&&n.b.b.b.b.b.b.b&&n.b.b.b.b.b.b.b.b){var r=n.b,t=r.b,e=t.a,u=t.b,a=u.a,i=u.b,o=i.a,t=i.b,u=t.a,i=t.b,t=i.a,i=i.b.a;return Er(te(n.a)(r.a)(e)(a)(o)(u)(t)(64)(64)(i))}return Lr}function ue(n){return{$:12,a:n}}function ae(n){return{$:11,a:n}}function ie(n){return Or(Kr(180*n/3.141592653589793))+"deg"}function oe(n){return{$:3,a:n}}function ce(n){return{$:4,a:n}}function fe(n){return{$:5,a:n}}function be(n){var r=n.b;return m(hu,1664525*n.a+r>>>0,r)}function se(n){return((n=277803737*((n=n.a)^n>>>4+(n>>>28)))>>>22^n)>>>0}function ve(n){var r=function(n){var r=be(m(hu,0,1013904223));return be(m(hu,r.a+n>>>0,r.b))}(n),n=function(n){return v(gu,s(function(n,r,t){return{a:n,b:r,c:t}}),n,n,n)}(m($u,100,255));return m(pu,n,r).a}var le,de=yn("Time"),he=e(function(n,r){return de(m(zt,n,r))}),$e=J,ge=Ln("receiveWebSocket",function(n){return{$:3,b:n}}($e)),pe=K,me=G,ye=Ln("receiveWindowSize",m(pe,function(r){return m(pe,function(n){return rt({a:r,b:n})},m(me,1,$e))},m(me,0,$e))),we=t(function(n,r,t,e,u){return{$:1,a:n,b:r,c:t,d:e,e:u}}),ke=e(function(n,r){return{$:8,a:n,b:r}}),je=e(function(n,r){return{$:6,a:n,b:r}}),_e=s(function(n,r,t){return{$:3,a:n,b:r,c:t}}),xe=s(function(n,r,t){return{$:2,a:n,b:r,c:t}}),G=tn,Ae=Sn("sendWebSocket",e(function(n,r){return y(zr,function(t){return e(function(n,r){return r.push(t(n)),r})}(n),[],r)})(G)),Se=e(function(t,n){return y(it,e(function(n,r){return t(n)?m(yr,n,r):r}),d,n)}),Ne=e(function(n,r){return l(n,r)<0?n:r}),Ee=yt(d),Le=tn,Te=Sn("playSound",Le),Oe=E,Me=L,ze=s(function(n,r,t){var e=r.a,u=r.b,a=t.o-u,r=t.n-e,n=-n;return j(t,{n:r*Oe(n)-a*Me(n)+e,o:r*Me(n)+a*Oe(n)+u})}),Ce=Sn("sendLocalStorage",Le),De=e(function(n,r){return{a:n/2,b:r/2}}),Je=function(n){return 0!==n.length&&!/[\sxbo]/.test(n)&&(n=+n)==n?Er(n):Lr},He={$:0},We={$:0},Fe={$:7},qe={$:2},Ge={$:1},Ke=function(n){if(n.b&&n.b.b&&n.b.b.b&&n.b.b.b.b&&n.b.b.b.b.b&&n.b.b.b.b.b.b&&n.b.b.b.b.b.b.b&&n.b.b.b.b.b.b.b.b){var r=n.b,t=r.b,e=t.a,u=t.b,a=u.a,i=u.b,o=i.a,c=i.b,t=c.a,u=c.b,i=u.a,c=u.b,u=c.a,c=c.b;return m(yr,te(n.a)(r.a)(e)(a)(o)(t)(i)(64)(64)(u),Ke(c))}return d},Pe=p,Re=function(n){if(n.b){var r=n.b;return Or(n.a)+(" "+Re(r))}return""},Ie=e(function(n,r){var t=function(n){n:for(;;){if(!n.b)return We;if(n.b.b)break n;switch(n.a){case 0:return Ge;case 65535:return qe;default:break n}}var r=n.b;switch(n.a){case 1:return{$:3,a:r};case 2:return{$:4,a:r};case 3:return{$:5,a:r};case 4:return{$:6,a:r};default:return Fe}}(n),e=function(n){switch(n.$){case 0:return"EmptyPortMessage ";case 1:return"WebSocketOpened ";case 2:return"WebSocketClosed ";case 3:return"Initialization ";case 4:return"DraggableGrabbed "+Re(n.a);case 5:return"DraggablePutted "+Re(n.a);case 6:return"DraggableMoved "+Re(n.a);default:return"IncorrectAction "}}(t);switch(t.$){case 0:return{a:j(r,{r:e}),b:Ee};case 1:return{a:j(r,{r:e}),b:Qt(He)};case 2:return{a:j(r,{ah:!0,r:e}),b:Ee};case 3:if(t.a.b&&t.a.b.b&&t.a.b.b.b&&t.a.b.b.b.b){var u=t.a,a=u.a,i=u.b,o=i.b,c=o.b,f=c.a,i=(u=o.a)<<16|(o=i.a),c=m(ot,function(n){return j(n,{x:0})},Cr(m(Pe,function(n){return n.x},Ke(c.b))));return{a:j(r,{h:a,a:c,D:f,O:i,r:e}),b:Ee}}return{a:r,b:Ee};case 4:var b=ee(t.a);return b.$?{a:r,b:Ee}:{a:j(r,{a:m(yr,s=b.a,m(Se,function(n){return!k(n.b,s.b)},r.a)),r:e}),b:Te("press.mp3")};case 5:if(t.a.b&&t.a.b.b&&t.a.b.b.b){b=t.a,o=b.a,b=b.b,u=b.a,b=b.b,f=b.a,b=ee(b.b);if(b.$)return{a:r,b:Ee};i=u<<16|o;return{a:j(r,{a:m(yr,s=b.a,m(Se,function(n){return!k(n.b,s.b)},r.a)),D:f,O:i,r:e}),b:Te("release.mp3")}}return{a:r,b:Ee};case 6:var s,i=ee(t.a);return i.$?{a:r,b:Ee}:{a:j(r,{a:m(yr,s=i.a,m(Se,function(n){return!k(n.b,s.b)},r.a)),r:e}),b:Ee};default:return{a:j(r,{r:e}),b:Ee}}}),p=e(function(n,r){n:for(;;)switch(n.$){case 0:return m(Ie,n.a,r);case 1:var t=n.a,e=t.a,u=t.b,t=m(Ne,e,u);return{a:j(r,{S:u,T:e,u:t/r.ag,G:t/r.af}),b:Nt};case 2:t=n.a;if(1===t.$)return{a:r,b:Ee};t=t.a;return{a:j(r,{L:t.ar.J/r.u,M:t.ar.K/r.G}),b:Ee};case 3:var a=r.s;if(a.$)return{a:r,b:Ee};n=m(je,c=a.a,d=n.a),r=r;continue n;case 4:a=r.s;if(a.$)return{a:r,b:Ee};n=m(ke,c=a.a,d=n.a),r=r;continue n;case 5:var i=r.s;if(i.$)return{a:r,b:Ee};n=m(je,c=i.a,d=n.a),r=r;continue n;case 16:var o=r.s;if(o.$)return{a:r,b:Ee};n={$:9,a:c=o.a},r=r;continue n;case 8:var c=n.a,f=n.b;if(r.h&&k(c.z,r.h)&&!r.U){var b=(d=y(ze,r.j,m(De,r.T,r.S),f)).n/r.u-r.L|0,s=d.o/r.G-r.M|0,v=j(c,{x:(p=void 0,(p=ne(r.a)).$?0:p.a.x+1),J:b,K:s}),l=m(yr,v,m(Se,function(n){return!k(n.b,v.b)},r.a));return{a:j(r,{s:Er(v),a:l}),b:Qt(y(_e,v.b,b,s))}}return{a:r,b:Ee};case 7:c=n.a,f=n.b;if(!r.h||c.z)return{a:r,b:Ee};i=((d=y(ze,r.j,m(De,r.T,r.S),f)).n/r.u-r.L|0)-c.J+c.ad,o=(d.o/r.u-r.M|0)-c.K+c.ae,b=d.n/r.u-r.L|0,s=d.o/r.G-r.M|0,v=j(c,{x:(p=void 0,(p=ne(r.a)).$?0:p.a.x+1),ad:i,ae:o,z:r.h,J:b,K:s}),l=m(yr,v,m(Se,function(n){return!k(n.b,v.b)},r.a));return{a:j(r,{s:Er(v),a:l,U:!1,ac:Lr}),b:yt(_([Qt(w(we,v.b,b,s,i,o)),Te("press.mp3")]))};case 6:c=n.a,f=n.b;if(r.h&&k(c.z,r.h)){var d,b=(d=y(ze,r.j,m(De,r.T,r.S),f)).n/r.u-r.L|0,s=d.o/r.G-r.M|0,v=j(c,{z:0});return{a:j(r,{s:Lr,a:l=m(yr,v,m(Se,function(n){return!k(n.b,v.b)},r.a)),U:!0,D:r.h,O:re(r.X)/1e3|0}),b:yt(_([Qt(y(xe,v.b,b,s)),Te("release.mp3")]))}}return{a:r,b:Ee};case 9:c=n.a;if(r.h&&k(c.z,r.h)){s=c.K,b=c.J,v=j(c,{z:0});return{a:j(r,{s:Lr,a:l=m(yr,v,m(Se,function(n){return!k(n.b,v.b)},r.a)),U:!0,D:r.h,O:re(r.X)/1e3|0}),b:yt(_([Qt(y(xe,v.b,b,s)),Te("release.mp3")]))}}return{a:r,b:Ee};case 10:return{a:j(r,{aa:!r.aa}),b:Ee};case 11:return{a:j(r,{ab:!r.ab}),b:Ee};case 12:var h=(g=void 0,1===(g=Je(n.a)).$?0:g.a/100);return{a:g=j(r,{H:h}),b:yt(_([Ot(h),Te("release.mp3"),Ce(Zt(g))]))};case 13:var $=n.a,h=function(){switch($){case 0:return r.j+1.5707963267948966;case 1:return r.j-1.5707963267948966;default:return 0}}();return{a:g=j(r,{j:h}),b:Ce(Zt(g))};case 14:return{a:j(r,{ac:n.a}),b:Ee};default:return{a:j(r,{X:n.a}),b:Ee}}var g,p}),W=W,Xe=e(function(n,r){return m(Wn,n,Le(r))}),Be=Xe("className"),Ye=m(q,_(["target","value"]),F),F=e(function(n,r){return{n:n,o:r}}),Ue=y(nt,F,m(q,_(["clientX"]),H),m(q,_(["clientY"]),H)),Ve=Dn("div"),Qe=D,Ze=Dn("input"),nu=Xe("max"),ru=Xe("min"),tu=Jn,eu=e(function(n,r){return m(tu,n,{$:0,a:r})}),uu=e(function(n,r){return k(n,r)?"you":Or(r)}),au=N,iu=Hn,ou=Cn,cu=Xe("type"),fu=Xe("value"),bu={$:16},su=y(nt,F,m(q,_(["touches","0","clientX"]),H),m(q,_(["touches","0","clientY"]),H)),vu=Xe("id"),lu=o(function(n,r,t,e){return{a:Qe(t*n)+"px",b:Qe(e*r)+"px"}}),du=e(function(n,r){return{$:7,a:n,b:r}}),hu=e(function(n,r){return{$:0,a:n,b:r}}),$u=e(function(t,i){return function(n){var r=l(t,i)<0?{a:t,b:i}:{a:i,b:t},e=r.a,u=r.b-e+1;if(u-1&u){var a=(-u>>>0)%u>>>0;return function(n){for(;;){var r=se(n),t=be(n);if(0<=l(r,a))return{a:r%u+e,b:t};n=t}}(n)}return{a:((u-1&se(n))>>>0)+e,b:be(n)}}}),gu=o(function(u,n,r,t){var a=n,i=r,o=t;return function(n){var r=a(n),t=r.a,e=i(r.b),n=e.a,r=o(e.b),e=r.b;return{a:y(u,t,n,r.a),b:e}}}),pu=e(function(n,r){return n(r)}),mu=Dn("img"),yu=s(function(n,r,t){var e=t.j;if(n.b){var u=n.a,a=n.b,i=u.x+hr(a),o=1!==(b=t.ac).$&&k(b.a,u)?"2px dashed "+(c=ve(t.D),f=c.b,b=c.c,"rgb("+Or(c.a)+(","+Or(f)+(","+Or(b)))+")"):"initial",n=m(r,u.J-u.ad,u.K-u.ae),c=n.a,f=n.b,b=m(r,u.aP,u.av),n=b.a,b=b.b;return m(yr,m(Ve,_([Be("draggable"),m(iu,"transform","rotate("+ie(-e)+")"),m(iu,"z-index",Or(i)),m(iu,"left",c),m(iu,"top",f),m(iu,"width",n),m(iu,"height",b),m(iu,"border",o),m(eu,"mousedown",m(Zr,du(u),Ue)),m(eu,"touchstart",m(Zr,du(u),su))]),_([m(mu,_([(u=function(n){switch(n){case 1:return"figures/white_queen.png";case 2:return"figures/white_pawn.png";case 3:return"figures/white_knight.png";case 4:return"figures/white_rook.png";case 5:return"figures/white_bishop.png";case 6:return"figures/white_king.png";case 7:return"figures/black_queen.png";case 8:return"figures/black_pawn.png";case 9:return"figures/black_knight.png";case 10:return"figures/black_rook.png";case 11:return"figures/black_bishop.png";case 12:return"figures/black_king.png";case 13:return"figures/white_coin.png";case 14:return"figures/black_coin.png";default:return"figures/unknown.png"}}(u.aN),m(Xe,"src",/^\s*(javascript:|data:text\/html)/i.test(u=u)?"":u))]),d)])),y(yu,a,r,t))}return d}),p=C({aY:function(r){var w,t=function(){var n=m(xt,kt,r);if(n.$)return{ay:""};return n.a}(),n=function(){var n=m(_t,jt,t.ay);if(n.$)return m(mt,0,0);return n.a}(),e=n.j,n=n.H;return{a:(w="text",function(y){return function(m){return function(p){return function(g){return function($){return function(h){return function(d){return function(l){return function(v){return function(s){return function(b){return function(f){return function(c){return function(o){return function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return{s:$,h:y,af:b,ag:s,L:l,M:v,a:g,S:d,T:h,U:m,aa:o,ab:i,ah:p,ac:r,D:t,O:e,u:f,G:c,j:u,H:a,r:w,X:n}}}}}}}}}}}}}}}}}}}}}}(0)(!0)(!1)(d)(Lr)(0)(0)(0)(0)(1e3)(1e3)(0)(0)(!1)(!1)(n)(e)(0)(0)(Lr)(Et(0))),b:yt(_([Nt,Ot(n),m(pt,lt,Lt)]))}},a2:function(n){return Mt(_([ge(dt),ye(ht),m(he,1e3,lt)]))},a4:p,a5:function(n){var r=(re(n.X)/1e3|0)-n.O;return m(Ve,_([Be("main")]),_([m(Ve,_([Be("debug-message")]),_([ou(n.r)])),m(Ve,_([Be("connection-lost"),m(iu,"display",n.ah?"flex":"none")]),_([ou("Connection lost. Reload the page")])),function(n){var r=n.j,t=m(lu,n.u,n.G),e=n.a,u=m(t,n.ag,n.af),a=u.a,u=u.b;return m(Ve,_([Be("draggables-container"),vu("draggables-container"),m(iu,"width",a),m(iu,"height",u),m(iu,"transform","rotate("+ie(r)+")"),m(eu,"mouseleave",m(Zr,oe,Ue)),m(eu,"mousemove",m(Zr,ce,Ue)),m(eu,"mouseup",m(Zr,fe,Ue)),m(eu,"touchcancel",m(Zr,oe,su)),m(eu,"touchmove",m(Zr,ce,su)),m(eu,"touchend",rt(bu))]),y(yu,e,t,n))}(n),m(Ve,_([Be("last-turn-info"),m(eu,"mouseenter",rt({$:14,a:ne(n.a)}))]),_([ou("Last turn was done "+(m(Mr," ",Cr(m(ot,function(n){var r=n.a,n=n.b;return n?b(Or(n),r):""},_([{a:" seconds",b:m(au,60,r=r)},{a:" minutes",b:m(au,60,r/60|0)},{a:" hours",b:m(au,24,(r/60|0)/60|0)},{a:" days",b:m(au,30,((r/60|0)/60|0)/24|0)},{a:" monthishes",b:m(au,12,(((r/60|0)/60|0)/24|0)/30|0)},{a:" yearishes",b:m(au,10,((((r/60|0)/60|0)/24|0)/30|0)/12|0)},{a:" decadishes",b:m(au,10,(((((r/60|0)/60|0)/24|0)/30|0)/12|0)/10|0)},{a:" centurishes",b:m(au,10,((((((r/60|0)/60|0)/24|0)/30|0)/12|0)/10|0)/10|0)},{a:" mileniumishes",b:m(au,418,(((((((r/60|0)/60|0)/24|0)/30|0)/12|0)/10|0)/10|0)/10|0)},{a:" Изге җомга көне мөбәрәк булсын",b:((((((((r/60|0)/60|0)/24|0)/30|0)/12|0)/10|0)/10|0)/10|0)/418|0}]))))+" ago by "+m(uu,n.h,n.D)))])),m(Ve,_([Be("settings"),m(iu,"display",n.ab?"flex":"none")]),_([m(Ze,_([cu("range"),nu("100"),ru("0"),fu(Qe(100*n.H)),m(eu,"change",m(Zr,ue,Ye))]),d),m(Ve,d,_([ou("Master Sound Volume : "+Qe(n.H))])),m(Ve,_([Be("button-container")]),_([m(Ve,_([Be("button"),m(eu,"click",rt({$:13,a:1}))]),_([ou("↺")])),m(Ve,_([Be("button"),m(eu,"click",rt({$:13,a:0}))]),_([ou("↻")])),m(Ve,_([Be("button"),m(eu,"click",rt({$:13,a:2}))]),_([ou("=")]))])),m(Ve,d,_([ou("Screen rotation : "+ie(n.j))]))])),m(Ve,_([Be("settings-button button"),m(eu,"click",m(Zr,ae,Ue))]),_([ou("⚙")]))]))}});le={Main:{init:p(W)(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?S(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,le):n.Elm=le}(this);