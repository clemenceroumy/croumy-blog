import{_ as y}from"./nuxt-link.803cb544.js";import L from"./light.f09aaaec.js";import S from"./dark.2a734a6d.js";import B from"./linktree.4ef85aa7.js";import C from"./insta.3cf8392e.js";import D from"./github.5ca97d23.js";import M from"./twitch.26900648.js";import V from"./spotify.f93970af.js";import{n as E,r as I,D as j,o as d,c as z,a as t,b as e,w as n,v as r,E as H,p as N,e as J,d as _,_ as R}from"./entry.f678663c.js";import"./nuxt-icon.98fe06bb.js";const o=l=>(N("data-v-09fd5a84"),l=l(),J(),l),T={class:"h-full flex flex-col h-screen justify-between"},q={class:"mx-5 lg:mx-10 pt-5"},A={class:"flex justify-between items-center"},F=o(()=>t("span",{class:"text-text-light dark:text-text-dark logo"},"CROUMY",-1)),O={class:"flex items-center gap-5"},U=o(()=>t("svg",{class:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("title",null," Menu"),t("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})],-1)),W=[U],Y={id:"menu",class:"flex flex-col lg:flex-row items-end mr-10 lg:mr-0 hidden lg:flex gap-0 lg:gap-4"},$=o(()=>t("h1",{class:"text-text-light dark:text-text-dark font-bold"},"Jeux",-1)),G=o(()=>t("h1",{class:"text-text-light dark:text-text-dark font-bold"},"Mangas",-1)),K=o(()=>t("h1",{class:"text-text-light dark:text-text-dark font-bold"},"Musique JV",-1)),P=o(()=>t("h1",{class:"text-text-light dark:text-text-dark font-bold"},"Collection",-1)),Q=o(()=>t("h1",{class:"text-text-light dark:text-text-dark font-bold"},"A propos",-1)),X={class:"mx-5 lg:mx-10 mb-auto"},Z={class:"bg-background-light dark:bg-background-dark grid grid-cols-12 w-full pb-5 items-center px-5 lg:px-10"},tt=o(()=>t("p",{class:"col-span-12 md:col-span-6 text-text-light dark:text-text-dark"},[_("© "),t("span",{style:{"font-weight":"bold"}},"Clémence Roumy"),_(" - 2023")],-1)),et={class:"col-span-12 md:col-span-6 flex lg:justify-end items-center mt-10 md:mt-0"},ot=o(()=>t("div",{class:"flex gap-4"},[t("a",{href:"#",class:"text-text-light dark:text-text-dark"},"Wishlist"),t("a",{href:"https://ko-fi.com/croumy",class:"text-text-light dark:text-text-dark",target:"_blank"},"Faire un don")],-1)),st=o(()=>t("div",{class:"bg-bg-article dark:bg-bg-article-dark mx-5",style:{width:"1px",height:"30px"}},null,-1)),at={class:"flex gap-2"},nt={class:"mr-2",href:"https://www.linktree.com/croumy/",target:"_blank"},lt={class:"mr-2",href:"https://www.instagram.com/croumy2/",target:"_blank"},ct={class:"mr-2",href:"https://github.com/clemenceroumy",target:"_blank"},dt={class:"mr-2",href:"https://www.twitch.tv/croumy2",target:"_blank"},it={href:"https://open.spotify.com/user/clemence_roumy",target:"_blank"},rt=E({__name:"Default",setup(l){const c=I("light");j(()=>{typeof window<"u"&&(localStorage.theme||(localStorage.theme="light"),i())});function m(){const s=document.getElementById("menu");s!=null&&s.classList.contains("flex")?s.classList.replace("flex","hidden"):s==null||s.classList.replace("hidden","flex")}function h(){typeof window<"u"&&(localStorage.theme=localStorage.theme==="dark"?"light":"dark",i())}function i(){localStorage.theme==="dark"?(c.value="dark",document.documentElement.classList.add("dark"),p()):(c.value="light",document.documentElement.classList.remove("dark"),f())}function f(){document.body.classList.add("light"),document.body.classList.remove("dark")}function p(){document.body.classList.add("dark"),document.body.classList.remove("light")}return(s,_t)=>{const a=y,x=L,u=S,g=B,k=C,b=D,v=M,w=V;return d(),z("div",T,[t("header",q,[t("div",A,[e(a,{to:"/"},{default:n(()=>[F]),_:1}),t("div",O,[t("div",{class:"block lg:hidden"},[t("button",{onClick:m,class:"flex items-center px-3 py-2 border rounded dark:text-white text-black dark:border-white border-black"},W)]),t("a",{class:"cursor-pointer",onClick:h},[c.value==="dark"?(d(),r(x,{key:0,filled:""})):(d(),r(u,{key:1,filled:""}))])])]),t("div",Y,[e(a,{to:"/games/"},{default:n(()=>[$]),_:1}),e(a,{to:"/404"},{default:n(()=>[G]),_:1}),e(a,{to:"/404"},{default:n(()=>[K]),_:1}),e(a,{to:"/404"},{default:n(()=>[P]),_:1}),e(a,{class:"nav__link",to:"/404"},{default:n(()=>[Q]),_:1})])]),t("div",X,[H(s.$slots,"default",{},void 0,!0)]),t("footer",Z,[tt,t("div",et,[ot,st,t("div",at,[t("a",nt,[e(g,{filled:"",alt:"linktree icon"})]),t("a",lt,[e(k,{filled:"",alt:"insta icon"})]),t("a",ct,[e(b,{filled:"",alt:"github icon"})]),t("a",dt,[e(v,{filled:"",alt:"twitch icon"})]),t("a",it,[e(w,{filled:"",alt:"spotify icon"})])])])])])}}});const wt=R(rt,[["__scopeId","data-v-09fd5a84"]]);export{wt as default};