import{d as C,a5 as I,$ as L,l as n,n as V,c as $,k as t,f as m,D as a,b as o,w as s,S as B,h as u,t as f,a2 as T,F as N,a6 as E,o as r,a3 as G,a4 as p,G as A,g as b}from"./index.25ef1641.js";import{V as v,S as x,_ as h}from"./AppButton.2eecd9ad.js";import{_ as S}from"./AppCard.efc37f1e.js";const F={class:"flex"},H=b("Edit "),M=b("Remove "),R={class:"flex items-center justify-between mb-6"},j={class:"flex flex-col item-start"},U={class:"text-gray-300 text-sm mb-2"},q=a("p",{class:"font-bold text-sm mb-3"},"Description:",-1),J=a("p",{class:"font-bold text-sm mb-3"},"Details:",-1),K=a("p",null,"Some details go here...",-1),Y=C({__name:"StudentsItemDetails",emits:["edit","remove"],setup(O,{emit:d}){const k=E(),D=I(),w=L(),e=n(()=>w.getStudentById(k.params.id)),c=n(()=>!!e.value),g=n(()=>c.value?e.value.name:""),_=n(()=>!!e.value.description),i=l=>{D.title=l},y=()=>{d("edit",e.value.id),i(e.value.name)},z=()=>{d("remove",e.value.id),i(e.value.name)};return c.value&&i(e.value.name),V(g,l=>{l&&i(l)}),(l,P)=>(r(),$(N,null,[t(c)?(r(),m(B,{key:0,to:"#app-context-buttons"},[a("div",F,[o(h,{class:"flex-1 mr-1",variant:t(v).LIGHT,size:t(x).SMALL,onClick:y},{default:s(()=>[H]),_:1},8,["variant","size"]),o(h,{class:"flex-1 ml-1",variant:t(v).LIGHT,size:t(x).SMALL,onClick:z},{default:s(()=>[M]),_:1},8,["variant","size"])])])):u("",!0),a("div",R,[a("div",j,[a("p",U,"ID: "+f(t(e).id),1)])]),o(T,null,{default:s(()=>[o(G,null,{default:s(()=>[o(p,{class:"flex w-1/3"},{default:s(()=>[t(_)?(r(),m(S,{key:0,class:"flex-1"},{default:s(()=>[q,a("p",null,f(t(e).description),1)]),_:1})):u("",!0)]),_:1}),o(p,{class:A([t(_)?"w-2/3":"w-full","flex"])},{default:s(()=>[o(S,{class:"flex-1"},{default:s(()=>[J,K]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})],64))}});export{Y as default};