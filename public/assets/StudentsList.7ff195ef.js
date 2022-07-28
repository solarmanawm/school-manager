import{d as R,a as k,l as y,n as I,f as d,w as s,G as S,k as e,o as n,D as c,t as T,b as r,g as w,$ as V,c as b,h as $,S as z,a2 as N,F as D,e as B,a3 as G,E as M,a4 as g,j}from"./index.1e5e80b3.js";import{A as E}from"./AppControl.684aaebb.js";import{V as m,S as L,_ as p}from"./AppButton.b4ec5f9d.js";import{_ as F}from"./AppCard.3ad22048.js";const H={class:"text-xl font-bold mb-1"},P={class:"flex justify-between"},U=w("Details "),Y=w("Edit "),q=w("Remove ");var u=(t=>(t.CARD="CARD",t.LIST="LIST",t))(u||{});const J=R({__name:"StudentsListItem",props:{view:null,item:null},emits:["edit","remove","details"],setup(t,{emit:l}){const i=t,f=k("CARD"),a=y(()=>f.value==="CARD"),x=()=>{l("edit",i.item.id)},h=()=>{l("remove",i.item.id)},C=()=>{l("details",i.item.id)};return I(()=>i.view,_=>{f.value=_}),(_,o)=>(n(),d(F,{class:S([{"flex-col":e(a),"mb-3 py-3 items-center":!e(a)},"relative flex justify-between shadow-sm hover:shadow-lg"])},{default:s(()=>[c("div",{class:S(e(a)?"mb-6":"flex-1 flex items-center justify-between mr-6")},[c("p",H,T(t.item.name),1)],2),c("div",null,[c("p",P,[r(p,{class:"flex-1 mr-2",variant:e(m).PRIMARY,size:e(L).SMALL,onClick:C},{default:s(()=>[U]),_:1},8,["variant","size"]),r(p,{class:"flex-1 mr-1",variant:e(m).LIGHT,size:e(L).SMALL,onClick:x},{default:s(()=>[Y]),_:1},8,["variant","size"]),r(p,{class:"flex-1 ml-1",variant:e(m).LIGHT,size:e(L).SMALL,onClick:h},{default:s(()=>[q]),_:1},8,["variant","size"])])])]),_:1},8,["class"]))}}),K={class:"flex"},O=w("New Student "),ee=R({__name:"StudentsList",props:{hasFamilies:{type:Boolean,default:!1}},emits:["add","edit","remove"],setup(t,{emit:l}){const i=V(),f=B(),a=k(u.CARD),x=()=>{l("add")},h=o=>{l("edit",o)},C=o=>{l("remove",o)},_=o=>f.push({name:j.student,params:{id:o}});return(o,A)=>(n(),b(D,null,[(n(),d(z,{to:"#app-context-buttons"},[c("div",K,[t.hasFamilies?(n(),d(p,{key:0,variant:e(m).LIGHT,onClick:x,class:"whitespace-nowrap mr-3"},{default:s(()=>[O]),_:1},8,["variant"])):$("",!0),r(E,{modelValue:a.value,"onUpdate:modelValue":A[0]||(A[0]=v=>a.value=v),class:"w-full",id:"sex",type:"button-set",variant:e(m).LIGHT,options:[{icon:"fa-solid fa-border-all",value:e(u).CARD},{icon:"fa-solid fa-list",value:e(u).LIST}]},null,8,["modelValue","variant","options"])])])),r(N,null,{default:s(()=>[r(G,null,{default:s(()=>[(n(!0),b(D,null,M(e(i).students,v=>(n(),d(g,{class:S(a.value===e(u).CARD?"w-1/3":"w-full")},{default:s(()=>[(n(),d(J,{view:a.value,key:v.id,item:v,onEdit:h,onRemove:C,onDetails:_,class:"w-full mb-6"},null,8,["view","item"]))]),_:2},1032,["class"]))),256))]),_:1})]),_:1})],64))}});export{ee as default};
