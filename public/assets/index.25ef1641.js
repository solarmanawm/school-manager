var Ku=Object.defineProperty;var Gu=(t,e,n)=>e in t?Ku(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var vt=(t,e,n)=>(Gu(t,typeof e!="symbol"?e+"":e,n),n);const Ju=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Ju();function Bi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Yu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xu=Bi(Yu);function Ec(t){return!!t||t===""}function as(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ve(r)?ef(r):as(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ve(t))return t;if(_e(t))return t}}const Qu=/;(?![^(]*\))/g,Zu=/:(.+)/;function ef(t){const e={};return t.split(Qu).forEach(n=>{if(n){const r=n.split(Zu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function cs(t){let e="";if(ve(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=cs(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Ty(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ve(e)&&(t.class=cs(e)),n&&(t.style=as(n)),t}function tf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=en(t[r],e[r]);return n}function en(t,e){if(t===e)return!0;let n=$o(t),r=$o(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=ir(t),r=ir(e),n||r)return t===e;if(n=L(t),r=L(e),n||r)return n&&r?tf(t,e):!1;if(n=_e(t),r=_e(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!en(t[o],e[o]))return!1}}return String(t)===String(e)}function ji(t,e){return t.findIndex(n=>en(n,e))}const ii=t=>ve(t)?t:t==null?"":L(t)||_e(t)&&(t.toString===Tc||!W(t.toString))?JSON.stringify(t,Ic,2):String(t),Ic=(t,e)=>e&&e.__v_isRef?Ic(t,e.value):_n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:On(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!L(e)&&!Ac(e)?String(e):e,ce={},gn=[],Qe=()=>{},nf=()=>!1,rf=/^on[^a-z]/,ls=t=>rf.test(t),Hi=t=>t.startsWith("onUpdate:"),Ie=Object.assign,Vi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sf=Object.prototype.hasOwnProperty,X=(t,e)=>sf.call(t,e),L=Array.isArray,_n=t=>vr(t)==="[object Map]",On=t=>vr(t)==="[object Set]",$o=t=>vr(t)==="[object Date]",W=t=>typeof t=="function",ve=t=>typeof t=="string",ir=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Sc=t=>_e(t)&&W(t.then)&&W(t.catch),Tc=Object.prototype.toString,vr=t=>Tc.call(t),of=t=>vr(t).slice(8,-1),Ac=t=>vr(t)==="[object Object]",zi=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Lr=Bi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),us=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},af=/-(\w)/g,at=us(t=>t.replace(af,(e,n)=>n?n.toUpperCase():"")),cf=/\B([A-Z])/g,rn=us(t=>t.replace(cf,"-$1").toLowerCase()),fs=us(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ur=us(t=>t?`on${fs(t)}`:""),or=(t,e)=>!Object.is(t,e),Fr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Kr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ar=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bo;const lf=()=>Bo||(Bo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ue;class Rc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ue&&(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ue;try{return Ue=this,e()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Cc(t){return new Rc(t)}function uf(t,e=Ue){e&&e.active&&e.effects.push(t)}function Ay(){return Ue}function Ry(t){Ue&&Ue.cleanups.push(t)}const qi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},kc=t=>(t.w&Ft)>0,xc=t=>(t.n&Ft)>0,ff=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ft},df=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];kc(s)&&!xc(s)?s.delete(t):e[n++]=s,s.w&=~Ft,s.n&=~Ft}e.length=n}},oi=new WeakMap;let qn=0,Ft=1;const ai=30;let Je;const Xt=Symbol(""),ci=Symbol("");class Wi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,uf(this,r)}run(){if(!this.active)return this.fn();let e=Je,n=Dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Je,Je=this,Dt=!0,Ft=1<<++qn,qn<=ai?ff(this):jo(this),this.fn()}finally{qn<=ai&&df(this),Ft=1<<--qn,Je=this.parent,Dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(jo(this),this.onStop&&this.onStop(),this.active=!1)}}function jo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dt=!0;const Oc=[];function Pn(){Oc.push(Dt),Dt=!1}function Nn(){const t=Oc.pop();Dt=t===void 0?!0:t}function Be(t,e,n){if(Dt&&Je){let r=oi.get(t);r||oi.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qi()),Pc(s)}}function Pc(t,e){let n=!1;qn<=ai?xc(t)||(t.n|=Ft,n=!kc(t)):n=!t.has(Je),n&&(t.add(Je),Je.deps.push(t))}function gt(t,e,n,r,s,i){const o=oi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&L(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":L(t)?zi(n)&&a.push(o.get("length")):(a.push(o.get(Xt)),_n(t)&&a.push(o.get(ci)));break;case"delete":L(t)||(a.push(o.get(Xt)),_n(t)&&a.push(o.get(ci)));break;case"set":_n(t)&&a.push(o.get(Xt));break}if(a.length===1)a[0]&&li(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);li(qi(c))}}function li(t,e){const n=L(t)?t:[...t];for(const r of n)r.computed&&Ho(r);for(const r of n)r.computed||Ho(r)}function Ho(t,e){(t!==Je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const hf=Bi("__proto__,__v_isRef,__isVue"),Nc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ir)),pf=Ki(),mf=Ki(!1,!0),gf=Ki(!0),Vo=_f();function _f(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ee(this);for(let i=0,o=this.length;i<o;i++)Be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pn();const r=ee(this)[e].apply(this,n);return Nn(),r}}),t}function Ki(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Nf:Fc:e?Uc:Lc).get(r))return r;const o=L(r);if(!t&&o&&X(Vo,s))return Reflect.get(Vo,s,i);const a=Reflect.get(r,s,i);return(ir(s)?Nc.has(s):hf(s))||(t||Be(r,"get",s),e)?a:be(a)?o&&zi(s)?a:a.value:_e(a)?t?$c(a):Dn(a):a}}const bf=Dc(),vf=Dc(!0);function Dc(t=!1){return function(n,r,s,i){let o=n[r];if(cr(o)&&be(o)&&!be(s))return!1;if(!t&&!cr(s)&&(ui(s)||(s=ee(s),o=ee(o)),!L(n)&&be(o)&&!be(s)))return o.value=s,!0;const a=L(n)&&zi(r)?Number(r)<n.length:X(n,r),c=Reflect.set(n,r,s,i);return n===ee(i)&&(a?or(s,o)&&gt(n,"set",r,s):gt(n,"add",r,s)),c}}function yf(t,e){const n=X(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&gt(t,"delete",e,void 0),r}function wf(t,e){const n=Reflect.has(t,e);return(!ir(e)||!Nc.has(e))&&Be(t,"has",e),n}function Ef(t){return Be(t,"iterate",L(t)?"length":Xt),Reflect.ownKeys(t)}const Mc={get:pf,set:bf,deleteProperty:yf,has:wf,ownKeys:Ef},If={get:gf,set(t,e){return!0},deleteProperty(t,e){return!0}},Sf=Ie({},Mc,{get:mf,set:vf}),Gi=t=>t,ds=t=>Reflect.getPrototypeOf(t);function Rr(t,e,n=!1,r=!1){t=t.__v_raw;const s=ee(t),i=ee(e);n||(e!==i&&Be(s,"get",e),Be(s,"get",i));const{has:o}=ds(s),a=r?Gi:n?Xi:lr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Cr(t,e=!1){const n=this.__v_raw,r=ee(n),s=ee(t);return e||(t!==s&&Be(r,"has",t),Be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function kr(t,e=!1){return t=t.__v_raw,!e&&Be(ee(t),"iterate",Xt),Reflect.get(t,"size",t)}function zo(t){t=ee(t);const e=ee(this);return ds(e).has.call(e,t)||(e.add(t),gt(e,"add",t,t)),this}function qo(t,e){e=ee(e);const n=ee(this),{has:r,get:s}=ds(n);let i=r.call(n,t);i||(t=ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?or(e,o)&&gt(n,"set",t,e):gt(n,"add",t,e),this}function Wo(t){const e=ee(this),{has:n,get:r}=ds(e);let s=n.call(e,t);s||(t=ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&gt(e,"delete",t,void 0),i}function Ko(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&gt(t,"clear",void 0,void 0),n}function xr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),c=e?Gi:t?Xi:lr;return!t&&Be(a,"iterate",Xt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Or(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=_n(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Gi:e?Xi:lr;return!e&&Be(i,"iterate",c?ci:Xt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function yt(t){return function(...e){return t==="delete"?!1:this}}function Tf(){const t={get(i){return Rr(this,i)},get size(){return kr(this)},has:Cr,add:zo,set:qo,delete:Wo,clear:Ko,forEach:xr(!1,!1)},e={get(i){return Rr(this,i,!1,!0)},get size(){return kr(this)},has:Cr,add:zo,set:qo,delete:Wo,clear:Ko,forEach:xr(!1,!0)},n={get(i){return Rr(this,i,!0)},get size(){return kr(this,!0)},has(i){return Cr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:xr(!0,!1)},r={get(i){return Rr(this,i,!0,!0)},get size(){return kr(this,!0)},has(i){return Cr.call(this,i,!0)},add:yt("add"),set:yt("set"),delete:yt("delete"),clear:yt("clear"),forEach:xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Or(i,!1,!1),n[i]=Or(i,!0,!1),e[i]=Or(i,!1,!0),r[i]=Or(i,!0,!0)}),[t,n,e,r]}const[Af,Rf,Cf,kf]=Tf();function Ji(t,e){const n=e?t?kf:Cf:t?Rf:Af;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const xf={get:Ji(!1,!1)},Of={get:Ji(!1,!0)},Pf={get:Ji(!0,!1)},Lc=new WeakMap,Uc=new WeakMap,Fc=new WeakMap,Nf=new WeakMap;function Df(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mf(t){return t.__v_skip||!Object.isExtensible(t)?0:Df(of(t))}function Dn(t){return cr(t)?t:Yi(t,!1,Mc,xf,Lc)}function Lf(t){return Yi(t,!1,Sf,Of,Uc)}function $c(t){return Yi(t,!0,If,Pf,Fc)}function Yi(t,e,n,r,s){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Mf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Mt(t){return cr(t)?Mt(t.__v_raw):!!(t&&t.__v_isReactive)}function cr(t){return!!(t&&t.__v_isReadonly)}function ui(t){return!!(t&&t.__v_isShallow)}function Bc(t){return Mt(t)||cr(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function wn(t){return Kr(t,"__v_skip",!0),t}const lr=t=>_e(t)?Dn(t):t,Xi=t=>_e(t)?$c(t):t;function jc(t){Dt&&Je&&(t=ee(t),Pc(t.dep||(t.dep=qi())))}function Hc(t,e){t=ee(t),t.dep&&li(t.dep)}function be(t){return!!(t&&t.__v_isRef===!0)}function Qi(t){return Vc(t,!1)}function Uf(t){return Vc(t,!0)}function Vc(t,e){return be(t)?t:new Ff(t,e)}class Ff{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:lr(e)}get value(){return jc(this),this._value}set value(e){e=this.__v_isShallow?e:ee(e),or(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:lr(e),Hc(this))}}function mt(t){return be(t)?t.value:t}const $f={get:(t,e,n)=>mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zc(t){return Mt(t)?t:new Proxy(t,$f)}function Bf(t){const e=L(t)?new Array(t.length):{};for(const n in t)e[n]=Hf(t,n);return e}class jf{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Hf(t,e,n){const r=t[e];return be(r)?r:new jf(t,e,n)}class Vf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Wi(e,()=>{this._dirty||(this._dirty=!0,Hc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ee(this);return jc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function zf(t,e,n=!1){let r,s;const i=W(t);return i?(r=t,s=Qe):(r=t.get,s=t.set),new Vf(r,s,i||!s,n)}function Lt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){hs(i,e,n)}return s}function ze(t,e,n,r){if(W(t)){const i=Lt(t,e,n,r);return i&&Sc(i)&&i.catch(o=>{hs(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ze(t[i],e,n,r));return s}function hs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Lt(c,null,10,[t,o,a]);return}}qf(t,n,s,r)}function qf(t,e,n,r=!0){console.error(t)}let Gr=!1,fi=!1;const Fe=[];let ft=0;const Jn=[];let Wn=null,dn=0;const Yn=[];let At=null,hn=0;const qc=Promise.resolve();let Zi=null,di=null;function ps(t){const e=Zi||qc;return t?e.then(this?t.bind(this):t):e}function Wf(t){let e=ft+1,n=Fe.length;for(;e<n;){const r=e+n>>>1;ur(Fe[r])<t?e=r+1:n=r}return e}function Wc(t){(!Fe.length||!Fe.includes(t,Gr&&t.allowRecurse?ft+1:ft))&&t!==di&&(t.id==null?Fe.push(t):Fe.splice(Wf(t.id),0,t),Kc())}function Kc(){!Gr&&!fi&&(fi=!0,Zi=qc.then(Yc))}function Kf(t){const e=Fe.indexOf(t);e>ft&&Fe.splice(e,1)}function Gc(t,e,n,r){L(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Kc()}function Gf(t){Gc(t,Wn,Jn,dn)}function Jf(t){Gc(t,At,Yn,hn)}function ms(t,e=null){if(Jn.length){for(di=e,Wn=[...new Set(Jn)],Jn.length=0,dn=0;dn<Wn.length;dn++)Wn[dn]();Wn=null,dn=0,di=null,ms(t,e)}}function Jc(t){if(ms(),Yn.length){const e=[...new Set(Yn)];if(Yn.length=0,At){At.push(...e);return}for(At=e,At.sort((n,r)=>ur(n)-ur(r)),hn=0;hn<At.length;hn++)At[hn]();At=null,hn=0}}const ur=t=>t.id==null?1/0:t.id;function Yc(t){fi=!1,Gr=!0,ms(t),Fe.sort((n,r)=>ur(n)-ur(r));const e=Qe;try{for(ft=0;ft<Fe.length;ft++){const n=Fe[ft];n&&n.active!==!1&&Lt(n,null,14)}}finally{ft=0,Fe.length=0,Jc(),Gr=!1,Zi=null,(Fe.length||Jn.length||Yn.length)&&Yc(t)}}function Yf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||ce;h&&(s=n.map(m=>m.trim())),d&&(s=n.map(ar))}let a,c=r[a=Ur(e)]||r[a=Ur(at(e))];!c&&i&&(c=r[a=Ur(rn(e))]),c&&ze(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ze(l,t,6,s)}}function Xc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Xc(l,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(L(i)?i.forEach(c=>o[c]=null):Ie(o,i),r.set(t,o),o)}function gs(t,e){return!t||!ls(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,rn(e))||X(t,e))}let Te=null,Qc=null;function Jr(t){const e=Te;return Te=t,Qc=t&&t.type.__scopeId||null,e}function $e(t,e=Te,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&oa(-1);const i=Jr(e),o=t(...s);return Jr(i),r._d&&oa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Us(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:m,ctx:y,inheritAttrs:x}=t;let R,E;const P=Jr(t);try{if(n.shapeFlag&4){const V=s||r;R=st(u.call(V,V,d,i,m,h,y)),E=c}else{const V=e;R=st(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),E=e.props?c:Xf(c)}}catch(V){er.length=0,hs(V,t,1),R=Z(qe)}let U=R;if(E&&x!==!1){const V=Object.keys(E),{shapeFlag:H}=U;V.length&&H&7&&(o&&V.some(Hi)&&(E=Qf(E,o)),U=Bt(U,E))}return n.dirs&&(U=Bt(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),R=U,Jr(P),R}const Xf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ls(n))&&((e||(e={}))[n]=t[n]);return e},Qf=(t,e)=>{const n={};for(const r in t)(!Hi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Zf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Go(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!gs(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Go(r,o,l):!0:!!o;return!1}function Go(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!gs(n,i))return!0}return!1}function ed({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const td=t=>t.__isSuspense;function nd(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Jf(t)}function $r(t,e){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[t]=e}}function Ze(t,e,n=!1){const r=we||Te;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r.proxy):e}}const Jo={};function Xn(t,e,n){return Zc(t,e,n)}function Zc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ce){const a=we;let c,l=!1,u=!1;if(be(t)?(c=()=>t.value,l=ui(t)):Mt(t)?(c=()=>t,r=!0):L(t)?(u=!0,l=t.some(E=>Mt(E)||ui(E)),c=()=>t.map(E=>{if(be(E))return E.value;if(Mt(E))return Yt(E);if(W(E))return Lt(E,a,2)})):W(t)?e?c=()=>Lt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),ze(t,a,3,[h])}:c=Qe,e&&r){const E=c;c=()=>Yt(E())}let d,h=E=>{d=R.onStop=()=>{Lt(E,a,4)}};if(dr)return h=Qe,e?n&&ze(e,a,3,[c(),u?[]:void 0,h]):c(),Qe;let m=u?[]:Jo;const y=()=>{if(!!R.active)if(e){const E=R.run();(r||l||(u?E.some((P,U)=>or(P,m[U])):or(E,m)))&&(d&&d(),ze(e,a,3,[E,m===Jo?void 0:m,h]),m=E)}else R.run()};y.allowRecurse=!!e;let x;s==="sync"?x=y:s==="post"?x=()=>ke(y,a&&a.suspense):x=()=>Gf(y);const R=new Wi(c,x);return e?n?y():m=R.run():s==="post"?ke(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&Vi(a.scope.effects,R)}}function rd(t,e,n){const r=this.proxy,s=ve(t)?t.includes(".")?el(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=we;En(this);const a=Zc(s,i.bind(r),n);return o?En(o):Qt(),a}function el(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Yt(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))Yt(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)Yt(t[n],e);else if(On(t)||_n(t))t.forEach(n=>{Yt(n,e)});else if(Ac(t))for(const n in t)Yt(t[n],e);return t}function sd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return il(()=>{t.isMounted=!0}),ol(()=>{t.isUnmounting=!0}),t}const He=[Function,Array],id={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(t,{slots:e}){const n=ws(),r=sd();let s;return()=>{const i=e.default&&rl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const x of i)if(x.type!==qe){o=x;break}}const a=ee(t),{mode:c}=a;if(r.isLeaving)return Fs(o);const l=Yo(o);if(!l)return Fs(o);const u=hi(l,a,r,n);pi(l,u);const d=n.subTree,h=d&&Yo(d);let m=!1;const{getTransitionKey:y}=l.type;if(y){const x=y();s===void 0?s=x:x!==s&&(s=x,m=!0)}if(h&&h.type!==qe&&(!Gt(l,h)||m)){const x=hi(h,a,r,n);if(pi(h,x),c==="out-in")return r.isLeaving=!0,x.afterLeave=()=>{r.isLeaving=!1,n.update()},Fs(o);c==="in-out"&&l.type!==qe&&(x.delayLeave=(R,E,P)=>{const U=nl(r,h);U[String(h.key)]=h,R._leaveCb=()=>{E(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},tl=id;function nl(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function hi(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:x,onAppear:R,onAfterAppear:E,onAppearCancelled:P}=e,U=String(t.key),V=nl(n,t),H=(C,j)=>{C&&ze(C,r,9,j)},Y=(C,j)=>{const G=j[1];H(C,j),L(C)?C.every(te=>te.length<=1)&&G():C.length<=1&&G()},B={mode:i,persisted:o,beforeEnter(C){let j=a;if(!n.isMounted)if(s)j=x||a;else return;C._leaveCb&&C._leaveCb(!0);const G=V[U];G&&Gt(t,G)&&G.el._leaveCb&&G.el._leaveCb(),H(j,[C])},enter(C){let j=c,G=l,te=u;if(!n.isMounted)if(s)j=R||c,G=E||l,te=P||u;else return;let O=!1;const ne=C._enterCb=pe=>{O||(O=!0,pe?H(te,[C]):H(G,[C]),B.delayedLeave&&B.delayedLeave(),C._enterCb=void 0)};j?Y(j,[C,ne]):ne()},leave(C,j){const G=String(t.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return j();H(d,[C]);let te=!1;const O=C._leaveCb=ne=>{te||(te=!0,j(),ne?H(y,[C]):H(m,[C]),C._leaveCb=void 0,V[G]===t&&delete V[G])};V[G]=t,h?Y(h,[C,O]):O()},clone(C){return hi(C,e,n,r)}};return B}function Fs(t){if(_s(t))return t=Bt(t),t.children=null,t}function Yo(t){return _s(t)?t.children?t.children[0]:void 0:t}function pi(t,e){t.shapeFlag&6&&t.component?pi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function rl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===xe?(o.patchFlag&128&&s++,r=r.concat(rl(o.children,e,a))):(e||o.type!==qe)&&r.push(a!=null?Bt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function We(t){return W(t)?{setup:t,name:t.name}:t}const Qn=t=>!!t.type.__asyncLoader,_s=t=>t.type.__isKeepAlive;function od(t,e){sl(t,"a",e)}function ad(t,e){sl(t,"da",e)}function sl(t,e,n=we){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(bs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_s(s.parent.vnode)&&cd(r,e,n,s),s=s.parent}}function cd(t,e,n,r){const s=bs(e,t,r,!0);eo(()=>{Vi(r[e],s)},n)}function bs(t,e,n=we,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pn(),En(n);const a=ze(e,n,t,o);return Qt(),Nn(),a});return r?s.unshift(i):s.push(i),i}}const bt=t=>(e,n=we)=>(!dr||t==="sp")&&bs(t,e,n),ld=bt("bm"),il=bt("m"),ud=bt("bu"),fd=bt("u"),ol=bt("bum"),eo=bt("um"),dd=bt("sp"),hd=bt("rtg"),pd=bt("rtc");function md(t,e=we){bs("ec",t,e)}function Cy(t,e){const n=Te;if(n===null)return t;const r=Es(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ce]=e[i];W(o)&&(o={mounted:o,updated:o}),o.deep&&Yt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Ht(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Pn(),ze(c,n,8,[t.el,a,t,e]),Nn())}}const to="components";function al(t,e){return ll(to,t,!0,e)||t}const cl=Symbol();function ky(t){return ve(t)?ll(to,t,!1)||t:t||cl}function ll(t,e,n=!0,r=!1){const s=Te||we;if(s){const i=s.type;if(t===to){const a=Wd(i,!1);if(a&&(a===e||a===at(e)||a===fs(at(e))))return i}const o=Xo(s[t]||i[t],e)||Xo(s.appContext[t],e);return!o&&r?i:o}}function Xo(t,e){return t&&(t[e]||t[at(e)]||t[fs(at(e))])}function Qo(t,e,n,r){let s;const i=n&&n[r];if(L(t)||ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function xy(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(L(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.fn)}return t}function vs(t,e,n={},r,s){if(Te.isCE||Te.parent&&Qn(Te.parent)&&Te.parent.isCE)return Z("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ee();const o=i&&ul(i(n)),a=yl(xe,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ul(t){return t.some(e=>Qr(e)?!(e.type===qe||e.type===xe&&!ul(e.children)):!0)?t:null}function Oy(t){const e={};for(const n in t)e[Ur(n)]=t[n];return e}const mi=t=>t?El(t)?Es(t)||t.proxy:mi(t.parent):null,Yr=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mi(t.parent),$root:t=>mi(t.root),$emit:t=>t.emit,$options:t=>dl(t),$forceUpdate:t=>t.f||(t.f=()=>Wc(t.update)),$nextTick:t=>t.n||(t.n=ps.bind(t.proxy)),$watch:t=>rd.bind(t)}),gd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==ce&&X(r,e))return o[e]=1,r[e];if(s!==ce&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==ce&&X(n,e))return o[e]=4,n[e];gi&&(o[e]=0)}}const u=Yr[e];let d,h;if(u)return e==="$attrs"&&Be(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ce&&X(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,X(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==ce&&X(s,e)?(s[e]=n,!0):r!==ce&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&X(t,o)||e!==ce&&X(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(Yr,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let gi=!0;function _d(t){const e=dl(t),n=t.proxy,r=t.ctx;gi=!1,e.beforeCreate&&Zo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:y,activated:x,deactivated:R,beforeDestroy:E,beforeUnmount:P,destroyed:U,unmounted:V,render:H,renderTracked:Y,renderTriggered:B,errorCaptured:C,serverPrefetch:j,expose:G,inheritAttrs:te,components:O,directives:ne,filters:pe}=e;if(l&&bd(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const re=o[le];W(re)&&(r[le]=re.bind(n))}if(s){const le=s.call(n,n);_e(le)&&(t.data=Dn(le))}if(gi=!0,i)for(const le in i){const re=i[le],Ne=W(re)?re.bind(n,n):W(re.get)?re.get.bind(n,n):Qe,on=!W(re)&&W(re.set)?re.set.bind(n):Qe,ct=Ye({get:Ne,set:on});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>ct.value,set:tt=>ct.value=tt})}if(a)for(const le in a)fl(a[le],r,n,le);if(c){const le=W(c)?c.call(n):c;Reflect.ownKeys(le).forEach(re=>{$r(re,le[re])})}u&&Zo(u,t,"c");function ge(le,re){L(re)?re.forEach(Ne=>le(Ne.bind(n))):re&&le(re.bind(n))}if(ge(ld,d),ge(il,h),ge(ud,m),ge(fd,y),ge(od,x),ge(ad,R),ge(md,C),ge(pd,Y),ge(hd,B),ge(ol,P),ge(eo,V),ge(dd,j),L(G))if(G.length){const le=t.exposed||(t.exposed={});G.forEach(re=>{Object.defineProperty(le,re,{get:()=>n[re],set:Ne=>n[re]=Ne})})}else t.exposed||(t.exposed={});H&&t.render===Qe&&(t.render=H),te!=null&&(t.inheritAttrs=te),O&&(t.components=O),ne&&(t.directives=ne)}function bd(t,e,n=Qe,r=!1){L(t)&&(t=_i(t));for(const s in t){const i=t[s];let o;_e(i)?"default"in i?o=Ze(i.from||s,i.default,!0):o=Ze(i.from||s):o=Ze(i),be(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Zo(t,e,n){ze(L(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fl(t,e,n,r){const s=r.includes(".")?el(n,r):()=>n[r];if(ve(t)){const i=e[t];W(i)&&Xn(s,i)}else if(W(t))Xn(s,t.bind(n));else if(_e(t))if(L(t))t.forEach(i=>fl(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Xn(s,i,t)}}function dl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Xr(c,l,o,!0)),Xr(c,e,o)),i.set(e,c),c}function Xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xr(t,i,n,!0),s&&s.forEach(o=>Xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vd={data:ea,props:Wt,emits:Wt,methods:Wt,computed:Wt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Wt,directives:Wt,watch:wd,provide:ea,inject:yd};function ea(t,e){return e?t?function(){return Ie(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function yd(t,e){return Wt(_i(t),_i(e))}function _i(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Wt(t,e){return t?Ie(Ie(Object.create(null),t),e):e}function wd(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const r in e)n[r]=Re(t[r],e[r]);return n}function Ed(t,e,n,r=!1){const s={},i={};Kr(i,ys,1),t.propsDefaults=Object.create(null),hl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Lf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Id(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ee(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(gs(t.emitsOptions,h))continue;const m=e[h];if(c)if(X(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const y=at(h);s[y]=bi(c,a,y,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{hl(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!X(e,d)&&((u=rn(d))===d||!X(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=bi(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!X(e,d)&&!0)&&(delete i[d],l=!0)}l&&gt(t,"set","$attrs")}function hl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Lr(c))continue;const l=e[c];let u;s&&X(s,u=at(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:gs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ee(n),l=a||ce;for(let u=0;u<i.length;u++){const d=i[u];n[d]=bi(s,c,d,l[d],t,!X(l,d))}}return o}function bi(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(En(s),r=l[n]=c.call(null,e),Qt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===rn(n))&&(r=!0))}return r}function pl(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=d=>{c=!0;const[h,m]=pl(d,e,!0);Ie(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,gn),gn;if(L(i))for(let u=0;u<i.length;u++){const d=at(i[u]);ta(d)&&(o[d]=ce)}else if(i)for(const u in i){const d=at(u);if(ta(d)){const h=i[u],m=o[d]=L(h)||W(h)?{type:h}:h;if(m){const y=sa(Boolean,m.type),x=sa(String,m.type);m[0]=y>-1,m[1]=x<0||y<x,(y>-1||X(m,"default"))&&a.push(d)}}}const l=[o,a];return r.set(t,l),l}function ta(t){return t[0]!=="$"}function na(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ra(t,e){return na(t)===na(e)}function sa(t,e){return L(e)?e.findIndex(n=>ra(n,t)):W(e)&&ra(e,t)?0:-1}const ml=t=>t[0]==="_"||t==="$stable",no=t=>L(t)?t.map(st):[st(t)],Sd=(t,e,n)=>{if(e._n)return e;const r=$e((...s)=>no(e(...s)),n);return r._c=!1,r},gl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ml(s))continue;const i=t[s];if(W(i))e[s]=Sd(s,i,r);else if(i!=null){const o=no(i);e[s]=()=>o}}},_l=(t,e)=>{const n=no(e);t.slots.default=()=>n},Td=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),Kr(e,"_",n)):gl(e,t.slots={})}else t.slots={},e&&_l(t,e);Kr(t.slots,ys,1)},Ad=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ie(s,e),!n&&a===1&&delete s._):(i=!e.$stable,gl(e,s)),o=e}else e&&(_l(t,e),o={default:1});if(i)for(const a in s)!ml(a)&&!(a in o)&&delete s[a]};function bl(){return{app:null,config:{isNativeTag:nf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rd=0;function Cd(t,e){return function(r,s=null){W(r)||(r=Object.assign({},r)),s!=null&&!_e(s)&&(s=null);const i=bl(),o=new Set;let a=!1;const c=i.app={_uid:Rd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=Z(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,Es(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function vi(t,e,n,r,s=!1){if(L(t)){t.forEach((h,m)=>vi(h,e&&(L(e)?e[m]:e),n,r,s));return}if(Qn(r)&&!s)return;const i=r.shapeFlag&4?Es(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ce?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ve(l)?(u[l]=null,X(d,l)&&(d[l]=null)):be(l)&&(l.value=null)),W(c))Lt(c,a,12,[o,u]);else{const h=ve(c),m=be(c);if(h||m){const y=()=>{if(t.f){const x=h?u[c]:c.value;s?L(x)&&Vi(x,i):L(x)?x.includes(i)||x.push(i):h?(u[c]=[i],X(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,X(d,c)&&(d[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ke(y,n)):y()}}}const ke=nd;function kd(t){return xd(t)}function xd(t,e){const n=lf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Qe,cloneNode:y,insertStaticContent:x}=t,R=(f,p,g,v=null,b=null,S=null,k=!1,I=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Gt(f,p)&&(v=M(f),je(f,b,S,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:F,shapeFlag:N}=p;switch(w){case so:E(f,p,g,v);break;case qe:P(f,p,g,v);break;case $s:f==null&&U(p,g,v,k);break;case xe:ne(f,p,g,v,b,S,k,I,T);break;default:N&1?Y(f,p,g,v,b,S,k,I,T):N&6?pe(f,p,g,v,b,S,k,I,T):(N&64||N&128)&&w.process(f,p,g,v,b,S,k,I,T,ue)}F!=null&&b&&vi(F,f&&f.ref,S,p||f,!p)},E=(f,p,g,v)=>{if(f==null)r(p.el=a(p.children),g,v);else{const b=p.el=f.el;p.children!==f.children&&l(b,p.children)}},P=(f,p,g,v)=>{f==null?r(p.el=c(p.children||""),g,v):p.el=f.el},U=(f,p,g,v)=>{[f.el,f.anchor]=x(f.children,p,g,v,f.el,f.anchor)},V=({el:f,anchor:p},g,v)=>{let b;for(;f&&f!==p;)b=h(f),r(f,g,v),f=b;r(p,g,v)},H=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),s(f),f=g;s(p)},Y=(f,p,g,v,b,S,k,I,T)=>{k=k||p.type==="svg",f==null?B(p,g,v,b,S,k,I,T):G(f,p,b,S,k,I,T)},B=(f,p,g,v,b,S,k,I)=>{let T,w;const{type:F,props:N,shapeFlag:$,transition:q,patchFlag:Q,dirs:ie}=f;if(f.el&&y!==void 0&&Q===-1)T=f.el=y(f.el);else{if(T=f.el=o(f.type,S,N&&N.is,N),$&8?u(T,f.children):$&16&&j(f.children,T,null,v,b,S&&F!=="foreignObject",k,I),ie&&Ht(f,null,v,"created"),N){for(const de in N)de!=="value"&&!Lr(de)&&i(T,de,null,N[de],S,f.children,v,b,A);"value"in N&&i(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&rt(w,v,f)}C(T,f,f.scopeId,k,v)}ie&&Ht(f,null,v,"beforeMount");const oe=(!b||b&&!b.pendingBranch)&&q&&!q.persisted;oe&&q.beforeEnter(T),r(T,p,g),((w=N&&N.onVnodeMounted)||oe||ie)&&ke(()=>{w&&rt(w,v,f),oe&&q.enter(T),ie&&Ht(f,null,v,"mounted")},b)},C=(f,p,g,v,b)=>{if(g&&m(f,g),v)for(let S=0;S<v.length;S++)m(f,v[S]);if(b){let S=b.subTree;if(p===S){const k=b.vnode;C(f,k,k.scopeId,k.slotScopeIds,b.parent)}}},j=(f,p,g,v,b,S,k,I,T=0)=>{for(let w=T;w<f.length;w++){const F=f[w]=I?Rt(f[w]):st(f[w]);R(null,F,p,g,v,b,S,k,I)}},G=(f,p,g,v,b,S,k)=>{const I=p.el=f.el;let{patchFlag:T,dynamicChildren:w,dirs:F}=p;T|=f.patchFlag&16;const N=f.props||ce,$=p.props||ce;let q;g&&Vt(g,!1),(q=$.onVnodeBeforeUpdate)&&rt(q,g,p,f),F&&Ht(p,f,g,"beforeUpdate"),g&&Vt(g,!0);const Q=b&&p.type!=="foreignObject";if(w?te(f.dynamicChildren,w,I,g,v,Q,S):k||Ne(f,p,I,null,g,v,Q,S,!1),T>0){if(T&16)O(I,p,N,$,g,v,b);else if(T&2&&N.class!==$.class&&i(I,"class",null,$.class,b),T&4&&i(I,"style",N.style,$.style,b),T&8){const ie=p.dynamicProps;for(let oe=0;oe<ie.length;oe++){const de=ie[oe],Ke=N[de],an=$[de];(an!==Ke||de==="value")&&i(I,de,Ke,an,b,f.children,g,v,A)}}T&1&&f.children!==p.children&&u(I,p.children)}else!k&&w==null&&O(I,p,N,$,g,v,b);((q=$.onVnodeUpdated)||F)&&ke(()=>{q&&rt(q,g,p,f),F&&Ht(p,f,g,"updated")},v)},te=(f,p,g,v,b,S,k)=>{for(let I=0;I<p.length;I++){const T=f[I],w=p[I],F=T.el&&(T.type===xe||!Gt(T,w)||T.shapeFlag&70)?d(T.el):g;R(T,w,F,null,v,b,S,k,!0)}},O=(f,p,g,v,b,S,k)=>{if(g!==v){for(const I in v){if(Lr(I))continue;const T=v[I],w=g[I];T!==w&&I!=="value"&&i(f,I,w,T,k,p.children,b,S,A)}if(g!==ce)for(const I in g)!Lr(I)&&!(I in v)&&i(f,I,g[I],null,k,p.children,b,S,A);"value"in v&&i(f,"value",g.value,v.value)}},ne=(f,p,g,v,b,S,k,I,T)=>{const w=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:q}=p;q&&(I=I?I.concat(q):q),f==null?(r(w,g,v),r(F,g,v),j(p.children,g,F,b,S,k,I,T)):N>0&&N&64&&$&&f.dynamicChildren?(te(f.dynamicChildren,$,g,b,S,k,I),(p.key!=null||b&&p===b.subTree)&&ro(f,p,!0)):Ne(f,p,g,F,b,S,k,I,T)},pe=(f,p,g,v,b,S,k,I,T)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?b.ctx.activate(p,g,v,k,T):me(p,g,v,b,S,k,T):ge(f,p,T)},me=(f,p,g,v,b,S,k)=>{const I=f.component=Hd(f,v,b);if(_s(f)&&(I.ctx.renderer=ue),Vd(I),I.asyncDep){if(b&&b.registerDep(I,le),!f.el){const T=I.subTree=Z(qe);P(null,T,p,g)}return}le(I,f,p,g,b,S,k)},ge=(f,p,g)=>{const v=p.component=f.component;if(Zf(f,p,g))if(v.asyncDep&&!v.asyncResolved){re(v,p,g);return}else v.next=p,Kf(v.update),v.update();else p.el=f.el,v.vnode=p},le=(f,p,g,v,b,S,k)=>{const I=()=>{if(f.isMounted){let{next:F,bu:N,u:$,parent:q,vnode:Q}=f,ie=F,oe;Vt(f,!1),F?(F.el=Q.el,re(f,F,k)):F=Q,N&&Fr(N),(oe=F.props&&F.props.onVnodeBeforeUpdate)&&rt(oe,q,F,Q),Vt(f,!0);const de=Us(f),Ke=f.subTree;f.subTree=de,R(Ke,de,d(Ke.el),M(Ke),f,b,S),F.el=de.el,ie===null&&ed(f,de.el),$&&ke($,b),(oe=F.props&&F.props.onVnodeUpdated)&&ke(()=>rt(oe,q,F,Q),b)}else{let F;const{el:N,props:$}=p,{bm:q,m:Q,parent:ie}=f,oe=Qn(p);if(Vt(f,!1),q&&Fr(q),!oe&&(F=$&&$.onVnodeBeforeMount)&&rt(F,ie,p),Vt(f,!0),N&&K){const de=()=>{f.subTree=Us(f),K(N,f.subTree,f,b,null)};oe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=Us(f);R(null,de,g,v,f,b,S),p.el=de.el}if(Q&&ke(Q,b),!oe&&(F=$&&$.onVnodeMounted)){const de=p;ke(()=>rt(F,ie,de),b)}(p.shapeFlag&256||ie&&Qn(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&ke(f.a,b),f.isMounted=!0,p=g=v=null}},T=f.effect=new Wi(I,()=>Wc(w),f.scope),w=f.update=()=>T.run();w.id=f.uid,Vt(f,!0),w()},re=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Id(f,p.props,v,g),Ad(f,p.children,g),Pn(),ms(void 0,f.update),Nn()},Ne=(f,p,g,v,b,S,k,I,T=!1)=>{const w=f&&f.children,F=f?f.shapeFlag:0,N=p.children,{patchFlag:$,shapeFlag:q}=p;if($>0){if($&128){ct(w,N,g,v,b,S,k,I,T);return}else if($&256){on(w,N,g,v,b,S,k,I,T);return}}q&8?(F&16&&A(w,b,S),N!==w&&u(g,N)):F&16?q&16?ct(w,N,g,v,b,S,k,I,T):A(w,b,S,!0):(F&8&&u(g,""),q&16&&j(N,g,v,b,S,k,I,T))},on=(f,p,g,v,b,S,k,I,T)=>{f=f||gn,p=p||gn;const w=f.length,F=p.length,N=Math.min(w,F);let $;for($=0;$<N;$++){const q=p[$]=T?Rt(p[$]):st(p[$]);R(f[$],q,g,null,b,S,k,I,T)}w>F?A(f,b,S,!0,!1,N):j(p,g,v,b,S,k,I,T,N)},ct=(f,p,g,v,b,S,k,I,T)=>{let w=0;const F=p.length;let N=f.length-1,$=F-1;for(;w<=N&&w<=$;){const q=f[w],Q=p[w]=T?Rt(p[w]):st(p[w]);if(Gt(q,Q))R(q,Q,g,null,b,S,k,I,T);else break;w++}for(;w<=N&&w<=$;){const q=f[N],Q=p[$]=T?Rt(p[$]):st(p[$]);if(Gt(q,Q))R(q,Q,g,null,b,S,k,I,T);else break;N--,$--}if(w>N){if(w<=$){const q=$+1,Q=q<F?p[q].el:v;for(;w<=$;)R(null,p[w]=T?Rt(p[w]):st(p[w]),g,Q,b,S,k,I,T),w++}}else if(w>$)for(;w<=N;)je(f[w],b,S,!0),w++;else{const q=w,Q=w,ie=new Map;for(w=Q;w<=$;w++){const De=p[w]=T?Rt(p[w]):st(p[w]);De.key!=null&&ie.set(De.key,w)}let oe,de=0;const Ke=$-Q+1;let an=!1,Lo=0;const Bn=new Array(Ke);for(w=0;w<Ke;w++)Bn[w]=0;for(w=q;w<=N;w++){const De=f[w];if(de>=Ke){je(De,b,S,!0);continue}let nt;if(De.key!=null)nt=ie.get(De.key);else for(oe=Q;oe<=$;oe++)if(Bn[oe-Q]===0&&Gt(De,p[oe])){nt=oe;break}nt===void 0?je(De,b,S,!0):(Bn[nt-Q]=w+1,nt>=Lo?Lo=nt:an=!0,R(De,p[nt],g,null,b,S,k,I,T),de++)}const Uo=an?Od(Bn):gn;for(oe=Uo.length-1,w=Ke-1;w>=0;w--){const De=Q+w,nt=p[De],Fo=De+1<F?p[De+1].el:v;Bn[w]===0?R(null,nt,g,Fo,b,S,k,I,T):an&&(oe<0||w!==Uo[oe]?tt(nt,g,Fo,2):oe--)}}},tt=(f,p,g,v,b=null)=>{const{el:S,type:k,transition:I,children:T,shapeFlag:w}=f;if(w&6){tt(f.component.subTree,p,g,v);return}if(w&128){f.suspense.move(p,g,v);return}if(w&64){k.move(f,p,g,ue);return}if(k===xe){r(S,p,g);for(let N=0;N<T.length;N++)tt(T[N],p,g,v);r(f.anchor,p,g);return}if(k===$s){V(f,p,g);return}if(v!==2&&w&1&&I)if(v===0)I.beforeEnter(S),r(S,p,g),ke(()=>I.enter(S),b);else{const{leave:N,delayLeave:$,afterLeave:q}=I,Q=()=>r(S,p,g),ie=()=>{N(S,()=>{Q(),q&&q()})};$?$(S,Q,ie):ie()}else r(S,p,g)},je=(f,p,g,v=!1,b=!1)=>{const{type:S,props:k,ref:I,children:T,dynamicChildren:w,shapeFlag:F,patchFlag:N,dirs:$}=f;if(I!=null&&vi(I,null,g,f,!0),F&256){p.ctx.deactivate(f);return}const q=F&1&&$,Q=!Qn(f);let ie;if(Q&&(ie=k&&k.onVnodeBeforeUnmount)&&rt(ie,p,f),F&6)D(f.component,g,v);else{if(F&128){f.suspense.unmount(g,v);return}q&&Ht(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,g,b,ue,v):w&&(S!==xe||N>0&&N&64)?A(w,p,g,!1,!0):(S===xe&&N&384||!b&&F&16)&&A(T,p,g),v&&Ls(f)}(Q&&(ie=k&&k.onVnodeUnmounted)||q)&&ke(()=>{ie&&rt(ie,p,f),q&&Ht(f,null,p,"unmounted")},g)},Ls=f=>{const{type:p,el:g,anchor:v,transition:b}=f;if(p===xe){_(g,v);return}if(p===$s){H(f);return}const S=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:k,delayLeave:I}=b,T=()=>k(g,S);I?I(f.el,S,T):T()}else S()},_=(f,p)=>{let g;for(;f!==p;)g=h(f),s(f),f=g;s(p)},D=(f,p,g)=>{const{bum:v,scope:b,update:S,subTree:k,um:I}=f;v&&Fr(v),b.stop(),S&&(S.active=!1,je(k,f,p,g)),I&&ke(I,p),ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},A=(f,p,g,v=!1,b=!1,S=0)=>{for(let k=S;k<f.length;k++)je(f[k],p,g,v,b)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),se=(f,p,g)=>{f==null?p._vnode&&je(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),Jc(),p._vnode=f},ue={p:R,um:je,m:tt,r:Ls,mt:me,mc:j,pc:Ne,pbc:te,n:M,o:t};let J,K;return e&&([J,K]=e(ue)),{render:se,hydrate:J,createApp:Cd(se,J)}}function Vt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ro(t,e,n=!1){const r=t.children,s=e.children;if(L(r)&&L(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rt(s[i]),a.el=o.el),n||ro(o,a))}}function Od(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Pd=t=>t.__isTeleport,Zn=t=>t&&(t.disabled||t.disabled===""),ia=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,yi=(t,e)=>{const n=t&&t.to;return ve(n)?e?e(n):null:n},Nd={__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:d,pbc:h,o:{insert:m,querySelector:y,createText:x,createComment:R}}=l,E=Zn(e.props);let{shapeFlag:P,children:U,dynamicChildren:V}=e;if(t==null){const H=e.el=x(""),Y=e.anchor=x("");m(H,n,r),m(Y,n,r);const B=e.target=yi(e.props,y),C=e.targetAnchor=x("");B&&(m(C,B),o=o||ia(B));const j=(G,te)=>{P&16&&u(U,G,te,s,i,o,a,c)};E?j(n,Y):B&&j(B,C)}else{e.el=t.el;const H=e.anchor=t.anchor,Y=e.target=t.target,B=e.targetAnchor=t.targetAnchor,C=Zn(t.props),j=C?n:Y,G=C?H:B;if(o=o||ia(Y),V?(h(t.dynamicChildren,V,j,s,i,o,a),ro(t,e,!0)):c||d(t,e,j,G,s,i,o,a,!1),E)C||Pr(e,n,H,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const te=e.target=yi(e.props,y);te&&Pr(e,te,null,l,0)}else C&&Pr(e,Y,B,l,1)}},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:h}=t;if(d&&i(u),(o||!Zn(h))&&(i(l),a&16))for(let m=0;m<c.length;m++){const y=c[m];s(y,e,n,!0,!!y.dynamicChildren)}},move:Pr,hydrate:Dd};function Pr(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,d=i===2;if(d&&r(o,e,n),(!d||Zn(u))&&c&16)for(let h=0;h<l.length;h++)s(l[h],e,n,2);d&&r(a,e,n)}function Dd(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=yi(e.props,c);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Zn(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=d;else{e.anchor=o(t);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(d,e,u,n,r,s,i)}}return e.anchor&&o(e.anchor)}const Py=Nd,xe=Symbol(void 0),so=Symbol(void 0),qe=Symbol(void 0),$s=Symbol(void 0),er=[];let Xe=null;function Ee(t=!1){er.push(Xe=t?null:[])}function Md(){er.pop(),Xe=er[er.length-1]||null}let fr=1;function oa(t){fr+=t}function vl(t){return t.dynamicChildren=fr>0?Xe||gn:null,Md(),fr>0&&Xe&&Xe.push(t),t}function Ce(t,e,n,r,s,i){return vl($t(t,e,n,r,s,i,!0))}function yl(t,e,n,r,s){return vl(Z(t,e,n,r,s,!0))}function Qr(t){return t?t.__v_isVNode===!0:!1}function Gt(t,e){return t.type===e.type&&t.key===e.key}const ys="__vInternal",wl=({key:t})=>t!=null?t:null,Br=({ref:t,ref_key:e,ref_for:n})=>t!=null?ve(t)||be(t)||W(t)?{i:Te,r:t,k:e,f:!!n}:t:null;function $t(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wl(e),ref:e&&Br(e),scopeId:Qc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(io(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),fr>0&&!o&&Xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xe.push(c),c}const Z=Ld;function Ld(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cl)&&(t=qe),Qr(t)){const a=Bt(t,e,!0);return n&&io(a,n),fr>0&&!i&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(t)]=a:Xe.push(a)),a.patchFlag|=-2,a}if(Kd(t)&&(t=t.__vccOpts),e){e=Ud(e);let{class:a,style:c}=e;a&&!ve(a)&&(e.class=cs(a)),_e(c)&&(Bc(c)&&!L(c)&&(c=Ie({},c)),e.style=as(c))}const o=ve(t)?1:td(t)?128:Pd(t)?64:_e(t)?4:W(t)?2:0;return $t(t,e,n,r,s,o,i,!0)}function Ud(t){return t?Bc(t)||ys in t?Ie({},t):t:null}function Bt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?$d(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wl(a),ref:e&&e.ref?n&&s?L(s)?s.concat(Br(e)):[s,Br(e)]:Br(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bt(t.ssContent),ssFallback:t.ssFallback&&Bt(t.ssFallback),el:t.el,anchor:t.anchor}}function wi(t=" ",e=0){return Z(so,null,t,e)}function Fd(t="",e=!1){return e?(Ee(),yl(qe,null,t)):Z(qe,null,t)}function st(t){return t==null||typeof t=="boolean"?Z(qe):L(t)?Z(xe,null,t.slice()):typeof t=="object"?Rt(t):Z(so,null,String(t))}function Rt(t){return t.el===null||t.memo?t:Bt(t)}function io(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),io(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ys in e)?e._ctx=Te:s===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[wi(e)]):n=8);t.children=e,t.shapeFlag|=n}function $d(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=cs([e.class,r.class]));else if(s==="style")e.style=as([e.style,r.style]);else if(ls(s)){const i=e[s],o=r[s];o&&i!==o&&!(L(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rt(t,e,n,r=null){ze(t,e,7,[n,r])}const Bd=bl();let jd=0;function Hd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Bd,i={uid:jd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pl(r,s),emitsOptions:Xc(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Yf.bind(null,i),t.ce&&t.ce(i),i}let we=null;const ws=()=>we||Te,En=t=>{we=t,t.scope.on()},Qt=()=>{we&&we.scope.off(),we=null};function El(t){return t.vnode.shapeFlag&4}let dr=!1;function Vd(t,e=!1){dr=e;const{props:n,children:r}=t.vnode,s=El(t);Ed(t,n,s,e),Td(t,r);const i=s?zd(t,e):void 0;return dr=!1,i}function zd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wn(new Proxy(t.ctx,gd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Sl(t):null;En(t),Pn();const i=Lt(r,t,0,[t.props,s]);if(Nn(),Qt(),Sc(i)){if(i.then(Qt,Qt),e)return i.then(o=>{aa(t,o,e)}).catch(o=>{hs(o,t,0)});t.asyncDep=i}else aa(t,i,e)}else Il(t,e)}function aa(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=zc(e)),Il(t,n)}let ca;function Il(t,e,n){const r=t.type;if(!t.render){if(!e&&ca&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ie(Ie({isCustomElement:i,delimiters:a},o),c);r.render=ca(s,l)}}t.render=r.render||Qe}En(t),Pn(),_d(t),Nn(),Qt()}function qd(t){return new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}})}function Sl(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=qd(t))},slots:t.slots,emit:t.emit,expose:e}}function Es(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zc(wn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yr)return Yr[n](t)}}))}function Wd(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function Kd(t){return W(t)&&"__vccOpts"in t}const Ye=(t,e)=>zf(t,e,dr);function Ny(){return Gd().slots}function Gd(){const t=ws();return t.setupContext||(t.setupContext=Sl(t))}function oo(t,e,n){const r=arguments.length;return r===2?_e(e)&&!L(e)?Qr(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qr(n)&&(n=[n]),Z(t,e,n))}const Jd="3.2.37",Yd="http://www.w3.org/2000/svg",Jt=typeof document!="undefined"?document:null,la=Jt&&Jt.createElement("template"),Xd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Jt.createElementNS(Yd,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{la.innerHTML=r?`<svg>${t}</svg>`:t;const a=la.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Qd(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zd(t,e,n){const r=t.style,s=ve(n);if(n&&!s){for(const i in n)Ei(r,i,n[i]);if(e&&!ve(e))for(const i in e)n[i]==null&&Ei(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ua=/\s*!important$/;function Ei(t,e,n){if(L(n))n.forEach(r=>Ei(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eh(t,e);ua.test(n)?t.setProperty(rn(r),n.replace(ua,""),"important"):t[r]=n}}const fa=["Webkit","Moz","ms"],Bs={};function eh(t,e){const n=Bs[e];if(n)return n;let r=at(e);if(r!=="filter"&&r in t)return Bs[e]=r;r=fs(r);for(let s=0;s<fa.length;s++){const i=fa[s]+r;if(i in t)return Bs[e]=i}return e}const da="http://www.w3.org/1999/xlink";function th(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(da,e.slice(6,e.length)):t.setAttributeNS(da,e,n);else{const i=Xu(e);n==null||i&&!Ec(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function nh(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ec(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Tl,rh]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ii=0;const sh=Promise.resolve(),ih=()=>{Ii=0},oh=()=>Ii||(sh.then(ih),Ii=Tl());function dt(t,e,n,r){t.addEventListener(e,n,r)}function ah(t,e,n,r){t.removeEventListener(e,n,r)}function ch(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=lh(e);if(r){const l=i[e]=uh(r,s);dt(t,a,l,c)}else o&&(ah(t,a,o,c),i[e]=void 0)}}const ha=/(?:Once|Passive|Capture)$/;function lh(t){let e;if(ha.test(t)){e={};let n;for(;n=t.match(ha);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[rn(t.slice(2)),e]}function uh(t,e){const n=r=>{const s=r.timeStamp||Tl();(rh||s>=n.attached-1)&&ze(fh(r,n.value),e,5,[r])};return n.value=t,n.attached=oh(),n}function fh(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const pa=/^on[a-z]/,dh=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Qd(t,r,s):e==="style"?Zd(t,n,r):ls(e)?Hi(e)||ch(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hh(t,e,r,s))?nh(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),th(t,e,r,s))};function hh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&pa.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||pa.test(e)&&ve(n)?!1:e in t}const wt="transition",jn="animation",Al=(t,{slots:e})=>oo(tl,ph(t),e);Al.displayName="Transition";const Rl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Al.props=Ie({},tl.props,Rl);const zt=(t,e=[])=>{L(t)?t.forEach(n=>n(...e)):t&&t(...e)},ma=t=>t?L(t)?t.some(e=>e.length>1):t.length>1:!1;function ph(t){const e={};for(const O in t)O in Rl||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=mh(s),x=y&&y[0],R=y&&y[1],{onBeforeEnter:E,onEnter:P,onEnterCancelled:U,onLeave:V,onLeaveCancelled:H,onBeforeAppear:Y=E,onAppear:B=P,onAppearCancelled:C=U}=e,j=(O,ne,pe)=>{qt(O,ne?u:a),qt(O,ne?l:o),pe&&pe()},G=(O,ne)=>{O._isLeaving=!1,qt(O,d),qt(O,m),qt(O,h),ne&&ne()},te=O=>(ne,pe)=>{const me=O?B:P,ge=()=>j(ne,O,pe);zt(me,[ne,ge]),ga(()=>{qt(ne,O?c:i),Et(ne,O?u:a),ma(me)||_a(ne,r,x,ge)})};return Ie(e,{onBeforeEnter(O){zt(E,[O]),Et(O,i),Et(O,o)},onBeforeAppear(O){zt(Y,[O]),Et(O,c),Et(O,l)},onEnter:te(!1),onAppear:te(!0),onLeave(O,ne){O._isLeaving=!0;const pe=()=>G(O,ne);Et(O,d),bh(),Et(O,h),ga(()=>{!O._isLeaving||(qt(O,d),Et(O,m),ma(V)||_a(O,r,R,pe))}),zt(V,[O,pe])},onEnterCancelled(O){j(O,!1),zt(U,[O])},onAppearCancelled(O){j(O,!0),zt(C,[O])},onLeaveCancelled(O){G(O),zt(H,[O])}})}function mh(t){if(t==null)return null;if(_e(t))return[js(t.enter),js(t.leave)];{const e=js(t);return[e,e]}}function js(t){return ar(t)}function Et(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function qt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ga(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let gh=0;function _a(t,e,n,r){const s=t._endId=++gh,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=_h(t,e);if(!o)return r();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,h),i()},h=m=>{m.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,h)}function _h(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(wt+"Delay"),i=r(wt+"Duration"),o=ba(s,i),a=r(jn+"Delay"),c=r(jn+"Duration"),l=ba(a,c);let u=null,d=0,h=0;e===wt?o>0&&(u=wt,d=o,h=i.length):e===jn?l>0&&(u=jn,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?wt:jn:null,h=u?u===wt?i.length:c.length:0);const m=u===wt&&/\b(transform|all)(,|$)/.test(n[wt+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:m}}function ba(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>va(n)+va(t[r])))}function va(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function bh(){return document.body.offsetHeight}const jt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>Fr(e,n):e};function vh(t){t.target.composing=!0}function ya(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wa={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=jt(s);const i=r||s.props&&s.props.type==="number";dt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ar(a)),t._assign(a)}),n&&dt(t,"change",()=>{t.value=t.value.trim()}),e||(dt(t,"compositionstart",vh),dt(t,"compositionend",ya),dt(t,"change",ya))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=jt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ar(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},yh={deep:!0,created(t,e,n){t._assign=jt(n),dt(t,"change",()=>{const r=t._modelValue,s=In(t),i=t.checked,o=t._assign;if(L(r)){const a=ji(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(On(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Cl(t,i))})},mounted:Ea,beforeUpdate(t,e,n){t._assign=jt(n),Ea(t,e,n)}};function Ea(t,{value:e,oldValue:n},r){t._modelValue=e,L(e)?t.checked=ji(e,r.props.value)>-1:On(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=en(e,Cl(t,!0)))}const wh={created(t,{value:e},n){t.checked=en(e,n.props.value),t._assign=jt(n),dt(t,"change",()=>{t._assign(In(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=jt(r),e!==n&&(t.checked=en(e,r.props.value))}},Eh={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=On(e);dt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ar(In(o)):In(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=jt(r)},mounted(t,{value:e}){Ia(t,e)},beforeUpdate(t,e,n){t._assign=jt(n)},updated(t,{value:e}){Ia(t,e)}};function Ia(t,e){const n=t.multiple;if(!(n&&!L(e)&&!On(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=In(i);if(n)L(e)?i.selected=ji(e,o)>-1:i.selected=e.has(o);else if(en(In(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function In(t){return"_value"in t?t._value:t.value}function Cl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Dy={created(t,e,n){Nr(t,e,n,null,"created")},mounted(t,e,n){Nr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Nr(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Nr(t,e,n,r,"updated")}};function Ih(t,e){switch(t){case"SELECT":return Eh;case"TEXTAREA":return wa;default:switch(e){case"checkbox":return yh;case"radio":return wh;default:return wa}}}function Nr(t,e,n,r,s){const o=Ih(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Sh=["ctrl","shift","alt","meta"],Th={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Sh.some(n=>t[`${n}Key`]&&!e.includes(n))},Ah=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Th[e[s]];if(i&&i(n,e))return}return t(n,...r)},Rh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},My=(t,e)=>n=>{if(!("key"in n))return;const r=rn(n.key);if(e.some(s=>s===r||Rh[s]===r))return t(n)},Ly={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Hn(t,!0),r.enter(t)):r.leave(t,()=>{Hn(t,!1)}):Hn(t,e))},beforeUnmount(t,{value:e}){Hn(t,e)}};function Hn(t,e){t.style.display=e?t._vod:"none"}const Ch=Ie({patchProp:dh},Xd);let Sa;function kh(){return Sa||(Sa=kd(Ch))}const xh=(...t)=>{const e=kh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Oh(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Oh(t){return ve(t)?document.querySelector(t):t}var Ph=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let kl;const Is=t=>kl=t,xl=Symbol();function Si(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var tr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(tr||(tr={}));function Nh(){const t=Cc(!0),e=t.run(()=>Qi({}));let n=[],r=[];const s=wn({install(i){Is(s),s._a=i,i.provide(xl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Ph?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ol=()=>{};function Ta(t,e,n,r=Ol){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ws()&&eo(s),s}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}function Ti(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Si(s)&&Si(r)&&t.hasOwnProperty(n)&&!be(r)&&!Mt(r)?t[n]=Ti(s,r):t[n]=r}return t}const Dh=Symbol();function Mh(t){return!Si(t)||!t.hasOwnProperty(Dh)}const{assign:ut}=Object;function Lh(t){return!!(be(t)&&t.effect)}function Uh(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Bf(n.state.value[t]);return ut(u,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=wn(Ye(()=>{Is(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return c=Pl(t,l,e,n,r,!0),c.$reset=function(){const d=s?s():{};this.$patch(h=>{ut(h,d)})},c}function Pl(t,e,n={},r,s,i){let o;const a=ut({actions:{}},n),c={deep:!0};let l,u,d=wn([]),h=wn([]),m;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Qi({});let x;function R(B){let C;l=u=!1,typeof B=="function"?(B(r.state.value[t]),C={type:tr.patchFunction,storeId:t,events:m}):(Ti(r.state.value[t],B),C={type:tr.patchObject,payload:B,storeId:t,events:m});const j=x=Symbol();ps().then(()=>{x===j&&(l=!0)}),u=!0,cn(d,C,r.state.value[t])}const E=Ol;function P(){o.stop(),d=[],h=[],r._s.delete(t)}function U(B,C){return function(){Is(r);const j=Array.from(arguments),G=[],te=[];function O(me){G.push(me)}function ne(me){te.push(me)}cn(h,{args:j,name:B,store:H,after:O,onError:ne});let pe;try{pe=C.apply(this&&this.$id===t?this:H,j)}catch(me){throw cn(te,me),me}return pe instanceof Promise?pe.then(me=>(cn(G,me),me)).catch(me=>(cn(te,me),Promise.reject(me))):(cn(G,pe),pe)}}const V={_p:r,$id:t,$onAction:Ta.bind(null,h),$patch:R,$reset:E,$subscribe(B,C={}){const j=Ta(d,B,C.detached,()=>G()),G=o.run(()=>Xn(()=>r.state.value[t],te=>{(C.flush==="sync"?u:l)&&B({storeId:t,type:tr.direct,events:m},te)},ut({},c,C)));return j},$dispose:P},H=Dn(ut({},V));r._s.set(t,H);const Y=r._e.run(()=>(o=Cc(),o.run(()=>e())));for(const B in Y){const C=Y[B];if(be(C)&&!Lh(C)||Mt(C))i||(y&&Mh(C)&&(be(C)?C.value=y[B]:Ti(C,y[B])),r.state.value[t][B]=C);else if(typeof C=="function"){const j=U(B,C);Y[B]=j,a.actions[B]=C}}return ut(H,Y),ut(ee(H),Y),Object.defineProperty(H,"$state",{get:()=>r.state.value[t],set:B=>{R(C=>{ut(C,B)})}}),r._p.forEach(B=>{ut(H,o.run(()=>B({store:H,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(H.$state,y),l=!0,u=!0,H}function ao(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=ws();return a=a||l&&Ze(xl),a&&Is(a),a=kl,a._s.has(r)||(i?Pl(r,e,s,a):Uh(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Nl=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Mn=t=>Nl?Symbol(t):"_vr_"+t,Fh=Mn("rvlm"),Aa=Mn("rvd"),Ss=Mn("r"),co=Mn("rl"),Ai=Mn("rvl"),pn=typeof window!="undefined";function $h(t){return t.__esModule||Nl&&t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function Hs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const nr=()=>{},Bh=/\/$/,jh=t=>t.replace(Bh,"");function Vs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=qh(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Hh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ra(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Vh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Sn(e.matched[r],n.matched[s])&&Dl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zh(t[n],e[n]))return!1;return!0}function zh(t,e){return Array.isArray(t)?Ca(t,e):Array.isArray(e)?Ca(e,t):t===e}function Ca(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var hr;(function(t){t.pop="pop",t.push="push"})(hr||(hr={}));var rr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(rr||(rr={}));function Wh(t){if(!t)if(pn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jh(t)}const Kh=/^[^#]+#/;function Gh(t,e){return t.replace(Kh,"#")+e}function Jh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ts=()=>({left:window.pageXOffset,top:window.pageYOffset});function Yh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Jh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ka(t,e){return(history.state?history.state.position-e:-1)+t}const Ri=new Map;function Xh(t,e){Ri.set(t,e)}function Qh(t){const e=Ri.get(t);return Ri.delete(t),e}let Zh=()=>location.protocol+"//"+location.host;function Ml(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ra(c,"")}return Ra(n,t)+r+s}function ep(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Ml(t,location),y=n.value,x=e.value;let R=0;if(h){if(n.value=m,e.value=h,o&&o===y){o=null;return}R=x?h.position-x.position:0}else r(m);s.forEach(E=>{E(n.value,y,{delta:R,type:hr.pop,direction:R?R>0?rr.forward:rr.back:rr.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(ae({},h.state,{scroll:Ts()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function xa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ts():null}}function tp(t){const{history:e,location:n}=window,r={value:Ml(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Zh()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=ae({},e.state,xa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ae({},s.value,e.state,{forward:c,scroll:Ts()});i(u.current,u,!0);const d=ae({},xa(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function np(t){t=Wh(t);const e=tp(t),n=ep(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ae({location:"",base:t,go:r,createHref:Gh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rp(t){return typeof t=="string"||t&&typeof t=="object"}function Ll(t){return typeof t=="string"||typeof t=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ul=Mn("nf");var Oa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Oa||(Oa={}));function Tn(t,e){return ae(new Error,{type:t,[Ul]:!0},e)}function St(t,e){return t instanceof Error&&Ul in t&&(e==null||!!(t.type&e))}const Pa="[^/]+?",sp={sensitive:!1,strict:!1,start:!0,end:!0},ip=/[.+*?^${}()[\]/\\]/g;function op(t,e){const n=ae({},sp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const h=l[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(ip,"\\$&"),m+=40;else if(h.type===1){const{value:y,repeatable:x,optional:R,regexp:E}=h;i.push({name:y,repeatable:x,optional:R});const P=E||Pa;if(P!==Pa){m+=10;try{new RegExp(`(${P})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+V.message)}}let U=x?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(U=R&&l.length<2?`(?:/${U})`:"/"+U),R&&(U+="?"),s+=U,m+=20,R&&(m+=-8),x&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",y=i[h-1];d[y.name]=m&&y.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:x,optional:R}=m,E=y in l?l[y]:"";if(Array.isArray(E)&&!x)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(E)?E.join("/"):E;if(!P)if(R)h.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ap(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function cp(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ap(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Na(r))return 1;if(Na(s))return-1}return s.length-r.length}function Na(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lp={type:0,value:""},up=/[a-zA-Z0-9_]/;function fp(t){if(!t)return[[]];if(t==="/")return[[lp]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:up.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function dp(t,e,n){const r=op(fp(t.path),n),s=ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hp(t,e){const n=[],r=new Map;e=Ma({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,h){const m=!h,y=mp(u);y.aliasOf=h&&h.record;const x=Ma(e,u),R=[y];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of U)R.push(ae({},y,{components:h?h.record.components:y.components,path:V,aliasOf:h?h.record:y}))}let E,P;for(const U of R){const{path:V}=U;if(d&&V[0]!=="/"){const H=d.record.path,Y=H[H.length-1]==="/"?"":"/";U.path=d.record.path+(V&&Y+V)}if(E=dp(U,d,x),h?h.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),m&&u.name&&!Da(E)&&o(u.name)),"children"in y){const H=y.children;for(let Y=0;Y<H.length;Y++)i(H[Y],E,h&&h.children[Y])}h=h||E,c(E)}return P?()=>{o(P)}:nr}function o(u){if(Ll(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&cp(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Fl(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Da(u)&&r.set(u.record.name,u)}function l(u,d){let h,m={},y,x;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Tn(1,{location:u});x=h.record.name,m=ae(pp(d.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),y=h.stringify(m)}else if("path"in u)y=u.path,h=n.find(P=>P.re.test(y)),h&&(m=h.parse(y),x=h.record.name);else{if(h=d.name?r.get(d.name):n.find(P=>P.re.test(d.path)),!h)throw Tn(1,{location:u,currentLocation:d});x=h.record.name,m=ae({},d.params,u.params),y=h.stringify(m)}const R=[];let E=h;for(;E;)R.unshift(E.record),E=E.parent;return{name:x,path:y,params:m,matched:R,meta:_p(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function pp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function gp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Da(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _p(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Ma(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Fl(t,e){return e.children.some(n=>n===t||Fl(t,n))}const $l=/#/g,bp=/&/g,vp=/\//g,yp=/=/g,wp=/\?/g,Bl=/\+/g,Ep=/%5B/g,Ip=/%5D/g,jl=/%5E/g,Sp=/%60/g,Hl=/%7B/g,Tp=/%7C/g,Vl=/%7D/g,Ap=/%20/g;function lo(t){return encodeURI(""+t).replace(Tp,"|").replace(Ep,"[").replace(Ip,"]")}function Rp(t){return lo(t).replace(Hl,"{").replace(Vl,"}").replace(jl,"^")}function Ci(t){return lo(t).replace(Bl,"%2B").replace(Ap,"+").replace($l,"%23").replace(bp,"%26").replace(Sp,"`").replace(Hl,"{").replace(Vl,"}").replace(jl,"^")}function Cp(t){return Ci(t).replace(yp,"%3D")}function kp(t){return lo(t).replace($l,"%23").replace(wp,"%3F")}function xp(t){return t==null?"":kp(t).replace(vp,"%2F")}function Zr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Op(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Bl," "),o=i.indexOf("="),a=Zr(o<0?i:i.slice(0,o)),c=o<0?null:Zr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function La(t){let e="";for(let n in t){const r=t[n];if(n=Cp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ci(i)):[r&&Ci(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Pp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Vn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ct(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(Tn(4,{from:n,to:e})):d instanceof Error?a(d):rp(d)?a(Tn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function zs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Np(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Ct(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=$h(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ct(h,n,r,i,o)()}))}}return s}function Np(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ua(t){const e=Ze(Ss),n=Ze(co),r=Ye(()=>e.resolve(mt(t.to))),s=Ye(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Sn.bind(null,u));if(h>-1)return h;const m=Fa(c[l-2]);return l>1&&Fa(u)===m&&d[d.length-1].path!==m?d.findIndex(Sn.bind(null,c[l-2])):h}),i=Ye(()=>s.value>-1&&Up(n.params,r.value.params)),o=Ye(()=>s.value>-1&&s.value===n.matched.length-1&&Dl(n.params,r.value.params));function a(c={}){return Lp(c)?e[mt(t.replace)?"replace":"push"](mt(t.to)).catch(nr):Promise.resolve()}return{route:r,href:Ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Dp=We({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ua,setup(t,{slots:e}){const n=Dn(Ua(t)),{options:r}=Ze(Ss),s=Ye(()=>({[$a(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$a(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:oo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Mp=Dp;function Lp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Up(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $a=(t,e,n)=>t!=null?t:e!=null?e:n,Fp=We({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ze(Ai),s=Ye(()=>t.route||r.value),i=Ze(Aa,0),o=Ye(()=>s.value.matched[i]);$r(Aa,i+1),$r(Fh,o),$r(Ai,s);const a=Qi();return Xn(()=>[a.value,o.value,t.name],([c,l,u],[d,h,m])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!Sn(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],d=t.name;if(!u)return Ba(n.default,{Component:u,route:c});const h=l.props[t.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,x=oo(u,ae({},m,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return Ba(n.default,{Component:x,route:c})||x}}});function Ba(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $p=Fp;function Bp(t){const e=hp(t.routes,t),n=t.parseQuery||Op,r=t.stringifyQuery||La,s=t.history,i=Vn(),o=Vn(),a=Vn(),c=Uf(It);let l=It;pn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hs.bind(null,_=>""+_),d=Hs.bind(null,xp),h=Hs.bind(null,Zr);function m(_,D){let A,M;return Ll(_)?(A=e.getRecordMatcher(_),M=D):M=_,e.addRoute(M,A)}function y(_){const D=e.getRecordMatcher(_);D&&e.removeRoute(D)}function x(){return e.getRoutes().map(_=>_.record)}function R(_){return!!e.getRecordMatcher(_)}function E(_,D){if(D=ae({},D||c.value),typeof _=="string"){const K=Vs(n,_,D.path),f=e.resolve({path:K.path},D),p=s.createHref(K.fullPath);return ae(K,f,{params:h(f.params),hash:Zr(K.hash),redirectedFrom:void 0,href:p})}let A;if("path"in _)A=ae({},_,{path:Vs(n,_.path,D.path).path});else{const K=ae({},_.params);for(const f in K)K[f]==null&&delete K[f];A=ae({},_,{params:d(_.params)}),D.params=d(D.params)}const M=e.resolve(A,D),se=_.hash||"";M.params=u(h(M.params));const ue=Hh(r,ae({},_,{hash:Rp(se),path:M.path})),J=s.createHref(ue);return ae({fullPath:ue,hash:se,query:r===La?Pp(_.query):_.query||{}},M,{redirectedFrom:void 0,href:J})}function P(_){return typeof _=="string"?Vs(n,_,c.value.path):ae({},_)}function U(_,D){if(l!==_)return Tn(8,{from:D,to:_})}function V(_){return B(_)}function H(_){return V(ae(P(_),{replace:!0}))}function Y(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:A}=D;let M=typeof A=="function"?A(_):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=P(M):{path:M},M.params={}),ae({query:_.query,hash:_.hash,params:_.params},M)}}function B(_,D){const A=l=E(_),M=c.value,se=_.state,ue=_.force,J=_.replace===!0,K=Y(A);if(K)return B(ae(P(K),{state:se,force:ue,replace:J}),D||A);const f=A;f.redirectedFrom=D;let p;return!ue&&Vh(r,M,A)&&(p=Tn(16,{to:f,from:M}),on(M,M,!0,!1)),(p?Promise.resolve(p):j(f,M)).catch(g=>St(g)?St(g,2)?g:Ne(g):le(g,f,M)).then(g=>{if(g){if(St(g,2))return B(ae(P(g.to),{state:se,force:ue,replace:J}),D||f)}else g=te(f,M,!0,J,se);return G(f,M,g),g})}function C(_,D){const A=U(_,D);return A?Promise.reject(A):Promise.resolve()}function j(_,D){let A;const[M,se,ue]=jp(_,D);A=zs(M.reverse(),"beforeRouteLeave",_,D);for(const K of M)K.leaveGuards.forEach(f=>{A.push(Ct(f,_,D))});const J=C.bind(null,_,D);return A.push(J),ln(A).then(()=>{A=[];for(const K of i.list())A.push(Ct(K,_,D));return A.push(J),ln(A)}).then(()=>{A=zs(se,"beforeRouteUpdate",_,D);for(const K of se)K.updateGuards.forEach(f=>{A.push(Ct(f,_,D))});return A.push(J),ln(A)}).then(()=>{A=[];for(const K of _.matched)if(K.beforeEnter&&!D.matched.includes(K))if(Array.isArray(K.beforeEnter))for(const f of K.beforeEnter)A.push(Ct(f,_,D));else A.push(Ct(K.beforeEnter,_,D));return A.push(J),ln(A)}).then(()=>(_.matched.forEach(K=>K.enterCallbacks={}),A=zs(ue,"beforeRouteEnter",_,D),A.push(J),ln(A))).then(()=>{A=[];for(const K of o.list())A.push(Ct(K,_,D));return A.push(J),ln(A)}).catch(K=>St(K,8)?K:Promise.reject(K))}function G(_,D,A){for(const M of a.list())M(_,D,A)}function te(_,D,A,M,se){const ue=U(_,D);if(ue)return ue;const J=D===It,K=pn?history.state:{};A&&(M||J?s.replace(_.fullPath,ae({scroll:J&&K&&K.scroll},se)):s.push(_.fullPath,se)),c.value=_,on(_,D,A,J),Ne()}let O;function ne(){O||(O=s.listen((_,D,A)=>{const M=E(_),se=Y(M);if(se){B(ae(se,{replace:!0}),M).catch(nr);return}l=M;const ue=c.value;pn&&Xh(ka(ue.fullPath,A.delta),Ts()),j(M,ue).catch(J=>St(J,12)?J:St(J,2)?(B(J.to,M).then(K=>{St(K,20)&&!A.delta&&A.type===hr.pop&&s.go(-1,!1)}).catch(nr),Promise.reject()):(A.delta&&s.go(-A.delta,!1),le(J,M,ue))).then(J=>{J=J||te(M,ue,!1),J&&(A.delta?s.go(-A.delta,!1):A.type===hr.pop&&St(J,20)&&s.go(-1,!1)),G(M,ue,J)}).catch(nr)}))}let pe=Vn(),me=Vn(),ge;function le(_,D,A){Ne(_);const M=me.list();return M.length?M.forEach(se=>se(_,D,A)):console.error(_),Promise.reject(_)}function re(){return ge&&c.value!==It?Promise.resolve():new Promise((_,D)=>{pe.add([_,D])})}function Ne(_){return ge||(ge=!_,ne(),pe.list().forEach(([D,A])=>_?A(_):D()),pe.reset()),_}function on(_,D,A,M){const{scrollBehavior:se}=t;if(!pn||!se)return Promise.resolve();const ue=!A&&Qh(ka(_.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return ps().then(()=>se(_,D,ue)).then(J=>J&&Yh(J)).catch(J=>le(J,_,D))}const ct=_=>s.go(_);let tt;const je=new Set;return{currentRoute:c,addRoute:m,removeRoute:y,hasRoute:R,getRoutes:x,resolve:E,options:t,push:V,replace:H,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:re,install(_){const D=this;_.component("RouterLink",Mp),_.component("RouterView",$p),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>mt(c)}),pn&&!tt&&c.value===It&&(tt=!0,V(s.location).catch(se=>{}));const A={};for(const se in It)A[se]=Ye(()=>c.value[se]);_.provide(Ss,D),_.provide(co,Dn(A)),_.provide(Ai,c);const M=_.unmount;je.add(_),_.unmount=function(){je.delete(_),je.size<1&&(l=It,O&&O(),O=null,c.value=It,tt=!1,ge=!1),M()}}}}function ln(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function jp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Sn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Sn(l,c))||s.push(c))}return[n,r,s]}function Hp(){return Ze(Ss)}function Uy(){return Ze(co)}var uo={exports:{}},zl=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},Vp=zl,fo=Object.prototype.toString,ho=function(t){return function(e){var n=fo.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function sn(t){return t=t.toLowerCase(),function(n){return ho(n)===t}}function po(t){return Array.isArray(t)}function es(t){return typeof t=="undefined"}function zp(t){return t!==null&&!es(t)&&t.constructor!==null&&!es(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var ql=sn("ArrayBuffer");function qp(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ql(t.buffer),e}function Wp(t){return typeof t=="string"}function Kp(t){return typeof t=="number"}function Wl(t){return t!==null&&typeof t=="object"}function jr(t){if(ho(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var Gp=sn("Date"),Jp=sn("File"),Yp=sn("Blob"),Xp=sn("FileList");function mo(t){return fo.call(t)==="[object Function]"}function Qp(t){return Wl(t)&&mo(t.pipe)}function Zp(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||fo.call(t)===e||mo(t.toString)&&t.toString()===e)}var em=sn("URLSearchParams");function tm(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function nm(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function go(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),po(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function ki(){var t={};function e(s,i){jr(t[i])&&jr(s)?t[i]=ki(t[i],s):jr(s)?t[i]=ki({},s):po(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)go(arguments[n],e);return t}function rm(t,e,n){return go(e,function(s,i){n&&typeof s=="function"?t[i]=Vp(s,n):t[i]=s}),t}function sm(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function im(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function om(t,e,n){var r,s,i,o={};e=e||{};do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)i=r[s],o[i]||(e[i]=t[i],o[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function am(t,e,n){t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return r!==-1&&r===n}function cm(t){if(!t)return null;var e=t.length;if(es(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n}var lm=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),Se={isArray:po,isArrayBuffer:ql,isBuffer:zp,isFormData:Zp,isArrayBufferView:qp,isString:Wp,isNumber:Kp,isObject:Wl,isPlainObject:jr,isUndefined:es,isDate:Gp,isFile:Jp,isBlob:Yp,isFunction:mo,isStream:Qp,isURLSearchParams:em,isStandardBrowserEnv:nm,forEach:go,merge:ki,extend:rm,trim:tm,stripBOM:sm,inherits:im,toFlatObject:om,kindOf:ho,kindOfTest:sn,endsWith:am,toArray:cm,isTypedArray:lm,isFileList:Xp},un=Se;function ja(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Kl=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(un.isURLSearchParams(n))s=n.toString();else{var i=[];un.forEach(n,function(c,l){c===null||typeof c=="undefined"||(un.isArray(c)?l=l+"[]":c=[c],un.forEach(c,function(d){un.isDate(d)?d=d.toISOString():un.isObject(d)&&(d=JSON.stringify(d)),i.push(ja(l)+"="+ja(d))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},um=Se;function As(){this.handlers=[]}As.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};As.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};As.prototype.forEach=function(e){um.forEach(this.handlers,function(r){r!==null&&e(r)})};var fm=As,dm=Se,hm=function(e,n){dm.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},Gl=Se;function An(t,e,n,r,s){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}Gl.inherits(An,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Jl=An.prototype,Yl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Yl[t]={value:t}});Object.defineProperties(An,Yl);Object.defineProperty(Jl,"isAxiosError",{value:!0});An.from=function(t,e,n,r,s,i){var o=Object.create(Jl);return Gl.toFlatObject(t,o,function(c){return c!==Error.prototype}),An.call(o,t.message,e,n,r,s),o.name=t.name,i&&Object.assign(o,i),o};var Ln=An,Xl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ge=Se;function pm(t,e){e=e||new FormData;var n=[];function r(i){return i===null?"":Ge.isDate(i)?i.toISOString():Ge.isArrayBuffer(i)||Ge.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function s(i,o){if(Ge.isPlainObject(i)||Ge.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),Ge.forEach(i,function(c,l){if(!Ge.isUndefined(c)){var u=o?o+"."+l:l,d;if(c&&!o&&typeof c=="object"){if(Ge.endsWith(l,"{}"))c=JSON.stringify(c);else if(Ge.endsWith(l,"[]")&&(d=Ge.toArray(c))){d.forEach(function(h){!Ge.isUndefined(h)&&e.append(u,r(h))});return}}s(c,u)}}),n.pop()}else e.append(o,r(i))}return s(t),e}var Ql=pm,qs=Ln,mm=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(new qs("Request failed with status code "+r.status,[qs.ERR_BAD_REQUEST,qs.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))},Dr=Se,gm=Dr.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),Dr.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),Dr.isString(i)&&c.push("path="+i),Dr.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),_m=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},bm=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},vm=_m,ym=bm,Zl=function(e,n){return e&&!vm(n)?ym(e,n):n},Ws=Se,wm=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Em=function(e){var n={},r,s,i;return e&&Ws.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=Ws.trim(a.substr(0,i)).toLowerCase(),s=Ws.trim(a.substr(i+1)),r){if(n[r]&&wm.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},Ha=Se,Im=Ha.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=Ha.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),xi=Ln,Sm=Se;function eu(t){xi.call(this,t==null?"canceled":t,xi.ERR_CANCELED),this.name="CanceledError"}Sm.inherits(eu,xi,{__CANCEL__:!0});var Rs=eu,Tm=function(e){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""},zn=Se,Am=mm,Rm=gm,Cm=Kl,km=Zl,xm=Em,Om=Im,Pm=Xl,lt=Ln,Nm=Rs,Dm=Tm,Va=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}zn.isFormData(i)&&zn.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(d+":"+h)}var m=km(e.baseURL,e.url);u.open(e.method.toUpperCase(),Cm(m,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function y(){if(!!u){var E="getAllResponseHeaders"in u?xm(u.getAllResponseHeaders()):null,P=!a||a==="text"||a==="json"?u.responseText:u.response,U={data:P,status:u.status,statusText:u.statusText,headers:E,config:e,request:u};Am(function(H){r(H),l()},function(H){s(H),l()},U),u=null}}if("onloadend"in u?u.onloadend=y:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},u.onabort=function(){!u||(s(new lt("Request aborted",lt.ECONNABORTED,e,u)),u=null)},u.onerror=function(){s(new lt("Network Error",lt.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var P=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",U=e.transitional||Pm;e.timeoutErrorMessage&&(P=e.timeoutErrorMessage),s(new lt(P,U.clarifyTimeoutError?lt.ETIMEDOUT:lt.ECONNABORTED,e,u)),u=null},zn.isStandardBrowserEnv()){var x=(e.withCredentials||Om(m))&&e.xsrfCookieName?Rm.read(e.xsrfCookieName):void 0;x&&(o[e.xsrfHeaderName]=x)}"setRequestHeader"in u&&zn.forEach(o,function(P,U){typeof i=="undefined"&&U.toLowerCase()==="content-type"?delete o[U]:u.setRequestHeader(U,P)}),zn.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(E){!u||(s(!E||E&&E.type?new Nm:E),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null);var R=Dm(m);if(R&&["http","https","file"].indexOf(R)===-1){s(new lt("Unsupported protocol "+R+":",lt.ERR_BAD_REQUEST,e));return}u.send(i)})},Mm=null,ye=Se,za=hm,qa=Ln,Lm=Xl,Um=Ql,Fm={"Content-Type":"application/x-www-form-urlencoded"};function Wa(t,e){!ye.isUndefined(t)&&ye.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function $m(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Va),t}function Bm(t,e,n){if(ye.isString(t))try{return(e||JSON.parse)(t),ye.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var Cs={transitional:Lm,adapter:$m(),transformRequest:[function(e,n){if(za(n,"Accept"),za(n,"Content-Type"),ye.isFormData(e)||ye.isArrayBuffer(e)||ye.isBuffer(e)||ye.isStream(e)||ye.isFile(e)||ye.isBlob(e))return e;if(ye.isArrayBufferView(e))return e.buffer;if(ye.isURLSearchParams(e))return Wa(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r=ye.isObject(e),s=n&&n["Content-Type"],i;if((i=ye.isFileList(e))||r&&s==="multipart/form-data"){var o=this.env&&this.env.FormData;return Um(i?{"files[]":e}:e,o&&new o)}else if(r||s==="application/json")return Wa(n,"application/json"),Bm(e);return e}],transformResponse:[function(e){var n=this.transitional||Cs.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&ye.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?qa.from(o,qa.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mm},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ye.forEach(["delete","get","head"],function(e){Cs.headers[e]={}});ye.forEach(["post","put","patch"],function(e){Cs.headers[e]=ye.merge(Fm)});var _o=Cs,jm=Se,Hm=_o,Vm=function(e,n,r){var s=this||Hm;return jm.forEach(r,function(o){e=o.call(s,e,n)}),e},tu=function(e){return!!(e&&e.__CANCEL__)},Ka=Se,Ks=Vm,zm=tu,qm=_o,Wm=Rs;function Gs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Wm}var Km=function(e){Gs(e),e.headers=e.headers||{},e.data=Ks.call(e,e.data,e.headers,e.transformRequest),e.headers=Ka.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ka.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||qm.adapter;return n(e).then(function(s){return Gs(e),s.data=Ks.call(e,s.data,s.headers,e.transformResponse),s},function(s){return zm(s)||(Gs(e),s&&s.response&&(s.response.data=Ks.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},Me=Se,nu=function(e,n){n=n||{};var r={};function s(u,d){return Me.isPlainObject(u)&&Me.isPlainObject(d)?Me.merge(u,d):Me.isPlainObject(d)?Me.merge({},d):Me.isArray(d)?d.slice():d}function i(u){if(Me.isUndefined(n[u])){if(!Me.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!Me.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(Me.isUndefined(n[u])){if(!Me.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function c(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return Me.forEach(Object.keys(e).concat(Object.keys(n)),function(d){var h=l[d]||i,m=h(d);Me.isUndefined(m)&&h!==c||(r[d]=m)}),r},ru={version:"0.27.2"},Gm=ru.version,kt=Ln,bo={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){bo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Ga={};bo.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Gm+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new kt(s(o," has been removed"+(n?" in "+n:"")),kt.ERR_DEPRECATED);return n&&!Ga[o]&&(Ga[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Jm(t,e,n){if(typeof t!="object")throw new kt("options must be an object",kt.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new kt("option "+i+" must be "+c,kt.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new kt("Unknown option "+i,kt.ERR_BAD_OPTION)}}var Ym={assertOptions:Jm,validators:bo},su=Se,Xm=Kl,Ja=fm,Ya=Km,ks=nu,Qm=Zl,iu=Ym,fn=iu.validators;function Rn(t){this.defaults=t,this.interceptors={request:new Ja,response:new Ja}}Rn.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ks(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&iu.assertOptions(r,{silentJSONParsing:fn.transitional(fn.boolean),forcedJSONParsing:fn.transitional(fn.boolean),clarifyTimeoutError:fn.transitional(fn.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(i=i&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var a;if(!i){var c=[Ya,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var l=n;s.length;){var u=s.shift(),d=s.shift();try{l=u(l)}catch(h){d(h);break}}try{a=Ya(l)}catch(h){return Promise.reject(h)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};Rn.prototype.getUri=function(e){e=ks(this.defaults,e);var n=Qm(e.baseURL,e.url);return Xm(n,e.params,e.paramsSerializer)};su.forEach(["delete","get","head","options"],function(e){Rn.prototype[e]=function(n,r){return this.request(ks(r||{},{method:e,url:n,data:(r||{}).data}))}});su.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(ks(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Rn.prototype[e]=n(),Rn.prototype[e+"Form"]=n(!0)});var Zm=Rn,eg=Rs;function Cn(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new eg(s),e(n.reason))})}Cn.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Cn.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Cn.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};Cn.source=function(){var e,n=new Cn(function(s){e=s});return{token:n,cancel:e}};var tg=Cn,ng=function(e){return function(r){return e.apply(null,r)}},rg=Se,sg=function(e){return rg.isObject(e)&&e.isAxiosError===!0},Xa=Se,ig=zl,Hr=Zm,og=nu,ag=_o;function ou(t){var e=new Hr(t),n=ig(Hr.prototype.request,e);return Xa.extend(n,Hr.prototype,e),Xa.extend(n,e),n.create=function(s){return ou(og(t,s))},n}var Pe=ou(ag);Pe.Axios=Hr;Pe.CanceledError=Rs;Pe.CancelToken=tg;Pe.isCancel=tu;Pe.VERSION=ru.version;Pe.toFormData=Ql;Pe.AxiosError=Ln;Pe.Cancel=Pe.CanceledError;Pe.all=function(e){return Promise.all(e)};Pe.spread=ng;Pe.isAxiosError=sg;uo.exports=Pe;uo.exports.default=Pe;var cg=uo.exports;const lg={baseURL:"http://localhost:3001/api/v1",headers:{"X-Requested-With":"XMLHttpRequest"}},ug=()=>async t=>{const e=window.localStorage.getItem("accessToken");return e&&typeof t!="undefined"&&(t.headers.Authorization=`Bearer ${e}`),t},fg=t=>{Oi.interceptors.request.use(ug(),e=>Promise.reject(e)),Oi.interceptors.response.use(e=>e,async e=>(typeof e=="object"&&(e.response.status===401||e.response.status),Promise.reject(e)))},Oi=cg.create(lg);class Oe{constructor(){vt(this,"requestConfig",{method:"",url:"",params:{},headers:{},data:{}});vt(this,"baseUrl","http://localhost:3001/api/v1/")}method(e){return this.requestConfig.method=e,this}url(e){return this.requestConfig.url=this.baseUrl+e,this}params(e){return this.requestConfig.params=e,this}headers(e){return this.requestConfig.headers=e,this}data(e){return this.requestConfig.data=e,this}send(){if(this.requestConfig.method===""||this.requestConfig.url==="")throw new Error("[RequestBuilder] No method or url defined.");return Oi(this.requestConfig)}mock(e){const n=e?void 0:new Error("Mocked error in RequestBuilder");return Promise.resolve({error:n,item:{}})}}const vo=ao("auth",{state:()=>({isAuthenticated:!1,name:"",uid:""}),actions:{async initAuth(){const t=window.localStorage.getItem("accessToken"),e=window.localStorage.getItem("refreshToken");if(t&&e)try{const{data:{details:{firstName:n,lastName:r,uid:s}}}=await new Oe().method("post").url("auth/decodeAccessToken").data({accessToken:t}).send();this.name=`${n} ${r}`,this.uid=s,this.updateAuthState(!0,t,e)}catch(n){console.log(n),this.updateAuthState()}},updateAuthState(t=!1,e="",n=""){this.isAuthenticated=t,t?(window.localStorage.setItem("accessToken",e),window.localStorage.setItem("refreshToken",n)):(window.localStorage.removeItem("accessToken"),window.localStorage.removeItem("refreshToken"))}}}),au=ao("ui",{state:()=>({title:""})});function Js(t,e){return t.find(n=>n.id===e)}function cu(t,e){return t.findIndex(n=>n.id===e)}function Ys(t,e,n){const r=cu(t,e);t[r]={...t[r],...n}}function Xs(t,e){const n=cu(t,e);t.splice(n,1)}const Ve=ao("data",{state:()=>({fees:[],families:[],students:[]}),actions:{addFee(t){this.fees.push(t)},updateFee(t,e){Ys(this.fees,t,e)},removeFee(t){Xs(this.fees,t)},getFeeById(t){return Js(this.fees,t)},addFamily(t){this.families.push(t)},updateFamily(t,e){Ys(this.families,t,e)},removeFamily(t){Xs(this.families,t)},getFamilyById(t){return Js(this.families,t)},addStudent(t){this.students.push(t)},updateStudent(t,e){Ys(this.students,t,e)},removeStudent(t){Xs(this.students,t)},getStudentById(t){return Js(this.students,t)}}}),dg="modulepreload",Qa={},hg="/",Le=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${hg}${r}`,r in Qa)return;Qa[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":dg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},he={home:"HOME",login:"LOGIN",register:"REGISTER",dashboard:"DASHBOARD",families:"FAMILIES",family:"FAMILY",students:"STUDENTS",student:"STUDENT",fees:"FEES",fee:"FEE"},Pi=[{path:"/",name:he.home,component:()=>Le(()=>import("./HomeMain.de3a9600.js"),[]),meta:{requiresAuth:!1,title:"Home"}},{path:"/sign-in",name:he.login,component:()=>Le(()=>import("./LoginMain.d7c5b965.js"),["assets/LoginMain.d7c5b965.js","assets/AppFormGroup.e4b7d94f.js","assets/AppButton.2eecd9ad.js","assets/AppControl.fa195ce8.js","assets/AppControl.7f360234.css","assets/AppCard.efc37f1e.js","assets/AppAlert.cc2b918f.js"]),meta:{requiresAuth:!1,title:"Sign In"}},{path:"/sign-up",name:he.register,component:()=>Le(()=>import("./RegisterMain.f95e95d8.js"),["assets/RegisterMain.f95e95d8.js","assets/AppFormGroup.e4b7d94f.js","assets/AppButton.2eecd9ad.js","assets/AppControl.fa195ce8.js","assets/AppControl.7f360234.css","assets/AppCard.efc37f1e.js","assets/AppAlert.cc2b918f.js"]),meta:{requiresAuth:!1,title:"Sign Up"}},{path:"/dashboard",name:he.dashboard,component:()=>Le(()=>import("./DashboardMain.a0b4aae9.js"),[]),meta:{requiresAuth:!0,title:"Dashboard"}},{path:"/fees",component:()=>Le(()=>import("./FeesMain.fe3932a3.js"),["assets/FeesMain.fe3932a3.js","assets/AppButton.2eecd9ad.js","assets/index.da74d77b.js","assets/AppControl.fa195ce8.js","assets/AppControl.7f360234.css","assets/AppFormGroup.e4b7d94f.js"]),name:he.fees,meta:{requiresAuth:!0,title:"Fees"},children:[{path:"",name:he.fees,component:()=>Le(()=>import("./FeesList.639382a3.js"),["assets/FeesList.639382a3.js","assets/AppButton.2eecd9ad.js","assets/AppCard.efc37f1e.js","assets/AppControl.fa195ce8.js","assets/AppControl.7f360234.css"]),meta:{requiresAuth:!0}},{path:":id",name:he.fee,component:()=>Le(()=>import("./FeesItemDetails.02380d97.js"),["assets/FeesItemDetails.02380d97.js","assets/AppButton.2eecd9ad.js","assets/AppCard.efc37f1e.js"]),meta:{requiresAuth:!0}}]},{path:"/students",name:he.students,component:()=>Le(()=>import("./StudentsMain.33081efe.js"),["assets/StudentsMain.33081efe.js","assets/AppFormGroup.e4b7d94f.js","assets/AppControl.fa195ce8.js","assets/AppControl.7f360234.css","assets/AppButton.2eecd9ad.js","assets/index.da74d77b.js"]),meta:{requiresAuth:!0,title:"Students"},children:[{path:"",name:he.students,component:()=>Le(()=>import("./StudentsList.9858d699.js"),["assets/StudentsList.9858d699.js","assets/AppControl.fa195ce8.js","assets/AppControl.7f360234.css","assets/AppButton.2eecd9ad.js","assets/AppCard.efc37f1e.js"]),meta:{requiresAuth:!0}},{path:":id",name:he.student,component:()=>Le(()=>import("./StudentsItemDetails.bf6caa89.js"),["assets/StudentsItemDetails.bf6caa89.js","assets/AppButton.2eecd9ad.js","assets/AppCard.efc37f1e.js"]),meta:{requiresAuth:!0}}]},{path:"/families",name:he.families,component:()=>Le(()=>import("./FamiliesMain.1e45e2d8.js"),["assets/FamiliesMain.1e45e2d8.js","assets/AppButton.2eecd9ad.js","assets/index.da74d77b.js","assets/AppControl.fa195ce8.js","assets/AppControl.7f360234.css","assets/AppFormGroup.e4b7d94f.js"]),meta:{requiresAuth:!0,title:"Families"},children:[{path:"",name:he.families,component:()=>Le(()=>import("./FamiliesList.3650632d.js"),["assets/FamiliesList.3650632d.js","assets/AppButton.2eecd9ad.js","assets/AppCard.efc37f1e.js","assets/AppControl.fa195ce8.js","assets/AppControl.7f360234.css"]),meta:{requiresAuth:!0}},{path:":id",name:he.family,component:()=>Le(()=>import("./FamiliesItemDetails.118a7669.js"),["assets/FamiliesItemDetails.118a7669.js","assets/AppButton.2eecd9ad.js","assets/AppCard.efc37f1e.js"]),meta:{requiresAuth:!0}}]}],pg=t=>(e,n)=>!!t[e](n);var mg=()=>{const t=Bp({history:np(),routes:Pi});return t.afterEach(async(e,n)=>{const r="";await ps(()=>{document.title=r})}),t.beforeEach((e,n)=>{const r=vo(),s=au(),i=Ve(),o=pg(i),{requiresAuth:a,title:c}=e.meta||{};if(c&&(s.title=c),!r.isAuthenticated&&a)return{name:he.login};if(e.name&&[he.family,he.student,he.fee].includes(e.name.toString())){const l=(()=>{if(e.name===he.family)return"getFamilyById";if(e.name===he.student)return"getStudentById";if(e.name===he.fee)return"getFeeById"})();if(!o(l.toString(),e.params.id.toString()))return{name:he.dashboard}}if(r.isAuthenticated&&[he.login,he.register].includes(e.name.toString()))return{name:he.home}}),t};const gg={class:"-mx-3 flex flex-wrap"},yo=We({__name:"AppGridRow",setup(t){return(e,n)=>(Ee(),Ce("div",gg,[vs(e.$slots,"default")]))}}),_g={class:"px-3"},wo=We({__name:"AppGridCol",setup(t){return(e,n)=>(Ee(),Ce("div",_g,[vs(e.$slots,"default")]))}}),bg={class:"w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col flex-start"},Eo=We({__name:"AppGridContainer",setup(t){return(e,n)=>(Ee(),Ce("div",bg,[vs(e.$slots,"default")]))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const y=l<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},yg=function(t){const e=lu(t);return uu.encodeByteArray(e,!0)},fu=function(t){return yg(t).replace(/\./g,"")},wg=function(t){try{return uu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ig(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Sg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ag(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rg(){return typeof indexedDB=="object"}function Cg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kg,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Un(s,a,r)}}function xg(t,e){return t.replace(Og,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Og=/\{\$([^}]+)}/g;function Pg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ts(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Za(i)&&Za(o)){if(!ts(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Za(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ng(t,e){const n=new Dg(t,e);return n.subscribe.bind(n)}class Dg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Qs),s.error===void 0&&(s.error=Qs),s.complete===void 0&&(s.complete=Qs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return t&&t._delegate?t._delegate:t}class kn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Eg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fg(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ug(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ug(t){return t===Kt?void 0:t}function Fg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Bg={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},jg=fe.INFO,Hg={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Vg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Hg[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class du{constructor(e){this.name=e,this._logLevel=jg,this._logHandler=Vg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const zg=(t,e)=>e.some(n=>t instanceof n);let ec,tc;function qg(){return ec||(ec=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wg(){return tc||(tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,Ni=new WeakMap,pu=new WeakMap,Zs=new WeakMap,Io=new WeakMap;function Kg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ut(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hu.set(n,t)}).catch(()=>{}),Io.set(e,t),e}function Gg(t){if(Ni.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ni.set(t,e)}let Di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jg(t){Di=t(Di)}function Yg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ei(this),e,...n);return pu.set(r,e.sort?e.sort():[e]),Ut(r)}:Wg().includes(t)?function(...e){return t.apply(ei(this),e),Ut(hu.get(this))}:function(...e){return Ut(t.apply(ei(this),e))}}function Xg(t){return typeof t=="function"?Yg(t):(t instanceof IDBTransaction&&Gg(t),zg(t,qg())?new Proxy(t,Di):t)}function Ut(t){if(t instanceof IDBRequest)return Kg(t);if(Zs.has(t))return Zs.get(t);const e=Xg(t);return e!==t&&(Zs.set(t,e),Io.set(e,t)),e}const ei=t=>Io.get(t);function Qg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ut(o.result),c.oldVersion,c.newVersion,Ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Zg=["get","getKey","getAll","getAllKeys","count"],e_=["put","add","delete","clear"],ti=new Map;function nc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ti.get(e))return ti.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=e_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ti.set(e,i),i}Jg(t=>({...t,get:(e,n,r)=>nc(e,n)||t.get(e,n,r),has:(e,n)=>!!nc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mi="@firebase/app",rc="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=new du("@firebase/app"),r_="@firebase/app-compat",s_="@firebase/analytics-compat",i_="@firebase/analytics",o_="@firebase/app-check-compat",a_="@firebase/app-check",c_="@firebase/auth",l_="@firebase/auth-compat",u_="@firebase/database",f_="@firebase/database-compat",d_="@firebase/functions",h_="@firebase/functions-compat",p_="@firebase/installations",m_="@firebase/installations-compat",g_="@firebase/messaging",__="@firebase/messaging-compat",b_="@firebase/performance",v_="@firebase/performance-compat",y_="@firebase/remote-config",w_="@firebase/remote-config-compat",E_="@firebase/storage",I_="@firebase/storage-compat",S_="@firebase/firestore",T_="@firebase/firestore-compat",A_="firebase",R_="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="[DEFAULT]",C_={[Mi]:"fire-core",[r_]:"fire-core-compat",[i_]:"fire-analytics",[s_]:"fire-analytics-compat",[a_]:"fire-app-check",[o_]:"fire-app-check-compat",[c_]:"fire-auth",[l_]:"fire-auth-compat",[u_]:"fire-rtdb",[f_]:"fire-rtdb-compat",[d_]:"fire-fn",[h_]:"fire-fn-compat",[p_]:"fire-iid",[m_]:"fire-iid-compat",[g_]:"fire-fcm",[__]:"fire-fcm-compat",[b_]:"fire-perf",[v_]:"fire-perf-compat",[y_]:"fire-rc",[w_]:"fire-rc-compat",[E_]:"fire-gcs",[I_]:"fire-gcs-compat",[S_]:"fire-fst",[T_]:"fire-fst-compat","fire-js":"fire-js",[A_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Map,Li=new Map;function k_(t,e){try{t.container.addComponent(e)}catch(n){So.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pr(t){const e=t.name;if(Li.has(e))return So.debug(`There were multiple attempts to register component ${e}.`),!1;Li.set(e,t);for(const n of ns.values())k_(n,t);return!0}function gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},tn=new yr("app","Firebase",x_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=R_;function P_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:mu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw tn.create("bad-app-name",{appName:String(r)});const s=ns.get(r);if(s){if(ts(t,s.options)&&ts(n,s.config))return s;throw tn.create("duplicate-app",{appName:r})}const i=new $g(r);for(const a of Li.values())i.addComponent(a);const o=new O_(t,n,i);return ns.set(r,o),o}function N_(t=mu){const e=ns.get(t);if(!e)throw tn.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=C_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),So.warn(a.join(" "));return}pr(new kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="firebase-heartbeat-database",M_=1,mr="firebase-heartbeat-store";let ni=null;function _u(){return ni||(ni=Qg(D_,M_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mr)}}}).catch(t=>{throw tn.create("storage-open",{originalErrorMessage:t.message})})),ni}async function L_(t){var e;try{return(await _u()).transaction(mr).objectStore(mr).get(bu(t))}catch(n){throw tn.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function sc(t,e){var n;try{const s=(await _u()).transaction(mr,"readwrite");return await s.objectStore(mr).put(e,bu(t)),s.done}catch(r){throw tn.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function bu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=1024,F_=30*24*60*60*1e3;class $_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=F_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ic(),{heartbeatsToSend:n,unsentEntries:r}=B_(this._heartbeatsCache.heartbeats),s=fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ic(){return new Date().toISOString().substring(0,10)}function B_(t,e=U_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),oc(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),oc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rg()?Cg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await L_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function oc(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_(t){pr(new kn("platform-logger",e=>new t_(e),"PRIVATE")),pr(new kn("heartbeat",e=>new $_(e),"PRIVATE")),bn(Mi,rc,t),bn(Mi,rc,"esm2017"),bn("fire-js","")}H_("");var V_="firebase",z_="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(V_,z_,"app");function To(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q_=vu,yu=new yr("auth","Firebase",vu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new du("@firebase/auth");function Vr(t,...e){ac.logLevel<=fe.ERROR&&ac.error(`Auth (${xs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw Ao(t,...e)}function it(t,...e){return Ao(t,...e)}function W_(t,e,n){const r=Object.assign(Object.assign({},q_()),{[e]:n});return new yr("auth","Firebase",r).create(e,{appName:t.name})}function Ao(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yu.create(t,...e)}function z(t,e,...n){if(!t)throw Ao(e,...n)}function ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vr(e),new Error(e)}function _t(t,e){t||ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Map;function pt(t){_t(t instanceof Function,"Expected a class definition");let e=cc.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cc.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t,e){const n=gu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ts(i,e!=null?e:{}))return s;et(s,"already-initialized")}return n.initialize({options:e})}function G_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function J_(){return lc()==="http:"||lc()==="https:"}function lc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(J_()||Sg()||"connection"in navigator)?navigator.onLine:!0}function X_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=Ig()||Tg()}get(){return Y_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new Er(3e4,6e4);function Os(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,s={}){return Eu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=wr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),wu.fetch()(Iu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Eu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q_),e);try{const s=new eb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw W_(t,u,l);et(t,u)}}catch(s){if(s instanceof Un)throw s;et(t,"network-request-failed")}}async function Ps(t,e,n,r,s={}){const i=await Ir(t,e,n,r,s);return"mfaPendingCredential"in i&&et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Iu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ro(t.config,s):`${t.config.apiScheme}://${s}`}class eb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Z_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=it(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function nb(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rb(t,e=!1){const n=Fn(t),r=await n.getIdToken(e),s=Co(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:sr(ri(s.auth_time)),issuedAtTime:sr(ri(s.iat)),expirationTime:sr(ri(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ri(t){return Number(t)*1e3}function Co(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Vr("JWT malformed, contained fewer than 3 sections"),null;try{const i=wg(r);return i?JSON.parse(i):(Vr("Failed to decode base64 JWT payload"),null)}catch(i){return Vr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function sb(t){const e=Co(t);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&ib(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ib({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gr(t,nb(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lb(i.providerUserInfo):[],a=cb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Su(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function ab(t){const e=Fn(t);await rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lb(t){return t.map(e=>{var{providerId:n}=e,r=To(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e){const n=await Eu(t,{},async()=>{const r=wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Iu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):sb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ub(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _r;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _r,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,e){z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=To(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ob(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Su(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rb(this,e)}reload(){return ab(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gr(this,tb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:V,isAnonymous:H,providerData:Y,stsTokenManager:B}=n;z(U&&B,e,"internal-error");const C=_r.fromJSON(this.name,B);z(typeof U=="string",e,"internal-error"),Tt(d,e.name),Tt(h,e.name),z(typeof V=="boolean",e,"internal-error"),z(typeof H=="boolean",e,"internal-error"),Tt(m,e.name),Tt(y,e.name),Tt(x,e.name),Tt(R,e.name),Tt(E,e.name),Tt(P,e.name);const j=new Zt({uid:U,auth:e,email:h,emailVerified:V,displayName:d,isAnonymous:H,photoURL:y,phoneNumber:m,tenantId:x,stsTokenManager:C,createdAt:E,lastLoginAt:P});return Y&&Array.isArray(Y)&&(j.providerData=Y.map(G=>Object.assign({},G))),R&&(j._redirectEventId=R),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new _r;s.updateFromServerResponse(n);const i=new Zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rs(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tu.type="NONE";const uc=Tu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,e,n){return`firebase:${t}:${e}:${n}`}class vn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zr(this.userKey,s.apiKey,i),this.fullPersistenceKey=zr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vn(pt(uc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||pt(uc);const o=zr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Zt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new vn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new vn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Cu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Au(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xu(e))return"Blackberry";if(Ou(e))return"Webos";if(ko(e))return"Safari";if((e.includes("chrome/")||Ru(e))&&!e.includes("edge/"))return"Chrome";if(ku(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Au(t=Ae()){return/firefox\//i.test(t)}function ko(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ru(t=Ae()){return/crios\//i.test(t)}function Cu(t=Ae()){return/iemobile/i.test(t)}function ku(t=Ae()){return/android/i.test(t)}function xu(t=Ae()){return/blackberry/i.test(t)}function Ou(t=Ae()){return/webos/i.test(t)}function Ns(t=Ae()){return/iphone|ipad|ipod/i.test(t)}function fb(t=Ae()){var e;return Ns(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function db(){return Ag()&&document.documentMode===10}function Pu(t=Ae()){return Ns(t)||ku(t)||Ou(t)||xu(t)||/windows phone/i.test(t)||Cu(t)}function hb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t,e=[]){let n;switch(t){case"Browser":n=fc(Ae());break;case"Worker":n=`${fc(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dc(this),this.idTokenSubscription=new dc(this),this.beforeStateQueue=new pb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await rs(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fn(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await vn.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function xo(t){return Fn(t)}class dc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ng(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,n){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function gb(t,e){return Ir(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e){return Ps(t,"POST","/v1/accounts:signInWithPassword",Os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e){return Ps(t,"POST","/v1/accounts:signInWithEmailLink",Os(t,e))}async function vb(t,e){return Ps(t,"POST","/v1/accounts:signInWithEmailLink",Os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Oo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new br(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new br(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _b(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bb(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return gb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vb(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(t,e){return Ps(t,"POST","/v1/accounts:signInWithIdp",Os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="http://localhost";class nn extends Oo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=To(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new nn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yn(e,n)}buildRequest(){const e={requestUri:yb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Eb(t){const e=Kn(Gn(t)).link,n=e?Kn(Gn(e)).deep_link_id:null,r=Kn(Gn(t)).deep_link_id;return(r?Kn(Gn(r)).link:null)||r||n||e||t}class Po{constructor(e){var n,r,s,i,o,a;const c=Kn(Gn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=wb((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Eb(e);try{return new Po(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(e,n){return br._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Po.parseLink(n);return z(r,"argument-error"),br._fromEmailAndCode(e,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Du{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Sr{constructor(){super("facebook.com")}static credential(e){return nn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Sr{constructor(){super("github.com")}static credential(e){return nn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Sr{constructor(){super("twitter.com")}static credential(e,n){return nn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zt._fromIdTokenResponse(e,r,s),o=hc(r);return new xn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hc(r);return new xn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ss.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ss(e,n,r,s)}}function Mu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ss._fromErrorAndOperation(t,i,e,r):i})}async function Ib(t,e,n=!1){const r=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sb(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await gr(t,Mu(s,i,e,t),n);z(o.idToken,s,"internal-error");const a=Co(o.idToken);z(a,s,"internal-error");const{sub:c}=a;return z(t.uid===c,s,"user-mismatch"),xn._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&et(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lu(t,e,n=!1){const r="signIn",s=await Mu(t,r,e),i=await xn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Tb(t,e){return Lu(xo(t),e)}function Ab(t,e,n){return Tb(Fn(t),$n.credential(e,n))}function Rb(t){return Fn(t).signOut()}const is="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(is,"1"),this.storage.removeItem(is),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(){const t=Ae();return ko(t)||Ns(t)}const kb=1e3,xb=10;class Fu extends Uu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cb()&&hb(),this.fallbackToPolling=Pu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);db()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fu.type="LOCAL";const Ob=Fu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends Uu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$u.type="SESSION";const Bu=$u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ds(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Pb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=No("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function Db(t){ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(){return typeof ot().WorkerGlobalScope!="undefined"&&typeof ot().importScripts=="function"}async function Mb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ub(){return ju()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="firebaseLocalStorageDb",Fb=1,os="firebaseLocalStorage",Vu="fbase_key";class Tr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ms(t,e){return t.transaction([os],e?"readwrite":"readonly").objectStore(os)}function $b(){const t=indexedDB.deleteDatabase(Hu);return new Tr(t).toPromise()}function Fi(){const t=indexedDB.open(Hu,Fb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(os,{keyPath:Vu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(os)?e(r):(r.close(),await $b(),e(await Fi()))})})}async function pc(t,e,n){const r=Ms(t,!0).put({[Vu]:e,value:n});return new Tr(r).toPromise()}async function Bb(t,e){const n=Ms(t,!1).get(e),r=await new Tr(n).toPromise();return r===void 0?null:r.value}function mc(t,e){const n=Ms(t,!0).delete(e);return new Tr(n).toPromise()}const jb=800,Hb=3;class zu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(Ub()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mb(),!this.activeServiceWorker)return;this.sender=new Nb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fi();return await pc(e,is,"1"),await mc(e,is),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Bb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ms(s,!1).getAll();return new Tr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zu.type="LOCAL";const Vb=zu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=it("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zb().appendChild(r)})}function Wb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Er(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(t,e){return e?pt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Oo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gb(t){return Lu(t.auth,new Do(t),t.bypassAuthState)}function Jb(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Sb(n,new Do(t),t.bypassAuthState)}async function Yb(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),Ib(n,new Do(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gb;case"linkViaPopup":case"linkViaRedirect":return Yb;case"reauthViaPopup":case"reauthViaRedirect":return Jb;default:et(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new Er(2e3,1e4);class mn extends qu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=No();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xb.get())};e()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb="pendingRedirect",qr=new Map;class Zb extends qu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qr.get(this.auth._key());if(!e){try{const r=await ev(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qr.set(this.auth._key(),e)}return this.bypassAuthState||qr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ev(t,e){const n=rv(e),r=nv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tv(t,e){qr.set(t._key(),e)}function nv(t){return pt(t._redirectPersistence)}function rv(t){return zr(Qb,t.config.apiKey,t.name)}async function sv(t,e,n=!1){const r=xo(t),s=Kb(r,e),o=await new Zb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=10*60*1e3;class ov{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!av(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iv&&this.cachedEventUids.clear(),this.cachedEventUids.has(gc(e))}saveEventToCache(e){this.cachedEventUids.add(gc(e)),this.lastProcessedEventTime=Date.now()}}function gc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function av(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uv=/^https?/;async function fv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cv(t);for(const n of e)try{if(dv(n))return}catch{}et(t,"unauthorized-domain")}function dv(t){const e=Ui(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uv.test(n))return!1;if(lv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new Er(3e4,6e4);function _c(){const t=ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pv(t){return new Promise((e,n)=>{var r,s,i;function o(){_c(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_c(),n(it(t,"network-request-failed"))},timeout:hv.get()})}if(!((s=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ot().gapi)===null||i===void 0)&&i.load)o();else{const a=Wb("iframefcb");return ot()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},qb(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function mv(t){return Wr=Wr||pv(t),Wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Er(5e3,15e3),_v="__/auth/iframe",bv="emulator/auth/iframe",vv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wv(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ro(e,bv):`https://${t.config.authDomain}/${_v}`,r={apiKey:e.apiKey,appName:t.name,v:xs},s=yv.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wr(r).slice(1)}`}async function Ev(t){const e=await mv(t),n=ot().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:wv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=ot().setTimeout(()=>{i(o)},gv.get());function c(){ot().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sv=500,Tv=600,Av="_blank",Rv="http://localhost";class bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cv(t,e,n,r=Sv,s=Tv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Iv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ae().toLowerCase();n&&(a=Ru(l)?Av:n),Au(l)&&(e=e||Rv,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(fb(l)&&a!=="_self")return kv(e||"",a),new bc(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new bc(d)}function kv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="__/auth/handler",Ov="emulator/auth/handler";function vc(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xs,eventId:s};if(e instanceof Du){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Sr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Pv(t)}?${wr(a).slice(1)}`}function Pv({config:t}){return t.emulator?Ro(t,Ov):`https://${t.authDomain}/${xv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="webStorageSupport";class Nv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bu,this._completeRedirectFn=sv,this._overrideRedirectResult=tv}async _openPopup(e,n,r,s){var i;_t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=vc(e,n,r,Ui(),s);return Cv(e,o,No())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Db(vc(e,n,r,Ui(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ev(e),r=new ov(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(si,{type:si},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[si];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pu()||ko()||Ns()}}const Dv=Nv;var yc="@firebase/auth",wc="0.20.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Uv(t){pr(new kn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nu(t)},u=new mb(a,c,l);return G_(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new kn("auth-internal",e=>{const n=xo(e.getProvider("auth").getImmediate());return(r=>new Mv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(yc,wc,Lv(t)),bn(yc,wc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t=N_()){const e=gu(t,"auth");return e.isInitialized()?e.getImmediate():K_(t,{popupRedirectResolver:Dv,persistence:[Vb,Ob,Bu]})}Uv("Browser");class Ar{constructor(e){this.provider=e}}class $v extends Ar{}class Bv extends $v{async create(e){return await new Oe().method("post").url("user/new").data(e).send(),this.provider.auth.login(e)}}class jv extends Ar{}function Hv(t,e){const n={},r=Object.keys(t),s=Object.keys(e);for(const i of r)s.includes(i)&&t[i]!==e[i]&&(n[i]=e[i]);return n}const Mo={difference:Hv};class Vv extends jv{async create(e){return new Oe().method("post").url("user/new").data(e).mock(!0).then(({error:n})=>{if(n)throw n;const r=Ve(),s=(Math.random()+1).toString(36).substring(7);return r.addStudent({...e,id:s}),Promise.resolve({})})}async update(e){const n=Ve(),r=Mo.difference(n.getStudentById(e.id),e);return Object.keys(r).length===0?Promise.resolve({}):new Oe().method("post").url("user/new").data(r).mock(!0).then(({error:s})=>{if(s)throw s;const{id:i}=e;return n.updateStudent(i,r),Promise.resolve({})})}async delete(e){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:n})=>{if(n)throw n;return Ve().removeStudent(e),Promise.resolve({})})}}class zv extends Ar{}class qv extends zv{async create(e){return new Oe().method("post").url("user/new").data(e).mock(!0).then(({error:n})=>{if(n)throw n;const r=Ve(),s=(Math.random()+1).toString(36).substring(7),i={...e,id:s,income:0,createdAt:new Date().toString()};if(r.addFamily(i),e.fees.length)for(const o of e.fees){const a=r.getFeeById(o);a&&a.families.push(s)}return Promise.resolve({})})}async update(e){const n=Ve(),r=Mo.difference(n.getFamilyById(e.id),e);return Object.keys(r).length===0?Promise.resolve({}):new Oe().method("post").url("user/new").data(r).mock(!0).then(({error:s})=>{if(s)throw s;const{id:i}=e,{fees:o}=r;if(n.updateFamily(i,r),o){const a=n.fees.filter(l=>!o.includes(l.id));for(const l of a)l.families=l.families.filter(u=>u!==i);const c=n.fees.filter(l=>o.includes(l.id));for(const l of c)l.families.includes(i)||l.families.push(i)}return Promise.resolve({})})}async delete(e){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:n})=>{if(n)throw n;return Ve().removeFamily(e),Promise.resolve({})})}income(e,n){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:r})=>{if(r)throw r;const i=Ve().getFamilyById(e);return i&&(i.income+=n),Promise.resolve()})}resetIncome(e){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:n})=>{if(n)throw n;const s=Ve().getFamilyById(e);return s&&(s.income=0),Promise.resolve()})}}class Wv extends Ar{}class Kv extends Wv{async create(e){return new Oe().method("post").url("user/new").data(e).mock(!0).then(({error:n})=>{if(n)throw n;const r=Ve(),s=(Math.random()+1).toString(36).substring(7);if(r.addFee({...e,id:s}),e.families.length)for(const i of e.families){const o=r.getFamilyById(i);o&&o.fees.push(s)}return Promise.resolve({})})}async update(e){const n=Ve(),r=Mo.difference(n.getFeeById(e.id),e);return Object.keys(r).length===0?Promise.resolve({}):new Oe().method("post").url("user/new").data(r).mock(!0).then(({error:s})=>{if(s)throw s;const{id:i}=e,{families:o}=r;if(n.updateFee(i,r),o){const a=n.families.filter(l=>!o.includes(l.id));for(const l of a)l.fees=l.fees.filter(u=>u!==i);const c=n.families.filter(l=>o.includes(l.id));for(const l of c)l.fees.includes(i)||l.fees.push(i)}return Promise.resolve({})})}async delete(e){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:n})=>{if(n)throw n;return Ve().removeFee(e),Promise.resolve({})})}}class Gv{constructor(){vt(this,"authService");vt(this,"userService");vt(this,"studentService");vt(this,"familyService");vt(this,"feeService");this.userService=new Bv(this),this.studentService=new Vv(this),this.familyService=new qv(this),this.feeService=new Kv(this),this.factory()}get auth(){return this.authService}get user(){return this.userService}get student(){return this.studentService}get family(){return this.familyService}get fee(){return this.feeService}}class Jv extends Ar{constructor(e,n){super(e),this.service=e,this.auth=n}}class Yv extends Jv{async login({username:e,password:n}){const r=await Ab(this.auth,e,n),{accessToken:s,refreshToken:i}=r.user,o=await new Oe().method("post").url("auth/decodeAccessToken").data({accessToken:s}).send(),{data:{details:{firstName:a,lastName:c,role:l,uid:u}}}=o;return{firstName:a,lastName:c,role:l,uid:u,accessToken:s,refreshToken:i}}async logout(){await Rb(this.auth)}}const Xv={apiKey:"AIzaSyBMyjMaCx6XzQG5WBIkeYpzXvJp0_UXyyk",authDomain:"phonebook-2213e.firebaseapp.com",databaseURL:"https://phonebook-2213e-default-rtdb.europe-west1.firebasedatabase.app",projectId:"phonebook-2213e",storageBucket:"phonebook-2213e.appspot.com",messagingSenderId:"850097043875",appId:"1:850097043875:web:0e02480ecd044cd5d68216"},Qv=P_(Xv),Zv=Fv(Qv);class ey extends Gv{factory(){this.authService=new Yv(this,Zv)}}const ty=new ey,ny={key:0,class:"flex"},ry={class:"first:ml-0 ml-3"},sy={class:"ml-3"},iy=["onClick"],oy={key:1,class:"flex"},ay={class:"first:ml-0 ml-3"},cy=We({__name:"TheNav",setup(t){const e=Hp(),n=vo(),r=Pi.filter(o=>typeof o.meta=="object"&&o.meta.requiresAuth),s=Pi.filter(o=>typeof o.meta=="undefined"||!o.meta.requiresAuth),i=()=>ty.auth.logout().then(()=>{n.updateAuthState()}).then(()=>e.push({name:he.login}));return(o,a)=>{const c=al("router-link");return mt(n).isAuthenticated?(Ee(),Ce("ul",ny,[(Ee(!0),Ce(xe,null,Qo(mt(r),l=>(Ee(),Ce("li",ry,[Z(c,{to:l.path},{default:$e(()=>[wi(ii(l.name),1)]),_:2},1032,["to"])]))),256)),$t("li",sy,[$t("a",{href:"#",onClick:Ah(i,["prevent"])},"LOGOUT",8,iy)])])):(Ee(),Ce("ul",oy,[(Ee(!0),Ce(xe,null,Qo(mt(s),l=>(Ee(),Ce("li",ay,[Z(c,{to:l.path},{default:$e(()=>[wi(ii(l.name),1)]),_:2},1032,["to"])]))),256))]))}}}),ly=We({__name:"TheLogo",setup(t){return(e,n)=>(Ee(),Ce("p",null,"School Manager"))}}),uy={class:"w-full flex justify-center"},fy=$t("div",{class:"w-full border-b border-b-gray-200 mb-6"},null,-1),dy=We({__name:"TheHeader",setup(t){return(e,n)=>(Ee(),Ce("div",uy,[Z(Eo,null,{default:$e(()=>[Z(yo,null,{default:$e(()=>[Z(wo,{class:"w-full flex items-center justify-between py-6"},{default:$e(()=>[Z(ly),Z(cy)]),_:1})]),_:1}),fy]),_:1})]))}}),hy={key:0,class:"text-xl font-bold"},py=We({__name:"AppTitle",props:{title:null},setup(t){return(e,n)=>t.title?(Ee(),Ce("p",hy,ii(t.title),1)):Fd("",!0)}}),my={class:"w-full flex-1 flex justify-center"},gy=$t("div",{id:"app-context-buttons"},null,-1),_y=We({__name:"TheContent",setup(t){const e=au();return(n,r)=>(Ee(),Ce("div",my,[Z(Eo,null,{default:$e(()=>[Z(yo,null,{default:$e(()=>[Z(wo,{class:"w-full mb-6 flex items-center justify-between"},{default:$e(()=>[Z(py,{title:mt(e).title},null,8,["title"]),gy]),_:1})]),_:1}),vs(n.$slots,"default")]),_:3})]))}}),by={class:"w-full flex justify-center"},vy=$t("div",{class:"w-full border-t border-t-gray-200 mt-6"},null,-1),yy=$t("p",null,"Footer",-1),wy=We({__name:"TheFooter",setup(t){return(e,n)=>(Ee(),Ce("div",by,[Z(Eo,null,{default:$e(()=>[vy,Z(yo,null,{default:$e(()=>[Z(wo,{class:"w-full py-6 text-center"},{default:$e(()=>[yy]),_:1})]),_:1})]),_:1})]))}}),Ey={class:"w-full flex flex-col items-start justify-between min-h-screen"},Iy=We({__name:"App",setup(t){return(e,n)=>{const r=al("router-view");return Ee(),Ce("div",Ey,[Z(dy),Z(_y,null,{default:$e(()=>[Z(r)]),_:1}),Z(wy)])}}}),$i=xh(Iy);$i.use(Nh());Promise.resolve().then(()=>vo().initAuth()).then(()=>{const t=mg();fg(),$i.use(t),$i.mount("#app")});export{Ve as $,ws as A,ps as B,vs as C,$t as D,Qo as E,xe as F,cs as G,Ay as H,Ry as I,Ny as J,My as K,il as L,as as M,ud as N,eo as O,xy as P,$d as Q,Hf as R,Py as S,Al as T,Cy as U,Ly as V,Ty as W,Ud as X,ky as Y,Dy as Z,wa as _,Qi as a,al as a0,Oy as a1,Eo as a2,yo as a3,wo as a4,au as a5,Uy as a6,Z as b,Ce as c,We as d,Hp as e,yl as f,wi as g,Fd as h,Ah as i,he as j,mt as k,Ye as l,ld as m,Xn as n,Ee as o,be as p,Mt as q,Dn as r,ty as s,ii as t,vo as u,cr as v,$e as w,ol as x,Ze as y,$r as z};
