import{B as k,z as o,Y as F,Z as x,$ as D}from"./entry.ce71b844.js";function q(u,r,y){var h;const[t={},c]=typeof r=="string"?[{},r]:[r,y],e=k(()=>{let n=u;return typeof n=="function"&&(n=n()),o(n)}),a=t.key||F([c,((h=o(t.method))==null?void 0:h.toUpperCase())||"GET",o(t.baseURL),typeof e.value=="string"?e.value:"",o(t.params||t.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!u)throw new Error("[nuxt] [useFetch] request is missing.");const l=a===c?"$f"+a:a;if(!t.baseURL&&typeof e.value=="string"&&e.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:m,lazy:v,default:w,transform:d,pick:b,watch:i,immediate:g,..._}=t,f=x({..._,cache:typeof t.cache=="boolean"?void 0:t.cache}),$={server:m,lazy:v,default:w,transform:d,pick:b,immediate:g,watch:i===!1?[]:[f,e,...i||[]]};let s;return D(l,()=>{var p;return(p=s==null?void 0:s.abort)==null||p.call(s),s=typeof AbortController<"u"?new AbortController:{},typeof e.value=="string"&&e.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(e.value,{signal:s.signal,...f})},$)}export{q as u};
