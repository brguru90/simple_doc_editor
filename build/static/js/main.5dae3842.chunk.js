(this.webpackJsonptest_app=this.webpackJsonptest_app||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),a=t(2),l=t.n(a),r=(t(13),t(3)),s=t(4),i=t(7),u=t(6),d=(t(14),t(5)),m=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=n.call.apply(n,[this].concat(c))).state={},e.client=null,e.connect=function(){var n=document.querySelector("pre");n.innerHTML="guru";var t=new WebSocket("ws://localhost:8000/ws/chat");t.onopen=function(){console.log("[open] Connection established"),n.innerHTML+="[open] Connection established\n"},t.onmessage=function(e){console.log("[message] Data received from server: ".concat(e.data)),n.innerHTML+="".concat(e.data,"\n")},t.onclose=function(e){e.wasClean?(console.log("[close] Connection closed cleanly, code=".concat(e.code," reason=").concat(e.reason)),n.innerHTML+="[close] Connection closed cleanly, code=".concat(e.code," reason=").concat(e.reason,"\n")):(console.log("[close] Connection died"),n.innerHTML+="[close] Connection died\n")},t.onerror=function(e){console.log(e),alert("[error] ".concat(e.message)),n.innerHTML+="[error] ".concat(e.message,"\n")},e.client=t},e.disconnect=function(){e.client.close()},e.send=function(){var n=document.querySelector("textarea").value;e.client.send(n)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("hi");var e=setTimeout((function(){d(".App").addClass("loaded"),clearTimeout(e)}),1e3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{onClick:this.connect},"Connect"),c.a.createElement("button",{onClick:this.disconnect},"Disconnect"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("textarea",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("button",{onClick:this.send},"Send"),c.a.createElement("pre",null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.5dae3842.chunk.js.map