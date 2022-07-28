import{_ as oe,d as le,a0 as ne,u as ie,b as x,l as d,n as re,a1 as ue,c as _,e as i,w as l,f as v,k as e,S as O,F as de,j as N,o as m,Q as me,a2 as fe,Y as ve,g as p,t as y,i as h,D as S,h as pe,s as A}from"./index.93ca6e21.js";import{A as V,V as I}from"./AppButton.b0f6ca87.js";import{b as U,a as j,u as B,A as P,c as ce}from"./index.706a5033.js";import{A as $,a as R}from"./AppFormGroup.6dd6e794.js";import{A as b,T as q}from"./AppControl.932a4855.js";const De=["onClick"],Ee={key:1,class:"text-center"},ye={class:"w-full flex items-center justify-between"},Ae=p("Cancel "),Ve={key:1,class:"text-center"},Re={class:"w-full flex items-center justify-between"},be=p("Cancel ");var Y=(a=>(a.ADD="ADD",a.EDIT="EDIT",a.REMOVE="REMOVE",a))(Y||{}),z=(a=>(a.ADD="ADD",a.RESET="RESET",a))(z||{}),G=(a=>(a.ADD="Create a new family",a.EDIT="Edit the family",a.REMOVE="Remove the family",a))(G||{}),H=(a=>(a.ADD="Add an income",a.RESET="Reset this income",a))(H||{}),L=(a=>(a.ADD="Create",a.EDIT="Save",a.REMOVE="Remove",a))(L||{}),Q=(a=>(a.ADD="Add",a.RESET="Reset",a))(Q||{});const we=le({__name:"FamiliesMain",setup(a){const w=ne(),k=ie();x([]);const F=ce(),g=x(!1),W=d(()=>o.fields.fees.value.length),X=d(()=>g.value?"Unselect All":"Select All"),C=d(()=>w.fees.map(s=>({value:s.id,title:s.name}))),J=d(()=>w.fees.length>0),K=()=>{o.fields.fees.value=g.value?[]:C.value.map(s=>s.value)},Z=d(()=>{const s={};return k.currentRoute.value.name===N.families&&(s.add=T.add),k.currentRoute.value.name===N.family&&(s.income=M.add,s.resetIncome=M.reset),s}),ee=d(()=>G[r.value()]),te=d(()=>L[r.value()]),o=U({initialValues:{id:"",name:"",description:"",fees:[]},validation:{name:{required:!0},description:{pattern:s=>s===""||/^[\u0401\u0451\u0410-\u044fa-z0-9,.\s]+$/i.test(s)}},validationMessages:{description:{pattern:"Description should contain alphabetic characters and digits only."}},onValidated:()=>new Promise(s=>{const t=o.values(),{id:E}=t;r.is("ADD")&&A.family.create(t).then(s),r.is("EDIT")&&A.family.update(t).then(s),r.is("REMOVE")&&A.family.delete(E.toString()).then(s)}).then(c.close),onError:F}),r=j(Y,()=>{r.is()&&c.open()}),c=B({onClose:()=>{r.reset(),o.reset()}}),T={add:()=>{r.set("ADD")},edit:s=>{const t=w.getFamilyById(s);t&&(o.fields.id.value=t.id,o.fields.name.value=t.name,o.fields.description.value=t.description,o.fields.fees.value=t.fees),r.set("EDIT")},remove:s=>{o.fields.id.value=s,r.set("REMOVE")}},se=d(()=>H[u.value()]),ae=d(()=>Q[u.value()]),f=U({initialValues:{amount:""},validation:{amount:{required:!0,integer:!0}},onValidated:()=>new Promise(s=>{const{id:t}=o.values(),{amount:E}=f.values();u.is("ADD")&&A.family.income(t,+E).then(s),u.is("RESET")&&A.family.resetIncome(t).then(s)}).then(D.close),onError:F}),u=j(z,()=>{u.is()&&D.open()}),D=B({onClose:()=>{u.reset(),o.reset(),f.reset()}}),M={add:s=>{o.fields.id.value=s,u.set("ADD")},reset:s=>{o.fields.id.value=s,u.set("RESET")}};return re(W,s=>{g.value=s===C.value.length}),(s,t)=>{const E=ue("router-view");return m(),_(de,null,[i(E,null,{default:l(({Component:n})=>[(m(),v(ve(n),me({onEdit:T.edit,onRemove:T.remove},fe(e(Z))),null,16,["onEdit","onRemove"]))]),_:1}),(m(),v(O,{to:"#app-popup"},[i(P,{visible:e(c).visible.value,"onUpdate:visible":t[6]||(t[6]=n=>e(c).visible.value=n)},{title:l(()=>[p(y(e(ee)),1)]),content:l(()=>[e(r).is("ADD")||e(r).is("EDIT")?(m(),v($,{key:0,onSubmit:t[3]||(t[3]=h(()=>{},["prevent"])),class:"mb-0"},{default:l(()=>[i(R,{class:"w-full",label:"Name",target:"Name",required:!0,errors:e(o).errors.name.value},{default:l(()=>[i(b,{modelValue:e(o).fields.name.value,"onUpdate:modelValue":t[0]||(t[0]=n=>e(o).fields.name.value=n),error:e(o).errors.name.value.length>0,class:"w-full",id:"name"},null,8,["modelValue","error"])]),_:1},8,["errors"]),e(J)?(m(),v(R,{key:0,class:"w-full",label:"Fees",target:"fees"},{context:l(()=>[S("a",{href:"#",onClick:h(K,["prevent"]),class:"text-blue-500 hover:text-blue-700 underline decoration-dashed hover:no-underline"},y(e(X)),9,De)]),default:l(()=>[i(b,{modelValue:e(o).fields.fees.value,"onUpdate:modelValue":t[1]||(t[1]=n=>e(o).fields.fees.value=n),type:e(q).DROPDOWN,options:e(C),multiple:!0,id:"fees",class:"w-full"},null,8,["modelValue","type","options"])]),_:1})):pe("v-if",!0),i(R,{class:"w-full",label:"Description",target:"description",errors:e(o).errors.description.value},{default:l(()=>[i(b,{modelValue:e(o).fields.description.value,"onUpdate:modelValue":t[2]||(t[2]=n=>e(o).fields.description.value=n),class:"w-full",id:"description",type:e(q).TEXTAREA,error:e(o).errors.description.value.length>0},null,8,["modelValue","type","error"])]),_:1},8,["errors"])]),_:1})):(m(),_("p",Ee,"Are you sure you want to remove this family?"))]),footer:l(()=>[S("div",ye,[i(V,{onClick:t[4]||(t[4]=n=>e(c).close()),variant:e(I).SECONDARY},{default:l(()=>[Ae]),_:1},8,["variant"]),i(V,{onClick:t[5]||(t[5]=n=>e(o).submit(!e(r).is("REMOVE")))},{default:l(()=>[p(y(e(te)),1)]),_:1})])]),_:1},8,["visible"])])),(m(),v(O,{to:"#app-popup"},[i(P,{visible:e(D).visible.value,"onUpdate:visible":t[11]||(t[11]=n=>e(D).visible.value=n)},{title:l(()=>[p(y(e(se)),1)]),content:l(()=>[e(u).is("ADD")?(m(),v($,{key:0,onSubmit:t[8]||(t[8]=h(()=>{},["prevent"])),class:"mb-0"},{default:l(()=>[i(R,{class:"w-full",label:"Amount",target:"amount",required:!0,errors:e(f).errors.amount.value},{default:l(()=>[i(b,{modelValue:e(f).fields.amount.value,"onUpdate:modelValue":t[7]||(t[7]=n=>e(f).fields.amount.value=n),error:e(f).errors.amount.value.length>0,class:"w-full",id:"amount"},null,8,["modelValue","error"])]),_:1},8,["errors"])]),_:1})):(m(),_("p",Ve,"Are you sure you want to reset this family's income?"))]),footer:l(()=>[S("div",Re,[i(V,{onClick:t[9]||(t[9]=n=>e(D).close()),variant:e(I).SECONDARY},{default:l(()=>[be]),_:1},8,["variant"]),i(V,{onClick:t[10]||(t[10]=n=>e(f).submit(!e(u).is("RESET")))},{default:l(()=>[p(y(e(ae)),1)]),_:1})])]),_:1},8,["visible"])]))],64)}}});var Fe=oe(we,[["__file","/home/dmitry/PhpstormProjects/school-manager-web/src/frontend/components/FamiliesMain.vue"]]);export{Fe as default};
