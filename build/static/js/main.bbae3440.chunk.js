(window.webpackJsonpproject_chat_application=window.webpackJsonpproject_chat_application||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},29:function(e,t,a){e.exports=a(46)},35:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(26),l=a.n(c),o=a(5),i=a.n(o),s=a(11),m=a(14),u=(a(35),a(17));a(36),a(39);u.a.initializeApp({apiKey:"AIzaSyApTdea9zPEhbgdDTRwPdrhfdFtUyOZN4I",authDomain:"react-project-cd973.firebaseapp.com",projectId:"react-project-cd973",storageBucket:"react-project-cd973.appspot.com",messagingSenderId:"218501287920",appId:"1:218501287920:web:fe2d631a651484e0759735"});var d=u.a.firestore(),p=u.a.auth(),E=u.a.firestore.FieldValue.serverTimestamp,h=function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.location.origin+"/login",e.prev=1,e.next=4,p.signOut();case 4:document.location.href=t,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0.message);case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(){return e.apply(this,arguments)}}(),v=function(){return r.a.createElement("div",{className:"Navigation"},r.a.createElement(m.b,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement(m.b,{to:"/about"},r.a.createElement("p",null,"About")),r.a.createElement(m.b,{to:"/signup"},r.a.createElement("p",null,"Sign Up")),r.a.createElement(m.b,{to:"/login"},r.a.createElement("p",null,"Login")),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{className:"navBTN",onClick:h},"Logout")))};a(24);function g(){function e(){return(e=Object(s.a)(i.a.mark(function e(){var t,a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("email").value,a=document.getElementById("password").value,n=document.location.origin+"/chat",console.log(t,a),e.prev=4,e.next=7,p.signInWithEmailAndPassword(t,a);case 7:r=e.sent,console.log(r.user.email),document.location.href=n,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0.message),document.getElementById("error").innerHTML="<p>"+e.t0.message+"</p>";case 16:case"end":return e.stop()}},e,null,[[4,12]])}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("div",{className:"nav-holder"},r.a.createElement(v,null)),r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Sign In Here")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"sign-in-form"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",placeholder:"Email",id:"email"}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",placeholder:"Password",id:"password"}),r.a.createElement("div",{id:"error"}),r.a.createElement("button",{onClick:function(){return e.apply(this,arguments)}},"Enter Chat"))))}a(25);function f(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nav-holder"},r.a.createElement(v,null)),r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Welcome to the app")),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Login and start chatting!")))}a(45);function w(){var e=function(){var e=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d.collection("messages").orderBy("time","desc").onSnapshot(function(e){document.getElementById("messageBoard").innerHTML=null,e.docs.forEach(function(e){document.getElementById("messageBoard").innerHTML+="<p>"+e.data().author+": "+e.data().wrote+"</p>"})});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e();var t=function(){var t=Object(s.a)(i.a.mark(function t(){var a,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p.currentUser||(document.location.href=document.location.origin+"/login"),a=p.currentUser.email,n={wrote:document.getElementById("chatValue").value,author:a,time:E()},t.prev=3,t.next=6,d.collection("messages").add(n);case 6:d.collection("messages").orderBy("time"),document.getElementById("chatValue").value=null,e(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),console.log(t.t0);case 14:case"end":return t.stop()}},t,null,[[3,11]])}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"nav-holder"},r.a.createElement(v,null)),r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Welcome to the Chatroom")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{id:"messageBoard"}),r.a.createElement("div",{className:"controlCenter"},r.a.createElement("input",{type:"text",id:"chatValue",placeholder:"write a message..."}),r.a.createElement("button",{onClick:t},"Send"))))}function b(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nav-holder"},r.a.createElement(v,null)),r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"This is the about page")),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"This is the About page. This is a chat application that was created with react. It was pretty fun to build and I learned a ton along the way.")))}function y(){function e(){return(e=Object(s.a)(i.a.mark(function e(){var t,a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("email").value,a=document.getElementById("password").value,n=document.location.origin+"/chat",console.log(t,a),e.prev=4,e.next=7,p.createUserWithEmailAndPassword(t,a);case 7:r=e.sent,console.log(r.user.email),document.location.href=n,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0.message),document.getElementById("error").innerHTML="<p>"+e.t0.message+"</p>";case 16:case"end":return e.stop()}},e,null,[[4,12]])}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("div",{className:"nav-holder"},r.a.createElement(v,null)),r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Create An Account")),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"sign-in-form"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",placeholder:"Email",id:"email"}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",placeholder:"Password",id:"password"}),r.a.createElement("div",{id:"error"}),r.a.createElement("button",{onClick:function(){return e.apply(this,arguments)}},"Sign Up"))))}var N=a(12),I=function(){return r.a.createElement(m.a,null,r.a.createElement(N.a,{path:"/",exact:!0,component:f}),r.a.createElement(N.a,{path:"/login",component:g}),r.a.createElement(N.a,{path:"/chat",component:w}),r.a.createElement(N.a,{path:"/About",component:b}),r.a.createElement(N.a,{path:"/signup",component:y}))};l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.bbae3440.chunk.js.map