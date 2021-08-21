import{S as t,i as s,s as e,l as a,f as l,x as n,e as r,N as i,k as c,c as o,a as h,d as u,n as f,b as d,H as g,O as m,P as p,Q as v,R as b,T as w,u as x,w as E,F as V,U as j,V as y,t as A,g as _,h as k,r as z}from"../chunks/vendor-79c64796.js";import{username as L,anim_shift as B,anim_duration as D,out_delay as H,delay_mul as I,in_delay as O}from"./__layout.svelte-f227d3e9.js";function $(t,s,e){const a=t.slice();return a[1]=s[e],a[3]=e,a}function M(t){let s,e,a,n,x,E,V,j,A,_,k,z;function L(t,s){return t[1].description?C:N}let $=L(t),M=$(t);return{c(){s=r("div"),e=i("svg"),a=i("path"),n=c(),x=r("a"),M.c(),V=c(),this.h()},l(t){s=o(t,"DIV",{class:!0});var l=h(s);e=o(l,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0},1);var r=h(e);a=o(r,"path",{"fill-rule":!0,d:!0},1),h(a).forEach(u),r.forEach(u),n=f(l),x=o(l,"A",{href:!0,alt:!0});var i=h(x);M.l(i),i.forEach(u),V=f(l),l.forEach(u),this.h()},h(){d(a,"fill-rule","evenodd"),d(a,"d","M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"viewBox","0 0 16 16"),d(e,"width","16"),d(e,"height","16"),d(x,"href",E=t[1].html_url),d(x,"alt",""),d(s,"class","github_gist")},m(t,r){l(t,s,r),g(s,e),g(e,a),g(s,n),g(s,x),M.m(x,null),g(s,V),_=!0,k||(z=[m(s,"introstart",Q),m(s,"introend",R),m(s,"outrostart",S),m(s,"outroend",T)],k=!0)},p(s,e){$===($=L(t=s))&&M?M.p(t,e):(M.d(1),M=$(t),M&&(M.c(),M.m(x,null))),(!_||1&e&&E!==(E=t[1].html_url))&&d(x,"href",E)},i(e){_||(p((()=>{A&&A.end(1),j=y(s,b,{x:B,duration:D,delay:O+t[3]*I}),j.start()})),_=!0)},o(e){j&&j.invalidate(),A=v(s,b,{x:-B,duration:D,delay:H+t[3]*I}),_=!1},d(t){t&&u(s),M.d(),t&&A&&A.end(),k=!1,w(z)}}}function N(t){let s,e=Object.keys(t[1].files)[0]+"";return{c(){s=A(e)},l(t){s=_(t,e)},m(t,e){l(t,s,e)},p(t,a){1&a&&e!==(e=Object.keys(t[1].files)[0]+"")&&k(s,e)},d(t){t&&u(s)}}}function C(t){let s,e=t[1].description+"";return{c(){s=A(e)},l(t){s=_(t,e)},m(t,e){l(t,s,e)},p(t,a){1&a&&e!==(e=t[1].description+"")&&k(s,e)},d(t){t&&u(s)}}}function F(t){let s,e,r=t[1].public&&M(t);return{c(){r&&r.c(),s=a()},l(t){r&&r.l(t),s=a()},m(t,a){r&&r.m(t,a),l(t,s,a),e=!0},p(t,e){t[1].public?r?(r.p(t,e),1&e&&n(r,1)):(r=M(t),r.c(),n(r,1),r.m(s.parentNode,s)):r&&(z(),x(r,1,1,(()=>{r=null})),E())},i(t){e||(n(r),e=!0)},o(t){x(r),e=!1},d(t){r&&r.d(t),t&&u(s)}}}function G(t){let s,e,a,i,m=t[0],p=[];for(let l=0;l<m.length;l+=1)p[l]=F($(t,m,l));const v=t=>x(p[t],1,1,(()=>{p[t]=null}));return{c(){s=c(),e=r("div"),a=r("div");for(let t=0;t<p.length;t+=1)p[t].c();this.h()},l(t){V('[data-svelte="svelte-19jrgzs"]',document.head).forEach(u),s=f(t),e=o(t,"DIV",{class:!0});var l=h(e);a=o(l,"DIV",{class:!0});var n=h(a);for(let s=0;s<p.length;s+=1)p[s].l(n);n.forEach(u),l.forEach(u),this.h()},h(){document.title="Andersama | Gists",d(a,"class","container"),d(e,"class","container")},m(t,n){l(t,s,n),l(t,e,n),g(e,a);for(let s=0;s<p.length;s+=1)p[s].m(a,null);i=!0},p(t,[s]){if(1&s){let e;for(m=t[0],e=0;e<m.length;e+=1){const l=$(t,m,e);p[e]?(p[e].p(l,s),n(p[e],1)):(p[e]=F(l),p[e].c(),n(p[e],1),p[e].m(a,null))}for(z(),e=m.length;e<p.length;e+=1)v(e);E()}},i(t){if(!i){for(let t=0;t<m.length;t+=1)n(p[t]);i=!0}},o(t){p=p.filter(Boolean);for(let s=0;s<p.length;s+=1)x(p[s]);i=!1},d(t){t&&u(s),t&&u(e),j(p,t)}}}async function P({fetch:t}){return{props:{gists:await t(`https://api.github.com/users/${L}/gists`,{cache:"force-cache"}).then((t=>t.json()))}}}function Q(t){t.target.classList.add("absolute")}function R(t){t.target.classList.remove("absolute")}function S(t){}function T(t){t.target.classList.add("absolute")}function U(t,s,e){let{gists:a}=s;return t.$$set=t=>{"gists"in t&&e(0,a=t.gists)},[a]}class q extends t{constructor(t){super(),s(this,t,U,G,e,{gists:0})}}export{q as default,P as load};