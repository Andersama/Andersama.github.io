import{S as e,i as a,s as t,t as l,g as r,j as s,d as o,e as n,l as h,a as c,b as i,f as u,c as f,h as d,k as m,m as g,q as _,n as p,o as v,p as b}from"./start-4f9be138.js";function w(e,a,t){const l=e.slice();return l[2]=a[t],l}function E(e){let a;return{c(){a=l("Some error occurred, sorry!")},l(e){a=r(e,"Some error occurred, sorry!")},m(e,t){s(e,a,t)},d(e){e&&o(a)}}}function L(e){let a,t,_,p,v,b,w,E,L,x=e[2].full_name+"";return{c(){a=n("div"),t=h("svg"),_=h("path"),p=c(),v=n("a"),b=l(x),L=c(),this.h()},l(e){a=i(e,"DIV",{class:!0});var l=u(a);t=i(l,"svg",{height:!0,viewBox:!0,version:!0,width:!0,"aria-hidden":!0},1);var s=u(t);_=i(s,"path",{"fill-rule":!0,d:!0},1),u(_).forEach(o),s.forEach(o),p=f(l),v=i(l,"A",{href:!0,alt:!0});var n=u(v);b=r(n,x),n.forEach(o),L=f(l),l.forEach(o),this.h()},h(){d(_,"fill-rule","evenodd"),d(_,"d","M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"),d(t,"height","16"),d(t,"viewBox","0 0 16 16"),d(t,"version","1.1"),d(t,"width","16"),d(t,"aria-hidden","true"),d(v,"href",w=e[2].html_url),d(v,"alt",E=e[2].full_name),d(a,"class","github_repo")},m(e,l){s(e,a,l),m(a,t),m(t,_),m(a,p),m(a,v),m(v,b),m(a,L)},p(e,a){1&a&&x!==(x=e[2].full_name+"")&&g(b,x),1&a&&w!==(w=e[2].html_url)&&d(v,"href",w),1&a&&E!==(E=e[2].full_name)&&d(v,"alt",E)},d(e){e&&o(a)}}}function x(e){let a,t,l,r=e[1]&&E(),h=e[0],g=[];for(let a=0;a<h.length;a+=1)g[a]=L(w(e,h,a));return{c(){a=c(),t=n("div"),r&&r.c(),l=c();for(let e=0;e<g.length;e+=1)g[e].c();this.h()},l(e){_('[data-svelte="svelte-14b7zic"]',document.head).forEach(o),a=f(e),t=i(e,"DIV",{class:!0});var s=u(t);r&&r.l(s),l=f(s);for(let e=0;e<g.length;e+=1)g[e].l(s);s.forEach(o),this.h()},h(){document.title="Andersama | Cool Repos",d(t,"class","container")},m(e,o){s(e,a,o),s(e,t,o),r&&r.m(t,null),m(t,l);for(let e=0;e<g.length;e+=1)g[e].m(t,null)},p(e,[a]){if(e[1]?r||(r=E(),r.c(),r.m(t,l)):r&&(r.d(1),r=null),1&a){let l;for(h=e[0],l=0;l<h.length;l+=1){const r=w(e,h,l);g[l]?g[l].p(r,a):(g[l]=L(r),g[l].c(),g[l].m(t,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=h.length}},i:p,o:p,d(e){e&&o(a),e&&o(t),r&&r.d(),v(g,e)}}}function j(e,a,t){let{github_user_cool_repos:l=[]}=a,r=!1;return b((async function(){const e=await fetch("https://api.github.com/users/andersama/starred",{cache:"force-cache"});e.ok?(t(1,r=!1),t(0,l=await e.json())):(t(1,r=!0),t(0,l=[]))})),e.$$set=e=>{"github_user_cool_repos"in e&&t(0,l=e.github_user_cool_repos)},[l,r]}export default class extends e{constructor(e){super(),a(this,e,j,x,t,{github_user_cool_repos:0})}}
//# sourceMappingURL=cool-repos.svelte-b34238e7.js.map
