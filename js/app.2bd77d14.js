(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],i[o]&&d.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1311fd2c"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t),r=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;r.push([2,"chunk-vendors"]),n()})({0:function(t,e){},1:function(t,e){},2:function(t,e,n){t.exports=n("cd49")},"5c0b":function(t,e,n){"use strict";var a=n("6879"),i=n.n(a);i.a},6879:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("bb71");n("da64");a["a"].use(i["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},o=[],s={},l=s,c=(n("5c0b"),n("2877")),u=n("6544"),p=n.n(u),d=n("7496"),f=n("a523"),v=n("549c"),m=Object(c["a"])(l,r,o,!1,null,null,null),h=m.exports;p()(m,{VApp:d["a"],VContainer:f["a"],VContent:v["a"]});var b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("v-navigation-drawer",{attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return n("v-list-tile",{key:e.text,on:{click:function(t){}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)}),n("v-subheader",{staticClass:"mt-3 grey--text text--darken-1"},[t._v("SUBSCRIPTIONS")]),n("v-list",t._l(t.items2,function(e){return n("v-list-tile",{key:e.text,attrs:{avatar:""},on:{click:function(t){}}},[n("v-list-tile-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/men/"+e.picture+".jpg",alt:""}})]),n("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)}),1),n("v-list-tile",{staticClass:"mt-3",on:{click:function(t){}}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"grey darken-1"}},[t._v("add_circle_outline")])],1),n("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[t._v("Browse Channels")])],1),n("v-list-tile",{on:{click:function(t){}}},[n("v-list-tile-action",[n("v-icon",{attrs:{color:"grey darken-1"}},[t._v("settings")])],1),n("v-list-tile-title",{staticClass:"grey--text text--darken-1"},[t._v("Manage Subscriptions")])],1)],2)],1),n("v-toolbar",{attrs:{color:"red",dense:"",fixed:"","clipped-left":"",app:""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-icon",{staticClass:"mx-3"},[t._v("fa-youtube")]),n("v-toolbar-title",{staticClass:"mr-5 align-center"},[n("span",{staticClass:"title"},[t._v("Youtube")])]),n("v-spacer"),n("v-layout",{staticStyle:{"max-width":"650px"},attrs:{row:"","align-center":""}},[n("v-btn",{on:{click:function(e){return t.logout()}}},[t._v("ログアウト")]),n("v-text-field",{attrs:{placeholder:"Search...","single-line":"","append-icon":"search","append-icon-cb":function(){},color:"white","hide-details":""}})],1)],1),n("v-content",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{shrink:""}},[n("v-tooltip",{attrs:{right:""}},[n("v-btn",{attrs:{slot:"activator",icon:"",large:"",href:t.source,target:"_blank"},slot:"activator"},[n("v-icon",{attrs:{large:""}},[t._v("code")])],1),n("span",[t._v("Source")])],1)],1)],1)],1)],1)],1)},w=[],_=n("d225"),C=n("b0b4"),y=n("308d"),j=n("6bb5"),O=n("4e2b"),x=n("9ab4"),k=n("60a3"),S=n("b994"),P=n.n(S),E=n("6fc5"),V=n("2f62"),A=n("0e44");a["a"].use(V["a"]);var T=new V["a"].Store({plugins:[Object(A["a"])()]}),U=function(t){function e(){var t;return Object(_["a"])(this,e),t=Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments)),t.username="",t}return Object(O["a"])(e,t),Object(C["a"])(e,[{key:"SET_USERNAME",value:function(t){this.username=t}},{key:"GET_USERNAME",get:function(){return this.username}}]),e}(E["c"]);x["a"]([E["b"]],U.prototype,"SET_USERNAME",null),U=x["a"]([Object(E["a"])({dynamic:!0,store:T,name:"auth",namespaced:!0})],U);var L=Object(E["d"])(U),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"primary lighten-3",attrs:{clipped:t.clipped,"enable-resize-watcher":"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e){return n("v-list-group",{key:e.title,attrs:{value:e.active}},[n("v-list-tile",{staticClass:"yellow--text",attrs:{slot:"item",to:"#"==e.path?"":e.path,exact:e.exact,"active-class":"red--text"},slot:"item"},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.action))])],1),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),e.items.length>0?n("v-list-tile-action",[n("v-icon",[t._v("keyboard_arrow_down")])],1):t._e()],1)],1)}),1)],1)},q=[],I=function(t){function e(){var t;return Object(_["a"])(this,e),t=Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments)),t.drawer=!0,t.clipped=!1,t.items=[{action:"local_activity",title:"Attractions",path:"/",items:[]},{action:"restaurant",title:"Breakfast",path:"/breakfast",items:[]}],t}return Object(O["a"])(e,t),e}(k["b"]);I=x["a"]([k["a"]],I);var M=I,$=M,F=n("132d"),R=n("8860"),B=n("56b0"),D=n("ba95"),H=n("40fe"),J=n("5d23"),G=n("f774"),W=Object(c["a"])($,N,q,!1,null,null,null),z=W.exports;p()(W,{VIcon:F["a"],VList:R["a"],VListGroup:B["a"],VListTile:D["a"],VListTileAction:H["a"],VListTileContent:J["a"],VListTileTitle:J["b"],VNavigationDrawer:G["a"]});var K=function(t){function e(){var t;return Object(_["a"])(this,e),t=Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments)),t.username="",t.drawer=!0,t.items=[{icon:"trending_up",text:"Most Popular"},{icon:"subscriptions",text:"Subscriptions"},{icon:"history",text:"History"},{icon:"featured_play_list",text:"Playlists"},{icon:"watch_later",text:"Watch Later"}],t.items2=[{picture:28,text:"Joseph"},{picture:38,text:"Apple"},{picture:48,text:"Xbox Ahoy"},{picture:58,text:"Nokia"},{picture:78,text:"MKBHD"}],t.props={source:String},t}return Object(O["a"])(e,t),Object(C["a"])(e,[{key:"mounted",value:function(){this.username=L.GET_USERNAME,console.log(this.username)}},{key:"logout",value:function(){var t=this;S["Auth"].signOut().then(function(e){t.$router.push("/login")}).catch(function(t){console.log(t)})}}]),e}(k["b"]);K=x["a"]([Object(k["a"])({components:{sideBar:z}})],K);var Q=K,X=Q,Y=n("8336"),Z=n("0e8f"),tt=n("a722"),et=n("c954"),nt=n("9910"),at=n("e0c7"),it=n("2677"),rt=n("71d9"),ot=n("706c"),st=n("2a7f"),lt=n("3a2f"),ct=Object(c["a"])(X,g,w,!1,null,null,null),ut=ct.exports;p()(ct,{VBtn:Y["a"],VContainer:f["a"],VContent:v["a"],VFlex:Z["a"],VIcon:F["a"],VLayout:tt["a"],VList:R["a"],VListTile:D["a"],VListTileAction:H["a"],VListTileAvatar:et["a"],VListTileContent:J["a"],VListTileTitle:J["b"],VNavigationDrawer:G["a"],VSpacer:nt["a"],VSubheader:at["a"],VTextField:it["a"],VToolbar:rt["a"],VToolbarSideIcon:ot["a"],VToolbarTitle:st["a"],VTooltip:lt["a"]});var pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"column is-4 is-offset-4"},[n("LoginForm"),n("p",[n("router-link",{attrs:{to:"/sign_up"}},[t._v("新規登録")])],1),n("p",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)],1)])},dt=[],ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("form",{attrs:{id:"login"},on:{submit:function(e){return e.preventDefault(),t.login()}}},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",autofocus:"",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password",autofocus:"",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),n("button",{staticClass:"button is-block is-info is-large is-fullwidth"},[t._v("Login")])])])},vt=[],mt=function(t){function e(){var t;return Object(_["a"])(this,e),t=Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments)),t.email="",t.password="",t}return Object(O["a"])(e,t),Object(C["a"])(e,[{key:"login",value:function(){var t={email:this.email,password:this.password};S["Auth"].signIn(t.email,t.password).then(function(t){alert("サインインに成功しました"),Zt.push("/")}).catch(function(t){alert("サインインに失敗しました")})}}]),e}(k["b"]);mt=x["a"]([k["a"]],mt);var ht=mt,bt=ht,gt=Object(c["a"])(bt,ft,vt,!1,null,null,null),wt=gt.exports,_t=function(t){function e(){return Object(_["a"])(this,e),Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments))}return Object(O["a"])(e,t),e}(k["b"]);_t=x["a"]([Object(k["a"])({components:{LoginForm:wt}})],_t);var Ct=_t,yt=Ct,jt=Object(c["a"])(yt,pt,dt,!1,null,null,null),Ot=jt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"column is-4 is-offset-4"},[n("SignUpForm"),n("p",[n("router-link",{attrs:{to:"login"}},[t._v("ログイン")])],1),n("p",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)],1)])},kt=[],St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("form",{attrs:{id:"sign_up"},on:{submit:function(e){return e.preventDefault(),t.signUp()}}},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",autofocus:"",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password",autofocus:"",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"input",attrs:{type:"password",placeholder:"Password Confirm",autofocus:"",required:""},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}})])]),n("button",{staticClass:"button is-block is-info is-large is-fullwidth"},[t._v("SignUp")])])])},Pt=[],Et=function(t){function e(){var t;return Object(_["a"])(this,e),t=Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments)),t.email="",t.password="",t.passwordConfirm="",t}return Object(O["a"])(e,t),Object(C["a"])(e,[{key:"signUp",value:function(){var t=this;if(this.password&&this.passwordConfirm&&this.password==this.passwordConfirm){var e={username:this.email,password:this.password,attributes:{}};S["Auth"].signUp(e).then(function(e){t.$router.push("sign_up/confirm")}).catch(function(t){alert("ユーザー登録に失敗しました")})}}}]),e}(k["b"]);Et=x["a"]([k["a"]],Et);var Vt=Et,At=Vt,Tt=Object(c["a"])(At,St,Pt,!1,null,null,null),Ut=Tt.exports,Lt=function(t){function e(){return Object(_["a"])(this,e),Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments))}return Object(O["a"])(e,t),e}(k["b"]);Lt=x["a"]([Object(k["a"])({components:{SignUpForm:Ut}})],Lt);var Nt=Lt,qt=Nt,It=Object(c["a"])(qt,xt,kt,!1,null,null,null),Mt=It.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"column is-4 is-offset-4"},[n("SignUpConfirmForm"),n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1)])},Ft=[],Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("form",{attrs:{id:"confirm"},on:{submit:function(e){return e.preventDefault(),t.confirm()}}},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{placeholder:"Email",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmationCode,expression:"confirmationCode"}],staticClass:"input",attrs:{placeholder:"Confirmation Code",autofocus:""},domProps:{value:t.confirmationCode},on:{input:function(e){e.target.composing||(t.confirmationCode=e.target.value)}}})])]),n("button",{staticClass:"button is-block is-info is-large is-fullwidth"},[t._v("Confirm")])])])},Bt=[],Dt=function(t){function e(){var t;return Object(_["a"])(this,e),t=Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments)),t.email="",t.confirmationCode="",t}return Object(O["a"])(e,t),Object(C["a"])(e,[{key:"confirm",value:function(){var t={email:this.email,code:this.confirmationCode};S["Auth"].confirmSignUp(t.email,t.code).then(function(t){console.log(t),alert("ユーザ登録が完了しました。"),Zt.push("/login")}).catch(function(t){alert("検証に失敗しました")})}}]),e}(k["b"]);Dt=x["a"]([k["a"]],Dt);var Ht=Dt,Jt=Ht,Gt=Object(c["a"])(Jt,Rt,Bt,!1,null,null,null),Wt=Gt.exports,zt=function(t){function e(){return Object(_["a"])(this,e),Object(y["a"])(this,Object(j["a"])(e).apply(this,arguments))}return Object(O["a"])(e,t),e}(k["b"]);zt=x["a"]([Object(k["a"])({components:{SignUpConfirmForm:Wt}})],zt);var Kt=zt,Qt=Kt,Xt=Object(c["a"])(Qt,$t,Ft,!1,null,null,null),Yt=Xt.exports;a["a"].use(b["a"]);var Zt=new b["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:ut,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"login",component:Ot,meta:{requiresUnAuth:!0}},{path:"/sign_up",name:"sign_up",component:Mt,meta:{requiresUnAuth:!0}},{path:"/sign_up/confirm",name:"confirm",component:Yt,meta:{requiresUnAuth:!0}}]}),te=n("9483");Object(te["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ee={IdentityPoolId:"ap-northeast-1:2e1e5fdd-1f77-41da-8303-ef0992d0b6d6",Region:"ap-northeast-1",UserPoolId:"ap-northeast-1_cJ0QWOq6L",ClientId:"1nup9ijrahq7rd45budd1ubel0"},ne=(n("96cf"),n("3b8d")),ae=function(){var t=Object(ne["a"])(regeneratorRuntime.mark(function t(e,n,a){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("aaaa"),t.prev=1,t.next=4,S["Auth"].currentAuthenticatedUser();case 4:if(i=t.sent,console.log(i),L.SET_USERNAME(i.username),console.log(i.username),!e.matched.some(function(t){return t.meta.requiresUnAuth})){t.next=12;break}return console.log("ログイン画面いけない"),a({path:"/",query:{redirect:e.fullPath}}),t.abrupt("return");case 12:t.next=20;break;case 14:if(t.prev=14,t.t0=t["catch"](1),!e.matched.some(function(t){return t.meta.requiresAuth})){t.next=20;break}return console.log("ログインしろよ"),a({path:"/login",query:{redirect:e.fullPath}}),t.abrupt("return");case 20:console.log("次へ"),a();case 22:case"end":return t.stop()}},t,null,[[1,14]])}));return function(e,n,a){return t.apply(this,arguments)}}();a["a"].config.productionTip=!1,Zt.beforeEach(ae),new a["a"]({router:Zt,store:T,render:function(t){return t(h)}}).$mount("#app"),P.a.configure({Auth:{identityPoolId:ee.IdentityPoolId,region:ee.Region,userPoolId:ee.UserPoolId,userPoolWebClientId:ee.ClientId}})}});
//# sourceMappingURL=app.2bd77d14.js.map