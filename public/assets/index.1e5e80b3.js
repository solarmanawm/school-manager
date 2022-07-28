const Wu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Wu();function $i(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ku="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gu=$i(Ku);function wc(t){return!!t||t===""}function os(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ve(r)?Xu(r):os(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ve(t))return t;if(_e(t))return t}}const Ju=/;(?![^(]*\))/g,Yu=/:(.+)/;function Xu(t){const e={};return t.split(Ju).forEach(n=>{if(n){const r=n.split(Yu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function as(t){let e="";if(ve(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const r=as(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function wy(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ve(e)&&(t.class=as(e)),n&&(t.style=os(n)),t}function Qu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Zt(t[r],e[r]);return n}function Zt(t,e){if(t===e)return!0;let n=Fo(t),r=Fo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=sr(t),r=sr(e),n||r)return t===e;if(n=L(t),r=L(e),n||r)return n&&r?Qu(t,e):!1;if(n=_e(t),r=_e(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Zt(t[o],e[o]))return!1}}return String(t)===String(e)}function Bi(t,e){return t.findIndex(n=>Zt(n,e))}const si=t=>ve(t)?t:t==null?"":L(t)||_e(t)&&(t.toString===Sc||!W(t.toString))?JSON.stringify(t,Ec,2):String(t),Ec=(t,e)=>e&&e.__v_isRef?Ec(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:xn(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!L(e)&&!Tc(e)?String(e):e,ce={},mn=[],Qe=()=>{},Zu=()=>!1,ef=/^on[^a-z]/,cs=t=>ef.test(t),ji=t=>t.startsWith("onUpdate:"),Ie=Object.assign,Hi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tf=Object.prototype.hasOwnProperty,X=(t,e)=>tf.call(t,e),L=Array.isArray,gn=t=>br(t)==="[object Map]",xn=t=>br(t)==="[object Set]",Fo=t=>br(t)==="[object Date]",W=t=>typeof t=="function",ve=t=>typeof t=="string",sr=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Ic=t=>_e(t)&&W(t.then)&&W(t.catch),Sc=Object.prototype.toString,br=t=>Sc.call(t),nf=t=>br(t).slice(8,-1),Tc=t=>br(t)==="[object Object]",Vi=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Mr=$i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ls=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},rf=/-(\w)/g,at=ls(t=>t.replace(rf,(e,n)=>n?n.toUpperCase():"")),sf=/\B([A-Z])/g,nn=ls(t=>t.replace(sf,"-$1").toLowerCase()),us=ls(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=ls(t=>t?`on${us(t)}`:""),ir=(t,e)=>!Object.is(t,e),Ur=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Wr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},or=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $o;const of=()=>$o||($o=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ue;class Ac{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ue&&(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ue;try{return Ue=this,e()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Rc(t){return new Ac(t)}function af(t,e=Ue){e&&e.active&&e.effects.push(t)}function Ey(){return Ue}function Iy(t){Ue&&Ue.cleanups.push(t)}const zi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Cc=t=>(t.w&Ut)>0,kc=t=>(t.n&Ut)>0,cf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ut},lf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Cc(s)&&!kc(s)?s.delete(t):e[n++]=s,s.w&=~Ut,s.n&=~Ut}e.length=n}},ii=new WeakMap;let zn=0,Ut=1;const oi=30;let Je;const Yt=Symbol(""),ai=Symbol("");class qi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,af(this,r)}run(){if(!this.active)return this.fn();let e=Je,n=Nt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Je,Je=this,Nt=!0,Ut=1<<++zn,zn<=oi?cf(this):Bo(this),this.fn()}finally{zn<=oi&&lf(this),Ut=1<<--zn,Je=this.parent,Nt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(Bo(this),this.onStop&&this.onStop(),this.active=!1)}}function Bo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nt=!0;const xc=[];function On(){xc.push(Nt),Nt=!1}function Pn(){const t=xc.pop();Nt=t===void 0?!0:t}function Be(t,e,n){if(Nt&&Je){let r=ii.get(t);r||ii.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=zi()),Oc(s)}}function Oc(t,e){let n=!1;zn<=oi?kc(t)||(t.n|=Ut,n=!Cc(t)):n=!t.has(Je),n&&(t.add(Je),Je.deps.push(t))}function gt(t,e,n,r,s,i){const o=ii.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&L(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":L(t)?Vi(n)&&a.push(o.get("length")):(a.push(o.get(Yt)),gn(t)&&a.push(o.get(ai)));break;case"delete":L(t)||(a.push(o.get(Yt)),gn(t)&&a.push(o.get(ai)));break;case"set":gn(t)&&a.push(o.get(Yt));break}if(a.length===1)a[0]&&ci(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ci(zi(c))}}function ci(t,e){const n=L(t)?t:[...t];for(const r of n)r.computed&&jo(r);for(const r of n)r.computed||jo(r)}function jo(t,e){(t!==Je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const uf=$i("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sr)),ff=Wi(),df=Wi(!1,!0),hf=Wi(!0),Ho=pf();function pf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ee(this);for(let i=0,o=this.length;i<o;i++)Be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){On();const r=ee(this)[e].apply(this,n);return Pn(),r}}),t}function Wi(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?xf:Uc:e?Lc:Mc).get(r))return r;const o=L(r);if(!t&&o&&X(Ho,s))return Reflect.get(Ho,s,i);const a=Reflect.get(r,s,i);return(sr(s)?Pc.has(s):uf(s))||(t||Be(r,"get",s),e)?a:be(a)?o&&Vi(s)?a:a.value:_e(a)?t?Fc(a):Nn(a):a}}const mf=Nc(),gf=Nc(!0);function Nc(t=!1){return function(n,r,s,i){let o=n[r];if(ar(o)&&be(o)&&!be(s))return!1;if(!t&&!ar(s)&&(li(s)||(s=ee(s),o=ee(o)),!L(n)&&be(o)&&!be(s)))return o.value=s,!0;const a=L(n)&&Vi(r)?Number(r)<n.length:X(n,r),c=Reflect.set(n,r,s,i);return n===ee(i)&&(a?ir(s,o)&&gt(n,"set",r,s):gt(n,"add",r,s)),c}}function _f(t,e){const n=X(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&gt(t,"delete",e,void 0),r}function bf(t,e){const n=Reflect.has(t,e);return(!sr(e)||!Pc.has(e))&&Be(t,"has",e),n}function vf(t){return Be(t,"iterate",L(t)?"length":Yt),Reflect.ownKeys(t)}const Dc={get:ff,set:mf,deleteProperty:_f,has:bf,ownKeys:vf},yf={get:hf,set(t,e){return!0},deleteProperty(t,e){return!0}},wf=Ie({},Dc,{get:df,set:gf}),Ki=t=>t,fs=t=>Reflect.getPrototypeOf(t);function Ar(t,e,n=!1,r=!1){t=t.__v_raw;const s=ee(t),i=ee(e);n||(e!==i&&Be(s,"get",e),Be(s,"get",i));const{has:o}=fs(s),a=r?Ki:n?Yi:cr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Rr(t,e=!1){const n=this.__v_raw,r=ee(n),s=ee(t);return e||(t!==s&&Be(r,"has",t),Be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Cr(t,e=!1){return t=t.__v_raw,!e&&Be(ee(t),"iterate",Yt),Reflect.get(t,"size",t)}function Vo(t){t=ee(t);const e=ee(this);return fs(e).has.call(e,t)||(e.add(t),gt(e,"add",t,t)),this}function zo(t,e){e=ee(e);const n=ee(this),{has:r,get:s}=fs(n);let i=r.call(n,t);i||(t=ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ir(e,o)&&gt(n,"set",t,e):gt(n,"add",t,e),this}function qo(t){const e=ee(this),{has:n,get:r}=fs(e);let s=n.call(e,t);s||(t=ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&gt(e,"delete",t,void 0),i}function Wo(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&gt(t,"clear",void 0,void 0),n}function kr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),c=e?Ki:t?Yi:cr;return!t&&Be(a,"iterate",Yt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function xr(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=gn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ki:e?Yi:cr;return!e&&Be(i,"iterate",c?ai:Yt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function vt(t){return function(...e){return t==="delete"?!1:this}}function Ef(){const t={get(i){return Ar(this,i)},get size(){return Cr(this)},has:Rr,add:Vo,set:zo,delete:qo,clear:Wo,forEach:kr(!1,!1)},e={get(i){return Ar(this,i,!1,!0)},get size(){return Cr(this)},has:Rr,add:Vo,set:zo,delete:qo,clear:Wo,forEach:kr(!1,!0)},n={get(i){return Ar(this,i,!0)},get size(){return Cr(this,!0)},has(i){return Rr.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:kr(!0,!1)},r={get(i){return Ar(this,i,!0,!0)},get size(){return Cr(this,!0)},has(i){return Rr.call(this,i,!0)},add:vt("add"),set:vt("set"),delete:vt("delete"),clear:vt("clear"),forEach:kr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=xr(i,!1,!1),n[i]=xr(i,!0,!1),e[i]=xr(i,!1,!0),r[i]=xr(i,!0,!0)}),[t,n,e,r]}const[If,Sf,Tf,Af]=Ef();function Gi(t,e){const n=e?t?Af:Tf:t?Sf:If;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(X(n,s)&&s in r?n:r,s,i)}const Rf={get:Gi(!1,!1)},Cf={get:Gi(!1,!0)},kf={get:Gi(!0,!1)},Mc=new WeakMap,Lc=new WeakMap,Uc=new WeakMap,xf=new WeakMap;function Of(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pf(t){return t.__v_skip||!Object.isExtensible(t)?0:Of(nf(t))}function Nn(t){return ar(t)?t:Ji(t,!1,Dc,Rf,Mc)}function Nf(t){return Ji(t,!1,wf,Cf,Lc)}function Fc(t){return Ji(t,!0,yf,kf,Uc)}function Ji(t,e,n,r,s){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Pf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Dt(t){return ar(t)?Dt(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function li(t){return!!(t&&t.__v_isShallow)}function $c(t){return Dt(t)||ar(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function yn(t){return Wr(t,"__v_skip",!0),t}const cr=t=>_e(t)?Nn(t):t,Yi=t=>_e(t)?Fc(t):t;function Bc(t){Nt&&Je&&(t=ee(t),Oc(t.dep||(t.dep=zi())))}function jc(t,e){t=ee(t),t.dep&&ci(t.dep)}function be(t){return!!(t&&t.__v_isRef===!0)}function Xi(t){return Hc(t,!1)}function Df(t){return Hc(t,!0)}function Hc(t,e){return be(t)?t:new Mf(t,e)}class Mf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:cr(e)}get value(){return Bc(this),this._value}set value(e){e=this.__v_isShallow?e:ee(e),ir(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:cr(e),jc(this))}}function mt(t){return be(t)?t.value:t}const Lf={get:(t,e,n)=>mt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vc(t){return Dt(t)?t:new Proxy(t,Lf)}function Uf(t){const e=L(t)?new Array(t.length):{};for(const n in t)e[n]=$f(t,n);return e}class Ff{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function $f(t,e,n){const r=t[e];return be(r)?r:new Ff(t,e,n)}class Bf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new qi(e,()=>{this._dirty||(this._dirty=!0,jc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ee(this);return Bc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function jf(t,e,n=!1){let r,s;const i=W(t);return i?(r=t,s=Qe):(r=t.get,s=t.set),new Bf(r,s,i||!s,n)}function Mt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ds(i,e,n)}return s}function ze(t,e,n,r){if(W(t)){const i=Mt(t,e,n,r);return i&&Ic(i)&&i.catch(o=>{ds(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(ze(t[i],e,n,r));return s}function ds(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mt(c,null,10,[t,o,a]);return}}Hf(t,n,s,r)}function Hf(t,e,n,r=!0){console.error(t)}let Kr=!1,ui=!1;const Fe=[];let ft=0;const Gn=[];let qn=null,fn=0;const Jn=[];let Tt=null,dn=0;const zc=Promise.resolve();let Qi=null,fi=null;function hs(t){const e=Qi||zc;return t?e.then(this?t.bind(this):t):e}function Vf(t){let e=ft+1,n=Fe.length;for(;e<n;){const r=e+n>>>1;lr(Fe[r])<t?e=r+1:n=r}return e}function qc(t){(!Fe.length||!Fe.includes(t,Kr&&t.allowRecurse?ft+1:ft))&&t!==fi&&(t.id==null?Fe.push(t):Fe.splice(Vf(t.id),0,t),Wc())}function Wc(){!Kr&&!ui&&(ui=!0,Qi=zc.then(Jc))}function zf(t){const e=Fe.indexOf(t);e>ft&&Fe.splice(e,1)}function Kc(t,e,n,r){L(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Wc()}function qf(t){Kc(t,qn,Gn,fn)}function Wf(t){Kc(t,Tt,Jn,dn)}function ps(t,e=null){if(Gn.length){for(fi=e,qn=[...new Set(Gn)],Gn.length=0,fn=0;fn<qn.length;fn++)qn[fn]();qn=null,fn=0,fi=null,ps(t,e)}}function Gc(t){if(ps(),Jn.length){const e=[...new Set(Jn)];if(Jn.length=0,Tt){Tt.push(...e);return}for(Tt=e,Tt.sort((n,r)=>lr(n)-lr(r)),dn=0;dn<Tt.length;dn++)Tt[dn]();Tt=null,dn=0}}const lr=t=>t.id==null?1/0:t.id;function Jc(t){ui=!1,Kr=!0,ps(t),Fe.sort((n,r)=>lr(n)-lr(r));const e=Qe;try{for(ft=0;ft<Fe.length;ft++){const n=Fe[ft];n&&n.active!==!1&&Mt(n,null,14)}}finally{ft=0,Fe.length=0,Gc(),Kr=!1,Qi=null,(Fe.length||Gn.length||Jn.length)&&Jc(t)}}function Kf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[u]||ce;h&&(s=n.map(m=>m.trim())),d&&(s=n.map(or))}let a,c=r[a=Lr(e)]||r[a=Lr(at(e))];!c&&i&&(c=r[a=Lr(nn(e))]),c&&ze(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ze(l,t,6,s)}}function Yc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Yc(l,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(L(i)?i.forEach(c=>o[c]=null):Ie(o,i),r.set(t,o),o)}function ms(t,e){return!t||!cs(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,nn(e))||X(t,e))}let Te=null,Xc=null;function Gr(t){const e=Te;return Te=t,Xc=t&&t.type.__scopeId||null,e}function $e(t,e=Te,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ia(-1);const i=Gr(e),o=t(...s);return Gr(i),r._d&&ia(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ls(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:m,ctx:y,inheritAttrs:x}=t;let R,E;const P=Gr(t);try{if(n.shapeFlag&4){const V=s||r;R=st(u.call(V,V,d,i,m,h,y)),E=c}else{const V=e;R=st(V.length>1?V(i,{attrs:c,slots:a,emit:l}):V(i,null)),E=e.props?c:Gf(c)}}catch(V){Zn.length=0,ds(V,t,1),R=Z(qe)}let U=R;if(E&&x!==!1){const V=Object.keys(E),{shapeFlag:H}=U;V.length&&H&7&&(o&&V.some(ji)&&(E=Jf(E,o)),U=$t(U,E))}return n.dirs&&(U=$t(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),R=U,Gr(P),R}const Gf=t=>{let e;for(const n in t)(n==="class"||n==="style"||cs(n))&&((e||(e={}))[n]=t[n]);return e},Jf=(t,e)=>{const n={};for(const r in t)(!ji(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ko(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==r[h]&&!ms(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ko(r,o,l):!0:!!o;return!1}function Ko(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ms(n,i))return!0}return!1}function Xf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Qf=t=>t.__isSuspense;function Zf(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Wf(t)}function Fr(t,e){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[t]=e}}function Ze(t,e,n=!1){const r=we||Te;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r.proxy):e}}const Go={};function Yn(t,e,n){return Qc(t,e,n)}function Qc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ce){const a=we;let c,l=!1,u=!1;if(be(t)?(c=()=>t.value,l=li(t)):Dt(t)?(c=()=>t,r=!0):L(t)?(u=!0,l=t.some(E=>Dt(E)||li(E)),c=()=>t.map(E=>{if(be(E))return E.value;if(Dt(E))return Jt(E);if(W(E))return Mt(E,a,2)})):W(t)?e?c=()=>Mt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),ze(t,a,3,[h])}:c=Qe,e&&r){const E=c;c=()=>Jt(E())}let d,h=E=>{d=R.onStop=()=>{Mt(E,a,4)}};if(fr)return h=Qe,e?n&&ze(e,a,3,[c(),u?[]:void 0,h]):c(),Qe;let m=u?[]:Go;const y=()=>{if(!!R.active)if(e){const E=R.run();(r||l||(u?E.some((P,U)=>ir(P,m[U])):ir(E,m)))&&(d&&d(),ze(e,a,3,[E,m===Go?void 0:m,h]),m=E)}else R.run()};y.allowRecurse=!!e;let x;s==="sync"?x=y:s==="post"?x=()=>ke(y,a&&a.suspense):x=()=>qf(y);const R=new qi(c,x);return e?n?y():m=R.run():s==="post"?ke(R.run.bind(R),a&&a.suspense):R.run(),()=>{R.stop(),a&&a.scope&&Hi(a.scope.effects,R)}}function ed(t,e,n){const r=this.proxy,s=ve(t)?t.includes(".")?Zc(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=we;wn(this);const a=Qc(s,i.bind(r),n);return o?wn(o):Xt(),a}function Zc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Jt(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))Jt(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)Jt(t[n],e);else if(xn(t)||gn(t))t.forEach(n=>{Jt(n,e)});else if(Tc(t))for(const n in t)Jt(t[n],e);return t}function td(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sl(()=>{t.isMounted=!0}),il(()=>{t.isUnmounting=!0}),t}const He=[Function,Array],nd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(t,{slots:e}){const n=ys(),r=td();let s;return()=>{const i=e.default&&nl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const x of i)if(x.type!==qe){o=x;break}}const a=ee(t),{mode:c}=a;if(r.isLeaving)return Us(o);const l=Jo(o);if(!l)return Us(o);const u=di(l,a,r,n);hi(l,u);const d=n.subTree,h=d&&Jo(d);let m=!1;const{getTransitionKey:y}=l.type;if(y){const x=y();s===void 0?s=x:x!==s&&(s=x,m=!0)}if(h&&h.type!==qe&&(!Kt(l,h)||m)){const x=di(h,a,r,n);if(hi(h,x),c==="out-in")return r.isLeaving=!0,x.afterLeave=()=>{r.isLeaving=!1,n.update()},Us(o);c==="in-out"&&l.type!==qe&&(x.delayLeave=(R,E,P)=>{const U=tl(r,h);U[String(h.key)]=h,R._leaveCb=()=>{E(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return o}}},el=nd;function tl(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function di(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:x,onAppear:R,onAfterAppear:E,onAppearCancelled:P}=e,U=String(t.key),V=tl(n,t),H=(C,j)=>{C&&ze(C,r,9,j)},Y=(C,j)=>{const G=j[1];H(C,j),L(C)?C.every(te=>te.length<=1)&&G():C.length<=1&&G()},B={mode:i,persisted:o,beforeEnter(C){let j=a;if(!n.isMounted)if(s)j=x||a;else return;C._leaveCb&&C._leaveCb(!0);const G=V[U];G&&Kt(t,G)&&G.el._leaveCb&&G.el._leaveCb(),H(j,[C])},enter(C){let j=c,G=l,te=u;if(!n.isMounted)if(s)j=R||c,G=E||l,te=P||u;else return;let O=!1;const ne=C._enterCb=pe=>{O||(O=!0,pe?H(te,[C]):H(G,[C]),B.delayedLeave&&B.delayedLeave(),C._enterCb=void 0)};j?Y(j,[C,ne]):ne()},leave(C,j){const G=String(t.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return j();H(d,[C]);let te=!1;const O=C._leaveCb=ne=>{te||(te=!0,j(),ne?H(y,[C]):H(m,[C]),C._leaveCb=void 0,V[G]===t&&delete V[G])};V[G]=t,h?Y(h,[C,O]):O()},clone(C){return di(C,e,n,r)}};return B}function Us(t){if(gs(t))return t=$t(t),t.children=null,t}function Jo(t){return gs(t)?t.children?t.children[0]:void 0:t}function hi(t,e){t.shapeFlag&6&&t.component?hi(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function nl(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===xe?(o.patchFlag&128&&s++,r=r.concat(nl(o.children,e,a))):(e||o.type!==qe)&&r.push(a!=null?$t(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function We(t){return W(t)?{setup:t,name:t.name}:t}const Xn=t=>!!t.type.__asyncLoader,gs=t=>t.type.__isKeepAlive;function rd(t,e){rl(t,"a",e)}function sd(t,e){rl(t,"da",e)}function rl(t,e,n=we){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_s(e,r,n),n){let s=n.parent;for(;s&&s.parent;)gs(s.parent.vnode)&&id(r,e,n,s),s=s.parent}}function id(t,e,n,r){const s=_s(e,t,r,!0);Zi(()=>{Hi(r[e],s)},n)}function _s(t,e,n=we,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;On(),wn(n);const a=ze(e,n,t,o);return Xt(),Pn(),a});return r?s.unshift(i):s.push(i),i}}const bt=t=>(e,n=we)=>(!fr||t==="sp")&&_s(t,e,n),od=bt("bm"),sl=bt("m"),ad=bt("bu"),cd=bt("u"),il=bt("bum"),Zi=bt("um"),ld=bt("sp"),ud=bt("rtg"),fd=bt("rtc");function dd(t,e=we){_s("ec",t,e)}function Sy(t,e){const n=Te;if(n===null)return t;const r=ws(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ce]=e[i];W(o)&&(o={mounted:o,updated:o}),o.deep&&Jt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function jt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(On(),ze(c,n,8,[t.el,a,t,e]),Pn())}}const eo="components";function ol(t,e){return cl(eo,t,!0,e)||t}const al=Symbol();function Ty(t){return ve(t)?cl(eo,t,!1)||t:t||al}function cl(t,e,n=!0,r=!1){const s=Te||we;if(s){const i=s.type;if(t===eo){const a=Vd(i,!1);if(a&&(a===e||a===at(e)||a===us(at(e))))return i}const o=Yo(s[t]||i[t],e)||Yo(s.appContext[t],e);return!o&&r?i:o}}function Yo(t,e){return t&&(t[e]||t[at(e)]||t[us(at(e))])}function Xo(t,e,n,r){let s;const i=n&&n[r];if(L(t)||ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(_e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Ay(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(L(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.fn)}return t}function bs(t,e,n={},r,s){if(Te.isCE||Te.parent&&Xn(Te.parent)&&Te.parent.isCE)return Z("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ee();const o=i&&ll(i(n)),a=vl(xe,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ll(t){return t.some(e=>Xr(e)?!(e.type===qe||e.type===xe&&!ll(e.children)):!0)?t:null}function Ry(t){const e={};for(const n in t)e[Lr(n)]=t[n];return e}const pi=t=>t?wl(t)?ws(t)||t.proxy:pi(t.parent):null,Jr=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pi(t.parent),$root:t=>pi(t.root),$emit:t=>t.emit,$options:t=>fl(t),$forceUpdate:t=>t.f||(t.f=()=>qc(t.update)),$nextTick:t=>t.n||(t.n=hs.bind(t.proxy)),$watch:t=>ed.bind(t)}),hd={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==ce&&X(r,e))return o[e]=1,r[e];if(s!==ce&&X(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&X(l,e))return o[e]=3,i[e];if(n!==ce&&X(n,e))return o[e]=4,n[e];mi&&(o[e]=0)}}const u=Jr[e];let d,h;if(u)return e==="$attrs"&&Be(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ce&&X(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,X(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==ce&&X(s,e)?(s[e]=n,!0):r!==ce&&X(r,e)?(r[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&X(t,o)||e!==ce&&X(e,o)||(a=i[0])&&X(a,o)||X(r,o)||X(Jr,o)||X(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let mi=!0;function pd(t){const e=fl(t),n=t.proxy,r=t.ctx;mi=!1,e.beforeCreate&&Qo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:y,activated:x,deactivated:R,beforeDestroy:E,beforeUnmount:P,destroyed:U,unmounted:V,render:H,renderTracked:Y,renderTriggered:B,errorCaptured:C,serverPrefetch:j,expose:G,inheritAttrs:te,components:O,directives:ne,filters:pe}=e;if(l&&md(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const re=o[le];W(re)&&(r[le]=re.bind(n))}if(s){const le=s.call(n,n);_e(le)&&(t.data=Nn(le))}if(mi=!0,i)for(const le in i){const re=i[le],Ne=W(re)?re.bind(n,n):W(re.get)?re.get.bind(n,n):Qe,sn=!W(re)&&W(re.set)?re.set.bind(n):Qe,ct=Ye({get:Ne,set:sn});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>ct.value,set:tt=>ct.value=tt})}if(a)for(const le in a)ul(a[le],r,n,le);if(c){const le=W(c)?c.call(n):c;Reflect.ownKeys(le).forEach(re=>{Fr(re,le[re])})}u&&Qo(u,t,"c");function ge(le,re){L(re)?re.forEach(Ne=>le(Ne.bind(n))):re&&le(re.bind(n))}if(ge(od,d),ge(sl,h),ge(ad,m),ge(cd,y),ge(rd,x),ge(sd,R),ge(dd,C),ge(fd,Y),ge(ud,B),ge(il,P),ge(Zi,V),ge(ld,j),L(G))if(G.length){const le=t.exposed||(t.exposed={});G.forEach(re=>{Object.defineProperty(le,re,{get:()=>n[re],set:Ne=>n[re]=Ne})})}else t.exposed||(t.exposed={});H&&t.render===Qe&&(t.render=H),te!=null&&(t.inheritAttrs=te),O&&(t.components=O),ne&&(t.directives=ne)}function md(t,e,n=Qe,r=!1){L(t)&&(t=gi(t));for(const s in t){const i=t[s];let o;_e(i)?"default"in i?o=Ze(i.from||s,i.default,!0):o=Ze(i.from||s):o=Ze(i),be(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Qo(t,e,n){ze(L(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ul(t,e,n,r){const s=r.includes(".")?Zc(n,r):()=>n[r];if(ve(t)){const i=e[t];W(i)&&Yn(s,i)}else if(W(t))Yn(s,t.bind(n));else if(_e(t))if(L(t))t.forEach(i=>ul(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Yn(s,i,t)}}function fl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Yr(c,l,o,!0)),Yr(c,e,o)),i.set(e,c),c}function Yr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yr(t,i,n,!0),s&&s.forEach(o=>Yr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=gd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const gd={data:Zo,props:qt,emits:qt,methods:qt,computed:qt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:qt,directives:qt,watch:bd,provide:Zo,inject:_d};function Zo(t,e){return e?t?function(){return Ie(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function _d(t,e){return qt(gi(t),gi(e))}function gi(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function qt(t,e){return t?Ie(Ie(Object.create(null),t),e):e}function bd(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const r in e)n[r]=Re(t[r],e[r]);return n}function vd(t,e,n,r=!1){const s={},i={};Wr(i,vs,1),t.propsDefaults=Object.create(null),dl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ee(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ms(t.emitsOptions,h))continue;const m=e[h];if(c)if(X(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const y=at(h);s[y]=_i(c,a,y,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{dl(t,e,s,i)&&(l=!0);let u;for(const d in a)(!e||!X(e,d)&&((u=nn(d))===d||!X(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=_i(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!X(e,d)&&!0)&&(delete i[d],l=!0)}l&&gt(t,"set","$attrs")}function dl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Mr(c))continue;const l=e[c];let u;s&&X(s,u=at(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ms(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ee(n),l=a||ce;for(let u=0;u<i.length;u++){const d=i[u];n[d]=_i(s,c,d,l[d],t,!X(l,d))}}return o}function _i(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&W(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(wn(s),r=l[n]=c.call(null,e),Xt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===nn(n))&&(r=!0))}return r}function hl(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=d=>{c=!0;const[h,m]=hl(d,e,!0);Ie(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,mn),mn;if(L(i))for(let u=0;u<i.length;u++){const d=at(i[u]);ea(d)&&(o[d]=ce)}else if(i)for(const u in i){const d=at(u);if(ea(d)){const h=i[u],m=o[d]=L(h)||W(h)?{type:h}:h;if(m){const y=ra(Boolean,m.type),x=ra(String,m.type);m[0]=y>-1,m[1]=x<0||y<x,(y>-1||X(m,"default"))&&a.push(d)}}}const l=[o,a];return r.set(t,l),l}function ea(t){return t[0]!=="$"}function ta(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function na(t,e){return ta(t)===ta(e)}function ra(t,e){return L(e)?e.findIndex(n=>na(n,t)):W(e)&&na(e,t)?0:-1}const pl=t=>t[0]==="_"||t==="$stable",to=t=>L(t)?t.map(st):[st(t)],wd=(t,e,n)=>{if(e._n)return e;const r=$e((...s)=>to(e(...s)),n);return r._c=!1,r},ml=(t,e,n)=>{const r=t._ctx;for(const s in t){if(pl(s))continue;const i=t[s];if(W(i))e[s]=wd(s,i,r);else if(i!=null){const o=to(i);e[s]=()=>o}}},gl=(t,e)=>{const n=to(e);t.slots.default=()=>n},Ed=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),Wr(e,"_",n)):ml(e,t.slots={})}else t.slots={},e&&gl(t,e);Wr(t.slots,vs,1)},Id=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ie(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ml(e,s)),o=e}else e&&(gl(t,e),o={default:1});if(i)for(const a in s)!pl(a)&&!(a in o)&&delete s[a]};function _l(){return{app:null,config:{isNativeTag:Zu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sd=0;function Td(t,e){return function(r,s=null){W(r)||(r=Object.assign({},r)),s!=null&&!_e(s)&&(s=null);const i=_l(),o=new Set;let a=!1;const c=i.app={_uid:Sd++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&W(l.install)?(o.add(l),l.install(c,...u)):W(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=Z(r,s);return h.appContext=i,u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,ws(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function bi(t,e,n,r,s=!1){if(L(t)){t.forEach((h,m)=>bi(h,e&&(L(e)?e[m]:e),n,r,s));return}if(Xn(r)&&!s)return;const i=r.shapeFlag&4?ws(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ce?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(ve(l)?(u[l]=null,X(d,l)&&(d[l]=null)):be(l)&&(l.value=null)),W(c))Mt(c,a,12,[o,u]);else{const h=ve(c),m=be(c);if(h||m){const y=()=>{if(t.f){const x=h?u[c]:c.value;s?L(x)&&Hi(x,i):L(x)?x.includes(i)||x.push(i):h?(u[c]=[i],X(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,X(d,c)&&(d[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ke(y,n)):y()}}}const ke=Zf;function Ad(t){return Rd(t)}function Rd(t,e){const n=of();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Qe,cloneNode:y,insertStaticContent:x}=t,R=(f,p,g,v=null,b=null,S=null,k=!1,I=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Kt(f,p)&&(v=M(f),je(f,b,S,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:F,shapeFlag:N}=p;switch(w){case ro:E(f,p,g,v);break;case qe:P(f,p,g,v);break;case Fs:f==null&&U(p,g,v,k);break;case xe:ne(f,p,g,v,b,S,k,I,T);break;default:N&1?Y(f,p,g,v,b,S,k,I,T):N&6?pe(f,p,g,v,b,S,k,I,T):(N&64||N&128)&&w.process(f,p,g,v,b,S,k,I,T,ue)}F!=null&&b&&bi(F,f&&f.ref,S,p||f,!p)},E=(f,p,g,v)=>{if(f==null)r(p.el=a(p.children),g,v);else{const b=p.el=f.el;p.children!==f.children&&l(b,p.children)}},P=(f,p,g,v)=>{f==null?r(p.el=c(p.children||""),g,v):p.el=f.el},U=(f,p,g,v)=>{[f.el,f.anchor]=x(f.children,p,g,v,f.el,f.anchor)},V=({el:f,anchor:p},g,v)=>{let b;for(;f&&f!==p;)b=h(f),r(f,g,v),f=b;r(p,g,v)},H=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),s(f),f=g;s(p)},Y=(f,p,g,v,b,S,k,I,T)=>{k=k||p.type==="svg",f==null?B(p,g,v,b,S,k,I,T):G(f,p,b,S,k,I,T)},B=(f,p,g,v,b,S,k,I)=>{let T,w;const{type:F,props:N,shapeFlag:$,transition:q,patchFlag:Q,dirs:ie}=f;if(f.el&&y!==void 0&&Q===-1)T=f.el=y(f.el);else{if(T=f.el=o(f.type,S,N&&N.is,N),$&8?u(T,f.children):$&16&&j(f.children,T,null,v,b,S&&F!=="foreignObject",k,I),ie&&jt(f,null,v,"created"),N){for(const de in N)de!=="value"&&!Mr(de)&&i(T,de,null,N[de],S,f.children,v,b,A);"value"in N&&i(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&rt(w,v,f)}C(T,f,f.scopeId,k,v)}ie&&jt(f,null,v,"beforeMount");const oe=(!b||b&&!b.pendingBranch)&&q&&!q.persisted;oe&&q.beforeEnter(T),r(T,p,g),((w=N&&N.onVnodeMounted)||oe||ie)&&ke(()=>{w&&rt(w,v,f),oe&&q.enter(T),ie&&jt(f,null,v,"mounted")},b)},C=(f,p,g,v,b)=>{if(g&&m(f,g),v)for(let S=0;S<v.length;S++)m(f,v[S]);if(b){let S=b.subTree;if(p===S){const k=b.vnode;C(f,k,k.scopeId,k.slotScopeIds,b.parent)}}},j=(f,p,g,v,b,S,k,I,T=0)=>{for(let w=T;w<f.length;w++){const F=f[w]=I?At(f[w]):st(f[w]);R(null,F,p,g,v,b,S,k,I)}},G=(f,p,g,v,b,S,k)=>{const I=p.el=f.el;let{patchFlag:T,dynamicChildren:w,dirs:F}=p;T|=f.patchFlag&16;const N=f.props||ce,$=p.props||ce;let q;g&&Ht(g,!1),(q=$.onVnodeBeforeUpdate)&&rt(q,g,p,f),F&&jt(p,f,g,"beforeUpdate"),g&&Ht(g,!0);const Q=b&&p.type!=="foreignObject";if(w?te(f.dynamicChildren,w,I,g,v,Q,S):k||Ne(f,p,I,null,g,v,Q,S,!1),T>0){if(T&16)O(I,p,N,$,g,v,b);else if(T&2&&N.class!==$.class&&i(I,"class",null,$.class,b),T&4&&i(I,"style",N.style,$.style,b),T&8){const ie=p.dynamicProps;for(let oe=0;oe<ie.length;oe++){const de=ie[oe],Ke=N[de],on=$[de];(on!==Ke||de==="value")&&i(I,de,Ke,on,b,f.children,g,v,A)}}T&1&&f.children!==p.children&&u(I,p.children)}else!k&&w==null&&O(I,p,N,$,g,v,b);((q=$.onVnodeUpdated)||F)&&ke(()=>{q&&rt(q,g,p,f),F&&jt(p,f,g,"updated")},v)},te=(f,p,g,v,b,S,k)=>{for(let I=0;I<p.length;I++){const T=f[I],w=p[I],F=T.el&&(T.type===xe||!Kt(T,w)||T.shapeFlag&70)?d(T.el):g;R(T,w,F,null,v,b,S,k,!0)}},O=(f,p,g,v,b,S,k)=>{if(g!==v){for(const I in v){if(Mr(I))continue;const T=v[I],w=g[I];T!==w&&I!=="value"&&i(f,I,w,T,k,p.children,b,S,A)}if(g!==ce)for(const I in g)!Mr(I)&&!(I in v)&&i(f,I,g[I],null,k,p.children,b,S,A);"value"in v&&i(f,"value",g.value,v.value)}},ne=(f,p,g,v,b,S,k,I,T)=>{const w=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:q}=p;q&&(I=I?I.concat(q):q),f==null?(r(w,g,v),r(F,g,v),j(p.children,g,F,b,S,k,I,T)):N>0&&N&64&&$&&f.dynamicChildren?(te(f.dynamicChildren,$,g,b,S,k,I),(p.key!=null||b&&p===b.subTree)&&no(f,p,!0)):Ne(f,p,g,F,b,S,k,I,T)},pe=(f,p,g,v,b,S,k,I,T)=>{p.slotScopeIds=I,f==null?p.shapeFlag&512?b.ctx.activate(p,g,v,k,T):me(p,g,v,b,S,k,T):ge(f,p,T)},me=(f,p,g,v,b,S,k)=>{const I=f.component=$d(f,v,b);if(gs(f)&&(I.ctx.renderer=ue),Bd(I),I.asyncDep){if(b&&b.registerDep(I,le),!f.el){const T=I.subTree=Z(qe);P(null,T,p,g)}return}le(I,f,p,g,b,S,k)},ge=(f,p,g)=>{const v=p.component=f.component;if(Yf(f,p,g))if(v.asyncDep&&!v.asyncResolved){re(v,p,g);return}else v.next=p,zf(v.update),v.update();else p.el=f.el,v.vnode=p},le=(f,p,g,v,b,S,k)=>{const I=()=>{if(f.isMounted){let{next:F,bu:N,u:$,parent:q,vnode:Q}=f,ie=F,oe;Ht(f,!1),F?(F.el=Q.el,re(f,F,k)):F=Q,N&&Ur(N),(oe=F.props&&F.props.onVnodeBeforeUpdate)&&rt(oe,q,F,Q),Ht(f,!0);const de=Ls(f),Ke=f.subTree;f.subTree=de,R(Ke,de,d(Ke.el),M(Ke),f,b,S),F.el=de.el,ie===null&&Xf(f,de.el),$&&ke($,b),(oe=F.props&&F.props.onVnodeUpdated)&&ke(()=>rt(oe,q,F,Q),b)}else{let F;const{el:N,props:$}=p,{bm:q,m:Q,parent:ie}=f,oe=Xn(p);if(Ht(f,!1),q&&Ur(q),!oe&&(F=$&&$.onVnodeBeforeMount)&&rt(F,ie,p),Ht(f,!0),N&&K){const de=()=>{f.subTree=Ls(f),K(N,f.subTree,f,b,null)};oe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=Ls(f);R(null,de,g,v,f,b,S),p.el=de.el}if(Q&&ke(Q,b),!oe&&(F=$&&$.onVnodeMounted)){const de=p;ke(()=>rt(F,ie,de),b)}(p.shapeFlag&256||ie&&Xn(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&ke(f.a,b),f.isMounted=!0,p=g=v=null}},T=f.effect=new qi(I,()=>qc(w),f.scope),w=f.update=()=>T.run();w.id=f.uid,Ht(f,!0),w()},re=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,yd(f,p.props,v,g),Id(f,p.children,g),On(),ps(void 0,f.update),Pn()},Ne=(f,p,g,v,b,S,k,I,T=!1)=>{const w=f&&f.children,F=f?f.shapeFlag:0,N=p.children,{patchFlag:$,shapeFlag:q}=p;if($>0){if($&128){ct(w,N,g,v,b,S,k,I,T);return}else if($&256){sn(w,N,g,v,b,S,k,I,T);return}}q&8?(F&16&&A(w,b,S),N!==w&&u(g,N)):F&16?q&16?ct(w,N,g,v,b,S,k,I,T):A(w,b,S,!0):(F&8&&u(g,""),q&16&&j(N,g,v,b,S,k,I,T))},sn=(f,p,g,v,b,S,k,I,T)=>{f=f||mn,p=p||mn;const w=f.length,F=p.length,N=Math.min(w,F);let $;for($=0;$<N;$++){const q=p[$]=T?At(p[$]):st(p[$]);R(f[$],q,g,null,b,S,k,I,T)}w>F?A(f,b,S,!0,!1,N):j(p,g,v,b,S,k,I,T,N)},ct=(f,p,g,v,b,S,k,I,T)=>{let w=0;const F=p.length;let N=f.length-1,$=F-1;for(;w<=N&&w<=$;){const q=f[w],Q=p[w]=T?At(p[w]):st(p[w]);if(Kt(q,Q))R(q,Q,g,null,b,S,k,I,T);else break;w++}for(;w<=N&&w<=$;){const q=f[N],Q=p[$]=T?At(p[$]):st(p[$]);if(Kt(q,Q))R(q,Q,g,null,b,S,k,I,T);else break;N--,$--}if(w>N){if(w<=$){const q=$+1,Q=q<F?p[q].el:v;for(;w<=$;)R(null,p[w]=T?At(p[w]):st(p[w]),g,Q,b,S,k,I,T),w++}}else if(w>$)for(;w<=N;)je(f[w],b,S,!0),w++;else{const q=w,Q=w,ie=new Map;for(w=Q;w<=$;w++){const De=p[w]=T?At(p[w]):st(p[w]);De.key!=null&&ie.set(De.key,w)}let oe,de=0;const Ke=$-Q+1;let on=!1,Mo=0;const $n=new Array(Ke);for(w=0;w<Ke;w++)$n[w]=0;for(w=q;w<=N;w++){const De=f[w];if(de>=Ke){je(De,b,S,!0);continue}let nt;if(De.key!=null)nt=ie.get(De.key);else for(oe=Q;oe<=$;oe++)if($n[oe-Q]===0&&Kt(De,p[oe])){nt=oe;break}nt===void 0?je(De,b,S,!0):($n[nt-Q]=w+1,nt>=Mo?Mo=nt:on=!0,R(De,p[nt],g,null,b,S,k,I,T),de++)}const Lo=on?Cd($n):mn;for(oe=Lo.length-1,w=Ke-1;w>=0;w--){const De=Q+w,nt=p[De],Uo=De+1<F?p[De+1].el:v;$n[w]===0?R(null,nt,g,Uo,b,S,k,I,T):on&&(oe<0||w!==Lo[oe]?tt(nt,g,Uo,2):oe--)}}},tt=(f,p,g,v,b=null)=>{const{el:S,type:k,transition:I,children:T,shapeFlag:w}=f;if(w&6){tt(f.component.subTree,p,g,v);return}if(w&128){f.suspense.move(p,g,v);return}if(w&64){k.move(f,p,g,ue);return}if(k===xe){r(S,p,g);for(let N=0;N<T.length;N++)tt(T[N],p,g,v);r(f.anchor,p,g);return}if(k===Fs){V(f,p,g);return}if(v!==2&&w&1&&I)if(v===0)I.beforeEnter(S),r(S,p,g),ke(()=>I.enter(S),b);else{const{leave:N,delayLeave:$,afterLeave:q}=I,Q=()=>r(S,p,g),ie=()=>{N(S,()=>{Q(),q&&q()})};$?$(S,Q,ie):ie()}else r(S,p,g)},je=(f,p,g,v=!1,b=!1)=>{const{type:S,props:k,ref:I,children:T,dynamicChildren:w,shapeFlag:F,patchFlag:N,dirs:$}=f;if(I!=null&&bi(I,null,g,f,!0),F&256){p.ctx.deactivate(f);return}const q=F&1&&$,Q=!Xn(f);let ie;if(Q&&(ie=k&&k.onVnodeBeforeUnmount)&&rt(ie,p,f),F&6)D(f.component,g,v);else{if(F&128){f.suspense.unmount(g,v);return}q&&jt(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,g,b,ue,v):w&&(S!==xe||N>0&&N&64)?A(w,p,g,!1,!0):(S===xe&&N&384||!b&&F&16)&&A(T,p,g),v&&Ms(f)}(Q&&(ie=k&&k.onVnodeUnmounted)||q)&&ke(()=>{ie&&rt(ie,p,f),q&&jt(f,null,p,"unmounted")},g)},Ms=f=>{const{type:p,el:g,anchor:v,transition:b}=f;if(p===xe){_(g,v);return}if(p===Fs){H(f);return}const S=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:k,delayLeave:I}=b,T=()=>k(g,S);I?I(f.el,S,T):T()}else S()},_=(f,p)=>{let g;for(;f!==p;)g=h(f),s(f),f=g;s(p)},D=(f,p,g)=>{const{bum:v,scope:b,update:S,subTree:k,um:I}=f;v&&Ur(v),b.stop(),S&&(S.active=!1,je(k,f,p,g)),I&&ke(I,p),ke(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},A=(f,p,g,v=!1,b=!1,S=0)=>{for(let k=S;k<f.length;k++)je(f[k],p,g,v,b)},M=f=>f.shapeFlag&6?M(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),se=(f,p,g)=>{f==null?p._vnode&&je(p._vnode,null,null,!0):R(p._vnode||null,f,p,null,null,null,g),Gc(),p._vnode=f},ue={p:R,um:je,m:tt,r:Ms,mt:me,mc:j,pc:Ne,pbc:te,n:M,o:t};let J,K;return e&&([J,K]=e(ue)),{render:se,hydrate:J,createApp:Td(se,J)}}function Ht({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function no(t,e,n=!1){const r=t.children,s=e.children;if(L(r)&&L(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=At(s[i]),a.el=o.el),n||no(o,a))}}function Cd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const kd=t=>t.__isTeleport,Qn=t=>t&&(t.disabled||t.disabled===""),sa=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,vi=(t,e)=>{const n=t&&t.to;return ve(n)?e?e(n):null:n},xd={__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:d,pbc:h,o:{insert:m,querySelector:y,createText:x,createComment:R}}=l,E=Qn(e.props);let{shapeFlag:P,children:U,dynamicChildren:V}=e;if(t==null){const H=e.el=x(""),Y=e.anchor=x("");m(H,n,r),m(Y,n,r);const B=e.target=vi(e.props,y),C=e.targetAnchor=x("");B&&(m(C,B),o=o||sa(B));const j=(G,te)=>{P&16&&u(U,G,te,s,i,o,a,c)};E?j(n,Y):B&&j(B,C)}else{e.el=t.el;const H=e.anchor=t.anchor,Y=e.target=t.target,B=e.targetAnchor=t.targetAnchor,C=Qn(t.props),j=C?n:Y,G=C?H:B;if(o=o||sa(Y),V?(h(t.dynamicChildren,V,j,s,i,o,a),no(t,e,!0)):c||d(t,e,j,G,s,i,o,a,!1),E)C||Or(e,n,H,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const te=e.target=vi(e.props,y);te&&Or(e,te,null,l,0)}else C&&Or(e,Y,B,l,1)}},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:h}=t;if(d&&i(u),(o||!Qn(h))&&(i(l),a&16))for(let m=0;m<c.length;m++){const y=c[m];s(y,e,n,!0,!!y.dynamicChildren)}},move:Or,hydrate:Od};function Or(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,d=i===2;if(d&&r(o,e,n),(!d||Qn(u))&&c&16)for(let h=0;h<l.length;h++)s(l[h],e,n,2);d&&r(a,e,n)}function Od(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=vi(e.props,c);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Qn(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=d;else{e.anchor=o(t);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(d,e,u,n,r,s,i)}}return e.anchor&&o(e.anchor)}const Cy=xd,xe=Symbol(void 0),ro=Symbol(void 0),qe=Symbol(void 0),Fs=Symbol(void 0),Zn=[];let Xe=null;function Ee(t=!1){Zn.push(Xe=t?null:[])}function Pd(){Zn.pop(),Xe=Zn[Zn.length-1]||null}let ur=1;function ia(t){ur+=t}function bl(t){return t.dynamicChildren=ur>0?Xe||mn:null,Pd(),ur>0&&Xe&&Xe.push(t),t}function Ce(t,e,n,r,s,i){return bl(Ft(t,e,n,r,s,i,!0))}function vl(t,e,n,r,s){return bl(Z(t,e,n,r,s,!0))}function Xr(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const vs="__vInternal",yl=({key:t})=>t!=null?t:null,$r=({ref:t,ref_key:e,ref_for:n})=>t!=null?ve(t)||be(t)||W(t)?{i:Te,r:t,k:e,f:!!n}:t:null;function Ft(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&yl(e),ref:e&&$r(e),scopeId:Xc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(so(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),ur>0&&!o&&Xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Xe.push(c),c}const Z=Nd;function Nd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===al)&&(t=qe),Xr(t)){const a=$t(t,e,!0);return n&&so(a,n),ur>0&&!i&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(t)]=a:Xe.push(a)),a.patchFlag|=-2,a}if(zd(t)&&(t=t.__vccOpts),e){e=Dd(e);let{class:a,style:c}=e;a&&!ve(a)&&(e.class=as(a)),_e(c)&&($c(c)&&!L(c)&&(c=Ie({},c)),e.style=os(c))}const o=ve(t)?1:Qf(t)?128:kd(t)?64:_e(t)?4:W(t)?2:0;return Ft(t,e,n,r,s,o,i,!0)}function Dd(t){return t?$c(t)||vs in t?Ie({},t):t:null}function $t(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Ld(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&yl(a),ref:e&&e.ref?n&&s?L(s)?s.concat($r(e)):[s,$r(e)]:$r(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor}}function yi(t=" ",e=0){return Z(ro,null,t,e)}function Md(t="",e=!1){return e?(Ee(),vl(qe,null,t)):Z(qe,null,t)}function st(t){return t==null||typeof t=="boolean"?Z(qe):L(t)?Z(xe,null,t.slice()):typeof t=="object"?At(t):Z(ro,null,String(t))}function At(t){return t.el===null||t.memo?t:$t(t)}function so(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),so(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(vs in e)?e._ctx=Te:s===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[yi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ld(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=as([e.class,r.class]));else if(s==="style")e.style=os([e.style,r.style]);else if(cs(s)){const i=e[s],o=r[s];o&&i!==o&&!(L(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rt(t,e,n,r=null){ze(t,e,7,[n,r])}const Ud=_l();let Fd=0;function $d(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ud,i={uid:Fd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ac(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hl(r,s),emitsOptions:Yc(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Kf.bind(null,i),t.ce&&t.ce(i),i}let we=null;const ys=()=>we||Te,wn=t=>{we=t,t.scope.on()},Xt=()=>{we&&we.scope.off(),we=null};function wl(t){return t.vnode.shapeFlag&4}let fr=!1;function Bd(t,e=!1){fr=e;const{props:n,children:r}=t.vnode,s=wl(t);vd(t,n,s,e),Ed(t,r);const i=s?jd(t,e):void 0;return fr=!1,i}function jd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=yn(new Proxy(t.ctx,hd));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Il(t):null;wn(t),On();const i=Mt(r,t,0,[t.props,s]);if(Pn(),Xt(),Ic(i)){if(i.then(Xt,Xt),e)return i.then(o=>{oa(t,o,e)}).catch(o=>{ds(o,t,0)});t.asyncDep=i}else oa(t,i,e)}else El(t,e)}function oa(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=Vc(e)),El(t,n)}let aa;function El(t,e,n){const r=t.type;if(!t.render){if(!e&&aa&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ie(Ie({isCustomElement:i,delimiters:a},o),c);r.render=aa(s,l)}}t.render=r.render||Qe}wn(t),On(),pd(t),Pn(),Xt()}function Hd(t){return new Proxy(t.attrs,{get(e,n){return Be(t,"get","$attrs"),e[n]}})}function Il(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Hd(t))},slots:t.slots,emit:t.emit,expose:e}}function ws(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vc(yn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Jr)return Jr[n](t)}}))}function Vd(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function zd(t){return W(t)&&"__vccOpts"in t}const Ye=(t,e)=>jf(t,e,fr);function ky(){return qd().slots}function qd(){const t=ys();return t.setupContext||(t.setupContext=Il(t))}function io(t,e,n){const r=arguments.length;return r===2?_e(e)&&!L(e)?Xr(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xr(n)&&(n=[n]),Z(t,e,n))}const Wd="3.2.37",Kd="http://www.w3.org/2000/svg",Gt=typeof document!="undefined"?document:null,ca=Gt&&Gt.createElement("template"),Gd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Gt.createElementNS(Kd,t):Gt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ca.innerHTML=r?`<svg>${t}</svg>`:t;const a=ca.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jd(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Yd(t,e,n){const r=t.style,s=ve(n);if(n&&!s){for(const i in n)wi(r,i,n[i]);if(e&&!ve(e))for(const i in e)n[i]==null&&wi(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const la=/\s*!important$/;function wi(t,e,n){if(L(n))n.forEach(r=>wi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Xd(t,e);la.test(n)?t.setProperty(nn(r),n.replace(la,""),"important"):t[r]=n}}const ua=["Webkit","Moz","ms"],$s={};function Xd(t,e){const n=$s[e];if(n)return n;let r=at(e);if(r!=="filter"&&r in t)return $s[e]=r;r=us(r);for(let s=0;s<ua.length;s++){const i=ua[s]+r;if(i in t)return $s[e]=i}return e}const fa="http://www.w3.org/1999/xlink";function Qd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(fa,e.slice(6,e.length)):t.setAttributeNS(fa,e,n);else{const i=Gu(e);n==null||i&&!wc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Zd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=wc(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Sl,eh]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ei=0;const th=Promise.resolve(),nh=()=>{Ei=0},rh=()=>Ei||(th.then(nh),Ei=Sl());function dt(t,e,n,r){t.addEventListener(e,n,r)}function sh(t,e,n,r){t.removeEventListener(e,n,r)}function ih(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=oh(e);if(r){const l=i[e]=ah(r,s);dt(t,a,l,c)}else o&&(sh(t,a,o,c),i[e]=void 0)}}const da=/(?:Once|Passive|Capture)$/;function oh(t){let e;if(da.test(t)){e={};let n;for(;n=t.match(da);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[nn(t.slice(2)),e]}function ah(t,e){const n=r=>{const s=r.timeStamp||Sl();(eh||s>=n.attached-1)&&ze(ch(r,n.value),e,5,[r])};return n.value=t,n.attached=rh(),n}function ch(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ha=/^on[a-z]/,lh=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Jd(t,r,s):e==="style"?Yd(t,n,r):cs(e)?ji(e)||ih(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uh(t,e,r,s))?Zd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qd(t,e,r,s))};function uh(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ha.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ha.test(e)&&ve(n)?!1:e in t}const yt="transition",Bn="animation",Tl=(t,{slots:e})=>io(el,fh(t),e);Tl.displayName="Transition";const Al={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Tl.props=Ie({},el.props,Al);const Vt=(t,e=[])=>{L(t)?t.forEach(n=>n(...e)):t&&t(...e)},pa=t=>t?L(t)?t.some(e=>e.length>1):t.length>1:!1;function fh(t){const e={};for(const O in t)O in Al||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=dh(s),x=y&&y[0],R=y&&y[1],{onBeforeEnter:E,onEnter:P,onEnterCancelled:U,onLeave:V,onLeaveCancelled:H,onBeforeAppear:Y=E,onAppear:B=P,onAppearCancelled:C=U}=e,j=(O,ne,pe)=>{zt(O,ne?u:a),zt(O,ne?l:o),pe&&pe()},G=(O,ne)=>{O._isLeaving=!1,zt(O,d),zt(O,m),zt(O,h),ne&&ne()},te=O=>(ne,pe)=>{const me=O?B:P,ge=()=>j(ne,O,pe);Vt(me,[ne,ge]),ma(()=>{zt(ne,O?c:i),wt(ne,O?u:a),pa(me)||ga(ne,r,x,ge)})};return Ie(e,{onBeforeEnter(O){Vt(E,[O]),wt(O,i),wt(O,o)},onBeforeAppear(O){Vt(Y,[O]),wt(O,c),wt(O,l)},onEnter:te(!1),onAppear:te(!0),onLeave(O,ne){O._isLeaving=!0;const pe=()=>G(O,ne);wt(O,d),mh(),wt(O,h),ma(()=>{!O._isLeaving||(zt(O,d),wt(O,m),pa(V)||ga(O,r,R,pe))}),Vt(V,[O,pe])},onEnterCancelled(O){j(O,!1),Vt(U,[O])},onAppearCancelled(O){j(O,!0),Vt(C,[O])},onLeaveCancelled(O){G(O),Vt(H,[O])}})}function dh(t){if(t==null)return null;if(_e(t))return[Bs(t.enter),Bs(t.leave)];{const e=Bs(t);return[e,e]}}function Bs(t){return or(t)}function wt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function zt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ma(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hh=0;function ga(t,e,n,r){const s=t._endId=++hh,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ph(t,e);if(!o)return r();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,h),i()},h=m=>{m.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,h)}function ph(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(yt+"Delay"),i=r(yt+"Duration"),o=_a(s,i),a=r(Bn+"Delay"),c=r(Bn+"Duration"),l=_a(a,c);let u=null,d=0,h=0;e===yt?o>0&&(u=yt,d=o,h=i.length):e===Bn?l>0&&(u=Bn,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?yt:Bn:null,h=u?u===yt?i.length:c.length:0);const m=u===yt&&/\b(transform|all)(,|$)/.test(n[yt+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:m}}function _a(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>ba(n)+ba(t[r])))}function ba(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function mh(){return document.body.offsetHeight}const Bt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>Ur(e,n):e};function gh(t){t.target.composing=!0}function va(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ya={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Bt(s);const i=r||s.props&&s.props.type==="number";dt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=or(a)),t._assign(a)}),n&&dt(t,"change",()=>{t.value=t.value.trim()}),e||(dt(t,"compositionstart",gh),dt(t,"compositionend",va),dt(t,"change",va))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Bt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&or(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},_h={deep:!0,created(t,e,n){t._assign=Bt(n),dt(t,"change",()=>{const r=t._modelValue,s=En(t),i=t.checked,o=t._assign;if(L(r)){const a=Bi(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(xn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Rl(t,i))})},mounted:wa,beforeUpdate(t,e,n){t._assign=Bt(n),wa(t,e,n)}};function wa(t,{value:e,oldValue:n},r){t._modelValue=e,L(e)?t.checked=Bi(e,r.props.value)>-1:xn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Zt(e,Rl(t,!0)))}const bh={created(t,{value:e},n){t.checked=Zt(e,n.props.value),t._assign=Bt(n),dt(t,"change",()=>{t._assign(En(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Bt(r),e!==n&&(t.checked=Zt(e,r.props.value))}},vh={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=xn(e);dt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?or(En(o)):En(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Bt(r)},mounted(t,{value:e}){Ea(t,e)},beforeUpdate(t,e,n){t._assign=Bt(n)},updated(t,{value:e}){Ea(t,e)}};function Ea(t,e){const n=t.multiple;if(!(n&&!L(e)&&!xn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=En(i);if(n)L(e)?i.selected=Bi(e,o)>-1:i.selected=e.has(o);else if(Zt(En(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function En(t){return"_value"in t?t._value:t.value}function Rl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const xy={created(t,e,n){Pr(t,e,n,null,"created")},mounted(t,e,n){Pr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Pr(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Pr(t,e,n,r,"updated")}};function yh(t,e){switch(t){case"SELECT":return vh;case"TEXTAREA":return ya;default:switch(e){case"checkbox":return _h;case"radio":return bh;default:return ya}}}function Pr(t,e,n,r,s){const o=yh(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const wh=["ctrl","shift","alt","meta"],Eh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wh.some(n=>t[`${n}Key`]&&!e.includes(n))},Ih=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Eh[e[s]];if(i&&i(n,e))return}return t(n,...r)},Sh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Oy=(t,e)=>n=>{if(!("key"in n))return;const r=nn(n.key);if(e.some(s=>s===r||Sh[s]===r))return t(n)},Py={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):jn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),jn(t,!0),r.enter(t)):r.leave(t,()=>{jn(t,!1)}):jn(t,e))},beforeUnmount(t,{value:e}){jn(t,e)}};function jn(t,e){t.style.display=e?t._vod:"none"}const Th=Ie({patchProp:lh},Gd);let Ia;function Ah(){return Ia||(Ia=Ad(Th))}const Rh=(...t)=>{const e=Ah().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ch(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Ch(t){return ve(t)?document.querySelector(t):t}var kh=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Cl;const Es=t=>Cl=t,kl=Symbol();function Ii(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var er;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(er||(er={}));function xh(){const t=Rc(!0),e=t.run(()=>Xi({}));let n=[],r=[];const s=yn({install(i){Es(s),s._a=i,i.provide(kl,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!kh?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const xl=()=>{};function Sa(t,e,n,r=xl){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ys()&&Zi(s),s}function an(t,...e){t.slice().forEach(n=>{n(...e)})}function Si(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ii(s)&&Ii(r)&&t.hasOwnProperty(n)&&!be(r)&&!Dt(r)?t[n]=Si(s,r):t[n]=r}return t}const Oh=Symbol();function Ph(t){return!Ii(t)||!t.hasOwnProperty(Oh)}const{assign:ut}=Object;function Nh(t){return!!(be(t)&&t.effect)}function Dh(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Uf(n.state.value[t]);return ut(u,i,Object.keys(o||{}).reduce((d,h)=>(d[h]=yn(Ye(()=>{Es(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return c=Ol(t,l,e,n,r,!0),c.$reset=function(){const d=s?s():{};this.$patch(h=>{ut(h,d)})},c}function Ol(t,e,n={},r,s,i){let o;const a=ut({actions:{}},n),c={deep:!0};let l,u,d=yn([]),h=yn([]),m;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Xi({});let x;function R(B){let C;l=u=!1,typeof B=="function"?(B(r.state.value[t]),C={type:er.patchFunction,storeId:t,events:m}):(Si(r.state.value[t],B),C={type:er.patchObject,payload:B,storeId:t,events:m});const j=x=Symbol();hs().then(()=>{x===j&&(l=!0)}),u=!0,an(d,C,r.state.value[t])}const E=xl;function P(){o.stop(),d=[],h=[],r._s.delete(t)}function U(B,C){return function(){Es(r);const j=Array.from(arguments),G=[],te=[];function O(me){G.push(me)}function ne(me){te.push(me)}an(h,{args:j,name:B,store:H,after:O,onError:ne});let pe;try{pe=C.apply(this&&this.$id===t?this:H,j)}catch(me){throw an(te,me),me}return pe instanceof Promise?pe.then(me=>(an(G,me),me)).catch(me=>(an(te,me),Promise.reject(me))):(an(G,pe),pe)}}const V={_p:r,$id:t,$onAction:Sa.bind(null,h),$patch:R,$reset:E,$subscribe(B,C={}){const j=Sa(d,B,C.detached,()=>G()),G=o.run(()=>Yn(()=>r.state.value[t],te=>{(C.flush==="sync"?u:l)&&B({storeId:t,type:er.direct,events:m},te)},ut({},c,C)));return j},$dispose:P},H=Nn(ut({},V));r._s.set(t,H);const Y=r._e.run(()=>(o=Rc(),o.run(()=>e())));for(const B in Y){const C=Y[B];if(be(C)&&!Nh(C)||Dt(C))i||(y&&Ph(C)&&(be(C)?C.value=y[B]:Si(C,y[B])),r.state.value[t][B]=C);else if(typeof C=="function"){const j=U(B,C);Y[B]=j,a.actions[B]=C}}return ut(H,Y),ut(ee(H),Y),Object.defineProperty(H,"$state",{get:()=>r.state.value[t],set:B=>{R(C=>{ut(C,B)})}}),r._p.forEach(B=>{ut(H,o.run(()=>B({store:H,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(H.$state,y),l=!0,u=!0,H}function oo(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=ys();return a=a||l&&Ze(kl),a&&Es(a),a=Cl,a._s.has(r)||(i?Ol(r,e,s,a):Dh(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Pl=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Dn=t=>Pl?Symbol(t):"_vr_"+t,Mh=Dn("rvlm"),Ta=Dn("rvd"),Is=Dn("r"),ao=Dn("rl"),Ti=Dn("rvl"),hn=typeof window!="undefined";function Lh(t){return t.__esModule||Pl&&t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function js(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const tr=()=>{},Uh=/\/$/,Fh=t=>t.replace(Uh,"");function Hs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Hh(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function $h(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Aa(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&In(e.matched[r],n.matched[s])&&Nl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Nl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jh(t[n],e[n]))return!1;return!0}function jh(t,e){return Array.isArray(t)?Ra(t,e):Array.isArray(e)?Ra(e,t):t===e}function Ra(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Hh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var dr;(function(t){t.pop="pop",t.push="push"})(dr||(dr={}));var nr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(nr||(nr={}));function Vh(t){if(!t)if(hn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fh(t)}const zh=/^[^#]+#/;function qh(t,e){return t.replace(zh,"#")+e}function Wh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ss=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Wh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ca(t,e){return(history.state?history.state.position-e:-1)+t}const Ai=new Map;function Gh(t,e){Ai.set(t,e)}function Jh(t){const e=Ai.get(t);return Ai.delete(t),e}let Yh=()=>location.protocol+"//"+location.host;function Dl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Aa(c,"")}return Aa(n,t)+r+s}function Xh(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=Dl(t,location),y=n.value,x=e.value;let R=0;if(h){if(n.value=m,e.value=h,o&&o===y){o=null;return}R=x?h.position-x.position:0}else r(m);s.forEach(E=>{E(n.value,y,{delta:R,type:dr.pop,direction:R?R>0?nr.forward:nr.back:nr.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(ae({},h.state,{scroll:Ss()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function ka(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ss():null}}function Qh(t){const{history:e,location:n}=window,r={value:Dl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Yh()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=ae({},e.state,ka(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ae({},s.value,e.state,{forward:c,scroll:Ss()});i(u.current,u,!0);const d=ae({},ka(r.value,c,null),{position:u.position+1},l);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Zh(t){t=Vh(t);const e=Qh(t),n=Xh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ae({location:"",base:t,go:r,createHref:qh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ep(t){return typeof t=="string"||t&&typeof t=="object"}function Ml(t){return typeof t=="string"||typeof t=="symbol"}const Et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ll=Dn("nf");var xa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xa||(xa={}));function Sn(t,e){return ae(new Error,{type:t,[Ll]:!0},e)}function It(t,e){return t instanceof Error&&Ll in t&&(e==null||!!(t.type&e))}const Oa="[^/]+?",tp={sensitive:!1,strict:!1,start:!0,end:!0},np=/[.+*?^${}()[\]/\\]/g;function rp(t,e){const n=ae({},tp,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const h=l[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(s+="/"),s+=h.value.replace(np,"\\$&"),m+=40;else if(h.type===1){const{value:y,repeatable:x,optional:R,regexp:E}=h;i.push({name:y,repeatable:x,optional:R});const P=E||Oa;if(P!==Oa){m+=10;try{new RegExp(`(${P})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+V.message)}}let U=x?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;d||(U=R&&l.length<2?`(?:/${U})`:"/"+U),R&&(U+="?"),s+=U,m+=20,R&&(m+=-8),x&&(m+=-20),P===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",y=i[h-1];d[y.name]=m&&y.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:x,optional:R}=m,E=y in l?l[y]:"";if(Array.isArray(E)&&!x)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(E)?E.join("/"):E;if(!P)if(R)h.length<2&&t.length>1&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function sp(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ip(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=sp(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pa(r))return 1;if(Pa(s))return-1}return s.length-r.length}function Pa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const op={type:0,value:""},ap=/[a-zA-Z0-9_]/;function cp(t){if(!t)return[[]];if(t==="/")return[[op]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:ap.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function lp(t,e,n){const r=rp(cp(t.path),n),s=ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function up(t,e){const n=[],r=new Map;e=Da({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,d,h){const m=!h,y=dp(u);y.aliasOf=h&&h.record;const x=Da(e,u),R=[y];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of U)R.push(ae({},y,{components:h?h.record.components:y.components,path:V,aliasOf:h?h.record:y}))}let E,P;for(const U of R){const{path:V}=U;if(d&&V[0]!=="/"){const H=d.record.path,Y=H[H.length-1]==="/"?"":"/";U.path=d.record.path+(V&&Y+V)}if(E=lp(U,d,x),h?h.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),m&&u.name&&!Na(E)&&o(u.name)),"children"in y){const H=y.children;for(let Y=0;Y<H.length;Y++)i(H[Y],E,h&&h.children[Y])}h=h||E,c(E)}return P?()=>{o(P)}:tr}function o(u){if(Ml(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&ip(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Ul(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Na(u)&&r.set(u.record.name,u)}function l(u,d){let h,m={},y,x;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Sn(1,{location:u});x=h.record.name,m=ae(fp(d.params,h.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),y=h.stringify(m)}else if("path"in u)y=u.path,h=n.find(P=>P.re.test(y)),h&&(m=h.parse(y),x=h.record.name);else{if(h=d.name?r.get(d.name):n.find(P=>P.re.test(d.path)),!h)throw Sn(1,{location:u,currentLocation:d});x=h.record.name,m=ae({},d.params,u.params),y=h.stringify(m)}const R=[];let E=h;for(;E;)R.unshift(E.record),E=E.parent;return{name:x,path:y,params:m,matched:R,meta:pp(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function fp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hp(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function hp(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Na(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pp(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Da(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ul(t,e){return e.children.some(n=>n===t||Ul(t,n))}const Fl=/#/g,mp=/&/g,gp=/\//g,_p=/=/g,bp=/\?/g,$l=/\+/g,vp=/%5B/g,yp=/%5D/g,Bl=/%5E/g,wp=/%60/g,jl=/%7B/g,Ep=/%7C/g,Hl=/%7D/g,Ip=/%20/g;function co(t){return encodeURI(""+t).replace(Ep,"|").replace(vp,"[").replace(yp,"]")}function Sp(t){return co(t).replace(jl,"{").replace(Hl,"}").replace(Bl,"^")}function Ri(t){return co(t).replace($l,"%2B").replace(Ip,"+").replace(Fl,"%23").replace(mp,"%26").replace(wp,"`").replace(jl,"{").replace(Hl,"}").replace(Bl,"^")}function Tp(t){return Ri(t).replace(_p,"%3D")}function Ap(t){return co(t).replace(Fl,"%23").replace(bp,"%3F")}function Rp(t){return t==null?"":Ap(t).replace(gp,"%2F")}function Qr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Cp(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($l," "),o=i.indexOf("="),a=Qr(o<0?i:i.slice(0,o)),c=o<0?null:Qr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ma(t){let e="";for(let n in t){const r=t[n];if(n=Tp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ri(i)):[r&&Ri(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kp(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Hn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Rt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(Sn(4,{from:n,to:e})):d instanceof Error?a(d):ep(d)?a(Sn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Vs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(xp(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Rt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Lh(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Rt(h,n,r,i,o)()}))}}return s}function xp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function La(t){const e=Ze(Is),n=Ze(ao),r=Ye(()=>e.resolve(mt(t.to))),s=Ye(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(In.bind(null,u));if(h>-1)return h;const m=Ua(c[l-2]);return l>1&&Ua(u)===m&&d[d.length-1].path!==m?d.findIndex(In.bind(null,c[l-2])):h}),i=Ye(()=>s.value>-1&&Dp(n.params,r.value.params)),o=Ye(()=>s.value>-1&&s.value===n.matched.length-1&&Nl(n.params,r.value.params));function a(c={}){return Np(c)?e[mt(t.replace)?"replace":"push"](mt(t.to)).catch(tr):Promise.resolve()}return{route:r,href:Ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Op=We({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:La,setup(t,{slots:e}){const n=Nn(La(t)),{options:r}=Ze(Is),s=Ye(()=>({[Fa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:io("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Pp=Op;function Np(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Dp(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ua(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fa=(t,e,n)=>t!=null?t:e!=null?e:n,Mp=We({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ze(Ti),s=Ye(()=>t.route||r.value),i=Ze(Ta,0),o=Ye(()=>s.value.matched[i]);Fr(Ta,i+1),Fr(Mh,o),Fr(Ti,s);const a=Xi();return Yn(()=>[a.value,o.value,t.name],([c,l,u],[d,h,m])=>{l&&(l.instances[u]=c,h&&h!==l&&c&&c===d&&(l.leaveGuards.size||(l.leaveGuards=h.leaveGuards),l.updateGuards.size||(l.updateGuards=h.updateGuards))),c&&l&&(!h||!In(l,h)||!d)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],d=t.name;if(!u)return $a(n.default,{Component:u,route:c});const h=l.props[t.name],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,x=io(u,ae({},m,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[d]=null)},ref:a}));return $a(n.default,{Component:x,route:c})||x}}});function $a(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Lp=Mp;function Up(t){const e=up(t.routes,t),n=t.parseQuery||Cp,r=t.stringifyQuery||Ma,s=t.history,i=Hn(),o=Hn(),a=Hn(),c=Df(Et);let l=Et;hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=js.bind(null,_=>""+_),d=js.bind(null,Rp),h=js.bind(null,Qr);function m(_,D){let A,M;return Ml(_)?(A=e.getRecordMatcher(_),M=D):M=_,e.addRoute(M,A)}function y(_){const D=e.getRecordMatcher(_);D&&e.removeRoute(D)}function x(){return e.getRoutes().map(_=>_.record)}function R(_){return!!e.getRecordMatcher(_)}function E(_,D){if(D=ae({},D||c.value),typeof _=="string"){const K=Hs(n,_,D.path),f=e.resolve({path:K.path},D),p=s.createHref(K.fullPath);return ae(K,f,{params:h(f.params),hash:Qr(K.hash),redirectedFrom:void 0,href:p})}let A;if("path"in _)A=ae({},_,{path:Hs(n,_.path,D.path).path});else{const K=ae({},_.params);for(const f in K)K[f]==null&&delete K[f];A=ae({},_,{params:d(_.params)}),D.params=d(D.params)}const M=e.resolve(A,D),se=_.hash||"";M.params=u(h(M.params));const ue=$h(r,ae({},_,{hash:Sp(se),path:M.path})),J=s.createHref(ue);return ae({fullPath:ue,hash:se,query:r===Ma?kp(_.query):_.query||{}},M,{redirectedFrom:void 0,href:J})}function P(_){return typeof _=="string"?Hs(n,_,c.value.path):ae({},_)}function U(_,D){if(l!==_)return Sn(8,{from:D,to:_})}function V(_){return B(_)}function H(_){return V(ae(P(_),{replace:!0}))}function Y(_){const D=_.matched[_.matched.length-1];if(D&&D.redirect){const{redirect:A}=D;let M=typeof A=="function"?A(_):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=P(M):{path:M},M.params={}),ae({query:_.query,hash:_.hash,params:_.params},M)}}function B(_,D){const A=l=E(_),M=c.value,se=_.state,ue=_.force,J=_.replace===!0,K=Y(A);if(K)return B(ae(P(K),{state:se,force:ue,replace:J}),D||A);const f=A;f.redirectedFrom=D;let p;return!ue&&Bh(r,M,A)&&(p=Sn(16,{to:f,from:M}),sn(M,M,!0,!1)),(p?Promise.resolve(p):j(f,M)).catch(g=>It(g)?It(g,2)?g:Ne(g):le(g,f,M)).then(g=>{if(g){if(It(g,2))return B(ae(P(g.to),{state:se,force:ue,replace:J}),D||f)}else g=te(f,M,!0,J,se);return G(f,M,g),g})}function C(_,D){const A=U(_,D);return A?Promise.reject(A):Promise.resolve()}function j(_,D){let A;const[M,se,ue]=Fp(_,D);A=Vs(M.reverse(),"beforeRouteLeave",_,D);for(const K of M)K.leaveGuards.forEach(f=>{A.push(Rt(f,_,D))});const J=C.bind(null,_,D);return A.push(J),cn(A).then(()=>{A=[];for(const K of i.list())A.push(Rt(K,_,D));return A.push(J),cn(A)}).then(()=>{A=Vs(se,"beforeRouteUpdate",_,D);for(const K of se)K.updateGuards.forEach(f=>{A.push(Rt(f,_,D))});return A.push(J),cn(A)}).then(()=>{A=[];for(const K of _.matched)if(K.beforeEnter&&!D.matched.includes(K))if(Array.isArray(K.beforeEnter))for(const f of K.beforeEnter)A.push(Rt(f,_,D));else A.push(Rt(K.beforeEnter,_,D));return A.push(J),cn(A)}).then(()=>(_.matched.forEach(K=>K.enterCallbacks={}),A=Vs(ue,"beforeRouteEnter",_,D),A.push(J),cn(A))).then(()=>{A=[];for(const K of o.list())A.push(Rt(K,_,D));return A.push(J),cn(A)}).catch(K=>It(K,8)?K:Promise.reject(K))}function G(_,D,A){for(const M of a.list())M(_,D,A)}function te(_,D,A,M,se){const ue=U(_,D);if(ue)return ue;const J=D===Et,K=hn?history.state:{};A&&(M||J?s.replace(_.fullPath,ae({scroll:J&&K&&K.scroll},se)):s.push(_.fullPath,se)),c.value=_,sn(_,D,A,J),Ne()}let O;function ne(){O||(O=s.listen((_,D,A)=>{const M=E(_),se=Y(M);if(se){B(ae(se,{replace:!0}),M).catch(tr);return}l=M;const ue=c.value;hn&&Gh(Ca(ue.fullPath,A.delta),Ss()),j(M,ue).catch(J=>It(J,12)?J:It(J,2)?(B(J.to,M).then(K=>{It(K,20)&&!A.delta&&A.type===dr.pop&&s.go(-1,!1)}).catch(tr),Promise.reject()):(A.delta&&s.go(-A.delta,!1),le(J,M,ue))).then(J=>{J=J||te(M,ue,!1),J&&(A.delta?s.go(-A.delta,!1):A.type===dr.pop&&It(J,20)&&s.go(-1,!1)),G(M,ue,J)}).catch(tr)}))}let pe=Hn(),me=Hn(),ge;function le(_,D,A){Ne(_);const M=me.list();return M.length?M.forEach(se=>se(_,D,A)):console.error(_),Promise.reject(_)}function re(){return ge&&c.value!==Et?Promise.resolve():new Promise((_,D)=>{pe.add([_,D])})}function Ne(_){return ge||(ge=!_,ne(),pe.list().forEach(([D,A])=>_?A(_):D()),pe.reset()),_}function sn(_,D,A,M){const{scrollBehavior:se}=t;if(!hn||!se)return Promise.resolve();const ue=!A&&Jh(Ca(_.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return hs().then(()=>se(_,D,ue)).then(J=>J&&Kh(J)).catch(J=>le(J,_,D))}const ct=_=>s.go(_);let tt;const je=new Set;return{currentRoute:c,addRoute:m,removeRoute:y,hasRoute:R,getRoutes:x,resolve:E,options:t,push:V,replace:H,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:re,install(_){const D=this;_.component("RouterLink",Pp),_.component("RouterView",Lp),_.config.globalProperties.$router=D,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>mt(c)}),hn&&!tt&&c.value===Et&&(tt=!0,V(s.location).catch(se=>{}));const A={};for(const se in Et)A[se]=Ye(()=>c.value[se]);_.provide(Is,D),_.provide(ao,Nn(A)),_.provide(Ti,c);const M=_.unmount;je.add(_),_.unmount=function(){je.delete(_),je.size<1&&(l=Et,O&&O(),O=null,c.value=Et,tt=!1,ge=!1),M()}}}}function cn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Fp(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>In(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>In(l,c))||s.push(c))}return[n,r,s]}function $p(){return Ze(Is)}function Ny(){return Ze(ao)}var lo={exports:{}},Vl=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},Bp=Vl,uo=Object.prototype.toString,fo=function(t){return function(e){var n=uo.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function rn(t){return t=t.toLowerCase(),function(n){return fo(n)===t}}function ho(t){return Array.isArray(t)}function Zr(t){return typeof t=="undefined"}function jp(t){return t!==null&&!Zr(t)&&t.constructor!==null&&!Zr(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var zl=rn("ArrayBuffer");function Hp(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&zl(t.buffer),e}function Vp(t){return typeof t=="string"}function zp(t){return typeof t=="number"}function ql(t){return t!==null&&typeof t=="object"}function Br(t){if(fo(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var qp=rn("Date"),Wp=rn("File"),Kp=rn("Blob"),Gp=rn("FileList");function po(t){return uo.call(t)==="[object Function]"}function Jp(t){return ql(t)&&po(t.pipe)}function Yp(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||uo.call(t)===e||po(t.toString)&&t.toString()===e)}var Xp=rn("URLSearchParams");function Qp(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Zp(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function mo(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),ho(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function Ci(){var t={};function e(s,i){Br(t[i])&&Br(s)?t[i]=Ci(t[i],s):Br(s)?t[i]=Ci({},s):ho(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)mo(arguments[n],e);return t}function em(t,e,n){return mo(e,function(s,i){n&&typeof s=="function"?t[i]=Bp(s,n):t[i]=s}),t}function tm(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function nm(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function rm(t,e,n){var r,s,i,o={};e=e||{};do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)i=r[s],o[i]||(e[i]=t[i],o[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function sm(t,e,n){t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return r!==-1&&r===n}function im(t){if(!t)return null;var e=t.length;if(Zr(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n}var om=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),Se={isArray:ho,isArrayBuffer:zl,isBuffer:jp,isFormData:Yp,isArrayBufferView:Hp,isString:Vp,isNumber:zp,isObject:ql,isPlainObject:Br,isUndefined:Zr,isDate:qp,isFile:Wp,isBlob:Kp,isFunction:po,isStream:Jp,isURLSearchParams:Xp,isStandardBrowserEnv:Zp,forEach:mo,merge:Ci,extend:em,trim:Qp,stripBOM:tm,inherits:nm,toFlatObject:rm,kindOf:fo,kindOfTest:rn,endsWith:sm,toArray:im,isTypedArray:om,isFileList:Gp},ln=Se;function Ba(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Wl=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(ln.isURLSearchParams(n))s=n.toString();else{var i=[];ln.forEach(n,function(c,l){c===null||typeof c=="undefined"||(ln.isArray(c)?l=l+"[]":c=[c],ln.forEach(c,function(d){ln.isDate(d)?d=d.toISOString():ln.isObject(d)&&(d=JSON.stringify(d)),i.push(Ba(l)+"="+Ba(d))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},am=Se;function Ts(){this.handlers=[]}Ts.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Ts.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Ts.prototype.forEach=function(e){am.forEach(this.handlers,function(r){r!==null&&e(r)})};var cm=Ts,lm=Se,um=function(e,n){lm.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},Kl=Se;function Tn(t,e,n,r,s){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}Kl.inherits(Tn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Gl=Tn.prototype,Jl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Jl[t]={value:t}});Object.defineProperties(Tn,Jl);Object.defineProperty(Gl,"isAxiosError",{value:!0});Tn.from=function(t,e,n,r,s,i){var o=Object.create(Gl);return Kl.toFlatObject(t,o,function(c){return c!==Error.prototype}),Tn.call(o,t.message,e,n,r,s),o.name=t.name,i&&Object.assign(o,i),o};var Mn=Tn,Yl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ge=Se;function fm(t,e){e=e||new FormData;var n=[];function r(i){return i===null?"":Ge.isDate(i)?i.toISOString():Ge.isArrayBuffer(i)||Ge.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function s(i,o){if(Ge.isPlainObject(i)||Ge.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),Ge.forEach(i,function(c,l){if(!Ge.isUndefined(c)){var u=o?o+"."+l:l,d;if(c&&!o&&typeof c=="object"){if(Ge.endsWith(l,"{}"))c=JSON.stringify(c);else if(Ge.endsWith(l,"[]")&&(d=Ge.toArray(c))){d.forEach(function(h){!Ge.isUndefined(h)&&e.append(u,r(h))});return}}s(c,u)}}),n.pop()}else e.append(o,r(i))}return s(t),e}var Xl=fm,zs=Mn,dm=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(new zs("Request failed with status code "+r.status,[zs.ERR_BAD_REQUEST,zs.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))},Nr=Se,hm=Nr.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),Nr.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),Nr.isString(i)&&c.push("path="+i),Nr.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),pm=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},mm=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},gm=pm,_m=mm,Ql=function(e,n){return e&&!gm(n)?_m(e,n):n},qs=Se,bm=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],vm=function(e){var n={},r,s,i;return e&&qs.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=qs.trim(a.substr(0,i)).toLowerCase(),s=qs.trim(a.substr(i+1)),r){if(n[r]&&bm.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},ja=Se,ym=ja.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=ja.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),ki=Mn,wm=Se;function Zl(t){ki.call(this,t==null?"canceled":t,ki.ERR_CANCELED),this.name="CanceledError"}wm.inherits(Zl,ki,{__CANCEL__:!0});var As=Zl,Em=function(e){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""},Vn=Se,Im=dm,Sm=hm,Tm=Wl,Am=Ql,Rm=vm,Cm=ym,km=Yl,lt=Mn,xm=As,Om=Em,Ha=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}Vn.isFormData(i)&&Vn.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(d+":"+h)}var m=Am(e.baseURL,e.url);u.open(e.method.toUpperCase(),Tm(m,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function y(){if(!!u){var E="getAllResponseHeaders"in u?Rm(u.getAllResponseHeaders()):null,P=!a||a==="text"||a==="json"?u.responseText:u.response,U={data:P,status:u.status,statusText:u.statusText,headers:E,config:e,request:u};Im(function(H){r(H),l()},function(H){s(H),l()},U),u=null}}if("onloadend"in u?u.onloadend=y:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},u.onabort=function(){!u||(s(new lt("Request aborted",lt.ECONNABORTED,e,u)),u=null)},u.onerror=function(){s(new lt("Network Error",lt.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var P=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",U=e.transitional||km;e.timeoutErrorMessage&&(P=e.timeoutErrorMessage),s(new lt(P,U.clarifyTimeoutError?lt.ETIMEDOUT:lt.ECONNABORTED,e,u)),u=null},Vn.isStandardBrowserEnv()){var x=(e.withCredentials||Cm(m))&&e.xsrfCookieName?Sm.read(e.xsrfCookieName):void 0;x&&(o[e.xsrfHeaderName]=x)}"setRequestHeader"in u&&Vn.forEach(o,function(P,U){typeof i=="undefined"&&U.toLowerCase()==="content-type"?delete o[U]:u.setRequestHeader(U,P)}),Vn.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(E){!u||(s(!E||E&&E.type?new xm:E),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null);var R=Om(m);if(R&&["http","https","file"].indexOf(R)===-1){s(new lt("Unsupported protocol "+R+":",lt.ERR_BAD_REQUEST,e));return}u.send(i)})},Pm=null,ye=Se,Va=um,za=Mn,Nm=Yl,Dm=Xl,Mm={"Content-Type":"application/x-www-form-urlencoded"};function qa(t,e){!ye.isUndefined(t)&&ye.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Lm(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Ha),t}function Um(t,e,n){if(ye.isString(t))try{return(e||JSON.parse)(t),ye.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var Rs={transitional:Nm,adapter:Lm(),transformRequest:[function(e,n){if(Va(n,"Accept"),Va(n,"Content-Type"),ye.isFormData(e)||ye.isArrayBuffer(e)||ye.isBuffer(e)||ye.isStream(e)||ye.isFile(e)||ye.isBlob(e))return e;if(ye.isArrayBufferView(e))return e.buffer;if(ye.isURLSearchParams(e))return qa(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r=ye.isObject(e),s=n&&n["Content-Type"],i;if((i=ye.isFileList(e))||r&&s==="multipart/form-data"){var o=this.env&&this.env.FormData;return Dm(i?{"files[]":e}:e,o&&new o)}else if(r||s==="application/json")return qa(n,"application/json"),Um(e);return e}],transformResponse:[function(e){var n=this.transitional||Rs.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&ye.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?za.from(o,za.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pm},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ye.forEach(["delete","get","head"],function(e){Rs.headers[e]={}});ye.forEach(["post","put","patch"],function(e){Rs.headers[e]=ye.merge(Mm)});var go=Rs,Fm=Se,$m=go,Bm=function(e,n,r){var s=this||$m;return Fm.forEach(r,function(o){e=o.call(s,e,n)}),e},eu=function(e){return!!(e&&e.__CANCEL__)},Wa=Se,Ws=Bm,jm=eu,Hm=go,Vm=As;function Ks(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Vm}var zm=function(e){Ks(e),e.headers=e.headers||{},e.data=Ws.call(e,e.data,e.headers,e.transformRequest),e.headers=Wa.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Wa.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||Hm.adapter;return n(e).then(function(s){return Ks(e),s.data=Ws.call(e,s.data,s.headers,e.transformResponse),s},function(s){return jm(s)||(Ks(e),s&&s.response&&(s.response.data=Ws.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},Me=Se,tu=function(e,n){n=n||{};var r={};function s(u,d){return Me.isPlainObject(u)&&Me.isPlainObject(d)?Me.merge(u,d):Me.isPlainObject(d)?Me.merge({},d):Me.isArray(d)?d.slice():d}function i(u){if(Me.isUndefined(n[u])){if(!Me.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!Me.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(Me.isUndefined(n[u])){if(!Me.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function c(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return Me.forEach(Object.keys(e).concat(Object.keys(n)),function(d){var h=l[d]||i,m=h(d);Me.isUndefined(m)&&h!==c||(r[d]=m)}),r},nu={version:"0.27.2"},qm=nu.version,Ct=Mn,_o={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){_o[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Ka={};_o.transitional=function(e,n,r){function s(i,o){return"[Axios v"+qm+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new Ct(s(o," has been removed"+(n?" in "+n:"")),Ct.ERR_DEPRECATED);return n&&!Ka[o]&&(Ka[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Wm(t,e,n){if(typeof t!="object")throw new Ct("options must be an object",Ct.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new Ct("option "+i+" must be "+c,Ct.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ct("Unknown option "+i,Ct.ERR_BAD_OPTION)}}var Km={assertOptions:Wm,validators:_o},ru=Se,Gm=Wl,Ga=cm,Ja=zm,Cs=tu,Jm=Ql,su=Km,un=su.validators;function An(t){this.defaults=t,this.interceptors={request:new Ga,response:new Ga}}An.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Cs(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&su.assertOptions(r,{silentJSONParsing:un.transitional(un.boolean),forcedJSONParsing:un.transitional(un.boolean),clarifyTimeoutError:un.transitional(un.boolean)},!1);var s=[],i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(i=i&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});var o=[];this.interceptors.response.forEach(function(m){o.push(m.fulfilled,m.rejected)});var a;if(!i){var c=[Ja,void 0];for(Array.prototype.unshift.apply(c,s),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var l=n;s.length;){var u=s.shift(),d=s.shift();try{l=u(l)}catch(h){d(h);break}}try{a=Ja(l)}catch(h){return Promise.reject(h)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};An.prototype.getUri=function(e){e=Cs(this.defaults,e);var n=Jm(e.baseURL,e.url);return Gm(n,e.params,e.paramsSerializer)};ru.forEach(["delete","get","head","options"],function(e){An.prototype[e]=function(n,r){return this.request(Cs(r||{},{method:e,url:n,data:(r||{}).data}))}});ru.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Cs(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}An.prototype[e]=n(),An.prototype[e+"Form"]=n(!0)});var Ym=An,Xm=As;function Rn(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new Xm(s),e(n.reason))})}Rn.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Rn.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Rn.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};Rn.source=function(){var e,n=new Rn(function(s){e=s});return{token:n,cancel:e}};var Qm=Rn,Zm=function(e){return function(r){return e.apply(null,r)}},eg=Se,tg=function(e){return eg.isObject(e)&&e.isAxiosError===!0},Ya=Se,ng=Vl,jr=Ym,rg=tu,sg=go;function iu(t){var e=new jr(t),n=ng(jr.prototype.request,e);return Ya.extend(n,jr.prototype,e),Ya.extend(n,e),n.create=function(s){return iu(rg(t,s))},n}var Pe=iu(sg);Pe.Axios=jr;Pe.CanceledError=As;Pe.CancelToken=Qm;Pe.isCancel=eu;Pe.VERSION=nu.version;Pe.toFormData=Xl;Pe.AxiosError=Mn;Pe.Cancel=Pe.CanceledError;Pe.all=function(e){return Promise.all(e)};Pe.spread=Zm;Pe.isAxiosError=tg;lo.exports=Pe;lo.exports.default=Pe;var ig=lo.exports;const og={baseURL:"http://localhost:3001/api/v1",headers:{"X-Requested-With":"XMLHttpRequest"}},ag=()=>async t=>{const e=window.localStorage.getItem("accessToken");return e&&typeof t!="undefined"&&(t.headers.Authorization=`Bearer ${e}`),t},cg=t=>{xi.interceptors.request.use(ag(),e=>Promise.reject(e)),xi.interceptors.response.use(e=>e,async e=>(typeof e=="object"&&(e.response.status===401||e.response.status),Promise.reject(e)))},xi=ig.create(og);class Oe{constructor(){this.requestConfig={method:"",url:"",params:{},headers:{},data:{}},this.baseUrl="http://localhost:3001/api/v1/"}method(e){return this.requestConfig.method=e,this}url(e){return this.requestConfig.url=this.baseUrl+e,this}params(e){return this.requestConfig.params=e,this}headers(e){return this.requestConfig.headers=e,this}data(e){return this.requestConfig.data=e,this}send(){if(this.requestConfig.method===""||this.requestConfig.url==="")throw new Error("[RequestBuilder] No method or url defined.");return xi(this.requestConfig)}mock(e){const n=e?void 0:new Error("Mocked error in RequestBuilder");return Promise.resolve({error:n,item:{}})}}const bo=oo("auth",{state:()=>({isAuthenticated:!1,name:"",uid:""}),actions:{async initAuth(){const t=window.localStorage.getItem("accessToken"),e=window.localStorage.getItem("refreshToken");if(t&&e)try{const{data:{details:{firstName:n,lastName:r,uid:s}}}=await new Oe().method("post").url("auth/decodeAccessToken").data({accessToken:t}).send();this.name=`${n} ${r}`,this.uid=s,this.updateAuthState(!0,t,e)}catch(n){console.log(n),this.updateAuthState()}},updateAuthState(t=!1,e="",n=""){this.isAuthenticated=t,t?(window.localStorage.setItem("accessToken",e),window.localStorage.setItem("refreshToken",n)):(window.localStorage.removeItem("accessToken"),window.localStorage.removeItem("refreshToken"))}}}),ou=oo("ui",{state:()=>({title:""})});function Gs(t,e){return t.find(n=>n.id===e)}function au(t,e){return t.findIndex(n=>n.id===e)}function Js(t,e,n){const r=au(t,e);t[r]={...t[r],...n}}function Ys(t,e){const n=au(t,e);t.splice(n,1)}const Ve=oo("data",{state:()=>({fees:[],families:[],students:[]}),actions:{addFee(t){this.fees.push(t)},updateFee(t,e){Js(this.fees,t,e)},removeFee(t){Ys(this.fees,t)},getFeeById(t){return Gs(this.fees,t)},addFamily(t){this.families.push(t)},updateFamily(t,e){Js(this.families,t,e)},removeFamily(t){Ys(this.families,t)},getFamilyById(t){return Gs(this.families,t)},addStudent(t){this.students.push(t)},updateStudent(t,e){Js(this.students,t,e)},removeStudent(t){Ys(this.students,t)},getStudentById(t){return Gs(this.students,t)}}}),lg="modulepreload",Xa={},ug="/",Le=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${ug}${r}`,r in Xa)return;Xa[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":lg,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},he={home:"HOME",login:"LOGIN",register:"REGISTER",dashboard:"DASHBOARD",families:"FAMILIES",family:"FAMILY",students:"STUDENTS",student:"STUDENT",fees:"FEES",fee:"FEE"},Oi=[{path:"/",name:he.home,component:()=>Le(()=>import("./HomeMain.52a8d862.js"),[]),meta:{requiresAuth:!1,title:"Home"}},{path:"/sign-in",name:he.login,component:()=>Le(()=>import("./LoginMain.94fb8494.js"),["assets/LoginMain.94fb8494.js","assets/AppFormGroup.57537ecc.js","assets/AppButton.b4ec5f9d.js","assets/AppControl.684aaebb.js","assets/AppControl.7f360234.css","assets/AppCard.3ad22048.js","assets/AppAlert.0560d307.js"]),meta:{requiresAuth:!1,title:"Sign In"}},{path:"/sign-up",name:he.register,component:()=>Le(()=>import("./RegisterMain.8647ebd8.js"),["assets/RegisterMain.8647ebd8.js","assets/AppFormGroup.57537ecc.js","assets/AppButton.b4ec5f9d.js","assets/AppControl.684aaebb.js","assets/AppControl.7f360234.css","assets/AppCard.3ad22048.js","assets/AppAlert.0560d307.js"]),meta:{requiresAuth:!1,title:"Sign Up"}},{path:"/dashboard",name:he.dashboard,component:()=>Le(()=>import("./DashboardMain.11dff0d8.js"),[]),meta:{requiresAuth:!0,title:"Dashboard"}},{path:"/fees",component:()=>Le(()=>import("./FeesMain.0fed9671.js"),["assets/FeesMain.0fed9671.js","assets/AppButton.b4ec5f9d.js","assets/index.6f7326c6.js","assets/AppControl.684aaebb.js","assets/AppControl.7f360234.css","assets/AppFormGroup.57537ecc.js"]),name:he.fees,meta:{requiresAuth:!0,title:"Fees"},children:[{path:"",name:he.fees,component:()=>Le(()=>import("./FeesList.16291021.js"),["assets/FeesList.16291021.js","assets/AppButton.b4ec5f9d.js","assets/AppCard.3ad22048.js","assets/AppControl.684aaebb.js","assets/AppControl.7f360234.css"]),meta:{requiresAuth:!0}},{path:":id",name:he.fee,component:()=>Le(()=>import("./FeesItemDetails.3f98fb76.js"),["assets/FeesItemDetails.3f98fb76.js","assets/AppButton.b4ec5f9d.js","assets/AppCard.3ad22048.js"]),meta:{requiresAuth:!0}}]},{path:"/students",name:he.students,component:()=>Le(()=>import("./StudentsMain.c1e92a1b.js"),["assets/StudentsMain.c1e92a1b.js","assets/AppFormGroup.57537ecc.js","assets/AppControl.684aaebb.js","assets/AppControl.7f360234.css","assets/AppButton.b4ec5f9d.js","assets/index.6f7326c6.js"]),meta:{requiresAuth:!0,title:"Students"},children:[{path:"",name:he.students,component:()=>Le(()=>import("./StudentsList.7ff195ef.js"),["assets/StudentsList.7ff195ef.js","assets/AppControl.684aaebb.js","assets/AppControl.7f360234.css","assets/AppButton.b4ec5f9d.js","assets/AppCard.3ad22048.js"]),meta:{requiresAuth:!0}},{path:":id",name:he.student,component:()=>Le(()=>import("./StudentsItemDetails.f5887718.js"),["assets/StudentsItemDetails.f5887718.js","assets/AppButton.b4ec5f9d.js","assets/AppCard.3ad22048.js"]),meta:{requiresAuth:!0}}]},{path:"/families",name:he.families,component:()=>Le(()=>import("./FamiliesMain.934796e7.js"),["assets/FamiliesMain.934796e7.js","assets/AppButton.b4ec5f9d.js","assets/index.6f7326c6.js","assets/AppControl.684aaebb.js","assets/AppControl.7f360234.css","assets/AppFormGroup.57537ecc.js"]),meta:{requiresAuth:!0,title:"Families"},children:[{path:"",name:he.families,component:()=>Le(()=>import("./FamiliesList.918d5476.js"),["assets/FamiliesList.918d5476.js","assets/AppButton.b4ec5f9d.js","assets/AppCard.3ad22048.js","assets/AppControl.684aaebb.js","assets/AppControl.7f360234.css"]),meta:{requiresAuth:!0}},{path:":id",name:he.family,component:()=>Le(()=>import("./FamiliesItemDetails.5374e3a5.js"),["assets/FamiliesItemDetails.5374e3a5.js","assets/AppButton.b4ec5f9d.js","assets/AppCard.3ad22048.js"]),meta:{requiresAuth:!0}}]}],fg=t=>(e,n)=>!!t[e](n);var dg=()=>{const t=Up({history:Zh(),routes:Oi});return t.afterEach(async(e,n)=>{const r="";await hs(()=>{document.title=r})}),t.beforeEach((e,n)=>{const r=bo(),s=ou(),i=Ve(),o=fg(i),{requiresAuth:a,title:c}=e.meta||{};if(c&&(s.title=c),!r.isAuthenticated&&a)return{name:he.login};if(e.name&&[he.family,he.student,he.fee].includes(e.name.toString())){const l=(()=>{if(e.name===he.family)return"getFamilyById";if(e.name===he.student)return"getStudentById";if(e.name===he.fee)return"getFeeById"})();if(!o(l.toString(),e.params.id.toString()))return{name:he.dashboard}}if(r.isAuthenticated&&[he.login,he.register].includes(e.name.toString()))return{name:he.home}}),t};const hg={class:"-mx-3 flex flex-wrap"},vo=We({__name:"AppGridRow",setup(t){return(e,n)=>(Ee(),Ce("div",hg,[bs(e.$slots,"default")]))}}),pg={class:"px-3"},yo=We({__name:"AppGridCol",setup(t){return(e,n)=>(Ee(),Ce("div",pg,[bs(e.$slots,"default")]))}}),mg={class:"w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col flex-start"},wo=We({__name:"AppGridContainer",setup(t){return(e,n)=>(Ee(),Ce("div",mg,[bs(e.$slots,"default")]))}});/**
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
 */const cu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const y=l<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},_g=function(t){const e=cu(t);return lu.encodeByteArray(e,!0)},uu=function(t){return _g(t).replace(/\./g,"")},bg=function(t){try{return lu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class vg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function wg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ig(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sg(){return typeof indexedDB=="object"}function Tg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ag="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ag,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Rg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function Rg(t,e){return t.replace(Cg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cg=/\{\$([^}]+)}/g;function kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qa(i)&&Qa(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qa(t){return t!==null&&typeof t=="object"}/**
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
 */function yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Kn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xg(t,e){const n=new Og(t,e);return n.subscribe.bind(n)}class Og{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xs),s.error===void 0&&(s.error=Xs),s.complete===void 0&&(s.complete=Xs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xs(){}/**
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
 */function Un(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class Ng{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mg(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dg(t){return t===Wt?void 0:t}function Mg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ng(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Ug={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Fg=fe.INFO,$g={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Bg=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$g[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fu{constructor(e){this.name=e,this._logLevel=Fg,this._logHandler=Bg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const jg=(t,e)=>e.some(n=>t instanceof n);let Za,ec;function Hg(){return Za||(Za=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vg(){return ec||(ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const du=new WeakMap,Pi=new WeakMap,hu=new WeakMap,Qs=new WeakMap,Eo=new WeakMap;function zg(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Lt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&du.set(n,t)}).catch(()=>{}),Eo.set(e,t),e}function qg(t){if(Pi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pi.set(t,e)}let Ni={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wg(t){Ni=t(Ni)}function Kg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zs(this),e,...n);return hu.set(r,e.sort?e.sort():[e]),Lt(r)}:Vg().includes(t)?function(...e){return t.apply(Zs(this),e),Lt(du.get(this))}:function(...e){return Lt(t.apply(Zs(this),e))}}function Gg(t){return typeof t=="function"?Kg(t):(t instanceof IDBTransaction&&qg(t),jg(t,Hg())?new Proxy(t,Ni):t)}function Lt(t){if(t instanceof IDBRequest)return zg(t);if(Qs.has(t))return Qs.get(t);const e=Gg(t);return e!==t&&(Qs.set(t,e),Eo.set(e,t)),e}const Zs=t=>Eo.get(t);function Jg(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Lt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Yg=["get","getKey","getAll","getAllKeys","count"],Xg=["put","add","delete","clear"],ei=new Map;function tc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ei.get(e))return ei.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yg.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ei.set(e,i),i}Wg(t=>({...t,get:(e,n,r)=>tc(e,n)||t.get(e,n,r),has:(e,n)=>!!tc(e,n)||t.has(e,n)}));/**
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
 */class Qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Di="@firebase/app",nc="0.7.27";/**
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
 */const Io=new fu("@firebase/app"),e_="@firebase/app-compat",t_="@firebase/analytics-compat",n_="@firebase/analytics",r_="@firebase/app-check-compat",s_="@firebase/app-check",i_="@firebase/auth",o_="@firebase/auth-compat",a_="@firebase/database",c_="@firebase/database-compat",l_="@firebase/functions",u_="@firebase/functions-compat",f_="@firebase/installations",d_="@firebase/installations-compat",h_="@firebase/messaging",p_="@firebase/messaging-compat",m_="@firebase/performance",g_="@firebase/performance-compat",__="@firebase/remote-config",b_="@firebase/remote-config-compat",v_="@firebase/storage",y_="@firebase/storage-compat",w_="@firebase/firestore",E_="@firebase/firestore-compat",I_="firebase",S_="9.8.4";/**
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
 */const pu="[DEFAULT]",T_={[Di]:"fire-core",[e_]:"fire-core-compat",[n_]:"fire-analytics",[t_]:"fire-analytics-compat",[s_]:"fire-app-check",[r_]:"fire-app-check-compat",[i_]:"fire-auth",[o_]:"fire-auth-compat",[a_]:"fire-rtdb",[c_]:"fire-rtdb-compat",[l_]:"fire-fn",[u_]:"fire-fn-compat",[f_]:"fire-iid",[d_]:"fire-iid-compat",[h_]:"fire-fcm",[p_]:"fire-fcm-compat",[m_]:"fire-perf",[g_]:"fire-perf-compat",[__]:"fire-rc",[b_]:"fire-rc-compat",[v_]:"fire-gcs",[y_]:"fire-gcs-compat",[w_]:"fire-fst",[E_]:"fire-fst-compat","fire-js":"fire-js",[I_]:"fire-js-all"};/**
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
 */const ts=new Map,Mi=new Map;function A_(t,e){try{t.container.addComponent(e)}catch(n){Io.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hr(t){const e=t.name;if(Mi.has(e))return Io.debug(`There were multiple attempts to register component ${e}.`),!1;Mi.set(e,t);for(const n of ts.values())A_(n,t);return!0}function mu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const R_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},en=new vr("app","Firebase",R_);/**
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
 */class C_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=S_;function k_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw en.create("bad-app-name",{appName:String(r)});const s=ts.get(r);if(s){if(es(t,s.options)&&es(n,s.config))return s;throw en.create("duplicate-app",{appName:r})}const i=new Lg(r);for(const a of Mi.values())i.addComponent(a);const o=new C_(t,n,i);return ts.set(r,o),o}function x_(t=pu){const e=ts.get(t);if(!e)throw en.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let s=(r=T_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Io.warn(a.join(" "));return}hr(new Cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const O_="firebase-heartbeat-database",P_=1,pr="firebase-heartbeat-store";let ti=null;function gu(){return ti||(ti=Jg(O_,P_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pr)}}}).catch(t=>{throw en.create("storage-open",{originalErrorMessage:t.message})})),ti}async function N_(t){var e;try{return(await gu()).transaction(pr).objectStore(pr).get(_u(t))}catch(n){throw en.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function rc(t,e){var n;try{const s=(await gu()).transaction(pr,"readwrite");return await s.objectStore(pr).put(e,_u(t)),s.done}catch(r){throw en.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function _u(t){return`${t.name}!${t.options.appId}`}/**
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
 */const D_=1024,M_=30*24*60*60*1e3;class L_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=M_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sc(),{heartbeatsToSend:n,unsentEntries:r}=U_(this._heartbeatsCache.heartbeats),s=uu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sc(){return new Date().toISOString().substring(0,10)}function U_(t,e=D_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ic(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ic(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class F_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sg()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await N_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ic(t){return uu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $_(t){hr(new Cn("platform-logger",e=>new Qg(e),"PRIVATE")),hr(new Cn("heartbeat",e=>new L_(e),"PRIVATE")),_n(Di,nc,t),_n(Di,nc,"esm2017"),_n("fire-js","")}$_("");var B_="firebase",j_="9.8.4";/**
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
 */_n(B_,j_,"app");function So(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H_=bu,vu=new vr("auth","Firebase",bu());/**
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
 */const oc=new fu("@firebase/auth");function Hr(t,...e){oc.logLevel<=fe.ERROR&&oc.error(`Auth (${ks}): ${t}`,...e)}/**
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
 */function et(t,...e){throw To(t,...e)}function it(t,...e){return To(t,...e)}function V_(t,e,n){const r=Object.assign(Object.assign({},H_()),{[e]:n});return new vr("auth","Firebase",r).create(e,{appName:t.name})}function To(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vu.create(t,...e)}function z(t,e,...n){if(!t)throw To(e,...n)}function ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hr(e),new Error(e)}function _t(t,e){t||ht(e)}/**
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
 */const ac=new Map;function pt(t){_t(t instanceof Function,"Expected a class definition");let e=ac.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ac.set(t,e),e)}/**
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
 */function z_(t,e){const n=mu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e!=null?e:{}))return s;et(s,"already-initialized")}return n.initialize({options:e})}function q_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Li(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function W_(){return cc()==="http:"||cc()==="https:"}function cc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function K_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(W_()||wg()||"connection"in navigator)?navigator.onLine:!0}function G_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wr{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=yg()||Eg()}get(){return K_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ao(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const J_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Y_=new wr(3e4,6e4);function xs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Er(t,e,n,r,s={}){return wu(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=yr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),yu.fetch()(Eu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function wu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},J_),e);try{const s=new X_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Dr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Dr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Dr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw V_(t,u,l);et(t,u)}}catch(s){if(s instanceof Ln)throw s;et(t,"network-request-failed")}}async function Os(t,e,n,r,s={}){const i=await Er(t,e,n,r,s);return"mfaPendingCredential"in i&&et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Eu(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ao(t.config,s):`${t.config.apiScheme}://${s}`}class X_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=it(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Q_(t,e){return Er(t,"POST","/v1/accounts:delete",e)}async function Z_(t,e){return Er(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function rr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eb(t,e=!1){const n=Un(t),r=await n.getIdToken(e),s=Ro(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:rr(ni(s.auth_time)),issuedAtTime:rr(ni(s.iat)),expirationTime:rr(ni(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ni(t){return Number(t)*1e3}function Ro(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return Hr("JWT malformed, contained fewer than 3 sections"),null;try{const i=bg(r);return i?JSON.parse(i):(Hr("Failed to decode base64 JWT payload"),null)}catch(i){return Hr("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function tb(t){const e=Ro(t);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&nb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rr(this.lastLoginAt),this.creationTime=rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ns(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mr(t,Z_(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ob(i.providerUserInfo):[],a=ib(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Iu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function sb(t){const e=Un(t);await ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ib(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ob(t){return t.map(e=>{var{providerId:n}=e,r=So(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ab(t,e){const n=await wu(t,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Eu(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):tb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ab(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gr;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gr,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function St(t,e){z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=So(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Iu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mr(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eb(this,e)}reload(){return sb(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ns(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mr(this,Q_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:V,isAnonymous:H,providerData:Y,stsTokenManager:B}=n;z(U&&B,e,"internal-error");const C=gr.fromJSON(this.name,B);z(typeof U=="string",e,"internal-error"),St(d,e.name),St(h,e.name),z(typeof V=="boolean",e,"internal-error"),z(typeof H=="boolean",e,"internal-error"),St(m,e.name),St(y,e.name),St(x,e.name),St(R,e.name),St(E,e.name),St(P,e.name);const j=new Qt({uid:U,auth:e,email:h,emailVerified:V,displayName:d,isAnonymous:H,photoURL:y,phoneNumber:m,tenantId:x,stsTokenManager:C,createdAt:E,lastLoginAt:P});return Y&&Array.isArray(Y)&&(j.providerData=Y.map(G=>Object.assign({},G))),R&&(j._redirectEventId=R),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new gr;s.updateFromServerResponse(n);const i=new Qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ns(i),i}}/**
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
 */class Su{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Su.type="NONE";const lc=Su;/**
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
 */function Vr(t,e,n){return`firebase:${t}:${e}:${n}`}class bn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bn(pt(lc),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||pt(lc);const o=Vr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Qt._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new bn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new bn(i,e,r))}}/**
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
 */function uc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ru(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ku(e))return"Blackberry";if(xu(e))return"Webos";if(Co(e))return"Safari";if((e.includes("chrome/")||Au(e))&&!e.includes("edge/"))return"Chrome";if(Cu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tu(t=Ae()){return/firefox\//i.test(t)}function Co(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Au(t=Ae()){return/crios\//i.test(t)}function Ru(t=Ae()){return/iemobile/i.test(t)}function Cu(t=Ae()){return/android/i.test(t)}function ku(t=Ae()){return/blackberry/i.test(t)}function xu(t=Ae()){return/webos/i.test(t)}function Ps(t=Ae()){return/iphone|ipad|ipod/i.test(t)}function cb(t=Ae()){var e;return Ps(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lb(){return Ig()&&document.documentMode===10}function Ou(t=Ae()){return Ps(t)||Cu(t)||xu(t)||ku(t)||/windows phone/i.test(t)||Ru(t)}function ub(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Pu(t,e=[]){let n;switch(t){case"Browser":n=uc(Ae());break;case"Worker":n=`${uc(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${r}`}/**
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
 */class fb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
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
 */class db{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new fb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vu,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await bn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ns(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=G_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Un(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await bn.create(this,[pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ko(t){return Un(t)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=xg(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class xo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,n){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function hb(t,e){return Er(t,"POST","/v1/accounts:update",e)}/**
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
 */async function pb(t,e){return Os(t,"POST","/v1/accounts:signInWithPassword",xs(t,e))}/**
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
 */async function mb(t,e){return Os(t,"POST","/v1/accounts:signInWithEmailLink",xs(t,e))}async function gb(t,e){return Os(t,"POST","/v1/accounts:signInWithEmailLink",xs(t,e))}/**
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
 */class _r extends xo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _r(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _r(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return pb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return mb(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gb(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vn(t,e){return Os(t,"POST","/v1/accounts:signInWithIdp",xs(t,e))}/**
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
 */const _b="http://localhost";class tn extends xo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=So(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vn(e,n)}buildRequest(){const e={requestUri:_b,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yr(n)}return e}}/**
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
 */function bb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vb(t){const e=Wn(Kn(t)).link,n=e?Wn(Kn(e)).deep_link_id:null,r=Wn(Kn(t)).deep_link_id;return(r?Wn(Kn(r)).link:null)||r||n||e||t}class Oo{constructor(e){var n,r,s,i,o,a;const c=Wn(Kn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=bb((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vb(e);try{return new Oo(n)}catch{return null}}}/**
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
 */class Fn{constructor(){this.providerId=Fn.PROVIDER_ID}static credential(e,n){return _r._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Oo.parseLink(n);return z(r,"argument-error"),_r._fromEmailAndCode(e,r.code,r.tenantId)}}Fn.PROVIDER_ID="password";Fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends Nu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kt extends Ir{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";kt.PROVIDER_ID="facebook.com";/**
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
 */class xt extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class Ot extends Ir{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class Pt extends Ir{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=dc(r);return new kn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=dc(r);return new kn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function dc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rs extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,rs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new rs(e,n,r,s)}}function Du(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?rs._fromErrorAndOperation(t,i,e,r):i})}async function yb(t,e,n=!1){const r=await mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}/**
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
 */async function wb(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await mr(t,Du(s,i,e,t),n);z(o.idToken,s,"internal-error");const a=Ro(o.idToken);z(a,s,"internal-error");const{sub:c}=a;return z(t.uid===c,s,"user-mismatch"),kn._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&et(s,"user-mismatch"),o}}/**
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
 */async function Mu(t,e,n=!1){const r="signIn",s=await Du(t,r,e),i=await kn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Eb(t,e){return Mu(ko(t),e)}function Ib(t,e,n){return Eb(Un(t),Fn.credential(e,n))}function Sb(t){return Un(t).signOut()}const ss="__sak";/**
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
 */class Lu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ss,"1"),this.storage.removeItem(ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Tb(){const t=Ae();return Co(t)||Ps(t)}const Ab=1e3,Rb=10;class Uu extends Lu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tb()&&ub(),this.fallbackToPolling=Ou(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Rb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Uu.type="LOCAL";const Cb=Uu;/**
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
 */class Fu extends Lu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fu.type="SESSION";const $u=Fu;/**
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
 */function kb(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await kb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ns.receivers=[];/**
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
 */function Po(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Po("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ot(){return window}function Ob(t){ot().location.href=t}/**
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
 */function Bu(){return typeof ot().WorkerGlobalScope!="undefined"&&typeof ot().importScripts=="function"}async function Pb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Db(){return Bu()?self:null}/**
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
 */const ju="firebaseLocalStorageDb",Mb=1,is="firebaseLocalStorage",Hu="fbase_key";class Sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ds(t,e){return t.transaction([is],e?"readwrite":"readonly").objectStore(is)}function Lb(){const t=indexedDB.deleteDatabase(ju);return new Sr(t).toPromise()}function Ui(){const t=indexedDB.open(ju,Mb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(is,{keyPath:Hu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(is)?e(r):(r.close(),await Lb(),e(await Ui()))})})}async function hc(t,e,n){const r=Ds(t,!0).put({[Hu]:e,value:n});return new Sr(r).toPromise()}async function Ub(t,e){const n=Ds(t,!1).get(e),r=await new Sr(n).toPromise();return r===void 0?null:r.value}function pc(t,e){const n=Ds(t,!0).delete(e);return new Sr(n).toPromise()}const Fb=800,$b=3;class Vu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ui(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$b)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ns._getInstance(Db()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pb(),!this.activeServiceWorker)return;this.sender=new xb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ui();return await hc(e,ss,"1"),await pc(e,ss),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ub(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ds(s,!1).getAll();return new Sr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vu.type="LOCAL";const Bb=Vu;/**
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
 */function jb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hb(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=it("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",jb().appendChild(r)})}function Vb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new wr(3e4,6e4);/**
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
 */function zb(t,e){return e?pt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class No extends xo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qb(t){return Mu(t.auth,new No(t),t.bypassAuthState)}function Wb(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),wb(n,new No(t),t.bypassAuthState)}async function Kb(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),yb(n,new No(t),t.bypassAuthState)}/**
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
 */class zu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qb;case"linkViaPopup":case"linkViaRedirect":return Kb;case"reauthViaPopup":case"reauthViaRedirect":return Wb;default:et(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gb=new wr(2e3,1e4);class pn extends zu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=Po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Gb.get())};e()}}pn.currentPopupAction=null;/**
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
 */const Jb="pendingRedirect",zr=new Map;class Yb extends zu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=zr.get(this.auth._key());if(!e){try{const r=await Xb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}zr.set(this.auth._key(),e)}return this.bypassAuthState||zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xb(t,e){const n=ev(e),r=Zb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qb(t,e){zr.set(t._key(),e)}function Zb(t){return pt(t._redirectPersistence)}function ev(t){return Vr(Jb,t.config.apiKey,t.name)}async function tv(t,e,n=!1){const r=ko(t),s=zb(r,e),o=await new Yb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nv=10*60*1e3;class rv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nv&&this.cachedEventUids.clear(),this.cachedEventUids.has(mc(e))}saveEventToCache(e){this.cachedEventUids.add(mc(e)),this.lastProcessedEventTime=Date.now()}}function mc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qu(t);default:return!1}}/**
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
 */async function iv(t,e={}){return Er(t,"GET","/v1/projects",e)}/**
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
 */const ov=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,av=/^https?/;async function cv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iv(t);for(const n of e)try{if(lv(n))return}catch{}et(t,"unauthorized-domain")}function lv(t){const e=Li(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!av.test(n))return!1;if(ov.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const uv=new wr(3e4,6e4);function gc(){const t=ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fv(t){return new Promise((e,n)=>{var r,s,i;function o(){gc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gc(),n(it(t,"network-request-failed"))},timeout:uv.get()})}if(!((s=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ot().gapi)===null||i===void 0)&&i.load)o();else{const a=Vb("iframefcb");return ot()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},Hb(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qr=null,e})}let qr=null;function dv(t){return qr=qr||fv(t),qr}/**
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
 */const hv=new wr(5e3,15e3),pv="__/auth/iframe",mv="emulator/auth/iframe",gv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_v=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bv(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ao(e,mv):`https://${t.config.authDomain}/${pv}`,r={apiKey:e.apiKey,appName:t.name,v:ks},s=_v.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yr(r).slice(1)}`}async function vv(t){const e=await dv(t),n=ot().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:bv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=ot().setTimeout(()=>{i(o)},hv.get());function c(){ot().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const yv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wv=500,Ev=600,Iv="_blank",Sv="http://localhost";class _c{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tv(t,e,n,r=wv,s=Ev){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ae().toLowerCase();n&&(a=Au(l)?Iv:n),Tu(l)&&(e=e||Sv,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(cb(l)&&a!=="_self")return Av(e||"",a),new _c(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new _c(d)}function Av(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Rv="__/auth/handler",Cv="emulator/auth/handler";function bc(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ks,eventId:s};if(e instanceof Nu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Ir){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${kv(t)}?${yr(a).slice(1)}`}function kv({config:t}){return t.emulator?Ao(t,Cv):`https://${t.authDomain}/${Rv}`}/**
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
 */const ri="webStorageSupport";class xv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$u,this._completeRedirectFn=tv,this._overrideRedirectResult=Qb}async _openPopup(e,n,r,s){var i;_t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=bc(e,n,r,Li(),s);return Tv(e,o,Po())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Ob(bc(e,n,r,Li(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vv(e),r=new rv(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ri,{type:ri},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ri];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ou()||Co()||Ps()}}const Ov=xv;var vc="@firebase/auth",yc="0.20.4";/**
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
 */class Pv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dv(t){hr(new Cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{z(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),z(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pu(t)},u=new db(a,c,l);return q_(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hr(new Cn("auth-internal",e=>{const n=ko(e.getProvider("auth").getImmediate());return(r=>new Pv(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(vc,yc,Nv(t)),_n(vc,yc,"esm2017")}/**
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
 */function Mv(t=x_()){const e=mu(t,"auth");return e.isInitialized()?e.getImmediate():z_(t,{popupRedirectResolver:Ov,persistence:[Bb,Cb,$u]})}Dv("Browser");class Tr{constructor(e){this.provider=e}}class Lv extends Tr{}class Uv extends Lv{async create(e){return await new Oe().method("post").url("user/new").data(e).send(),this.provider.auth.login(e)}}class Fv extends Tr{}function $v(t,e){const n={},r=Object.keys(t),s=Object.keys(e);for(const i of r)s.includes(i)&&t[i]!==e[i]&&(n[i]=e[i]);return n}const Do={difference:$v};class Bv extends Fv{async create(e){return new Oe().method("post").url("user/new").data(e).mock(!0).then(({error:n})=>{if(n)throw n;const r=Ve(),s=(Math.random()+1).toString(36).substring(7);return r.addStudent({...e,id:s}),Promise.resolve({})})}async update(e){const n=Ve(),r=Do.difference(n.getStudentById(e.id),e);return Object.keys(r).length===0?Promise.resolve({}):new Oe().method("post").url("user/new").data(r).mock(!0).then(({error:s})=>{if(s)throw s;const{id:i}=e;return n.updateStudent(i,r),Promise.resolve({})})}async delete(e){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:n})=>{if(n)throw n;return Ve().removeStudent(e),Promise.resolve({})})}}class jv extends Tr{}class Hv extends jv{async create(e){return new Oe().method("post").url("user/new").data(e).mock(!0).then(({error:n})=>{if(n)throw n;const r=Ve(),s=(Math.random()+1).toString(36).substring(7),i={...e,id:s,income:0,createdAt:new Date().toString()};if(r.addFamily(i),e.fees.length)for(const o of e.fees){const a=r.getFeeById(o);a&&a.families.push(s)}return Promise.resolve({})})}async update(e){const n=Ve(),r=Do.difference(n.getFamilyById(e.id),e);return Object.keys(r).length===0?Promise.resolve({}):new Oe().method("post").url("user/new").data(r).mock(!0).then(({error:s})=>{if(s)throw s;const{id:i}=e,{fees:o}=r;if(n.updateFamily(i,r),o){const a=n.fees.filter(l=>!o.includes(l.id));for(const l of a)l.families=l.families.filter(u=>u!==i);const c=n.fees.filter(l=>o.includes(l.id));for(const l of c)l.families.includes(i)||l.families.push(i)}return Promise.resolve({})})}async delete(e){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:n})=>{if(n)throw n;return Ve().removeFamily(e),Promise.resolve({})})}income(e,n){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:r})=>{if(r)throw r;const i=Ve().getFamilyById(e);return i&&(i.income+=n),Promise.resolve()})}resetIncome(e){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:n})=>{if(n)throw n;const s=Ve().getFamilyById(e);return s&&(s.income=0),Promise.resolve()})}}class Vv extends Tr{}class zv extends Vv{async create(e){return new Oe().method("post").url("user/new").data(e).mock(!0).then(({error:n})=>{if(n)throw n;const r=Ve(),s=(Math.random()+1).toString(36).substring(7);if(r.addFee({...e,id:s}),e.families.length)for(const i of e.families){const o=r.getFamilyById(i);o&&o.fees.push(s)}return Promise.resolve({})})}async update(e){const n=Ve(),r=Do.difference(n.getFeeById(e.id),e);return Object.keys(r).length===0?Promise.resolve({}):new Oe().method("post").url("user/new").data(r).mock(!0).then(({error:s})=>{if(s)throw s;const{id:i}=e,{families:o}=r;if(n.updateFee(i,r),o){const a=n.families.filter(l=>!o.includes(l.id));for(const l of a)l.fees=l.fees.filter(u=>u!==i);const c=n.families.filter(l=>o.includes(l.id));for(const l of c)l.fees.includes(i)||l.fees.push(i)}return Promise.resolve({})})}async delete(e){return new Oe().method("post").url("user/new").data({id:e}).mock(!0).then(({error:n})=>{if(n)throw n;return Ve().removeFee(e),Promise.resolve({})})}}class qv{constructor(){this.userService=new Uv(this),this.studentService=new Bv(this),this.familyService=new Hv(this),this.feeService=new zv(this),this.factory()}get auth(){return this.authService}get user(){return this.userService}get student(){return this.studentService}get family(){return this.familyService}get fee(){return this.feeService}}class Wv extends Tr{constructor(e,n){super(e),this.service=e,this.auth=n}}class Kv extends Wv{async login({username:e,password:n}){const r=await Ib(this.auth,e,n),{accessToken:s,refreshToken:i}=r.user,o=await new Oe().method("post").url("auth/decodeAccessToken").data({accessToken:s}).send(),{data:{details:{firstName:a,lastName:c,role:l,uid:u}}}=o;return{firstName:a,lastName:c,role:l,uid:u,accessToken:s,refreshToken:i}}async logout(){await Sb(this.auth)}}const Gv={apiKey:"AIzaSyBMyjMaCx6XzQG5WBIkeYpzXvJp0_UXyyk",authDomain:"phonebook-2213e.firebaseapp.com",databaseURL:"https://phonebook-2213e-default-rtdb.europe-west1.firebasedatabase.app",projectId:"phonebook-2213e",storageBucket:"phonebook-2213e.appspot.com",messagingSenderId:"850097043875",appId:"1:850097043875:web:0e02480ecd044cd5d68216"},Jv=k_(Gv),Yv=Mv(Jv);class Xv extends qv{factory(){this.authService=new Kv(this,Yv)}}const Qv=new Xv,Zv={key:0,class:"flex"},ey={class:"first:ml-0 ml-3"},ty={class:"ml-3"},ny=["onClick"],ry={key:1,class:"flex"},sy={class:"first:ml-0 ml-3"},iy=We({__name:"TheNav",setup(t){const e=$p(),n=bo(),r=Oi.filter(o=>typeof o.meta=="object"&&o.meta.requiresAuth),s=Oi.filter(o=>typeof o.meta=="undefined"||!o.meta.requiresAuth),i=()=>Qv.auth.logout().then(()=>{n.updateAuthState()}).then(()=>e.push({name:he.login}));return(o,a)=>{const c=ol("router-link");return mt(n).isAuthenticated?(Ee(),Ce("ul",Zv,[(Ee(!0),Ce(xe,null,Xo(mt(r),l=>(Ee(),Ce("li",ey,[Z(c,{to:l.path},{default:$e(()=>[yi(si(l.name),1)]),_:2},1032,["to"])]))),256)),Ft("li",ty,[Ft("a",{href:"#",onClick:Ih(i,["prevent"])},"LOGOUT",8,ny)])])):(Ee(),Ce("ul",ry,[(Ee(!0),Ce(xe,null,Xo(mt(s),l=>(Ee(),Ce("li",sy,[Z(c,{to:l.path},{default:$e(()=>[yi(si(l.name),1)]),_:2},1032,["to"])]))),256))]))}}}),oy=We({__name:"TheLogo",setup(t){return(e,n)=>(Ee(),Ce("p",null,"School Manager"))}}),ay={class:"w-full flex justify-center"},cy=Ft("div",{class:"w-full border-b border-b-gray-200 mb-6"},null,-1),ly=We({__name:"TheHeader",setup(t){return(e,n)=>(Ee(),Ce("div",ay,[Z(wo,null,{default:$e(()=>[Z(vo,null,{default:$e(()=>[Z(yo,{class:"w-full flex items-center justify-between py-6"},{default:$e(()=>[Z(oy),Z(iy)]),_:1})]),_:1}),cy]),_:1})]))}}),uy={key:0,class:"text-xl font-bold"},fy=We({__name:"AppTitle",props:{title:null},setup(t){return(e,n)=>t.title?(Ee(),Ce("p",uy,si(t.title),1)):Md("",!0)}}),dy={class:"w-full flex-1 flex justify-center"},hy=Ft("div",{id:"app-context-buttons"},null,-1),py=We({__name:"TheContent",setup(t){const e=ou();return(n,r)=>(Ee(),Ce("div",dy,[Z(wo,null,{default:$e(()=>[Z(vo,null,{default:$e(()=>[Z(yo,{class:"w-full mb-6 flex items-center justify-between"},{default:$e(()=>[Z(fy,{title:mt(e).title},null,8,["title"]),hy]),_:1})]),_:1}),bs(n.$slots,"default")]),_:3})]))}}),my={class:"w-full flex justify-center"},gy=Ft("div",{class:"w-full border-t border-t-gray-200 mt-6"},null,-1),_y=Ft("p",null,"Footer",-1),by=We({__name:"TheFooter",setup(t){return(e,n)=>(Ee(),Ce("div",my,[Z(wo,null,{default:$e(()=>[gy,Z(vo,null,{default:$e(()=>[Z(yo,{class:"w-full py-6 text-center"},{default:$e(()=>[_y]),_:1})]),_:1})]),_:1})]))}}),vy={class:"w-full flex flex-col items-start justify-between min-h-screen"},yy=We({__name:"App",setup(t){return(e,n)=>{const r=ol("router-view");return Ee(),Ce("div",vy,[Z(ly),Z(py,null,{default:$e(()=>[Z(r)]),_:1}),Z(by)])}}}),Fi=Rh(yy);Fi.use(xh());Promise.resolve().then(()=>bo().initAuth()).then(()=>{const t=dg();cg(),Fi.use(t),Fi.mount("#app")});export{Ve as $,ys as A,hs as B,bs as C,Ft as D,Xo as E,xe as F,as as G,Ey as H,Iy as I,ky as J,Oy as K,sl as L,os as M,ad as N,Zi as O,Ay as P,Ld as Q,$f as R,Cy as S,Tl as T,Sy as U,Py as V,wy as W,Dd as X,Ty as Y,xy as Z,ya as _,Xi as a,ol as a0,Ry as a1,wo as a2,vo as a3,yo as a4,ou as a5,Ny as a6,Z as b,Ce as c,We as d,$p as e,vl as f,yi as g,Md as h,Ih as i,he as j,mt as k,Ye as l,od as m,Yn as n,Ee as o,be as p,Dt as q,Nn as r,Qv as s,si as t,bo as u,ar as v,$e as w,il as x,Ze as y,Fr as z};
