(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function og(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Bf={exports:{}},yo={};var tx;function kv(){if(tx)return yo;tx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return yo.Fragment=t,yo.jsx=i,yo.jsxs=i,yo}var nx;function Xv(){return nx||(nx=1,Bf.exports=kv()),Bf.exports}var H=Xv(),If={exports:{}},lt={};var ix;function Wv(){if(ix)return lt;ix=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function v(N,ae,be){this.props=N,this.context=ae,this.refs=b,this.updater=be||A}v.prototype.isReactComponent={},v.prototype.setState=function(N,ae){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ae,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=v.prototype;function U(N,ae,be){this.props=N,this.context=ae,this.refs=b,this.updater=be||A}var B=U.prototype=new z;B.constructor=U,C(B,v.prototype),B.isPureReactComponent=!0;var q=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(N,ae,be){var Ae=be.ref;return{$$typeof:o,type:N,key:ae,ref:Ae!==void 0?Ae:null,props:be}}function R(N,ae){return w(N.type,ae,N.props)}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function ee(N){var ae={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(be){return ae[be]})}var oe=/\/+/g;function xe(N,ae){return typeof N=="object"&&N!==null&&N.key!=null?ee(""+N.key):ae.toString(36)}function de(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(L,L):(N.status="pending",N.then(function(ae){N.status==="pending"&&(N.status="fulfilled",N.value=ae)},function(ae){N.status==="pending"&&(N.status="rejected",N.reason=ae)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function O(N,ae,be,Ae,Pe){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var ue=!1;if(N===null)ue=!0;else switch(ie){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(N.$$typeof){case o:case t:ue=!0;break;case _:return ue=N._init,O(ue(N._payload),ae,be,Ae,Pe)}}if(ue)return Pe=Pe(N),ue=Ae===""?"."+xe(N,0):Ae,q(Pe)?(be="",ue!=null&&(be=ue.replace(oe,"$&/")+"/"),O(Pe,ae,be,"",function(qe){return qe})):Pe!=null&&(k(Pe)&&(Pe=R(Pe,be+(Pe.key==null||N&&N.key===Pe.key?"":(""+Pe.key).replace(oe,"$&/")+"/")+ue)),ae.push(Pe)),1;ue=0;var Ce=Ae===""?".":Ae+":";if(q(N))for(var Ie=0;Ie<N.length;Ie++)Ae=N[Ie],ie=Ce+xe(Ae,Ie),ue+=O(Ae,ae,be,ie,Pe);else if(Ie=y(N),typeof Ie=="function")for(N=Ie.call(N),Ie=0;!(Ae=N.next()).done;)Ae=Ae.value,ie=Ce+xe(Ae,Ie++),ue+=O(Ae,ae,be,ie,Pe);else if(ie==="object"){if(typeof N.then=="function")return O(de(N),ae,be,Ae,Pe);throw ae=String(N),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return ue}function X(N,ae,be){if(N==null)return N;var Ae=[],Pe=0;return O(N,Ae,"","",function(ie){return ae.call(be,ie,Pe++)}),Ae}function W(N){if(N._status===-1){var ae=N._result;ae=ae(),ae.then(function(be){(N._status===0||N._status===-1)&&(N._status=1,N._result=be)},function(be){(N._status===0||N._status===-1)&&(N._status=2,N._result=be)}),N._status===-1&&(N._status=0,N._result=ae)}if(N._status===1)return N._result.default;throw N._result}var le=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},_e={map:X,forEach:function(N,ae,be){X(N,function(){ae.apply(this,arguments)},be)},count:function(N){var ae=0;return X(N,function(){ae++}),ae},toArray:function(N){return X(N,function(ae){return ae})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return lt.Activity=g,lt.Children=_e,lt.Component=v,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=U,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,lt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},lt.cache=function(N){return function(){return N.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(N,ae,be){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ae=C({},N.props),Pe=N.key;if(ae!=null)for(ie in ae.key!==void 0&&(Pe=""+ae.key),ae)!ne.call(ae,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&ae.ref===void 0||(Ae[ie]=ae[ie]);var ie=arguments.length-2;if(ie===1)Ae.children=be;else if(1<ie){for(var ue=Array(ie),Ce=0;Ce<ie;Ce++)ue[Ce]=arguments[Ce+2];Ae.children=ue}return w(N.type,Pe,Ae)},lt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},lt.createElement=function(N,ae,be){var Ae,Pe={},ie=null;if(ae!=null)for(Ae in ae.key!==void 0&&(ie=""+ae.key),ae)ne.call(ae,Ae)&&Ae!=="key"&&Ae!=="__self"&&Ae!=="__source"&&(Pe[Ae]=ae[Ae]);var ue=arguments.length-2;if(ue===1)Pe.children=be;else if(1<ue){for(var Ce=Array(ue),Ie=0;Ie<ue;Ie++)Ce[Ie]=arguments[Ie+2];Pe.children=Ce}if(N&&N.defaultProps)for(Ae in ue=N.defaultProps,ue)Pe[Ae]===void 0&&(Pe[Ae]=ue[Ae]);return w(N,ie,Pe)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(N){return{$$typeof:h,render:N}},lt.isValidElement=k,lt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:W}},lt.memo=function(N,ae){return{$$typeof:p,type:N,compare:ae===void 0?null:ae}},lt.startTransition=function(N){var ae=F.T,be={};F.T=be;try{var Ae=N(),Pe=F.S;Pe!==null&&Pe(be,Ae),typeof Ae=="object"&&Ae!==null&&typeof Ae.then=="function"&&Ae.then(L,le)}catch(ie){le(ie)}finally{ae!==null&&be.types!==null&&(ae.types=be.types),F.T=ae}},lt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},lt.use=function(N){return F.H.use(N)},lt.useActionState=function(N,ae,be){return F.H.useActionState(N,ae,be)},lt.useCallback=function(N,ae){return F.H.useCallback(N,ae)},lt.useContext=function(N){return F.H.useContext(N)},lt.useDebugValue=function(){},lt.useDeferredValue=function(N,ae){return F.H.useDeferredValue(N,ae)},lt.useEffect=function(N,ae){return F.H.useEffect(N,ae)},lt.useEffectEvent=function(N){return F.H.useEffectEvent(N)},lt.useId=function(){return F.H.useId()},lt.useImperativeHandle=function(N,ae,be){return F.H.useImperativeHandle(N,ae,be)},lt.useInsertionEffect=function(N,ae){return F.H.useInsertionEffect(N,ae)},lt.useLayoutEffect=function(N,ae){return F.H.useLayoutEffect(N,ae)},lt.useMemo=function(N,ae){return F.H.useMemo(N,ae)},lt.useOptimistic=function(N,ae){return F.H.useOptimistic(N,ae)},lt.useReducer=function(N,ae,be){return F.H.useReducer(N,ae,be)},lt.useRef=function(N){return F.H.useRef(N)},lt.useState=function(N){return F.H.useState(N)},lt.useSyncExternalStore=function(N,ae,be){return F.H.useSyncExternalStore(N,ae,be)},lt.useTransition=function(){return F.H.useTransition()},lt.version="19.2.0",lt}var ax;function ch(){return ax||(ax=1,If.exports=Wv()),If.exports}var en=ch();const qv=og(en);var Hf={exports:{}},Mo={},Gf={exports:{}},Vf={};var sx;function jv(){return sx||(sx=1,(function(o){function t(O,X){var W=O.length;O.push(X);e:for(;0<W;){var le=W-1>>>1,_e=O[le];if(0<l(_e,X))O[le]=X,O[W]=_e,W=le;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var X=O[0],W=O.pop();if(W!==X){O[0]=W;e:for(var le=0,_e=O.length,N=_e>>>1;le<N;){var ae=2*(le+1)-1,be=O[ae],Ae=ae+1,Pe=O[Ae];if(0>l(be,W))Ae<_e&&0>l(Pe,be)?(O[le]=Pe,O[Ae]=W,le=Ae):(O[le]=be,O[ae]=W,le=ae);else if(Ae<_e&&0>l(Pe,W))O[le]=Pe,O[Ae]=W,le=Ae;else break e}}return X}function l(O,X){var W=O.sortIndex-X.sortIndex;return W!==0?W:O.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,S=3,y=!1,A=!1,C=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function B(O){for(var X=i(p);X!==null;){if(X.callback===null)s(p);else if(X.startTime<=O)s(p),X.sortIndex=X.expirationTime,t(m,X);else break;X=i(p)}}function q(O){if(C=!1,B(O),!A)if(i(m)!==null)A=!0,L||(L=!0,ee());else{var X=i(p);X!==null&&de(q,X.startTime-O)}}var L=!1,F=-1,ne=5,w=-1;function R(){return b?!0:!(o.unstable_now()-w<ne)}function k(){if(b=!1,L){var O=o.unstable_now();w=O;var X=!0;try{e:{A=!1,C&&(C=!1,z(F),F=-1),y=!0;var W=S;try{t:{for(B(O),g=i(m);g!==null&&!(g.expirationTime>O&&R());){var le=g.callback;if(typeof le=="function"){g.callback=null,S=g.priorityLevel;var _e=le(g.expirationTime<=O);if(O=o.unstable_now(),typeof _e=="function"){g.callback=_e,B(O),X=!0;break t}g===i(m)&&s(m),B(O)}else s(m);g=i(m)}if(g!==null)X=!0;else{var N=i(p);N!==null&&de(q,N.startTime-O),X=!1}}break e}finally{g=null,S=W,y=!1}X=void 0}}finally{X?ee():L=!1}}}var ee;if(typeof U=="function")ee=function(){U(k)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,xe=oe.port2;oe.port1.onmessage=k,ee=function(){xe.postMessage(null)}}else ee=function(){v(k,0)};function de(O,X){F=v(function(){O(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var W=S;S=X;try{return O()}finally{S=W}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var W=S;S=O;try{return X()}finally{S=W}},o.unstable_scheduleCallback=function(O,X,W){var le=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?le+W:le):W=le,O){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=W+_e,O={id:_++,callback:X,priorityLevel:O,startTime:W,expirationTime:_e,sortIndex:-1},W>le?(O.sortIndex=W,t(p,O),i(m)===null&&O===i(p)&&(C?(z(F),F=-1):C=!0,de(q,W-le))):(O.sortIndex=_e,t(m,O),A||y||(A=!0,L||(L=!0,ee()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var X=S;return function(){var W=S;S=X;try{return O.apply(this,arguments)}finally{S=W}}}})(Vf)),Vf}var rx;function Yv(){return rx||(rx=1,Gf.exports=jv()),Gf.exports}var kf={exports:{}},wn={};var ox;function Zv(){if(ox)return wn;ox=1;var o=ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var lx;function Kv(){if(lx)return kf.exports;lx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kf.exports=Zv(),kf.exports}var cx;function Qv(){if(cx)return Mo;cx=1;var o=Yv(),t=ch(),i=Kv();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,r=f;break}if(E===r){x=!0,r=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,r=c;break}if(E===r){x=!0,r=f,a=c;break}E=E.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),U=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case q:return"Suspense";case L:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case U:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case B:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:xe(e.type)||"Memo";case ne:n=e._payload,e=e._init;try{return xe(e(n))}catch{}}return null}var de=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},le=[],_e=-1;function N(e){return{current:e}}function ae(e){0>_e||(e.current=le[_e],le[_e]=null,_e--)}function be(e,n){_e++,le[_e]=e.current,e.current=n}var Ae=N(null),Pe=N(null),ie=N(null),ue=N(null);function Ce(e,n){switch(be(ie,n),be(Pe,e),be(Ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Em(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Em(n),e=Tm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(Ae),be(Ae,e)}function Ie(){ae(Ae),ae(Pe),ae(ie)}function qe(e){e.memoizedState!==null&&be(ue,e);var n=Ae.current,a=Tm(n,e.type);n!==a&&(be(Pe,e),be(Ae,a))}function rt(e){Pe.current===e&&(ae(Ae),ae(Pe)),ue.current===e&&(ae(ue),_o._currentValue=W)}var Yt,ot;function xt(e){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+e+ot}var I=!1;function ct(e,n){if(!e||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(re){var te=re}Reflect.construct(e,[],ge)}else{try{ge.call()}catch(re){te=re}e.call(ge.prototype)}}else{try{throw Error()}catch(re){te=re}(ge=e())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(re){if(re&&te&&typeof re.stack=="string")return[re.stack,te.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var P=x.split(`
`),J=E.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===J.length)for(r=P.length-1,c=J.length-1;1<=r&&0<=c&&P[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==J[c]){var he=`
`+P[r].replace(" at new "," at ");return e.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",e.displayName)),he}while(1<=r&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xt(a):""}function st(e,n){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ct(e.type,!1);case 11:return ct(e.type.render,!1);case 1:return ct(e.type,!0);case 31:return xt("Activity");default:return""}}function At(e){try{var n="",a=null;do n+=st(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ge=Object.prototype.hasOwnProperty,Lt=o.unstable_scheduleCallback,Ze=o.unstable_cancelCallback,nt=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,me=o.unstable_ImmediatePriority,Me=o.unstable_UserBlockingPriority,ce=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,Ee=o.unstable_IdlePriority,Xe=o.log,Ue=o.unstable_setDisableYieldValue,ve=null,ye=null;function Be(e){if(typeof Xe=="function"&&Ue(e),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(ve,e)}catch{}}var ze=Math.clz32?Math.clz32:G,Fe=Math.log,it=Math.LN2;function G(e){return e>>>=0,e===0?32:31-(Fe(e)/it|0)|0}var Ne=256,we=262144,De=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Se(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Te(r):(x&=E,x!==0?c=Te(x):a||(a=E&~e,a!==0&&(c=Te(a))))):(E=r&~f,E!==0?c=Te(E):x!==0?c=Te(x):a||(a=r&~e,a!==0&&(c=Te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ve(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function at(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=De;return De<<=1,(De&62914560)===0&&(De=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kn(e,n,a,r,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=x&~a;0<a;){var he=31-ze(a),ge=1<<he;E[he]=0,P[he]=-1;var te=J[he];if(te!==null)for(J[he]=null,he=0;he<te.length;he++){var re=te[he];re!==null&&(re.lane&=-536870913)}a&=~ge}r!==0&&Ho(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Ho(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ze(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function wr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ze(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Dr(e,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(e.suspendedLanes|n))!==0?0:a}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ka(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ur(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Ym(e.type))}function Nr(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var Xn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xn,dn="__reactProps$"+Xn,Ni="__reactContainer$"+Xn,Cs="__reactEvents$"+Xn,Uc="__reactListeners$"+Xn,Nc="__reactHandles$"+Xn,Go="__reactResources$"+Xn,Qa="__reactMarker$"+Xn;function Lr(e){delete e[rn],delete e[dn],delete e[Cs],delete e[Uc],delete e[Nc]}function pa(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ni]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Nm(e);e!==null;){if(a=e[rn])return a;e=Nm(e)}return n}e=a,a=e.parentNode}return null}function T(e){if(e=e[rn]||e[Ni]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function j(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function se(e){var n=e[Go];return n||(n=e[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(e){e[Qa]=!0}var Z=new Set,Re={};function Le(e,n){He(e,n),He(e+"Capture",n)}function He(e,n){for(Re[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var ke=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ke(e){return Ge.call(tt,e)?!0:Ge.call($e,e)?!1:ke.test(e)?tt[e]=!0:($e[e]=!0,!1)}function dt(e,n,a){if(Ke(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Tt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ct(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ot(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Ot(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function yt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ot(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ma=/[\n"\\]/g;function qt(e){return e.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Li(e,n,a,r,c,f,x,E){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+bt(n)):e.value!==""+bt(n)&&(e.value=""+bt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?vn(e,x,bt(n)):a!=null?vn(e,x,bt(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+bt(E):e.removeAttribute("name")}function jt(e,n,a,r,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+bt(a):"",n=n!=null?""+bt(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=E?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Xt(e)}function vn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hn(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+bt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+bt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+bt(a):""}function Mn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=bt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Xt(e)}function Ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Oi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Oi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&bh(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&bh(e,f,n[f])}function Lc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ig=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return Hg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var Oc=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function Mh(e){var n=T(e);if(n&&(e=n.stateNode)){var a=e[dn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Li(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[dn]||null;if(!c)throw Error(s(90));Li(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&yt(r)}break e;case"textarea":Sn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&hn(e,!!a.multiple,n,!1)}}}var Pc=!1;function Eh(e,n,a){if(Pc)return e(n,a);Pc=!0;try{var r=e(n);return r}finally{if(Pc=!1,(ws!==null||Ds!==null)&&(wl(),ws&&(n=ws,e=Ds,Ds=ws=null,Mh(n),e)))for(n=0;n<e.length;n++)Mh(e[n])}}function Or(e,n){var a=e.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(Pi)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){zc=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{zc=!1}var xa=null,Bc=null,ko=null;function Th(){if(ko)return ko;var e,n=Bc,a=n.length,r,c="value"in xa?xa.value:xa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[f-r];r++);return ko=c.slice(e,1<r?1-r:void 0)}function Xo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function Ah(){return!1}function Fn(e){function n(a,r,c,f,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Ah,this.isPropagationStopped=Ah,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=Fn(Ja),Pr=g({},Ja,{view:0,detail:0}),Gg=Fn(Pr),Ic,Hc,zr,jo=g({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Ic=e.screenX-zr.screenX,Hc=e.screenY-zr.screenY):Hc=Ic=0,zr=e),Ic)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),Rh=Fn(jo),Vg=g({},jo,{dataTransfer:0}),kg=Fn(Vg),Xg=g({},Pr,{relatedTarget:0}),Gc=Fn(Xg),Wg=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),qg=Fn(Wg),jg=g({},Ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yg=Fn(jg),Zg=g({},Ja,{data:0}),Ch=Fn(Zg),Kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $g(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jg[e])?!!n[e]:!1}function Vc(){return $g}var e_=g({},Pr,{key:function(e){if(e.key){var n=Kg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t_=Fn(e_),n_=g({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=Fn(n_),i_=g({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),a_=Fn(i_),s_=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),r_=Fn(s_),o_=g({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),l_=Fn(o_),c_=g({},Ja,{newState:0,oldState:0}),u_=Fn(c_),f_=[9,13,27,32],kc=Pi&&"CompositionEvent"in window,Br=null;Pi&&"documentMode"in document&&(Br=document.documentMode);var d_=Pi&&"TextEvent"in window&&!Br,Dh=Pi&&(!kc||Br&&8<Br&&11>=Br),Uh=" ",Nh=!1;function Lh(e,n){switch(e){case"keyup":return f_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function h_(e,n){switch(e){case"compositionend":return Oh(n);case"keypress":return n.which!==32?null:(Nh=!0,Uh);case"textInput":return e=n.data,e===Uh&&Nh?null:e;default:return null}}function p_(e,n){if(Us)return e==="compositionend"||!kc&&Lh(e,n)?(e=Th(),ko=Bc=xa=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dh&&n.locale!=="ko"?null:n.data;default:return null}}var m_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!m_[e.type]:n==="textarea"}function Ph(e,n,a,r){ws?Ds?Ds.push(r):Ds=[r]:ws=r,n=Pl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Ir=null,Hr=null;function x_(e){_m(e,0)}function Yo(e){var n=j(e);if(yt(n))return e}function zh(e,n){if(e==="change")return n}var Bh=!1;if(Pi){var Xc;if(Pi){var Wc="oninput"in document;if(!Wc){var Ih=document.createElement("div");Ih.setAttribute("oninput","return;"),Wc=typeof Ih.oninput=="function"}Xc=Wc}else Xc=!1;Bh=Xc&&(!document.documentMode||9<document.documentMode)}function Hh(){Ir&&(Ir.detachEvent("onpropertychange",Gh),Hr=Ir=null)}function Gh(e){if(e.propertyName==="value"&&Yo(Hr)){var n=[];Ph(n,Hr,e,Fc(e)),Eh(x_,n)}}function g_(e,n,a){e==="focusin"?(Hh(),Ir=n,Hr=a,Ir.attachEvent("onpropertychange",Gh)):e==="focusout"&&Hh()}function __(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Hr)}function v_(e,n){if(e==="click")return Yo(n)}function S_(e,n){if(e==="input"||e==="change")return Yo(n)}function b_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:b_;function Gr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ge.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Vh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kh(e,n){var a=Vh(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vh(a)}}function Xh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var y_=Pi&&"documentMode"in document&&11>=document.documentMode,Ns=null,jc=null,Vr=null,Yc=!1;function qh(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||Ns==null||Ns!==_n(r)||(r=Ns,"selectionStart"in r&&qc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Gr(Vr,r)||(Vr=r,r=Pl(jc,"onSelect"),0<r.length&&(n=new qo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ns)))}function $a(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ls={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Zc={},jh={};Pi&&(jh=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function es(e){if(Zc[e])return Zc[e];if(!Ls[e])return e;var n=Ls[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jh)return Zc[e]=n[a];return e}var Yh=es("animationend"),Zh=es("animationiteration"),Kh=es("animationstart"),M_=es("transitionrun"),E_=es("transitionstart"),T_=es("transitioncancel"),Qh=es("transitionend"),Jh=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function pi(e,n){Jh.set(e,n),Le(n,[e])}var Zo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Os=0,Qc=0;function Ko(){for(var e=Os,n=Qc=Os=0;n<e;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}f!==0&&$h(a,c,f)}}function Qo(e,n,a,r){ii[Os++]=e,ii[Os++]=n,ii[Os++]=a,ii[Os++]=r,Qc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Jc(e,n,a,r){return Qo(e,n,a,r),Jo(e)}function ts(e,n){return Qo(e,null,null,n),Jo(e)}function $h(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ze(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Jo(e){if(50<uo)throw uo=0,lf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fs={};function A_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,r){return new A_(e,n,a,r)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $o(e,n,a,r,c,f){var x=0;if(r=e,typeof e=="function")$c(e)&&(x=1);else if(typeof e=="string")x=Uv(e,a,Ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=qn(31,a,n,c),e.elementType=w,e.lanes=f,e;case C:return ns(a.children,c,f,n);case b:x=8,c|=24;break;case v:return e=qn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case q:return e=qn(13,a,n,c),e.elementType=q,e.lanes=f,e;case L:return e=qn(19,a,n,c),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break e;case z:x=9;break e;case B:x=11;break e;case F:x=14;break e;case ne:x=16,r=null;break e}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=qn(x,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ns(e,n,a,r){return e=qn(7,e,r,n),e.lanes=a,e}function eu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function tp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function tu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var np=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=np.get(e);return a!==void 0?a:(n={value:e,source:n,stack:At(n)},np.set(e,n),n)}return{value:e,source:n,stack:At(n)}}var Ps=[],zs=0,el=null,kr=0,si=[],ri=0,ga=null,Ti=1,Ai="";function Bi(e,n){Ps[zs++]=kr,Ps[zs++]=el,el=e,kr=n}function ip(e,n,a){si[ri++]=Ti,si[ri++]=Ai,si[ri++]=ga,ga=e;var r=Ti;e=Ai;var c=32-ze(r)-1;r&=~(1<<c),a+=1;var f=32-ze(n)+c;if(30<f){var x=c-c%5;f=(r&(1<<x)-1).toString(32),r>>=x,c-=x,Ti=1<<32-ze(n)+c|a<<c|r,Ai=f+e}else Ti=1<<f|a<<c|r,Ai=e}function nu(e){e.return!==null&&(Bi(e,1),ip(e,1,0))}function iu(e){for(;e===el;)el=Ps[--zs],Ps[zs]=null,kr=Ps[--zs],Ps[zs]=null;for(;e===ga;)ga=si[--ri],si[ri]=null,Ai=si[--ri],si[ri]=null,Ti=si[--ri],si[ri]=null}function ap(e,n){si[ri++]=Ti,si[ri++]=Ai,si[ri++]=ga,Ti=n.id,Ai=n.overflow,ga=e}var En=null,Zt=null,Mt=!1,_a=null,oi=!1,au=Error(s(519));function va(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xr(ai(n,e)),au}function sp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[dn]=r,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)_t(ho[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),jt(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Mn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||ym(n.textContent,a)?(r.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),r.onScroll!=null&&_t("scroll",n),r.onScrollEnd!=null&&_t("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||va(e,!0)}function rp(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:En=En.return}}function Bs(e){if(e!==En)return!1;if(!Mt)return rp(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mf(e.type,e.memoizedProps)),a=!a),a&&Zt&&va(e),rp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Zt=Um(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Zt=Um(e)}else n===27?(n=Zt,La(e.type)?(e=Cf,Cf=null,Zt=e):Zt=n):Zt=En?ci(e.stateNode.nextSibling):null;return!0}function is(){Zt=En=null,Mt=!1}function su(){var e=_a;return e!==null&&(In===null?In=e:In.push.apply(In,e),_a=null),e}function Xr(e){_a===null?_a=[e]:_a.push(e)}var ru=N(null),as=null,Ii=null;function Sa(e,n,a){be(ru,n._currentValue),n._currentValue=a}function Hi(e){e._currentValue=ru.current,ae(ru)}function ou(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function lu(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ou(f.return,a,e),r||(x=null);break e}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ou(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Is(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var E=c.type;Wn(c.pendingProps.value,x.value)||(e!==null?e.push(E):e=[E])}}else if(c===ue.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(_o):e=[_o])}c=c.return}e!==null&&lu(n,e,a,r),n.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return op(as,e)}function nl(e,n){return as===null&&ss(e),op(e,n)}function op(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(s(308));Ii=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ii=Ii.next=n;return a}var R_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},C_=o.unstable_scheduleCallback,w_=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new R_,data:new Map,refCount:0}}function Wr(e){e.refCount--,e.refCount===0&&C_(w_,function(){e.controller.abort()})}var qr=null,uu=0,Hs=0,Gs=null;function D_(e,n){if(qr===null){var a=qr=[];uu=0,Hs=pf(),Gs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return uu++,n.then(lp,lp),n}function lp(){if(--uu===0&&qr!==null){Gs!==null&&(Gs.status="fulfilled");var e=qr;qr=null,Hs=0,Gs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function U_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var cp=O.S;O.S=function(e,n){q0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&D_(e,n),cp!==null&&cp(e,n)};var rs=N(null);function fu(){var e=rs.current;return e!==null?e:Wt.pooledCache}function il(e,n){n===null?be(rs,rs.current):be(rs,n.pool)}function up(){var e=fu();return e===null?null:{parent:on._currentValue,pool:e}}var Vs=Error(s(460)),du=Error(s(474)),al=Error(s(542)),sl={then:function(){}};function fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pp(e),e;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,pp(e),e}throw ls=n,Vs}}function os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ls=a,Vs):a}}var ls=null;function hp(){if(ls===null)throw Error(s(459));var e=ls;return ls=null,e}function pp(e){if(e===Vs||e===al)throw Error(s(483))}var ks=null,jr=0;function rl(e){var n=jr;return jr+=1,ks===null&&(ks=[]),dp(ks,e,n)}function Yr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ol(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function mp(e){function n(Y,V){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function r(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=zi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function x(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function E(Y,V,Q,pe){return V===null||V.tag!==6?(V=eu(Q,Y.mode,pe),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function P(Y,V,Q,pe){var Qe=Q.type;return Qe===C?he(Y,V,Q.props.children,pe,Q.key):V!==null&&(V.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ne&&os(Qe)===V.type)?(V=c(V,Q.props),Yr(V,Q),V.return=Y,V):(V=$o(Q.type,Q.key,Q.props,null,Y.mode,pe),Yr(V,Q),V.return=Y,V)}function J(Y,V,Q,pe){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=tu(Q,Y.mode,pe),V.return=Y,V):(V=c(V,Q.children||[]),V.return=Y,V)}function he(Y,V,Q,pe,Qe){return V===null||V.tag!==7?(V=ns(Q,Y.mode,pe,Qe),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function ge(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=eu(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return Q=$o(V.type,V.key,V.props,null,Y.mode,Q),Yr(Q,V),Q.return=Y,Q;case A:return V=tu(V,Y.mode,Q),V.return=Y,V;case ne:return V=os(V),ge(Y,V,Q)}if(de(V)||ee(V))return V=ns(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return ge(Y,rl(V),Q);if(V.$$typeof===U)return ge(Y,nl(Y,V),Q);ol(Y,V)}return null}function te(Y,V,Q,pe){var Qe=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qe!==null?null:E(Y,V,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===Qe?P(Y,V,Q,pe):null;case A:return Q.key===Qe?J(Y,V,Q,pe):null;case ne:return Q=os(Q),te(Y,V,Q,pe)}if(de(Q)||ee(Q))return Qe!==null?null:he(Y,V,Q,pe,null);if(typeof Q.then=="function")return te(Y,V,rl(Q),pe);if(Q.$$typeof===U)return te(Y,V,nl(Y,Q),pe);ol(Y,Q)}return null}function re(Y,V,Q,pe,Qe){if(typeof pe=="string"&&pe!==""||typeof pe=="number"||typeof pe=="bigint")return Y=Y.get(Q)||null,E(V,Y,""+pe,Qe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case y:return Y=Y.get(pe.key===null?Q:pe.key)||null,P(V,Y,pe,Qe);case A:return Y=Y.get(pe.key===null?Q:pe.key)||null,J(V,Y,pe,Qe);case ne:return pe=os(pe),re(Y,V,Q,pe,Qe)}if(de(pe)||ee(pe))return Y=Y.get(Q)||null,he(V,Y,pe,Qe,null);if(typeof pe.then=="function")return re(Y,V,Q,rl(pe),Qe);if(pe.$$typeof===U)return re(Y,V,Q,nl(V,pe),Qe);ol(V,pe)}return null}function We(Y,V,Q,pe){for(var Qe=null,wt=null,je=V,ht=V=0,St=null;je!==null&&ht<Q.length;ht++){je.index>ht?(St=je,je=null):St=je.sibling;var Dt=te(Y,je,Q[ht],pe);if(Dt===null){je===null&&(je=St);break}e&&je&&Dt.alternate===null&&n(Y,je),V=f(Dt,V,ht),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt,je=St}if(ht===Q.length)return a(Y,je),Mt&&Bi(Y,ht),Qe;if(je===null){for(;ht<Q.length;ht++)je=ge(Y,Q[ht],pe),je!==null&&(V=f(je,V,ht),wt===null?Qe=je:wt.sibling=je,wt=je);return Mt&&Bi(Y,ht),Qe}for(je=r(je);ht<Q.length;ht++)St=re(je,Y,ht,Q[ht],pe),St!==null&&(e&&St.alternate!==null&&je.delete(St.key===null?ht:St.key),V=f(St,V,ht),wt===null?Qe=St:wt.sibling=St,wt=St);return e&&je.forEach(function(Ba){return n(Y,Ba)}),Mt&&Bi(Y,ht),Qe}function et(Y,V,Q,pe){if(Q==null)throw Error(s(151));for(var Qe=null,wt=null,je=V,ht=V=0,St=null,Dt=Q.next();je!==null&&!Dt.done;ht++,Dt=Q.next()){je.index>ht?(St=je,je=null):St=je.sibling;var Ba=te(Y,je,Dt.value,pe);if(Ba===null){je===null&&(je=St);break}e&&je&&Ba.alternate===null&&n(Y,je),V=f(Ba,V,ht),wt===null?Qe=Ba:wt.sibling=Ba,wt=Ba,je=St}if(Dt.done)return a(Y,je),Mt&&Bi(Y,ht),Qe;if(je===null){for(;!Dt.done;ht++,Dt=Q.next())Dt=ge(Y,Dt.value,pe),Dt!==null&&(V=f(Dt,V,ht),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return Mt&&Bi(Y,ht),Qe}for(je=r(je);!Dt.done;ht++,Dt=Q.next())Dt=re(je,Y,ht,Dt.value,pe),Dt!==null&&(e&&Dt.alternate!==null&&je.delete(Dt.key===null?ht:Dt.key),V=f(Dt,V,ht),wt===null?Qe=Dt:wt.sibling=Dt,wt=Dt);return e&&je.forEach(function(Vv){return n(Y,Vv)}),Mt&&Bi(Y,ht),Qe}function Gt(Y,V,Q,pe){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:e:{for(var Qe=Q.key;V!==null;){if(V.key===Qe){if(Qe=Q.type,Qe===C){if(V.tag===7){a(Y,V.sibling),pe=c(V,Q.props.children),pe.return=Y,Y=pe;break e}}else if(V.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ne&&os(Qe)===V.type){a(Y,V.sibling),pe=c(V,Q.props),Yr(pe,Q),pe.return=Y,Y=pe;break e}a(Y,V);break}else n(Y,V);V=V.sibling}Q.type===C?(pe=ns(Q.props.children,Y.mode,pe,Q.key),pe.return=Y,Y=pe):(pe=$o(Q.type,Q.key,Q.props,null,Y.mode,pe),Yr(pe,Q),pe.return=Y,Y=pe)}return x(Y);case A:e:{for(Qe=Q.key;V!==null;){if(V.key===Qe)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),pe=c(V,Q.children||[]),pe.return=Y,Y=pe;break e}else{a(Y,V);break}else n(Y,V);V=V.sibling}pe=tu(Q,Y.mode,pe),pe.return=Y,Y=pe}return x(Y);case ne:return Q=os(Q),Gt(Y,V,Q,pe)}if(de(Q))return We(Y,V,Q,pe);if(ee(Q)){if(Qe=ee(Q),typeof Qe!="function")throw Error(s(150));return Q=Qe.call(Q),et(Y,V,Q,pe)}if(typeof Q.then=="function")return Gt(Y,V,rl(Q),pe);if(Q.$$typeof===U)return Gt(Y,V,nl(Y,Q),pe);ol(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),pe=c(V,Q),pe.return=Y,Y=pe):(a(Y,V),pe=eu(Q,Y.mode,pe),pe.return=Y,Y=pe),x(Y)):a(Y,V)}return function(Y,V,Q,pe){try{jr=0;var Qe=Gt(Y,V,Q,pe);return ks=null,Qe}catch(je){if(je===Vs||je===al)throw je;var wt=qn(29,je,null,Y.mode);return wt.lanes=pe,wt.return=Y,wt}finally{}}}var cs=mp(!0),xp=mp(!1),ba=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Nt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Jo(e),$h(e,null,a),n}return Qo(e,r,n,a),Jo(e)}function Zr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,wr(e,a)}}function mu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xu=!1;function Kr(){if(xu){var e=Gs;if(e!==null)throw e}}function Qr(e,n,a,r){xu=!1;var c=e.updateQueue;ba=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,J=P.next;P.next=null,x===null?f=J:x.next=J,x=P;var he=e.alternate;he!==null&&(he=he.updateQueue,E=he.lastBaseUpdate,E!==x&&(E===null?he.firstBaseUpdate=J:E.next=J,he.lastBaseUpdate=P))}if(f!==null){var ge=c.baseState;x=0,he=J=P=null,E=f;do{var te=E.lane&-536870913,re=te!==E.lane;if(re?(vt&te)===te:(r&te)===te){te!==0&&te===Hs&&(xu=!0),he!==null&&(he=he.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var We=e,et=E;te=n;var Gt=a;switch(et.tag){case 1:if(We=et.payload,typeof We=="function"){ge=We.call(Gt,ge,te);break e}ge=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=et.payload,te=typeof We=="function"?We.call(Gt,ge,te):We,te==null)break e;ge=g({},ge,te);break e;case 2:ba=!0}}te=E.callback,te!==null&&(e.flags|=64,re&&(e.flags|=8192),re=c.callbacks,re===null?c.callbacks=[te]:re.push(te))}else re={lane:te,tag:E.tag,payload:E.payload,callback:E.callback,next:null},he===null?(J=he=re,P=ge):he=he.next=re,x|=te;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;re=E,E=re.next,re.next=null,c.lastBaseUpdate=re,c.shared.pending=null}}while(!0);he===null&&(P=ge),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=he,f===null&&(c.shared.lanes=0),Ca|=x,e.lanes=x,e.memoizedState=ge}}function gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _p(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gp(a[e],n)}var Xs=N(null),ll=N(0);function vp(e,n){e=Zi,be(ll,e),be(Xs,n),Zi=e|n.baseLanes}function gu(){be(ll,Zi),be(Xs,Xs.current)}function _u(){Zi=ll.current,ae(Xs),ae(ll)}var jn=N(null),li=null;function Ea(e){var n=e.alternate;be(nn,nn.current&1),be(jn,e),li===null&&(n===null||Xs.current!==null||n.memoizedState!==null)&&(li=e)}function vu(e){be(nn,nn.current),be(jn,e),li===null&&(li=e)}function Sp(e){e.tag===22?(be(nn,nn.current),be(jn,e),li===null&&(li=e)):Ta()}function Ta(){be(nn,nn.current),be(jn,jn.current)}function Yn(e){ae(jn),li===e&&(li=null),ae(nn)}var nn=N(0);function cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Af(a)||Rf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gi=0,ut=null,It=null,ln=null,ul=!1,Ws=!1,us=!1,fl=0,Jr=0,qs=null,N_=0;function Jt(){throw Error(s(321))}function Su(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function bu(e,n,a,r,c,f){return Gi=f,ut=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?i0:Pu,us=!1,f=a(r,c),us=!1,Ws&&(f=yp(n,a,r,c)),bp(e),f}function bp(e){O.H=to;var n=It!==null&&It.next!==null;if(Gi=0,ln=It=ut=null,ul=!1,Jr=0,qs=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&tl(e)&&(cn=!0))}function yp(e,n,a,r){ut=e;var c=0;do{if(Ws&&(qs=null),Jr=0,Ws=!1,25<=c)throw Error(s(301));if(c+=1,ln=It=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=a0,f=n(a,r)}while(Ws);return f}function L_(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?$r(n):n,e=e.useState()[0],(It!==null?It.memoizedState:null)!==e&&(ut.flags|=1024),n}function yu(){var e=fl!==0;return fl=0,e}function Mu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Eu(e){if(ul){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ul=!1}Gi=0,ln=It=ut=null,Ws=!1,Jr=fl=0,qs=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ut.memoizedState=ln=e:ln=ln.next=e,ln}function an(){if(It===null){var e=ut.alternate;e=e!==null?e.memoizedState:null}else e=It.next;var n=ln===null?ut.memoizedState:ln.next;if(n!==null)ln=n,It=e;else{if(e===null)throw ut.alternate===null?Error(s(467)):Error(s(310));It=e,e={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},ln===null?ut.memoizedState=ln=e:ln=ln.next=e}return ln}function dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $r(e){var n=Jr;return Jr+=1,qs===null&&(qs=[]),e=dp(qs,e,n),n=ut,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?i0:Pu),e}function hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $r(e);if(e.$$typeof===U)return Tn(e)}throw Error(s(438,String(e)))}function Tu(e){var n=null,a=ut.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ut.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=dl(),ut.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function pl(e){var n=an();return Au(n,It,e)}function Au(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=x=null,P=null,J=n,he=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(vt&ge)===ge:(Gi&ge)===ge){var te=J.revertLane;if(te===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===Hs&&(he=!0);else if((Gi&te)===te){J=J.next,te===Hs&&(he=!0);continue}else ge={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=ge,x=f):P=P.next=ge,ut.lanes|=te,Ca|=te;ge=J.action,us&&a(f,ge),f=J.hasEagerState?J.eagerState:a(f,ge)}else te={lane:ge,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(E=P=te,x=f):P=P.next=te,ut.lanes|=ge,Ca|=ge;J=J.next}while(J!==null&&J!==n);if(P===null?x=f:P.next=E,!Wn(f,e.memoizedState)&&(cn=!0,he&&(a=Gs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=P,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ru(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);Wn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Mp(e,n,a){var r=ut,c=an(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Wn((It||c).memoizedState,a);if(x&&(c.memoizedState=a,cn=!0),c=c.queue,Du(Ap.bind(null,r,c,e),[e]),c.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,js(9,{destroy:void 0},Tp.bind(null,r,c,a,n),null),Wt===null)throw Error(s(349));f||(Gi&127)!==0||Ep(r,n,a)}return a}function Ep(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ut.updateQueue,n===null?(n=dl(),ut.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Tp(e,n,a,r){n.value=a,n.getSnapshot=r,Rp(n)&&Cp(e)}function Ap(e,n,a){return a(function(){Rp(n)&&Cp(e)})}function Rp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Cp(e){var n=ts(e,2);n!==null&&Hn(n,e,2)}function Cu(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),us){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function wp(e,n,a,r){return e.baseState=a,Au(e,It,typeof r=="function"?r:Vi)}function O_(e,n,a,r,c){if(gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Dp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Dp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var E=a(c,r),P=O.S;P!==null&&P(x,E),Up(e,n,E)}catch(J){wu(e,n,J)}finally{f!==null&&x.types!==null&&(f.types=x.types),O.T=f}}else try{f=a(c,r),Up(e,n,f)}catch(J){wu(e,n,J)}}function Up(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Np(e,n,r)},function(r){return wu(e,n,r)}):Np(e,n,a)}function Np(e,n,a){n.status="fulfilled",n.value=a,Lp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dp(e,a)))}function wu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Lp(n),n=n.next;while(n!==r)}e.action=null}function Lp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Op(e,n){return n}function Fp(e,n){if(Mt){var a=Wt.formState;if(a!==null){e:{var r=ut;if(Mt){if(Zt){t:{for(var c=Zt,f=oi;c.nodeType!==8;){if(!f){c=null;break t}if(c=ci(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=ci(c.nextSibling),r=c.data==="F!";break e}}va(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Op,lastRenderedState:n},a.queue=r,a=e0.bind(null,ut,r),r.dispatch=a,r=Cu(!1),f=Fu.bind(null,ut,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=O_.bind(null,ut,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Pp(e){var n=an();return zp(n,It,e)}function zp(e,n,a){if(n=Au(e,n,Op)[0],e=pl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=$r(n)}catch(x){throw x===Vs?al:x}else r=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ut.flags|=2048,js(9,{destroy:void 0},F_.bind(null,c,a),null)),[r,f,e]}function F_(e,n){e.action=n}function Bp(e){var n=an(),a=It;if(a!==null)return zp(n,a,e);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function js(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ut.updateQueue,n===null&&(n=dl(),ut.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Ip(){return an().memoizedState}function ml(e,n,a,r){var c=Nn();ut.flags|=e,c.memoizedState=js(1|n,{destroy:void 0},a,r===void 0?null:r)}function xl(e,n,a,r){var c=an();r=r===void 0?null:r;var f=c.memoizedState.inst;It!==null&&r!==null&&Su(r,It.memoizedState.deps)?c.memoizedState=js(n,f,a,r):(ut.flags|=e,c.memoizedState=js(1|n,f,a,r))}function Hp(e,n){ml(8390656,8,e,n)}function Du(e,n){xl(2048,8,e,n)}function P_(e){ut.flags|=4;var n=ut.updateQueue;if(n===null)n=dl(),ut.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Gp(e){var n=an().memoizedState;return P_({ref:n,nextImpl:e}),function(){if((Nt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Vp(e,n){return xl(4,2,e,n)}function kp(e,n){return xl(4,4,e,n)}function Xp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wp(e,n,a){a=a!=null?a.concat([e]):null,xl(4,4,Xp.bind(null,n,e),a)}function Uu(){}function qp(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Su(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function jp(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Su(n,r[1]))return r[0];if(r=e(),us){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[r,n],r}function Nu(e,n,a){return a===void 0||(Gi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Y0(),ut.lanes|=e,Ca|=e,a)}function Yp(e,n,a,r){return Wn(a,n)?a:Xs.current!==null?(e=Nu(e,a,r),Wn(e,n)||(cn=!0),e):(Gi&42)===0||(Gi&1073741824)!==0&&(vt&261930)===0?(cn=!0,e.memoizedState=a):(e=Y0(),ut.lanes|=e,Ca|=e,n)}function Zp(e,n,a,r,c){var f=X.p;X.p=f!==0&&8>f?f:8;var x=O.T,E={};O.T=E,Fu(e,!1,n,a);try{var P=c(),J=O.S;if(J!==null&&J(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var he=U_(P,r);eo(e,n,he,Qn(e))}else eo(e,n,r,Qn(e))}catch(ge){eo(e,n,{then:function(){},status:"rejected",reason:ge},Qn())}finally{X.p=f,x!==null&&E.types!==null&&(x.types=E.types),O.T=x}}function z_(){}function Lu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Kp(e).queue;Zp(e,c,n,W,a===null?z_:function(){return Qp(e),a(r)})}function Kp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Qp(e){var n=Kp(e);n.next===null&&(n=e.alternate.memoizedState),eo(e,n.next.queue,{},Qn())}function Ou(){return Tn(_o)}function Jp(){return an().memoizedState}function $p(){return an().memoizedState}function B_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=ya(a);var r=Ma(n,e,a);r!==null&&(Hn(r,n,a),Zr(r,n,a)),n={cache:cu()},e.payload=n;return}n=n.return}}function I_(e,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gl(e)?t0(n,a):(a=Jc(e,n,a,r),a!==null&&(Hn(a,e,r),n0(a,n,r)))}function e0(e,n,a){var r=Qn();eo(e,n,a,r)}function eo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gl(e))t0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,x))return Qo(e,n,c,0),Wt===null&&Ko(),!1}catch{}finally{}if(a=Jc(e,n,c,r),a!==null)return Hn(a,e,r),n0(a,n,r),!0}return!1}function Fu(e,n,a,r){if(r={lane:2,revertLane:pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gl(e)){if(n)throw Error(s(479))}else n=Jc(e,a,r,2),n!==null&&Hn(n,e,2)}function gl(e){var n=e.alternate;return e===ut||n!==null&&n===ut}function t0(e,n){Ws=ul=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function n0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,wr(e,a)}}var to={readContext:Tn,use:hl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};to.useEffectEvent=Jt;var i0={readContext:Tn,use:hl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Hp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ml(4194308,4,Xp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ml(4194308,4,e,n)},useInsertionEffect:function(e,n){ml(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var r=e();if(us){Be(!0);try{e()}finally{Be(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(us){Be(!0);try{a(n)}finally{Be(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=I_.bind(null,ut,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Cu(e);var n=e.queue,a=e0.bind(null,ut,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Uu,useDeferredValue:function(e,n){var a=Nn();return Nu(a,e,n)},useTransition:function(){var e=Cu(!1);return e=Zp.bind(null,ut,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ut,c=Nn();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(vt&127)!==0||Ep(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Hp(Ap.bind(null,r,f,e),[e]),r.flags|=2048,js(9,{destroy:void 0},Tp.bind(null,r,f,a,n),null),a},useId:function(){var e=Nn(),n=Wt.identifierPrefix;if(Mt){var a=Ai,r=Ti;a=(r&~(1<<32-ze(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=N_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Fp,useActionState:Fp,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fu.bind(null,ut,!0,a),a.dispatch=n,[e,n]},useMemoCache:Tu,useCacheRefresh:function(){return Nn().memoizedState=B_.bind(null,ut)},useEffectEvent:function(e){var n=Nn(),a={impl:e};return n.memoizedState=a,function(){if((Nt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Pu={readContext:Tn,use:hl,useCallback:qp,useContext:Tn,useEffect:Du,useImperativeHandle:Wp,useInsertionEffect:Vp,useLayoutEffect:kp,useMemo:jp,useReducer:pl,useRef:Ip,useState:function(){return pl(Vi)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=an();return Yp(a,It.memoizedState,e,n)},useTransition:function(){var e=pl(Vi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Mp,useId:Jp,useHostTransitionStatus:Ou,useFormState:Pp,useActionState:Pp,useOptimistic:function(e,n){var a=an();return wp(a,It,e,n)},useMemoCache:Tu,useCacheRefresh:$p};Pu.useEffectEvent=Gp;var a0={readContext:Tn,use:hl,useCallback:qp,useContext:Tn,useEffect:Du,useImperativeHandle:Wp,useInsertionEffect:Vp,useLayoutEffect:kp,useMemo:jp,useReducer:Ru,useRef:Ip,useState:function(){return Ru(Vi)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=an();return It===null?Nu(a,e,n):Yp(a,It.memoizedState,e,n)},useTransition:function(){var e=Ru(Vi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:$r(e),n]},useSyncExternalStore:Mp,useId:Jp,useHostTransitionStatus:Ou,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,n){var a=an();return It!==null?wp(a,It,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:$p};a0.useEffectEvent=Gp;function zu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Qn(),c=ya(r);c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,r),n!==null&&(Hn(n,e,r),Zr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Qn(),c=ya(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,r),n!==null&&(Hn(n,e,r),Zr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),r=ya(a);r.tag=2,n!=null&&(r.callback=n),n=Ma(e,r,a),n!==null&&(Hn(n,e,a),Zr(n,e,a))}};function s0(e,n,a,r,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!Gr(a,r)||!Gr(c,f):!0}function r0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Bu.enqueueReplaceState(n,n.state,null)}function fs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function o0(e){Zo(e)}function l0(e){console.error(e)}function c0(e){Zo(e)}function _l(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function u0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Iu(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(e,n)},a}function f0(e){return e=ya(e),e.tag=3,e}function d0(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){u0(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){u0(n,a,r),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function H_(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Dl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),ff(e,r,c)),!1;case 22:return a.flags|=65536,r===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),ff(e,r,c)),!1}throw Error(s(435,a.tag))}return ff(e,r,c),Dl(),!1}if(Mt)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==au&&(e=Error(s(422),{cause:r}),Xr(ai(e,a)))):(r!==au&&(n=Error(s(423),{cause:r}),Xr(ai(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=ai(r,a),c=Iu(e.stateNode,r,c),mu(e,c),$t!==4&&($t=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),co===null?co=[f]:co.push(f),$t!==4&&($t=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Iu(a.stateNode,r,e),mu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=f0(c),d0(c,e,a,r),mu(a,c),!1}a=a.return}while(a!==null);return!1}var Hu=Error(s(461)),cn=!1;function An(e,n,a,r){n.child=e===null?xp(n,null,a,r):cs(n,e.child,a,r)}function h0(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var E in r)E!=="ref"&&(x[E]=r[E])}else x=r;return ss(n),r=bu(e,n,a,x,f,c),E=yu(),e!==null&&!cn?(Mu(e,n,c),ki(e,n,c)):(Mt&&E&&nu(n),n.flags|=1,An(e,n,r,c),n.child)}function p0(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!$c(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,m0(e,n,f,r,c)):(e=$o(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Yu(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Gr,a(x,r)&&e.ref===n.ref)return ki(e,n,c)}return n.flags|=1,e=zi(f,r),e.ref=n.ref,e.return=n,n.child=e}function m0(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Gr(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,Yu(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,ki(e,n,c)}return Gu(e,n,a,r,c)}function x0(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return g0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&il(n,f!==null?f.cachePool:null),f!==null?vp(n,f):gu(),Sp(n);else return r=n.lanes=536870912,g0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(il(n,f.cachePool),vp(n,f),Ta(),n.memoizedState=null):(e!==null&&il(n,null),gu(),Ta());return An(e,n,c,a),n.child}function no(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function g0(e,n,a,r,c){var f=fu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&il(n,null),gu(),Sp(n),e!==null&&Is(e,n,r,!0),n.childLanes=c,null}function vl(e,n){return n=bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _0(e,n,a){return cs(n,e.child,null,a),e=vl(n,n.pendingProps),e.flags|=2,Yn(n),n.memoizedState=null,e}function G_(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(r.mode==="hidden")return e=vl(n,r),n.lanes=536870912,no(null,e);if(vu(n),(e=Zt)?(e=Dm(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=tp(e),a.return=n,n.child=a,En=n,Zt=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return vl(n,r)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(vu(n),c)if(n.flags&256)n.flags&=-257,n=_0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Is(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(r=Wt,r!==null&&(x=Dr(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ts(e,x),Hn(r,e,x),Hu;Dl(),n=_0(e,n,a)}else e=f.treeContext,Zt=ci(x.nextSibling),En=n,Mt=!0,_a=null,oi=!1,e!==null&&ap(n,e),n=vl(n,r),n.flags|=4096;return n}return e=zi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Sl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Gu(e,n,a,r,c){return ss(n),a=bu(e,n,a,r,void 0,c),r=yu(),e!==null&&!cn?(Mu(e,n,c),ki(e,n,c)):(Mt&&r&&nu(n),n.flags|=1,An(e,n,a,c),n.child)}function v0(e,n,a,r,c,f){return ss(n),n.updateQueue=null,a=yp(n,r,a,c),bp(e),r=yu(),e!==null&&!cn?(Mu(e,n,f),ki(e,n,f)):(Mt&&r&&nu(n),n.flags|=1,An(e,n,a,f),n.child)}function S0(e,n,a,r,c){if(ss(n),n.stateNode===null){var f=Fs,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},hu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):Fs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(zu(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Bu.enqueueReplaceState(f,f.state,null),Qr(n,r,f,c),Kr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,P=fs(a,E);f.props=P;var J=f.context,he=a.contextType;x=Fs,typeof he=="object"&&he!==null&&(x=Tn(he));var ge=a.getDerivedStateFromProps;he=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==x)&&r0(n,f,r,x),ba=!1;var te=n.memoizedState;f.state=te,Qr(n,r,f,c),Kr(),J=n.memoizedState,E||te!==J||ba?(typeof ge=="function"&&(zu(n,a,ge,r),J=n.memoizedState),(P=ba||s0(n,a,P,r,te,J,x))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=x,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,pu(e,n),x=n.memoizedProps,he=fs(a,x),f.props=he,ge=n.pendingProps,te=f.context,J=a.contextType,P=Fs,typeof J=="object"&&J!==null&&(P=Tn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ge||te!==P)&&r0(n,f,r,P),ba=!1,te=n.memoizedState,f.state=te,Qr(n,r,f,c),Kr();var re=n.memoizedState;x!==ge||te!==re||ba||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof E=="function"&&(zu(n,a,E,r),re=n.memoizedState),(he=ba||s0(n,a,he,r,te,re,P)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,re,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,re,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=re),f.props=r,f.state=re,f.context=P,r=he):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Sl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=cs(n,e.child,null,c),n.child=cs(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=ki(e,n,c),e}function b0(e,n,a,r){return is(),n.flags|=256,An(e,n,a,r),n.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(e){return{baseLanes:e,cachePool:up()}}function Xu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function y0(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(c?Ea(n):Ta(),(e=Zt)?(e=Dm(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=tp(e),a.return=n,n.child=a,En=n,Zt=null)):e=null,e===null)throw va(n);return Rf(e)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(Ta(),c=n.mode,E=bl({mode:"hidden",children:E},c),r=ns(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=ku(a),r.childLanes=Xu(e,x,a),n.memoizedState=Vu,no(null,r)):(Ea(n),Wu(n,E))}var P=e.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=qu(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),E=r.fallback,c=n.mode,r=bl({mode:"visible",children:r.children},c),E=ns(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,cs(n,e.child,null,a),r=n.child,r.memoizedState=ku(a),r.childLanes=Xu(e,x,a),n.memoizedState=Vu,n=no(null,r));else if(Ea(n),Rf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var J=x.dgst;x=J,r=Error(s(419)),r.stack="",r.digest=x,Xr({value:r,source:null,stack:null}),n=qu(e,n,a)}else if(cn||Is(e,n,a,!1),x=(a&e.childLanes)!==0,cn||x){if(x=Wt,x!==null&&(r=Dr(x,a),r!==0&&r!==P.retryLane))throw P.retryLane=r,ts(e,r),Hn(x,e,r),Hu;Af(E)||Dl(),n=qu(e,n,a)}else Af(E)?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Zt=ci(E.nextSibling),En=n,Mt=!0,_a=null,oi=!1,e!==null&&ap(n,e),n=Wu(n,r.children),n.flags|=4096);return n}return c?(Ta(),E=r.fallback,c=n.mode,P=e.child,J=P.sibling,r=zi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,J!==null?E=zi(J,E):(E=ns(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,no(null,r),r=n.child,E=e.child.memoizedState,E===null?E=ku(a):(c=E.cachePool,c!==null?(P=on._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=up(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Xu(e,x,a),n.memoizedState=Vu,no(e.child,r)):(Ea(n),a=e.child,e=a.sibling,a=zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Wu(e,n){return n=bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function bl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function qu(e,n,a){return cs(n,e.child,null,a),e=Wu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function M0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ou(e.return,n,a)}function ju(e,n,a,r,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function E0(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var x=nn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,be(nn,x),An(e,n,r,a),r=Mt?kr:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,a,n);else if(e.tag===19)M0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&cl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ju(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&cl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ju(n,!0,a,null,f,r);break;case"together":ju(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Is(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function V_(e,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Sa(n,on,e.memoizedState.cache),is();break;case 27:case 5:qe(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?y0(e,n,a):(Ea(n),e=ki(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Is(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return E0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),be(nn,nn.current),r)break;return null;case 22:return n.lanes=0,x0(e,n,a,n.pendingProps);case 24:Sa(n,on,e.memoizedState.cache)}return ki(e,n,a)}function T0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Yu(e,a)&&(n.flags&128)===0)return cn=!1,V_(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Mt&&(n.flags&1048576)!==0&&ip(n,kr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=os(n.elementType),n.type=e,typeof e=="function")$c(e)?(r=fs(e,r),n.tag=1,n=S0(null,n,e,r,a)):(n.tag=0,n=Gu(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===B){n.tag=11,n=h0(null,n,e,r,a);break e}else if(c===F){n.tag=14,n=p0(null,n,e,r,a);break e}}throw n=xe(e)||e,Error(s(306,n,""))}}return n;case 0:return Gu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=fs(r,n.pendingProps),S0(e,n,r,c,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,pu(e,n),Qr(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Sa(n,on,r),r!==f.cache&&lu(n,[on],a,!0),Kr(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=b0(e,n,r,a);break e}else if(r!==c){c=ai(Error(s(424)),n),Xr(c),n=b0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Zt=ci(e.firstChild),En=n,Mt=!0,_a=null,oi=!0,a=xp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(is(),r===c){n=ki(e,n,a);break e}An(e,n,r,a)}n=n.child}return n;case 26:return Sl(e,n),e===null?(a=Pm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,r=zl(ie.current).createElement(a),r[rn]=n,r[dn]=e,Rn(r,a,e),$(r),n.stateNode=r):n.memoizedState=Pm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qe(n),e===null&&Mt&&(r=n.stateNode=Lm(n.type,n.pendingProps,ie.current),En=n,oi=!0,c=Zt,La(n.type)?(Cf=c,Zt=ci(r.firstChild)):Zt=c),An(e,n,n.pendingProps.children,a),Sl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((c=r=Zt)&&(r=_v(r,n.type,n.pendingProps,oi),r!==null?(n.stateNode=r,En=n,Zt=ci(r.firstChild),oi=!1,c=!0):c=!1),c||va(n)),qe(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,Mf(c,f)?r=null:x!==null&&Mf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=bu(e,n,L_,null,null,a),_o._currentValue=c),Sl(e,n),An(e,n,r,a),n.child;case 6:return e===null&&Mt&&((e=a=Zt)&&(a=vv(a,n.pendingProps,oi),a!==null?(n.stateNode=a,En=n,Zt=null,e=!0):e=!1),e||va(n)),null;case 13:return y0(e,n,a);case 4:return Ce(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=cs(n,null,r,a):An(e,n,r,a),n.child;case 11:return h0(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Sa(n,n.type,r.value),An(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ss(n),c=Tn(c),r=r(c),n.flags|=1,An(e,n,r,a),n.child;case 14:return p0(e,n,n.type,n.pendingProps,a);case 15:return m0(e,n,n.type,n.pendingProps,a);case 19:return E0(e,n,a);case 31:return G_(e,n,a);case 22:return x0(e,n,a,n.pendingProps);case 24:return ss(n),r=Tn(on),e===null?(c=fu(),c===null&&(c=Wt,f=cu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},hu(n),Sa(n,on,c)):((e.lanes&a)!==0&&(pu(e,n),Qr(n,null,null,a),Kr()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,on,r)):(r=f.cache,Sa(n,on,r),r!==c.cache&&lu(n,[on],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Xi(e){e.flags|=4}function Zu(e,n,a,r,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(J0())e.flags|=8192;else throw ls=sl,du}else e.flags&=-16777217}function A0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gm(n))if(J0())e.flags|=8192;else throw ls=sl,du}function yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,Qs|=n)}function io(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function k_(e,n,a){var r=n.pendingProps;switch(iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Hi(on),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bs(n)?Xi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,su())),Kt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Xi(n),f!==null?(Kt(n),A0(n,f)):(Kt(n),Zu(n,c,null,r,a))):f?f!==e.memoizedState?(Xi(n),Kt(n),A0(n,f)):(Kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Xi(n),Kt(n),Zu(n,c,e,r,a)),null;case 27:if(rt(n),a=ie.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}e=Ae.current,Bs(n)?sp(n):(e=Lm(c,r,a),n.stateNode=e,Xi(n))}return Kt(n),null;case 5:if(rt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Kt(n),null}if(f=Ae.current,Bs(n))sp(n);else{var x=zl(ie.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}f[rn]=n,f[dn]=r;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Rn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Xi(n)}}return Kt(n),Zu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Xi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ie.current,Bs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ym(e.nodeValue,a)),e||va(n,!0)}else e=zl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Bs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),e=!1}else a=su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Kt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Bs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else c=su(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Kt(n),null);case 4:return Ie(),e===null&&_f(n.stateNode.containerInfo),Kt(n),null;case 10:return Hi(n.type),Kt(n),null;case 19:if(ae(nn),r=n.memoizedState,r===null)return Kt(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)io(r,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=cl(e),f!==null){for(n.flags|=128,io(r,!1),e=f.updateQueue,n.updateQueue=e,yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)ep(a,e),a=a.sibling;return be(nn,nn.current&1|2),Mt&&Bi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Rl&&(n.flags|=128,c=!0,io(r,!1),n.lanes=4194304)}else{if(!c)if(e=cl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,yl(n,e),io(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Mt)return Kt(n),null}else 2*M()-r.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,c=!0,io(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=nn.current,be(nn,c?a&1|2:a&1),Mt&&Bi(n,r.treeForkCount),e):(Kt(n),null);case 22:case 23:return Yn(n),_u(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ae(rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Hi(on),Kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function X_(e,n){switch(iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Hi(on),Ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return rt(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(s(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Yn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));is()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(nn),null;case 4:return Ie(),null;case 10:return Hi(n.type),null;case 22:case 23:return Yn(n),_u(),e!==null&&ae(rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Hi(on),null;case 25:return null;default:return null}}function R0(e,n){switch(iu(n),n.tag){case 3:Hi(on),Ie();break;case 26:case 27:case 5:rt(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:ae(nn);break;case 10:Hi(n.type);break;case 22:case 23:Yn(n),_u(),e!==null&&ae(rs);break;case 24:Hi(on)}}function ao(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==c)}}catch(E){zt(n,n.return,E)}}function Aa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var x=r.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var P=a,J=E;try{J()}catch(he){zt(c,P,he)}}}r=r.next}while(r!==f)}}catch(he){zt(n,n.return,he)}}function C0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_p(n,a)}catch(r){zt(e,e.return,r)}}}function w0(e,n,a){a.props=fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){zt(e,n,r)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){zt(e,n,c)}}function Ri(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){zt(e,n,c)}else a.current=null}function D0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){zt(e,e.return,c)}}function Ku(e,n,a){try{var r=e.stateNode;dv(r,e.type,a,n),r[dn]=n}catch(c){zt(e,e.return,c)}}function U0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function Qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||U0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ju(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(r!==4&&(r===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ju(e,n,a),e=e.sibling;e!==null;)Ju(e,n,a),e=e.sibling}function Ml(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}function N0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,r,a),n[rn]=e,n[dn]=a}catch(f){zt(e,e.return,f)}}var Wi=!1,un=!1,$u=!1,L0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function W_(e,n){if(e=e.containerInfo,bf=Xl,e=Wh(e),qc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,E=-1,P=-1,J=0,he=0,ge=e,te=null;t:for(;;){for(var re;ge!==a||c!==0&&ge.nodeType!==3||(E=x+c),ge!==f||r!==0&&ge.nodeType!==3||(P=x+r),ge.nodeType===3&&(x+=ge.nodeValue.length),(re=ge.firstChild)!==null;)te=ge,ge=re;for(;;){if(ge===e)break t;if(te===a&&++J===c&&(E=x),te===f&&++he===r&&(P=x),(re=ge.nextSibling)!==null)break;ge=te,te=ge.parentNode}ge=re}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:e,selectionRange:a},Xl=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var We=fs(a.type,c);e=r.getSnapshotBeforeUpdate(We,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){zt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Tf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function O0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),r&4&&ao(5,a);break;case 1:if(ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){zt(a,a.return,x)}else{var c=fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){zt(a,a.return,x)}}r&64&&C0(a),r&512&&so(a,a.return);break;case 3:if(ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_p(e,n)}catch(x){zt(a,a.return,x)}}break;case 27:n===null&&r&4&&N0(a);case 26:case 5:ji(e,a),n===null&&r&4&&D0(a),r&512&&so(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),r&4&&z0(e,a);break;case 13:ji(e,a),r&4&&B0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ev.bind(null,a),Sv(e,a))));break;case 22:if(r=a.memoizedState!==null||Wi,!r){n=n!==null&&n.memoizedState!==null||un,c=Wi;var f=un;Wi=r,(un=n)&&!f?Yi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Wi=c,un=f}break;case 30:break;default:ji(e,a)}}function F0(e){var n=e.alternate;n!==null&&(e.alternate=null,F0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Lr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qt=null,Pn=!1;function qi(e,n,a){for(a=a.child;a!==null;)P0(e,n,a),a=a.sibling}function P0(e,n,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(ve,a)}catch{}switch(a.tag){case 26:un||Ri(a,n),qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ri(a,n);var r=Qt,c=Pn;La(a.type)&&(Qt=a.stateNode,Pn=!1),qi(e,n,a),mo(a.stateNode),Qt=r,Pn=c;break;case 5:un||Ri(a,n);case 6:if(r=Qt,c=Pn,Qt=null,qi(e,n,a),Qt=r,Pn=c,Qt!==null)if(Pn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Qt!==null&&(Pn?(e=Qt,Cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),sr(e)):Cm(Qt,a.stateNode));break;case 4:r=Qt,c=Pn,Qt=a.stateNode.containerInfo,Pn=!0,qi(e,n,a),Qt=r,Pn=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),un||Aa(4,a,n),qi(e,n,a);break;case 1:un||(Ri(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&w0(a,n,r)),qi(e,n,a);break;case 21:qi(e,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,qi(e,n,a),un=r;break;default:qi(e,n,a)}}function z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{sr(e)}catch(a){zt(n,n.return,a)}}}function B0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{sr(e)}catch(a){zt(n,n.return,a)}}function q_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new L0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new L0),n;default:throw Error(s(435,e.tag))}}function El(e,n){var a=q_(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=tv.bind(null,e,r);r.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,x=n,E=x;e:for(;E!==null;){switch(E.tag){case 27:if(La(E.type)){Qt=E.stateNode,Pn=!1;break e}break;case 5:Qt=E.stateNode,Pn=!1;break e;case 3:case 4:Qt=E.stateNode.containerInfo,Pn=!0;break e}E=E.return}if(Qt===null)throw Error(s(160));P0(f,x,c),Qt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)I0(n,e),n=n.sibling}var mi=null;function I0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Bn(e),r&4&&(Aa(3,e,e.return),ao(3,e),Aa(5,e,e.return));break;case 1:zn(n,e),Bn(e),r&512&&(un||a===null||Ri(a,a.return)),r&64&&Wi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=mi;if(zn(n,e),Bn(e),r&512&&(un||a===null||Ri(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,r,a),f[rn]=e,$(f),r=f;break e;case"link":var x=Im("link","href",c).get(r+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break t}}f=c.createElement(r),Rn(f,r,a),c.head.appendChild(f);break;case"meta":if(x=Im("meta","content",c).get(r+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break t}}f=c.createElement(r),Rn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,$(f),r=f}e.stateNode=r}else Hm(c,e.type,e.stateNode);else e.stateNode=Bm(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Hm(c,e.type,e.stateNode):Bm(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Ku(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Bn(e),r&512&&(un||a===null||Ri(a,a.return)),a!==null&&r&4&&Ku(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Bn(e),r&512&&(un||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Ei(c,"")}catch(We){zt(e,e.return,We)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Ku(e,c,a!==null?a.memoizedProps:c)),r&1024&&($u=!0);break;case 6:if(zn(n,e),Bn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(We){zt(e,e.return,We)}}break;case 3:if(Hl=null,c=mi,mi=Bl(n.containerInfo),zn(n,e),mi=c,Bn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{sr(n.containerInfo)}catch(We){zt(e,e.return,We)}$u&&($u=!1,H0(e));break;case 4:r=mi,mi=Bl(e.stateNode.containerInfo),zn(n,e),Bn(e),mi=r;break;case 12:zn(n,e),Bn(e);break;case 31:zn(n,e),Bn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 13:zn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=Wi,he=un;if(Wi=J||c,un=he||P,zn(n,e),un=he,Wi=J,Bn(e),r&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Wi||un||ds(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=P.stateNode;var ge=P.memoizedProps.style,te=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;E.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(We){zt(P,P.return,We)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(We){zt(P,P.return,We)}}}else if(n.tag===18){if(a===null){P=n;try{var re=P.stateNode;c?wm(re,!0):wm(P.stateNode,!1)}catch(We){zt(P,P.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,El(e,a))));break;case 19:zn(n,e),Bn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,El(e,r)));break;case 30:break;case 21:break;default:zn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(U0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Qu(e);Ml(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ei(x,""),a.flags&=-33);var E=Qu(e);Ml(e,E,x);break;case 3:case 4:var P=a.stateNode.containerInfo,J=Qu(e);Ju(e,J,P);break;default:throw Error(s(161))}}catch(he){zt(e,e.return,he)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function H0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;H0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)O0(e,n.alternate,n),n=n.sibling}function ds(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),ds(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&w0(n,n.return,a),ds(n);break;case 27:mo(n.stateNode);case 26:case 5:Ri(n,n.return),ds(n);break;case 22:n.memoizedState===null&&ds(n);break;case 30:ds(n);break;default:ds(n)}e=e.sibling}}function Yi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Yi(c,f,a),ao(4,f);break;case 1:if(Yi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){zt(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)gp(P[c],E)}catch(J){zt(r,r.return,J)}}a&&x&64&&C0(f),so(f,f.return);break;case 27:N0(f);case 26:case 5:Yi(c,f,a),a&&r===null&&x&4&&D0(f),so(f,f.return);break;case 12:Yi(c,f,a);break;case 31:Yi(c,f,a),a&&x&4&&z0(c,f);break;case 13:Yi(c,f,a),a&&x&4&&B0(c,f);break;case 22:f.memoizedState===null&&Yi(c,f,a),so(f,f.return);break;case 30:break;default:Yi(c,f,a)}n=n.sibling}}function ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wr(a))}function tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e))}function xi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)G0(e,n,a,r),n=n.sibling}function G0(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,r),c&2048&&ao(9,n);break;case 1:xi(e,n,a,r);break;case 3:xi(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Wr(e)));break;case 12:if(c&2048){xi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){zt(n,n.return,P)}}else xi(e,n,a,r);break;case 31:xi(e,n,a,r);break;case 13:xi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,r):ro(e,n):f._visibility&2?xi(e,n,a,r):(f._visibility|=2,Ys(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ef(x,n);break;case 24:xi(e,n,a,r),c&2048&&tf(n.alternate,n);break;default:xi(e,n,a,r)}}function Ys(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,E=a,P=r,J=x.flags;switch(x.tag){case 0:case 11:case 15:Ys(f,x,E,P,c),ao(8,x);break;case 23:break;case 22:var he=x.stateNode;x.memoizedState!==null?he._visibility&2?Ys(f,x,E,P,c):ro(f,x):(he._visibility|=2,Ys(f,x,E,P,c)),c&&J&2048&&ef(x.alternate,x);break;case 24:Ys(f,x,E,P,c),c&&J&2048&&tf(x.alternate,x);break;default:Ys(f,x,E,P,c)}n=n.sibling}}function ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ro(a,r),c&2048&&ef(r.alternate,r);break;case 24:ro(a,r),c&2048&&tf(r.alternate,r);break;default:ro(a,r)}n=n.sibling}}var oo=8192;function Zs(e,n,a){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)V0(e,n,a),e=e.sibling}function V0(e,n,a){switch(e.tag){case 26:Zs(e,n,a),e.flags&oo&&e.memoizedState!==null&&Nv(a,mi,e.memoizedState,e.memoizedProps);break;case 5:Zs(e,n,a);break;case 3:case 4:var r=mi;mi=Bl(e.stateNode.containerInfo),Zs(e,n,a),mi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=oo,oo=16777216,Zs(e,n,a),oo=r):Zs(e,n,a));break;default:Zs(e,n,a)}}function k0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,W0(r,e)}k0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)X0(e),e=e.sibling}function X0(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Tl(e)):lo(e);break;default:lo(e)}}function Tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,W0(r,e)}k0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Tl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Tl(n));break;default:Tl(n)}e=e.sibling}}function W0(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Wr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var c=r.sibling,f=r.return;if(F0(r),r===a){bn=null;break e}if(c!==null){c.return=f,bn=c;break e}bn=f}}}var j_={getCacheForType:function(e){var n=Tn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},Y_=typeof WeakMap=="function"?WeakMap:Map,Nt=0,Wt=null,gt=null,vt=0,Pt=0,Zn=null,Ra=!1,Ks=!1,nf=!1,Zi=0,$t=0,Ca=0,hs=0,af=0,Kn=0,Qs=0,co=null,In=null,sf=!1,Al=0,q0=0,Rl=1/0,Cl=null,wa=null,pn=0,Da=null,Js=null,Ki=0,rf=0,of=null,j0=null,uo=0,lf=null;function Qn(){return(Nt&2)!==0&&vt!==0?vt&-vt:O.T!==null?pf():Ur()}function Y0(){if(Kn===0)if((vt&536870912)===0||Mt){var e=we;we<<=1,(we&3932160)===0&&(we=262144),Kn=e}else Kn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Kn}function Hn(e,n,a){(e===Wt&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)&&($s(e,0),Ua(e,vt,Kn,!1)),Cn(e,a),((Nt&2)===0||e!==Wt)&&(e===Wt&&((Nt&2)===0&&(hs|=a),$t===4&&Ua(e,vt,Kn,!1)),Ci(e))}function Z0(e,n,a){if((Nt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ve(e,n),c=r?Q_(e,n):uf(e,n,!0),f=r;do{if(c===0){Ks&&!r&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Z_(a)){c=uf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var E=e;c=co;var P=E.current.memoizedState.isDehydrated;if(P&&($s(E,x).flags|=256),x=uf(E,x,!1),x!==2){if(nf&&!P){E.errorRecoveryDisabledLanes|=f,hs|=f,c=4;break e}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){$s(e,0),Ua(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ua(r,n,Kn,!Ra);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Al+300-M(),10<c)){if(Ua(r,n,Kn,!Ra),Se(r,0,!0)!==0)break e;Ki=n,r.timeoutHandle=Am(K0.bind(null,r,a,In,Cl,sf,n,Kn,hs,Qs,Ra,f,"Throttled",-0,0),c);break e}K0(r,a,In,Cl,sf,n,Kn,hs,Qs,Ra,f,null,-0,0)}}break}while(!0);Ci(e)}function K0(e,n,a,r,c,f,x,E,P,J,he,ge,te,re){if(e.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},V0(n,f,ge);var We=(f&62914560)===f?Al-M():(f&4194048)===f?q0-M():0;if(We=Lv(ge,We),We!==null){Ki=f,e.cancelPendingCommit=We(am.bind(null,e,n,f,a,r,c,x,E,P,he,ge,null,te,re)),Ua(e,f,x,!J);return}}am(e,n,f,a,r,c,x,E,P)}function Z_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,r){n&=~af,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-ze(c),x=1<<f;r[f]=-1,c&=~x}a!==0&&Ho(e,a,n)}function wl(){return(Nt&6)===0?(fo(0),!1):!0}function cf(){if(gt!==null){if(Pt===0)var e=gt.return;else e=gt,Ii=as=null,Eu(e),ks=null,jr=0,e=gt;for(;e!==null;)R0(e.alternate,e),e=e.return;gt=null}}function $s(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,mv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ki=0,cf(),Wt=e,gt=a=zi(e.current,null),vt=n,Pt=0,Zn=null,Ra=!1,Ks=Ve(e,n),nf=!1,Qs=Kn=af=hs=Ca=$t=0,In=co=null,sf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-ze(r),f=1<<c;n|=e[c],r&=~f}return Zi=n,Ko(),a}function Q0(e,n){ut=null,O.H=to,n===Vs||n===al?(n=hp(),Pt=3):n===du?(n=hp(),Pt=4):Pt=n===Hu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,gt===null&&($t=1,_l(e,ai(n,e.current)))}function J0(){var e=jn.current;return e===null?!0:(vt&4194048)===vt?li===null:(vt&62914560)===vt||(vt&536870912)!==0?e===li:!1}function $0(){var e=O.H;return O.H=to,e===null?to:e}function em(){var e=O.A;return O.A=j_,e}function Dl(){$t=4,Ra||(vt&4194048)!==vt&&jn.current!==null||(Ks=!0),(Ca&134217727)===0&&(hs&134217727)===0||Wt===null||Ua(Wt,vt,Kn,!1)}function uf(e,n,a){var r=Nt;Nt|=2;var c=$0(),f=em();(Wt!==e||vt!==n)&&(Cl=null,$s(e,n)),n=!1;var x=$t;e:do try{if(Pt!==0&&gt!==null){var E=gt,P=Zn;switch(Pt){case 8:cf(),x=6;break e;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var J=Pt;if(Pt=0,Zn=null,er(e,E,P,J),a&&Ks){x=0;break e}break;default:J=Pt,Pt=0,Zn=null,er(e,E,P,J)}}K_(),x=$t;break}catch(he){Q0(e,he)}while(!0);return n&&e.shellSuspendCounter++,Ii=as=null,Nt=r,O.H=c,O.A=f,gt===null&&(Wt=null,vt=0,Ko()),x}function K_(){for(;gt!==null;)tm(gt)}function Q_(e,n){var a=Nt;Nt|=2;var r=$0(),c=em();Wt!==e||vt!==n?(Cl=null,Rl=M()+500,$s(e,n)):Ks=Ve(e,n);e:do try{if(Pt!==0&&gt!==null){n=gt;var f=Zn;t:switch(Pt){case 1:Pt=0,Zn=null,er(e,n,f,1);break;case 2:case 9:if(fp(f)){Pt=0,Zn=null,nm(n);break}n=function(){Pt!==2&&Pt!==9||Wt!==e||(Pt=7),Ci(e)},f.then(n,n);break e;case 3:Pt=7;break e;case 4:Pt=5;break e;case 7:fp(f)?(Pt=0,Zn=null,nm(n)):(Pt=0,Zn=null,er(e,n,f,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var E=gt;if(x?Gm(x):E.stateNode.complete){Pt=0,Zn=null;var P=E.sibling;if(P!==null)gt=P;else{var J=E.return;J!==null?(gt=J,Ul(J)):gt=null}break t}}Pt=0,Zn=null,er(e,n,f,5);break;case 6:Pt=0,Zn=null,er(e,n,f,6);break;case 8:cf(),$t=6;break e;default:throw Error(s(462))}}J_();break}catch(he){Q0(e,he)}while(!0);return Ii=as=null,O.H=r,O.A=c,Nt=a,gt!==null?0:(Wt=null,vt=0,Ko(),$t)}function J_(){for(;gt!==null&&!nt();)tm(gt)}function tm(e){var n=T0(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Ul(e):gt=n}function nm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=v0(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=v0(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Eu(n);default:R0(a,n),n=gt=ep(n,Zi),n=T0(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Ul(e):gt=n}function er(e,n,a,r){Ii=as=null,Eu(n),ks=null,jr=0;var c=n.return;try{if(H_(e,c,n,a,vt)){$t=1,_l(e,ai(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;$t=1,_l(e,ai(a,e.current)),gt=null;return}n.flags&32768?(Mt||r===1?e=!0:Ks||(vt&536870912)!==0?e=!1:(Ra=e=!0,(r===2||r===9||r===3||r===6)&&(r=jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),im(n,e)):Ul(n)}function Ul(e){var n=e;do{if((n.flags&32768)!==0){im(n,Ra);return}e=n.return;var a=k_(n.alternate,n,Zi);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function im(e,n){do{var a=X_(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function am(e,n,a,r,c,f,x,E,P){e.cancelPendingCommit=null;do Nl();while(pn!==0);if((Nt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Qc,kn(e,a,f,x,E,P),e===Wt&&(gt=Wt=null,vt=0),Js=n,Da=e,Ki=a,rf=f,of=c,j0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,nv(ce,function(){return cm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,c=X.p,X.p=2,x=Nt,Nt|=4;try{W_(e,n,a)}finally{Nt=x,X.p=c,O.T=r}}pn=1,sm(),rm(),om()}}function sm(){if(pn===1){pn=0;var e=Da,n=Js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=X.p;X.p=2;var c=Nt;Nt|=4;try{I0(n,e);var f=yf,x=Wh(e.containerInfo),E=f.focusedElem,P=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Xh(E.ownerDocument.documentElement,E)){if(P!==null&&qc(E)){var J=P.start,he=P.end;if(he===void 0&&(he=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(he,E.value.length);else{var ge=E.ownerDocument||document,te=ge&&ge.defaultView||window;if(te.getSelection){var re=te.getSelection(),We=E.textContent.length,et=Math.min(P.start,We),Gt=P.end===void 0?et:Math.min(P.end,We);!re.extend&&et>Gt&&(x=Gt,Gt=et,et=x);var Y=kh(E,et),V=kh(E,Gt);if(Y&&V&&(re.rangeCount!==1||re.anchorNode!==Y.node||re.anchorOffset!==Y.offset||re.focusNode!==V.node||re.focusOffset!==V.offset)){var Q=ge.createRange();Q.setStart(Y.node,Y.offset),re.removeAllRanges(),et>Gt?(re.addRange(Q),re.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),re.addRange(Q))}}}}for(ge=[],re=E;re=re.parentNode;)re.nodeType===1&&ge.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ge.length;E++){var pe=ge[E];pe.element.scrollLeft=pe.left,pe.element.scrollTop=pe.top}}Xl=!!bf,yf=bf=null}finally{Nt=c,X.p=r,O.T=a}}e.current=n,pn=2}}function rm(){if(pn===2){pn=0;var e=Da,n=Js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=X.p;X.p=2;var c=Nt;Nt|=4;try{O0(e,n.alternate,n)}finally{Nt=c,X.p=r,O.T=a}}pn=3}}function om(){if(pn===4||pn===3){pn=0,D();var e=Da,n=Js,a=Ki,r=j0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,Js=Da=null,lm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(wa=null),Ka(a),n=n.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(ve,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,c=X.p,X.p=2,O.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var E=r[x];f(E.value,{componentStack:E.stack})}}finally{O.T=n,X.p=c}}(Ki&3)!==0&&Nl(),Ci(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===lf?uo++:(uo=0,lf=e):uo=0,fo(0)}}function lm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Wr(n)))}function Nl(){return sm(),rm(),om(),cm()}function cm(){if(pn!==5)return!1;var e=Da,n=rf;rf=0;var a=Ka(Ki),r=O.T,c=X.p;try{X.p=32>a?32:a,O.T=null,a=of,of=null;var f=Da,x=Ki;if(pn=0,Js=Da=null,Ki=0,(Nt&6)!==0)throw Error(s(331));var E=Nt;if(Nt|=4,X0(f.current),G0(f,f.current,x,a),Nt=E,fo(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(ve,f)}catch{}return!0}finally{X.p=c,O.T=r,lm(e,n)}}function um(e,n,a){n=ai(a,n),n=Iu(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Cn(e,2),Ci(e))}function zt(e,n,a){if(e.tag===3)um(e,e,a);else for(;n!==null;){if(n.tag===3){um(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wa===null||!wa.has(r))){e=ai(a,e),a=f0(2),r=Ma(n,a,2),r!==null&&(d0(a,r,n,e),Cn(r,2),Ci(r));break}}n=n.return}}function ff(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Y_;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(nf=!0,c.add(a),e=$_.bind(null,e,n,a),n.then(e,e))}function $_(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(vt&a)===a&&($t===4||$t===3&&(vt&62914560)===vt&&300>M()-Al?(Nt&2)===0&&$s(e,0):af|=a,Qs===vt&&(Qs=0)),Ci(e)}function fm(e,n){n===0&&(n=Bt()),e=ts(e,n),e!==null&&(Cn(e,n),Ci(e))}function ev(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),fm(e,a)}function tv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),fm(e,a)}function nv(e,n){return Lt(e,n)}var Ll=null,tr=null,df=!1,Ol=!1,hf=!1,Na=0;function Ci(e){e!==tr&&e.next===null&&(tr===null?Ll=tr=e:tr=tr.next=e),Ol=!0,df||(df=!0,av())}function fo(e,n){if(!hf&&Ol){hf=!0;do for(var a=!1,r=Ll;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var x=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-ze(42|e)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,mm(r,f))}else f=vt,f=Se(r,r===Wt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ve(r,f)||(a=!0,mm(r,f));r=r.next}while(a);hf=!1}}function iv(){dm()}function dm(){Ol=df=!1;var e=0;Na!==0&&pv()&&(e=Na);for(var n=M(),a=null,r=Ll;r!==null;){var c=r.next,f=hm(r,n);f===0?(r.next=null,a===null?Ll=c:a.next=c,c===null&&(tr=a)):(a=r,(e!==0||(f&3)!==0)&&(Ol=!0)),r=c}pn!==0&&pn!==5||fo(e),Na!==0&&(Na=0)}function hm(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-ze(f),E=1<<x,P=c[x];P===-1?((E&a)===0||(E&r)!==0)&&(c[x]=at(E,n)):P<=n&&(e.expiredLanes|=E),f&=~E}if(n=Wt,a=vt,a=Se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Pt===2||Pt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ze(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ve(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ze(r),Ka(a)){case 2:case 8:a=Me;break;case 32:a=ce;break;case 268435456:a=Ee;break;default:a=ce}return r=pm.bind(null,e),a=Lt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ze(r),e.callbackPriority=2,e.callbackNode=null,2}function pm(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nl()&&e.callbackNode!==a)return null;var r=vt;return r=Se(e,e===Wt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Z0(e,r,n),hm(e,M()),e.callbackNode!=null&&e.callbackNode===a?pm.bind(null,e):null)}function mm(e,n){if(Nl())return null;Z0(e,n,!0)}function av(){xv(function(){(Nt&6)!==0?Lt(me,iv):dm()})}function pf(){if(Na===0){var e=Hs;e===0&&(e=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Na=e}return Na}function xm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function gm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function sv(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=xm((c[dn]||null).action),x=r.submitter;x&&(n=(n=x[dn]||null)?xm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new qo("action","action",null,r,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Na!==0){var P=x?gm(c,x):new FormData(c);Lu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=x?gm(c,x):new FormData(c),Lu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var mf=0;mf<Kc.length;mf++){var xf=Kc[mf],rv=xf.toLowerCase(),ov=xf[0].toUpperCase()+xf.slice(1);pi(rv,"on"+ov)}pi(Yh,"onAnimationEnd"),pi(Zh,"onAnimationIteration"),pi(Kh,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(M_,"onTransitionRun"),pi(E_,"onTransitionStart"),pi(T_,"onTransitionCancel"),pi(Qh,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),Le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Le("onBeforeInput",["compositionend","keypress","textInput","paste"]),Le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function _m(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var E=r[x],P=E.instance,J=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=J;try{f(c)}catch(he){Zo(he)}c.currentTarget=null,f=P}else for(x=0;x<r.length;x++){if(E=r[x],P=E.instance,J=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=J;try{f(c)}catch(he){Zo(he)}c.currentTarget=null,f=P}}}}function _t(e,n){var a=n[Cs];a===void 0&&(a=n[Cs]=new Set);var r=e+"__bubble";a.has(r)||(vm(n,e,2,!1),a.add(r))}function gf(e,n,a){var r=0;n&&(r|=4),vm(a,e,r,n)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[Fl]){e[Fl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(lv.has(a)||gf(a,!1,e),gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fl]||(n[Fl]=!0,gf("selectionchange",!1,n))}}function vm(e,n,a,r){switch(Ym(n)){case 2:var c=Pv;break;case 8:c=zv;break;default:c=Lf}a=c.bind(null,n,a,e),c=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function vf(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var E=r.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=r.return;x!==null;){var P=x.tag;if((P===3||P===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=pa(E),x===null)return;if(P=x.tag,P===5||P===6||P===26||P===27){r=f=x;continue e}E=E.parentNode}}r=r.return}Eh(function(){var J=f,he=Fc(a),ge=[];e:{var te=Jh.get(e);if(te!==void 0){var re=qo,We=e;switch(e){case"keypress":if(Xo(a)===0)break e;case"keydown":case"keyup":re=t_;break;case"focusin":We="focus",re=Gc;break;case"focusout":We="blur",re=Gc;break;case"beforeblur":case"afterblur":re=Gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=a_;break;case Yh:case Zh:case Kh:re=qg;break;case Qh:re=r_;break;case"scroll":case"scrollend":re=Gg;break;case"wheel":re=l_;break;case"copy":case"cut":case"paste":re=Yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=wh;break;case"toggle":case"beforetoggle":re=u_}var et=(n&4)!==0,Gt=!et&&(e==="scroll"||e==="scrollend"),Y=et?te!==null?te+"Capture":null:te;et=[];for(var V=J,Q;V!==null;){var pe=V;if(Q=pe.stateNode,pe=pe.tag,pe!==5&&pe!==26&&pe!==27||Q===null||Y===null||(pe=Or(V,Y),pe!=null&&et.push(po(V,pe,Q))),Gt)break;V=V.return}0<et.length&&(te=new re(te,We,null,a,he),ge.push({event:te,listeners:et}))}}if((n&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",re=e==="mouseout"||e==="pointerout",te&&a!==Oc&&(We=a.relatedTarget||a.fromElement)&&(pa(We)||We[Ni]))break e;if((re||te)&&(te=he.window===he?he:(te=he.ownerDocument)?te.defaultView||te.parentWindow:window,re?(We=a.relatedTarget||a.toElement,re=J,We=We?pa(We):null,We!==null&&(Gt=u(We),et=We.tag,We!==Gt||et!==5&&et!==27&&et!==6)&&(We=null)):(re=null,We=J),re!==We)){if(et=Rh,pe="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(et=wh,pe="onPointerLeave",Y="onPointerEnter",V="pointer"),Gt=re==null?te:j(re),Q=We==null?te:j(We),te=new et(pe,V+"leave",re,a,he),te.target=Gt,te.relatedTarget=Q,pe=null,pa(he)===J&&(et=new et(Y,V+"enter",We,a,he),et.target=Q,et.relatedTarget=Gt,pe=et),Gt=pe,re&&We)t:{for(et=cv,Y=re,V=We,Q=0,pe=Y;pe;pe=et(pe))Q++;pe=0;for(var Qe=V;Qe;Qe=et(Qe))pe++;for(;0<Q-pe;)Y=et(Y),Q--;for(;0<pe-Q;)V=et(V),pe--;for(;Q--;){if(Y===V||V!==null&&Y===V.alternate){et=Y;break t}Y=et(Y),V=et(V)}et=null}else et=null;re!==null&&Sm(ge,te,re,et,!1),We!==null&&Gt!==null&&Sm(ge,Gt,We,et,!0)}}e:{if(te=J?j(J):window,re=te.nodeName&&te.nodeName.toLowerCase(),re==="select"||re==="input"&&te.type==="file")var wt=zh;else if(Fh(te))if(Bh)wt=S_;else{wt=__;var je=g_}else re=te.nodeName,!re||re.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?J&&Lc(J.elementType)&&(wt=zh):wt=v_;if(wt&&(wt=wt(e,J))){Ph(ge,wt,a,he);break e}je&&je(e,te,J),e==="focusout"&&J&&te.type==="number"&&J.memoizedProps.value!=null&&vn(te,"number",te.value)}switch(je=J?j(J):window,e){case"focusin":(Fh(je)||je.contentEditable==="true")&&(Ns=je,jc=J,Vr=null);break;case"focusout":Vr=jc=Ns=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,qh(ge,a,he);break;case"selectionchange":if(y_)break;case"keydown":case"keyup":qh(ge,a,he)}var ht;if(kc)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Us?Lh(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Dh&&a.locale!=="ko"&&(Us||St!=="onCompositionStart"?St==="onCompositionEnd"&&Us&&(ht=Th()):(xa=he,Bc="value"in xa?xa.value:xa.textContent,Us=!0)),je=Pl(J,St),0<je.length&&(St=new Ch(St,e,null,a,he),ge.push({event:St,listeners:je}),ht?St.data=ht:(ht=Oh(a),ht!==null&&(St.data=ht)))),(ht=d_?h_(e,a):p_(e,a))&&(St=Pl(J,"onBeforeInput"),0<St.length&&(je=new Ch("onBeforeInput","beforeinput",null,a,he),ge.push({event:je,listeners:St}),je.data=ht)),sv(ge,e,J,a,he)}_m(ge,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Pl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Or(e,a),c!=null&&r.unshift(po(e,c,f)),c=Or(e,n),c!=null&&r.push(po(e,c,f))),e.tag===3)return r;e=e.return}return[]}function cv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sm(e,n,a,r,c){for(var f=n._reactName,x=[];a!==null&&a!==r;){var E=a,P=E.alternate,J=E.stateNode;if(E=E.tag,P!==null&&P===r)break;E!==5&&E!==26&&E!==27||J===null||(P=J,c?(J=Or(a,f),J!=null&&x.unshift(po(a,J,P))):c||(J=Or(a,f),J!=null&&x.push(po(a,J,P)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var uv=/\r\n?/g,fv=/\u0000|\uFFFD/g;function bm(e){return(typeof e=="string"?e:""+e).replace(uv,`
`).replace(fv,"")}function ym(e,n){return n=bm(n),bm(e)===n}function Ht(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ei(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ei(e,""+r);break;case"className":Tt(e,"class",r);break;case"tabIndex":Tt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Tt(e,a,r);break;case"style":yh(e,r,f);break;case"data":if(n!=="object"){Tt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",c.name,c,null),Ht(e,n,"formEncType",c.formEncType,c,null),Ht(e,n,"formMethod",c.formMethod,c,null),Ht(e,n,"formTarget",c.formTarget,c,null)):(Ht(e,n,"encType",c.encType,c,null),Ht(e,n,"method",c.method,c,null),Ht(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Fi);break;case"onScroll":r!=null&&_t("scroll",e);break;case"onScrollEnd":r!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Vo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":_t("beforetoggle",e),_t("toggle",e),dt(e,"popover",r);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":dt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ig.get(a)||a,dt(e,a,r))}}function Sf(e,n,a,r,c,f){switch(a){case"style":yh(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ei(e,r):(typeof r=="number"||typeof r=="bigint")&&Ei(e,""+r);break;case"onScroll":r!=null&&_t("scroll",e);break;case"onScrollEnd":r!=null&&_t("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):dt(e,a,r)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,f,x,a,null)}}c&&Ht(e,n,"srcSet",a.srcSet,a,null),r&&Ht(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var E=f=x=c=null,P=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var he=a[r];if(he!=null)switch(r){case"name":c=he;break;case"type":x=he;break;case"checked":P=he;break;case"defaultChecked":J=he;break;case"value":f=he;break;case"defaultValue":E=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:Ht(e,n,r,he,a,null)}}jt(e,f,E,P,J,x,c,!1);return;case"select":_t("invalid",e),r=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":r=E;default:Ht(e,n,c,E,a,null)}n=f,a=x,e.multiple=!!r,n!=null?hn(e,!!r,n,!1):a!=null&&hn(e,!!r,a,!0);return;case"textarea":_t("invalid",e),f=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ht(e,n,x,E,a,null)}Mn(e,r,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ht(e,n,P,r,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(r=0;r<ho.length;r++)_t(ho[r],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,J,r,a,null)}return;default:if(Lc(n)){for(he in a)a.hasOwnProperty(he)&&(r=a[he],r!==void 0&&Sf(e,n,he,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Ht(e,n,E,r,a,null))}function dv(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,P=null,J=null,he=null;for(re in a){var ge=a[re];if(a.hasOwnProperty(re)&&ge!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":P=ge;default:r.hasOwnProperty(re)||Ht(e,n,re,null,r,ge)}}for(var te in r){var re=r[te];if(ge=a[te],r.hasOwnProperty(te)&&(re!=null||ge!=null))switch(te){case"type":f=re;break;case"name":c=re;break;case"checked":J=re;break;case"defaultChecked":he=re;break;case"value":x=re;break;case"defaultValue":E=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(s(137,n));break;default:re!==ge&&Ht(e,n,te,re,r,ge)}}Li(e,x,E,P,J,he,f,c);return;case"select":re=x=E=te=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":re=P;default:r.hasOwnProperty(f)||Ht(e,n,f,null,r,P)}for(c in r)if(f=r[c],P=a[c],r.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":te=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==P&&Ht(e,n,c,f,r,P)}n=E,a=x,r=re,te!=null?hn(e,!!a,te,!1):!!r!=!!a&&(n!=null?hn(e,!!a,n,!0):hn(e,!!a,a?[]:"",!1));return;case"textarea":re=te=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ht(e,n,E,null,r,c)}for(x in r)if(c=r[x],f=a[x],r.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":te=c;break;case"defaultValue":re=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ht(e,n,x,c,r,f)}Sn(e,te,re);return;case"option":for(var We in a)if(te=a[We],a.hasOwnProperty(We)&&te!=null&&!r.hasOwnProperty(We))switch(We){case"selected":e.selected=!1;break;default:Ht(e,n,We,null,r,te)}for(P in r)if(te=r[P],re=a[P],r.hasOwnProperty(P)&&te!==re&&(te!=null||re!=null))switch(P){case"selected":e.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:Ht(e,n,P,te,r,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)te=a[et],a.hasOwnProperty(et)&&te!=null&&!r.hasOwnProperty(et)&&Ht(e,n,et,null,r,te);for(J in r)if(te=r[J],re=a[J],r.hasOwnProperty(J)&&te!==re&&(te!=null||re!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(s(137,n));break;default:Ht(e,n,J,te,r,re)}return;default:if(Lc(n)){for(var Gt in a)te=a[Gt],a.hasOwnProperty(Gt)&&te!==void 0&&!r.hasOwnProperty(Gt)&&Sf(e,n,Gt,void 0,r,te);for(he in r)te=r[he],re=a[he],!r.hasOwnProperty(he)||te===re||te===void 0&&re===void 0||Sf(e,n,he,te,r,re);return}}for(var Y in a)te=a[Y],a.hasOwnProperty(Y)&&te!=null&&!r.hasOwnProperty(Y)&&Ht(e,n,Y,null,r,te);for(ge in r)te=r[ge],re=a[ge],!r.hasOwnProperty(ge)||te===re||te==null&&re==null||Ht(e,n,ge,te,r,re)}function Mm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Mm(x)){for(x=0,E=c.responseEnd,r+=1;r<a.length;r++){var P=a[r],J=P.startTime;if(J>E)break;var he=P.transferSize,ge=P.initiatorType;he&&Mm(ge)&&(P=P.responseEnd,x+=he*(P<E?1:(E-J)/(P-J)))}if(--r,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bf=null,yf=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function Em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Mf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function pv(){var e=window.event;return e&&e.type==="popstate"?e===Ef?!1:(Ef=e,!0):(Ef=null,!1)}var Am=typeof setTimeout=="function"?setTimeout:void 0,mv=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(e){return Rm.resolve(null).then(e).catch(gv)}:Am;function gv(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function Cm(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),sr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")mo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,mo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Qa]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&mo(e.ownerDocument.body);a=c}while(a);sr(n)}function wm(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Tf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),Lr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _v(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function vv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function Dm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function Af(e){return e.data==="$?"||e.data==="$~"}function Rf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Sv(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Cf=null;function Um(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Nm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Lm(e,n,a){switch(n=zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Lr(e)}var ui=new Map,Om=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Qi=X.d;X.d={f:bv,r:yv,D:Mv,C:Ev,L:Tv,m:Av,X:Cv,S:Rv,M:wv};function bv(){var e=Qi.f(),n=wl();return e||n}function yv(e){var n=T(e);n!==null&&n.tag===5&&n.type==="form"?Qp(n):Qi.r(e)}var nr=typeof document>"u"?null:document;function Fm(e,n,a){var r=nr;if(r&&typeof n=="string"&&n){var c=qt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Om.has(c)||(Om.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Rn(n,"link",e),$(n),r.head.appendChild(n)))}}function Mv(e){Qi.D(e),Fm("dns-prefetch",e,null)}function Ev(e,n){Qi.C(e,n),Fm("preconnect",e,n)}function Tv(e,n,a){Qi.L(e,n,a);var r=nr;if(r&&e&&n){var c='link[rel="preload"][as="'+qt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+qt(a.imageSizes)+'"]')):c+='[href="'+qt(e)+'"]';var f=c;switch(n){case"style":f=ir(e);break;case"script":f=ar(e)}ui.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(xo(f))||n==="script"&&r.querySelector(go(f))||(n=r.createElement("link"),Rn(n,"link",e),$(n),r.head.appendChild(n)))}}function Av(e,n){Qi.m(e,n);var a=nr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+qt(r)+'"][href="'+qt(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ar(e)}if(!ui.has(f)&&(e=g({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(go(f)))return}r=a.createElement("link"),Rn(r,"link",e),$(r),a.head.appendChild(r)}}}function Rv(e,n,a){Qi.S(e,n,a);var r=nr;if(r&&e){var c=se(r).hoistableStyles,f=ir(e);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=r.querySelector(xo(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&wf(e,a);var P=x=r.createElement("link");$(P),Rn(P,"link",e),P._p=new Promise(function(J,he){P.onload=J,P.onerror=he}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Il(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function Cv(e,n){Qi.X(e,n);var a=nr;if(a&&e){var r=se(a).hoistableScripts,c=ar(e),f=r.get(c);f||(f=a.querySelector(go(c)),f||(e=g({src:e,async:!0},n),(n=ui.get(c))&&Df(e,n),f=a.createElement("script"),$(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function wv(e,n){Qi.M(e,n);var a=nr;if(a&&e){var r=se(a).hoistableScripts,c=ar(e),f=r.get(c);f||(f=a.querySelector(go(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ui.get(c))&&Df(e,n),f=a.createElement("script"),$(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Pm(e,n,a,r){var c=(c=ie.current)?Bl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ir(a.href),a=se(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ir(a.href);var f=se(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(xo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||Dv(c,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ar(a),a=se(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ir(e){return'href="'+qt(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function zm(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Dv(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Rn(n,"link",a),$(n),e.head.appendChild(n))}function ar(e){return'[src="'+qt(e)+'"]'}function go(e){return"script[async]"+e}function Bm(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(r)return n.instance=r,$(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),$(r),Rn(r,"style",c),Il(r,a.precedence,e),n.instance=r;case"stylesheet":c=ir(a.href);var f=e.querySelector(xo(c));if(f)return n.state.loading|=4,n.instance=f,$(f),f;r=zm(a),(c=ui.get(c))&&wf(r,c),f=(e.ownerDocument||e).createElement("link"),$(f);var x=f;return x._p=new Promise(function(E,P){x.onload=E,x.onerror=P}),Rn(f,"link",r),n.state.loading|=4,Il(f,a.precedence,e),n.instance=f;case"script":return f=ar(a.src),(c=e.querySelector(go(f)))?(n.instance=c,$(c),c):(r=a,(c=ui.get(f))&&(r=g({},a),Df(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),$(c),Rn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Il(r,a.precedence,e));return n.instance}function Il(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,x=0;x<r.length;x++){var E=r[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Df(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Hl=null;function Im(e,n,a){if(Hl===null){var r=new Map,c=Hl=new Map;c.set(a,r)}else c=Hl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Qa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var E=r.get(x);E?E.push(f):r.set(x,[f])}}return r}function Hm(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Uv(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Gm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Nv(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ir(r.href),f=n.querySelector(xo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Gl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,$(f);return}f=n.ownerDocument||n,r=zm(r),(c=ui.get(c))&&wf(r,c),f=f.createElement("link"),$(f);var x=f;x._p=new Promise(function(E,P){x.onload=E,x.onerror=P}),Rn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Gl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uf=0;function Lv(e,n){return e.stylesheets&&e.count===0&&kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Uf===0&&(Uf=62500*hv());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Uf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vl=null;function kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vl=new Map,n.forEach(Ov,e),Vl=null,Gl.call(e))}function Ov(e,n){if(!(n.state.loading&4)){var a=Vl.get(e);if(a)var r=a.get(null);else{a=new Map,Vl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,c),a.set(x,c),this.count++,r=Gl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var _o={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Fv(e,n,a,r,c,f,x,E,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Vm(e,n,a,r,c,f,x,E,P,J,he,ge){return e=new Fv(e,n,a,x,P,J,he,ge,E),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=cu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},hu(f),e}function km(e){return e?(e=Fs,e):Fs}function Xm(e,n,a,r,c,f){c=km(c),r.context===null?r.context=c:r.pendingContext=c,r=ya(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ma(e,r,n),a!==null&&(Hn(a,e,n),Zr(a,e,n))}function Wm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Nf(e,n){Wm(e,n),(e=e.alternate)&&Wm(e,n)}function qm(e){if(e.tag===13||e.tag===31){var n=ts(e,67108864);n!==null&&Hn(n,e,67108864),Nf(e,67108864)}}function jm(e){if(e.tag===13||e.tag===31){var n=Qn();n=hi(n);var a=ts(e,n);a!==null&&Hn(a,e,n),Nf(e,n)}}var Xl=!0;function Pv(e,n,a,r){var c=O.T;O.T=null;var f=X.p;try{X.p=2,Lf(e,n,a,r)}finally{X.p=f,O.T=c}}function zv(e,n,a,r){var c=O.T;O.T=null;var f=X.p;try{X.p=8,Lf(e,n,a,r)}finally{X.p=f,O.T=c}}function Lf(e,n,a,r){if(Xl){var c=Of(r);if(c===null)vf(e,n,r,Wl,a),Zm(e,r);else if(Iv(c,e,n,a,r))r.stopPropagation();else if(Zm(e,r),n&4&&-1<Bv.indexOf(e)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Te(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var P=1<<31-ze(x);E.entanglements[1]|=P,x&=~P}Ci(f),(Nt&6)===0&&(Rl=M()+500,fo(0))}}break;case 31:case 13:E=ts(f,2),E!==null&&Hn(E,f,2),wl(),Nf(f,2)}if(f=Of(r),f===null&&vf(e,n,r,Wl,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else vf(e,n,r,null,a)}}function Of(e){return e=Fc(e),Ff(e)}var Wl=null;function Ff(e){if(Wl=null,e=pa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Wl=e,null}function Ym(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case me:return 2;case Me:return 8;case ce:case Ye:return 32;case Ee:return 268435456;default:return 32}default:return 32}}var Pf=!1,Oa=null,Fa=null,Pa=null,vo=new Map,So=new Map,za=[],Bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zm(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function bo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&qm(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Iv(e,n,a,r,c){switch(n){case"focusin":return Oa=bo(Oa,e,n,a,r,c),!0;case"dragenter":return Fa=bo(Fa,e,n,a,r,c),!0;case"mouseover":return Pa=bo(Pa,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,bo(vo.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,bo(So.get(f)||null,e,n,a,r,c)),!0}return!1}function Km(e){var n=pa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Nr(e.priority,function(){jm(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Nr(e.priority,function(){jm(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Of(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Oc=r,a.target.dispatchEvent(r),Oc=null}else return n=T(a),n!==null&&qm(n),e.blockedOn=a,!1;n.shift()}return!0}function Qm(e,n,a){ql(e)&&a.delete(n)}function Hv(){Pf=!1,Oa!==null&&ql(Oa)&&(Oa=null),Fa!==null&&ql(Fa)&&(Fa=null),Pa!==null&&ql(Pa)&&(Pa=null),vo.forEach(Qm),So.forEach(Qm)}function jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Pf||(Pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hv)))}var Yl=null;function Jm(e){Yl!==e&&(Yl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Ff(r||a)===null)continue;break}var f=T(a);f!==null&&(e.splice(n,3),n-=3,Lu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function sr(e){function n(P){return jl(P,e)}Oa!==null&&jl(Oa,e),Fa!==null&&jl(Fa,e),Pa!==null&&jl(Pa,e),vo.forEach(n),So.forEach(n);for(var a=0;a<za.length;a++){var r=za[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)Km(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],x=c[dn]||null;if(typeof f=="function")x||Jm(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[dn]||null)E=x.formAction;else if(Ff(c)!==null)continue}else E=x.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),Jm(a)}}}function $m(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function zf(e){this._internalRoot=e}Zl.prototype.render=zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();Xm(a,r,e,n,null,null)},Zl.prototype.unmount=zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xm(e.current,2,null,e,null,null),wl(),n[Ni]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ur();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&Km(e)}};var ex=t.version;if(ex!=="19.2.0")throw Error(s(527,ex,"19.2.0"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Gv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{ve=Kl.inject(Gv),ye=Kl}catch{}}return Mo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=o0,f=l0,x=c0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Vm(e,1,!1,null,null,a,r,null,c,f,x,$m),e[Ni]=n.current,_f(e),new zf(n)},Mo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=o0,x=l0,E=c0,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Vm(e,1,!0,n,a??null,r,c,P,f,x,E,$m),n.context=km(null),a=n.current,r=Qn(),r=hi(r),c=ya(r),c.callback=null,Ma(a,c,r),a=r,n.current.lanes=a,Cn(n,a),Ci(n),e[Ni]=n.current,_f(e),new Zl(n)},Mo.version="19.2.0",Mo}var ux;function Jv(){if(ux)return Hf.exports;ux=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Hf.exports=Qv(),Hf.exports}var $v=Jv();const eS=og($v),tS=[{id:"hero",label:"Overview"},{id:"expertise",label:"Expertise"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"skills",label:"Skills"},{id:"contact",label:"Contact"}],nS=()=>{const o=t=>{const i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth",block:"start"})};return H.jsx("header",{className:"fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-xl",children:H.jsxs("nav",{className:"mx-auto flex max-w-6xl items-center justify-between px-4 py-3",children:[H.jsxs("button",{onClick:()=>o("hero"),className:"flex items-center gap-2 rounded-pill bg-black/60 px-3 py-1 text-sm font-semibold text-white shadow-soft backdrop-blur-xl",children:[H.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-neonBlue to-neonPurple text-xs font-bold",children:"SM"}),H.jsxs("span",{className:"hidden text-white/80 sm:inline",children:["Mahesh",H.jsx("span",{className:"text-neonOrange",children:".dev"})]})]}),H.jsx("div",{className:"hidden items-center gap-5 text-xs font-medium text-white/70 md:flex",children:tS.map(t=>H.jsx("button",{onClick:()=>o(t.id),className:"rounded-pill px-3 py-1 transition hover:bg-white/5 hover:text-white",children:t.label},t.id))}),H.jsx("a",{href:"/Sai_Mahesh_resume.pdf",target:"_blank",className:"rounded-pill bg-neonOrange px-4 py-2 text-xs font-semibold text-black shadow-neon-orange transition hover:bg-orange-300",children:"Download Resume"})]})})};const iS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),fx=o=>{const t=aS(o);return t.charAt(0).toUpperCase()+t.slice(1)},lg=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),sS=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};var rS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const oS=en.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>en.createElement("svg",{ref:m,...rS,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:lg("lucide",l),...!u&&!sS(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,_])=>en.createElement(p,_)),...Array.isArray(u)?u:[u]]));const Za=(o,t)=>{const i=en.forwardRef(({className:s,...l},u)=>en.createElement(oS,{ref:u,iconNode:t,className:lg(`lucide-${iS(fx(o))}`,`lucide-${o}`,s),...l}));return i.displayName=fx(o),i};const lS=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],cS=Za("activity",lS);const uS=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],fS=Za("briefcase",uS);const dS=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],hS=Za("cpu",dS);const pS=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],mS=Za("earth",pS);const xS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],gS=Za("lock",xS);const _S=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],vS=Za("shield",_S);const SS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],bS=Za("sparkles",SS);const yS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],MS=Za("zap",yS),ES=[{title:"Zero-Knowledge Systems",subtitle:"Proving more, revealing less.",icon:gS,points:["Designing circuits and flows where servers learn exactly what they need — nothing extra.","Turning traits like age, intent, or trust level into private predicates instead of database flags.","Exploring ZK patterns for cookies, access control, and consent that feel invisible to users."]},{title:"Smart Contract Engineering",subtitle:"Code paths you can sleep on.",icon:vS,points:["Shaping on-chain architectures on Ethereum & Polygon with clear invariants and failure modes.","Thinking in terms of state machines, upgrade paths, and how contracts age in the real world.","Obsessed with readability, reviewability, and making “what can go wrong?” easy to answer."]},{title:"DeFi & Infra Thinking",subtitle:"Composability as a design constraint.",icon:mS,points:["Reasoning about bridges, keepers, vaults, and oracles as Lego bricks instead of siloed services.","Designing flows that play nicely with existing tooling instead of demanding yet another dashboard.","Caring about liveness, slippage, and failure cascades just as much as fancy yields."]},{title:"Healthcare dApps & Data Rails",subtitle:"Sensitive data on cryptographic rails.",icon:cS,points:["Building flows where patients stay in control while providers still get trustworthy signals.","Using Polygon as the coordination layer, not the place where raw medical data lives forever.","Exploring how ZK and encryption can make compliance a property of the system, not a checklist."]},{title:"XR & Spatial Interfaces",subtitle:"Touching your infra in 3D.",icon:hS,points:["Designing Unity/MR experiences where teams walk through assets, alerts, and incidents.","Using depth, motion, and spatial grouping to make complex systems feel instantly scannable.","Bridging the gap between raw telemetry and intuitive, almost game-like control surfaces."]},{title:"Product, Narrative & DX",subtitle:"Making heavy infra feel light.",icon:MS,points:["Framing protocol features as stories real users can understand and care about.","Sweating the details of error states, loading, and the first 60 seconds of a new flow.","Treating docs, diagrams, and dev experience as first-class parts of the product."]}],TS=()=>H.jsxs("section",{id:"expertise",className:"relative -mt-12 pt-24 pb-24 overflow-hidden",children:[H.jsx("div",{className:"grid-pattern absolute inset-0 opacity-80"}),H.jsxs("div",{className:"container relative z-10 mx-auto px-4 sm:px-6 lg:px-8",children:[H.jsxs("div",{className:"mb-16 text-center",children:[H.jsx("div",{className:"mb-4 inline-block",children:H.jsx("div",{className:"glass rounded-full px-6 py-2",children:H.jsx("span",{className:"text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300",children:"Expertise"})})}),H.jsxs("h2",{className:"mb-4 text-4xl font-bold sm:text-5xl",children:["The systems I"," ",H.jsx("span",{className:"text-gradient",children:"can’t stop thinking about."})]}),H.jsx("p",{className:"mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg",children:"A mix of zero-knowledge, smart contracts, healthcare rails, and XR — all pointed at one goal: make serious infrastructure feel clear, safe, and strangely fun to use."})]}),H.jsx("div",{className:"grid gap-8 md:grid-cols-2 xl:grid-cols-3",children:ES.map(o=>{const t=o.icon;return H.jsx("div",{className:"h-full",children:H.jsxs("div",{className:"group relative h-full",children:[H.jsx("div",{className:"expertise-card-gradient"}),H.jsxs("div",{className:"expertise-card-inner flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950/95 via-slate-900/95 to-slate-950/95 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-2xl transition-shadow duration-300 group-hover:shadow-[0_24px_90px_rgba(15,23,42,1)]",children:[H.jsxs("div",{className:"p-7 sm:p-8",children:[H.jsx("div",{className:"mb-6 inline-flex rounded-2xl bg-slate-950/90 p-3 shadow-[0_0_26px_rgba(56,189,248,0.9)]",children:H.jsx(t,{className:"h-6 w-6 text-cyan-300"})}),H.jsx("h3",{className:"mb-2 text-xl font-semibold sm:text-2xl",children:o.title}),H.jsx("p",{className:"mb-6 text-sm text-muted-foreground",children:o.subtitle}),H.jsx("ul",{className:"space-y-3",children:o.points.map(i=>H.jsxs("li",{className:"flex gap-3 text-sm leading-relaxed text-white/85",children:[H.jsx("span",{className:"mt-1 text-base text-neonOrange drop-shadow-[0_0_14px_rgba(248,165,76,0.9)]",children:"▸"}),H.jsx("span",{children:i})]},i))})]}),H.jsx("div",{className:"pointer-events-none absolute inset-x-6 bottom-0 h-10 rounded-t-full bg-gradient-to-t from-cyan-400/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]})]})},o.title)})})]})]}),uh=({id:o,label:t,eyebrow:i,children:s})=>H.jsx("section",{id:o,className:"px-4",children:H.jsx("div",{className:"mx-auto max-w-6xl",children:H.jsxs("div",{className:"relative overflow-hidden rounded-card border border-white/10 bg-surface/90 shadow-soft backdrop-blur-2xl",children:[H.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-60",children:H.jsx("div",{className:"absolute inset-px rounded-[28px] bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.30),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(251,146,60,0.28),transparent_55%)]"})}),H.jsxs("div",{className:"relative px-7 py-8 sm:px-10 sm:py-10",children:[i&&H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.28em] text-white/60",children:i}),H.jsx("h2",{className:"mt-1 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl",children:t}),H.jsx("div",{className:"mt-6",children:s})]})]})})}),AS=[{title:"MediVault",period:"Mar 2024 – May 2024",tagline:"Healthcare data on cryptographic rails, not in random PDFs.",description:"A privacy-first healthcare dApp on Polygon where patients keep control of their records, and providers get cryptographic guarantees instead of email attachments.",role:"On-chain architect & full-stack dev",focus:"Access control · encrypted records · provider interoperability",tech:["Polygon","Solidity","Hardhat","React","TypeScript"],bullets:["Designed the on-chain model for patient, provider, and verifier roles so access rules stay transparent and enforceable.","Built flows for uploading, encrypting, and selectively sharing medical data without exposing raw records on-chain.","Focused on keeping the UX boring in the best way: clear states, simple actions, and no ‘crypto tourism’ for doctors."]},{title:"Healthcare Security with ZKP",period:"Feb 2025 – May 2025",tagline:"Zero-knowledge gates for who sees what in medical systems.",description:"An exploration into using ZK proofs for patient auth and record access — proving you’re allowed to see something without revealing every detail about who you are.",role:"ZK engineer & protocol designer",focus:"ZK auth · sharded storage · consent-driven access",tech:["ZK-SNARKs","Circom","Groth16","Polygon"],bullets:["Modeled access policies as circuits instead of if-else ladders, turning messy rules into crisp constraints.","Experimented with sharded storage patterns so sensitive data can live across domains without losing guarantees.","Prototyped a flow where patients generate proofs locally, and backends simply verify — no extra identity hoarding."]},{title:"ZK Cookie",period:"Ongoing",tagline:"Targeted experiences without turning users into tracking IDs.",description:"A prototype that replaces traditional tracking cookies with zero-knowledge proofs, letting apps tailor experiences based on traits rather than raw behavioral logs.",role:"Research & prototype builder",focus:"Private personalization · predicate proofs · adtech without surveillance",tech:["Circom","snarkjs","Node.js","TypeScript"],bullets:["Designed predicates like ‘tech-savvy’, ‘18+’, or ‘returning user’ as circuit logic instead of centralized flags.","Built a flow where browsers mint proofs client-side and servers verify them without ever seeing the underlying attributes.","Explored how existing analytics and ad systems could plug into ZK proofs without needing a total rewrite."]}],RS=()=>H.jsx(uh,{id:"projects",label:"Featured projects",eyebrow:"Production & research builds",children:H.jsx("div",{className:"space-y-6",children:AS.map((o,t)=>H.jsxs("article",{className:`relative overflow-hidden rounded-card border border-white/12 bg-black/70 p-6 shadow-soft backdrop-blur-xl ${t===0?"shadow-neon-blue":"shadow-neon-orange"}`,children:[H.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-70",children:H.jsx("div",{className:"absolute inset-px rounded-[22px] bg-card-gradient"})}),H.jsxs("div",{className:"relative space-y-4",children:[H.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[H.jsxs("div",{children:[H.jsx("h3",{className:"text-lg font-semibold text-white sm:text-xl",children:o.title}),H.jsx("p",{className:"mt-1 text-xs font-medium uppercase tracking-[0.24em] text-white/50",children:o.tagline})]}),H.jsx("span",{className:"text-xs text-white/60",children:o.period})]}),H.jsxs("div",{className:"grid gap-6 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.3fr)]",children:[H.jsxs("div",{className:"space-y-3",children:[H.jsx("p",{className:"text-sm text-white/80",children:o.description}),H.jsx("ul",{className:"mt-3 space-y-2",children:o.bullets.map(i=>H.jsxs("li",{className:"flex gap-3 text-sm leading-relaxed text-white/85",children:[H.jsx("span",{className:"mt-1 text-base text-neonOrange drop-shadow-[0_0_12px_rgba(248,165,76,0.9)]",children:"▸"}),H.jsx("span",{children:i})]},i))})]}),H.jsxs("div",{className:"space-y-3",children:[H.jsxs("div",{className:"rounded-2xl bg-black/55 px-4 py-3 text-xs text-white/80",children:[H.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50",children:"Role"}),H.jsx("p",{className:"mt-1 text-sm text-white",children:o.role})]}),H.jsxs("div",{className:"rounded-2xl bg-black/55 px-4 py-3 text-xs text-white/80",children:[H.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50",children:"Focus"}),H.jsx("p",{className:"mt-1 text-sm text-white",children:o.focus})]}),H.jsxs("div",{className:"rounded-2xl bg-black/55 px-4 py-3 text-xs text-white/80",children:[H.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50",children:"Stack"}),H.jsx("div",{className:"mt-2 flex flex-wrap gap-2 text-[11px]",children:o.tech.map(i=>H.jsx("span",{className:"rounded-pill bg-black/40 px-3 py-1 text-white/85",children:i},i))})]})]})]})]})]},o.title))})}),CS=()=>{const o=[{role:"Senior Blockchain & XR Engineer — Retail India",company:"Cognizant",location:"India",period:"Feb 2022 – Jan 2024",highlights:["Led the shift from fragile retail ops to a Polygon-backed tracking layer that the business could finally trust.","Designed Unity3D incident and support tools that turned chaotic support calls into structured, visual flows.","Built mixed-reality dashboards so teams could literally walk around their infrastructure instead of scrolling through logs."]},{role:"Blockchain & AR/VR Developer",company:"Cognizant",location:"India",period:"Dec 2021 – Feb 2022",highlights:["Prototyped Ethereum/Polygon flows for supply-chain and identity problems the team didn’t yet have words for.","Experimented with AR experiences for automotive clients — from showroom moments to service bay guidance.","Helped non-crypto teams reason about wallets, chains, and gas fees without drowning in jargon."]},{role:"Program Analyst Trainee",company:"Cognizant",location:"India",period:"Dec 2020 – Dec 2021",highlights:["Bootstrapped my way from full-stack basics to being ‘the blockchain person’ people pinged for weird ideas.","Built internal tools and prototypes that quietly spread across teams because they actually solved daily pain.","Learned how to ship real things in messy environments — not just clean diagrams in a notebook."]}];return H.jsxs("section",{id:"experience",className:"py-24 relative overflow-hidden",children:[H.jsx("div",{className:"absolute inset-0 grid-pattern opacity-80"}),H.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[H.jsxs("div",{className:"text-center mb-20 animate-fade-in",children:[H.jsx("div",{className:"inline-block mb-4",children:H.jsx("div",{className:"glass px-6 py-2 rounded-full",children:H.jsx("span",{className:"text-sm text-plasma-purple font-semibold uppercase tracking-wider",children:"Production at scale"})})}),H.jsxs("h2",{className:"text-5xl sm:text-6xl font-bold mb-6",children:["Professional ",H.jsx("span",{className:"text-gradient",children:"Experience"})]}),H.jsx("p",{className:"text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto",children:"Turning complex requirements into production-grade systems."})]}),H.jsxs("div",{className:"relative max-w-5xl mx-auto",children:[H.jsx("div",{className:"absolute top-0 bottom-0 left-8 sm:left-1/4 w-[2px] bg-gradient-to-b from-electric-cyan via-plasma-purple to-neon-magenta opacity-80 rounded-full"}),H.jsx("div",{className:"space-y-14",children:o.map((t,i)=>H.jsxs("div",{className:"relative flex gap-6 sm:gap-10 items-stretch animate-fade-in-up",style:{animationDelay:`${i*.12+.1}s`},children:[H.jsx("div",{className:"relative flex-shrink-0",children:H.jsx("div",{className:"absolute left-8 sm:left-1/4 -translate-x-1/2 -top-2 sm:top-0",children:H.jsxs("div",{className:"relative",children:[H.jsx("div",{className:"absolute inset-0 rounded-2xl bg-electric-cyan/40 blur-xl opacity-70"}),H.jsx("div",{className:"relative neo-card w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-slate-950/90 border border-white/10 shadow-[0_0_25px_rgba(56,189,248,0.65)]",children:H.jsx(fS,{className:"w-6 h-6 text-electric-cyan"})}),H.jsx(bS,{className:"absolute -top-2 -right-2 h-4 w-4 text-plasma-purple animate-pulse"})]})})}),H.jsx("div",{className:"flex-1 ml-4 sm:ml-0 sm:pl-12",children:H.jsxs("div",{className:"relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/80 backdrop-blur-2xl shadow-[0_18px_60px_rgba(15,23,42,0.9)] hover:shadow-[0_22px_80px_rgba(56,189,248,0.65)] transition-shadow duration-300",children:[H.jsx("div",{className:"absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-electric-cyan via-plasma-purple to-neon-magenta opacity-90"}),H.jsxs("div",{className:"p-6 sm:p-8",children:[H.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4",children:[H.jsx("h3",{className:"text-2xl sm:text-2xl font-semibold leading-tight",children:t.role}),H.jsx("p",{className:"text-sm font-medium text-plasma-purple shrink-0",children:t.period})]}),H.jsxs("div",{className:"flex flex-wrap items-center gap-3 mb-6 text-sm",children:[H.jsx("span",{className:"glass px-4 py-1 rounded-full text-electric-cyan font-semibold",children:t.company}),H.jsx("span",{className:"text-muted-foreground",children:"•"}),H.jsx("span",{className:"text-muted-foreground",children:t.location})]}),H.jsx("ul",{className:"space-y-3",children:t.highlights.map(s=>H.jsxs("li",{className:"flex gap-3 text-sm text-white/85 leading-relaxed",children:[H.jsx("span",{className:`
          mt-1.5 inline-flex h-3 w-3 flex-shrink-0 rounded-full
          bg-gradient-to-tr from-neonBlue to-neonOrange
          shadow-[0_0_14px_rgba(59,130,246,0.9)]
          ring-2 ring-white/8
        `}),H.jsx("span",{children:s})]},s))}),H.jsx("div",{className:"pointer-events-none absolute bottom-5 right-5 w-7 h-7 border-r-[1.5px] border-b-[1.5px] border-electric-cyan/40 rounded-br-xl"})]})]})})]},t.role))})]})]})]})},wS=[{label:"Chains & Protocol Infra",pills:["Ethereum","Polygon","Solidity","EVM tooling","Hardhat","Foundry (exploring)"]},{label:"Zero-Knowledge & Crypto Primitives",pills:["ZK-SNARKs","Circom","snarkjs","Groth16","Poseidon hashes","Basic cryptography"]},{label:"Frontend, XR & Interaction",pills:["React","TypeScript","Vite","Tailwind CSS","Unity3D","HoloLens 2 / MRTK"]},{label:"Tooling, Testing & Ops",pills:["Git & GitHub","Hardhat tests","Integration testing","REST APIs","Docker","Azure / CI-CD"]}],DS=()=>H.jsxs(uh,{id:"skills",label:"Technical stack",eyebrow:"What I reach for",children:[H.jsx("p",{className:"max-w-2xl text-sm text-white/70",children:"Tools and stacks I lean on to ship ZK experiments, on-chain systems, and XR interfaces that can survive outside a demo environment."}),H.jsx("div",{className:"mt-6 grid gap-5 md:grid-cols-2",children:wS.map((o,t)=>H.jsxs("div",{className:`relative overflow-hidden rounded-card border border-white/12 bg-black/65 p-5 backdrop-blur-xl ${t%2===0?"shadow-neon-blue":"shadow-neon-orange"}`,children:[H.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-60",children:H.jsx("div",{className:"absolute inset-px rounded-[22px] bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(251,146,60,0.28),transparent_55%)]"})}),H.jsxs("div",{className:"relative",children:[H.jsx("h3",{className:"text-sm font-semibold text-white",children:o.label}),H.jsx("div",{className:"mt-3 flex flex-wrap gap-2 text-[11px]",children:o.pills.map(i=>H.jsx("span",{className:"rounded-pill bg-black/60 px-3 py-1 text-white/85",children:i},i))})]})]},o.label))})]}),US=()=>H.jsx(uh,{id:"contact",label:"Let’s collaborate.",eyebrow:"Contact",children:H.jsxs("div",{className:"grid gap-8 md:grid-cols-[3fr,2fr] md:items-start",children:[H.jsxs("div",{className:"space-y-4 text-sm text-white/75",children:[H.jsxs("p",{children:["If you're building something at the edge of"," ",H.jsx("span",{className:"text-neonBlue",children:"blockchain, ZK, or healthcare"}),"— I'd love to hear about it. I'm especially interested in roles and collaborations where smart contracts, zero-knowledge, and real-world systems actually meet."]}),H.jsx("p",{children:"I enjoy working close to the protocol and the product: designing primitives, tightening security assumptions, and then helping ship interfaces that real humans don't hate using."}),H.jsxs("div",{className:"space-y-1 text-sm",children:[H.jsxs("p",{children:[H.jsx("span",{className:"text-white/55",children:"Email: "}),H.jsx("a",{href:"mailto:saimaheshsure29@gmail.com",className:"text-neonBlue hover:underline",children:"saimaheshsure29@gmail.com"})]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/55",children:"Location: "}),"Amherst, MA · United States"]}),H.jsxs("p",{children:[H.jsx("span",{className:"text-white/55",children:"LinkedIn: "}),H.jsx("a",{href:"https://www.linkedin.com",target:"_blank",rel:"noreferrer",className:"text-neonBlue hover:underline",children:"View profile"})," ",H.jsx("span",{className:"text-[11px] text-white/50",children:"(will point this to my actual URL)"})]})]}),H.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[H.jsx("a",{href:"mailto:saimaheshsure29@gmail.com",className:"rounded-pill bg-gradient-to-r from-neonBlue to-neonOrange px-6 py-2.5 text-sm font-semibold text-white shadow-neon-blue transition hover:shadow-neon-orange",children:"Start a conversation"}),H.jsx("a",{href:"/Sai_Mahesh_resume.pdf",target:"_blank",className:"rounded-pill border border-white/20 bg-black/40 px-6 py-2.5 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/60 hover:text-white",children:"Download resume"})]})]}),H.jsxs("div",{className:"rounded-card border border-white/10 bg-black/60 p-5 text-xs text-white/75 backdrop-blur-xl",children:[H.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55",children:"What to include"}),H.jsx("p",{className:"mt-3",children:"A short note about the product, the team, and the kind of problem you're trying to solve goes a long way. I'm most excited by:"}),H.jsxs("ul",{className:"mt-3 space-y-1",children:[H.jsx("li",{children:"• ZK-based authentication, access control, and privacy rails"}),H.jsx("li",{children:"• Healthcare / fintech systems on Ethereum, L2s, or Polygon"}),H.jsx("li",{children:"• XR dashboards and control surfaces for complex operations"})]}),H.jsx("p",{className:"mt-4 text-[11px] text-white/55",children:"I'm not looking for generic mass outreach. If you care about strong engineering, clear threat models, and long-term impact, we'll get along well."})]})]})}),NS=()=>H.jsx("div",{className:"intro-overlay",children:H.jsxs("div",{className:"relative flex flex-col items-center gap-6",children:[H.jsx("div",{className:"intro-ring"}),H.jsx("div",{className:"intro-ring intro-ring--orange"}),H.jsx("div",{className:"intro-core"}),H.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-2",children:[H.jsx("span",{className:"rounded-full bg-black/50 px-4 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-300",children:"Mahesh.dev"}),H.jsx("h1",{className:"intro-title",children:"Booting ZK City"}),H.jsxs("p",{className:"intro-subtitle",children:["Deploying secure contracts",H.jsx("span",{className:"intro-cursor",children:"▍"})]})]})]})}),LS=()=>H.jsxs("div",{className:"bg-orbits",children:[H.jsxs("div",{className:"bg-orbits-inner",children:[H.jsx("div",{className:"intro-ring"}),H.jsx("div",{className:"intro-ring intro-ring--orange"}),H.jsx("div",{className:"intro-core"})]}),H.jsxs("div",{className:"bg-orbits-bottom",children:[H.jsx("div",{className:"intro-ring"}),H.jsx("div",{className:"intro-ring intro-ring--orange"}),H.jsx("div",{className:"intro-core"})]})]});const fh="181",OS=0,dx=1,FS=2,cg=1,PS=2,aa=3,Ya=0,Vn=1,sa=2,la=0,Es=1,hx=2,px=3,mx=4,zS=5,bs=100,BS=101,IS=102,HS=103,GS=104,VS=200,kS=201,XS=202,WS=203,Sd=204,bd=205,qS=206,jS=207,YS=208,ZS=209,KS=210,QS=211,JS=212,$S=213,eb=214,yd=0,Md=1,Ed=2,br=3,Td=4,Ad=5,Rd=6,Cd=7,ug=0,tb=1,nb=2,ja=0,ib=1,ab=2,sb=3,rb=4,ob=5,lb=6,cb=7,fg=300,yr=301,Mr=302,wd=303,Dd=304,Ac=306,Ud=1e3,ra=1001,Nd=1002,ti=1003,ub=1004,Ql=1005,di=1006,Xf=1007,Ms=1008,ua=1009,dg=1010,hg=1011,Uo=1012,dh=1013,As=1014,oa=1015,Ar=1016,hh=1017,ph=1018,No=1020,pg=35902,mg=35899,xg=1021,gg=1022,yi=1023,Lo=1026,Oo=1027,_g=1028,mh=1029,xh=1030,gh=1031,_h=1033,_c=33776,vc=33777,Sc=33778,bc=33779,Ld=35840,Od=35841,Fd=35842,Pd=35843,zd=36196,Bd=37492,Id=37496,Hd=37808,Gd=37809,Vd=37810,kd=37811,Xd=37812,Wd=37813,qd=37814,jd=37815,Yd=37816,Zd=37817,Kd=37818,Qd=37819,Jd=37820,$d=37821,eh=36492,th=36494,nh=36495,ih=36283,ah=36284,sh=36285,rh=36286,fb=3200,db=3201,hb=0,pb=1,Wa="",ei="srgb",Er="srgb-linear",Mc="linear",Vt="srgb",rr=7680,xx=519,mb=512,xb=513,gb=514,vg=515,_b=516,vb=517,Sb=518,bb=519,gx=35044,_x="300 es",Di=2e3,Ec=2001;function Sg(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Tc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yb(){const o=Tc("canvas");return o.style.display="block",o}const vx={};function Sx(...o){const t="THREE."+o.shift();console.log(t,...o)}function ft(...o){const t="THREE."+o.shift();console.warn(t,...o)}function sn(...o){const t="THREE."+o.shift();console.error(t,...o)}function Fo(...o){const t=o.join(" ");t in vx||(vx[t]=!0,ft(...o))}function Mb(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Rr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=Math.PI/180,oh=180/Math.PI;function Po(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function Et(o,t,i){return Math.max(t,Math.min(i,o))}function Eb(o,t){return(o%t+t)%t}function qf(o,t,i){return(1-i)*o+i*t}function Eo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,i=0){Ft.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],S=u[d+0],y=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h>=1){t[i+0]=S,t[i+1]=y,t[i+2]=A,t[i+3]=C;return}if(g!==C||m!==S||p!==y||_!==A){let b=m*S+p*y+_*A+g*C;b<0&&(S=-S,y=-y,A=-A,C=-C,b=-b);let v=1-h;if(b<.9995){const z=Math.acos(b),U=Math.sin(z);v=Math.sin(v*z)/U,h=Math.sin(h*z)/U,m=m*v+S*h,p=p*v+y*h,_=_*v+A*h,g=g*v+C*h}else{m=m*v+S*h,p=p*v+y*h,_=_*v+A*h,g=g*v+C*h;const z=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=z,p*=z,_*=z,g*=z}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=u[d],S=u[d+1],y=u[d+2],A=u[d+3];return t[i]=h*A+_*g+m*y-p*S,t[i+1]=m*A+_*S+p*g-h*y,t[i+2]=p*A+_*y+h*S-m*g,t[i+3]=_*A-h*g-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),g=h(u/2),S=m(s/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*_*g+p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g-S*y*A;break;case"YXZ":this._x=S*_*g+p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g+S*y*A;break;case"ZXY":this._x=S*_*g-p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g-S*y*A;break;case"ZYX":this._x=S*_*g-p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g+S*y*A;break;case"YZX":this._x=S*_*g+p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g-S*y*A;break;case"XZY":this._x=S*_*g-p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g+S*y*A;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=s+h+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Et(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-s*p,this._z=u*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(t=0,i=0,s=0){fe.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(bx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(bx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),_=2*(h*i-u*l),g=2*(u*s-d*i);return this.x=i+m*p+d*g-h*_,this.y=s+m*_+h*p-u*g,this.z=l+m*g+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return jf.copy(this).projectOnVector(t),this.sub(jf)}reflect(t){return this.sub(jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new fe,bx=new zo;class pt{constructor(t,i,s,l,u,d,h,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p)}set(t,i,s,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],g=s[7],S=s[2],y=s[5],A=s[8],C=l[0],b=l[3],v=l[6],z=l[1],U=l[4],B=l[7],q=l[2],L=l[5],F=l[8];return u[0]=d*C+h*z+m*q,u[3]=d*b+h*U+m*L,u[6]=d*v+h*B+m*F,u[1]=p*C+_*z+g*q,u[4]=p*b+_*U+g*L,u[7]=p*v+_*B+g*F,u[2]=S*C+y*z+A*q,u[5]=S*b+y*U+A*L,u[8]=S*v+y*B+A*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-s*u*_+s*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*d-h*p,S=h*m-_*u,y=p*u-d*m,A=i*g+s*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=g*C,t[1]=(l*p-_*s)*C,t[2]=(h*s-l*d)*C,t[3]=S*C,t[4]=(_*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=y*C,t[7]=(s*m-p*i)*C,t[8]=(d*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Yf.makeScale(t,i)),this}rotate(t){return this.premultiply(Yf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Yf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yf=new pt,yx=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mx=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tb(){const o={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Vt&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=Sr(l.r),l.g=Sr(l.g),l.b=Sr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Mc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Er]:{primaries:t,whitePoint:s,transfer:Mc,toXYZ:yx,fromXYZ:Mx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:t,whitePoint:s,transfer:Vt,toXYZ:yx,fromXYZ:Mx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const Ut=Tb();function ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Sr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let or;class Ab{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{or===void 0&&(or=Tc("canvas")),or.width=t.width,or.height=t.height;const l=or.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=or}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Tc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ca(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ca(i[s]/255)*255):i[s]=ca(i[s]);return{data:i,width:t.width,height:t.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rb=0;class vh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Po(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Zf(l[d].image)):u.push(Zf(l[d]))}else u=Zf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ab.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let Cb=0;const Kf=new fe;class On extends Rr{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ra,l=ra,u=di,d=Ms,h=yi,m=ua,p=On.DEFAULT_ANISOTROPY,_=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Po(),this.name="",this.source=new vh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kf).x}get height(){return this.source.getSize(Kf).y}get depth(){return this.source.getSize(Kf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ft(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ud:t.x=t.x-Math.floor(t.x);break;case ra:t.x=t.x<0?0:1;break;case Nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ud:t.y=t.y-Math.floor(t.y);break;case ra:t.y=t.y<0?0:1;break;case Nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=fg;On.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],S=m[1],y=m[5],A=m[9],C=m[2],b=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-C)<.01&&Math.abs(A-b)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+C)<.1&&Math.abs(A+b)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,B=(y+1)/2,q=(v+1)/2,L=(_+S)/4,F=(g+C)/4,ne=(A+b)/4;return U>B&&U>q?U<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(U),l=L/s,u=F/s):B>q?B<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),s=L/l,u=ne/l):q<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),s=F/u,l=ne/u),this.set(s,l,u,i),this}let z=Math.sqrt((b-A)*(b-A)+(g-C)*(g-C)+(S-_)*(S-_));return Math.abs(z)<.001&&(z=1),this.x=(b-A)/z,this.y=(g-C)/z,this.z=(S-_)/z,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this.w=Et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this.w=Et(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wb extends Rr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new On(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new vh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends wb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class bg extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Db extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=ra,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(t=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,gi):gi.fromBufferAttribute(u,d),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jl.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Jl.copy(s.boundingBox)),Jl.applyMatrix4(t.matrixWorld),this.union(Jl)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),$l.subVectors(this.max,To),lr.subVectors(t.a,To),cr.subVectors(t.b,To),ur.subVectors(t.c,To),Ia.subVectors(cr,lr),Ha.subVectors(ur,cr),ps.subVectors(lr,ur);let i=[0,-Ia.z,Ia.y,0,-Ha.z,Ha.y,0,-ps.z,ps.y,Ia.z,0,-Ia.x,Ha.z,0,-Ha.x,ps.z,0,-ps.x,-Ia.y,Ia.x,0,-Ha.y,Ha.x,0,-ps.y,ps.x,0];return!Qf(i,lr,cr,ur,$l)||(i=[1,0,0,0,1,0,0,0,1],!Qf(i,lr,cr,ur,$l))?!1:(ec.crossVectors(Ia,Ha),i=[ec.x,ec.y,ec.z],Qf(i,lr,cr,ur,$l))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ji=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],gi=new fe,Jl=new Bo,lr=new fe,cr=new fe,ur=new fe,Ia=new fe,Ha=new fe,ps=new fe,To=new fe,$l=new fe,ec=new fe,ms=new fe;function Qf(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){ms.fromArray(o,u);const h=l.x*Math.abs(ms.x)+l.y*Math.abs(ms.y)+l.z*Math.abs(ms.z),m=t.dot(ms),p=i.dot(ms),_=s.dot(ms);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const Ub=new Bo,Ao=new fe,Jf=new fe;class Sh{constructor(t=new fe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ub.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ao,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(Jf)),this.expandByPoint(Ao.copy(t.center).sub(Jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $i=new fe,$f=new fe,tc=new fe,Ga=new fe,ed=new fe,nc=new fe,td=new fe;class Nb{constructor(t=new fe,i=new fe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$i)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=$i.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):($i.copy(this.origin).addScaledVector(this.direction,i),$i.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){$f.copy(t).add(i).multiplyScalar(.5),tc.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub($f);const u=t.distanceTo(i)*.5,d=-this.direction.dot(tc),h=Ga.dot(this.direction),m=-Ga.dot(tc),p=Ga.lengthSq(),_=Math.abs(1-d*d);let g,S,y,A;if(_>0)if(g=d*m-h,S=d*h-m,A=u*_,g>=0)if(S>=-A)if(S<=A){const C=1/_;g*=C,S*=C,y=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S<=-A?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p):S<=A?(g=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy($f).addScaledVector(tc,S),y}intersectSphere(t,i){$i.subVectors(t.center,this.origin);const s=$i.dot(this.direction),l=$i.dot($i)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(h=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,$i)!==null}intersectTriangle(t,i,s,l,u){ed.subVectors(i,t),nc.subVectors(s,t),td.crossVectors(ed,nc);let d=this.direction.dot(td),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(nc.crossVectors(Ga,nc));if(m<0)return null;const p=h*this.direction.dot(ed.cross(Ga));if(p<0||m+p>d)return null;const _=-h*Ga.dot(td);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,i,s,l,u,d,h,m,p,_,g,S,y,A,C,b){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,p,_,g,S,y,A,C,b)}set(t,i,s,l,u,d,h,m,p,_,g,S,y,A,C,b){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=y,v[7]=A,v[11]=C,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/fr.setFromMatrixColumn(t,0).length(),u=1/fr.setFromMatrixColumn(t,1).length(),d=1/fr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=d*_,y=d*g,A=h*_,C=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+y*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*_,y=m*g,A=p*_,C=p*g;i[0]=S+C*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=y*h-A,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*_,y=m*g,A=p*_,C=p*g;i[0]=S-C*h,i[4]=-d*g,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*_,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*_,y=d*g,A=h*_,C=h*g;i[0]=m*_,i[4]=A*p-y,i[8]=S*p+C,i[1]=m*g,i[5]=C*p+S,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,y=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=C-S*g,i[8]=A*g+y,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*g+A,i[10]=S-C*g}else if(t.order==="XZY"){const S=d*m,y=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+C,i[5]=d*_,i[9]=y*g-A,i[2]=A*g-y,i[6]=h*_,i[10]=C*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lb,t,Ob)}lookAt(t,i,s){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Va.crossVectors(s,Jn),Va.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Va.crossVectors(s,Jn)),Va.normalize(),ic.crossVectors(Jn,Va),l[0]=Va.x,l[4]=ic.x,l[8]=Jn.x,l[1]=Va.y,l[5]=ic.y,l[9]=Jn.y,l[2]=Va.z,l[6]=ic.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],g=s[5],S=s[9],y=s[13],A=s[2],C=s[6],b=s[10],v=s[14],z=s[3],U=s[7],B=s[11],q=s[15],L=l[0],F=l[4],ne=l[8],w=l[12],R=l[1],k=l[5],ee=l[9],oe=l[13],xe=l[2],de=l[6],O=l[10],X=l[14],W=l[3],le=l[7],_e=l[11],N=l[15];return u[0]=d*L+h*R+m*xe+p*W,u[4]=d*F+h*k+m*de+p*le,u[8]=d*ne+h*ee+m*O+p*_e,u[12]=d*w+h*oe+m*X+p*N,u[1]=_*L+g*R+S*xe+y*W,u[5]=_*F+g*k+S*de+y*le,u[9]=_*ne+g*ee+S*O+y*_e,u[13]=_*w+g*oe+S*X+y*N,u[2]=A*L+C*R+b*xe+v*W,u[6]=A*F+C*k+b*de+v*le,u[10]=A*ne+C*ee+b*O+v*_e,u[14]=A*w+C*oe+b*X+v*N,u[3]=z*L+U*R+B*xe+q*W,u[7]=z*F+U*k+B*de+q*le,u[11]=z*ne+U*ee+B*O+q*_e,u[15]=z*w+U*oe+B*X+q*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],S=t[10],y=t[14],A=t[3],C=t[7],b=t[11],v=t[15];return A*(+u*m*g-l*p*g-u*h*S+s*p*S+l*h*y-s*m*y)+C*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*_-u*m*_)+b*(+i*p*g-i*h*y-u*d*g+s*d*y+u*h*_-s*p*_)+v*(-l*h*_-i*m*g+i*h*S+l*d*g-s*d*S+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],S=t[10],y=t[11],A=t[12],C=t[13],b=t[14],v=t[15],z=g*b*p-C*S*p+C*m*y-h*b*y-g*m*v+h*S*v,U=A*S*p-_*b*p-A*m*y+d*b*y+_*m*v-d*S*v,B=_*C*p-A*g*p+A*h*y-d*C*y-_*h*v+d*g*v,q=A*g*m-_*C*m-A*h*S+d*C*S+_*h*b-d*g*b,L=i*z+s*U+l*B+u*q;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return t[0]=z*F,t[1]=(C*S*u-g*b*u-C*l*y+s*b*y+g*l*v-s*S*v)*F,t[2]=(h*b*u-C*m*u+C*l*p-s*b*p-h*l*v+s*m*v)*F,t[3]=(g*m*u-h*S*u-g*l*p+s*S*p+h*l*y-s*m*y)*F,t[4]=U*F,t[5]=(_*b*u-A*S*u+A*l*y-i*b*y-_*l*v+i*S*v)*F,t[6]=(A*m*u-d*b*u-A*l*p+i*b*p+d*l*v-i*m*v)*F,t[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*y+i*m*y)*F,t[8]=B*F,t[9]=(A*g*u-_*C*u-A*s*y+i*C*y+_*s*v-i*g*v)*F,t[10]=(d*C*u-A*h*u+A*s*p-i*C*p-d*s*v+i*h*v)*F,t[11]=(_*h*u-d*g*u-_*s*p+i*g*p+d*s*y-i*h*y)*F,t[12]=q*F,t[13]=(_*C*l-A*g*l+A*s*S-i*C*S-_*s*b+i*g*b)*F,t[14]=(A*h*l-d*C*l-A*s*m+i*C*m+d*s*b-i*h*b)*F,t[15]=(d*g*l-_*h*l+_*s*m-i*g*m-d*s*S+i*h*S)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,g=h+h,S=u*p,y=u*_,A=u*g,C=d*_,b=d*g,v=h*g,z=m*p,U=m*_,B=m*g,q=s.x,L=s.y,F=s.z;return l[0]=(1-(C+v))*q,l[1]=(y+B)*q,l[2]=(A-U)*q,l[3]=0,l[4]=(y-B)*L,l[5]=(1-(S+v))*L,l[6]=(b+z)*L,l[7]=0,l[8]=(A+U)*F,l[9]=(b-z)*F,l[10]=(1-(S+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=fr.set(l[0],l[1],l[2]).length();const d=fr.set(l[4],l[5],l[6]).length(),h=fr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,_=1/d,g=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,i.setFromRotationMatrix(_i),s.x=u,s.y=d,s.z=h,this}makePerspective(t,i,s,l,u,d,h=Di,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(s-l),S=(i+t)/(i-t),y=(s+l)/(s-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Di)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Ec)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=Di,m=!1){const p=this.elements,_=2/(i-t),g=2/(s-l),S=-(i+t)/(i-t),y=-(s+l)/(s-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Di)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Ec)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const fr=new fe,_i=new mn,Lb=new fe(0,0,0),Ob=new fe(1,1,1),Va=new fe,ic=new fe,Jn=new fe,Ex=new mn,Tx=new zo;class fa{constructor(t=0,i=0,s=0,l=fa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Ex.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ex,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Tx.setFromEuler(this),this.setFromQuaternion(Tx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fa.DEFAULT_ORDER="XYZ";class yg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fb=0;const Ax=new fe,dr=new zo,ea=new mn,ac=new fe,Ro=new fe,Pb=new fe,zb=new zo,Rx=new fe(1,0,0),Cx=new fe(0,1,0),wx=new fe(0,0,1),Dx={type:"added"},Bb={type:"removed"},hr={type:"childadded",child:null},nd={type:"childremoved",child:null};class ni extends Rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new fe,i=new fa,s=new zo,l=new fe(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new pt}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(Rx,t)}rotateY(t){return this.rotateOnAxis(Cx,t)}rotateZ(t){return this.rotateOnAxis(wx,t)}translateOnAxis(t,i){return Ax.copy(t).applyQuaternion(this.quaternion),this.position.add(Ax.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Rx,t)}translateY(t){return this.translateOnAxis(Cx,t)}translateZ(t){return this.translateOnAxis(wx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ac.copy(t):ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Ro,ac,this.up):ea.lookAt(ac,Ro,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(ea),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(sn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dx),hr.child=t,this.dispatchEvent(hr),hr.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Bb),nd.child=t,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dx),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,Pb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,zb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),g=d(t.shapes),S=d(t.skeletons),y=d(t.animations),A=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}ni.DEFAULT_UP=new fe(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new fe,ta=new fe,id=new fe,na=new fe,pr=new fe,mr=new fe,Ux=new fe,ad=new fe,sd=new fe,rd=new fe,od=new tn,ld=new tn,cd=new tn;class bi{constructor(t=new fe,i=new fe,s=new fe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),vi.subVectors(t,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){vi.subVectors(l,i),ta.subVectors(s,i),id.subVectors(t,i);const d=vi.dot(vi),h=vi.dot(ta),m=vi.dot(id),p=ta.dot(ta),_=ta.dot(id),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,y=(p*m-h*_)*S,A=(d*_-h*m)*S;return u.set(1-y-A,A,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(d,na.y),m.addScaledVector(h,na.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(t,i),ld.fromBufferAttribute(t,s),cd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(od,u.x),d.addScaledVector(ld,u.y),d.addScaledVector(cd,u.z),d}static isFrontFacing(t,i,s,l){return vi.subVectors(s,i),ta.subVectors(t,i),vi.cross(ta).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ta.subVectors(this.a,this.b),vi.cross(ta).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;pr.subVectors(l,s),mr.subVectors(u,s),ad.subVectors(t,s);const m=pr.dot(ad),p=mr.dot(ad);if(m<=0&&p<=0)return i.copy(s);sd.subVectors(t,l);const _=pr.dot(sd),g=mr.dot(sd);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(pr,d);rd.subVectors(t,u);const y=pr.dot(rd),A=mr.dot(rd);if(A>=0&&y<=A)return i.copy(u);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(mr,h);const b=_*A-y*g;if(b<=0&&g-_>=0&&y-A>=0)return Ux.subVectors(u,l),h=(g-_)/(g-_+(y-A)),i.copy(l).addScaledVector(Ux,h);const v=1/(b+C+S);return d=C*v,h=S*v,i.copy(s).addScaledVector(pr,d).addScaledVector(mr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},sc={h:0,s:0,l:0};function ud(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class kt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ut.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ut.workingColorSpace){if(t=Eb(t,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=ud(d,u,t+1/3),this.g=ud(d,u,t),this.b=ud(d,u,t-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(t,i=ei){function s(u){u!==void 0&&parseFloat(u)<1&&ft("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ft("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ei){const s=Mg[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ei){return Ut.workingToColorSpace(Un.copy(this),t),Math.round(Et(Un.r*255,0,255))*65536+Math.round(Et(Un.g*255,0,255))*256+Math.round(Et(Un.b*255,0,255))}getHexString(t=ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ut.workingColorSpace){Ut.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,u=Un.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ei){Ut.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==ei?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(sc);const s=qf(ka.h,sc.h,i),l=qf(ka.s,sc.s,i),u=qf(ka.l,sc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new kt;kt.NAMES=Mg;let Ib=0;class Rc extends Rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=Es,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=bd,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ft(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ft(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sd&&(s.blendSrc=this.blendSrc),this.blendDst!==bd&&(s.blendDst=this.blendDst),this.blendEquation!==bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Eg extends Rc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fa,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new fe,rc=new Ft;let Hb=0;class Mi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=gx,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)rc.fromBufferAttribute(this,i),rc.applyMatrix3(t),this.setXY(i,rc.x,rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Eo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gx&&(t.usage=this.usage),t}}class Tg extends Mi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ag extends Mi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ts extends Mi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Gb=0;const fi=new mn,fd=new ni,xr=new fe,$n=new Bo,Co=new Bo,yn=new fe;class ha extends Rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sg(t)?Ag:Tg)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new pt().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,s){return fi.makeTranslation(t,i,s),this.applyMatrix4(fi),this}scale(t,i,s){return fi.makeScale(t,i,s),this.applyMatrix4(fi),this}lookAt(t){return fd.lookAt(t),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ts(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(t){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Co.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors($n.min,Co.min),$n.expandByPoint(yn),yn.addVectors($n.max,Co.max),$n.expandByPoint(yn)):($n.expandByPoint(Co.min),$n.expandByPoint(Co.max))}$n.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(xr.fromBufferAttribute(t,p),yn.add(xr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ne=0;ne<s.count;ne++)h[ne]=new fe,m[ne]=new fe;const p=new fe,_=new fe,g=new fe,S=new Ft,y=new Ft,A=new Ft,C=new fe,b=new fe;function v(ne,w,R){p.fromBufferAttribute(s,ne),_.fromBufferAttribute(s,w),g.fromBufferAttribute(s,R),S.fromBufferAttribute(u,ne),y.fromBufferAttribute(u,w),A.fromBufferAttribute(u,R),_.sub(p),g.sub(p),y.sub(S),A.sub(S);const k=1/(y.x*A.y-A.x*y.y);isFinite(k)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(g,-y.y).multiplyScalar(k),b.copy(g).multiplyScalar(y.x).addScaledVector(_,-A.x).multiplyScalar(k),h[ne].add(C),h[w].add(C),h[R].add(C),m[ne].add(b),m[w].add(b),m[R].add(b))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let ne=0,w=z.length;ne<w;++ne){const R=z[ne],k=R.start,ee=R.count;for(let oe=k,xe=k+ee;oe<xe;oe+=3)v(t.getX(oe+0),t.getX(oe+1),t.getX(oe+2))}const U=new fe,B=new fe,q=new fe,L=new fe;function F(ne){q.fromBufferAttribute(l,ne),L.copy(q);const w=h[ne];U.copy(w),U.sub(q.multiplyScalar(q.dot(w))).normalize(),B.crossVectors(L,w);const k=B.dot(m[ne])<0?-1:1;d.setXYZW(ne,U.x,U.y,U.z,k)}for(let ne=0,w=z.length;ne<w;++ne){const R=z[ne],k=R.start,ee=R.count;for(let oe=k,xe=k+ee;oe<xe;oe+=3)F(t.getX(oe+0)),F(t.getX(oe+1)),F(t.getX(oe+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new fe,u=new fe,d=new fe,h=new fe,m=new fe,p=new fe,_=new fe,g=new fe;if(t)for(let S=0,y=t.count;S<y;S+=3){const A=t.getX(S+0),C=t.getX(S+1),b=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,b),h.add(_),m.add(_),p.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,S=new p.constructor(m.length*_);let y=0,A=0;for(let C=0,b=m.length;C<b;C++){h.isInterleavedBufferAttribute?y=m[C]*h.data.stride+h.offset:y=m[C]*_;for(let v=0;v<_;v++)S[A++]=p[y++]}return new Mi(S,_,g)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ha,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=t(S,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nx=new mn,xs=new Nb,oc=new Sh,Lx=new fe,lc=new fe,cc=new fe,uc=new fe,dd=new fe,fc=new fe,Ox=new fe,dc=new fe;class da extends ni{constructor(t=new ha,i=new Eg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){fc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(dd.fromBufferAttribute(g,t),d?fc.addScaledVector(dd,_):fc.addScaledVector(dd.sub(i),_))}i.add(fc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(u),xs.copy(t.ray).recast(t.near),!(oc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(oc,Lx)===null||xs.origin.distanceToSquared(Lx)>(t.far-t.near)**2))&&(Nx.copy(u).invert(),xs.copy(t.ray).applyMatrix4(Nx),!(s.boundingBox!==null&&xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,xs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const b=S[A],v=d[b.materialIndex],z=Math.max(b.start,y.start),U=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let B=z,q=U;B<q;B+=3){const L=h.getX(B),F=h.getX(B+1),ne=h.getX(B+2);l=hc(this,v,t,s,p,_,g,L,F,ne),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let b=A,v=C;b<v;b+=3){const z=h.getX(b),U=h.getX(b+1),B=h.getX(b+2);l=hc(this,d,t,s,p,_,g,z,U,B),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const b=S[A],v=d[b.materialIndex],z=Math.max(b.start,y.start),U=Math.min(m.count,Math.min(b.start+b.count,y.start+y.count));for(let B=z,q=U;B<q;B+=3){const L=B,F=B+1,ne=B+2;l=hc(this,v,t,s,p,_,g,L,F,ne),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let b=A,v=C;b<v;b+=3){const z=b,U=b+1,B=b+2;l=hc(this,d,t,s,p,_,g,z,U,B),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function Vb(o,t,i,s,l,u,d,h){let m;if(t.side===Vn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===Ya,h),m===null)return null;dc.copy(h),dc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(dc);return p<i.near||p>i.far?null:{distance:p,point:dc.clone(),object:o}}function hc(o,t,i,s,l,u,d,h,m,p){o.getVertexPosition(h,lc),o.getVertexPosition(m,cc),o.getVertexPosition(p,uc);const _=Vb(o,t,i,s,lc,cc,uc,Ox);if(_){const g=new fe;bi.getBarycoord(Ox,lc,cc,uc,g),l&&(_.uv=bi.getInterpolatedAttribute(l,h,m,p,g,new Ft)),u&&(_.uv1=bi.getInterpolatedAttribute(u,h,m,p,g,new Ft)),d&&(_.normal=bi.getInterpolatedAttribute(d,h,m,p,g,new fe),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new fe,materialIndex:0};bi.getNormal(lc,cc,uc,S.normal),_.face=S,_.barycoord=g}return _}class Io extends ha{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],g=[];let S=0,y=0;A("z","y","x",-1,-1,s,i,t,d,u,0),A("z","y","x",1,-1,s,i,-t,d,u,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Ts(p,3)),this.setAttribute("normal",new Ts(_,3)),this.setAttribute("uv",new Ts(g,2));function A(C,b,v,z,U,B,q,L,F,ne,w){const R=B/F,k=q/ne,ee=B/2,oe=q/2,xe=L/2,de=F+1,O=ne+1;let X=0,W=0;const le=new fe;for(let _e=0;_e<O;_e++){const N=_e*k-oe;for(let ae=0;ae<de;ae++){const be=ae*R-ee;le[C]=be*z,le[b]=N*U,le[v]=xe,p.push(le.x,le.y,le.z),le[C]=0,le[b]=0,le[v]=L>0?1:-1,_.push(le.x,le.y,le.z),g.push(ae/F),g.push(1-_e/ne),X+=1}}for(let _e=0;_e<ne;_e++)for(let N=0;N<F;N++){const ae=S+N+de*_e,be=S+N+de*(_e+1),Ae=S+(N+1)+de*(_e+1),Pe=S+(N+1)+de*_e;m.push(ae,be,Pe),m.push(be,Ae,Pe),W+=6}h.addGroup(y,W,w),y+=W,S+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Tr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Ln(o){const t={};for(let i=0;i<o.length;i++){const s=Tr(o[i]);for(const l in s)t[l]=s[l]}return t}function kb(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Rg(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}const Xb={clone:Tr,merge:Ln};var Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Rc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=kb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Cg extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new fe,Fx=new Ft,Px=new Ft;class Si extends Cg{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(Wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,Fx,Px),i.subVectors(Px,Fx)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,_r=1;class jb extends ni{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(gr,_r,t,i);l.layers=this.layers,this.add(l);const u=new Si(gr,_r,t,i);u.layers=this.layers,this.add(u);const d=new Si(gr,_r,t,i);d.layers=this.layers,this.add(d);const h=new Si(gr,_r,t,i);h.layers=this.layers,this.add(h);const m=new Si(gr,_r,t,i);m.layers=this.layers,this.add(m);const p=new Si(gr,_r,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Di)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ec)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(g,S,y),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class wg extends On{constructor(t=[],i=yr,s,l,u,d,h,m,p,_){super(t,i,s,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yb extends Rs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new wg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Io(5,5,5),u=new Ui({name:"CubemapFromEquirect",uniforms:Tr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:la});u.uniforms.tEquirect.value=i;const d=new da(l,u),h=i.minFilter;return i.minFilter===Ms&&(i.minFilter=di),new jb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}class pc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zb={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const b=i.getJointPose(C,s),v=this._getHandJoint(p,C);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Zb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new pc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Kb extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fa,this.environmentIntensity=1,this.environmentRotation=new fa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Qb extends On{constructor(t=null,i=1,s=1,l,u,d,h,m,p=ti,_=ti,g,S){super(null,d,h,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new fe,Jb=new fe,$b=new pt;class Ss{constructor(t=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=pd.subVectors(s,i).cross(Jb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(pd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||$b.getNormalMatrix(t),l=this.coplanarPoint(pd).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Sh,ey=new Ft(.5,.5),mc=new fe;class Dg{constructor(t=new Ss,i=new Ss,s=new Ss,l=new Ss,u=new Ss,d=new Ss){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Di,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],y=u[7],A=u[8],C=u[9],b=u[10],v=u[11],z=u[12],U=u[13],B=u[14],q=u[15];if(l[0].setComponents(p-d,y-_,v-A,q-z).normalize(),l[1].setComponents(p+d,y+_,v+A,q+z).normalize(),l[2].setComponents(p+h,y+g,v+C,q+U).normalize(),l[3].setComponents(p-h,y-g,v-C,q-U).normalize(),s)l[4].setComponents(m,S,b,B).normalize(),l[5].setComponents(p-m,y-S,v-b,q-B).normalize();else if(l[4].setComponents(p-m,y-S,v-b,q-B).normalize(),i===Di)l[5].setComponents(p+m,y+S,v+b,q+B).normalize();else if(i===Ec)l[5].setComponents(m,S,b,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const i=ey.distanceTo(t.center);return gs.radius=.7071067811865476+i,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(mc.x=l.normal.x>0?t.max.x:t.min.x,mc.y=l.normal.y>0?t.max.y:t.min.y,mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ug extends On{constructor(t,i,s=As,l,u,d,h=ti,m=ti,p,_=Lo,g=1){if(_!==Lo&&_!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,d,h,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ng extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cc extends ha{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,g=t/h,S=i/m,y=[],A=[],C=[],b=[];for(let v=0;v<_;v++){const z=v*S-d;for(let U=0;U<p;U++){const B=U*g-u;A.push(B,-z,0),C.push(0,0,1),b.push(U/h),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<h;z++){const U=z+p*v,B=z+p*(v+1),q=z+1+p*(v+1),L=z+1+p*v;y.push(U,B,L),y.push(B,q,L)}this.setIndex(y),this.setAttribute("position",new Ts(A,3)),this.setAttribute("normal",new Ts(C,3)),this.setAttribute("uv",new Ts(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cc(t.width,t.height,t.widthSegments,t.heightSegments)}}class ty extends Ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ny extends Rc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iy extends Rc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lg extends Cg{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ay extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class sy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function zx(o,t,i,s){const l=ry(s);switch(i){case xg:return o*t;case _g:return o*t/l.components*l.byteLength;case mh:return o*t/l.components*l.byteLength;case xh:return o*t*2/l.components*l.byteLength;case gh:return o*t*2/l.components*l.byteLength;case gg:return o*t*3/l.components*l.byteLength;case yi:return o*t*4/l.components*l.byteLength;case _h:return o*t*4/l.components*l.byteLength;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Sc:case bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Od:case Pd:return Math.max(o,16)*Math.max(t,8)/4;case Ld:case Fd:return Math.max(o,8)*Math.max(t,8)/2;case zd:case Bd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Id:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case qd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case jd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case eh:case th:case nh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ih:case ah:return Math.ceil(o/4)*Math.ceil(t/4)*8;case sh:case rh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ry(o){switch(o){case ua:case dg:return{byteLength:1,components:1};case Uo:case hg:case Ar:return{byteLength:2,components:1};case hh:case ph:return{byteLength:2,components:4};case As:case dh:case oa:return{byteLength:4,components:1};case pg:case mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);function Og(){let o=null,t=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function oy(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<g.length;y++){const A=g[S],C=g[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,g[S]=C)}g.length=S+1;for(let y=0,A=g.length;y<A;y++){const C=g[y];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ny=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ly=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:uy,alphamap_pars_fragment:fy,alphatest_fragment:dy,alphatest_pars_fragment:hy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:xy,batching_vertex:gy,begin_vertex:_y,beginnormal_vertex:vy,bsdfs:Sy,iridescence_fragment:by,bumpmap_pars_fragment:yy,clipping_planes_fragment:My,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ty,clipping_planes_vertex:Ay,color_fragment:Ry,color_pars_fragment:Cy,color_pars_vertex:wy,color_vertex:Dy,common:Uy,cube_uv_reflection_fragment:Ny,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Oy,displacementmap_vertex:Fy,emissivemap_fragment:Py,emissivemap_pars_fragment:zy,colorspace_fragment:By,colorspace_pars_fragment:Iy,envmap_fragment:Hy,envmap_common_pars_fragment:Gy,envmap_pars_fragment:Vy,envmap_pars_vertex:ky,envmap_physical_pars_fragment:eM,envmap_vertex:Xy,fog_vertex:Wy,fog_pars_vertex:qy,fog_fragment:jy,fog_pars_fragment:Yy,gradientmap_pars_fragment:Zy,lightmap_pars_fragment:Ky,lights_lambert_fragment:Qy,lights_lambert_pars_fragment:Jy,lights_pars_begin:$y,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:aM,lights_physical_fragment:sM,lights_physical_pars_fragment:rM,lights_fragment_begin:oM,lights_fragment_maps:lM,lights_fragment_end:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:xM,map_particle_pars_fragment:gM,metalnessmap_fragment:_M,metalnessmap_pars_fragment:vM,morphinstance_vertex:SM,morphcolor_vertex:bM,morphnormal_vertex:yM,morphtarget_pars_vertex:MM,morphtarget_vertex:EM,normal_fragment_begin:TM,normal_fragment_maps:AM,normal_pars_fragment:RM,normal_pars_vertex:CM,normal_vertex:wM,normalmap_pars_fragment:DM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:LM,iridescence_pars_fragment:OM,opaque_fragment:FM,packing:PM,premultiplied_alpha_fragment:zM,project_vertex:BM,dithering_fragment:IM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:VM,shadowmap_pars_fragment:kM,shadowmap_pars_vertex:XM,shadowmap_vertex:WM,shadowmask_pars_fragment:qM,skinbase_vertex:jM,skinning_pars_vertex:YM,skinning_vertex:ZM,skinnormal_vertex:KM,specularmap_fragment:QM,specularmap_pars_fragment:JM,tonemapping_fragment:$M,tonemapping_pars_fragment:e1,transmission_fragment:t1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:s1,worldpos_vertex:r1,background_vert:o1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:d1,depth_vert:h1,depth_frag:p1,distanceRGBA_vert:m1,distanceRGBA_frag:x1,equirect_vert:g1,equirect_frag:_1,linedashed_vert:v1,linedashed_frag:S1,meshbasic_vert:b1,meshbasic_frag:y1,meshlambert_vert:M1,meshlambert_frag:E1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:N1,meshtoon_vert:L1,meshtoon_frag:O1,points_vert:F1,points_frag:P1,shadow_vert:z1,shadow_frag:B1,sprite_vert:I1,sprite_frag:H1},Oe={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},wi={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new kt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new kt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};wi.physical={uniforms:Ln([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const xc={r:0,b:0,g:0},_s=new fa,G1=new mn;function V1(o,t,i,s,l,u,d){const h=new kt(0);let m=u===!0?0:1,p,_,g=null,S=0,y=null;function A(U){let B=U.isScene===!0?U.background:null;return B&&B.isTexture&&(B=(U.backgroundBlurriness>0?i:t).get(B)),B}function C(U){let B=!1;const q=A(U);q===null?v(h,m):q&&q.isColor&&(v(q,1),B=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?s.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||B)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(U,B){const q=A(B);q&&(q.isCubeTexture||q.mapping===Ac)?(_===void 0&&(_=new da(new Io(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Tr(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,F,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_s.copy(B.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,q.isCubeTexture&&q.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),_.material.uniforms.envMap.value=q,_.material.uniforms.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(_s)),_.material.toneMapped=Ut.getTransfer(q.colorSpace)!==Vt,(g!==q||S!==q.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=q,S=q.version,y=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):q&&q.isTexture&&(p===void 0&&(p=new da(new Cc(2,2),new Ui({name:"BackgroundMaterial",uniforms:Tr(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=q,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(q.colorSpace)!==Vt,q.matrixAutoUpdate===!0&&q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(q.matrix),(g!==q||S!==q.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=q,S=q.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,B){U.getRGB(xc,Rg(o)),s.buffers.color.setClear(xc.r,xc.g,xc.b,B,d)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,B=1){h.set(U),m=B,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:C,addToRenderList:b,dispose:z}}function k1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let u=l,d=!1;function h(R,k,ee,oe,xe){let de=!1;const O=g(oe,ee,k);u!==O&&(u=O,p(u.object)),de=y(R,oe,ee,xe),de&&A(R,oe,ee,xe),xe!==null&&t.update(xe,o.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,B(R,k,ee,oe),xe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(xe).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,k,ee){const oe=ee.wireframe===!0;let xe=s[R.id];xe===void 0&&(xe={},s[R.id]=xe);let de=xe[k.id];de===void 0&&(de={},xe[k.id]=de);let O=de[oe];return O===void 0&&(O=S(m()),de[oe]=O),O}function S(R){const k=[],ee=[],oe=[];for(let xe=0;xe<i;xe++)k[xe]=0,ee[xe]=0,oe[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:oe,object:R,attributes:{},index:null}}function y(R,k,ee,oe){const xe=u.attributes,de=k.attributes;let O=0;const X=ee.getAttributes();for(const W in X)if(X[W].location>=0){const _e=xe[W];let N=de[W];if(N===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),_e===void 0||_e.attribute!==N||N&&_e.data!==N.data)return!0;O++}return u.attributesNum!==O||u.index!==oe}function A(R,k,ee,oe){const xe={},de=k.attributes;let O=0;const X=ee.getAttributes();for(const W in X)if(X[W].location>=0){let _e=de[W];_e===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor));const N={};N.attribute=_e,_e&&_e.data&&(N.data=_e.data),xe[W]=N,O++}u.attributes=xe,u.attributesNum=O,u.index=oe}function C(){const R=u.newAttributes;for(let k=0,ee=R.length;k<ee;k++)R[k]=0}function b(R){v(R,0)}function v(R,k){const ee=u.newAttributes,oe=u.enabledAttributes,xe=u.attributeDivisors;ee[R]=1,oe[R]===0&&(o.enableVertexAttribArray(R),oe[R]=1),xe[R]!==k&&(o.vertexAttribDivisor(R,k),xe[R]=k)}function z(){const R=u.newAttributes,k=u.enabledAttributes;for(let ee=0,oe=k.length;ee<oe;ee++)k[ee]!==R[ee]&&(o.disableVertexAttribArray(ee),k[ee]=0)}function U(R,k,ee,oe,xe,de,O){O===!0?o.vertexAttribIPointer(R,k,ee,xe,de):o.vertexAttribPointer(R,k,ee,oe,xe,de)}function B(R,k,ee,oe){C();const xe=oe.attributes,de=ee.getAttributes(),O=k.defaultAttributeValues;for(const X in de){const W=de[X];if(W.location>=0){let le=xe[X];if(le===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const _e=le.normalized,N=le.itemSize,ae=t.get(le);if(ae===void 0)continue;const be=ae.buffer,Ae=ae.type,Pe=ae.bytesPerElement,ie=Ae===o.INT||Ae===o.UNSIGNED_INT||le.gpuType===dh;if(le.isInterleavedBufferAttribute){const ue=le.data,Ce=ue.stride,Ie=le.offset;if(ue.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)v(W.location+qe,ue.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let qe=0;qe<W.locationSize;qe++)b(W.location+qe);o.bindBuffer(o.ARRAY_BUFFER,be);for(let qe=0;qe<W.locationSize;qe++)U(W.location+qe,N/W.locationSize,Ae,_e,Ce*Pe,(Ie+N/W.locationSize*qe)*Pe,ie)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)v(W.location+ue,le.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<W.locationSize;ue++)b(W.location+ue);o.bindBuffer(o.ARRAY_BUFFER,be);for(let ue=0;ue<W.locationSize;ue++)U(W.location+ue,N/W.locationSize,Ae,_e,N*Pe,N/W.locationSize*ue*Pe,ie)}}else if(O!==void 0){const _e=O[X];if(_e!==void 0)switch(_e.length){case 2:o.vertexAttrib2fv(W.location,_e);break;case 3:o.vertexAttrib3fv(W.location,_e);break;case 4:o.vertexAttrib4fv(W.location,_e);break;default:o.vertexAttrib1fv(W.location,_e)}}}}z()}function q(){ne();for(const R in s){const k=s[R];for(const ee in k){const oe=k[ee];for(const xe in oe)_(oe[xe].object),delete oe[xe];delete k[ee]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const k=s[R.id];for(const ee in k){const oe=k[ee];for(const xe in oe)_(oe[xe].object),delete oe[xe];delete k[ee]}delete s[R.id]}function F(R){for(const k in s){const ee=s[k];if(ee[R.id]===void 0)continue;const oe=ee[R.id];for(const xe in oe)_(oe[xe].object),delete oe[xe];delete ee[R.id]}}function ne(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:w,dispose:q,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:b,disableUnusedAttributes:z}}function X1(o,t,i){let s;function l(p){s=p}function u(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function d(p,_,g){g!==0&&(o.drawArraysInstanced(s,p,_,g),i.update(_,s,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,g);let y=0;for(let A=0;A<g;A++)y+=_[A];i.update(y,s,1)}function m(p,_,g,S){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)d(p[A],_[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,g);let A=0;for(let C=0;C<g;C++)A+=_[C]*S[C];i.update(A,s,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function W1(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==yi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const ne=F===Ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ua&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==oa&&!ne)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ft("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),B=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),q=A>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:z,maxVaryings:U,maxFragmentUniforms:B,vertexTextures:q,maxSamples:L}}function q1(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new Ss,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||s!==0||l;return l=S,s=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,y){const A=g.clippingPlanes,C=g.clipIntersection,b=g.clipShadows,v=o.get(g);if(!l||A===null||A.length===0||u&&!b)u?_(null):p();else{const z=u?0:s,U=z*4;let B=v.clippingState||null;m.value=B,B=_(A,S,U,y);for(let q=0;q!==U;++q)B[q]=i[q];v.clippingState=B,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(g,S,y,A){const C=g!==null?g.length:0;let b=null;if(C!==0){if(b=m.value,A!==!0||b===null){const v=y+C*4,z=S.matrixWorldInverse;h.getNormalMatrix(z),(b===null||b.length<v)&&(b=new Float32Array(v));for(let U=0,B=y;U!==C;++U,B+=4)d.copy(g[U]).applyMatrix4(z,h),d.normal.toArray(b,B),b[B+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,b}}function j1(o){let t=new WeakMap;function i(d,h){return h===wd?d.mapping=yr:h===Dd&&(d.mapping=Mr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===wd||h===Dd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Yb(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const qa=4,Bx=[.125,.215,.35,.446,.526,.582],ys=20,Y1=256,wo=new Lg,Ix=new kt;let md=null,xd=0,gd=0,_d=!1;const Z1=new fe;class Hx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=Z1}=u;md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(md,xd,gd),this._renderer.xr.enabled=_d,t.scissorTest=!1,vr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===yr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:di,minFilter:di,generateMipmaps:!1,type:Ar,format:yi,colorSpace:Er,depthBuffer:!1},l=Gx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gx(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=K1(u)),this._blurMaterial=J1(u,t,i)}return l}_compileMaterial(t){const i=new da(new ha,t);this._renderer.compile(i,wo)}_sceneToCubeUV(t,i,s,l,u){const m=new Si(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(Ix),g.toneMapping=ja,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new da(new Io,new Eg({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let v=!1;const z=t.background;z?z.isColor&&(b.color.copy(z),t.background=null,v=!0):(b.color.copy(Ix),v=!0);for(let U=0;U<6;U++){const B=U%3;B===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):B===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const q=this._cubeSize;vr(l,B*q,U>2?q:0,q,q),g.setRenderTarget(l),v&&g.render(C,m),g.render(t,m)}g.toneMapping=y,g.autoClear=S,t.background=z}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===yr||t.mapping===Mr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;vr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,wo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const z=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=Q1(this._lodMax,z,U)}const d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=.05+p*.95,y=g*S,{_lodMax:A}=this,C=this._sizeLods[s],b=3*C*(s>A-qa?s-A+qa:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=A-i,vr(u,b,v,3*C,2*C),l.setRenderTarget(u),l.render(h,wo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,vr(t,b,v,3*C,2*C),l.setRenderTarget(t),l.render(h,wo)}_blur(t,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",u),this._halfBlur(d,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ys-1),C=u/A,b=isFinite(u)?1+Math.floor(_*C):ys;b>ys&&ft(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ys}`);const v=[];let z=0;for(let F=0;F<ys;++F){const ne=F/C,w=Math.exp(-ne*ne/2);v.push(w),F===0?z+=w:F<b&&(z+=2*w)}for(let F=0;F<v.length;F++)v[F]=v[F]/z;S.envMap.value=t.texture,S.samples.value=b,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-s;const B=this._sizeLods[l],q=3*B*(l>U-qa?l-U+qa:0),L=4*(this._cubeSize-B);vr(i,q,L,3*B,2*B),m.setRenderTarget(i),m.render(g,wo)}}function K1(o){const t=[],i=[],s=[];let l=o;const u=o-qa+1+Bx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-qa?m=Bx[d-o+qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,A=6,C=3,b=2,v=1,z=new Float32Array(C*A*y),U=new Float32Array(b*A*y),B=new Float32Array(v*A*y);for(let L=0;L<y;L++){const F=L%3*2/3-1,ne=L>2?0:-1,w=[F,ne,0,F+2/3,ne,0,F+2/3,ne+1,0,F,ne,0,F+2/3,ne+1,0,F,ne+1,0];z.set(w,C*A*L),U.set(S,b*A*L);const R=[L,L,L,L,L,L];B.set(R,v*A*L)}const q=new ha;q.setAttribute("position",new Mi(z,C)),q.setAttribute("uv",new Mi(U,b)),q.setAttribute("faceIndex",new Mi(B,v)),s.push(new da(q,null)),l>qa&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Gx(o,t,i){const s=new Rs(o,t,i);return s.texture.mapping=Ac,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function vr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function Q1(o,t,i){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function J1(o,t,i){const s=new Float32Array(ys),l=new fe(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function Vx(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function kx(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $1(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===wd||m===Dd,_=m===yr||m===Mr;if(p||_){let g=t.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Hx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Hx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function e3(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fo("WebGLRenderer: "+s+" extension not supported."),l}}}function t3(o,t,i,s){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(t.remove(y),u.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,A=g.attributes.position;let C=0;if(y!==null){const z=y.array;C=y.version;for(let U=0,B=z.length;U<B;U+=3){const q=z[U+0],L=z[U+1],F=z[U+2];S.push(q,L,L,F,F,q)}}else if(A!==void 0){const z=A.array;C=A.version;for(let U=0,B=z.length/3-1;U<B;U+=3){const q=U+0,L=U+1,F=U+2;S.push(q,L,L,F,F,q)}}else return;const b=new(Sg(S)?Ag:Tg)(S,1);b.version=C;const v=u.get(g);v&&t.remove(v),u.set(g,b)}function _(g){const S=u.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function n3(o,t,i){let s;function l(S){s=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(s,y,u,S*d),i.update(y,s,1)}function p(S,y,A){A!==0&&(o.drawElementsInstanced(s,y,u,S*d,A),i.update(y,s,A))}function _(S,y,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,S,0,A);let b=0;for(let v=0;v<A;v++)b+=y[v];i.update(b,s,1)}function g(S,y,A,C){if(A===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<S.length;v++)p(S[v]/d,y[v],C[v]);else{b.multiDrawElementsInstancedWEBGL(s,y,0,u,S,0,C,0,A);let v=0;for(let z=0;z<A;z++)v+=y[z]*C[z];i.update(v,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function i3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function a3(o,t,i){const s=new WeakMap,l=new tn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let S=s.get(h);if(S===void 0||S.count!==g){let R=function(){ne.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let B=0;A===!0&&(B=1),C===!0&&(B=2),b===!0&&(B=3);let q=h.attributes.position.count*B,L=1;q>t.maxTextureSize&&(L=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const F=new Float32Array(q*L*4*g),ne=new bg(F,q,L,g);ne.type=oa,ne.needsUpdate=!0;const w=B*4;for(let k=0;k<g;k++){const ee=v[k],oe=z[k],xe=U[k],de=q*L*4*k;for(let O=0;O<ee.count;O++){const X=O*w;A===!0&&(l.fromBufferAttribute(ee,O),F[de+X+0]=l.x,F[de+X+1]=l.y,F[de+X+2]=l.z,F[de+X+3]=0),C===!0&&(l.fromBufferAttribute(oe,O),F[de+X+4]=l.x,F[de+X+5]=l.y,F[de+X+6]=l.z,F[de+X+7]=0),b===!0&&(l.fromBufferAttribute(xe,O),F[de+X+8]=l.x,F[de+X+9]=l.y,F[de+X+10]=l.z,F[de+X+11]=xe.itemSize===4?l.w:1)}}S={count:g,texture:ne,size:new Ft(q,L)},s.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let b=0;b<p.length;b++)A+=p[b];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function s3(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Fg=new On,Xx=new Ug(1,1),Pg=new bg,zg=new Db,Bg=new wg,Wx=[],qx=[],jx=new Float32Array(16),Yx=new Float32Array(9),Zx=new Float32Array(4);function Cr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Wx[l];if(u===void 0&&(u=new Float32Array(l),Wx[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function xn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Dc(o,t){let i=qx[t];i===void 0&&(i=new Int32Array(t),qx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function r3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function o3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function l3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function c3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function u3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;Zx.set(s),o.uniformMatrix2fv(this.addr,!1,Zx),gn(i,s)}}function f3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;Yx.set(s),o.uniformMatrix3fv(this.addr,!1,Yx),gn(i,s)}}function d3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;jx.set(s),o.uniformMatrix4fv(this.addr,!1,jx),gn(i,s)}}function h3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function p3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function m3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function x3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function g3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function _3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function v3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function S3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function b3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Xx.compareFunction=vg,u=Xx):u=Fg,i.setTexture2D(t||u,l)}function y3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||zg,l)}function M3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Bg,l)}function E3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Pg,l)}function T3(o){switch(o){case 5126:return r3;case 35664:return o3;case 35665:return l3;case 35666:return c3;case 35674:return u3;case 35675:return f3;case 35676:return d3;case 5124:case 35670:return h3;case 35667:case 35671:return p3;case 35668:case 35672:return m3;case 35669:case 35673:return x3;case 5125:return g3;case 36294:return _3;case 36295:return v3;case 36296:return S3;case 35678:case 36198:case 36298:case 36306:case 35682:return b3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return M3;case 36289:case 36303:case 36311:case 36292:return E3}}function A3(o,t){o.uniform1fv(this.addr,t)}function R3(o,t){const i=Cr(t,this.size,2);o.uniform2fv(this.addr,i)}function C3(o,t){const i=Cr(t,this.size,3);o.uniform3fv(this.addr,i)}function w3(o,t){const i=Cr(t,this.size,4);o.uniform4fv(this.addr,i)}function D3(o,t){const i=Cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function U3(o,t){const i=Cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function N3(o,t){const i=Cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function L3(o,t){o.uniform1iv(this.addr,t)}function O3(o,t){o.uniform2iv(this.addr,t)}function F3(o,t){o.uniform3iv(this.addr,t)}function P3(o,t){o.uniform4iv(this.addr,t)}function z3(o,t){o.uniform1uiv(this.addr,t)}function B3(o,t){o.uniform2uiv(this.addr,t)}function I3(o,t){o.uniform3uiv(this.addr,t)}function H3(o,t){o.uniform4uiv(this.addr,t)}function G3(o,t,i){const s=this.cache,l=t.length,u=Dc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Fg,u[d])}function V3(o,t,i){const s=this.cache,l=t.length,u=Dc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||zg,u[d])}function k3(o,t,i){const s=this.cache,l=t.length,u=Dc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Bg,u[d])}function X3(o,t,i){const s=this.cache,l=t.length,u=Dc(i,l);xn(s,u)||(o.uniform1iv(this.addr,u),gn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Pg,u[d])}function W3(o){switch(o){case 5126:return A3;case 35664:return R3;case 35665:return C3;case 35666:return w3;case 35674:return D3;case 35675:return U3;case 35676:return N3;case 5124:case 35670:return L3;case 35667:case 35671:return O3;case 35668:case 35672:return F3;case 35669:case 35673:return P3;case 5125:return z3;case 36294:return B3;case 36295:return I3;case 36296:return H3;case 35678:case 36198:case 36298:case 36306:case 35682:return G3;case 35679:case 36299:case 36307:return V3;case 35680:case 36300:case 36308:case 36293:return k3;case 36289:case 36303:case 36311:case 36292:return X3}}class q3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=T3(i.type)}}class j3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=W3(i.type)}}class Y3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function Kx(o,t){o.seq.push(t),o.map[t.id]=t}function Z3(o,t,i){const s=o.name,l=s.length;for(vd.lastIndex=0;;){const u=vd.exec(s),d=vd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Kx(i,p===void 0?new q3(h,o,t):new j3(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new Y3(h),Kx(i,g)),i=g}}}class yc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);Z3(u,d,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Qx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const K3=37297;let Q3=0;function J3(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Jx=new pt;function $3(o){Ut._getMatrix(Jx,Ut.workingColorSpace,o);const t=`mat3( ${Jx.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Mc:return[t,"LinearTransferOETF"];case Vt:return[t,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function $x(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+J3(o.getShaderSource(t),h)}else return u}function eE(o,t){const i=$3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function tE(o,t){let i;switch(t){case ib:i="Linear";break;case ab:i="Reinhard";break;case sb:i="Cineon";break;case rb:i="ACESFilmic";break;case lb:i="AgX";break;case cb:i="Neutral";break;case ob:i="Custom";break;default:ft("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gc=new fe;function nE(){Ut.getLuminanceCoefficients(gc);const o=gc.x.toFixed(4),t=gc.y.toFixed(4),i=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function aE(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function sE(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Do(o){return o!==""}function eg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rE=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(o){return o.replace(rE,lE)}const oE=new Map;function lE(o,t){let i=mt[t];if(i===void 0){const s=oE.get(t);if(s!==void 0)i=mt[s],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return lh(i)}const cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(o){return o.replace(cE,uE)}function uE(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ig(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fE(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===cg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===PS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function dE(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yr:case Mr:t="ENVMAP_TYPE_CUBE";break;case Ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function pE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ug:t="ENVMAP_BLENDING_MULTIPLY";break;case tb:t="ENVMAP_BLENDING_MIX";break;case nb:t="ENVMAP_BLENDING_ADD";break}return t}function mE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function xE(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=fE(i),p=dE(i),_=hE(i),g=pE(i),S=mE(i),y=iE(i),A=aE(u),C=l.createProgram();let b,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Do).join(`
`),v.length>0&&(v+=`
`)):(b=[ig(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),v=[ig(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?mt.tonemapping_pars_fragment:"",i.toneMapping!==ja?tE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,eE("linearToOutputTexel",i.outputColorSpace),nE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),d=lh(d),d=eg(d,i),d=tg(d,i),h=lh(h),h=eg(h,i),h=tg(h,i),d=ng(d),h=ng(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===_x?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_x?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=z+b+d,B=z+v+h,q=Qx(l,l.VERTEX_SHADER,U),L=Qx(l,l.FRAGMENT_SHADER,B);l.attachShader(C,q),l.attachShader(C,L),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(k){if(o.debug.checkShaderErrors){const ee=l.getProgramInfoLog(C)||"",oe=l.getShaderInfoLog(q)||"",xe=l.getShaderInfoLog(L)||"",de=ee.trim(),O=oe.trim(),X=xe.trim();let W=!0,le=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,q,L);else{const _e=$x(l,q,"vertex"),N=$x(l,L,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+de+`
`+_e+`
`+N)}else de!==""?ft("WebGLProgram: Program Info Log:",de):(O===""||X==="")&&(le=!1);le&&(k.diagnostics={runnable:W,programLog:de,vertexShader:{log:O,prefix:b},fragmentShader:{log:X,prefix:v}})}l.deleteShader(q),l.deleteShader(L),ne=new yc(l,C),w=sE(l,C)}let ne;this.getUniforms=function(){return ne===void 0&&F(this),ne};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,K3)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Q3++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=q,this.fragmentShader=L,this}let gE=0;class _E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new vE(t),i.set(t,s)),s}}class vE{constructor(t){this.id=gE++,this.code=t,this.usedTimes=0}}function SE(o,t,i,s,l,u,d){const h=new yg,m=new _E,p=new Set,_=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,R,k,ee,oe){const xe=ee.fog,de=oe.geometry,O=w.isMeshStandardMaterial?ee.environment:null,X=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),W=X&&X.mapping===Ac?X.image.height:null,le=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&ft("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const _e=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,N=_e!==void 0?_e.length:0;let ae=0;de.morphAttributes.position!==void 0&&(ae=1),de.morphAttributes.normal!==void 0&&(ae=2),de.morphAttributes.color!==void 0&&(ae=3);let be,Ae,Pe,ie;if(le){const Rt=wi[le];be=Rt.vertexShader,Ae=Rt.fragmentShader}else be=w.vertexShader,Ae=w.fragmentShader,m.update(w),Pe=m.getVertexShaderID(w),ie=m.getFragmentShaderID(w);const ue=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),Ie=oe.isInstancedMesh===!0,qe=oe.isBatchedMesh===!0,rt=!!w.map,Yt=!!w.matcap,ot=!!X,xt=!!w.aoMap,I=!!w.lightMap,ct=!!w.bumpMap,st=!!w.normalMap,At=!!w.displacementMap,Ge=!!w.emissiveMap,Lt=!!w.metalnessMap,Ze=!!w.roughnessMap,nt=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,K=w.iridescence>0,me=w.sheen>0,Me=w.transmission>0,ce=nt&&!!w.anisotropyMap,Ye=D&&!!w.clearcoatMap,Ee=D&&!!w.clearcoatNormalMap,Xe=D&&!!w.clearcoatRoughnessMap,Ue=K&&!!w.iridescenceMap,ve=K&&!!w.iridescenceThicknessMap,ye=me&&!!w.sheenColorMap,Be=me&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Fe=!!w.specularColorMap,it=!!w.specularIntensityMap,G=Me&&!!w.transmissionMap,Ne=Me&&!!w.thicknessMap,we=!!w.gradientMap,De=!!w.alphaMap,Te=w.alphaTest>0,Se=!!w.alphaHash,Ve=!!w.extensions;let at=ja;w.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(at=o.toneMapping);const Bt={shaderID:le,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Ae,defines:w.defines,customVertexShaderID:Pe,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:qe,batchingColor:qe&&oe._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&oe.instanceColor!==null,instancingMorph:Ie&&oe.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ue===null?o.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Er,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Yt,envMap:ot,envMapMode:ot&&X.mapping,envMapCubeUVHeight:W,aoMap:xt,lightMap:I,bumpMap:ct,normalMap:st,displacementMap:S&&At,emissiveMap:Ge,normalMapObjectSpace:st&&w.normalMapType===pb,normalMapTangentSpace:st&&w.normalMapType===hb,metalnessMap:Lt,roughnessMap:Ze,anisotropy:nt,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ye,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Xe,dispersion:M,iridescence:K,iridescenceMap:Ue,iridescenceThicknessMap:ve,sheen:me,sheenColorMap:ye,sheenRoughnessMap:Be,specularMap:ze,specularColorMap:Fe,specularIntensityMap:it,transmission:Me,transmissionMap:G,thicknessMap:Ne,gradientMap:we,opaque:w.transparent===!1&&w.blending===Es&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:Te,alphaHash:Se,combine:w.combine,mapUv:rt&&C(w.map.channel),aoMapUv:xt&&C(w.aoMap.channel),lightMapUv:I&&C(w.lightMap.channel),bumpMapUv:ct&&C(w.bumpMap.channel),normalMapUv:st&&C(w.normalMap.channel),displacementMapUv:At&&C(w.displacementMap.channel),emissiveMapUv:Ge&&C(w.emissiveMap.channel),metalnessMapUv:Lt&&C(w.metalnessMap.channel),roughnessMapUv:Ze&&C(w.roughnessMap.channel),anisotropyMapUv:ce&&C(w.anisotropyMap.channel),clearcoatMapUv:Ye&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Be&&C(w.sheenRoughnessMap.channel),specularMapUv:ze&&C(w.specularMap.channel),specularColorMapUv:Fe&&C(w.specularColorMap.channel),specularIntensityMapUv:it&&C(w.specularIntensityMap.channel),transmissionMapUv:G&&C(w.transmissionMap.channel),thicknessMapUv:Ne&&C(w.thicknessMap.channel),alphaMapUv:De&&C(w.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(st||nt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!de.attributes.uv&&(rt||De),fog:!!xe,useFog:w.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ce,skinning:oe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&Ut.getTransfer(w.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ge&&w.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(w.emissiveMap.colorSpace)===Vt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||qe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)R.push(k),R.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(z(R,w),U(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function z(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function B(w){const R=A[w.type];let k;if(R){const ee=wi[R];k=Xb.clone(ee.uniforms)}else k=w.uniforms;return k}function q(w,R){let k;for(let ee=0,oe=_.length;ee<oe;ee++){const xe=_[ee];if(xe.cacheKey===R){k=xe,++k.usedTimes;break}}return k===void 0&&(k=new xE(o,R,w,u),_.push(k)),k}function L(w){if(--w.usedTimes===0){const R=_.indexOf(w);_[R]=_[_.length-1],_.pop(),w.destroy()}}function F(w){m.remove(w)}function ne(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:B,acquireProgram:q,releaseProgram:L,releaseShaderCache:F,programs:_,dispose:ne}}function bE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function yE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ag(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function sg(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(g,S,y,A,C,b){let v=o[t];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:A,renderOrder:g.renderOrder,z:C,group:b},o[t]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=A,v.renderOrder=g.renderOrder,v.z=C,v.group=b),t++,v}function h(g,S,y,A,C,b){const v=d(g,S,y,A,C,b);y.transmission>0?s.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,S,y,A,C,b){const v=d(g,S,y,A,C,b);y.transmission>0?s.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||yE),s.length>1&&s.sort(S||ag),l.length>1&&l.sort(S||ag)}function _(){for(let g=t,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function ME(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new sg,o.set(s,[d])):l>=u.length?(d=new sg,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function EE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new fe,color:new kt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return o[t.id]=i,i}}}function TE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let AE=0;function RE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function CE(o){const t=new EE,i=TE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new fe);const l=new fe,u=new mn,d=new mn;function h(p){let _=0,g=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let y=0,A=0,C=0,b=0,v=0,z=0,U=0,B=0,q=0,L=0,F=0;p.sort(RE);for(let w=0,R=p.length;w<R;w++){const k=p[w],ee=k.color,oe=k.intensity,xe=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)_+=ee.r*oe,g+=ee.g*oe,S+=ee.b*oe;else if(k.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(k.sh.coefficients[O],oe);F++}else if(k.isDirectionalLight){const O=t.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,W=i.get(k);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,s.directionalShadow[y]=W,s.directionalShadowMap[y]=de,s.directionalShadowMatrix[y]=k.shadow.matrix,z++}s.directional[y]=O,y++}else if(k.isSpotLight){const O=t.get(k);O.position.setFromMatrixPosition(k.matrixWorld),O.color.copy(ee).multiplyScalar(oe),O.distance=xe,O.coneCos=Math.cos(k.angle),O.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),O.decay=k.decay,s.spot[C]=O;const X=k.shadow;if(k.map&&(s.spotLightMap[q]=k.map,q++,X.updateMatrices(k),k.castShadow&&L++),s.spotLightMatrix[C]=X.matrix,k.castShadow){const W=i.get(k);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,s.spotShadow[C]=W,s.spotShadowMap[C]=de,B++}C++}else if(k.isRectAreaLight){const O=t.get(k);O.color.copy(ee).multiplyScalar(oe),O.halfWidth.set(k.width*.5,0,0),O.halfHeight.set(0,k.height*.5,0),s.rectArea[b]=O,b++}else if(k.isPointLight){const O=t.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),O.distance=k.distance,O.decay=k.decay,k.castShadow){const X=k.shadow,W=i.get(k);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,s.pointShadow[A]=W,s.pointShadowMap[A]=de,s.pointShadowMatrix[A]=k.shadow.matrix,U++}s.point[A]=O,A++}else if(k.isHemisphereLight){const O=t.get(k);O.skyColor.copy(k.color).multiplyScalar(oe),O.groundColor.copy(k.groundColor).multiplyScalar(oe),s.hemi[v]=O,v++}}b>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=S;const ne=s.hash;(ne.directionalLength!==y||ne.pointLength!==A||ne.spotLength!==C||ne.rectAreaLength!==b||ne.hemiLength!==v||ne.numDirectionalShadows!==z||ne.numPointShadows!==U||ne.numSpotShadows!==B||ne.numSpotMaps!==q||ne.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=b,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=B+q-L,s.spotLightMap.length=q,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=F,ne.directionalLength=y,ne.pointLength=A,ne.spotLength=C,ne.rectAreaLength=b,ne.hemiLength=v,ne.numDirectionalShadows=z,ne.numPointShadows=U,ne.numSpotShadows=B,ne.numSpotMaps=q,ne.numLightProbes=F,s.version=AE++)}function m(p,_){let g=0,S=0,y=0,A=0,C=0;const b=_.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const U=p[v];if(U.isDirectionalLight){const B=s.directional[g];B.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(b),g++}else if(U.isSpotLight){const B=s.spot[y];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),B.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(b),y++}else if(U.isRectAreaLight){const B=s.rectArea[A];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),d.identity(),u.copy(U.matrixWorld),u.premultiply(b),d.extractRotation(u),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),B.halfWidth.applyMatrix4(d),B.halfHeight.applyMatrix4(d),A++}else if(U.isPointLight){const B=s.point[S];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),S++}else if(U.isHemisphereLight){const B=s.hemi[C];B.direction.setFromMatrixPosition(U.matrixWorld),B.direction.transformDirection(b),C++}}}return{setup:h,setupView:m,state:s}}function rg(o){const t=new CE(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function u(_){i.push(_)}function d(_){s.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function wE(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new rg(o),t.set(l,[h])):u>=d.length?(h=new rg(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NE(o,t,i){let s=new Dg;const l=new Ft,u=new Ft,d=new tn,h=new ny({depthPacking:db}),m=new iy,p={},_=i.maxTextureSize,g={[Ya]:Vn,[Vn]:Ya,[sa]:sa},S=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:DE,fragmentShader:UE}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new ha;A.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new da(A,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cg;let v=this.type;this.render=function(L,F,ne){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(la),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const oe=v!==aa&&this.type===aa,xe=v===aa&&this.type!==aa;for(let de=0,O=L.length;de<O;de++){const X=L[de],W=X.shadow;if(W===void 0){ft("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const le=W.getFrameExtents();if(l.multiply(le),u.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/le.x),l.x=u.x*le.x,W.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/le.y),l.y=u.y*le.y,W.mapSize.y=u.y)),W.map===null||oe===!0||xe===!0){const N=this.type!==aa?{minFilter:ti,magFilter:ti}:{};W.map!==null&&W.map.dispose(),W.map=new Rs(l.x,l.y,N),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const _e=W.getViewportCount();for(let N=0;N<_e;N++){const ae=W.getViewport(N);d.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),ee.viewport(d),W.updateMatrices(X,N),s=W.getFrustum(),B(F,ne,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===aa&&z(W,ne),W.needsUpdate=!1}v=this.type,b.needsUpdate=!1,o.setRenderTarget(w,R,k)};function z(L,F){const ne=t.update(C);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Rs(l.x,l.y)),S.uniforms.shadow_pass.value=L.map.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(F,null,ne,S,C,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(F,null,ne,y,C,null)}function U(L,F,ne,w){let R=null;const k=ne.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)R=k;else if(R=ne.isPointLight===!0?m:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ee=R.uuid,oe=F.uuid;let xe=p[ee];xe===void 0&&(xe={},p[ee]=xe);let de=xe[oe];de===void 0&&(de=R.clone(),xe[oe]=de,F.addEventListener("dispose",q)),R=de}if(R.visible=F.visible,R.wireframe=F.wireframe,w===aa?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,ne.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=o.properties.get(R);ee.light=ne}return R}function B(L,F,ne,w,R){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===aa)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,L.matrixWorld);const oe=t.update(L),xe=L.material;if(Array.isArray(xe)){const de=oe.groups;for(let O=0,X=de.length;O<X;O++){const W=de[O],le=xe[W.materialIndex];if(le&&le.visible){const _e=U(L,le,w,R);L.onBeforeShadow(o,L,F,ne,oe,_e,W),o.renderBufferDirect(ne,null,oe,_e,L,W),L.onAfterShadow(o,L,F,ne,oe,_e,W)}}}else if(xe.visible){const de=U(L,xe,w,R);L.onBeforeShadow(o,L,F,ne,oe,de,null),o.renderBufferDirect(ne,null,oe,de,L,null),L.onAfterShadow(o,L,F,ne,oe,de,null)}}const ee=L.children;for(let oe=0,xe=ee.length;oe<xe;oe++)B(ee[oe],F,ne,w,R)}function q(L){L.target.removeEventListener("dispose",q);for(const ne in p){const w=p[ne],R=L.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const LE={[yd]:Md,[Ed]:Rd,[Td]:Cd,[br]:Ad,[Md]:yd,[Rd]:Ed,[Cd]:Td,[Ad]:br};function OE(o,t){function i(){let G=!1;const Ne=new tn;let we=null;const De=new tn(0,0,0,0);return{setMask:function(Te){we!==Te&&!G&&(o.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){G=Te},setClear:function(Te,Se,Ve,at,Bt){Bt===!0&&(Te*=at,Se*=at,Ve*=at),Ne.set(Te,Se,Ve,at),De.equals(Ne)===!1&&(o.clearColor(Te,Se,Ve,at),De.copy(Ne))},reset:function(){G=!1,we=null,De.set(-1,0,0,0)}}}function s(){let G=!1,Ne=!1,we=null,De=null,Te=null;return{setReversed:function(Se){if(Ne!==Se){const Ve=t.get("EXT_clip_control");Se?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),Ne=Se;const at=Te;Te=null,this.setClear(at)}},getReversed:function(){return Ne},setTest:function(Se){Se?ue(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(Se){we!==Se&&!G&&(o.depthMask(Se),we=Se)},setFunc:function(Se){if(Ne&&(Se=LE[Se]),De!==Se){switch(Se){case yd:o.depthFunc(o.NEVER);break;case Md:o.depthFunc(o.ALWAYS);break;case Ed:o.depthFunc(o.LESS);break;case br:o.depthFunc(o.LEQUAL);break;case Td:o.depthFunc(o.EQUAL);break;case Ad:o.depthFunc(o.GEQUAL);break;case Rd:o.depthFunc(o.GREATER);break;case Cd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}De=Se}},setLocked:function(Se){G=Se},setClear:function(Se){Te!==Se&&(Ne&&(Se=1-Se),o.clearDepth(Se),Te=Se)},reset:function(){G=!1,we=null,De=null,Te=null,Ne=!1}}}function l(){let G=!1,Ne=null,we=null,De=null,Te=null,Se=null,Ve=null,at=null,Bt=null;return{setTest:function(Rt){G||(Rt?ue(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(Rt){Ne!==Rt&&!G&&(o.stencilMask(Rt),Ne=Rt)},setFunc:function(Rt,Cn,kn){(we!==Rt||De!==Cn||Te!==kn)&&(o.stencilFunc(Rt,Cn,kn),we=Rt,De=Cn,Te=kn)},setOp:function(Rt,Cn,kn){(Se!==Rt||Ve!==Cn||at!==kn)&&(o.stencilOp(Rt,Cn,kn),Se=Rt,Ve=Cn,at=kn)},setLocked:function(Rt){G=Rt},setClear:function(Rt){Bt!==Rt&&(o.clearStencil(Rt),Bt=Rt)},reset:function(){G=!1,Ne=null,we=null,De=null,Te=null,Se=null,Ve=null,at=null,Bt=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],A=null,C=!1,b=null,v=null,z=null,U=null,B=null,q=null,L=null,F=new kt(0,0,0),ne=0,w=!1,R=null,k=null,ee=null,oe=null,xe=null;const de=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,X=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=X>=2);let le=null,_e={};const N=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),be=new tn().fromArray(N),Ae=new tn().fromArray(ae);function Pe(G,Ne,we,De){const Te=new Uint8Array(4),Se=o.createTexture();o.bindTexture(G,Se),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ve=0;Ve<we;Ve++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,De,0,o.RGBA,o.UNSIGNED_BYTE,Te):o.texImage2D(Ne+Ve,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Te);return Se}const ie={};ie[o.TEXTURE_2D]=Pe(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=Pe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=Pe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=Pe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ue(o.DEPTH_TEST),d.setFunc(br),ct(!1),st(dx),ue(o.CULL_FACE),xt(la);function ue(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function Ce(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Ie(G,Ne){return g[G]!==Ne?(o.bindFramebuffer(G,Ne),g[G]=Ne,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ne),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function qe(G,Ne){let we=y,De=!1;if(G){we=S.get(Ne),we===void 0&&(we=[],S.set(Ne,we));const Te=G.textures;if(we.length!==Te.length||we[0]!==o.COLOR_ATTACHMENT0){for(let Se=0,Ve=Te.length;Se<Ve;Se++)we[Se]=o.COLOR_ATTACHMENT0+Se;we.length=Te.length,De=!0}}else we[0]!==o.BACK&&(we[0]=o.BACK,De=!0);De&&o.drawBuffers(we)}function rt(G){return A!==G?(o.useProgram(G),A=G,!0):!1}const Yt={[bs]:o.FUNC_ADD,[BS]:o.FUNC_SUBTRACT,[IS]:o.FUNC_REVERSE_SUBTRACT};Yt[HS]=o.MIN,Yt[GS]=o.MAX;const ot={[VS]:o.ZERO,[kS]:o.ONE,[XS]:o.SRC_COLOR,[Sd]:o.SRC_ALPHA,[KS]:o.SRC_ALPHA_SATURATE,[YS]:o.DST_COLOR,[qS]:o.DST_ALPHA,[WS]:o.ONE_MINUS_SRC_COLOR,[bd]:o.ONE_MINUS_SRC_ALPHA,[ZS]:o.ONE_MINUS_DST_COLOR,[jS]:o.ONE_MINUS_DST_ALPHA,[QS]:o.CONSTANT_COLOR,[JS]:o.ONE_MINUS_CONSTANT_COLOR,[$S]:o.CONSTANT_ALPHA,[eb]:o.ONE_MINUS_CONSTANT_ALPHA};function xt(G,Ne,we,De,Te,Se,Ve,at,Bt,Rt){if(G===la){C===!0&&(Ce(o.BLEND),C=!1);return}if(C===!1&&(ue(o.BLEND),C=!0),G!==zS){if(G!==b||Rt!==w){if((v!==bs||B!==bs)&&(o.blendEquation(o.FUNC_ADD),v=bs,B=bs),Rt)switch(G){case Es:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hx:o.blendFunc(o.ONE,o.ONE);break;case px:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case mx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:sn("WebGLState: Invalid blending: ",G);break}else switch(G){case Es:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case px:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mx:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",G);break}z=null,U=null,q=null,L=null,F.set(0,0,0),ne=0,b=G,w=Rt}return}Te=Te||Ne,Se=Se||we,Ve=Ve||De,(Ne!==v||Te!==B)&&(o.blendEquationSeparate(Yt[Ne],Yt[Te]),v=Ne,B=Te),(we!==z||De!==U||Se!==q||Ve!==L)&&(o.blendFuncSeparate(ot[we],ot[De],ot[Se],ot[Ve]),z=we,U=De,q=Se,L=Ve),(at.equals(F)===!1||Bt!==ne)&&(o.blendColor(at.r,at.g,at.b,Bt),F.copy(at),ne=Bt),b=G,w=!1}function I(G,Ne){G.side===sa?Ce(o.CULL_FACE):ue(o.CULL_FACE);let we=G.side===Vn;Ne&&(we=!we),ct(we),G.blending===Es&&G.transparent===!1?xt(la):xt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const De=G.stencilWrite;h.setTest(De),De&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function ct(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function st(G){G!==OS?(ue(o.CULL_FACE),G!==k&&(G===dx?o.cullFace(o.BACK):G===FS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),k=G}function At(G){G!==ee&&(O&&o.lineWidth(G),ee=G)}function Ge(G,Ne,we){G?(ue(o.POLYGON_OFFSET_FILL),(oe!==Ne||xe!==we)&&(o.polygonOffset(Ne,we),oe=Ne,xe=we)):Ce(o.POLYGON_OFFSET_FILL)}function Lt(G){G?ue(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function Ze(G){G===void 0&&(G=o.TEXTURE0+de-1),le!==G&&(o.activeTexture(G),le=G)}function nt(G,Ne,we){we===void 0&&(le===null?we=o.TEXTURE0+de-1:we=le);let De=_e[we];De===void 0&&(De={type:void 0,texture:void 0},_e[we]=De),(De.type!==G||De.texture!==Ne)&&(le!==we&&(o.activeTexture(we),le=we),o.bindTexture(G,Ne||ie[G]),De.type=G,De.texture=Ne)}function D(){const G=_e[le];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function me(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Me(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ce(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ee(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Xe(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ue(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ve(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ye(G){be.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function Be(G){Ae.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ae.copy(G))}function ze(G,Ne){let we=p.get(Ne);we===void 0&&(we=new WeakMap,p.set(Ne,we));let De=we.get(G);De===void 0&&(De=o.getUniformBlockIndex(Ne,G.name),we.set(G,De))}function Fe(G,Ne){const De=p.get(Ne).get(G);m.get(Ne)!==De&&(o.uniformBlockBinding(Ne,De,G.__bindingPointIndex),m.set(Ne,De))}function it(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},le=null,_e={},g={},S=new WeakMap,y=[],A=null,C=!1,b=null,v=null,z=null,U=null,B=null,q=null,L=null,F=new kt(0,0,0),ne=0,w=!1,R=null,k=null,ee=null,oe=null,xe=null,be.set(0,0,o.canvas.width,o.canvas.height),Ae.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ue,disable:Ce,bindFramebuffer:Ie,drawBuffers:qe,useProgram:rt,setBlending:xt,setMaterial:I,setFlipSided:ct,setCullFace:st,setLineWidth:At,setPolygonOffset:Ge,setScissorTest:Lt,activeTexture:Ze,bindTexture:nt,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:K,texImage2D:Ue,texImage3D:ve,updateUBOMapping:ze,uniformBlockBinding:Fe,texStorage2D:Ee,texStorage3D:Xe,texSubImage2D:me,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ye,scissor:ye,viewport:Be,reset:it}}function FE(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,M){return y?new OffscreenCanvas(D,M):Tc("canvas")}function C(D,M,K){let me=1;const Me=nt(D);if((Me.width>K||Me.height>K)&&(me=K/Math.max(Me.width,Me.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(me*Me.width),Ye=Math.floor(me*Me.height);g===void 0&&(g=A(ce,Ye));const Ee=M?A(ce,Ye):g;return Ee.width=ce,Ee.height=Ye,Ee.getContext("2d").drawImage(D,0,0,ce,Ye),ft("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ce+"x"+Ye+")."),Ee}else return"data"in D&&ft("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),D;return D}function b(D){return D.generateMipmaps}function v(D){o.generateMipmap(D)}function z(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(D,M,K,me,Me=!1){if(D!==null){if(o[D]!==void 0)return o[D];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=M;if(M===o.RED&&(K===o.FLOAT&&(ce=o.R32F),K===o.HALF_FLOAT&&(ce=o.R16F),K===o.UNSIGNED_BYTE&&(ce=o.R8)),M===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.R8UI),K===o.UNSIGNED_SHORT&&(ce=o.R16UI),K===o.UNSIGNED_INT&&(ce=o.R32UI),K===o.BYTE&&(ce=o.R8I),K===o.SHORT&&(ce=o.R16I),K===o.INT&&(ce=o.R32I)),M===o.RG&&(K===o.FLOAT&&(ce=o.RG32F),K===o.HALF_FLOAT&&(ce=o.RG16F),K===o.UNSIGNED_BYTE&&(ce=o.RG8)),M===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RG8UI),K===o.UNSIGNED_SHORT&&(ce=o.RG16UI),K===o.UNSIGNED_INT&&(ce=o.RG32UI),K===o.BYTE&&(ce=o.RG8I),K===o.SHORT&&(ce=o.RG16I),K===o.INT&&(ce=o.RG32I)),M===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ce=o.RGB16UI),K===o.UNSIGNED_INT&&(ce=o.RGB32UI),K===o.BYTE&&(ce=o.RGB8I),K===o.SHORT&&(ce=o.RGB16I),K===o.INT&&(ce=o.RGB32I)),M===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ce=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ce=o.RGBA16UI),K===o.UNSIGNED_INT&&(ce=o.RGBA32UI),K===o.BYTE&&(ce=o.RGBA8I),K===o.SHORT&&(ce=o.RGBA16I),K===o.INT&&(ce=o.RGBA32I)),M===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(ce=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ce=o.R11F_G11F_B10F)),M===o.RGBA){const Ye=Me?Mc:Ut.getTransfer(me);K===o.FLOAT&&(ce=o.RGBA32F),K===o.HALF_FLOAT&&(ce=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ce=Ye===Vt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ce=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ce=o.RGB5_A1)}return(ce===o.R16F||ce===o.R32F||ce===o.RG16F||ce===o.RG32F||ce===o.RGBA16F||ce===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ce}function B(D,M){let K;return D?M===null||M===As||M===No?K=o.DEPTH24_STENCIL8:M===oa?K=o.DEPTH32F_STENCIL8:M===Uo&&(K=o.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===As||M===No?K=o.DEPTH_COMPONENT24:M===oa?K=o.DEPTH_COMPONENT32F:M===Uo&&(K=o.DEPTH_COMPONENT16),K}function q(D,M){return b(D)===!0||D.isFramebufferTexture&&D.minFilter!==ti&&D.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function L(D){const M=D.target;M.removeEventListener("dispose",L),ne(M),M.isVideoTexture&&_.delete(M)}function F(D){const M=D.target;M.removeEventListener("dispose",F),R(M)}function ne(D){const M=s.get(D);if(M.__webglInit===void 0)return;const K=D.source,me=S.get(K);if(me){const Me=me[M.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&w(D),Object.keys(me).length===0&&S.delete(K)}s.remove(D)}function w(D){const M=s.get(D);o.deleteTexture(M.__webglTexture);const K=D.source,me=S.get(K);delete me[M.__cacheKey],d.memory.textures--}function R(D){const M=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(M.__webglFramebuffer[me]))for(let Me=0;Me<M.__webglFramebuffer[me].length;Me++)o.deleteFramebuffer(M.__webglFramebuffer[me][Me]);else o.deleteFramebuffer(M.__webglFramebuffer[me]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[me])}else{if(Array.isArray(M.__webglFramebuffer))for(let me=0;me<M.__webglFramebuffer.length;me++)o.deleteFramebuffer(M.__webglFramebuffer[me]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let me=0;me<M.__webglColorRenderbuffer.length;me++)M.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[me]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=D.textures;for(let me=0,Me=K.length;me<Me;me++){const ce=s.get(K[me]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),d.memory.textures--),s.remove(K[me])}s.remove(D)}let k=0;function ee(){k=0}function oe(){const D=k;return D>=l.maxTextures&&ft("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function xe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function de(D,M){const K=s.get(D);if(D.isVideoTexture&&Lt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const me=D.image;if(me===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(K,D,M);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+M)}function O(D,M){const K=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){ie(K,D,M);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+M)}function X(D,M){const K=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){ie(K,D,M);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+M)}function W(D,M){const K=s.get(D);if(D.version>0&&K.__version!==D.version){ue(K,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+M)}const le={[Ud]:o.REPEAT,[ra]:o.CLAMP_TO_EDGE,[Nd]:o.MIRRORED_REPEAT},_e={[ti]:o.NEAREST,[ub]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Xf]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},N={[mb]:o.NEVER,[bb]:o.ALWAYS,[xb]:o.LESS,[vg]:o.LEQUAL,[gb]:o.EQUAL,[Sb]:o.GEQUAL,[_b]:o.GREATER,[vb]:o.NOTEQUAL};function ae(D,M){if(M.type===oa&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===Xf||M.magFilter===Ql||M.magFilter===Ms||M.minFilter===di||M.minFilter===Xf||M.minFilter===Ql||M.minFilter===Ms)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,le[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,le[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,le[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,_e[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,N[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ti||M.minFilter!==Ql&&M.minFilter!==Ms||M.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function be(D,M){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",L));const me=M.source;let Me=S.get(me);Me===void 0&&(Me={},S.set(me,Me));const ce=xe(M);if(ce!==D.__cacheKey){Me[ce]===void 0&&(Me[ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,K=!0),Me[ce].usedTimes++;const Ye=Me[D.__cacheKey];Ye!==void 0&&(Me[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&w(M)),D.__cacheKey=ce,D.__webglTexture=Me[ce].texture}return K}function Ae(D,M,K){return Math.floor(Math.floor(D/K)/M)}function Pe(D,M,K,me){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,K,me,M.data);else{ce.sort((ve,ye)=>ve.start-ye.start);let Ye=0;for(let ve=1;ve<ce.length;ve++){const ye=ce[Ye],Be=ce[ve],ze=ye.start+ye.count,Fe=Ae(Be.start,M.width,4),it=Ae(ye.start,M.width,4);Be.start<=ze+1&&Fe===it&&Ae(Be.start+Be.count-1,M.width,4)===Fe?ye.count=Math.max(ye.count,Be.start+Be.count-ye.start):(++Ye,ce[Ye]=Be)}ce.length=Ye+1;const Ee=o.getParameter(o.UNPACK_ROW_LENGTH),Xe=o.getParameter(o.UNPACK_SKIP_PIXELS),Ue=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let ve=0,ye=ce.length;ve<ye;ve++){const Be=ce[ve],ze=Math.floor(Be.start/4),Fe=Math.ceil(Be.count/4),it=ze%M.width,G=Math.floor(ze/M.width),Ne=Fe,we=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,it),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,it,G,Ne,we,K,me,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ee),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xe),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ue)}}function ie(D,M,K){let me=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=o.TEXTURE_3D);const Me=be(D,M),ce=M.source;i.bindTexture(me,D.__webglTexture,o.TEXTURE0+K);const Ye=s.get(ce);if(ce.version!==Ye.__version||Me===!0){i.activeTexture(o.TEXTURE0+K);const Ee=Ut.getPrimaries(Ut.workingColorSpace),Xe=M.colorSpace===Wa?null:Ut.getPrimaries(M.colorSpace),Ue=M.colorSpace===Wa||Ee===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ve=C(M.image,!1,l.maxTextureSize);ve=Ze(M,ve);const ye=u.convert(M.format,M.colorSpace),Be=u.convert(M.type);let ze=U(M.internalFormat,ye,Be,M.colorSpace,M.isVideoTexture);ae(me,M);let Fe;const it=M.mipmaps,G=M.isVideoTexture!==!0,Ne=Ye.__version===void 0||Me===!0,we=ce.dataReady,De=q(M,ve);if(M.isDepthTexture)ze=B(M.format===Oo,M.type),Ne&&(G?i.texStorage2D(o.TEXTURE_2D,1,ze,ve.width,ve.height):i.texImage2D(o.TEXTURE_2D,0,ze,ve.width,ve.height,0,ye,Be,null));else if(M.isDataTexture)if(it.length>0){G&&Ne&&i.texStorage2D(o.TEXTURE_2D,De,ze,it[0].width,it[0].height);for(let Te=0,Se=it.length;Te<Se;Te++)Fe=it[Te],G?we&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,ye,Be,Fe.data):i.texImage2D(o.TEXTURE_2D,Te,ze,Fe.width,Fe.height,0,ye,Be,Fe.data);M.generateMipmaps=!1}else G?(Ne&&i.texStorage2D(o.TEXTURE_2D,De,ze,ve.width,ve.height),we&&Pe(M,ve,ye,Be)):i.texImage2D(o.TEXTURE_2D,0,ze,ve.width,ve.height,0,ye,Be,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){G&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,De,ze,it[0].width,it[0].height,ve.depth);for(let Te=0,Se=it.length;Te<Se;Te++)if(Fe=it[Te],M.format!==yi)if(ye!==null)if(G){if(we)if(M.layerUpdates.size>0){const Ve=zx(Fe.width,Fe.height,M.format,M.type);for(const at of M.layerUpdates){const Bt=Fe.data.subarray(at*Ve/Fe.data.BYTES_PER_ELEMENT,(at+1)*Ve/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,at,Fe.width,Fe.height,1,ye,Bt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Fe.width,Fe.height,ve.depth,ye,Fe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Te,ze,Fe.width,Fe.height,ve.depth,0,Fe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?we&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Fe.width,Fe.height,ve.depth,ye,Be,Fe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Te,ze,Fe.width,Fe.height,ve.depth,0,ye,Be,Fe.data)}else{G&&Ne&&i.texStorage2D(o.TEXTURE_2D,De,ze,it[0].width,it[0].height);for(let Te=0,Se=it.length;Te<Se;Te++)Fe=it[Te],M.format!==yi?ye!==null?G?we&&i.compressedTexSubImage2D(o.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,ye,Fe.data):i.compressedTexImage2D(o.TEXTURE_2D,Te,ze,Fe.width,Fe.height,0,Fe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?we&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,ye,Be,Fe.data):i.texImage2D(o.TEXTURE_2D,Te,ze,Fe.width,Fe.height,0,ye,Be,Fe.data)}else if(M.isDataArrayTexture)if(G){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,De,ze,ve.width,ve.height,ve.depth),we)if(M.layerUpdates.size>0){const Te=zx(ve.width,ve.height,M.format,M.type);for(const Se of M.layerUpdates){const Ve=ve.data.subarray(Se*Te/ve.data.BYTES_PER_ELEMENT,(Se+1)*Te/ve.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Se,ve.width,ve.height,1,ye,Be,Ve)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ye,Be,ve.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ze,ve.width,ve.height,ve.depth,0,ye,Be,ve.data);else if(M.isData3DTexture)G?(Ne&&i.texStorage3D(o.TEXTURE_3D,De,ze,ve.width,ve.height,ve.depth),we&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ye,Be,ve.data)):i.texImage3D(o.TEXTURE_3D,0,ze,ve.width,ve.height,ve.depth,0,ye,Be,ve.data);else if(M.isFramebufferTexture){if(Ne)if(G)i.texStorage2D(o.TEXTURE_2D,De,ze,ve.width,ve.height);else{let Te=ve.width,Se=ve.height;for(let Ve=0;Ve<De;Ve++)i.texImage2D(o.TEXTURE_2D,Ve,ze,Te,Se,0,ye,Be,null),Te>>=1,Se>>=1}}else if(it.length>0){if(G&&Ne){const Te=nt(it[0]);i.texStorage2D(o.TEXTURE_2D,De,ze,Te.width,Te.height)}for(let Te=0,Se=it.length;Te<Se;Te++)Fe=it[Te],G?we&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,ye,Be,Fe):i.texImage2D(o.TEXTURE_2D,Te,ze,ye,Be,Fe);M.generateMipmaps=!1}else if(G){if(Ne){const Te=nt(ve);i.texStorage2D(o.TEXTURE_2D,De,ze,Te.width,Te.height)}we&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,ye,Be,ve)}else i.texImage2D(o.TEXTURE_2D,0,ze,ye,Be,ve);b(M)&&v(me),Ye.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function ue(D,M,K){if(M.image.length!==6)return;const me=be(D,M),Me=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+K);const ce=s.get(Me);if(Me.version!==ce.__version||me===!0){i.activeTexture(o.TEXTURE0+K);const Ye=Ut.getPrimaries(Ut.workingColorSpace),Ee=M.colorSpace===Wa?null:Ut.getPrimaries(M.colorSpace),Xe=M.colorSpace===Wa||Ye===Ee?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,ve=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let Se=0;Se<6;Se++)!Ue&&!ve?ye[Se]=C(M.image[Se],!0,l.maxCubemapSize):ye[Se]=ve?M.image[Se].image:M.image[Se],ye[Se]=Ze(M,ye[Se]);const Be=ye[0],ze=u.convert(M.format,M.colorSpace),Fe=u.convert(M.type),it=U(M.internalFormat,ze,Fe,M.colorSpace),G=M.isVideoTexture!==!0,Ne=ce.__version===void 0||me===!0,we=Me.dataReady;let De=q(M,Be);ae(o.TEXTURE_CUBE_MAP,M);let Te;if(Ue){G&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,De,it,Be.width,Be.height);for(let Se=0;Se<6;Se++){Te=ye[Se].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){const at=Te[Ve];M.format!==yi?ze!==null?G?we&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,at.width,at.height,ze,at.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,it,at.width,at.height,0,at.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,0,0,at.width,at.height,ze,Fe,at.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve,it,at.width,at.height,0,ze,Fe,at.data)}}}else{if(Te=M.mipmaps,G&&Ne){Te.length>0&&De++;const Se=nt(ye[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,De,it,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(ve){G?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ye[Se].width,ye[Se].height,ze,Fe,ye[Se].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,ye[Se].width,ye[Se].height,0,ze,Fe,ye[Se].data);for(let Ve=0;Ve<Te.length;Ve++){const Bt=Te[Ve].image[Se].image;G?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,Bt.width,Bt.height,ze,Fe,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,it,Bt.width,Bt.height,0,ze,Fe,Bt.data)}}else{G?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ze,Fe,ye[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,ze,Fe,ye[Se]);for(let Ve=0;Ve<Te.length;Ve++){const at=Te[Ve];G?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,0,0,ze,Fe,at.image[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ve+1,it,ze,Fe,at.image[Se])}}}b(M)&&v(o.TEXTURE_CUBE_MAP),ce.__version=Me.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ce(D,M,K,me,Me,ce){const Ye=u.convert(K.format,K.colorSpace),Ee=u.convert(K.type),Xe=U(K.internalFormat,Ye,Ee,K.colorSpace),Ue=s.get(M),ve=s.get(K);if(ve.__renderTarget=M,!Ue.__hasExternalTextures){const ye=Math.max(1,M.width>>ce),Be=Math.max(1,M.height>>ce);Me===o.TEXTURE_3D||Me===o.TEXTURE_2D_ARRAY?i.texImage3D(Me,ce,Xe,ye,Be,M.depth,0,Ye,Ee,null):i.texImage2D(Me,ce,Xe,ye,Be,0,Ye,Ee,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,me,Me,ve.__webglTexture,0,At(M)):(Me===o.TEXTURE_2D||Me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,me,Me,ve.__webglTexture,ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ie(D,M,K){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const me=M.depthTexture,Me=me&&me.isDepthTexture?me.type:null,ce=B(M.stencilBuffer,Me),Ye=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ee=At(M);Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ee,ce,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ee,ce,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ce,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,D)}else{const me=M.textures;for(let Me=0;Me<me.length;Me++){const ce=me[Me],Ye=u.convert(ce.format,ce.colorSpace),Ee=u.convert(ce.type),Xe=U(ce.internalFormat,Ye,Ee,ce.colorSpace),Ue=At(M);K&&Ge(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue,Xe,M.width,M.height):Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ue,Xe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function qe(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(M.depthTexture);me.__renderTarget=M,(!me.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de(M.depthTexture,0);const Me=me.__webglTexture,ce=At(M);if(M.depthTexture.format===Lo)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0);else if(M.depthTexture.format===Oo)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0,ce):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function rt(D){const M=s.get(D),K=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){const Me=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",Me)};me.addEventListener("dispose",Me),M.__depthDisposeCallback=Me}M.__boundDepthTexture=me}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const me=D.texture.mipmaps;me&&me.length>0?qe(M.__webglFramebuffer[0],D):qe(M.__webglFramebuffer,D)}else if(K){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=o.createRenderbuffer(),Ie(M.__webglDepthbuffer[me],D,!1);else{const Me=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[me];o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,Me,o.RENDERBUFFER,ce)}}else{const me=D.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ie(M.__webglDepthbuffer,D,!1);else{const Me=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,Me,o.RENDERBUFFER,ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(D,M,K){const me=s.get(D);M!==void 0&&Ce(me.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&rt(D)}function ot(D){const M=D.texture,K=s.get(D),me=s.get(M);D.addEventListener("dispose",F);const Me=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ye=Me.length>1;if(Ye||(me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture()),me.__version=M.version,d.memory.textures++),ce){K.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Ee]=[];for(let Xe=0;Xe<M.mipmaps.length;Xe++)K.__webglFramebuffer[Ee][Xe]=o.createFramebuffer()}else K.__webglFramebuffer[Ee]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)K.__webglFramebuffer[Ee]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let Ee=0,Xe=Me.length;Ee<Xe;Ee++){const Ue=s.get(Me[Ee]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Ge(D)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ee=0;Ee<Me.length;Ee++){const Xe=Me[Ee];K.__webglColorRenderbuffer[Ee]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Ee]);const Ue=u.convert(Xe.format,Xe.colorSpace),ve=u.convert(Xe.type),ye=U(Xe.internalFormat,Ue,ve,Xe.colorSpace,D.isXRRenderTarget===!0),Be=At(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Be,ye,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ee,o.RENDERBUFFER,K.__webglColorRenderbuffer[Ee])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Ie(K.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ce){i.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),ae(o.TEXTURE_CUBE_MAP,M);for(let Ee=0;Ee<6;Ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)Ce(K.__webglFramebuffer[Ee][Xe],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Xe);else Ce(K.__webglFramebuffer[Ee],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);b(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let Ee=0,Xe=Me.length;Ee<Xe;Ee++){const Ue=Me[Ee],ve=s.get(Ue);let ye=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ye=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ye,ve.__webglTexture),ae(ye,Ue),Ce(K.__webglFramebuffer,D,Ue,o.COLOR_ATTACHMENT0+Ee,ye,0),b(Ue)&&v(ye)}i.unbindTexture()}else{let Ee=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,me.__webglTexture),ae(Ee,M),M.mipmaps&&M.mipmaps.length>0)for(let Xe=0;Xe<M.mipmaps.length;Xe++)Ce(K.__webglFramebuffer[Xe],D,M,o.COLOR_ATTACHMENT0,Ee,Xe);else Ce(K.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ee,0);b(M)&&v(Ee),i.unbindTexture()}D.depthBuffer&&rt(D)}function xt(D){const M=D.textures;for(let K=0,me=M.length;K<me;K++){const Me=M[K];if(b(Me)){const ce=z(D),Ye=s.get(Me).__webglTexture;i.bindTexture(ce,Ye),v(ce),i.unbindTexture()}}}const I=[],ct=[];function st(D){if(D.samples>0){if(Ge(D)===!1){const M=D.textures,K=D.width,me=D.height;let Me=o.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=s.get(D),Ee=M.length>1;if(Ee)for(let Ue=0;Ue<M.length;Ue++)i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const Xe=D.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Me|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Me|=o.STENCIL_BUFFER_BIT)),Ee){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ue]);const ve=s.get(M[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ve,0)}o.blitFramebuffer(0,0,K,me,0,0,K,me,Me,o.NEAREST),m===!0&&(I.length=0,ct.length=0,I.push(o.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(ce),ct.push(ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ct)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ee)for(let Ue=0;Ue<M.length;Ue++){i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ue]);const ve=s.get(M[Ue]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,ve,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function At(D){return Math.min(l.maxSamples,D.samples)}function Ge(D){const M=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Lt(D){const M=d.render.frame;_.get(D)!==M&&(_.set(D,M),D.update())}function Ze(D,M){const K=D.colorSpace,me=D.format,Me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Er&&K!==Wa&&(Ut.getTransfer(K)===Vt?(me!==yi||Me!==ua)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",K)),M}function nt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Yt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ge}function PE(o,t){function i(s,l=Wa){let u;const d=Ut.getTransfer(l);if(s===ua)return o.UNSIGNED_BYTE;if(s===hh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===ph)return o.UNSIGNED_SHORT_5_5_5_1;if(s===pg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===mg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===dg)return o.BYTE;if(s===hg)return o.SHORT;if(s===Uo)return o.UNSIGNED_SHORT;if(s===dh)return o.INT;if(s===As)return o.UNSIGNED_INT;if(s===oa)return o.FLOAT;if(s===Ar)return o.HALF_FLOAT;if(s===xg)return o.ALPHA;if(s===gg)return o.RGB;if(s===yi)return o.RGBA;if(s===Lo)return o.DEPTH_COMPONENT;if(s===Oo)return o.DEPTH_STENCIL;if(s===_g)return o.RED;if(s===mh)return o.RED_INTEGER;if(s===xh)return o.RG;if(s===gh)return o.RG_INTEGER;if(s===_h)return o.RGBA_INTEGER;if(s===_c||s===vc||s===Sc||s===bc)if(d===Vt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===_c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===_c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ld||s===Od||s===Fd||s===Pd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Ld)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Od)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zd||s===Bd||s===Id)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===zd||s===Bd)return d===Vt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Id)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===qd||s===jd||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===$d)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Hd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jd)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return d===Vt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===eh||s===th||s===nh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===eh)return d===Vt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===th)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ih||s===ah||s===sh||s===rh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===ih)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ah)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===No?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Ng(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ui({vertexShader:zE,fragmentShader:BE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new da(new Cc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HE extends Rr{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,S=null,y=null,A=null;const C=typeof XRWebGLBinding<"u",b=new IE,v={},z=i.getContextAttributes();let U=null,B=null;const q=[],L=[],F=new Ft;let ne=null;const w=new Si;w.viewport=new tn;const R=new Si;R.viewport=new tn;const k=[w,R],ee=new ay;let oe=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ue=q[ie];return ue===void 0&&(ue=new hd,q[ie]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ie){let ue=q[ie];return ue===void 0&&(ue=new hd,q[ie]=ue),ue.getGripSpace()},this.getHand=function(ie){let ue=q[ie];return ue===void 0&&(ue=new hd,q[ie]=ue),ue.getHandSpace()};function de(ie){const ue=L.indexOf(ie.inputSource);if(ue===-1)return;const Ce=q[ue];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,p||d),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function O(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",X);for(let ie=0;ie<q.length;ie++){const ue=L[ie];ue!==null&&(L[ie]=null,q[ie].disconnect(ue))}oe=null,xe=null,b.reset();for(const ie in v)delete v[ie];t.setRenderTarget(U),y=null,S=null,g=null,l=null,B=null,Pe.stop(),s.isPresenting=!1,t.setPixelRatio(ne),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,s.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,s.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",O),l.addEventListener("inputsourceschange",X),z.xrCompatible!==!0&&await i.makeXRCompatible(),ne=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ie=null,qe=null;z.depth&&(qe=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=z.stencil?Oo:Lo,Ie=z.stencil?No:As);const rt={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(rt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new Rs(S.textureWidth,S.textureHeight,{format:yi,type:ua,depthTexture:new Ug(S.textureWidth,S.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ce={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new Rs(y.framebufferWidth,y.framebufferHeight,{format:yi,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Pe.setContext(l),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function X(ie){for(let ue=0;ue<ie.removed.length;ue++){const Ce=ie.removed[ue],Ie=L.indexOf(Ce);Ie>=0&&(L[Ie]=null,q[Ie].disconnect(Ce))}for(let ue=0;ue<ie.added.length;ue++){const Ce=ie.added[ue];let Ie=L.indexOf(Ce);if(Ie===-1){for(let rt=0;rt<q.length;rt++)if(rt>=L.length){L.push(Ce),Ie=rt;break}else if(L[rt]===null){L[rt]=Ce,Ie=rt;break}if(Ie===-1)break}const qe=q[Ie];qe&&qe.connect(Ce)}}const W=new fe,le=new fe;function _e(ie,ue,Ce){W.setFromMatrixPosition(ue.matrixWorld),le.setFromMatrixPosition(Ce.matrixWorld);const Ie=W.distanceTo(le),qe=ue.projectionMatrix.elements,rt=Ce.projectionMatrix.elements,Yt=qe[14]/(qe[10]-1),ot=qe[14]/(qe[10]+1),xt=(qe[9]+1)/qe[5],I=(qe[9]-1)/qe[5],ct=(qe[8]-1)/qe[0],st=(rt[8]+1)/rt[0],At=Yt*ct,Ge=Yt*st,Lt=Ie/(-ct+st),Ze=Lt*-ct;if(ue.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ze),ie.translateZ(Lt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),qe[10]===-1)ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const nt=Yt+Lt,D=ot+Lt,M=At-Ze,K=Ge+(Ie-Ze),me=xt*ot/D*nt,Me=I*ot/D*nt;ie.projectionMatrix.makePerspective(M,K,me,Me,nt,D),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function N(ie,ue){ue===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ue.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let ue=ie.near,Ce=ie.far;b.texture!==null&&(b.depthNear>0&&(ue=b.depthNear),b.depthFar>0&&(Ce=b.depthFar)),ee.near=R.near=w.near=ue,ee.far=R.far=w.far=Ce,(oe!==ee.near||xe!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),oe=ee.near,xe=ee.far),ee.layers.mask=ie.layers.mask|6,w.layers.mask=ee.layers.mask&3,R.layers.mask=ee.layers.mask&5;const Ie=ie.parent,qe=ee.cameras;N(ee,Ie);for(let rt=0;rt<qe.length;rt++)N(qe[rt],Ie);qe.length===2?_e(ee,w,R):ee.projectionMatrix.copy(w.projectionMatrix),ae(ie,ee,Ie)};function ae(ie,ue,Ce){Ce===null?ie.matrix.copy(ue.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ue.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ue.projectionMatrix),ie.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=oh*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(ie){m=ie,S!==null&&(S.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ee)},this.getCameraTexture=function(ie){return v[ie]};let be=null;function Ae(ie,ue){if(_=ue.getViewerPose(p||d),A=ue,_!==null){const Ce=_.views;y!==null&&(t.setRenderTargetFramebuffer(B,y.framebuffer),t.setRenderTarget(B));let Ie=!1;Ce.length!==ee.cameras.length&&(ee.cameras.length=0,Ie=!0);for(let ot=0;ot<Ce.length;ot++){const xt=Ce[ot];let I=null;if(y!==null)I=y.getViewport(xt);else{const st=g.getViewSubImage(S,xt);I=st.viewport,ot===0&&(t.setRenderTargetTextures(B,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(B))}let ct=k[ot];ct===void 0&&(ct=new Si,ct.layers.enable(ot),ct.viewport=new tn,k[ot]=ct),ct.matrix.fromArray(xt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(xt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(I.x,I.y,I.width,I.height),ot===0&&(ee.matrix.copy(ct.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Ie===!0&&ee.cameras.push(ct)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const ot=g.getDepthInformation(Ce[0]);ot&&ot.isValid&&ot.texture&&b.init(ot,l.renderState)}if(qe&&qe.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let ot=0;ot<Ce.length;ot++){const xt=Ce[ot].camera;if(xt){let I=v[xt];I||(I=new Ng,v[xt]=I);const ct=g.getCameraImage(xt);I.sourceTexture=ct}}}}for(let Ce=0;Ce<q.length;Ce++){const Ie=L[Ce],qe=q[Ce];Ie!==null&&qe!==void 0&&qe.update(Ie,ue,p||d)}be&&be(ie,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),A=null}const Pe=new Og;Pe.setAnimationLoop(Ae),this.setAnimationLoop=function(ie){be=ie},this.dispose=function(){}}}const vs=new fa,GE=new mn;function VE(o,t){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function s(b,v){v.color.getRGB(b.fogColor.value,Rg(o)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,z,U,B){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(b,v):v.isMeshToonMaterial?(u(b,v),g(b,v)):v.isMeshPhongMaterial?(u(b,v),_(b,v)):v.isMeshStandardMaterial?(u(b,v),S(b,v),v.isMeshPhysicalMaterial&&y(b,v,B)):v.isMeshMatcapMaterial?(u(b,v),A(b,v)):v.isMeshDepthMaterial?u(b,v):v.isMeshDistanceMaterial?(u(b,v),C(b,v)):v.isMeshNormalMaterial?u(b,v):v.isLineBasicMaterial?(d(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?m(b,v,z,U):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===Vn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===Vn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const z=t.get(v),U=z.envMap,B=z.envMapRotation;U&&(b.envMap.value=U,vs.copy(B),vs.x*=-1,vs.y*=-1,vs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),b.envMapRotation.value.setFromMatrix4(GE.makeRotationFromEuler(vs)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function d(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,z,U){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*z,b.scale.value=U*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function _(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function g(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function S(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function y(b,v,z){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=z.texture,b.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function A(b,v){v.matcap&&(b.matcap.value=v.matcap)}function C(b,v){const z=t.get(v).light;b.referencePosition.value.setFromMatrixPosition(z.matrixWorld),b.nearDistance.value=z.shadow.camera.near,b.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function kE(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,U){const B=U.program;s.uniformBlockBinding(z,B)}function p(z,U){let B=l[z.id];B===void 0&&(A(z),B=_(z),l[z.id]=B,z.addEventListener("dispose",b));const q=U.program;s.updateUBOMapping(z,q);const L=t.render.frame;u[z.id]!==L&&(S(z),u[z.id]=L)}function _(z){const U=g();z.__bindingPointIndex=U;const B=o.createBuffer(),q=z.__size,L=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,q,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,B),B}function g(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const U=l[z.id],B=z.uniforms,q=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let L=0,F=B.length;L<F;L++){const ne=Array.isArray(B[L])?B[L]:[B[L]];for(let w=0,R=ne.length;w<R;w++){const k=ne[w];if(y(k,L,w,q)===!0){const ee=k.__offset,oe=Array.isArray(k.value)?k.value:[k.value];let xe=0;for(let de=0;de<oe.length;de++){const O=oe[de],X=C(O);typeof O=="number"||typeof O=="boolean"?(k.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ee+xe,k.__data)):O.isMatrix3?(k.__data[0]=O.elements[0],k.__data[1]=O.elements[1],k.__data[2]=O.elements[2],k.__data[3]=0,k.__data[4]=O.elements[3],k.__data[5]=O.elements[4],k.__data[6]=O.elements[5],k.__data[7]=0,k.__data[8]=O.elements[6],k.__data[9]=O.elements[7],k.__data[10]=O.elements[8],k.__data[11]=0):(O.toArray(k.__data,xe),xe+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(z,U,B,q){const L=z.value,F=U+"_"+B;if(q[F]===void 0)return typeof L=="number"||typeof L=="boolean"?q[F]=L:q[F]=L.clone(),!0;{const ne=q[F];if(typeof L=="number"||typeof L=="boolean"){if(ne!==L)return q[F]=L,!0}else if(ne.equals(L)===!1)return ne.copy(L),!0}return!1}function A(z){const U=z.uniforms;let B=0;const q=16;for(let F=0,ne=U.length;F<ne;F++){const w=Array.isArray(U[F])?U[F]:[U[F]];for(let R=0,k=w.length;R<k;R++){const ee=w[R],oe=Array.isArray(ee.value)?ee.value:[ee.value];for(let xe=0,de=oe.length;xe<de;xe++){const O=oe[xe],X=C(O),W=B%q,le=W%X.boundary,_e=W+le;B+=le,_e!==0&&q-_e<X.storage&&(B+=q-_e),ee.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=B,B+=X.storage}}}const L=B%q;return L>0&&(B+=q-L),z.__size=B,z.__cache={},this}function C(z){const U={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(U.boundary=4,U.storage=4):z.isVector2?(U.boundary=8,U.storage=8):z.isVector3||z.isColor?(U.boundary=16,U.storage=12):z.isVector4?(U.boundary=16,U.storage=16):z.isMatrix3?(U.boundary=48,U.storage=48):z.isMatrix4?(U.boundary=64,U.storage=64):z.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",z),U}function b(z){const U=z.target;U.removeEventListener("dispose",b);const B=d.indexOf(U.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const XE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ia=null;function WE(){return ia===null&&(ia=new Qb(XE,32,32,xh,Ar),ia.minFilter=di,ia.magFilter=di,ia.wrapS=ra,ia.wrapT=ra,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class qE{constructor(t={}){const{canvas:i=yb(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=d;const A=new Set([_h,gh,mh]),C=new Set([ua,As,Uo,No,hh,ph]),b=new Uint32Array(4),v=new Int32Array(4);let z=null,U=null;const B=[],q=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let F=!1;this._outputColorSpace=ei;let ne=0,w=0,R=null,k=-1,ee=null;const oe=new tn,xe=new tn;let de=null;const O=new kt(0);let X=0,W=i.width,le=i.height,_e=1,N=null,ae=null;const be=new tn(0,0,W,le),Ae=new tn(0,0,W,le);let Pe=!1;const ie=new Dg;let ue=!1,Ce=!1;const Ie=new mn,qe=new fe,rt=new tn,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function xt(){return R===null?_e:1}let I=s;function ct(T,j){return i.getContext(T,j)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fh}`),i.addEventListener("webglcontextlost",Te,!1),i.addEventListener("webglcontextrestored",Se,!1),i.addEventListener("webglcontextcreationerror",Ve,!1),I===null){const j="webgl2";if(I=ct(j,T),I===null)throw ct(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let st,At,Ge,Lt,Ze,nt,D,M,K,me,Me,ce,Ye,Ee,Xe,Ue,ve,ye,Be,ze,Fe,it,G,Ne;function we(){st=new e3(I),st.init(),it=new PE(I,st),At=new W1(I,st,t,it),Ge=new OE(I,st),At.reversedDepthBuffer&&S&&Ge.buffers.depth.setReversed(!0),Lt=new i3(I),Ze=new bE,nt=new FE(I,st,Ge,Ze,At,it,Lt),D=new j1(L),M=new $1(L),K=new oy(I),G=new k1(I,K),me=new t3(I,K,Lt,G),Me=new s3(I,me,K,Lt),Be=new a3(I,At,nt),Ue=new q1(Ze),ce=new SE(L,D,M,st,At,G,Ue),Ye=new VE(L,Ze),Ee=new ME,Xe=new wE(st),ye=new V1(L,D,M,Ge,Me,y,m),ve=new NE(L,Me,At),Ne=new kE(I,Lt,At,Ge),ze=new X1(I,st,Lt),Fe=new n3(I,st,Lt),Lt.programs=ce.programs,L.capabilities=At,L.extensions=st,L.properties=Ze,L.renderLists=Ee,L.shadowMap=ve,L.state=Ge,L.info=Lt}we();const De=new HE(L,I);this.xr=De,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(W,le,!1))},this.getSize=function(T){return T.set(W,le)},this.setSize=function(T,j,se=!0){if(De.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,le=j,i.width=Math.floor(T*_e),i.height=Math.floor(j*_e),se===!0&&(i.style.width=T+"px",i.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(W*_e,le*_e).floor()},this.setDrawingBufferSize=function(T,j,se){W=T,le=j,_e=se,i.width=Math.floor(T*se),i.height=Math.floor(j*se),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(oe)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,j,se,$){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,j,se,$),Ge.viewport(oe.copy(be).multiplyScalar(_e).round())},this.getScissor=function(T){return T.copy(Ae)},this.setScissor=function(T,j,se,$){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,j,se,$),Ge.scissor(xe.copy(Ae).multiplyScalar(_e).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(T){Ge.setScissorTest(Pe=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){ae=T},this.getClearColor=function(T){return T.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,se=!0){let $=0;if(T){let Z=!1;if(R!==null){const Re=R.texture.format;Z=A.has(Re)}if(Z){const Re=R.texture.type,Le=C.has(Re),He=ye.getClearColor(),ke=ye.getClearAlpha(),$e=He.r,tt=He.g,Ke=He.b;Le?(b[0]=$e,b[1]=tt,b[2]=Ke,b[3]=ke,I.clearBufferuiv(I.COLOR,0,b)):(v[0]=$e,v[1]=tt,v[2]=Ke,v[3]=ke,I.clearBufferiv(I.COLOR,0,v))}else $|=I.COLOR_BUFFER_BIT}j&&($|=I.DEPTH_BUFFER_BIT),se&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Te,!1),i.removeEventListener("webglcontextrestored",Se,!1),i.removeEventListener("webglcontextcreationerror",Ve,!1),ye.dispose(),Ee.dispose(),Xe.dispose(),Ze.dispose(),D.dispose(),M.dispose(),Me.dispose(),G.dispose(),Ne.dispose(),ce.dispose(),De.dispose(),De.removeEventListener("sessionstart",wr),De.removeEventListener("sessionend",Dr),hi.stop()};function Te(T){T.preventDefault(),Sx("WebGLRenderer: Context Lost."),F=!0}function Se(){Sx("WebGLRenderer: Context Restored."),F=!1;const T=Lt.autoReset,j=ve.enabled,se=ve.autoUpdate,$=ve.needsUpdate,Z=ve.type;we(),Lt.autoReset=T,ve.enabled=j,ve.autoUpdate=se,ve.needsUpdate=$,ve.type=Z}function Ve(T){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function at(T){const j=T.target;j.removeEventListener("dispose",at),Bt(j)}function Bt(T){Rt(T),Ze.remove(T)}function Rt(T){const j=Ze.get(T).programs;j!==void 0&&(j.forEach(function(se){ce.releaseProgram(se)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,se,$,Z,Re){j===null&&(j=Yt);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,He=Uc(T,j,se,$,Z);Ge.setMaterial($,Le);let ke=se.index,$e=1;if($.wireframe===!0){if(ke=me.getWireframeAttribute(se),ke===void 0)return;$e=2}const tt=se.drawRange,Ke=se.attributes.position;let dt=tt.start*$e,Tt=(tt.start+tt.count)*$e;Re!==null&&(dt=Math.max(dt,Re.start*$e),Tt=Math.min(Tt,(Re.start+Re.count)*$e)),ke!==null?(dt=Math.max(dt,0),Tt=Math.min(Tt,ke.count)):Ke!=null&&(dt=Math.max(dt,0),Tt=Math.min(Tt,Ke.count));const Ct=Tt-dt;if(Ct<0||Ct===1/0)return;G.setup(Z,$,He,se,ke);let bt,Ot=ze;if(ke!==null&&(bt=K.get(ke),Ot=Fe,Ot.setIndex(bt)),Z.isMesh)$.wireframe===!0?(Ge.setLineWidth($.wireframeLinewidth*xt()),Ot.setMode(I.LINES)):Ot.setMode(I.TRIANGLES);else if(Z.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),Ge.setLineWidth(Je*xt()),Z.isLineSegments?Ot.setMode(I.LINES):Z.isLineLoop?Ot.setMode(I.LINE_LOOP):Ot.setMode(I.LINE_STRIP)}else Z.isPoints?Ot.setMode(I.POINTS):Z.isSprite&&Ot.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Je=Z._multiDrawStarts,Xt=Z._multiDrawCounts,yt=Z._multiDrawCount,_n=ke?K.get(ke).bytesPerElement:1,ma=Ze.get($).currentProgram.getUniforms();for(let qt=0;qt<yt;qt++)ma.setValue(I,"_gl_DrawID",qt),Ot.render(Je[qt]/_n,Xt[qt])}else if(Z.isInstancedMesh)Ot.renderInstances(dt,Ct,Z.count);else if(se.isInstancedBufferGeometry){const Je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xt=Math.min(se.instanceCount,Je);Ot.renderInstances(dt,Ct,Xt)}else Ot.render(dt,Ct)};function Cn(T,j,se){T.transparent===!0&&T.side===sa&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,dn(T,j,se),T.side=Ya,T.needsUpdate=!0,dn(T,j,se),T.side=sa):dn(T,j,se)}this.compile=function(T,j,se=null){se===null&&(se=T),U=Xe.get(se),U.init(j),q.push(U),se.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),T!==se&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(U.pushLight(Z),Z.castShadow&&U.pushShadow(Z))}),U.setupLights();const $=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Re=Z.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const He=Re[Le];Cn(He,se,Z),$.add(He)}else Cn(Re,se,Z),$.add(Re)}),U=q.pop(),$},this.compileAsync=function(T,j,se=null){const $=this.compile(T,j,se);return new Promise(Z=>{function Re(){if($.forEach(function(Le){Ze.get(Le).currentProgram.isReady()&&$.delete(Le)}),$.size===0){Z(T);return}setTimeout(Re,10)}st.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let kn=null;function Ho(T){kn&&kn(T)}function wr(){hi.stop()}function Dr(){hi.start()}const hi=new Og;hi.setAnimationLoop(Ho),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){kn=T,De.setAnimationLoop(T),T===null?hi.stop():hi.start()},De.addEventListener("sessionstart",wr),De.addEventListener("sessionend",Dr),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(j),j=De.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,j,R),U=Xe.get(T,q.length),U.init(j),q.push(U),Ie.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ie.setFromProjectionMatrix(Ie,Di,j.reversedDepth),Ce=this.localClippingEnabled,ue=Ue.init(this.clippingPlanes,Ce),z=Ee.get(T,B.length),z.init(),B.push(z),De.enabled===!0&&De.isPresenting===!0){const Re=L.xr.getDepthSensingMesh();Re!==null&&Ka(Re,j,-1/0,L.sortObjects)}Ka(T,j,0,L.sortObjects),z.finish(),L.sortObjects===!0&&z.sort(N,ae),ot=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ot&&ye.addToRenderList(z,T),this.info.render.frame++,ue===!0&&Ue.beginShadows();const se=U.state.shadowsArray;ve.render(se,T,j),ue===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=z.opaque,Z=z.transmissive;if(U.setupLights(),j.isArrayCamera){const Re=j.cameras;if(Z.length>0)for(let Le=0,He=Re.length;Le<He;Le++){const ke=Re[Le];Nr($,Z,T,ke)}ot&&ye.render(T);for(let Le=0,He=Re.length;Le<He;Le++){const ke=Re[Le];Ur(z,T,ke,ke.viewport)}}else Z.length>0&&Nr($,Z,T,j),ot&&ye.render(T),Ur(z,T,j);R!==null&&w===0&&(nt.updateMultisampleRenderTarget(R),nt.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(L,T,j),G.resetDefaultState(),k=-1,ee=null,q.pop(),q.length>0?(U=q[q.length-1],ue===!0&&Ue.setGlobalState(L.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?z=B[B.length-1]:z=null};function Ka(T,j,se,$){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)se=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ie.intersectsSprite(T)){$&&rt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);const Le=Me.update(T),He=T.material;He.visible&&z.push(T,Le,He,se,rt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ie.intersectsObject(T))){const Le=Me.update(T),He=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),rt.copy(T.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),rt.copy(Le.boundingSphere.center)),rt.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(He)){const ke=Le.groups;for(let $e=0,tt=ke.length;$e<tt;$e++){const Ke=ke[$e],dt=He[Ke.materialIndex];dt&&dt.visible&&z.push(T,Le,dt,se,rt.z,Ke)}}else He.visible&&z.push(T,Le,He,se,rt.z,null)}}const Re=T.children;for(let Le=0,He=Re.length;Le<He;Le++)Ka(Re[Le],j,se,$)}function Ur(T,j,se,$){const{opaque:Z,transmissive:Re,transparent:Le}=T;U.setupLightsView(se),ue===!0&&Ue.setGlobalState(L.clippingPlanes,se),$&&Ge.viewport(oe.copy($)),Z.length>0&&Xn(Z,j,se),Re.length>0&&Xn(Re,j,se),Le.length>0&&Xn(Le,j,se),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Nr(T,j,se,$){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[$.id]===void 0&&(U.state.transmissionRenderTarget[$.id]=new Rs(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ar:ua,minFilter:Ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Re=U.state.transmissionRenderTarget[$.id],Le=$.viewport||oe;Re.setSize(Le.z*L.transmissionResolutionScale,Le.w*L.transmissionResolutionScale);const He=L.getRenderTarget(),ke=L.getActiveCubeFace(),$e=L.getActiveMipmapLevel();L.setRenderTarget(Re),L.getClearColor(O),X=L.getClearAlpha(),X<1&&L.setClearColor(16777215,.5),L.clear(),ot&&ye.render(se);const tt=L.toneMapping;L.toneMapping=ja;const Ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),ue===!0&&Ue.setGlobalState(L.clippingPlanes,$),Xn(T,se,$),nt.updateMultisampleRenderTarget(Re),nt.updateRenderTargetMipmap(Re),st.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Tt=0,Ct=j.length;Tt<Ct;Tt++){const bt=j[Tt],{object:Ot,geometry:Je,material:Xt,group:yt}=bt;if(Xt.side===sa&&Ot.layers.test($.layers)){const _n=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,rn(Ot,se,$,Je,Xt,yt),Xt.side=_n,Xt.needsUpdate=!0,dt=!0}}dt===!0&&(nt.updateMultisampleRenderTarget(Re),nt.updateRenderTargetMipmap(Re))}L.setRenderTarget(He,ke,$e),L.setClearColor(O,X),Ke!==void 0&&($.viewport=Ke),L.toneMapping=tt}function Xn(T,j,se){const $=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Re=T.length;Z<Re;Z++){const Le=T[Z],{object:He,geometry:ke,group:$e}=Le;let tt=Le.material;tt.allowOverride===!0&&$!==null&&(tt=$),He.layers.test(se.layers)&&rn(He,j,se,ke,tt,$e)}}function rn(T,j,se,$,Z,Re){T.onBeforeRender(L,j,se,$,Z,Re),T.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(L,j,se,$,T,Re),Z.transparent===!0&&Z.side===sa&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,L.renderBufferDirect(se,j,$,Z,T,Re),Z.side=Ya,Z.needsUpdate=!0,L.renderBufferDirect(se,j,$,Z,T,Re),Z.side=sa):L.renderBufferDirect(se,j,$,Z,T,Re),T.onAfterRender(L,j,se,$,Z,Re)}function dn(T,j,se){j.isScene!==!0&&(j=Yt);const $=Ze.get(T),Z=U.state.lights,Re=U.state.shadowsArray,Le=Z.state.version,He=ce.getParameters(T,Z.state,Re,j,se),ke=ce.getProgramCacheKey(He);let $e=$.programs;$.environment=T.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(T.isMeshStandardMaterial?M:D).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",at),$e=new Map,$.programs=$e);let tt=$e.get(ke);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===Le)return Cs(T,He),tt}else He.uniforms=ce.getUniforms(T),T.onBeforeCompile(He,L),tt=ce.acquireProgram(He,ke),$e.set(ke,tt),$.uniforms=He.uniforms;const Ke=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ke.clippingPlanes=Ue.uniform),Cs(T,He),$.needsLights=Go(T),$.lightsStateVersion=Le,$.needsLights&&(Ke.ambientLightColor.value=Z.state.ambient,Ke.lightProbe.value=Z.state.probe,Ke.directionalLights.value=Z.state.directional,Ke.directionalLightShadows.value=Z.state.directionalShadow,Ke.spotLights.value=Z.state.spot,Ke.spotLightShadows.value=Z.state.spotShadow,Ke.rectAreaLights.value=Z.state.rectArea,Ke.ltc_1.value=Z.state.rectAreaLTC1,Ke.ltc_2.value=Z.state.rectAreaLTC2,Ke.pointLights.value=Z.state.point,Ke.pointLightShadows.value=Z.state.pointShadow,Ke.hemisphereLights.value=Z.state.hemi,Ke.directionalShadowMap.value=Z.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ke.spotShadowMap.value=Z.state.spotShadowMap,Ke.spotLightMatrix.value=Z.state.spotLightMatrix,Ke.spotLightMap.value=Z.state.spotLightMap,Ke.pointShadowMap.value=Z.state.pointShadowMap,Ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function Ni(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=yc.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Cs(T,j){const se=Ze.get(T);se.outputColorSpace=j.outputColorSpace,se.batching=j.batching,se.batchingColor=j.batchingColor,se.instancing=j.instancing,se.instancingColor=j.instancingColor,se.instancingMorph=j.instancingMorph,se.skinning=j.skinning,se.morphTargets=j.morphTargets,se.morphNormals=j.morphNormals,se.morphColors=j.morphColors,se.morphTargetsCount=j.morphTargetsCount,se.numClippingPlanes=j.numClippingPlanes,se.numIntersection=j.numClipIntersection,se.vertexAlphas=j.vertexAlphas,se.vertexTangents=j.vertexTangents,se.toneMapping=j.toneMapping}function Uc(T,j,se,$,Z){j.isScene!==!0&&(j=Yt),nt.resetTextureUnits();const Re=j.fog,Le=$.isMeshStandardMaterial?j.environment:null,He=R===null?L.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Er,ke=($.isMeshStandardMaterial?M:D).get($.envMap||Le),$e=$.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,tt=!!se.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ke=!!se.morphAttributes.position,dt=!!se.morphAttributes.normal,Tt=!!se.morphAttributes.color;let Ct=ja;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=L.toneMapping);const bt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ot=bt!==void 0?bt.length:0,Je=Ze.get($),Xt=U.state.lights;if(ue===!0&&(Ce===!0||T!==ee)){const Sn=T===ee&&$.id===k;Ue.setState($,T,Sn)}let yt=!1;$.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Xt.state.version||Je.outputColorSpace!==He||Z.isBatchedMesh&&Je.batching===!1||!Z.isBatchedMesh&&Je.batching===!0||Z.isBatchedMesh&&Je.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Je.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Je.instancing===!1||!Z.isInstancedMesh&&Je.instancing===!0||Z.isSkinnedMesh&&Je.skinning===!1||!Z.isSkinnedMesh&&Je.skinning===!0||Z.isInstancedMesh&&Je.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Je.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Je.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Je.instancingMorph===!1&&Z.morphTexture!==null||Je.envMap!==ke||$.fog===!0&&Je.fog!==Re||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ue.numPlanes||Je.numIntersection!==Ue.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ke||Je.morphNormals!==dt||Je.morphColors!==Tt||Je.toneMapping!==Ct||Je.morphTargetsCount!==Ot)&&(yt=!0):(yt=!0,Je.__version=$.version);let _n=Je.currentProgram;yt===!0&&(_n=dn($,j,Z));let ma=!1,qt=!1,Li=!1;const jt=_n.getUniforms(),vn=Je.uniforms;if(Ge.useProgram(_n.program)&&(ma=!0,qt=!0,Li=!0),$.id!==k&&(k=$.id,qt=!0),ma||ee!==T){Ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),jt.setValue(I,"projectionMatrix",T.projectionMatrix),jt.setValue(I,"viewMatrix",T.matrixWorldInverse);const Mn=jt.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,qe.setFromMatrixPosition(T.matrixWorld)),At.logarithmicDepthBuffer&&jt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&jt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),ee!==T&&(ee=T,qt=!0,Li=!0)}if(Z.isSkinnedMesh){jt.setOptional(I,Z,"bindMatrix"),jt.setOptional(I,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),jt.setValue(I,"boneTexture",Sn.boneTexture,nt))}Z.isBatchedMesh&&(jt.setOptional(I,Z,"batchingTexture"),jt.setValue(I,"batchingTexture",Z._matricesTexture,nt),jt.setOptional(I,Z,"batchingIdTexture"),jt.setValue(I,"batchingIdTexture",Z._indirectTexture,nt),jt.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&jt.setValue(I,"batchingColorTexture",Z._colorsTexture,nt));const hn=se.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Be.update(Z,se,_n),(qt||Je.receiveShadow!==Z.receiveShadow)&&(Je.receiveShadow=Z.receiveShadow,jt.setValue(I,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(vn.envMap.value=ke,vn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(vn.envMapIntensity.value=j.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=WE()),qt&&(jt.setValue(I,"toneMappingExposure",L.toneMappingExposure),Je.needsLights&&Nc(vn,Li),Re&&$.fog===!0&&Ye.refreshFogUniforms(vn,Re),Ye.refreshMaterialUniforms(vn,$,_e,le,U.state.transmissionRenderTarget[T.id]),yc.upload(I,Ni(Je),vn,nt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(yc.upload(I,Ni(Je),vn,nt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&jt.setValue(I,"center",Z.center),jt.setValue(I,"modelViewMatrix",Z.modelViewMatrix),jt.setValue(I,"normalMatrix",Z.normalMatrix),jt.setValue(I,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Sn=$.uniformsGroups;for(let Mn=0,Ei=Sn.length;Mn<Ei;Mn++){const Oi=Sn[Mn];Ne.update(Oi,_n),Ne.bind(Oi,_n)}}return _n}function Nc(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Go(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,j,se){const $=Ze.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ze.get(T.texture).__webglTexture=j,Ze.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:se,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const se=Ze.get(T);se.__webglFramebuffer=j,se.__useDefaultFramebuffer=j===void 0};const Qa=I.createFramebuffer();this.setRenderTarget=function(T,j=0,se=0){R=T,ne=j,w=se;let $=!0,Z=null,Re=!1,Le=!1;if(T){const ke=Ze.get(T);if(ke.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(ke.__webglFramebuffer===void 0)nt.setupRenderTarget(T);else if(ke.__hasExternalTextures)nt.rebindTextures(T,Ze.get(T.texture).__webglTexture,Ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ke=T.depthTexture;if(ke.__boundDepthTexture!==Ke){if(Ke!==null&&Ze.has(Ke)&&(T.width!==Ke.image.width||T.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(T)}}const $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Le=!0);const tt=Ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?Z=tt[j][se]:Z=tt[j],Re=!0):T.samples>0&&nt.useMultisampledRTT(T)===!1?Z=Ze.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?Z=tt[se]:Z=tt,oe.copy(T.viewport),xe.copy(T.scissor),de=T.scissorTest}else oe.copy(be).multiplyScalar(_e).floor(),xe.copy(Ae).multiplyScalar(_e).floor(),de=Pe;if(se!==0&&(Z=Qa),Ge.bindFramebuffer(I.FRAMEBUFFER,Z)&&$&&Ge.drawBuffers(T,Z),Ge.viewport(oe),Ge.scissor(xe),Ge.setScissorTest(de),Re){const ke=Ze.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,se)}else if(Le){const ke=j;for(let $e=0;$e<T.textures.length;$e++){const tt=Ze.get(T.textures[$e]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$e,tt.__webglTexture,se,ke)}}else if(T!==null&&se!==0){const ke=Ze.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ke.__webglTexture,se)}k=-1},this.readRenderTargetPixels=function(T,j,se,$,Z,Re,Le,He=0){if(!(T&&T.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Ge.bindFramebuffer(I.FRAMEBUFFER,ke);try{const $e=T.textures[He],tt=$e.format,Ke=$e.type;if(!At.textureFormatReadable(tt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ke)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-$&&se>=0&&se<=T.height-Z&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+He),I.readPixels(j,se,$,Z,it.convert(tt),it.convert(Ke),Re))}finally{const $e=R!==null?Ze.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(I.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(T,j,se,$,Z,Re,Le,He=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if(j>=0&&j<=T.width-$&&se>=0&&se<=T.height-Z){Ge.bindFramebuffer(I.FRAMEBUFFER,ke);const $e=T.textures[He],tt=$e.format,Ke=$e.type;if(!At.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,dt),I.bufferData(I.PIXEL_PACK_BUFFER,Re.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+He),I.readPixels(j,se,$,Z,it.convert(tt),it.convert(Ke),0);const Tt=R!==null?Ze.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(I.FRAMEBUFFER,Tt);const Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Mb(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,dt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Re),I.deleteBuffer(dt),I.deleteSync(Ct),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,se=0){const $=Math.pow(2,-se),Z=Math.floor(T.image.width*$),Re=Math.floor(T.image.height*$),Le=j!==null?j.x:0,He=j!==null?j.y:0;nt.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,se,0,0,Le,He,Z,Re),Ge.unbindTexture()};const Lr=I.createFramebuffer(),pa=I.createFramebuffer();this.copyTextureToTexture=function(T,j,se=null,$=null,Z=0,Re=null){Re===null&&(Z!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Z,Z=0):Re=0);let Le,He,ke,$e,tt,Ke,dt,Tt,Ct;const bt=T.isCompressedTexture?T.mipmaps[Re]:T.image;if(se!==null)Le=se.max.x-se.min.x,He=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,$e=se.min.x,tt=se.min.y,Ke=se.isBox3?se.min.z:0;else{const hn=Math.pow(2,-Z);Le=Math.floor(bt.width*hn),He=Math.floor(bt.height*hn),T.isDataArrayTexture?ke=bt.depth:T.isData3DTexture?ke=Math.floor(bt.depth*hn):ke=1,$e=0,tt=0,Ke=0}$!==null?(dt=$.x,Tt=$.y,Ct=$.z):(dt=0,Tt=0,Ct=0);const Ot=it.convert(j.format),Je=it.convert(j.type);let Xt;j.isData3DTexture?(nt.setTexture3D(j,0),Xt=I.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(nt.setTexture2DArray(j,0),Xt=I.TEXTURE_2D_ARRAY):(nt.setTexture2D(j,0),Xt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);const yt=I.getParameter(I.UNPACK_ROW_LENGTH),_n=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ma=I.getParameter(I.UNPACK_SKIP_PIXELS),qt=I.getParameter(I.UNPACK_SKIP_ROWS),Li=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ke);const jt=T.isDataArrayTexture||T.isData3DTexture,vn=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const hn=Ze.get(T),Sn=Ze.get(j),Mn=Ze.get(hn.__renderTarget),Ei=Ze.get(Sn.__renderTarget);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Oi=0;Oi<ke;Oi++)jt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.get(T).__webglTexture,Z,Ke+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.get(j).__webglTexture,Re,Ct+Oi)),I.blitFramebuffer($e,tt,Le,He,dt,Tt,Le,He,I.DEPTH_BUFFER_BIT,I.NEAREST);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||Ze.has(T)){const hn=Ze.get(T),Sn=Ze.get(j);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,Lr),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,pa);for(let Mn=0;Mn<ke;Mn++)jt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,Z,Ke+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,Z),vn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,Re,Ct+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,Re),Z!==0?I.blitFramebuffer($e,tt,Le,He,dt,Tt,Le,He,I.COLOR_BUFFER_BIT,I.NEAREST):vn?I.copyTexSubImage3D(Xt,Re,dt,Tt,Ct+Mn,$e,tt,Le,He):I.copyTexSubImage2D(Xt,Re,dt,Tt,$e,tt,Le,He);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Xt,Re,dt,Tt,Ct,Le,He,ke,Ot,Je,bt.data):j.isCompressedArrayTexture?I.compressedTexSubImage3D(Xt,Re,dt,Tt,Ct,Le,He,ke,Ot,bt.data):I.texSubImage3D(Xt,Re,dt,Tt,Ct,Le,He,ke,Ot,Je,bt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Re,dt,Tt,Le,He,Ot,Je,bt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Re,dt,Tt,bt.width,bt.height,Ot,bt.data):I.texSubImage2D(I.TEXTURE_2D,Re,dt,Tt,Le,He,Ot,Je,bt);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_n),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ma),I.pixelStorei(I.UNPACK_SKIP_ROWS,qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Li),Re===0&&j.generateMipmaps&&I.generateMipmap(Xt),Ge.unbindTexture()},this.initRenderTarget=function(T){Ze.get(T).__webglFramebuffer===void 0&&nt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?nt.setTextureCube(T,0):T.isData3DTexture?nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?nt.setTexture2DArray(T,0):nt.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){ne=0,w=0,R=null,Ge.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const jE=`
precision highp float;
attribute vec3 position;
void main(){
  gl_Position = vec4(position, 1.0);
}
`,YE=`
#ifdef GL_ES
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
precision mediump int;

uniform float iTime;
uniform vec3 iResolution;
uniform vec4 iMouse;
uniform float uWispDensity;
uniform float uTiltScale;
uniform float uFlowTime;
uniform float uFogTime;
uniform float uBeamXFrac;
uniform float uBeamYFrac;
uniform float uFlowSpeed;
uniform float uVLenFactor;
uniform float uHLenFactor;
uniform float uFogIntensity;
uniform float uFogScale;
uniform float uWSpeed;
uniform float uWIntensity;
uniform float uFlowStrength;
uniform float uDecay;
uniform float uFalloffStart;
uniform float uFogFallSpeed;
uniform vec3 uColor;
uniform float uFade;

// Core beam/flare shaping and dynamics
#define PI 3.14159265359
#define TWO_PI 6.28318530718
#define EPS 1e-6
#define EDGE_SOFT (DT_LOCAL*4.0)
#define DT_LOCAL 0.0038
#define TAP_RADIUS 6
#define R_H 150.0
#define R_V 150.0
#define FLARE_HEIGHT 16.0
#define FLARE_AMOUNT 8.0
#define FLARE_EXP 2.0
#define TOP_FADE_START 0.1
#define TOP_FADE_EXP 1.0
#define FLOW_PERIOD 0.5
#define FLOW_SHARPNESS 1.5

// Wisps (animated micro-streaks) that travel along the beam
#define W_BASE_X 1.5
#define W_LAYER_GAP 0.25
#define W_LANES 10
#define W_SIDE_DECAY 0.5
#define W_HALF 0.01
#define W_AA 0.15
#define W_CELL 20.0
#define W_SEG_MIN 0.01
#define W_SEG_MAX 0.55
#define W_CURVE_AMOUNT 15.0
#define W_CURVE_RANGE (FLARE_HEIGHT - 3.0)
#define W_BOTTOM_EXP 10.0

// Volumetric fog controls
#define FOG_ON 1
#define FOG_CONTRAST 1.2
#define FOG_SPEED_U 0.1
#define FOG_SPEED_V -0.1
#define FOG_OCTAVES 5
#define FOG_BOTTOM_BIAS 0.8
#define FOG_TILT_TO_MOUSE 0.05
#define FOG_TILT_DEADZONE 0.01
#define FOG_TILT_MAX_X 0.35
#define FOG_TILT_SHAPE 1.5
#define FOG_BEAM_MIN 0.0
#define FOG_BEAM_MAX 0.75
#define FOG_MASK_GAMMA 0.5
#define FOG_EXPAND_SHAPE 12.2
#define FOG_EDGE_MIX 0.5

// Horizontal vignette for the fog volume
#define HFOG_EDGE_START 0.20
#define HFOG_EDGE_END 0.98
#define HFOG_EDGE_GAMMA 1.4
#define HFOG_Y_RADIUS 25.0
#define HFOG_Y_SOFT 60.0

// Beam extents and edge masking
#define EDGE_X0 0.22
#define EDGE_X1 0.995
#define EDGE_X_GAMMA 1.25
#define EDGE_LUMA_T0 0.0
#define EDGE_LUMA_T1 2.0
#define DITHER_STRENGTH 1.0

    float g(float x){return x<=0.00031308?12.92*x:1.055*pow(x,1.0/2.4)-0.055;}
    float bs(vec2 p,vec2 q,float powr){
        float d=distance(p,q),f=powr*uFalloffStart,r=(f*f)/(d*d+EPS);
        return powr*min(1.0,r);
    }
    float bsa(vec2 p,vec2 q,float powr,vec2 s){
        vec2 d=p-q; float dd=(d.x*d.x)/(s.x*s.x)+(d.y*d.y)/(s.y*s.y),f=powr*uFalloffStart,r=(f*f)/(dd+EPS);
        return powr*min(1.0,r);
    }
    float tri01(float x){float f=fract(x);return 1.0-abs(f*2.0-1.0);}
    float tauWf(float t,float tmin,float tmax){float a=smoothstep(tmin,tmin+EDGE_SOFT,t),b=1.0-smoothstep(tmax-EDGE_SOFT,tmax,t);return max(0.0,a*b);} 
    float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+34.123);return fract(p.x*p.y);}
    float vnoise(vec2 p){
        vec2 i=floor(p),f=fract(p);
        float a=h21(i),b=h21(i+vec2(1,0)),c=h21(i+vec2(0,1)),d=h21(i+vec2(1,1));
        vec2 u=f*f*(3.0-2.0*f);
        return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
    }
    float fbm2(vec2 p){
        float v=0.0,amp=0.6; mat2 m=mat2(0.86,0.5,-0.5,0.86);
        for(int i=0;i<FOG_OCTAVES;++i){v+=amp*vnoise(p); p=m*p*2.03+17.1; amp*=0.52;}
        return v;
    }
    float rGate(float x,float l){float a=smoothstep(0.0,W_AA,x),b=1.0-smoothstep(l,l+W_AA,x);return max(0.0,a*b);}
    float flareY(float y){float t=clamp(1.0-(clamp(y,0.0,FLARE_HEIGHT)/max(FLARE_HEIGHT,EPS)),0.0,1.0);return pow(t,FLARE_EXP);}

    float vWisps(vec2 uv,float topF){
    float y=uv.y,yf=(y+uFlowTime*uWSpeed)/W_CELL;
    float dRaw=clamp(uWispDensity,0.0,2.0),d=dRaw<=0.0?1.0:dRaw;
    float lanesF=floor(float(W_LANES)*min(d,1.0)+0.5); // WebGL1-safe
    int lanes=int(max(1.0,lanesF));
    float sp=min(d,1.0),ep=max(d-1.0,0.0);
    float fm=flareY(max(y,0.0)),rm=clamp(1.0-(y/max(W_CURVE_RANGE,EPS)),0.0,1.0),cm=fm*rm;
    const float G=0.05; float xS=1.0+(FLARE_AMOUNT*W_CURVE_AMOUNT*G)*cm;
    float sPix=clamp(y/R_V,0.0,1.0),bGain=pow(1.0-sPix,W_BOTTOM_EXP),sum=0.0;
    for(int s=0;s<2;++s){
        float sgn=s==0?-1.0:1.0;
        for(int i=0;i<W_LANES;++i){
            if(i>=lanes) break;
            float off=W_BASE_X+float(i)*W_LAYER_GAP,xc=sgn*(off*xS);
            float dx=abs(uv.x-xc),lat=1.0-smoothstep(W_HALF,W_HALF+W_AA,dx),amp=exp(-off*W_SIDE_DECAY);
            float seed=h21(vec2(off,sgn*17.0)),yf2=yf+seed*7.0,ci=floor(yf2),fy=fract(yf2);
            float seg=mix(W_SEG_MIN,W_SEG_MAX,h21(vec2(ci,off*2.3)));
            float spR=h21(vec2(ci,off+sgn*31.0)),seg1=rGate(fy,seg)*step(spR,sp);
            if(ep>0.0){float spR2=h21(vec2(ci*3.1+7.0,off*5.3+sgn*13.0)); float f2=fract(fy+0.5); seg1+=rGate(f2,seg*0.9)*step(spR2,ep);}
            sum+=amp*lat*seg1;
        }
    }
    float span=smoothstep(-3.0,0.0,y)*(1.0-smoothstep(R_V-6.0,R_V,y));
    return uWIntensity*sum*topF*bGain*span;
}

void mainImage(out vec4 fc,in vec2 frag){
    vec2 C=iResolution.xy*.5; float invW=1.0/max(C.x,1.0);
    float sc=512.0/iResolution.x*.4;
    vec2 uv=(frag-C)*sc,off=vec2(uBeamXFrac*iResolution.x*sc,uBeamYFrac*iResolution.y*sc);
    vec2 uvc = uv - off;
    float a=0.0,b=0.0;
    float basePhase=1.5*PI+uDecay*.5; float tauMin=basePhase-uDecay; float tauMax=basePhase;
    float cx=clamp(uvc.x/(R_H*uHLenFactor),-1.0,1.0),tH=clamp(TWO_PI-acos(cx),tauMin,tauMax);
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tH+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
        float spd=max(abs(sin(tu)),0.02),u=clamp((basePhase-tu)/max(uDecay,EPS),0.0,1.0),env=pow(1.0-abs(u*2.0-1.0),0.8);
        vec2 p=vec2((R_H*uHLenFactor)*cos(tu),0.0);
        a+=wt*bs(uvc,p,env*spd);
    }
    float yPix=uvc.y,cy=clamp(-yPix/(R_V*uVLenFactor),-1.0,1.0),tV=clamp(TWO_PI-acos(cy),tauMin,tauMax);
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tV+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
        float yb=(-R_V)*cos(tu),s=clamp(yb/R_V,0.0,1.0),spd=max(abs(sin(tu)),0.02);
        float env=pow(1.0-s,0.6)*spd;
        float cap=1.0-smoothstep(TOP_FADE_START,1.0,s); cap=pow(cap,TOP_FADE_EXP); env*=cap;
        float ph=s/max(FLOW_PERIOD,EPS)+uFlowTime*uFlowSpeed;
        float fl=pow(tri01(ph),FLOW_SHARPNESS);
        env*=mix(1.0-uFlowStrength,1.0,fl);
        float yp=(-R_V*uVLenFactor)*cos(tu),m=pow(smoothstep(FLARE_HEIGHT,0.0,yp),FLARE_EXP),wx=1.0+FLARE_AMOUNT*m;
        vec2 sig=vec2(wx,1.0),p=vec2(0.0,yp);
        float mask=step(0.0,yp);
        b+=wt*bsa(uvc,p,mask*env,sig);
    }
    float sPix=clamp(yPix/R_V,0.0,1.0),topA=pow(1.0-smoothstep(TOP_FADE_START,1.0,sPix),TOP_FADE_EXP);
    float L=a+b*topA;
    float w=vWisps(vec2(uvc.x,yPix),topA);
    float fog=0.0;
#if FOG_ON
    vec2 fuv=uvc*uFogScale;
    float mAct=step(1.0,length(iMouse.xy)),nx=((iMouse.x-C.x)*invW)*mAct;
    float ax = abs(nx);
    float stMag = mix(ax, pow(ax, FOG_TILT_SHAPE), 0.35);
    float st = sign(nx) * stMag * uTiltScale;
    st = clamp(st, -FOG_TILT_MAX_X, FOG_TILT_MAX_X);
    vec2 dir=normalize(vec2(st,1.0));
    fuv+=uFogTime*uFogFallSpeed*dir;
    vec2 prp=vec2(-dir.y,dir.x);
    fuv+=prp*(0.08*sin(dot(uvc,prp)*0.08+uFogTime*0.9));
    float n=fbm2(fuv+vec2(fbm2(fuv+vec2(7.3,2.1)),fbm2(fuv+vec2(-3.7,5.9)))*0.6);
    n=pow(clamp(n,0.0,1.0),FOG_CONTRAST);
    float pixW = 1.0 / max(iResolution.y, 1.0);
#ifdef GL_OES_standard_derivatives
    float wL = max(fwidth(L), pixW);
#else
    float wL = pixW;
#endif
    float m0=pow(smoothstep(FOG_BEAM_MIN - wL, FOG_BEAM_MAX + wL, L),FOG_MASK_GAMMA);
    float bm=1.0-pow(1.0-m0,FOG_EXPAND_SHAPE); bm=mix(bm*m0,bm,FOG_EDGE_MIX);
    float yP=1.0-smoothstep(HFOG_Y_RADIUS,HFOG_Y_RADIUS+HFOG_Y_SOFT,abs(yPix));
    float nxF=abs((frag.x-C.x)*invW),hE=1.0-smoothstep(HFOG_EDGE_START,HFOG_EDGE_END,nxF); hE=pow(clamp(hE,0.0,1.0),HFOG_EDGE_GAMMA);
    float hW=mix(1.0,hE,clamp(yP,0.0,1.0));
    float bBias=mix(1.0,1.0-sPix,FOG_BOTTOM_BIAS);
    float browserFogIntensity = uFogIntensity;
    browserFogIntensity *= 1.8;
    float radialFade = 1.0 - smoothstep(0.0, 0.7, length(uvc) / 120.0);
    float safariFog = n * browserFogIntensity * bBias * bm * hW * radialFade;
    fog = safariFog;
#endif
    float LF=L+fog;
    float dith=(h21(frag)-0.5)*(DITHER_STRENGTH/255.0);
    float tone=g(LF+w);
    vec3 col=tone*uColor+dith;
    float alpha=clamp(g(L+w*0.6)+dith*0.6,0.0,1.0);
    float nxE=abs((frag.x-C.x)*invW),xF=pow(clamp(1.0-smoothstep(EDGE_X0,EDGE_X1,nxE),0.0,1.0),EDGE_X_GAMMA);
    float scene=LF+max(0.0,w)*0.5,hi=smoothstep(EDGE_LUMA_T0,EDGE_LUMA_T1,scene);
    float eM=mix(xF,1.0,hi);
    col*=eM; alpha*=eM;
    col*=uFade; alpha*=uFade;
    fc=vec4(col,alpha);
}

void main(){
  vec4 fc;
  mainImage(fc, gl_FragCoord.xy);
  gl_FragColor = fc;
}
`,ZE=({className:o,style:t,wispDensity:i=1,dpr:s,mouseSmoothTime:l=0,mouseTiltStrength:u=.01,horizontalBeamOffset:d=.1,verticalBeamOffset:h=0,flowSpeed:m=.35,verticalSizing:p=2,horizontalSizing:_=.5,fogIntensity:g=.45,fogScale:S=.3,wispSpeed:y=15,wispIntensity:A=5,flowStrength:C=.25,decay:b=1.1,falloffStart:v=1.2,fogFallSpeed:z=.6,color:U="#FF79C6"})=>{const B=en.useRef(null),q=en.useRef(null),L=en.useRef(null),F=en.useRef(!1),ne=en.useRef(null),w=en.useRef(1),R=en.useRef(1),k=en.useRef({width:0,height:0,dpr:0}),ee=en.useRef([]),oe=en.useRef(performance.now()),xe=en.useRef(16.7),de=en.useRef(!1),O=X=>{let W=X.trim();W[0]==="#"&&(W=W.slice(1)),W.length===3&&(W=W.split("").map(_e=>_e+_e).join(""));const le=parseInt(W,16)||16777215;return{r:(le>>16&255)/255,g:(le>>8&255)/255,b:(le&255)/255}};return en.useEffect(()=>{const X=B.current,W=new qE({antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1,logarithmicDepthBuffer:!1});q.current=W,w.current=Math.min(s??(window.devicePixelRatio||1),2),R.current=w.current,W.setPixelRatio(R.current),W.shadowMap.enabled=!1,W.outputColorSpace=ei,W.setClearColor(0,1);const le=W.domElement;le.style.width="100%",le.style.height="100%",le.style.display="block",X.appendChild(le);const _e=new Kb,N=new Lg(-1,1,1,-1,0,1),ae=new ha;ae.setAttribute("position",new Mi(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const be={iTime:{value:0},iResolution:{value:new fe(1,1,1)},iMouse:{value:new tn(0,0,0,0)},uWispDensity:{value:i},uTiltScale:{value:u},uFlowTime:{value:0},uFogTime:{value:0},uBeamXFrac:{value:d},uBeamYFrac:{value:h},uFlowSpeed:{value:m},uVLenFactor:{value:p},uHLenFactor:{value:_},uFogIntensity:{value:g},uFogScale:{value:S},uWSpeed:{value:y},uWIntensity:{value:A},uFlowStrength:{value:C},uDecay:{value:b},uFalloffStart:{value:v},uFogFallSpeed:{value:z},uColor:{value:new fe(1,1,1)},uFade:{value:F.current?1:0}};L.current=be;const Ae=new ty({vertexShader:jE,fragmentShader:YE,uniforms:be,transparent:!1,depthTest:!1,depthWrite:!1,blending:Es}),Pe=new da(ae,Ae);Pe.frustumCulled=!1,_e.add(Pe);const ie=new sy;let ue=0,Ce=F.current?1:0;const Ie=new Ft(0,0),qe=new Ft(0,0),rt=()=>{const Ee=X.clientWidth||1,Xe=X.clientHeight||1,Ue=R.current,ve=k.current,ye=Math.abs(Ee-ve.width)>.5||Math.abs(Xe-ve.height)>.5,Be=Math.abs(Ue-ve.dpr)>.01;!ye&&!Be||(k.current={width:Ee,height:Xe,dpr:Ue},W.setPixelRatio(Ue),W.setSize(Ee,Xe,!1),be.iResolution.value.set(Ee*Ue,Xe*Ue,Ue),ne.current=le.getBoundingClientRect(),de.current||W.render(_e,N))};let Yt=0;const ot=()=>{Yt&&cancelAnimationFrame(Yt),Yt=requestAnimationFrame(rt)};ot();const xt=typeof ResizeObserver<"u"?new ResizeObserver(ot):null;xt&&xt.observe(X);const I=()=>{de.current=document.hidden};document.addEventListener("visibilitychange",I,{passive:!0});const ct=(Ee,Xe)=>{const Ue=ne.current;if(!Ue)return;const ve=Ee-Ue.left,ye=Xe-Ue.top,Be=R.current,ze=Ue.height*Be;Ie.set(ve*Be,ze-ye*Be)},st=Ee=>ct(Ee.clientX,Ee.clientY),At=()=>Ie.set(0,0);le.addEventListener("pointermove",st,{passive:!0}),le.addEventListener("pointerdown",st,{passive:!0}),le.addEventListener("pointerenter",st,{passive:!0}),le.addEventListener("pointerleave",At,{passive:!0});const Ge=Ee=>{Ee.preventDefault(),de.current=!0},Lt=()=>{de.current=!1,ot()};le.addEventListener("webglcontextlost",Ge,!1),le.addEventListener("webglcontextrestored",Lt,!1);let Ze=0;const nt=(Ee,Xe,Ue)=>Math.max(Xe,Math.min(Ue,Ee)),D=.8,M=50,K=58;let me=0;const Me=2e3,ce=Ee=>{if(Ee-oe.current<750)return;const Ue=ee.current;if(Ue.length===0){oe.current=Ee;return}const ve=Ue.reduce((ze,Fe)=>ze+Fe,0)/Ue.length;let ye=R.current;const Be=w.current;ve<M?ye=nt(R.current*.85,D,Be):ve>K&&R.current<Be&&(ye=nt(R.current*1.1,D,Be)),Math.abs(ye-R.current)>.01&&Ee-me>Me&&(R.current=ye,me=Ee,rt()),ee.current=[],oe.current=Ee},Ye=()=>{if(Ze=requestAnimationFrame(Ye),de.current)return;const Ee=ie.getElapsedTime(),Xe=Math.max(0,Ee-ue);ue=Ee;const Ue=Xe*1e3;xe.current=xe.current*.9+Ue*.1;const ve=1e3/Math.max(1,xe.current);ee.current.push(ve),be.iTime.value=Ee;const ye=Math.min(.033,Math.max(.001,Xe));be.uFlowTime.value+=ye,be.uFogTime.value+=ye,F.current||(Ce=Math.min(1,Ce+ye/1),be.uFade.value=Ce,Ce>=1&&(F.current=!0));const Be=Math.max(.001,l),ze=1-Math.exp(-ye/Be);qe.lerp(Ie,ze),be.iMouse.value.set(qe.x,qe.y,0,0),W.render(_e,N),ce(performance.now())};return Ye(),()=>{cancelAnimationFrame(Ze),xt&&xt.disconnect(),document.removeEventListener("visibilitychange",I),le.removeEventListener("pointermove",st),le.removeEventListener("pointerdown",st),le.removeEventListener("pointerenter",st),le.removeEventListener("pointerleave",At),le.removeEventListener("webglcontextlost",Ge),le.removeEventListener("webglcontextrestored",Lt),ae.dispose(),Ae.dispose(),W.dispose(),X.contains(le)&&X.removeChild(le)}},[s]),en.useEffect(()=>{const X=L.current;if(!X)return;X.uWispDensity.value=i,X.uTiltScale.value=u,X.uBeamXFrac.value=d,X.uBeamYFrac.value=h,X.uFlowSpeed.value=m,X.uVLenFactor.value=p,X.uHLenFactor.value=_,X.uFogIntensity.value=g,X.uFogScale.value=S,X.uWSpeed.value=y,X.uWIntensity.value=A,X.uFlowStrength.value=C,X.uDecay.value=b,X.uFalloffStart.value=v,X.uFogFallSpeed.value=z;const{r:W,g:le,b:_e}=O(U||"#FFFFFF");X.uColor.value.set(W,le,_e)},[i,u,d,h,m,p,_,g,S,y,A,C,b,v,z,U]),H.jsx("div",{ref:B,className:`w-full h-full relative ${o||""}`,style:t})},KE=()=>H.jsxs("section",{id:"overview",className:"relative min-h-[90vh] bg-[#05030f] overflow-hidden",children:[H.jsxs("div",{className:"pointer-events-none absolute inset-x-0 -top-24 h-[120vh]",children:[H.jsx(ZE,{className:"w-full h-full",color:"#ffb15c",horizontalBeamOffset:0,verticalBeamOffset:-.12,wispDensity:1.1,verticalSizing:2.6,horizontalSizing:.9,fogIntensity:.6,flowStrength:.35,flowSpeed:.35,fogScale:.3}),H.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-b from-transparent via-bg/70 to-bg"})]}),H.jsxs("div",{className:"relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24",children:[H.jsx("div",{className:"mb-8",children:H.jsx("div",{className:"inline-flex items-center rounded-full border border-white/10 bg-black/40 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60 backdrop-blur-xl",children:"Zero-Knowledge · Smart Contracts · XR Interfaces"})}),H.jsxs("div",{className:"flex flex-col gap-02 lg:flex-row ",children:[H.jsxs("div",{className:"max-w-3xl",children:[H.jsxs("h1",{className:"text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]",children:["Hey, I'm Mahesh - I design"," ",H.jsx("span",{className:"text-neonBlue",children:"trustless rails"})," and"," ",H.jsx("span",{className:"text-neonOrange",children:"playful interfaces"})," for systems that shouldn't break."]}),H.jsxs("div",{className:"mt-8 flex flex-wrap gap-4",children:[H.jsx("a",{href:"#projects",className:"rounded-pill bg-gradient-to-r from-neonBlue to-neonOrange px-7 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(0,160,255,0.55)] transition hover:shadow-[0_0_55px_rgba(255,140,80,0.8)]",children:"Explore the builds"}),H.jsx("a",{href:"#contact",className:"rounded-pill border border-white/25 bg-black/40 px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/60 hover:text-white",children:"Say gm & plot something"})]})]}),H.jsxs("div",{className:"mt-8 flex flex-1 flex-col gap-4 lg:mt-0",children:[H.jsxs("div",{className:"rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl",children:[H.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50",children:"What I love building"}),H.jsx("p",{className:"mt-3 text-sm text-white/80",children:"Protocol pieces, ZK flows, and tools that quietly keep people safe while everyone else just sees a smooth UI."})]}),H.jsxs("div",{className:"rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl",children:[H.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50",children:"Current sandbox"}),H.jsx("p",{className:"mt-3 text-sm text-white/80",children:"Medi-vault for privacy-preserving health data, ZK-cookies for adtech without stalking, and Polygon-based infra experiments."})]}),H.jsxs("div",{className:"rounded-3xl border border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl",children:[H.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.25em] text-white/50",children:"Looking for"}),H.jsx("p",{className:"mt-3 text-sm text-white/80",children:"Teams who obsess over correctness, care about UX, and don't mind shipping things that feel a bit ahead of their time."})]})]})]})]})]}),QE=()=>{const[o,t]=en.useState(!0);return en.useEffect(()=>{const i=setTimeout(()=>t(!1),2600);return()=>clearTimeout(i)},[]),H.jsxs("div",{className:"min-h-screen bg-bg bg-page-gradient text-white relative overflow-hidden",children:[H.jsx(LS,{}),o&&H.jsx(NS,{}),H.jsxs("div",{className:"relative z-10",children:[H.jsx(nS,{}),H.jsxs("main",{className:"pt-20 space-y-16 pb-20",children:[H.jsx(KE,{}),H.jsx(TS,{}),H.jsx(RS,{}),H.jsx(CS,{}),H.jsx(DS,{}),H.jsx(US,{})]}),H.jsx("footer",{className:"border-t border-white/10 bg-gradient-to-t from-black/60 via-bg/90 to-transparent px-4 py-10",children:H.jsxs("div",{className:"mx-auto flex max-w-5xl flex-col items-center gap-6 text-center",children:[H.jsxs("div",{children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.35em] text-white/60",children:"Join the movement"}),H.jsxs("h2",{className:"mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl",children:["Build the next wave of secure"," ",H.jsx("span",{className:"bg-gradient-to-r from-neonBlue via-neonPurple to-neonOrange bg-clip-text text-transparent",children:"privacy-first"})," ","apps."]}),H.jsx("p",{className:"mt-3 max-w-2xl text-sm text-white/70",children:"I'm looking for teams who care about strong engineering, cryptography, and delightful user experiences. If that's you, let's talk about what we can build together."})]}),H.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[H.jsx("a",{href:"mailto:saimaheshsure29@gmail.com",className:"rounded-pill bg-gradient-to-r from-neonBlue via-neonPurple to-neonOrange px-8 py-3 text-sm font-medium text-white shadow-neon-blue transition hover:shadow-neon-orange",children:"See in action — contact me"}),H.jsx("a",{href:"/Sai_Mahesh_resume.pdf",target:"_blank",className:"rounded-pill border border-white/20 bg-black/40 px-8 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:border-white/50 hover:text-white",children:"Download resume"})]}),H.jsxs("p",{className:"text-[11px] text-white/50",children:["© ",new Date().getFullYear()," Sai Mahesh Sure · Built with React, TypeScript & Tailwind."]})]})})]})]})};eS.createRoot(document.getElementById("root")).render(H.jsx(qv.StrictMode,{children:H.jsx(QE,{})}));
