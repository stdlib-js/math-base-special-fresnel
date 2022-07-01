// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,t=e,o=function(n){return t.call(n)},f=Object.prototype.hasOwnProperty,u=function(n,r){return null!=n&&f.call(n,r)},i="function"==typeof Symbol?Symbol.toStringTag:"",a=u,c=i,y=e,l=o,p=function(n){var r,e,t;if(null==n)return y.call(n);e=n[c],r=a(n,c);try{n[c]=void 0}catch(r){return y.call(n)}return t=y.call(n),r?n[c]=e:delete n[c],t},v=r&&"symbol"==typeof Symbol.toStringTag?p:l,A=v,s="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,b=function(n){return s&&n instanceof Uint32Array||"[object Uint32Array]"===A(n)},h=w,d=function(){var n,r;if("function"!=typeof h)return!1;try{r=new h(r=[1,3.14,-3.14,4294967296,4294967297]),n=b(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},U="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){throw new Error("not implemented")},N=d()?U:m,I=v,g="function"==typeof Float64Array,F="function"==typeof Float64Array?Float64Array:null,S=function(n){return g&&n instanceof Float64Array||"[object Float64Array]"===I(n)},H=F,O=function(){var n,r;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,NaN]),n=S(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},T="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},E=O()?T:j,G=v,L="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,M=function(n){return L&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},x=W,P=function(){var n,r;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=M(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},V="function"==typeof Uint8Array?Uint8Array:void 0,Y=function(){throw new Error("not implemented")},_=P()?V:Y,k=v,q="function"==typeof Uint16Array,z="function"==typeof Uint16Array?Uint16Array:null,B=function(n){return q&&n instanceof Uint16Array||"[object Uint16Array]"===k(n)},C=z,D=function(){var n,r;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,65536,65537]),n=B(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},J="function"==typeof Uint16Array?Uint16Array:void 0,K=function(){throw new Error("not implemented")},Q={uint16:D()?J:K,uint8:_};(n=new Q.uint16(1))[0]=4660;var R,X,Z=52===new Q.uint8(n.buffer)[0],$=N,nn=!0===Z?1:0,rn=new E(1),en=new $(rn.buffer),tn=function(n){return rn[0]=n,en[nn]},on=N,fn=!0===Z?0:1,un=new E(1),an=new on(un.buffer),cn=function(n){return un[0]=n,an[fn]};!0===Z?(R=1,X=0):(R=0,X=1);var yn,ln,pn=N,vn={HIGH:R,LOW:X},An=new E(1),sn=new pn(An.buffer),wn=vn.HIGH,bn=vn.LOW,hn=function(n,r){return sn[wn]=n,sn[bn]=r,An[0]},dn=hn,Un=Math.floor,mn=Number.POSITIVE_INFINITY,Nn=Number.NEGATIVE_INFINITY,In=function(n){return n!=n},gn=mn,Fn=Nn,Sn=function(n){return n===gn||n===Fn};!0===Z?(yn=1,ln=0):(yn=0,ln=1);var Hn=N,On={HIGH:yn,LOW:ln},Tn=new E(1),jn=new Hn(Tn.buffer),En=On.HIGH,Gn=On.LOW,Ln=function(n,r){return Tn[0]=r,n[0]=jn[En],n[1]=jn[Gn],n},Wn=function(n,r){return 1===arguments.length?Ln([0,0],n):Ln(n,r)},Mn=Wn,xn=tn,Pn=dn,Vn=[0,0],Yn=function(n){return Math.abs(n)},_n=Sn,kn=In,qn=Yn,zn=function(n,r){return kn(r)||_n(r)?(n[0]=r,n[1]=0,n):0!==r&&qn(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},Bn=function(n,r){return 1===arguments.length?zn([0,0],n):zn(n,r)},Cn=tn,Dn=function(n){var r=Cn(n);return(r=(2146435072&r)>>>20)-1023|0},Jn=mn,Kn=Nn,Qn=In,Rn=Sn,Xn=function(n,r){var e,t;return Mn(Vn,n),e=Vn[0],e&=2147483647,t=xn(r),Pn(e|=t&=2147483648,Vn[1])},Zn=Bn,$n=Dn,nr=Wn,rr=dn,er=[0,0],tr=[0,0],or=function(n,r){var e,t;return 0===r||0===n||Qn(n)||Rn(n)?n:(Zn(er,n),r+=er[1],(r+=$n(n=er[0]))<-1074?Xn(0,n):r>1023?n<0?Kn:Jn:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,nr(tr,n),e=tr[0],e&=2148532223,t*rr(e|=r+1023<<20,tr[1])))},fr=function(n,r){var e,t;for(e=[],t=0;t<r;t++)e.push(n);return e},ur=Un,ir=or,ar=function(n){return fr(0,n)},cr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],lr=16777216,pr=5.960464477539063e-8,vr=ar(20),Ar=ar(20),sr=ar(20),wr=ar(20);function br(n,r,e,t,o,f,u,i,a){var c,y,l,p,v,A,s,w,b;for(p=f,b=t[e],w=e,v=0;w>0;v++)y=pr*b|0,wr[v]=b-lr*y|0,b=t[w-1]+y,w-=1;if(b=ir(b,o),b-=8*ur(.125*b),b-=s=0|b,l=0,o>0?(s+=v=wr[e-1]>>24-o,wr[e-1]-=v<<24-o,l=wr[e-1]>>23-o):0===o?l=wr[e-1]>>23:b>=.5&&(l=2),l>0){for(s+=1,c=0,v=0;v<e;v++)w=wr[v],0===c?0!==w&&(c=1,wr[v]=16777216-w):wr[v]=16777215-w;if(o>0)switch(o){case 1:wr[e-1]&=8388607;break;case 2:wr[e-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=ir(1,o)))}if(0===b){for(w=0,v=e-1;v>=f;v--)w|=wr[v];if(0===w){for(A=1;0===wr[f-A];A++);for(v=e+1;v<=e+A;v++){for(a[i+v]=cr[u+v],y=0,w=0;w<=i;w++)y+=n[w]*a[i+(v-w)];t[v]=y}return br(n,r,e+=A,t,o,f,u,i,a)}}if(0===b)for(e-=1,o-=24;0===wr[e];)e-=1,o-=24;else(b=ir(b,-o))>=lr?(y=pr*b|0,wr[e]=b-lr*y|0,o+=24,wr[e+=1]=y):wr[e]=0|b;for(y=ir(1,o),v=e;v>=0;v--)t[v]=y*wr[v],y*=pr;for(v=e;v>=0;v--){for(y=0,A=0;A<=p&&A<=e-v;A++)y+=yr[A]*t[v+A];sr[e-v]=y}for(y=0,v=e;v>=0;v--)y+=sr[v];for(r[0]=0===l?y:-y,y=sr[0]-y,v=1;v<=e;v++)y+=sr[v];return r[1]=0===l?y:-y,7&s}var hr=function(n,r,e,t){var o,f,u,i,a,c,y;for((f=(e-3)/24|0)<0&&(f=0),i=e-24*(f+1),c=f-(u=t-1),y=u+4,a=0;a<=y;a++)vr[a]=c<0?0:cr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=n[c]*vr[u+(a-c)];Ar[a]=o}return br(n,r,4,Ar,i,4,f,u,vr)},dr=Math.round,Ur=tn,mr=tn,Nr=cn,Ir=dn,gr=hr,Fr=function(n,r,e){var t,o,f,u,i;return f=n-1.5707963267341256*(t=dr(.6366197723675814*n)),u=6077100506506192e-26*t,i=r>>20|0,e[0]=f-u,i-(Ur(e[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((o=f)-(f=o-(u=6077100506303966e-26*t))-u),e[0]=f-u,i-(Ur(e[0])>>20&2047)>49&&(u=84784276603689e-45*t-((o=f)-(f=o-(u=20222662487111665e-37*t))-u),e[0]=f-u)),e[1]=f-e[0]-u,t},Sr=1.5707963267341256,Hr=6077100506506192e-26,Or=2*Hr,Tr=3*Hr,jr=4*Hr,Er=[0,0,0],Gr=[0,0],Lr=function(n,r){var e,t,o,f,u,i,a;if((o=2147483647&mr(n)|0)<=1072243195)return r[0]=n,r[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Fr(n,o,r):o<=1073928572?n>0?(a=n-Sr,r[0]=a-Hr,r[1]=a-r[0]-Hr,1):(a=n+Sr,r[0]=a+Hr,r[1]=a-r[0]+Hr,-1):n>0?(a=n-2*Sr,r[0]=a-Or,r[1]=a-r[0]-Or,2):(a=n+2*Sr,r[0]=a+Or,r[1]=a-r[0]+Or,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Fr(n,o,r):n>0?(a=n-3*Sr,r[0]=a-Tr,r[1]=a-r[0]-Tr,3):(a=n+3*Sr,r[0]=a+Tr,r[1]=a-r[0]+Tr,-3):1075388923===o?Fr(n,o,r):n>0?(a=n-4*Sr,r[0]=a-jr,r[1]=a-r[0]-jr,4):(a=n+4*Sr,r[0]=a+jr,r[1]=a-r[0]+jr,-4);if(o<1094263291)return Fr(n,o,r);if(o>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(e=Nr(n),a=Ir(o-((t=(o>>20)-1046)<<20|0),e),u=0;u<2;u++)Er[u]=0|a,a=16777216*(a-Er[u]);for(Er[2]=a,f=3;0===Er[f-1];)f-=1;return i=gr(Er,Gr,t,f),n<0?(r[0]=-Gr[0],r[1]=-Gr[1],-i):(r[0]=Gr[0],r[1]=Gr[1],i)},Wr=-.16666666666666632,Mr=tn,xr=Lr,Pr=function(n,r,e){var t,o,f,u,i;return o=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(u=i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),f=i*r,n[0]=0===e?r+f*(Wr+i*o):r-(i*(.5*e-f*o)-e-f*Wr),o=i*(.0416666666666666+i*(2480158728947673e-20*i-.001388888888887411)),o+=u*u*(i*(2.087572321298175e-9+-11359647557788195e-27*i)-2.7557314351390663e-7),u=1-(t=.5*i),n[1]=u+(1-u-t+(i*o-r*e)),n},Vr=[0,0],Yr=function(n,r){var e,t;if(e=Mr(r),(e&=2147483647)<=1072243195)return e<1044381696&&0==(0|r)&&(n[0]=r,n[1]=0),Pr(n,r,0);if(e>=2146435072)return n[0]=NaN,n[1]=NaN,n;switch(t=xr(r,Vr),Pr(n,Vr[0],Vr[1]),3&t){case 1:return e=n[1],n[1]=-n[0],n[0]=e,n;case 2:return n[0]*=-1,n[1]*=-1,n;case 3:return e=-n[1],n[1]=n[0],n[0]=e,n;default:return n}},_r=function(n,r){return 1===arguments.length?Yr([0,0],n):Yr(n,r)},kr=_r,qr=3.141592653589793,zr=[0,0];function Br(n,r){var e,t,o,f,u,i;return(e=(t=Yn(r))*t)<2.5625?(u=e*e,n[0]=t*e*function(n){var r,e;return 0===n?.5235987755982989:((n<0?-n:n)<=1?(r=318016297876.5678+n*(n*(2548908805.7337637+n*(n*(708840.0452577386+n*(0*n-2991.8191940101983))-62974148.62058625))-44297951805.96978),e=607366389490.0846+n*(22441179564.534092+n*(419320245.8981112+n*(5173438.887700964+n*(45584.78108065326+n*(281.3762688899943+1*n)))))):(r=0+(n=1/n)*(n*(708840.0452577386+n*(n*(2548908805.7337637+n*(318016297876.5678*n-44297951805.96978))-62974148.62058625))-2991.8191940101983),e=1+n*(281.3762688899943+n*(45584.78108065326+n*(5173438.887700964+n*(419320245.8981112+n*(22441179564.534092+607366389490.0846*n)))))),r/e)}(u),n[1]=t*function(n){var r,e;return 0===n?1:((n<0?-n:n)<=1?(r=1+n*(n*(.018884331939670384+n*(n*(9504280628298596e-21+n*(0*n-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),e=1+n*(.04121420907221998+n*(.0008680295429417843+n*(12226278902417902e-21+n*(1.2500186247959882e-7+n*(9.154392157746574e-10+399982968972496e-26*n)))))):(r=0+(n=1/n)*(n*(9504280628298596e-21+n*(n*(.018884331939670384+n*(1*n-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),e=399982968972496e-26+n*(9.154392157746574e-10+n*(1.2500186247959882e-7+n*(12226278902417902e-21+n*(.0008680295429417843+n*(.04121420907221998+1*n)))))),r/e)}(u)):t>36974?(n[1]=.5,n[0]=.5):(i=1/((u=qr*(e=t*t))*u),u=1/u,o=1-i*function(n){var r,e;return 0===n?2.999999999999634:((n<0?-n:n)<=1?(r=3.763297112699879e-20+n*(13428327623306275e-32+n*(17201074326816183e-29+n*(1.0230451416490724e-10+n*(3.055689837902576e-8+n*(46361374928786735e-22+n*(.000345017939782574+n*(.011522095507358577+n*(.1434079197807589+n*(.4215435550436775+0*n))))))))),e=1.2544323709001127e-20+n*(45200143407412973e-33+n*(5887545336215784e-29+n*(36014002958937136e-27+n*(1.1269922476399903e-8+n*(18462756734893055e-22+n*(.00015593440916415301+n*(.0064405152650885865+n*(.11688892585919138+n*(.7515863983533789+1*n)))))))))):(r=0+(n=1/n)*(.4215435550436775+n*(.1434079197807589+n*(.011522095507358577+n*(.000345017939782574+n*(46361374928786735e-22+n*(3.055689837902576e-8+n*(1.0230451416490724e-10+n*(17201074326816183e-29+n*(13428327623306275e-32+3.763297112699879e-20*n))))))))),e=1+n*(.7515863983533789+n*(.11688892585919138+n*(.0064405152650885865+n*(.00015593440916415301+n*(18462756734893055e-22+n*(1.1269922476399903e-8+n*(36014002958937136e-27+n*(5887545336215784e-29+n*(45200143407412973e-33+1.2544323709001127e-20*n)))))))))),r/e)}(i),f=u*function(n){var r,e;return 0===n?1:((n<0?-n:n)<=1?(r=18695871016278324e-38+n*(8363544356306774e-34+n*(1375554606332618e-30+n*(10826804113902088e-28+n*(4.4534441586175015e-10+n*(9.828524436884223e-8+n*(11513882611188428e-21+n*(.0006840793809153931+n*(.018764858409257526+n*(.1971028335255234+n*(.5044420736433832+0*n)))))))))),e=18695871016278324e-38+n*(8391588162831187e-34+n*(13879653125957886e-31+n*(11027321506624028e-28+n*(4.6068072814652043e-10+n*(1.0431458965757199e-7+n*(12754507566772912e-21+n*(.0008146791071843061+n*(.02536037414203388+n*(.33774898912002+n*(1.4749575992512833+1*n))))))))))):(r=0+(n=1/n)*(.5044420736433832+n*(.1971028335255234+n*(.018764858409257526+n*(.0006840793809153931+n*(11513882611188428e-21+n*(9.828524436884223e-8+n*(4.4534441586175015e-10+n*(10826804113902088e-28+n*(1375554606332618e-30+n*(8363544356306774e-34+18695871016278324e-38*n)))))))))),e=1+n*(1.4749575992512833+n*(.33774898912002+n*(.02536037414203388+n*(.0008146791071843061+n*(12754507566772912e-21+n*(1.0431458965757199e-7+n*(4.6068072814652043e-10+n*(11027321506624028e-28+n*(13879653125957886e-31+n*(8391588162831187e-34+18695871016278324e-38*n))))))))))),r/e)}(i),kr(zr,u=1.5707963267948966*e),u=qr*t,n[1]=.5+(o*zr[0]-f*zr[1])/u,n[0]=.5-(o*zr[1]+f*zr[0])/u),r<0&&(n[1]=-n[1],n[0]=-n[0]),n}return function(n,r){return 1===arguments.length?Br(new Array(2),n):Br(n,r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).fresnel=r();
//# sourceMappingURL=index.js.map