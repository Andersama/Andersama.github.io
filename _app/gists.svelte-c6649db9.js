import{S as t,i as s,s as e,t as l,g as r,j as a,d as n,A as c,p as i,e as o,l as h,a as u,b as d,f,c as m,h as g,k as p,o as v,r as b,u as w,q as _,v as x,w as y,x as j,y as A,m as E,z}from"./start-1072acc3.js";import{f as V}from"./transition-6274e8cc.js";function k(t,s,e){const l=t.slice();return l[2]=s[e],l[4]=e,l}function B(t){let s;return{c(){s=l("Some error occurred, sorry!")},l(t){s=r(t,"Some error occurred, sorry!")},m(t,e){a(t,s,e)},d(t){t&&n(s)}}}function S(t){let s,e,l,r,c,i,b,w,_,x;function y(t,s){return t[2].description?H:D}let E=y(t),z=E(t);return{c(){s=o("div"),e=h("svg"),l=h("path"),r=u(),c=o("a"),z.c(),b=u(),this.h()},l(t){s=d(t,"DIV",{class:!0});var a=f(s);e=d(a,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0},1);var i=f(e);l=d(i,"path",{"fill-rule":!0,d:!0},1),f(l).forEach(n),i.forEach(n),r=m(a),c=d(a,"A",{href:!0,alt:!0,class:!0});var o=f(c);z.l(o),o.forEach(n),b=m(a),a.forEach(n),this.h()},h(){g(l,"fill-rule","evenodd"),g(l,"d","M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 16 16"),g(e,"width","16"),g(e,"height","16"),g(c,"href",i=t[2].html_url),g(c,"alt",""),g(c,"class","svelte-1sl10o3"),g(s,"class","github_gist")},m(t,n){a(t,s,n),p(s,e),p(e,l),p(s,r),p(s,c),z.m(c,null),p(s,b),x=!0},p(t,s){E===(E=y(t))&&z?z.p(t,s):(z.d(1),z=E(t),z&&(z.c(),z.m(c,null))),(!x||1&s&&i!==(i=t[2].html_url))&&g(c,"href",i)},i(e){x||(j((()=>{_&&_.end(1),w||(w=A(s,V,{x:200,duration:200,delay:20*t[4]})),w.start()})),x=!0)},o(e){w&&w.invalidate(),_=v(s,V,{x:200,duration:200,delay:20*t[4]}),x=!1},d(t){t&&n(s),z.d(),t&&_&&_.end()}}}function D(t){let s,e=Object.keys(t[2].files)[0]+"";return{c(){s=l(e)},l(t){s=r(t,e)},m(t,e){a(t,s,e)},p(t,l){1&l&&e!==(e=Object.keys(t[2].files)[0]+"")&&E(s,e)},d(t){t&&n(s)}}}function H(t){let s,e=t[2].description+"";return{c(){s=l(e)},l(t){s=r(t,e)},m(t,e){a(t,s,e)},p(t,l){1&l&&e!==(e=t[2].description+"")&&E(s,e)},d(t){t&&n(s)}}}function I(t){let s,e,l=t[2].public&&S(t);return{c(){l&&l.c(),s=c()},l(t){l&&l.l(t),s=c()},m(t,r){l&&l.m(t,r),a(t,s,r),e=!0},p(t,e){t[2].public?l?(l.p(t,e),1&e&&i(l,1)):(l=S(t),l.c(),i(l,1),l.m(s.parentNode,s)):l&&(z(),b(l,1,1,(()=>{l=null})),w())},i(t){e||(i(l),e=!0)},o(t){b(l),e=!1},d(t){l&&l.d(t),t&&n(s)}}}function M(t){let s,e,l,r,c=t[1]&&B(),h=t[0],v=[];for(let s=0;s<h.length;s+=1)v[s]=I(k(t,h,s));const y=t=>b(v[t],1,1,(()=>{v[t]=null}));return{c(){s=u(),e=o("div"),c&&c.c(),l=u();for(let t=0;t<v.length;t+=1)v[t].c();this.h()},l(t){_('[data-svelte="svelte-19jrgzs"]',document.head).forEach(n),s=m(t),e=d(t,"DIV",{class:!0});var r=f(e);c&&c.l(r),l=m(r);for(let t=0;t<v.length;t+=1)v[t].l(r);r.forEach(n),this.h()},h(){document.title="Andersama | Gists",g(e,"class","container")},m(t,n){a(t,s,n),a(t,e,n),c&&c.m(e,null),p(e,l);for(let t=0;t<v.length;t+=1)v[t].m(e,null);r=!0},p(t,[s]){if(t[1]?c||(c=B(),c.c(),c.m(e,l)):c&&(c.d(1),c=null),1&s){let l;for(h=t[0],l=0;l<h.length;l+=1){const r=k(t,h,l);v[l]?(v[l].p(r,s),i(v[l],1)):(v[l]=I(r),v[l].c(),i(v[l],1),v[l].m(e,null))}for(z(),l=h.length;l<v.length;l+=1)y(l);w()}},i(t){if(!r){for(let t=0;t<h.length;t+=1)i(v[t]);r=!0}},o(t){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)b(v[t]);r=!1},d(t){t&&n(s),t&&n(e),c&&c.d(),x(v,t)}}}function O(t,s,e){let{github_user_gists:l=[]}=s,r=!1;return y((async function(){const t=await fetch("https://api.github.com/users/andersama/gists",{cache:"force-cache"});t.ok?(e(1,r=!1),e(0,l=await t.json())):(e(1,r=!0),e(0,l=[]))})),t.$$set=t=>{"github_user_gists"in t&&e(0,l=t.github_user_gists)},[l,r]}export default class extends t{constructor(t){super(),s(this,t,O,M,e,{github_user_gists:0})}}
//# sourceMappingURL=gists.svelte-c6649db9.js.map
