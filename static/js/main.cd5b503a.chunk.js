(this["webpackJsonpgoit-react-counter"]=this["webpackJsonpgoit-react-counter"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":"id-1","text":"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React","completed":true},{"id":"id-2","text":"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router","completed":false},{"id":"id-3","text":"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux","completed":false}]')},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(3),u=n.n(o),i=n(7),a=n(8),s=n(13),l=n(12),d=n(4),j=n(1),b=function(e){var t=e.step,n=e.onIncrement,r=e.onDecrement;return Object(j.jsxs)("div",{className:"Counter__controls",children:[Object(j.jsxs)("button",{type:"button",onClick:r,children:["\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043d\u0430 ",t]}),Object(j.jsxs)("button",{type:"button",onClick:n,children:["\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043d\u0430 ",t]})]})},p={INCREMENT:"counter/Increment",DECREMENT:"counter/Decrement"},f=function(e){var t=e.value;return Object(j.jsx)("span",{className:"Counter__value",children:t})};n(25);var v=Object(d.b)((function(e){return{value:e.counter.value,step:e.counter.step}}),(function(e){return{onIncrement:function(t){return e(function(e){return{type:p.INCREMENT,payload:e}}(t))},onDecrement:function(t){return e(function(e){return{type:p.DECREMENT,payload:e}}(t))}}}))((function(e){var t=e.value,n=e.step,r=e.onIncrement,c=e.onDecrement;return Object(j.jsxs)("div",{className:"Counter",children:[Object(j.jsx)(f,{value:t}),Object(j.jsx)(b,{step:n,onIncrement:function(){return r(n)},onDecrement:function(){return c(n)}})]})})),m=n(10),O=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={todos:m},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),Object(j.jsx)(v,{})]})}}]),n}(r.Component),h=n(2),x=n(11),E=Object(h.combineReducers)({value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case p.INCREMENT:return e+r;case p.DEgitCREMENT:return e-r;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return e}}),N=Object(h.combineReducers)({counter:E}),y=Object(h.createStore)(N,Object(x.composeWithDevTools)());n(26),n(27);console.log(y.getState()),u.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(d.a,{store:y,children:Object(j.jsx)(O,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.cd5b503a.chunk.js.map