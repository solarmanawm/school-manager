import{d as $,a as U,$ as q,l as m,c as w,b as o,w as i,f,k as e,S as j,F as H,e as Y,a0 as G,o as u,Q as K,a1 as L,j as R,Y as P,g as E,t as h,i as Q,h as W,D as z,s as c}from"./index.1e5e80b3.js";import{_ as J,a as v}from"./AppFormGroup.57537ecc.js";import{A as p,T as D}from"./AppControl.684aaebb.js";import{a as X,b as Z,u as ee,_ as te,c as ae}from"./index.6f7326c6.js";import{V as B,_ as C}from"./AppButton.b4ec5f9d.js";const se={key:1,class:"text-center"},le={class:"w-full flex items-center justify-between"},re=E("Cancel ");var T=(s=>(s.ADD="ADD",s.EDIT="EDIT",s.REMOVE="REMOVE",s))(T||{}),b=(s=>(s.ADD="Create a new student",s.EDIT="Edit the student",s.REMOVE="Remove the student",s))(b||{}),g=(s=>(s.ADD="Create",s.EDIT="Save",s.REMOVE="Remove",s))(g||{});const me=$({__name:"StudentsMain",setup(s){U([]);const x=ae(),V=Y(),y=q(),_=m(()=>y.families.map(n=>({value:n.id,title:n.name}))),O=m(()=>_.value.length>0),M=()=>new Promise(n=>{const t=a.values();l.is("ADD")&&c.student.create(t).then(n),l.is("EDIT")&&c.student.update(t).then(n),l.is("REMOVE")&&c.student.delete(t.id).then(n)}).then(d.close),l=X(T,()=>{l.is()&&d.open()}),a=Z({initialValues:{id:"",sex:"male",name:"",family:"",dateOfBirth:""},validation:{name:{required:!0},family:{required:!0},dateOfBirth:{required:!0}},onValidated:M,onError:x}),d=ee({onClose:()=>{l.reset(),a.reset()}}),A=m(()=>b[l.value()]),I=m(()=>g[l.value()]),N=()=>{l.set("ADD")},k=n=>{const t=y.getStudentById(n);t&&(a.fields.id.value=t.id,a.fields.name.value=t.name,a.fields.sex.value=t.sex,a.fields.dateOfBirth.value=t.dateOfBirth,a.fields.family.value=t.family),l.set("EDIT")},S=n=>{l.set("REMOVE")};return(n,t)=>{const F=G("router-view");return u(),w(H,null,[o(F,null,{default:i(({Component:r})=>[(u(),f(P(r),K({onEdit:k,onRemove:S},e(V).currentRoute.value.name===e(R).students?{hasFamilies:e(O)}:{},L(e(V).currentRoute.value.name===e(R).students?{add:N}:{})),null,16))]),_:1}),(u(),f(j,{to:"#app-popup"},[o(te,{visible:e(d).visible.value,"onUpdate:visible":t[7]||(t[7]=r=>e(d).visible.value=r)},{title:i(()=>[E(h(e(A)),1)]),content:i(()=>[e(l).is("ADD")||e(l).is("EDIT")?(u(),f(J,{key:0,onSubmit:t[4]||(t[4]=Q(()=>{},["prevent"])),class:"mb-0"},{default:i(()=>[e(O)?(u(),f(v,{key:0,class:"w-full",label:"Family",target:"family",required:!0,errors:e(a).errors.family.value},{default:i(()=>[o(p,{modelValue:e(a).fields.family.value,"onUpdate:modelValue":t[0]||(t[0]=r=>e(a).fields.family.value=r),class:"w-full",id:"family",type:e(D).DROPDOWN,error:e(a).errors.family.value.length>0,options:e(_)},null,8,["modelValue","type","error","options"])]),_:1},8,["errors"])):W("",!0),o(v,{class:"w-full",label:"Name",target:"Name",required:!0,errors:e(a).errors.name.value},{default:i(()=>[o(p,{modelValue:e(a).fields.name.value,"onUpdate:modelValue":t[1]||(t[1]=r=>e(a).fields.name.value=r),error:e(a).errors.name.value.length>0,class:"w-full",id:"name"},null,8,["modelValue","error"])]),_:1},8,["errors"]),o(v,{class:"w-full",label:"Date of birth",target:"dateOfBirth",errors:e(a).errors.dateOfBirth.value},{default:i(()=>[o(p,{modelValue:e(a).fields.dateOfBirth.value,"onUpdate:modelValue":t[2]||(t[2]=r=>e(a).fields.dateOfBirth.value=r),error:e(a).errors.dateOfBirth.value.length>0,type:e(D).DATE_PICKER,class:"w-full",id:"dateOfBirth"},null,8,["modelValue","error","type"])]),_:1},8,["errors"]),o(v,{class:"w-full",label:"Sex",target:"sex"},{default:i(()=>[o(p,{modelValue:e(a).fields.sex.value,"onUpdate:modelValue":t[3]||(t[3]=r=>e(a).fields.sex.value=r),class:"w-full",id:"sex",type:e(D).BUTTON_SET,variant:e(B).LIGHT,options:[{title:"Male",value:"male"},{title:"Female",value:"female"}]},null,8,["modelValue","type","variant"])]),_:1})]),_:1})):(u(),w("p",se,"Are you sure you want to remove this student?"))]),footer:i(()=>[z("div",le,[o(C,{onClick:t[5]||(t[5]=r=>e(d).close()),variant:e(B).SECONDARY},{default:i(()=>[re]),_:1},8,["variant"]),o(C,{onClick:t[6]||(t[6]=r=>e(a).submit(!e(l).is("REMOVE")))},{default:i(()=>[E(h(e(I)),1)]),_:1})])]),_:1},8,["visible"])]))],64)}}});export{me as default};
