import{S as t,i as e,s as a,e as o,k as s,c as n,a as l,n as d,d as r,b as c,G as i,f as u,H as h,W as m,X as f,Y as p,Z as v,_ as g,P as x,$ as b,T as E,t as j,F as w,g as T,a0 as y,w as q,x as M,u as k,a1 as O,a2 as _,r as F,a3 as N,M as U}from"../../chunks/vendor-412594db.js";function D(t,{pending:e,error:a,result:o}){let s;async function n(n){const l=s={};n.preventDefault();const d=new FormData(t);e&&e(d,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:d});if(l!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(r){if(!a)throw r;a(null,r,t)}}return t.addEventListener("submit",n),{destroy(){t.removeEventListener("submit",n)}}}function I(t,e,a){const o=t.slice();return o[5]=e[a],o[6]=e,o[7]=a,o}function R(t,e){let a,j,w,T,y,q,M,k,F,N,I,R,B,P,$,H,L,S,V,A,C,G,W,X,Y,Z,z,J=U;function K(...t){return e[3](e[5],e[6],e[7],...t)}function Q(){return e[4](e[5])}return{key:t,first:null,c(){a=o("div"),j=o("form"),w=o("input"),y=s(),q=o("button"),N=s(),I=o("form"),R=o("input"),P=s(),$=o("button"),L=s(),S=o("form"),V=o("button"),G=s(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=l(a);j=n(e,"FORM",{action:!0,method:!0});var o=l(j);w=n(o,"INPUT",{type:!0,name:!0,class:!0}),y=d(o),q=n(o,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(r),o.forEach(r),N=d(e),I=n(e,"FORM",{class:!0,action:!0,method:!0});var s=l(I);R=n(s,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),P=d(s),$=n(s,"BUTTON",{class:!0,"aria-label":!0}),l($).forEach(r),s.forEach(r),L=d(e),S=n(e,"FORM",{action:!0,method:!0});var c=l(S);V=n(c,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(r),c.forEach(r),G=d(e),e.forEach(r),this.h()},h(){c(w,"type","hidden"),c(w,"name","done"),w.value=T=e[5].done?"":"true",c(w,"class","svelte-dmxqmd"),c(q,"class","toggle svelte-dmxqmd"),c(q,"aria-label",M="Mark todo as "+(e[5].done?"not done":"done")),c(j,"action",k="/todos/"+e[5].uid+".json?_method=patch"),c(j,"method","post"),c(R,"aria-label","Edit todo"),c(R,"type","text"),c(R,"name","text"),R.value=B=e[5].text,c(R,"class","svelte-dmxqmd"),c($,"class","save svelte-dmxqmd"),c($,"aria-label","Save todo"),c(I,"class","text svelte-dmxqmd"),c(I,"action",H="/todos/"+e[5].uid+".json?_method=patch"),c(I,"method","post"),c(V,"class","delete svelte-dmxqmd"),c(V,"aria-label","Delete todo"),c(S,"action",A="/todos/"+e[5].uid+".json?_method=delete"),c(S,"method","post"),c(a,"class","todo svelte-dmxqmd"),i(a,"done",e[5].done),this.first=a},m(t,o){u(t,a,o),h(a,j),h(j,w),h(j,y),h(j,q),h(a,N),h(a,I),h(I,R),h(I,P),h(I,$),h(a,L),h(a,S),h(S,V),h(a,G),Y=!0,Z||(z=[m(F=D.call(null,j,{pending:K,result:e[1]})),m(D.call(null,I,{result:e[1]})),m(C=D.call(null,S,{result:Q}))],Z=!0)},p(t,o){e=t,(!Y||1&o&&T!==(T=e[5].done?"":"true"))&&(w.value=T),(!Y||1&o&&M!==(M="Mark todo as "+(e[5].done?"not done":"done")))&&c(q,"aria-label",M),(!Y||1&o&&k!==(k="/todos/"+e[5].uid+".json?_method=patch"))&&c(j,"action",k),F&&f(F.update)&&1&o&&F.update.call(null,{pending:K,result:e[1]}),(!Y||1&o&&B!==(B=e[5].text)&&R.value!==B)&&(R.value=B),(!Y||1&o&&H!==(H="/todos/"+e[5].uid+".json?_method=patch"))&&c(I,"action",H),(!Y||1&o&&A!==(A="/todos/"+e[5].uid+".json?_method=delete"))&&c(S,"action",A),C&&f(C.update)&&1&o&&C.update.call(null,{result:Q}),1&o&&i(a,"done",e[5].done)},r(){X=a.getBoundingClientRect()},f(){p(a),J(),v(a,X)},a(){J(),J=g(a,X,O,{duration:200})},i(t){Y||(t&&x((()=>{W||(W=b(a,_,{start:.7},!0)),W.run(1)})),Y=!0)},o(t){t&&(W||(W=b(a,_,{start:.7},!1)),W.run(0)),Y=!1},d(t){t&&r(a),t&&W&&W.end(),Z=!1,E(z)}}}function B(t){let e,a,i,p,v,g,x,b,E,O,_,U,B=[],P=new Map,$=t[0];const H=t=>t[5].uid;for(let o=0;o<$.length;o+=1){let e=I(t,$,o),a=H(e);P.set(a,B[o]=R(a,e))}return{c(){e=s(),a=o("div"),i=o("h1"),p=j("Todos"),v=s(),g=o("form"),x=o("input"),E=s();for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){w('[data-svelte="svelte-181o7gf"]',document.head).forEach(r),e=d(t),a=n(t,"DIV",{class:!0});var o=l(a);i=n(o,"H1",{});var s=l(i);p=T(s,"Todos"),s.forEach(r),v=d(o),g=n(o,"FORM",{class:!0,action:!0,method:!0});var c=l(g);x=n(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(r),E=d(o);for(let e=0;e<B.length;e+=1)B[e].l(o);o.forEach(r),this.h()},h(){document.title="Todos",c(x,"name","text"),c(x,"aria-label","Add todo"),c(x,"placeholder","+ tap to add a todo"),c(x,"class","svelte-dmxqmd"),c(g,"class","new svelte-dmxqmd"),c(g,"action","/todos.json"),c(g,"method","post"),c(a,"class","todos svelte-dmxqmd")},m(o,s){u(o,e,s),u(o,a,s),h(a,i),h(i,p),h(a,v),h(a,g),h(g,x),h(a,E);for(let t=0;t<B.length;t+=1)B[t].m(a,null);O=!0,_||(U=m(b=D.call(null,g,{result:t[2]})),_=!0)},p(t,[e]){if(b&&f(b.update)&&1&e&&b.update.call(null,{result:t[2]}),3&e){$=t[0],F();for(let t=0;t<B.length;t+=1)B[t].r();B=y(B,e,H,1,t,$,P,a,N,R,null,I);for(let t=0;t<B.length;t+=1)B[t].a();q()}},i(t){if(!O){for(let t=0;t<$.length;t+=1)M(B[t]);O=!0}},o(t){for(let e=0;e<B.length;e+=1)k(B[e]);O=!1},d(t){t&&r(e),t&&r(a);for(let e=0;e<B.length;e+=1)B[e].d();_=!1,U()}}}const P=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function $(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,n)=>{a(0,e[s].done=!!n.get("done"),o)},t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}class H extends t{constructor(t){super(),e(this,t,$,B,a,{todos:0})}}export{H as default,P as load};