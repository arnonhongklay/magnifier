(function(){var e,t,n,r,s,o,i,a,u,c,l,p,h,f,d,g,m,y,w,v,P,b,S,k,q,L,T,R,x,E,M,A,N,_,O,j,F,C,U,W,X,D,H=[].slice,I={}.hasOwnProperty,z=function(e,t){function n(){this.constructor=e}for(var r in t)I.call(t,r)&&(e[r]=t[r]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},G=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(t in this&&this[t]===e)return t;return-1};w={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!1}},T=function(){var e;return null!=(e="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?e:+new Date},x=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,y=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==x&&(x=function(e){return setTimeout(e,50)},y=function(e){return clearTimeout(e)}),M=function(e){var t,n;return t=T(),(n=function(){var r;return r=T()-t,r>=33?(t=T(),e(r,function(){return x(n)})):setTimeout(n,33-r)})()},E=function(){var e,t,n;return n=arguments[0],t=arguments[1],e=3<=arguments.length?H.call(arguments,2):[],"function"==typeof n[t]?n[t].apply(n,e):n[t]},v=function(){var e,t,n,r,s,o,i;for(t=arguments[0],r=2<=arguments.length?H.call(arguments,1):[],o=0,i=r.length;i>o;o++)if(n=r[o])for(e in n)I.call(n,e)&&(s=n[e],null!=t[e]&&"object"==typeof t[e]&&null!=s&&"object"==typeof s?v(t[e],s):t[e]=s);return t},d=function(e){var t,n,r,s,o;for(n=t=0,s=0,o=e.length;o>s;s++)r=e[s],n+=Math.abs(r),t++;return n/t},b=function(e,t){var n,r,s;if(null==e&&(e="options"),null==t&&(t=!0),s=document.querySelector("[data-pace-"+e+"]")){if(n=s.getAttribute("data-pace-"+e),!t)return n;try{return JSON.parse(n)}catch(o){return r=o,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},null==window.Pace&&(window.Pace={}),R=Pace.options=v(w,window.paceOptions,b()),a=function(e){function t(){return X=t.__super__.constructor.apply(this,arguments)}return z(t,e),t}(Error),t=function(){function e(){this.progress=0}return e.prototype.getElement=function(){var e;if(null==this.el){if(e=document.querySelector(R.target),!e)throw new a;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace("pace-done",""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=e.firstChild?e.insertBefore(this.el,e.firstChild):e.appendChild(this.el)}return this.el},e.prototype.finish=function(){var e;return e=this.getElement(),e.className=e.className.replace("pace-active",""),e.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},e.prototype.update=function(e){return this.progress=e,this.render()},e.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){a=e}return this.el=void 0},e.prototype.render=function(){var e,t;return null==document.querySelector(R.target)?!1:(e=this.getElement(),e.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||0|(this.lastRenderedProgress|0!==this.progress))&&(e.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?t="99":(t=this.progress<10?"0":"",t+=0|this.progress),e.children[0].setAttribute("data-progress",""+t)),this.lastRenderedProgress=this.progress)},e.prototype.done=function(){return this.progress>=100},e}(),i=function(){function e(){this.bindings={}}return e.prototype.trigger=function(e,t){var n,r,s,o,i;if(null!=this.bindings[e]){for(o=this.bindings[e],i=[],r=0,s=o.length;s>r;r++)n=o[r],i.push(n.call(this,t));return i}},e.prototype.on=function(e,t){var n;return null==(n=this.bindings)[e]&&(n[e]=[]),this.bindings[e].push(t)},e}(),C=window.XMLHttpRequest,F=window.XDomainRequest,j=window.WebSocket,P=function(e,t){var n,r,s,o;o=[];for(r in t.prototype)try{s=t.prototype[r],o.push(null==e[r]&&"function"!=typeof s?e[r]=s:void 0)}catch(i){n=i}return o},q=[],Pace.ignore=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?H.call(arguments,1):[],q.unshift("ignore"),n=t.apply(null,e),q.shift(),n},Pace.track=function(){var e,t,n;return t=arguments[0],e=2<=arguments.length?H.call(arguments,1):[],q.unshift("track"),n=t.apply(null,e),q.shift(),n},N=function(e){var t;if(null==e&&(e="GET"),"track"===q[0])return"force";if(!q.length&&R.ajax){if("socket"===e&&R.ajax.trackWebSockets)return!0;if(t=e.toUpperCase(),G.call(R.ajax.trackMethods,t)>=0)return!0}return!1},u=function(e){function t(){var e,n=this;t.__super__.constructor.apply(this,arguments),e=function(e){var t;return t=e.open,e.open=function(r,s){return N(r)&&n.trigger("request",{type:r,url:s,request:e}),t.apply(e,arguments)}},window.XMLHttpRequest=function(t){var n;return n=new C(t),e(n),n},P(window.XMLHttpRequest,C),null!=F&&(window.XDomainRequest=function(){var t;return t=new F,e(t),t},P(window.XDomainRequest,F)),null!=j&&R.ajax.trackWebSockets&&(window.WebSocket=function(e,t){var r;return r=new j(e,t),N("socket")&&n.trigger("request",{type:"socket",url:e,protocols:t,request:r}),r},P(window.WebSocket,j))}return z(t,e),t}(i),U=null,S=function(){return null==U&&(U=new u),U},S().on("request",function(t){var n,r,s,o;return o=t.type,s=t.request,Pace.running||R.restartOnRequestAfter===!1&&"force"!==N(o)?void 0:(r=arguments,n=R.restartOnRequestAfter||0,"boolean"==typeof n&&(n=0),setTimeout(function(){var t,n,i,a,u,c,l;if(n="socket"===o?s.readyState<2:0<(u=s.readyState)&&4>u){for(Pace.restart(),c=Pace.sources,l=[],i=0,a=c.length;a>i;i++){if(t=c[i],t instanceof e){t.watch.apply(t,r);break}l.push(void 0)}return l}},n))}),e=function(){function e(){var e=this;this.elements=[],S().on("request",function(){return e.watch.apply(e,arguments)})}return e.prototype.watch=function(e){var t,n,r;return r=e.type,t=e.request,n="socket"===r?new p(t):new h(t),this.elements.push(n)},e}(),h=function(){function e(e){var t,n,r,s,o,i,a=this;if(this.progress=0,null!=window.ProgressEvent)for(n=null,e.addEventListener("progress",function(e){return a.progress=e.lengthComputable?100*e.loaded/e.total:a.progress+(100-a.progress)/2}),i=["load","abort","timeout","error"],r=0,s=i.length;s>r;r++)t=i[r],e.addEventListener(t,function(){return a.progress=100});else o=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?a.progress=100:3===e.readyState&&(a.progress=50),"function"==typeof o?o.apply(null,arguments):void 0}}return e}(),p=function(){function e(e){var t,n,r,s,o=this;for(this.progress=0,s=["error","open"],n=0,r=s.length;r>n;n++)t=s[n],e.addEventListener(t,function(){return o.progress=100})}return e}(),r=function(){function e(e){var t,n,r,o;for(null==e&&(e={}),this.elements=[],null==e.selectors&&(e.selectors=[]),o=e.selectors,n=0,r=o.length;r>n;n++)t=o[n],this.elements.push(new s(t))}return e}(),s=function(){function e(e){this.selector=e,this.progress=0,this.check()}return e.prototype.check=function(){var e=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return e.check()},R.elements.checkInterval)},e.prototype.done=function(){return this.progress=100},e}(),n=function(){function e(){var e,t,n=this;this.progress=null!=(t=this.states[document.readyState])?t:100,e=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof e?e.apply(null,arguments):void 0}}return e.prototype.states={loading:0,interactive:50,complete:100},e}(),o=function(){function e(){var e,t,n,r,s,o=this;this.progress=0,e=0,s=[],r=0,n=T(),t=setInterval(function(){var i;return i=T()-n-50,n=T(),s.push(i),s.length>R.eventLag.sampleCount&&s.shift(),e=d(s),++r>=R.eventLag.minSamples&&e<R.eventLag.lagThreshold?(o.progress=100,clearInterval(t)):o.progress=100*(3/(e+3))},50)}return e}(),l=function(){function e(e){this.source=e,this.last=this.sinceLastUpdate=0,this.rate=R.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return e.prototype.tick=function(e,t){var n;return null==t&&(t=E(this.source,"progress")),t>=100&&(this.done=!0),t===this.last?this.sinceLastUpdate+=e:(this.sinceLastUpdate&&(this.rate=(t-this.last)/this.sinceLastUpdate),this.catchup=(t-this.progress)/R.catchupTime,this.sinceLastUpdate=0,this.last=t),t>this.progress&&(this.progress+=this.catchup*e),n=1-Math.pow(this.progress/100,R.easeFactor),this.progress+=n*this.rate*e,this.progress=Math.min(this.lastProgress+R.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},e}(),_=null,A=null,g=null,O=null,f=null,m=null,Pace.running=!1,k=function(){return R.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(W=window.history.pushState,window.history.pushState=function(){return k(),W.apply(window.history,arguments)}),null!=window.history.replaceState&&(D=window.history.replaceState,window.history.replaceState=function(){return k(),D.apply(window.history,arguments)}),c={ajax:e,elements:r,document:n,eventLag:o},(L=function(){var e,n,r,s,o,i,a,u,p;for(Pace.sources=_=[],a=["ajax","elements","document","eventLag"],r=0,o=a.length;o>r;r++)n=a[r],R[n]!==!1&&_.push(new c[n](R[n]));for(p=null!=(u=R.extraSources)?u:[],s=0,i=p.length;i>s;s++)e=p[s],_.push(new e(R));return Pace.bar=g=new t,A=[],O=new l})(),Pace.stop=function(){return Pace.running=!1,g.destroy(),m=!0,null!=f&&("function"==typeof y&&y(f),f=null),L()},Pace.restart=function(){return Pace.stop(),Pace.start()},Pace.go=function(){return Pace.running=!0,g.render(),m=!1,f=M(function(e,t){var n,r,s,o,i,a,u,c,p,h,f,d,y,w,v,P,b,S;for(c=100-g.progress,r=y=0,s=!0,a=w=0,P=_.length;P>w;a=++w)for(f=_[a],h=null!=A[a]?A[a]:A[a]=[],i=null!=(S=f.elements)?S:[f],u=v=0,b=i.length;b>v;u=++v)o=i[u],p=null!=h[u]?h[u]:h[u]=new l(o),s&=p.done,p.done||(r++,y+=p.tick(e));return n=y/r,g.update(O.tick(e,n)),d=T(),g.done()||s||m?(g.update(100),setTimeout(function(){return g.finish(),Pace.running=!1},Math.max(R.ghostTime,Math.min(R.minTime,T()-d)))):t()})},Pace.start=function(e){v(R,e),Pace.running=!0;try{g.render()}catch(t){a=t}return document.querySelector(".pace")?Pace.go():setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:R.startOnPageLoad&&Pace.start()}).call(this);