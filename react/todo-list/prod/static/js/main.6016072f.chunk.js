(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(255)},128:function(e,t,a){},206:function(e,t,a){},208:function(e,t,a){},244:function(e,t,a){},246:function(e,t,a){},253:function(e,t,a){},255:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(32),o=a(9),r=a(25),c=a(49),l=a(104),d=a(10),u=window.devToolsEnhancer||Object(l.composeWithDevTools)({name:"AppMainWrapper.appRoutes appRoutes",realtime:!0,hostname:"localhost",port:8e3}),p=Object(d.a)(),h=a(8),f=a(105),g=Object(h.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"INIT_CURRENT_LIST":return t.tasks;default:return e}}}),m=function(e){var t=[f.a,Object(r.routerMiddleware)(p)],a=[h.applyMiddleware.apply(void 0,t),u()];return Object(h.createStore)(Object(r.connectRouter)(p)(g),e,h.compose.apply(void 0,a))}({}),k=a(256),v=function(e){var t=e.getUrls;return s.a.createElement(k.a,null,t().map(function(e,t){var a=e.action,n=e.exact;return delete e.action,delete e.exact,n?s.a.createElement(a,Object.assign({key:t},e,{exact:!0})):s.a.createElement(a,Object.assign({key:t},e))}))},b=a(257),T=a(258),S="http://kspace-mailer.hol.es/test-server/",U=function(e,t){console.log("--------------------"),console.log("module: \xabapi - server - index.js\xbb"),console.log("error func: \xab".concat(e,"\xbb")),console.log("error message: ".concat(t)),console.log("--------------------")},y=function(e){var t=new FormData;t.append("data",JSON.stringify(e));fetch("http://kspace-mailer.hol.es/test-server/server_setter.php",{method:"POST",body:t}).then(function(e){return e.text()}).then(function(t){"Success"!==t&&U("saveOnServer","action: ".concat(e.action,", serverAnswer: ").concat(t))})},E=function(e,t){y({action:"update_task",id:e,value:t})},O=function(e){y({action:"add_task",value:e})},C=function(e){y({action:"delete_task",id:e})},j=function(e){y({action:"done_task",id:e})},N=function(e){return{type:"INIT_CURRENT_LIST",tasks:e}},D=a(12),w=a.n(D),R=(a(128),{push:function(e){return function(t){t(Object(r.push)(e))}}}),I=Object(o.connect)(function(){return{}},R)(function(e){var t=e.push;return s.a.createElement(w.a,{className:"btnShow",onClick:function(){t("/list")}},"Show list")}),x=a(15),A=a(16),F=a(18),V=a(17),_=a(19),L=a(109),P=a(108),B=a(51),J=(a(206),function(e){function t(e){var a;Object(x.a)(this,t),(a=Object(F.a)(this,Object(V.a)(t).call(this,e))).handleUpdateStart=function(){var e=a.props.changeTotalUpdating;a.setState({isCurrentUpdating:!0}),e(!0,function(e){a.setState({scrollTop:e})})},a.handleKeyDown=function(e){13===e.keyCode&&a.state.changingValue.trim()&&a.handleUpdateSave(),27===e.keyCode&&a.handleUpdateCancel()},a.handleTextChange=function(e){a.setState({changingValue:e.target.value})},a.handleUpdateCancel=function(){var e=a.props,t=e.fieldAddTask,n=e.changeTotalUpdating,s=a.state.value;a.setState({isCurrentUpdating:!1,changingValue:s}),a.updatedField=null,t.focus(),n(!1,function(){})},a.handleUpdateSave=function(){var e=a.props,t=e.fieldAddTask,n=e.changeTotalUpdating,s=e.updateTask,i=a.state,o=i.id,r=i.changingValue;a.setState({isCurrentUpdating:!1,value:r}),a.updatedField=null,t.focus(),n(!1,function(){}),s(o,r)},a.handleRemoveTask=function(){var e=a.props,t=e.fieldAddTask,n=e.deleteTask,s=a.state.id;t.focus(),n(s)},a.handleDoneTask=function(){var e=a.props,t=e.fieldAddTask,n=e.doneTask,s=a.state.id;a.setState({isDone:!0}),t.focus(),n(s)};var s=e.taskInfo,i=e.scrollTop,o=e.isScroll;return a.state={scrollTop:i,isScroll:o,isCurrentUpdating:!1,isTotalUpdating:!1,changingValue:s.value,id:s.id,value:s.value,isDone:s.isDone},a.updatedFieldRef=Object(n.createRef)(),a.updatedField=null,a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,a){return e.taskInfo.value!==this.props.taskInfo.value&&this.setState({value:e.taskInfo.value,changingValue:e.taskInfo.value}),e.taskInfo.isDone!==this.props.taskInfo.isDone&&this.setState({isDone:e.taskInfo.isDone}),e.isTotalUpdating!==this.props.isTotalUpdating&&this.setState({isTotalUpdating:e.isTotalUpdating}),!0}},{key:"componentDidUpdate",value:function(e,t,a){this.updatedField?this.state.isCurrentUpdating&&this.updatedField.focus():this.updatedFieldRef.current&&(this.updatedField=this.updatedFieldRef.current),e.isScroll!==this.props.isScroll&&(this.setState({isScroll:this.props.isScroll}),this.forceUpdate())}},{key:"render",value:function(){var e=this.state,t=e.isDone,a=e.value,n=e.changingValue,i=e.isCurrentUpdating,o=e.isTotalUpdating,r=e.scrollTop,c=e.isScroll;return s.a.createElement(s.a.Fragment,null,t?s.a.createElement("div",{className:"singleTask",style:{backgroundColor:"#3b9"}},s.a.createElement("div",{className:"taskValue"},a),s.a.createElement("div",{className:"controls ".concat(o||!c?"isUpdating":"notUpdating")},s.a.createElement(w.a,{className:"btn btnRemoveDone",onClick:this.handleRemoveTask,disabled:o},"Remove"))):s.a.createElement("div",{className:"singleTask",style:{backgroundColor:i?"#b9daff":"#ccc"}},i?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"inputWrapper",style:{border:i?"2px solid #55c":"none"}},s.a.createElement("input",{className:"updateTaskField",style:{marginTop:"".concat(6-r,"px")},type:"text",value:n,ref:this.updatedFieldRef,onChange:this.handleTextChange,onKeyDown:this.handleKeyDown,onClick:this.test})),s.a.createElement("div",{className:"controls ".concat(o||!c?"isUpdating":"notUpdating")},s.a.createElement(w.a,{className:"btn btnBig btnUpdateSave",onClick:this.handleUpdateSave,disabled:!n.trim()},"Save"),s.a.createElement(w.a,{className:"btn btnBig btnUpdateCancel",onClick:this.handleUpdateCancel},"Cancel"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"taskValue"},a),s.a.createElement("div",{className:"controls ".concat(o||!c?"isUpdating":"notUpdating")},s.a.createElement(w.a,{className:"btn btnSmall btnDone",onClick:this.handleDoneTask,disabled:o},"Done"),s.a.createElement(w.a,{className:"btn btnSmall btnUpdateBegin",onClick:this.handleUpdateStart,disabled:o},"Update"),s.a.createElement(w.a,{className:"btn btnSmall btnRemove",onClick:this.handleRemoveTask,disabled:o},"Remove")))))}}]),t}(n.Component)),K=Object(o.connect)(function(){return{deleteTask:C,doneTask:j,updateTask:E}},{})(J),M=(a(208),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(F.a)(this,Object(V.a)(t).call(this,e))).getOrder=function(e){return e.reduce(function(e,t){return e.push(t.id),e},[])},a.changeUpdatingState=function(e,t){a.setState({isTotalUpdating:e}),a.props.changeUpdating(e),e&&t(a.scrollTop)},a.onDragEnd=function(e){if(e.destination){var t=function(e,t,a){var n=Array.from(e),s=n.splice(t,1),i=Object(P.a)(s,1)[0];return n.splice(a,0,i),n}(a.state.items,e.source.index,e.destination.index);a.setState({items:t,order:a.getOrder(t)})}},e.listInit(),a.state={items:[],order:[],isScroll:!1,isTotalUpdating:!1},a.scrollTop=0,a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,a){if(this.props.tasks!==e.tasks)if(0===this.props.tasks.length)this.setState({items:e.tasks,order:this.getOrder(e.tasks)}),e.tasks.length>7&&this.setState({isScroll:!0}),e.tasks.length<=7&&this.setState({isScroll:!1});else{var n=[];this.state.order.forEach(function(t){e.tasks.forEach(function(e){e.id===t&&n.push(e)})}),e.tasks.forEach(function(e){var t=!0;n.forEach(function(a){e.id===a.id&&(t=!1)}),t&&n.push(e)}),this.setState({items:n}),!this.state.isScroll&&n.length>7&&this.setState({isScroll:!0}),this.state.isScroll&&n.length<=7&&this.setState({isScroll:!1})}return!0}},{key:"componentDidUpdate",value:function(e,t,a){var n=this,s=document.body.getElementsByClassName("todoList")[0];s&&(s.addEventListener("scroll",function(e){n.scrollTop=e.srcElement.scrollTop}),this.needScrolling&&(this.needScrolling=!1,s.scrollTo(0,s.scrollHeight)),e.tasks.length<this.props.tasks.length&&0!==e.tasks.length&&(this.needScrolling=!0))}},{key:"render",value:function(){var e=this,t=this.props.fieldAddTask,a=this.state,n=a.isTotalUpdating,i=a.items,o=a.isScroll;return s.a.createElement(B.a,{onDragEnd:this.onDragEnd},s.a.createElement(B.c,{droppableId:"droppable",isDropDisabled:n},function(a){return s.a.createElement("div",{className:"todoList",ref:a.innerRef,style:{overflowY:n?"hidden":"auto"}},i.map(function(a,i){return s.a.createElement(B.b,{key:a.id,draggableId:a.id,index:i},function(i){return s.a.createElement("div",Object.assign({className:"taskWrapper",ref:i.innerRef},i.draggableProps,i.dragHandleProps,{style:Object(L.a)({},i.draggableProps.style,{cursor:n?"default":"move"})}),s.a.createElement(K,{taskInfo:a,isTotalUpdating:n,changeTotalUpdating:e.changeUpdatingState,fieldAddTask:t,isScroll:o}))})}),a.placeholder)}))}}]),t}(n.Component)),H={listInit:function(){return function(e){var t=function t(){(function(){var e=new FormData;return e.append("time",JSON.stringify(+new Date)),fetch("http://kspace-mailer.hol.es/test-server/long_polling.php",{method:"POST",body:e}).then(function(e){return e.text()}).then(function(e){try{return JSON.parse(e)}catch(t){return U("getUpdatedList",e),[]}})})().then(function(t){Array.isArray(t)?e(N(t)):console.log(t)}).then(function(){setTimeout(function(){t()},500)})};fetch(S+"server_getter.php").then(function(e){return e.text()}).then(function(e){try{return JSON.parse(e)}catch(t){return U("getStartList",e),[]}}).then(function(t){Array.isArray(t)&&e(N(t))}).then(function(){t()})}}},W=Object(o.connect)(function(e){return{tasks:function(e){return e.tasks}(e)}},H)(M),Y=(a(244),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(F.a)(this,Object(V.a)(t).call(this,e))).addNewTaskHandle=function(){a.props.addNewTask(a.state.taskValue),a.addFieldRef.current.focus(),a.setState({taskValue:""})},a.handleTextChange=function(e){a.setState({taskValue:e.target.value})},a.handleKeyDown=function(e){13===e.keyCode&&(a.state.isUpdating||a.addNewTaskHandle())},a.state={taskValue:"",isUpdating:!1},a.addFieldRef=Object(n.createRef)(),a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.props.getAddTaskInput(this.addFieldRef.current),this.addFieldRef.current.focus()}},{key:"shouldComponentUpdate",value:function(e,t,a){return e.isUpdating!==this.props.isUpdating&&this.setState({isUpdating:e.isUpdating}),!0}},{key:"render",value:function(){var e=this.state,t=e.taskValue,a=e.isUpdating;return s.a.createElement("div",{className:"actionsBlock"},s.a.createElement("input",{className:"addTaskField",type:"text",value:t,ref:this.addFieldRef,onChange:this.handleTextChange,onKeyDown:this.handleKeyDown}),s.a.createElement(w.a,{className:"btnAddNew",onClick:this.addNewTaskHandle,disabled:!t.trim()||a},"Add task"))}}]),t}(n.Component)),q=Object(o.connect)(function(){return{addNewTask:O}},{})(Y),z=(a(246),function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(F.a)(this,Object(V.a)(t).call(this,e))).getAddTaskInput=function(e){a.setState({inputAddTask:e})},a.changeUpdating=function(e){a.setState({isUpdating:e})},a.state={inputAddTask:null,isUpdating:!1},a}return Object(_.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.state,t=e.inputAddTask,a=e.isUpdating;return s.a.createElement("div",{className:"pageTodoList"},s.a.createElement(W,{fieldAddTask:t,changeUpdating:this.changeUpdating}),s.a.createElement(q,{getAddTaskInput:this.getAddTaskInput,isUpdating:a}))}}]),t}(n.Component)),G=function(){var e=[{action:b.a,path:"/",component:I,exact:!0},{action:b.a,path:"/list",component:z,exact:!0}],t=[{action:T.a,from:"/*",to:"/",exact:!1}];return e.concat(t)},Q=Object(c.createMuiTheme)({typography:{useNextVariants:!0}}),X=(a(253),s.a.createElement(function(){return s.a.createElement(o.Provider,{store:m},s.a.createElement(r.ConnectedRouter,{history:p},s.a.createElement(c.MuiThemeProvider,{theme:Q},s.a.createElement(v,{getUrls:G}))))},null)),Z=document.getElementById("root");Object(i.render)(X,Z)}},[[111,2,1]]]);
//# sourceMappingURL=main.6016072f.chunk.js.map