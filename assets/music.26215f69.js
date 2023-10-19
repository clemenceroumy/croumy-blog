var Q=Object.defineProperty;var R=(o,l,u)=>l in o?Q(o,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[l]=u;var m=(o,l,u)=>(R(o,typeof l!="symbol"?l+"":l,u),u);import Y from"./Icon.9762e357.js";import Z from"./spotify.a880f339.js";import{x as A,o as f,c as v,L,_ as U,r as p,h as G,S as H,a as s,F as E,A as T,z as n,W as j,b as g,I as b,D as J,X as K,t as y,p as ee,e as te,M as se}from"./entry.9882ac87.js";import{u as le}from"./fetch.cc871b2d.js";import{D as ae}from"./DateFormat.87ddea13.js";import"./config.bc68f349.js";import"./nuxt-icon.0280f886.js";import"./dayjs.min.d58cbb64.js";class oe{constructor(l){m(this,"id");m(this,"previewUrl");m(this,"name");m(this,"durationMs");m(this,"spotifyLink");m(this,"artistsNames");m(this,"albumPicture");m(this,"albumName");this.id=l.id,this.previewUrl=l.previewUrl,this.name=l.name,this.durationMs=l.durationMs,this.spotifyLink=l.spotifyLink,this.artistsNames=l.artistsNames,this.albumPicture=l.albumPicture,this.albumName=l.albumName}get artistsNamesString(){return this.artistsNames.join(", ")}get trackDuration(){return ae.durationToTime(this.durationMs,!0,"millisecond")}}const ne={class:"w-full h-full p-[15%] cursor-pointer rounded-full vinyl"},ie=["src"],re=A({__name:"AlbumImage",props:{albumPicture:{type:String,required:!0}},setup(o){return(l,u)=>(f(),v("div",ne,[o.albumPicture!=null&&o.albumPicture!=""?(f(),v("img",{key:0,src:o.albumPicture,draggable:"false",class:"rounded-full w-full h-full object-cover",alt:""},null,8,ie)):L("",!0)]))}});const I=U(re,[["__scopeId","data-v-13a3718d"]]),ue=o=>(ee("data-v-10c65d5d"),o=o(),te(),o),de={class:"grid grid-cols-1 sm:grid-cols-2 mt-5 h-full sm:h-[calc(100vh-240px)]"},ce={class:"flex flex-col mr-0 sm:mr-5 sm:overflow-y-scroll sm:overscroll-y-auto"},me={class:"flex mr-5 items-center justify-between mb-5"},pe={class:"flex"},_e=["id"],ge=["id","draggable","onDragstart"],fe={class:b("sm:group-hover/track:flex sm:hidden inline")},ve={class:"flex-col flex ml-3 justify-between"},he={class:"subtitle"},xe={class:"small-subtitle text-text-light dark:text-text-dark"},ye={class:"flex flex-col items-end ml-2"},be={class:"text-text-light dark:text-text-dark"},we=["href"],ke={class:"hidden sm:flex flex-col items-center justify-center h-full"},De=["onDragenter"],Ie=ue(()=>s("div",{class:"w-full h-full pointer-events-none top-0 left-0 absolute flex justify-center items-center"},[s("div",{class:"h-[20px] w-[20px] rounded-full bg-bg-article dark:bg-bg-article-dark shadow-inner"})],-1)),$e={class:"w-full h-full top-0 left-0 absolute justify-center items-center hidden group-hover:flex"},Ne={class:"px-10 w-full"},Pe={class:"overflow-hidden relative w-full h-[20px] mt-[20px]"},Se=["id"],Ce={class:"h-[70px] mt-[10px]"},Be=A({__name:"music",async setup(o){var N,P;let l,u;const z=se(),M=p((P=(N=([l,u]=J(()=>le(`${z.public.api.route}/spotify`,"$BNPjnVefUz")),l=await l,u(),l).data.value)==null?void 0:N.map(e=>new oe(e)))==null?void 0:P.sort((e,t)=>e.albumName.localeCompare(t.albumName)||e.name.localeCompare(t.name))),i=p(),d=p(null),c=p(!1),_=p(null),h=p(!1),$=p(null);G(d,e=>{var t;(t=d.value)==null||t.addEventListener("ended",()=>c.value=!1)}),H(()=>{var e;(e=d.value)==null||e.pause()});function F(e,t){var r;_.value=t,(r=e.dataTransfer)==null||r.setDragImage(new Image,0,0)}function V(e){const t=document.getElementById(`copy-dragged-${_.value.id}`),r=document.getElementById("playing-image").clientWidth;t.style.display="block",t.style.boxShadow="4px 4px 14px 3px rgba(0,0,0,0.6)",t.style.top=`${e.pageY-(h.value?r:90)/2}px`,t.style.left=`${e.pageX-(h.value?r:90)/2}px`}function W(){const e=document.getElementById(`copy-dragged-${_.value.id}`);e.style.display="none"}function q(){h.value=!0;const e=document.getElementById(`copy-dragged-${_.value.id}`),t=document.getElementById("playing-image").clientWidth;e.style.width=`${t}px`,e.style.height=`${t}px`}function X(){h.value=!1;const e=document.getElementById(`copy-dragged-${_.value.id}`);e.style.width="90px",e.style.height="90px"}function O(){h.value=!1,D(_.value)}function D(e){var t,r,w,x;if(((t=i.value)==null?void 0:t.id)===e.id)c.value=!c.value;else{c.value=!1,(r=d.value)==null||r.pause(),i.value=e,d.value=new Audio(e.previewUrl),d.value.crossOrigin="anonymous",c.value=!0;const a=localStorage.theme==="dark"?"white":"black";K(d.value,$,{src:e.previewUrl,lineColor:a,lineWidth:1,corsAnonym:!0})}c.value?(w=d.value)==null||w.play():(x=d.value)==null||x.pause()}return(e,t)=>{var x;const r=Y,w=Z;return f(),v("div",de,[s("div",ce,[(f(!0),v(E,null,T(n(M),a=>{var S,C,B;return f(),v("div",me,[s("div",pe,[s("div",{id:`copy-dragged-${a.id}`,class:"dragged-item pointer-events-none hidden absolute left-0 top-0 w-[90px] h-[90px] rounded-full z-20"},[g(I,{"album-picture":a.albumPicture},null,8,["album-picture"])],8,_e),s("div",{id:`dragged-item-${a.id}`,draggable:((S=n(i))==null?void 0:S.id)!=a.id,onDragstart:k=>F(k,a),onDragend:W,onDrag:t[0]||(t[0]=k=>V(k)),class:b("h-[70px] sm:h-[90px] aspect-square relative group/track")},[g(I,{class:"!cursor-grab","album-picture":a.albumPicture},null,8,["album-picture"]),s("div",fe,[g(r,{onClick:k=>D(a),class:b("h-[30px] w-[30px] cursor-pointer top-[20px] left-[20px] sm:top-[30px] sm:left-[30px] absolute"),name:n(c)&&a.id==((C=n(i))==null?void 0:C.id)?"material-symbols:pause-rounded":"material-symbols:play-arrow-rounded"},null,8,["onClick","name"])])],40,ge),s("div",ve,[s("div",null,[s("h1",{class:b([a.id==((B=n(i))==null?void 0:B.id)?"text-primary dark:text-darkPrimary":"text-text-light dark:text-text-dark","small-title"])},y(a.name),3),s("p",he,y(a.artistsNamesString),1)]),s("p",xe,y(a.albumName),1)])]),s("div",ye,[s("p",be,y(a.trackDuration),1),s("a",{href:a==null?void 0:a.spotifyLink,target:"_blank"},[g(w,{filled:"",alt:"spotify icon",class:"mt-2"})],8,we)])])}),256))]),s("div",ke,[s("div",{onDrop:O,onDragover:t[2]||(t[2]=j(()=>{},["prevent"])),onDragenter:j(q,["prevent"]),onDragleave:X,class:"rounded-md square-vinyl p-10 bg-bg-article dark:bg-bg-article-dark shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,1)] relative group"},[g(I,{id:"playing-image",class:b([n(c)?"spin":"spin paused","pointer-events-none"]),"album-picture":((x=n(i))==null?void 0:x.albumPicture)??""},null,8,["class","album-picture"]),Ie,s("div",$e,[g(r,{onClick:t[1]||(t[1]=a=>n(i)!=null?D(n(i)):null),class:"h-[70px] w-[70px] cursor-pointer",name:n(c)?"material-symbols:pause-rounded":"material-symbols:play-arrow-rounded"},null,8,["name"])])],40,De),s("div",Ne,[s("div",Pe,[n(i)!=null?(f(),v(E,{key:0},T([1,2],a=>s("p",{id:`track-info-${a}`,class:"text-text-light dark:text-text-dark small-subtitle absolute px-5 right-0 top-0 min-w-full w-fit overflow-visible whitespace-nowrap"},y(e.$t("music.currentTrackInfo",{title:n(i).name,artists:n(i).artistsNamesString,album:n(i).albumName})),9,Se)),64)):L("",!0)])]),s("div",Ce,[s("canvas",{ref_key:"canvas",ref:$},null,512)])])])}}});const Ve=U(Be,[["__scopeId","data-v-10c65d5d"]]);export{Ve as default};