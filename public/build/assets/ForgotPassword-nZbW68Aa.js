import{B as f}from"./Button-DNZXcZHQ.js";import{B as b}from"./Guest-sG3Zw7b_.js";import{B as _,a as w}from"./ValidationErrors-e8Dyi84h.js";import{L as z}from"./Label-DpqJTaRq.js";import{_ as B,r as o,o as i,b as m,t as y,d as g,a as s,e as r,w as x,f as v,n as h,g as V,F as k}from"./app-rdp2O8e-.js";const C={components:{BreezeButton:f,BreezeInput:_,BreezeLabel:z,BreezeValidationErrors:w},layout:b,props:{status:String},data(){return{form:this.$inertia.form({email:""})}},methods:{submit(){this.form.post(this.route("password.email"))}}},L=r("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},E={class:"flex items-center justify-end mt-4"};function F(S,e,n,P,t,l){const u=o("breeze-validation-errors"),d=o("breeze-label"),c=o("breeze-input"),p=o("breeze-button");return i(),m(k,null,[L,n.status?(i(),m("div",N,y(n.status),1)):g("",!0),s(u,{class:"mb-4"}),r("form",{onSubmit:e[1]||(e[1]=V((...a)=>l.submit&&l.submit(...a),["prevent"]))},[r("div",null,[s(d,{for:"email",value:"Email"}),s(c,{id:"email",modelValue:t.form.email,"onUpdate:modelValue":e[0]||(e[0]=a=>t.form.email=a),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),r("div",E,[s(p,{class:h({"opacity-25":t.form.processing}),disabled:t.form.processing},{default:x(()=>[v(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)],64)}const J=B(C,[["render",F]]);export{J as default};
