import{e as s,u as i,f as a,r,o as u,h as _,d}from"./index.05d1aa2e.js";const p={__name:"Github",setup(l){const n=s(),c=i();return a(()=>{const e=n.query.access_token,t=d();if(e){document.cookie=`h_MqhC49RxFRI6pR3Z_token=${e};${t}`;const o=localStorage.getItem("h_redirect");o?(window.location.href=o,localStorage.removeItem("h_redirect")):c.push("login")}}),(e,t)=>{const o=r("Loading");return u(),_(o,{active:e.isLoading,"z-index":1060},null,8,["active"])}}};export{p as default};
