import{S as a,i as t,s as e,e as s,N as r,k as l,t as n,c as o,a as i,d as c,n as h,g as d,b as u,f,H as v,O as m,h as g,P as p,Q as _,R as L,T as b,F as x,x as E,u as w,w as y,U as V,V as j,r as z}from"../chunks/vendor-79c64796.js";import{username as A,anim_shift as B,anim_duration as D,out_delay as I,delay_mul as $,in_delay as k}from"./__layout.svelte-f227d3e9.js";function R(a,t,e){const s=a.slice();return s[1]=t[e],s[3]=e,s}function C(a){let t,e,x,E,w,y,V,z,A,R,C,F,H,Q,S=a[1].full_name+"";return{c(){t=s("div"),e=r("svg"),x=r("path"),E=l(),w=s("a"),y=n(S),A=l(),this.h()},l(a){t=o(a,"DIV",{class:!0});var s=i(t);e=o(s,"svg",{height:!0,viewBox:!0,version:!0,width:!0,"aria-hidden":!0},1);var r=i(e);x=o(r,"path",{"fill-rule":!0,d:!0},1),i(x).forEach(c),r.forEach(c),E=h(s),w=o(s,"A",{href:!0,alt:!0});var l=i(w);y=d(l,S),l.forEach(c),A=h(s),s.forEach(c),this.h()},h(){u(x,"fill-rule","evenodd"),u(x,"d","M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"),u(e,"height","16"),u(e,"viewBox","0 0 16 16"),u(e,"version","1.1"),u(e,"width","16"),u(e,"aria-hidden","true"),u(w,"href",V=a[1].html_url),u(w,"alt",z=a[1].full_name),u(t,"class","github_repo")},m(a,s){f(a,t,s),v(t,e),v(e,x),v(t,E),v(t,w),v(w,y),v(t,A),F=!0,H||(Q=[m(t,"introstart",M),m(t,"introend",N),m(t,"outrostart",O),m(t,"outroend",P)],H=!0)},p(t,e){a=t,(!F||1&e)&&S!==(S=a[1].full_name+"")&&g(y,S),(!F||1&e&&V!==(V=a[1].html_url))&&u(w,"href",V),(!F||1&e&&z!==(z=a[1].full_name))&&u(w,"alt",z)},i(e){F||(p((()=>{C&&C.end(1),R=j(t,L,{x:B,duration:D,delay:k+a[3]*$}),R.start()})),F=!0)},o(e){R&&R.invalidate(),C=_(t,L,{x:-B,duration:D,delay:I+a[3]*$}),F=!1},d(a){a&&c(t),a&&C&&C.end(),H=!1,b(Q)}}}function F(a){let t,e,r,n,d=a[0],m=[];for(let s=0;s<d.length;s+=1)m[s]=C(R(a,d,s));const g=a=>w(m[a],1,1,(()=>{m[a]=null}));return{c(){t=l(),e=s("div"),r=s("div");for(let a=0;a<m.length;a+=1)m[a].c();this.h()},l(a){x('[data-svelte="svelte-14b7zic"]',document.head).forEach(c),t=h(a),e=o(a,"DIV",{class:!0});var s=i(e);r=o(s,"DIV",{class:!0});var l=i(r);for(let t=0;t<m.length;t+=1)m[t].l(l);l.forEach(c),s.forEach(c),this.h()},h(){document.title="Andersama | Cool Repos",u(r,"class","container"),u(e,"class","container")},m(a,s){f(a,t,s),f(a,e,s),v(e,r);for(let t=0;t<m.length;t+=1)m[t].m(r,null);n=!0},p(a,[t]){if(1&t){let e;for(d=a[0],e=0;e<d.length;e+=1){const s=R(a,d,e);m[e]?(m[e].p(s,t),E(m[e],1)):(m[e]=C(s),m[e].c(),E(m[e],1),m[e].m(r,null))}for(z(),e=d.length;e<m.length;e+=1)g(e);y()}},i(a){if(!n){for(let a=0;a<d.length;a+=1)E(m[a]);n=!0}},o(a){m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)w(m[t]);n=!1},d(a){a&&c(t),a&&c(e),V(m,a)}}}async function H({fetch:a}){return{props:{starred:await a(`https://api.github.com/users/${A}/starred`,{cache:"force-cache"}).then((a=>a.json()))}}}function M(a){a.target.classList.add("absolute")}function N(a){a.target.classList.remove("absolute")}function O(a){}function P(a){a.target.classList.add("absolute")}function Q(a,t,e){let{starred:s}=t;return a.$$set=a=>{"starred"in a&&e(0,s=a.starred)},[s]}class S extends a{constructor(a){super(),t(this,a,Q,F,e,{starred:0})}}export{S as default,H as load};
