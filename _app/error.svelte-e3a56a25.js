import{S as r,i as s,s as a,e as t,t as e,c as n,a as c,g as o,d as u,f,I as l,h as m,k as p,l as d,n as i,N as h}from"./chunks/vendor-774d9537.js";function E(r){let s,a,p=r[1].frame+"";return{c(){s=t("pre"),a=e(p)},l(r){s=n(r,"PRE",{});var t=c(s);a=o(t,p),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&p!==(p=r[1].frame+"")&&m(a,p)},d(r){r&&u(s)}}}function k(r){let s,a,p=r[1].stack+"";return{c(){s=t("pre"),a=e(p)},l(r){s=n(r,"PRE",{});var t=c(s);a=o(t,p),t.forEach(u)},m(r,t){f(r,s,t),l(s,a)},p(r,s){2&s&&p!==(p=r[1].stack+"")&&m(a,p)},d(r){r&&u(s)}}}function v(r){let s,a,v,g,N,P,R,x,$=r[1].message+"",j=r[1].frame&&E(r),H=r[1].stack&&k(r);return{c(){s=t("h1"),a=e(r[0]),v=p(),g=t("pre"),N=e($),P=p(),j&&j.c(),R=p(),H&&H.c(),x=d()},l(t){s=n(t,"H1",{});var e=c(s);a=o(e,r[0]),e.forEach(u),v=i(t),g=n(t,"PRE",{});var f=c(g);N=o(f,$),f.forEach(u),P=i(t),j&&j.l(t),R=i(t),H&&H.l(t),x=d()},m(r,t){f(r,s,t),l(s,a),f(r,v,t),f(r,g,t),l(g,N),f(r,P,t),j&&j.m(r,t),f(r,R,t),H&&H.m(r,t),f(r,x,t)},p(r,[s]){1&s&&m(a,r[0]),2&s&&$!==($=r[1].message+"")&&m(N,$),r[1].frame?j?j.p(r,s):(j=E(r),j.c(),j.m(R.parentNode,R)):j&&(j.d(1),j=null),r[1].stack?H?H.p(r,s):(H=k(r),H.c(),H.m(x.parentNode,x)):H&&(H.d(1),H=null)},i:h,o:h,d(r){r&&u(s),r&&u(v),r&&u(g),r&&u(P),j&&j.d(r),r&&u(R),H&&H.d(r),r&&u(x)}}}function g({error:r,status:s}){return{props:{error:r,status:s}}}function N(r,s,a){let{status:t}=s,{error:e}=s;return r.$$set=r=>{"status"in r&&a(0,t=r.status),"error"in r&&a(1,e=r.error)},[t,e]}class P extends r{constructor(r){super(),s(this,r,N,v,a,{status:0,error:1})}}export{P as default,g as load};