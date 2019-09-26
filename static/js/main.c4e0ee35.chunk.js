(window["webpackJsonptrello-extender"]=window["webpackJsonptrello-extender"]||[]).push([[0],{229:function(e,t,a){e.exports=a(491)},234:function(e,t,a){},490:function(e,t,a){},491:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(46),o=a.n(l),c=(a(234),a(14)),i=a(34),s=a(62),m=a(189),u=a.n(m);function d(){var e=Object(n.useState)([]),t=Object(s.a)(e,2);t[0],t[1];return Object(n.useEffect)(function(){u.a.get().then()}),r.a.createElement("div",{className:"profileCard",style:p},r.a.createElement("h2",null,"This is a profile card"),r.a.createElement("img",{src:"https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png",alt:"profile pic"}),r.a.createElement("h3",null,"Name"),r.a.createElement("p",null,"jobdesc"))}var p={color:"#000",textDecoration:"none",float:"left",padding:"30px",margin:"20px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)",maxWidth:"300px",textAlign:"center",position:"absolute",display:"block",top:"110px",left:"220px"};var E=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(d,null))};var b=function(){return r.a.createElement("div",{className:"Leaderboard"},r.a.createElement("h4",null,"[Under construction]"))},f=a(190),g=a.n(f),v=a(13),y=a(24),h=function(e){var t=e.items;return t.items.forEach(function(e){e.TotalCards=e.totalItems,e.ScrumPoints=e.totalDonePoint,e.BurnDownPoints=e.totalPoint-e.totalDonePoint,e.readableDate=new Date(e.date).toUTCString().split("2019",1)[0]}),r.a.createElement("div",null,r.a.createElement("h3",null,"Tasks"),r.a.createElement(y.d,{width:1e3,height:600,data:t.items,margin:{top:20,right:50,left:20,bottom:20}},r.a.createElement(y.a,{strokeDasharray:"3 3"}),r.a.createElement(y.f,{dataKey:"readableDate"}),r.a.createElement(y.g,null),r.a.createElement(y.e,null),r.a.createElement(y.b,null),r.a.createElement(y.c,{type:"monotone",dataKey:"BurnDownPoints",stroke:"#ff9ff3",activeDot:{r:3}}),r.a.createElement(y.c,{type:"monotone",dataKey:"ScrumPoints",stroke:"#12CBC4",activeDot:{r:3}}),r.a.createElement(y.c,{type:"monotone",dataKey:"TotalCards",stroke:"#5758BB",activeDot:{r:3}})))},D=function(e){var t,a=Object(v.useSuspenseQuery)({method:"GET",endpoint:"board/qDAFPals/burndownchartinfo/?startDate="+(t=e).startDate.toISOString().split("T",1)[0]+"&endDate="+t.endDate.toISOString().split("T",1)[0],headers:{Authorization:"Basic "+btoa("test:test")}}),n=a.loading,l=a.payload,o=a.error,c=a.query;return r.a.createElement("div",null,r.a.createElement(h,{loading:n,error:o,items:l,onReload:c}),r.a.createElement("h3",null,"test 123"))};a(486);Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t};var k={float:"right",margin:"10"},w=function(){var e=Object(n.useState)(new Date),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)((new Date).addDays(14)),c=Object(s.a)(o,1)[0];return r.a.createElement("div",{style:k},r.a.createElement(g.a,{selected:a,onChange:function(e){return l(e)},selectsStart:!0,startDate:a,endDate:c,filterDate:function(e){var t=e.getDay();return 0!==t&&6!==t},placeholderText:"Select a weekday"}),r.a.createElement(D,{endDate:c,startDate:a}))};var S=function(){return r.a.createElement("div",{className:"Team"},r.a.createElement(w,null),r.a.createElement("h3",null,"Team page"))},x=function(e){var t=e.size;return console.log(t),r.a.createElement("div",null,r.a.createElement("h4",null," ",t," "))},O=function(){var e=Object(v.useSuspenseQuery)({method:"GET",endpoint:"board/qDAFPals/members",headers:{Authorization:"Basic "+btoa("test:test")},key:"62f0297bf821e374ae28a1fbab5ef9fb",token:"dd1d9766b7c5be875fe3e73c590bf3d53237f383b719311182c1e76ba9ce0da5"}),t=e.loading,a=e.payload,n=e.error,l=e.query;return r.a.createElement("div",null,r.a.createElement(x,{loading:t,error:n,items:a,onReload:l}))};function j(){return r.a.createElement("div",null,r.a.createElement("h4",null,"[Constructing some leg muscles...]"),r.a.createElement(O,null))}var C=a(54),L=a.n(C),I=a(85),P=function(e){var t=e.loading,a=e.error,l=e.settings,o=Object(n.useState)(l.key),c=Object(n.useState)(l.token),i=Object(n.useState)(l.boards);return l.key=o[0],l.token=c[0],l.boards=i[0],r.a.createElement("div",{className:"sync-settings"},t&&r.a.createElement("p",null,"Loading Data"),a&&r.a.createElement("p",null,"ERROR!"),r.a.createElement("form",null,r.a.createElement("h2",null,"Sync Settings"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"key"},"Trello Key"),r.a.createElement("input",{type:"text",name:"key",value:o[0],onChange:function(e){return o[1](e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"token"},"Trello OAuth Token"),r.a.createElement("input",{type:"text",name:"token",value:c[0],onChange:function(e){return c[1](e.target.value)}})),i[0]&&i[0].map(function(e,t){return r.a.createElement("div",{className:"sync-settings-board"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"id-"+t},"Board ID"),r.a.createElement("input",{type:"text",className:"form-control",name:"id-"+t,value:e.id})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"doneListId-"+t},"Done list ID"),r.a.createElement("input",{type:"text",className:"form-control",name:"doneListId-"+t,value:e.doneListId})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"doingListId-"+t},"Doing list ID"),r.a.createElement("input",{type:"text",className:"form-control",name:"doingListId-"+t,value:e.doingListId})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:t+"testingListId"},"Testing list ID"),r.a.createElement("input",{type:"text",className:"form-control",name:t+"testingListId",value:e.testingListId})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:t+"reviewingListId"},"Reviewing list ID"),r.a.createElement("input",{type:"text",className:"form-control",name:t+"reviewingListId",value:e.reviewingListId})))})),r.a.createElement(U,null)))},T="http://trelloextension.eu-west-1.elasticbeanstalk.com",N=function(e){var t=e.loading,a=(e.error,e.onSubmit);return r.a.createElement("div",null,t&&r.a.createElement("p",null,"Saving"),r.a.createElement("button",null,"Back"),r.a.createElement("button",{onClick:function(e){e.preventDefault(),a()}},"Submit"))},B={method:"GET",endpoint:T+"/config/getSyncInfo",headers:{Authorization:"Basic "+btoa("test:test")}},A=function(){var e=Object(v.useQuery)(B),t=e.loading,a=e.payload,n=e.error;if(a)return console.log(a),r.a.createElement(P,{loading:t,error:n,settings:a});return r.a.createElement("p",null,"Loading")},F=function(e){return{method:"PUT",endpoint:T+"/config/saveSync",body:e}},U=function(){var e=Object(v.useMutation)(F),t=e.loading,a=(e.payload,e.mutate),n=e.error,l=(e.reset,e.abort,function(){var e=Object(I.a)(L.a.mark(function e(t){var r;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:r=e.sent,r.error&&console.error(n),console.log("Saved");case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());return r.a.createElement(N,{loading:t,error:n,onSubmit:l})};var R=function(){return r.a.createElement("div",{className:"settings"},r.a.createElement("h1",null,"Settings"),r.a.createElement(A,null))};function q(){var e=document.querySelector(".narrowLinks");"block"===e.style.display?e.style.display="none":e.style.display="block"}var K={height:"50px",width:"100%",backgroundColor:"#21A2DC"},z={backgroundColor:"#f9f9f9",color:"#6f7982",padding:"20px",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.2)"},W={color:"#6f7982",textDecoration:"none",textAlign:"center",padding:"10px"},G={color:"#6f7982",textDecoration:"none",float:"left"},Q=function(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"navNarrow"},r.a.createElement("i",{onClick:q,className:"fa fa-bars",style:z}),r.a.createElement("div",{className:"narrowLinks"},r.a.createElement(c.b,{to:"/Personal",style:W}," Personal "),r.a.createElement(c.b,{to:"/Team",style:W}," Team"),r.a.createElement(c.b,{to:"/DailyStandUp",style:W}," StandUp "),r.a.createElement(c.b,{to:"/Leaderboard",style:W}," Leaderboard "),r.a.createElement(c.b,{to:"/Settings",style:W}," Settings "))),r.a.createElement("div",{className:"navWide"},r.a.createElement("div",{style:z},r.a.createElement(c.b,{to:"/",onClick:q},r.a.createElement("img",{src:"./Logo.jpg",style:G})),r.a.createElement(c.b,{to:"/",onClick:q,style:W}," Personal "),"|",r.a.createElement(c.b,{to:"/Team",onClick:q,style:W}," Team "),"|",r.a.createElement(c.b,{to:"/DailyStandUp",onClick:q,style:W}," StandUp "),"|",r.a.createElement(c.b,{to:"/Leaderboard",onClick:q,style:W}," Leaderboard "),"|",r.a.createElement(c.b,{to:"/Settings",onClick:q,style:W}," Settings ")),r.a.createElement("div",{className:"blueRect",style:K}))),r.a.createElement(i.a,{exact:!0,path:"/",component:E}),r.a.createElement(i.a,{path:"/Leaderboard",component:b}),r.a.createElement(i.a,{path:"Team",component:S}),r.a.createElement(i.a,{path:"/DailyStandUp",component:j}),r.a.createElement(i.a,{exact:!0,path:"/Settings",component:R}))},J=(a(490),a(202));function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach(function(t){Object(J.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var $,_=Object(v.createClient)({requestInterceptors:[($="https://trelloextension.eu-west-1.elasticbeanstalk.com/",function(e){return function(){var e=Object(I.a)(L.a.mark(function e(t){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",M({},t,{endpoint:"".concat($).concat(t.endpoint)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()})]});var V=function(){return r.a.createElement(v.ClientContextProvider,{client:_},r.a.createElement(n.Suspense,{fallback:r.a.createElement("span",null,"Loading")},r.a.createElement("div",{className:"App"},r.a.createElement(Q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=Object(v.createClient)({});o.a.render(r.a.createElement(v.ClientContextProvider,{client:X},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[229,1,2]]]);
//# sourceMappingURL=main.c4e0ee35.chunk.js.map