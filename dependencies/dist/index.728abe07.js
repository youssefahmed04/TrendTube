var t,r,e,n,o,i,a,u,s,c,f,l,h,v,p,d,g,y,b,m,w,S,A,x,E,O,T,I,R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function j(t,r,e,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){e(t);return}u.done?r(s):Promise.resolve(s).then(n,o)}function P(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function a(t){j(i,n,o,a,u,"next",t)}function u(t){j(i,n,o,a,u,"throw",t)}a(void 0)})}}/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */function M(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function L(t,r){var e,n,o,i,a=function(t){return function(r){return u([t,r])}},u=function(a){if(e)throw TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(e=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=r.call(t,s)}catch(t){a=[6,t],n=0}finally{e=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}},s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i}"function"==typeof SuppressedError&&SuppressedError;var k={},C={},N=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
C=N("object"==typeof globalThis&&globalThis)||N("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
N("object"==typeof self&&self)||N("object"==typeof R&&R)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||C||Function("return this")();var U={},F={};// Detect IE8's incomplete defineProperty implementation
U=!(F=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var _={},D={};D=!F(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var B=Function.prototype.call;_=D?B.bind(B):function(){return B.apply(B,arguments)};var z={}.propertyIsEnumerable,q=Object.getOwnPropertyDescriptor;a1=q&&!z.call({1:2},1)?function(t){var r=q(this,t);return!!r&&r.enumerable}:z;var G={};G=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}};var W={},H={},V={},$=Function.prototype,Y=$.call,J=D&&$.bind.bind(Y,Y),K={},X=(V=D?J:function(t){return function(){return Y.apply(t,arguments)}})({}.toString),Q=V("".slice);K=function(t){return Q(X(t),8,-1)};var Z=Object,tt=V("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
H=F(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!Z("z").propertyIsEnumerable(0)})?function(t){return"String"===K(t)?tt(t,""):Z(t)}:Z;var tr={},te={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
te=function(t){return null==t};var tn=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
tr=function(t){if(te(t))throw tn("Can't call method on "+t);return t},W=function(t){return H(tr(t))};var to={},ti={},ta={},tu={},ts={},tc="object"==typeof document&&document.all,tf=(ts={all:tc,IS_HTMLDDA:void 0===tc&&void 0!==tc}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
tu=ts.IS_HTMLDDA?function(t){return"function"==typeof t||t===tf}:function(t){return"function"==typeof t};var tl=ts.all;ta=ts.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:tu(t)||t===tl}:function(t){return"object"==typeof t?null!==t:tu(t)};var th={},tv={};tv=function(t,r){var e;return arguments.length<2?(e=C[t],tu(e)?e:void 0):C[t]&&C[t][r]};var tp={};tp=V({}.isPrototypeOf);var td={},tg={},ty={},tb={};tb="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tm=C.process,tw=C.Deno,tS=tm&&tm.versions||tw&&tw.version,tA=tS&&tS.v8;tA&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(a5=(a2=tA.split("."))[0]>0&&a2[0]<4?1:+(a2[0]+a2[1])),!a5&&tb&&(!(a2=tb.match(/Edge\/(\d+)/))||a2[1]>=74)&&(a2=tb.match(/Chrome\/(\d+)/))&&(a5=+a2[1]),ty=a5;var tx=C.String;td=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tg=!!Object.getOwnPropertySymbols&&!F(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tx(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ty&&ty<41}))&&!Symbol.sham&&"symbol"==M(Symbol.iterator);var tE=Object;th=td?function(t){return(void 0===t?"undefined":M(t))=="symbol"}:function(t){var r=tv("Symbol");return tu(r)&&tp(r.prototype,tE(t))};var tO={},tT={},tI={},tR=String;tI=function(t){try{return tR(t)}catch(t){return"Object"}};var tj=TypeError;// `Assert: IsCallable(argument) is true`
tT=function(t){if(tu(t))return t;throw tj(tI(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tO=function(t,r){var e=t[r];return te(e)?void 0:tT(e)};var tP={},tM=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tP=function(t,r){var e,n;if("string"===r&&tu(e=t.toString)&&!ta(n=_(e,t))||tu(e=t.valueOf)&&!ta(n=_(e,t))||"string"!==r&&tu(e=t.toString)&&!ta(n=_(e,t)))return n;throw tM("Can't convert object to primitive value")};var tL={},tk={},tC={};tC=!1;var tN={},tU={},tF=Object.defineProperty;tU=function(t,r){try{tF(C,t,{value:r,configurable:!0,writable:!0})}catch(e){C[t]=r}return r};var t_="__core-js_shared__";tN=C[t_]||tU(t_,{}),(tk=function(t,r){return tN[t]||(tN[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.32.2",mode:tC?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tD={},tB={},tz=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tB=function(t){return tz(tr(t))};var tq=V({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tD=Object.hasOwn||function(t,r){return tq(tB(t),r)};var tG={},tW=0,tH=Math.random(),tV=V(1..toString);tG=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tV(++tW+tH,36)};var t$=C.Symbol,tY=tk("wks"),tJ=td?t$.for||t$:t$&&t$.withoutSetter||tG,tK=TypeError,tX=(tL=function(t){return tD(tY,t)||(tY[t]=tg&&tD(t$,t)?t$[t]:tJ("Symbol."+t)),tY[t]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
ti=function(t,r){if(!ta(t)||th(t))return t;var e,n=tO(t,tX);if(n){if(void 0===r&&(r="default"),e=_(n,t,r),!ta(e)||th(e))return e;throw tK("Can't convert object to primitive value")}return void 0===r&&(r="number"),tP(t,r)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
to=function(t){var r=ti(t,"string");return th(r)?r:r+""};var tQ={},tZ={},t0=C.document,t1=ta(t0)&&ta(t0.createElement);tZ=function(t){return t1?t0.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tQ=!U&&!F(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tZ("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var t2=Object.getOwnPropertyDescriptor,t5=a0=U?t2:function(t,r){if(t=W(t),r=to(r),tQ)try{return t2(t,r)}catch(t){}if(tD(t,r))return G(!_(a1,t,r),t[r])},t4={},t6={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
t6=U&&F(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var t3={},t8=String,t7=TypeError;// `Assert: Type(argument) is Object`
t3=function(t){if(ta(t))return t;throw t7(t8(t)+" is not an object")};var t9=TypeError,rt=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,re="enumerable",rn="configurable",ro="writable";a4=U?t6?function(t,r,e){if(t3(t),r=to(r),t3(e),"function"==typeof t&&"prototype"===r&&"value"in e&&ro in e&&!e[ro]){var n=rr(t,r);n&&n[ro]&&(t[r]=e.value,e={configurable:rn in e?e[rn]:n[rn],enumerable:re in e?e[re]:n[re],writable:!1})}return rt(t,r,e)}:rt:function(t,r,e){if(t3(t),r=to(r),t3(e),tQ)try{return rt(t,r,e)}catch(t){}if("get"in e||"set"in e)throw t9("Accessors not supported");return"value"in e&&(t[r]=e.value),t},t4=U?function(t,r,e){return a4(t,r,G(1,e))}:function(t,r,e){return t[r]=e,t};var ri={},ra={},ru={},rs=Function.prototype,rc=U&&Object.getOwnPropertyDescriptor,rf=tD(rs,"name"),rl=rf&&(!U||U&&rc(rs,"name").configurable),rh=(ru={EXISTS:rf,PROPER:rf&&"something"===(function(){}).name,CONFIGURABLE:rl}).CONFIGURABLE,rv={},rp=V(Function.toString);tu(tN.inspectSource)||(tN.inspectSource=function(t){return rp(t)}),rv=tN.inspectSource;var rd={},rg={},ry=C.WeakMap;rg=tu(ry)&&/native code/.test(String(ry));var rb={},rm=tk("keys");rb=function(t){return rm[t]||(rm[t]=tG(t))};var rw={};rw={};var rS="Object already initialized",rA=C.TypeError,rx=C.WeakMap;if(rg||tN.state){var rE=tN.state||(tN.state=new rx);/* eslint-disable no-self-assign -- prototype methods protection */rE.get=rE.get,rE.has=rE.has,rE.set=rE.set,/* eslint-enable no-self-assign -- prototype methods protection */a6=function(t,r){if(rE.has(t))throw rA(rS);return r.facade=t,rE.set(t,r),r},a3=function(t){return rE.get(t)||{}},a8=function(t){return rE.has(t)}}else{var rO=rb("state");rw[rO]=!0,a6=function(t,r){if(tD(t,rO))throw rA(rS);return r.facade=t,t4(t,rO,r),r},a3=function(t){return tD(t,rO)?t[rO]:{}},a8=function(t){return tD(t,rO)}}var rT=(rd={set:a6,get:a3,has:a8,enforce:function(t){return a8(t)?a3(t):a6(t,{})},getterFor:function(t){return function(r){var e;if(!ta(r)||(e=a3(r)).type!==t)throw rA("Incompatible receiver, "+t+" required");return e}}}).enforce,rI=rd.get,rR=String,rj=Object.defineProperty,rP=V("".slice),rM=V("".replace),rL=V([].join),rk=U&&!F(function(){return 8!==rj(function(){},"length",{value:8}).length}),rC=String(String).split("String"),rN=ra=function(t,r,e){"Symbol("===rP(rR(r),0,7)&&(r="["+rM(rR(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!tD(t,"name")||rh&&t.name!==r)&&(U?rj(t,"name",{value:r,configurable:!0}):t.name=r),rk&&e&&tD(e,"arity")&&t.length!==e.arity&&rj(t,"length",{value:e.arity});try{e&&tD(e,"constructor")&&e.constructor?U&&rj(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=rT(t);return tD(n,"source")||(n.source=rL(rC,"string"==typeof r?r:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=rN(function(){return tu(this)&&rI(this).source||rv(this)},"toString"),ri=function(t,r,e,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:r;if(tu(e)&&ra(e,i,n),n.global)o?t[r]=e:tU(r,e);else{try{n.unsafe?t[r]&&(o=!0):delete t[r]}catch(t){}o?t[r]=e:a4(t,r,{value:e,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var rU={},rF={},r_={},rD={},rB={},rz={},rq={},rG=Math.ceil,rW=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
rq=Math.trunc||function(t){var r=+t;return(r>0?rW:rG)(r)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
rz=function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return r!=r||0===r?0:rq(r)};var rH=Math.max,rV=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
rB=function(t,r){var e=rz(t);return e<0?rH(e+r,0):rV(e,r)};var r$={},rY={},rJ=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
rY=function(t){return t>0?rJ(rz(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
r$=function(t){return rY(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var rK=function(t){return function(r,e,n){var o,i=W(r),a=r$(i),u=rB(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&e!=e){for(;a>u;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[u++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>u;u++)if((t||u in i)&&i[u]===e)return t||u||0;return!t&&-1}},rX=(rD={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:rK(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:rK(!1)}).indexOf,rQ=V([].push);r_=function(t,r){var e,n=W(t),o=0,i=[];for(e in n)!tD(rw,e)&&tD(n,e)&&rQ(i,e);// Don't enum bug & hidden keys
for(;r.length>o;)tD(n,e=r[o++])&&(~rX(i,e)||rQ(i,e));return i};var rZ={},r0=// IE8- don't enum bug keys
(rZ=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");a7=Object.getOwnPropertyNames||function(t){return r_(t,r0)},a9=Object.getOwnPropertySymbols;var r1=V([].concat);// all object keys, includes non-enumerable and symbols
rF=tv("Reflect","ownKeys")||function(t){var r=a7(t3(t)),e=a9;return e?r1(r,e(t)):r},rU=function(t,r,e){for(var n=rF(r),o=a4,i=a0,a=0;a<n.length;a++){var u=n[a];tD(t,u)||e&&tD(e,u)||o(t,u,i(r,u))}};var r2={},r5=/#|\.prototype\./,r4=function(t,r){var e=r3[r6(t)];return e===r7||e!==r8&&(tu(r)?F(r):!!r)},r6=r4.normalize=function(t){return String(t).replace(r5,".").toLowerCase()},r3=r4.data={},r8=r4.NATIVE="N",r7=r4.POLYFILL="P";r2=r4,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/k=function(t,r){var e,n,o,i,a,u=t.target,s=t.global,c=t.stat;if(e=s?C:c?C[u]||tU(u,{}):(C[u]||{}).prototype)for(n in r){// contained in target
if(i=r[n],o=t.dontCallGetSet?(a=t5(e,n))&&a.value:e[n],!r2(s?n:u+(c?".":"#")+n,t.forced)&&void 0!==o){if((void 0===i?"undefined":M(i))==(void 0===o?"undefined":M(o)))continue;rU(i,o)}(t.sham||o&&o.sham)&&t4(i,"sham",!0),ri(e,n,i,t)}};var r9={},et={},er={},ee=tL("toStringTag"),en={};en[ee]="z",er="[object z]"===String(en);var eo=tL("toStringTag"),ei=Object,ea="Arguments"===K(function(){return arguments}()),eu=function(t,r){try{return t[r]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
et=er?K:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=eu(r=ei(t),eo))?e:ea?K(r):"Object"===(n=K(r))&&tu(r.callee)?"Arguments":n};var es=String;r9=function(t){if("Symbol"===et(t))throw TypeError("Cannot convert a Symbol value to a string");return es(t)};var ec={},ef={};// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
ef=Object.keys||function(t){return r_(t,rZ)},ut=U&&!t6?Object.defineProperties:function(t,r){t3(t);for(var e,n=W(r),o=ef(r),i=o.length,a=0;i>a;)a4(t,e=o[a++],n[e]);return t};var el={};el=tv("document","documentElement");var eh="prototype",ev="script",ep=rb("IE_PROTO"),ed=function(){},eg=function(t){return"<"+ev+">"+t+"</"+ev+">"},ey=function(t){t.write(eg("")),t.close();var r=t.parentWindow.Object;return t=null,r},eb=function(){// Thrash, waste and sodomy: IE GC bug
var t,r=tZ("iframe");return r.style.display="none",el.appendChild(r),// https://github.com/zloirock/core-js/issues/475
r.src=String("java"+ev+":"),(t=r.contentWindow.document).open(),t.write(eg("document.F=Object")),t.close(),t.F},em=function(){try{ur=new ActiveXObject("htmlfile")}catch(t){}em="undefined"!=typeof document?document.domain&&ur?ey(ur)// old IE
:eb():ey(ur);// WSH
for(var t=rZ.length;t--;)delete em[eh][rZ[t]];return em()};rw[ep]=!0,// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
ec=Object.create||function(t,r){var e;return null!==t?(ed[eh]=t3(t),e=new ed,ed[eh]=null,// add "__proto__" for Object.getPrototypeOf polyfill
e[ep]=t):e=em(),void 0===r?e:ut(e,r)};var ew=a7,eS={},eA={};eA=function(t,r,e){var n=to(r);n in t?a4(t,n,G(0,e)):t[n]=e};var ex=Array,eE=Math.max;eS=function(t,r,e){for(var n=r$(t),o=rB(r,n),i=rB(void 0===e?n:e,n),a=ex(eE(i-o,0)),u=0;o<i;o++,u++)eA(a,u,t[o]);return a.length=u,a};var eO="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],eT=function(t){try{return ew(t)}catch(t){return eS(eO)}};ue=function(t){return eO&&"Window"===K(t)?eT(t):ew(W(t))};var eI={};eI=function(t,r,e){return e.get&&ra(e.get,r,{getter:!0}),e.set&&ra(e.set,r,{setter:!0}),a4(t,r,e)},un=tL;var eR={},ej={};ej=C;var eP=a4;eR=function(t){var r=ej.Symbol||(ej.Symbol={});tD(r,t)||eP(r,t,{value:un(t)})};var eM={};eM=function(){var t=tv("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,n=tL("toPrimitive");r&&!r[n]&&// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
// eslint-disable-next-line no-unused-vars -- required for .length
ri(r,n,function(t){return _(e,this)},{arity:1})};var eL={},ek=a4,eC=tL("toStringTag");eL=function(t,r,e){t&&!e&&(t=t.prototype),t&&!tD(t,eC)&&ek(t,eC,{configurable:!0,value:r})};var eN={},eU={},eF={},e_=(eF=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===K(t))return V(t)})(eF.bind);// optional / simple context binding
eU=function(t,r){return tT(t),void 0===r?t:D?e_(t,r):function(){return t.apply(r,arguments)}};var eD={},eB={},ez={};// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
ez=Array.isArray||function(t){return"Array"===K(t)};var eq={},eG=function(){},eW=[],eH=tv("Reflect","construct"),eV=/^\s*(?:class|function)\b/,e$=V(eV.exec),eY=!eV.exec(eG),eJ=function(t){if(!tu(t))return!1;try{return eH(eG,eW,t),!0}catch(t){return!1}},eK=function(t){if(!tu(t))return!1;switch(et(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{// we can't check .prototype since constructors produced by .bind haven't it
// `Function#toString` throws on some built-it function in some legacy engines
// (for example, `DOMQuad` and similar in FF41-)
return eY||!!e$(eV,rv(t))}catch(t){return!0}};eK.sham=!0,// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
eq=!eH||F(function(){var t;return eJ(eJ.call)||!eJ(Object)||!eJ(function(){t=!0})||t})?eK:eJ;var eX=tL("species"),eQ=Array;// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
eB=function(t){var r;return ez(t)&&(r=t.constructor,eq(r)&&(r===eQ||ez(r.prototype))?r=void 0:ta(r)&&null===(r=r[eX])&&(r=void 0)),void 0===r?eQ:r},// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
eD=function(t,r){return new(eB(t))(0===r?0:r)};var eZ=V([].push),e0=function(t){var r=1===t,e=2===t,n=3===t,o=4===t,i=6===t,a=7===t,u=5===t||i;return function(s,c,f,l){for(var h,v,p=tB(s),d=H(p),g=eU(c,f),y=r$(d),b=0,m=l||eD,w=r?m(s,y):e||a?m(s,0):void 0;y>b;b++)if((u||b in d)&&(v=g(h=d[b],b,p),t)){if(r)w[b]=v;// map
else if(v)switch(t){case 3:return!0;// some
case 5:return h;// find
case 6:return b;// findIndex
case 2:eZ(w,h);// filter
}else switch(t){case 4:return!1;// every
case 7:eZ(w,h);// filterReject
}}return i?-1:n||o?o:w}},e1=(eN={// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
forEach:e0(0),// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
map:e0(1),// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
filter:e0(2),// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
some:e0(3),// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
every:e0(4),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
find:e0(5),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findIndex
findIndex:e0(6),// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
filterReject:e0(7)}).forEach,e2=rb("hidden"),e5="Symbol",e4="prototype",e6=rd.set,e3=rd.getterFor(e5),e8=Object[e4],e7=C.Symbol,e9=e7&&e7[e4],nt=C.TypeError,nr=C.QObject,ne=a0,nn=a4,no=ue,ni=a1,na=V([].push),nu=tk("symbols"),ns=tk("op-symbols"),nc=tk("wks"),nf=!nr||!nr[e4]||!nr[e4].findChild,nl=U&&F(function(){return 7!==ec(nn({},"a",{get:function(){return nn(this,"a",{value:7}).a}})).a})?function(t,r,e){var n=ne(e8,r);n&&delete e8[r],nn(t,r,e),n&&t!==e8&&nn(e8,r,n)}:nn,nh=function(t,r){var e=nu[t]=ec(e9);return e6(e,{type:e5,tag:t,description:r}),U||(e.description=r),e},nv=function(t,r,e){t===e8&&nv(ns,r,e),t3(t);var n=to(r);return(t3(e),tD(nu,n))?(e.enumerable?(tD(t,e2)&&t[e2][n]&&(t[e2][n]=!1),e=ec(e,{enumerable:G(0,!1)})):(tD(t,e2)||nn(t,e2,G(1,{})),t[e2][n]=!0),nl(t,n,e)):nn(t,n,e)},np=function(t,r){t3(t);var e=W(r);return e1(ef(e).concat(nb(e)),function(r){(!U||_(nd,e,r))&&nv(t,r,e[r])}),t},nd=function(t){var r=to(t),e=_(ni,this,r);return(!(this===e8&&tD(nu,r))||!!tD(ns,r))&&(!(e||!tD(this,r)||!tD(nu,r)||tD(this,e2)&&this[e2][r])||e)},ng=function(t,r){var e=W(t),n=to(r);if(!(e===e8&&tD(nu,n))||tD(ns,n)){var o=ne(e,n);return o&&tD(nu,n)&&!(tD(e,e2)&&e[e2][n])&&(o.enumerable=!0),o}},ny=function(t){var r=no(W(t)),e=[];return e1(r,function(t){tD(nu,t)||tD(rw,t)||na(e,t)}),e},nb=function(t){var r=t===e8,e=no(r?ns:W(t)),n=[];return e1(e,function(t){tD(nu,t)&&(!r||tD(e8,t))&&na(n,nu[t])}),n};tg||(e9=(e7=function(){if(tp(e9,this))throw nt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?r9(arguments[0]):void 0,r=tG(t),e=function(t){this===e8&&_(e,ns,t),tD(this,e2)&&tD(this[e2],r)&&(this[e2][r]=!1),nl(this,r,G(1,t))};return U&&nf&&nl(e8,r,{configurable:!0,set:e}),nh(r,t)})[e4],ri(e9,"toString",function(){return e3(this).tag}),ri(e7,"withoutSetter",function(t){return nh(tG(t),t)}),a1=nd,a4=nv,ut=np,a0=ng,a7=ue=ny,a9=nb,un=function(t){return nh(tL(t),t)},U&&(// https://github.com/tc39/proposal-Symbol-description
eI(e9,"description",{configurable:!0,get:function(){return e3(this).description}}),tC||ri(e8,"propertyIsEnumerable",nd,{unsafe:!0}))),k({global:!0,constructor:!0,wrap:!0,forced:!tg,sham:!tg},{Symbol:e7}),e1(ef(nc),function(t){eR(t)}),k({target:e5,stat:!0,forced:!tg},{useSetter:function(){nf=!0},useSimple:function(){nf=!1}}),k({target:"Object",stat:!0,forced:!tg,sham:!U},{// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
create:function(t,r){return void 0===r?ec(t):np(ec(t),r)},// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
defineProperty:nv,// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
defineProperties:np,// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
getOwnPropertyDescriptor:ng}),k({target:"Object",stat:!0,forced:!tg},{// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
getOwnPropertyNames:ny}),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
eM(),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
eL(e7,e5),rw[e2]=!0;var nm={};/* eslint-disable es/no-symbol -- safe */nm=tg&&!!Symbol.for&&!!Symbol.keyFor;var nw=tk("string-to-symbol-registry"),nS=tk("symbol-to-string-registry");// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
k({target:"Symbol",stat:!0,forced:!nm},{for:function(t){var r=r9(t);if(tD(nw,r))return nw[r];var e=tv("Symbol")(r);return nw[r]=e,nS[e]=r,e}});var nA=tk("symbol-to-string-registry");// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
k({target:"Symbol",stat:!0,forced:!nm},{keyFor:function(t){if(!th(t))throw TypeError(tI(t)+" is not a symbol");if(tD(nA,t))return nA[t]}});var nx={},nE=Function.prototype,nO=nE.apply,nT=nE.call;// eslint-disable-next-line es/no-reflect -- safe
nx="object"==typeof Reflect&&Reflect.apply||(D?nT.bind(nO):function(){return nT.apply(nO,arguments)});var nI={};nI=V([].slice);var nR={},nj=V([].push);nR=function(t){if(tu(t))return t;if(ez(t)){for(var r=t.length,e=[],n=0;n<r;n++){var o=t[n];"string"==typeof o?nj(e,o):("number"==typeof o||"Number"===K(o)||"String"===K(o))&&nj(e,r9(o))}var i=e.length,a=!0;return function(t,r){if(a)return a=!1,r;if(ez(this))return r;for(var n=0;n<i;n++)if(e[n]===t)return r}}};var nP=String,nM=tv("JSON","stringify"),nL=V(/./.exec),nk=V("".charAt),nC=V("".charCodeAt),nN=V("".replace),nU=V(1..toString),nF=/[\uD800-\uDFFF]/g,n_=/^[\uD800-\uDBFF]$/,nD=/^[\uDC00-\uDFFF]$/,nB=!tg||F(function(){var t=tv("Symbol")("stringify detection");// MS Edge converts symbol values to JSON as {}
return"[null]"!==nM([t])||"{}"!==nM({a:t})||"{}"!==nM(Object(t))}),nz=F(function(){return'"\udf06\ud834"'!==nM("\uDF06\uD834")||'"\udead"'!==nM("\uDEAD")}),nq=function(t,r){var e=nI(arguments),n=nR(r);if(!(!tu(n)&&(void 0===t||th(t))))return e[1]=function(t,r){if(tu(n)&&(r=_(n,this,nP(t),r)),!th(r))return r},nx(nM,null,e);// IE8 returns string on undefined
},nG=function(t,r,e){var n=nk(e,r-1),o=nk(e,r+1);return nL(n_,t)&&!nL(nD,o)||nL(nD,t)&&!nL(n_,n)?"\\u"+nU(nC(t,0),16):t};nM&&// https://tc39.es/ecma262/#sec-json.stringify
k({target:"JSON",stat:!0,arity:3,forced:nB||nz},{// eslint-disable-next-line no-unused-vars -- required for `.length`
stringify:function(t,r,e){var n=nI(arguments),o=nx(nB?nq:nM,null,n);return nz&&"string"==typeof o?nN(o,nF,nG):o}});// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var nW=!tg||F(function(){a9(1)});// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
k({target:"Object",stat:!0,forced:nW},{getOwnPropertySymbols:function(t){var r=a9;return r?r(tB(t)):[]}});var nH=C.Symbol,nV=nH&&nH.prototype;if(U&&tu(nH)&&(!("description"in nV)||// Safari 12 bug
void 0!==nH().description)){var n$={},nY=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:r9(arguments[0]),r=tp(nV,this)?new nH(t):void 0===t?nH():nH(t);return""===t&&(n$[r]=!0),r};rU(nY,nH),nY.prototype=nV,nV.constructor=nY;var nJ="Symbol(description detection)"===String(nH("description detection")),nK=V(nV.valueOf),nX=V(nV.toString),nQ=/^Symbol\((.*)\)[^)]+$/,nZ=V("".replace),n0=V("".slice);eI(nV,"description",{configurable:!0,get:function(){var t=nK(this);if(tD(n$,t))return"";var r=nX(t),e=nJ?n0(r,7,-1):nZ(r,nQ,"$1");return""===e?void 0:e}}),k({global:!0,constructor:!0,forced:!0},{Symbol:nY})}// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
eR("asyncIterator"),// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
eR("hasInstance"),// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
eR("isConcatSpreadable"),// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
eR("iterator"),// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
eR("match"),// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
eR("replace"),// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
eR("search"),// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
eR("species"),// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
eR("split"),// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
eR("toPrimitive"),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
eM(),// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
eR("toStringTag"),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
eL(tv("Symbol"),"Symbol"),// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
eR("unscopables");var n1={},n2=TypeError;n1=function(t){if(t>9007199254740991)throw n2("Maximum allowed index exceeded");return t};var n5={},n4=tL("species");n5=function(t){// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return ty>=51||!F(function(){var r=[];return(r.constructor={})[n4]=function(){return{foo:1}},1!==r[t](Boolean).foo})};var n6=tL("isConcatSpreadable"),n3=ty>=51||!F(function(){var t=[];return t[n6]=!1,t.concat()[0]!==t}),n8=function(t){if(!ta(t))return!1;var r=t[n6];return void 0!==r?!!r:ez(t)},n7=!n3||!n5("concat");// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
k({target:"Array",proto:!0,arity:1,forced:n7},{// eslint-disable-next-line no-unused-vars -- required for `.length`
concat:function(t){var r,e,n,o,i,a=tB(this),u=eD(a,0),s=0;for(r=-1,n=arguments.length;r<n;r++)if(i=-1===r?a:arguments[r],n8(i))for(o=r$(i),n1(s+o),e=0;e<o;e++,s++)e in i&&eA(u,s,i[e]);else n1(s+1),eA(u,s++,i);return u.length=s,u}});var n9={},ot={},or=TypeError;ot=function(t,r){if(!delete t[r])throw or("Cannot delete property "+tI(r)+" of "+tI(t))};var oe=Math.min;// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
n9=[].copyWithin||function(t/* = 0 */,r/* = 0, end = @length */){var e=tB(this),n=r$(e),o=rB(t,n),i=rB(r,n),a=arguments.length>2?arguments[2]:void 0,u=oe((void 0===a?n:rB(a,n))-i,n-o),s=1;for(i<o&&o<i+u&&(s=-1,i+=u-1,o+=u-1);u-- >0;)i in e?e[o]=e[i]:ot(e,o),o+=s,i+=s;return e};var on={},oo=a4,oi=tL("unscopables"),oa=Array.prototype;void 0===oa[oi]&&oo(oa,oi,{configurable:!0,value:ec(null)}),// add a key to Array.prototype[@@unscopables]
on=function(t){oa[oi][t]=!0},// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
k({target:"Array",proto:!0},{copyWithin:n9}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
on("copyWithin");var ou=eN.every,os={},oc=(os=function(t,r){var e=[][t];return!!e&&F(function(){// eslint-disable-next-line no-useless-call -- required for testing
e.call(null,r||function(){return 1},1)})})("every");// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
k({target:"Array",proto:!0,forced:!oc},{every:function(t/* , thisArg */){return ou(this,t,arguments.length>1?arguments[1]:void 0)}});var of={};// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
k({target:"Array",proto:!0},{fill:// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
of=function(t/* , start = 0, end = @length */){for(var r=tB(this),e=r$(r),n=arguments.length,o=rB(n>1?arguments[1]:void 0,e),i=n>2?arguments[2]:void 0,a=void 0===i?e:rB(i,e);a>o;)r[o++]=t;return r}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
on("fill");var ol=eN.filter,oh=n5("filter");// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
k({target:"Array",proto:!0,forced:!oh},{filter:function(t/* , thisArg */){return ol(this,t,arguments.length>1?arguments[1]:void 0)}});var ov=eN.find,op="find",od=!0;op in[]&&[,][op](function(){od=!1}),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
k({target:"Array",proto:!0,forced:od},{find:function(t/* , that = undefined */){return ov(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
on(op);var og=eN.findIndex,oy="findIndex",ob=!0;oy in[]&&[,][oy](function(){ob=!1}),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
k({target:"Array",proto:!0,forced:ob},{findIndex:function(t/* , that = undefined */){return og(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
on(oy);var om={},ow=function(t,r,e,n,o,i,a,u){for(var s,c,f=o,l=0,h=!!a&&eU(a,u);l<n;)l in e&&(s=h?h(e[l],l,r):e[l],i>0&&ez(s)?(c=r$(s),f=ow(t,r,s,c,f,i-1)-1):(n1(f+1),t[f]=s),f++),l++;return f};om=ow,// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
k({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,r=tB(this),e=r$(r),n=eD(r,0);return n.length=om(n,r,r,e,0,void 0===t?1:rz(t)),n}}),// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
k({target:"Array",proto:!0},{flatMap:function(t/* , thisArg */){var r,e=tB(this),n=r$(e);return tT(t),(r=eD(e,0)).length=om(r,e,e,n,0,1,t,arguments.length>1?arguments[1]:void 0),r}});var oS={},oA=eN.forEach;// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
oS=os("forEach")?[].forEach:function(t/* , thisArg */){return oA(this,t,arguments.length>1?arguments[1]:void 0);// eslint-disable-next-line es/no-array-prototype-foreach -- safe
},// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
k({target:"Array",proto:!0,forced:[].forEach!==oS},{forEach:oS});var ox={},oE={},oO={};oO=function(t,r,e){var n,o;t3(t);try{if(!(n=tO(t,"return"))){if("throw"===r)throw e;return e}n=_(n,t)}catch(t){o=!0,n=t}if("throw"===r)throw e;if(o)throw n;return t3(n),e},// call something on iterator step with safe closing on error
oE=function(t,r,e,n){try{return n?r(t3(e)[0],e[1]):r(e)}catch(r){oO(t,"throw",r)}};var oT={},oI={};oI={};var oR=tL("iterator"),oj=Array.prototype;// check on default Array iterator
oT=function(t){return void 0!==t&&(oI.Array===t||oj[oR]===t)};var oP={},oM={},oL=tL("iterator");oM=function(t){if(!te(t))return tO(t,oL)||tO(t,"@@iterator")||oI[et(t)]};var ok=TypeError;oP=function(t,r){var e=arguments.length<2?oM(t):r;if(tT(e))return t3(_(e,t));throw ok(tI(t)+" is not iterable")};var oC=Array;// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
ox=function(t/* , mapfn = undefined, thisArg = undefined */){var r,e,n,o,i,a,u=tB(t),s=eq(this),c=arguments.length,f=c>1?arguments[1]:void 0,l=void 0!==f;l&&(f=eU(f,c>2?arguments[2]:void 0));var h=oM(u),v=0;// if the target is not iterable or it's an array with the default iterator - use a simple case
if(h&&!(this===oC&&oT(h)))for(i=(o=oP(u,h)).next,e=s?new this:[];!(n=_(i,o)).done;v++)a=l?oE(o,f,[n.value,v],!0):n.value,eA(e,v,a);else for(r=r$(u),e=s?new this(r):oC(r);r>v;v++)a=l?f(u[v],v):u[v],eA(e,v,a);return e.length=v,e};var oN={},oU=tL("iterator"),oF=!1;try{var o_=0,oD={next:function(){return{done:!!o_++}},return:function(){oF=!0}};oD[oU]=function(){return this},// eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
Array.from(oD,function(){throw 2})}catch(t){}var oB=!(oN=function(t,r){try{if(!r&&!oF)return!1}catch(t){return!1}// workaround of old WebKit + `eval` bug
var e=!1;try{var n={};n[oU]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(t){}return e})(function(t){// eslint-disable-next-line es/no-array-from -- required for testing
Array.from(t)});// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
k({target:"Array",stat:!0,forced:oB},{from:ox});var oz=rD.includes,oq=F(function(){// eslint-disable-next-line es/no-array-prototype-includes -- detection
return![,].includes()});// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
k({target:"Array",proto:!0,forced:oq},{includes:function(t/* , fromIndex = 0 */){return oz(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
on("includes");var oG=rD.indexOf,oW=eF([].indexOf),oH=!!oW&&1/oW([1],1,-0)<0,oV=oH||!os("indexOf");// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
k({target:"Array",proto:!0,forced:oV},{indexOf:function(t/* , fromIndex = 0 */){var r=arguments.length>1?arguments[1]:void 0;return oH?oW(this,t,r)||0:oG(this,t,r)}}),// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
k({target:"Array",stat:!0},{isArray:ez});var o$={},oY=a4,oJ={},oK={},oX={},oQ={},oZ={};oZ=!F(function(){var t=function(){};// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype});var o0=rb("IE_PROTO"),o1=Object,o2=o1.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
oQ=oZ?o1.getPrototypeOf:function(t){var r=tB(t);if(tD(r,o0))return r[o0];var e=r.constructor;return tu(e)&&r instanceof e?e.prototype:r instanceof o1?o2:null};var o5=tL("iterator"),o4=!1;[].keys&&("next"in(ua=[].keys())?(ui=oQ(oQ(ua)))!==Object.prototype&&(uo=ui):o4=!0),!ta(uo)||F(function(){var t={};// FF44- legacy iterators case
return uo[o5].call(t)!==t})?uo={}:tC&&(uo=ec(uo)),tu(uo[o5])||ri(uo,o5,function(){return this});var o6=(oX={IteratorPrototype:uo,BUGGY_SAFARI_ITERATORS:o4}).IteratorPrototype,o3=function(){return this};oK=function(t,r,e,n){var o=r+" Iterator";return t.prototype=ec(o6,{next:G(+!n,e)}),eL(t,o,!1,!0),oI[o]=o3,t};var o8={},o7={};o7=function(t,r,e){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return V(tT(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}};var o9={},it=String,ir=TypeError;o9=function(t){if("object"==typeof t||tu(t))return t;throw ir("Can't set "+it(t)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
o8=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=o7(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return t3(e),o9(n),r?t(e,n):e.__proto__=n,e}}():void 0);var ie=ru.PROPER,io=ru.CONFIGURABLE,ii=oX.IteratorPrototype,ia=oX.BUGGY_SAFARI_ITERATORS,iu=tL("iterator"),is="keys",ic="values",il="entries",ih=function(){return this};oJ=function(t,r,e,n,o,i,a){oK(e,r,n);var u,s,c,f=function(t){if(t===o&&d)return d;if(!ia&&t&&t in v)return v[t];switch(t){case is:case ic:case il:return function(){return new e(this,t)}}return function(){return new e(this)}},l=r+" Iterator",h=!1,v=t.prototype,p=v[iu]||v["@@iterator"]||o&&v[o],d=!ia&&p||f(o),g="Array"===r&&v.entries||p;// export additional methods
if(g&&(u=oQ(g.call(new t)))!==Object.prototype&&u.next&&(tC||oQ(u)===ii||(o8?o8(u,ii):tu(u[iu])||ri(u,iu,ih)),// Set @@toStringTag to native iterators
eL(u,l,!0,!0),tC&&(oI[l]=ih)),ie&&o===ic&&p&&p.name!==ic&&(!tC&&io?t4(v,"name",ic):(h=!0,d=function(){return _(p,this)})),o){if(s={values:f(ic),keys:i?d:f(is),entries:f(il)},a)for(c in s)!ia&&!h&&c in v||ri(v,c,s[c]);else k({target:r,proto:!0,forced:ia||h},s)}return(!tC||a)&&v[iu]!==d&&ri(v,iu,d,{name:o}),oI[r]=d,s};var iv={};// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
iv=function(t,r){return{value:t,done:r}};var ip="Array Iterator",id=rd.set,ig=rd.getterFor(ip);// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
o$=oJ(Array,"Array",function(t,r){id(this,{type:ip,target:W(t),index:0,kind:r// kind
});// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
},function(){var t=ig(this),r=t.target,e=t.kind,n=t.index++;if(!r||n>=r.length)return t.target=void 0,iv(void 0,!0);switch(e){case"keys":return iv(n,!1);case"values":return iv(r[n],!1)}return iv([n,r[n]],!1)},"values");// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var iy=oI.Arguments=oI.Array;// V8 ~ Chrome 45- bug
if(// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
on("keys"),on("values"),on("entries"),!tC&&U&&"values"!==iy.name)try{oY(iy,"name",{value:"values"})}catch(t){}var ib=V([].join),im=H!==Object||!os("join",",");// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
k({target:"Array",proto:!0,forced:im},{join:function(t){return ib(W(this),void 0===t?",":t)}});var iw={},iS=Math.min,iA=[].lastIndexOf,ix=!!iA&&1/[1].lastIndexOf(1,-0)<0,iE=os("lastIndexOf");// `Array.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
k({target:"Array",proto:!0,forced:// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
(iw=ix||!iE?function(t/* , fromIndex = @[*-1] */){// convert -0 to +0
if(ix)return nx(iA,this,arguments)||0;var r=W(this),e=r$(r),n=e-1;for(arguments.length>1&&(n=iS(n,rz(arguments[1]))),n<0&&(n=e+n);n>=0;n--)if(n in r&&r[n]===t)return n||0;return -1}:iA)!==[].lastIndexOf},{lastIndexOf:iw});var iO=eN.map,iT=n5("map");// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
k({target:"Array",proto:!0,forced:!iT},{map:function(t/* , thisArg */){return iO(this,t,arguments.length>1?arguments[1]:void 0)}});var iI=Array,iR=F(function(){var t=function(){};// eslint-disable-next-line es/no-array-of -- safe
return!(iI.of.call(t) instanceof t)});// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
k({target:"Array",stat:!0,forced:iR},{of:function(){for(var t=0,r=arguments.length,e=new(eq(this)?this:iI)(r);r>t;)eA(e,t,arguments[t++]);return e.length=r,e}});var ij={},iP=TypeError,iM=function(t){return function(r,e,n,o){tT(e);var i=tB(r),a=H(i),u=r$(i),s=t?u-1:0,c=t?-1:1;if(n<2)for(;;){if(s in a){o=a[s],s+=c;break}if(s+=c,t?s<0:u<=s)throw iP("Reduce of empty array with no initial value")}for(;t?s>=0:u>s;s+=c)s in a&&(o=e(o,a[s],s,i));return o}},iL=(ij={// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
left:iM(!1),// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
right:iM(!0)}).left,ik={},iC=!(ik="process"===K(C.process))&&ty>79&&ty<83||!os("reduce");// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
k({target:"Array",proto:!0,forced:iC},{reduce:function(t/* , initialValue */){var r=arguments.length;return iL(this,t,r,r>1?arguments[1]:void 0)}});var iN=ij.right,iU=!ik&&ty>79&&ty<83||!os("reduceRight");// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
k({target:"Array",proto:!0,forced:iU},{reduceRight:function(t/* , initialValue */){return iN(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}});var iF=V([].reverse),i_=[1,2];// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
k({target:"Array",proto:!0,forced:String(i_)===String(i_.reverse())},{reverse:function(){return ez(this)&&(this.length=this.length),iF(this)}});var iD=n5("slice"),iB=tL("species"),iz=Array,iq=Math.max;// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
k({target:"Array",proto:!0,forced:!iD},{slice:function(t,r){var e,n,o,i=W(this),a=r$(i),u=rB(t,a),s=rB(void 0===r?a:r,a);if(ez(i)&&(e=i.constructor,eq(e)&&(e===iz||ez(e.prototype))?e=void 0:ta(e)&&null===(e=e[iB])&&(e=void 0),e===iz||void 0===e))return nI(i,u,s);for(o=0,n=new(void 0===e?iz:e)(iq(s-u,0));u<s;u++,o++)u in i&&eA(n,o,i[u]);return n.length=o,n}});var iG=eN.some,iW=os("some");// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
k({target:"Array",proto:!0,forced:!iW},{some:function(t/* , thisArg */){return iG(this,t,arguments.length>1?arguments[1]:void 0)}});var iH={},iV=Math.floor,i$=function(t,r){var e=t.length,n=iV(e/2);return e<8?iY(t,r):iJ(t,i$(eS(t,0,n),r),i$(eS(t,n),r),r)},iY=function(t,r){for(var e,n,o=t.length,i=1;i<o;){for(n=i,e=t[i];n&&r(t[n-1],e)>0;)t[n]=t[--n];n!==i++&&(t[n]=e)}return t},iJ=function(t,r,e,n){for(var o=r.length,i=e.length,a=0,u=0;a<o||u<i;)t[a+u]=a<o&&u<i?0>=n(r[a],e[u])?r[a++]:e[u++]:a<o?r[a++]:e[u++];return t};iH=i$;var iK={},iX=tb.match(/firefox\/(\d+)/i);iK=!!iX&&+iX[1];var iQ={};iQ=/MSIE|Trident/.test(tb);var iZ={},i0=tb.match(/AppleWebKit\/(\d+)\./);iZ=!!i0&&+i0[1];var i1=[],i2=V(i1.sort),i5=V(i1.push),i4=F(function(){i1.sort(void 0)}),i6=F(function(){i1.sort(null)}),i3=os("sort"),i8=!F(function(){// feature detection can be too slow, so check engines versions
if(ty)return ty<70;if(!iK||!(iK>3)){if(iQ)return!0;if(iZ)return iZ<603;var t,r,e,n,o="";// generate an array with more 512 elements (Chakra and old V8 fails only in this case)
for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)i1.push({k:r+n,v:e})}for(i1.sort(function(t,r){return r.v-t.v}),n=0;n<i1.length;n++)r=i1[n].k.charAt(0),o.charAt(o.length-1)!==r&&(o+=r);return"DGBEFHACIJK"!==o}});// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
k({target:"Array",proto:!0,forced:i4||!i6||!i3||!i8},{sort:function(t){void 0!==t&&tT(t);var r,e,n=tB(this);if(i8)return void 0===t?i2(n):i2(n,t);var o=[],i=r$(n);for(e=0;e<i;e++)e in n&&i5(o,n[e]);for(iH(o,function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:r9(r)>r9(e)?1:-1}),r=r$(o),e=0;e<r;)n[e]=o[e++];for(;e<i;)ot(n,e++);return n}});var i7={},i9=tL("species");// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
(i7=function(t){var r=tv(t);U&&r&&!r[i9]&&eI(r,i9,{configurable:!0,get:function(){return this}})})("Array");var at={},ar=TypeError,ae=Object.getOwnPropertyDescriptor;at=U&&!function(){// makes no sense without proper strict mode support
if(void 0!==this)return!0;try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,r){if(ez(t)&&!ae(t,"length").writable)throw ar("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r};var an=n5("splice"),ao=Math.max,ai=Math.min;// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
k({target:"Array",proto:!0,forced:!an},{splice:function(t,r/* , ...items */){var e,n,o,i,a,u,s=tB(this),c=r$(s),f=rB(t,c),l=arguments.length;for(0===l?e=n=0:1===l?(e=0,n=c-f):(e=l-2,n=ai(ao(rz(r),0),c-f)),n1(c+e-n),o=eD(s,n),i=0;i<n;i++)(a=f+i)in s&&eA(o,i,s[a]);if(o.length=n,e<n){for(i=f;i<c-n;i++)a=i+n,u=i+e,a in s?s[u]=s[a]:ot(s,u);for(i=c;i>c-n+e;i--)ot(s,i-1)}else if(e>n)for(i=c-n;i>f;i--)a=i+n-1,u=i+e-1,a in s?s[u]=s[a]:ot(s,u);for(i=0;i<e;i++)s[i+f]=arguments[i+2];return at(s,c-n+e),o}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
on("flat"),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
on("flatMap");var aa={},au={};// eslint-disable-next-line es/no-typed-arrays -- safe
au="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var as={};as=function(t,r,e){for(var n in r)ri(t,n,r[n],e);return t};var ac={},af=TypeError;ac=function(t,r){if(tp(r,t))return t;throw af("Incorrect invocation")};var al={},ah=RangeError;// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
al=function(t){if(void 0===t)return 0;var r=rz(t),e=rY(r);if(r!==e)throw ah("Wrong length or index");return e};var av={},ap={};// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
ap=Math.sign||function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return 0===r||r!=r?r:r<0?-1:1};var ad=Array,ag=Math.abs,ay=Math.pow,ab=Math.floor,am=Math.log,aw=Math.LN2,aS=function(t){var r=rq(t),e=ag(t-r);return e>.5||.5===e&&r%2!=0?r+ap(t):r};av={pack:function(t,r,e){var n,o,i,a=ad(e),u=8*e-r-1,s=(1<<u)-1,c=s>>1,f=23===r?ay(2,-24)-ay(2,-77):0,l=t<0||0===t&&1/t<0?1:0,h=0;for((t=ag(t))!=t||t===1/0?(// eslint-disable-next-line no-self-compare -- NaN check
o=t!=t?1:0,n=s):(i=ay(2,-(n=ab(am(t)/aw))),t*i<1&&(n--,i*=2),n+c>=1?t+=f/i:t+=f*ay(2,1-c),t*i>=2&&(n++,i/=2),n+c>=s?(o=0,n=s):n+c>=1?(o=aS((t*i-1)*ay(2,r)),n+=c):(o=aS(t*ay(2,c-1)*ay(2,r)),n=0));r>=8;)a[h++]=255&o,o/=256,r-=8;for(n=n<<r|o,u+=r;u>0;)a[h++]=255&n,n/=256,u-=8;return a[--h]|=128*l,a},unpack:function(t,r){var e,n=t.length,o=8*n-r-1,i=(1<<o)-1,a=i>>1,u=o-7,s=n-1,c=t[s--],f=127&c;for(c>>=7;u>0;)f=256*f+t[s--],u-=8;for(e=f&(1<<-u)-1,f>>=-u,u+=r;u>0;)e=256*e+t[s--],u-=8;if(0===f)f=1-a;else{if(f===i)return e?NaN:c?-1/0:1/0;e+=ay(2,r),f-=a}return(c?-1:1)*e*ay(2,f-r)}};var aA=a7,ax=ru.PROPER,aE=ru.CONFIGURABLE,aO="ArrayBuffer",aT="DataView",aI="prototype",aR="Wrong index",aj=rd.getterFor(aO),aP=rd.getterFor(aT),aM=rd.set,aL=C[aO],ak=aL,aC=ak&&ak[aI],aN=C[aT],aU=aN&&aN[aI],aF=Object.prototype,a_=C.Array,aD=C.RangeError,aB=V(of),az=V([].reverse),aq=av.pack,aG=av.unpack,aW=function(t){return[255&t]},aH=function(t){return[255&t,t>>8&255]},aV=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},a$=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},aY=function(t){return aq(t,23,4)},aJ=function(t){return aq(t,52,8)},aK=function(t,r,e){eI(t[aI],r,{configurable:!0,get:function(){return e(this)[r]}})},aX=function(t,r,e,n){var o=aP(t),i=al(e);if(i+r>o.byteLength)throw aD(aR);var a=o.bytes,u=i+o.byteOffset,s=eS(a,u,u+r);return n?s:az(s)},aQ=function(t,r,e,n,o,i){var a=aP(t),u=al(e),s=n(+o),c=!!i;if(u+r>a.byteLength)throw aD(aR);for(var f=a.bytes,l=u+a.byteOffset,h=0;h<r;h++)f[l+h]=s[c?h:r-h-1]};if(au){var aZ=ax&&aL.name!==aO;/* eslint-disable no-new -- required for testing */if(!F(function(){aL(1)})||!F(function(){new aL(-1)})||F(function(){return new aL,new aL(1.5),new aL(NaN),1!==aL.length||aZ&&!aE})){/* eslint-enable no-new -- required for testing */(ak=function(t){return ac(this,aC),new aL(al(t))})[aI]=aC;for(var a0,a1,a2,a5,a4,a6,a3,a8,a7,a9,ut,ur,ue,un,uo,ui,ua,uu,us=aA(aL),uc=0;us.length>uc;)(uu=us[uc++])in ak||t4(ak,uu,aL[uu]);aC.constructor=ak}else aZ&&aE&&t4(aL,"name",aO);o8&&oQ(aU)!==aF&&o8(aU,aF);// iOS Safari 7.x bug
var uf=new aN(new ak(2)),ul=V(aU.setInt8);uf.setInt8(0,2147483648),uf.setInt8(1,2147483649),(uf.getInt8(0)||!uf.getInt8(1))&&as(aU,{setInt8:function(t,r){ul(this,t,r<<24>>24)},setUint8:function(t,r){ul(this,t,r<<24>>24)}},{unsafe:!0})}else aC=(ak=function(t){ac(this,aC);var r=al(t);aM(this,{type:aO,bytes:aB(a_(r),0),byteLength:r}),U||(this.byteLength=r,this.detached=!1)})[aI],aU=(aN=function(t,r,e){ac(this,aU),ac(t,aC);var n=aj(t),o=n.byteLength,i=rz(r);if(i<0||i>o)throw aD("Wrong offset");if(e=void 0===e?o-i:rY(e),i+e>o)throw aD("Wrong length");aM(this,{type:aT,buffer:t,byteLength:e,byteOffset:i,bytes:n.bytes}),U||(this.buffer=t,this.byteLength=e,this.byteOffset=i)})[aI],U&&(aK(ak,"byteLength",aj),aK(aN,"buffer",aP),aK(aN,"byteLength",aP),aK(aN,"byteOffset",aP)),as(aU,{getInt8:function(t){return aX(this,1,t)[0]<<24>>24},getUint8:function(t){return aX(this,1,t)[0]},getInt16:function(t/* , littleEndian */){var r=aX(this,2,t,arguments.length>1&&arguments[1]);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t/* , littleEndian */){var r=aX(this,2,t,arguments.length>1&&arguments[1]);return r[1]<<8|r[0]},getInt32:function(t/* , littleEndian */){return a$(aX(this,4,t,arguments.length>1&&arguments[1]))},getUint32:function(t/* , littleEndian */){return a$(aX(this,4,t,arguments.length>1&&arguments[1]))>>>0},getFloat32:function(t/* , littleEndian */){return aG(aX(this,4,t,arguments.length>1&&arguments[1]),23)},getFloat64:function(t/* , littleEndian */){return aG(aX(this,8,t,arguments.length>1&&arguments[1]),52)},setInt8:function(t,r){aQ(this,1,t,aW,r)},setUint8:function(t,r){aQ(this,1,t,aW,r)},setInt16:function(t,r/* , littleEndian */){aQ(this,2,t,aH,r,arguments.length>2&&arguments[2])},setUint16:function(t,r/* , littleEndian */){aQ(this,2,t,aH,r,arguments.length>2&&arguments[2])},setInt32:function(t,r/* , littleEndian */){aQ(this,4,t,aV,r,arguments.length>2&&arguments[2])},setUint32:function(t,r/* , littleEndian */){aQ(this,4,t,aV,r,arguments.length>2&&arguments[2])},setFloat32:function(t,r/* , littleEndian */){aQ(this,4,t,aY,r,arguments.length>2&&arguments[2])},setFloat64:function(t,r/* , littleEndian */){aQ(this,8,t,aJ,r,arguments.length>2&&arguments[2])}});eL(ak,aO),eL(aN,aT);var uh="ArrayBuffer",uv=(aa={ArrayBuffer:ak,DataView:aN})[uh],up=C[uh];// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
k({global:!0,constructor:!0,forced:up!==uv},{ArrayBuffer:uv}),i7(uh);var ud={},ug=rd.enforce,uy=rd.get,ub=C.Int8Array,um=ub&&ub.prototype,uw=C.Uint8ClampedArray,uS=uw&&uw.prototype,uA=ub&&oQ(ub),ux=um&&oQ(um),uE=Object.prototype,uO=C.TypeError,uT=tL("toStringTag"),uI=tG("TYPED_ARRAY_TAG"),uR="TypedArrayConstructor",uj=au&&!!o8&&"Opera"!==et(C.opera),uP=!1,uM={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},uL={BigInt64Array:8,BigUint64Array:8},uk=function(t){var r=oQ(t);if(ta(r)){var e=uy(r);return e&&tD(e,uR)?e[uR]:uk(r)}},uC=function(t){if(!ta(t))return!1;var r=et(t);return tD(uM,r)||tD(uL,r)};for(c in uM)(l=(f=C[c])&&f.prototype)?ug(l)[uR]=f:uj=!1;for(c in uL)(l=(f=C[c])&&f.prototype)&&(ug(l)[uR]=f);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!uj||!tu(uA)||uA===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
uA=function(){throw uO("Incorrect invocation")},uj))for(c in uM)C[c]&&o8(C[c],uA);if((!uj||!ux||ux===uE)&&(ux=uA.prototype,uj))for(c in uM)C[c]&&o8(C[c].prototype,ux);if(uj&&oQ(uS)!==ux&&o8(uS,ux),U&&!tD(ux,uT))for(c in uP=!0,eI(ux,uT,{configurable:!0,get:function(){return ta(this)?this[uI]:void 0}}),uM)C[c]&&t4(C[c],uI,c);var uN=(ud={NATIVE_ARRAY_BUFFER_VIEWS:uj,TYPED_ARRAY_TAG:uP&&uI,aTypedArray:function(t){if(uC(t))return t;throw uO("Target is not a typed array")},aTypedArrayConstructor:function(t){if(tu(t)&&(!o8||tp(uA,t)))return t;throw uO(tI(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e,n){if(U){if(e)for(var o in uM){var i=C[o];if(i&&tD(i.prototype,t))try{delete i.prototype[t]}catch(e){// old WebKit bug - some methods are non-configurable
try{i.prototype[t]=r}catch(t){}}}(!ux[t]||e)&&ri(ux,t,e?r:uj&&um[t]||r,n)}},exportTypedArrayStaticMethod:function(t,r,e){var n,o;if(U){if(o8){if(e){for(n in uM)if((o=C[n])&&tD(o,t))try{delete o[t]}catch(t){}}if(uA[t]&&!e)return;try{return ri(uA,t,e?r:uj&&uA[t]||r)}catch(t){}}for(n in uM)(o=C[n])&&(!o[t]||e)&&ri(o,t,r)}},getTypedArrayConstructor:uk,isView:function(t){if(!ta(t))return!1;var r=et(t);return"DataView"===r||tD(uM,r)||tD(uL,r)},isTypedArray:uC,TypedArray:uA,TypedArrayPrototype:ux}).NATIVE_ARRAY_BUFFER_VIEWS;// `ArrayBuffer.isView` method
// https://tc39.es/ecma262/#sec-arraybuffer.isview
k({target:"ArrayBuffer",stat:!0,forced:!uN},{isView:ud.isView});var uU={},uF={},u_=TypeError;// `Assert: IsConstructor(argument) is true`
uF=function(t){if(eq(t))return t;throw u_(tI(t)+" is not a constructor")};var uD=tL("species");// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
uU=function(t,r){var e,n=t3(t).constructor;return void 0===n||te(e=t3(n)[uD])?r:uF(e)};var uB=aa.ArrayBuffer,uz=aa.DataView,uq=uz.prototype,uG=eF(uB.prototype.slice),uW=eF(uq.getUint8),uH=eF(uq.setUint8),uV=F(function(){return!new uB(2).slice(1,void 0).byteLength});// `ArrayBuffer.prototype.slice` method
// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
k({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:uV},{slice:function(t,r){if(uG&&void 0===r)return uG(t3(this),t);// FF fix
for(var e=t3(this).byteLength,n=rB(t,e),o=rB(void 0===r?e:r,e),i=new(uU(this,uB))(rY(o-n)),a=new uz(this),u=new uz(i),s=0;n<o;)uH(u,s++,uW(a,n++));return i}}),// `DataView` constructor
// https://tc39.es/ecma262/#sec-dataview-constructor
k({global:!0,constructor:!0,forced:!au},{DataView:aa.DataView});var u$=Date,uY=V(u$.prototype.getTime);// `Date.now` method
// https://tc39.es/ecma262/#sec-date.now
k({target:"Date",stat:!0},{now:function(){return uY(new u$)}});var uJ={},uK={},uX={},uQ=RangeError,uZ=V(// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
uX=function(t){var r=r9(tr(this)),e="",n=rz(t);if(n<0||n===1/0)throw uQ("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(r+=r))1&n&&(e+=r);return e}),u0=V("".slice),u1=Math.ceil,u2=function(t){return function(r,e,n){var o,i,a=r9(tr(r)),u=rY(e),s=a.length,c=void 0===n?" ":r9(n);return u<=s||""===c?a:((i=uZ(c,u1((o=u-s)/c.length))).length>o&&(i=u0(i,0,o)),t?a+i:i+a)}},u5=(uK={// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
start:u2(!1),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
end:u2(!0)}).start,u4=RangeError,u6=isFinite,u3=Math.abs,u8=Date.prototype,u7=u8.toISOString,u9=V(u8.getTime),st=V(u8.getUTCDate),sr=V(u8.getUTCFullYear),se=V(u8.getUTCHours),sn=V(u8.getUTCMilliseconds),so=V(u8.getUTCMinutes),si=V(u8.getUTCMonth),sa=V(u8.getUTCSeconds);// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
uJ=F(function(){return"0385-07-25T07:06:39.999Z"!==u7.call(new Date(-50000000000001))})||!F(function(){u7.call(new Date(NaN))})?function(){if(!u6(u9(this)))throw u4("Invalid time value");var t=sr(this),r=sn(this),e=t<0?"-":t>9999?"+":"";return e+u5(u3(t),e?6:4,0)+"-"+u5(si(this)+1,2,0)+"-"+u5(st(this),2,0)+"T"+u5(se(this),2,0)+":"+u5(so(this),2,0)+":"+u5(sa(this),2,0)+"."+u5(r,3,0)+"Z"}:u7,// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
k({target:"Date",proto:!0,forced:Date.prototype.toISOString!==uJ},{toISOString:uJ});var su=F(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})});// `Date.prototype.toJSON` method
// https://tc39.es/ecma262/#sec-date.prototype.tojson
k({target:"Date",proto:!0,arity:1,forced:su},{// eslint-disable-next-line no-unused-vars -- required for `.length`
toJSON:function(t){var r=tB(this),e=ti(r,"number");return"number"!=typeof e||isFinite(e)?r.toISOString():null}});var ss={},sc=TypeError;// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
ss=function(t){if(t3(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw sc("Incorrect hint");return tP(this,t)};var sf=tL("toPrimitive"),sl=Date.prototype;tD(sl,sf)||ri(sl,sf,ss);var sh=Date.prototype,sv="Invalid Date",sp="toString",sd=V(sh[sp]),sg=V(sh.getTime);String(new Date(NaN))!==sv&&ri(sh,sp,function(){var t=sg(this);// eslint-disable-next-line no-self-compare -- NaN check
return t==t?sd(this):sv});var sy={},sb=Function,sm=V([].concat),sw=V([].join),sS={},sA=function(t,r,e){if(!tD(sS,r)){for(var n=[],o=0;o<r;o++)n[o]="a["+o+"]";sS[r]=sb("C,a","return new C("+sw(n,",")+")")}return sS[r](t,e)};// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
sy=D?sb.bind:function(t/* , ...args */){var r=tT(this),e=r.prototype,n=nI(arguments,1),o=function(){var e=sm(n,nI(arguments));return this instanceof o?sA(r,e.length,e):r.apply(t,e)};return ta(e)&&(o.prototype=e),o},// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
k({target:"Function",proto:!0,forced:Function.bind!==sy},{bind:sy});var sx=tL("hasInstance"),sE=Function.prototype;sx in sE||a4(sE,sx,{value:ra(function(t){if(!tu(this)||!ta(t))return!1;var r=this.prototype;if(!ta(r))return t instanceof this;// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=oQ(t);)if(r===t)return!0;return!1},sx)});var sO=ru.EXISTS,sT=Function.prototype,sI=V(sT.toString),sR=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,sj=V(sR.exec);U&&!sO&&eI(sT,"name",{configurable:!0,get:function(){try{return sj(sR,sI(this))[1]}catch(t){return""}}}),// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
eL(C.JSON,"JSON",!0);var sP={},sM={},sL=a4,sk={},sC={};sC=F(function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);// eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}});// eslint-disable-next-line es/no-object-isextensible -- safe
var sN=Object.isExtensible;// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
sk=F(function(){sN(1)})||sC?function(t){return!!ta(t)&&(!sC||"ArrayBuffer"!==K(t))&&(!sN||sN(t))}:sN;var sU={};sU=!F(function(){// eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
return Object.isExtensible(Object.preventExtensions({}))});var sF=!1,s_=tG("meta"),sD=0,sB=function(t){sL(t,s_,{value:{objectID:"O"+sD++,weakData:{}// weak collections IDs
}})},sz=sM={enable:function(){sz.enable=function(){},sF=!0;var t=a7,r=V([].splice),e={};e[s_]=1,t(e).length&&(a7=function(e){for(var n=t(e),o=0,i=n.length;o<i;o++)if(n[o]===s_){r(n,o,1);break}return n},k({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:ue}))},fastKey:function(t,r){// return a primitive with prefix
if(!ta(t))return(void 0===t?"undefined":M(t))=="symbol"?t:("string"==typeof t?"S":"P")+t;if(!tD(t,s_)){// can't set metadata to uncaught frozen object
if(!sk(t))return"F";// not necessary to add metadata
if(!r)return"E";// add missing metadata
sB(t);// return object ID
}return t[s_].objectID},getWeakData:function(t,r){if(!tD(t,s_)){// can't set metadata to uncaught frozen object
if(!sk(t))return!0;// not necessary to add metadata
if(!r)return!1;// add missing metadata
sB(t);// return the store of weak collections IDs
}return t[s_].weakData},onFreeze:function(t){return sU&&sF&&sk(t)&&!tD(t,s_)&&sB(t),t}};rw[s_]=!0;var sq={},sG=TypeError,sW=function(t,r){this.stopped=t,this.result=r},sH=sW.prototype;sq=function(t,r,e){var n,o,i,a,u,s,c,f=e&&e.that,l=!!(e&&e.AS_ENTRIES),h=!!(e&&e.IS_RECORD),v=!!(e&&e.IS_ITERATOR),p=!!(e&&e.INTERRUPTED),d=eU(r,f),g=function(t){return n&&oO(n,"normal",t),new sW(!0,t)},y=function(t){return l?(t3(t),p?d(t[0],t[1],g):d(t[0],t[1])):p?d(t,g):d(t)};if(h)n=t.iterator;else if(v)n=t;else{if(!(o=oM(t)))throw sG(tI(t)+" is not iterable");// optimisation for array iterators
if(oT(o)){for(i=0,a=r$(t);a>i;i++)if((u=y(t[i]))&&tp(sH,u))return u;return new sW(!1)}n=oP(t,o)}for(s=h?t.next:n.next;!(c=_(s,n)).done;){try{u=y(c.value)}catch(t){oO(n,"throw",t)}if("object"==typeof u&&u&&tp(sH,u))return u}return new sW(!1)};var sV={};// makes subclassing work correct for wrapped built-ins
sV=function(t,r,e){var n,o;return o8&&// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
tu(n=r.constructor)&&n!==e&&ta(o=n.prototype)&&o!==e.prototype&&o8(t,o),t},sP=function(t,r,e){var n=-1!==t.indexOf("Map"),o=-1!==t.indexOf("Weak"),i=n?"set":"add",a=C[t],u=a&&a.prototype,s=a,c={},f=function(t){var r=V(u[t]);ri(u,t,"add"===t?function(t){return r(this,0===t?0:t),this}:"delete"===t?function(t){return(!o||!!ta(t))&&r(this,0===t?0:t)}:"get"===t?function(t){return o&&!ta(t)?void 0:r(this,0===t?0:t)}:"has"===t?function(t){return(!o||!!ta(t))&&r(this,0===t?0:t)}:function(t,e){return r(this,0===t?0:t,e),this})};if(r2(t,!tu(a)||!(o||u.forEach&&!F(function(){new a().entries().next()}))))// create collection constructor
s=e.getConstructor(r,t,n,i),sM.enable();else if(r2(t,!0)){var l=new s,h=l[i](o?{}:-0,1)!==l,v=F(function(){l.has(1)}),p=oN(function(t){new a(t)}),d=!o&&F(function(){for(// V8 ~ Chromium 42- fails only with 5+ elements
var t=new a,r=5;r--;)t[i](r,r);return!t.has(-0)});p||((s=r(function(t,r){ac(t,u);var e=sV(new a,t,s);return te(r)||sq(r,e[i],{that:e,AS_ENTRIES:n}),e})).prototype=u,u.constructor=s),(v||d)&&(f("delete"),f("has"),n&&f("get")),(d||h)&&f(i),o&&u.clear&&delete u.clear}return c[t]=s,k({global:!0,constructor:!0,forced:s!==a},c),eL(s,t),o||e.setStrong(s,t,n),s};var s$={},sY=sM.fastKey,sJ=rd.set,sK=rd.getterFor;// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
sP("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},s$={getConstructor:function(t,r,e,n){var o=t(function(t,o){ac(t,i),sJ(t,{type:r,index:ec(null),first:void 0,last:void 0,size:0}),U||(t.size=0),te(o)||sq(o,t[n],{that:t,AS_ENTRIES:e})}),i=o.prototype,a=sK(r),u=function(t,r,e){var n,o,i=a(t),u=s(t,r);return u?u.value=e:(i.last=u={index:o=sY(r,!0),key:r,value:e,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=u),n&&(n.next=u),U?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},s=function(t,r){var e,n=a(t),o=sY(r);if("F"!==o)return n.index[o];// frozen object case
for(e=n.first;e;e=e.next)if(e.key===r)return e};return as(i,{// `{ Map, Set }.prototype.clear()` methods
// https://tc39.es/ecma262/#sec-map.prototype.clear
// https://tc39.es/ecma262/#sec-set.prototype.clear
clear:function(){for(var t=a(this),r=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete r[e.index],e=e.next;t.first=t.last=void 0,U?t.size=0:this.size=0},// `{ Map, Set }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.delete
// https://tc39.es/ecma262/#sec-set.prototype.delete
delete:function(t){var r=a(this),e=s(this,t);if(e){var n=e.next,o=e.previous;delete r.index[e.index],e.removed=!0,o&&(o.next=n),n&&(n.previous=o),r.first===e&&(r.first=n),r.last===e&&(r.last=o),U?r.size--:this.size--}return!!e},// `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
// https://tc39.es/ecma262/#sec-map.prototype.foreach
// https://tc39.es/ecma262/#sec-set.prototype.foreach
forEach:function(t/* , that = undefined */){for(var r,e=a(this),n=eU(t,arguments.length>1?arguments[1]:void 0);r=r?r.next:e.first;)// revert to the last existing entry
for(n(r.value,r.key,this);r&&r.removed;)r=r.previous},// `{ Map, Set}.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.has
// https://tc39.es/ecma262/#sec-set.prototype.has
has:function(t){return!!s(this,t)}}),as(i,e?{// `Map.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-map.prototype.get
get:function(t){var r=s(this,t);return r&&r.value},// `Map.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-map.prototype.set
set:function(t,r){return u(this,0===t?0:t,r)}}:{// `Set.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-set.prototype.add
add:function(t){return u(this,t=0===t?0:t,t)}}),U&&eI(i,"size",{configurable:!0,get:function(){return a(this).size}}),o},setStrong:function(t,r,e){var n=r+" Iterator",o=sK(r),i=sK(n);// `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
// https://tc39.es/ecma262/#sec-map.prototype.entries
// https://tc39.es/ecma262/#sec-map.prototype.keys
// https://tc39.es/ecma262/#sec-map.prototype.values
// https://tc39.es/ecma262/#sec-map.prototype-@@iterator
// https://tc39.es/ecma262/#sec-set.prototype.entries
// https://tc39.es/ecma262/#sec-set.prototype.keys
// https://tc39.es/ecma262/#sec-set.prototype.values
// https://tc39.es/ecma262/#sec-set.prototype-@@iterator
oJ(t,r,function(t,r){sJ(this,{type:n,target:t,state:o(t),kind:r,last:void 0})},function(){// revert to the last existing entry
for(var t=i(this),r=t.kind,e=t.last;e&&e.removed;)e=e.previous;return(// get next entry
t.target&&(t.last=e=e?e.next:t.state.first)?"keys"===r?iv(e.key,!1):"values"===r?iv(e.value,!1):iv([e.key,e.value],!1):(// or finish the iteration
t.target=void 0,iv(void 0,!0)))},e?"entries":"values",!e,!0),// `{ Map, Set }.prototype[@@species]` accessors
// https://tc39.es/ecma262/#sec-get-map-@@species
// https://tc39.es/ecma262/#sec-get-set-@@species
i7(r)}});var sX={},sQ=Math.log;// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es/no-math-log1p -- safe
sX=Math.log1p||function(t){var r=+t;return r>-.00000001&&r<1e-8?r-r*r/2:sQ(1+r)};// eslint-disable-next-line es/no-math-acosh -- required for testing
var sZ=Math.acosh,s0=Math.log,s1=Math.sqrt,s2=Math.LN2,s5=!sZ||710!==Math.floor(sZ(Number.MAX_VALUE))||sZ(1/0)!==1/0;// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
k({target:"Math",stat:!0,forced:s5},{acosh:function(t){var r=+t;return r<1?NaN:r>94906265.62425156?s0(r)+s2:sX(r-1+s1(r-1)*s1(r+1))}});// eslint-disable-next-line es/no-math-asinh -- required for testing
var s4=Math.asinh,s6=Math.log,s3=Math.sqrt,s8=!(s4&&1/s4(0)>0);// `Math.asinh` method
// https://tc39.es/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
k({target:"Math",stat:!0,forced:s8},{asinh:function t(r){var e=+r;return isFinite(e)&&0!==e?e<0?-t(-e):s6(e+s3(e*e+1)):e}});// eslint-disable-next-line es/no-math-atanh -- required for testing
var s7=Math.atanh,s9=Math.log,ct=!(s7&&1/s7(-0)<0);// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
k({target:"Math",stat:!0,forced:ct},{atanh:function(t){var r=+t;return 0===r?r:s9((1+r)/(1-r))/2}});var cr=Math.abs,ce=Math.pow;// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
k({target:"Math",stat:!0},{cbrt:function(t){var r=+t;return ap(r)*ce(cr(r),1/3)}});var cn=Math.floor,co=Math.log,ci=Math.LOG2E;// `Math.clz32` method
// https://tc39.es/ecma262/#sec-math.clz32
k({target:"Math",stat:!0},{clz32:function(t){var r=t>>>0;return r?31-cn(co(r+.5)*ci):32}});var ca={},cu=Math.expm1,cs=Math.exp;// `Math.expm1` method implementation
// https://tc39.es/ecma262/#sec-math.expm1
ca=!cu||cu(10)>22025.465794806718||22025.465794806718>cu(10)||-.00000000000000002!==cu(-.00000000000000002)?function(t){var r=+t;return 0===r?r:r>-.000001&&r<1e-6?r+r*r/2:cs(r)-1}:cu;// eslint-disable-next-line es/no-math-cosh -- required for testing
var cc=Math.cosh,cf=Math.abs,cl=Math.E,ch=!cc||cc(710)===1/0;// `Math.cosh` method
// https://tc39.es/ecma262/#sec-math.cosh
k({target:"Math",stat:!0,forced:ch},{cosh:function(t){var r=ca(cf(t)-1)+1;return(r+1/(r*cl*cl))*(cl/2)}}),// `Math.expm1` method
// https://tc39.es/ecma262/#sec-math.expm1
// eslint-disable-next-line es/no-math-expm1 -- required for testing
k({target:"Math",stat:!0,forced:ca!==Math.expm1},{expm1:ca});var cv=Math.abs,cp=Math.pow,cd=cp(2,-52),cg=cp(2,-23),cy=cp(2,127)*(2-cg),cb=cp(2,-126);// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
k({target:"Math",stat:!0},{fround:Math.fround||function(t){var r,e,n=+t,o=cv(n),i=ap(n);return o<cb?i*(o/cb/cg+1/cd-1/cd)*cb*cg:// eslint-disable-next-line no-self-compare -- NaN check
(e=(r=(1+cg/cd)*o)-(r-o))>cy||e!=e?i*(1/0):i*e}});// eslint-disable-next-line es/no-math-hypot -- required for testing
var cm=Math.hypot,cw=Math.abs,cS=Math.sqrt,cA=!!cm&&cm(1/0,NaN)!==1/0;// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
k({target:"Math",stat:!0,arity:2,forced:cA},{// eslint-disable-next-line no-unused-vars -- required for `.length`
hypot:function(t,r){for(var e,n,o=0,i=0,a=arguments.length,u=0;i<a;)e=cw(arguments[i++]),u<e?(o=o*(n=u/e)*n+1,u=e):e>0?o+=(n=e/u)*n:o+=e;return u===1/0?1/0:u*cS(o)}});// eslint-disable-next-line es/no-math-imul -- required for testing
var cx=Math.imul,cE=F(function(){return -5!==cx(4294967295,5)||2!==cx.length});// `Math.imul` method
// https://tc39.es/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
k({target:"Math",stat:!0,forced:cE},{imul:function(t,r){var e=+t,n=+r,o=65535&e,i=65535&n;return 0|o*i+((65535&e>>>16)*i+o*(65535&n>>>16)<<16>>>0)}});var cO=Math.log,cT=Math.LOG10E;// `Math.log10` method
// https://tc39.es/ecma262/#sec-math.log10
k({target:"Math",stat:!0},{log10:Math.log10||function(t){return cO(t)*cT}}),// `Math.log1p` method
// https://tc39.es/ecma262/#sec-math.log1p
k({target:"Math",stat:!0},{log1p:sX});var cI=Math.log,cR=Math.LN2;// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
k({target:"Math",stat:!0},{log2:function(t){return cI(t)/cR}}),// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
k({target:"Math",stat:!0},{sign:ap});var cj=Math.abs,cP=Math.exp,cM=Math.E,cL=F(function(){// eslint-disable-next-line es/no-math-sinh -- required for testing
return -.00000000000000002!==Math.sinh(-.00000000000000002)});// `Math.sinh` method
// https://tc39.es/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
k({target:"Math",stat:!0,forced:cL},{sinh:function(t){var r=+t;return 1>cj(r)?(ca(r)-ca(-r))/2:(cP(r-1)-cP(-r-1))*(cM/2)}});var ck=Math.exp;// `Math.tanh` method
// https://tc39.es/ecma262/#sec-math.tanh
k({target:"Math",stat:!0},{tanh:function(t){var r=+t,e=ca(r),n=ca(-r);return e===1/0?1:n===1/0?-1:(e-n)/(ck(r)+ck(-r))}}),// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
eL(Math,"Math",!0),// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
k({target:"Math",stat:!0},{trunc:rq});var cC=a7,cN=a0,cU=a4,cF={};// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
cF=V(1..valueOf);var c_={},cD={};// a string of all valid unicode whitespaces
cD="	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";var cB=V("".replace),cz=RegExp("^["+cD+"]+"),cq=RegExp("(^|[^"+cD+"])["+cD+"]+$"),cG=function(t){return function(r){var e=r9(tr(r));return 1&t&&(e=cB(e,cz,"")),2&t&&(e=cB(e,cq,"$1")),e}},cW=(c_={// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
start:cG(1),// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
end:cG(2),// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
trim:cG(3)}).trim,cH="Number",cV=C[cH],c$=ej[cH],cY=cV.prototype,cJ=C.TypeError,cK=V("".slice),cX=V("".charCodeAt),cQ=function(t){var r=ti(t,"number");return(void 0===r?"undefined":M(r))=="bigint"?r:cZ(r)},cZ=function(t){var r,e,n,o,i,a,u,s,c=ti(t,"number");if(th(c))throw cJ("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2){if(43===(r=cX(c=cW(c),0))||45===r){if(88===(e=cX(c,2))||120===e)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(48===r){switch(cX(c,1)){// fast equal of /^0b[01]+$/i
case 66:case 98:n=2,o=49;break;// fast equal of /^0o[0-7]+$/i
case 79:case 111:n=8,o=55;break;default:return+c}for(u=0,a=(i=cK(c,2)).length;u<a;u++)// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((s=cX(i,u))<48||s>o)return NaN;return parseInt(i,n)}}return+c},c0=r2(cH,!cV(" 0o1")||!cV("0b1")||cV("+0x1")),c1=function(t){var r,e=arguments.length<1?0:cV(cQ(t));return(r=this,tp(cY,r)&&F(function(){cF(r)}))?sV(Object(e),this,c1):e};c1.prototype=cY,c0&&!tC&&(cY.constructor=c1),k({global:!0,constructor:!0,wrap:!0,forced:c0},{Number:c1});// Use `internal/copy-constructor-properties` helper in `core-js@4`
var c2=function(t,r){for(var e,n=U?cC(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;n.length>o;o++)tD(r,e=n[o])&&!tD(t,e)&&cU(t,e,cN(r,e))};tC&&c$&&c2(ej[cH],c$),(c0||tC)&&c2(ej[cH],cV),// `Number.EPSILON` constant
// https://tc39.es/ecma262/#sec-number.epsilon
k({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{EPSILON:2220446049250313e-31});var c5={},c4=C.isFinite;// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es/no-number-isfinite -- safe
c5=Number.isFinite||function(t){return"number"==typeof t&&c4(t)},// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
k({target:"Number",stat:!0},{isFinite:c5});var c6={},c3=Math.floor;// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
c6=Number.isInteger||function(t){return!ta(t)&&isFinite(t)&&c3(t)===t},// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
k({target:"Number",stat:!0},{isInteger:c6}),// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
k({target:"Number",stat:!0},{isNaN:function(t){// eslint-disable-next-line no-self-compare -- NaN check
return t!=t}});var c8=Math.abs;// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
k({target:"Number",stat:!0},{isSafeInteger:function(t){return c6(t)&&9007199254740991>=c8(t)}}),// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
k({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991}),// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
k({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991});var c7={},c9=c_.trim,ft=V("".charAt),fr=C.parseFloat,fe=C.Symbol,fn=fe&&fe.iterator;// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
c7=1/fr(cD+"-0")!=-1/0||fn&&!F(function(){fr(Object(fn))})?function(t){var r=c9(r9(t)),e=fr(r);return 0===e&&"-"===ft(r,0)?-0:e}:fr,// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
k({target:"Number",stat:!0,forced:Number.parseFloat!==c7},{parseFloat:c7});var fo={},fi=c_.trim,fa=C.parseInt,fu=C.Symbol,fs=fu&&fu.iterator,fc=/^[+-]?0x/i,ff=V(fc.exec);// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
fo=8!==fa(cD+"08")||22!==fa(cD+"0x16")||fs&&!F(function(){fa(Object(fs))})?function(t,r){var e=fi(r9(t));return fa(e,r>>>0||(ff(fc,e)?16:10))}:fa,// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
k({target:"Number",stat:!0,forced:Number.parseInt!==fo},{parseInt:fo});var fl=RangeError,fh=String,fv=Math.floor,fp=V(uX),fd=V("".slice),fg=V(1..toFixed),fy=function(t,r,e){return 0===r?e:r%2==1?fy(t,r-1,e*t):fy(t*t,r/2,e)},fb=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r},fm=function(t,r,e){for(var n=-1,o=e;++n<6;)o+=r*t[n],t[n]=o%1e7,o=fv(o/1e7)},fw=function(t,r){for(var e=6,n=0;--e>=0;)n+=t[e],t[e]=fv(n/r),n=n%r*1e7},fS=function(t){for(var r=6,e="";--r>=0;)if(""!==e||0===r||0!==t[r]){var n=fh(t[r]);e=""===e?n:e+fp("0",7-n.length)+n}return e},fA=F(function(){return"0.000"!==fg(8e-5,3)||"1"!==fg(.9,0)||"1.25"!==fg(1.255,2)||"1000000000000000128"!==fg(0xde0b6b3a7640080,0)})||!F(function(){// V8 ~ Android 4.3-
fg({})});// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
k({target:"Number",proto:!0,forced:fA},{toFixed:function(t){var r,e,n,o,i=cF(this),a=rz(t),u=[0,0,0,0,0,0],s="",c="0";// TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
if(a<0||a>20)throw fl("Incorrect fraction digits");// eslint-disable-next-line no-self-compare -- NaN check
if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return fh(i);if(i<0&&(s="-",i=-i),i>1e-21){if(e=((r=fb(i*fy(2,69,1))-69)<0?i*fy(2,-r,1):i/fy(2,r,1))*4503599627370496,(r=52-r)>0){for(fm(u,0,e),n=a;n>=7;)fm(u,1e7,0),n-=7;for(fm(u,fy(10,n,1),0),n=r-1;n>=23;)fw(u,8388608),n-=23;fw(u,1<<n),fm(u,1,1),fw(u,2),c=fS(u)}else fm(u,0,e),fm(u,1<<-r,0),c=fS(u)+fp("0",a)}return a>0?s+((o=c.length)<=a?"0."+fp("0",a-o)+c:fd(c,0,o-a)+"."+fd(c,o-a)):s+c}});var fx=V(1..toPrecision),fE=F(function(){// IE7-
return"1"!==fx(1,void 0)})||!F(function(){// V8 ~ Android 4.3-
fx({})});// `Number.prototype.toPrecision` method
// https://tc39.es/ecma262/#sec-number.prototype.toprecision
k({target:"Number",proto:!0,forced:fE},{toPrecision:function(t){return void 0===t?fx(cF(this)):fx(cF(this),t)}});var fO={},fT=Object.assign,fI=Object.defineProperty,fR=V([].concat);// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
fO=!fT||F(function(){// should have correct order of operations (Edge bug)
if(U&&1!==fT({b:1},fT(fI({},"a",{enumerable:!0,get:function(){fI(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;// should work with symbols and should have deterministic property order (V8 bug)
var t={},r={},e=Symbol("assign detection"),n="abcdefghijklmnopqrst";return t[e]=7,n.split("").forEach(function(t){r[t]=t}),7!==fT({},t)[e]||ef(fT({},r)).join("")!==n})?function(t,r){for(var e=tB(t),n=arguments.length,o=1,i=a9,a=a1;n>o;)for(var u,s=H(arguments[o++]),c=i?fR(ef(s),i(s)):ef(s),f=c.length,l=0;f>l;)u=c[l++],(!U||_(a,s,u))&&(e[u]=s[u]);return e}:fT,// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
k({target:"Object",stat:!0,arity:2,forced:Object.assign!==fO},{assign:fO}),// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
k({target:"Object",stat:!0,sham:!U},{create:ec});var fj={};// Forced replacement object prototype accessors methods
fj=tC||!F(function(){// This feature detection crashes old WebKit
// https://github.com/zloirock/core-js/issues/232
if(!iZ||!(iZ<535)){var t=Math.random();// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call, es/no-legacy-object-prototype-accessor-methods -- required for testing
__defineSetter__.call(null,t,function(){}),delete C[t]}}),U&&k({target:"Object",proto:!0,forced:fj},{__defineGetter__:function(t,r){a4(tB(this),t,{get:tT(r),enumerable:!0,configurable:!0})}});var fP=ut;// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
k({target:"Object",stat:!0,forced:Object.defineProperties!==fP,sham:!U},{defineProperties:fP});var fM=a4;// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
k({target:"Object",stat:!0,forced:Object.defineProperty!==fM,sham:!U},{defineProperty:fM}),U&&k({target:"Object",proto:!0,forced:fj},{__defineSetter__:function(t,r){a4(tB(this),t,{set:tT(r),enumerable:!0,configurable:!0})}});var fL={},fk=V(a1),fC=V([].push),fN=U&&F(function(){// eslint-disable-next-line es/no-object-create -- safe
var t=Object.create(null);return t[2]=2,!fk(t,2)}),fU=function(t){return function(r){for(var e,n=W(r),o=ef(n),i=fN&&null===oQ(n),a=o.length,u=0,s=[];a>u;)e=o[u++],(!U||(i?e in n:fk(n,e)))&&fC(s,t?[e,n[e]]:n[e]);return s}},fF=(fL={// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
entries:fU(!0),// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
values:fU(!1)}).entries;// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
k({target:"Object",stat:!0},{entries:function(t){return fF(t)}});var f_=sM.onFreeze,fD=Object.freeze,fB=F(function(){fD(1)});// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
k({target:"Object",stat:!0,forced:fB,sham:!sU},{freeze:function(t){return fD&&ta(t)?fD(f_(t)):t}}),// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
k({target:"Object",stat:!0},{fromEntries:function(t){var r={};return sq(t,function(t,e){eA(r,t,e)},{AS_ENTRIES:!0}),r}});var fz=a0,fq=!U||F(function(){fz(1)});// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
k({target:"Object",stat:!0,forced:fq,sham:!U},{getOwnPropertyDescriptor:function(t,r){return fz(W(t),r)}}),// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
k({target:"Object",stat:!0,sham:!U},{getOwnPropertyDescriptors:function(t){for(var r,e,n=W(t),o=a0,i=rF(n),a={},u=0;i.length>u;)void 0!==(e=o(n,r=i[u++]))&&eA(a,r,e);return a}});var fG=ue,fW=F(function(){return!Object.getOwnPropertyNames(1)});// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
k({target:"Object",stat:!0,forced:fW},{getOwnPropertyNames:fG});var fH=F(function(){oQ(1)});// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
k({target:"Object",stat:!0,forced:fH,sham:!oZ},{getPrototypeOf:function(t){return oQ(tB(t))}});var fV={};// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
fV=Object.is||function(t,r){// eslint-disable-next-line no-self-compare -- NaN check
return t===r?0!==t||1/t==1/r:t!=t&&r!=r},// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
k({target:"Object",stat:!0},{is:fV}),// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es/no-object-isextensible -- safe
k({target:"Object",stat:!0,forced:Object.isExtensible!==sk},{isExtensible:sk});// eslint-disable-next-line es/no-object-isfrozen -- safe
var f$=Object.isFrozen,fY=sC||F(function(){f$(1)});// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
k({target:"Object",stat:!0,forced:fY},{isFrozen:function(t){return!ta(t)||!!sC&&"ArrayBuffer"===K(t)||!!f$&&f$(t)}});// eslint-disable-next-line es/no-object-issealed -- safe
var fJ=Object.isSealed,fK=sC||F(function(){fJ(1)});// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
k({target:"Object",stat:!0,forced:fK},{isSealed:function(t){return!ta(t)||!!sC&&"ArrayBuffer"===K(t)||!!fJ&&fJ(t)}});var fX=F(function(){ef(1)});// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
k({target:"Object",stat:!0,forced:fX},{keys:function(t){return ef(tB(t))}});var fQ=a0;U&&k({target:"Object",proto:!0,forced:fj},{__lookupGetter__:function(t){var r,e=tB(this),n=to(t);do if(r=fQ(e,n))return r.get;while(e=oQ(e))}});var fZ=a0;U&&k({target:"Object",proto:!0,forced:fj},{__lookupSetter__:function(t){var r,e=tB(this),n=to(t);do if(r=fZ(e,n))return r.set;while(e=oQ(e))}});var f0=sM.onFreeze,f1=Object.preventExtensions,f2=F(function(){f1(1)});// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
k({target:"Object",stat:!0,forced:f2,sham:!sU},{preventExtensions:function(t){return f1&&ta(t)?f1(f0(t)):t}});var f5=sM.onFreeze,f4=Object.seal,f6=F(function(){f4(1)});// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
k({target:"Object",stat:!0,forced:f6,sham:!sU},{seal:function(t){return f4&&ta(t)?f4(f5(t)):t}}),// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
k({target:"Object",stat:!0},{setPrototypeOf:o8});var f3={};// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
f3=er?({}).toString:function(){return"[object "+et(this)+"]"},er||ri(Object.prototype,"toString",f3,{unsafe:!0});var f8=fL.values;// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
k({target:"Object",stat:!0},{values:function(t){return f8(t)}}),// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
k({global:!0,forced:parseFloat!==c7},{parseFloat:c7}),// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
k({global:!0,forced:parseInt!==fo},{parseInt:fo});var f7={},f9={},lt=TypeError;f9=function(t,r){if(t<r)throw lt("Not enough arguments");return t};var lr={};// eslint-disable-next-line redos/no-vulnerable -- safe
lr=/(?:ipad|iphone|ipod).*applewebkit/i.test(tb);var le=C.setImmediate,ln=C.clearImmediate,lo=C.process,li=C.Dispatch,la=C.Function,lu=C.MessageChannel,ls=C.String,lc=0,lf={},ll="onreadystatechange";F(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=C.location});var lh=function(t){if(tD(lf,t)){var r=lf[t];delete lf[t],r()}},lv=function(t){return function(){lh(t)}},lp=function(t){lh(t.data)},ld=function(t){// old engines have not location.origin
C.postMessage(ls(t),h.protocol+"//"+h.host)};le&&ln||(le=function(t){f9(arguments.length,1);var r=tu(t)?t:la(t),e=nI(arguments,1);return lf[++lc]=function(){nx(r,void 0,e)},v(lc),lc},ln=function(t){delete lf[t]},ik?v=function(t){lo.nextTick(lv(t))}:li&&li.now?v=function(t){li.now(lv(t))}:lu&&!lr?(d=(p=new lu).port2,p.port1.onmessage=lp,v=eU(d.postMessage,d)):C.addEventListener&&tu(C.postMessage)&&!C.importScripts&&h&&"file:"!==h.protocol&&!F(ld)?(v=ld,C.addEventListener("message",lp,!1)):v=ll in tZ("script")?function(t){el.appendChild(tZ("script"))[ll]=function(){el.removeChild(this),lh(t)}}:function(t){setTimeout(lv(t),0)});var lg=(f7={set:le,clear:ln}).set,ly={},lb=a0,lm=f7.set,lw={},lS=function(){this.head=null,this.tail=null};lS.prototype={add:function(t){var r={item:t,next:null},e=this.tail;e?e.next=r:this.head=r,this.tail=r},get:function(){var t=this.head;if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}},lw=lS;var lA={};lA=/ipad|iphone|ipod/i.test(tb)&&"undefined"!=typeof Pebble;var lx={};lx=/web0s(?!.*chrome)/i.test(tb);var lE=C.MutationObserver||C.WebKitMutationObserver,lO=C.document,lT=C.process,lI=C.Promise,lR=lb(C,"queueMicrotask"),lj=lR&&lR.value;// modern engines have queueMicrotask method
if(!lj){var lP=new lw,lM=function(){var t,r;for(ik&&(t=lT.domain)&&t.exit();r=lP.get();)try{r()}catch(t){throw lP.head&&g(),t}t&&t.enter()};lr||ik||lx||!lE||!lO?!lA&&lI&&lI.resolve?(// workaround of WebKit ~ iOS Safari 10.1 bug
// Promise.resolve without an argument throws an error in LG WebOS 2
(m=lI.resolve(void 0)).constructor=lI,w=eU(m.then,m),g=function(){w(lM)}):ik?g=function(){lT.nextTick(lM)}:(// `webpack` dev server bug on IE global methods - use bind(fn, global)
lm=eU(lm,C),g=function(){lm(lM)}):(y=!0,b=lO.createTextNode(""),new lE(lM).observe(b,{characterData:!0}),g=function(){b.data=y=!y}),lj=function(t){lP.head||g(),lP.add(t)}}ly=lj;var lL={};lL=function(t,r){try{// eslint-disable-next-line no-console -- safe
1==arguments.length?console.error(t):console.error(t,r)}catch(t){}};var lk={};lk=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}};var lC={};lC=C.Promise;var lN={},lU={},lF={};lU=!/* global Deno -- Deno case */(lF="object"==typeof Deno&&Deno&&"object"==typeof Deno.version)&&!ik&&"object"==typeof window&&"object"==typeof document;var l_=lC&&lC.prototype,lD=tL("species"),lB=!1,lz=tu(C.PromiseRejectionEvent);lN={CONSTRUCTOR:r2("Promise",function(){var t=rv(lC),r=t!==String(lC);// V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// We can't detect it synchronously, so just check versions
if(!r&&66===ty||tC&&!(l_.catch&&l_.finally))return!0;// We can't use @@species feature detection in V8 since it causes
// deoptimization and performance degradation
// https://github.com/zloirock/core-js/issues/679
if(!ty||ty<51||!/native code/.test(t)){// Detect correctness of subclassing with @@species support
var e=new lC(function(t){t(1)}),n=function(t){t(function(){},function(){})};if((e.constructor={})[lD]=n,!(lB=e.then(function(){}) instanceof n))return!0;// Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
}return!r&&(lU||lF)&&!lz}),REJECTION_EVENT:lz,SUBCLASSING:lB};var lq=TypeError,lG=function(t){var r,e;this.promise=new t(function(t,n){if(void 0!==r||void 0!==e)throw lq("Bad Promise constructor");r=t,e=n}),this.resolve=tT(r),this.reject=tT(e)};S=function(t){return new lG(t)};var lW="Promise",lH=lN.CONSTRUCTOR,lV=lN.REJECTION_EVENT,l$=lN.SUBCLASSING,lY=rd.getterFor(lW),lJ=rd.set,lK=lC&&lC.prototype,lX=lC,lQ=lK,lZ=C.TypeError,l0=C.document,l1=C.process,l2=S,l5=l2,l4=!!(l0&&l0.createEvent&&C.dispatchEvent),l6="unhandledrejection",l3=function(t){var r;return!!(ta(t)&&tu(r=t.then))&&r},l8=function(t,r){var e,n,o,i=r.value,a=1===r.state,u=a?t.ok:t.fail,s=t.resolve,c=t.reject,f=t.domain;try{u?(a||(2===r.rejection&&he(r),r.rejection=1),!0===u?e=i:(f&&f.enter(),e=u(i),f&&(f.exit(),o=!0)),e===t.promise?c(lZ("Promise-chain cycle")):(n=l3(e))?_(n,e,s,c):s(e)):c(i)}catch(t){f&&!o&&f.exit(),c(t)}},l7=function(t,r){t.notified||(t.notified=!0,ly(function(){for(var e,n=t.reactions;e=n.get();)l8(e,t);t.notified=!1,r&&!t.rejection&&ht(t)}))},l9=function(t,r,e){var n,o;l4?((n=l0.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),C.dispatchEvent(n)):n={promise:r,reason:e},!lV&&(o=C["on"+t])?o(n):t===l6&&lL("Unhandled promise rejection",e)},ht=function(t){_(lg,C,function(){var r,e=t.facade,n=t.value;if(hr(t)&&(r=lk(function(){ik?l1.emit("unhandledRejection",n,e):l9(l6,e,n)}),// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t.rejection=ik||hr(t)?2:1,r.error))throw r.value})},hr=function(t){return 1!==t.rejection&&!t.parent},he=function(t){_(lg,C,function(){var r=t.facade;ik?l1.emit("rejectionHandled",r):l9("rejectionhandled",r,t.value)})},hn=function(t,r,e){return function(n){t(r,n,e)}},ho=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,l7(t,!0))},hi=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw lZ("Promise can't be resolved itself");var n=l3(r);n?ly(function(){var e={done:!1};try{_(n,r,hn(hi,e,t),hn(ho,e,t))}catch(r){ho(e,r,t)}}):(t.value=r,t.state=1,l7(t,!1))}catch(r){ho({done:!1},r,t)}}};// constructor polyfill
if(lH&&(lQ=// 25.4.3.1 Promise(executor)
(lX=function(t){ac(this,lQ),tT(t),_(A,this);var r=lY(this);try{t(hn(hi,r),hn(ho,r))}catch(t){ho(r,t)}}).prototype,// `Promise.prototype.then` method
// https://tc39.es/ecma262/#sec-promise.prototype.then
// eslint-disable-next-line no-unused-vars -- required for `.length`
(A=function(t){lJ(this,{type:lW,done:!1,notified:!1,parent:!1,reactions:new lw,rejection:!1,state:0,value:void 0})}).prototype=ri(lQ,"then",function(t,r){var e=lY(this),n=l2(uU(this,lX));return e.parent=!0,n.ok=!tu(t)||t,n.fail=tu(r)&&r,n.domain=ik?l1.domain:void 0,0===e.state?e.reactions.add(n):ly(function(){l8(n,e)}),n.promise}),x=function(){var t=new A,r=lY(t);this.promise=t,this.resolve=hn(hi,r),this.reject=hn(ho,r)},S=l2=function(t){return t===lX||t===E?new x(t):l5(t)},!tC&&tu(lC)&&lK!==Object.prototype)){O=lK.then,l$||ri(lK,"then",function(t,r){var e=this;return new lX(function(t,r){_(O,e,t,r)}).then(t,r);// https://github.com/zloirock/core-js/issues/640
},{unsafe:!0});// make `.constructor === Promise` work for native promise-based APIs
try{delete lK.constructor}catch(t){}o8&&o8(lK,lQ)}k({global:!0,constructor:!0,wrap:!0,forced:lH},{Promise:lX}),eL(lX,lW,!1,!0),i7(lW);var ha={};ha=lN.CONSTRUCTOR||!oN(function(t){lC.all(t).then(void 0,function(){})}),// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
k({target:"Promise",stat:!0,forced:ha},{all:function(t){var r=this,e=S(r),n=e.resolve,o=e.reject,i=lk(function(){var e=tT(r.resolve),i=[],a=0,u=1;sq(t,function(t){var s=a++,c=!1;u++,_(e,r,t).then(function(t){!c&&(c=!0,i[s]=t,--u||n(i))},o)}),--u||n(i)});return i.error&&o(i.value),e.promise}});var hu=lN.CONSTRUCTOR,hs=lC&&lC.prototype;// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if(// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
k({target:"Promise",proto:!0,forced:hu,real:!0},{catch:function(t){return this.then(void 0,t)}}),!tC&&tu(lC)){var hc=tv("Promise").prototype.catch;hs.catch!==hc&&ri(hs,"catch",hc,{unsafe:!0})}// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
k({target:"Promise",stat:!0,forced:ha},{race:function(t){var r=this,e=S(r),n=e.reject,o=lk(function(){var o=tT(r.resolve);sq(t,function(t){_(o,r,t).then(e.resolve,n)})});return o.error&&n(o.value),e.promise}});var hf=lN.CONSTRUCTOR;// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
k({target:"Promise",stat:!0,forced:hf},{reject:function(t){var r=S(this);return _(r.reject,void 0,t),r.promise}});var hl=lN.CONSTRUCTOR,hh={};hh=function(t,r){if(t3(t),ta(r)&&r.constructor===t)return r;var e=S(t);return(0,e.resolve)(r),e.promise};var hv=tv("Promise"),hp=tC&&!hl;// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
k({target:"Promise",stat:!0,forced:tC||hl},{resolve:function(t){return hh(hp&&this===hv?lC:this,t)}});var hd=lC&&lC.prototype,hg=!!lC&&F(function(){// eslint-disable-next-line unicorn/no-thenable -- required for testing
hd.finally.call({then:function(){}},function(){})});// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if(// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
k({target:"Promise",proto:!0,real:!0,forced:hg},{finally:function(t){var r=uU(this,tv("Promise")),e=tu(t);return this.then(e?function(e){return hh(r,t()).then(function(){return e})}:t,e?function(e){return hh(r,t()).then(function(){throw e})}:t)}}),!tC&&tu(lC)){var hy=tv("Promise").prototype.finally;hd.finally!==hy&&ri(hd,"finally",hy,{unsafe:!0})}// MS Edge argumentsList argument is optional
var hb=!F(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.apply(function(){})});// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
k({target:"Reflect",stat:!0,forced:hb},{apply:function(t,r,e){return nx(tT(t),r,t3(e))}});var hm=tv("Reflect","construct"),hw=Object.prototype,hS=[].push,hA=F(function(){var t=function(){};return!(hm(function(){},[],t) instanceof t)}),hx=!F(function(){hm(function(){})}),hE=hA||hx;k({target:"Reflect",stat:!0,forced:hE,sham:hE},{construct:function(t,r/* , newTarget */){uF(t),t3(r);var e=arguments.length<3?t:uF(arguments[2]);if(hx&&!hA)return hm(t,r,e);if(t===e){// w/o altered newTarget, optimization for 0-4 arguments
switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}// w/o altered newTarget, lot of arguments case
var n=[null];return nx(hS,n,r),new(nx(sy,t,n))}// with altered newTarget, not support built-in constructors
var o=e.prototype,i=ec(ta(o)?o:hw),a=nx(t,i,r);return ta(a)?a:i}});// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var hO=F(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.defineProperty(a4({},1,{value:1}),1,{value:2})});// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
k({target:"Reflect",stat:!0,forced:hO,sham:!U},{defineProperty:function(t,r,e){t3(t);var n=to(r);t3(e);try{return a4(t,n,e),!0}catch(t){return!1}}});var hT=a0;// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
k({target:"Reflect",stat:!0},{deleteProperty:function(t,r){var e=hT(t3(t),r);return(!e||!!e.configurable)&&delete t[r]}});var hI={};hI=function(t){return void 0!==t&&(tD(t,"value")||tD(t,"writable"))},k({target:"Reflect",stat:!0},{get:// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function t(r,e/* , receiver */){var n,o,i=arguments.length<3?r:arguments[2];return t3(r)===i?r[e]:(n=a0(r,e))?hI(n)?n.value:void 0===n.get?void 0:_(n.get,i):ta(o=oQ(r))?t(o,e,i):void 0}}),// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
k({target:"Reflect",stat:!0,sham:!U},{getOwnPropertyDescriptor:function(t,r){return a0(t3(t),r)}}),// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
k({target:"Reflect",stat:!0,sham:!oZ},{getPrototypeOf:function(t){return oQ(t3(t))}}),// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
k({target:"Reflect",stat:!0},{has:function(t,r){return r in t}}),// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
k({target:"Reflect",stat:!0},{isExtensible:function(t){return t3(t),sk(t)}}),// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
k({target:"Reflect",stat:!0},{ownKeys:rF}),// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
k({target:"Reflect",stat:!0,sham:!sU},{preventExtensions:function(t){t3(t);try{var r=tv("Object","preventExtensions");return r&&r(t),!0}catch(t){return!1}}});// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var hR=F(function(){var t=function(){},r=a4(new t,"a",{configurable:!0});// eslint-disable-next-line es/no-reflect -- required for testing
return!1!==Reflect.set(t.prototype,"a",1,r)});k({target:"Reflect",stat:!0,forced:hR},{set:// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function t(r,e,n/* , receiver */){var o,i,a,u=arguments.length<4?r:arguments[3],s=a0(t3(r),e);if(!s){if(ta(i=oQ(r)))return t(i,e,n,u);s=G(0)}if(hI(s)){if(!1===s.writable||!ta(u))return!1;if(o=a0(u,e)){if(o.get||o.set||!1===o.writable)return!1;o.value=n,a4(u,e,o)}else a4(u,e,G(0,n))}else{if(void 0===(a=s.set))return!1;_(a,u,n)}return!0}}),o8&&k({target:"Reflect",stat:!0},{setPrototypeOf:function(t,r){t3(t),o9(r);try{return o8(t,r),!0}catch(t){return!1}}});var hj=a7,hP={},hM=tL("match");// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
hP=function(t){var r;return ta(t)&&(void 0!==(r=t[hM])?!!r:"RegExp"===K(t))};var hL={},hk={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
hk=function(){var t=t3(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r};var hC=RegExp.prototype;hL=function(t){var r=t.flags;return void 0===r&&!("flags"in hC)&&!tD(t,"flags")&&tp(hC,t)?_(hk,t):r};var hN={},hU=C.RegExp,hF=F(function(){var t=hU("a","y");return t.lastIndex=2,null!==t.exec("abcd")}),h_=hF||F(function(){return!hU("a","y").sticky});hN={BROKEN_CARET:hF||F(function(){// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
var t=hU("^r","gy");return t.lastIndex=2,null!==t.exec("str")}),MISSED_STICKY:h_,UNSUPPORTED_Y:hF};var hD={},hB=a4;hD=function(t,r,e){e in t||hB(t,e,{configurable:!0,get:function(){return r[e]},set:function(t){r[e]=t}})};var hz=rd.enforce,hq={},hG=C.RegExp;hq=F(function(){var t=hG(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)});var hW={},hH=C.RegExp;hW=F(function(){var t=hH("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")});var hV=tL("match"),h$=C.RegExp,hY=h$.prototype,hJ=C.SyntaxError,hK=V(hY.exec),hX=V("".charAt),hQ=V("".replace),hZ=V("".indexOf),h0=V("".slice),h1=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,h2=/a/g,h5=/a/g,h4=new h$(h2)!==h2,h6=hN.MISSED_STICKY,h3=hN.UNSUPPORTED_Y,h8=U&&(!h4||h6||hq||hW||F(function(){// RegExp constructor can alter flags and IsRegExp works correct with @@match
return h5[hV]=!1,h$(h2)!==h2||h$(h5)===h5||"/a/i"!==String(h$(h2,"i"))})),h7=function(t){for(var r,e=t.length,n=0,o="",i=!1;n<=e;n++){if("\\"===(r=hX(t,n))){o+=r+hX(t,++n);continue}i||"."!==r?("["===r?i=!0:"]"===r&&(i=!1),o+=r):o+="[\\s\\S]"}return o},h9=function(t){for(var r,e=t.length,n=0,o="",i=[],a={},u=!1,s=!1,c=0,f="";n<=e;n++){if("\\"===(r=hX(t,n)))r+=hX(t,++n);else if("]"===r)u=!1;else if(!u)switch(!0){case"["===r:u=!0;break;case"("===r:hK(h1,h0(t,n+1))&&(n+=2,s=!0),o+=r,c++;continue;case">"===r&&s:if(""===f||tD(a,f))throw new hJ("Invalid capture group name");a[f]=!0,i[i.length]=[f,c],s=!1,f="";continue}s?f+=r:o+=r}return[o,i]};// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if(r2("RegExp",h8)){for(var vt=function(t,r){var e,n,o,i,a,u,s=tp(hY,this),c=hP(t),f=void 0===r,l=[],h=t;if(!s&&c&&f&&t.constructor===vt)return t;if((c||tp(hY,t))&&(t=t.source,f&&(r=hL(h))),t=void 0===t?"":r9(t),r=void 0===r?"":r9(r),h=t,hq&&("dotAll"in h2)&&(n=!!r&&hZ(r,"s")>-1)&&(r=hQ(r,/s/g,"")),e=r,h6&&("sticky"in h2)&&(o=!!r&&hZ(r,"y")>-1)&&h3&&(r=hQ(r,/y/g,"")),hW&&(t=(i=h9(t))[0],l=i[1]),a=sV(h$(t,r),s?this:hY,vt),(n||o||l.length)&&(u=hz(a),n&&(u.dotAll=!0,u.raw=vt(h7(t),e)),o&&(u.sticky=!0),l.length&&(u.groups=l)),t!==h)try{// fails in old engines, but we have no alternatives for unsupported regex syntax
t4(a,"source",""===h?"(?:)":h)}catch(t){}return a},vr=hj(h$),ve=0;vr.length>ve;)hD(vt,h$,vr[ve++]);hY.constructor=vt,vt.prototype=hY,ri(C,"RegExp",vt,{constructor:!0})}// https://tc39.es/ecma262/#sec-get-regexp-@@species
i7("RegExp");var vn={},vo=rd.get,vi=tk("native-string-replace",String.prototype.replace),va=RegExp.prototype.exec,vu=va,vs=V("".charAt),vc=V("".indexOf),vf=V("".replace),vl=V("".slice),vh=(r=/b*/g,_(va,t=/a/,"a"),_(va,r,"a"),0!==t.lastIndex||0!==r.lastIndex),vv=hN.BROKEN_CARET,vp=void 0!==/()??/.exec("")[1];(vh||vp||vv||hq||hW)&&(vu=function(t){var r,e,n,o,i,a,u,s=vo(this),c=r9(t),f=s.raw;if(f)return f.lastIndex=this.lastIndex,r=_(vu,f,c),this.lastIndex=f.lastIndex,r;var l=s.groups,h=vv&&this.sticky,v=_(hk,this),p=this.source,d=0,g=c;if(h&&(-1===vc(v=vf(v,"y",""),"g")&&(v+="g"),g=vl(c,this.lastIndex),this.lastIndex>0&&(!this.multiline||this.multiline&&"\n"!==vs(c,this.lastIndex-1))&&(p="(?: "+p+")",g=" "+g,d++),// ^(? + rx + ) is needed, in combination with some str slicing, to
// simulate the 'y' flag.
e=RegExp("^(?:"+p+")",v)),vp&&(e=RegExp("^"+p+"$(?!\\s)",v)),vh&&(n=this.lastIndex),o=_(va,h?e:this,g),h?o?(o.input=vl(o.input,d),o[0]=vl(o[0],d),o.index=this.lastIndex,this.lastIndex+=o[0].length):this.lastIndex=0:vh&&o&&(this.lastIndex=this.global?o.index+o[0].length:n),vp&&o&&o.length>1&&// for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
_(vi,o[0],e,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o&&l)for(i=0,o.groups=a=ec(null);i<l.length;i++)a[(u=l[i])[0]]=o[u[1]];return o}),vn=vu,// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
k({target:"RegExp",proto:!0,forced:/./.exec!==vn},{exec:vn});// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var vd=C.RegExp,vg=vd.prototype;U&&F(function(){var t=!0;try{vd(".","d")}catch(r){t=!1}var r={},e="",n=t?"dgimsy":"gimsy",o=function(t,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(r,t,{get:function(){return e+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(vg,"flags").get.call(r)!==n||e!==n})&&eI(vg,"flags",{configurable:!0,get:hk});var vy=ru.PROPER,vb="toString",vm=RegExp.prototype[vb],vw=F(function(){return"/a/b"!==vm.call({source:"a",flags:"b"})}),vS=vy&&vm.name!==vb;(vw||vS)&&ri(RegExp.prototype,vb,function(){var t=t3(this);return"/"+r9(t.source)+"/"+r9(hL(t))},{unsafe:!0}),// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
sP("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},s$);var vA={},vx=V("".charAt),vE=V("".charCodeAt),vO=V("".slice),vT=function(t){return function(r,e){var n,o,i=r9(tr(r)),a=rz(e),u=i.length;return a<0||a>=u?t?"":void 0:(n=vE(i,a))<55296||n>56319||a+1===u||(o=vE(i,a+1))<56320||o>57343?t?vx(i,a):n:t?vO(i,a,a+2):(n-55296<<10)+(o-56320)+65536}},vI=(vA={// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
codeAt:vT(!1),// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:vT(!0)}).codeAt;// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
k({target:"String",proto:!0},{codePointAt:function(t){return vI(this,t)}});var vR=a0,vj={},vP=TypeError;vj=function(t){if(hP(t))throw vP("The method doesn't accept regular expressions");return t};var vM={},vL=tL("match");vM=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[vL]=!1,"/./"[t](r)}catch(t){}}return!1};// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var vk=eF("".endsWith),vC=eF("".slice),vN=Math.min,vU=vM("endsWith"),vF=!tC&&!vU&&!!((e=vR(String.prototype,"endsWith"))&&!e.writable);// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
k({target:"String",proto:!0,forced:!vF&&!vU},{endsWith:function(t/* , endPosition = @length */){var r=r9(tr(this));vj(t);var e=arguments.length>1?arguments[1]:void 0,n=r.length,o=void 0===e?n:vN(rY(e),n),i=r9(t);return vk?vk(r,i,o):vC(r,o-i.length,o)===i}});var v_=RangeError,vD=String.fromCharCode,vB=String.fromCodePoint,vz=V([].join),vq=!!vB&&1!==vB.length;// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
k({target:"String",stat:!0,arity:1,forced:vq},{// eslint-disable-next-line no-unused-vars -- required for `.length`
fromCodePoint:function(t){for(var r,e=[],n=arguments.length,o=0;n>o;){if(r=+arguments[o++],rB(r,1114111)!==r)throw v_(r+" is not a valid code point");e[o]=r<65536?vD(r):vD(((r-=65536)>>10)+55296,r%1024+56320)}return vz(e,"")}});var vG=V("".indexOf);// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
k({target:"String",proto:!0,forced:!vM("includes")},{includes:function(t/* , position = 0 */){return!!~vG(r9(tr(this)),r9(vj(t)),arguments.length>1?arguments[1]:void 0)}});var vW=vA.charAt,vH="String Iterator",vV=rd.set,v$=rd.getterFor(vH);// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
oJ(String,"String",function(t){vV(this,{type:vH,string:r9(t),index:0});// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
},function(){var t,r=v$(this),e=r.string,n=r.index;return n>=e.length?iv(void 0,!0):(t=vW(e,n),r.index+=t.length,iv(t,!1))});var vY={},vJ=tL("species"),vK=RegExp.prototype;vY=function(t,r,e,n){var o=tL(t),i=!F(function(){// String methods call symbol-named RegEp methods
var r={};return r[o]=function(){return 7},7!==""[t](r)}),a=i&&!F(function(){// Symbol-named RegExp methods call .exec
var r=!1,e=/a/;return"split"===t&&(// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
// We can't use real regex here since it causes deoptimization
// and serious performance degradation in V8
// https://github.com/zloirock/core-js/issues/306
(e={}).constructor={},e.constructor[vJ]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return r=!0,null},e[o](""),!r});if(!i||!a||e){var u=eF(/./[o]),s=r(o,""[t],function(t,r,e,n,o){var a=eF(t),s=r.exec;return s===vn||s===vK.exec?i&&!o?{done:!0,value:u(r,e,n)}:{done:!0,value:a(e,r,n)}:{done:!1}});ri(String.prototype,t,s[0]),ri(vK,o,s[1])}n&&t4(vK[o],"sham",!0)};var vX={},vQ=vA.charAt;// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
vX=function(t,r,e){return r+(e?vQ(t,r).length:1)};var vZ={},v0=TypeError;// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
vZ=function(t,r){var e=t.exec;if(tu(e)){var n=_(e,t,r);return null!==n&&t3(n),n}if("RegExp"===K(t))return _(vn,t,r);throw v0("RegExp#exec called on incompatible receiver")},// @@match logic
vY("match",function(t,r,e){return[// `String.prototype.match` method
// https://tc39.es/ecma262/#sec-string.prototype.match
function(r){var e=tr(this),n=te(r)?void 0:tO(r,t);return n?_(n,r,e):new RegExp(r)[t](r9(e))},// `RegExp.prototype[@@match]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@match
function(t){var n,o=t3(this),i=r9(t),a=e(r,o,i);if(a.done)return a.value;if(!o.global)return vZ(o,i);var u=o.unicode;o.lastIndex=0;for(var s=[],c=0;null!==(n=vZ(o,i));){var f=r9(n[0]);s[c]=f,""===f&&(o.lastIndex=vX(i,rY(o.lastIndex),u)),c++}return 0===c?null:s}]});var v1=uK.end,v2={};v2=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(tb),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
k({target:"String",proto:!0,forced:v2},{padEnd:function(t/* , fillString = ' ' */){return v1(this,t,arguments.length>1?arguments[1]:void 0)}});var v5=uK.start;// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
k({target:"String",proto:!0,forced:v2},{padStart:function(t/* , fillString = ' ' */){return v5(this,t,arguments.length>1?arguments[1]:void 0)}});var v4=V([].push),v6=V([].join);// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
k({target:"String",stat:!0},{raw:function(t){var r=W(tB(t).raw),e=r$(r);if(!e)return"";for(var n=arguments.length,o=[],i=0;;){if(v4(o,r9(r[i++])),i===e)return v6(o,"");i<n&&v4(o,r9(arguments[i]))}}}),// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
k({target:"String",proto:!0},{repeat:uX});var v3={},v8=Math.floor,v7=V("".charAt),v9=V("".replace),pt=V("".slice),pr=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,pe=/\$([$&'`]|\d{1,2})/g;// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
v3=function(t,r,e,n,o,i){var a=e+t.length,u=n.length,s=pe;return void 0!==o&&(o=tB(o),s=pr),v9(i,s,function(i,s){var c;switch(v7(s,0)){case"$":return"$";case"&":return t;case"`":return pt(r,0,e);case"'":return pt(r,a);case"<":c=o[pt(s,1,-1)];break;default:var f=+s;if(0===f)return i;if(f>u){var l=v8(f/10);if(0===l)return i;if(l<=u)return void 0===n[l-1]?v7(s,1):n[l-1]+v7(s,1);return i}c=n[f-1]}return void 0===c?"":c})};var pn=tL("replace"),po=Math.max,pi=Math.min,pa=V([].concat),pu=V([].push),ps=V("".indexOf),pc=V("".slice),pf="$0"==="a".replace(/./,"$0"),pl=!!/./[pn]&&""===/./[pn]("a","$0");// @@replace logic
vY("replace",function(t,r,e){var n=pl?"$":"$0";return[// `String.prototype.replace` method
// https://tc39.es/ecma262/#sec-string.prototype.replace
function(t,e){var n=tr(this),o=te(t)?void 0:tO(t,pn);return o?_(o,t,n,e):_(r,r9(n),t,e)},// `RegExp.prototype[@@replace]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
function(t,o){var i=t3(this),a=r9(t);if("string"==typeof o&&-1===ps(o,n)&&-1===ps(o,"$<")){var u=e(r,i,a,o);if(u.done)return u.value}var s=tu(o);s||(o=r9(o));var c=i.global;c&&(d=i.unicode,i.lastIndex=0);for(var f=[];null!==(g=vZ(i,a))&&(pu(f,g),c);)""===r9(g[0])&&(i.lastIndex=vX(a,rY(i.lastIndex),d));for(var l="",h=0,v=0;v<f.length;v++){g=f[v];// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var p,d,g,y,b=r9(g[0]),m=po(pi(rz(g.index),a.length),0),w=[],S=1;S<g.length;S++)pu(w,void 0===(p=g[S])?p:String(p));var A=g.groups;if(s){var x=pa([b],w,m,a);void 0!==A&&pu(x,A),y=r9(nx(o,void 0,x))}else y=v3(b,a,m,w,A,o);m>=h&&(l+=pc(a,h,m)+y,h=m+b.length)}return l+pc(a,h)}]},!!F(function(){var t=/./;// eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})||!pf||pl),// @@search logic
vY("search",function(t,r,e){return[// `String.prototype.search` method
// https://tc39.es/ecma262/#sec-string.prototype.search
function(r){var e=tr(this),n=te(r)?void 0:tO(r,t);return n?_(n,r,e):new RegExp(r)[t](r9(e))},// `RegExp.prototype[@@search]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@search
function(t){var n=t3(this),o=r9(t),i=e(r,n,o);if(i.done)return i.value;var a=n.lastIndex;fV(a,0)||(n.lastIndex=0);var u=vZ(n,o);return fV(n.lastIndex,a)||(n.lastIndex=a),null===u?-1:u.index}]});var ph=hN.UNSUPPORTED_Y,pv=Math.min,pp=[].push,pd=V(/./.exec),pg=V(pp),py=V("".slice);// @@split logic
vY("split",function(t,r,e){var n;return n="c"==="abbc".split(/(b)*/)[1]||// eslint-disable-next-line regexp/no-empty-group -- required for testing
4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||// eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n,o,i,a=r9(tr(this)),u=void 0===e?4294967295:e>>>0;if(0===u)return[];if(void 0===t)return[a];// If `separator` is not a regex, use native split
if(!hP(t))return _(r,a,t,u);for(var s=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,l=RegExp(t.source,c+"g");(n=_(vn,l,a))&&(!((o=l.lastIndex)>f)||(pg(s,py(a,f,n.index)),n.length>1&&n.index<a.length&&nx(pp,s,eS(n,1)),i=n[0].length,f=o,!(s.length>=u)));)l.lastIndex===n.index&&l.lastIndex++;// Avoid an infinite loop
return f===a.length?(i||!pd(l,""))&&pg(s,""):pg(s,py(a,f)),s.length>u?eS(s,0,u):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:_(r,this,t,e)}:r,[// `String.prototype.split` method
// https://tc39.es/ecma262/#sec-string.prototype.split
function(r,e){var o=tr(this),i=te(r)?void 0:tO(r,t);return i?_(i,r,o,e):_(n,r9(o),r,e)},// `RegExp.prototype[@@split]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(t,o){var i=t3(this),a=r9(t),u=e(n,i,a,o,n!==r);if(u.done)return u.value;var s=uU(i,RegExp),c=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(ph?"g":"y"),l=new s(ph?"^(?:"+i.source+")":i,f),h=void 0===o?4294967295:o>>>0;if(0===h)return[];if(0===a.length)return null===vZ(l,a)?[a]:[];for(var v=0,p=0,d=[];p<a.length;){l.lastIndex=ph?0:p;var g,y=vZ(l,ph?py(a,p):a);if(null===y||(g=pv(rY(l.lastIndex+(ph?p:0)),a.length))===v)p=vX(a,p,c);else{if(pg(d,py(a,v,p)),d.length===h)return d;for(var b=1;b<=y.length-1;b++)if(pg(d,y[b]),d.length===h)return d;p=v=g}}return pg(d,py(a,v)),d}]},!!F(function(){// eslint-disable-next-line regexp/no-empty-group -- required for testing
var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}),ph);var pb=a0,pm=eF("".startsWith),pw=eF("".slice),pS=Math.min,pA=vM("startsWith"),px=!tC&&!pA&&!!((n=pb(String.prototype,"startsWith"))&&!n.writable);// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
k({target:"String",proto:!0,forced:!px&&!pA},{startsWith:function(t/* , position = 0 */){var r=r9(tr(this));vj(t);var e=rY(pS(arguments.length>1?arguments[1]:void 0,r.length)),n=r9(t);return pm?pm(r,n,e):pw(r,e,e+n.length)===n}});var pE=c_.trim,pO={},pT=ru.PROPER,pI="​\x85᠎";// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
k({target:"String",proto:!0,forced:// check that a method works with the correct list
// of whitespaces and has a correct name
(pO=function(t){return F(function(){return!!cD[t]()||pI[t]()!==pI||pT&&cD[t].name!==t})})("trim")},{trim:function(){return pE(this)}});var pR={},pj=c_.end;// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
pR=pO("trimEnd")?function(){return pj(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimEnd,// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
k({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==pR},{trimRight:pR}),// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
k({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==pR},{trimEnd:pR});var pP={},pM=c_.start;// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
pP=pO("trimStart")?function(){return pM(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimStart,// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
k({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==pP},{trimLeft:pP}),// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
k({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==pP},{trimStart:pP});var pL={},pk=/"/g,pC=V("".replace);// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
pL=function(t,r,e,n){var o=r9(tr(t)),i="<"+r;return""!==e&&(i+=" "+e+'="'+pC(r9(n),pk,"&quot;")+'"'),i+">"+o+"</"+r+">"};var pN={};// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
k({target:"String",proto:!0,forced:// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
(pN=function(t){return F(function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3})})("anchor")},{anchor:function(t){return pL(this,"a","name",t)}}),// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
k({target:"String",proto:!0,forced:pN("big")},{big:function(){return pL(this,"big","","")}}),// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
k({target:"String",proto:!0,forced:pN("blink")},{blink:function(){return pL(this,"blink","","")}}),// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
k({target:"String",proto:!0,forced:pN("bold")},{bold:function(){return pL(this,"b","","")}}),// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
k({target:"String",proto:!0,forced:pN("fixed")},{fixed:function(){return pL(this,"tt","","")}}),// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
k({target:"String",proto:!0,forced:pN("fontcolor")},{fontcolor:function(t){return pL(this,"font","color",t)}}),// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
k({target:"String",proto:!0,forced:pN("fontsize")},{fontsize:function(t){return pL(this,"font","size",t)}}),// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
k({target:"String",proto:!0,forced:pN("italics")},{italics:function(){return pL(this,"i","","")}}),// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
k({target:"String",proto:!0,forced:pN("link")},{link:function(t){return pL(this,"a","href",t)}}),// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
k({target:"String",proto:!0,forced:pN("small")},{small:function(){return pL(this,"small","","")}}),// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
k({target:"String",proto:!0,forced:pN("strike")},{strike:function(){return pL(this,"strike","","")}}),// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
k({target:"String",proto:!0,forced:pN("sub")},{sub:function(){return pL(this,"sub","","")}}),// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
k({target:"String",proto:!0,forced:pN("sup")},{sup:function(){return pL(this,"sup","","")}});var pU={},pF={},p_=ud.NATIVE_ARRAY_BUFFER_VIEWS,pD=C.ArrayBuffer,pB=C.Int8Array;pF=!p_||!F(function(){pB(1)})||!F(function(){new pB(-1)})||!oN(function(t){new pB,new pB(null),new pB(1.5),new pB(t)},!0)||F(function(){// Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
return 1!==new pB(new pD(2),1,void 0).length});var pz={},pq={},pG=RangeError;pq=function(t){var r=rz(t);if(r<0)throw pG("The argument can't be less than 0");return r};var pW=RangeError;pz=function(t,r){var e=pq(t);if(e%r)throw pW("Wrong offset");return e};var pH={},pV=Math.round;pH=function(t){var r=pV(t);return r<0?0:r>255?255:255&r};var p$=a7,pY={},pJ={};pJ=function(t){var r=et(t);return"BigInt64Array"===r||"BigUint64Array"===r};var pK=ud.aTypedArrayConstructor,pX={},pQ=TypeError;// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
pX=function(t){var r=ti(t,"number");if("number"==typeof r)throw pQ("Can't convert number to bigint");// eslint-disable-next-line es/no-bigint -- safe
return BigInt(r)},pY=function(t/* , mapfn, thisArg */){var r,e,n,o,i,a,u,s,c=uF(this),f=tB(t),l=arguments.length,h=l>1?arguments[1]:void 0,v=void 0!==h,p=oM(f);if(p&&!oT(p))for(s=(u=oP(f,p)).next,f=[];!(a=_(s,u)).done;)f.push(a.value);for(v&&l>2&&(h=eU(h,arguments[2])),e=r$(f),n=new(pK(c))(e),o=pJ(n),r=0;e>r;r++)i=v?h(f[r],r):f[r],// FF30- typed arrays doesn't properly convert objects to typed array values
n[r]=o?pX(i):+i;return n};var pZ=eN.forEach,p0=rd.get,p1=rd.set,p2=rd.enforce,p5=a4,p4=a0,p6=C.RangeError,p3=aa.ArrayBuffer,p8=p3.prototype,p7=aa.DataView,p9=ud.NATIVE_ARRAY_BUFFER_VIEWS,dt=ud.TYPED_ARRAY_TAG,dr=ud.TypedArray,de=ud.TypedArrayPrototype,dn=ud.aTypedArrayConstructor,di=ud.isTypedArray,da="BYTES_PER_ELEMENT",du="Wrong length",ds=function(t,r){dn(t);for(var e=0,n=r.length,o=new t(n);n>e;)o[e]=r[e++];return o},dc=function(t,r){eI(t,r,{configurable:!0,get:function(){return p0(this)[r]}})},df=function(t){var r;return tp(p8,t)||"ArrayBuffer"===(r=et(t))||"SharedArrayBuffer"===r},dl=function(t,r){return di(t)&&!th(r)&&r in t&&c6(+r)&&r>=0},dh=function(t,r){return dl(t,r=to(r))?G(2,t[r]):p4(t,r)},dv=function(t,r,e){return dl(t,r=to(r))&&ta(e)&&tD(e,"value")&&!tD(e,"get")&&!tD(e,"set")&&!e.configurable&&(!tD(e,"writable")||e.writable)&&(!tD(e,"enumerable")||e.enumerable)?(t[r]=e.value,t):p5(t,r,e)};U?(p9||(a0=dh,a4=dv,dc(de,"buffer"),dc(de,"byteOffset"),dc(de,"byteLength"),dc(de,"length")),k({target:"Object",stat:!0,forced:!p9},{getOwnPropertyDescriptor:dh,defineProperty:dv}),pU=function(t,r,e){var n=t.match(/\d+/)[0]/8,o=t+(e?"Clamped":"")+"Array",i="get"+t,a="set"+t,u=C[o],s=u,c=s&&s.prototype,f={},l=function(t,r){var e=p0(t);return e.view[i](r*n+e.byteOffset,!0)},h=function(t,r,o){var i=p0(t);i.view[a](r*n+i.byteOffset,e?pH(o):o,!0)},v=function(t,r){p5(t,r,{get:function(){return l(this,r)},set:function(t){return h(this,r,t)},enumerable:!0})};p9?pF&&(s=r(function(t,r,e,o){return ac(t,c),sV(ta(r)?df(r)?void 0!==o?new u(r,pz(e,n),o):void 0!==e?new u(r,pz(e,n)):new u(r):di(r)?ds(s,r):_(pY,s,r):new u(al(r)),t,s)}),o8&&o8(s,dr),pZ(p$(u),function(t){t in s||t4(s,t,u[t])}),s.prototype=c):(s=r(function(t,r,e,o){ac(t,c);var i,a,u,f=0,l=0;if(ta(r)){if(df(r)){i=r,l=pz(e,n);var h=r.byteLength;if(void 0===o){if(h%n||(a=h-l)<0)throw p6(du)}else if((a=rY(o)*n)+l>h)throw p6(du);u=a/n}else if(di(r))return ds(s,r);else return _(pY,s,r)}else a=(u=al(r))*n,i=new p3(a);for(p1(t,{buffer:i,byteOffset:l,byteLength:a,length:u,view:new p7(i)});f<u;)v(t,f++)}),o8&&o8(s,dr),c=s.prototype=ec(de)),c.constructor!==s&&t4(c,"constructor",s),p2(c).TypedArrayConstructor=s,dt&&t4(c,dt,o);var p=s!==u;f[o]=s,k({global:!0,constructor:!0,forced:p,sham:!p9},f),da in s||t4(s,da,n),da in c||t4(c,da,n),i7(o)}):pU=function(){},// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Float32",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Float64",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Int8",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Int16",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Int32",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Uint8",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Uint8",function(t){return function(r,e,n){return t(this,r,e,n)}},!0),// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Uint16",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
pU("Uint32",function(t){return function(r,e,n){return t(this,r,e,n)}});var dp=V(n9),dd=ud.aTypedArray;// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
(0,ud.exportTypedArrayMethod)("copyWithin",function(t,r/* , end */){return dp(dd(this),t,r,arguments.length>2?arguments[2]:void 0)});var dg=eN.every,dy=ud.aTypedArray;// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
(0,ud.exportTypedArrayMethod)("every",function(t/* , thisArg */){return dg(dy(this),t,arguments.length>1?arguments[1]:void 0)});var db=ud.aTypedArray,dm=ud.exportTypedArrayMethod,dw=V("".slice);// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
dm("fill",function(t/* , start, end */){var r=arguments.length;db(this);var e="Big"===dw(et(this),0,3)?pX(t):+t;return _(of,this,e,r>1?arguments[1]:void 0,r>2?arguments[2]:void 0)},F(function(){var t=0;return(// eslint-disable-next-line es/no-typed-arrays -- safe
new Int8Array(2).fill({valueOf:function(){return t++}}),1!==t)}));var dS=eN.filter,dA={},dx={};dx=function(t,r){for(var e=0,n=r$(r),o=new t(n);n>e;)o[e]=r[e++];return o};var dE={},dO=ud.aTypedArrayConstructor,dT=ud.getTypedArrayConstructor;// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
dE=function(t){return dO(uU(t,dT(t)))},dA=function(t,r){return dx(dE(t),r)};var dI=ud.aTypedArray;// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
(0,ud.exportTypedArrayMethod)("filter",function(t/* , thisArg */){var r=dS(dI(this),t,arguments.length>1?arguments[1]:void 0);return dA(this,r)});var dR=eN.find,dj=ud.aTypedArray;// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
(0,ud.exportTypedArrayMethod)("find",function(t/* , thisArg */){return dR(dj(this),t,arguments.length>1?arguments[1]:void 0)});var dP=eN.findIndex,dM=ud.aTypedArray;// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
(0,ud.exportTypedArrayMethod)("findIndex",function(t/* , thisArg */){return dP(dM(this),t,arguments.length>1?arguments[1]:void 0)});var dL=eN.forEach,dk=ud.aTypedArray;// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
(0,ud.exportTypedArrayMethod)("forEach",function(t/* , thisArg */){dL(dk(this),t,arguments.length>1?arguments[1]:void 0)}),// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
(0,ud.exportTypedArrayStaticMethod)("from",pY,pF);var dC=rD.includes,dN=ud.aTypedArray;// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
(0,ud.exportTypedArrayMethod)("includes",function(t/* , fromIndex */){return dC(dN(this),t,arguments.length>1?arguments[1]:void 0)});var dU=rD.indexOf,dF=ud.aTypedArray;// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
(0,ud.exportTypedArrayMethod)("indexOf",function(t/* , fromIndex */){return dU(dF(this),t,arguments.length>1?arguments[1]:void 0)});var d_=tL("iterator"),dD=C.Uint8Array,dB=V(o$.values),dz=V(o$.keys),dq=V(o$.entries),dG=ud.aTypedArray,dW=ud.exportTypedArrayMethod,dH=dD&&dD.prototype,dV=!F(function(){dH[d_].call([1])}),d$=!!dH&&dH.values&&dH[d_]===dH.values&&"values"===dH.values.name,dY=function(){return dB(dG(this))};// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
dW("entries",function(){return dq(dG(this))},dV),// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
dW("keys",function(){return dz(dG(this))},dV),// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
dW("values",dY,dV||!d$,{name:"values"}),// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
dW(d_,dY,dV||!d$,{name:"values"});var dJ=ud.aTypedArray,dK=ud.exportTypedArrayMethod,dX=V([].join);// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
dK("join",function(t){return dX(dJ(this),t)});var dQ=ud.aTypedArray;// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
(0,ud.exportTypedArrayMethod)("lastIndexOf",function(t/* , fromIndex */){var r=arguments.length;return nx(iw,dQ(this),r>1?[t,arguments[1]]:[t])});var dZ=eN.map,d0=ud.aTypedArray;// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
(0,ud.exportTypedArrayMethod)("map",function(t/* , thisArg */){return dZ(d0(this),t,arguments.length>1?arguments[1]:void 0,function(t,r){return new(dE(t))(r)})});var d1=ud.aTypedArrayConstructor;// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
(0,ud.exportTypedArrayStaticMethod)("of",function(){for(var t=0,r=arguments.length,e=new(d1(this))(r);r>t;)e[t]=arguments[t++];return e},pF);var d2=ij.left,d5=ud.aTypedArray;// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
(0,ud.exportTypedArrayMethod)("reduce",function(t/* , initialValue */){var r=arguments.length;return d2(d5(this),t,r,r>1?arguments[1]:void 0)});var d4=ij.right,d6=ud.aTypedArray;// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
(0,ud.exportTypedArrayMethod)("reduceRight",function(t/* , initialValue */){var r=arguments.length;return d4(d6(this),t,r,r>1?arguments[1]:void 0)});var d3=ud.aTypedArray,d8=ud.exportTypedArrayMethod,d7=Math.floor;// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
d8("reverse",function(){for(var t,r=d3(this).length,e=d7(r/2),n=0;n<e;)t=this[n],this[n++]=this[--r],this[r]=t;return this});var d9=C.RangeError,gt=C.Int8Array,gr=gt&&gt.prototype,ge=gr&&gr.set,gn=ud.aTypedArray,go=ud.exportTypedArrayMethod,gi=!F(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var t=new Uint8ClampedArray(2);return _(ge,t,{length:1,0:3},1),3!==t[1]}),ga=gi&&ud.NATIVE_ARRAY_BUFFER_VIEWS&&F(function(){var t=new gt(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
go("set",function(t/* , offset */){gn(this);var r=pz(arguments.length>1?arguments[1]:void 0,1),e=tB(t);if(gi)return _(ge,this,e,r);var n=this.length,o=r$(e),i=0;if(o+r>n)throw d9("Wrong length");for(;i<o;)this[r+i]=e[i++]},!gi||ga);var gu=ud.aTypedArray;// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
(0,ud.exportTypedArrayMethod)("slice",function(t,r){for(var e=nI(gu(this),t,r),n=dE(this),o=0,i=e.length,a=new n(i);i>o;)a[o]=e[o++];return a},F(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
new Int8Array(1).slice()}));var gs=eN.some,gc=ud.aTypedArray;// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
(0,ud.exportTypedArrayMethod)("some",function(t/* , thisArg */){return gs(gc(this),t,arguments.length>1?arguments[1]:void 0)});var gf=ud.aTypedArray,gl=ud.exportTypedArrayMethod,gh=C.Uint16Array,gv=gh&&eF(gh.prototype.sort),gp=!!gv&&!(F(function(){gv(new gh(2),null)})&&F(function(){gv(new gh(2),{})})),gd=!!gv&&!F(function(){// feature detection can be too slow, so check engines versions
if(ty)return ty<74;if(iK)return iK<67;if(iQ)return!0;if(iZ)return iZ<602;var t,r,e=new gh(516),n=Array(516);for(t=0;t<516;t++)r=t%4,e[t]=515-t,n[t]=t-2*r+3;for(gv(e,function(t,r){return(t/4|0)-(r/4|0)}),t=0;t<516;t++)if(e[t]!==n[t])return!0});// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
gl("sort",function(t){return(void 0!==t&&tT(t),gd)?gv(this,t):iH(gf(this),function(r,e){return void 0!==t?+t(r,e)||0:e!=e?-1:r!=r?1:0===r&&0===e?1/r>0&&1/e<0?1:-1:r>e})},!gd||gp);var gg=ud.aTypedArray;// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
(0,ud.exportTypedArrayMethod)("subarray",function(t,r){var e=gg(this),n=e.length,o=rB(t,n);return new(dE(e))(e.buffer,e.byteOffset+o*e.BYTES_PER_ELEMENT,rY((void 0===r?n:rB(r,n))-o))});var gy=C.Int8Array,gb=ud.aTypedArray,gm=ud.exportTypedArrayMethod,gw=[].toLocaleString,gS=!!gy&&F(function(){gw.call(new gy(1))});// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
gm("toLocaleString",function(){return nx(gw,gS?nI(gb(this)):gb(this),nI(arguments))},F(function(){return[1,2].toLocaleString()!==new gy([1,2]).toLocaleString()})||!F(function(){gy.prototype.toLocaleString.call([1,2])}));var gA=ud.exportTypedArrayMethod,gx=C.Uint8Array,gE=gx&&gx.prototype||{},gO=[].toString,gT=V([].join);F(function(){gO.call({})})&&(gO=function(){return gT(this)});var gI=gE.toString!==gO;// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
gA("toString",gO,gI);var gR={},gj=sM.getWeakData,gP=rd.set,gM=rd.getterFor,gL=eN.find,gk=eN.findIndex,gC=V([].splice),gN=0,gU=function(t){return t.frozen||(t.frozen=new gF)},gF=function(){this.entries=[]},g_=function(t,r){return gL(t.entries,function(t){return t[0]===r})};gF.prototype={get:function(t){var r=g_(this,t);if(r)return r[1]},has:function(t){return!!g_(this,t)},set:function(t,r){var e=g_(this,t);e?e[1]=r:this.entries.push([t,r])},delete:function(t){var r=gk(this.entries,function(r){return r[0]===t});return~r&&gC(this.entries,r,1),!!~r}},gR={getConstructor:function(t,r,e,n){var o=t(function(t,o){ac(t,i),gP(t,{type:r,id:gN++,frozen:void 0}),te(o)||sq(o,t[n],{that:t,AS_ENTRIES:e})}),i=o.prototype,a=gM(r),u=function(t,r,e){var n=a(t),o=gj(t3(r),!0);return!0===o?gU(n).set(r,e):o[n.id]=e,t};return as(i,{// `{ WeakMap, WeakSet }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.delete
// https://tc39.es/ecma262/#sec-weakset.prototype.delete
delete:function(t){var r=a(this);if(!ta(t))return!1;var e=gj(t);return!0===e?gU(r).delete(t):e&&tD(e,r.id)&&delete e[r.id]},// `{ WeakMap, WeakSet }.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.has
// https://tc39.es/ecma262/#sec-weakset.prototype.has
has:function(t){var r=a(this);if(!ta(t))return!1;var e=gj(t);return!0===e?gU(r).has(t):e&&tD(e,r.id)}}),as(i,e?{// `WeakMap.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.get
get:function(t){var r=a(this);if(ta(t)){var e=gj(t);return!0===e?gU(r).get(t):e?e[r.id]:void 0}},// `WeakMap.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.set
set:function(t,r){return u(this,t,r)}}:{// `WeakSet.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-weakset.prototype.add
add:function(t){return u(this,t,!0)}}),o}};var gD=rd.enforce,gB=Object,gz=Array.isArray,gq=gB.isExtensible,gG=gB.isFrozen,gW=gB.isSealed,gH=gB.freeze,gV=gB.seal,g$={},gY={},gJ=!C.ActiveXObject&&"ActiveXObject"in C,gK=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},gX=sP("WeakMap",gK,gR),gQ=gX.prototype,gZ=V(gQ.set);// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if(rg){if(gJ){T=gR.getConstructor(gK,"WeakMap",!0),sM.enable();var g0=V(gQ.delete),g1=V(gQ.has),g2=V(gQ.get);as(gQ,{delete:function(t){if(ta(t)&&!gq(t)){var r=gD(this);return r.frozen||(r.frozen=new T),g0(this,t)||r.frozen.delete(t)}return g0(this,t)},has:function(t){if(ta(t)&&!gq(t)){var r=gD(this);return r.frozen||(r.frozen=new T),g1(this,t)||r.frozen.has(t)}return g1(this,t)},get:function(t){if(ta(t)&&!gq(t)){var r=gD(this);return r.frozen||(r.frozen=new T),g1(this,t)?g2(this,t):r.frozen.get(t)}return g2(this,t)},set:function(t,r){if(ta(t)&&!gq(t)){var e=gD(this);e.frozen||(e.frozen=new T),g1(this,t)?gZ(this,t,r):e.frozen.set(t,r)}else gZ(this,t,r);return this}});// Chakra Edge frozen keys fix
}else sU&&F(function(){var t=gH([]);return gZ(new gX,t,1),!gG(t)})&&as(gQ,{set:function(t,r){var e;return gz(t)&&(gG(t)?e=g$:gW(t)&&(e=gY)),gZ(this,t,r),e===g$&&gH(t),e===gY&&gV(t),this}})}// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
sP("WeakSet",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},gR);var g5={};// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
g5=function(t,r){ta(r)&&"cause"in r&&t4(t,"cause",r.cause)};var g4={},g6={},g3=Error,g8=V("".replace),g7=String(g3("zxcasd").stack),g9=/\n\s*at [^:]*:[^\n]*/,yt=g9.test(g7);g6=function(t,r){if(yt&&"string"==typeof t&&!g3.prepareStackTrace)for(;r--;)t=g8(t,g9,"");return t};var yr={};yr=!F(function(){var t=Error("a");return!("stack"in t)||(// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,"stack",G(1,7)),7!==t.stack)});// non-standard V8
var ye=Error.captureStackTrace;g4=function(t,r,e,n){yr&&(ye?ye(t,r):t4(t,"stack",g6(e,n)))};var yn={};yn=function(t,r){return void 0===t?arguments.length<2?"":r:r9(t)};var yo=tL("toStringTag"),yi=Error,ya=[].push,yu=function(t,r/* , options */){var e,n=tp(ys,this);o8?e=o8(yi(),n?oQ(this):ys):(e=n?this:ec(ys),t4(e,yo,"Error")),void 0!==r&&t4(e,"message",yn(r)),g4(e,yu,e.stack,1),arguments.length>2&&g5(e,arguments[2]);var o=[];return sq(t,ya,{that:o}),t4(e,"errors",o),e};o8?o8(yu,yi):rU(yu,yi,{name:!0});var ys=yu.prototype=ec(yi.prototype,{constructor:G(1,yu),message:G(1,""),name:G(1,"AggregateError")});// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
k({global:!0,constructor:!0,arity:2},{AggregateError:yu}),// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
k({global:!0,forced:C.globalThis!==C},{globalThis:C}),// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
k({target:"Promise",stat:!0,forced:ha},{allSettled:function(t){var r=this,e=S(r),n=e.resolve,o=e.reject,i=lk(function(){var e=tT(r.resolve),o=[],i=0,a=1;sq(t,function(t){var u=i++,s=!1;a++,_(e,r,t).then(function(t){!s&&(s=!0,o[u]={status:"fulfilled",value:t},--a||n(o))},function(t){!s&&(s=!0,o[u]={status:"rejected",reason:t},--a||n(o))})}),--a||n(o)});return i.error&&o(i.value),e.promise}});var yc="No one promise resolved";// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
k({target:"Promise",stat:!0,forced:ha},{any:function(t){var r=this,e=tv("AggregateError"),n=S(r),o=n.resolve,i=n.reject,a=lk(function(){var n=tT(r.resolve),a=[],u=0,s=1,c=!1;sq(t,function(t){var f=u++,l=!1;s++,_(n,r,t).then(function(t){l||c||(c=!0,o(t))},function(t){!l&&!c&&(l=!0,a[f]=t,--s||i(new e(a,yc)))})}),--s||i(new e(a,yc))});return a.error&&i(a.value),n.promise}});var yf=tL("matchAll"),yl="RegExp String",yh=yl+" Iterator",yv=rd.set,yp=rd.getterFor(yh),yd=RegExp.prototype,yg=TypeError,yy=eF("".indexOf),yb=eF("".matchAll),ym=!!yb&&!F(function(){yb("a",/./)}),yw=oK(function(t,r,e,n){yv(this,{type:yh,regexp:t,string:r,global:e,unicode:n,done:!1})},yl,function(){var t=yp(this);if(t.done)return iv(void 0,!0);var r=t.regexp,e=t.string,n=vZ(r,e);return null===n?(t.done=!0,iv(void 0,!0)):(t.global?""===r9(n[0])&&(r.lastIndex=vX(e,rY(r.lastIndex),t.unicode)):t.done=!0,iv(n,!1))}),yS=function(t){var r,e,n,o=t3(this),i=r9(t),a=uU(o,RegExp),u=r9(hL(o));return r=new a(a===RegExp?o.source:o,u),e=!!~yy(u,"g"),n=!!~yy(u,"u"),r.lastIndex=rY(o.lastIndex),new yw(r,i,e,n)};// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
k({target:"String",proto:!0,forced:ym},{matchAll:function(t){var r,e,n,o=tr(this);if(te(t)){if(ym)return yb(o,t)}else{if(hP(t)&&!~yy(r9(tr(hL(t))),"g"))throw yg("`.matchAll` does not allow non-global regexes");if(ym)return yb(o,t);if(void 0===(e=tO(t,yf))&&tC&&"RegExp"===K(t)&&(e=yS),e)return _(e,t,o)}return r=r9(o),n=RegExp(t,"g"),tC?_(yS,n,r):n[yf](r)}}),tC||yf in yd||ri(yd,yf,yS);var yA=tL("replace"),yx=TypeError,yE=V("".indexOf),yO=V("".replace),yT=V("".slice),yI=Math.max,yR=function(t,r,e){return e>t.length?-1:""===r?e:yE(t,r,e)};// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
k({target:"String",proto:!0},{replaceAll:function(t,r){var e,n,o,i,a,u,s,c,f=tr(this),l=0,h=0,v="";if(!te(t)){if((e=hP(t))&&!~yE(r9(tr(hL(t))),"g"))throw yx("`.replaceAll` does not allow non-global regexes");if(n=tO(t,yA))return _(n,t,f,r);if(tC&&e)return yO(r9(f),t,r)}for(o=r9(f),i=r9(t),(a=tu(r))||(r=r9(r)),s=yI(1,u=i.length),l=yR(o,i,0);-1!==l;)c=a?r9(r(i,l,o)):v3(i,o,l,[],void 0,r),v+=yT(o,h,l)+c,h=l+u,l=yR(o,i,l+s);return h<o.length&&(v+=yT(o,h)),v}});var yj=a4,yP=a0,yM=C.Symbol;if(// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
eR("dispose"),yM){var yL=yP(yM,"dispose");// workaround of NodeJS 20.4 bug
// https://github.com/nodejs/node/issues/48699
// and incorrect descriptor from some transpilers and userland helpers
yL.enumerable&&yL.configurable&&yL.writable&&yj(yM,"dispose",{value:yL.value,enumerable:!1,configurable:!1,writable:!1})}var yk={};// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
yk={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};var yC={},yN=tZ("span").classList,yU=yN&&yN.constructor&&yN.constructor.prototype;yC=yU===Object.prototype?void 0:yU;var yF=function(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t&&t.forEach!==oS)try{t4(t,"forEach",oS)}catch(r){t.forEach=oS}};for(var y_ in yk)yk[y_]&&yF(C[y_]&&C[y_].prototype);yF(yC);var yD=tL("iterator"),yB=tL("toStringTag"),yz=o$.values,yq=function(t,r){if(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t[yD]!==yz)try{t4(t,yD,yz)}catch(r){t[yD]=yz}if(t[yB]||t4(t,yB,r),yk[r]){for(var e in o$)// some Chrome versions have non-configurable methods on DOMTokenList
if(t[e]!==o$[e])try{t4(t,e,o$[e])}catch(r){t[e]=o$[e]}}}};for(var yG in yk)yq(C[yG]&&C[yG].prototype,yG);yq(yC,"DOMTokenList");var yW=f7.clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
k({global:!0,bind:!0,enumerable:!0,forced:C.clearImmediate!==yW},{clearImmediate:yW});var yH=f7.set,yV={},y$={};/* global Bun -- Deno case */y$="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var yY=C.Function,yJ=/MSIE .\./.test(tb)||y$&&((o=C.Bun.version.split(".")).length<3||"0"===o[0]&&(o[1]<3||"3"===o[1]&&"0"===o[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
yV=function(t,r){var e=r?2:1;return yJ?function(n,o/* , ...arguments */){var i=f9(arguments.length,1)>e,a=tu(n)?n:yY(n),u=i?nI(arguments,e):[],s=i?function(){nx(a,this,u)}:a;return r?t(s,o):t(s)}:t};// https://github.com/oven-sh/bun/issues/1633
var yK=C.setImmediate?yV(yH,!1):yH;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
k({global:!0,bind:!0,enumerable:!0,forced:C.setImmediate!==yK},{setImmediate:yK});var yX=C.process;// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
k({global:!0,enumerable:!0,dontCallGetSet:!0},{queueMicrotask:function(t){f9(arguments.length,1),tT(t);var r=ik&&yX.domain;ly(r?r.bind(t):t)}});var yQ=yV(C.setInterval,!0);// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
k({global:!0,bind:!0,forced:C.setInterval!==yQ},{setInterval:yQ});var yZ=yV(C.setTimeout,!0);// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
k({global:!0,bind:!0,forced:C.setTimeout!==yZ},{setTimeout:yZ});var y0={},y1=tL("iterator");y0=!F(function(){// eslint-disable-next-line unicorn/relative-url-style -- required for testing
var t=new URL("b?a=1&b=2&c=3","http://a"),r=t.searchParams,e=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",r.forEach(function(t,e){r.delete("b"),n+=e+t}),e.delete("a",2),// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
e.delete("b",void 0),tC&&(!t.toJSON||!e.has("a",1)||e.has("a",2)||!e.has("a",void 0)||e.has("b"))||!r.size&&(tC||!U)||!r.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[y1]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host});var y2=vA.codeAt,y5={},y4=/[^\0-\u007E]/,y6=/[.\u3002\uFF0E\uFF61]/g,y3="Overflow: input needs wider integers to process",y8=RangeError,y7=V(y6.exec),y9=Math.floor,bt=String.fromCharCode,br=V("".charCodeAt),be=V([].join),bn=V([].push),bo=V("".replace),bi=V("".split),ba=V("".toLowerCase),bu=function(t){for(var r=[],e=0,n=t.length;e<n;){var o=br(t,e++);if(o>=55296&&o<=56319&&e<n){// It's a high surrogate, and there is a next character.
var i=br(t,e++);(64512&i)==56320?bn(r,((1023&o)<<10)+(1023&i)+65536):(// It's an unmatched surrogate; only append this code unit, in case the
// next code unit is the high surrogate of a surrogate pair.
bn(r,o),e--)}else bn(r,o)}return r},bs=function(t){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return t+22+75*(t<26)},bc=function(t,r,e){var n=0;for(t=e?y9(t/700):t>>1,t+=y9(t/r);t>455;)t=y9(t/35),n+=36;return y9(n+36*t/(t+38))},bf=function(t){var r,e,n=[],o=// Convert the input in UCS-2 to an array of Unicode code points.
(t=bu(t)).length,i=128,a=0,u=72;// Handle the basic code points.
for(r=0;r<t.length;r++)(e=t[r])<128&&bn(n,bt(e));var s=n.length,c=s;// number of basic code points.
// Main encoding loop:
for(s&&bn(n,"-");c<o;){// All non-basic code points < n have been handled already. Find the next larger one:
var f=2147483647;for(r=0;r<t.length;r++)(e=t[r])>=i&&e<f&&(f=e);// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
var l=c+1;if(f-i>y9((2147483647-a)/l))throw y8(y3);for(a+=(f-i)*l,i=f,r=0;r<t.length;r++){if((e=t[r])<i&&++a>2147483647)throw y8(y3);if(e===i){for(// Represent delta as a generalized variable-length integer.
var h=a,v=36;;){var p=v<=u?1:v>=u+26?26:v-u;if(h<p)break;var d=h-p,g=36-p;bn(n,bt(bs(p+d%g))),h=y9(d/g),v+=36}bn(n,bt(bs(h))),u=bc(a,l,c===s),a=0,c++}}a++,i++}return be(n,"")};y5=function(t){var r,e,n=[],o=bi(bo(ba(t),y6,"."),".");for(r=0;r<o.length;r++)bn(n,y7(y4,e=o[r])?"xn--"+bf(e):e);return be(n,".")};var bl={},bh=tL("iterator"),bv="URLSearchParams",bp=bv+"Iterator",bd=rd.set,bg=rd.getterFor(bv),by=rd.getterFor(bp),bb=Object.getOwnPropertyDescriptor,bm=function(t){if(!U)return C[t];var r=bb(C,t);return r&&r.value},bw=bm("fetch"),bS=bm("Request"),bA=bm("Headers"),bx=bS&&bS.prototype,bE=bA&&bA.prototype,bO=C.RegExp,bT=C.TypeError,bI=C.decodeURIComponent,bR=C.encodeURIComponent,bj=V("".charAt),bP=V([].join),bM=V([].push),bL=V("".replace),bk=V([].shift),bC=V([].splice),bN=V("".split),bU=V("".slice),bF=/\+/g,b_=[,,,,],bD=function(t){try{return bI(t)}catch(r){return t}},bB=function(t){var r,e=bL(t,bF," "),n=4;try{return bI(e)}catch(t){for(;n;)e=bL(e,b_[(r=n--)-1]||(b_[r-1]=bO("((?:%[\\da-f]{2}){"+r+"})","gi")),bD);return e}},bz=/[!'()~]|%20/g,bq={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},bG=function(t){return bq[t]},bW=function(t){return bL(bR(t),bz,bG)},bH=oK(function(t,r){bd(this,{type:bp,iterator:oP(bg(t).entries),kind:r})},"Iterator",function(){var t=by(this),r=t.kind,e=t.iterator.next(),n=e.value;return e.done||(e.value="keys"===r?n.key:"values"===r?n.value:[n.key,n.value]),e},!0),bV=function(t){this.entries=[],this.url=null,void 0!==t&&(ta(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===bj(t,0)?bU(t,1):t:r9(t)))};bV.prototype={type:bv,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var r,e,n,o,i,a,u,s=oM(t);if(s)for(e=(r=oP(t,s)).next;!(n=_(e,r)).done;){if(i=(o=oP(t3(n.value))).next,(a=_(i,o)).done||(u=_(i,o)).done||!_(i,o).done)throw bT("Expected sequence with length 2");bM(this.entries,{key:r9(a.value),value:r9(u.value)})}else for(var c in t)tD(t,c)&&bM(this.entries,{key:c,value:r9(t[c])})},parseQuery:function(t){if(t)for(var r,e,n=bN(t,"&"),o=0;o<n.length;)(r=n[o++]).length&&(e=bN(r,"="),bM(this.entries,{key:bB(bk(e)),value:bB(bP(e,"="))}))},serialize:function(){for(var t,r=this.entries,e=[],n=0;n<r.length;)bM(e,bW((t=r[n++]).key)+"="+bW(t.value));return bP(e,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var b$=function(){ac(this,bY);var t=arguments.length>0?arguments[0]:void 0,r=bd(this,new bV(t));U||(this.size=r.entries.length)},bY=b$.prototype;// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if(as(bY,{// `URLSearchParams.prototype.append` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-append
append:function(t,r){var e=bg(this);f9(arguments.length,2),bM(e.entries,{key:r9(t),value:r9(r)}),!U&&this.length++,e.updateURL()},// `URLSearchParams.prototype.delete` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-delete
delete:function(t/* , value */){for(var r=bg(this),e=f9(arguments.length,1),n=r.entries,o=r9(t),i=e<2?void 0:arguments[1],a=void 0===i?i:r9(i),u=0;u<n.length;){var s=n[u];if(s.key===o&&(void 0===a||s.value===a)){if(bC(n,u,1),void 0!==a)break}else u++}U||(this.size=n.length),r.updateURL()},// `URLSearchParams.prototype.get` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-get
get:function(t){var r=bg(this).entries;f9(arguments.length,1);for(var e=r9(t),n=0;n<r.length;n++)if(r[n].key===e)return r[n].value;return null},// `URLSearchParams.prototype.getAll` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-getall
getAll:function(t){var r=bg(this).entries;f9(arguments.length,1);for(var e=r9(t),n=[],o=0;o<r.length;o++)r[o].key===e&&bM(n,r[o].value);return n},// `URLSearchParams.prototype.has` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-has
has:function(t/* , value */){for(var r=bg(this).entries,e=f9(arguments.length,1),n=r9(t),o=e<2?void 0:arguments[1],i=void 0===o?o:r9(o),a=0;a<r.length;){var u=r[a++];if(u.key===n&&(void 0===i||u.value===i))return!0}return!1},// `URLSearchParams.prototype.set` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-set
set:function(t,r){var e,n=bg(this);f9(arguments.length,1);for(var o=n.entries,i=!1,a=r9(t),u=r9(r),s=0;s<o.length;s++)(e=o[s]).key===a&&(i?bC(o,s--,1):(i=!0,e.value=u));i||bM(o,{key:a,value:u}),U||(this.size=o.length),n.updateURL()},// `URLSearchParams.prototype.sort` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-sort
sort:function(){var t=bg(this);iH(t.entries,function(t,r){return t.key>r.key?1:-1}),t.updateURL()},// `URLSearchParams.prototype.forEach` method
forEach:function(t/* , thisArg */){for(var r,e=bg(this).entries,n=eU(t,arguments.length>1?arguments[1]:void 0),o=0;o<e.length;)n((r=e[o++]).value,r.key,this)},// `URLSearchParams.prototype.keys` method
keys:function(){return new bH(this,"keys")},// `URLSearchParams.prototype.values` method
values:function(){return new bH(this,"values")},// `URLSearchParams.prototype.entries` method
entries:function(){return new bH(this,"entries")}},{enumerable:!0}),// `URLSearchParams.prototype[@@iterator]` method
ri(bY,bh,bY.entries,{name:"entries"}),// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
ri(bY,"toString",function(){return bg(this).serialize()},{enumerable:!0}),U&&eI(bY,"size",{get:function(){return bg(this).entries.length},configurable:!0,enumerable:!0}),eL(b$,bv),k({global:!0,constructor:!0,forced:!y0},{URLSearchParams:b$}),!y0&&tu(bA)){var bJ=V(bE.has),bK=V(bE.set),bX=function(t){if(ta(t)){var r,e=t.body;if(et(e)===bv)return bJ(r=t.headers?new bA(t.headers):new bA,"content-type")||bK(r,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),ec(t,{body:G(0,r9(e)),headers:G(0,r)})}return t};if(tu(bw)&&k({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t/* , init */){return bw(t,arguments.length>1?bX(arguments[1]):{})}}),tu(bS)){var bQ=function(t/* , init */){return ac(this,bx),new bS(t,arguments.length>1?bX(arguments[1]):{})};bx.constructor=bQ,bQ.prototype=bx,k({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:bQ})}}bl={URLSearchParams:b$,getState:bg};var bZ=rd.set,b0=rd.getterFor("URL"),b1=bl.URLSearchParams,b2=bl.getState,b5=C.URL,b4=C.TypeError,b6=C.parseInt,b3=Math.floor,b8=Math.pow,b7=V("".charAt),b9=V(/./.exec),mt=V([].join),mr=V(1..toString),me=V([].pop),mn=V([].push),mo=V("".replace),mi=V([].shift),ma=V("".split),mu=V("".slice),ms=V("".toLowerCase),mc=V([].unshift),mf="Invalid scheme",ml="Invalid host",mh="Invalid port",mv=/[a-z]/i,mp=/[\d+-.a-z]/i,md=/\d/,mg=/^0x/i,my=/^[0-7]+$/,mb=/^\d+$/,mm=/^[\da-f]+$/i,mw=/[\0\t\n\r #%/:<>?@[\\\]^|]/,mS=/[\0\t\n\r #/:<>?@[\\\]^|]/,mA=/^[\u0000-\u0020]+/,mx=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,mE=/[\t\n\r]/g,mO=function(t){var r,e,n,o,i,a,u,s=ma(t,".");if(s.length&&""===s[s.length-1]&&s.length--,(r=s.length)>4)return t;for(n=0,e=[];n<r;n++){if(""===(o=s[n]))return t;if(i=10,o.length>1&&"0"===b7(o,0)&&(i=b9(mg,o)?16:8,o=mu(o,8===i?1:2)),""===o)a=0;else{if(!b9(10===i?mb:8===i?my:mm,o))return t;a=b6(o,i)}mn(e,a)}for(n=0;n<r;n++)if(a=e[n],n===r-1){if(a>=b8(256,5-r))return null}else if(a>255)return null;for(n=0,u=me(e);n<e.length;n++)u+=e[n]*b8(256,3-n);return u},mT=function(t){var r,e,n,o,i,a,u,s=[0,0,0,0,0,0,0,0],c=0,f=null,l=0,h=function(){return b7(t,l)};if(":"===h()){if(":"!==b7(t,1))return;l+=2,f=++c}for(;h();){if(8===c)return;if(":"===h()){if(null!==f)return;l++,f=++c;continue}for(r=e=0;e<4&&b9(mm,h());)r=16*r+b6(h(),16),l++,e++;if("."===h()){if(0===e||(l-=e,c>6))return;for(n=0;h();){if(o=null,n>0){if("."!==h()||!(n<4))return;l++}if(!b9(md,h()))return;for(;b9(md,h());){if(i=b6(h(),10),null===o)o=i;else{if(0===o)return;o=10*o+i}if(o>255)return;l++}s[c]=256*s[c]+o,(2==++n||4===n)&&c++}if(4!==n)return;break}if(":"===h()){if(l++,!h())return}else if(h())return;s[c++]=r}if(null!==f)for(a=c-f,c=7;0!==c&&a>0;)u=s[c],s[c--]=s[f+a-1],s[f+--a]=u;else if(8!==c)return;return s},mI=function(t){for(var r=null,e=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>e&&(r=n,e=o),n=null,o=0):(null===n&&(n=i),++o);return o>e&&(r=n,e=o),r},mR=function(t){var r,e,n,o;// ipv4
if("number"==typeof t){for(e=0,r=[];e<4;e++)mc(r,t%256),t=b3(t/256);return mt(r,".");// ipv6
}if("object"==typeof t){for(e=0,r="",n=mI(t);e<8;e++)(!o||0!==t[e])&&(o&&(o=!1),n===e?(r+=e?":":"::",o=!0):(r+=mr(t[e],16),e<7&&(r+=":")));return"["+r+"]"}return t},mj={},mP=fO({},mj,{" ":1,'"':1,"<":1,">":1,"`":1}),mM=fO({},mP,{"#":1,"?":1,"{":1,"}":1}),mL=fO({},mM,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),mk=function(t,r){var e=y2(t,0);return e>32&&e<127&&!tD(r,t)?t:encodeURIComponent(t)},mC={ftp:21,file:null,http:80,https:443,ws:80,wss:443},mN=function(t,r){var e;return 2===t.length&&b9(mv,b7(t,0))&&(":"===(e=b7(t,1))||!r&&"|"===e)},mU=function(t){var r;return t.length>1&&mN(mu(t,0,2))&&(2===t.length||"/"===(r=b7(t,2))||"\\"===r||"?"===r||"#"===r)},mF={},m_={},mD={},mB={},mz={},mq={},mG={},mW={},mH={},mV={},m$={},mY={},mJ={},mK={},mX={},mQ={},mZ={},m0={},m1={},m2={},m5={},m4=function(t,r,e){var n,o,i,a=r9(t);if(r){if(o=this.parse(a))throw b4(o);this.searchParams=null}else{if(void 0!==e&&(n=new m4(e,!0)),o=this.parse(a,null,n))throw b4(o);(i=b2(new b1)).bindURL(this),this.searchParams=i}};m4.prototype={type:"URL",// https://url.spec.whatwg.org/#url-parsing
// eslint-disable-next-line max-statements -- TODO
parse:function(t,r,e){var n=r||mF,o=0,i="",a=!1,u=!1,s=!1;for(t=r9(t),r||(this.scheme="",this.username="",this.password="",this.host=null,this.port=null,this.path=[],this.query=null,this.fragment=null,this.cannotBeABaseURL=!1,t=mo(t,mA,""),t=mo(t,mx,"$1")),t=mo(t,mE,""),c=ox(t);o<=c.length;){switch(f=c[o],n){case mF:if(f&&b9(mv,f))i+=ms(f),n=m_;else{if(r)return mf;n=mD;continue}break;case m_:if(f&&(b9(mp,f)||"+"===f||"-"===f||"."===f))i+=ms(f);else if(":"===f){if(r&&(this.isSpecial()!==tD(mC,i)||"file"===i&&(this.includesCredentials()||null!==this.port)||"file"===this.scheme&&!this.host))return;if(this.scheme=i,r){this.isSpecial()&&mC[this.scheme]===this.port&&(this.port=null);return}i="","file"===this.scheme?n=mK:this.isSpecial()&&e&&e.scheme===this.scheme?n=mB:this.isSpecial()?n=mW:"/"===c[o+1]?(n=mz,o++):(this.cannotBeABaseURL=!0,mn(this.path,""),n=m1)}else{if(r)return mf;i="",n=mD,o=0;continue}break;case mD:if(!e||e.cannotBeABaseURL&&"#"!==f)return mf;if(e.cannotBeABaseURL&&"#"===f){this.scheme=e.scheme,this.path=eS(e.path),this.query=e.query,this.fragment="",this.cannotBeABaseURL=!0,n=m5;break}n="file"===e.scheme?mK:mq;continue;case mB:if("/"===f&&"/"===c[o+1])n=mH,o++;else{n=mq;continue}break;case mz:if("/"===f){n=mV;break}n=m0;continue;case mq:if(this.scheme=e.scheme,f===I)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eS(e.path),this.query=e.query;else if("/"===f||"\\"===f&&this.isSpecial())n=mG;else if("?"===f)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eS(e.path),this.query="",n=m2;else if("#"===f)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eS(e.path),this.query=e.query,this.fragment="",n=m5;else{this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=eS(e.path),this.path.length--,n=m0;continue}break;case mG:if(this.isSpecial()&&("/"===f||"\\"===f))n=mH;else if("/"===f)n=mV;else{this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,n=m0;continue}break;case mW:if(n=mH,"/"!==f||"/"!==b7(i,o+1))continue;o++;break;case mH:if("/"!==f&&"\\"!==f){n=mV;continue}break;case mV:if("@"===f){a&&(i="%40"+i),a=!0,l=ox(i);for(var c,f,l,h,v,p,d=0;d<l.length;d++){var g=l[d];if(":"===g&&!s){s=!0;continue}var y=mk(g,mL);s?this.password+=y:this.username+=y}i=""}else if(f===I||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial()){if(a&&""===i)return"Invalid authority";o-=ox(i).length+1,i="",n=m$}else i+=f;break;case m$:case mY:if(r&&"file"===this.scheme){n=mQ;continue}if(":"!==f||u){if(f===I||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial()){if(this.isSpecial()&&""===i)return ml;if(r&&""===i&&(this.includesCredentials()||null!==this.port))return;if(h=this.parseHost(i))return h;if(i="",n=mZ,r)return;continue}"["===f?u=!0:"]"===f&&(u=!1),i+=f}else{if(""===i)return ml;if(h=this.parseHost(i))return h;if(i="",n=mJ,r===mY)return}break;case mJ:if(b9(md,f))i+=f;else{if(!(f===I||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial())&&!r)return mh;if(""!==i){var b=b6(i,10);if(b>65535)return mh;this.port=this.isSpecial()&&b===mC[this.scheme]?null:b,i=""}if(r)return;n=mZ;continue}break;case mK:if(this.scheme="file","/"===f||"\\"===f)n=mX;else if(e&&"file"===e.scheme)switch(f){case I:this.host=e.host,this.path=eS(e.path),this.query=e.query;break;case"?":this.host=e.host,this.path=eS(e.path),this.query="",n=m2;break;case"#":this.host=e.host,this.path=eS(e.path),this.query=e.query,this.fragment="",n=m5;break;default:mU(mt(eS(c,o),""))||(this.host=e.host,this.path=eS(e.path),this.shortenPath()),n=m0;continue}else{n=m0;continue}break;case mX:if("/"===f||"\\"===f){n=mQ;break}e&&"file"===e.scheme&&!mU(mt(eS(c,o),""))&&(mN(e.path[0],!0)?mn(this.path,e.path[0]):this.host=e.host),n=m0;continue;case mQ:if(f===I||"/"===f||"\\"===f||"?"===f||"#"===f){if(!r&&mN(i))n=m0;else if(""===i){if(this.host="",r)return;n=mZ}else{if(h=this.parseHost(i))return h;if("localhost"===this.host&&(this.host=""),r)return;i="",n=mZ}continue}i+=f;break;case mZ:if(this.isSpecial()){if(n=m0,"/"!==f&&"\\"!==f)continue}else if(r||"?"!==f){if(r||"#"!==f){if(f!==I&&(n=m0,"/"!==f))continue}else this.fragment="",n=m5}else this.query="",n=m2;break;case m0:if(f===I||"/"===f||"\\"===f&&this.isSpecial()||!r&&("?"===f||"#"===f)){if(".."===(v=ms(v=i))||"%2e."===v||".%2e"===v||"%2e%2e"===v?(this.shortenPath(),"/"===f||"\\"===f&&this.isSpecial()||mn(this.path,"")):"."===(p=i)||"%2e"===ms(p)?"/"===f||"\\"===f&&this.isSpecial()||mn(this.path,""):("file"===this.scheme&&!this.path.length&&mN(i)&&(this.host&&(this.host=""),i=b7(i,0)+":"),mn(this.path,i)),i="","file"===this.scheme&&(f===I||"?"===f||"#"===f))for(;this.path.length>1&&""===this.path[0];)mi(this.path);"?"===f?(this.query="",n=m2):"#"===f&&(this.fragment="",n=m5)}else i+=mk(f,mM);break;case m1:"?"===f?(this.query="",n=m2):"#"===f?(this.fragment="",n=m5):f!==I&&(this.path[0]+=mk(f,mj));break;case m2:r||"#"!==f?f!==I&&("'"===f&&this.isSpecial()?this.query+="%27":"#"===f?this.query+="%23":this.query+=mk(f,mj)):(this.fragment="",n=m5);break;case m5:f!==I&&(this.fragment+=mk(f,mP))}o++}},// https://url.spec.whatwg.org/#host-parsing
parseHost:function(t){var r,e,n;if("["===b7(t,0)){if("]"!==b7(t,t.length-1)||!(r=mT(mu(t,1,-1))))return ml;this.host=r;// opaque host
}else if(this.isSpecial()){if(b9(mw,t=y5(t))||null===(r=mO(t)))return ml;this.host=r}else{if(b9(mS,t))return ml;for(n=0,r="",e=ox(t);n<e.length;n++)r+=mk(e[n],mj);this.host=r}},// https://url.spec.whatwg.org/#cannot-have-a-username-password-port
cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"===this.scheme},// https://url.spec.whatwg.org/#include-credentials
includesCredentials:function(){return""!==this.username||""!==this.password},// https://url.spec.whatwg.org/#is-special
isSpecial:function(){return tD(mC,this.scheme)},// https://url.spec.whatwg.org/#shorten-a-urls-path
shortenPath:function(){var t=this.path,r=t.length;r&&("file"!==this.scheme||1!==r||!mN(t[0],!0))&&t.length--},// https://url.spec.whatwg.org/#concept-url-serializer
serialize:function(){var t=this.scheme,r=this.username,e=this.password,n=this.host,o=this.port,i=this.path,a=this.query,u=this.fragment,s=t+":";return null!==n?(s+="//",this.includesCredentials()&&(s+=r+(e?":"+e:"")+"@"),s+=mR(n),null!==o&&(s+=":"+o)):"file"===t&&(s+="//"),s+=this.cannotBeABaseURL?i[0]:i.length?"/"+mt(i,"/"):"",null!==a&&(s+="?"+a),null!==u&&(s+="#"+u),s},// https://url.spec.whatwg.org/#dom-url-href
setHref:function(t){var r=this.parse(t);if(r)throw b4(r);this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-origin
getOrigin:function(){var t=this.scheme,r=this.port;if("blob"===t)try{return new m6(t.path[0]).origin}catch(t){return"null"}return"file"!==t&&this.isSpecial()?t+"://"+mR(this.host)+(null!==r?":"+r:""):"null"},// https://url.spec.whatwg.org/#dom-url-protocol
getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(r9(t)+":",mF)},// https://url.spec.whatwg.org/#dom-url-username
getUsername:function(){return this.username},setUsername:function(t){var r=ox(r9(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var e=0;e<r.length;e++)this.username+=mk(r[e],mL)}},// https://url.spec.whatwg.org/#dom-url-password
getPassword:function(){return this.password},setPassword:function(t){var r=ox(r9(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var e=0;e<r.length;e++)this.password+=mk(r[e],mL)}},// https://url.spec.whatwg.org/#dom-url-host
getHost:function(){var t=this.host,r=this.port;return null===t?"":null===r?mR(t):mR(t)+":"+r},setHost:function(t){this.cannotBeABaseURL||this.parse(t,m$)},// https://url.spec.whatwg.org/#dom-url-hostname
getHostname:function(){var t=this.host;return null===t?"":mR(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,mY)},// https://url.spec.whatwg.org/#dom-url-port
getPort:function(){var t=this.port;return null===t?"":r9(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(""===(t=r9(t))?this.port=null:this.parse(t,mJ))},// https://url.spec.whatwg.org/#dom-url-pathname
getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+mt(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,mZ))},// https://url.spec.whatwg.org/#dom-url-search
getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){""===(t=r9(t))?this.query=null:("?"===b7(t,0)&&(t=mu(t,1)),this.query="",this.parse(t,m2)),this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-searchparams
getSearchParams:function(){return this.searchParams.facade},// https://url.spec.whatwg.org/#dom-url-hash
getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){if(""===(t=r9(t))){this.fragment=null;return}"#"===b7(t,0)&&(t=mu(t,1)),this.fragment="",this.parse(t,m5)},update:function(){this.query=this.searchParams.serialize()||null}};// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var m6=function(t/* , base */){var r=ac(this,m3),e=f9(arguments.length,1)>1?arguments[1]:void 0,n=bZ(r,new m4(t,!1,e));U||(r.href=n.serialize(),r.origin=n.getOrigin(),r.protocol=n.getProtocol(),r.username=n.getUsername(),r.password=n.getPassword(),r.host=n.getHost(),r.hostname=n.getHostname(),r.port=n.getPort(),r.pathname=n.getPathname(),r.search=n.getSearch(),r.searchParams=n.getSearchParams(),r.hash=n.getHash())},m3=m6.prototype,m8=function(t,r){return{get:function(){return b0(this)[t]()},set:r&&function(t){return b0(this)[r](t)},configurable:!0,enumerable:!0}};if(U&&(// `URL.prototype.href` accessors pair
// https://url.spec.whatwg.org/#dom-url-href
eI(m3,"href",m8("serialize","setHref")),// `URL.prototype.origin` getter
// https://url.spec.whatwg.org/#dom-url-origin
eI(m3,"origin",m8("getOrigin")),// `URL.prototype.protocol` accessors pair
// https://url.spec.whatwg.org/#dom-url-protocol
eI(m3,"protocol",m8("getProtocol","setProtocol")),// `URL.prototype.username` accessors pair
// https://url.spec.whatwg.org/#dom-url-username
eI(m3,"username",m8("getUsername","setUsername")),// `URL.prototype.password` accessors pair
// https://url.spec.whatwg.org/#dom-url-password
eI(m3,"password",m8("getPassword","setPassword")),// `URL.prototype.host` accessors pair
// https://url.spec.whatwg.org/#dom-url-host
eI(m3,"host",m8("getHost","setHost")),// `URL.prototype.hostname` accessors pair
// https://url.spec.whatwg.org/#dom-url-hostname
eI(m3,"hostname",m8("getHostname","setHostname")),// `URL.prototype.port` accessors pair
// https://url.spec.whatwg.org/#dom-url-port
eI(m3,"port",m8("getPort","setPort")),// `URL.prototype.pathname` accessors pair
// https://url.spec.whatwg.org/#dom-url-pathname
eI(m3,"pathname",m8("getPathname","setPathname")),// `URL.prototype.search` accessors pair
// https://url.spec.whatwg.org/#dom-url-search
eI(m3,"search",m8("getSearch","setSearch")),// `URL.prototype.searchParams` getter
// https://url.spec.whatwg.org/#dom-url-searchparams
eI(m3,"searchParams",m8("getSearchParams")),// `URL.prototype.hash` accessors pair
// https://url.spec.whatwg.org/#dom-url-hash
eI(m3,"hash",m8("getHash","setHash"))),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
ri(m3,"toJSON",function(){return b0(this).serialize()},{enumerable:!0}),// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
ri(m3,"toString",function(){return b0(this).serialize()},{enumerable:!0}),b5){var m7=b5.createObjectURL,m9=b5.revokeObjectURL;m7&&ri(m6,"createObjectURL",eU(m7,b5)),m9&&ri(m6,"revokeObjectURL",eU(m9,b5))}eL(m6,"URL"),k({global:!0,constructor:!0,forced:!y0,sham:!U},{URL:m6}),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
k({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return _(URL.prototype.toString,this)}});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt=function(t){var r,e=function(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]},n=function(t,r,e,n){var o=Object.create((r&&r.prototype instanceof i?r:i).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
b(o,"_invoke",{value:f(t,e,new v(n||[]))}),o)},o=// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}},i=// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function(){},a=function(){},u=function(){},s=// Iterator interface in terms of a single ._invoke method.
function(t){["next","throw","return"].forEach(function(r){e(t,r,function(t){return this._invoke(r,t)})})},c=function(t,r){var e;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
b(this,"_invoke",{value:function(n,i){function a(){return new r(function(e,a){!function e(n,i,a,u){var s=o(t[n],t,i);if("throw"===s.type)u(s.arg);else{var c=s.arg,f=c.value;return f&&"object"==typeof f&&y.call(f,"__await")?r.resolve(f.__await).then(function(t){e("next",t,a,u)},function(t){e("throw",t,a,u)}):r.resolve(f).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
c.value=t,a(c)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return e("throw",t,a,u)})}}(n,i,e,a)})}return e=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
e?e.then(a,// invocations of the iterator.
a):a()}})},f=function(t,e,n){var i=x;return function(a,u){if(i===O)throw Error("Generator is already running");if(i===T){if("throw"===a)throw u;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return d()}for(n.method=a,n.arg=u;;){var s=n.delegate;if(s){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(e,n){var i=n.method,a=e.iterator[i];if(a===r)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&e.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),I);var u=o(a,e.iterator,n.arg);if("throw"===u.type)return n.method="throw",n.arg=u.arg,n.delegate=null,I;var s=u.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[e.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,I):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,I)}(s,n);if(c){if(c===I)continue;return c}}if("next"===n.method)// function.sent implementation.
n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===x)throw i=T,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=O;var f=o(t,e,n);if("normal"===f.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
i=n.done?T:E,f.arg===I)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(i=T,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
n.method="throw",n.arg=f.arg)}}},l=function(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)},h=function(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r},v=function(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)},p=function(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(y.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}// Return an iterator with no values.
return{next:d}},d=function(){return{value:r,done:!0}},g=Object.prototype,y=g.hasOwnProperty,b=Object.defineProperty||function(t,r,e){t[r]=e.value},m="function"==typeof Symbol?Symbol:{},w=m.iterator||"@@iterator",S=m.asyncIterator||"@@asyncIterator",A=m.toStringTag||"@@toStringTag";try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
e({},"")}catch(t){e=function(t,r,e){return t[r]=e}}t.wrap=n;var x="suspendedStart",E="suspendedYield",O="executing",T="completed",I={},R={};e(R,w,function(){return this});var j=Object.getPrototypeOf,P=j&&j(j(p([])));P&&P!==g&&y.call(P,w)&&// of the polyfill.
(R=P);var M=u.prototype=i.prototype=Object.create(R);return a.prototype=u,b(M,"constructor",{value:u,configurable:!0}),b(u,"constructor",{value:a,configurable:!0}),a.displayName=e(u,A,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===a||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,e(t,A,"GeneratorFunction")),t.prototype=Object.create(M),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},s(c.prototype),e(c.prototype,S,function(){return this}),t.AsyncIterator=c,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(r,e,o,i,a){void 0===a&&(a=Promise);var u=new c(n(r,e,o,i),a);return t.isGeneratorFunction(e)?u// If outerFn is a generator, return the full iterator.
:u.next().then(function(t){return t.done?t.value:u.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
s(M),e(M,A,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
e(M,w,function(){return this}),e(M,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=p,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){var e=function(e,o){return a.type="throw",a.arg=t,n.next=e,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
n.method="next",n.arg=r),!!o};if(this.done)throw t;for(var n=this,o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return e("end");if(i.tryLoc<=this.prev){var u=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else if(s){if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var i=o?o.completion:{};return(i.type=t,i.arg=r,o)?(this.method="next",this.next=o.finallyLoc,I):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),I},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),h(e),I}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;h(e)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=r),I}},t}({});try{regeneratorRuntime=wt}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=wt:Function("r","regeneratorRuntime = r")(wt)}for(var wr="AIzaSyDJvk4A_K5SVv78Rl7Qaun_qFmU0_Xjo9Q",we=document.querySelector(".settings-menu"),wn=document.querySelector(".nav-user-icon"),wo=document.getElementById("dark-btn"),wi=document.querySelector(".posts"),wa=document.querySelector(".subscriptions"),wu=document.querySelector(".story-gallery"),ws=document.body,wc=function(t){var r=t.items[0].snippet;return{profilePic:r.thumbnails.high.url,channelTag:r.customUrl,name:r.title}},wf=(i=P(function(t){return L(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(t,"&key=").concat(wr))];case 1:return[4,r.sent().json()];case 2:return[2,wc(r.sent())];case 3:return console.error(r.sent()),[3,4];case 4:return[2]}})}),function(t){return i.apply(this,arguments)}),wl=function(t,r,e){var n=null==t?void 0:t.items[e].snippet;if(void 0!=n){var o=t.items[e].id,i=t.items[e].statistics,a=+i.viewCount,u=+i.likeCount,s=+i.commentCount,c=Math.floor((new Date-new Date(n.publishedAt))/1e3),f=Math.floor(c/60),l=Math.floor(f/60),h=Math.floor(l/24),v=0,p="";0==h&&0==l&&0==f?(v=c,p=" seconds ago",1==c&&(p=" second ago")):0==h&&0==l?(v=f,p=" minutes ago",1==f&&(p=" minute ago")):0==h?(v=l,1==l&&(p=" hour ago"),p=" hours ago"):(v=h,p=" days ago",1==h&&(p=" day ago"));var d=function(t){return t>=1e6?("0"==(t=(t/1e6).toFixed(1)).charAt(t.length-1)&&(t=Math.trunc(t)),t=t.toString()+"M"):t>1e3&&("0"==(t=(t/1e3).toFixed(1)).charAt(t.length-1)&&(t=Math.trunc(t)),t=t.toString()+"K"),t},g=" ",y=" ";return(null==n?void 0:n.tags)!=void 0&&((null==n?void 0:n.tags[0])!=void 0&&(g="#"+(null==n?void 0:n.tags[0])),(null==n?void 0:n.tags[1])!=void 0&&(y="#"+(null==n?void 0:n.tags[1]))),'\n    <div class="post-container">\n      <div class="post-row">\n        <div class="user-profile">\n          <img src="'.concat(r.profilePic,'" />\n          <div>\n            <p> ').concat(r.name,"</p>\n            <span> ").concat(v+p,' </span>\n          </div>\n        </div>\n        <a href="#"><i class="fas fa-ellipsis-v"></i></a>\n      </div>\n      <p class="post-text">\n        ').concat(n.title,'\n        <a href="#">').concat(g,'</a> <a href="#">').concat(y,'</a>\n      </p>\n      <iframe width="560" height="315" src="https://www.youtube.com/embed/').concat(o,'" class="post-vid" frameborder="0" allowfullscreen></iframe>\n      <div class="post-row">\n        <div class="activity-icons">\n          <div><i class="fa-solid fa-eye"></i> ').concat(d(a),'</div>\n          <div><button class="like-btn"><i class="fa-solid fa-thumbs-up" data-video-id="video').concat(e,'"></i></button> ').concat(d(u),'</div>\n          <div><i class="fa-solid fa-comments"></i> ').concat(d(s),'</div>\n        </div>\n        <div class="post-profile-icon">\n          <img src="https://yt3.ggpht.com/yti/AOXPAcWODTAzDO8acHR5anE77yyjaEuiWqAQ_casQ_Kpcg=s88-c-k-c0x00ffffff-no-rj" />\n          <i class="fas fa-caret-down"></i>\n        </div>\n      </div>\n    </div>\n  ')}},wh=(a=P(function(t){var r,e;return L(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=".concat(wr))];case 1:return[4,n.sent().json()];case 2:return[4,wf((r=n.sent()).items[t].snippet.channelId)];case 3:return e=n.sent(),wi.insertAdjacentHTML("beforeend",wl(r,e,t)),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t){return a.apply(this,arguments)}),wv=function(){var t,r=function(t){var r=t.querySelector(".fa-thumbs-up");if(r){var e=r.getAttribute("data-video-id"),n="liked_".concat(e);"on"===localStorage.getItem(n)&&r.classList.add("like-on"),r.addEventListener("click",function(){r.classList.toggle("like-on"),"on"===localStorage.getItem(n)?localStorage.setItem(n,"off"):localStorage.setItem(n,"on")})}};(t=document.querySelector(".posts"))&&new MutationObserver(function(t){var e=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var u=i.value;"childList"===u.type&&u.addedNodes.forEach(function(t){t instanceof HTMLElement&&r(t)})}}catch(t){n=!0,o=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw o}}}).observe(t,{childList:!0,subtree:!0})},wp=0;wp<5;wp++)wh(wp);document.addEventListener("DOMContentLoaded",function(){wv()});for(var wd=function(t,r){var e=localStorage.getItem("subStatus".concat(r));"subscribed"===e?(t.classList.remove("sub-btn-off"),t.classList.add("sub-btn-on"),t.textContent="Subscribed"):"unsubscribed"===e?(t.classList.remove("sub-btn-on"),t.classList.add("sub-btn-off"),t.textContent="Subscribe"):(t.classList.remove("sub-btn-off"),t.classList.add("sub-btn-on"),t.textContent="Subscribed")},wg=function(t,r){t.classList.contains("sub-btn-off")?(t.textContent="Subscribed",t.classList.add("sub-btn-on"),t.classList.remove("sub-btn-off"),localStorage.setItem("subStatus".concat(r),"subscribed")):t.classList.contains("sub-btn-on")?(t.textContent="Subscribe",t.classList.remove("sub-btn-on"),t.classList.add("sub-btn-off"),localStorage.setItem("subStatus".concat(r),"unsubscribed")):(t.classList.add("sub-btn-on"),t.textContent="Subscribed",localStorage.setItem("subStatus".concat(r),"subscribed"))},wy=(u=P(function(t){var r,e;return L(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=".concat(wr))];case 1:return[4,n.sent().json()];case 2:return[4,wf(n.sent().items[t].snippet.channelId)];case 3:return r=n.sent(),wa.insertAdjacentHTML("afterbegin",'\n  <div class="subcription">\n    <div class="left-event">\n      <img\n        src="'.concat(r.profilePic,'"\n      />\n    </div>\n    <div class="right-event">\n      <a href="https://www.youtube.com/').concat(r.channelTag,'">').concat(r.name,'</a>\n      <button class="sub-btn"> Subscribe</button>\n    </div>\n  </div>\n  ')),wd(e=wa.querySelector(".sub-btn"),t),e&&e.addEventListener("click",function(){wg(e,t)}),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t){return u.apply(this,arguments)}),wb=function(t,r,e){var n,o,i=null===(n=r.items[e].snippet.thumbnails)||void 0===n?void 0:null===(o=n.maxres)||void 0===o?void 0:o.url;return void 0==i&&(i=r.items[e].snippet.thumbnails.high.url),'\n  <div class="story story'.concat(e+2,'" style="background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)), url(').concat(i,')">\n    <img src="').concat(t.profilePic,'" />\n    <p>').concat(t.name,"</p>\n  </div>\n")},wm=(s=P(function(t){var r,e;return L(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=".concat(wr))];case 1:return[4,n.sent().json()];case 2:return[4,wf((r=n.sent()).items[t].snippet.channelId)];case 3:return e=n.sent(),wu.insertAdjacentHTML("beforeend",wb(e,r,t)),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t){return s.apply(this,arguments)}),ww=0;ww<5;ww++)wy(ww),4!=ww&&wm(ww);wn.addEventListener("click",function(){we.classList.toggle("settings-menu-height")}),wo.addEventListener("click",function(){wo.classList.toggle("dark-btn-on"),ws.classList.toggle("dark-theme"),"light"===localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}),"light"===localStorage.getItem("theme")?(wo.classList.remove("dark-btn-on"),ws.classList.remove("dark-theme")):"dark"===localStorage.getItem("theme")?(wo.classList.add("dark-btn-on"),ws.classList.add("dark-theme")):localStorage.setItem("theme","light");//# sourceMappingURL=index.728abe07.js.map

//# sourceMappingURL=index.728abe07.js.map
