(this["webpackJsonpmovies-web"]=this["webpackJsonpmovies-web"]||[]).push([[0],{37:function(e,t,a){e.exports=a(69)},42:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r),l=(a(42),a(6)),s=a(7),o=a(9),m=a(8),h=a(10),u=a(34),p=a(11),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).doSearch=function(){a.props.history.push("/list?name="+a.state.name)},a.state={name:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"input-div"},c.a.createElement("input",{type:"text",value:this.state.name,placeholder:"\u8d44\u6e90\u540d\u79f0~~~",onChange:function(t){e.setState({name:t.target.value})}}),c.a.createElement("svg",{onClick:function(){e.doSearch()},t:"1577173041895",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2624",width:"200",height:"200"},c.a.createElement("path",{d:"M977.454545 1024c-11.636364 0-23.272727-4.654545-32.581818-13.963636l-232.727272-232.727273c-18.618182-18.618182-18.618182-46.545455 0-65.163636s46.545455-18.618182 65.163636 0l232.727273 232.727272c18.618182 18.618182 18.618182 46.545455 0 65.163637-9.309091 9.309091-20.945455 13.963636-32.581819 13.963636z",fill:"#176AFD","p-id":"2625"}),c.a.createElement("path",{d:"M442.181818 93.090909c193.163636 0 349.090909 155.927273 349.090909 349.090909s-155.927273 349.090909-349.090909 349.090909S93.090909 635.345455 93.090909 442.181818 249.018182 93.090909 442.181818 93.090909m0-93.090909C197.818182 0 0 197.818182 0 442.181818s197.818182 442.181818 442.181818 442.181818 442.181818-197.818182 442.181818-442.181818S686.545455 0 442.181818 0z",fill:"#1D2633","p-id":"2626"})))}}]),t}(c.a.Component),v=a(30),f=a.n(v);function E(e){return f()(e).then((function(e){return Promise.resolve(e.data)})).catch((function(e){console.log(e)}))}var b=a(14),w=a.n(b),j=a(31),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).doPlay=function(e){a.props.history.push("/play?url="+e)},a.state={data:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search.replace("?",""),a=w.a.parse(t);this.setState({name:a.name}),function(e){return E({method:"GET",url:"/movives/resource",params:e})}(a).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"list"},this.state.data.map((function(t){return c.a.createElement("div",{className:"item"},c.a.createElement("span",{className:"item-name"},t.title),c.a.createElement("span",null,c.a.createElement(j.CopyToClipboard,{text:t.href},c.a.createElement("svg",{t:"1577176210350",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4290",width:"200",height:"200"},c.a.createElement("path",{d:"M556.544 606.08a138.176 138.176 0 0 1-98.048-40.544 18.88 18.88 0 0 1 0-26.624 18.88 18.88 0 0 1 26.624 0 101.056 101.056 0 0 0 142.816 0l136.928-136.928a101.056 101.056 0 0 0 0-142.816 101.056 101.056 0 0 0-142.816 0l-115.52 115.52a18.88 18.88 0 0 1-26.624 0 18.88 18.88 0 0 1 0-26.624l115.52-115.52a138.752 138.752 0 0 1 196.064 0 138.784 138.784 0 0 1 0 196.064l-136.928 136.896a138.144 138.144 0 0 1-98.08 40.576h0.064z","p-id":"4291",fill:"#d81e06"}),c.a.createElement("path",{d:"M330.592 832a138.176 138.176 0 0 1-98.048-40.544 138.752 138.752 0 0 1 0-196.064l136.896-136.896a138.752 138.752 0 0 1 196.064 0 18.88 18.88 0 0 1 0 26.624 18.88 18.88 0 0 1-26.624 0 101.056 101.056 0 0 0-142.816 0l-136.896 136.928a101.056 101.056 0 0 0 0 142.816 101.056 101.056 0 0 0 142.816 0l115.52-115.52a18.88 18.88 0 0 1 26.624 0 18.88 18.88 0 0 1 0 26.624l-115.52 115.52A138.24 138.24 0 0 1 330.56 832h0.032z","p-id":"4292",fill:"#d81e06"}))),c.a.createElement("svg",{onClick:function(){e.doPlay(t.href)},t:"1577176725389",className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5142",width:"200",height:"200"},c.a.createElement("path",{d:"M803.84 492.032 213.056 135.04C195.392 124.288 174.208 124.288 156.352 134.976 138.624 145.728 128 164.928 128 186.368l0 714.176c0 21.44 10.624 40.704 28.352 51.392C165.248 957.312 174.976 960 184.704 960c9.728 0 19.52-2.688 28.352-8.064l590.72-356.992c17.728-10.752 28.288-30.016 28.288-51.456C832.128 521.984 821.568 502.72 803.84 492.032zM189.568 891.712 187.136 193.792l578.624 349.696L189.568 891.712z","p-id":"5143",fill:"#13227a"}))))})))}}]),t}(c.a.Component),g=a(32),y=a.n(g),C=a(33),k=a.n(C),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={data:[],chimee:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search.replace("?",""),a=w.a.parse(t);this.setState({name:a.name}),function(e){return E({method:"GET",url:"/movives/detail",params:e})}(a).then((function(t){var a=new y.a({wrapper:"#wrapper",src:t.data&&t.data[0].href,controls:!0,isLive:!0,kernels:{hls:k.a},autoplay:!0});e.setState({chimee:a,data:t.data})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"detail"},c.a.createElement("div",{id:"wrapper"}),c.a.createElement("div",{className:"detail-list"},this.state.data.map((function(t){return c.a.createElement("span",{onClick:function(){e.state.chimee.load(t.href)},className:"detail-item"},t.name)}))))}}]),t}(c.a.Component),N=function(e){function t(e){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(p.d,null,c.a.createElement(p.a,{exact:!0,path:"/",to:{pathname:"/home"}}),c.a.createElement(p.b,{path:"/home",component:d}),c.a.createElement(p.b,{path:"/list",component:O}),c.a.createElement(p.b,{path:"/play",component:x})))}}]),t}(n.Component);i.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.26160f3d.chunk.js.map