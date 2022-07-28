import{_ as Y,d as $,u as G,a0 as H,b as y,l as u,n as L,a1 as Q,c as _,e as n,w as i,f,k as e,S as W,F as z,o as d,Q as J,a2 as K,j as Z,Y as ee,g as w,t as A,i as T,D as b,h as le,s as g}from"./index.93ca6e21.js";import{A as h,V as ae}from"./AppButton.b0f6ca87.js";import{u as se,a as te,b as re,A as oe,c as ie}from"./index.706a5033.js";import{A as p,T as v}from"./AppControl.932a4855.js";import{A as ne,a as c}from"./AppFormGroup.6dd6e794.js";const ue=["onClick"],de={key:1,class:"text-center"},me={class:"w-full flex items-center justify-between"},fe=w("Cancel ");var C=(s=>(s.ADD="ADD",s.EDIT="EDIT",s.REMOVE="REMOVE",s))(C||{}),R=(s=>(s.ADD="Create a new fee",s.EDIT="Edit the fee",s.REMOVE="Remove the fee",s))(R||{}),F=(s=>(s.ADD="Create",s.EDIT="Save",s.REMOVE="Remove",s))(F||{});const pe=$({__name:"FeesMain",setup(s){const M=G(),E=H(),D=y(!1);y([]);const k=ie(),x=u(()=>a.fields.families.value.length),O=u(()=>D.value?"Unselect All":"Select All"),I=u(()=>F[r.value()]),N=u(()=>R[r.value()]),V=u(()=>E.families.map(t=>({value:t.id,title:t.name}))),q=u(()=>E.families.length>0),S=()=>new Promise(t=>{const l=a.values();if(r.is("ADD"))return g.fee.create(l).then(t);if(r.is("EDIT"))return g.fee.update(l).then(t);if(r.is("REMOVE"))return g.fee.delete(l.id).then(t)}).then(m.close),m=se({onClose:()=>{r.reset(),a.reset()}}),r=te(C,()=>{r.is()&&m.open()}),a=re({initialValues:{id:"",name:"",value:"",description:"",families:[],completed:!1},validation:{name:{required:!0},value:{required:!0,integer:!0},description:{}},validationMessages:{name:{required:"Please, enter a name."},value:{required:"You need to define a fee amount."}},onValidated:S,onError:k}),U=()=>{r.set("ADD")},B=t=>{const l=E.getFeeById(t);l&&(a.fields.id.value=l.id,a.fields.name.value=l.name,a.fields.value.value=l.value,a.fields.description.value=l.description,a.fields.completed.value=l.completed,a.fields.families.value=l.families),r.set("EDIT")},P=t=>{a.fields.id.value=t,r.set("REMOVE")},j=()=>{a.fields.families.value=D.value?[]:V.value.map(t=>t.value)};return L(x,t=>{D.value=t===V.value.length}),(t,l)=>{const X=Q("router-view");return d(),_(z,null,[n(X,null,{default:i(({Component:o})=>[(d(),f(ee(o),J({onEdit:B,onRemove:P},K(e(M).currentRoute.value.name===e(Z).fees?{add:U}:{})),null,16))]),_:1}),(d(),f(W,{to:"#app-popup"},[n(oe,{visible:e(m).visible.value,"onUpdate:visible":l[7]||(l[7]=o=>e(m).visible.value=o)},{title:i(()=>[w(A(e(N)),1)]),content:i(()=>[e(r).is("ADD")||e(r).is("EDIT")?(d(),f(ne,{key:0,onSubmit:l[4]||(l[4]=T(()=>{},["prevent"])),class:"mb-0"},{default:i(()=>[n(c,{class:"w-full",label:"Name",target:"name",required:!0,errors:e(a).errors.name.value},{default:i(()=>[n(p,{modelValue:e(a).fields.name.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e(a).fields.name.value=o),class:"w-full",id:"name",type:e(v).TEXT,error:e(a).errors.name.value.length>0},null,8,["modelValue","type","error"])]),_:1},8,["errors"]),n(c,{class:"w-full",label:"Value",target:"value",required:!0,errors:e(a).errors.value.value},{default:i(()=>[n(p,{modelValue:e(a).fields.value.value,"onUpdate:modelValue":l[1]||(l[1]=o=>e(a).fields.value.value=o),class:"w-full",id:"value",type:e(v).TEXT,error:e(a).errors.value.value.length>0},null,8,["modelValue","type","error"])]),_:1},8,["errors"]),e(q)?(d(),f(c,{key:0,class:"w-full",label:"Families",target:"families"},{context:i(()=>[b("a",{href:"#",onClick:T(j,["prevent"]),class:"text-blue-500 hover:text-blue-700 underline decoration-dashed hover:no-underline"},A(e(O)),9,ue)]),default:i(()=>[n(p,{modelValue:e(a).fields.families.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e(a).fields.families.value=o),type:e(v).DROPDOWN,options:e(V),multiple:!0,id:"families",class:"w-full"},null,8,["modelValue","type","options"])]),_:1})):le("v-if",!0),n(c,{class:"w-full",label:"Description",target:"description",errors:e(a).errors.description.value},{default:i(()=>[n(p,{modelValue:e(a).fields.description.value,"onUpdate:modelValue":l[3]||(l[3]=o=>e(a).fields.description.value=o),class:"w-full",id:"description",type:e(v).TEXTAREA,error:e(a).errors.description.value.length>0},null,8,["modelValue","type","error"])]),_:1},8,["errors"])]),_:1})):(d(),_("p",de,"Are you sure you want to remove this fee?"))]),footer:i(()=>[b("div",me,[n(h,{onClick:l[5]||(l[5]=o=>e(m).close()),variant:e(ae).SECONDARY},{default:i(()=>[fe]),_:1},8,["variant"]),n(h,{onClick:l[6]||(l[6]=o=>e(a).submit(!e(r).is("REMOVE")))},{default:i(()=>[w(A(e(I)),1)]),_:1})])]),_:1},8,["visible"])]))],64)}}});var Ae=Y(pe,[["__file","/home/dmitry/PhpstormProjects/school-manager-web/src/frontend/components/FeesMain.vue"]]);export{Ae as default};
