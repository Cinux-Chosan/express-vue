function splitLines(t){return t.split(/\r?\n|\r/)}function StringStream(t){this.pos=this.start=0,this.string=t,this.lineStart=0}StringStream.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return 0==this.pos},peek:function(){return this.string.charAt(this.pos)||null},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(t){var e=this.string.charAt(this.pos)
if("string"==typeof t)var r=e==t
else r=e&&(t.test?t.test(e):t(e))
if(r)return++this.pos,e},eatWhile:function(t){for(var e=this.pos;this.eat(t););return this.pos>e},eatSpace:function(){for(var t=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>t},skipToEnd:function(){this.pos=this.string.length},skipTo:function(t){var e=this.string.indexOf(t,this.pos)
if(e>-1)return this.pos=e,!0},backUp:function(t){this.pos-=t},column:function(){return this.start-this.lineStart},indentation:function(){return 0},match:function(t,e,r){if("string"!=typeof t){var n=this.string.slice(this.pos).match(t)
return n&&n.index>0?null:(n&&!1!==e&&(this.pos+=n[0].length),n)}var s=function(t){return r?t.toLowerCase():t}
if(s(this.string.substr(this.pos,t.length))==s(t))return!1!==e&&(this.pos+=t.length),!0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(t,e){this.lineStart+=t
try{return e()}finally{this.lineStart-=t}}},exports.StringStream=StringStream,exports.startState=function(t,e,r){return!t.startState||t.startState(e,r)}
var modes=exports.modes={},mimeModes=exports.mimeModes={}
exports.defineMode=function(t,e){arguments.length>2&&(e.dependencies=Array.prototype.slice.call(arguments,2)),modes[t]=e},exports.defineMIME=function(t,e){mimeModes[t]=e},exports.defineMode("null",function(){return{token:function(t){t.skipToEnd()}}}),exports.defineMIME("text/plain","null"),exports.resolveMode=function(t){return"string"==typeof t&&mimeModes.hasOwnProperty(t)?t=mimeModes[t]:t&&"string"==typeof t.name&&mimeModes.hasOwnProperty(t.name)&&(t=mimeModes[t.name]),"string"==typeof t?{name:t}:t||{name:"null"}},exports.getMode=function(t,e){e=exports.resolveMode(e)
var r=modes[e.name]
if(!r)throw new Error("Unknown mode: "+e)
return r(t,e)},exports.registerHelper=exports.registerGlobalHelper=Math.min,exports.runMode=function(t,e,r,n){for(var s=exports.getMode({indentUnit:2},e),i=splitLines(t),o=n&&n.state||exports.startState(s),a=0,h=i.length;a<h;++a){a&&r("\n")
var p=new exports.StringStream(i[a])
for(!p.string&&s.blankLine&&s.blankLine(o);!p.eol();){var u=s.token(p,o)
r(p.current(),u,a,p.start,o),p.start=p.pos}}},require.cache[require.resolve("../../lib/codemirror")]=require.cache[require.resolve("./runmode.node")]
