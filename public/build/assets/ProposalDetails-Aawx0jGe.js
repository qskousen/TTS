import{B as f}from"./Guest-sG3Zw7b_.js";import{_ as g,u as v,ab as y,h as w,r as c,o as n,c as m,w as b,b as r,e,Q as k,i as P,v as B,a as _,t,d}from"./app-rdp2O8e-.js";const D={components:{BreezeGuestLayout:f,Button:v,ProgressSpinner:y},props:["proposal","event_typtes"],data(){return{showIntro:!0,person:"",loading:!1}},methods:{savePerson(){this.showIntro=!1},formatDate(p){return w(p).format("LLLL")},acceptProposal(){this.loading=!0,this.$inertia.post("/proposals/"+this.proposal.key+"/accept",{person:this.person})}}},C={key:0,class:"md:container md:mx-auto"},S={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},L={class:"flex flex-col bg-white overflow-hidden shadow-sm sm:rounded-lg pt-4"},N=e("div",{class:"flex my-3"}," Hello ",-1),V=e("div",{class:"flex my-3"}," Who are we speaking with today? ",-1),z={class:"flex my-3"},I={class:"flex my-3 justify-center"},T={key:1,class:"md:container md:mx-auto"},W={class:"font-semibold text-xl text-gray-800 leading-tight"},j={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},E={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg pt-4"},F={key:0,class:"mt-4"},H={class:"my-5 flex justify-center"},K={key:1};function A(p,l,o,G,s,a){const u=c("Button"),h=c("ProgressSpinner"),x=c("breeze-guest-layout");return n(),m(x,null,{default:b(()=>[s.showIntro?(n(),r("div",C,[e("div",S,[e("div",L,[N,V,e("div",{onKeyup:l[1]||(l[1]=k((...i)=>a.savePerson&&a.savePerson(...i),["enter"]))},[e("div",z,[P(e("input",{"onUpdate:modelValue":l[0]||(l[0]=i=>s.person=i),class:"w-full",type:"text"},null,512),[[B,s.person]])]),e("div",I,[_(u,{type:"button",disabled:s.person==="",label:"Submit",icon:"pi pi-user","icon-pos":"right",onClick:a.savePerson},null,8,["disabled","onClick"])])],32)])])])):(n(),r("div",T,[e("h2",W," Details for "+t(o.proposal.name),1),e("div",j,[e("div",E,[e("ul",null,[e("li",null,"Event Type: "+t(o.proposal.event_type.name),1),e("li",null,"Band: "+t(o.proposal.band.name),1),e("li",null,"When: "+t(a.formatDate(o.proposal.date)),1),e("li",null,"Where: "+t(o.proposal.location??"TBD"),1),e("li",null,"Price: $"+t(parseFloat(o.proposal.price).toFixed(2)),1),e("li",null,"How long: "+t(o.proposal.hours)+" hours ",1),o.proposal.client_notes?(n(),r("li",F," Notes: "+t(o.proposal.client_notes),1)):d("",!0)]),e("div",H,[s.loading?d("",!0):(n(),m(u,{key:0,disabled:s.loading,label:s.loading?"Submitting...":"Accept Proposal",icon:"pi pi-check","icon-pos":"right",onClick:l[2]||(l[2]=i=>a.acceptProposal())},null,8,["disabled","label"])),s.loading?(n(),r("span",K,[_(h)])):d("",!0)])])])]))]),_:1})}const U=g(D,[["render",A]]);export{U as default};
