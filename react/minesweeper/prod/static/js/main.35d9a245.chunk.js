(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){},195:function(e,t,n){},197:function(e,t,n){},199:function(e,t,n){},201:function(e,t,n){},203:function(e,t,n){},205:function(e,t,n){},207:function(e,t,n){},209:function(e,t,n){},217:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var a,r,s,c=n(0),i=n.n(c),o=n(37),u=n(7),m=n(24),l=n(51),g=n(84),d=n(14),f=window.devToolsEnhancer||Object(g.composeWithDevTools)({name:"AppMainWrapper.appRoutes appRoutes",realtime:!0,hostname:"localhost",port:8e3}),v=Object(d.a)(),p=n(17),I=n(85),h={rows:[10,12,14],cols:[6,8,10],mines:[14,20,32]},b={rowLength:h.rows[0],colLength:h.cols[0],mines:h.mines[0]},E=n(23),C=Object(p.combineReducers)({params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"INIT_BOARD_PARAMS":return t.params;default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(E.fromJS)({tiles:[],gameParams:{tilesChecked:0,moves:0,flagsLeft:0,start:0,status:-1,bangIndex:-1}}),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"START_GAME":return e.setIn(["tiles"],t.tiles).setIn(["gameParams","flagsLeft"],t.flagsLeft).setIn(["gameParams","start"],Date.now()).setIn(["gameParams","tilesChecked"],0).setIn(["gameParams","moves"],0).setIn(["gameParams","bangIndex"],-1).setIn(["gameParams","status"],-1);case"TOGGLE_FLAG":return e.setIn(["tiles"],t.tiles).setIn(["gameParams","flagsLeft"],t.flagsLeft).setIn(["gameParams","status"],t.status);case"CHECK_TILE":return e.setIn(["tiles"],t.tiles).setIn(["gameParams","moves"],t.moves).setIn(["gameParams","bangIndex"],t.bangIndex);case"UPDATE_CHECKED_TILES":return e.setIn(["gameParams","tilesChecked"],t.tilesChecked).setIn(["gameParams","status"],t.status);default:return e}}}),x=(a={},r=[I.a,Object(m.routerMiddleware)(v)],s=[p.applyMiddleware.apply(void 0,r),f()],Object(p.createStore)(Object(m.connectRouter)(v)(C),a,p.compose.apply(void 0,s))),w=n(220),O=function(e){var t=e.getUrls;return i.a.createElement(w.a,null,t().map(function(e,t){var n=e.action,a=e.exact;return delete e.action,delete e.exact,a?i.a.createElement(n,Object.assign({key:t},e,{exact:!0})):i.a.createElement(n,Object.assign({key:t},e))}))},k=n(221),N=n(222),y=n(86),S=function(){return e=x.getState().params,t=e.rowLength,n=e.colLength,a=e.mines,function(e,t,n){var a=function(a){var r,s,c,i,o=(r=e.getIn([a,"rowIndex"]),s=e.getIn([a,"colIndex"]),i=function(e,a){return e>=0&&e<t&&a>=0&&a<n},[{name:"n",index:(c=function(e,n){return n*t+e})(r,s-1),isAvailable:i(r,s-1)},{name:"ne",index:c(r+1,s-1),isAvailable:i(r+1,s-1)},{name:"e",index:c(r+1,s),isAvailable:i(r+1,s)},{name:"se",index:c(r+1,s+1),isAvailable:i(r+1,s+1)},{name:"s",index:c(r,s+1),isAvailable:i(r,s+1)},{name:"sw",index:c(r-1,s+1),isAvailable:i(r-1,s+1)},{name:"w",index:c(r-1,s),isAvailable:i(r-1,s)},{name:"nw",index:c(r-1,s-1),isAvailable:i(r-1,s-1)}]);return new E.List(o.filter(function(e){return e.isAvailable}).map(function(e){return e.index}))};return e.map(function(t,n){return t.setIn(["aroundIndexes"],a(n)).setIn(["minesCount"],a(n).map(function(t){return e.getIn([t])}).filter(function(e){return e.getIn(["isMine"])}).size)})}(function(e,t){return e.map(function(e,n){return e.setIn(["rowIndex"],n-Math.floor(n/t)*t).setIn(["colIndex"],Math.floor(n/t))})}(function(e,t,n){var a=function(e,t){for(var n=[];e--;)n.push(t);return Object(E.List)(n)},r=Object(E.Map)({rowIndex:-1,colIndex:-1,minesCount:-1,aroundIndexes:[],isMine:!0,isChecked:!1,isFlagged:!1}),s=a(n,r),c=a(e*t-n,r.setIn(["isMine"],!1));return s.concat(c)}(t,n,a).sort(function(){return Math.random()-.5}),t),t,n);var e,t,n,a},P=function(e){return{wantAdd:!x.getState().game.getIn(["tiles",e,"isFlagged"]),canAdd:!x.getState().game.getIn(["tiles",e,"isChecked"])&&x.getState().game.getIn(["gameParams","flagsLeft"])>0}},j=function(){return x.getState().game.getIn(["tiles"]).reduce(function(e,t){return t.getIn(["isChecked"])?e+1:e},0)},L=function(e){return{type:"INIT_BOARD_PARAMS",params:Object(y.a)({},e)}},A=function(){return{type:"START_GAME",tiles:S(),flagsLeft:x.getState().params.mines}},M=function(e){return{type:"TOGGLE_FLAG",tiles:(t=e,n=x.getState().game.getIn(["tiles"]),a=function(e,t){return n.setIn([e],n.getIn([e]).setIn(["isFlagged"],t))},P(t).wantAdd?P(t).canAdd?a(t,!0):n:a(t,!1)),flagsLeft:function(e){return P(e).wantAdd?P(e).canAdd?x.getState().game.getIn(["gameParams","flagsLeft"])-1:x.getState().game.getIn(["gameParams","flagsLeft"]):x.getState().game.getIn(["gameParams","flagsLeft"])+1}(e),status:x.getState().game.getIn(["gameParams","tilesChecked"])===x.getState().game.getIn(["tiles"]).toJS().length-x.getState().params.mines&&x.getState().game.getIn(["gameParams","flagsLeft"])-1===0?1:x.getState().game.getIn(["gameParams","status"])};var t,n,a},T=function(e){return{type:"CHECK_TILE",tiles:(t=e,n=x.getState().game.getIn(["tiles"]),a=n.setIn([t],n.getIn([t]).setIn(["isChecked"],!0)).map(function(e){return e.getIn(["isMine"])&&n.getIn([t,"isMine"])?e.setIn(["isChecked"],!0):e}),a.getIn([t,"isMine"])||0!==a.getIn([t,"minesCount"])?a:function e(t,n){return t.getIn([n,"aroundIndexes"]).reduce(function(t,a){return 0===t.getIn([a,"minesCount"])?e(t.removeIn([a,"aroundIndexes",t.getIn([a,"aroundIndexes"]).indexOf(n)]),a):t},t.map(function(e,a){return-1===t.getIn([n,"aroundIndexes"]).indexOf(a)?e:e.setIn(["isChecked"],!0)}))}(a,t)),bangIndex:function(e){return x.getState().game.getIn(["tiles",e,"isMine"])?e:x.getState().game.getIn(["gameParams","bangIndex"])}(e),moves:function(e){return x.getState().game.getIn(["tiles",e,"isChecked"])?x.getState().game.getIn(["gameParams","moves"]):x.getState().game.getIn(["gameParams","moves"])+1}(e)};var t,n,a},_=function(e){return{type:"UPDATE_CHECKED_TILES",tilesChecked:j(),status:(t=e,x.getState().game.getIn(["tiles",t,"isMine"])?0:j()===x.getState().game.getIn(["tiles"]).toJS().length-x.getState().params.mines&&0===x.getState().game.getIn(["gameParams","flagsLeft"])?1:x.getState().game.getIn(["gameParams","status"]))};var t},G=function(e){return function(t){t(Object(m.push)(e))}},R=n(50),D=n(30),B=n(31),F=n(34),U=n(32),z=n(33),J=n(39),W=n.n(J),H=n(87),K=n.n(H),V=n(52),Y=n.n(V),q=n(53),Q=n.n(q),X={"-1":{name:"PLAYING",value:"\ud83d\ude42"},0:{name:"LOOSER",value:"\ud83d\ude41"},1:{name:"WINNER",value:"\ud83d\ude0e"},notChecked:{name:"NOT CHECKED",value:"\u2b1c"},flag:{name:"FLAG",value:"\ud83d\udea9"},bang:{name:"BANG",value:"\ud83d\udca5"},bomb:{name:"BOMB",value:"\ud83d\udca3"},num_0:{name:"CLEAR",value:"\u23f9"},num_1:{name:"1",value:"1\ufe0f\u20e3"},num_2:{name:"2",value:"2\ufe0f\u20e3"},num_3:{name:"3",value:"3\ufe0f\u20e3"},num_4:{name:"4",value:"4\ufe0f\u20e3"},num_5:{name:"5",value:"5\ufe0f\u20e3"},num_6:{name:"6",value:"6\ufe0f\u20e3"},num_7:{name:"7",value:"7\ufe0f\u20e3"},num_8:{name:"8",value:"8\ufe0f\u20e3"}},Z=(n(106),Object(u.connect)(function(e,t){return{size:t.size,type:t.type}},{})(function(e){var t=e.size,n=e.type;return i.a.createElement("span",{className:"emoji emoji-".concat(n),style:{fontSize:"".concat(t,"pt")}},X[n].value)})),$=(n(108),function(e){var t=e.label,n=e.groupName,a=e.handleChange,r=e.values,s=e.current;return i.a.createElement("div",{className:"block ".concat(t)},i.a.createElement("div",{className:"label"},t),i.a.createElement(K.a,{className:"rg",name:t,value:s+"",onChange:function(e){return a(n,e.target.value)}},i.a.createElement(Y.a,{className:"row row-first",label:r[0],value:r[0]+"",control:i.a.createElement(Q.a,null)}),i.a.createElement(Y.a,{className:"row row-second",label:r[1],value:r[1]+"",control:i.a.createElement(Q.a,null)}),i.a.createElement(Y.a,{className:"row row-third",label:r[2],value:r[2]+"",control:i.a.createElement(Q.a,null)})))}),ee=function(e){var t=e.rowLength,n=e.colLength,a=e.mines,r=e.handleChange;return i.a.createElement("div",{className:"options"},i.a.createElement($,{label:"rows",groupName:"rowLength",handleChange:r,values:h.rows,current:t}),i.a.createElement($,{label:"cols",groupName:"colLength",handleChange:r,values:h.cols,current:n}),i.a.createElement($,{label:"mines",groupName:"mines",handleChange:r,values:h.mines,current:a}))},te=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(F.a)(this,Object(U.a)(t).call(this,e))).handleChange=function(e,t){n.setState(Object(R.a)({},e,t-0))},n.handleStart=function(){var e=n.props,t=e.initBoardParams,a=e.push;t(n.state),a("/game")},n.state=b,n}return Object(z.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",function(t){13===t.keyCode&&e.handleStart()},!1)}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("keydown",function(t){13===t.keyCode&&e.handleStart()},!1)}},{key:"render",value:function(){return i.a.createElement("div",{className:"content"},i.a.createElement(Z,{size:15,type:"bang"}),i.a.createElement(ee,Object.assign({},this.state,{handleChange:this.handleChange})),i.a.createElement(W.a,{className:"startBtn",onClick:this.handleStart},"Start game"))}}]),t}(c.Component),ne={initBoardParams:function(e){return function(t){t(L(e))}},push:G},ae=Object(u.connect)(function(){return{}},ne)(te),re=function(e){return e.game.getIn(["tiles"])},se=function(e){return e.game.getIn(["gameParams","status"])},ce=function(e){return re(e).reduce(function(e,t,n){var a={tilesIndex:n,tile:t.toJS()},r=t.getIn(["colIndex"]),s=e.getIn([r]);if(s){var c=s.push(a);return e.setIn([r],c)}var i=new E.List([a]);return e.push(i)},new E.List)},ie=(n(195),Object(u.connect)(function(e){return{status:se(e)}},{})(function(e){var t=e.status,n={};return 0===t&&(n.color="#f00"),1===t&&(n.color="#383"),i.a.createElement("div",{className:"header"},i.a.createElement(Z,{styles:15,type:t}),i.a.createElement("span",{className:"title",style:n},X[t].name))})),oe=(n(197),{flagToggle:function(e){return function(t){t(M(e))}},checkTile:function(e){return function(t){t(T(e)),t(_(e))}}}),ue=Object(u.connect)(function(e,t){return{index:t.index,type:function(e,t){var n=re(e).getIn([t]);return n.getIn(["isFlagged"])?n.getIn(["isMine"])&&0===e.game.getIn(["gameParams","status"])?"bomb":"flag":n.getIn(["isMine"])?0!==e.game.getIn(["gameParams","status"])?"notChecked":e.game.getIn(["gameParams","bangIndex"])===t?"bang":"bomb":n.getIn(["isChecked"])?"num_".concat(e.game.getIn(["tiles",t,"minesCount"])):"notChecked"}(e,t.index),isNotFlagged:!function(e,t){return re(e).getIn([t,"isFlagged"])}(e,t.index),isGameContinue:-1===se(e),isChecked:function(e,t){return re(e).getIn([t,"isChecked"])}(e,t.index)}},oe)(function(e){var t=e.index,n=e.type,a=e.isNotFlagged,r=e.isGameContinue,s=e.isChecked,c=e.flagToggle,o=e.checkTile,u={};!s&&r||(u.width="50px",u.height="50px",u.borderWidth="2px",u.cursor="default"),s&&(u.backgroundColor="#0078d7");return i.a.createElement("div",{className:"tile",onClick:function(){r&&a&&o(t)},onContextMenu:function(e){e.preventDefault(),r&&c(t)},style:u},i.a.createElement(Z,{size:26,type:n}))}),me=(n(199),Object(u.connect)(function(e){return{rows:ce(e)}},{})(function(e){var t=e.rows;return i.a.createElement("div",{className:"gameBoard"},t.map(function(e,t){return i.a.createElement("div",{key:t,className:"row"},e.map(function(e){return i.a.createElement(ue,{key:e.tilesIndex,index:e.tilesIndex})}))}))})),le=(n(201),Object(u.connect)(function(e){return{minesLeft:function(e){return e.params.mines-re(e).reduce(function(e,t){return t.getIn(["isFlagged"])?e+1:e},0)}(e)}},{})(function(e){var t=e.minesLeft;return i.a.createElement("div",{className:"minesLeft"},i.a.createElement("span",{className:"number"},t),i.a.createElement("span",{className:"text"},"flags left"))})),ge=(n(203),Object(u.connect)(function(e){return{moves:function(e){return e.game.getIn(["gameParams","moves"])}(e)}},{})(function(e){var t=e.moves;return i.a.createElement("div",{className:"movesCount"},i.a.createElement("span",{className:"number"},t),i.a.createElement("span",{className:"text"},"moves"))})),de=(n(205),function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(F.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).updateTimer=function(){n.timer||(n.timer=setInterval(function(){n.props.isGameContinue?n.forceUpdate():(clearInterval(n.timer),delete n.timer)},500))},n}return Object(z.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.updateTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"componentDidUpdate",value:function(e,t,n){this.updateTimer()}},{key:"render",value:function(){var e=Math.round((Date.now()-this.props.startTime)/1e3);return i.a.createElement("div",{className:"timer"},i.a.createElement("span",{className:"number"},e),i.a.createElement("span",{className:"text"},"seconds passed"))}}]),t}(c.Component)),fe=Object(u.connect)(function(e){return{startTime:function(e){return e.game.getIn(["gameParams","start"])}(e),isGameContinue:-1===se(e)}},{})(de),ve=(n(207),function(){return i.a.createElement("div",{className:"footer"},i.a.createElement(le,null),i.a.createElement(ge,null),i.a.createElement(fe,null))}),pe=(n(209),function(e){function t(){var e,n;Object(D.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(F.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).handleRestart=function(){n.props.startGame()},n.handleNewParams=function(){n.props.push("/")},n}return Object(z.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.startGame()}},{key:"render",value:function(){return i.a.createElement("div",{className:"gamePage"},i.a.createElement("div",{className:"rules"},"Mark mines and open other tiles"),i.a.createElement("div",{className:"game"},i.a.createElement(ie,null),i.a.createElement(me,null),i.a.createElement(ve,null)),i.a.createElement("div",{className:"controls"},i.a.createElement(W.a,{className:"restartBtn",onClick:this.handleRestart},"Restart"),i.a.createElement(W.a,{className:"newParamsBtn",onClick:this.handleNewParams},"New params")))}}]),t}(c.Component)),Ie={startGame:function(){return function(e){e(A())}},push:G},he=Object(u.connect)(function(){return{}},Ie)(pe),be=function(){var e=[{action:k.a,path:"/",component:ae,exact:!0},{action:k.a,path:"/game",component:he,exact:!0}],t=[{action:N.a,from:"/*",to:"/",exact:!1}];return e.concat(t)},Ee=Object(l.createMuiTheme)({typography:{useNextVariants:!0}}),Ce=(n(217),i.a.createElement(function(){return i.a.createElement(u.Provider,{store:x},i.a.createElement(m.ConnectedRouter,{history:v},i.a.createElement(l.MuiThemeProvider,{theme:Ee},i.a.createElement(O,{getUrls:be}))))},null)),xe=document.getElementById("root");Object(o.render)(Ce,xe)},89:function(e,t,n){e.exports=n(219)}},[[89,2,1]]]);
//# sourceMappingURL=main.35d9a245.chunk.js.map