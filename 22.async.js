"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[427],{33921:function(ue,K,t){t.d(K,{ew:function(){return te},Jx:function(){return H},iT:function(){return w},Zi:function(){return A},Bw:function(){return ae},eJ:function(){return W},fk:function(){return u},sE:function(){return V},WW:function(){return k},sy:function(){return M},E$:function(){return U},_M:function(){return ne},tC:function(){return s},wX:function(){return $},oh:function(){return j},Uc:function(){return n},x:function(){return z},Mw:function(){return N},p_:function(){return O},$V:function(){return E},Qo:function(){return Z},$9:function(){return ee},Jy:function(){return q},VP:function(){return c},g4:function(){return F},Fu:function(){return a},Rj:function(){return X},tE:function(){return r},q2:function(){return x},jR:function(){return Q},BP:function(){return L},au:function(){return T}});var b=t(75786),s={title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder",width:60},W={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},T={title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime",valueType:"dateTime",hideInSearch:!0,sorter:!0},V={title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:b.IZ},u={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0,search:{transform:function(h){return{beginCreateTime:h[0],endCreateTime:h[1]}}}},c={title:"\u5907\u6CE8",dataIndex:"remark",key:"remark",valueType:"textarea",hideInSearch:!0},Q={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},x={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},H={title:"\u5B9E\u4F53\u540D\u79F0",dataIndex:"className",key:"className",valueType:"text"},k={title:"\u4F5C\u8005",dataIndex:"functionAuthor",key:"functionAuthor",valueType:"text"},A={title:"\u5B57\u6BB5\u540D\u79F0",dataIndex:"columnName",key:"columnName",valueType:"text",editable:!1,ellipsis:!0,width:100},w={title:"\u5B57\u6BB5\u63CF\u8FF0",dataIndex:"columnComment",key:"columnComment",valueType:"text",width:250},ae={title:"\u7269\u7406\u7C7B\u578B",dataIndex:"columnType",key:"columnType",valueType:"text",editable:!1,ellipsis:!0,width:100},E={title:"JAVA\u7C7B\u578B",dataIndex:"javaType",key:"javaType",valueType:"select",valueEnum:b.Xp,width:90},O={title:"JAVA\u5C5E\u6027",dataIndex:"javaField",key:"javaField",valueType:"text",width:140},j={title:"\u63D2\u5165",dataIndex:"isInsert",key:"isInsert",valueType:"radioButton",width:115,valueEnum:b.sv},$={title:"\u7F16\u8F91",dataIndex:"isEdit",key:"isEdit",valueType:"radioButton",width:115,valueEnum:b.sv},n={title:"\u5217\u8868",dataIndex:"isList",key:"isList",valueType:"radioButton",width:115,valueEnum:b.sv},z={title:"\u67E5\u8BE2",dataIndex:"isQuery",key:"isQuery",valueType:"radioButton",width:115,valueEnum:b.sv},N={title:"\u5FC5\u586B",dataIndex:"isRequired",key:"isRequired",valueType:"radioButton",width:115,valueEnum:b.sv},q={title:"\u67E5\u8BE2\u65B9\u5F0F",dataIndex:"queryType",key:"queryType",valueType:"select",valueEnum:b.g7,width:70},L={title:"\u751F\u6210\u6A21\u7248",dataIndex:"tplCategory",key:"tplCategory",valueType:"select",valueEnum:b.m$},ee={title:"\u751F\u6210\u5305\u8DEF\u5F84",dataIndex:"packageName",key:"packageName",valueType:"text"},Z={title:"\u751F\u6210\u6A21\u5757\u540D",dataIndex:"moduleName",key:"moduleName",valueType:"text"},te={title:"\u751F\u6210\u4E1A\u52A1\u540D",dataIndex:"businessName",key:"businessName",valueType:"text"},M={title:"\u751F\u6210\u529F\u80FD\u540D",dataIndex:"functionName",key:"functionName",valueType:"text"},ne={title:"\u751F\u6210\u4EE3\u7801\u65B9\u5F0F",dataIndex:"genType",key:"genType",valueType:"select",valueEnum:b.WZ},U={title:"\u81EA\u5B9A\u4E49\u8DEF\u5F84",dataIndex:"genPath",key:"genPath",valueType:"text"},X={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},F={title:"\u89D2\u8272ID",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},a={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},r={title:"\u89D2\u8272\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0}},14412:function(ue,K,t){t.r(K),t.d(K,{default:function(){return _e}});var b=t(18172),s=t.n(b),W=t(3849),T=t.n(W),V=t(29960),u=t.n(V),c=t(33921),Q=t(88756),x=t(87130),H="toolGen",k=(0,x.cn)({key:"".concat(H,"TableActions"),default:void 0}),A=(0,x.cn)({key:"".concat(H,"PreviewIdAtom"),default:0}),w=t(90586),ae=t(71224),E=t(43668),O=t(75815),j=t(16278),$=t(2891),n=t(11527),z=function(l){var i=l.tableIds,p=l.isBatch,f=p===void 0?!1:p,_=f?"\u6279\u91CF\u5220\u9664":"\u5220\u9664",C=i.length===0&&f,d=(0,x.sJ)(k),m=(0,$.Db)(w.LV,{onSuccess:function(){var v;d==null||d.reload(),d==null||(v=d.clearSelected)===null||v===void 0||v.call(d),E.ZP.success("\u5220\u9664\u6210\u529F")}}),P=m.mutateAsync,y=m.isLoading,g=function(){O.Z.confirm({title:"\u5220\u9664\u751F\u6210\u4EE3\u7801",content:"\u786E\u5B9A\u5220\u9664 \u8868ID \u4E3A ".concat(i.join(",")," \u751F\u6210\u7684\u4EE3\u7801\u5417\uFF1F"),onOk:function(){var v=s()(u().mark(function B(){return u().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,P({tableIds:i});case 2:case"end":return J.stop()}},B)}));function I(){return v.apply(this,arguments)}return I}()})};return(0,n.jsx)(j.Z,{loading:y,icon:(0,n.jsx)(ae.Z,{}),type:"link",onClick:g,disabled:C,children:_})},N=z,q=t(85078),L=t(11227),ee=function(l){var i=l.tableNames,p=l.isBatch,f=p===void 0?!1:p,_=f?"\u6279\u91CF\u4E0B\u8F7D":"\u4E0B\u8F7D",C=i.length===0&&f,d=(0,$.Db)(s()(u().mark(function y(){var g;return u().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,w.XS)({tables:i.join(",")},{skipErrorHandler:!0,responseType:"blob"});case 2:g=v.sent,(0,L.saveAs)(new Blob([g.data],{type:"application/zip"}),"ruoyi");case 4:case"end":return v.stop()}},y)})),{onSuccess:function(){E.ZP.success("\u4E0B\u8F7D\u6210\u529F")}}),m=d.isLoading,P=d.mutate;return(0,n.jsx)(j.Z,{loading:m,onClick:function(){return P()},type:"link",icon:(0,n.jsx)(q.Z,{}),disabled:C,children:_})},Z=ee,te=t(17073),M=t(77996),ne=function(l){var i=l.tableId,p=(0,M.useNavigate)();return(0,n.jsx)(j.Z,{type:"link",icon:(0,n.jsx)(te.Z,{}),onClick:function(){return p("/tool/gen-edit/".concat(i))},children:"\u7F16\u8F91"})},U=ne,X=t(41595),F=t(42267),a=t(54923),r=t(29586),o=t(50959),h=[c.tC,c.jR,c.q2,c.eJ,c.au],e=function(){var l=(0,o.useRef)(),i=(0,x.sJ)(k),p=(0,r.Z)(),f=T()(p,2),_=f[0],C=f[1].toggle,d=(0,o.useState)([]),m=T()(d,2),P=m[0],y=m[1],g=(0,$.Db)(w.qm,{onSuccess:function(){var I,B;i==null||i.reload(),C(),E.ZP.success("\u5BFC\u5165\u6210\u529F"),l==null||(I=l.current)===null||I===void 0||(B=I.clearSelected)===null||B===void 0||B.call(I)}}),G=g.mutate;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.Z,{type:"primary",onClick:C,icon:(0,n.jsx)(F.Z,{}),children:"\u5BFC\u5165"}),(0,n.jsx)(O.Z,{visible:_,onCancel:C,title:"\u5BFC\u5165\u8868",onOk:function(){return G({tables:P.join(",")})},width:900,okText:"\u786E\u5B9A\u5BFC\u5165",children:(0,n.jsx)(a.Z,{ghost:!0,size:"small",actionRef:l,pagination:{pageSize:10,current:1},columns:h,rowKey:"tableName",rowSelection:{onChange:function(I){y(I)}},options:!1,request:function(){var v=s()(u().mark(function I(B,S,J){var re,ie,le;return u().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return console.log(S,J),Y.next=3,(0,w.we)((0,X.h$)(B,S),(0,X.Yw)(B));case 3:return re=Y.sent,ie=re.rows,le=re.total,Y.abrupt("return",{data:ie,total:le});case 7:case"end":return Y.stop()}},I)}));return function(I,B,S){return v.apply(this,arguments)}}()})})]})},R=e,se=t(8667),ce=function(l){var i=l.tableId,p=(0,x.Zl)(A);return(0,n.jsx)(j.Z,{onClick:function(){return p(i)},type:"link",icon:(0,n.jsx)(se.Z,{}),children:"\u9884\u89C8"})},de=ce,me=t(59138),ve=function(l){var i=l.tableName,p=(0,$.Db)(s()(u().mark(function C(){return u().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,w.He)({tableName:i});case 2:case"end":return m.stop()}},C)})),{onSuccess:function(){E.ZP.success("\u540C\u6B65\u6210\u529F")}}),f=p.isLoading,_=p.mutate;return(0,n.jsx)(j.Z,{loading:f,type:"link",icon:(0,n.jsx)(me.Z,{}),onClick:function(){return _()},children:"\u540C\u6B65"})},pe=ve,he=t(42020),fe=t(3989),oe=t(6250),ye=t(95253),ge=t(15912),Te=t.n(ge),Ce=t(62913),Ee=t(99886),be=oe.Z.TabPane,xe=function(l){Te()(l),E.ZP.success("\u590D\u5236\u6210\u529F")},Ie=function(){var l=(0,x.rb)(A),i=(0,x.sJ)(A),p=i>0,f=(0,fe.Z)(s()(u().mark(function d(){var m;return u().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,w.Zd)({tableId:i});case 2:return m=y.sent,y.abrupt("return",Object.keys(m).map(function(g){return{tab:g,key:g,content:m[g],highlightContent:Ce.Z.highlightAuto(m[g]).value}}));case 4:case"end":return y.stop()}},d)})),{ready:p,refreshDeps:[i]}),_=f.data,C=f.loading;return(0,n.jsx)(O.Z,{visible:p,onCancel:l,width:"80%",footer:!1,title:"\u9884\u89C8\u4EE3\u7801",bodyStyle:{height:"700px"},children:(0,n.jsx)(ye.Z,{spinning:C,children:(0,n.jsx)(oe.Z,{tabPosition:"left",children:_&&_.map(function(d){var m=d.key,P=d.tab,y=d.content,g=d.highlightContent;return(0,n.jsxs)(be,{tab:P,className:"relative",children:[(0,n.jsx)(j.Z,{icon:(0,n.jsx)(he.Z,{}),type:"link",className:"absolute top-0 right-1",onClick:function(){return xe(y)},children:"\u590D\u5236\u4EE3\u7801"}),(0,n.jsx)("pre",{children:(0,n.jsx)("code",{children:(0,n.jsx)("div",{className:"h-[650px] overflow-auto",dangerouslySetInnerHTML:{__html:g}})})})]},m)})})})})},we=Ie,je=[c.tC,c.jR,c.q2,c.Jx,c.eJ,c.au,{title:"\u64CD\u4F5C",valueType:"option",render:function(l,i){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(de,{tableId:i.tableId}),(0,n.jsx)(U,{tableId:i.tableId}),(0,n.jsx)(N,{tableIds:[i.tableId]}),(0,n.jsx)(pe,{tableName:i.tableName}),(0,n.jsx)(Z,{tableNames:[i.tableName]})]})}}],Ge=function(){var l=(0,o.useRef)(),i=(0,x.Zl)(k),p=(0,o.useState)([]),f=T()(p,2),_=f[0],C=f[1],d=(0,o.useState)([]),m=T()(d,2),P=m[0],y=m[1];return(0,o.useEffect)(function(){l!=null&&l.current&&i(l.current)},[]),(0,n.jsxs)(Q.AC,{children:[(0,n.jsx)(a.Z,{actionRef:l,rowKey:"tableId",rowSelection:{alwaysShowAlert:!0,onChange:function(G,v){C(G),y(v)}},tableAlertOptionRender:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N,{tableIds:_,isBatch:!0}),(0,n.jsx)(Z,{tableNames:P.map(function(G){return G.tableName}),isBatch:!0})]})},columns:je,toolbar:{actions:[(0,n.jsx)(R,{},"ButtonCreate")]},request:s()(u().mark(function g(){var G,v,I;return u().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,w.DT)({},{});case 2:return G=S.sent,v=G.total,I=G.rows,S.abrupt("return",{data:I,success:!0,total:v});case 6:case"end":return S.stop()}},g)}))}),(0,n.jsx)(we,{})]})},_e=Ge},90586:function(ue,K,t){t.d(K,{DI:function(){return O},DT:function(){return ee},He:function(){return X},LV:function(){return ne},XS:function(){return Q},Zd:function(){return te},cj:function(){return q},qm:function(){return z},we:function(){return A}});var b=t(55980),s=t.n(b),W=t(18172),T=t.n(W),V=t(29960),u=t.n(V),c=t(41595);function Q(a,r){return x.apply(this,arguments)}function x(){return x=T()(u().mark(function a(r,o){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.h3)("/tool/gen/batchGenCode",s()({method:"GET",params:s()({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),x.apply(this,arguments)}function H(a,r){return k.apply(this,arguments)}function k(){return k=_asyncToGenerator(_regeneratorRuntime.mark(function a(r,o){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/column/list",_objectSpread({method:"GET",params:_objectSpread({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),k.apply(this,arguments)}function A(a,r,o){return w.apply(this,arguments)}function w(){return w=T()(u().mark(function a(r,o,h){return u().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",(0,c.h3)("/tool/gen/db/list",s()({method:"POST",headers:{"Content-Type":"application/json"},params:s()({},r),data:o},h||{})));case 1:case"end":return R.stop()}},a)})),w.apply(this,arguments)}function ae(a,r){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime.mark(function a(r,o){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/download",_objectSpread({method:"GET",params:_objectSpread({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),E.apply(this,arguments)}function O(a,r){return j.apply(this,arguments)}function j(){return j=T()(u().mark(function a(r,o){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.h3)("/tool/gen/edit",s()({method:"POST",headers:{"Content-Type":"application/json"},data:r},o||{})));case 1:case"end":return e.stop()}},a)})),j.apply(this,arguments)}function $(a,r){return n.apply(this,arguments)}function n(){return n=_asyncToGenerator(_regeneratorRuntime.mark(function a(r,o){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/genCode",_objectSpread({method:"GET",params:_objectSpread({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),n.apply(this,arguments)}function z(a,r){return N.apply(this,arguments)}function N(){return N=T()(u().mark(function a(r,o){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.h3)("/tool/gen/importTable",s()({method:"POST",params:s()({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),N.apply(this,arguments)}function q(a,r){return L.apply(this,arguments)}function L(){return L=T()(u().mark(function a(r,o){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.h3)("/tool/gen/info",s()({method:"GET",params:s()({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),L.apply(this,arguments)}function ee(a,r,o){return Z.apply(this,arguments)}function Z(){return Z=T()(u().mark(function a(r,o,h){return u().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",(0,c.h3)("/tool/gen/list",s()({method:"POST",headers:{"Content-Type":"application/json"},params:s()({},r),data:o},h||{})));case 1:case"end":return R.stop()}},a)})),Z.apply(this,arguments)}function te(a,r){return M.apply(this,arguments)}function M(){return M=T()(u().mark(function a(r,o){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.h3)("/tool/gen/preview",s()({method:"GET",params:s()({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),M.apply(this,arguments)}function ne(a,r){return U.apply(this,arguments)}function U(){return U=T()(u().mark(function a(r,o){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.h3)("/tool/gen/remove",s()({method:"POST",params:s()({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),U.apply(this,arguments)}function X(a,r){return F.apply(this,arguments)}function F(){return F=T()(u().mark(function a(r,o){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,c.h3)("/tool/gen/synchDb",s()({method:"GET",params:s()({},r)},o||{})));case 1:case"end":return e.stop()}},a)})),F.apply(this,arguments)}}}]);
