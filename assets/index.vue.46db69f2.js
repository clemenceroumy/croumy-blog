import{_ as x}from"./nuxt-link.2c65a678.js";import{x as u,D as h,o as a,c,H as p,a as t,b as o,w as i,F as f,A as k,z as y,G as g,E as v}from"./entry.a49d20e1.js";import{A as b,d as A}from"./getAllGamesArticles.bc9890a8.js";import{_ as w}from"./index.vue.bcaf82cb.js";const B={class:"flex flex-col mb-10"},C={class:"flex justify-between mb-2"},E=t("h1",{class:"title mb-2 text-text-light dark:text-text-dark"},"Complétion",-1),F=t("h1",{class:"small-title"},"Tout voir",-1),N=t("h1",{class:"title mb-2 text-text-light dark:text-text-dark"},"Articles",-1),G=u({__name:"index",async setup(S){let e,r;const{data:_}=([e,r]=h(()=>g(A)),e=await e,r(),e);return(m,V)=>{var n;const l=x;return a(),c("div",null,[p(m.$slots,"title",{class:"header"}),t("div",B,[t("div",C,[E,o(l,{class:"text-primary dark:text-darkPrimary",to:"/games/completion"},{default:i(()=>[F]),_:1})]),o(w,{limit:6,"activate-search":!1})]),N,(a(!0),c(f,null,k((n=y(_))==null?void 0:n.games,(s,d)=>(a(),v(l,{key:s.slug,to:"/games/articles/"+s.slug},{default:i(()=>[o(b,{reversed:d%2===0,class:"my-5",article:s},null,8,["reversed","article"])]),_:2},1032,["to"]))),128))])}}});export{G as _};
