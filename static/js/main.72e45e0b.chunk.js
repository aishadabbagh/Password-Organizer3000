(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),o=a.n(s),l=(a(14),a(6)),r=a(1),i=a(2),u=a(4),m=a(3),h=a(5),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onTextBoxChange=function(e){console.log("On Text Change",e.target.value),a.setState({newItem:e.target.value})},a.state={newItem:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=c.a.createElement("p",null,"Nothing");return this.props.acc.Website&&(t=this.props.acc.Website.map((function(t){return c.a.createElement("li",null,t.site,": ",t.pass,c.a.createElement("button",{className:"update"},"Update "),c.a.createElement("input",{type:"text",placeholder:"type a task",value:e.state.newItem,onChange:e.onTextBoxChange}))}))),c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,this.props.acc.Email),c.a.createElement("ul",null,t))}}]),t}(n.Component),d=function(e){return c.a.createElement("li",{onClick:function(t){return e.handleClickEvent(e.name)}},e.name,c.a.createElement("span",{className:"material-icons",onClick:e.delete},"remove_circle"))},E=function(e){var t=e.userEmails.map((function(t,a){return c.a.createElement(d,{delete:function(a){return e.delete(t.Email)},name:t.Email,key:a,handleClickEvent:e.handleClickEvent})}));return c.a.createElement("ul",null,t)},g=(a(15),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("label",null,"Search your E-mail"),c.a.createElement("input",{type:"text",onChange:this.props.onChange,value:this.props.value}))}}]),t}(n.Component)),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateAccInfo=function(e,t){console.log("it works...")},a.accInfo=function(e){var t=a.state.accounts.find((function(t){return t.Email.toLowerCase()==e.toLowerCase()}));a.setState({selectedAcc:t})},a.clearList=function(e){a.setState({accountsToBeDisplayed:[],accounts:[]})},a.handleSearchChange=function(e){var t=e.target.value;console.log(a.props.userEmails);var n=a.state.accounts.filter((function(e){return e.Email.toLowerCase().includes(t.toLowerCase())}));a.setState({searchValue:t,accountsToBeDisplayed:n})},a.onTextBoxChange=function(e){console.log("On Text Change",e.target.value),a.setState({newItem:e.target.value})},a.addAccount=function(){var e={id:a.state.accounts.length+1,Email:a.state.newItem};console.log(a.state.newItem),a.setState({accounts:[].concat(Object(l.a)(a.state.accounts),[e]),newItem:"",accountsToBeDisplayed:[].concat(Object(l.a)(a.state.accounts),[e])}),console.log(a.state.accounts)},a.removeAccount=function(e){var t=Object(l.a)(a.state.accounts);console.log("//////////-----/////0:",e,"././././././././",t);var n=t.findIndex((function(t){return t.Email===e}));console.log(n),t.splice(n,1),console.log(n),a.setState({accounts:t,accountsToBeDisplayed:t})},a.state={searchValue:"",accounts:a.props.userEmails,accountsToBeDisplayed:a.props.userEmails,newItem:"",selectedAcc:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{value:this.state.searchValue,onChange:this.handleSearchChange}),c.a.createElement(E,{delete:this.removeAccount,userEmails:this.state.accountsToBeDisplayed,handleClickEvent:this.accInfo}),c.a.createElement("input",{type:"text",placeholder:"type a task",value:this.state.newItem,onChange:this.onTextBoxChange}),c.a.createElement("button",{onClick:this.addAccount}," Add email"),c.a.createElement("button",{onClick:this.clearList},"Delete all emails"));return this.state.selectedAcc&&(t=c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){e.setState({selectedAcc:null})}},"GOING BACK"),c.a.createElement(p,{updateAcc:this.updateAccInfo,acc:this.state.selectedAcc}))),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Password Organizer 3000"),t)}}]),t}(n.Component);o.a.render(c.a.createElement(f,{userEmails:[{ID:1,Email:"Aisha.dabbagh@gmail.com",Website:[{site:"Facebook",pass:"1234"},{site:"Twitter",pass:"0000"},{site:"Google",pass:"4321"}]},{ID:2,Email:"a.dabbagh@hotmail.com",Website:[{site:"Yahoo",pass:"kkkk"},{site:"Youtube",pass:"1234"}]},{ID:3,Email:"a.d@yahoo.com",Website:[{site:"Yahoo",pass:"kkkk"},{site:"Youtube",pass:"4444"}]}]}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.72e45e0b.chunk.js.map