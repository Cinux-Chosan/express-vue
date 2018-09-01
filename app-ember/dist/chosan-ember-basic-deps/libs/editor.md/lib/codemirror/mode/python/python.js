(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n=t(["and","or","not","is"]),r=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],i=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"],a=["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"],o=["exec","print"],l=["ascii","bytes","exec","print"],s=["nonlocal","False","True","None"]
function c(e){return e.scopes[e.scopes.length-1]}e.registerHelper("hintWords","python",r.concat(i)),e.defineMode("python",function(p,u){var f="error",d=u.singleDelimiters||new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),m=u.doubleOperators||new RegExp("^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),h=u.doubleDelimiters||new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),y=u.tripleDelimiters||new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))")
if(u.version&&3==parseInt(u.version,10))var b=u.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!@]"),g=u.identifiers||new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*")
else b=u.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!]"),g=u.identifiers||new RegExp("^[_A-Za-z][_A-Za-z0-9]*")
var x=u.hangingIndent||p.indentUnit,v=r,k=i
if(null!=u.extra_keywords&&(v=v.concat(u.extra_keywords)),null!=u.extra_builtins&&(k=k.concat(u.extra_builtins)),u.version&&3==parseInt(u.version,10)){v=v.concat(s),k=k.concat(l)
var w=new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))","i")}else{v=v.concat(o),k=k.concat(a)
w=new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var E=t(v),_=t(k)
function z(e,t){if(e.sol()&&"py"==c(t).type){var n=c(t).offset
if(e.eatSpace()){var r=e.indentation()
return r>n?S(e,t,"py"):r<n&&T(e,t)&&(t.errorToken=!0),null}var i=R(e,t)
return n>0&&T(e,t)&&(i+=" "+f),i}return R(e,t)}function R(e,t){if(e.eatSpace())return null
if("#"==e.peek())return e.skipToEnd(),"comment"
if(e.match(/^[0-9\.]/,!1)){var r=!1
if(e.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)&&(r=!0),e.match(/^\d+\.\d*/)&&(r=!0),e.match(/^\.\d+/)&&(r=!0),r)return e.eat(/J/i),"number"
var i=!1
if(e.match(/^0x[0-9a-f]+/i)&&(i=!0),e.match(/^0b[01]+/i)&&(i=!0),e.match(/^0o[0-7]+/i)&&(i=!0),e.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(e.eat(/J/i),i=!0),e.match(/^0(?![\dx])/i)&&(i=!0),i)return e.eat(/L/i),"number"}return e.match(w)?(t.tokenize=function(e){for(;"rub".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1)
var t=1==e.length,n="string"
function r(r,i){for(;!r.eol();)if(r.eatWhile(/[^'"\\]/),r.eat("\\")){if(r.next(),t&&r.eol())return n}else{if(r.match(e))return i.tokenize=z,n
r.eat(/['"]/)}if(t){if(u.singleLineStringErrors)return f
i.tokenize=z}return n}return r.isString=!0,r}(e.current()),t.tokenize(e,t)):e.match(y)||e.match(h)?null:e.match(m)||e.match(b)||e.match(n)?"operator":e.match(d)?null:e.match(E)?"keyword":e.match(_)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(g)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),f)}function S(e,t,n){var r,i=null
if("py"==n)for(;"py"!=c(t).type;)t.scopes.pop()
r=c(t).offset+("py"==n?p.indentUnit:x),"py"==n||e.match(/^(\s|#.*)*$/,!1)||(i=e.column()+1),t.scopes.push({offset:r,type:n,align:i})}function T(e,t){for(var n=e.indentation();c(t).offset>n;){if("py"!=c(t).type)return!0
t.scopes.pop()}return c(t).offset!=n}return{startState:function(e){return{tokenize:z,scopes:[{offset:e||0,type:"py",align:null}],lastStyle:null,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.errorToken
n&&(t.errorToken=!1)
var r=function(e,t){var n=t.tokenize(e,t),r=e.current()
if("."==r)return null==(n=e.match(g,!1)?null:f)&&"meta"==t.lastStyle&&(n="meta"),n
if("@"==r)return u.version&&3==parseInt(u.version,10)?e.match(g,!1)?"meta":"operator":e.match(g,!1)?"meta":f
"variable"!=n&&"builtin"!=n||"meta"!=t.lastStyle||(n="meta"),"pass"!=r&&"return"!=r||(t.dedent+=1),"lambda"==r&&(t.lambda=!0),":"!=r||t.lambda||"py"!=c(t).type||S(e,t,"py")
var i=1==r.length?"[({".indexOf(r):-1
if(-1!=i&&S(e,t,"])}".slice(i,i+1)),-1!=(i="])}".indexOf(r))){if(c(t).type!=r)return f
t.scopes.pop()}return t.dedent>0&&e.eol()&&"py"==c(t).type&&(t.scopes.length>1&&t.scopes.pop(),t.dedent-=1),n}(e,t)
t.lastStyle=r
var i=e.current()
return i&&r&&(t.lastToken=i),e.eol()&&t.lambda&&(t.lambda=!1),n?r+" "+f:r},indent:function(t,n){if(t.tokenize!=z)return t.tokenize.isString?e.Pass:0
var r=c(t),i=n&&n.charAt(0)==r.type
return null!=r.align?r.align-(i?1:0):i&&t.scopes.length>1?t.scopes[t.scopes.length-2].offset:r.offset},lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-python","python")
var p
e.defineMIME("text/x-cython",{name:"python",extra_keywords:(p="by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE",p.split(" "))})})
