"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[939],{85187:function(se,O,e){var G=e(84045),I=e(40107),J=e(11527),D=e(56589),X=["fieldProps","proFieldProps"],R=["fieldProps","proFieldProps"],$="text",w=function(b){var A=b.fieldProps,r=b.proFieldProps,z=(0,I.Z)(b,X);return(0,J.jsx)(D.Z,(0,G.Z)({valueType:$,fieldProps:A,filedConfig:{valueType:$},proFieldProps:r},z))},k=function(b){var A=b.fieldProps,r=b.proFieldProps,z=(0,I.Z)(b,R);return(0,J.jsx)(D.Z,(0,G.Z)({valueType:"password",fieldProps:A,proFieldProps:r,filedConfig:{valueType:$}},z))},f=w;f.Password=k,f.displayName="ProFormComponent",O.Z=f},56071:function(se,O,e){e.d(O,{UW:function(){return I}});var G=e(89702),I=G.A.Group},35012:function(se,O,e){e.r(O),e.d(O,{default:function(){return Ke}});var G=e(42217),I=e.n(G),J=e(55980),D=e.n(J),X=e(18172),R=e.n(X),$=e(3849),w=e.n($),k=e(29960),f=e.n(k),q=e(72867),b=e(1554),A=e(27470),r=e(11527),z=function(){return(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,r.jsx)(b.Z,{plain:!0,children:(0,r.jsx)("span",{className:"text-sm font-normal text-neutral-400",children:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"})}),(0,r.jsx)("div",{onClick:function(){A.ZP.info("\u656C\u8BF7\u671F\u5F85")},className:"flex justify-center items-center cursor-pointer rounded-full h-[40px] w-[40px] border-solid border border-gray-300",children:(0,r.jsx)(q.Z,{style:{fontSize:"20px",color:"#00ac84"}})})]})},fe=z,K=e(87909);function pe(a){return _.apply(this,arguments)}function _(){return _=R()(f().mark(function a(u){return f().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,K.WY)("/captchaImage",D()({method:"GET"},u||{})));case 1:case"end":return s.stop()}},a)})),_.apply(this,arguments)}function Ye(a,u){return ee.apply(this,arguments)}function ee(){return ee=_asyncToGenerator(_regeneratorRuntime.mark(function a(u,h){return _regeneratorRuntime.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",request("/captchaSms",_objectSpread({method:"GET",params:_objectSpread({},u)},h||{})));case 1:case"end":return g.stop()}},a)})),ee.apply(this,arguments)}var ie=e(93216),he=e(16916),ue=e(88387),ge=e(642),Pe=e(57174),Je=e(89337),xe=e(6039),o=e(84045),re=e(40107),ye=e(82310),y=e(50959),je=e(89702),Ce=["logo","message","style","activityConfig","backgroundImageUrl","title","subTitle","actions","children"];function Ze(a){var u=a.logo,h=a.message,s=a.style,g=a.activityConfig,p=g===void 0?{}:g,F=a.backgroundImageUrl,j=a.title,B=a.subTitle,E=a.actions,U=a.children,S=(0,re.Z)(a,Ce),V=(0,ye.YB)(),M=function(){var T,c;return S.submitter===!1||((T=S.submitter)===null||T===void 0?void 0:T.submitButtonProps)===!1?!1:(0,o.Z)({size:"large",style:{width:"100%"}},(c=S.submitter)===null||c===void 0?void 0:c.submitButtonProps)},Y=(0,o.Z)((0,o.Z)({searchConfig:{submitText:V.getMessage("loginForm.submitText","\u767B\u5F55")},render:function(T,c){return c.pop()}},S.submitter),{},{submitButtonProps:M()}),C=(0,y.useContext)(xe.ZP.ConfigContext),N=C.getPrefixCls("pro-form-login-page"),l=function(T){return"".concat(N,"-").concat(T)},L=(0,y.useMemo)(function(){return u?typeof u=="string"?(0,r.jsx)("img",{src:u}):u:null},[u]);return(0,r.jsxs)("div",{className:N,style:(0,o.Z)((0,o.Z)({},s),{},{backgroundImage:'url("'.concat(F,'")')}),children:[(0,r.jsx)("div",{className:l("notice"),children:p&&(0,r.jsxs)("div",{className:l("notice-activity"),style:p.style,children:[p.title&&(0,r.jsxs)("div",{className:l("notice-activity-title"),children:[" ",p.title," "]}),p.subTitle&&(0,r.jsxs)("div",{className:l("notice-activity-subTitle"),children:[" ",p.subTitle," "]}),p.action&&(0,r.jsxs)("div",{className:l("notice-activity-action"),children:[" ",p.action," "]})]})}),(0,r.jsxs)("div",{className:l("container"),children:[(0,r.jsxs)("div",{className:l("top"),children:[j||L?(0,r.jsxs)("div",{className:l("header"),children:[L?(0,r.jsx)("span",{className:l("logo"),children:L}):null,j?(0,r.jsx)("span",{className:l("title"),children:j}):null]}):null,B?(0,r.jsx)("div",{className:l("desc"),children:B}):null]}),(0,r.jsxs)("div",{className:l("main"),children:[(0,r.jsxs)(je.A,(0,o.Z)((0,o.Z)({isKeyPressSubmit:!0},S),{},{submitter:Y,children:[h,U]})),E?(0,r.jsx)("div",{className:l("other"),children:E}):null]})]})]})}var we=e(21554),Fe=e(78955),He=e(66284),Ee=e(15388),Qe=e(62033),Se=e(32702),H=e(43219),le=e(77036),ae=e(17361),oe=e(73169),Te=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],be=y.forwardRef(function(a,u){var h=(0,y.useState)(a.countDown||60),s=(0,ae.Z)(h,2),g=s[0],p=s[1],F=(0,y.useState)(!1),j=(0,ae.Z)(F,2),B=j[0],E=j[1],U=(0,y.useState)(),S=(0,ae.Z)(U,2),V=S[0],M=S[1],Y=a.rules,C=a.name,N=a.phoneName,l=a.fieldProps,L=a.captchaTextRender,W=L===void 0?function(t,i){return t?"".concat(i," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:L,T=a.captchaProps,c=(0,re.Z)(a,Te),d=function(){var t=(0,le.Z)((0,H.Z)().mark(function i(m){return(0,H.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,M(!0),n.next=4,c.onGetCaptcha(m);case 4:M(!1),E(!0),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),E(!1),M(!1),console.log(n.t0);case 13:case"end":return n.stop()}},i,null,[[0,8]])}));return function(m){return t.apply(this,arguments)}}();return(0,y.useImperativeHandle)(u,function(){return{startTiming:function(){return E(!0)},endTiming:function(){return E(!1)}}}),(0,y.useEffect)(function(){var t=0,i=a.countDown;return B&&(t=window.setInterval(function(){p(function(m){return m<=1?(E(!1),clearInterval(t),i||60):m-1})},1e3)),function(){return clearInterval(t)}},[B]),(0,r.jsx)(Se.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(i){var m=i.getFieldValue,P=i.validateFields;return(0,r.jsxs)("div",{style:(0,o.Z)((0,o.Z)({},l==null?void 0:l.style),{},{display:"flex",alignItems:"center"}),ref:u,children:[(0,r.jsx)(Ee.Z,(0,o.Z)((0,o.Z)({},l),{},{style:{flex:1,transition:"width .3s",marginRight:8}})),(0,r.jsx)(Fe.Z,(0,o.Z)((0,o.Z)({style:{display:"block"},disabled:B,loading:V},T),{},{onClick:function(){var n=(0,le.Z)((0,H.Z)().mark(function Ve(){var ve;return(0,H.Z)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(x.prev=0,!N){x.next=9;break}return x.next=4,P([N].flat(1));case 4:return ve=m([N].flat(1)),x.next=7,d(ve);case 7:x.next=11;break;case 9:return x.next=11,d("");case 11:x.next=16;break;case 13:x.prev=13,x.t0=x.catch(0),console.log(x.t0);case 16:case"end":return x.stop()}},Ve,null,[[0,13]])}));function v(){return n.apply(this,arguments)}return v}(),children:W(B,g)}))]})}})}),Be=(0,oe.G)(be),Ne=Be,Xe=e(66531),Re=e(97494),ce=e(38460),de=e(56589),Ae=["options","fieldProps","proFieldProps","valueEnum"],Le=y.forwardRef(function(a,u){var h=a.options,s=a.fieldProps,g=a.proFieldProps,p=a.valueEnum,F=(0,re.Z)(a,Ae);return(0,r.jsx)(de.Z,(0,o.Z)({ref:u,valueType:"checkbox",valueEnum:(0,ce.h)(p,void 0),fieldProps:(0,o.Z)({options:h},s),lightProps:(0,o.Z)({labelFormatter:function(){return(0,r.jsx)(de.Z,(0,o.Z)({ref:u,valueType:"checkbox",mode:"read",valueEnum:(0,ce.h)(p,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,o.Z)({options:h},s),proFieldProps:g},F))}},F.lightProps),proFieldProps:g},F))}),Me=y.forwardRef(function(a,u){var h=a.fieldProps,s=a.children;return(0,r.jsx)(Re.Z,(0,o.Z)((0,o.Z)({ref:u},h),{},{children:s}))}),Oe=(0,oe.G)(Me,{valuePropName:"checked"}),me=Oe;me.Group=Le;var Ge=me,Q=e(85187),Ie=e(56071),te=e(10933),De=e(34179),ne=e(53005),Ue=e(61412),We=e(41330),$e=["autoLogin"],Z;(function(a){a.MOBILE="MOBILE",a.USERNAME="USERNAME"})(Z||(Z={}));var ze=function(){var u=(0,y.useState)(Z.USERNAME),h=w()(u,2),s=h[0],g=h[1],p=(0,te.useSearchParams)(),F=w()(p,2),j=F[0],B=F[1],E=j.get("msg"),U=j.get("redirect")||"/",S=(0,te.useModel)("@@initialState"),V=S.refresh,M=(0,te.useNavigate)(),Y=(0,De.Z)(pe),C=Y.data,N=Y.run,l=function(){var c=R()(f().mark(function d(t,i){return f().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return(0,K.o4)(t?K.Z1.LOCAL_STORAGE:K.Z1.SESSION_STORAGE,"Bearer ".concat(i)),P.next=3,V();case 3:M(U);case 4:case"end":return P.stop()}},d)}));return function(t,i){return c.apply(this,arguments)}}(),L=function(){var c=R()(f().mark(function d(t,i){var m,P;return f().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,ie.OK)(i);case 2:return m=v.sent,P=m.token,v.next=6,l(t,P);case 6:case"end":return v.stop()}},d)}));return function(t,i){return c.apply(this,arguments)}}(),W=function(){var c=R()(f().mark(function d(t,i){var m,P;return f().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(C){v.next=3;break}return A.ZP.error("\u8BF7\u5148\u83B7\u53D6\u56FE\u7247\u9A8C\u8BC1\u7801"),v.abrupt("return");case 3:return v.next=5,(0,ie.Rg)(D()(D()({},i),{},{uuid:C.uuid}));case 5:return m=v.sent,P=m.token,v.next=9,l(t,P);case 9:case"end":return v.stop()}},d)}));return function(t,i){return c.apply(this,arguments)}}(),T=function(){var c=R()(f().mark(function d(t){var i,m;return f().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,i=t.autoLogin,m=I()(t,$e),s!==Z.MOBILE){n.next=6;break}return n.next=5,L(i,m);case 5:return n.abrupt("return");case 6:if(s!==Z.USERNAME){n.next=10;break}return n.next=9,W(i,m);case 9:return n.abrupt("return");case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),s===Z.USERNAME&&N();case 15:case"end":return n.stop()}},d,null,[[0,12]])}));return function(t){return c.apply(this,arguments)}}();return(0,y.useEffect)(function(){E&&(A.ZP.error(j.get("msg")),B({redirect:U},{replace:!0}))},[]),(0,r.jsx)("div",{className:"h-[100vh]",children:(0,r.jsxs)(Ze,{backgroundImageUrl:"https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png",logo:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",title:"RuoYi X Umi",subTitle:"\u82E5\u4F9D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",actions:(0,r.jsx)(fe,{}),onFinish:T,children:[(0,r.jsxs)(ne.Z,{activeKey:s,onChange:function(d){return g(d)},children:[(0,r.jsx)(ne.Z.TabPane,{tab:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55"},Z.USERNAME),(0,r.jsx)(ne.Z.TabPane,{tab:"\u624B\u673A\u53F7\u767B\u5F55"},Z.MOBILE)]}),s===Z.USERNAME&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q.Z,{name:"username",fieldProps:{size:"large",prefix:(0,r.jsx)(he.Z,{})},placeholder:"admin",initialValue:"admin",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}),(0,r.jsx)(Q.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,r.jsx)(ue.Z,{})},placeholder:"admin123",initialValue:"admin123",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]}),(0,r.jsxs)(Ie.UW,{children:[(0,r.jsx)(Q.Z,{width:160,name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",fieldProps:{size:"large",prefix:(0,r.jsx)(ge.Z,{})},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}]}),(0,r.jsx)("div",{className:"h-[40px] w-[135px] cursor-pointer border border-solid border-gray-300",children:C!=null&&C.img?(0,r.jsx)(Ue.Z,{src:"data:image/png;base64,".concat(C==null?void 0:C.img),preview:!1,height:40,width:135,alt:"\u56FE\u7247\u9A8C\u8BC1\u7801",onClick:N}):(0,r.jsx)(We.Z.Button,{active:!0,block:!0,size:"large"})})]})]}),s===Z.MOBILE&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Q.Z,{fieldProps:{maxLength:11,size:"large",prefix:(0,r.jsx)(Pe.Z,{})},name:"phoneNumber",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:K.RE,message:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"}]}),(0,r.jsx)(Ne,{fieldProps:{size:"large",prefix:(0,r.jsx)(ue.Z,{})},captchaProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",captchaTextRender:function(d,t){return d?"".concat(t," \u83B7\u53D6\u9A8C\u8BC1\u7801"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},name:"smsCode",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],onGetCaptcha:R()(f().mark(function c(){return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A.ZP.info("\u656C\u8BF7\u671F\u5F85"),t.abrupt("return",Promise.reject(new Error("\u656C\u8BF7\u671F\u5F85")));case 2:case"end":return t.stop()}},c)}))})]}),(0,r.jsx)(Ge,{name:"autoLogin",children:"\u81EA\u52A8\u767B\u5F55"})]})})},Ke=ze}}]);
