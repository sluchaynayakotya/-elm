!function(e){"use strict";function n(e,n,r){return r.a=e,r.f=n,r}function o(r){return n(2,r,function(n){return function(e){return r(n,e)}})}function i(t){return n(3,t,function(r){return function(n){return function(e){return t(r,n,e)}}})}function r(a){return n(4,a,function(t){return function(r){return function(n){return function(e){return a(t,r,n,e)}}}})}function t(i){return n(5,i,function(a){return function(t){return function(r){return function(n){return function(e){return i(a,t,r,n,e)}}}}})}function s(e,n,r){return 2===e.a?e.f(n,r):e(n)(r)}function l(e,n,r,t){return 3===e.a?e.f(n,r,t):e(n)(r)(t)}function b(e,n,r,t,a){return 4===e.a?e.f(n,r,t,a):e(n)(r)(t)(a)}function a(e,n,r,t,a,i){return 5===e.a?e.f(n,r,t,a,i):e(n)(r)(t)(a)(i)}var d={$:0};function u(e,n){return{$:1,a:e,b:n}}var f=o(u);function v(e){for(var n=d,r=e.length;r--;)n={$:1,a:e[r],b:n};return n}var c=i(function(e,n,r){for(var t=Array(e),a=0;a<e;a++)t[a]=r(n+a);return t}),g=o(function(e,n){for(var r=Array(e),t=0;t<e&&n.b;t++)r[t]=n.a,n=n.b;return r.length=t,{a:r,b:n}});function h(e){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function p(e,n,r){if("object"!=typeof e)return e===n?0:e<n?-1:1;if(void 0===e.$)return(r=p(e.a,n.a))||(r=p(e.b,n.b))?r:p(e.c,n.c);for(;e.b&&n.b&&!(r=p(e.a,n.a));e=e.b,n=n.b);return r||(e.b?1:n.b?-1:0)}var A=0;function m(e,n){if("string"==typeof e)return e+n;if(!e.b)return n;var r={$:1,a:e.a,b:n};e=e.b;for(var t=r;e.b;e=e.b)t=t.b={$:1,a:e.a,b:n};return r}var T=Math.ceil,E=Math.floor,y=Math.log;var $=o(_);function _(e,n){switch(e.$){case 2:return e.b(n);case 5:return null===n?Sn(e.c):w("null",n);case 3:return S(n)?F(e.b,n,v):w("a LIST",n);case 4:return S(n)?F(e.b,n,L):w("an ARRAY",n);case 6:var r=e.d;if("object"!=typeof n||null===n||!(r in n))return w("an OBJECT with a field named `"+r+"`",n);var t=_(e.b,n[r]);return Kn(t)?t:yn(s(_n,r,t.a));case 7:r=e.e;if(!S(n))return w("an ARRAY",n);if(n.length<=r)return w("a LONGER array. Need index "+r+" but only see "+n.length+" entries",n);t=_(e.b,n[r]);return Kn(t)?t:yn(s(Fn,r,t.a));case 8:if("object"!=typeof n||null===n||S(n))return w("an OBJECT",n);var a,i=d;for(a in n)if(n.hasOwnProperty(a)){t=_(e.b,n[a]);if(!Kn(t))return yn(s(_n,a,t.a));i={$:1,a:{a:a,b:t.a},b:i}}return Sn(kn(i));case 9:for(var u=e.f,o=e.g,f=0;f<o.length;f++){t=_(o[f],n);if(!Kn(t))return t;u=u(t.a)}return Sn(u);case 10:t=_(e.b,n);return Kn(t)?_(e.h(t.a),n):t;case 11:for(var c=d,l=e.g;l.b;l=l.b){t=_(l.a,n);if(Kn(t))return t;c={$:1,a:t.a,b:c}}return yn(Ln(kn(c)));case 1:return yn(s($n,e.a,n));case 0:return Sn(e.a)}}function F(e,n,r){for(var t=n.length,a=Array(t),i=0;i<t;i++){var u=_(e,n[i]);if(!Kn(u))return yn(s(Fn,i,u.a));a[i]=u.a}return Sn(r(a))}function S(e){return Array.isArray(e)||"undefined"!=typeof FileList&&e instanceof FileList}function L(n){return s(Hn,n.length,function(e){return n[e]})}function w(e,n){return yn(s($n,"Expecting "+e,n))}function C(e,n){if(e===n)return!0;if(e.$!==n.$)return!1;switch(e.$){case 0:case 1:return e.a===n.a;case 2:return e.b===n.b;case 5:return e.c===n.c;case 3:case 4:case 8:return C(e.b,n.b);case 6:return e.d===n.d&&C(e.b,n.b);case 7:return e.e===n.e&&C(e.b,n.b);case 9:return e.f===n.f&&O(e.g,n.g);case 10:return e.h===n.h&&C(e.b,n.b);case 11:return O(e.g,n.g)}}function O(e,n){var r=e.length;if(r!==n.length)return!1;for(var t=0;t<r;t++)if(!C(e[t],n[t]))return!1;return!0}function R(e){return{$:0,a:e}}var k=o(function(e,n){return{$:3,b:e,d:n}});var j=0;function I(e){e={$:0,e:j++,f:e,g:null,h:[]};return z(e),e}function M(n){return{$:2,b:function(e){e({$:0,a:I(n)})},c:null}}function N(e,n){e.h.push(n),z(e)}var x=o(function(n,r){return{$:2,b:function(e){N(n,r),e({$:0,a:A})},c:null}});var B=!1,P=[];function z(e){if(P.push(e),!B){for(B=!0;e=P.shift();)!function(n){for(;n.f;){var e=n.f.$;if(0===e||1===e){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===e)return n.f.c=n.f.b(function(e){n.f=e,z(n)});if(5===e){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===e?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}(e);B=!1}}function D(e,n,r,t,a,i){n=s($,e,n?n.flags:void 0);Kn(n)||h(2);var u={},n=r(n.a),o=n.a,f=i(c,o),i=function(e,n){var r,t;for(t in U){var a=U[t];a.a&&((r=r||{})[t]=a.a(t,n)),e[t]=function(e,n){var t={g:n,h:void 0},a=e.c,i=e.d,u=e.e,o=e.f;function f(r){return s(k,f,{$:5,b:function(e){var n=e.a;return 0===e.$?l(i,t,n,r):u&&o?b(a,t,n.i,n.j,r):l(a,t,u?n.i:n.j,r)}})}return t.h=I(s(k,f,e.b))}(a,n)}return r}(u,c);function c(e,n){e=s(t,e,o);f(o=e.a,n),H(u,e.b,a(o))}return H(u,n.b,a(o)),i?{ports:i}:{}}var U={};var V=o(function(n,r){return{$:2,b:function(e){n.g(r),e({$:0,a:A})},c:null}}),W=o(function(e,n){return s(x,e.h,{$:0,a:n})});function Y(n){return function(e){return{$:1,k:n,l:e}}}var q=[],G=!1;function H(e,n,r){if(q.push({p:e,q:n,r:r}),!G){G=!0;for(var t;t=q.shift();)!function(e,n,r){var t,a={};for(t in K(!0,n,a,null),K(!1,r,a,null),e)N(e[t],{$:"fx",a:a[t]||{i:d,j:d}})}(t.p,t.q,t.r);G=!1}}function K(e,n,r,t){switch(n.$){case 1:var a=n.k,i=function(e,n,r,t){function a(e){for(var n=r;n;n=n.t)e=n.s(e);return e}return s(e?U[n].e:U[n].f,a,t)}(e,a,t,n.l);return void(r[a]=function(e,n,r){return r=r||{i:d,j:d},e?r.i={$:1,a:n,b:r.i}:r.j={$:1,a:n,b:r.j},r}(e,i,r[a]));case 2:for(var u=n.m;u.b;u=u.b)K(e,u.a,r,t);return;case 3:return void K(e,n.o,r,{s:n.n,t:t})}}var X;var J="undefined"!=typeof document?document:{};var Q=o(function(i,u){return o(function(e,n){for(var r=[],t=0;n.b;n=n.b){var a=n.a;t+=a.b||0,r.push(a)}return t+=r.length,{$:1,c:u,d:re(e),e:r,f:i,b:t}})})(void 0);o(function(i,u){return o(function(e,n){for(var r=[],t=0;n.b;n=n.b){var a=n.a;t+=a.b.b||0,r.push(a)}return t+=r.length,{$:2,c:u,d:re(e),e:r,f:i,b:t}})})(void 0);var Z=o(function(e,n){return{$:"a1",n:e,o:n}}),ee=o(function(e,n){return{$:"a3",n:e,o:n}});var ne;function re(e){for(var n={};e.b;e=e.b){var r=e.a,t=r.$,a=r.n,i=r.o;"a2"!==t?(r=n[t]||(n[t]={}),"a3"===t&&"class"===a?te(r,a,i):r[a]=i):"className"===a?te(n,a,i):n[a]=i}return n}function te(e,n,r){var t=e[n];e[n]=t?t+" "+r:r}function ae(e,n){var r=e.$;if(5===r)return ae(e.k||(e.k=e.m()),n);if(0===r)return J.createTextNode(e.a);if(4===r){for(var t=e.k,a=e.j;4===t.$;)"object"!=typeof a?a=[a,t.j]:a.push(t.j),t=t.k;var i={j:a,p:n};return(u=ae(t,i)).elm_event_node_ref=i,u}if(3===r)return ie(u=e.h(e.g),n,e.d),u;var u=e.f?J.createElementNS(e.f,e.c):J.createElement(e.c);X&&"a"==e.c&&u.addEventListener("click",X(u)),ie(u,n,e.d);for(var o=e.e,f=0;f<o.length;f++)u.appendChild(ae(1===r?o[f]:o[f].b,n));return u}function ie(e,n,r){for(var t in r){var a=r[t];"a1"===t?function(e,n){var r,t=e.style;for(r in n)t[r]=n[r]}(e,a):"a0"===t?function(e,n,r){var t,a=e.elmFs||(e.elmFs={});for(t in r){var i=r[t],u=a[t];if(i){if(u){if(u.q.$===i.$){u.q=i;continue}e.removeEventListener(t,u)}u=function(f,e){function c(e){var n=c.q,r=_(n.a,e);if(Kn(r)){for(var t,a=Jn(n),n=r.a,i=a?a<3?n.a:n.r:n,r=1==a?n.b:3==a&&n.ac,u=(r&&e.stopPropagation(),(2==a?n.b:3==a&&n.Z)&&e.preventDefault(),f);t=u.j;){if("function"==typeof t)i=t(i);else for(var o=t.length;o--;)i=t[o](i);u=u.p}u(i,r)}}return c.q=e,c}(n,i),e.addEventListener(t,u,ne&&{passive:Jn(i)<2}),a[t]=u}else e.removeEventListener(t,u),a[t]=void 0}}(e,n,a):"a3"===t?function(e,n){for(var r in n){var t=n[r];void 0!==t?e.setAttribute(r,t):e.removeAttribute(r)}}(e,a):"a4"===t?function(e,n){for(var r in n){var t=n[r],a=t.f,t=t.o;void 0!==t?e.setAttributeNS(a,r,t):e.removeAttributeNS(a,r)}}(e,a):("value"!==t&&"checked"!==t||e[t]!==a)&&(e[t]=a)}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ne=!0}}))}catch(e){}function ue(e,n){var r=[];return fe(e,n,r,0),r}function oe(e,n,r,t){t={$:n,r:r,s:t,t:void 0,u:void 0};return e.push(t),t}function fe(e,n,r,t){if(e!==n){var a=e.$,i=n.$;if(a!==i){if(1!==a||2!==i)return void oe(r,0,t,n);n=function(e){for(var n=e.e,r=n.length,t=Array(r),a=0;a<r;a++)t[a]=n[a].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}(n),i=1}switch(i){case 5:for(var u=e.l,o=n.l,f=u.length,c=f===o.length;c&&f--;)c=u[f]===o[f];if(c)return void(n.k=e.k);n.k=n.m();var l=[];return fe(e.k,n.k,l,0),void(0<l.length&&oe(r,1,t,l));case 4:for(var s=e.j,b=n.j,d=!1,v=e.k;4===v.$;)d=!0,"object"!=typeof s?s=[s,v.j]:s.push(v.j),v=v.k;for(var g=n.k;4===g.$;)d=!0,"object"!=typeof b?b=[b,g.j]:b.push(g.j),g=g.k;return d&&s.length!==b.length?void oe(r,0,t,n):((d?function(e,n){for(var r=0;r<e.length;r++)if(e[r]!==n[r])return!1;return!0}(s,b):s===b)||oe(r,2,t,b),void fe(v,g,r,t+1));case 0:return void(e.a!==n.a&&oe(r,3,t,n.a));case 1:return void ce(e,n,r,t,se);case 2:return void ce(e,n,r,t,be);case 3:if(e.h!==n.h)return void oe(r,0,t,n);l=le(e.d,n.d);l&&oe(r,4,t,l);l=n.i(e.g,n.g);return void(l&&oe(r,5,t,l))}}}function ce(e,n,r,t,a){var i;e.c===n.c&&e.f===n.f?((i=le(e.d,n.d))&&oe(r,4,t,i),a(e,n,r,t)):oe(r,0,t,n)}function le(e,n,r){var t,a,i,u,o;for(a in e)"a1"!==a&&"a0"!==a&&"a3"!==a&&"a4"!==a?a in n?(i=e[a])===(u=n[a])&&"value"!==a&&"checked"!==a||"a0"===r&&function(e,n){return e.$==n.$&&C(e.a,n.a)}(i,u)||((t=t||{})[a]=u):(t=t||{})[a]=r?"a1"===r?"":"a0"===r||"a3"===r?void 0:{f:e[a].f,o:void 0}:"string"==typeof e[a]?"":null:(u=le(e[a],n[a]||{},a))&&((t=t||{})[a]=u);for(o in n)o in e||((t=t||{})[o]=n[o]);return t}function se(e,n,r,t){var a=e.e,i=n.e,e=a.length,n=i.length;n<e?oe(r,6,t,{v:n,i:e-n}):e<n&&oe(r,7,t,{v:e,e:i});for(var u=e<n?e:n,o=0;o<u;o++){var f=a[o];fe(f,i[o],r,++t),t+=f.b||0}}function be(e,n,r,t){for(var a=[],i={},u=[],o=e.e,f=n.e,c=o.length,l=f.length,s=0,b=0,d=t;s<c&&b<l;){var v,g=(v=o[s]).a,h=(L=f[b]).a,p=v.b,A=L.b,m=void 0,T=void 0;if(g!==h){var E,y,$,_,F=o[s+1],S=f[b+1];if(F&&(y=F.b,T=h===(E=F.a)),S&&(_=S.b,m=g===($=S.a)),m&&T)fe(p,_,a,++d),ve(i,a,g,A,b,u),d+=p.b||0,ge(i,a,g,y,++d),d+=y.b||0,s+=2,b+=2;else if(m)d++,ve(i,a,h,A,b,u),fe(p,_,a,d),d+=p.b||0,s+=1,b+=2;else if(T)ge(i,a,g,p,++d),d+=p.b||0,fe(y,A,a,++d),d+=y.b||0,s+=2,b+=1;else{if(!F||E!==$)break;ge(i,a,g,p,++d),ve(i,a,h,A,b,u),d+=p.b||0,fe(y,_,a,++d),d+=y.b||0,s+=2,b+=2}}else fe(p,A,a,++d),d+=p.b||0,s++,b++}for(;s<c;)ge(i,a,(v=o[s]).a,p=v.b,++d),d+=p.b||0,s++;for(;b<l;){var L,w=w||[];ve(i,a,(L=f[b]).a,L.b,void 0,w),b++}(0<a.length||0<u.length||w)&&oe(r,8,t,{w:a,x:u,y:w})}var de="_elmW6BL";function ve(e,n,r,t,a,i){var u=e[r];if(!u)return i.push({r:a,A:u={c:0,z:t,r:a,s:void 0}}),void(e[r]=u);if(1===u.c){i.push({r:a,A:u}),u.c=2;var o=[];return fe(u.z,t,o,u.r),u.r=a,void(u.s.s={w:o,A:u})}ve(e,n,r+de,t,a,i)}function ge(e,n,r,t,a){var i=e[r];if(i){if(0===i.c){i.c=2;var u=[];return fe(t,i.z,u,a),void oe(n,9,a,{w:u,A:i})}ge(e,n,r+de,t,a)}else{n=oe(n,9,a,void 0);e[r]={c:1,z:t,r:a,s:n}}}function he(e,n,r,t){!function e(n,r,t,a,i,u,o){var f=t[a];var c=f.r;for(;c===i;){var l,s=f.$;if(1===s?he(n,r.k,f.s,o):8===s?(f.t=n,f.u=o,0<(l=f.s.w).length&&e(n,r,l,0,i,u,o)):9===s?(f.t=n,f.u=o,(s=f.s)&&(s.A.s=n,0<(l=s.w).length&&e(n,r,l,0,i,u,o))):(f.t=n,f.u=o),!(f=t[++a])||(c=f.r)>u)return a}var b=r.$;if(4===b){for(var d=r.k;4===d.$;)d=d.k;return e(n,d,t,a,i+1,u,n.elm_event_node_ref)}var v=r.e;var g=n.childNodes;for(var h=0;h<v.length;h++){var p=1===b?v[h]:v[h].b,A=++i+(p.b||0);if(i<=c&&c<=A&&(a=e(g[h],p,t,a,i,A,o),!(f=t[a])||(c=f.r)>u))return a;i=A}return a}(e,n,r,0,0,n.b,t)}function pe(e,n,r,t){return 0===r.length?e:(he(e,n,r,t),Ae(e,r))}function Ae(e,n){for(var r=0;r<n.length;r++){var t=n[r],a=t.t,t=function(e,n){switch(n.$){case 0:return function(e,n,r){var t=e.parentNode,r=ae(n,r);r.elm_event_node_ref||(r.elm_event_node_ref=e.elm_event_node_ref);t&&r!==e&&t.replaceChild(r,e);return r}(e,n.s,n.u);case 4:return ie(e,n.u,n.s),e;case 3:return e.replaceData(0,e.length,n.s),e;case 1:return Ae(e,n.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=n.s:e.elm_event_node_ref={j:n.s,p:n.u},e;case 6:for(var r=n.s,t=0;t<r.i;t++)e.removeChild(e.childNodes[r.v]);return e;case 7:for(var a=(r=n.s).e,i=e.childNodes[t=r.v];t<a.length;t++)e.insertBefore(ae(a[t],n.u),i);return e;case 9:if(!(r=n.s))return e.parentNode.removeChild(e),e;var u=r.A;return void 0!==u.r&&e.parentNode.removeChild(e),u.s=Ae(e,r.w),e;case 8:return function(e,n){var r=n.s,t=function(e,n){if(e){for(var r=J.createDocumentFragment(),t=0;t<e.length;t++){var a=e[t].A;r.appendChild(2===a.c?a.s:ae(a.z,n.u))}return r}}(r.y,n);e=Ae(e,r.w);for(var a=r.x,i=0;i<a.length;i++){var u=a[i],o=u.A,o=2===o.c?o.s:ae(o.z,n.u);e.insertBefore(o,e.childNodes[u.r])}t&&e.appendChild(t);return e}(e,n);case 5:return n.s(e);default:h(10)}}(a,t);a===e&&(e=t)}return e}function me(e){if(3===e.nodeType)return{$:0,a:e.textContent};if(1!==e.nodeType)return{$:0,a:""};for(var n=d,r=e.attributes,t=r.length;t--;)var a=r[t],n={$:1,a:s(ee,a.name,a.value),b:n};for(var i=e.tagName.toLowerCase(),u=d,o=e.childNodes,t=o.length;t--;)u={$:1,a:me(o[t]),b:u};return l(Q,i,n,u)}var Te=r(function(n,e,r,t){return D(e,t,n.a8,n.bk,n.bh,function(t,e){var a=n.aa&&n.aa(t),i=n.bl,u=J.title,o=J.body,f=me(o);return $e(e,function(e){X=a;var n=i(e),r=Q("body")(d)(n.a$),e=ue(f,r);o=pe(o,f,e,t),f=r,X=0,u!==n.bj&&(J.title=u=n.bj)})})}),Ee="undefined"!=typeof cancelAnimationFrame?cancelAnimationFrame:function(e){clearTimeout(e)},ye="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function $e(r,t){t(r);var a=0;function i(){a=1===a?0:(ye(i),t(r),1)}return function(e,n){r=e,n?(t(r),2===a&&(a=1)):(0===a&&ye(i),a=2)}}var _e={addEventListener:function(){},removeEventListener:function(){}};var Fe=new Float64Array(3),Se=new Float64Array(3),Le=new Float64Array(3),we=i(function(e,n,r){return new Float64Array([e,n,r])});function Ce(e,n,r){return(r=void 0===r?new Float64Array(3):r)[0]=e[0]-n[0],r[1]=e[1]-n[1],r[2]=e[2]-n[2],r}function Oe(e,n,r){return ke(Ce(e,n,r=void 0===r?new Float64Array(3):r),r)}function Re(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}function ke(e,n){void 0===n&&(n=new Float64Array(3));var r=1/Re(e);return n[0]=e[0]*r,n[1]=e[1]*r,n[2]=e[2]*r,n}function je(e,n,r){return(r=void 0===r?new Float64Array(3):r)[0]=e[1]*n[2]-e[2]*n[1],r[1]=e[2]*n[0]-e[0]*n[2],r[2]=e[0]*n[1]-e[1]*n[0],r}var Ie=new Float64Array(16),Me=new Float64Array(16);new Float64Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Ne(e,n,r,t,a,i){var u=new Float64Array(16);return u[0]=2*a/(n-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*a/(t-r),u[6]=0,u[7]=0,u[8]=(n+e)/(n-e),u[9]=(t+r)/(t-r),u[10]=-(i+a)/(i-a),u[11]=-1,u[12]=0,u[13]=0,u[14]=-2*i*a/(i-a),u[15]=0,u}var xe=r(function(e,n,r,t){var a=r*Math.tan(e*Math.PI/360),e=-a;return Ne(e*n,a*n,e,a,r,t)});function Be(e,n){var r=new Float64Array(16),t=e[0],a=e[1],i=e[2],u=e[3],o=e[4],f=e[5],c=e[6],l=e[7],s=e[8],b=e[9],d=e[10],v=e[11],g=e[12],h=e[13],p=e[14],A=e[15],m=n[0],T=n[1],E=n[2],y=n[3],$=n[4],_=n[5],F=n[6],S=n[7],L=n[8],w=n[9],C=n[10],O=n[11],R=n[12],k=n[13],e=n[14],n=n[15];return r[0]=t*m+o*T+s*E+g*y,r[1]=a*m+f*T+b*E+h*y,r[2]=i*m+c*T+d*E+p*y,r[3]=u*m+l*T+v*E+A*y,r[4]=t*$+o*_+s*F+g*S,r[5]=a*$+f*_+b*F+h*S,r[6]=i*$+c*_+d*F+p*S,r[7]=u*$+l*_+v*F+A*S,r[8]=t*L+o*w+s*C+g*O,r[9]=a*L+f*w+b*C+h*O,r[10]=i*L+c*w+d*C+p*O,r[11]=u*L+l*w+v*C+A*O,r[12]=t*R+o*k+s*e+g*n,r[13]=a*R+f*k+b*e+h*n,r[14]=i*R+c*k+d*e+p*n,r[15]=u*R+l*k+v*e+A*n,r}var Pe=o(Be),ze=o(function(e,n){var r=new Float64Array(16),t=(n=ke(n,Fe))[0],a=n[1],i=n[2],u=Math.cos(e),n=1-u,e=Math.sin(e);return r[0]=t*t*n+u,r[1]=a*t*n+i*e,r[2]=i*t*n-a*e,r[3]=0,r[4]=t*a*n-i*e,r[5]=a*a*n+u,r[6]=a*i*n+t*e,r[7]=0,r[8]=t*i*n+a*e,r[9]=a*i*n-t*e,r[10]=i*i*n+u,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r});var De=i(function(e,n,r){var t=Oe(e,n,Fe),a=ke(je(r,t,Se),Se),i=ke(je(t,a,Le),Le),n=Ie,r=Me;return n[0]=a[0],n[1]=i[0],n[2]=t[0],n[3]=0,n[4]=a[1],n[5]=i[1],n[6]=t[1],n[7]=0,n[8]=a[2],n[9]=i[2],n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,r[n[14]=0]=n[15]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=-e[0],r[13]=-e[1],r[14]=-e[2],r[15]=1,Be(n,r)});var Ue=0;function Ve(e,n){for(;n.b;n=n.b)e(n.a)}function We(e){for(var n=0;e.b;e=e.b)n++;return n}function Ye(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)}function qe(e){var n=e.colorMask;n.a&&n.b&&n.c&&n.d||(e.gl.colorMask(!0,!0,!0,!0),n.a=!0,n.b=!0,n.c=!0,n.d=!0)}var Ge="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},_e=t(function(e,n,r,t,a){return{$:0,a:e,b:n,c:r,d:t,e:a}}),He=o(function(e,n){var r=e.blend;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.BLEND),r.enabled=!0),r.a===n.a&&r.d===n.d||(e.gl.blendEquationSeparate(n.a,n.d),r.a=n.a,r.d=n.d),r.b===n.b&&r.c===n.c&&r.e===n.e&&r.f===n.f||(e.gl.blendFuncSeparate(n.b,n.c,n.e,n.f),r.b=n.b,r.c=n.c,r.e=n.e,r.f=n.f),r.g===n.g&&r.h===n.h&&r.i===n.i&&r.j===n.j||(e.gl.blendColor(n.g,n.h,n.i,n.j),r.g=n.g,r.h=n.h,r.i=n.i,r.j=n.j)}),Ke=o(function(e,n){var r=e.depthTest;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.DEPTH_TEST),r.enabled=!0),r.a!==n.a&&(e.gl.depthFunc(n.a),r.a=n.a),r.b!==n.b&&(e.gl.depthMask(n.b),r.b=n.b),r.c===n.c&&r.d===n.d||(e.gl.depthRange(n.c,n.d),r.c=n.c,r.d=n.d)}),Xe=o(function(e,n){var r=e.stencilTest;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.STENCIL_TEST),r.enabled=!0),r.d===n.d&&r.a===n.a&&r.b===n.b||(e.gl.stencilFuncSeparate(e.gl.FRONT,n.d,n.a,n.b),r.d=n.d),r.e===n.e&&r.f===n.f&&r.g===n.g||(e.gl.stencilOpSeparate(e.gl.FRONT,n.e,n.f,n.g),r.e=n.e,r.f=n.f,r.g=n.g),r.c!==n.c&&(e.gl.stencilMask(n.c),r.c=n.c),r.h===n.h&&r.a===n.a&&r.b===n.b||(e.gl.stencilFuncSeparate(e.gl.BACK,n.h,n.a,n.b),r.h=n.h,r.a=n.a,r.b=n.b),r.i===n.i&&r.j===n.j&&r.k===n.k||(e.gl.stencilOpSeparate(e.gl.BACK,n.i,n.j,n.k),r.i=n.i,r.j=n.j,r.k=n.k)}),Je=o(function(e,n){var r=e.scissor;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),r.enabled=!0),r.a===n.a&&r.b===n.b&&r.c===n.c&&r.d===n.d||(e.gl.scissor(n.a,n.b,n.c,n.d),r.a=n.a,r.b=n.b,r.c=n.c,r.d=n.d)}),Qe=o(function(e,n){var r=e.colorMask;r.toggle=e.toggle,r.enabled=!0,r.a===n.a&&r.b===n.b&&r.c===n.c&&r.d===n.d||(e.gl.colorMask(n.a,n.b,n.c,n.d),r.a=n.a,r.b=n.b,r.c=n.c,r.d=n.d)}),Ze=o(function(e,n){var r=e.cullFace;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.CULL_FACE),r.enabled=!0),r.a!==n.a&&(e.gl.cullFace(n.a),r.a=n.a)}),en=o(function(e,n){var r=e.polygonOffset;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),r.enabled=!0),r.a===n.a&&r.b===n.b||(e.gl.polygonOffset(n.a,n.b),r.a=n.a,r.b=n.b)}),nn=o(function(e,n){var r=e.sampleCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),r.enabled=!0),r.a===n.a&&r.b===n.b||(e.gl.sampleCoverage(n.a,n.b),r.a=n.a,r.b=n.b)}),rn=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],tn=[function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ye,qe,function(e){e.gl.disable(e.gl.CULL_FACE)},function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)}];function an(e,n,r){r=e.createShader(r);return e.shaderSource(r,"#extension GL_OES_standard_derivatives : enable\n"+n),e.compileShader(r),r}function un(e,n){switch(n){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function on(e,n,r,t){for(var o=r.a.ah,f=[],a=0;a<o;a++)f.push(String.fromCharCode(97+a));var i=un(e,n.type);if(void 0===i)throw Error("No info available for: "+n.type);var u=0,c=i.size*i.arraySize*o,l=new i.type(We(r.b)*c);Ve(function(e){!function(n,r,t,a,i){var u;if(1===o)for(u=0;u<r;u++)n[t++]=1===r?a[i]:a[i][u];else f.forEach(function(e){for(u=0;u<r;u++)n[t++]=1===r?a[e][i]:a[e][i][u]})}(l,i.size*i.arraySize,u,e,t[n.name]||n.name),u+=c},r.b);r=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,l,e.STATIC_DRAW),r}function fn(e,n){if(0<n.a.an){var r=e.createBuffer(),t=function(e,n){var r,t=new Uint32Array(We(e)*n),a=0;return Ve(function(e){if(1===n)t[a++]=e;else for(r=0;r<n;r++)t[a++]=e[String.fromCharCode(97+r)]},e),t}(n.c,n.a.an);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:r,buffers:{}}}return{numIndices:n.a.ah*We(n.b),indexBuffer:null,buffers:{}}}var cn=o(function(A,e){var m=A.f,T=m.gl;return T&&(T.viewport(0,0,T.drawingBufferWidth,T.drawingBufferHeight),m.depthTest.b||(T.depthMask(!0),m.depthTest.b=!0),m.stencilTest.c!==m.STENCIL_WRITEMASK&&(T.stencilMask(m.STENCIL_WRITEMASK),m.stencilTest.c=m.STENCIL_WRITEMASK),Ye(m),qe(m),T.clear(T.COLOR_BUFFER_BIT|T.DEPTH_BUFFER_BIT|T.STENCIL_BUFFER_BIT),Ve(function(e){if(e.d.b.b){var n,r,t,a,i;if(!(u=e.b.id&&e.c.id?m.programs[n=e.b.id+"#"+e.c.id]:u)){e.b.id?r=m.shaders[e.b.id]:e.b.id=Ue++,r||(r=an(T,e.b.src,T.VERTEX_SHADER),m.shaders[e.b.id]=r),e.c.id?t=m.shaders[e.c.id]:e.c.id=Ue++,t||(t=an(T,e.c.src,T.FRAGMENT_SHADER),m.shaders[e.c.id]=t);var u,o=function(e,n,r){var t=e.createProgram();if(e.attachShader(t,n),e.attachShader(t,r),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+"\nvs info-log: "+e.getShaderInfoLog(n)+"\nfs info-log: "+e.getShaderInfoLog(r);return t}(T,r,t);(u={glProgram:o,attributes:Object.assign({},e.b.attributes,e.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]}).uniformSetters=function(i,e,n,r){var t=n.glProgram,u=n.currentUniforms,o=0,f=e.f;for(var a={},c=i.getProgramParameter(t,i.ACTIVE_UNIFORMS),l=0;l<c;l++){var s=i.getActiveUniform(t,l);a[r[s.name]||s.name]=function(e,n){var r=n.name,t=i.getUniformLocation(e,r);switch(n.type){case i.INT:return function(e){u[r]!==e&&(i.uniform1i(t,e),u[r]=e)};case i.FLOAT:return function(e){u[r]!==e&&(i.uniform1f(t,e),u[r]=e)};case i.FLOAT_VEC2:return function(e){u[r]!==e&&(i.uniform2f(t,e[0],e[1]),u[r]=e)};case i.FLOAT_VEC3:return function(e){u[r]!==e&&(i.uniform3f(t,e[0],e[1],e[2]),u[r]=e)};case i.FLOAT_VEC4:return function(e){u[r]!==e&&(i.uniform4f(t,e[0],e[1],e[2],e[3]),u[r]=e)};case i.FLOAT_MAT4:return function(e){u[r]!==e&&(i.uniformMatrix4fv(t,!1,new Float32Array(e)),u[r]=e)};case i.SAMPLER_2D:var a=o++;return function(e){i.activeTexture(i.TEXTURE0+a);var n=f.textures.get(e);n||(n=e.a2(i),f.textures.set(e,n)),i.bindTexture(i.TEXTURE_2D,n),u[r]!==e&&(i.uniform1i(t,a),u[r]=e)};case i.BOOL:return function(e){u[r]!==e&&(i.uniform1i(t,e),u[r]=e)};default:return function(){}}}(t,s)}return a}(T,A,u,Object.assign({},e.b.uniforms,e.c.uniforms));for(var f=T.getProgramParameter(o,T.ACTIVE_ATTRIBUTES),c=0;c<f;c++){var l=T.getActiveAttrib(o,c),s=T.getAttribLocation(o,l.name);u.activeAttributes.push(l),u.activeAttributeLocations.push(s)}m.programs[n=e.b.id+"#"+e.c.id]=u}m.lastProgId!==n&&(T.useProgram(u.glProgram),m.lastProgId=n),a=u.uniformSetters,Object.keys(i=e.e).forEach(function(e){var n=a[e];n&&n(i[e])});var b=m.buffers.get(e.d);for(b||(b=fn(T,e.d),m.buffers.set(e.d,b)),c=0;c<u.activeAttributes.length;c++){s=u.activeAttributeLocations[c],void 0===b.buffers[(l=u.activeAttributes[c]).name]&&(b.buffers[l.name]=on(T,l,e.d,u.attributes)),T.bindBuffer(T.ARRAY_BUFFER,b.buffers[l.name]);var d=un(T,l.type);if(1===d.arraySize)T.enableVertexAttribArray(s),T.vertexAttribPointer(s,d.size,d.baseType,!1,0,0);else for(var v=4*d.size,g=v*d.arraySize,h=0;h<d.arraySize;h++)T.enableVertexAttribArray(s+h),T.vertexAttribPointer(s+h,d.size,d.baseType,!1,g,v*h)}for(m.toggle=!m.toggle,Ve(Rr(m),e.a),c=0;c<9;c++){var p=m[rn[c]];p.toggle!==m.toggle&&p.enabled&&(tn[c](m),p.enabled=!1,p.toggle=m.toggle)}b.indexBuffer?(T.bindBuffer(T.ELEMENT_ARRAY_BUFFER,b.indexBuffer),T.drawElements(e.d.a.aF,b.numIndices,T.UNSIGNED_INT,0)):T.drawArrays(e.d.a.aF,0,b.numIndices)}},A.g)),e});var ln=i(function(e,n,r){return function(e,n,r,t){return{$:3,d:re(e),g:n,h:r,i:t}}(n,{g:r,f:{},h:e},pn,An)}),sn=o(function(e,n){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=n.a}),bn=o(function(e,n){e.contextAttributes.depth=!0,e.sceneSettings.push(function(e){e.clearDepth(n.a)})}),dn=o(function(e,n){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(e){e.clearStencil(n.a)})}),vn=o(function(e,n){e.contextAttributes.antialias=!0}),gn=o(function(e,n){e.sceneSettings.push(function(e){e.clearColor(n.a,n.b,n.c,n.d)})}),hn=o(function(e,n){e.contextAttributes.preserveDrawingBuffer=!0});function pn(e){var n={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ve(function(e){return s(Or,n,e)},e.h);var r=J.createElement("canvas"),t=r.getContext&&(r.getContext("webgl",n.contextAttributes)||r.getContext("experimental-webgl",n.contextAttributes));return t&&"undefined"!=typeof WeakMap?(n.sceneSettings.forEach(function(e){e(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),Ge(function(){return s(cn,e,r)})):(r=J.createElement("div")).innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!',r}function An(e,n){return n.f=e.f,cn(n)}function mn(e){return e}function Tn(e){return l(nr,ir(En),Qn(d),e)}var En=f,yn=function(e){return{$:1,a:e}},$n=o(function(e,n){return{$:3,a:e,b:n}}),_n=o(function(e,n){return{$:0,a:e,b:n}}),Fn=o(function(e,n){return{$:1,a:e,b:n}}),Sn=function(e){return{$:0,a:e}},Ln=function(e){return{$:2,a:e}},wn=function(e){return{$:0,a:e}},Cn={$:1},On=function(e){return e+""},Rn=i(function(e,n,r){for(;;){if(!r.b)return n;var t=r.b,a=e,i=s(e,r.a,n);e=a,n=i,r=t}}),kn=function(e){return l(Rn,En,d,e)},jn=r(function(e,n,r,t){return{$:0,a:e,b:n,c:r,d:t}}),In=[],Mn=T,Nn=o(function(e,n){return y(n)/y(e)}),xn=Mn(s(Nn,2,32)),Bn=b(jn,0,xn,In,In),Pn=c,zn=E,Dn=function(e){return e.length},Un=o(function(e,n){return 0<p(e,n)?e:n}),Vn=g,Wn=o(function(e,n){for(;;){var r=s(Vn,32,e),t=r.b,r=s(En,{$:0,a:r.a},n);if(!t.b)return kn(r);e=t,n=r}}),Yn=o(function(e,n){for(;;){var r=Mn(n/32);if(1===r)return s(Vn,32,e).a;e=s(Wn,e,d),n=r}}),qn=o(function(e,n){if(n.a){var r=32*n.a,t=zn(s(Nn,32,r-1)),e=e?kn(n.d):n.d,e=s(Yn,e,n.a);return b(jn,Dn(n.c)+r,s(Un,5,t*xn),e,n.c)}return b(jn,Dn(n.c),xn,In,n.c)}),Gn=t(function(e,n,r,t,a){for(;;){if(n<0)return s(qn,!1,{d:t,a:r/32|0,c:a});var i={$:1,a:l(Pn,32,n,e)};e=e,n=n-32,r=r,t=s(En,i,t),a=a}}),Hn=o(function(e,n){if(0<e){var r=e%32;return a(Gn,n,e-r-32,e,d,l(Pn,r,e-r,n))}return Bn}),Kn=function(e){return!e.$},Xn=function(e){return{$:0,a:e}},Jn=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Qn=R,Zn=Qn(0),er=r(function(e,n,r,t){if(t.b){var a=t.a,i=t.b;if(i.b){var u=i.a,o=i.b;if(o.b){t=o.a,i=o.b;if(i.b){o=i.b;return s(e,a,s(e,u,s(e,t,s(e,i.a,500<r?l(Rn,e,n,kn(o)):b(er,e,n,r+1,o)))))}return s(e,a,s(e,u,s(e,t,n)))}return s(e,a,s(e,u,n))}return s(e,a,n)}return n}),nr=i(function(e,n,r){return b(er,e,n,0,r)}),rr=o(function(r,e){return l(nr,o(function(e,n){return s(En,r(e),n)}),d,e)}),tr=k,ar=o(function(n,e){return s(tr,function(e){return Qn(n(e))},e)}),ir=i(function(r,e,t){return s(tr,function(n){return s(tr,function(e){return Qn(s(r,n,e))},t)},e)}),ur=V,or=o(function(e,n){return M(s(tr,ur(e),n))});U.Task={b:Zn,c:i(function(e,n,r){return s(ar,function(e){return 0},Tn(s(rr,or(e),n)))}),d:i(function(e,n,r){return Qn(0)}),e:o(function(e,n){return s(ar,e,n)}),f:void 0};Y("Task");var V=Te,fr=function(e){return{$:2,m:e}}(d),cr=i(function(e,n,r){return{Y:r,aQ:n,aS:e}}),lr=Qn(l(cr,d,Cn,0)),sr=function(r){return{$:2,b:function(e){var n=r.f;2===n.$&&n.c&&n.c(),r.f=null,e({$:0,a:A})},c:null}},br={$:2,b:function(e){e({$:0,a:Date.now()})},c:null},dr={$:2,b:function(e){var n=ye(function(){e({$:0,a:Date.now()})});return function(){Ee(n)}},c:null},vr=W,gr=M,Zn=i(function(e,r,n){var t=n.aQ,a={a:t,b:r};if(1!==a.a.$)return a.b.b?Qn(l(cr,r,t,n.Y)):s(tr,function(e){return lr},sr(a.a.a));if(a.b.b)return s(tr,function(n){return s(tr,function(e){return Qn(l(cr,r,wn(n),e))},br)},gr(s(tr,vr(e),dr)));return lr}),hr=mn,W=i(function(n,r,e){function t(e){return s(ur,n,e.$?(0,e.a)(r-i):(0,e.a)(hr(r)))}var a=e.aS,i=e.Y;return s(tr,function(n){return s(tr,function(e){return Qn(l(cr,a,wn(n),r))},Tn(s(rr,t,a)))},gr(s(tr,vr(n),dr)))}),pr=i(function(e,n,r){return e(n(r))});U["Browser.AnimationManager"]={b:lr,c:Zn,d:W,e:0,f:o(function(e,n){return n.$?{$:1,a:s(pr,e,n.a)}:{$:0,a:s(pr,e,n.a)}})};function Ar(e){var n=i(function(e,n,r){return l(Cr,e,n,r)}),r=i(function(e,n,r){return{a:e,b:n,c:r}}),t=n,a=o(function(e,n){return s(wr,e,n)});switch(e){case 4:return v([l(r,s(a,l(n,1,1,1),l(t,1,1,1)),s(a,l(n,1,1,-1),l(t,0,1,1)),s(a,l(n,1,-1,-1),l(t,0,0,1))),l(r,s(a,l(n,1,-1,-1),l(t,0,1,0)),s(a,l(n,1,-1,1),l(t,1,1,0)),s(a,l(n,1,1,1),l(t,1,0,1)))]);case 5:return v([l(r,s(a,l(n,-1,1,1),l(t,1,1,1)),s(a,l(n,-1,1,-1),l(t,0,1,1)),s(a,l(n,-1,-1,-1),l(t,0,0,1))),l(r,s(a,l(n,-1,-1,-1),l(t,0,1,0)),s(a,l(n,-1,-1,1),l(t,1,1,0)),s(a,l(n,-1,1,1),l(t,1,0,1)))]);case 2:return v([l(r,s(a,l(n,1,1,1),l(t,1,1,1)),s(a,l(n,1,1,-1),l(t,0,1,1)),s(a,l(n,-1,1,-1),l(t,0,0,1))),l(r,s(a,l(n,-1,1,-1),l(t,0,1,0)),s(a,l(n,-1,1,1),l(t,1,1,0)),s(a,l(n,1,1,1),l(t,1,0,1)))]);case 3:return v([l(r,s(a,l(n,1,-1,1),l(t,1,1,1)),s(a,l(n,1,-1,-1),l(t,0,1,1)),s(a,l(n,-1,-1,-1),l(t,0,0,1))),l(r,s(a,l(n,-1,-1,-1),l(t,0,1,0)),s(a,l(n,-1,-1,1),l(t,1,1,0)),s(a,l(n,1,-1,1),l(t,1,0,1)))]);case 1:return v([l(r,s(a,l(n,-1,-1,-1),l(t,1,1,1)),s(a,l(n,-1,1,-1),l(t,0,1,1)),s(a,l(n,1,1,-1),l(t,0,0,1))),l(r,s(a,l(n,1,1,-1),l(t,0,1,0)),s(a,l(n,1,-1,-1),l(t,1,1,0)),s(a,l(n,-1,-1,-1),l(t,1,0,1)))]);default:return v([l(r,s(a,l(n,1,1,1),l(t,1,1,1)),s(a,l(n,1,-1,1),l(t,0,1,1)),s(a,l(n,-1,-1,1),l(t,0,0,1))),l(r,s(a,l(n,-1,-1,1),l(t,0,1,0)),s(a,l(n,-1,1,1),l(t,1,1,0)),s(a,l(n,1,1,1),l(t,1,0,1)))])}}function mr(e){var n,r=l(Cr,0,1,0),t=s(Br,s(Nr,3*(i=e)/1e3,l(Cr,0,1,0)),s(Nr,2*i/1e3,l(Cr,1,0,0))),a=l(Cr,0,0,-5),i=l(Cr,0,0,1),i=s(Br,b(Mr,45,1,.01,100),l(Ir,a,i,r));return s(Pr,s(Dr,400,400),v([b(kr,zr,jr,(r=v([Ar(4),Ar(2),Ar(0),Ar(5),Ar(3),Ar(1)]),xr((n=function(e){return e.b?m(e.a,n(e.b)):d})(r))),l(Lr,e,i,t))]))}var Tr,Er,yr=Y("Browser.AnimationManager"),$r=function(e){return yr({$:1,a:e})},W=o(function(e,n){return{a:n+e,b:fr}}),_r=Z,Fr=v([s(_r,"position","absolute"),s(_r,"left","0"),s(_r,"top","0"),s(_r,"width","100vw"),s(_r,"height","100vh"),s(_r,"background","#1c1c1a"),s(_r,"display","flex"),s(_r,"justify-content","center"),s(_r,"align-item","center")]),Sr=Q("div"),Lr=i(function(e,n,r){return{bd:n,bg:r,bi:e}}),wr=o(function(e,n){return{a1:n,be:e}}),Cr=we,we=b(r(function(e,n,r,t){return{$:1,a:e,b:n,c:r,d:t}}),513,(Tr={j:1,k:0,n:!0}).n,Tr.k,Tr.j),Or=o(function(e,n){switch(n.$){case 0:return s(sn,e,n);case 1:return s(bn,e,n);case 2:return s(dn,e,n);case 3:return s(vn,e,n);case 4:return s(gn,e,n);default:return s(hn,e,n)}}),Rr=o(function(e,n){switch(n.$){case 0:return s(He,e,n);case 1:return s(Ke,e,n);case 2:return s(Xe,e,n);case 3:return s(Je,e,n);case 4:return s(Qe,e,n);case 5:return s(Ze,e,n);case 6:return s(en,e,n);case 7:return s(nn,e,n);default:return function(e){var n=e.sampleAlphaToCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),n.enabled=!0)}(e)}}),kr=_e(v([we])),jr={src:"\n    precision mediump float;\n    uniform float time;\n    varying vec3 vcolor;\n\n    void main () {\n      gl_FragColor = vec4 ( 1.0 / mod ( ( time / 500.0 + 1.0 ), 10.0 ), vcolor.y, vcolor.z, 1.0 );\n    }\n  ",attributes:{},uniforms:{time:"bi"}},Ir=De,Mr=xe,Nr=ze,xr=o(function(e,n){return{$:2,a:e,b:n}})({ah:3,an:0,aF:4}),Br=Pe,xe=function(e){return{$:0,a:e}},ze={$:3},Pe=function(e){return{$:1,a:e}},Pr=i(function(e,n,r){return l(ln,e,n,r)})(v([xe(!0),ze,Pe(1)])),zr={src:"\n    attribute vec3 position;\n    attribute vec3 color;\n    uniform mat4 perspective;\n    uniform mat4 rotation;\n    varying vec3 vcolor;\n\n    void main () {\n      gl_Position = perspective * rotation * vec4 ( position, 1.0 );\n      vcolor = color;\n    }\n  ",attributes:{color:"a1",position:"be"},uniforms:{perspective:"bd",rotation:"bg"}},Dr=o(function(e,n){return v([s(ee,"width",On(e)),function(e){return s(ee,"height",On(e))}(n),s(_r,"image-rendering","pixelated")])}),Ur=o(function(e,n){return{a$:v([s(Sr,Fr,v([mr(n)]))]),bj:e}}),W=V({a8:function(e){return{a:0,b:fr}},bh:function(e){return $r(mn)},bk:W,bl:function(e){return s(Ur,"webgl",e)}});Er={Main:{init:W(Xn(0))(0)}},e.Elm?function e(n,r){for(var t in r)t in n?"init"==t?h(6):e(n[t],r[t]):n[t]=r[t]}(e.Elm,Er):e.Elm=Er}(this);