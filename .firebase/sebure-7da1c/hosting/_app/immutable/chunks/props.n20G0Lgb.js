import{S as N,Z as j,_ as Z,$ as P,a0 as $,m as g,a1 as l,a2 as D,n as b,V as x,a3 as G,B as K,a4 as V,a5 as z,a6 as H,a7 as X,a8 as J,u as q,a9 as Q,aa as W,ab as F,ac as k,X as p,ad as ee,ae,af as re,ag as M,ah as ne,ai as te,aj as ie}from"./runtime.mkUH6Bax.js";import{c as fe}from"./store.CD9Z2e80.js";function S(t,v=null,y){if(typeof t!="object"||t===null||N in t)return t;const o=K(t);if(o!==j&&o!==Z)return t;var f=new Map,c=V(t),m=P(0);c&&f.set("length",P(t.length));var w;return new Proxy(t,{defineProperty(i,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&$();var n=f.get(e);return n===void 0?(n=P(a.value),f.set(e,n)):g(n,S(a.value,w)),!0},deleteProperty(i,e){var a=f.get(e);if(a===void 0)e in i&&f.set(e,P(l));else{if(c&&typeof e=="string"){var n=f.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&g(n,r)}g(a,l),U(m)}return!0},get(i,e,a){var _;if(e===N)return t;var n=f.get(e),r=e in i;if(n===void 0&&(!r||(_=D(i,e))!=null&&_.writable)&&(n=P(S(r?i[e]:l,w)),f.set(e,n)),n!==void 0){var u=b(n);return u===l?void 0:u}return Reflect.get(i,e,a)},getOwnPropertyDescriptor(i,e){var a=Reflect.getOwnPropertyDescriptor(i,e);if(a&&"value"in a){var n=f.get(e);n&&(a.value=b(n))}else if(a===void 0){var r=f.get(e),u=r==null?void 0:r.v;if(r!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(i,e){var u;if(e===N)return!0;var a=f.get(e),n=a!==void 0&&a.v!==l||Reflect.has(i,e);if(a!==void 0||x!==null&&(!n||(u=D(i,e))!=null&&u.writable)){a===void 0&&(a=P(n?S(i[e],w):l),f.set(e,a));var r=b(a);if(r===l)return!1}return n},set(i,e,a,n){var h;var r=f.get(e),u=e in i;if(c&&e==="length")for(var _=a;_<r.v;_+=1){var I=f.get(_+"");I!==void 0?g(I,l):_ in i&&(I=P(l),f.set(_+"",I))}r===void 0?(!u||(h=D(i,e))!=null&&h.writable)&&(r=P(void 0),g(r,S(a,w)),f.set(e,r)):(u=r.v!==l,g(r,S(a,w)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(n,a),!u){if(c&&typeof e=="string"){var E=f.get("length"),O=Number(e);Number.isInteger(O)&&O>=E.v&&g(E,O+1)}U(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(r=>{var u=f.get(r);return u===void 0||u.v!==l});for(var[a,n]of f)n.v!==l&&!(a in i)&&e.push(a);return e},setPrototypeOf(){G()}})}function U(t,v=1){g(t,t.v+v)}function Y(t){for(var v=x,y=x;v!==null&&!(v.f&(Q|W));)v=v.parent;try{return F(v),t()}finally{F(y)}}function ve(t,v,y,o){var C;var f=(y&k)!==0,c=!p||(y&ee)!==0,m=(y&ae)!==0,w=(y&te)!==0,i=!1,e;m?[e,i]=fe(()=>t[v]):e=t[v];var a=N in t||re in t,n=((C=D(t,v))==null?void 0:C.set)??(a&&m&&v in t?s=>t[v]=s:void 0),r=o,u=!0,_=!1,I=()=>(_=!0,u&&(u=!1,w?r=q(o):r=o),r);e===void 0&&o!==void 0&&(n&&c&&z(),e=I(),n&&n(e));var d;if(c)d=()=>{var s=t[v];return s===void 0?I():(u=!0,_=!1,s)};else{var E=Y(()=>(f?M:ne)(()=>t[v]));E.f|=H,d=()=>{var s=b(E);return s!==void 0&&(r=void 0),s===void 0?r:s}}if(!(y&X))return d;if(n){var O=t.$$legacy;return function(s,R){return arguments.length>0?((!c||!R||O||i)&&n(R?d():s),s):d()}}var h=!1,B=!1,T=ie(e),A=Y(()=>M(()=>{var s=d(),R=b(T);return h?(h=!1,B=!0,R):(B=!1,T.v=s)}));return f||(A.equals=J),function(s,R){if(arguments.length>0){const L=R?b(A):c&&m?S(s):s;return A.equals(L)||(h=!0,g(T,L),_&&r!==void 0&&(r=L),q(()=>b(A))),s}return b(A)}}export{S as a,ve as p};