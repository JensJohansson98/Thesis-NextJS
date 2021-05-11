(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{8010:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return m}});var n=o(5893),r=o(6610),a=o(5991),c=o(3349),s=o(5255),d=o(6089),u=o(7608),i=o(6156),l=o(7294),p=o(5059),f=o.n(p);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=(0,u.Z)(t);if(e){var r=(0,u.Z)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return(0,d.Z)(this,o)}}var m=function(t){(0,s.Z)(o,t);var e=h(o);function o(){var t;(0,r.Z)(this,o);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a)),(0,i.Z)((0,c.Z)(t),"state",{completed:t.props.todo.completed}),(0,i.Z)((0,c.Z)(t),"markAsDone",(function(){t.setState({completed:!t.props.todo.completed},(function(){t.props.handleUpdateTodo(t.props.todo.id,t.props.todo.taskName,t.state.completed)}))})),t}return(0,a.Z)(o,[{key:"render",value:function(){var t=this;return(0,n.jsx)("div",{className:f().todo,children:(0,n.jsxs)("li",{children:[(0,n.jsx)("label",{children:this.props.todo.taskName}),(0,n.jsx)("button",{onClick:function(e){return t.props.handleDeleteTodo(t.props.todo.id,e)},children:"x"}),(0,n.jsx)("input",{type:"checkbox",defaultChecked:this.props.todo.completed,onClick:this.markAsDone})]})})}}]),o}(l.Component)},3217:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return b}});var n=o(5893),r=o(7757),a=o.n(r),c=o(18),s=o(2137),d=o(6610),u=o(5991),i=o(3349),l=o(5255),p=o(6089),f=o(7608),h=o(6156),m=o(7294),v=o(5059),y=o.n(v),x=o(8010),Z=o(4586),w=o(9669),k=o.n(w);function j(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function g(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?j(Object(o),!0).forEach((function(e){(0,h.Z)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function T(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=(0,f.Z)(t);if(e){var r=(0,f.Z)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return(0,p.Z)(this,o)}}var b=function(t){(0,l.Z)(o,t);var e=T(o);function o(){var t;(0,d.Z)(this,o);for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return t=e.call.apply(e,[this].concat(r)),(0,h.Z)((0,i.Z)(t),"state",{todos:[],newTodo:{id:"",taskName:"",completed:!1}}),(0,h.Z)((0,i.Z)(t),"fetchTodos",(function(e){try{fetch("".concat("https://nxas8q7gy1.execute-api.eu-north-1.amazonaws.com/dev","/todos")).then((function(t){return t.json()})).then((function(e){t.setState({todos:e})}))}catch(o){console.log("An error has occured: ".concat(o))}})),(0,h.Z)((0,i.Z)(t),"componentDidMount",(function(){t.fetchTodos()})),(0,h.Z)((0,i.Z)(t),"handleAddTodo",function(){var e=(0,s.Z)(a().mark((function e(o,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.state.newTodo.taskName){e.next=4;break}return alert("Please enter a task"),e.abrupt("return",!1);case 4:return e.prev=4,r={id:o,taskName:t.state.newTodo.taskName,completed:!1},e.next=8,k().post("".concat("https://nxas8q7gy1.execute-api.eu-north-1.amazonaws.com/dev","/todos/").concat(o),r);case 8:t.setState({todos:[].concat((0,c.Z)(t.state.todos),[t.state.newTodo])}),t.setState({newTodo:{taskName:"",id:"",completed:!1}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log("Error when adding Todo: ".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,o){return e.apply(this,arguments)}}()),(0,h.Z)((0,i.Z)(t),"handleDeleteTodo",function(){var e=(0,s.Z)(a().mark((function e(o,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,k().delete("".concat("https://nxas8q7gy1.execute-api.eu-north-1.amazonaws.com/dev","/todos/").concat(o));case 4:r=(0,c.Z)(t.state.todos).filter((function(t){return t.id!==o})),t.setState({todos:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error when deleting Todo: ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,o){return e.apply(this,arguments)}}()),(0,h.Z)((0,i.Z)(t),"handleUpdateTodo",function(){var e=(0,s.Z)(a().mark((function e(o,n,r){var s,d,u,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={id:o,taskName:n,completed:r},e.next=4,k().patch("".concat("https://nxas8q7gy1.execute-api.eu-north-1.amazonaws.com/dev","/todos/").concat(o),s);case 4:(d=(0,c.Z)(t.state.todos).find((function(t){return t.id===o}))).taskName=n,d.completed=r,u=(0,c.Z)(t.state.todos),i=t.state.todos.findIndex((function(t){return t.id===o})),u.splice(i,1,d),t.setState({todos:u}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error when updating todo: ".concat(e.t0));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,o,n){return e.apply(this,arguments)}}()),(0,h.Z)((0,i.Z)(t),"onAddTodoNameChange",(function(e){return t.setState({newTodo:g(g({},t.state.newtodo),{},{taskName:e.target.value,id:(0,Z.Z)()})})})),t}return(0,u.Z)(o,[{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return(0,n.jsx)(x.default,{todo:e,handleDeleteTodo:t.handleDeleteTodo,handleUpdateTodo:t.handleUpdateTodo},e.id)})),o=this.state.todos.filter((function(t){return!0===t.completed}));return(0,n.jsxs)(m.Fragment,{children:[(0,n.jsx)("div",{className:y().todoTitle,children:(0,n.jsx)("h1",{children:"Your tasks"})}),(0,n.jsxs)("div",{className:y().todoWrapper,children:[(0,n.jsx)("div",{className:y().todoForm,children:(0,n.jsxs)("form",{onSubmit:function(e){return t.handleAddTodo(t.state.newTodo.id,e)},children:[(0,n.jsx)("input",{type:"text",placeholder:"Enter task",value:this.state.newTodo.taskName,onChange:this.onAddTodoNameChange}),(0,n.jsx)("button",{type:"submit",children:"Add new task"})]})}),(0,n.jsxs)("div",{className:y().todos,children:[(0,n.jsx)("ul",{children:e}),(0,n.jsxs)("h3",{children:["Completed: ",o.length,"/",this.state.todos.length]})]})]})]})}}]),o}(m.Component)},8738:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todos",function(){return o(3217)}])},5059:function(t){t.exports={todoWrapper:"styles_todoWrapper__ztwzE",todoForm:"styles_todoForm__286N2",todos:"styles_todos__2--kI",todo:"styles_todo__1Jjr0",todoTitle:"styles_todoTitle__3s3bB"}}},function(t){t.O(0,[774,456,706],(function(){return e=8738,t(t.s=e);var e}));var e=t.O();_N_E=e}]);