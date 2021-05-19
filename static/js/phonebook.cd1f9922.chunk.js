(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{168:function(t,e,n){t.exports={contact:"Contacts_contact__3_TQl",search:"Contacts_search__3rC8e",delete:"Contacts_delete__16OwR"}},173:function(t,e,n){t.exports={inputForm:"ContactForm_inputForm__2de9Q",btnAdd:"ContactForm_btnAdd__2M8yM",form:"ContactForm_form__2IF4m"}},174:function(t,e,n){t.exports={flexwrap:"PhonebookView_flexwrap__1SSon",formAdd:"PhonebookView_formAdd__KXm-t",contactsList:"PhonebookView_contactsList__2mIT3"}},195:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(5),r=n(40),o=n(41),s=n(43),i=n(42),u=n(173),l=n.n(u),d=n(15),h=n(29),b=n.n(h),f=n(17);b.a.defaults.baseURL="https://connections-api.herokuapp.com";var m=function(t){return function(e){var n={name:t.name,number:t.number};e(f.a.addContactRequest()),b.a.post("/contacts",n).then((function(t){var n=t.data;return e(f.a.addContactSuccess(n))})).catch((function(t){return e(f.a.addContactError())}))}},j=function(t){return function(e){e(f.a.deleteContactRequest()),b.a.delete("/contacts/".concat(t)).then((function(){return e(f.a.deleteContactSuccess(t))})).catch((function(t){return e(f.a.deleteContactError())}))}},p=function(){return function(t){t(f.a.fetchContactsRequest()),b.a.get("/contacts").then((function(e){var n=e.data;return t(f.a.fetchContactsSuccess(n))})).catch((function(e){return t(f.a.fetchContactsError())}))}},C=n(46),O=function(t){return t.phonebook.filter},g=function(t){return t.phonebook.contacts},x={getLoading:function(t){return t.phonebook.loading},getFilter:O,getContacts:g,getFilteredContacts:Object(C.a)([g,O],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},_=n(2),v=function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(c.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.contactsIn.find((function(e){return e.name===t.state.name}))?alert(t.state.name+"is already in contacts"):(t.props.submitted(t.state),t.setState({name:"",number:""}))},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{className:l.a.form,onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{children:["Name",Object(_.jsx)("input",{className:l.a.inputForm,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(_.jsxs)("label",{children:["Phone",Object(_.jsx)("input",{className:l.a.inputForm,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(_.jsx)("button",{className:l.a.btnAdd,type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),y=Object(d.b)((function(t){return{contactsIn:x.getContacts(t)}}),(function(t){return{submitted:function(e){return t(m(e))}}}))(v),k=n(168),w=n.n(k),F=n(65),A=n.n(F),N=(n(85),function(t){Object(s.a)(n,t);var e=Object(i.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this;return Object(_.jsxs)(_.Fragment,{children:[this.props.isLoadingContacts&&Object(_.jsx)(A.a,{type:"ThreeDots",color:"teal",height:130,width:130,style:{textAlign:"center"}}),Object(_.jsx)("ul",{children:this.props.contacts.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(_.jsxs)("li",{children:[Object(_.jsxs)("p",{className:w.a.contact,children:[a,": ",c]}),Object(_.jsx)("button",{className:w.a.delete,type:"button",onClick:function(){return t.props.onDeleteContact(n)},children:"Delete"})]},n)}))})]})}}]),n}(a.Component)),L=Object(d.b)((function(t){return{isLoadingContacts:x.getLoading(t),contacts:x.getFilteredContacts(t)}}),(function(t){return{fetchContacts:function(){return t(p())},onDeleteContact:function(e){return t(j(e))}}}))(N),S=Object(d.b)((function(t){return{searchQuery:x.getFilter(t)}}),(function(t){return{onChange:function(e){return t(f.a.changeFilter(e.currentTarget.value))}}}))((function(t){var e=t.searchQuery,n=t.onChange;return Object(_.jsxs)("label",{children:["Filter contacts by name",Object(_.jsx)("input",{className:w.a.search,type:"text",value:e,onChange:n})]})})),D=n(57),q=n(174),P=n.n(q);e.default=function(){return Object(_.jsx)(D.a,{children:Object(_.jsxs)("div",{className:P.a.flexwrap,children:[Object(_.jsxs)("div",{className:P.a.formAdd,children:[Object(_.jsx)("h2",{children:"Phonebook"}),Object(_.jsx)(y,{})]}),Object(_.jsxs)("div",{className:P.a.contactsList,children:[Object(_.jsx)("h2",{children:"Contacts"}),Object(_.jsx)(S,{}),Object(_.jsx)(L,{})]})]})})}}}]);
//# sourceMappingURL=phonebook.cd1f9922.chunk.js.map