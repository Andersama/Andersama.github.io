function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function s(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(s)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,s,r){return t[1]&&r?n(s.ctx.slice(),t[1](r(e))):s.ctx}function l(t,e,n,s,r,o,a){const i=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(i){const r=c(e,n,s,a);t.p(r,i)}}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),h=u?t=>requestAnimationFrame(t):t;const p=new Set;function d(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&h(d)}function m(t){let e;return 0===p.size&&h(d),{promise:new Promise((n=>{p.add(e={c:t,f:n})})),abort(){p.delete(e)}}}function g(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function v(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function E(){return w(" ")}function x(){return w("")}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t){return Array.from(t.childNodes)}function N(t,e,n,s){for(let s=0;s<t.length;s+=1){const r=t[s];if(r.nodeName===e){let e=0;const o=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)r.removeAttribute(o[t]);return t.splice(s,1)[0]}}return s?v(e):b(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return w(e)}function R(t){return A(t," ")}function T(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e=document.body){return Array.from(e.querySelectorAll(t))}const j=new Set;let L,O=0;function q(t,e,n,s,r,o,a,i=0){const c=16.666/s;let l="{\n";for(let t=0;t<=1;t+=c){const s=e+(n-e)*o(t);l+=100*t+`%{${a(s,1-s)}}\n`}const u=l+`100% {${a(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,h=t.ownerDocument;j.add(h);const p=h.__svelte_stylesheet||(h.__svelte_stylesheet=h.head.appendChild(b("style")).sheet),d=h.__svelte_rules||(h.__svelte_rules={});d[f]||(d[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${s}ms linear ${r}ms 1 both`,O+=1,f}function I(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),O-=r,O||h((()=>{O||(j.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),j.clear())})))}function P(t){L=t}function V(){if(!L)throw new Error("Function called outside component initialization");return L}function U(t){V().$$.on_mount.push(t)}const z=[],D=[],J=[],K=[],B=Promise.resolve();let G=!1;function M(t){J.push(t)}let F=!1;const H=new Set;function W(){if(!F){F=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];P(e),Y(e.$$)}for(P(null),z.length=0;D.length;)D.pop()();for(let t=0;t<J.length;t+=1){const e=J[t];H.has(e)||(H.add(e),e())}J.length=0}while(z.length);for(;K.length;)K.pop()();G=!1,F=!1,H.clear()}}function Y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let X;function Q(){return X||(X=Promise.resolve(),X.then((()=>{X=null}))),X}function Z(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const tt=new Set;let et;function nt(){et={r:0,c:[],p:et}}function st(){et.r||o(et.c),et=et.p}function rt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,s){if(t&&t.o){if(tt.has(t))return;tt.add(t),et.c.push((()=>{tt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const at={duration:0};function it(n,s,r){let o,i,c=s(n,r),l=!1,u=0;function h(){o&&I(n,o)}function p(){const{delay:s=0,duration:r=300,easing:a=e,tick:p=t,css:d}=c||at;d&&(o=q(n,0,1,r,s,a,d,u++)),p(0,1);const g=f()+s,_=g+r;i&&i.abort(),l=!0,M((()=>Z(n,!0,"start"))),i=m((t=>{if(l){if(t>=_)return p(1,0),Z(n,!0,"end"),h(),l=!1;if(t>=g){const e=a((t-g)/r);p(e,1-e)}}return l}))}let d=!1;return{start(){d||(I(n),a(c)?(c=c(),Q().then(p)):p())},invalidate(){d=!1},end(){l&&(h(),l=!1)}}}function ct(n,s,r){let i,c=s(n,r),l=!0;const u=et;function h(){const{delay:s=0,duration:r=300,easing:a=e,tick:h=t,css:p}=c||at;p&&(i=q(n,1,0,r,s,a,p));const d=f()+s,g=d+r;M((()=>Z(n,!1,"start"))),m((t=>{if(l){if(t>=g)return h(0,1),Z(n,!1,"end"),--u.r||o(u.c),!1;if(t>=d){const e=a((t-d)/r);h(1-e,e)}}return l}))}return u.r+=1,a(c)?Q().then((()=>{c=c(),h()})):h(),{end(t){t&&c.tick&&c.tick(1,0),l&&(i&&I(n,i),l=!1)}}}const lt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ut(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ft(t){return"object"==typeof t&&null!==t?t:{}}function ht(t){t&&t.c()}function pt(t,e){t&&t.l(e)}function dt(t,e,n){const{fragment:r,on_mount:i,on_destroy:c,after_update:l}=t.$$;r&&r.m(e,n),M((()=>{const e=i.map(s).filter(a);c?c.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(M)}function mt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function gt(t,e){-1===t.$$.dirty[0]&&(z.push(t),G||(G=!0,B.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _t(e,n,s,a,i,c,l=[-1]){const u=L;P(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=s?s(e,f,((t,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&gt(e,t)),n})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=S(n.target);h.fragment&&h.fragment.l(t),t.forEach($)}else h.fragment&&h.fragment.c();n.intro&&rt(e.$$.fragment),dt(e,n.target,n.anchor),W()}P(u)}class $t{$destroy(){mt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function yt(t){let e,n,s=t[1].stack+"";return{c(){e=b("pre"),n=w(s)},l(t){e=N(t,"PRE",{});var r=S(e);n=A(r,s),r.forEach($)},m(t,s){_(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&T(n,s)},d(t){t&&$(e)}}}function bt(e){let n,s,r,o,a,i,c,l=e[1].message+"",u=e[1].stack&&yt(e);return{c(){n=b("h1"),s=w(e[0]),r=E(),o=b("p"),a=w(l),i=E(),u&&u.c(),c=x()},l(t){n=N(t,"H1",{});var f=S(n);s=A(f,e[0]),f.forEach($),r=R(t),o=N(t,"P",{});var h=S(o);a=A(h,l),h.forEach($),i=R(t),u&&u.l(t),c=x()},m(t,e){_(t,n,e),g(n,s),_(t,r,e),_(t,o,e),g(o,a),_(t,i,e),u&&u.m(t,e),_(t,c,e)},p(t,[e]){1&e&&T(s,t[0]),2&e&&l!==(l=t[1].message+"")&&T(a,l),t[1].stack?u?u.p(t,e):(u=yt(t),u.c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null)},i:t,o:t,d(t){t&&$(n),t&&$(r),t&&$(o),t&&$(i),u&&u.d(t),t&&$(c)}}}function vt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r]}class wt extends $t{constructor(t){super(),_t(this,t,vt,bt,i,{status:0,error:1})}}function Et(t){let e,s,r;const o=[t[4]||{}];var a=t[2][1];function i(t){let e={};for(let t=0;t<o.length;t+=1)e=n(e,o[t]);return{props:e}}return a&&(e=new a(i())),{c(){e&&ht(e.$$.fragment),s=x()},l(t){e&&pt(e.$$.fragment,t),s=x()},m(t,n){e&&dt(e,t,n),_(t,s,n),r=!0},p(t,n){const r=16&n?ut(o,[ft(t[4]||{})]):{};if(a!==(a=t[2][1])){if(e){nt();const t=e;ot(t.$$.fragment,1,0,(()=>{mt(t,1)})),st()}a?(e=new a(i()),ht(e.$$.fragment),rt(e.$$.fragment,1),dt(e,s.parentNode,s)):e=null}else a&&e.$set(r)},i(t){r||(e&&rt(e.$$.fragment,t),r=!0)},o(t){e&&ot(e.$$.fragment,t),r=!1},d(t){t&&$(s),e&&mt(e,t)}}}function xt(t){let e,n;return e=new wt({props:{status:t[0],error:t[1]}}),{c(){ht(e.$$.fragment)},l(t){pt(e.$$.fragment,t)},m(t,s){dt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.status=t[0]),2&n&&(s.error=t[1]),e.$set(s)},i(t){n||(rt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function kt(t){let e,n,s,r;const o=[xt,Et],a=[];function i(t,e){return t[1]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=x()},l(t){n.l(t),s=x()},m(t,n){a[e].m(t,n),_(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(nt(),ot(a[c],1,1,(()=>{a[c]=null})),st(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),rt(n,1),n.m(s.parentNode,s))},i(t){r||(rt(n),r=!0)},o(t){ot(n),r=!1},d(t){a[e].d(t),t&&$(s)}}}function St(t){let e,n=t[6]&&Nt(t);return{c(){e=b("div"),n&&n.c(),this.h()},l(t){e=N(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var s=S(e);n&&n.l(s),s.forEach($),this.h()},h(){k(e,"id","svelte-announcer"),k(e,"aria-live","assertive"),k(e,"aria-atomic","true"),k(e,"class","svelte-1j55zn5")},m(t,s){_(t,e,s),n&&n.m(e,null)},p(t,s){t[6]?n?n.p(t,s):(n=Nt(t),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(t){t&&$(e),n&&n.d()}}}function Nt(t){let e,n;return{c(){e=w("Navigated to "),n=w(t[7])},l(s){e=A(s,"Navigated to "),n=A(s,t[7])},m(t,s){_(t,e,s),_(t,n,s)},p(t,e){128&e&&T(n,t[7])},d(t){t&&$(e),t&&$(n)}}}function At(t){let e,s,r,o;const a=[t[3]||{}];let i={$$slots:{default:[kt]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)i=n(i,a[t]);e=new t[8]({props:i});let c=t[5]&&St(t);return{c(){ht(e.$$.fragment),s=E(),c&&c.c(),r=x()},l(t){pt(e.$$.fragment,t),s=R(t),c&&c.l(t),r=x()},m(t,n){dt(e,t,n),_(t,s,n),c&&c.m(t,n),_(t,r,n),o=!0},p(t,[n]){const s=8&n?ut(a,[ft(t[3]||{})]):{};2071&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s),t[5]?c?c.p(t,n):(c=St(t),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(t){o||(rt(e.$$.fragment,t),o=!0)},o(t){ot(e.$$.fragment,t),o=!1},d(t){mt(e,t),t&&$(s),c&&c.d(t),t&&$(r)}}}function Rt(t,e,n){let{status:s}=e,{error:r}=e,{stores:o}=e,{page:a}=e,{components:i}=e,{props_0:c=null}=e,{props_1:l=null}=e;const u=i[0];var f,h,p;f="__svelte__",h=o,V().$$.context.set(f,h),p=o.page.notify,V().$$.after_update.push(p);let d=!1,m=!1,g=null;return U((()=>{const t=o.page.subscribe((()=>{d&&(n(6,m=!0),n(7,g=document.title))}));return n(5,d=!0),t})),t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error),"stores"in t&&n(9,o=t.stores),"page"in t&&n(10,a=t.page),"components"in t&&n(2,i=t.components),"props_0"in t&&n(3,c=t.props_0),"props_1"in t&&n(4,l=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&o.page.set(a)},[s,r,i,c,l,d,m,g,u,o,a]}class Tt extends $t{constructor(t){super(),_t(this,t,Rt,At,i,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}function Ct(e){let n,s,r,o,a,i,c,l,u,f,h,p,d,m,y,v;return{c(){n=b("div"),s=b("nav"),r=b("a"),o=w("Home"),a=E(),i=b("a"),c=w("About"),l=E(),u=b("a"),f=w("Activity"),h=E(),p=b("a"),d=w("Gists"),m=E(),y=b("a"),v=w("Cool Repos"),this.h()},l(t){n=N(t,"DIV",{class:!0});var e=S(n);s=N(e,"NAV",{class:!0});var g=S(s);r=N(g,"A",{class:!0,href:!0});var _=S(r);o=A(_,"Home"),_.forEach($),a=R(g),i=N(g,"A",{class:!0,href:!0});var b=S(i);c=A(b,"About"),b.forEach($),l=R(g),u=N(g,"A",{class:!0,href:!0});var w=S(u);f=A(w,"Activity"),w.forEach($),h=R(g),p=N(g,"A",{class:!0,href:!0});var E=S(p);d=A(E,"Gists"),E.forEach($),m=R(g),y=N(g,"A",{class:!0,href:!0});var x=S(y);v=A(x,"Cool Repos"),x.forEach($),g.forEach($),e.forEach($),this.h()},h(){k(r,"class","navbar-item navbar-link svelte-18x1lke"),k(r,"href","/"),k(i,"class","navbar-item navbar-link svelte-18x1lke"),k(i,"href","/about"),k(u,"class","navbar-item navbar-link svelte-18x1lke"),k(u,"href","/activity"),k(p,"class","navbar-item navbar-link svelte-18x1lke"),k(p,"href","/gists"),k(y,"class","navbar-item navbar-link svelte-18x1lke"),k(y,"href","/cool-repos"),k(s,"class","navbar"),k(n,"class","container")},m(t,e){_(t,n,e),g(n,s),g(s,r),g(r,o),g(s,a),g(s,i),g(i,c),g(s,l),g(s,u),g(u,f),g(s,h),g(s,p),g(p,d),g(s,m),g(s,y),g(y,v)},p:t,i:t,o:t,d(t){t&&$(n)}}}class jt extends $t{constructor(t){super(),_t(this,t,null,Ct,i,{})}}const{document:Lt}=lt;function Ot(t){let e,n,s,r,o,a;r=new jt({});const i=t[1].default,u=function(t,e,n,s){if(t){const r=c(t,e,n,s);return t[0](r)}}(i,t,t[0],null);return{c(){e=b("link"),n=b("link"),s=E(),ht(r.$$.fragment),o=E(),u&&u.c(),this.h()},l(t){const a=C('[data-svelte="svelte-2j2zm4"]',Lt.head);e=N(a,"LINK",{rel:!0,href:!0}),n=N(a,"LINK",{rel:!0,href:!0}),a.forEach($),s=R(t),pt(r.$$.fragment,t),o=R(t),u&&u.l(t),this.h()},h(){k(e,"rel","stylesheet"),k(e,"href","/normalize.css"),k(n,"rel","stylesheet"),k(n,"href","/skeleton.css")},m(t,i){g(Lt.head,e),g(Lt.head,n),_(t,s,i),dt(r,t,i),_(t,o,i),u&&u.m(t,i),a=!0},p(t,[e]){u&&u.p&&1&e&&l(u,i,t,t[0],e,null,null)},i(t){a||(rt(r.$$.fragment,t),rt(u,t),a=!0)},o(t){ot(r.$$.fragment,t),ot(u,t),a=!1},d(t){$(e),$(n),t&&$(s),mt(r,t),t&&$(o),u&&u.d(t)}}}const qt=10,It=200,Pt=40;function Vt(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}var Ut=Object.freeze({__proto__:null,default:class extends $t{constructor(t){super(),_t(this,t,Vt,Ot,i,{})}},load:async function(t,e){if("undefined"!=typeof document){const e=await t.fetch("https://api.github.com/users/andersama/events"),n=await t.fetch("https://api.github.com/users/andersama/gists"),s=await t.fetch("https://api.github.com/users/andersama/starred");return{github_user_events:await e.json(),github_user_gists:await n.json(),github_user_cool_repos:await s.json()}}return{github_user_events:[],github_user_gists:[],github_user_cool_repos:[]}},delay_mul:10,anim_duration:200,anim_shift:40});const zt=[()=>Promise.all([import("./index.svelte-1f80c76e.js"),__inject_styles(["start-2e34312c.css","index.svelte-852ab13f.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./cool-repos.svelte-93d18219.js"),__inject_styles(["start-2e34312c.css","cool-repos.svelte-852ab13f.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./activity.svelte-3adedbb0.js"),__inject_styles(["start-2e34312c.css","activity.svelte-1ddef4be.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./about.svelte-8a812095.js"),__inject_styles(["start-2e34312c.css","about.svelte-852ab13f.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./gists.svelte-813812e7.js"),__inject_styles(["start-2e34312c.css","gists.svelte-4ea24824.css"])]).then((function(t){return t[0]}))],Dt=()=>({}),Jt=[{pattern:/^\/$/,params:Dt,parts:[zt[0]]},{pattern:/^\/cool-repos\/?$/,params:Dt,parts:[zt[1]]},{pattern:/^\/activity\/?$/,params:Dt,parts:[zt[2]]},{pattern:/^\/about\/?$/,params:Dt,parts:[zt[3]]},{pattern:/^\/gists\/?$/,params:Dt,parts:[zt[4]]}],Kt=[];function Bt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}const Gt=[];function Mt(e,n=t){let s;const r=[];function o(t){if(i(e,t)&&(e=t,s)){const t=!Gt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),Gt.push(n,e)}if(t){for(let t=0;t<Gt.length;t+=2)Gt[t][0](Gt[t+1]);Gt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}function Ft(){return{x:pageXOffset,y:pageYOffset}}class Ht{constructor({base:t,host:e,pages:n,ignore:s}){this.base=t,this.host=e,this.pages=n,this.ignore=s,this.history=window.history||{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"}}init({renderer:t}){let e;this.renderer=t,t.router=this,"scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{this.history.scrollRestoration="auto"})),addEventListener("load",(()=>{this.history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t={...history.state||{},"sveltekit:scroll":Ft()};history.replaceState(t,document.title,window.location)}),50)})),addEventListener("click",(t=>{if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Bt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=this.select(r);if(o){const n=e.hasAttribute("sveltekit:noscroll");this.renderer.notify(o),this.history.pushState({},"",r.href),this.navigate(o,!!n&&Ft(),r.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state){const e=new URL(location.href),n=this.select(e);n?this.navigate(n,t.state["sveltekit:scroll"]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),this.history.replaceState({},"",location.href);const n=this.select(new URL(location.href));if(n)return this.renderer.start(n)}select(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;let e=t.pathname.slice(this.base.length);if(""===e&&(e="/"),!this.ignore.some((t=>t.test(e))))for(const n of this.pages){const s=n.pattern.exec(e);if(s){const r=new URLSearchParams(t.search),o=n.params(s),a={host:this.host,path:e,query:r,params:o};return{href:t.href,route:n,match:s,page:a}}}}async goto(t,{noscroll:e=!1,replaceState:n=!1}={}){const s=new URL(t,function(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}(document)),r=this.select(s);return r?(this.renderer.notify(r),this.history[n?"replaceState":"pushState"]({},"",t),this.navigate(r,!!e&&Ft(),s.hash)):(location.href=t,new Promise((()=>{})))}async navigate(t,e,n){location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.render(t),document.body.focus();const s=n&&document.getElementById(n.slice(1));e?scrollTo(e.x,e.y):s?scrollTo(0,s.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function Wt(t){const e=Mt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}class Yt{constructor({Root:t,layout:e,target:n,error:s,status:r,preloaded:o,session:a}){this.Root=t,this.layout=e,this.layout_loader=()=>e,this.target=n,this.initial={preloaded:o,error:s,status:r},this.current={page:null,query:null,session_changed:!1,nodes:[]},this.caches=new Map,this.prefetching={href:null,promise:null},this.stores={page:Wt({}),navigating:Mt(null),session:Mt(a)},this.$session=null,this.root=null;const i=t=>{const e=Bt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let c;addEventListener("touchstart",i),addEventListener("mousemove",(t=>{clearTimeout(c),c=setTimeout((()=>{i(t)}),20)}));let l=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!l)return;this.current.session_changed=!0;const e=this.router.select(new URL(location.href));this.render(e)})),l=!0}async start(t){const e={stores:this.stores,error:this.initial.error,status:this.initial.status,page:t.page};if(this.initial.error)e.components=[this.layout.default];else{const n=await this.hydrate(t);if(n.redirect)throw new Error("TODO client-side redirects");Object.assign(e,n.props),this.current=n.state}this.root=new this.Root({target:this.target,props:e,hydrate:!0}),this.initial=null}notify(t){this.stores.navigating.set({from:this.current.page,to:t.page})}async render(t){const e=this.token={},n=await this.hydrate(t);this.token===e&&(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null))}async hydrate({route:t,page:e}){const n={error:null,status:200,components:[]},s=(t,e)=>{if(this.initial){const e=document.querySelector(`script[type="svelte-data"][url="${t}"]`);if(e){const{body:t,...n}=JSON.parse(e.textContent);return Promise.resolve(new Response(t,n))}}return fetch(t,e)},r=e.query.toString(),o={page:e,query:r,session_changed:!1,nodes:[]},a=[this.layout_loader(),...t.parts.map((t=>t()))],i=[];let c,l={};const u={params:Object.keys(e.params).filter((t=>!this.current.page||this.current.page.params[t]!==e.params[t])),query:r!==this.current.query,session:this.current.session_changed,context:!1};try{for(let t=0;t<a.length;t+=1){const f=this.current.nodes[t],{default:h,load:p}=await a[t];n.components[t]=h;if(!f||h!==f.component||u.params.some((t=>f.uses.params.has(t)))||u.query&&f.uses.query||u.session&&f.uses.session||u.context&&f.uses.context){const n=e.path+r,a=this.caches.get(h),f=a&&a.get(n);let d,m;if(!f||u.context&&f.node.uses.context){d={component:h,uses:{params:new Set,query:!1,session:!1,context:!1}};const t={};for(const n in e.params)Object.defineProperty(t,n,{get:()=>(d.uses.params.add(n),e.params[n]),enumerable:!0});const n=this.$session;m=p&&await p.call(null,{page:{...e,params:t,get query(){return d.uses.query=!0,e.query}},get session(){return d.uses.session=!0,n},get context(){return d.uses.context=!0,{...l}},fetch:s})}else({node:d,loaded:m}=f);if(m){if(m.error){const t=new Error(m.error.message);throw t.status=m.error.status,t}if(m.redirect){c=m.redirect;break}if(m.context&&(u.context=!0,l={...l,...m.context}),m.maxage){this.caches.has(h)||this.caches.set(h,new Map);const t=this.caches.get(h),e={node:d,loaded:m};t.set(n,e);let s=!1;const r=setTimeout((()=>{o()}),1e3*m.maxage),o=()=>{t.get(n)===e&&t.delete(n),a(),clearTimeout(r)},a=this.stores.session.subscribe((()=>{s&&o()}));s=!0}i[t]=m.props}o.nodes[t]=d}else o.nodes[t]=f}(await Promise.all(i)).forEach(((t,e)=>{t&&(n[`props_${e}`]=t)})),this.current.page&&e.path===this.current.page.path||(n.page=e)}catch(t){n.error=t,n.status=500,o.nodes=[]}return{redirect:c,props:n,state:o}}async prefetch(t){const e=this.router.select(t);if(e)return t.href!==this.prefetching.href&&(this.prefetching={href:t.href,promise:this.hydrate(e)}),this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`)}}async function Xt({paths:t,target:e,host:n,session:s,preloaded:r,error:o,status:a}){const i=new Ht({base:t.base,host:n,pages:Jt,ignore:Kt}),c=new Yt({Root:Tt,layout:Ut,target:e,preloaded:r,error:o,status:a,session:s});await i.init({renderer:c})}export{M as A,it as B,nt as C,a as D,n as E,x as F,Xt as G,$t as S,E as a,N as b,R as c,$ as d,b as e,S as f,A as g,k as h,_t as i,_ as j,g as k,v as l,T as m,t as n,ct as o,Pt as p,C as q,It as r,i as s,w as t,qt as u,rt as v,ot as w,st as x,y,U as z};

import __inject_styles from './inject_styles-cd877ae9.js';//# sourceMappingURL=start-beae0ded.js.map