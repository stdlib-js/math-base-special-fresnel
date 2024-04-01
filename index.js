// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(a):t(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!n(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,u=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,y,"e-0$1"),e.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,d,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===s.call(e.specifier)?s.call(t):u.call(t)}function m(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,n,t,a,o,f,u,s,l,p,y,g,d;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",u=1,s=0;s<e.length;s++)if("string"==typeof(t=e[s]))f+=t;else{if(r=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,_(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,g=t.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),f+=t.arg||"",u+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,n,t,i;for(n=[],i=0,t=S.exec(e);t;)(r=e.slice(i,S.lastIndex-t[0].length)).length&&n.push(r),n.push(k(t)),i=S.lastIndex,t=S.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function N(e){var r,n;if("string"!=typeof e)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],n=1;n<arguments.length;n++)r.push(arguments[n]);return I.apply(null,r)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(e,r)||$.call(e,r)?(t=e.__proto__,e.__proto__=F,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(e,r,n.get),o&&O&&O.call(e,r,n.set),e};function H(e,r,n){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var W,C=2147483647,L=2146435072,P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),R=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,X="function"==typeof M?M.toStringTag:"",Y=P&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,i,a;if(null==e)return R.call(e);n=e[X],a=X,r=null!=(i=e)&&Z.call(i,a);try{e[X]=void 0}catch(r){return R.call(e)}return t=R.call(e),r?e[X]=n:delete e[X],t}:function(e){return R.call(e)},z="function"==typeof Uint32Array,q="function"==typeof Uint32Array?Uint32Array:null,B="function"==typeof Uint32Array?Uint32Array:void 0;W=function(){var e,r,n;if("function"!=typeof q)return!1;try{r=new q(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(z&&n instanceof Uint32Array||"[object Uint32Array]"===Y(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?B:function(){throw new Error("not implemented")};var D,J=W,K="function"==typeof Float64Array,Q="function"==typeof Float64Array?Float64Array:null,ee="function"==typeof Float64Array?Float64Array:void 0;D=function(){var e,r,n;if("function"!=typeof Q)return!1;try{r=new Q([1,3.14,-3.14,NaN]),n=r,e=(K&&n instanceof Float64Array||"[object Float64Array]"===Y(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ee:function(){throw new Error("not implemented")};var re,ne=D,te="function"==typeof Uint8Array,ie="function"==typeof Uint8Array?Uint8Array:null,ae="function"==typeof Uint8Array?Uint8Array:void 0;re=function(){var e,r,n;if("function"!=typeof ie)return!1;try{r=new ie(r=[1,3.14,-3.14,256,257]),n=r,e=(te&&n instanceof Uint8Array||"[object Uint8Array]"===Y(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ae:function(){throw new Error("not implemented")};var oe,ce=re,fe="function"==typeof Uint16Array,ue="function"==typeof Uint16Array?Uint16Array:null,se="function"==typeof Uint16Array?Uint16Array:void 0;oe=function(){var e,r,n;if("function"!=typeof ue)return!1;try{r=new ue(r=[1,3.14,-3.14,65536,65537]),n=r,e=(fe&&n instanceof Uint16Array||"[object Uint16Array]"===Y(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?se:function(){throw new Error("not implemented")};var le,pe={uint16:oe,uint8:ce};(le=new pe.uint16(1))[0]=4660;var ye=52===new pe.uint8(le.buffer)[0],ge=!0===ye?1:0,de=new ne(1),ve=new J(de.buffer);function he(e){return de[0]=e,ve[ge]}var we,be,me=1048575,Ae=!0===ye?0:1,_e=new ne(1),Ee=new J(_e.buffer);!0===ye?(we=1,be=0):(we=0,be=1);var Ue={HIGH:we,LOW:be},Ie=new ne(1),Se=new J(Ie.buffer),ke=Ue.HIGH,xe=Ue.LOW;function Ne(e,r){return Se[ke]=e,Se[xe]=r,Ie[0]}var Fe=Math.floor,je=Number.POSITIVE_INFINITY,Te=Number.NEGATIVE_INFINITY,Oe=1023,Ve=1023,$e=-1023,Ge=-1074;function He(e){return e!=e}function We(e){return e===je||e===Te}var Ce,Le,Pe=2147483648;!0===ye?(Ce=1,Le=0):(Ce=0,Le=1);var Re={HIGH:Ce,LOW:Le},Ze=new ne(1),Me=new J(Ze.buffer),Xe=Re.HIGH,Ye=Re.LOW;function ze(e,r,n,t){return Ze[0]=e,r[t]=Me[Xe],r[t+n]=Me[Ye],r}function qe(e){return ze(e,[0,0],1,0)}H(qe,"assign",ze);var Be=[0,0],De=22250738585072014e-324;function Je(e){return Math.abs(e)}var Ke=4503599627370496;function Qe(e,r,n,t){return He(e)||We(e)?(r[t]=e,r[t+n]=0,r):0!==e&&Je(e)<De?(r[t]=e*Ke,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}H((function(e){return Qe(e,[0,0],1,0)}),"assign",Qe);var er=2220446049250313e-31,rr=2148532223,nr=[0,0],tr=[0,0];function ir(e,r){var n,t,i,a,o,c;return 0===r||0===e||He(e)||We(e)?e:(Qe(e,nr,1,0),e=nr[0],r+=nr[1],r+=function(e){var r=he(e);return(r=(r&L)>>>20)-Oe|0}(e),r<Ge?(i=0,a=e,qe.assign(i,Be,1,0),o=Be[0],o&=C,c=he(a),Ne(o|=c&=Pe,Be[1])):r>Ve?e<0?Te:je:(r<=$e?(r+=52,t=er):t=1,qe.assign(e,tr,1,0),n=tr[0],n&=rr,t*Ne(n|=r+Oe<<20,tr[1])))}function ar(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var or=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],cr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fr=16777216,ur=5.960464477539063e-8,sr=ar(20),lr=ar(20),pr=ar(20),yr=ar(20);function gr(e,r,n,t,i,a,o,c,f){var u,s,l,p,y,g,d,v,h;for(p=a,h=t[n],v=n,y=0;v>0;y++)s=ur*h|0,yr[y]=h-fr*s|0,h=t[v-1]+s,v-=1;if(h=ir(h,i),h-=8*Fe(.125*h),h-=d=0|h,l=0,i>0?(d+=y=yr[n-1]>>24-i,yr[n-1]-=y<<24-i,l=yr[n-1]>>23-i):0===i?l=yr[n-1]>>23:h>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<n;y++)v=yr[y],0===u?0!==v&&(u=1,yr[y]=16777216-v):yr[y]=16777215-v;if(i>0)switch(i){case 1:yr[n-1]&=8388607;break;case 2:yr[n-1]&=4194303}2===l&&(h=1-h,0!==u&&(h-=ir(1,i)))}if(0===h){for(v=0,y=n-1;y>=a;y--)v|=yr[y];if(0===v){for(g=1;0===yr[a-g];g++);for(y=n+1;y<=n+g;y++){for(f[c+y]=or[o+y],s=0,v=0;v<=c;v++)s+=e[v]*f[c+(y-v)];t[y]=s}return gr(e,r,n+=g,t,i,a,o,c,f)}}if(0===h)for(n-=1,i-=24;0===yr[n];)n-=1,i-=24;else(h=ir(h,-i))>=fr?(s=ur*h|0,yr[n]=h-fr*s|0,i+=24,yr[n+=1]=s):yr[n]=0|h;for(s=ir(1,i),y=n;y>=0;y--)t[y]=s*yr[y],s*=ur;for(y=n;y>=0;y--){for(s=0,g=0;g<=p&&g<=n-y;g++)s+=cr[g]*t[y+g];pr[n-y]=s}for(s=0,y=n;y>=0;y--)s+=pr[y];for(r[0]=0===l?s:-s,s=pr[0]-s,y=1;y<=n;y++)s+=pr[y];return r[1]=0===l?s:-s,7&d}function dr(e,r,n,t){var i,a,o,c,f,u,s;for((a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),u=a-(o=t-1),s=o+4,f=0;f<=s;f++)sr[f]=u<0?0:or[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=e[u]*sr[o+(f-u)];lr[f]=i}return gr(e,r,4,lr,c,4,a,o,sr)}var vr=Math.round,hr=.6366197723675814,wr=1.5707963267341256,br=6077100506506192e-26,mr=6077100506303966e-26,Ar=20222662487959506e-37,_r=20222662487111665e-37,Er=84784276603689e-45,Ur=2047;function Ir(e,r,n){var t,i,a,o,c;return a=e-(t=vr(e*hr))*wr,o=t*br,c=r>>20|0,n[0]=a-o,c-(he(n[0])>>20&Ur)>16&&(o=t*Ar-((i=a)-(a=i-(o=t*mr))-o),n[0]=a-o,c-(he(n[0])>>20&Ur)>49&&(o=t*Er-((i=a)-(a=i-(o=t*_r))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Sr=0,kr=16777216,xr=1.5707963267341256,Nr=6077100506506192e-26,Fr=2*Nr,jr=3*Nr,Tr=4*Nr,Or=598523,Vr=1072243195,$r=1073928572,Gr=1074752122,Hr=1074977148,Wr=1075183036,Cr=1075388923,Lr=1075594811,Pr=1094263291,Rr=[0,0,0],Zr=[0,0];function Mr(e,r){var n,t,i,a,o,c,f;if((i=he(e)&C|0)<=Vr)return r[0]=e,r[1]=0,0;if(i<=Gr)return(i&me)===Or?Ir(e,i,r):i<=$r?e>0?(f=e-xr,r[0]=f-Nr,r[1]=f-r[0]-Nr,1):(f=e+xr,r[0]=f+Nr,r[1]=f-r[0]+Nr,-1):e>0?(f=e-2*xr,r[0]=f-Fr,r[1]=f-r[0]-Fr,2):(f=e+2*xr,r[0]=f+Fr,r[1]=f-r[0]+Fr,-2);if(i<=Lr)return i<=Wr?i===Hr?Ir(e,i,r):e>0?(f=e-3*xr,r[0]=f-jr,r[1]=f-r[0]-jr,3):(f=e+3*xr,r[0]=f+jr,r[1]=f-r[0]+jr,-3):i===Cr?Ir(e,i,r):e>0?(f=e-4*xr,r[0]=f-Tr,r[1]=f-r[0]-Tr,4):(f=e+4*xr,r[0]=f+Tr,r[1]=f-r[0]+Tr,-4);if(i<Pr)return Ir(e,i,r);if(i>=L)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return _e[0]=e,Ee[Ae]}(e),f=Ne(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Rr[o]=0|f,f=(f-Rr[o])*kr;for(Rr[2]=f,a=3;Rr[a-1]===Sr;)a-=1;return c=dr(Rr,Zr,t,a),e<0?(r[0]=-Zr[0],r[1]=-Zr[1],-c):(r[0]=Zr[0],r[1]=Zr[1],c)}var Xr=-.16666666666666632,Yr=.00833333333332249,zr=-.0001984126982985795,qr=27557313707070068e-22,Br=-2.5050760253406863e-8,Dr=1.58969099521155e-10,Jr=.0416666666666666,Kr=-.001388888888887411,Qr=2480158728947673e-20,en=-2.7557314351390663e-7,rn=2.087572321298175e-9,nn=-11359647557788195e-27;function tn(e,r,n,t,i){var a,o,c,f,u;return o=Yr+(u=e*e)*(zr+u*qr)+u*(f=u*u)*(Br+u*Dr),c=u*e,n[i]=0===r?e+c*(Xr+u*o):e-(u*(.5*r-c*o)-r-c*Xr),o=u*(Jr+u*(Kr+u*Qr)),o+=f*f*(en+u*(rn+u*nn)),f=1-(a=.5*u),n[i+t]=f+(1-f-a+(u*o-e*r)),n}var an=1072243195,on=1044381696,cn=[0,0];function fn(e,r,n,t){var i,a;if(i=he(e),(i&=C)<=an)return i<on&&0==(0|e)&&(r[t]=e,r[t+n]=0),tn(e,0,r,n,t);if(i>=L)return r[t]=NaN,r[t+n]=NaN,r;switch(a=Mr(e,cn),tn(cn[0],cn[1],r,n,t),3&a){case 1:return i=r[t+n],r[t+n]=-r[t],r[t]=i,r;case 2:return r[t]*=-1,r[t+n]*=-1,r;case 3:return i=-r[t+n],r[t+n]=r[t],r[t]=i,r;default:return r}}H((function(e){return fn(e,[0,0],1,0)}),"assign",fn);var un=1.5707963267948966,sn=3.141592653589793,ln=[0,0];function pn(e,r,n,t){var i,a,o,c,f,u;return(i=(a=Je(e))*a)<2.5625?(f=i*i,r[t]=a*i*function(e){var r,n;return 0===e?.5235987755982989:((e<0?-e:e)<=1?(r=318016297876.5678+e*(e*(2548908805.7337637+e*(e*(708840.0452577386+e*(0*e-2991.8191940101983))-62974148.62058625))-44297951805.96978),n=607366389490.0846+e*(22441179564.534092+e*(419320245.8981112+e*(5173438.887700964+e*(45584.78108065326+e*(281.3762688899943+1*e)))))):(r=0+(e=1/e)*(e*(708840.0452577386+e*(e*(2548908805.7337637+e*(318016297876.5678*e-44297951805.96978))-62974148.62058625))-2991.8191940101983),n=1+e*(281.3762688899943+e*(45584.78108065326+e*(5173438.887700964+e*(419320245.8981112+e*(22441179564.534092+607366389490.0846*e)))))),r/n)}(f),r[t+n]=a*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(e*(.018884331939670384+e*(e*(9504280628298596e-21+e*(0*e-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),n=1+e*(.04121420907221998+e*(.0008680295429417843+e*(12226278902417902e-21+e*(1.2500186247959882e-7+e*(9.154392157746574e-10+399982968972496e-26*e)))))):(r=0+(e=1/e)*(e*(9504280628298596e-21+e*(e*(.018884331939670384+e*(1*e-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),n=399982968972496e-26+e*(9.154392157746574e-10+e*(1.2500186247959882e-7+e*(12226278902417902e-21+e*(.0008680295429417843+e*(.04121420907221998+1*e)))))),r/n)}(f)):a>36974?(r[t+n]=.5,r[t]=.5):(u=1/((f=sn*(i=a*a))*f),f=1/f,o=1-u*function(e){var r,n;return 0===e?2.999999999999634:((e<0?-e:e)<=1?(r=3.763297112699879e-20+e*(13428327623306275e-32+e*(17201074326816183e-29+e*(1.0230451416490724e-10+e*(3.055689837902576e-8+e*(46361374928786735e-22+e*(.000345017939782574+e*(.011522095507358577+e*(.1434079197807589+e*(.4215435550436775+0*e))))))))),n=1.2544323709001127e-20+e*(45200143407412973e-33+e*(5887545336215784e-29+e*(36014002958937136e-27+e*(1.1269922476399903e-8+e*(18462756734893055e-22+e*(.00015593440916415301+e*(.0064405152650885865+e*(.11688892585919138+e*(.7515863983533789+1*e)))))))))):(r=0+(e=1/e)*(.4215435550436775+e*(.1434079197807589+e*(.011522095507358577+e*(.000345017939782574+e*(46361374928786735e-22+e*(3.055689837902576e-8+e*(1.0230451416490724e-10+e*(17201074326816183e-29+e*(13428327623306275e-32+3.763297112699879e-20*e))))))))),n=1+e*(.7515863983533789+e*(.11688892585919138+e*(.0064405152650885865+e*(.00015593440916415301+e*(18462756734893055e-22+e*(1.1269922476399903e-8+e*(36014002958937136e-27+e*(5887545336215784e-29+e*(45200143407412973e-33+1.2544323709001127e-20*e)))))))))),r/n)}(u),c=f*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=18695871016278324e-38+e*(8363544356306774e-34+e*(1375554606332618e-30+e*(10826804113902088e-28+e*(4.4534441586175015e-10+e*(9.828524436884223e-8+e*(11513882611188428e-21+e*(.0006840793809153931+e*(.018764858409257526+e*(.1971028335255234+e*(.5044420736433832+0*e)))))))))),n=18695871016278324e-38+e*(8391588162831187e-34+e*(13879653125957886e-31+e*(11027321506624028e-28+e*(4.6068072814652043e-10+e*(1.0431458965757199e-7+e*(12754507566772912e-21+e*(.0008146791071843061+e*(.02536037414203388+e*(.33774898912002+e*(1.4749575992512833+1*e))))))))))):(r=0+(e=1/e)*(.5044420736433832+e*(.1971028335255234+e*(.018764858409257526+e*(.0006840793809153931+e*(11513882611188428e-21+e*(9.828524436884223e-8+e*(4.4534441586175015e-10+e*(10826804113902088e-28+e*(1375554606332618e-30+e*(8363544356306774e-34+18695871016278324e-38*e)))))))))),n=1+e*(1.4749575992512833+e*(.33774898912002+e*(.02536037414203388+e*(.0008146791071843061+e*(12754507566772912e-21+e*(1.0431458965757199e-7+e*(4.6068072814652043e-10+e*(11027321506624028e-28+e*(13879653125957886e-31+e*(8391588162831187e-34+18695871016278324e-38*e))))))))))),r/n)}(u),fn(f=un*i,ln,1,0),f=sn*a,r[t+n]=.5+(o*ln[0]-c*ln[1])/f,r[t]=.5-(o*ln[1]+c*ln[0])/f),e<0&&(r[t+n]=-r[t+n],r[t]=-r[t]),r}function yn(e){return pn(e,[0,0],1,0)}return H(yn,"assign",pn),yn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).fresnel=r();
//# sourceMappingURL=index.js.map
