"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[436],{89314:function(te,K,e){var V=e(82175),y=e(62957),B=e(11527),M=e(50959),Y=e(20048),c=["fieldProps","min","proFieldProps","max"],T=function(g,E){var a=g.fieldProps,O=g.min,I=g.proFieldProps,U=g.max,P=(0,y.Z)(g,c);return(0,B.jsx)(Y.Z,(0,V.Z)({mode:"edit",valueType:"digit",fieldProps:(0,V.Z)({min:O,max:U},a),ref:E,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:I},P))};K.Z=M.forwardRef(T)},38288:function(te,K,e){var V=e(65691),y=e(82025),B=e(82175),M=e(62957),Y=e(11527),c=e(41946),T=e(50959),W=e(46890),g=e(20048),E=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],a=T.forwardRef(function(P,$){var C=P.fieldProps,w=P.options,k=P.radioType,G=P.layout,Q=P.proFieldProps,p=P.valueEnum,v=(0,M.Z)(P,E);return(0,Y.jsx)(g.Z,(0,B.Z)((0,B.Z)({mode:"edit",valueType:k==="button"?"radioButton":"radio",ref:$,valueEnum:(0,c.h)(p,void 0)},v),{},{fieldProps:(0,B.Z)({options:w,layout:G},C),proFieldProps:Q,filedConfig:{customLightMode:!0}}))}),O=T.forwardRef(function(P,$){var C=P.fieldProps,w=P.children;return(0,Y.jsx)(y.ZP,(0,B.Z)((0,B.Z)({},C),{},{ref:$,children:w}))}),I=(0,W.G)(O,{valuePropName:"checked",ignoreWidth:!0}),U=I;U.Group=a,U.Button=y.ZP.Button,U.displayName="ProFormComponent",K.Z=U},90178:function(te,K,e){var V=e(82175),y=e(62957),B=e(11527),M=e(50959),Y=e(20048),c=["fieldProps","proFieldProps"],T=function(g,E){var a=g.fieldProps,O=g.proFieldProps,I=(0,y.Z)(g,c);return(0,B.jsx)(Y.Z,(0,V.Z)({ref:E,mode:"edit",valueType:"textarea",fieldProps:a,proFieldProps:O},I))};K.Z=M.forwardRef(T)},25561:function(te,K,e){e.r(K),e.d(K,{default:function(){return sr}});var V=e(46338),y=e.n(V),B=e(55980),M=e.n(B),Y=e(18172),c=e.n(Y),T=e(3849),W=e.n(T),g=e(29960),E=e.n(g),a=e(75786),O=e(61010),I=e(8513),U=e(75815),P=e(43668),$=e(2891),C=e(87130),w="systemMenu",k=[w,"list"],G=(0,C.cn)({key:"".concat(w,"SelectedMenuId"),default:0}),Q=(0,C.cn)({key:"".concat(w,"VisibleCreateModal"),default:!1}),p=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,$.aM)(k,c()(E().mark(function u(){var i,h;return E().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,O.CP)(n);case 2:return i=l.sent,h=(0,I.tw)(i,{id:"menuId",pId:"parentId",rootPId:null}),l.abrupt("return",{treeData:(0,I.dH)(h),map:i.reduce(function(D,f){return M()(M()({},D),{},y()({},f.menuId,f))},{}),parentIds:(0,I.Vy)(i)});case 5:case"end":return l.stop()}},u)})))},v=function(){var n=p(),u=n.refetch,i=(0,C.rb)(G);return(0,$.Db)(function(){var h=c()(E().mark(function d(l){return E().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:U.Z.confirm({title:"\u5220\u9664\u83DC\u5355",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",onOk:function(){var R=c()(E().mark(function m(){return E().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,O.tg)({menuId:l});case 2:return o.next=4,u();case 4:i(),P.ZP.success("\u5220\u9664\u6210\u529F");case 6:case"end":return o.stop()}},m)}));function _(){return R.apply(this,arguments)}return _}()});case 1:case"end":return f.stop()}},d)}));return function(d){return h.apply(this,arguments)}}())},Z=e(20436),J=e(16638),t=e(82175),oe=e(62957),r=e(11527),A=e(50959),le=e(20048),Ce=["fieldProps","request","params","proFieldProps"],Me=function(n,u){var i=n.fieldProps,h=n.request,d=n.params,l=n.proFieldProps,D=(0,oe.Z)(n,Ce);return(0,r.jsx)(le.Z,(0,t.Z)({mode:"edit",valueType:"cascader",fieldProps:i,ref:u,request:h,params:d,filedConfig:{customLightMode:!0},proFieldProps:l},D))},ge=A.forwardRef(Me),ue=e(38288),De=e(40296),ie=e(12937),ee=e(96639),je=e(89314),Se=e(90178),Ee=e(3989),de=e(16278),Pe=function(n,u){var i=[0];if(u===0)return i;var h=function d(l){!(n!=null&&n[l])||(n[l].parentId&&d(n[l].parentId.toString()),n[l].menuType!==a.og.F&&i.push(Number(l)))};return h(u.toString()),i},Te=function(n){var u=function i(h){return h.filter(function(d){return d.menuType!==a.og.F}).map(function(d){var l=d.menuId,D=d.menuName,f=d.children;return{menuId:l,menuName:D,children:f?i(f):[]}})};return[{menuId:0,menuName:"\u6839\u76EE\u5F55",children:n?u(n):[]}]},Ie=function(){var n,u=(0,A.useRef)(),i=(0,C.FV)(Q),h=W()(i,2),d=h[0],l=h[1],D=p(),f=D.refetch,R=(0,C.sJ)(G),_=(0,Ee.Z)(c()(E().mark(function o(){var F,x,N,X=arguments;return E().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return F=X.length>0&&X[0]!==void 0?X[0]:{},b.next=3,(0,O.CP)(F);case 3:return x=b.sent,N=(0,I.tw)(x,{id:"menuId",pId:"parentId",rootPId:null}),b.abrupt("return",{options:Te((0,I.dH)(N)),map:x.reduce(function(H,S){return M()(M()({},H),{},y()({},S.menuId,S))},{})});case 6:case"end":return b.stop()}},o)}))),m=_.data,j=_.refresh;return(0,A.useEffect)(function(){var o;if(u!=null&&(o=u.current)!==null&&o!==void 0&&o.setFieldsValue&&m!==null&&m!==void 0&&m.map){var F;u==null||(F=u.current)===null||F===void 0||F.setFieldsValue({parentId:Pe(m==null?void 0:m.map,R)})}},[R,m==null?void 0:m.map,u==null?void 0:u.current]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(de.Z,{className:"mr-2",type:"primary",onClick:function(){return l(!0)},icon:(0,r.jsx)(Z.Z,{}),children:"\u65B0\u5EFA"}),(0,r.jsx)(U.Z,{visible:d,onCancel:function(){return l(!1)},title:"\u65B0\u5EFA\u83DC\u5355",footer:!1,width:515,children:(0,r.jsxs)(J.A,{onFinish:function(){var o=c()(E().mark(function F(x){var N;return E().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,(0,O.FV)(x);case 2:return L.next=4,f();case 4:l(!1),j(),u==null||(N=u.current)===null||N===void 0||N.resetFields(),P.ZP.success("\u65B0\u5EFA\u6210\u529F");case 8:case"end":return L.stop()}},F)}));return function(F){return o.apply(this,arguments)}}(),formRef:u,children:[(0,r.jsx)(ge,{name:"parentId",label:"\u7236\u7EA7\u83DC\u5355",initialValue:Pe((n=m==null?void 0:m.map)!==null&&n!==void 0?n:{},R),fieldProps:{options:m==null?void 0:m.options,fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],transform:function(F){return{parentId:F[F.length-1]}}}),(0,r.jsx)(ue.Z.Group,{name:"menuType",label:"\u83DC\u5355\u7C7B\u578B",valueEnum:a.vs,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B"}]}),(0,r.jsx)(De.Z,{name:["menuType"],children:function(F){var x=F.menuType;return x?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ie.UW,{children:[(0,r.jsx)(ee.Z,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0",width:"sm",rules:[{required:!0}]}),(0,r.jsx)(je.Z,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F",rules:[{required:!0}],width:"sm",initialValue:0})]}),x!==a.og.F&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(ie.UW,{children:[(0,r.jsx)(ue.Z.Group,{tooltip:"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",name:"status",label:"\u83DC\u5355\u72B6\u6001",valueEnum:a.IZ,required:!0,initialValue:a.vu.ENABLE}),(0,r.jsx)(ue.Z.Group,{name:"visible",label:"\u83DC\u5355\u662F\u5426\u663E\u793A",valueEnum:a.sv,required:!0,initialValue:a.Ve.YES,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"}),(0,r.jsx)(ue.Z.Group,{name:"isFrame",label:"\u662F\u5426\u5916\u94FE",valueEnum:a.sv,required:!0,initialValue:a.Ve.NO,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"})]}),(0,r.jsxs)(ie.UW,{children:[(0,r.jsx)(ee.Z,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),(0,r.jsx)(ee.Z,{width:"sm",name:"path",label:"\u8DEF\u7531\u5730\u5740",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",rules:[{required:!0}]})]})]}),x===a.og.C&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ee.Z,{name:"queryParam",label:"\u8DEF\u7531\u53C2\u6570",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'})}),x!==a.og.M&&(0,r.jsx)(ee.Z,{name:"perms",label:"\u6743\u9650\u6807\u8BC6"})]}):null}}),(0,r.jsx)(Se.Z,{name:"remark",label:"\u5907\u6CE8"})]})})]})},Ze=Ie,Re=e(71224),Oe=function(){var n=(0,C.sJ)(G),u=v(),i=u.mutate,h=u.isLoading;return(0,r.jsx)(de.Z,{icon:(0,r.jsx)(Re.Z,{}),loading:h,disabled:n===0,danger:!0,onClick:function(){return i(n)},children:"\u5220\u9664"})},Be=Oe,me=e(18184),ae=e(25406),ye=e(25437),ce={xs:1,sm:1,md:1,lg:1,xl:2},Ae=function(n){return(0,A.useMemo)(function(){var u=[];return n?(n!==a.og.F&&u.push({title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:a.IZ},{title:"\u662F\u5426\u663E\u793A",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:a.sv,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"},{title:"\u662F\u5426\u5916\u94FE",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:a.sv,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u56FE\u6807",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"\u8DEF\u7531\u5730\u5740",dataIndex:"path",key:"path",valueType:"text",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u8DEF\u7531\u53C2\u6570",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),n!==a.og.M&&u.push({title:"\u6743\u9650\u6807\u8BC6",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),u):[]},[n])},_e=function(){var n=(0,C.sJ)(G),u=p(),i=u.refetch,h=(0,Ee.Z)(c()(E().mark(function m(){return E().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,O.WJ)({menuId:n});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},m)})),{ready:n>0,refreshDeps:[n]}),d=h.data,l=h.refresh,D=(0,$.Db)(O.Yh,{onSuccess:function(){l(),i(),P.ZP.success("\u4FDD\u5B58\u6210\u529F")}}),f=D.mutateAsync,R=Ae(d==null?void 0:d.menuType),_={onSave:function(){var m=c()(E().mark(function o(F,x){var N,X,L,b,H;return E().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return N=x.menuType,X=x.orderNum,L=x.menuName,b=x.menuId,H=F,re.next=4,f(y()({menuId:b,menuType:N,orderNum:X,menuName:L},H,x[H]));case 4:case"end":return re.stop()}},o)}));function j(o,F){return m.apply(this,arguments)}return j}()};return n===0?(0,r.jsx)(ae.Z,{image:ae.Z.PRESENTED_IMAGE_SIMPLE,description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u9879\u67E5\u770B\u8BE6\u60C5"}):(0,r.jsxs)("div",{children:[(0,r.jsx)(me.vY,{columns:[{title:"\u7C7B\u578B",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:a.vs,editable:!1},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1}],dataSource:d,column:ce}),(0,r.jsx)(ye.Z,{}),(0,r.jsx)(me.vY,{columns:[{title:"\u540D\u79F0",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"\u663E\u793A\u987A\u5E8F",dataIndex:"orderNum",key:"orderNum",valueType:"digit",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],dataSource:d,editable:_,column:ce}),(0,r.jsx)(ye.Z,{}),(0,r.jsx)(me.vY,{columns:R,dataSource:d,editable:_,column:ce})]})},Le=_e,be=e(71989),We=e(42020),Ue=e(8790),Ne=e(98408),Ke=e(67556),Fe=e(41946),xe=e(58306),Ye=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],Ge=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],Ve=A.forwardRef(function(s,n){var u=s.fieldProps,i=s.children,h=s.params,d=s.proFieldProps,l=s.mode,D=s.valueEnum,f=s.request,R=s.showSearch,_=s.options,m=(0,oe.Z)(s,Ye),j=(0,A.useContext)(xe.Z);return(0,r.jsx)(le.Z,(0,t.Z)((0,t.Z)({mode:"edit",valueEnum:(0,Fe.h)(D),request:f,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,t.Z)({options:_,mode:l,showSearch:R,getPopupContainer:j.getPopupContainer},u),ref:n,proFieldProps:d},m),{},{children:i}))}),$e=A.forwardRef(function(s,n){var u=s.fieldProps,i=s.children,h=s.params,d=s.proFieldProps,l=s.mode,D=s.valueEnum,f=s.request,R=s.options,_=(0,oe.Z)(s,Ge),m=(0,t.Z)({options:R,mode:l||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},u),j=(0,A.useContext)(xe.Z);return(0,r.jsx)(le.Z,(0,t.Z)((0,t.Z)({mode:"edit",valueEnum:(0,Fe.h)(D),request:f,params:h,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,t.Z)({getPopupContainer:j.getPopupContainer},m),ref:n,proFieldProps:d},_),{},{children:i}))}),Xe=Ve,we=$e,pe=Xe;pe.SearchSelect=we,pe.displayName="ProFormComponent";var Qe=pe,z=e(93948),Je=e(26055),ze=e(81781),He=e(49762),ke=e(94649),qe=e(15912),er=e.n(qe),se={M:"blue",C:"green",F:"red"},rr=function(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.Z,{color:"rgb(148 163 184)",children:n.orderNum}),(0,r.jsx)(be.z_,{name:n.icon,className:"mr-1"}),(0,r.jsx)(z.Z,{color:se[n.menuType],style:{margin:"0 0 2px 0"},children:n.menuName}),n.perms&&(0,r.jsx)(z.Z,{style:{margin:"0 0 2px 2px"},children:(0,r.jsxs)(Je.Z,{size:"small",children:[n.perms,(0,r.jsx)(We.Z,{style:{color:"#1890ff"},onClick:function(i){er()(n.perms),P.ZP.success("\u590D\u5236\u6210\u529F"),i.stopPropagation()}})]})})]})},nr=function(){return(0,r.jsxs)("div",{className:"mb-2",children:["\u6807\u7B7E\u542B\u4E49\uFF1A",(0,r.jsx)(z.Z,{color:"rgb(148 163 184)",children:"\u663E\u793A\u987A\u5E8F"}),(0,r.jsx)(z.Z,{color:se[a.og.M],children:"\u76EE\u5F55"}),(0,r.jsx)(z.Z,{color:se[a.og.C],children:"\u83DC\u5355"}),(0,r.jsx)(z.Z,{color:se[a.og.F],children:"\u6309\u94AE"}),(0,r.jsx)(z.Z,{children:"\u6743\u9650\u6807\u8BC6"})]})},tr=function(){var n,u=(0,A.useState)({}),i=W()(u,2),h=i[0],d=i[1],l=(0,A.useState)([]),D=W()(l,2),f=D[0],R=D[1],_=(0,A.useState)([]),m=W()(_,2),j=m[0],o=m[1],F=(0,C.FV)(G),x=W()(F,2),N=x[0],X=x[1],L=(0,C.rb)(G),b=(0,C.Zl)(Q),H=p(h),S=H.data,re=H.refetch,or=v(),lr=or.mutate,ir=function(ne){R(ne)},he=(j==null?void 0:j.length)!==0&&(j==null?void 0:j.length)===(S==null||(n=S.parentIds)===null||n===void 0?void 0:n.length);return(0,A.useEffect)(function(){re()},[h]),(0,A.useEffect)(function(){f!=null&&f[0]?X(f[0]):L()},[f]),(0,r.jsxs)("div",{children:[(0,r.jsx)(nr,{}),(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)(de.Z,{size:"small",className:"my-2",icon:he?(0,r.jsx)(Ue.Z,{}):(0,r.jsx)(Ne.Z,{}),onClick:function(){return o(he?[]:S==null?void 0:S.parentIds)},children:he?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),(0,r.jsxs)(Ke.M,{onFinish:function(){var q=c()(E().mark(function ne(dr){return E().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:R([]),o([]),d(dr);case 3:case"end":return fe.stop()}},ne)}));return function(ne){return q.apply(this,arguments)}}(),children:[(0,r.jsx)(ee.Z,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0"}),(0,r.jsx)(Qe,{name:"status",label:"\u72B6\u6001",valueEnum:a.IZ})]})]}),(0,r.jsx)(ze.Z,{overlay:(0,r.jsx)(He.Z,{items:[{label:"\u65B0\u5EFA",key:"create",onClick:function(){return b(!0)}},{label:"\u5728\u6839\u76EE\u5F55\u65B0\u5EFA",key:"create",onClick:function(){L(),b(!0)}},{label:"\u5220\u9664",key:"delete",danger:!0,disabled:f.length===0,onClick:function(){return lr(N)}}]}),trigger:["contextMenu"],children:S!=null&&S.treeData.length?(0,r.jsx)(ke.Z,{blockNode:!0,selectedKeys:f,onSelect:ir,expandedKeys:j,titleRender:rr,onExpand:o,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:S==null?void 0:S.treeData,onRightClick:function(ne){return R([ne.node.key])}}):(0,r.jsx)(ae.Z,{image:ae.Z.PRESENTED_IMAGE_SIMPLE})})]})},ur=tr,ve=e(75687),ar=e(59527);function sr(){return(0,r.jsx)(ar._z,{children:(0,r.jsxs)(ve.Z,{ghost:!0,gutter:24,children:[(0,r.jsx)(ve.Z,{title:"\u83DC\u5355\u5217\u8868",colSpan:"550px",extra:[(0,r.jsx)(Ze,{},"ButtonCreate"),(0,r.jsx)(Be,{},"ButtonDelete")],bodyStyle:{height:"700px",overflowY:"auto",overflowX:"hidden"},children:(0,r.jsx)(ur,{})}),(0,r.jsx)(ve.Z,{title:"\u83DC\u5355\u8BE6\u60C5",bodyStyle:{height:"707px"},children:(0,r.jsx)(Le,{})})]})})}},61010:function(te,K,e){e.d(K,{CP:function(){return U},FV:function(){return W},Q_:function(){return G},WJ:function(){return O},Yh:function(){return E},tg:function(){return $}});var V=e(55980),y=e.n(V),B=e(18172),M=e.n(B),Y=e(29960),c=e.n(Y),T=e(8513);function W(p,v){return g.apply(this,arguments)}function g(){return g=M()(c().mark(function p(v,Z){return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.WY)("/system/menu/add",y()({method:"POST",headers:{"Content-Type":"application/json"},data:v},Z||{})));case 1:case"end":return t.stop()}},p)})),g.apply(this,arguments)}function E(p,v){return a.apply(this,arguments)}function a(){return a=M()(c().mark(function p(v,Z){return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.WY)("/system/menu/edit",y()({method:"POST",headers:{"Content-Type":"application/json"},data:v},Z||{})));case 1:case"end":return t.stop()}},p)})),a.apply(this,arguments)}function O(p,v){return I.apply(this,arguments)}function I(){return I=M()(c().mark(function p(v,Z){return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.WY)("/system/menu/info",y()({method:"GET",params:y()({},v)},Z||{})));case 1:case"end":return t.stop()}},p)})),I.apply(this,arguments)}function U(p,v){return P.apply(this,arguments)}function P(){return P=M()(c().mark(function p(v,Z){return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.WY)("/system/menu/list",y()({method:"POST",headers:{"Content-Type":"application/json"},data:v},Z||{})));case 1:case"end":return t.stop()}},p)})),P.apply(this,arguments)}function $(p,v){return C.apply(this,arguments)}function C(){return C=M()(c().mark(function p(v,Z){return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.WY)("/system/menu/remove",y()({method:"POST",params:y()({},v)},Z||{})));case 1:case"end":return t.stop()}},p)})),C.apply(this,arguments)}function w(p,v){return k.apply(this,arguments)}function k(){return k=_asyncToGenerator(_regeneratorRuntime.mark(function p(v,Z){return _regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",request("/system/menu/roleMenuTreeSelect",_objectSpread({method:"GET",params:_objectSpread({},v)},Z||{})));case 1:case"end":return t.stop()}},p)})),k.apply(this,arguments)}function G(p,v){return Q.apply(this,arguments)}function Q(){return Q=M()(c().mark(function p(v,Z){return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,T.WY)("/system/menu/treeSelect",y()({method:"POST",headers:{"Content-Type":"application/json"},data:v},Z||{})));case 1:case"end":return t.stop()}},p)})),Q.apply(this,arguments)}}}]);
