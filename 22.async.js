"use strict";(self.webpackChunkruoyi_x_umi=self.webpackChunkruoyi_x_umi||[]).push([[427],{33921:function(ae,I,a){a.d(I,{Jx:function(){return B},eJ:function(){return A},fk:function(){return s},sE:function(){return D},tC:function(){return h},g4:function(){return T},Fu:function(){return X},Rj:function(){return v},tE:function(){return w},q2:function(){return E},jR:function(){return p},au:function(){return j}});var $=a(75786),h={title:"\u5E8F\u53F7",dataIndex:"index",key:"index",valueType:"indexBorder"},A={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime",valueType:"dateTime",hideInSearch:!0},j={title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime",valueType:"dateTime",hideInSearch:!0},D={title:"\u72B6\u6001",dataIndex:"status",key:"status",valueType:"radio",valueEnum:$.IZ},s={title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTimeRange",key:"createTimeRange",valueType:"dateTimeRange",hideInTable:!0,search:{transform:function(G){return{beginCreateTime:G[0],endCreateTime:G[1]}}}},p={title:"\u8868\u540D\u79F0",dataIndex:"tableName",key:"tableName",valueType:"text"},E={title:"\u8868\u63CF\u8FF0",dataIndex:"tableComment",key:"tableComment",valueType:"text"},B={title:"\u5B9E\u4F53",dataIndex:"className",key:"className",valueType:"text"},v={title:"\u89D2\u8272\u540D\u79F0",dataIndex:"roleName",key:"roleName",valueType:"text"},T={title:"\u89D2\u8272ID",dataIndex:"roleId",key:"roleId",valueType:"text",hideInSearch:!0,editable:!1},X={title:"\u6743\u9650\u5B57\u7B26",dataIndex:"roleKey",key:"roleKey",valueType:"text"},w={title:"\u89D2\u8272\u6392\u5E8F",dataIndex:"roleSort",key:"roleSort",valueType:"text",hideInSearch:!0}},14804:function(ae,I,a){a.r(I),a.d(I,{default:function(){return De}});var $=a(18172),h=a.n($),A=a(3849),j=a.n(A),D=a(29960),s=a.n(D),p=a(33921),E=a(71989),B=a(55980),v=a.n(B),T=a(8513);function X(r,t){return w.apply(this,arguments)}function w(){return w=_asyncToGenerator(_regeneratorRuntime.mark(function r(t,n){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/batchGenCode",_objectSpread({method:"GET",params:_objectSpread({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),w.apply(this,arguments)}function ue(r,t){return G.apply(this,arguments)}function G(){return G=_asyncToGenerator(_regeneratorRuntime.mark(function r(t,n){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/column/list",_objectSpread({method:"GET",params:_objectSpread({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),G.apply(this,arguments)}function oe(r,t,n){return k.apply(this,arguments)}function k(){return k=h()(s().mark(function r(t,n,u){return s().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,T.h3)("/tool/gen/db/list",v()({method:"POST",headers:{"Content-Type":"application/json"},params:v()({},t),data:n},u||{})));case 1:case"end":return l.stop()}},r)})),k.apply(this,arguments)}function Ee(r,t){return O.apply(this,arguments)}function O(){return O=_asyncToGenerator(_regeneratorRuntime.mark(function r(t,n){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/download",_objectSpread({method:"GET",params:_objectSpread({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),O.apply(this,arguments)}function Be(r,t){return N.apply(this,arguments)}function N(){return N=_asyncToGenerator(_regeneratorRuntime.mark(function r(t,n){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/edit",_objectSpread({method:"POST",headers:{"Content-Type":"application/json"},data:t},n||{})));case 1:case"end":return e.stop()}},r)})),N.apply(this,arguments)}function ke(r,t){return F.apply(this,arguments)}function F(){return F=_asyncToGenerator(_regeneratorRuntime.mark(function r(t,n){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/genCode",_objectSpread({method:"GET",params:_objectSpread({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),F.apply(this,arguments)}function se(r,t){return L.apply(this,arguments)}function L(){return L=h()(s().mark(function r(t,n){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,T.h3)("/tool/gen/importTable",v()({method:"POST",params:v()({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),L.apply(this,arguments)}function Oe(r,t){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime.mark(function r(t,n){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/info",_objectSpread({method:"GET",params:_objectSpread({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),K.apply(this,arguments)}function le(r,t,n){return J.apply(this,arguments)}function J(){return J=h()(s().mark(function r(t,n,u){return s().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,T.h3)("/tool/gen/list",v()({method:"POST",headers:{"Content-Type":"application/json"},params:v()({},t),data:n},u||{})));case 1:case"end":return l.stop()}},r)})),J.apply(this,arguments)}function ie(r,t){return M.apply(this,arguments)}function M(){return M=h()(s().mark(function r(t,n){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,T.h3)("/tool/gen/preview",v()({method:"GET",params:v()({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),M.apply(this,arguments)}function ce(r,t){return z.apply(this,arguments)}function z(){return z=h()(s().mark(function r(t,n){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,T.h3)("/tool/gen/remove",v()({method:"POST",params:v()({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),z.apply(this,arguments)}function Ne(r,t){return H.apply(this,arguments)}function H(){return H=_asyncToGenerator(_regeneratorRuntime.mark(function r(t,n){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/tool/gen/synchDb",_objectSpread({method:"GET",params:_objectSpread({},t)},n||{})));case 1:case"end":return e.stop()}},r)})),H.apply(this,arguments)}var de=a(71224),U=a(43668),Q=a(75815),x=a(16278),Y=a(2891),o=a(11527),pe=function(t){var n=t.tableIds,u=n===void 0?[]:n,e=t.tableActions,l=(0,Y.Db)(ce,{onSuccess:function(){var c;e==null||e.reload(),e==null||(c=e.clearSelected)===null||c===void 0||c.call(e),U.ZP.success("\u5220\u9664\u6210\u529F")}}),g=l.mutateAsync,i=l.isLoading,m=function(){Q.Z.confirm({title:"\u5220\u9664\u751F\u6210\u4EE3\u7801",content:"\u786E\u5B9A\u5220\u9664 \u8868ID \u4E3A ".concat(u.join(",")," \u751F\u6210\u7684\u4EE3\u7801\u5417\uFF1F"),onOk:function(){var c=h()(s().mark(function Z(){return s().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,g({tableIds:u});case 2:case"end":return y.stop()}},Z)}));function d(){return c.apply(this,arguments)}return d}()})};return(0,o.jsx)(x.Z,{loading:i,icon:(0,o.jsx)(de.Z,{}),type:"link",onClick:m,children:"\u5220\u9664"})},q=pe,_=a(54923),me=a(29586),R=a(50959),ve=[p.tC,p.jR,p.q2,p.eJ,p.au],he=function(t){var n=t.tableActions,u=(0,R.useRef)(),e=(0,me.Z)(),l=j()(e,2),g=l[0],i=l[1].toggle,m=(0,R.useState)([]),f=j()(m,2),c=f[0],d=f[1],Z=(0,Y.Db)(se,{onSuccess:function(){var b,S;n==null||n.reload(),i(),U.ZP.success("\u5BFC\u5165\u6210\u529F"),u==null||(b=u.current)===null||b===void 0||(S=b.clearSelected)===null||S===void 0||S.call(b)}}),te=Z.mutate;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x.Z,{type:"primary",onClick:i,children:"\u5BFC\u5165"}),(0,o.jsx)(Q.Z,{visible:g,onCancel:i,title:"\u5BFC\u5165\u8868",onOk:function(){return te({tables:c.join(",")})},width:900,children:(0,o.jsx)(_.Z,{ghost:!0,size:"small",actionRef:u,pagination:{pageSize:10,current:1},columns:ve,rowKey:"tableName",search:{filterType:"light"},rowSelection:{onChange:function(b){d(b)}},options:{setting:!1,density:!1},request:function(){var y=h()(s().mark(function b(S){var W,ne,re;return s().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,oe((0,T.AF)(S),{});case 2:return W=C.sent,ne=W.rows,re=W.total,C.abrupt("return",{data:ne,total:re});case 6:case"end":return C.stop()}},b)}));return function(b){return y.apply(this,arguments)}}()})})]})},fe=he,P=a(87130),ge="toolGen",V=(0,P.cn)({key:"".concat(ge,"PreviewIdAtom"),default:0}),ye=a(8667),be=function(t){var n=t.tableId,u=(0,P.Zl)(V);return(0,o.jsx)(x.Z,{onClick:function(){return u(n)},type:"link",icon:(0,o.jsx)(ye.Z,{}),children:"\u9884\u89C8"})},Te=be,Ge=a(42020),Ce=a(3989),ee=a(6250),je=a(95253),we=a(15912),Se=a.n(we),Ie=a(62913),Fe=a(99886),xe=ee.Z.TabPane,Re=function(t){Se()(t),U.ZP.success("\u590D\u5236\u6210\u529F")},Pe=function(){var t=(0,P.rb)(V),n=(0,P.sJ)(V),u=n>0,e=(0,Ce.Z)(h()(s().mark(function i(){var m;return s().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ie({tableId:n});case 2:return m=c.sent,c.abrupt("return",Object.keys(m).map(function(d){return{tab:d,key:d,content:m[d],highlightContent:Ie.Z.highlightAuto(m[d]).value}}));case 4:case"end":return c.stop()}},i)})),{ready:u,refreshDeps:[n]}),l=e.data,g=e.loading;return(0,o.jsx)(Q.Z,{visible:u,onCancel:t,width:"80%",footer:!1,title:"\u9884\u89C8\u4EE3\u7801",bodyStyle:{height:"700px"},children:(0,o.jsx)(je.Z,{spinning:g,children:(0,o.jsx)(ee.Z,{tabPosition:"left",children:l&&l.map(function(i){var m=i.key,f=i.tab,c=i.content,d=i.highlightContent;return(0,o.jsxs)(xe,{tab:f,className:"relative",children:[(0,o.jsx)(x.Z,{icon:(0,o.jsx)(Ge.Z,{}),type:"link",className:"absolute top-0 right-1",onClick:function(){return Re(c)},children:"\u590D\u5236\u4EE3\u7801"}),(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:(0,o.jsx)("div",{className:"h-[650px] overflow-auto",dangerouslySetInnerHTML:{__html:d}})})})]},m)})})})})},Ze=Pe,$e=[p.tC,p.jR,p.q2,p.Jx,p.eJ,p.au,{title:"\u64CD\u4F5C",valueType:"option",render:function(t,n,u,e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(q,{tableIds:[n.tableId],tableActions:e}),(0,o.jsx)(Te,{tableId:n.tableId})]})}}],Ae=function(){var t=(0,R.useRef)(),n=(0,R.useState)([]),u=j()(n,2),e=u[0],l=u[1];return(0,o.jsxs)(E.AC,{children:[(0,o.jsx)(_.Z,{actionRef:t,rowKey:"tableId",rowSelection:{alwaysShowAlert:!0,onChange:function(i){l(i)}},tableAlertRender:function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(q,{tableIds:e})})},columns:$e,toolbar:{actions:[(0,o.jsx)(fe,{tableActions:t==null?void 0:t.current},"ButtonCreate")]},request:h()(s().mark(function g(){var i,m,f;return s().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,le({},{});case 2:return i=d.sent,m=i.total,f=i.rows,d.abrupt("return",{data:f,success:!0,total:m});case 6:case"end":return d.stop()}},g)}))}),(0,o.jsx)(Ze,{})]})},De=Ae}}]);
