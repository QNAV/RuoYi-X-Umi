"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[842],{6473:function(xr,oe,u){u.r(oe),u.d(oe,{default:function(){return vr}});var he=u(46338),U=u.n(he),Fe=u(55980),w=u.n(Fe),xe=u(18172),I=u.n(xe),ye=u(3849),$=u.n(ye),Ee=u(29960),x=u.n(Ee),v=u(27286),A=u(75381),K=u(2768),se=u(78534),z=u(96069),ie=u(2891),j=u(87130),H="systemMenu",Pe=[H,"list"],N=(0,j.cn)({key:"".concat(H,"SelectedMenuId"),default:"0"}),de=(0,j.cn)({key:"".concat(H,"VisibleCreateModal"),default:!1}),Q=function(r){return(0,ie.aM)(Pe,I()(x().mark(function n(){var a,s;return x().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,A.Ii)(r);case 2:return a=o.sent,s=(0,K.tw)(a,{id:"menuId",pId:"parentId",rootPId:null}),o.abrupt("return",{treeData:(0,K.dH)(s),map:a.reduce(function(p,c){return w()(w()({},p),{},U()({},c.menuId,c))},{}),parentIds:(0,K.Vy)(a)});case 5:case"end":return o.stop()}},n)})),{refetchOnWindowFocus:!1})},ce=function(){var r=Q(),n=r.refetch,a=(0,j.rb)(N);return(0,ie.Db)(function(){var s=I()(x().mark(function l(o){return x().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:se.Z.confirm({title:"\u5220\u9664\u83DC\u5355",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",onOk:function(){var E=I()(x().mark(function d(){return x().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,A.Wl)(o);case 2:return i.next=4,n();case 4:a(),z.ZP.success("\u5220\u9664\u6210\u529F");case 6:case"end":return i.stop()}},d)}));function P(){return E.apply(this,arguments)}return P}()});case 1:case"end":return c.stop()}},l)}));return function(l){return s.apply(this,arguments)}}())},Ce=u(20436),ge=u(19370),B=u(45443),R=u(3653),m=u(50959),L=u(50370),Ze=["fieldProps","request","params","proFieldProps"],je=function(r,n){var a=r.fieldProps,s=r.request,l=r.params,o=r.proFieldProps,p=(0,R.Z)(r,Ze);return m.createElement(L.Z,(0,B.Z)({mode:"edit",valueType:"cascader",fieldProps:a,ref:n,request:s,params:l,filedConfig:{customLightMode:!0},proFieldProps:o},p))},Ie=m.forwardRef(je),yr=u(37014),me=u(60471),W=u(44367),X=u(44963),Se=u(91417),De=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],Te=m.forwardRef(function(t,r){var n=t.fieldProps,a=t.options,s=t.radioType,l=t.layout,o=t.proFieldProps,p=t.valueEnum,c=(0,R.Z)(t,De);return m.createElement(L.Z,(0,B.Z)({mode:"edit",valueType:s==="button"?"radioButton":"radio",ref:r,valueEnum:(0,X.h)(p,void 0)},c,{fieldProps:(0,W.Z)({options:a,layout:l},n),proFieldProps:o,filedConfig:{customLightMode:!0}}))}),Be=m.forwardRef(function(t,r){var n=t.fieldProps,a=t.children;return m.createElement(me.ZP,(0,B.Z)({},n,{ref:r}),a)}),Me=(0,Se.G)(Be,{valuePropName:"checked",ignoreWidth:!0}),Y=Me;Y.Group=Te,Y.Button=me.ZP.Button,Y.displayName="ProFormComponent";var k=Y,Ae=u(31385),q=u(69870),V=u(50405),Ne=["fieldProps","min","proFieldProps","max"],Re=function(r,n){var a=r.fieldProps,s=r.min,l=r.proFieldProps,o=r.max,p=(0,R.Z)(r,Ne);return m.createElement(L.Z,(0,B.Z)({mode:"edit",valueType:"digit",fieldProps:(0,W.Z)({min:s,max:o},a),ref:n,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:l},p))},Le=m.forwardRef(Re),Ve=["fieldProps","proFieldProps"],Oe=function(r,n){var a=r.fieldProps,s=r.proFieldProps,l=(0,R.Z)(r,Ve);return m.createElement(L.Z,(0,B.Z)({ref:n,mode:"edit",valueType:"textarea",fieldProps:a,proFieldProps:s},l))},Ge=m.forwardRef(Oe),_=u(85384),ee=u(34602),e=u(11527),ve=function(r,n){var a=["0"];if(n==="0")return a;var s=function l(o){!(r!=null&&r[o])||(r[o].parentId&&l(r[o].parentId),r[o].menuType!==v.og.F&&a.push(o))};return s(n),a},be=function(r){var n=function a(s){return s.filter(function(l){return l.menuType!==v.og.F}).map(function(l){var o=l.menuId,p=l.menuName,c=l.children;return{menuId:o,menuName:p,children:c?a(c):[]}})};return[{menuId:"0",menuName:"\u6839\u76EE\u5F55",children:r?n(r):[]}]},$e=function(){var r,n=(0,m.useRef)(),a=(0,j.FV)(de),s=$()(a,2),l=s[0],o=s[1],p=Q(),c=p.refetch,E=(0,j.sJ)(N),P=(0,_.Z)(function(){var i=I()(x().mark(function f(F){var C,D;return x().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,(0,A.Ii)(F);case 2:return C=Z.sent,D=(0,K.tw)(C,{id:"menuId",pId:"parentId",rootPId:null}),Z.abrupt("return",{options:be((0,K.dH)(D)),map:C.reduce(function(T,y){return w()(w()({},T),{},U()({},y.menuId,y))},{})});case 5:case"end":return Z.stop()}},f)}));return function(f){return i.apply(this,arguments)}}()),d=P.data,h=P.refresh;return(0,m.useEffect)(function(){var i;if(n!=null&&(i=n.current)!==null&&i!==void 0&&i.setFieldsValue&&d!==null&&d!==void 0&&d.map){var f;n==null||(f=n.current)===null||f===void 0||f.setFieldsValue({parentId:ve(d==null?void 0:d.map,E)})}},[E,d==null?void 0:d.map,n==null?void 0:n.current]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ee.Z,{className:"mr-2",type:"primary",onClick:function(){return o(!0)},icon:(0,e.jsx)(Ce.Z,{}),children:"\u65B0\u5EFA"}),(0,e.jsx)(se.Z,{visible:l,onCancel:function(){return o(!1)},title:"\u65B0\u5EFA\u83DC\u5355",footer:!1,width:515,children:(0,e.jsxs)(ge.A,{onFinish:function(){var i=I()(x().mark(function f(F){var C;return x().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,A.cI)(F);case 2:return g.next=4,c();case 4:o(!1),h(),n==null||(C=n.current)===null||C===void 0||C.resetFields(),z.ZP.success("\u65B0\u5EFA\u6210\u529F");case 8:case"end":return g.stop()}},f)}));return function(f){return i.apply(this,arguments)}}(),formRef:n,children:[(0,e.jsx)(Ie,{name:"parentId",label:"\u7236\u7EA7\u83DC\u5355",initialValue:ve((r=d==null?void 0:d.map)!==null&&r!==void 0?r:{},E),fieldProps:{options:d==null?void 0:d.options,fieldNames:{label:"menuName",value:"menuId",children:"children"},changeOnSelect:!0},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],transform:function(f){return{parentId:f[f.length-1]}}}),(0,e.jsx)(k.Group,{name:"menuType",label:"\u83DC\u5355\u7C7B\u578B",valueEnum:v.vs,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u83DC\u5355\u7C7B\u578B"}]}),(0,e.jsx)(Ae.Z,{name:["menuType"],children:function(f){var F=f.menuType;return F?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(q.UW,{children:[(0,e.jsx)(V.Z,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0",width:"sm",rules:[{required:!0}]}),(0,e.jsx)(Le,{name:"orderNum",label:"\u663E\u793A\u6392\u5E8F",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F",rules:[{required:!0}],width:"sm",initialValue:0})]}),F!==v.og.F&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(q.UW,{children:[(0,e.jsx)(k.Group,{tooltip:"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",name:"status",label:"\u83DC\u5355\u72B6\u6001",valueEnum:v.IZ,required:!0,initialValue:v.vu.ENABLE}),(0,e.jsx)(k.Group,{name:"visible",label:"\u83DC\u5355\u662F\u5426\u663E\u793A",valueEnum:v.sv,required:!0,initialValue:v.Ve.YES,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"}),(0,e.jsx)(k.Group,{name:"isFrame",label:"\u662F\u5426\u5916\u94FE",valueEnum:v.sv,required:!0,initialValue:v.Ve.NO,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"})]}),(0,e.jsxs)(q.UW,{children:[(0,e.jsx)(V.Z,{name:"icon",label:"\u83DC\u5355\u56FE\u6807",width:"sm",tooltip:"https://ant.design/components/icon-cn/"}),(0,e.jsx)(V.Z,{width:"sm",name:"path",label:"\u8DEF\u7531\u5730\u5740",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934",rules:[{required:!0}]})]})]}),F===v.og.C&&(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(V.Z,{name:"queryParam",label:"\u8DEF\u7531\u53C2\u6570",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'})}),F!==v.og.M&&(0,e.jsx)(V.Z,{name:"perms",label:"\u6743\u9650\u6807\u8BC6"})]}):null}}),(0,e.jsx)(Ge,{name:"remark",label:"\u5907\u6CE8"})]})})]})},Ke=$e,We=u(71224),we=function(){var r=(0,j.sJ)(N),n=ce(),a=n.mutate,s=n.isLoading;return(0,e.jsx)(ee.Z,{icon:(0,e.jsx)(We.Z,{}),loading:s,disabled:r==="0",danger:!0,onClick:function(){return a(r)},children:"\u5220\u9664"})},Qe=we,re=u(12678),J=u(80424),pe=u(25384),ue={xs:1,sm:1,md:1,lg:1,xl:2},Ye=function(r){return(0,m.useMemo)(function(){var n=[];return r?(r!==v.og.F&&n.push({title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:v.IZ},{title:"\u662F\u5426\u663E\u793A",dataIndex:"visible",key:"visible",valueType:"radio",valueEnum:v.sv,tooltip:"\u9009\u62E9\u5426\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"},{title:"\u662F\u5426\u5916\u94FE",dataIndex:"isFrame",key:"isFrame",valueType:"radio",valueEnum:v.sv,tooltip:"\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u56FE\u6807",dataIndex:"icon",key:"icon",valueType:"text",tooltip:"https://ant.design/components/icon-cn/"},{title:"\u8DEF\u7531\u5730\u5740",dataIndex:"path",key:"path",valueType:"text",tooltip:"\u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934"},{title:"\u8DEF\u7531\u53C2\u6570",dataIndex:"queryParam",key:"queryParam",valueType:"code",tooltip:'\u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A{"id": 1, "name": "ry"}'}),r!==v.og.M&&n.push({title:"\u6743\u9650\u6807\u8BC6",dataIndex:"perms",key:"perms",valueType:"text",copyable:!0}),n):[]},[r])},ke=function(){var r=(0,j.sJ)(N),n=Q(),a=n.refetch,s=(0,_.Z)(I()(x().mark(function d(){return x().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,A.lP)(r);case 2:return i.abrupt("return",i.sent);case 3:case"end":return i.stop()}},d)})),{ready:r!=="0",refreshDeps:[r]}),l=s.data,o=s.refresh,p=(0,_.Z)(A.vv,{manual:!0,onSuccess:function(){o(),a(),z.ZP.success("\u4FDD\u5B58\u6210\u529F")}}),c=p.runAsync,E=Ye(l==null?void 0:l.menuType),P={onSave:function(){var d=I()(x().mark(function i(f,F){var C,D,g,Z,T;return x().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return C=F.menuType,D=F.orderNum,g=F.menuName,Z=F.menuId,T=f,G.next=4,c(U()({menuId:Z,menuType:C,orderNum:D,menuName:g},T,F[T]));case 4:case"end":return G.stop()}},i)}));function h(i,f){return d.apply(this,arguments)}return h}()};return r==="0"?(0,e.jsx)(J.Z,{image:J.Z.PRESENTED_IMAGE_SIMPLE,description:"\u70B9\u51FB\u9009\u62E9\u5DE6\u4FA7\u83DC\u5355\u9879\u67E5\u770B\u8BE6\u60C5"}):(0,e.jsxs)("div",{children:[(0,e.jsx)(re.vY,{columns:[{title:"\u7C7B\u578B",dataIndex:"menuType",key:"menuType",valueType:"select",valueEnum:v.vs,editable:!1},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",editable:!1}],dataSource:l,column:ue}),(0,e.jsx)(pe.Z,{}),(0,e.jsx)(re.vY,{columns:[{title:"\u540D\u79F0",dataIndex:"menuName",key:"menuName",valueType:"text"},{title:"\u663E\u793A\u987A\u5E8F",dataIndex:"orderNum",key:"orderNum",valueType:"digit",tooltip:"\u9ED8\u8BA4\u6570\u503C\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u6392\u5E8F\u8D8A\u9760\u540E\uFF0C\u6570\u503C\u76F8\u7B49\u6309\u7167\u521B\u5EFA\u65F6\u95F4\u5148\u540E\u6392\u5E8F"},{title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0}],dataSource:l,editable:P,column:ue}),(0,e.jsx)(pe.Z,{}),(0,e.jsx)(re.vY,{columns:E,dataSource:l,editable:P,column:ue})]})},Je=ke,Ue=u(6279),ze=u(8790),He=u(98408),Xe=u(81278),fe=u(94757),qe=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],_e=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],er=m.forwardRef(function(t,r){var n=t.fieldProps,a=t.children,s=t.params,l=t.proFieldProps,o=t.mode,p=t.valueEnum,c=t.request,E=t.showSearch,P=t.options,d=(0,R.Z)(t,qe),h=(0,m.useContext)(fe.Z);return m.createElement(L.Z,(0,B.Z)({mode:"edit",valueEnum:(0,X.h)(p),request:c,params:s,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,W.Z)({options:P,mode:o,showSearch:E,getPopupContainer:h.getPopupContainer},n),ref:r,proFieldProps:l},d),a)}),rr=m.forwardRef(function(t,r){var n=t.fieldProps,a=t.children,s=t.params,l=t.proFieldProps,o=t.mode,p=t.valueEnum,c=t.request,E=t.options,P=(0,R.Z)(t,_e),d=(0,W.Z)({options:E,mode:o||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},n),h=(0,m.useContext)(fe.Z);return m.createElement(L.Z,(0,B.Z)({mode:"edit",valueEnum:(0,X.h)(p),request:c,params:s,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,W.Z)({getPopupContainer:h.getPopupContainer},d),ref:r,proFieldProps:l},P),a)}),ur=er,tr=rr,te=ur;te.SearchSelect=tr,te.displayName="ProFormComponent";var nr=te,S=u(5713),ar=u(30719),lr=u(30784),or=u(46415),O;(function(t){t.M="blue",t.C="green",t.F="red"})(O||(O={}));var sr=function(r){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(S.Z,{color:"rgb(148 163 184)",children:r.orderNum}),r.icon&&(0,e.jsx)(Ue.JO,{name:r.icon,className:"mr-1"}),(0,e.jsx)(S.Z,{color:O[r.menuType],style:{margin:"0 0 2px 0"},children:r.menuName}),r.perms&&(0,e.jsx)(S.Z,{style:{margin:"0 0 2px 2px"},children:r.perms})]})},ir=function(){return(0,e.jsxs)("div",{className:"mb-2",children:["\u6807\u7B7E\u542B\u4E49\uFF1A",(0,e.jsx)(S.Z,{color:"rgb(148 163 184)",children:"\u663E\u793A\u987A\u5E8F"}),(0,e.jsx)(S.Z,{color:O[v.og.M],children:"\u76EE\u5F55"}),(0,e.jsx)(S.Z,{color:O[v.og.C],children:"\u83DC\u5355"}),(0,e.jsx)(S.Z,{color:O[v.og.F],children:"\u6309\u94AE"}),(0,e.jsx)(S.Z,{children:"\u6743\u9650\u6807\u8BC6"})]})},dr=function(){var r,n=(0,m.useState)({}),a=$()(n,2),s=a[0],l=a[1],o=(0,m.useState)([]),p=$()(o,2),c=p[0],E=p[1],P=(0,m.useState)([]),d=$()(P,2),h=d[0],i=d[1],f=(0,j.FV)(N),F=$()(f,2),C=F[0],D=F[1],g=(0,j.rb)(N),Z=(0,j.Zl)(de),T=Q(s),y=T.data,G=T.refetch,pr=ce(),fr=pr.mutate,hr=function(b){E(b)},ae=(h==null?void 0:h.length)!==0&&(h==null?void 0:h.length)===(y==null||(r=y.parentIds)===null||r===void 0?void 0:r.length);return(0,m.useEffect)(function(){G()},[s]),(0,m.useEffect)(function(){c!=null&&c[0]?D(c[0]):g()},[c]),(0,e.jsxs)("div",{children:[(0,e.jsx)(ir,{}),(0,e.jsxs)("div",{className:"flex justify-between items-center",children:[(0,e.jsx)(ee.Z,{size:"small",className:"my-2",icon:ae?(0,e.jsx)(ze.Z,{}):(0,e.jsx)(He.Z,{}),onClick:function(){return i(ae?[]:y==null?void 0:y.parentIds)},children:ae?"\u5168\u90E8\u6298\u53E0":"\u5168\u90E8\u5C55\u5F00"}),(0,e.jsxs)(Xe.M,{onFinish:function(){var M=I()(x().mark(function b(Fr){return x().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:E([]),i([]),l(Fr);case 3:case"end":return le.stop()}},b)}));return function(b){return M.apply(this,arguments)}}(),children:[(0,e.jsx)(V.Z,{name:"menuName",label:"\u83DC\u5355\u540D\u79F0"}),(0,e.jsx)(nr,{name:"status",label:"\u72B6\u6001",valueEnum:v.IZ})]})]}),(0,e.jsx)(ar.Z,{overlay:(0,e.jsx)(lr.Z,{items:[{label:"\u65B0\u5EFA",key:"create",onClick:function(){return Z(!0)}},{label:"\u5728\u6839\u76EE\u5F55\u65B0\u5EFA",key:"create",onClick:function(){g(),Z(!0)}},{label:"\u5220\u9664",key:"delete",danger:!0,disabled:c.length===0,onClick:function(){return fr(C)}}]}),trigger:["contextMenu"],children:y!=null&&y.treeData.length?(0,e.jsx)(or.Z,{blockNode:!0,selectedKeys:c,onSelect:hr,expandedKeys:h,titleRender:sr,onExpand:i,showLine:{showLeafIcon:!1},fieldNames:{title:"menuName",key:"menuId",children:"children"},treeData:y==null?void 0:y.treeData,onRightClick:function(b){return E([b.node.key])}}):(0,e.jsx)(J.Z,{image:J.Z.PRESENTED_IMAGE_SIMPLE})})]})},cr=dr,ne=u(31707),mr=u(89297);function vr(){return(0,e.jsx)(mr._z,{children:(0,e.jsxs)(ne.Z,{ghost:!0,gutter:24,children:[(0,e.jsx)(ne.Z,{title:"\u83DC\u5355\u5217\u8868",colSpan:"550px",extra:[(0,e.jsx)(Ke,{},"ButtonCreate"),(0,e.jsx)(Qe,{},"ButtonDelete")],bodyStyle:{height:"700px",overflowY:"auto",overflowX:"hidden"},children:(0,e.jsx)(cr,{})}),(0,e.jsx)(ne.Z,{title:"\u83DC\u5355\u8BE6\u60C5",bodyStyle:{height:"707px"},children:(0,e.jsx)(Je,{})})]})})}}}]);
