!function(e,r){function t(e){return function(r){return{}.toString.call(r)=="[object "+e+"]"}}function n(){return d++}function a(e){return e.match(g)[0]}function i(e,r){var t,n=e.charAt(0)
if(_.test(e))t=e
else if("."===n)t=function(e){for(e=(e=e.replace(E,"/")).replace(m,"$1/");e.match(y);)e=e.replace(y,"/")
return e}((r?a(r):u.cwd)+e)
else if("/"===n){var i=u.cwd.match(x)
t=i?i[0]+e.substring(1):e}else t=u.base+e
return 0===t.indexOf("//")&&(t=location.protocol+t),t}function s(e,r){this.uri=e,this.dependencies=r||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!e.seajs){var o=e.seajs={version:"2.3.0"},u=o.data={},c=t("Object"),f=t("String"),l=Array.isArray||t("Array"),v=t("Function"),d=0,h=u.events={}
o.on=function(e,r){return(h[e]||(h[e]=[])).push(r),o},o.off=function(e,r){if(!e&&!r)return h=u.events={},o
var t=h[e]
if(t)if(r)for(var n=t.length-1;n>=0;n--)t[n]===r&&t.splice(n,1)
else delete h[e]
return o}
var p=o.emit=function(e,r){var t=h[e]
if(t)for(var n=0,a=(t=t.slice()).length;a>n;n++)t[n](r)
return o},g=/[^?#]*\//,E=/\/\.\//g,y=/\/[^/]+\/\.\.\//,m=/([^:/])\/+\//g,b=/^([^/:]+)(\/.+)$/,A=/{([^{]+)}/g,_=/^\/\/.|:\//,x=/^.*?\/\/.*?\//,D=document,T=location.href&&0!==location.href.indexOf("about:")?a(location.href):"",q=D.scripts,N=a(function(e){return e.hasAttribute?e.src:e.getAttribute("src",4)}(D.getElementById("seajsnode")||q[q.length-1])||T)
o.resolve=function(e,r){if(!e)return""
var t=i(e=function(e){var r=e.length-1,t=e.charAt(r)
return"#"===t?e.substring(0,r):".js"===e.substring(r-2)||e.indexOf("?")>0||"/"===t?e:e+".js"}(e=function(e){var r=u.vars
return r&&e.indexOf("{")>-1&&(e=e.replace(A,function(e,t){return f(r[t])?r[t]:e})),e}(e=function(e){var r,t=u.paths
return t&&(r=e.match(b))&&f(t[r[1]])&&(e=t[r[1]]+r[2]),e}(e=function(e){var r=u.alias
return r&&f(r[e])?r[e]:e}(e)))),r)
return function(e){var r=u.map,t=e
if(r)for(var n=0,a=r.length;a>n;n++){var i=r[n]
if((t=v(i)?i(e)||e:e.replace(i[0],i[1]))!==e)break}return t}(t)}
var O,w,S=D.head||D.getElementsByTagName("head")[0]||D.documentElement,U=S.getElementsByTagName("base")[0]
o.request=function(e,r,t){var n=D.createElement("script")
if(t){var a=v(t)?t(e):t
a&&(n.charset=a)}(function(e,r,t){function n(){e.onload=e.onerror=e.onreadystatechange=null,u.debug||S.removeChild(e),e=null,r()}"onload"in e?(e.onload=n,e.onerror=function(){p("error",{uri:t,node:e}),n()}):e.onreadystatechange=function(){/loaded|complete/.test(e.readyState)&&n()}})(n,r,e),n.async=!0,n.src=e,O=n,U?S.insertBefore(n,U):S.appendChild(n),O=null}
var C,I=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,G=/\\\\/g,j=o.cache={},L={},X={},k={},B=s.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6}
s.prototype.resolve=function(){for(var e=this.dependencies,r=[],t=0,n=e.length;n>t;t++)r[t]=s.resolve(e[t],this.uri)
return r},s.prototype.load=function(){var e=this
if(!(e.status>=B.LOADING)){e.status=B.LOADING
var t=e.resolve()
p("load",t)
for(var n,a=e._remain=t.length,i=0;a>i;i++)(n=s.get(t[i])).status<B.LOADED?n._waitings[e.uri]=(n._waitings[e.uri]||0)+1:e._remain--
if(0===e._remain)return e.onload(),r
var o={}
for(i=0;a>i;i++)(n=j[t[i]]).status<B.FETCHING?n.fetch(o):n.status===B.SAVED&&n.load()
for(var u in o)o.hasOwnProperty(u)&&o[u]()}},s.prototype.onload=function(){var e=this
e.status=B.LOADED,e.callback&&e.callback()
var r,t,n=e._waitings
for(r in n)n.hasOwnProperty(r)&&((t=j[r])._remain-=n[r],0===t._remain&&t.onload())
delete e._waitings,delete e._remain},s.prototype.fetch=function(e){function t(){o.request(i.requestUri,i.onRequest,i.charset)}var n=this,a=n.uri
n.status=B.FETCHING
var i={uri:a}
p("fetch",i)
var c=i.requestUri||a
return!c||X[c]?(n.load(),r):L[c]?(k[c].push(n),r):(L[c]=!0,k[c]=[n],p("request",i={uri:a,requestUri:c,onRequest:function(){delete L[c],X[c]=!0,C&&(s.save(a,C),C=null)
var e,r=k[c]
for(delete k[c];e=r.shift();)e.load()},charset:u.charset}),i.requested||(e?e[i.requestUri]=t:t()),r)},s.prototype.exec=function(){function e(r){return s.get(e.resolve(r)).exec()}var t=this
if(t.status>=B.EXECUTING)return t.exports
t.status=B.EXECUTING
var a=t.uri
e.resolve=function(e){return s.resolve(e,a)},e.async=function(r,t){return s.use(r,t,a+"_async_"+n()),e}
var i=t.factory,o=v(i)?i(e,t.exports={},t):i
return o===r&&(o=t.exports),delete t.factory,t.exports=o,t.status=B.EXECUTED,p("exec",t),o},s.resolve=function(e,r){var t={id:e,refUri:r}
return p("resolve",t),t.uri||o.resolve(t.id,r)},s.define=function(e,t,n){var a=arguments.length
1===a?(n=e,e=r):2===a&&(n=t,l(e)?(t=e,e=r):t=r),!l(t)&&v(n)&&(t=function(e){var r=[]
return e.replace(G,"").replace(I,function(e,t,n){n&&r.push(n)}),r}(""+n))
var i={id:e,uri:s.resolve(e),deps:t,factory:n}
if(!i.uri&&D.attachEvent){var o=function(){if(O)return O
if(w&&"interactive"===w.readyState)return w
for(var e=S.getElementsByTagName("script"),r=e.length-1;r>=0;r--){var t=e[r]
if("interactive"===t.readyState)return w=t}}()
o&&(i.uri=o.src)}p("define",i),i.uri?s.save(i.uri,i):C=i},s.save=function(e,r){var t=s.get(e)
t.status<B.SAVED&&(t.id=r.id||e,t.dependencies=r.deps||[],t.factory=r.factory,t.status=B.SAVED,p("save",t))},s.get=function(e,r){return j[e]||(j[e]=new s(e,r))},s.use=function(r,t,n){var a=s.get(n,l(r)?r:[r])
a.callback=function(){for(var r=[],n=a.resolve(),i=0,s=n.length;s>i;i++)r[i]=j[n[i]].exec()
t&&t.apply(e,r),delete a.callback},a.load()},o.use=function(e,r){return s.use(e,r,u.cwd+"_use_"+n()),o},s.define.cmd={},e.define=s.define,o.Module=s,u.fetchedList=X,u.cid=n,o.require=function(e){var r=s.get(s.resolve(e))
return r.status<B.EXECUTING&&(r.onload(),r.exec()),r.exports},u.base=N,u.dir=N,u.cwd=T,u.charset="utf-8",o.config=function(e){for(var r in e){var t=e[r],n=u[r]
if(n&&c(n))for(var a in t)n[a]=t[a]
else l(n)?t=n.concat(t):"base"===r&&("/"!==t.slice(-1)&&(t+="/"),t=i(t)),u[r]=t}return p("config",e),o}}}(this)
