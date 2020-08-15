(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(e,t,a){e.exports={phonebook:"PhoneBook_phonebook__2DcGW",details:"PhoneBook_details__3ehCp",addContactBtn:"PhoneBook_addContactBtn__Mo0pn",submitForm:"PhoneBook_submitForm__2xI-m",contactDetails:"PhoneBook_contactDetails__2Lcd5",contactName:"PhoneBook_contactName__33SH9",removeButton:"PhoneBook_removeButton__Do9_U",formDescription:"PhoneBook_formDescription__3bOPh",searchForm:"PhoneBook_searchForm__aoNcE"}},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=(a(14),a(8)),s=a(2),i=a(3),m=a(5),u=a(4),h=a(17),d=a(1),f=a.n(d),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:"",number:""},e.handleChange=function(t){e.setState({name:t.target.value})},e.handleChangeNum=function(t){e.setState({number:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a=e.props.contacts,n=e.state.name;a.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in list")):(e.props.addContact(e.state.name,e.state.number),e.setState({name:"",number:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return o.a.createElement("form",{className:f.a.submitForm,onSubmit:this.handleSubmit},o.a.createElement("span",{className:f.a.details},"Name: "),o.a.createElement("input",{type:"text",value:t,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("span",{className:f.a.details},"Phone:"),o.a.createElement("input",{type:"text",value:a,onChange:this.handleChangeNum}),o.a.createElement("br",null),o.a.createElement("button",{className:f.a.addContactBtn,onSubmit:this.handleSubmit,type:"submit"},t?"Add ".concat(t):"Add Contact"))}}]),a}(n.Component);function p(e){var t=e.handleFilter,a=e.filter;return o.a.createElement("form",{className:f.a.searchForm},o.a.createElement("span",{className:f.a.formDescription},"Find contacts by name"),o.a.createElement("input",{className:f.a.searchInput,onChange:t,value:a,type:"text"}))}function v(e){var t=e.name,a=e.number,n=e.id,r=e.onRemove;return o.a.createElement("li",null,o.a.createElement("span",{className:(f.a.contactName,f.a.contactDetails)},t+":"),o.a.createElement("span",{className:(f.a.contactPhone,f.a.contactDetails)},a),o.a.createElement("button",{className:f.a.removeButton,type:"button",onClick:function(){return r(n)}},"Delete"))}var C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={contacts:[],filter:""},e.handleFilter=function(t){e.setState({filter:t.target.value})},e.showFilteredContacts=function(){var t=e.state,a=t.filter;return t.contacts.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.addContact=function(t,a){var n={name:t,number:a,id:Object(h.a)()};e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[n])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.contacts,n=t.filter;return o.a.createElement("div",{className:f.a.phonebook},o.a.createElement("h2",null,"Phonebook"),o.a.createElement(b,{contacts:a,addContact:this.addContact}),o.a.createElement("h2",null,"Contacts"),a.length>1&&o.a.createElement(p,{handleFilter:this.handleFilter,filter:n}),o.a.createElement("ul",null,this.showFilteredContacts().map((function(t){var a=t.name,n=t.id,r=t.number;return o.a.createElement(v,{key:n,onRemove:e.deleteContact,name:a,id:n,number:r})}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.10a62a5f.chunk.js.map