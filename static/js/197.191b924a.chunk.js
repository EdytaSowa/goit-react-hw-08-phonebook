"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[197],{3197:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(2791),r=n(9434),s=n(4270),i=function(e){return e.contacts.items},l=function(e){return e.filter},c=function(e){return e.contacts.isLoading},o={button:"ContactList_button__7kL4l"},u=n(3634),d=n(184),m=function(){var e=(0,r.v9)(i),t=(0,r.v9)(l),n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())})),a=(0,r.I0)();return(0,d.jsx)("ul",{className:o.list,children:n.map((function(e){return(0,d.jsxs)("li",{className:o.listItem,children:[" ",e.name," ",e.phone,(0,d.jsxs)("button",{className:o.button,type:"button",onClick:function(){return t=e.id,a((0,u.GK)(t));var t},children:[" ","Delete"," "]})]},e.id)}))})},f=n(3433),h=n(9439),p=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},v="ContactForm_form__dhl+T",x="ContactForm_label__-cVXI",b="ContactForm_formButton__TN6Jq",_=function(){var e=(0,a.useState)(""),t=(0,h.Z)(e,2),n=t[0],s=t[1],l=(0,a.useState)(""),c=(0,h.Z)(l,2),o=c[0],m=c[1],_=(0,r.I0)(),j=(0,r.v9)(i),g=p(),C=p();return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault(),-1!==(0,f.Z)(j).findIndex((function(e){return n===e.name}))?alert("".concat(n," is already in contacts.")):_((0,u.uK)({name:n,number:o})),s(""),m("")},children:[(0,d.jsx)("label",{className:x,htmlFor:g,children:"Name"}),(0,d.jsx)("input",{id:g,onChange:function(e){var t=e.target.value;s(t)},value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsxs)("label",{className:x,htmlFor:C,children:[" ","Number"," "]}),(0,d.jsx)("input",{id:C,onChange:function(e){var t=e.target.value;m(t)},value:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)("button",{className:b,children:"Add contact"})]})})},j={filter:"Filter_filter__vxThR",filterLabel:"Filter_filterLabel__+pnW-"},g=n(4808),C=function(){var e=(0,r.I0)(),t=(0,r.v9)(l);return(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{className:j.filterLabel,children:"Find contacts by Name "}),(0,d.jsx)("input",{className:j.filterName,type:"text",name:"filter",placeholder:"Enter filter",value:t,onChange:function(t){var n=t.currentTarget.value;e((0,g.T)(n))}})]})};function N(){var e=(0,r.I0)(),t=(0,r.v9)(c);return(0,a.useEffect)((function(){e((0,u.yF)())}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.q,{children:(0,d.jsx)("title",{children:"Your contacts"})}),(0,d.jsx)(_,{}),(0,d.jsx)("div",{children:t&&"Request in progress..."}),(0,d.jsx)(C,{}),(0,d.jsx)(m,{})]})}}}]);
//# sourceMappingURL=197.191b924a.chunk.js.map