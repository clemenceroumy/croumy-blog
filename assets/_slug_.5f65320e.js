import{x as k,B as f,o as p,c as h,a as s,t as v,b,_ as S,C as y,D as x,E as N,A as w,G as D}from"./entry.5f1e6ab4.js";import{A as F,D as A,m as E}from"./marked.esm.6c35a90a.js";const B={class:"lg:p-20 md:p-16 sm:p-10 p-5 bg-bg-article dark:bg-bg-article-dark rounded-lg"},G={class:"grid grid-cols-12 items-center"},O={class:"col-span-12 lg:col-span-6 order-2 lg:order-1"},R={class:"text-text-light dark:text-text-dark headline"},V={class:"subtitle"},j={class:"col-span-12 lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2 mt-10 lg:mt-0 mb-16 lg:mb-0 mr-10 ml-10 lg:ml-0"},T=["innerHTML"],q=k({__name:"Article",props:{article:{type:Object,required:!0}},setup(e){const t=e,n=f(()=>A.toFrDate(t.article.publishedAt)),i=f(()=>{var r;return E(((r=t.article)==null?void 0:r.content)??"")});return(r,l)=>{var c;return p(),h("div",B,[s("div",G,[s("div",O,[s("h1",R,v(e.article.title),1),s("p",V,v(n.value),1)]),s("div",j,[b(F,{url:((c=e.article.picture)==null?void 0:c.url)??"https://placehold.co/600x400"},null,8,["url"])])]),s("p",{class:"lg:mt-20 mt-10 article-content text-text-light dark:text-text-dark",innerHTML:i.value},null,8,T)])}}});const C=S(q,[["__scopeId","data-v-b5cd5919"]]);var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetGameBySlug"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"game"},arguments:[{kind:"Argument",name:{kind:"Name",value:"where"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"publishedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"picture"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:207}};u.loc.source={body:`query GetGameBySlug($slug: String!) {\r
    game(where: {slug: $slug}) {\r
        id\r
        slug\r
        title\r
        content\r
        publishedAt\r
        picture {\r
            url\r
        }\r
    }\r
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,t){if(e.kind==="FragmentSpread")t.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(i){d(i,t)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(i){d(i,t)}),e.definitions&&e.definitions.forEach(function(i){d(i,t)})}var m={};(function(){u.definitions.forEach(function(t){if(t.name){var n=new Set;d(t,n),m[t.name.value]=n}})})();function g(e,t){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==t)return i}}function L(e,t){var n={kind:e.kind,definitions:[g(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var i=m[t]||new Set,r=new Set,l=new Set;for(i.forEach(function(a){l.add(a)});l.size>0;){var c=l;l=new Set,c.forEach(function(a){if(!r.has(a)){r.add(a);var o=m[a]||new Set;o.forEach(function(_){l.add(_)})}})}return r.forEach(function(a){var o=g(e,a);o&&n.definitions.push(o)}),n}L(u,"GetGameBySlug");const $=k({__name:"[slug]",async setup(e){let t,n;const i=y(),{data:r}=([t,n]=x(()=>D(u,{slug:i.params.slug})),t=await t,n(),t);return(l,c)=>{var a;return p(),N(C,{article:(a=w(r))==null?void 0:a.game},null,8,["article"])}}});export{$ as default};
