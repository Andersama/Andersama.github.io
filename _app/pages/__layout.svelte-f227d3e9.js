import{D as e,S as a,i as s,s as t,E as r,e as c,k as l,t as i,F as o,c as v,d as n,n as h,a as f,g as p,b,G as u,H as d,f as k,I as g,J as m,K as A,x as E,u as x,L as $}from"../chunks/vendor-79c64796.js";const y={subscribe:a=>(()=>{const a=e("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};function q(e){let a,s,t,$,y,q,I,N,H,K,L,R,_,D,G,B,C,F,O,V,j,z,J,M,P,S,T,w,Q,U,W;const X=e[2].default,Y=r(X,e,e[1],null);return{c(){a=c("link"),s=c("link"),t=c("link"),$=l(),y=c("header"),q=c("div"),I=c("nav"),N=c("a"),H=i("Home"),K=l(),L=c("a"),R=i("About"),_=l(),D=c("a"),G=i("Activity"),B=l(),C=c("a"),F=i("Gists"),O=l(),V=c("a"),j=i("Cool Repos"),z=l(),J=c("a"),M=i("Blog"),P=l(),S=c("main"),Y&&Y.c(),T=l(),w=c("footer"),Q=c("p"),U=i("© Alex Anderson"),this.h()},l(e){const r=o('[data-svelte="svelte-32iiis"]',document.head);a=v(r,"LINK",{rel:!0,href:!0}),s=v(r,"LINK",{rel:!0,href:!0}),t=v(r,"LINK",{rel:!0,href:!0}),r.forEach(n),$=h(e),y=v(e,"HEADER",{});var c=f(y);q=v(c,"DIV",{class:!0});var l=f(q);I=v(l,"NAV",{class:!0});var i=f(I);N=v(i,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var b=f(N);H=p(b,"Home"),b.forEach(n),K=h(i),L=v(i,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var u=f(L);R=p(u,"About"),u.forEach(n),_=h(i),D=v(i,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var d=f(D);G=p(d,"Activity"),d.forEach(n),B=h(i),C=v(i,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var k=f(C);F=p(k,"Gists"),k.forEach(n),O=h(i),V=v(i,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var g=f(V);j=p(g,"Cool Repos"),g.forEach(n),z=h(i),J=v(i,"A",{"sveltekit:prefetch":!0,class:!0,href:!0});var m=f(J);M=p(m,"Blog"),m.forEach(n),i.forEach(n),l.forEach(n),c.forEach(n),P=h(e),S=v(e,"MAIN",{class:!0});var A=f(S);Y&&Y.l(A),A.forEach(n),T=h(e),w=v(e,"FOOTER",{class:!0});var E=f(w);Q=v(E,"P",{});var x=f(Q);U=p(x,"© Alex Anderson"),x.forEach(n),E.forEach(n),this.h()},h(){b(a,"rel","stylesheet"),b(a,"href","/normalize.css"),b(s,"rel","stylesheet"),b(s,"href","/skeleton.css"),b(t,"rel","stylesheet"),b(t,"href","/atom-dark.css"),b(N,"sveltekit:prefetch",""),b(N,"class","navbar-item navbar-link svelte-fav7xq"),b(N,"href","/"),u(N,"active","/"===e[0].path),b(L,"sveltekit:prefetch",""),b(L,"class","navbar-item navbar-link svelte-fav7xq"),b(L,"href","/about"),u(L,"active","/about"===e[0].path),b(D,"sveltekit:prefetch",""),b(D,"class","navbar-item navbar-link svelte-fav7xq"),b(D,"href","/activity"),u(D,"active","/activity"===e[0].path),b(C,"sveltekit:prefetch",""),b(C,"class","navbar-item navbar-link svelte-fav7xq"),b(C,"href","/gists"),u(C,"active","/gists"===e[0].path),b(V,"sveltekit:prefetch",""),b(V,"class","navbar-item navbar-link svelte-fav7xq"),b(V,"href","/cool-repos"),u(V,"active","/cool-repos"===e[0].path),b(J,"sveltekit:prefetch",""),b(J,"class","navbar-item navbar-link svelte-fav7xq"),b(J,"href","/blog"),u(J,"active","/blog"===e[0].path),b(I,"class","navbar"),b(q,"class","container"),b(S,"class","container"),b(w,"class","svelte-fav7xq")},m(e,r){d(document.head,a),d(document.head,s),d(document.head,t),k(e,$,r),k(e,y,r),d(y,q),d(q,I),d(I,N),d(N,H),d(I,K),d(I,L),d(L,R),d(I,_),d(I,D),d(D,G),d(I,B),d(I,C),d(C,F),d(I,O),d(I,V),d(V,j),d(I,z),d(I,J),d(J,M),k(e,P,r),k(e,S,r),Y&&Y.m(S,null),k(e,T,r),k(e,w,r),d(w,Q),d(Q,U),W=!0},p(e,[a]){1&a&&u(N,"active","/"===e[0].path),1&a&&u(L,"active","/about"===e[0].path),1&a&&u(D,"active","/activity"===e[0].path),1&a&&u(C,"active","/gists"===e[0].path),1&a&&u(V,"active","/cool-repos"===e[0].path),1&a&&u(J,"active","/blog"===e[0].path),Y&&Y.p&&(!W||2&a)&&g(Y,X,e,e[1],W?A(X,e[1],a,null):m(e[1]),null)},i(e){W||(E(Y,e),W=!0)},o(e){x(Y,e),W=!1},d(e){n(a),n(s),n(t),e&&n($),e&&n(y),e&&n(P),e&&n(S),Y&&Y.d(e),e&&n(T),e&&n(w)}}}const I=10,N=200,H=40,K=10,L=0,R="Andersama";function _(e,a,s){let t;$(e,y,(e=>s(0,t=e)));let{$$slots:r={},$$scope:c}=a;return e.$$set=e=>{"$$scope"in e&&s(1,c=e.$$scope)},[t,c,r]}class D extends a{constructor(e){super(),s(this,e,_,q,t,{})}}export{N as anim_duration,H as anim_shift,D as default,I as delay_mul,K as in_delay,L as out_delay,R as username};
