import{_ as N,B as U,S as z,U as E,a9 as H,u as j,h as P,a7 as C,r as u,o as s,c as x,w as p,a as h,d as c,e as t,b as l,F as v,k as _,t as i,i as w,L as O,f as m,n as f,aa as R,v as Y,j as q}from"./app-rdp2O8e-.js";import{C as K}from"./CurrencyInput-Dmz8OmXP.js";import{R as W}from"./ReservedCalendar-DbGC74Fp.js";import{L as G}from"./Label-DpqJTaRq.js";import"./index-BYO4bM7g.js";const J={components:{BreezeAuthenticatedLayout:U,DataTable:z,Column:E,InputText:H,Button:j,CurrencyInput:K,ReservedCalendar:W,Label:G},props:["bandsAndProposals","successMessage","eventTypes","proposal_phases","bookedDates","proposedDates"],data(){return{showModal:!1,showCreateModal:!1,activeProposal:{},searchParams:{},activeBandSite:"",dontShowCompleted:!1,filters1:null,chartData:{labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},lightOptions:{plugins:{legend:{labels:{color:"#495057"}}}},showFields:[{name:"Author",property:"author",subProperty:"name"},{name:"Proposed Date/Time",property:"date"},{name:"Recurring dates",property:"recurring_dates",subProperty:"date"},{name:"Event Type",property:"event_type",subProperty:"name"},{name:"Location",property:"location"},{name:"Hours",property:"hours"},{name:"Price",property:"price"},{name:"Color",property:"color"},{name:"Locked",property:"locked"},{name:"Client Notes",property:"client_notes"},{name:"Created",property:"created_at"},{name:"Contract PDF",property:"contract",subProperty:"image_url"}],proposalData:{name:"",date:new Date(P().set({hour:19,minute:0}).add(1,"month")),event_type_id:0,hours:0,price:0,notes:""},loading:!1,draftInputs:[{name:"Name of the gig",type:"text",field:"name"},{name:"Event Type",type:"eventTypeDropdown",field:"event_type_id"},{name:"Date / Time",type:"date",field:"date"},{name:"Length (hours)",type:"number",field:"hours"},{name:"Price",type:"currency",field:"price"}]}},computed:{averagePrice(){const n=this.proposedDates.filter(g=>g.event_type_id===this.proposalData.event_type_id&&g.price>0);let r=0;return n.forEach(g=>{r+=parseFloat(g.price)}),(r/n.length||0).toFixed(2)}},created(){this.initFilters1(),this.searchParams=this.$qs.parse(location.search.slice(1))},mounted(){this.searchParams.open&&this.bandsAndProposals.forEach(n=>{n.proposals&&n.proposals.forEach(r=>{r.id.toString()===this.searchParams.open&&this.selectProposal({data:r})})})},methods:{toggleCreateModal(n){this.activeBandSite=n,this.showCreateModal=!this.showCreateModal},toggleModal(){this.showModal=!this.showModal},selectProposal(n){this.activeProposal=n.data,this.showModal=!0},gotoProposal(){this.$inertia.get("/proposals/"+this.activeProposal.key+"/edit")},draftProposal(){this.$inertia.post("/proposals/"+this.activeBandSite+"/create",this.proposalData)},writeToCalendar(){this.$inertia.post("/proposals/"+this.activeProposal.key+"/writeToCalendar")},sendIt(){this.loading=!0,this.$swal.fire({inputLabel:"Customized message for the proposal email",inputPlaceholder:"Type your message here...",inputValue:"Please confirm the details of this proposal",input:"textarea",showCancelButton:!0}).then(n=>{n.isConfirmed?setTimeout(()=>{this.$inertia.post("/proposals/"+this.activeProposal.key+"/sendit",{message:n.value},{onSuccess:()=>{this.activeProposal.phase_id=3,this.loading=!1}})},1e3):this.loading=!1})},parseDate(n){return P(n).format("YYYY-MM-DD")},sendContract(){this.loading=!0,setTimeout(()=>{this.$inertia.post("/proposals/"+this.activeProposal.key+"/sendContract",{},{onSuccess:()=>{this.activeProposal.phase_id=5,this.loading=!1}})},1e3)},clearFilter1(){this.initFilters1()},initFilters1(){this.filters1={global:{value:null,matchMode:C.CONTAINS},phase_id:{value:null,matchMode:C.CONTAINS}}}}},Q=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Proposals ",-1);const X={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Z={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg pt-4"},$={key:0,class:"container my-8"},ee={class:"flex justify-between"},te={class:"flex items-center"},oe={class:"font-semibold display:block"},se={class:"display:block"},ae=["onClick"],le={class:"flex flex-row"},re={class:"hidden md:flex"},ne={class:"p-input-icon-left"},ie=t("i",{class:"pi pi-search"},null,-1),de={class:"flex-grow mt-2"},pe={class:"flex justify-end content-between"},ce=t("label",{for:"switch",class:"mr-2"},"Completed",-1),ue={class:"flex justify-center items-center my-4"},he=["onClick"],me={key:1},ve={class:"mb-1 md:mb-4 p-0 md:p-4 w-full flex flex-row overflow-x-auto"},_e=["title","innerHTML"],ye={key:0,class:"flex justify-center items-center flex align-center content-center h-full flex-col"},fe=t("div",{class:"animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"},null,-1),ge=t("div",{class:"my-8"}," Sending... ",-1),be=[fe,ge],we={key:1},xe={class:"text-gray-600"},ke={for:"name"},Pe={key:0,class:"mb-4"},Ce={key:1,class:"overflow-ellipsis text-blue-500"},De=["href"],Me=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 inline",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z","clip-rule":"evenodd"})],-1),Ve={key:2},Be={key:3,class:"mb-4"},Te={class:f(["md:grid","md:grid-cols-2","hover:bg-gray-50","md:space-y-0","space-y-1","p-4"])},Se=t("p",{class:"text-gray-600"},[t("label",{for:"name"},"Contacts")],-1),Fe={class:f(["md:grid","md:grid-cols-2","hover:bg-gray-50","md:space-y-0","space-y-1","p-4"])},Ae=t("p",{class:"text-gray-600"},[t("label",{for:"name"},"Proposal Acceptance Link")],-1),Le=t("div",null,[t("div",{class:"mt-2"},[t("span",{class:"text-sm"},"(this is for when the client cannot seem to receive the proposal acceptance email)")])],-1),Ie={class:"flex-auto"},Ne=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"})],-1),Ue=["disabled"],ze=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})],-1),Ee=["disabled"],He=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})],-1),je=["disabled"],Oe=t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})],-1),Re=t("h1",null,"New Proposal",-1),Ye={class:"text-gray-600"},qe=["for"],Ke={key:0,class:"mb-4"},We=["id","onUpdate:modelValue","disabled","type","placeholder"],Ge={key:1,class:"mb-4"},Je={key:2},Qe=["onUpdate:modelValue"],Xe={key:3},Ze={key:4},$e=["onUpdate:modelValue"],et=["value"];function tt(n,r,y,g,o,d){const ot=u("Chart"),D=u("Button"),M=u("InputText"),V=u("InputSwitch"),b=u("Column"),B=u("DataTable"),T=u("Container"),k=u("card-modal"),S=u("currency-input"),F=u("reserved-calendar"),A=u("breeze-authenticated-layout");return s(),x(A,null,{header:p(()=>[Q]),default:p(()=>[h(T,{class:"md:container md:mx-auto"},{default:p(()=>[c("",!0),t("div",X,[t("div",Z,[y.bandsAndProposals.length>0?(s(),l("div",$,[(s(!0),l(v,null,_(y.bandsAndProposals,e=>(s(),l("div",{key:e.id},[t("div",ee,[t("div",te,[t("span",oe,i(e.name),1)]),t("div",se,[t("button",{type:"button",class:"self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-10 p-5",onClick:a=>d.toggleCreateModal(e.site_name)}," Draft Proposal ",8,ae)])]),t("div",null,[h(B,{filters:o.filters1,"onUpdate:filters":r[3]||(r[3]=a=>o.filters1=a),value:e.proposals,"responsive-layout":"scroll","selection-mode":"single",paginator:!0,rows:10,"rows-per-page-options":[10,20,50],"global-filter-fields":["name","date","phase.name"],"filter-display":"menu",onRowSelect:d.selectProposal},{header:p(()=>[t("div",le,[t("div",re,[h(D,{class:"p-button-outlined",type:"button",icon:"pi pi-filter-slash",label:"Clear",onClick:r[0]||(r[0]=a=>d.clearFilter1())})]),t("span",ne,[ie,h(M,{modelValue:o.filters1.global.value,"onUpdate:modelValue":r[1]||(r[1]=a=>o.filters1.global.value=a),placeholder:"Keyword Search"},null,8,["modelValue"])]),t("div",de,[t("div",pe,[ce,h(V,{id:"switch",modelValue:o.filters1.phase_id.value,"onUpdate:modelValue":r[2]||(r[2]=a=>o.filters1.phase_id.value=a),class:"float-right","true-value":6,"false-value":null},null,8,["modelValue"])])])])]),empty:p(()=>[m(" No Proposals. ")]),default:p(()=>[h(b,{field:"name","filter-field":"name",header:"Name",sortable:!0}),h(b,{field:"formattedDraftDate",header:"Draft Date",sortable:""},{body:p(a=>[m(i(d.parseDate(a.data.formattedDraftDate)),1)]),_:1}),h(b,{field:"date","filter-field":"date",header:"Performance Date",sortable:!0},{body:p(a=>[m(i(d.parseDate(a.data.date)),1)]),_:1}),h(b,{field:"phase.name","filter-field":"phase.name",header:"Phase",sortable:!0})]),_:2},1032,["filters","value","onRowSelect"])]),t("div",ue,[t("button",{type:"button",class:"self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-10 p-5",onClick:a=>d.toggleCreateModal(e.site_name)}," Draft Proposal for "+i(e.name),9,he)])]))),128))])):(s(),l("div",me," It looks like you don't have any bands to create a proposal for. "))])])]),_:1}),o.showModal?(s(),x(k,{key:0,ref:"proposalModal","save-text":"Edit",onSave:d.gotoProposal,onClosing:r[8]||(r[8]=e=>d.toggleModal())},{header:p(()=>[t("h1",null,i(o.activeProposal.name),1)]),headerBody:p(()=>[t("div",ve,[(s(!0),l(v,null,_(y.proposal_phases,(e,a)=>(s(),l("div",{key:e.id,class:"flex items-center flex-grow"},[t("div",{class:f(["flex","items-center",{"text-purple-500":e.id<=o.activeProposal.phase_id,"text-gray-500":e.id>o.activeProposal.phase_id},"relative"])},[t("div",{title:e.name,class:f(["rounded-full","transition","duration-1000","ease-in-out","h-10","w-10","md:h-12","md:w-12","py-3","border-2",{"border-purple-500":e.id<=o.activeProposal.phase_id,"border-gray-300":e.id>o.activeProposal.phase_id}]),innerHTML:e.icon},null,10,_e),t("div",{class:f(["hidden","md:block","absolute","top-0","left-0","text-center","mt-12","text-xs","font-medium","uppercase",{"-ml-2":e.id>1,"text-purple-500":e.id<=o.activeProposal.phase_id,"text-gray-500":e.id>o.activeProposal.phase_id}])},i(e.name),3)],2),a+1!==Object.keys(y.proposal_phases).length?(s(),l("div",{key:0,class:f(["flex-auto","border-t-2","transition","duration-500","ease-in-out",{"border-purple-500":e.id<o.activeProposal.phase_id,"border-gray-300":e.id>o.activeProposal.phase_id}])},null,2)):c("",!0)]))),128))])]),body:p(()=>[o.loading?(s(),l("div",ye,be)):(s(),l("div",we,[(s(!0),l(v,null,_(o.showFields.filter(e=>Array.isArray(o.activeProposal[e.property])?o.activeProposal[e.property].length>0:o.activeProposal[e.property]),(e,a)=>(s(),l("div",{key:a,class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},[t("p",xe,[t("label",ke,i(e.name),1)]),Array.isArray(o.activeProposal[e.property])?(s(),l("div",Pe,[t("ul",null,[(s(!0),l(v,null,_(o.activeProposal[e.property],(L,I)=>(s(),l("li",{key:I},i(L[e.subProperty]),1))),128))])])):c("",!0),e.property=="contract"?(s(),l("div",Ce,[t("a",{target:"_blank",href:o.activeProposal[e.property][e.subProperty],download:""},[Me,m(" Download Contract ")],8,De)])):e.property=="price"?(s(),l("div",Ve," $"+i(parseFloat(o.activeProposal[e.property]).toFixed(2)),1)):(s(),l("div",Be,i(e.subProperty?o.activeProposal[e.property][e.subProperty]:o.activeProposal[e.property]),1))]))),128)),t("div",Te,[Se,t("div",null,[(s(!0),l(v,null,_(o.activeProposal.proposal_contacts,e=>(s(),l("ul",{key:e.id,class:"mb-4"},[t("li",null,"Name: "+i(e.name),1),t("li",null,"Phone: "+i(e.phonenumber),1),t("li",null,"Name: "+i(e.email),1)]))),128))])]),t("div",Fe,[Ae,t("div",null,[t("div",null,[t("span",null,i(n.route("proposals.details",{key:o.activeProposal.key})),1),Le])])])]))]),footerBody:p(()=>[t("div",Ie,[w(t("button",{type:"button",class:"mx-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none",onClick:r[4]||(r[4]=e=>d.writeToCalendar())},[Ne,m(" Write to calendar ")],512),[[O,o.activeProposal.phase_id==6]]),o.activeProposal.phase_id==2?(s(),l("button",{key:0,disabled:o.loading,type:"button",class:"mx-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none",onClick:r[5]||(r[5]=e=>d.sendIt())},[ze,m(" Send It! ")],8,Ue)):c("",!0),o.activeProposal.phase_id==3?(s(),l("button",{key:1,disabled:o.loading,type:"button",class:"mx-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white focus:outline-none",onClick:r[6]||(r[6]=e=>d.sendIt())},[He,m(" Resend it ")],8,Ee)):c("",!0),o.activeProposal.phase_id==4?(s(),l("button",{key:2,disabled:o.loading,type:"button",class:"mx-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none",onClick:r[7]||(r[7]=e=>d.sendContract())},[Oe,m(" Send Contract! ")],8,je)):c("",!0)])]),_:1},8,["onSave"])):c("",!0),o.showCreateModal?(s(),x(k,{key:1,ref:"proposalCreateModal","save-text":"Create Draft",onSave:d.draftProposal,onClosing:r[10]||(r[10]=e=>d.toggleCreateModal())},{header:p(()=>[Re]),body:p(()=>[(s(!0),l(v,null,_(o.draftInputs,e=>(s(),l("div",{key:e,class:"md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b"},[t("p",Ye,[t("label",{for:e.name},i(e.name),9,qe)]),["text","number"].indexOf(e.type)!==-1?(s(),l("div",Ke,[w(t("input",{id:e.name,"onUpdate:modelValue":a=>o.proposalData[e.field]=a,disabled:e.disabled,type:e.type,class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",placeholder:e.name},null,8,We),[[R,o.proposalData[e.field]]])])):c("",!0),e.type=="currency"?(s(),l("div",Ge,[h(S,{modelValue:n.value,"onUpdate:modelValue":[r[9]||(r[9]=a=>n.value=a),a=>o.proposalData[e.field]=a],modelModifiers:{lazy:!0},disabled:e.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"]),t("div",null,[t("label",null,"Average Price: $"+i(d.averagePrice),1)])])):c("",!0),e.type=="textArea"?(s(),l("div",Je,[w(t("textarea",{"onUpdate:modelValue":a=>o.proposalData[e.field]=a,class:"min-w-full",placeholder:""},null,8,Qe),[[Y,o.proposalData[e.field]]])])):c("",!0),e.type=="date"?(s(),l("div",Xe,[h(F,{modelValue:o.proposalData[e.field],"onUpdate:modelValue":a=>o.proposalData[e.field]=a},null,8,["modelValue","onUpdate:modelValue"])])):c("",!0),e.type=="eventTypeDropdown"?(s(),l("div",Ze,[w(t("select",{"onUpdate:modelValue":a=>o.proposalData[e.field]=a},[(s(!0),l(v,null,_(y.eventTypes,a=>(s(),l("option",{key:a.id,value:a.id},i(a.name),9,et))),128))],8,$e),[[q,o.proposalData[e.field]]])])):c("",!0)]))),128))]),_:1},8,["onSave"])):c("",!0)]),_:1})}const it=N(J,[["render",tt]]);export{it as default};
