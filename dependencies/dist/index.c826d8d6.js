!function(){var t,r,e,n,o,i,a,u,s,c,f,l,h,v,p,d,g,y,b,m,w,S,x,A,E,O,T,I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function R(t,r,e,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){e(t);return}u.done?r(s):Promise.resolve(s).then(n,o)}function j(t){return function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function a(t){R(i,n,o,a,u,"next",t)}function u(t){R(i,n,o,a,u,"throw",t)}a(void 0)})}}/******************************************************************************
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
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */function P(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function L(t,r){var e,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(s){return function(u){if(e)throw TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(a=0)),a;)try{if(e=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=r.call(t,a)}catch(t){u=[6,t],n=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}"function"==typeof SuppressedError&&SuppressedError;var M={},k={},C=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
k=C("object"==typeof globalThis&&globalThis)||C("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
C("object"==typeof self&&self)||C("object"==typeof I&&I)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||k||Function("return this")();var N={},_={};// Detect IE8's incomplete defineProperty implementation
N=!(_=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var U={},F={};F=!_(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var D=Function.prototype.call;U=F?D.bind(D):function(){return D.apply(D,arguments)};var z={}.propertyIsEnumerable,B=Object.getOwnPropertyDescriptor;aj=B&&!z.call({1:2},1)?function(t){var r=B(this,t);return!!r&&r.enumerable}:z;var q={};q=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}};var G={},W={},H={},V=Function.prototype,$=V.call,Y=F&&V.bind.bind($,$),K={},J=(H=F?Y:function(t){return function(){return $.apply(t,arguments)}})({}.toString),X=H("".slice);K=function(t){return X(J(t),8,-1)};var Q=Object,Z=H("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
W=_(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!Q("z").propertyIsEnumerable(0)})?function(t){return"String"===K(t)?Z(t,""):Q(t)}:Q;var tt={},tr={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
tr=function(t){return null==t};var te=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
tt=function(t){if(tr(t))throw te("Can't call method on "+t);return t},G=function(t){return W(tt(t))};var tn={},to={},ti={},ta={},tu={},ts="object"==typeof document&&document.all,tc=(tu={all:ts,IS_HTMLDDA:void 0===ts&&void 0!==ts}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
ta=tu.IS_HTMLDDA?function(t){return"function"==typeof t||t===tc}:function(t){return"function"==typeof t};var tf=tu.all;ti=tu.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:ta(t)||t===tf}:function(t){return"object"==typeof t?null!==t:ta(t)};var tl={},th={};th=function(t,r){var e;return arguments.length<2?(e=k[t],ta(e)?e:void 0):k[t]&&k[t][r]};var tv={};tv=H({}.isPrototypeOf);var tp={},td={},tg={},ty={};ty="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tb=k.process,tm=k.Deno,tw=tb&&tb.versions||tm&&tm.version,tS=tw&&tw.v8;tS&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(aL=(aP=tS.split("."))[0]>0&&aP[0]<4?1:+(aP[0]+aP[1])),!aL&&ty&&(!(aP=ty.match(/Edge\/(\d+)/))||aP[1]>=74)&&(aP=ty.match(/Chrome\/(\d+)/))&&(aL=+aP[1]),tg=aL;var tx=k.String;tp=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(td=!!Object.getOwnPropertySymbols&&!_(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tx(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&tg&&tg<41}))&&!Symbol.sham&&"symbol"==P(Symbol.iterator);var tA=Object;tl=tp?function(t){return(void 0===t?"undefined":P(t))=="symbol"}:function(t){var r=th("Symbol");return ta(r)&&tv(r.prototype,tA(t))};var tE={},tO={},tT={},tI=String;tT=function(t){try{return tI(t)}catch(t){return"Object"}};var tR=TypeError;// `Assert: IsCallable(argument) is true`
tO=function(t){if(ta(t))return t;throw tR(tT(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tE=function(t,r){var e=t[r];return tr(e)?void 0:tO(e)};var tj={},tP=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tj=function(t,r){var e,n;if("string"===r&&ta(e=t.toString)&&!ti(n=U(e,t))||ta(e=t.valueOf)&&!ti(n=U(e,t))||"string"!==r&&ta(e=t.toString)&&!ti(n=U(e,t)))return n;throw tP("Can't convert object to primitive value")};var tL={},tM={},tk={};tk=!1;var tC={},tN={},t_=Object.defineProperty;tN=function(t,r){try{t_(k,t,{value:r,configurable:!0,writable:!0})}catch(e){k[t]=r}return r};var tU="__core-js_shared__";tC=k[tU]||tN(tU,{}),(tM=function(t,r){return tC[t]||(tC[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.32.2",mode:tk?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tF={},tD={},tz=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tD=function(t){return tz(tt(t))};var tB=H({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tF=Object.hasOwn||function(t,r){return tB(tD(t),r)};var tq={},tG=0,tW=Math.random(),tH=H(1..toString);tq=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tH(++tG+tW,36)};var tV=k.Symbol,t$=tM("wks"),tY=tp?tV.for||tV:tV&&tV.withoutSetter||tq,tK=TypeError,tJ=(tL=function(t){return tF(t$,t)||(t$[t]=td&&tF(tV,t)?tV[t]:tY("Symbol."+t)),t$[t]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
to=function(t,r){if(!ti(t)||tl(t))return t;var e,n=tE(t,tJ);if(n){if(void 0===r&&(r="default"),e=U(n,t,r),!ti(e)||tl(e))return e;throw tK("Can't convert object to primitive value")}return void 0===r&&(r="number"),tj(t,r)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
tn=function(t){var r=to(t,"string");return tl(r)?r:r+""};var tX={},tQ={},tZ=k.document,t0=ti(tZ)&&ti(tZ.createElement);tQ=function(t){return t0?tZ.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tX=!N&&!_(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tQ("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var t1=Object.getOwnPropertyDescriptor,t2=aR=N?t1:function(t,r){if(t=G(t),r=tn(r),tX)try{return t1(t,r)}catch(t){}if(tF(t,r))return q(!U(aj,t,r),t[r])},t5={},t4={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
t4=N&&_(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var t6={},t3=String,t8=TypeError;// `Assert: Type(argument) is Object`
t6=function(t){if(ti(t))return t;throw t8(t3(t)+" is not an object")};var t7=TypeError,t9=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,rr="enumerable",re="configurable",rn="writable";aM=N?t4?function(t,r,e){if(t6(t),r=tn(r),t6(e),"function"==typeof t&&"prototype"===r&&"value"in e&&rn in e&&!e[rn]){var n=rt(t,r);n&&n[rn]&&(t[r]=e.value,e={configurable:re in e?e[re]:n[re],enumerable:rr in e?e[rr]:n[rr],writable:!1})}return t9(t,r,e)}:t9:function(t,r,e){if(t6(t),r=tn(r),t6(e),tX)try{return t9(t,r,e)}catch(t){}if("get"in e||"set"in e)throw t7("Accessors not supported");return"value"in e&&(t[r]=e.value),t},t5=N?function(t,r,e){return aM(t,r,q(1,e))}:function(t,r,e){return t[r]=e,t};var ro={},ri={},ra={},ru=Function.prototype,rs=N&&Object.getOwnPropertyDescriptor,rc=tF(ru,"name"),rf=rc&&(!N||N&&rs(ru,"name").configurable),rl=(ra={EXISTS:rc,PROPER:rc&&"something"===(function(){}).name,CONFIGURABLE:rf}).CONFIGURABLE,rh={},rv=H(Function.toString);ta(tC.inspectSource)||(tC.inspectSource=function(t){return rv(t)}),rh=tC.inspectSource;var rp={},rd={},rg=k.WeakMap;rd=ta(rg)&&/native code/.test(String(rg));var ry={},rb=tM("keys");ry=function(t){return rb[t]||(rb[t]=tq(t))};var rm={};rm={};var rw="Object already initialized",rS=k.TypeError,rx=k.WeakMap;if(rd||tC.state){var rA=tC.state||(tC.state=new rx);/* eslint-disable no-self-assign -- prototype methods protection */rA.get=rA.get,rA.has=rA.has,rA.set=rA.set,/* eslint-enable no-self-assign -- prototype methods protection */ak=function(t,r){if(rA.has(t))throw rS(rw);return r.facade=t,rA.set(t,r),r},aC=function(t){return rA.get(t)||{}},aN=function(t){return rA.has(t)}}else{var rE=ry("state");rm[rE]=!0,ak=function(t,r){if(tF(t,rE))throw rS(rw);return r.facade=t,t5(t,rE,r),r},aC=function(t){return tF(t,rE)?t[rE]:{}},aN=function(t){return tF(t,rE)}}var rO=(rp={set:ak,get:aC,has:aN,enforce:function(t){return aN(t)?aC(t):ak(t,{})},getterFor:function(t){return function(r){var e;if(!ti(r)||(e=aC(r)).type!==t)throw rS("Incompatible receiver, "+t+" required");return e}}}).enforce,rT=rp.get,rI=String,rR=Object.defineProperty,rj=H("".slice),rP=H("".replace),rL=H([].join),rM=N&&!_(function(){return 8!==rR(function(){},"length",{value:8}).length}),rk=String(String).split("String"),rC=ri=function(t,r,e){"Symbol("===rj(rI(r),0,7)&&(r="["+rP(rI(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!tF(t,"name")||rl&&t.name!==r)&&(N?rR(t,"name",{value:r,configurable:!0}):t.name=r),rM&&e&&tF(e,"arity")&&t.length!==e.arity&&rR(t,"length",{value:e.arity});try{e&&tF(e,"constructor")&&e.constructor?N&&rR(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=rO(t);return tF(n,"source")||(n.source=rL(rk,"string"==typeof r?r:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=rC(function(){return ta(this)&&rT(this).source||rh(this)},"toString"),ro=function(t,r,e,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:r;if(ta(e)&&ri(e,i,n),n.global)o?t[r]=e:tN(r,e);else{try{n.unsafe?t[r]&&(o=!0):delete t[r]}catch(t){}o?t[r]=e:aM(t,r,{value:e,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var rN={},r_={},rU={},rF={},rD={},rz={},rB={},rq=Math.ceil,rG=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
rB=Math.trunc||function(t){var r=+t;return(r>0?rG:rq)(r)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
rz=function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return r!=r||0===r?0:rB(r)};var rW=Math.max,rH=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
rD=function(t,r){var e=rz(t);return e<0?rW(e+r,0):rH(e,r)};var rV={},r$={},rY=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
r$=function(t){return t>0?rY(rz(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
rV=function(t){return r$(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var rK=function(t){return function(r,e,n){var o,i=G(r),a=rV(i),u=rD(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&e!=e){for(;a>u;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[u++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>u;u++)if((t||u in i)&&i[u]===e)return t||u||0;return!t&&-1}},rJ=(rF={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:rK(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:rK(!1)}).indexOf,rX=H([].push);rU=function(t,r){var e,n=G(t),o=0,i=[];for(e in n)!tF(rm,e)&&tF(n,e)&&rX(i,e);// Don't enum bug & hidden keys
for(;r.length>o;)tF(n,e=r[o++])&&(~rJ(i,e)||rX(i,e));return i};var rQ={},rZ=// IE8- don't enum bug keys
(rQ=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]).concat("length","prototype");a_=Object.getOwnPropertyNames||function(t){return rU(t,rZ)},aU=Object.getOwnPropertySymbols;var r0=H([].concat);// all object keys, includes non-enumerable and symbols
r_=th("Reflect","ownKeys")||function(t){var r=a_(t6(t)),e=aU;return e?r0(r,e(t)):r},rN=function(t,r,e){for(var n=r_(r),o=aM,i=aR,a=0;a<n.length;a++){var u=n[a];tF(t,u)||e&&tF(e,u)||o(t,u,i(r,u))}};var r1={},r2=/#|\.prototype\./,r5=function(t,r){var e=r6[r4(t)];return e===r8||e!==r3&&(ta(r)?_(r):!!r)},r4=r5.normalize=function(t){return String(t).replace(r2,".").toLowerCase()},r6=r5.data={},r3=r5.NATIVE="N",r8=r5.POLYFILL="P";r1=r5,/*
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
*/M=function(t,r){var e,n,o,i,a,u=t.target,s=t.global,c=t.stat;if(e=s?k:c?k[u]||tN(u,{}):(k[u]||{}).prototype)for(n in r){// contained in target
if(i=r[n],o=t.dontCallGetSet?(a=t2(e,n))&&a.value:e[n],!r1(s?n:u+(c?".":"#")+n,t.forced)&&void 0!==o){if((void 0===i?"undefined":P(i))==(void 0===o?"undefined":P(o)))continue;rN(i,o)}(t.sham||o&&o.sham)&&t5(i,"sham",!0),ro(e,n,i,t)}};var r7={},r9={},et={},er=tL("toStringTag"),ee={};ee[er]="z",et="[object z]"===String(ee);var en=tL("toStringTag"),eo=Object,ei="Arguments"===K(function(){return arguments}()),ea=function(t,r){try{return t[r]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
r9=et?K:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=ea(r=eo(t),en))?e:ei?K(r):"Object"===(n=K(r))&&ta(r.callee)?"Arguments":n};var eu=String;r7=function(t){if("Symbol"===r9(t))throw TypeError("Cannot convert a Symbol value to a string");return eu(t)};var es={},ec={};// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
ec=Object.keys||function(t){return rU(t,rQ)},aF=N&&!t4?Object.defineProperties:function(t,r){t6(t);for(var e,n=G(r),o=ec(r),i=o.length,a=0;i>a;)aM(t,e=o[a++],n[e]);return t};var ef={};ef=th("document","documentElement");var el="prototype",eh="script",ev=ry("IE_PROTO"),ep=function(){},ed=function(t){return"<"+eh+">"+t+"</"+eh+">"},eg=function(t){t.write(ed("")),t.close();var r=t.parentWindow.Object;return t=null,r},ey=function(){// Thrash, waste and sodomy: IE GC bug
var t,r=tQ("iframe");return r.style.display="none",ef.appendChild(r),// https://github.com/zloirock/core-js/issues/475
r.src=String("java"+eh+":"),(t=r.contentWindow.document).open(),t.write(ed("document.F=Object")),t.close(),t.F},eb=function(){try{aD=new ActiveXObject("htmlfile")}catch(t){}eb="undefined"!=typeof document?document.domain&&aD?eg(aD)// old IE
:ey():eg(aD);// WSH
for(var t=rQ.length;t--;)delete eb[el][rQ[t]];return eb()};rm[ev]=!0,// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
es=Object.create||function(t,r){var e;return null!==t?(ep[el]=t6(t),e=new ep,ep[el]=null,// add "__proto__" for Object.getPrototypeOf polyfill
e[ev]=t):e=eb(),void 0===r?e:aF(e,r)};var em=a_,ew={},eS={};eS=function(t,r,e){var n=tn(r);n in t?aM(t,n,q(0,e)):t[n]=e};var ex=Array,eA=Math.max;ew=function(t,r,e){for(var n=rV(t),o=rD(r,n),i=rD(void 0===e?n:e,n),a=ex(eA(i-o,0)),u=0;o<i;o++,u++)eS(a,u,t[o]);return a.length=u,a};var eE="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],eO=function(t){try{return em(t)}catch(t){return ew(eE)}};az=function(t){return eE&&"Window"===K(t)?eO(t):em(G(t))};var eT={};eT=function(t,r,e){return e.get&&ri(e.get,r,{getter:!0}),e.set&&ri(e.set,r,{setter:!0}),aM(t,r,e)},aB=tL;var eI={},eR={};eR=k;var ej=aM;eI=function(t){var r=eR.Symbol||(eR.Symbol={});tF(r,t)||ej(r,t,{value:aB(t)})};var eP={};eP=function(){var t=th("Symbol"),r=t&&t.prototype,e=r&&r.valueOf,n=tL("toPrimitive");r&&!r[n]&&// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
// eslint-disable-next-line no-unused-vars -- required for .length
ro(r,n,function(t){return U(e,this)},{arity:1})};var eL={},eM=aM,ek=tL("toStringTag");eL=function(t,r,e){t&&!e&&(t=t.prototype),t&&!tF(t,ek)&&eM(t,ek,{configurable:!0,value:r})};var eC={},eN={},e_={},eU=(e_=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===K(t))return H(t)})(e_.bind);// optional / simple context binding
eN=function(t,r){return tO(t),void 0===r?t:F?eU(t,r):function(){return t.apply(r,arguments)}};var eF={},eD={},ez={};// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
ez=Array.isArray||function(t){return"Array"===K(t)};var eB={},eq=function(){},eG=[],eW=th("Reflect","construct"),eH=/^\s*(?:class|function)\b/,eV=H(eH.exec),e$=!eH.exec(eq),eY=function(t){if(!ta(t))return!1;try{return eW(eq,eG,t),!0}catch(t){return!1}},eK=function(t){if(!ta(t))return!1;switch(r9(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{// we can't check .prototype since constructors produced by .bind haven't it
// `Function#toString` throws on some built-it function in some legacy engines
// (for example, `DOMQuad` and similar in FF41-)
return e$||!!eV(eH,rh(t))}catch(t){return!0}};eK.sham=!0,// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
eB=!eW||_(function(){var t;return eY(eY.call)||!eY(Object)||!eY(function(){t=!0})||t})?eK:eY;var eJ=tL("species"),eX=Array;// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
eD=function(t){var r;return ez(t)&&(r=t.constructor,eB(r)&&(r===eX||ez(r.prototype))?r=void 0:ti(r)&&null===(r=r[eJ])&&(r=void 0)),void 0===r?eX:r},// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
eF=function(t,r){return new(eD(t))(0===r?0:r)};var eQ=H([].push),eZ=function(t){var r=1===t,e=2===t,n=3===t,o=4===t,i=6===t,a=7===t,u=5===t||i;return function(s,c,f,l){for(var h,v,p=tD(s),d=W(p),g=eN(c,f),y=rV(d),b=0,m=l||eF,w=r?m(s,y):e||a?m(s,0):void 0;y>b;b++)if((u||b in d)&&(v=g(h=d[b],b,p),t)){if(r)w[b]=v;// map
else if(v)switch(t){case 3:return!0;// some
case 5:return h;// find
case 6:return b;// findIndex
case 2:eQ(w,h);// filter
}else switch(t){case 4:return!1;// every
case 7:eQ(w,h);// filterReject
}}return i?-1:n||o?o:w}},e0=(eC={// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
forEach:eZ(0),// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
map:eZ(1),// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
filter:eZ(2),// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
some:eZ(3),// `Array.prototype.every` method
// https://tc39.es/ecma262/#sec-array.prototype.every
every:eZ(4),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
find:eZ(5),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findIndex
findIndex:eZ(6),// `Array.prototype.filterReject` method
// https://github.com/tc39/proposal-array-filtering
filterReject:eZ(7)}).forEach,e1=ry("hidden"),e2="Symbol",e5="prototype",e4=rp.set,e6=rp.getterFor(e2),e3=Object[e5],e8=k.Symbol,e7=e8&&e8[e5],e9=k.TypeError,nt=k.QObject,nr=aR,ne=aM,nn=az,no=aj,ni=H([].push),na=tM("symbols"),nu=tM("op-symbols"),ns=tM("wks"),nc=!nt||!nt[e5]||!nt[e5].findChild,nf=N&&_(function(){return 7!==es(ne({},"a",{get:function(){return ne(this,"a",{value:7}).a}})).a})?function(t,r,e){var n=nr(e3,r);n&&delete e3[r],ne(t,r,e),n&&t!==e3&&ne(e3,r,n)}:ne,nl=function(t,r){var e=na[t]=es(e7);return e4(e,{type:e2,tag:t,description:r}),N||(e.description=r),e},nh=function(t,r,e){t===e3&&nh(nu,r,e),t6(t);var n=tn(r);return(t6(e),tF(na,n))?(e.enumerable?(tF(t,e1)&&t[e1][n]&&(t[e1][n]=!1),e=es(e,{enumerable:q(0,!1)})):(tF(t,e1)||ne(t,e1,q(1,{})),t[e1][n]=!0),nf(t,n,e)):ne(t,n,e)},nv=function(t,r){t6(t);var e=G(r);return e0(ec(e).concat(ny(e)),function(r){(!N||U(np,e,r))&&nh(t,r,e[r])}),t},np=function(t){var r=tn(t),e=U(no,this,r);return(!(this===e3&&tF(na,r))||!!tF(nu,r))&&(!(e||!tF(this,r)||!tF(na,r)||tF(this,e1)&&this[e1][r])||e)},nd=function(t,r){var e=G(t),n=tn(r);if(!(e===e3&&tF(na,n))||tF(nu,n)){var o=nr(e,n);return o&&tF(na,n)&&!(tF(e,e1)&&e[e1][n])&&(o.enumerable=!0),o}},ng=function(t){var r=nn(G(t)),e=[];return e0(r,function(t){tF(na,t)||tF(rm,t)||ni(e,t)}),e},ny=function(t){var r=t===e3,e=nn(r?nu:G(t)),n=[];return e0(e,function(t){tF(na,t)&&(!r||tF(e3,t))&&ni(n,na[t])}),n};td||(e7=(e8=function(){if(tv(e7,this))throw e9("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?r7(arguments[0]):void 0,r=tq(t),e=function(t){this===e3&&U(e,nu,t),tF(this,e1)&&tF(this[e1],r)&&(this[e1][r]=!1),nf(this,r,q(1,t))};return N&&nc&&nf(e3,r,{configurable:!0,set:e}),nl(r,t)})[e5],ro(e7,"toString",function(){return e6(this).tag}),ro(e8,"withoutSetter",function(t){return nl(tq(t),t)}),aj=np,aM=nh,aF=nv,aR=nd,a_=az=ng,aU=ny,aB=function(t){return nl(tL(t),t)},N&&(// https://github.com/tc39/proposal-Symbol-description
eT(e7,"description",{configurable:!0,get:function(){return e6(this).description}}),tk||ro(e3,"propertyIsEnumerable",np,{unsafe:!0}))),M({global:!0,constructor:!0,wrap:!0,forced:!td,sham:!td},{Symbol:e8}),e0(ec(ns),function(t){eI(t)}),M({target:e2,stat:!0,forced:!td},{useSetter:function(){nc=!0},useSimple:function(){nc=!1}}),M({target:"Object",stat:!0,forced:!td,sham:!N},{// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
create:function(t,r){return void 0===r?es(t):nv(es(t),r)},// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
defineProperty:nh,// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
defineProperties:nv,// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
getOwnPropertyDescriptor:nd}),M({target:"Object",stat:!0,forced:!td},{// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
getOwnPropertyNames:ng}),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
eP(),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
eL(e8,e2),rm[e1]=!0;var nb={};/* eslint-disable es/no-symbol -- safe */nb=td&&!!Symbol.for&&!!Symbol.keyFor;var nm=tM("string-to-symbol-registry"),nw=tM("symbol-to-string-registry");// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
M({target:"Symbol",stat:!0,forced:!nb},{for:function(t){var r=r7(t);if(tF(nm,r))return nm[r];var e=th("Symbol")(r);return nm[r]=e,nw[e]=r,e}});var nS=tM("symbol-to-string-registry");// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
M({target:"Symbol",stat:!0,forced:!nb},{keyFor:function(t){if(!tl(t))throw TypeError(tT(t)+" is not a symbol");if(tF(nS,t))return nS[t]}});var nx={},nA=Function.prototype,nE=nA.apply,nO=nA.call;// eslint-disable-next-line es/no-reflect -- safe
nx="object"==typeof Reflect&&Reflect.apply||(F?nO.bind(nE):function(){return nO.apply(nE,arguments)});var nT={};nT=H([].slice);var nI={},nR=H([].push);nI=function(t){if(ta(t))return t;if(ez(t)){for(var r=t.length,e=[],n=0;n<r;n++){var o=t[n];"string"==typeof o?nR(e,o):("number"==typeof o||"Number"===K(o)||"String"===K(o))&&nR(e,r7(o))}var i=e.length,a=!0;return function(t,r){if(a)return a=!1,r;if(ez(this))return r;for(var n=0;n<i;n++)if(e[n]===t)return r}}};var nj=String,nP=th("JSON","stringify"),nL=H(/./.exec),nM=H("".charAt),nk=H("".charCodeAt),nC=H("".replace),nN=H(1..toString),n_=/[\uD800-\uDFFF]/g,nU=/^[\uD800-\uDBFF]$/,nF=/^[\uDC00-\uDFFF]$/,nD=!td||_(function(){var t=th("Symbol")("stringify detection");// MS Edge converts symbol values to JSON as {}
return"[null]"!==nP([t])||"{}"!==nP({a:t})||"{}"!==nP(Object(t))}),nz=_(function(){return'"\udf06\ud834"'!==nP("\uDF06\uD834")||'"\udead"'!==nP("\uDEAD")}),nB=function(t,r){var e=nT(arguments),n=nI(r);if(!(!ta(n)&&(void 0===t||tl(t))))return e[1]=function(t,r){if(ta(n)&&(r=U(n,this,nj(t),r)),!tl(r))return r},nx(nP,null,e);// IE8 returns string on undefined
},nq=function(t,r,e){var n=nM(e,r-1),o=nM(e,r+1);return nL(nU,t)&&!nL(nF,o)||nL(nF,t)&&!nL(nU,n)?"\\u"+nN(nk(t,0),16):t};nP&&// https://tc39.es/ecma262/#sec-json.stringify
M({target:"JSON",stat:!0,arity:3,forced:nD||nz},{// eslint-disable-next-line no-unused-vars -- required for `.length`
stringify:function(t,r,e){var n=nT(arguments),o=nx(nD?nB:nP,null,n);return nz&&"string"==typeof o?nC(o,n_,nq):o}});// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var nG=!td||_(function(){aU(1)});// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
M({target:"Object",stat:!0,forced:nG},{getOwnPropertySymbols:function(t){var r=aU;return r?r(tD(t)):[]}});var nW=k.Symbol,nH=nW&&nW.prototype;if(N&&ta(nW)&&(!("description"in nH)||// Safari 12 bug
void 0!==nW().description)){var nV={},n$=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:r7(arguments[0]),r=tv(nH,this)?new nW(t):void 0===t?nW():nW(t);return""===t&&(nV[r]=!0),r};rN(n$,nW),n$.prototype=nH,nH.constructor=n$;var nY="Symbol(description detection)"===String(nW("description detection")),nK=H(nH.valueOf),nJ=H(nH.toString),nX=/^Symbol\((.*)\)[^)]+$/,nQ=H("".replace),nZ=H("".slice);eT(nH,"description",{configurable:!0,get:function(){var t=nK(this);if(tF(nV,t))return"";var r=nJ(t),e=nY?nZ(r,7,-1):nQ(r,nX,"$1");return""===e?void 0:e}}),M({global:!0,constructor:!0,forced:!0},{Symbol:n$})}// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
eI("asyncIterator"),// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
eI("hasInstance"),// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
eI("isConcatSpreadable"),// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
eI("iterator"),// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
eI("match"),// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
eI("replace"),// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
eI("search"),// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
eI("species"),// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
eI("split"),// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
eI("toPrimitive"),// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
eP(),// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
eI("toStringTag"),// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
eL(th("Symbol"),"Symbol"),// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
eI("unscopables");var n0={},n1=TypeError;n0=function(t){if(t>9007199254740991)throw n1("Maximum allowed index exceeded");return t};var n2={},n5=tL("species");n2=function(t){// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/677
return tg>=51||!_(function(){var r=[];return(r.constructor={})[n5]=function(){return{foo:1}},1!==r[t](Boolean).foo})};var n4=tL("isConcatSpreadable"),n6=tg>=51||!_(function(){var t=[];return t[n4]=!1,t.concat()[0]!==t}),n3=function(t){if(!ti(t))return!1;var r=t[n4];return void 0!==r?!!r:ez(t)},n8=!n6||!n2("concat");// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
M({target:"Array",proto:!0,arity:1,forced:n8},{// eslint-disable-next-line no-unused-vars -- required for `.length`
concat:function(t){var r,e,n,o,i,a=tD(this),u=eF(a,0),s=0;for(r=-1,n=arguments.length;r<n;r++)if(i=-1===r?a:arguments[r],n3(i))for(o=rV(i),n0(s+o),e=0;e<o;e++,s++)e in i&&eS(u,s,i[e]);else n0(s+1),eS(u,s++,i);return u.length=s,u}});var n7={},n9={},ot=TypeError;n9=function(t,r){if(!delete t[r])throw ot("Cannot delete property "+tT(r)+" of "+tT(t))};var or=Math.min;// `Array.prototype.copyWithin` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
n7=[].copyWithin||function(t/* = 0 */,r/* = 0, end = @length */){var e=tD(this),n=rV(e),o=rD(t,n),i=rD(r,n),a=arguments.length>2?arguments[2]:void 0,u=or((void 0===a?n:rD(a,n))-i,n-o),s=1;for(i<o&&o<i+u&&(s=-1,i+=u-1,o+=u-1);u-- >0;)i in e?e[o]=e[i]:n9(e,o),o+=s,i+=s;return e};var oe={},on=aM,oo=tL("unscopables"),oi=Array.prototype;void 0===oi[oo]&&on(oi,oo,{configurable:!0,value:es(null)}),// add a key to Array.prototype[@@unscopables]
oe=function(t){oi[oo][t]=!0},// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
M({target:"Array",proto:!0},{copyWithin:n7}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
oe("copyWithin");var oa={};// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
M({target:"Array",proto:!0},{fill:// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
oa=function(t/* , start = 0, end = @length */){for(var r=tD(this),e=rV(r),n=arguments.length,o=rD(n>1?arguments[1]:void 0,e),i=n>2?arguments[2]:void 0,a=void 0===i?e:rD(i,e);a>o;)r[o++]=t;return r}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
oe("fill");var ou=eC.filter,os=n2("filter");// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
M({target:"Array",proto:!0,forced:!os},{filter:function(t/* , thisArg */){return ou(this,t,arguments.length>1?arguments[1]:void 0)}});var oc=eC.find,of="find",ol=!0;of in[]&&[,][of](function(){ol=!1}),// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
M({target:"Array",proto:!0,forced:ol},{find:function(t/* , that = undefined */){return oc(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
oe(of);var oh=eC.findIndex,ov="findIndex",op=!0;ov in[]&&[,][ov](function(){op=!1}),// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
M({target:"Array",proto:!0,forced:op},{findIndex:function(t/* , that = undefined */){return oh(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
oe(ov);var od={},og=function(t,r,e,n,o,i,a,u){for(var s,c,f=o,l=0,h=!!a&&eN(a,u);l<n;)l in e&&(s=h?h(e[l],l,r):e[l],i>0&&ez(s)?(c=rV(s),f=og(t,r,s,c,f,i-1)-1):(n0(f+1),t[f]=s),f++),l++;return f};od=og,// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
M({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,r=tD(this),e=rV(r),n=eF(r,0);return n.length=od(n,r,r,e,0,void 0===t?1:rz(t)),n}}),// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
M({target:"Array",proto:!0},{flatMap:function(t/* , thisArg */){var r,e=tD(this),n=rV(e);return tO(t),(r=eF(e,0)).length=od(r,e,e,n,0,1,t,arguments.length>1?arguments[1]:void 0),r}});var oy={},ob={},om={};om=function(t,r,e){var n,o;t6(t);try{if(!(n=tE(t,"return"))){if("throw"===r)throw e;return e}n=U(n,t)}catch(t){o=!0,n=t}if("throw"===r)throw e;if(o)throw n;return t6(n),e},// call something on iterator step with safe closing on error
ob=function(t,r,e,n){try{return n?r(t6(e)[0],e[1]):r(e)}catch(r){om(t,"throw",r)}};var ow={},oS={};oS={};var ox=tL("iterator"),oA=Array.prototype;// check on default Array iterator
ow=function(t){return void 0!==t&&(oS.Array===t||oA[ox]===t)};var oE={},oO={},oT=tL("iterator");oO=function(t){if(!tr(t))return tE(t,oT)||tE(t,"@@iterator")||oS[r9(t)]};var oI=TypeError;oE=function(t,r){var e=arguments.length<2?oO(t):r;if(tO(e))return t6(U(e,t));throw oI(tT(t)+" is not iterable")};var oR=Array;// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
oy=function(t/* , mapfn = undefined, thisArg = undefined */){var r,e,n,o,i,a,u=tD(t),s=eB(this),c=arguments.length,f=c>1?arguments[1]:void 0,l=void 0!==f;l&&(f=eN(f,c>2?arguments[2]:void 0));var h=oO(u),v=0;// if the target is not iterable or it's an array with the default iterator - use a simple case
if(h&&!(this===oR&&ow(h)))for(i=(o=oE(u,h)).next,e=s?new this:[];!(n=U(i,o)).done;v++)a=l?ob(o,f,[n.value,v],!0):n.value,eS(e,v,a);else for(r=rV(u),e=s?new this(r):oR(r);r>v;v++)a=l?f(u[v],v):u[v],eS(e,v,a);return e.length=v,e};var oj={},oP=tL("iterator"),oL=!1;try{var oM=0,ok={next:function(){return{done:!!oM++}},return:function(){oL=!0}};ok[oP]=function(){return this},// eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
Array.from(ok,function(){throw 2})}catch(t){}var oC=!(oj=function(t,r){try{if(!r&&!oL)return!1}catch(t){return!1}// workaround of old WebKit + `eval` bug
var e=!1;try{var n={};n[oP]=function(){return{next:function(){return{done:e=!0}}}},t(n)}catch(t){}return e})(function(t){// eslint-disable-next-line es/no-array-from -- required for testing
Array.from(t)});// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
M({target:"Array",stat:!0,forced:oC},{from:oy});var oN=rF.includes,o_=_(function(){// eslint-disable-next-line es/no-array-prototype-includes -- detection
return![,].includes()});// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
M({target:"Array",proto:!0,forced:o_},{includes:function(t/* , fromIndex = 0 */){return oN(this,t,arguments.length>1?arguments[1]:void 0)}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
oe("includes");var oU={},oF=aM,oD={},oz={},oB={},oq={},oG={};oG=!_(function(){function t(){}// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype});var oW=ry("IE_PROTO"),oH=Object,oV=oH.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
oq=oG?oH.getPrototypeOf:function(t){var r=tD(t);if(tF(r,oW))return r[oW];var e=r.constructor;return ta(e)&&r instanceof e?e.prototype:r instanceof oH?oV:null};var o$=tL("iterator"),oY=!1;[].keys&&("next"in(aW=[].keys())?(aG=oq(oq(aW)))!==Object.prototype&&(aq=aG):oY=!0),!ti(aq)||_(function(){var t={};// FF44- legacy iterators case
return aq[o$].call(t)!==t})?aq={}:tk&&(aq=es(aq)),ta(aq[o$])||ro(aq,o$,function(){return this});var oK=(oB={IteratorPrototype:aq,BUGGY_SAFARI_ITERATORS:oY}).IteratorPrototype,oJ=function(){return this};oz=function(t,r,e,n){var o=r+" Iterator";return t.prototype=es(oK,{next:q(+!n,e)}),eL(t,o,!1,!0),oS[o]=oJ,t};var oX={},oQ={};oQ=function(t,r,e){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return H(tO(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}};var oZ={},o0=String,o1=TypeError;oZ=function(t){if("object"==typeof t||ta(t))return t;throw o1("Can't set "+o0(t)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
oX=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=oQ(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return t6(e),oZ(n),r?t(e,n):e.__proto__=n,e}}():void 0);var o2=ra.PROPER,o5=ra.CONFIGURABLE,o4=oB.IteratorPrototype,o6=oB.BUGGY_SAFARI_ITERATORS,o3=tL("iterator"),o8="keys",o7="values",o9="entries",it=function(){return this};oD=function(t,r,e,n,o,i,a){oz(e,r,n);var u,s,c,f=function(t){if(t===o&&d)return d;if(!o6&&t&&t in v)return v[t];switch(t){case o8:case o7:case o9:return function(){return new e(this,t)}}return function(){return new e(this)}},l=r+" Iterator",h=!1,v=t.prototype,p=v[o3]||v["@@iterator"]||o&&v[o],d=!o6&&p||f(o),g="Array"===r&&v.entries||p;// export additional methods
if(g&&(u=oq(g.call(new t)))!==Object.prototype&&u.next&&(tk||oq(u)===o4||(oX?oX(u,o4):ta(u[o3])||ro(u,o3,it)),// Set @@toStringTag to native iterators
eL(u,l,!0,!0),tk&&(oS[l]=it)),o2&&o===o7&&p&&p.name!==o7&&(!tk&&o5?t5(v,"name",o7):(h=!0,d=function(){return U(p,this)})),o){if(s={values:f(o7),keys:i?d:f(o8),entries:f(o9)},a)for(c in s)!o6&&!h&&c in v||ro(v,c,s[c]);else M({target:r,proto:!0,forced:o6||h},s)}return(!tk||a)&&v[o3]!==d&&ro(v,o3,d,{name:o}),oS[r]=d,s};var ir={};// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
ir=function(t,r){return{value:t,done:r}};var ie="Array Iterator",io=rp.set,ii=rp.getterFor(ie);// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
oU=oD(Array,"Array",function(t,r){io(this,{type:ie,target:G(t),index:0,kind:r// kind
});// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
},function(){var t=ii(this),r=t.target,e=t.kind,n=t.index++;if(!r||n>=r.length)return t.target=void 0,ir(void 0,!0);switch(e){case"keys":return ir(n,!1);case"values":return ir(r[n],!1)}return ir([n,r[n]],!1)},"values");// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var ia=oS.Arguments=oS.Array;// V8 ~ Chrome 45- bug
if(// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
oe("keys"),oe("values"),oe("entries"),!tk&&N&&"values"!==ia.name)try{oF(ia,"name",{value:"values"})}catch(t){}var iu={};iu=function(t,r){var e=[][t];return!!e&&_(function(){// eslint-disable-next-line no-useless-call -- required for testing
e.call(null,r||function(){return 1},1)})};var is=H([].join),ic=W!==Object||!iu("join",",");// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
M({target:"Array",proto:!0,forced:ic},{join:function(t){return is(G(this),void 0===t?",":t)}});var il=eC.map,ih=n2("map");// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
M({target:"Array",proto:!0,forced:!ih},{map:function(t/* , thisArg */){return il(this,t,arguments.length>1?arguments[1]:void 0)}});var iv=Array,ip=_(function(){function t(){}// eslint-disable-next-line es/no-array-of -- safe
return!(iv.of.call(t) instanceof t)});// `Array.of` method
// https://tc39.es/ecma262/#sec-array.of
// WebKit Array.of isn't generic
M({target:"Array",stat:!0,forced:ip},{of:function(){for(var t=0,r=arguments.length,e=new(eB(this)?this:iv)(r);r>t;)eS(e,t,arguments[t++]);return e.length=r,e}});var id=n2("slice"),ig=tL("species"),iy=Array,ib=Math.max;// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
M({target:"Array",proto:!0,forced:!id},{slice:function(t,r){var e,n,o,i=G(this),a=rV(i),u=rD(t,a),s=rD(void 0===r?a:r,a);if(ez(i)&&(e=i.constructor,eB(e)&&(e===iy||ez(e.prototype))?e=void 0:ti(e)&&null===(e=e[ig])&&(e=void 0),e===iy||void 0===e))return nT(i,u,s);for(o=0,n=new(void 0===e?iy:e)(ib(s-u,0));u<s;u++,o++)u in i&&eS(n,o,i[u]);return n.length=o,n}});var im={},iw=Math.floor,iS=function(t,r){var e=t.length,n=iw(e/2);return e<8?ix(t,r):iA(t,iS(ew(t,0,n),r),iS(ew(t,n),r),r)},ix=function(t,r){for(var e,n,o=t.length,i=1;i<o;){for(n=i,e=t[i];n&&r(t[n-1],e)>0;)t[n]=t[--n];n!==i++&&(t[n]=e)}return t},iA=function(t,r,e,n){for(var o=r.length,i=e.length,a=0,u=0;a<o||u<i;)t[a+u]=a<o&&u<i?0>=n(r[a],e[u])?r[a++]:e[u++]:a<o?r[a++]:e[u++];return t};im=iS;var iE={},iO=ty.match(/firefox\/(\d+)/i);iE=!!iO&&+iO[1];var iT={};iT=/MSIE|Trident/.test(ty);var iI={},iR=ty.match(/AppleWebKit\/(\d+)\./);iI=!!iR&&+iR[1];var ij=[],iP=H(ij.sort),iL=H(ij.push),iM=_(function(){ij.sort(void 0)}),ik=_(function(){ij.sort(null)}),iC=iu("sort"),iN=!_(function(){// feature detection can be too slow, so check engines versions
if(tg)return tg<70;if(!iE||!(iE>3)){if(iT)return!0;if(iI)return iI<603;var t,r,e,n,o="";// generate an array with more 512 elements (Chakra and old V8 fails only in this case)
for(t=65;t<76;t++){switch(r=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)ij.push({k:r+n,v:e})}for(ij.sort(function(t,r){return r.v-t.v}),n=0;n<ij.length;n++)r=ij[n].k.charAt(0),o.charAt(o.length-1)!==r&&(o+=r);return"DGBEFHACIJK"!==o}});// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
M({target:"Array",proto:!0,forced:iM||!ik||!iC||!iN},{sort:function(t){void 0!==t&&tO(t);var r,e,n=tD(this);if(iN)return void 0===t?iP(n):iP(n,t);var o=[],i=rV(n);for(e=0;e<i;e++)e in n&&iL(o,n[e]);for(im(o,function(r,e){return void 0===e?-1:void 0===r?1:void 0!==t?+t(r,e)||0:r7(r)>r7(e)?1:-1}),r=rV(o),e=0;e<r;)n[e]=o[e++];for(;e<i;)n9(n,e++);return n}});var i_={},iU=tL("species");// `Array[@@species]` getter
// https://tc39.es/ecma262/#sec-get-array-@@species
(i_=function(t){var r=th(t);N&&r&&!r[iU]&&eT(r,iU,{configurable:!0,get:function(){return this}})})("Array");var iF={},iD=TypeError,iz=Object.getOwnPropertyDescriptor;iF=N&&!function(){// makes no sense without proper strict mode support
if(void 0!==this)return!0;try{// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}()?function(t,r){if(ez(t)&&!iz(t,"length").writable)throw iD("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r};var iB=n2("splice"),iq=Math.max,iG=Math.min;// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
M({target:"Array",proto:!0,forced:!iB},{splice:function(t,r/* , ...items */){var e,n,o,i,a,u,s=tD(this),c=rV(s),f=rD(t,c),l=arguments.length;for(0===l?e=n=0:1===l?(e=0,n=c-f):(e=l-2,n=iG(iq(rz(r),0),c-f)),n0(c+e-n),o=eF(s,n),i=0;i<n;i++)(a=f+i)in s&&eS(o,i,s[a]);if(o.length=n,e<n){for(i=f;i<c-n;i++)a=i+n,u=i+e,a in s?s[u]=s[a]:n9(s,u);for(i=c;i>c-n+e;i--)n9(s,i-1)}else if(e>n)for(i=c-n;i>f;i--)a=i+n-1,u=i+e-1,a in s?s[u]=s[a]:n9(s,u);for(i=0;i<e;i++)s[i+f]=arguments[i+2];return iF(s,c-n+e),o}}),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
oe("flat"),// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
oe("flatMap");var iW={},iH={};// eslint-disable-next-line es/no-typed-arrays -- safe
iH="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var iV={};iV=function(t,r,e){for(var n in r)ro(t,n,r[n],e);return t};var i$={},iY=TypeError;i$=function(t,r){if(tv(r,t))return t;throw iY("Incorrect invocation")};var iK={},iJ=RangeError;// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
iK=function(t){if(void 0===t)return 0;var r=rz(t),e=r$(r);if(r!==e)throw iJ("Wrong length or index");return e};var iX={},iQ={};// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
iQ=Math.sign||function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return 0===r||r!=r?r:r<0?-1:1};var iZ=Array,i0=Math.abs,i1=Math.pow,i2=Math.floor,i5=Math.log,i4=Math.LN2,i6=function(t){var r=rB(t),e=i0(t-r);return e>.5||.5===e&&r%2!=0?r+iQ(t):r};iX={pack:function(t,r,e){var n,o,i,a=iZ(e),u=8*e-r-1,s=(1<<u)-1,c=s>>1,f=23===r?i1(2,-24)-i1(2,-77):0,l=t<0||0===t&&1/t<0?1:0,h=0;for((t=i0(t))!=t||t===1/0?(// eslint-disable-next-line no-self-compare -- NaN check
o=t!=t?1:0,n=s):(i=i1(2,-(n=i2(i5(t)/i4))),t*i<1&&(n--,i*=2),n+c>=1?t+=f/i:t+=f*i1(2,1-c),t*i>=2&&(n++,i/=2),n+c>=s?(o=0,n=s):n+c>=1?(o=i6((t*i-1)*i1(2,r)),n+=c):(o=i6(t*i1(2,c-1)*i1(2,r)),n=0));r>=8;)a[h++]=255&o,o/=256,r-=8;for(n=n<<r|o,u+=r;u>0;)a[h++]=255&n,n/=256,u-=8;return a[--h]|=128*l,a},unpack:function(t,r){var e,n=t.length,o=8*n-r-1,i=(1<<o)-1,a=i>>1,u=o-7,s=n-1,c=t[s--],f=127&c;for(c>>=7;u>0;)f=256*f+t[s--],u-=8;for(e=f&(1<<-u)-1,f>>=-u,u+=r;u>0;)e=256*e+t[s--],u-=8;if(0===f)f=1-a;else{if(f===i)return e?NaN:c?-1/0:1/0;e+=i1(2,r),f-=a}return(c?-1:1)*e*i1(2,f-r)}};var i3=a_,i8=ra.PROPER,i7=ra.CONFIGURABLE,i9="ArrayBuffer",at="DataView",ar="prototype",ae="Wrong index",an=rp.getterFor(i9),ao=rp.getterFor(at),ai=rp.set,aa=k[i9],au=aa,as=au&&au[ar],ac=k[at],af=ac&&ac[ar],al=Object.prototype,ah=k.Array,av=k.RangeError,ap=H(oa),ad=H([].reverse),ag=iX.pack,ay=iX.unpack,ab=function(t){return[255&t]},am=function(t){return[255&t,t>>8&255]},aw=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},aS=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},ax=function(t){return ag(t,23,4)},aA=function(t){return ag(t,52,8)},aE=function(t,r,e){eT(t[ar],r,{configurable:!0,get:function(){return e(this)[r]}})},aO=function(t,r,e,n){var o=ao(t),i=iK(e);if(i+r>o.byteLength)throw av(ae);var a=o.bytes,u=i+o.byteOffset,s=ew(a,u,u+r);return n?s:ad(s)},aT=function(t,r,e,n,o,i){var a=ao(t),u=iK(e),s=n(+o),c=!!i;if(u+r>a.byteLength)throw av(ae);for(var f=a.bytes,l=u+a.byteOffset,h=0;h<r;h++)f[l+h]=s[c?h:r-h-1]};if(iH){var aI=i8&&aa.name!==i9;/* eslint-disable no-new -- required for testing */if(!_(function(){aa(1)})||!_(function(){new aa(-1)})||_(function(){return new aa,new aa(1.5),new aa(NaN),1!==aa.length||aI&&!i7})){/* eslint-enable no-new -- required for testing */(au=function(t){return i$(this,as),new aa(iK(t))})[ar]=as;for(var aR,aj,aP,aL,aM,ak,aC,aN,a_,aU,aF,aD,az,aB,aq,aG,aW,aH,aV=i3(aa),a$=0;aV.length>a$;)(aH=aV[a$++])in au||t5(au,aH,aa[aH]);as.constructor=au}else aI&&i7&&t5(aa,"name",i9);oX&&oq(af)!==al&&oX(af,al);// iOS Safari 7.x bug
var aY=new ac(new au(2)),aK=H(af.setInt8);aY.setInt8(0,2147483648),aY.setInt8(1,2147483649),(aY.getInt8(0)||!aY.getInt8(1))&&iV(af,{setInt8:function(t,r){aK(this,t,r<<24>>24)},setUint8:function(t,r){aK(this,t,r<<24>>24)}},{unsafe:!0})}else as=(au=function(t){i$(this,as);var r=iK(t);ai(this,{type:i9,bytes:ap(ah(r),0),byteLength:r}),N||(this.byteLength=r,this.detached=!1)})[ar],af=(ac=function(t,r,e){i$(this,af),i$(t,as);var n=an(t),o=n.byteLength,i=rz(r);if(i<0||i>o)throw av("Wrong offset");if(e=void 0===e?o-i:r$(e),i+e>o)throw av("Wrong length");ai(this,{type:at,buffer:t,byteLength:e,byteOffset:i,bytes:n.bytes}),N||(this.buffer=t,this.byteLength=e,this.byteOffset=i)})[ar],N&&(aE(au,"byteLength",an),aE(ac,"buffer",ao),aE(ac,"byteLength",ao),aE(ac,"byteOffset",ao)),iV(af,{getInt8:function(t){return aO(this,1,t)[0]<<24>>24},getUint8:function(t){return aO(this,1,t)[0]},getInt16:function(t/* , littleEndian */){var r=aO(this,2,t,arguments.length>1&&arguments[1]);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t/* , littleEndian */){var r=aO(this,2,t,arguments.length>1&&arguments[1]);return r[1]<<8|r[0]},getInt32:function(t/* , littleEndian */){return aS(aO(this,4,t,arguments.length>1&&arguments[1]))},getUint32:function(t/* , littleEndian */){return aS(aO(this,4,t,arguments.length>1&&arguments[1]))>>>0},getFloat32:function(t/* , littleEndian */){return ay(aO(this,4,t,arguments.length>1&&arguments[1]),23)},getFloat64:function(t/* , littleEndian */){return ay(aO(this,8,t,arguments.length>1&&arguments[1]),52)},setInt8:function(t,r){aT(this,1,t,ab,r)},setUint8:function(t,r){aT(this,1,t,ab,r)},setInt16:function(t,r/* , littleEndian */){aT(this,2,t,am,r,arguments.length>2&&arguments[2])},setUint16:function(t,r/* , littleEndian */){aT(this,2,t,am,r,arguments.length>2&&arguments[2])},setInt32:function(t,r/* , littleEndian */){aT(this,4,t,aw,r,arguments.length>2&&arguments[2])},setUint32:function(t,r/* , littleEndian */){aT(this,4,t,aw,r,arguments.length>2&&arguments[2])},setFloat32:function(t,r/* , littleEndian */){aT(this,4,t,ax,r,arguments.length>2&&arguments[2])},setFloat64:function(t,r/* , littleEndian */){aT(this,8,t,aA,r,arguments.length>2&&arguments[2])}});eL(au,i9),eL(ac,at);var aJ="ArrayBuffer",aX=(iW={ArrayBuffer:au,DataView:ac})[aJ],aQ=k[aJ];// `ArrayBuffer` constructor
// https://tc39.es/ecma262/#sec-arraybuffer-constructor
M({global:!0,constructor:!0,forced:aQ!==aX},{ArrayBuffer:aX}),i_(aJ);var aZ={},a0=TypeError;// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
aZ=function(t){if(t6(this),"string"===t||"default"===t)t="string";else if("number"!==t)throw a0("Incorrect hint");return tj(this,t)};var a1=tL("toPrimitive"),a2=Date.prototype;tF(a2,a1)||ro(a2,a1,aZ);var a5=tL("hasInstance"),a4=Function.prototype;a5 in a4||aM(a4,a5,{value:ri(function(t){if(!ta(this)||!ti(t))return!1;var r=this.prototype;if(!ti(r))return t instanceof this;// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;t=oq(t);)if(r===t)return!0;return!1},a5)});var a6=ra.EXISTS,a3=Function.prototype,a8=H(a3.toString),a7=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,a9=H(a7.exec);N&&!a6&&eT(a3,"name",{configurable:!0,get:function(){try{return a9(a7,a8(this))[1]}catch(t){return""}}}),// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
eL(k.JSON,"JSON",!0);var ut={},ur={},ue=aM,un={},uo={};uo=_(function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);// eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}});// eslint-disable-next-line es/no-object-isextensible -- safe
var ui=Object.isExtensible;// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
un=_(function(){ui(1)})||uo?function(t){return!!ti(t)&&(!uo||"ArrayBuffer"!==K(t))&&(!ui||ui(t))}:ui;var ua={};ua=!_(function(){// eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
return Object.isExtensible(Object.preventExtensions({}))});var uu=!1,us=tq("meta"),uc=0,uf=function(t){ue(t,us,{value:{objectID:"O"+uc++,weakData:{}// weak collections IDs
}})},ul=ur={enable:function(){ul.enable=function(){},uu=!0;var t=a_,r=H([].splice),e={};e[us]=1,t(e).length&&(a_=function(e){for(var n=t(e),o=0,i=n.length;o<i;o++)if(n[o]===us){r(n,o,1);break}return n},M({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:az}))},fastKey:function(t,r){// return a primitive with prefix
if(!ti(t))return(void 0===t?"undefined":P(t))=="symbol"?t:("string"==typeof t?"S":"P")+t;if(!tF(t,us)){// can't set metadata to uncaught frozen object
if(!un(t))return"F";// not necessary to add metadata
if(!r)return"E";// add missing metadata
uf(t);// return object ID
}return t[us].objectID},getWeakData:function(t,r){if(!tF(t,us)){// can't set metadata to uncaught frozen object
if(!un(t))return!0;// not necessary to add metadata
if(!r)return!1;// add missing metadata
uf(t);// return the store of weak collections IDs
}return t[us].weakData},onFreeze:function(t){return ua&&uu&&un(t)&&!tF(t,us)&&uf(t),t}};rm[us]=!0;var uh={},uv=TypeError,up=function(t,r){this.stopped=t,this.result=r},ud=up.prototype;uh=function(t,r,e){var n,o,i,a,u,s,c,f=e&&e.that,l=!!(e&&e.AS_ENTRIES),h=!!(e&&e.IS_RECORD),v=!!(e&&e.IS_ITERATOR),p=!!(e&&e.INTERRUPTED),d=eN(r,f),g=function(t){return n&&om(n,"normal",t),new up(!0,t)},y=function(t){return l?(t6(t),p?d(t[0],t[1],g):d(t[0],t[1])):p?d(t,g):d(t)};if(h)n=t.iterator;else if(v)n=t;else{if(!(o=oO(t)))throw uv(tT(t)+" is not iterable");// optimisation for array iterators
if(ow(o)){for(i=0,a=rV(t);a>i;i++)if((u=y(t[i]))&&tv(ud,u))return u;return new up(!1)}n=oE(t,o)}for(s=h?t.next:n.next;!(c=U(s,n)).done;){try{u=y(c.value)}catch(t){om(n,"throw",t)}if("object"==typeof u&&u&&tv(ud,u))return u}return new up(!1)};var ug={};// makes subclassing work correct for wrapped built-ins
ug=function(t,r,e){var n,o;return oX&&// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
ta(n=r.constructor)&&n!==e&&ti(o=n.prototype)&&o!==e.prototype&&oX(t,o),t},ut=function(t,r,e){var n=-1!==t.indexOf("Map"),o=-1!==t.indexOf("Weak"),i=n?"set":"add",a=k[t],u=a&&a.prototype,s=a,c={},f=function(t){var r=H(u[t]);ro(u,t,"add"===t?function(t){return r(this,0===t?0:t),this}:"delete"===t?function(t){return(!o||!!ti(t))&&r(this,0===t?0:t)}:"get"===t?function(t){return o&&!ti(t)?void 0:r(this,0===t?0:t)}:"has"===t?function(t){return(!o||!!ti(t))&&r(this,0===t?0:t)}:function(t,e){return r(this,0===t?0:t,e),this})};if(r1(t,!ta(a)||!(o||u.forEach&&!_(function(){new a().entries().next()}))))// create collection constructor
s=e.getConstructor(r,t,n,i),ur.enable();else if(r1(t,!0)){var l=new s,h=l[i](o?{}:-0,1)!==l,v=_(function(){l.has(1)}),p=oj(function(t){new a(t)}),d=!o&&_(function(){for(// V8 ~ Chromium 42- fails only with 5+ elements
var t=new a,r=5;r--;)t[i](r,r);return!t.has(-0)});p||((s=r(function(t,r){i$(t,u);var e=ug(new a,t,s);return tr(r)||uh(r,e[i],{that:e,AS_ENTRIES:n}),e})).prototype=u,u.constructor=s),(v||d)&&(f("delete"),f("has"),n&&f("get")),(d||h)&&f(i),o&&u.clear&&delete u.clear}return c[t]=s,M({global:!0,constructor:!0,forced:s!==a},c),eL(s,t),o||e.setStrong(s,t,n),s};var uy={},ub=ur.fastKey,um=rp.set,uw=rp.getterFor;// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
ut("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},uy={getConstructor:function(t,r,e,n){var o=t(function(t,o){i$(t,i),um(t,{type:r,index:es(null),first:void 0,last:void 0,size:0}),N||(t.size=0),tr(o)||uh(o,t[n],{that:t,AS_ENTRIES:e})}),i=o.prototype,a=uw(r),u=function(t,r,e){var n,o,i=a(t),u=s(t,r);return u?u.value=e:(i.last=u={index:o=ub(r,!0),key:r,value:e,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=u),n&&(n.next=u),N?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},s=function(t,r){var e,n=a(t),o=ub(r);if("F"!==o)return n.index[o];// frozen object case
for(e=n.first;e;e=e.next)if(e.key===r)return e};return iV(i,{// `{ Map, Set }.prototype.clear()` methods
// https://tc39.es/ecma262/#sec-map.prototype.clear
// https://tc39.es/ecma262/#sec-set.prototype.clear
clear:function(){for(var t=a(this),r=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete r[e.index],e=e.next;t.first=t.last=void 0,N?t.size=0:this.size=0},// `{ Map, Set }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.delete
// https://tc39.es/ecma262/#sec-set.prototype.delete
delete:function(t){var r=a(this),e=s(this,t);if(e){var n=e.next,o=e.previous;delete r.index[e.index],e.removed=!0,o&&(o.next=n),n&&(n.previous=o),r.first===e&&(r.first=n),r.last===e&&(r.last=o),N?r.size--:this.size--}return!!e},// `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
// https://tc39.es/ecma262/#sec-map.prototype.foreach
// https://tc39.es/ecma262/#sec-set.prototype.foreach
forEach:function(t/* , that = undefined */){for(var r,e=a(this),n=eN(t,arguments.length>1?arguments[1]:void 0);r=r?r.next:e.first;)// revert to the last existing entry
for(n(r.value,r.key,this);r&&r.removed;)r=r.previous},// `{ Map, Set}.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-map.prototype.has
// https://tc39.es/ecma262/#sec-set.prototype.has
has:function(t){return!!s(this,t)}}),iV(i,e?{// `Map.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-map.prototype.get
get:function(t){var r=s(this,t);return r&&r.value},// `Map.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-map.prototype.set
set:function(t,r){return u(this,0===t?0:t,r)}}:{// `Set.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-set.prototype.add
add:function(t){return u(this,t=0===t?0:t,t)}}),N&&eT(i,"size",{configurable:!0,get:function(){return a(this).size}}),o},setStrong:function(t,r,e){var n=r+" Iterator",o=uw(r),i=uw(n);// `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
// https://tc39.es/ecma262/#sec-map.prototype.entries
// https://tc39.es/ecma262/#sec-map.prototype.keys
// https://tc39.es/ecma262/#sec-map.prototype.values
// https://tc39.es/ecma262/#sec-map.prototype-@@iterator
// https://tc39.es/ecma262/#sec-set.prototype.entries
// https://tc39.es/ecma262/#sec-set.prototype.keys
// https://tc39.es/ecma262/#sec-set.prototype.values
// https://tc39.es/ecma262/#sec-set.prototype-@@iterator
oD(t,r,function(t,r){um(this,{type:n,target:t,state:o(t),kind:r,last:void 0})},function(){// revert to the last existing entry
for(var t=i(this),r=t.kind,e=t.last;e&&e.removed;)e=e.previous;return(// get next entry
t.target&&(t.last=e=e?e.next:t.state.first)?"keys"===r?ir(e.key,!1):"values"===r?ir(e.value,!1):ir([e.key,e.value],!1):(// or finish the iteration
t.target=void 0,ir(void 0,!0)))},e?"entries":"values",!e,!0),// `{ Map, Set }.prototype[@@species]` accessors
// https://tc39.es/ecma262/#sec-get-map-@@species
// https://tc39.es/ecma262/#sec-get-set-@@species
i_(r)}});var uS={},ux=Math.log;// `Math.log1p` method implementation
// https://tc39.es/ecma262/#sec-math.log1p
// eslint-disable-next-line es/no-math-log1p -- safe
uS=Math.log1p||function(t){var r=+t;return r>-.00000001&&r<1e-8?r-r*r/2:ux(1+r)};// eslint-disable-next-line es/no-math-acosh -- required for testing
var uA=Math.acosh,uE=Math.log,uO=Math.sqrt,uT=Math.LN2,uI=!uA||710!==Math.floor(uA(Number.MAX_VALUE))||uA(1/0)!==1/0;// `Math.acosh` method
// https://tc39.es/ecma262/#sec-math.acosh
M({target:"Math",stat:!0,forced:uI},{acosh:function(t){var r=+t;return r<1?NaN:r>94906265.62425156?uE(r)+uT:uS(r-1+uO(r-1)*uO(r+1))}});// eslint-disable-next-line es/no-math-asinh -- required for testing
var uR=Math.asinh,uj=Math.log,uP=Math.sqrt,uL=!(uR&&1/uR(0)>0);// `Math.asinh` method
// https://tc39.es/ecma262/#sec-math.asinh
// Tor Browser bug: Math.asinh(0) -> -0
M({target:"Math",stat:!0,forced:uL},{asinh:function t(r){var e=+r;return isFinite(e)&&0!==e?e<0?-t(-e):uj(e+uP(e*e+1)):e}});// eslint-disable-next-line es/no-math-atanh -- required for testing
var uM=Math.atanh,uk=Math.log,uC=!(uM&&1/uM(-0)<0);// `Math.atanh` method
// https://tc39.es/ecma262/#sec-math.atanh
// Tor Browser bug: Math.atanh(-0) -> 0
M({target:"Math",stat:!0,forced:uC},{atanh:function(t){var r=+t;return 0===r?r:uk((1+r)/(1-r))/2}});var uN=Math.abs,u_=Math.pow;// `Math.cbrt` method
// https://tc39.es/ecma262/#sec-math.cbrt
M({target:"Math",stat:!0},{cbrt:function(t){var r=+t;return iQ(r)*u_(uN(r),1/3)}});var uU=Math.floor,uF=Math.log,uD=Math.LOG2E;// `Math.clz32` method
// https://tc39.es/ecma262/#sec-math.clz32
M({target:"Math",stat:!0},{clz32:function(t){var r=t>>>0;return r?31-uU(uF(r+.5)*uD):32}});var uz={},uB=Math.expm1,uq=Math.exp;// `Math.expm1` method implementation
// https://tc39.es/ecma262/#sec-math.expm1
uz=!uB||uB(10)>22025.465794806718||22025.465794806718>uB(10)||-.00000000000000002!==uB(-.00000000000000002)?function(t){var r=+t;return 0===r?r:r>-.000001&&r<1e-6?r+r*r/2:uq(r)-1}:uB;// eslint-disable-next-line es/no-math-cosh -- required for testing
var uG=Math.cosh,uW=Math.abs,uH=Math.E,uV=!uG||uG(710)===1/0;// `Math.cosh` method
// https://tc39.es/ecma262/#sec-math.cosh
M({target:"Math",stat:!0,forced:uV},{cosh:function(t){var r=uz(uW(t)-1)+1;return(r+1/(r*uH*uH))*(uH/2)}}),// `Math.expm1` method
// https://tc39.es/ecma262/#sec-math.expm1
// eslint-disable-next-line es/no-math-expm1 -- required for testing
M({target:"Math",stat:!0,forced:uz!==Math.expm1},{expm1:uz});var u$=Math.abs,uY=Math.pow,uK=uY(2,-52),uJ=uY(2,-23),uX=uY(2,127)*(2-uJ),uQ=uY(2,-126);// `Math.fround` method
// https://tc39.es/ecma262/#sec-math.fround
M({target:"Math",stat:!0},{fround:Math.fround||function(t){var r,e,n=+t,o=u$(n),i=iQ(n);return o<uQ?i*(o/uQ/uJ+1/uK-1/uK)*uQ*uJ:// eslint-disable-next-line no-self-compare -- NaN check
(e=(r=(1+uJ/uK)*o)-(r-o))>uX||e!=e?i*(1/0):i*e}});// eslint-disable-next-line es/no-math-hypot -- required for testing
var uZ=Math.hypot,u0=Math.abs,u1=Math.sqrt,u2=!!uZ&&uZ(1/0,NaN)!==1/0;// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
M({target:"Math",stat:!0,arity:2,forced:u2},{// eslint-disable-next-line no-unused-vars -- required for `.length`
hypot:function(t,r){for(var e,n,o=0,i=0,a=arguments.length,u=0;i<a;)e=u0(arguments[i++]),u<e?(o=o*(n=u/e)*n+1,u=e):e>0?o+=(n=e/u)*n:o+=e;return u===1/0?1/0:u*u1(o)}});// eslint-disable-next-line es/no-math-imul -- required for testing
var u5=Math.imul,u4=_(function(){return -5!==u5(4294967295,5)||2!==u5.length});// `Math.imul` method
// https://tc39.es/ecma262/#sec-math.imul
// some WebKit versions fails with big numbers, some has wrong arity
M({target:"Math",stat:!0,forced:u4},{imul:function(t,r){var e=+t,n=+r,o=65535&e,i=65535&n;return 0|o*i+((65535&e>>>16)*i+o*(65535&n>>>16)<<16>>>0)}});var u6=Math.log,u3=Math.LOG10E;// `Math.log10` method
// https://tc39.es/ecma262/#sec-math.log10
M({target:"Math",stat:!0},{log10:Math.log10||function(t){return u6(t)*u3}}),// `Math.log1p` method
// https://tc39.es/ecma262/#sec-math.log1p
M({target:"Math",stat:!0},{log1p:uS});var u8=Math.log,u7=Math.LN2;// `Math.log2` method
// https://tc39.es/ecma262/#sec-math.log2
M({target:"Math",stat:!0},{log2:function(t){return u8(t)/u7}}),// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
M({target:"Math",stat:!0},{sign:iQ});var u9=Math.abs,st=Math.exp,sr=Math.E,se=_(function(){// eslint-disable-next-line es/no-math-sinh -- required for testing
return -.00000000000000002!==Math.sinh(-.00000000000000002)});// `Math.sinh` method
// https://tc39.es/ecma262/#sec-math.sinh
// V8 near Chromium 38 has a problem with very small numbers
M({target:"Math",stat:!0,forced:se},{sinh:function(t){var r=+t;return 1>u9(r)?(uz(r)-uz(-r))/2:(st(r-1)-st(-r-1))*(sr/2)}});var sn=Math.exp;// `Math.tanh` method
// https://tc39.es/ecma262/#sec-math.tanh
M({target:"Math",stat:!0},{tanh:function(t){var r=+t,e=uz(r),n=uz(-r);return e===1/0?1:n===1/0?-1:(e-n)/(sn(r)+sn(-r))}}),// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
eL(Math,"Math",!0),// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
M({target:"Math",stat:!0},{trunc:rB});var so=a_,si=aR,sa=aM,su={};// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
su=H(1..valueOf);var ss={},sc={};// a string of all valid unicode whitespaces
sc="	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";var sf=H("".replace),sl=RegExp("^["+sc+"]+"),sh=RegExp("(^|[^"+sc+"])["+sc+"]+$"),sv=function(t){return function(r){var e=r7(tt(r));return 1&t&&(e=sf(e,sl,"")),2&t&&(e=sf(e,sh,"$1")),e}},sp=(ss={// `String.prototype.{ trimLeft, trimStart }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
start:sv(1),// `String.prototype.{ trimRight, trimEnd }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimend
end:sv(2),// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
trim:sv(3)}).trim,sd="Number",sg=k[sd],sy=eR[sd],sb=sg.prototype,sm=k.TypeError,sw=H("".slice),sS=H("".charCodeAt),sx=function(t){var r=to(t,"number");return(void 0===r?"undefined":P(r))=="bigint"?r:sA(r)},sA=function(t){var r,e,n,o,i,a,u,s,c=to(t,"number");if(tl(c))throw sm("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2){if(43===(r=sS(c=sp(c),0))||45===r){if(88===(e=sS(c,2))||120===e)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(48===r){switch(sS(c,1)){// fast equal of /^0b[01]+$/i
case 66:case 98:n=2,o=49;break;// fast equal of /^0o[0-7]+$/i
case 79:case 111:n=8,o=55;break;default:return+c}for(u=0,a=(i=sw(c,2)).length;u<a;u++)// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((s=sS(i,u))<48||s>o)return NaN;return parseInt(i,n)}}return+c},sE=r1(sd,!sg(" 0o1")||!sg("0b1")||sg("+0x1")),sO=function(t){var r,e=arguments.length<1?0:sg(sx(t));return(r=this,tv(sb,r)&&_(function(){su(r)}))?ug(Object(e),this,sO):e};sO.prototype=sb,sE&&!tk&&(sb.constructor=sO),M({global:!0,constructor:!0,wrap:!0,forced:sE},{Number:sO});// Use `internal/copy-constructor-properties` helper in `core-js@4`
var sT=function(t,r){for(var e,n=N?so(r):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;n.length>o;o++)tF(r,e=n[o])&&!tF(t,e)&&sa(t,e,si(r,e))};tk&&sy&&sT(eR[sd],sy),(sE||tk)&&sT(eR[sd],sg),// `Number.EPSILON` constant
// https://tc39.es/ecma262/#sec-number.epsilon
M({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{EPSILON:2220446049250313e-31});var sI={},sR=k.isFinite;// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
// eslint-disable-next-line es/no-number-isfinite -- safe
sI=Number.isFinite||function(t){return"number"==typeof t&&sR(t)},// `Number.isFinite` method
// https://tc39.es/ecma262/#sec-number.isfinite
M({target:"Number",stat:!0},{isFinite:sI});var sj={},sP=Math.floor;// `IsIntegralNumber` abstract operation
// https://tc39.es/ecma262/#sec-isintegralnumber
// eslint-disable-next-line es/no-number-isinteger -- safe
sj=Number.isInteger||function(t){return!ti(t)&&isFinite(t)&&sP(t)===t},// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
M({target:"Number",stat:!0},{isInteger:sj}),// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
M({target:"Number",stat:!0},{isNaN:function(t){// eslint-disable-next-line no-self-compare -- NaN check
return t!=t}});var sL=Math.abs;// `Number.isSafeInteger` method
// https://tc39.es/ecma262/#sec-number.issafeinteger
M({target:"Number",stat:!0},{isSafeInteger:function(t){return sj(t)&&9007199254740991>=sL(t)}}),// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
M({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991}),// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
M({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MIN_SAFE_INTEGER:-9007199254740991});var sM={},sk=ss.trim,sC=H("".charAt),sN=k.parseFloat,s_=k.Symbol,sU=s_&&s_.iterator;// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
sM=1/sN(sc+"-0")!=-1/0||sU&&!_(function(){sN(Object(sU))})?function(t){var r=sk(r7(t)),e=sN(r);return 0===e&&"-"===sC(r,0)?-0:e}:sN,// `Number.parseFloat` method
// https://tc39.es/ecma262/#sec-number.parseFloat
// eslint-disable-next-line es/no-number-parsefloat -- required for testing
M({target:"Number",stat:!0,forced:Number.parseFloat!==sM},{parseFloat:sM});var sF={},sD=ss.trim,sz=k.parseInt,sB=k.Symbol,sq=sB&&sB.iterator,sG=/^[+-]?0x/i,sW=H(sG.exec);// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
sF=8!==sz(sc+"08")||22!==sz(sc+"0x16")||sq&&!_(function(){sz(Object(sq))})?function(t,r){var e=sD(r7(t));return sz(e,r>>>0||(sW(sG,e)?16:10))}:sz,// `Number.parseInt` method
// https://tc39.es/ecma262/#sec-number.parseint
// eslint-disable-next-line es/no-number-parseint -- required for testing
M({target:"Number",stat:!0,forced:Number.parseInt!==sF},{parseInt:sF});var sH={},sV=RangeError,s$=RangeError,sY=String,sK=Math.floor,sJ=H(// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
sH=function(t){var r=r7(tt(this)),e="",n=rz(t);if(n<0||n===1/0)throw sV("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(r+=r))1&n&&(e+=r);return e}),sX=H("".slice),sQ=H(1..toFixed),sZ=function(t,r,e){return 0===r?e:r%2==1?sZ(t,r-1,e*t):sZ(t*t,r/2,e)},s0=function(t){for(var r=0,e=t;e>=4096;)r+=12,e/=4096;for(;e>=2;)r+=1,e/=2;return r},s1=function(t,r,e){for(var n=-1,o=e;++n<6;)o+=r*t[n],t[n]=o%1e7,o=sK(o/1e7)},s2=function(t,r){for(var e=6,n=0;--e>=0;)n+=t[e],t[e]=sK(n/r),n=n%r*1e7},s5=function(t){for(var r=6,e="";--r>=0;)if(""!==e||0===r||0!==t[r]){var n=sY(t[r]);e=""===e?n:e+sJ("0",7-n.length)+n}return e},s4=_(function(){return"0.000"!==sQ(8e-5,3)||"1"!==sQ(.9,0)||"1.25"!==sQ(1.255,2)||"1000000000000000128"!==sQ(0xde0b6b3a7640080,0)})||!_(function(){// V8 ~ Android 4.3-
sQ({})});// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
M({target:"Number",proto:!0,forced:s4},{toFixed:function(t){var r,e,n,o,i=su(this),a=rz(t),u=[0,0,0,0,0,0],s="",c="0";// TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
if(a<0||a>20)throw s$("Incorrect fraction digits");// eslint-disable-next-line no-self-compare -- NaN check
if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return sY(i);if(i<0&&(s="-",i=-i),i>1e-21){if(e=((r=s0(i*sZ(2,69,1))-69)<0?i*sZ(2,-r,1):i/sZ(2,r,1))*4503599627370496,(r=52-r)>0){for(s1(u,0,e),n=a;n>=7;)s1(u,1e7,0),n-=7;for(s1(u,sZ(10,n,1),0),n=r-1;n>=23;)s2(u,8388608),n-=23;s2(u,1<<n),s1(u,1,1),s2(u,2),c=s5(u)}else s1(u,0,e),s1(u,1<<-r,0),c=s5(u)+sJ("0",a)}return a>0?s+((o=c.length)<=a?"0."+sJ("0",a-o)+c:sX(c,0,o-a)+"."+sX(c,o-a)):s+c}});var s6={},s3=Object.assign,s8=Object.defineProperty,s7=H([].concat);// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
s6=!s3||_(function(){// should have correct order of operations (Edge bug)
if(N&&1!==s3({b:1},s3(s8({},"a",{enumerable:!0,get:function(){s8(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;// should work with symbols and should have deterministic property order (V8 bug)
var t={},r={},e=Symbol("assign detection"),n="abcdefghijklmnopqrst";return t[e]=7,n.split("").forEach(function(t){r[t]=t}),7!==s3({},t)[e]||ec(s3({},r)).join("")!==n})?function(t,r){for(var e=tD(t),n=arguments.length,o=1,i=aU,a=aj;n>o;)for(var u,s=W(arguments[o++]),c=i?s7(ec(s),i(s)):ec(s),f=c.length,l=0;f>l;)u=c[l++],(!N||U(a,s,u))&&(e[u]=s[u]);return e}:s3,// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
M({target:"Object",stat:!0,arity:2,forced:Object.assign!==s6},{assign:s6});var s9={};// Forced replacement object prototype accessors methods
s9=tk||!_(function(){// This feature detection crashes old WebKit
// https://github.com/zloirock/core-js/issues/232
if(!iI||!(iI<535)){var t=Math.random();// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call, es/no-legacy-object-prototype-accessor-methods -- required for testing
__defineSetter__.call(null,t,function(){}),delete k[t]}}),N&&M({target:"Object",proto:!0,forced:s9},{__defineGetter__:function(t,r){aM(tD(this),t,{get:tO(r),enumerable:!0,configurable:!0})}}),N&&M({target:"Object",proto:!0,forced:s9},{__defineSetter__:function(t,r){aM(tD(this),t,{set:tO(r),enumerable:!0,configurable:!0})}});var ct={},cr=H(aj),ce=H([].push),cn=N&&_(function(){// eslint-disable-next-line es/no-object-create -- safe
var t=Object.create(null);return t[2]=2,!cr(t,2)}),co=function(t){return function(r){for(var e,n=G(r),o=ec(n),i=cn&&null===oq(n),a=o.length,u=0,s=[];a>u;)e=o[u++],(!N||(i?e in n:cr(n,e)))&&ce(s,t?[e,n[e]]:n[e]);return s}},ci=(ct={// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
entries:co(!0),// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
values:co(!1)}).entries;// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
M({target:"Object",stat:!0},{entries:function(t){return ci(t)}});var ca=ur.onFreeze,cu=Object.freeze,cs=_(function(){cu(1)});// `Object.freeze` method
// https://tc39.es/ecma262/#sec-object.freeze
M({target:"Object",stat:!0,forced:cs,sham:!ua},{freeze:function(t){return cu&&ti(t)?cu(ca(t)):t}}),// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
M({target:"Object",stat:!0},{fromEntries:function(t){var r={};return uh(t,function(t,e){eS(r,t,e)},{AS_ENTRIES:!0}),r}});var cc=aR,cf=!N||_(function(){cc(1)});// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
M({target:"Object",stat:!0,forced:cf,sham:!N},{getOwnPropertyDescriptor:function(t,r){return cc(G(t),r)}}),// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
M({target:"Object",stat:!0,sham:!N},{getOwnPropertyDescriptors:function(t){for(var r,e,n=G(t),o=aR,i=r_(n),a={},u=0;i.length>u;)void 0!==(e=o(n,r=i[u++]))&&eS(a,r,e);return a}});var cl=az,ch=_(function(){return!Object.getOwnPropertyNames(1)});// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
M({target:"Object",stat:!0,forced:ch},{getOwnPropertyNames:cl});var cv=_(function(){oq(1)});// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
M({target:"Object",stat:!0,forced:cv,sham:!oG},{getPrototypeOf:function(t){return oq(tD(t))}});var cp={};// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
cp=Object.is||function(t,r){// eslint-disable-next-line no-self-compare -- NaN check
return t===r?0!==t||1/t==1/r:t!=t&&r!=r},// `Object.is` method
// https://tc39.es/ecma262/#sec-object.is
M({target:"Object",stat:!0},{is:cp}),// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
// eslint-disable-next-line es/no-object-isextensible -- safe
M({target:"Object",stat:!0,forced:Object.isExtensible!==un},{isExtensible:un});// eslint-disable-next-line es/no-object-isfrozen -- safe
var cd=Object.isFrozen,cg=uo||_(function(){cd(1)});// `Object.isFrozen` method
// https://tc39.es/ecma262/#sec-object.isfrozen
M({target:"Object",stat:!0,forced:cg},{isFrozen:function(t){return!ti(t)||!!uo&&"ArrayBuffer"===K(t)||!!cd&&cd(t)}});// eslint-disable-next-line es/no-object-issealed -- safe
var cy=Object.isSealed,cb=uo||_(function(){cy(1)});// `Object.isSealed` method
// https://tc39.es/ecma262/#sec-object.issealed
M({target:"Object",stat:!0,forced:cb},{isSealed:function(t){return!ti(t)||!!uo&&"ArrayBuffer"===K(t)||!!cy&&cy(t)}});var cm=_(function(){ec(1)});// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
M({target:"Object",stat:!0,forced:cm},{keys:function(t){return ec(tD(t))}});var cw=aR;N&&M({target:"Object",proto:!0,forced:s9},{__lookupGetter__:function(t){var r,e=tD(this),n=tn(t);do if(r=cw(e,n))return r.get;while(e=oq(e))}});var cS=aR;N&&M({target:"Object",proto:!0,forced:s9},{__lookupSetter__:function(t){var r,e=tD(this),n=tn(t);do if(r=cS(e,n))return r.set;while(e=oq(e))}});var cx=ur.onFreeze,cA=Object.preventExtensions,cE=_(function(){cA(1)});// `Object.preventExtensions` method
// https://tc39.es/ecma262/#sec-object.preventextensions
M({target:"Object",stat:!0,forced:cE,sham:!ua},{preventExtensions:function(t){return cA&&ti(t)?cA(cx(t)):t}});var cO=ur.onFreeze,cT=Object.seal,cI=_(function(){cT(1)});// `Object.seal` method
// https://tc39.es/ecma262/#sec-object.seal
M({target:"Object",stat:!0,forced:cI,sham:!ua},{seal:function(t){return cT&&ti(t)?cT(cO(t)):t}});var cR={};// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
cR=et?({}).toString:function(){return"[object "+r9(this)+"]"},et||ro(Object.prototype,"toString",cR,{unsafe:!0});var cj=ct.values;// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
M({target:"Object",stat:!0},{values:function(t){return cj(t)}});var cP={};cP="process"===K(k.process);var cL={},cM={},ck=TypeError;// `Assert: IsConstructor(argument) is true`
cM=function(t){if(eB(t))return t;throw ck(tT(t)+" is not a constructor")};var cC=tL("species");// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
cL=function(t,r){var e,n=t6(t).constructor;return void 0===n||tr(e=t6(n)[cC])?r:cM(e)};var cN={},c_={},cU=TypeError;c_=function(t,r){if(t<r)throw cU("Not enough arguments");return t};var cF={};// eslint-disable-next-line redos/no-vulnerable -- safe
cF=/(?:ipad|iphone|ipod).*applewebkit/i.test(ty);var cD=k.setImmediate,cz=k.clearImmediate,cB=k.process,cq=k.Dispatch,cG=k.Function,cW=k.MessageChannel,cH=k.String,cV=0,c$={},cY="onreadystatechange";_(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
s=k.location});var cK=function(t){if(tF(c$,t)){var r=c$[t];delete c$[t],r()}},cJ=function(t){return function(){cK(t)}},cX=function(t){cK(t.data)},cQ=function(t){// old engines have not location.origin
k.postMessage(cH(t),s.protocol+"//"+s.host)};cD&&cz||(cD=function(t){c_(arguments.length,1);var r=ta(t)?t:cG(t),e=nT(arguments,1);return c$[++cV]=function(){nx(r,void 0,e)},c(cV),cV},cz=function(t){delete c$[t]},cP?c=function(t){cB.nextTick(cJ(t))}:cq&&cq.now?c=function(t){cq.now(cJ(t))}:cW&&!cF?(l=(f=new cW).port2,f.port1.onmessage=cX,c=eN(l.postMessage,l)):k.addEventListener&&ta(k.postMessage)&&!k.importScripts&&s&&"file:"!==s.protocol&&!_(cQ)?(c=cQ,k.addEventListener("message",cX,!1)):c=cY in tQ("script")?function(t){ef.appendChild(tQ("script"))[cY]=function(){ef.removeChild(this),cK(t)}}:function(t){setTimeout(cJ(t),0)});var cZ=(cN={set:cD,clear:cz}).set,c0={},c1=aR,c2=cN.set,c5={},c4=function(){this.head=null,this.tail=null};c4.prototype={add:function(t){var r={item:t,next:null},e=this.tail;e?e.next=r:this.head=r,this.tail=r},get:function(){var t=this.head;if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}},c5=c4;var c6={};c6=/ipad|iphone|ipod/i.test(ty)&&"undefined"!=typeof Pebble;var c3={};c3=/web0s(?!.*chrome)/i.test(ty);var c8=k.MutationObserver||k.WebKitMutationObserver,c7=k.document,c9=k.process,ft=k.Promise,fr=c1(k,"queueMicrotask"),fe=fr&&fr.value;// modern engines have queueMicrotask method
if(!fe){var fn=new c5,fo=function(){var t,r;for(cP&&(t=c9.domain)&&t.exit();r=fn.get();)try{r()}catch(t){throw fn.head&&h(),t}t&&t.enter()};cF||cP||c3||!c8||!c7?!c6&&ft&&ft.resolve?(// workaround of WebKit ~ iOS Safari 10.1 bug
// Promise.resolve without an argument throws an error in LG WebOS 2
(d=ft.resolve(void 0)).constructor=ft,g=eN(d.then,d),h=function(){g(fo)}):cP?h=function(){c9.nextTick(fo)}:(// `webpack` dev server bug on IE global methods - use bind(fn, global)
c2=eN(c2,k),h=function(){c2(fo)}):(v=!0,p=c7.createTextNode(""),new c8(fo).observe(p,{characterData:!0}),h=function(){p.data=v=!v}),fe=function(t){fn.head||h(),fn.add(t)}}c0=fe;var fi={};fi=function(t,r){try{// eslint-disable-next-line no-console -- safe
1==arguments.length?console.error(t):console.error(t,r)}catch(t){}};var fa={};fa=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}};var fu={};fu=k.Promise;var fs={},fc={},ff={};fc=!/* global Deno -- Deno case */(ff="object"==typeof Deno&&Deno&&"object"==typeof Deno.version)&&!cP&&"object"==typeof window&&"object"==typeof document;var fl=fu&&fu.prototype,fh=tL("species"),fv=!1,fp=ta(k.PromiseRejectionEvent);fs={CONSTRUCTOR:r1("Promise",function(){var t=rh(fu),r=t!==String(fu);// V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// We can't detect it synchronously, so just check versions
if(!r&&66===tg||tk&&!(fl.catch&&fl.finally))return!0;// We can't use @@species feature detection in V8 since it causes
// deoptimization and performance degradation
// https://github.com/zloirock/core-js/issues/679
if(!tg||tg<51||!/native code/.test(t)){// Detect correctness of subclassing with @@species support
var e=new fu(function(t){t(1)}),n=function(t){t(function(){},function(){})};if((e.constructor={})[fh]=n,!(fv=e.then(function(){}) instanceof n))return!0;// Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
}return!r&&(fc||ff)&&!fp}),REJECTION_EVENT:fp,SUBCLASSING:fv};var fd=TypeError,fg=function(t){var r,e;this.promise=new t(function(t,n){if(void 0!==r||void 0!==e)throw fd("Bad Promise constructor");r=t,e=n}),this.resolve=tO(r),this.reject=tO(e)};y=function(t){return new fg(t)};var fy="Promise",fb=fs.CONSTRUCTOR,fm=fs.REJECTION_EVENT,fw=fs.SUBCLASSING,fS=rp.getterFor(fy),fx=rp.set,fA=fu&&fu.prototype,fE=fu,fO=fA,fT=k.TypeError,fI=k.document,fR=k.process,fj=y,fP=fj,fL=!!(fI&&fI.createEvent&&k.dispatchEvent),fM="unhandledrejection",fk=function(t){var r;return!!(ti(t)&&ta(r=t.then))&&r},fC=function(t,r){var e,n,o,i=r.value,a=1===r.state,u=a?t.ok:t.fail,s=t.resolve,c=t.reject,f=t.domain;try{u?(a||(2===r.rejection&&fD(r),r.rejection=1),!0===u?e=i:(f&&f.enter(),e=u(i),f&&(f.exit(),o=!0)),e===t.promise?c(fT("Promise-chain cycle")):(n=fk(e))?U(n,e,s,c):s(e)):c(i)}catch(t){f&&!o&&f.exit(),c(t)}},fN=function(t,r){t.notified||(t.notified=!0,c0(function(){for(var e,n=t.reactions;e=n.get();)fC(e,t);t.notified=!1,r&&!t.rejection&&fU(t)}))},f_=function(t,r,e){var n,o;fL?((n=fI.createEvent("Event")).promise=r,n.reason=e,n.initEvent(t,!1,!0),k.dispatchEvent(n)):n={promise:r,reason:e},!fm&&(o=k["on"+t])?o(n):t===fM&&fi("Unhandled promise rejection",e)},fU=function(t){U(cZ,k,function(){var r,e=t.facade,n=t.value;if(fF(t)&&(r=fa(function(){cP?fR.emit("unhandledRejection",n,e):f_(fM,e,n)}),// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
t.rejection=cP||fF(t)?2:1,r.error))throw r.value})},fF=function(t){return 1!==t.rejection&&!t.parent},fD=function(t){U(cZ,k,function(){var r=t.facade;cP?fR.emit("rejectionHandled",r):f_("rejectionhandled",r,t.value)})},fz=function(t,r,e){return function(n){t(r,n,e)}},fB=function(t,r,e){t.done||(t.done=!0,e&&(t=e),t.value=r,t.state=2,fN(t,!0))},fq=function(t,r,e){if(!t.done){t.done=!0,e&&(t=e);try{if(t.facade===r)throw fT("Promise can't be resolved itself");var n=fk(r);n?c0(function(){var e={done:!1};try{U(n,r,fz(fq,e,t),fz(fB,e,t))}catch(r){fB(e,r,t)}}):(t.value=r,t.state=1,fN(t,!1))}catch(r){fB({done:!1},r,t)}}};// constructor polyfill
if(fb&&(fO=// 25.4.3.1 Promise(executor)
(fE=function(t){i$(this,fO),tO(t),U(b,this);var r=fS(this);try{t(fz(fq,r),fz(fB,r))}catch(t){fB(r,t)}}).prototype,// `Promise.prototype.then` method
// https://tc39.es/ecma262/#sec-promise.prototype.then
// eslint-disable-next-line no-unused-vars -- required for `.length`
(b=function(t){fx(this,{type:fy,done:!1,notified:!1,parent:!1,reactions:new c5,rejection:!1,state:0,value:void 0})}).prototype=ro(fO,"then",function(t,r){var e=fS(this),n=fj(cL(this,fE));return e.parent=!0,n.ok=!ta(t)||t,n.fail=ta(r)&&r,n.domain=cP?fR.domain:void 0,0===e.state?e.reactions.add(n):c0(function(){fC(n,e)}),n.promise}),m=function(){var t=new b,r=fS(t);this.promise=t,this.resolve=fz(fq,r),this.reject=fz(fB,r)},y=fj=function(t){return t===fE||t===w?new m(t):fP(t)},!tk&&ta(fu)&&fA!==Object.prototype)){S=fA.then,fw||ro(fA,"then",function(t,r){var e=this;return new fE(function(t,r){U(S,e,t,r)}).then(t,r);// https://github.com/zloirock/core-js/issues/640
},{unsafe:!0});// make `.constructor === Promise` work for native promise-based APIs
try{delete fA.constructor}catch(t){}oX&&oX(fA,fO)}M({global:!0,constructor:!0,wrap:!0,forced:fb},{Promise:fE}),eL(fE,fy,!1,!0),i_(fy);var fG={};fG=fs.CONSTRUCTOR||!oj(function(t){fu.all(t).then(void 0,function(){})}),// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
M({target:"Promise",stat:!0,forced:fG},{all:function(t){var r=this,e=y(r),n=e.resolve,o=e.reject,i=fa(function(){var e=tO(r.resolve),i=[],a=0,u=1;uh(t,function(t){var s=a++,c=!1;u++,U(e,r,t).then(function(t){!c&&(c=!0,i[s]=t,--u||n(i))},o)}),--u||n(i)});return i.error&&o(i.value),e.promise}});var fW=fs.CONSTRUCTOR,fH=fu&&fu.prototype;// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if(// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
M({target:"Promise",proto:!0,forced:fW,real:!0},{catch:function(t){return this.then(void 0,t)}}),!tk&&ta(fu)){var fV=th("Promise").prototype.catch;fH.catch!==fV&&ro(fH,"catch",fV,{unsafe:!0})}// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
M({target:"Promise",stat:!0,forced:fG},{race:function(t){var r=this,e=y(r),n=e.reject,o=fa(function(){var o=tO(r.resolve);uh(t,function(t){U(o,r,t).then(e.resolve,n)})});return o.error&&n(o.value),e.promise}});var f$=fs.CONSTRUCTOR;// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
M({target:"Promise",stat:!0,forced:f$},{reject:function(t){var r=y(this);return U(r.reject,void 0,t),r.promise}});var fY=fs.CONSTRUCTOR,fK={};fK=function(t,r){if(t6(t),ti(r)&&r.constructor===t)return r;var e=y(t);return(0,e.resolve)(r),e.promise};var fJ=th("Promise"),fX=tk&&!fY;// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
M({target:"Promise",stat:!0,forced:tk||fY},{resolve:function(t){return fK(fX&&this===fJ?fu:this,t)}});var fQ=fu&&fu.prototype,fZ=!!fu&&_(function(){// eslint-disable-next-line unicorn/no-thenable -- required for testing
fQ.finally.call({then:function(){}},function(){})});// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if(// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
M({target:"Promise",proto:!0,real:!0,forced:fZ},{finally:function(t){var r=cL(this,th("Promise")),e=ta(t);return this.then(e?function(e){return fK(r,t()).then(function(){return e})}:t,e?function(e){return fK(r,t()).then(function(){throw e})}:t)}}),!tk&&ta(fu)){var f0=th("Promise").prototype.finally;fQ.finally!==f0&&ro(fQ,"finally",f0,{unsafe:!0})}// MS Edge argumentsList argument is optional
var f1=!_(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.apply(function(){})});// `Reflect.apply` method
// https://tc39.es/ecma262/#sec-reflect.apply
M({target:"Reflect",stat:!0,forced:f1},{apply:function(t,r,e){return nx(tO(t),r,t6(e))}});var f2={},f5=Function,f4=H([].concat),f6=H([].join),f3={},f8=function(t,r,e){if(!tF(f3,r)){for(var n=[],o=0;o<r;o++)n[o]="a["+o+"]";f3[r]=f5("C,a","return new C("+f6(n,",")+")")}return f3[r](t,e)};// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
f2=F?f5.bind:function(t/* , ...args */){var r=tO(this),e=r.prototype,n=nT(arguments,1),o=function(){var e=f4(n,nT(arguments));return this instanceof o?f8(r,e.length,e):r.apply(t,e)};return ti(e)&&(o.prototype=e),o};var f7=th("Reflect","construct"),f9=Object.prototype,lt=[].push,lr=_(function(){function t(){}return!(f7(function(){},[],t) instanceof t)}),le=!_(function(){f7(function(){})}),ln=lr||le;M({target:"Reflect",stat:!0,forced:ln,sham:ln},{construct:function(t,r/* , newTarget */){cM(t),t6(r);var e=arguments.length<3?t:cM(arguments[2]);if(le&&!lr)return f7(t,r,e);if(t===e){// w/o altered newTarget, optimization for 0-4 arguments
switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}// w/o altered newTarget, lot of arguments case
var n=[null];return nx(lt,n,r),new(nx(f2,t,n))}// with altered newTarget, not support built-in constructors
var o=e.prototype,i=es(ti(o)?o:f9),a=nx(t,i,r);return ti(a)?a:i}});// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
var lo=_(function(){// eslint-disable-next-line es/no-reflect -- required for testing
Reflect.defineProperty(aM({},1,{value:1}),1,{value:2})});// `Reflect.defineProperty` method
// https://tc39.es/ecma262/#sec-reflect.defineproperty
M({target:"Reflect",stat:!0,forced:lo,sham:!N},{defineProperty:function(t,r,e){t6(t);var n=tn(r);t6(e);try{return aM(t,n,e),!0}catch(t){return!1}}});var li=aR;// `Reflect.deleteProperty` method
// https://tc39.es/ecma262/#sec-reflect.deleteproperty
M({target:"Reflect",stat:!0},{deleteProperty:function(t,r){var e=li(t6(t),r);return(!e||!!e.configurable)&&delete t[r]}});var la={};la=function(t){return void 0!==t&&(tF(t,"value")||tF(t,"writable"))},M({target:"Reflect",stat:!0},{get:// `Reflect.get` method
// https://tc39.es/ecma262/#sec-reflect.get
function t(r,e/* , receiver */){var n,o,i=arguments.length<3?r:arguments[2];return t6(r)===i?r[e]:(n=aR(r,e))?la(n)?n.value:void 0===n.get?void 0:U(n.get,i):ti(o=oq(r))?t(o,e,i):void 0}}),// `Reflect.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
M({target:"Reflect",stat:!0,sham:!N},{getOwnPropertyDescriptor:function(t,r){return aR(t6(t),r)}}),// `Reflect.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-reflect.getprototypeof
M({target:"Reflect",stat:!0,sham:!oG},{getPrototypeOf:function(t){return oq(t6(t))}}),// `Reflect.has` method
// https://tc39.es/ecma262/#sec-reflect.has
M({target:"Reflect",stat:!0},{has:function(t,r){return r in t}}),// `Reflect.isExtensible` method
// https://tc39.es/ecma262/#sec-reflect.isextensible
M({target:"Reflect",stat:!0},{isExtensible:function(t){return t6(t),un(t)}}),// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
M({target:"Reflect",stat:!0},{ownKeys:r_}),// `Reflect.preventExtensions` method
// https://tc39.es/ecma262/#sec-reflect.preventextensions
M({target:"Reflect",stat:!0,sham:!ua},{preventExtensions:function(t){t6(t);try{var r=th("Object","preventExtensions");return r&&r(t),!0}catch(t){return!1}}});// MS Edge 17-18 Reflect.set allows setting the property to object
// with non-writable property on the prototype
var lu=_(function(){var t=function(){},r=aM(new t,"a",{configurable:!0});// eslint-disable-next-line es/no-reflect -- required for testing
return!1!==Reflect.set(t.prototype,"a",1,r)});M({target:"Reflect",stat:!0,forced:lu},{set:// `Reflect.set` method
// https://tc39.es/ecma262/#sec-reflect.set
function t(r,e,n/* , receiver */){var o,i,a,u=arguments.length<4?r:arguments[3],s=aR(t6(r),e);if(!s){if(ti(i=oq(r)))return t(i,e,n,u);s=q(0)}if(la(s)){if(!1===s.writable||!ti(u))return!1;if(o=aR(u,e)){if(o.get||o.set||!1===o.writable)return!1;o.value=n,aM(u,e,o)}else aM(u,e,q(0,n))}else{if(void 0===(a=s.set))return!1;U(a,u,n)}return!0}}),oX&&M({target:"Reflect",stat:!0},{setPrototypeOf:function(t,r){t6(t),oZ(r);try{return oX(t,r),!0}catch(t){return!1}}});var ls=a_,lc={},lf=tL("match");// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
lc=function(t){var r;return ti(t)&&(void 0!==(r=t[lf])?!!r:"RegExp"===K(t))};var ll={},lh={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
lh=function(){var t=t6(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r};var lv=RegExp.prototype;ll=function(t){var r=t.flags;return void 0===r&&!("flags"in lv)&&!tF(t,"flags")&&tv(lv,t)?U(lh,t):r};var lp={},ld=k.RegExp,lg=_(function(){var t=ld("a","y");return t.lastIndex=2,null!==t.exec("abcd")}),ly=lg||_(function(){return!ld("a","y").sticky});lp={BROKEN_CARET:lg||_(function(){// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
var t=ld("^r","gy");return t.lastIndex=2,null!==t.exec("str")}),MISSED_STICKY:ly,UNSUPPORTED_Y:lg};var lb={},lm=aM;lb=function(t,r,e){e in t||lm(t,e,{configurable:!0,get:function(){return r[e]},set:function(t){r[e]=t}})};var lw=rp.enforce,lS={},lx=k.RegExp;lS=_(function(){var t=lx(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)});var lA={},lE=k.RegExp;lA=_(function(){var t=lE("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")});var lO=tL("match"),lT=k.RegExp,lI=lT.prototype,lR=k.SyntaxError,lj=H(lI.exec),lP=H("".charAt),lL=H("".replace),lM=H("".indexOf),lk=H("".slice),lC=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,lN=/a/g,l_=/a/g,lU=new lT(lN)!==lN,lF=lp.MISSED_STICKY,lD=lp.UNSUPPORTED_Y,lz=N&&(!lU||lF||lS||lA||_(function(){// RegExp constructor can alter flags and IsRegExp works correct with @@match
return l_[lO]=!1,lT(lN)!==lN||lT(l_)===l_||"/a/i"!==String(lT(lN,"i"))})),lB=function(t){for(var r,e=t.length,n=0,o="",i=!1;n<=e;n++){if("\\"===(r=lP(t,n))){o+=r+lP(t,++n);continue}i||"."!==r?("["===r?i=!0:"]"===r&&(i=!1),o+=r):o+="[\\s\\S]"}return o},lq=function(t){for(var r,e=t.length,n=0,o="",i=[],a={},u=!1,s=!1,c=0,f="";n<=e;n++){if("\\"===(r=lP(t,n)))r+=lP(t,++n);else if("]"===r)u=!1;else if(!u)switch(!0){case"["===r:u=!0;break;case"("===r:lj(lC,lk(t,n+1))&&(n+=2,s=!0),o+=r,c++;continue;case">"===r&&s:if(""===f||tF(a,f))throw new lR("Invalid capture group name");a[f]=!0,i[i.length]=[f,c],s=!1,f="";continue}s?f+=r:o+=r}return[o,i]};// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if(r1("RegExp",lz)){for(var lG=function(t,r){var e,n,o,i,a,u,s=tv(lI,this),c=lc(t),f=void 0===r,l=[],h=t;if(!s&&c&&f&&t.constructor===lG)return t;if((c||tv(lI,t))&&(t=t.source,f&&(r=ll(h))),t=void 0===t?"":r7(t),r=void 0===r?"":r7(r),h=t,lS&&("dotAll"in lN)&&(n=!!r&&lM(r,"s")>-1)&&(r=lL(r,/s/g,"")),e=r,lF&&("sticky"in lN)&&(o=!!r&&lM(r,"y")>-1)&&lD&&(r=lL(r,/y/g,"")),lA&&(t=(i=lq(t))[0],l=i[1]),a=ug(lT(t,r),s?this:lI,lG),(n||o||l.length)&&(u=lw(a),n&&(u.dotAll=!0,u.raw=lG(lB(t),e)),o&&(u.sticky=!0),l.length&&(u.groups=l)),t!==h)try{// fails in old engines, but we have no alternatives for unsupported regex syntax
t5(a,"source",""===h?"(?:)":h)}catch(t){}return a},lW=ls(lT),lH=0;lW.length>lH;)lb(lG,lT,lW[lH++]);lI.constructor=lG,lG.prototype=lI,ro(k,"RegExp",lG,{constructor:!0})}// https://tc39.es/ecma262/#sec-get-regexp-@@species
i_("RegExp");var lV={},l$=rp.get,lY=tM("native-string-replace",String.prototype.replace),lK=RegExp.prototype.exec,lJ=lK,lX=H("".charAt),lQ=H("".indexOf),lZ=H("".replace),l0=H("".slice),l1=(r=/b*/g,U(lK,t=/a/,"a"),U(lK,r,"a"),0!==t.lastIndex||0!==r.lastIndex),l2=lp.BROKEN_CARET,l5=void 0!==/()??/.exec("")[1];(l1||l5||l2||lS||lA)&&(lJ=function(t){var r,e,n,o,i,a,u,s=l$(this),c=r7(t),f=s.raw;if(f)return f.lastIndex=this.lastIndex,r=U(lJ,f,c),this.lastIndex=f.lastIndex,r;var l=s.groups,h=l2&&this.sticky,v=U(lh,this),p=this.source,d=0,g=c;if(h&&(-1===lQ(v=lZ(v,"y",""),"g")&&(v+="g"),g=l0(c,this.lastIndex),this.lastIndex>0&&(!this.multiline||this.multiline&&"\n"!==lX(c,this.lastIndex-1))&&(p="(?: "+p+")",g=" "+g,d++),// ^(? + rx + ) is needed, in combination with some str slicing, to
// simulate the 'y' flag.
e=RegExp("^(?:"+p+")",v)),l5&&(e=RegExp("^"+p+"$(?!\\s)",v)),l1&&(n=this.lastIndex),o=U(lK,h?e:this,g),h?o?(o.input=l0(o.input,d),o[0]=l0(o[0],d),o.index=this.lastIndex,this.lastIndex+=o[0].length):this.lastIndex=0:l1&&o&&(this.lastIndex=this.global?o.index+o[0].length:n),l5&&o&&o.length>1&&// for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
U(lY,o[0],e,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o&&l)for(i=0,o.groups=a=es(null);i<l.length;i++)a[(u=l[i])[0]]=o[u[1]];return o}),lV=lJ,// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
M({target:"RegExp",proto:!0,forced:/./.exec!==lV},{exec:lV});// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var l4=k.RegExp,l6=l4.prototype;N&&_(function(){var t=!0;try{l4(".","d")}catch(r){t=!1}var r={},e="",n=t?"dgimsy":"gimsy",o=function(t,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(r,t,{get:function(){return e+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(l6,"flags").get.call(r)!==n||e!==n})&&eT(l6,"flags",{configurable:!0,get:lh});var l3=ra.PROPER,l8="toString",l7=RegExp.prototype[l8],l9=_(function(){return"/a/b"!==l7.call({source:"a",flags:"b"})}),ht=l3&&l7.name!==l8;(l9||ht)&&ro(RegExp.prototype,l8,function(){var t=t6(this);return"/"+r7(t.source)+"/"+r7(ll(t))},{unsafe:!0}),// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
ut("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},uy);var hr={},he=H("".charAt),hn=H("".charCodeAt),ho=H("".slice),hi=function(t){return function(r,e){var n,o,i=r7(tt(r)),a=rz(e),u=i.length;return a<0||a>=u?t?"":void 0:(n=hn(i,a))<55296||n>56319||a+1===u||(o=hn(i,a+1))<56320||o>57343?t?he(i,a):n:t?ho(i,a,a+2):(n-55296<<10)+(o-56320)+65536}},ha=(hr={// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
codeAt:hi(!1),// `String.prototype.at` method
// https://github.com/mathiasbynens/String.prototype.at
charAt:hi(!0)}).codeAt;// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
M({target:"String",proto:!0},{codePointAt:function(t){return ha(this,t)}});var hu=aR,hs={},hc=TypeError;hs=function(t){if(lc(t))throw hc("The method doesn't accept regular expressions");return t};var hf={},hl=tL("match");hf=function(t){var r=/./;try{"/./"[t](r)}catch(e){try{return r[hl]=!1,"/./"[t](r)}catch(t){}}return!1};// eslint-disable-next-line es/no-string-prototype-endswith -- safe
var hh=e_("".endsWith),hv=e_("".slice),hp=Math.min,hd=hf("endsWith"),hg=!tk&&!hd&&!!((e=hu(String.prototype,"endsWith"))&&!e.writable);// `String.prototype.endsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.endswith
M({target:"String",proto:!0,forced:!hg&&!hd},{endsWith:function(t/* , endPosition = @length */){var r=r7(tt(this));hs(t);var e=arguments.length>1?arguments[1]:void 0,n=r.length,o=void 0===e?n:hp(r$(e),n),i=r7(t);return hh?hh(r,i,o):hv(r,o-i.length,o)===i}});var hy=RangeError,hb=String.fromCharCode,hm=String.fromCodePoint,hw=H([].join),hS=!!hm&&1!==hm.length;// `String.fromCodePoint` method
// https://tc39.es/ecma262/#sec-string.fromcodepoint
M({target:"String",stat:!0,arity:1,forced:hS},{// eslint-disable-next-line no-unused-vars -- required for `.length`
fromCodePoint:function(t){for(var r,e=[],n=arguments.length,o=0;n>o;){if(r=+arguments[o++],rD(r,1114111)!==r)throw hy(r+" is not a valid code point");e[o]=r<65536?hb(r):hb(((r-=65536)>>10)+55296,r%1024+56320)}return hw(e,"")}});var hx=H("".indexOf);// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
M({target:"String",proto:!0,forced:!hf("includes")},{includes:function(t/* , position = 0 */){return!!~hx(r7(tt(this)),r7(hs(t)),arguments.length>1?arguments[1]:void 0)}});var hA=hr.charAt,hE="String Iterator",hO=rp.set,hT=rp.getterFor(hE);// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
oD(String,"String",function(t){hO(this,{type:hE,string:r7(t),index:0});// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
},function(){var t,r=hT(this),e=r.string,n=r.index;return n>=e.length?ir(void 0,!0):(t=hA(e,n),r.index+=t.length,ir(t,!1))});var hI={},hR=tL("species"),hj=RegExp.prototype;hI=function(t,r,e,n){var o=tL(t),i=!_(function(){// String methods call symbol-named RegEp methods
var r={};return r[o]=function(){return 7},7!==""[t](r)}),a=i&&!_(function(){// Symbol-named RegExp methods call .exec
var r=!1,e=/a/;return"split"===t&&(// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
// We can't use real regex here since it causes deoptimization
// and serious performance degradation in V8
// https://github.com/zloirock/core-js/issues/306
(e={}).constructor={},e.constructor[hR]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return r=!0,null},e[o](""),!r});if(!i||!a||e){var u=e_(/./[o]),s=r(o,""[t],function(t,r,e,n,o){var a=e_(t),s=r.exec;return s===lV||s===hj.exec?i&&!o?{done:!0,value:u(r,e,n)}:{done:!0,value:a(e,r,n)}:{done:!1}});ro(String.prototype,t,s[0]),ro(hj,o,s[1])}n&&t5(hj[o],"sham",!0)};var hP={},hL=hr.charAt;// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
hP=function(t,r,e){return r+(e?hL(t,r).length:1)};var hM={},hk=TypeError;// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
hM=function(t,r){var e=t.exec;if(ta(e)){var n=U(e,t,r);return null!==n&&t6(n),n}if("RegExp"===K(t))return U(lV,t,r);throw hk("RegExp#exec called on incompatible receiver")},// @@match logic
hI("match",function(t,r,e){return[// `String.prototype.match` method
// https://tc39.es/ecma262/#sec-string.prototype.match
function(r){var e=tt(this),n=tr(r)?void 0:tE(r,t);return n?U(n,r,e):new RegExp(r)[t](r7(e))},// `RegExp.prototype[@@match]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@match
function(t){var n,o=t6(this),i=r7(t),a=e(r,o,i);if(a.done)return a.value;if(!o.global)return hM(o,i);var u=o.unicode;o.lastIndex=0;for(var s=[],c=0;null!==(n=hM(o,i));){var f=r7(n[0]);s[c]=f,""===f&&(o.lastIndex=hP(i,r$(o.lastIndex),u)),c++}return 0===c?null:s}]});var hC={},hN=H(sH),h_=H("".slice),hU=Math.ceil,hF=function(t){return function(r,e,n){var o,i,a=r7(tt(r)),u=r$(e),s=a.length,c=void 0===n?" ":r7(n);return u<=s||""===c?a:((i=hN(c,hU((o=u-s)/c.length))).length>o&&(i=h_(i,0,o)),t?a+i:i+a)}},hD=(hC={// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
start:hF(!1),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
end:hF(!0)}).end,hz={};hz=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(ty),// `String.prototype.padEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.padend
M({target:"String",proto:!0,forced:hz},{padEnd:function(t/* , fillString = ' ' */){return hD(this,t,arguments.length>1?arguments[1]:void 0)}});var hB=hC.start;// `String.prototype.padStart` method
// https://tc39.es/ecma262/#sec-string.prototype.padstart
M({target:"String",proto:!0,forced:hz},{padStart:function(t/* , fillString = ' ' */){return hB(this,t,arguments.length>1?arguments[1]:void 0)}});var hq=H([].push),hG=H([].join);// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
M({target:"String",stat:!0},{raw:function(t){var r=G(tD(t).raw),e=rV(r);if(!e)return"";for(var n=arguments.length,o=[],i=0;;){if(hq(o,r7(r[i++])),i===e)return hG(o,"");i<n&&hq(o,r7(arguments[i]))}}}),// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
M({target:"String",proto:!0},{repeat:sH});var hW={},hH=Math.floor,hV=H("".charAt),h$=H("".replace),hY=H("".slice),hK=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,hJ=/\$([$&'`]|\d{1,2})/g;// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
hW=function(t,r,e,n,o,i){var a=e+t.length,u=n.length,s=hJ;return void 0!==o&&(o=tD(o),s=hK),h$(i,s,function(i,s){var c;switch(hV(s,0)){case"$":return"$";case"&":return t;case"`":return hY(r,0,e);case"'":return hY(r,a);case"<":c=o[hY(s,1,-1)];break;default:var f=+s;if(0===f)return i;if(f>u){var l=hH(f/10);if(0===l)return i;if(l<=u)return void 0===n[l-1]?hV(s,1):n[l-1]+hV(s,1);return i}c=n[f-1]}return void 0===c?"":c})};var hX=tL("replace"),hQ=Math.max,hZ=Math.min,h0=H([].concat),h1=H([].push),h2=H("".indexOf),h5=H("".slice),h4="$0"==="a".replace(/./,"$0"),h6=!!/./[hX]&&""===/./[hX]("a","$0");// @@replace logic
hI("replace",function(t,r,e){var n=h6?"$":"$0";return[// `String.prototype.replace` method
// https://tc39.es/ecma262/#sec-string.prototype.replace
function(t,e){var n=tt(this),o=tr(t)?void 0:tE(t,hX);return o?U(o,t,n,e):U(r,r7(n),t,e)},// `RegExp.prototype[@@replace]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
function(t,o){var i=t6(this),a=r7(t);if("string"==typeof o&&-1===h2(o,n)&&-1===h2(o,"$<")){var u=e(r,i,a,o);if(u.done)return u.value}var s=ta(o);s||(o=r7(o));var c=i.global;c&&(d=i.unicode,i.lastIndex=0);for(var f=[];null!==(g=hM(i,a))&&(h1(f,g),c);)""===r7(g[0])&&(i.lastIndex=hP(a,r$(i.lastIndex),d));for(var l="",h=0,v=0;v<f.length;v++){g=f[v];// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var p,d,g,y,b=r7(g[0]),m=hQ(hZ(rz(g.index),a.length),0),w=[],S=1;S<g.length;S++)h1(w,void 0===(p=g[S])?p:String(p));var x=g.groups;if(s){var A=h0([b],w,m,a);void 0!==x&&h1(A,x),y=r7(nx(o,void 0,A))}else y=hW(b,a,m,w,x,o);m>=h&&(l+=h5(a,h,m)+y,h=m+b.length)}return l+h5(a,h)}]},!!_(function(){var t=/./;// eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})||!h4||h6),// @@search logic
hI("search",function(t,r,e){return[// `String.prototype.search` method
// https://tc39.es/ecma262/#sec-string.prototype.search
function(r){var e=tt(this),n=tr(r)?void 0:tE(r,t);return n?U(n,r,e):new RegExp(r)[t](r7(e))},// `RegExp.prototype[@@search]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@search
function(t){var n=t6(this),o=r7(t),i=e(r,n,o);if(i.done)return i.value;var a=n.lastIndex;cp(a,0)||(n.lastIndex=0);var u=hM(n,o);return cp(n.lastIndex,a)||(n.lastIndex=a),null===u?-1:u.index}]});var h3=lp.UNSUPPORTED_Y,h8=Math.min,h7=[].push,h9=H(/./.exec),vt=H(h7),vr=H("".slice);// @@split logic
hI("split",function(t,r,e){var n;return n="c"==="abbc".split(/(b)*/)[1]||// eslint-disable-next-line regexp/no-empty-group -- required for testing
4!=="test".split(/(?:)/,-1).length||2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||// eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n,o,i,a=r7(tt(this)),u=void 0===e?4294967295:e>>>0;if(0===u)return[];if(void 0===t)return[a];// If `separator` is not a regex, use native split
if(!lc(t))return U(r,a,t,u);for(var s=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,l=RegExp(t.source,c+"g");(n=U(lV,l,a))&&(!((o=l.lastIndex)>f)||(vt(s,vr(a,f,n.index)),n.length>1&&n.index<a.length&&nx(h7,s,ew(n,1)),i=n[0].length,f=o,!(s.length>=u)));)l.lastIndex===n.index&&l.lastIndex++;// Avoid an infinite loop
return f===a.length?(i||!h9(l,""))&&vt(s,""):vt(s,vr(a,f)),s.length>u?ew(s,0,u):s}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:U(r,this,t,e)}:r,[// `String.prototype.split` method
// https://tc39.es/ecma262/#sec-string.prototype.split
function(r,e){var o=tt(this),i=tr(r)?void 0:tE(r,t);return i?U(i,r,o,e):U(n,r7(o),r,e)},// `RegExp.prototype[@@split]` method
// https://tc39.es/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(t,o){var i=t6(this),a=r7(t),u=e(n,i,a,o,n!==r);if(u.done)return u.value;var s=cL(i,RegExp),c=i.unicode,f=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(h3?"g":"y"),l=new s(h3?"^(?:"+i.source+")":i,f),h=void 0===o?4294967295:o>>>0;if(0===h)return[];if(0===a.length)return null===hM(l,a)?[a]:[];for(var v=0,p=0,d=[];p<a.length;){l.lastIndex=h3?0:p;var g,y=hM(l,h3?vr(a,p):a);if(null===y||(g=h8(r$(l.lastIndex+(h3?p:0)),a.length))===v)p=hP(a,p,c);else{if(vt(d,vr(a,v,p)),d.length===h)return d;for(var b=1;b<=y.length-1;b++)if(vt(d,y[b]),d.length===h)return d;p=v=g}}return vt(d,vr(a,v)),d}]},!!_(function(){// eslint-disable-next-line regexp/no-empty-group -- required for testing
var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}),h3);var ve=aR,vn=e_("".startsWith),vo=e_("".slice),vi=Math.min,va=hf("startsWith"),vu=!tk&&!va&&!!((n=ve(String.prototype,"startsWith"))&&!n.writable);// `String.prototype.startsWith` method
// https://tc39.es/ecma262/#sec-string.prototype.startswith
M({target:"String",proto:!0,forced:!vu&&!va},{startsWith:function(t/* , position = 0 */){var r=r7(tt(this));hs(t);var e=r$(vi(arguments.length>1?arguments[1]:void 0,r.length)),n=r7(t);return vn?vn(r,n,e):vo(r,e,e+n.length)===n}});var vs=ss.trim,vc={},vf=ra.PROPER,vl="​\x85᠎";// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
M({target:"String",proto:!0,forced:// check that a method works with the correct list
// of whitespaces and has a correct name
(vc=function(t){return _(function(){return!!sc[t]()||vl[t]()!==vl||vf&&sc[t].name!==t})})("trim")},{trim:function(){return vs(this)}});var vh={},vv=ss.end;// `String.prototype.{ trimEnd, trimRight }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// https://tc39.es/ecma262/#String.prototype.trimright
vh=vc("trimEnd")?function(){return vv(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimEnd,// `String.prototype.trimRight` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
M({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==vh},{trimRight:vh}),// `String.prototype.trimEnd` method
// https://tc39.es/ecma262/#sec-string.prototype.trimend
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
M({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==vh},{trimEnd:vh});var vp={},vd=ss.start;// `String.prototype.{ trimStart, trimLeft }` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
vp=vc("trimStart")?function(){return vd(this);// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
}:"".trimStart,// `String.prototype.trimLeft` method
// https://tc39.es/ecma262/#sec-string.prototype.trimleft
// eslint-disable-next-line es/no-string-prototype-trimleft-trimright -- safe
M({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==vp},{trimLeft:vp}),// `String.prototype.trimStart` method
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
M({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==vp},{trimStart:vp});var vg={},vy=/"/g,vb=H("".replace);// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
vg=function(t,r,e,n){var o=r7(tt(t)),i="<"+r;return""!==e&&(i+=" "+e+'="'+vb(r7(n),vy,"&quot;")+'"'),i+">"+o+"</"+r+">"};var vm={};// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
M({target:"String",proto:!0,forced:// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
(vm=function(t){return _(function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3})})("anchor")},{anchor:function(t){return vg(this,"a","name",t)}}),// `String.prototype.big` method
// https://tc39.es/ecma262/#sec-string.prototype.big
M({target:"String",proto:!0,forced:vm("big")},{big:function(){return vg(this,"big","","")}}),// `String.prototype.blink` method
// https://tc39.es/ecma262/#sec-string.prototype.blink
M({target:"String",proto:!0,forced:vm("blink")},{blink:function(){return vg(this,"blink","","")}}),// `String.prototype.bold` method
// https://tc39.es/ecma262/#sec-string.prototype.bold
M({target:"String",proto:!0,forced:vm("bold")},{bold:function(){return vg(this,"b","","")}}),// `String.prototype.fixed` method
// https://tc39.es/ecma262/#sec-string.prototype.fixed
M({target:"String",proto:!0,forced:vm("fixed")},{fixed:function(){return vg(this,"tt","","")}}),// `String.prototype.fontcolor` method
// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
M({target:"String",proto:!0,forced:vm("fontcolor")},{fontcolor:function(t){return vg(this,"font","color",t)}}),// `String.prototype.fontsize` method
// https://tc39.es/ecma262/#sec-string.prototype.fontsize
M({target:"String",proto:!0,forced:vm("fontsize")},{fontsize:function(t){return vg(this,"font","size",t)}}),// `String.prototype.italics` method
// https://tc39.es/ecma262/#sec-string.prototype.italics
M({target:"String",proto:!0,forced:vm("italics")},{italics:function(){return vg(this,"i","","")}}),// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
M({target:"String",proto:!0,forced:vm("link")},{link:function(t){return vg(this,"a","href",t)}}),// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
M({target:"String",proto:!0,forced:vm("small")},{small:function(){return vg(this,"small","","")}}),// `String.prototype.strike` method
// https://tc39.es/ecma262/#sec-string.prototype.strike
M({target:"String",proto:!0,forced:vm("strike")},{strike:function(){return vg(this,"strike","","")}}),// `String.prototype.sub` method
// https://tc39.es/ecma262/#sec-string.prototype.sub
M({target:"String",proto:!0,forced:vm("sub")},{sub:function(){return vg(this,"sub","","")}}),// `String.prototype.sup` method
// https://tc39.es/ecma262/#sec-string.prototype.sup
M({target:"String",proto:!0,forced:vm("sup")},{sup:function(){return vg(this,"sup","","")}});var vw={},vS={},vx={},vA=rp.enforce,vE=rp.get,vO=k.Int8Array,vT=vO&&vO.prototype,vI=k.Uint8ClampedArray,vR=vI&&vI.prototype,vj=vO&&oq(vO),vP=vT&&oq(vT),vL=Object.prototype,vM=k.TypeError,vk=tL("toStringTag"),vC=tq("TYPED_ARRAY_TAG"),vN="TypedArrayConstructor",v_=iH&&!!oX&&"Opera"!==r9(k.opera),vU=!1,vF={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},vD={BigInt64Array:8,BigUint64Array:8},vz=function(t){var r=oq(t);if(ti(r)){var e=vE(r);return e&&tF(e,vN)?e[vN]:vz(r)}},vB=function(t){if(!ti(t))return!1;var r=r9(t);return tF(vF,r)||tF(vD,r)};for(x in vF)(E=(A=k[x])&&A.prototype)?vA(E)[vN]=A:v_=!1;for(x in vD)(E=(A=k[x])&&A.prototype)&&(vA(E)[vN]=A);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!v_||!ta(vj)||vj===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
vj=function(){throw vM("Incorrect invocation")},v_))for(x in vF)k[x]&&oX(k[x],vj);if((!v_||!vP||vP===vL)&&(vP=vj.prototype,v_))for(x in vF)k[x]&&oX(k[x].prototype,vP);if(v_&&oq(vR)!==vP&&oX(vR,vP),N&&!tF(vP,vk))for(x in vU=!0,eT(vP,vk,{configurable:!0,get:function(){return ti(this)?this[vC]:void 0}}),vF)k[x]&&t5(k[x],vC,x);var vq=(vx={NATIVE_ARRAY_BUFFER_VIEWS:v_,TYPED_ARRAY_TAG:vU&&vC,aTypedArray:function(t){if(vB(t))return t;throw vM("Target is not a typed array")},aTypedArrayConstructor:function(t){if(ta(t)&&(!oX||tv(vj,t)))return t;throw vM(tT(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e,n){if(N){if(e)for(var o in vF){var i=k[o];if(i&&tF(i.prototype,t))try{delete i.prototype[t]}catch(e){// old WebKit bug - some methods are non-configurable
try{i.prototype[t]=r}catch(t){}}}(!vP[t]||e)&&ro(vP,t,e?r:v_&&vT[t]||r,n)}},exportTypedArrayStaticMethod:function(t,r,e){var n,o;if(N){if(oX){if(e){for(n in vF)if((o=k[n])&&tF(o,t))try{delete o[t]}catch(t){}}if(vj[t]&&!e)return;try{return ro(vj,t,e?r:v_&&vj[t]||r)}catch(t){}}for(n in vF)(o=k[n])&&(!o[t]||e)&&ro(o,t,r)}},getTypedArrayConstructor:vz,isView:function(t){if(!ti(t))return!1;var r=r9(t);return"DataView"===r||tF(vF,r)||tF(vD,r)},isTypedArray:vB,TypedArray:vj,TypedArrayPrototype:vP}).NATIVE_ARRAY_BUFFER_VIEWS,vG=k.ArrayBuffer,vW=k.Int8Array;vS=!vq||!_(function(){vW(1)})||!_(function(){new vW(-1)})||!oj(function(t){new vW,new vW(null),new vW(1.5),new vW(t)},!0)||_(function(){// Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
return 1!==new vW(new vG(2),1,void 0).length});var vH={},vV={},v$=RangeError;vV=function(t){var r=rz(t);if(r<0)throw v$("The argument can't be less than 0");return r};var vY=RangeError;vH=function(t,r){var e=vV(t);if(e%r)throw vY("Wrong offset");return e};var vK={},vJ=Math.round;vK=function(t){var r=vJ(t);return r<0?0:r>255?255:255&r};var vX=a_,vQ={},vZ={};vZ=function(t){var r=r9(t);return"BigInt64Array"===r||"BigUint64Array"===r};var v0=vx.aTypedArrayConstructor,v1={},v2=TypeError;// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
v1=function(t){var r=to(t,"number");if("number"==typeof r)throw v2("Can't convert number to bigint");// eslint-disable-next-line es/no-bigint -- safe
return BigInt(r)},vQ=function(t/* , mapfn, thisArg */){var r,e,n,o,i,a,u,s,c=cM(this),f=tD(t),l=arguments.length,h=l>1?arguments[1]:void 0,v=void 0!==h,p=oO(f);if(p&&!ow(p))for(s=(u=oE(f,p)).next,f=[];!(a=U(s,u)).done;)f.push(a.value);for(v&&l>2&&(h=eN(h,arguments[2])),e=rV(f),n=new(v0(c))(e),o=vZ(n),r=0;e>r;r++)i=v?h(f[r],r):f[r],// FF30- typed arrays doesn't properly convert objects to typed array values
n[r]=o?v1(i):+i;return n};var v5=eC.forEach,v4=rp.get,v6=rp.set,v3=rp.enforce,v8=aM,v7=aR,v9=k.RangeError,pt=iW.ArrayBuffer,pr=pt.prototype,pe=iW.DataView,pn=vx.NATIVE_ARRAY_BUFFER_VIEWS,po=vx.TYPED_ARRAY_TAG,pi=vx.TypedArray,pa=vx.TypedArrayPrototype,pu=vx.aTypedArrayConstructor,ps=vx.isTypedArray,pc="BYTES_PER_ELEMENT",pf="Wrong length",pl=function(t,r){pu(t);for(var e=0,n=r.length,o=new t(n);n>e;)o[e]=r[e++];return o},ph=function(t,r){eT(t,r,{configurable:!0,get:function(){return v4(this)[r]}})},pv=function(t){var r;return tv(pr,t)||"ArrayBuffer"===(r=r9(t))||"SharedArrayBuffer"===r},pp=function(t,r){return ps(t)&&!tl(r)&&r in t&&sj(+r)&&r>=0},pd=function(t,r){return pp(t,r=tn(r))?q(2,t[r]):v7(t,r)},pg=function(t,r,e){return pp(t,r=tn(r))&&ti(e)&&tF(e,"value")&&!tF(e,"get")&&!tF(e,"set")&&!e.configurable&&(!tF(e,"writable")||e.writable)&&(!tF(e,"enumerable")||e.enumerable)?(t[r]=e.value,t):v8(t,r,e)};N?(pn||(aR=pd,aM=pg,ph(pa,"buffer"),ph(pa,"byteOffset"),ph(pa,"byteLength"),ph(pa,"length")),M({target:"Object",stat:!0,forced:!pn},{getOwnPropertyDescriptor:pd,defineProperty:pg}),vw=function(t,r,e){var n=t.match(/\d+/)[0]/8,o=t+(e?"Clamped":"")+"Array",i="get"+t,a="set"+t,u=k[o],s=u,c=s&&s.prototype,f={},l=function(t,r){var e=v4(t);return e.view[i](r*n+e.byteOffset,!0)},h=function(t,r,o){var i=v4(t);i.view[a](r*n+i.byteOffset,e?vK(o):o,!0)},v=function(t,r){v8(t,r,{get:function(){return l(this,r)},set:function(t){return h(this,r,t)},enumerable:!0})};pn?vS&&(s=r(function(t,r,e,o){return i$(t,c),ug(ti(r)?pv(r)?void 0!==o?new u(r,vH(e,n),o):void 0!==e?new u(r,vH(e,n)):new u(r):ps(r)?pl(s,r):U(vQ,s,r):new u(iK(r)),t,s)}),oX&&oX(s,pi),v5(vX(u),function(t){t in s||t5(s,t,u[t])}),s.prototype=c):(s=r(function(t,r,e,o){i$(t,c);var i,a,u,f=0,l=0;if(ti(r)){if(pv(r)){i=r,l=vH(e,n);var h=r.byteLength;if(void 0===o){if(h%n||(a=h-l)<0)throw v9(pf)}else if((a=r$(o)*n)+l>h)throw v9(pf);u=a/n}else if(ps(r))return pl(s,r);else return U(vQ,s,r)}else a=(u=iK(r))*n,i=new pt(a);for(v6(t,{buffer:i,byteOffset:l,byteLength:a,length:u,view:new pe(i)});f<u;)v(t,f++)}),oX&&oX(s,pi),c=s.prototype=es(pa)),c.constructor!==s&&t5(c,"constructor",s),v3(c).TypedArrayConstructor=s,po&&t5(c,po,o);var p=s!==u;f[o]=s,M({global:!0,constructor:!0,forced:p,sham:!pn},f),pc in s||t5(s,pc,n),pc in c||t5(c,pc,n),i_(o)}):vw=function(){},// `Float32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Float32",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Float64Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Float64",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Int8",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Int16",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Int32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Int32",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint8Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Uint8",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint8ClampedArray` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Uint8",function(t){return function(r,e,n){return t(this,r,e,n)}},!0),// `Uint16Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Uint16",function(t){return function(r,e,n){return t(this,r,e,n)}}),// `Uint32Array` constructor
// https://tc39.es/ecma262/#sec-typedarray-objects
vw("Uint32",function(t){return function(r,e,n){return t(this,r,e,n)}});var py=H(n7),pb=vx.aTypedArray;// `%TypedArray%.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
(0,vx.exportTypedArrayMethod)("copyWithin",function(t,r/* , end */){return py(pb(this),t,r,arguments.length>2?arguments[2]:void 0)});var pm=eC.every,pw=vx.aTypedArray;// `%TypedArray%.prototype.every` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
(0,vx.exportTypedArrayMethod)("every",function(t/* , thisArg */){return pm(pw(this),t,arguments.length>1?arguments[1]:void 0)});var pS=vx.aTypedArray,px=vx.exportTypedArrayMethod,pA=H("".slice);// `%TypedArray%.prototype.fill` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
px("fill",function(t/* , start, end */){var r=arguments.length;pS(this);var e="Big"===pA(r9(this),0,3)?v1(t):+t;return U(oa,this,e,r>1?arguments[1]:void 0,r>2?arguments[2]:void 0)},_(function(){var t=0;return(// eslint-disable-next-line es/no-typed-arrays -- safe
new Int8Array(2).fill({valueOf:function(){return t++}}),1!==t)}));var pE=eC.filter,pO={},pT={};pT=function(t,r){for(var e=0,n=rV(r),o=new t(n);n>e;)o[e]=r[e++];return o};var pI={},pR=vx.aTypedArrayConstructor,pj=vx.getTypedArrayConstructor;// a part of `TypedArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#typedarray-species-create
pI=function(t){return pR(cL(t,pj(t)))},pO=function(t,r){return pT(pI(t),r)};var pP=vx.aTypedArray;// `%TypedArray%.prototype.filter` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
(0,vx.exportTypedArrayMethod)("filter",function(t/* , thisArg */){var r=pE(pP(this),t,arguments.length>1?arguments[1]:void 0);return pO(this,r)});var pL=eC.find,pM=vx.aTypedArray;// `%TypedArray%.prototype.find` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
(0,vx.exportTypedArrayMethod)("find",function(t/* , thisArg */){return pL(pM(this),t,arguments.length>1?arguments[1]:void 0)});var pk=eC.findIndex,pC=vx.aTypedArray;// `%TypedArray%.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
(0,vx.exportTypedArrayMethod)("findIndex",function(t/* , thisArg */){return pk(pC(this),t,arguments.length>1?arguments[1]:void 0)});var pN=eC.forEach,p_=vx.aTypedArray;// `%TypedArray%.prototype.forEach` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
(0,vx.exportTypedArrayMethod)("forEach",function(t/* , thisArg */){pN(p_(this),t,arguments.length>1?arguments[1]:void 0)}),// `%TypedArray%.from` method
// https://tc39.es/ecma262/#sec-%typedarray%.from
(0,vx.exportTypedArrayStaticMethod)("from",vQ,vS);var pU=rF.includes,pF=vx.aTypedArray;// `%TypedArray%.prototype.includes` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
(0,vx.exportTypedArrayMethod)("includes",function(t/* , fromIndex */){return pU(pF(this),t,arguments.length>1?arguments[1]:void 0)});var pD=rF.indexOf,pz=vx.aTypedArray;// `%TypedArray%.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
(0,vx.exportTypedArrayMethod)("indexOf",function(t/* , fromIndex */){return pD(pz(this),t,arguments.length>1?arguments[1]:void 0)});var pB=tL("iterator"),pq=k.Uint8Array,pG=H(oU.values),pW=H(oU.keys),pH=H(oU.entries),pV=vx.aTypedArray,p$=vx.exportTypedArrayMethod,pY=pq&&pq.prototype,pK=!_(function(){pY[pB].call([1])}),pJ=!!pY&&pY.values&&pY[pB]===pY.values&&"values"===pY.values.name,pX=function(){return pG(pV(this))};// `%TypedArray%.prototype.entries` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
p$("entries",function(){return pH(pV(this))},pK),// `%TypedArray%.prototype.keys` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
p$("keys",function(){return pW(pV(this))},pK),// `%TypedArray%.prototype.values` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
p$("values",pX,pK||!pJ,{name:"values"}),// `%TypedArray%.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
p$(pB,pX,pK||!pJ,{name:"values"});var pQ=vx.aTypedArray,pZ=vx.exportTypedArrayMethod,p0=H([].join);// `%TypedArray%.prototype.join` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
pZ("join",function(t){return p0(pQ(this),t)});var p1={},p2=Math.min,p5=[].lastIndexOf,p4=!!p5&&1/[1].lastIndexOf(1,-0)<0,p6=iu("lastIndexOf");// `Array.prototype.lastIndexOf` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
p1=p4||!p6?function(t/* , fromIndex = @[*-1] */){// convert -0 to +0
if(p4)return nx(p5,this,arguments)||0;var r=G(this),e=rV(r),n=e-1;for(arguments.length>1&&(n=p2(n,rz(arguments[1]))),n<0&&(n=e+n);n>=0;n--)if(n in r&&r[n]===t)return n||0;return -1}:p5;var p3=vx.aTypedArray;// `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
(0,vx.exportTypedArrayMethod)("lastIndexOf",function(t/* , fromIndex */){var r=arguments.length;return nx(p1,p3(this),r>1?[t,arguments[1]]:[t])});var p8=eC.map,p7=vx.aTypedArray;// `%TypedArray%.prototype.map` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
(0,vx.exportTypedArrayMethod)("map",function(t/* , thisArg */){return p8(p7(this),t,arguments.length>1?arguments[1]:void 0,function(t,r){return new(pI(t))(r)})});var p9=vx.aTypedArrayConstructor;// `%TypedArray%.of` method
// https://tc39.es/ecma262/#sec-%typedarray%.of
(0,vx.exportTypedArrayStaticMethod)("of",function(){for(var t=0,r=arguments.length,e=new(p9(this))(r);r>t;)e[t]=arguments[t++];return e},vS);var dt={},dr=TypeError,de=function(t){return function(r,e,n,o){tO(e);var i=tD(r),a=W(i),u=rV(i),s=t?u-1:0,c=t?-1:1;if(n<2)for(;;){if(s in a){o=a[s],s+=c;break}if(s+=c,t?s<0:u<=s)throw dr("Reduce of empty array with no initial value")}for(;t?s>=0:u>s;s+=c)s in a&&(o=e(o,a[s],s,i));return o}},dn=(dt={// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
left:de(!1),// `Array.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-array.prototype.reduceright
right:de(!0)}).left,di=vx.aTypedArray;// `%TypedArray%.prototype.reduce` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
(0,vx.exportTypedArrayMethod)("reduce",function(t/* , initialValue */){var r=arguments.length;return dn(di(this),t,r,r>1?arguments[1]:void 0)});var da=dt.right,du=vx.aTypedArray;// `%TypedArray%.prototype.reduceRight` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
(0,vx.exportTypedArrayMethod)("reduceRight",function(t/* , initialValue */){var r=arguments.length;return da(du(this),t,r,r>1?arguments[1]:void 0)});var ds=vx.aTypedArray,dc=vx.exportTypedArrayMethod,df=Math.floor;// `%TypedArray%.prototype.reverse` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
dc("reverse",function(){for(var t,r=ds(this).length,e=df(r/2),n=0;n<e;)t=this[n],this[n++]=this[--r],this[r]=t;return this});var dl=k.RangeError,dh=k.Int8Array,dv=dh&&dh.prototype,dp=dv&&dv.set,dd=vx.aTypedArray,dg=vx.exportTypedArrayMethod,dy=!_(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var t=new Uint8ClampedArray(2);return U(dp,t,{length:1,0:3},1),3!==t[1]}),db=dy&&vx.NATIVE_ARRAY_BUFFER_VIEWS&&_(function(){var t=new dh(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
dg("set",function(t/* , offset */){dd(this);var r=vH(arguments.length>1?arguments[1]:void 0,1),e=tD(t);if(dy)return U(dp,this,e,r);var n=this.length,o=rV(e),i=0;if(o+r>n)throw dl("Wrong length");for(;i<o;)this[r+i]=e[i++]},!dy||db);var dm=vx.aTypedArray;// `%TypedArray%.prototype.slice` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
(0,vx.exportTypedArrayMethod)("slice",function(t,r){for(var e=nT(dm(this),t,r),n=pI(this),o=0,i=e.length,a=new n(i);i>o;)a[o]=e[o++];return a},_(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
new Int8Array(1).slice()}));var dw=eC.some,dS=vx.aTypedArray;// `%TypedArray%.prototype.some` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
(0,vx.exportTypedArrayMethod)("some",function(t/* , thisArg */){return dw(dS(this),t,arguments.length>1?arguments[1]:void 0)});var dx=vx.aTypedArray,dA=vx.exportTypedArrayMethod,dE=k.Uint16Array,dO=dE&&e_(dE.prototype.sort),dT=!!dO&&!(_(function(){dO(new dE(2),null)})&&_(function(){dO(new dE(2),{})})),dI=!!dO&&!_(function(){// feature detection can be too slow, so check engines versions
if(tg)return tg<74;if(iE)return iE<67;if(iT)return!0;if(iI)return iI<602;var t,r,e=new dE(516),n=Array(516);for(t=0;t<516;t++)r=t%4,e[t]=515-t,n[t]=t-2*r+3;for(dO(e,function(t,r){return(t/4|0)-(r/4|0)}),t=0;t<516;t++)if(e[t]!==n[t])return!0});// `%TypedArray%.prototype.sort` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
dA("sort",function(t){return(void 0!==t&&tO(t),dI)?dO(this,t):im(dx(this),function(r,e){return void 0!==t?+t(r,e)||0:e!=e?-1:r!=r?1:0===r&&0===e?1/r>0&&1/e<0?1:-1:r>e})},!dI||dT);var dR=vx.aTypedArray;// `%TypedArray%.prototype.subarray` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
(0,vx.exportTypedArrayMethod)("subarray",function(t,r){var e=dR(this),n=e.length,o=rD(t,n);return new(pI(e))(e.buffer,e.byteOffset+o*e.BYTES_PER_ELEMENT,r$((void 0===r?n:rD(r,n))-o))});var dj=k.Int8Array,dP=vx.aTypedArray,dL=vx.exportTypedArrayMethod,dM=[].toLocaleString,dk=!!dj&&_(function(){dM.call(new dj(1))});// `%TypedArray%.prototype.toLocaleString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
dL("toLocaleString",function(){return nx(dM,dk?nT(dP(this)):dP(this),nT(arguments))},_(function(){return[1,2].toLocaleString()!==new dj([1,2]).toLocaleString()})||!_(function(){dj.prototype.toLocaleString.call([1,2])}));var dC=vx.exportTypedArrayMethod,dN=k.Uint8Array,d_=dN&&dN.prototype||{},dU=[].toString,dF=H([].join);_(function(){dU.call({})})&&(dU=function(){return dF(this)});var dD=d_.toString!==dU;// `%TypedArray%.prototype.toString` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
dC("toString",dU,dD);var dz={},dB=ur.getWeakData,dq=rp.set,dG=rp.getterFor,dW=eC.find,dH=eC.findIndex,dV=H([].splice),d$=0,dY=function(t){return t.frozen||(t.frozen=new dK)},dK=function(){this.entries=[]},dJ=function(t,r){return dW(t.entries,function(t){return t[0]===r})};dK.prototype={get:function(t){var r=dJ(this,t);if(r)return r[1]},has:function(t){return!!dJ(this,t)},set:function(t,r){var e=dJ(this,t);e?e[1]=r:this.entries.push([t,r])},delete:function(t){var r=dH(this.entries,function(r){return r[0]===t});return~r&&dV(this.entries,r,1),!!~r}},dz={getConstructor:function(t,r,e,n){var o=t(function(t,o){i$(t,i),dq(t,{type:r,id:d$++,frozen:void 0}),tr(o)||uh(o,t[n],{that:t,AS_ENTRIES:e})}),i=o.prototype,a=dG(r),u=function(t,r,e){var n=a(t),o=dB(t6(r),!0);return!0===o?dY(n).set(r,e):o[n.id]=e,t};return iV(i,{// `{ WeakMap, WeakSet }.prototype.delete(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.delete
// https://tc39.es/ecma262/#sec-weakset.prototype.delete
delete:function(t){var r=a(this);if(!ti(t))return!1;var e=dB(t);return!0===e?dY(r).delete(t):e&&tF(e,r.id)&&delete e[r.id]},// `{ WeakMap, WeakSet }.prototype.has(key)` methods
// https://tc39.es/ecma262/#sec-weakmap.prototype.has
// https://tc39.es/ecma262/#sec-weakset.prototype.has
has:function(t){var r=a(this);if(!ti(t))return!1;var e=dB(t);return!0===e?dY(r).has(t):e&&tF(e,r.id)}}),iV(i,e?{// `WeakMap.prototype.get(key)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.get
get:function(t){var r=a(this);if(ti(t)){var e=dB(t);return!0===e?dY(r).get(t):e?e[r.id]:void 0}},// `WeakMap.prototype.set(key, value)` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.set
set:function(t,r){return u(this,t,r)}}:{// `WeakSet.prototype.add(value)` method
// https://tc39.es/ecma262/#sec-weakset.prototype.add
add:function(t){return u(this,t,!0)}}),o}};var dX=rp.enforce,dQ=Object,dZ=Array.isArray,d0=dQ.isExtensible,d1=dQ.isFrozen,d2=dQ.isSealed,d5=dQ.freeze,d4=dQ.seal,d6={},d3={},d8=!k.ActiveXObject&&"ActiveXObject"in k,d7=function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},d9=ut("WeakMap",d7,dz),gt=d9.prototype,gr=H(gt.set);// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if(rd){if(d8){O=dz.getConstructor(d7,"WeakMap",!0),ur.enable();var ge=H(gt.delete),gn=H(gt.has),go=H(gt.get);iV(gt,{delete:function(t){if(ti(t)&&!d0(t)){var r=dX(this);return r.frozen||(r.frozen=new O),ge(this,t)||r.frozen.delete(t)}return ge(this,t)},has:function(t){if(ti(t)&&!d0(t)){var r=dX(this);return r.frozen||(r.frozen=new O),gn(this,t)||r.frozen.has(t)}return gn(this,t)},get:function(t){if(ti(t)&&!d0(t)){var r=dX(this);return r.frozen||(r.frozen=new O),gn(this,t)?go(this,t):r.frozen.get(t)}return go(this,t)},set:function(t,r){if(ti(t)&&!d0(t)){var e=dX(this);e.frozen||(e.frozen=new O),gn(this,t)?gr(this,t,r):e.frozen.set(t,r)}else gr(this,t,r);return this}});// Chakra Edge frozen keys fix
}else ua&&_(function(){var t=d5([]);return gr(new d9,t,1),!d1(t)})&&iV(gt,{set:function(t,r){var e;return dZ(t)&&(d1(t)?e=d6:d2(t)&&(e=d3)),gr(this,t,r),e===d6&&d5(t),e===d3&&d4(t),this}})}// `WeakSet` constructor
// https://tc39.es/ecma262/#sec-weakset-constructor
ut("WeakSet",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},dz);var gi={};// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
gi=function(t,r){ti(r)&&"cause"in r&&t5(t,"cause",r.cause)};var ga={},gu={},gs=Error,gc=H("".replace),gf=String(gs("zxcasd").stack),gl=/\n\s*at [^:]*:[^\n]*/,gh=gl.test(gf);gu=function(t,r){if(gh&&"string"==typeof t&&!gs.prepareStackTrace)for(;r--;)t=gc(t,gl,"");return t};var gv={};gv=!_(function(){var t=Error("a");return!("stack"in t)||(// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(t,"stack",q(1,7)),7!==t.stack)});// non-standard V8
var gp=Error.captureStackTrace;ga=function(t,r,e,n){gv&&(gp?gp(t,r):t5(t,"stack",gu(e,n)))};var gd={};gd=function(t,r){return void 0===t?arguments.length<2?"":r:r7(t)};var gg=tL("toStringTag"),gy=Error,gb=[].push,gm=function(t,r/* , options */){var e,n=tv(gw,this);oX?e=oX(gy(),n?oq(this):gw):(e=n?this:es(gw),t5(e,gg,"Error")),void 0!==r&&t5(e,"message",gd(r)),ga(e,gm,e.stack,1),arguments.length>2&&gi(e,arguments[2]);var o=[];return uh(t,gb,{that:o}),t5(e,"errors",o),e};oX?oX(gm,gy):rN(gm,gy,{name:!0});var gw=gm.prototype=es(gy.prototype,{constructor:q(1,gm),message:q(1,""),name:q(1,"AggregateError")});// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
M({global:!0,constructor:!0,arity:2},{AggregateError:gm}),// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
M({global:!0,forced:k.globalThis!==k},{globalThis:k}),// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
M({target:"Promise",stat:!0,forced:fG},{allSettled:function(t){var r=this,e=y(r),n=e.resolve,o=e.reject,i=fa(function(){var e=tO(r.resolve),o=[],i=0,a=1;uh(t,function(t){var u=i++,s=!1;a++,U(e,r,t).then(function(t){!s&&(s=!0,o[u]={status:"fulfilled",value:t},--a||n(o))},function(t){!s&&(s=!0,o[u]={status:"rejected",reason:t},--a||n(o))})}),--a||n(o)});return i.error&&o(i.value),e.promise}});var gS="No one promise resolved";// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
M({target:"Promise",stat:!0,forced:fG},{any:function(t){var r=this,e=th("AggregateError"),n=y(r),o=n.resolve,i=n.reject,a=fa(function(){var n=tO(r.resolve),a=[],u=0,s=1,c=!1;uh(t,function(t){var f=u++,l=!1;s++,U(n,r,t).then(function(t){l||c||(c=!0,o(t))},function(t){!l&&!c&&(l=!0,a[f]=t,--s||i(new e(a,gS)))})}),--s||i(new e(a,gS))});return a.error&&i(a.value),n.promise}});var gx=tL("matchAll"),gA="RegExp String",gE=gA+" Iterator",gO=rp.set,gT=rp.getterFor(gE),gI=RegExp.prototype,gR=TypeError,gj=e_("".indexOf),gP=e_("".matchAll),gL=!!gP&&!_(function(){gP("a",/./)}),gM=oz(function(t,r,e,n){gO(this,{type:gE,regexp:t,string:r,global:e,unicode:n,done:!1})},gA,function(){var t=gT(this);if(t.done)return ir(void 0,!0);var r=t.regexp,e=t.string,n=hM(r,e);return null===n?(t.done=!0,ir(void 0,!0)):(t.global?""===r7(n[0])&&(r.lastIndex=hP(e,r$(r.lastIndex),t.unicode)):t.done=!0,ir(n,!1))}),gk=function(t){var r,e,n,o=t6(this),i=r7(t),a=cL(o,RegExp),u=r7(ll(o));return r=new a(a===RegExp?o.source:o,u),e=!!~gj(u,"g"),n=!!~gj(u,"u"),r.lastIndex=r$(o.lastIndex),new gM(r,i,e,n)};// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
M({target:"String",proto:!0,forced:gL},{matchAll:function(t){var r,e,n,o=tt(this);if(tr(t)){if(gL)return gP(o,t)}else{if(lc(t)&&!~gj(r7(tt(ll(t))),"g"))throw gR("`.matchAll` does not allow non-global regexes");if(gL)return gP(o,t);if(void 0===(e=tE(t,gx))&&tk&&"RegExp"===K(t)&&(e=gk),e)return U(e,t,o)}return r=r7(o),n=RegExp(t,"g"),tk?U(gk,n,r):n[gx](r)}}),tk||gx in gI||ro(gI,gx,gk);var gC=tL("replace"),gN=TypeError,g_=H("".indexOf),gU=H("".replace),gF=H("".slice),gD=Math.max,gz=function(t,r,e){return e>t.length?-1:""===r?e:g_(t,r,e)};// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
M({target:"String",proto:!0},{replaceAll:function(t,r){var e,n,o,i,a,u,s,c,f=tt(this),l=0,h=0,v="";if(!tr(t)){if((e=lc(t))&&!~g_(r7(tt(ll(t))),"g"))throw gN("`.replaceAll` does not allow non-global regexes");if(n=tE(t,gC))return U(n,t,f,r);if(tk&&e)return gU(r7(f),t,r)}for(o=r7(f),i=r7(t),(a=ta(r))||(r=r7(r)),s=gD(1,u=i.length),l=gz(o,i,0);-1!==l;)c=a?r7(r(i,l,o)):hW(i,o,l,[],void 0,r),v+=gF(o,h,l)+c,h=l+u,l=gz(o,i,l+s);return h<o.length&&(v+=gF(o,h)),v}});var gB=aM,gq=aR,gG=k.Symbol;if(// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
eI("dispose"),gG){var gW=gq(gG,"dispose");// workaround of NodeJS 20.4 bug
// https://github.com/nodejs/node/issues/48699
// and incorrect descriptor from some transpilers and userland helpers
gW.enumerable&&gW.configurable&&gW.writable&&gB(gG,"dispose",{value:gW.value,enumerable:!1,configurable:!1,writable:!1})}var gH={};// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
gH={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};var gV={},g$=tQ("span").classList,gY=g$&&g$.constructor&&g$.constructor.prototype;gV=gY===Object.prototype?void 0:gY;var gK={},gJ=eC.forEach;// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
gK=iu("forEach")?[].forEach:function(t/* , thisArg */){return gJ(this,t,arguments.length>1?arguments[1]:void 0);// eslint-disable-next-line es/no-array-prototype-foreach -- safe
};var gX=function(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t&&t.forEach!==gK)try{t5(t,"forEach",gK)}catch(r){t.forEach=gK}};for(var gQ in gH)gH[gQ]&&gX(k[gQ]&&k[gQ].prototype);gX(gV);var gZ=tL("iterator"),g0=tL("toStringTag"),g1=oU.values,g2=function(t,r){if(t){// some Chrome versions have non-configurable methods on DOMTokenList
if(t[gZ]!==g1)try{t5(t,gZ,g1)}catch(r){t[gZ]=g1}if(t[g0]||t5(t,g0,r),gH[r]){for(var e in oU)// some Chrome versions have non-configurable methods on DOMTokenList
if(t[e]!==oU[e])try{t5(t,e,oU[e])}catch(r){t[e]=oU[e]}}}};for(var g5 in gH)g2(k[g5]&&k[g5].prototype,g5);g2(gV,"DOMTokenList");var g4=k.process;// `queueMicrotask` method
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask
M({global:!0,enumerable:!0,dontCallGetSet:!0},{queueMicrotask:function(t){c_(arguments.length,1),tO(t);var r=cP&&g4.domain;c0(r?r.bind(t):t)}});var g6={},g3=tL("iterator");g6=!_(function(){// eslint-disable-next-line unicorn/relative-url-style -- required for testing
var t=new URL("b?a=1&b=2&c=3","http://a"),r=t.searchParams,e=new URLSearchParams("a=1&a=2&b=3"),n="";return t.pathname="c%20d",r.forEach(function(t,e){r.delete("b"),n+=e+t}),e.delete("a",2),// `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
e.delete("b",void 0),tk&&(!t.toJSON||!e.has("a",1)||e.has("a",2)||!e.has("a",void 0)||e.has("b"))||!r.size&&(tk||!N)||!r.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[g3]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host});var g8=hr.codeAt,g7={},g9=/[^\0-\u007E]/,yt=/[.\u3002\uFF0E\uFF61]/g,yr="Overflow: input needs wider integers to process",ye=RangeError,yn=H(yt.exec),yo=Math.floor,yi=String.fromCharCode,ya=H("".charCodeAt),yu=H([].join),ys=H([].push),yc=H("".replace),yf=H("".split),yl=H("".toLowerCase),yh=function(t){for(var r=[],e=0,n=t.length;e<n;){var o=ya(t,e++);if(o>=55296&&o<=56319&&e<n){// It's a high surrogate, and there is a next character.
var i=ya(t,e++);(64512&i)==56320?ys(r,((1023&o)<<10)+(1023&i)+65536):(// It's an unmatched surrogate; only append this code unit, in case the
// next code unit is the high surrogate of a surrogate pair.
ys(r,o),e--)}else ys(r,o)}return r},yv=function(t){//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return t+22+75*(t<26)},yp=function(t,r,e){var n=0;for(t=e?yo(t/700):t>>1,t+=yo(t/r);t>455;)t=yo(t/35),n+=36;return yo(n+36*t/(t+38))},yd=function(t){var r,e,n=[],o=// Convert the input in UCS-2 to an array of Unicode code points.
(t=yh(t)).length,i=128,a=0,u=72;// Handle the basic code points.
for(r=0;r<t.length;r++)(e=t[r])<128&&ys(n,yi(e));var s=n.length,c=s;// number of basic code points.
// Main encoding loop:
for(s&&ys(n,"-");c<o;){// All non-basic code points < n have been handled already. Find the next larger one:
var f=2147483647;for(r=0;r<t.length;r++)(e=t[r])>=i&&e<f&&(f=e);// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
var l=c+1;if(f-i>yo((2147483647-a)/l))throw ye(yr);for(a+=(f-i)*l,i=f,r=0;r<t.length;r++){if((e=t[r])<i&&++a>2147483647)throw ye(yr);if(e===i){for(// Represent delta as a generalized variable-length integer.
var h=a,v=36;;){var p=v<=u?1:v>=u+26?26:v-u;if(h<p)break;var d=h-p,g=36-p;ys(n,yi(yv(p+d%g))),h=yo(d/g),v+=36}ys(n,yi(yv(h))),u=yp(a,l,c===s),a=0,c++}}a++,i++}return yu(n,"")};g7=function(t){var r,e,n=[],o=yf(yc(yl(t),yt,"."),".");for(r=0;r<o.length;r++)ys(n,yn(g9,e=o[r])?"xn--"+yd(e):e);return yu(n,".")};var yg={},yy=tL("iterator"),yb="URLSearchParams",ym=yb+"Iterator",yw=rp.set,yS=rp.getterFor(yb),yx=rp.getterFor(ym),yA=Object.getOwnPropertyDescriptor,yE=function(t){if(!N)return k[t];var r=yA(k,t);return r&&r.value},yO=yE("fetch"),yT=yE("Request"),yI=yE("Headers"),yR=yT&&yT.prototype,yj=yI&&yI.prototype,yP=k.RegExp,yL=k.TypeError,yM=k.decodeURIComponent,yk=k.encodeURIComponent,yC=H("".charAt),yN=H([].join),y_=H([].push),yU=H("".replace),yF=H([].shift),yD=H([].splice),yz=H("".split),yB=H("".slice),yq=/\+/g,yG=[,,,,],yW=function(t){try{return yM(t)}catch(r){return t}},yH=function(t){var r,e=yU(t,yq," "),n=4;try{return yM(e)}catch(t){for(;n;)e=yU(e,yG[(r=n--)-1]||(yG[r-1]=yP("((?:%[\\da-f]{2}){"+r+"})","gi")),yW);return e}},yV=/[!'()~]|%20/g,y$={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},yY=function(t){return y$[t]},yK=function(t){return yU(yk(t),yV,yY)},yJ=oz(function(t,r){yw(this,{type:ym,iterator:oE(yS(t).entries),kind:r})},"Iterator",function(){var t=yx(this),r=t.kind,e=t.iterator.next(),n=e.value;return e.done||(e.value="keys"===r?n.key:"values"===r?n.value:[n.key,n.value]),e},!0),yX=function(t){this.entries=[],this.url=null,void 0!==t&&(ti(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===yC(t,0)?yB(t,1):t:r7(t)))};yX.prototype={type:yb,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var r,e,n,o,i,a,u,s=oO(t);if(s)for(e=(r=oE(t,s)).next;!(n=U(e,r)).done;){if(i=(o=oE(t6(n.value))).next,(a=U(i,o)).done||(u=U(i,o)).done||!U(i,o).done)throw yL("Expected sequence with length 2");y_(this.entries,{key:r7(a.value),value:r7(u.value)})}else for(var c in t)tF(t,c)&&y_(this.entries,{key:c,value:r7(t[c])})},parseQuery:function(t){if(t)for(var r,e,n=yz(t,"&"),o=0;o<n.length;)(r=n[o++]).length&&(e=yz(r,"="),y_(this.entries,{key:yH(yF(e)),value:yH(yN(e,"="))}))},serialize:function(){for(var t,r=this.entries,e=[],n=0;n<r.length;)y_(e,yK((t=r[n++]).key)+"="+yK(t.value));return yN(e,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var yQ=function(){i$(this,yZ);var t=arguments.length>0?arguments[0]:void 0,r=yw(this,new yX(t));N||(this.size=r.entries.length)},yZ=yQ.prototype;// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if(iV(yZ,{// `URLSearchParams.prototype.append` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-append
append:function(t,r){var e=yS(this);c_(arguments.length,2),y_(e.entries,{key:r7(t),value:r7(r)}),!N&&this.length++,e.updateURL()},// `URLSearchParams.prototype.delete` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-delete
delete:function(t/* , value */){for(var r=yS(this),e=c_(arguments.length,1),n=r.entries,o=r7(t),i=e<2?void 0:arguments[1],a=void 0===i?i:r7(i),u=0;u<n.length;){var s=n[u];if(s.key===o&&(void 0===a||s.value===a)){if(yD(n,u,1),void 0!==a)break}else u++}N||(this.size=n.length),r.updateURL()},// `URLSearchParams.prototype.get` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-get
get:function(t){var r=yS(this).entries;c_(arguments.length,1);for(var e=r7(t),n=0;n<r.length;n++)if(r[n].key===e)return r[n].value;return null},// `URLSearchParams.prototype.getAll` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-getall
getAll:function(t){var r=yS(this).entries;c_(arguments.length,1);for(var e=r7(t),n=[],o=0;o<r.length;o++)r[o].key===e&&y_(n,r[o].value);return n},// `URLSearchParams.prototype.has` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-has
has:function(t/* , value */){for(var r=yS(this).entries,e=c_(arguments.length,1),n=r7(t),o=e<2?void 0:arguments[1],i=void 0===o?o:r7(o),a=0;a<r.length;){var u=r[a++];if(u.key===n&&(void 0===i||u.value===i))return!0}return!1},// `URLSearchParams.prototype.set` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-set
set:function(t,r){var e,n=yS(this);c_(arguments.length,1);for(var o=n.entries,i=!1,a=r7(t),u=r7(r),s=0;s<o.length;s++)(e=o[s]).key===a&&(i?yD(o,s--,1):(i=!0,e.value=u));i||y_(o,{key:a,value:u}),N||(this.size=o.length),n.updateURL()},// `URLSearchParams.prototype.sort` method
// https://url.spec.whatwg.org/#dom-urlsearchparams-sort
sort:function(){var t=yS(this);im(t.entries,function(t,r){return t.key>r.key?1:-1}),t.updateURL()},// `URLSearchParams.prototype.forEach` method
forEach:function(t/* , thisArg */){for(var r,e=yS(this).entries,n=eN(t,arguments.length>1?arguments[1]:void 0),o=0;o<e.length;)n((r=e[o++]).value,r.key,this)},// `URLSearchParams.prototype.keys` method
keys:function(){return new yJ(this,"keys")},// `URLSearchParams.prototype.values` method
values:function(){return new yJ(this,"values")},// `URLSearchParams.prototype.entries` method
entries:function(){return new yJ(this,"entries")}},{enumerable:!0}),// `URLSearchParams.prototype[@@iterator]` method
ro(yZ,yy,yZ.entries,{name:"entries"}),// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
ro(yZ,"toString",function(){return yS(this).serialize()},{enumerable:!0}),N&&eT(yZ,"size",{get:function(){return yS(this).entries.length},configurable:!0,enumerable:!0}),eL(yQ,yb),M({global:!0,constructor:!0,forced:!g6},{URLSearchParams:yQ}),!g6&&ta(yI)){var y0=H(yj.has),y1=H(yj.set),y2=function(t){if(ti(t)){var r,e=t.body;if(r9(e)===yb)return y0(r=t.headers?new yI(t.headers):new yI,"content-type")||y1(r,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),es(t,{body:q(0,r7(e)),headers:q(0,r)})}return t};if(ta(yO)&&M({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t/* , init */){return yO(t,arguments.length>1?y2(arguments[1]):{})}}),ta(yT)){var y5=function(t/* , init */){return i$(this,yR),new yT(t,arguments.length>1?y2(arguments[1]):{})};yR.constructor=y5,y5.prototype=yR,M({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:y5})}}yg={URLSearchParams:yQ,getState:yS};var y4=rp.set,y6=rp.getterFor("URL"),y3=yg.URLSearchParams,y8=yg.getState,y7=k.URL,y9=k.TypeError,bt=k.parseInt,br=Math.floor,be=Math.pow,bn=H("".charAt),bo=H(/./.exec),bi=H([].join),ba=H(1..toString),bu=H([].pop),bs=H([].push),bc=H("".replace),bf=H([].shift),bl=H("".split),bh=H("".slice),bv=H("".toLowerCase),bp=H([].unshift),bd="Invalid scheme",bg="Invalid host",by="Invalid port",bb=/[a-z]/i,bm=/[\d+-.a-z]/i,bw=/\d/,bS=/^0x/i,bx=/^[0-7]+$/,bA=/^\d+$/,bE=/^[\da-f]+$/i,bO=/[\0\t\n\r #%/:<>?@[\\\]^|]/,bT=/[\0\t\n\r #/:<>?@[\\\]^|]/,bI=/^[\u0000-\u0020]+/,bR=/(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,bj=/[\t\n\r]/g,bP=function(t){var r,e,n,o,i,a,u,s=bl(t,".");if(s.length&&""===s[s.length-1]&&s.length--,(r=s.length)>4)return t;for(n=0,e=[];n<r;n++){if(""===(o=s[n]))return t;if(i=10,o.length>1&&"0"===bn(o,0)&&(i=bo(bS,o)?16:8,o=bh(o,8===i?1:2)),""===o)a=0;else{if(!bo(10===i?bA:8===i?bx:bE,o))return t;a=bt(o,i)}bs(e,a)}for(n=0;n<r;n++)if(a=e[n],n===r-1){if(a>=be(256,5-r))return null}else if(a>255)return null;for(n=0,u=bu(e);n<e.length;n++)u+=e[n]*be(256,3-n);return u},bL=function(t){var r,e,n,o,i,a,u,s=[0,0,0,0,0,0,0,0],c=0,f=null,l=0,h=function(){return bn(t,l)};if(":"===h()){if(":"!==bn(t,1))return;l+=2,f=++c}for(;h();){if(8===c)return;if(":"===h()){if(null!==f)return;l++,f=++c;continue}for(r=e=0;e<4&&bo(bE,h());)r=16*r+bt(h(),16),l++,e++;if("."===h()){if(0===e||(l-=e,c>6))return;for(n=0;h();){if(o=null,n>0){if("."!==h()||!(n<4))return;l++}if(!bo(bw,h()))return;for(;bo(bw,h());){if(i=bt(h(),10),null===o)o=i;else{if(0===o)return;o=10*o+i}if(o>255)return;l++}s[c]=256*s[c]+o,(2==++n||4===n)&&c++}if(4!==n)return;break}if(":"===h()){if(l++,!h())return}else if(h())return;s[c++]=r}if(null!==f)for(a=c-f,c=7;0!==c&&a>0;)u=s[c],s[c--]=s[f+a-1],s[f+--a]=u;else if(8!==c)return;return s},bM=function(t){for(var r=null,e=1,n=null,o=0,i=0;i<8;i++)0!==t[i]?(o>e&&(r=n,e=o),n=null,o=0):(null===n&&(n=i),++o);return o>e&&(r=n,e=o),r},bk=function(t){var r,e,n,o;// ipv4
if("number"==typeof t){for(e=0,r=[];e<4;e++)bp(r,t%256),t=br(t/256);return bi(r,".");// ipv6
}if("object"==typeof t){for(e=0,r="",n=bM(t);e<8;e++)(!o||0!==t[e])&&(o&&(o=!1),n===e?(r+=e?":":"::",o=!0):(r+=ba(t[e],16),e<7&&(r+=":")));return"["+r+"]"}return t},bC={},bN=s6({},bC,{" ":1,'"':1,"<":1,">":1,"`":1}),b_=s6({},bN,{"#":1,"?":1,"{":1,"}":1}),bU=s6({},b_,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),bF=function(t,r){var e=g8(t,0);return e>32&&e<127&&!tF(r,t)?t:encodeURIComponent(t)},bD={ftp:21,file:null,http:80,https:443,ws:80,wss:443},bz=function(t,r){var e;return 2===t.length&&bo(bb,bn(t,0))&&(":"===(e=bn(t,1))||!r&&"|"===e)},bB=function(t){var r;return t.length>1&&bz(bh(t,0,2))&&(2===t.length||"/"===(r=bn(t,2))||"\\"===r||"?"===r||"#"===r)},bq={},bG={},bW={},bH={},bV={},b$={},bY={},bK={},bJ={},bX={},bQ={},bZ={},b0={},b1={},b2={},b5={},b4={},b6={},b3={},b8={},b7={},b9=function(t,r,e){var n,o,i,a=r7(t);if(r){if(o=this.parse(a))throw y9(o);this.searchParams=null}else{if(void 0!==e&&(n=new b9(e,!0)),o=this.parse(a,null,n))throw y9(o);(i=y8(new y3)).bindURL(this),this.searchParams=i}};b9.prototype={type:"URL",// https://url.spec.whatwg.org/#url-parsing
// eslint-disable-next-line max-statements -- TODO
parse:function(t,r,e){var n=r||bq,o=0,i="",a=!1,u=!1,s=!1;for(t=r7(t),r||(this.scheme="",this.username="",this.password="",this.host=null,this.port=null,this.path=[],this.query=null,this.fragment=null,this.cannotBeABaseURL=!1,t=bc(t,bI,""),t=bc(t,bR,"$1")),t=bc(t,bj,""),c=oy(t);o<=c.length;){switch(f=c[o],n){case bq:if(f&&bo(bb,f))i+=bv(f),n=bG;else{if(r)return bd;n=bW;continue}break;case bG:if(f&&(bo(bm,f)||"+"===f||"-"===f||"."===f))i+=bv(f);else if(":"===f){if(r&&(this.isSpecial()!==tF(bD,i)||"file"===i&&(this.includesCredentials()||null!==this.port)||"file"===this.scheme&&!this.host))return;if(this.scheme=i,r){this.isSpecial()&&bD[this.scheme]===this.port&&(this.port=null);return}i="","file"===this.scheme?n=b1:this.isSpecial()&&e&&e.scheme===this.scheme?n=bH:this.isSpecial()?n=bK:"/"===c[o+1]?(n=bV,o++):(this.cannotBeABaseURL=!0,bs(this.path,""),n=b3)}else{if(r)return bd;i="",n=bW,o=0;continue}break;case bW:if(!e||e.cannotBeABaseURL&&"#"!==f)return bd;if(e.cannotBeABaseURL&&"#"===f){this.scheme=e.scheme,this.path=ew(e.path),this.query=e.query,this.fragment="",this.cannotBeABaseURL=!0,n=b7;break}n="file"===e.scheme?b1:b$;continue;case bH:if("/"===f&&"/"===c[o+1])n=bJ,o++;else{n=b$;continue}break;case bV:if("/"===f){n=bX;break}n=b6;continue;case b$:if(this.scheme=e.scheme,f===T)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=ew(e.path),this.query=e.query;else if("/"===f||"\\"===f&&this.isSpecial())n=bY;else if("?"===f)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=ew(e.path),this.query="",n=b8;else if("#"===f)this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=ew(e.path),this.query=e.query,this.fragment="",n=b7;else{this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,this.path=ew(e.path),this.path.length--,n=b6;continue}break;case bY:if(this.isSpecial()&&("/"===f||"\\"===f))n=bJ;else if("/"===f)n=bX;else{this.username=e.username,this.password=e.password,this.host=e.host,this.port=e.port,n=b6;continue}break;case bK:if(n=bJ,"/"!==f||"/"!==bn(i,o+1))continue;o++;break;case bJ:if("/"!==f&&"\\"!==f){n=bX;continue}break;case bX:if("@"===f){a&&(i="%40"+i),a=!0,l=oy(i);for(var c,f,l,h,v,p,d=0;d<l.length;d++){var g=l[d];if(":"===g&&!s){s=!0;continue}var y=bF(g,bU);s?this.password+=y:this.username+=y}i=""}else if(f===T||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial()){if(a&&""===i)return"Invalid authority";o-=oy(i).length+1,i="",n=bQ}else i+=f;break;case bQ:case bZ:if(r&&"file"===this.scheme){n=b5;continue}if(":"!==f||u){if(f===T||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial()){if(this.isSpecial()&&""===i)return bg;if(r&&""===i&&(this.includesCredentials()||null!==this.port))return;if(h=this.parseHost(i))return h;if(i="",n=b4,r)return;continue}"["===f?u=!0:"]"===f&&(u=!1),i+=f}else{if(""===i)return bg;if(h=this.parseHost(i))return h;if(i="",n=b0,r===bZ)return}break;case b0:if(bo(bw,f))i+=f;else{if(!(f===T||"/"===f||"?"===f||"#"===f||"\\"===f&&this.isSpecial())&&!r)return by;if(""!==i){var b=bt(i,10);if(b>65535)return by;this.port=this.isSpecial()&&b===bD[this.scheme]?null:b,i=""}if(r)return;n=b4;continue}break;case b1:if(this.scheme="file","/"===f||"\\"===f)n=b2;else if(e&&"file"===e.scheme)switch(f){case T:this.host=e.host,this.path=ew(e.path),this.query=e.query;break;case"?":this.host=e.host,this.path=ew(e.path),this.query="",n=b8;break;case"#":this.host=e.host,this.path=ew(e.path),this.query=e.query,this.fragment="",n=b7;break;default:bB(bi(ew(c,o),""))||(this.host=e.host,this.path=ew(e.path),this.shortenPath()),n=b6;continue}else{n=b6;continue}break;case b2:if("/"===f||"\\"===f){n=b5;break}e&&"file"===e.scheme&&!bB(bi(ew(c,o),""))&&(bz(e.path[0],!0)?bs(this.path,e.path[0]):this.host=e.host),n=b6;continue;case b5:if(f===T||"/"===f||"\\"===f||"?"===f||"#"===f){if(!r&&bz(i))n=b6;else if(""===i){if(this.host="",r)return;n=b4}else{if(h=this.parseHost(i))return h;if("localhost"===this.host&&(this.host=""),r)return;i="",n=b4}continue}i+=f;break;case b4:if(this.isSpecial()){if(n=b6,"/"!==f&&"\\"!==f)continue}else if(r||"?"!==f){if(r||"#"!==f){if(f!==T&&(n=b6,"/"!==f))continue}else this.fragment="",n=b7}else this.query="",n=b8;break;case b6:if(f===T||"/"===f||"\\"===f&&this.isSpecial()||!r&&("?"===f||"#"===f)){if(".."===(v=bv(v=i))||"%2e."===v||".%2e"===v||"%2e%2e"===v?(this.shortenPath(),"/"===f||"\\"===f&&this.isSpecial()||bs(this.path,"")):"."===(p=i)||"%2e"===bv(p)?"/"===f||"\\"===f&&this.isSpecial()||bs(this.path,""):("file"===this.scheme&&!this.path.length&&bz(i)&&(this.host&&(this.host=""),i=bn(i,0)+":"),bs(this.path,i)),i="","file"===this.scheme&&(f===T||"?"===f||"#"===f))for(;this.path.length>1&&""===this.path[0];)bf(this.path);"?"===f?(this.query="",n=b8):"#"===f&&(this.fragment="",n=b7)}else i+=bF(f,b_);break;case b3:"?"===f?(this.query="",n=b8):"#"===f?(this.fragment="",n=b7):f!==T&&(this.path[0]+=bF(f,bC));break;case b8:r||"#"!==f?f!==T&&("'"===f&&this.isSpecial()?this.query+="%27":"#"===f?this.query+="%23":this.query+=bF(f,bC)):(this.fragment="",n=b7);break;case b7:f!==T&&(this.fragment+=bF(f,bN))}o++}},// https://url.spec.whatwg.org/#host-parsing
parseHost:function(t){var r,e,n;if("["===bn(t,0)){if("]"!==bn(t,t.length-1)||!(r=bL(bh(t,1,-1))))return bg;this.host=r;// opaque host
}else if(this.isSpecial()){if(bo(bO,t=g7(t))||null===(r=bP(t)))return bg;this.host=r}else{if(bo(bT,t))return bg;for(n=0,r="",e=oy(t);n<e.length;n++)r+=bF(e[n],bC);this.host=r}},// https://url.spec.whatwg.org/#cannot-have-a-username-password-port
cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"===this.scheme},// https://url.spec.whatwg.org/#include-credentials
includesCredentials:function(){return""!==this.username||""!==this.password},// https://url.spec.whatwg.org/#is-special
isSpecial:function(){return tF(bD,this.scheme)},// https://url.spec.whatwg.org/#shorten-a-urls-path
shortenPath:function(){var t=this.path,r=t.length;r&&("file"!==this.scheme||1!==r||!bz(t[0],!0))&&t.length--},// https://url.spec.whatwg.org/#concept-url-serializer
serialize:function(){var t=this.scheme,r=this.username,e=this.password,n=this.host,o=this.port,i=this.path,a=this.query,u=this.fragment,s=t+":";return null!==n?(s+="//",this.includesCredentials()&&(s+=r+(e?":"+e:"")+"@"),s+=bk(n),null!==o&&(s+=":"+o)):"file"===t&&(s+="//"),s+=this.cannotBeABaseURL?i[0]:i.length?"/"+bi(i,"/"):"",null!==a&&(s+="?"+a),null!==u&&(s+="#"+u),s},// https://url.spec.whatwg.org/#dom-url-href
setHref:function(t){var r=this.parse(t);if(r)throw y9(r);this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-origin
getOrigin:function(){var t=this.scheme,r=this.port;if("blob"===t)try{return new mt(t.path[0]).origin}catch(t){return"null"}return"file"!==t&&this.isSpecial()?t+"://"+bk(this.host)+(null!==r?":"+r:""):"null"},// https://url.spec.whatwg.org/#dom-url-protocol
getProtocol:function(){return this.scheme+":"},setProtocol:function(t){this.parse(r7(t)+":",bq)},// https://url.spec.whatwg.org/#dom-url-username
getUsername:function(){return this.username},setUsername:function(t){var r=oy(r7(t));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var e=0;e<r.length;e++)this.username+=bF(r[e],bU)}},// https://url.spec.whatwg.org/#dom-url-password
getPassword:function(){return this.password},setPassword:function(t){var r=oy(r7(t));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var e=0;e<r.length;e++)this.password+=bF(r[e],bU)}},// https://url.spec.whatwg.org/#dom-url-host
getHost:function(){var t=this.host,r=this.port;return null===t?"":null===r?bk(t):bk(t)+":"+r},setHost:function(t){this.cannotBeABaseURL||this.parse(t,bQ)},// https://url.spec.whatwg.org/#dom-url-hostname
getHostname:function(){var t=this.host;return null===t?"":bk(t)},setHostname:function(t){this.cannotBeABaseURL||this.parse(t,bZ)},// https://url.spec.whatwg.org/#dom-url-port
getPort:function(){var t=this.port;return null===t?"":r7(t)},setPort:function(t){this.cannotHaveUsernamePasswordPort()||(""===(t=r7(t))?this.port=null:this.parse(t,b0))},// https://url.spec.whatwg.org/#dom-url-pathname
getPathname:function(){var t=this.path;return this.cannotBeABaseURL?t[0]:t.length?"/"+bi(t,"/"):""},setPathname:function(t){this.cannotBeABaseURL||(this.path=[],this.parse(t,b4))},// https://url.spec.whatwg.org/#dom-url-search
getSearch:function(){var t=this.query;return t?"?"+t:""},setSearch:function(t){""===(t=r7(t))?this.query=null:("?"===bn(t,0)&&(t=bh(t,1)),this.query="",this.parse(t,b8)),this.searchParams.update()},// https://url.spec.whatwg.org/#dom-url-searchparams
getSearchParams:function(){return this.searchParams.facade},// https://url.spec.whatwg.org/#dom-url-hash
getHash:function(){var t=this.fragment;return t?"#"+t:""},setHash:function(t){if(""===(t=r7(t))){this.fragment=null;return}"#"===bn(t,0)&&(t=bh(t,1)),this.fragment="",this.parse(t,b7)},update:function(){this.query=this.searchParams.serialize()||null}};// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var mt=function(t/* , base */){var r=i$(this,mr),e=c_(arguments.length,1)>1?arguments[1]:void 0,n=y4(r,new b9(t,!1,e));N||(r.href=n.serialize(),r.origin=n.getOrigin(),r.protocol=n.getProtocol(),r.username=n.getUsername(),r.password=n.getPassword(),r.host=n.getHost(),r.hostname=n.getHostname(),r.port=n.getPort(),r.pathname=n.getPathname(),r.search=n.getSearch(),r.searchParams=n.getSearchParams(),r.hash=n.getHash())},mr=mt.prototype,me=function(t,r){return{get:function(){return y6(this)[t]()},set:r&&function(t){return y6(this)[r](t)},configurable:!0,enumerable:!0}};if(N&&(// `URL.prototype.href` accessors pair
// https://url.spec.whatwg.org/#dom-url-href
eT(mr,"href",me("serialize","setHref")),// `URL.prototype.origin` getter
// https://url.spec.whatwg.org/#dom-url-origin
eT(mr,"origin",me("getOrigin")),// `URL.prototype.protocol` accessors pair
// https://url.spec.whatwg.org/#dom-url-protocol
eT(mr,"protocol",me("getProtocol","setProtocol")),// `URL.prototype.username` accessors pair
// https://url.spec.whatwg.org/#dom-url-username
eT(mr,"username",me("getUsername","setUsername")),// `URL.prototype.password` accessors pair
// https://url.spec.whatwg.org/#dom-url-password
eT(mr,"password",me("getPassword","setPassword")),// `URL.prototype.host` accessors pair
// https://url.spec.whatwg.org/#dom-url-host
eT(mr,"host",me("getHost","setHost")),// `URL.prototype.hostname` accessors pair
// https://url.spec.whatwg.org/#dom-url-hostname
eT(mr,"hostname",me("getHostname","setHostname")),// `URL.prototype.port` accessors pair
// https://url.spec.whatwg.org/#dom-url-port
eT(mr,"port",me("getPort","setPort")),// `URL.prototype.pathname` accessors pair
// https://url.spec.whatwg.org/#dom-url-pathname
eT(mr,"pathname",me("getPathname","setPathname")),// `URL.prototype.search` accessors pair
// https://url.spec.whatwg.org/#dom-url-search
eT(mr,"search",me("getSearch","setSearch")),// `URL.prototype.searchParams` getter
// https://url.spec.whatwg.org/#dom-url-searchparams
eT(mr,"searchParams",me("getSearchParams")),// `URL.prototype.hash` accessors pair
// https://url.spec.whatwg.org/#dom-url-hash
eT(mr,"hash",me("getHash","setHash"))),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
ro(mr,"toJSON",function(){return y6(this).serialize()},{enumerable:!0}),// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
ro(mr,"toString",function(){return y6(this).serialize()},{enumerable:!0}),y7){var mn=y7.createObjectURL,mo=y7.revokeObjectURL;mn&&ro(mt,"createObjectURL",eN(mn,y7)),mo&&ro(mt,"revokeObjectURL",eN(mo,y7))}eL(mt,"URL"),M({global:!0,constructor:!0,forced:!g6,sham:!N},{URL:mt}),// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
M({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return U(URL.prototype.toString,this)}});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mi=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function f(t,e,n,i){var a,u,s=Object.create((e&&e.prototype instanceof g?e:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(s,"_invoke",{value:(a=new I(i||[]),u=h,function(e,o){if(u===v)throw Error("Generator is already running");if(u===p){if("throw"===e)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return j()}for(a.method=e,a.arg=o;;){var i=a.delegate;if(i){var s=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(e,n){var o=n.method,i=e.iterator[o];if(i===r)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&e.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),d);var a=l(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,d;var u=a.arg;return u?u.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[e.resultName]=u.value,// Resume execution at the desired location (see delegateYield).
n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,d):u:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,d)}(i,a);if(s){if(s===d)continue;return s}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===h)throw u=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=v;var c=l(t,n,a);if("normal"===c.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
u=a.done?p:"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(u=p,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=c.arg)}})}),s)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h="suspendedStart",v="executing",p="completed",d={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function b(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var m={};c(m,a,function(){return this});var w=Object.getPrototypeOf,S=w&&w(w(R([])));S&&S!==e&&n.call(S,a)&&// of the polyfill.
(m=S);var x=b.prototype=g.prototype=Object.create(m);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function A(t){["next","throw","return"].forEach(function(r){c(t,r,function(t){return this._invoke(r,t)})})}function E(t,r){var e;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,u){var s=l(t[o],t,i);if("throw"===s.type)u(s.arg);else{var c=s.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then(function(t){e("next",t,a,u)},function(t){e("throw",t,a,u)}):r.resolve(f).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
c.value=t,a(c)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return e("throw",t,a,u)})}}(o,i,e,a)})}return e=// all previous Promises have been resolved before calling invoke,
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
a):a()}})}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function I(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function R(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}// Return an iterator with no values.
return{next:j}}function j(){return{value:r,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return y.prototype=b,o(x,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=c(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},A(E.prototype),c(E.prototype,u,function(){return this}),t.AsyncIterator=E,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new E(f(r,e,n,o),i);return t.isGeneratorFunction(e)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
A(x),c(x,s,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
c(x,a,function(){return this}),c(x,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=R,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(c){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=r,i)?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:R(t),resultName:e,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=r),d}},t}({});try{regeneratorRuntime=mi}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=mi:Function("r","regeneratorRuntime = r")(mi)}for(var ma="AIzaSyDJvk4A_K5SVv78Rl7Qaun_qFmU0_Xjo9Q",mu=document.querySelector(".settings-menu"),ms=document.querySelector(".nav-user-icon"),mc=document.getElementById("dark-btn"),mf=document.querySelector(".posts"),ml=document.querySelector(".subscriptions"),mh=document.querySelector(".story-gallery"),mv=document.body,mp=function(t){var r=t.items[0].snippet;return{profilePic:r.thumbnails.high.url,channelTag:r.customUrl,name:r.title}},md=(o=j(function(t){return L(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(t,"&key=").concat(ma))];case 1:return[4,r.sent().json()];case 2:return[2,mp(r.sent())];case 3:return console.error(r.sent()),[3,4];case 4:return[2]}})}),function(t){return o.apply(this,arguments)}),mg=function(t,r,e){var n=null==t?void 0:t.items[e].snippet;if(void 0!=n){var o=t.items[e].id,i=t.items[e].statistics,a=+i.viewCount,u=+i.likeCount,s=+i.commentCount,c=Math.floor((new Date-new Date(n.publishedAt))/1e3),f=Math.floor(c/60),l=Math.floor(f/60),h=Math.floor(l/24),v=0,p="";0==h&&0==l&&0==f?(v=c,p=" seconds ago",1==c&&(p=" second ago")):0==h&&0==l?(v=f,p=" minutes ago",1==f&&(p=" minute ago")):0==h?(v=l,1==l&&(p=" hour ago"),p=" hours ago"):(v=h,p=" days ago",1==h&&(p=" day ago"));var d=function(t){return t>=1e6?("0"==(t=(t/1e6).toFixed(1)).charAt(t.length-1)&&(t=Math.trunc(t)),t=t.toString()+"M"):t>1e3&&("0"==(t=(t/1e3).toFixed(1)).charAt(t.length-1)&&(t=Math.trunc(t)),t=t.toString()+"K"),t},g=" ",y=" ";return(null==n?void 0:n.tags)!=void 0&&((null==n?void 0:n.tags[0])!=void 0&&(g="#"+(null==n?void 0:n.tags[0])),(null==n?void 0:n.tags[1])!=void 0&&(y="#"+(null==n?void 0:n.tags[1]))),'\n    <div class="post-container">\n      <div class="post-row">\n        <div class="user-profile">\n          <img src="'.concat(r.profilePic,'" />\n          <div>\n            <p> ').concat(r.name,"</p>\n            <span> ").concat(v+p,' </span>\n          </div>\n        </div>\n        <a href="#"><i class="fas fa-ellipsis-v"></i></a>\n      </div>\n      <p class="post-text">\n        ').concat(n.title,'\n        <a href="#">').concat(g,'</a> <a href="#">').concat(y,'</a>\n      </p>\n      <iframe width="560" height="315" src="https://www.youtube.com/embed/').concat(o,'" class="post-vid" frameborder="0" allowfullscreen></iframe>\n      <div class="post-row">\n        <div class="activity-icons">\n          <div><i class="fa-solid fa-eye"></i> ').concat(d(a),'</div>\n          <div><button class="like-btn"><i class="fa-solid fa-thumbs-up" data-video-id="video').concat(e,'"></i></button> ').concat(d(u),'</div>\n          <div><i class="fa-solid fa-comments"></i> ').concat(d(s),'</div>\n        </div>\n        <div class="post-profile-icon">\n          <img src="https://yt3.ggpht.com/yti/AOXPAcWODTAzDO8acHR5anE77yyjaEuiWqAQ_casQ_Kpcg=s88-c-k-c0x00ffffff-no-rj" />\n          <i class="fas fa-caret-down"></i>\n        </div>\n      </div>\n    </div>\n  ')}},my=(i=j(function(t){var r,e;return L(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=".concat(ma))];case 1:return[4,n.sent().json()];case 2:return[4,md((r=n.sent()).items[t].snippet.channelId)];case 3:return e=n.sent(),mf.insertAdjacentHTML("beforeend",mg(r,e,t)),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t){return i.apply(this,arguments)}),mb=function(){var t,r=function(t){var r=t.querySelector(".fa-thumbs-up");if(r){var e=r.getAttribute("data-video-id"),n="liked_".concat(e);"on"===localStorage.getItem(n)&&r.classList.add("like-on"),r.addEventListener("click",function(){r.classList.toggle("like-on"),"on"===localStorage.getItem(n)?localStorage.setItem(n,"off"):localStorage.setItem(n,"on")})}};(t=document.querySelector(".posts"))&&new MutationObserver(function(t){var e=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var u=i.value;"childList"===u.type&&u.addedNodes.forEach(function(t){t instanceof HTMLElement&&r(t)})}}catch(t){n=!0,o=t}finally{try{e||null==a.return||a.return()}finally{if(n)throw o}}}).observe(t,{childList:!0,subtree:!0})},mm=0;mm<5;mm++)my(mm);document.addEventListener("DOMContentLoaded",function(){mb()});for(var mw=function(t,r){var e=localStorage.getItem("subStatus".concat(r));"subscribed"===e?(t.classList.remove("sub-btn-off"),t.classList.add("sub-btn-on"),t.textContent="Subscribed"):"unsubscribed"===e?(t.classList.remove("sub-btn-on"),t.classList.add("sub-btn-off"),t.textContent="Subscribe"):(t.classList.remove("sub-btn-off"),t.classList.add("sub-btn-on"),t.textContent="Subscribed")},mS=function(t,r){t.classList.contains("sub-btn-off")?(t.textContent="Subscribed",t.classList.add("sub-btn-on"),t.classList.remove("sub-btn-off"),localStorage.setItem("subStatus".concat(r),"subscribed")):t.classList.contains("sub-btn-on")?(t.textContent="Subscribe",t.classList.remove("sub-btn-on"),t.classList.add("sub-btn-off"),localStorage.setItem("subStatus".concat(r),"unsubscribed")):(t.classList.add("sub-btn-on"),t.textContent="Subscribed",localStorage.setItem("subStatus".concat(r),"subscribed"))},mx=(a=j(function(t){var r,e;return L(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=".concat(ma))];case 1:return[4,n.sent().json()];case 2:return[4,md(n.sent().items[t].snippet.channelId)];case 3:return r=n.sent(),ml.insertAdjacentHTML("afterbegin",'\n  <div class="subcription">\n    <div class="left-event">\n      <img\n        src="'.concat(r.profilePic,'"\n      />\n    </div>\n    <div class="right-event">\n      <a href="https://www.youtube.com/').concat(r.channelTag,'">').concat(r.name,'</a>\n      <button class="sub-btn"> Subscribe</button>\n    </div>\n  </div>\n  ')),mw(e=ml.querySelector(".sub-btn"),t),e&&e.addEventListener("click",function(){mS(e,t)}),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t){return a.apply(this,arguments)}),mA=function(t,r,e){var n,o,i=null===(n=r.items[e].snippet.thumbnails)||void 0===n?void 0:null===(o=n.maxres)||void 0===o?void 0:o.url;return void 0==i&&(i=r.items[e].snippet.thumbnails.high.url),'\n  <div class="story story'.concat(e+2,'" style="background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.5)), url(').concat(i,')">\n    <img src="').concat(t.profilePic,'" />\n    <p>').concat(t.name,"</p>\n  </div>\n")},mE=(u=j(function(t){var r,e;return L(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&pageToken=CAUQAA&key=".concat(ma))];case 1:return[4,n.sent().json()];case 2:return[4,md((r=n.sent()).items[t].snippet.channelId)];case 3:return e=n.sent(),mh.insertAdjacentHTML("beforeend",mA(e,r,t)),[3,5];case 4:return console.error(n.sent()),[3,5];case 5:return[2]}})}),function(t){return u.apply(this,arguments)}),mO=0;mO<5;mO++)mx(mO),4!=mO&&mE(mO);ms.addEventListener("click",function(){mu.classList.toggle("settings-menu-height")}),mc.addEventListener("click",function(){mc.classList.toggle("dark-btn-on"),mv.classList.toggle("dark-theme"),"light"===localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")}),"light"===localStorage.getItem("theme")?(mc.classList.remove("dark-btn-on"),mv.classList.remove("dark-theme")):"dark"===localStorage.getItem("theme")?(mc.classList.add("dark-btn-on"),mv.classList.add("dark-theme")):localStorage.setItem("theme","light")}();//# sourceMappingURL=index.c826d8d6.js.map

//# sourceMappingURL=index.c826d8d6.js.map
