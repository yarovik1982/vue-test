(function(){"use strict";var e={863:function(e,t,n){var l=n(963),o=n(252),a=n(577);const i={class:"app"},r=(0,o._)("h1",{class:"text-center"},"Тестовое задание",-1),u={class:"m-auto w-75"},s={class:"mb-3"},d=(0,o._)("label",{for:"editValue",class:"form-label text-light"},"Редактировать запись",-1),c=(0,o._)("button",{type:"submit",class:"btn btn-primary rounded-5"}," Сохранить изменения ",-1),f={class:"overflow-hidden rounded-5 w-75 mx-auto"},v={class:"table table-bordered table-dark text-center table-hover mb-0"},b=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"#"),(0,o._)("th",{scope:"col"},"name"),(0,o._)("th",{scope:"col"},"value")])],-1),h={class:"list"},p=["onClick"],m={scope:"row"};function _(e,t,n,_,g,x){return(0,o.wg)(),(0,o.iD)("div",i,[r,(0,o._)("div",u,[(0,o._)("form",{class:"form bg-dark p-4 mb-3 rounded-5",onSubmit:t[1]||(t[1]=(0,l.iM)(((...e)=>x.saveValue&&x.saveValue(...e)),["prevent"]))},[(0,o._)("div",s,[d,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control bg-transparent border-light text-light rounded-5",id:"editValue","onUpdate:modelValue":t[0]||(t[0]=e=>g.editValue=e)},null,512),[[l.nr,g.editValue]])]),c],32)]),(0,o._)("div",f,[(0,o._)("table",v,[b,(0,o._)("tbody",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(g.data,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{class:(0,a.C_)(["list-item",{"table-info":t===g.activeIndex}]),key:t,onClick:n=>x.editItem(e,t)},[(0,o._)("th",m,(0,a.zw)(t+1),1),(0,o._)("td",null,(0,a.zw)(e.name),1),(0,o._)("td",null,(0,a.zw)(e.value),1)],10,p)))),128))])])])])}var g={name:"App",data(){return{data:[{name:"Запись 1",value:"Содержание 1"},{name:"Запись 2",value:"Содержание 2"},{name:"Запись 3",value:"Содержание 3"},{name:"Запись 4",value:"Содержание 4"},{name:"Запись 5",value:"Содержание 5"}],editValue:"",editIndex:null,activeIndex:null}},methods:{editItem(e,t){this.editValue=e.value,this.editIndex=this.data.indexOf(e),this.activeIndex=t,console.log(this.activeIndex),console.log(t)},saveValue(){null!==this.editIndex&&(this.data[this.editIndex].value=this.editValue,this.editValue="",this.editIndex=null,this.activeIndex=null)}}},x=n(744);const y=(0,x.Z)(g,[["render",_]]);var w=y;n(734);const O=(0,l.ri)(w);O.mount("#app")}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,l,o,a){if(!l){var i=1/0;for(d=0;d<e.length;d++){l=e[d][0],o=e[d][1],a=e[d][2];for(var r=!0,u=0;u<l.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](l[u])}))?l.splice(u--,1):(r=!1,a<i&&(i=a));if(r){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[l,o,a]}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,a,i=l[0],r=l[1],u=l[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(u)var d=u(n)}for(t&&t(l);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},l=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(863)}));l=n.O(l)})();
//# sourceMappingURL=app.254d1f24.js.map