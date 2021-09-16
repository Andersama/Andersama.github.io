import{S as t,i as a,s as e,e as s,O as o,k as n,t as l,c as r,a as i,d as c,n as h,g as f,b as u,f as d,I as p,P as g,h as v,Q as m,R as w,T as y,U as k,F as b,x,u as E,w as I,V as _,W as j,r as V}from"../chunks/vendor-774d9537.js";import{username as A,anim_shift as L,anim_duration as z,out_delay as B,delay_mul as D,in_delay as H}from"./__layout.svelte-fd97c867.js";function $(t,a,e){const s=t.slice();return s[1]=a[e],s[3]=e,s}function M(t){let a,e,b,x,E,I,_,V,A,$,M,O,S,T,Q=t[1].full_name+"";return{c(){a=s("div"),e=o("svg"),b=o("path"),x=n(),E=s("a"),I=l(Q),A=n(),this.h()},l(t){a=r(t,"DIV",{class:!0});var s=i(a);e=r(s,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0},1);var o=i(e);b=r(o,"path",{"fill-rule":!0,d:!0},1),i(b).forEach(c),o.forEach(c),x=h(s),E=r(s,"A",{href:!0,alt:!0});var n=i(E);I=f(n,Q),n.forEach(c),A=h(s),s.forEach(c),this.h()},h(){u(b,"fill-rule","evenodd"),u(b,"d","M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 16 16"),u(e,"width","16"),u(e,"height","16"),u(E,"href",_=t[1].html_url),u(E,"alt",V=t[1].full_name),u(a,"class","github_repo")},m(t,s){d(t,a,s),p(a,e),p(e,b),p(a,x),p(a,E),p(E,I),p(a,A),O=!0,S||(T=[g(a,"introstart",C),g(a,"introend",F),g(a,"outrostart",N),g(a,"outroend",P)],S=!0)},p(a,e){t=a,(!O||1&e)&&Q!==(Q=t[1].full_name+"")&&v(I,Q),(!O||1&e&&_!==(_=t[1].html_url))&&u(E,"href",_),(!O||1&e&&V!==(V=t[1].full_name))&&u(E,"alt",V)},i(e){O||(m((()=>{M&&M.end(1),$=j(a,y,{x:L,duration:z,delay:H+t[3]*D}),$.start()})),O=!0)},o(e){$&&$.invalidate(),M=w(a,y,{x:-L,duration:z,delay:B+t[3]*D}),O=!1},d(t){t&&c(a),t&&M&&M.end(),S=!1,k(T)}}}function O(t){let a,e,o,g,v,m,w,y=t[0],k=[];for(let s=0;s<y.length;s+=1)k[s]=M($(t,y,s));const j=t=>E(k[t],1,1,(()=>{k[t]=null}));return{c(){a=n(),e=s("div"),o=s("section"),g=l("Hello and welcome to my profile / project page, if you're curious to follow my shinanigans on\n\t\tgithub check the activity page. If you want to take a peak at some code snippets take a look at\n\t\tgists, and for anything I've written visit the blog."),v=n(),m=s("div");for(let t=0;t<k.length;t+=1)k[t].c();this.h()},l(t){b('[data-svelte="svelte-1anpopb"]',document.head).forEach(c),a=h(t),e=r(t,"DIV",{class:!0});var s=i(e);o=r(s,"SECTION",{class:!0});var n=i(o);g=f(n,"Hello and welcome to my profile / project page, if you're curious to follow my shinanigans on\n\t\tgithub check the activity page. If you want to take a peak at some code snippets take a look at\n\t\tgists, and for anything I've written visit the blog."),n.forEach(c),v=h(s),m=r(s,"DIV",{class:!0});var l=i(m);for(let a=0;a<k.length;a+=1)k[a].l(l);l.forEach(c),s.forEach(c),this.h()},h(){document.title="Home",u(o,"class","svelte-mjk9ig"),u(m,"class","container"),u(e,"class","container")},m(t,s){d(t,a,s),d(t,e,s),p(e,o),p(o,g),p(e,v),p(e,m);for(let a=0;a<k.length;a+=1)k[a].m(m,null);w=!0},p(t,[a]){if(1&a){let e;for(y=t[0],e=0;e<y.length;e+=1){const s=$(t,y,e);k[e]?(k[e].p(s,a),x(k[e],1)):(k[e]=M(s),k[e].c(),x(k[e],1),k[e].m(m,null))}for(V(),e=y.length;e<k.length;e+=1)j(e);I()}},i(t){if(!w){for(let t=0;t<y.length;t+=1)x(k[t]);w=!0}},o(t){k=k.filter(Boolean);for(let a=0;a<k.length;a+=1)E(k[a]);w=!1},d(t){t&&c(a),t&&c(e),_(k,t)}}}const S=!0;async function T({fetch:t}){return{props:{repos:await t(`https://api.github.com/users/${A}/repos`,{cache:"force-cache"}).then((t=>{let a=t.json();return Array.isArray(a)&&(a=a.filter((t=>!t.fork&&!t.private))),a}))}}}function C(t){t.target.classList.add("absolute")}function F(t){t.target.classList.remove("absolute")}function N(t){}function P(t){t.target.classList.add("absolute")}function Q(t,a,e){let{repos:s}=a;return t.$$set=t=>{"repos"in t&&e(0,s=t.repos)},[s]}class R extends t{constructor(t){super(),a(this,t,Q,O,e,{repos:0})}}export{R as default,T as load,S as prerender};
