import{s as y}from"./toolbar.esm-BovHdIpx.js";import{_ as V,S as N,U as T,r as o,o as c,c as B,w as a,a as t,e as l,f as h,t as _,b as p,d as f,n as Q}from"./app-BoR-OAMc.js";const S={components:{Toolbar:y,DataTable:N,Column:T},props:{questionnaires:{type:Array,default:()=>[]}},data(){return{form:{},questionnairesData:this.questionnaires,questionnaire:{},saving:!1,submitted:!1,questionnaireDialog:!1}},computed:{availableBands(){const u=[];this.$page.props.auth.user.band_owner&&this.$page.props.auth.user.band_owner.forEach(s=>{u.push({id:s.id,name:s.name})}),this.$page.props.auth.user.band_member&&this.$page.props.auth.user.band_member.forEach(s=>{u.push({id:s.id,name:s.name})});function i(s,d){return s.name<d.name?-1:s.name>d.name?1:0}return u.filter((s,d,e)=>e.findIndex(r=>r.id===s.id)===d).sort(i)}},watch:{},created(){},methods:{selectedQuestionnaire(u){this.$inertia.visit(this.route("questionnaire.edit",u.data.slug))},openNew(){this.saving=!1,this.product={},this.submitted=!1,this.questionnaireDialog=!0},saveQuestionnaire(){this.submitted=!0,this.saving=!0,this.questionnaire.band_id=this.questionnaire.band.id,this.$inertia.post("/questionnaire/new",this.questionnaire)},closeDialog(){this.saving=!1,this.questionnaireDialog=!1}}},U=l("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Questionnaires ",-1),I={class:"card"},E=["alt"],R={class:"p-field"},L=l("label",{for:"name"},"Name",-1),z={key:0,class:"p-error"},A={class:"p-field"},M=l("label",{for:"description"},"Description",-1),j={class:"p-field"},F=l("label",{for:"band",class:"p-mb-3"},"Band",-1),G={key:0},H={key:1};function J(u,i,s,d,e,r){const m=o("Button"),b=o("Toolbar"),g=o("Column"),v=o("DataTable"),q=o("InputText"),w=o("Textarea"),D=o("Dropdown"),C=o("Dialog"),k=o("Container"),x=o("Layout");return c(),B(x,null,{header:a(()=>[U]),default:a(()=>[t(k,null,{default:a(()=>[l("div",I,[t(b,{class:"p-mb-4"},{left:a(()=>[t(m,{label:"New",icon:"pi pi-plus",class:"p-button-success p-mr-2",onClick:r.openNew},null,8,["onClick"])]),right:a(()=>[]),_:1}),h(" "+_(e.questionnairesData)+" ",1),t(v,{value:e.questionnairesData,"striped-rows":"","row-hover":"","responsive-layout":"scroll","selection-mode":"single",onRowClick:r.selectedQuestionnaire},{empty:a(()=>[h(" No Records found. Click 'new' to create one. ")]),default:a(()=>[t(g,{field:"name",header:"Name",sortable:!0})]),_:1},8,["value","onRowClick"])]),t(C,{visible:e.questionnaireDialog,"onUpdate:visible":i[3]||(i[3]=n=>e.questionnaireDialog=n),style:{width:"450px"},header:"Questionnaire Details",modal:!0,class:"p-fluid"},{footer:a(()=>[t(m,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:r.closeDialog},null,8,["onClick"]),t(m,{label:e.saving?"Saving...":"Save",disabled:e.saving,icon:"pi pi-check",class:"p-button-text",onClick:r.saveQuestionnaire},null,8,["label","disabled","onClick"])]),default:a(()=>[e.questionnaire.image?(c(),p("img",{key:0,src:"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:e.questionnaire.image,class:"product-image"},null,8,E)):f("",!0),l("div",R,[L,t(q,{id:"name",modelValue:e.questionnaire.name,"onUpdate:modelValue":i[0]||(i[0]=n=>e.questionnaire.name=n),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Q({"p-invalid":e.submitted&&!e.questionnaire.name})},null,8,["modelValue","class"]),e.submitted&&!e.questionnaire.name?(c(),p("small",z,"Name is required.")):f("",!0)]),l("div",A,[M,t(w,{id:"description",modelValue:e.questionnaire.description,"onUpdate:modelValue":i[1]||(i[1]=n=>e.questionnaire.description=n),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),l("div",j,[F,t(D,{id:"bandSelection",modelValue:e.questionnaire.band,"onUpdate:modelValue":i[2]||(i[2]=n=>e.questionnaire.band=n),options:r.availableBands,"option-label":"name",placeholder:"Select a Band"},{value:a(n=>[n.value&&n.value.id?(c(),p("div",G,[l("span",null,_(n.value.name),1)])):(c(),p("span",H,_(n.placeholder),1))]),_:1},8,["modelValue","options"])])]),_:1},8,["visible"])]),_:1})]),_:1})}const W=V(S,[["render",J]]);export{W as default};
