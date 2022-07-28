import{o as V}from"./AppControl.684aaebb.js";import{d as C,J as P,a as p,l as y,m as B,O as F,o as g,c as w,D as v,k as j,C as _,h as x,n as L}from"./index.1e5e80b3.js";import{c as M,u as $,i as z,r as A,m as K}from"./AppFormGroup.57537ecc.js";const R={key:0,class:"inset-0 fixed z-10 flex items-center justify-center"},N=v("div",{class:"inset-0 absolute bg-gray-800 opacity-90 z-0"},null,-1),q=v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 94.926 94.926","xml:space":"preserve"},[v("g",null,[v("path",{d:`M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0
		c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096
		c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476
		c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62
		s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z`})])],-1),H=[q],S={class:"w-full border border-gray-200 p-8 rounded bg-white"},D={key:0,class:"font-bold pb-6 mb-6 border-b text-xl capitalize border-b-gray-200"},J={key:1,class:"pt-6 mt-6 border-t border-t-200"},ee=C({__name:"AppPopup",props:{visible:{type:Boolean}},emits:["update:visible"],setup(n,{emit:s}){const r=P(),t=p(null),c=y(()=>{const o=r.title();return o?o.length:0}),u=y(()=>{const o=r.footer();return o?o.length:0}),a=()=>{s("update:visible",!1)},f=o=>{o.key==="Escape"&&a()};return V(t,()=>{a()}),B(()=>{document.addEventListener("keydown",f)}),F(()=>{document.removeEventListener("keydown",f)}),(o,i)=>n.visible?(g(),w("div",R,[N,v("div",{ref_key:"popupRef",ref:t,class:"w-full relative z-10 xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"},[v("div",{onClick:a,class:"h-10 w-10 rounded-full bg-white flex items-center justify-center absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 shadow cursor-pointer hover:scale-110"},H),v("div",S,[j(c)?(g(),w("h3",D,[_(o.$slots,"title")])):x("",!0),_(o.$slots,"content"),j(u)?(g(),w("div",J,[_(o.$slots,"footer",{close:a})])):x("",!0)])],512)])):x("",!0)}}),U={state:!1,onClose:()=>{},onOpen:()=>{}},te=(n=U)=>{const{state:s=!1,onOpen:r,onClose:t}=n,c=p(s),u=()=>{c.value=!0},a=()=>{c.value=!1};return L(c,f=>f?typeof r=="function"&&r():typeof t=="function"&&t()),{visible:c,close:a,open:u}};function se(n,s){const r=Object.values(n),t=p(""),c=o=>typeof o!="undefined"?t.value===o:t.value!=="",u=o=>{!r.includes(o)||(t.value=o)},a=()=>{t.value=""},f=()=>t.value;return L(t,()=>{typeof s=="function"&&s()}),{is:c,set:u,reset:a,value:f}}const G=(n,s)=>M.withMessage(n,s),E={integer:()=>z,required:()=>A,minLength:n=>K(n)},I=Object.keys(E),Q=(n,s)=>I.includes(n)?E[n](s):s;function W(n,s,r){const t=Object.keys(s),c=t.reduce((i,d)=>{const h=Object.entries(s[d]);if(h.length)for(const k of[...h]){i[d]||(i[d]={});const[l,e]=k,m=r[d],b=m?m[l]:"",O=Q(l,e);i[d][l]=b?G(b,O):O}return i},{}),u=$(c,n),a=t.reduce((i,d)=>(i[d]=y(()=>u.value[d]?u.value[d].$errors:[]),i),{});return{validate:()=>u.value.$validate().then(i=>Promise.resolve(i)),errors:a,reset:()=>{u.value.$reset()}}}class X extends Error{constructor(s){super(s),this.name="FormValidationError"}}function oe(n){const{onValidated:s,onError:r,initialValues:t={},validation:c,validationMessages:u={}}=n,a=Object.keys(t).reduce((l,e)=>(Array.isArray(t[e])?l[e]=p(t[e].slice()):l[e]=p(t[e]),l),{}),o=(c?Object.keys(c):[]).reduce((l,e)=>(l[e]=y(()=>[]),l),{}),i=c?W(a,c,u):null,d=(l=!0)=>new Promise(e=>{i&&l?i.validate().then(m=>{e(m)}):e(!0)}).then(e=>new Promise((m,b)=>e?m(void 0):b(new X("Form is invalid.")))).then(()=>{if(typeof s=="function")return s()}).catch(e=>{if(typeof r=="function")return r(e)}),h=()=>{const l=Object.keys(t);for(const e of l)Array.isArray(t[e])?a[e].value=t[e].slice():a[e].value=t[e];i&&i.reset()};return{fields:a,values:()=>Object.keys(a).reduce((l,e)=>(l[e]=a[e].value,l),{}),errors:i?i.errors:o,submit:d,reset:h}}const ne=n=>r=>{typeof r=="object"&&r.name&&r.name==="FormValidationError"||console.error(r)};export{ee as _,se as a,oe as b,ne as c,te as u};