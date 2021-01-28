import{D as t,E as e}from"./start-beae0ded.js";function n(t){const e=t-1;return e*e*e+1}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function r(t,{delay:e=0,duration:r=400,easing:o=n,x:a=0,y:s=0,opacity:i=0}){const c=getComputedStyle(t),l=+c.opacity,f="none"===c.transform?"":c.transform,p=l*(1-i);return{delay:e,duration:r,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${f} translate(${(1-t)*a}px, ${(1-t)*s}px);\n\t\t\topacity: ${l-p*e}`}}function o(r){var{fallback:o}=r,a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(r,["fallback"]);const s=new Map,i=new Map;function c(r,s,i){return(c,l)=>(r.set(l.key,{rect:c.getBoundingClientRect()}),()=>{if(s.has(l.key)){const{rect:r}=s.get(l.key);return s.delete(l.key),function(r,o,s){const{delay:i=0,duration:c=(t=>30*Math.sqrt(t)),easing:l=n}=e(e({},a),s),f=o.getBoundingClientRect(),p=r.left-f.left,y=r.top-f.top,u=r.width/f.width,d=r.height/f.height,g=Math.sqrt(p*p+y*y),m=getComputedStyle(o),h="none"===m.transform?"":m.transform,b=+m.opacity;return{delay:i,duration:t(c)?c(g):c,easing:l,css:(t,e)=>`\n\t\t\t\topacity: ${t*b};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${h} translate(${e*p}px,${e*y}px) scale(${t+(1-t)*u}, ${t+(1-t)*d});\n\t\t\t`}}(r,c,l)}return r.delete(l.key),o&&o(c,l,i)})}return[c(i,s,!1),c(s,i,!0)]}export{o as c,r as f};
//# sourceMappingURL=transition-3ccd163b.js.map
