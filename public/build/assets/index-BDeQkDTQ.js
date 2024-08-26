import{_ as N,r as h,o as c,b as p,F as v,k as g,t as m,d as T,a as e,w as l,f as F,h as C,a7 as x,c as z,e as s,a8 as A}from"./app-rdp2O8e-.js";const I={data(){return{payments:[],loading:!0,error:!1,errorMessage:""}},created(){this.getPayments()},methods:{getPayments(){this.payments=this.$page.props.payments},gotoPayments(i){const t=i.data.proposal;window.location="/proposals/"+t.key+"/payments"}}},U={key:0};function M(i,t,d,a,r,_){const n=h("Column"),y=h("DataTable");return c(),p("div",null,[(c(!0),p(v,null,g(r.payments,(P,k)=>(c(),p("div",{key:k,class:"card my-4"},[r.payments.length>0?(c(),p("div",U," Payments for "+m(P.name),1)):T("",!0),e(y,{value:P.payments,"striped-rows":"","row-hover":"",paginator:!0,rows:20,class:"cursor-pointer",onRowClick:_.gotoPayments},{default:l(()=>[e(n,{field:"proposal.name",header:"Contract Name",sortable:!0}),e(n,{field:"name",header:"Payment Name",sortable:!0}),e(n,{field:"formattedPaymentAmount",header:"Amount",sortable:!0},{body:l(u=>[F(" $"+m(u.data.formattedPaymentAmount),1)]),_:1}),e(n,{field:"formattedPaymentDate",header:"Payment Date",sortable:!0})]),_:2},1032,["value","onRowClick"])]))),128))])}const L=N(I,[["render",M]]),O={components:{Payments:L},data(){return{completedProposals:[],paidProposalFilter:null,unpaidProposalFilter:null,basicOptions:{plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}}},computed:{revenue(){const i=[];for(const a in this.completedProposals){const r={name:this.completedProposals[a].name};var t=[...this.completedProposals[a].completed_proposals].map(function(n){return[C(n.date).format("YYYY"),parseFloat(n.price)]}),d=t.reduce(function(n,y,P,k){var u=n[y[0]];return n[y[0]]=u?u+y[1]:y[1],n},{});r.aggregatedRevenue=d,i.push(r)}return i}},created(){this.completedProposals=this.$page.props.completedProposals,this.parseProposals(),this.initializedPaidProposalFilter(),this.initializedunPaidProposalFilter()},methods:{moneyFormat(i){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return t.format(i)},getStats(i,t){const d=parseFloat(i.replace(/,/g,"")).toFixed(2)/parseFloat(t).toFixed(2)*100;let a="red";switch(!0){case d<10:a="#ff2d03";break;case d<20:a="#ff7d03";break;case d<30:a="#ffc803";break;case d<40:a="#fff203";break;case d<50:a="#d9ff03";break;case d<60:a="#c0ff03";break;case d<70:a="#afff03";break;case d<80:a="#92ff03";break;case d<90:a="#3eff03";break}return[{width:d+"%"},{background:a}]},gotoPayments(i){const t=i.data;window.location="/proposals/"+t.key+"/payments"},initializedPaidProposalFilter(){this.paidProposalFilter={global:{value:null,matchMode:x.CONTAINS}}},initializedunPaidProposalFilter(){this.unpaidProposalFilter={global:{value:null,matchMode:x.CONTAINS}}},parseProposals(){for(const i in this.completedProposals){const t=this.completedProposals[i].completed_proposals,d={labels:["January","February","March","April","May","June","July","August","September","October","December"],datasets:[{label:"Paid",data:[0,0,0,0,0,0,0,0,0,0,0,0],fill:!1,borderColor:"#42A5F5",tension:.4},{label:"Unpaid",data:[0,0,0,0,0,0,0,0,0,0,0,0],fill:!1,borderColor:"#FFA726",tension:.4}]};t.forEach(a=>{const r=C(a.date).format("M")-1;d.datasets[a.paid?0:1].data[r]+=parseInt(a.price)}),this.completedProposals[i].data=d,this.completedProposals[i].unpaid=t.filter(a=>{if(!a.paid)return a}),this.completedProposals[i].paid=t.filter(a=>{if(a.paid||a.amountLeft=="0.00")return a})}}}},B=s("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Finances ",-1),E={class:"underline text-2xl"},Y={class:"card"},J={class:"card"},j={class:"p-d-flex p-jc-between"},K={class:"p-input-icon-left"},q=s("i",{class:"pi pi-search"},null,-1),G={class:"border flex flex-row relative p-2"},H={class:"z-50"},Q={class:"card"},W={class:"p-d-flex p-jc-between"},X={class:"p-input-icon-left"},Z=s("i",{class:"pi pi-search"},null,-1),$={key:0},ee=s("i",{class:"pi pi-check"},null,-1),te=s("div",null,[s("a",{href:"/finances/invoices",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},"Invoices")],-1);function ae(i,t,d,a,r,_){const n=h("TabPanel"),y=h("Chart"),P=h("Button"),k=h("InputText"),u=h("Column"),w=h("DataTable"),D=h("Payments"),S=h("TabView"),V=h("Container"),R=h("Layout");return c(),z(R,null,{header:l(()=>[B]),default:l(()=>[e(V,null,{default:l(()=>[e(S,null,{default:l(()=>[e(n,{header:"Revenue for year"},{default:l(()=>[(c(!0),p(v,null,g(_.revenue,f=>(c(),p("div",{key:f.name},[s("h2",E,m(f.name),1),(c(!0),p(v,null,g(f.aggregatedRevenue,(b,o)=>(c(),p("ul",{key:o},[s("li",null,m(o)+": "+m(_.moneyFormat(b)),1)]))),128))]))),128))]),_:1}),e(n,{header:"Paid/Unpaid"},{default:l(()=>[(c(!0),p(v,null,g(r.completedProposals,(f,b)=>(c(),p("div",{key:b,class:"card my-4"},[s("div",Y,[s("h5",null,m(f.name),1),e(y,{type:"line",data:f.data,options:r.basicOptions},null,8,["data","options"])])]))),128))]),_:1}),e(n,{header:"Unpaid Contracts"},{default:l(()=>[(c(!0),p(v,null,g(r.completedProposals,(f,b)=>(c(),p("div",{key:b,class:"card my-4"},[s("div",J,[s("h5",null,m(f.name),1),e(w,{filters:r.unpaidProposalFilter,"onUpdate:filters":t[2]||(t[2]=o=>r.unpaidProposalFilter=o),value:f.unpaid,"striped-rows":"","row-hover":"","responsive-layout":"scroll","selection-mode":"single",onRowClick:_.gotoPayments},{header:l(()=>[s("div",j,[e(P,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:t[0]||(t[0]=o=>_.initializedunPaidProposalFilter())}),s("span",K,[q,e(k,{modelValue:r.unpaidProposalFilter.global.value,"onUpdate:modelValue":t[1]||(t[1]=o=>r.unpaidProposalFilter.global.value=o),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:l(()=>[F(" No Records found. Click 'new' to create one. ")]),default:l(()=>[e(u,{field:"name",header:"Name",sortable:!0}),e(u,{field:"price",header:"Price",sortable:!0},{body:l(o=>[F(" $"+m(parseFloat(o.data.price).toFixed(2)),1)]),_:1}),e(u,{field:"amountPaid",header:"Paid",sortable:!0},{body:l(o=>[s("div",G,[s("div",H,m(o.data.amountPaid.replace(/,/g,""))+" / "+m(parseFloat(o.data.price).toFixed(2)),1),s("div",{class:"z-40 absolute top-0 left-0 h-full",style:A([{"min-width":"10px"},_.getStats(o.data.amountPaid,o.data.price)])},null,4)])]),_:1}),e(u,{field:"date",header:"Event Date",sortable:!0})]),_:2},1032,["filters","value","onRowClick"])])]))),128))]),_:1}),e(n,{header:"Paid Contracts"},{default:l(()=>[(c(!0),p(v,null,g(r.completedProposals,(f,b)=>(c(),p("div",{key:b,class:"card my-4"},[s("div",Q,[s("h5",null,m(f.name),1),e(w,{filters:r.paidProposalFilter,"onUpdate:filters":t[5]||(t[5]=o=>r.paidProposalFilter=o),value:f.paid,"striped-rows":"","row-hover":"","responsive-layout":"scroll","selection-mode":"single",onRowClick:_.gotoPayments},{header:l(()=>[s("div",W,[e(P,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:t[3]||(t[3]=o=>_.initializedPaidProposalFilter())}),s("span",X,[Z,e(k,{modelValue:r.paidProposalFilter.global.value,"onUpdate:modelValue":t[4]||(t[4]=o=>r.paidProposalFilter.global.value=o),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:l(()=>[F(" No Records found. Click 'new' to create one. ")]),default:l(()=>[e(u,{field:"name",header:"Name",sortable:!0}),e(u,{field:"price",header:"Price",sortable:!0},{body:l(o=>[F(" $"+m(parseFloat(o.data.price).toFixed(2)),1)]),_:1}),e(u,{field:"date",header:"Event Date",sortable:!0}),e(u,{field:"amountLeft",header:"Payment Overridden",sortable:!0},{body:l(o=>[o.data.amountLeft!=="0.00"&&o.data.paid?(c(),p("div",$,[ee,F(" Still Owed $"+m(o.data.amountLeft),1)])):T("",!0)]),_:1})]),_:2},1032,["filters","value","onRowClick"])])]))),128))]),_:1}),e(n,{header:"Invoices"},{default:l(()=>[te]),_:1}),e(n,{header:"Payments"},{default:l(()=>[s("div",null,[e(D)])]),_:1})]),_:1})]),_:1})]),_:1})}const le=N(O,[["render",ae]]);export{le as default};
