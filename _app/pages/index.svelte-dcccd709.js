import{S as t,i as a,s as e,l as s,f as o,x as l,e as n,k as r,O as i,t as h,c,a as u,n as f,d,g,b as m,I as p,P as v,h as w,Q as y,R as b,T as k,U as _,u as x,w as E,F as A,V as I,W as j,r as B}from"../chunks/vendor-774d9537.js";import{username as z,anim_shift as V,anim_duration as L,out_delay as O,delay_mul as R,in_delay as D}from"./__layout.svelte-fd97c867.js";function H(t,a,e){const s=t.slice();return s[1]=a[e],s[3]=e,s}function M(t){let a,e,s,l,x,E,A,I,B,z,H,M,q,N,S,Q=t[1].full_name+"",U=t[1].fork&&$();return{c(){a=n("div"),U&&U.c(),e=r(),s=i("svg"),l=i("path"),x=r(),E=n("a"),A=h(Q),z=r(),this.h()},l(t){a=c(t,"DIV",{class:!0});var o=u(a);U&&U.l(o),e=f(o),s=c(o,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0},1);var n=u(s);l=c(n,"path",{"fill-rule":!0,d:!0},1),u(l).forEach(d),n.forEach(d),x=f(o),E=c(o,"A",{href:!0,alt:!0});var r=u(E);A=g(r,Q),r.forEach(d),z=f(o),o.forEach(d),this.h()},h(){m(l,"fill-rule","evenodd"),m(l,"d","M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"),m(s,"xmlns","http://www.w3.org/2000/svg"),m(s,"viewBox","0 0 16 16"),m(s,"width","16"),m(s,"height","16"),m(E,"href",I=t[1].html_url),m(E,"alt",B=t[1].full_name),m(a,"class","github_repo")},m(t,n){o(t,a,n),U&&U.m(a,null),p(a,e),p(a,s),p(s,l),p(a,x),p(a,E),p(E,A),p(a,z),q=!0,N||(S=[v(a,"introstart",T),v(a,"introend",C),v(a,"outrostart",F),v(a,"outroend",P)],N=!0)},p(s,o){(t=s)[1].fork?U||(U=$(),U.c(),U.m(a,e)):U&&(U.d(1),U=null),(!q||1&o)&&Q!==(Q=t[1].full_name+"")&&w(A,Q),(!q||1&o&&I!==(I=t[1].html_url))&&m(E,"href",I),(!q||1&o&&B!==(B=t[1].full_name))&&m(E,"alt",B)},i(e){q||(y((()=>{M&&M.end(1),H=j(a,k,{x:V,duration:L,delay:D+t[3]*R}),H.start()})),q=!0)},o(e){H&&H.invalidate(),M=b(a,k,{x:-V,duration:L,delay:O+t[3]*R}),q=!1},d(t){t&&d(a),U&&U.d(),t&&M&&M.end(),N=!1,_(S)}}}function $(t){let a,e;return{c(){a=i("svg"),e=i("path"),this.h()},l(t){a=c(t,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0},1);var s=u(a);e=c(s,"path",{"fill-rule":!0,d:!0},1),u(e).forEach(d),s.forEach(d),this.h()},h(){m(e,"fill-rule","evenodd"),m(e,"d","M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"),m(a,"xmlns","http://www.w3.org/2000/svg"),m(a,"viewBox","0 0 16 16"),m(a,"width","16"),m(a,"height","16")},m(t,s){o(t,a,s),p(a,e)},d(t){t&&d(a)}}}function q(t){let a,e,n=!t[1].private&&M(t);return{c(){n&&n.c(),a=s()},l(t){n&&n.l(t),a=s()},m(t,s){n&&n.m(t,s),o(t,a,s),e=!0},p(t,e){t[1].private?n&&(B(),x(n,1,1,(()=>{n=null})),E()):n?(n.p(t,e),1&e&&l(n,1)):(n=M(t),n.c(),l(n,1),n.m(a.parentNode,a))},i(t){e||(l(n),e=!0)},o(t){x(n),e=!1},d(t){n&&n.d(t),t&&d(a)}}}function N(t){let a,e,s,i,v,w,y,b,k,_,j,z=t[0],V=[];for(let o=0;o<z.length;o+=1)V[o]=q(H(t,z,o));const L=t=>x(V[t],1,1,(()=>{V[t]=null}));return{c(){a=r(),e=n("div"),s=n("section"),i=h("Hello and welcome to my profile / project page, if you're curious to follow my shinanigans on\n\t\tgithub check the activity page. If you want to take a peak at some code snippets take a look at\n\t\tgists, and for anything I've written visit the blog."),v=n("br"),w=n("br"),y=h("\n\n\t\tOtherwise here's a quick list of projects you'll find on my github."),b=n("br"),k=r(),_=n("div");for(let t=0;t<V.length;t+=1)V[t].c();this.h()},l(t){A('[data-svelte="svelte-1anpopb"]',document.head).forEach(d),a=f(t),e=c(t,"DIV",{class:!0});var o=u(e);s=c(o,"SECTION",{class:!0});var l=u(s);i=g(l,"Hello and welcome to my profile / project page, if you're curious to follow my shinanigans on\n\t\tgithub check the activity page. If you want to take a peak at some code snippets take a look at\n\t\tgists, and for anything I've written visit the blog."),v=c(l,"BR",{}),w=c(l,"BR",{}),y=g(l,"\n\n\t\tOtherwise here's a quick list of projects you'll find on my github."),b=c(l,"BR",{}),l.forEach(d),k=f(o),_=c(o,"DIV",{class:!0});var n=u(_);for(let a=0;a<V.length;a+=1)V[a].l(n);n.forEach(d),o.forEach(d),this.h()},h(){document.title="Home",m(s,"class","svelte-mjk9ig"),m(_,"class","container"),m(e,"class","container")},m(t,l){o(t,a,l),o(t,e,l),p(e,s),p(s,i),p(s,v),p(s,w),p(s,y),p(s,b),p(e,k),p(e,_);for(let a=0;a<V.length;a+=1)V[a].m(_,null);j=!0},p(t,[a]){if(1&a){let e;for(z=t[0],e=0;e<z.length;e+=1){const s=H(t,z,e);V[e]?(V[e].p(s,a),l(V[e],1)):(V[e]=q(s),V[e].c(),l(V[e],1),V[e].m(_,null))}for(B(),e=z.length;e<V.length;e+=1)L(e);E()}},i(t){if(!j){for(let t=0;t<z.length;t+=1)l(V[t]);j=!0}},o(t){V=V.filter(Boolean);for(let a=0;a<V.length;a+=1)x(V[a]);j=!1},d(t){t&&d(a),t&&d(e),I(V,t)}}}async function S({fetch:t}){return{props:{git_repos:await t(`https://api.github.com/users/${z}/repos`,{cache:"force-cache"}).then((t=>{let a=t.json();return Array.isArray(a)&&(a=a.filter((t=>!t.private&&"Andersama"!=t.name&&"Andersama.github.io"!=t.name))),a}))}}}function T(t){t.target.classList.add("absolute")}function C(t){t.target.classList.remove("absolute")}function F(t){}function P(t){t.target.classList.add("absolute")}function Q(t,a,e){let{git_repos:s}=a;return t.$$set=t=>{"git_repos"in t&&e(0,s=t.git_repos)},[s]}class U extends t{constructor(t){super(),a(this,t,Q,N,e,{git_repos:0})}}export{U as default,S as load};
