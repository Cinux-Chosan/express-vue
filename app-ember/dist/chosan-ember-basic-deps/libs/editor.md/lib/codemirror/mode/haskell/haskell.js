(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("haskell",function(e,r){function t(e,r,t){return r(t),t(e,r)}var n=/[a-z_]/,a=/[A-Z]/,i=/\d/,o=/[0-9A-Fa-f]/,l=/[0-7]/,u=/[a-z_A-Z0-9'\xa1-\uffff]/,f=/[-!#$%&*+.\/<=>?@\\^|~:]/,s=/[(),;[\]`{}]/,c=/[ \t\v\f]/
function d(e,r){if(e.eatWhile(c))return null
var h=e.next()
if(s.test(h)){if("{"==h&&e.eat("-")){var p="comment"
return e.eat("#")&&(p="meta"),t(e,r,function e(r,t){if(0==t)return d
return function(n,a){for(var i=t;!n.eol();){var o=n.next()
if("{"==o&&n.eat("-"))++i
else if("-"==o&&n.eat("}")&&0==--i)return a(d),r}return a(e(r,i)),r}}(p,1))}return null}if("'"==h)return e.eat("\\"),e.next(),e.eat("'")?"string":"error"
if('"'==h)return t(e,r,m)
if(a.test(h))return e.eatWhile(u),e.eat(".")?"qualifier":"variable-2"
if(n.test(h))return e.eatWhile(u),"variable"
if(i.test(h)){if("0"==h){if(e.eat(/[xX]/))return e.eatWhile(o),"integer"
if(e.eat(/[oO]/))return e.eatWhile(l),"number"}e.eatWhile(i)
p="number"
return e.match(/^\.\d+/)&&(p="number"),e.eat(/[eE]/)&&(p="number",e.eat(/[-+]/),e.eatWhile(i)),p}if("."==h&&e.eat("."))return"keyword"
if(f.test(h)){if("-"==h&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(f)))return e.skipToEnd(),"comment"
p="variable"
return":"==h&&(p="variable-2"),e.eatWhile(f),p}return"error"}function m(e,r){for(;!e.eol();){var t=e.next()
if('"'==t)return r(d),"string"
if("\\"==t){if(e.eol()||e.eat(c))return r(h),"string"
e.eat("&")||e.next()}}return r(d),"error"}function h(e,r){return e.eat("\\")?t(e,r,m):(e.next(),r(d),"error")}var p=function(){var e={}
function t(r){return function(){for(var t=0;t<arguments.length;t++)e[arguments[t]]=r}}t("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),t("keyword")("..",":","::","=","\\",'"',"<-","->","@","~","=>"),t("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<=","=<<","==",">",">=",">>",">>=","^","^^","||","*","**"),t("builtin")("Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),t("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3")
var n=r.overrideKeywords
if(n)for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a])
return e}()
return{startState:function(){return{f:d}},copyState:function(e){return{f:e.f}},token:function(e,r){var t=r.f(e,function(e){r.f=e}),n=e.current()
return p.hasOwnProperty(n)?p[n]:t},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}}),e.defineMIME("text/x-haskell","haskell")})
