(this.webpackJsonpproba=this.webpackJsonpproba||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),l=n(4),i=n(7),m=n(6),u=n(5),h=n.n(u),d=(n(14),n(15),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set3&size=140x140")}),e.monster.name,r.a.createElement("p",null,e.monster.email))}),p=(n(16),function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(d,{key:e.id,monster:e})})))});n(17);function f(e){return r.a.createElement("input",{className:"searchBox",type:"search",placeholder:e.placeholder,onChange:e.handleChange})}var g=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value},(function(){console.log(e.state)}))};return e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})),r.a.createElement("h1",null,"awesome title"),r.a.createElement(f,{handleChange:this.handleChange,placeholder:"search name"}),r.a.createElement(p,{monsters:a}),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.652bb2bb.chunk.js.map