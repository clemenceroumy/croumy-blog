var C=Object.defineProperty;var U=(h,r,o)=>r in h?C(h,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):h[r]=o;var b=(h,r,o)=>(U(h,typeof r!="symbol"?r+"":r,o),o);import{a as W,c as x,g as A,d as g}from"./dayjs.min.d58cbb64.js";function G(h,r){for(var o=0;o<r.length;o++){const e=r[o];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in h)){const m=Object.getOwnPropertyDescriptor(e,a);m&&Object.defineProperty(h,a,m.get?m:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var F={exports:{}};(function(h,r){(function(o,e){h.exports=e(W)})(x,function(o){function e(c){return c&&typeof c=="object"&&"default"in c?c:{default:c}}var a=e(o),m={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(c){return""+c+(c===1?"er":"")}};return a.default.locale(m,null,!0),m})})(F);var E=F.exports;const J=A(E),Z=G({__proto__:null,default:J},[E]);var P={exports:{}};(function(h,r){(function(o,e){h.exports=e()})(x,function(){var o,e,a=1e3,m=6e4,c=36e5,_=864e5,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S=31536e6,j=2628e6,N=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,y={years:S,months:j,days:_,hours:c,minutes:m,seconds:a,milliseconds:1,weeks:6048e5},D=function(n){return n instanceof w},v=function(n,s,t){return new w(n,t,s.$l)},Y=function(n){return e.p(n)+"s"},T=function(n){return n<0},M=function(n){return T(n)?Math.ceil(n):Math.floor(n)},R=function(n){return Math.abs(n)},p=function(n,s){return n?T(n)?{negative:!0,format:""+R(n)+s}:{negative:!1,format:""+n+s}:{negative:!1,format:""}},w=function(){function n(t,i,d){var u=this;if(this.$d={},this.$l=d,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),i)return v(t*y[Y(i)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function($){u.$d[Y($)]=t[$]}),this.calMilliseconds(),this;if(typeof t=="string"){var f=t.match(N);if(f){var l=f.slice(2).map(function($){return $!=null?Number($):0});return this.$d.years=l[0],this.$d.months=l[1],this.$d.weeks=l[2],this.$d.days=l[3],this.$d.hours=l[4],this.$d.minutes=l[5],this.$d.seconds=l[6],this.calMilliseconds(),this}}return this}var s=n.prototype;return s.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(i,d){return i+(t.$d[d]||0)*y[d]},0)},s.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=M(t/S),t%=S,this.$d.months=M(t/j),t%=j,this.$d.days=M(t/_),t%=_,this.$d.hours=M(t/c),t%=c,this.$d.minutes=M(t/m),t%=m,this.$d.seconds=M(t/a),t%=a,this.$d.milliseconds=t},s.toISOString=function(){var t=p(this.$d.years,"Y"),i=p(this.$d.months,"M"),d=+this.$d.days||0;this.$d.weeks&&(d+=7*this.$d.weeks);var u=p(d,"D"),f=p(this.$d.hours,"H"),l=p(this.$d.minutes,"M"),$=this.$d.seconds||0;this.$d.milliseconds&&($+=this.$d.milliseconds/1e3,$=Math.round(1e3*$)/1e3);var H=p($,"S"),I=t.negative||i.negative||u.negative||f.negative||l.negative||H.negative,q=f.format||l.format||H.format?"T":"",k=(I?"-":"")+"P"+t.format+i.format+u.format+q+f.format+l.format+H.format;return k==="P"||k==="-P"?"P0D":k},s.toJSON=function(){return this.toISOString()},s.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",d={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return i.replace(z,function(u,f){return f||String(d[u])})},s.as=function(t){return this.$ms/y[Y(t)]},s.get=function(t){var i=this.$ms,d=Y(t);return d==="milliseconds"?i%=1e3:i=d==="weeks"?M(i/y[d]):this.$d[d],i||0},s.add=function(t,i,d){var u;return u=i?t*y[Y(i)]:D(t)?t.$ms:v(t,this).$ms,v(this.$ms+u*(d?-1:1),this)},s.subtract=function(t,i){return this.add(t,i,!0)},s.locale=function(t){var i=this.clone();return i.$l=t,i},s.clone=function(){return v(this.$ms,this)},s.humanize=function(t){return o().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},s.valueOf=function(){return this.asMilliseconds()},s.milliseconds=function(){return this.get("milliseconds")},s.asMilliseconds=function(){return this.as("milliseconds")},s.seconds=function(){return this.get("seconds")},s.asSeconds=function(){return this.as("seconds")},s.minutes=function(){return this.get("minutes")},s.asMinutes=function(){return this.as("minutes")},s.hours=function(){return this.get("hours")},s.asHours=function(){return this.as("hours")},s.days=function(){return this.get("days")},s.asDays=function(){return this.as("days")},s.weeks=function(){return this.get("weeks")},s.asWeeks=function(){return this.as("weeks")},s.months=function(){return this.get("months")},s.asMonths=function(){return this.as("months")},s.years=function(){return this.get("years")},s.asYears=function(){return this.as("years")},n}(),O=function(n,s,t){return n.add(s.years()*t,"y").add(s.months()*t,"M").add(s.days()*t,"d").add(s.hours()*t,"h").add(s.minutes()*t,"m").add(s.seconds()*t,"s").add(s.milliseconds()*t,"ms")};return function(n,s,t){o=t,e=t().$utils(),t.duration=function(u,f){var l=t.locale();return v(u,{$l:l},f)},t.isDuration=D;var i=s.prototype.add,d=s.prototype.subtract;s.prototype.add=function(u,f){return D(u)?O(this,u,1):i.bind(this)(u,f)},s.prototype.subtract=function(u,f){return D(u)?O(this,u,-1):d.bind(this)(u,f)}}})})(P);var B=P.exports;const K=A(B);class Q{static capitalizeFirstLetter(r){return r.charAt(0).toUpperCase()+r.slice(1)}}g.extend(K);g.locale(Z);class L{static fromDate(r,o){return r?Q.capitalizeFirstLetter(g(r).format(o)):""}static toDate(r){return g(r).toDate()}static durationToTime(r,o=!1,e="seconds"){let a=g.duration(r,e);const m=Math.trunc(a.asHours());a=a.subtract(m,"hours");const c=o?Math.trunc(a.asMinutes()):Math.round(a.asMinutes());a=a.subtract(c,"minutes");const _=Math.round(a.asSeconds());return`${m>0?`${m}h`:""}${c>0?`${c}m`:""}${o&&_>0?`${_}s`:""}`}}b(L,"FULL_DATE_FORMAT","dddd DD MMMM YYYY"),b(L,"SHORT_DATE_FORMAT","DD/MM/YYYY"),b(L,"TIME_FORMAT","HH 'h' mm");export{L as D};