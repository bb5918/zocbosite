(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(e,t,a){e.exports=a(532)},278:function(e,t,a){},527:function(e,t,a){},528:function(e,t,a){},532:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),m=(a(278),a(535)),o=a(58),i=a(175),s=a.n(i),u=a(243),d=a(17),p=a.n(d),E="login_user",b="register_user",f="auth_user",h="logout_user",v="/api/users";var g=a(19),y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(l){var c=Object(g.c)(function(e){return e.user}),m=Object(g.b)();return Object(n.useEffect)(function(){m(function(){var e=p.a.get("".concat(v,"/auth")).then(function(e){return e.data});return{type:f,payload:e}}()).then(function(){var e=Object(u.a)(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!n.payload.isAuth;case 2:if(!e.sent){e.next=6;break}t&&l.history.push("/register_login"),e.next=7;break;case 6:a&&!n.payload.isAdmin?l.history.push("/"):!1===t&&l.history.push("/");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},[m,l.history,c.googleAuth]),r.a.createElement(e,Object.assign({},l,{user:c}))}},O=a(14),w=a(539),x=a(40),I=a(536),j=a(84),C=w.a.Title;var S=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){p.a.get("/api/exam/getExams").then(function(e){e.data.success?(console.log(e.data.exams),l(e.data.exams)):alert("Failed to get Exams")})},[]);var c=a.map(function(e,t){return r.a.createElement(x.a,{lg:6,md:8,xs:24},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(I.a,{title:e.subject,extra:r.a.createElement("a",{href:"/exam/".concat(e._id)},"More"),style:{width:250}},r.a.createElement("p",null,e.professor," \uad50\uc218\ub2d8"),r.a.createElement("p",null,e.level,"\ud559\ub144"),r.a.createElement("p",null,e.char,"\ucc28"))),r.a.createElement("br",null))});return r.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},r.a.createElement(C,{level:2}," \uacfc\ubaa9 \ubaa9\ub85d "),r.a.createElement("hr",null),r.a.createElement(j.a,{gutter:16},c))},k=a(135),_=a(39),P=a(538),F=a(543),T=a(12),N=a(540),D=a(184),L=w.a.Title;var q=Object(o.f)(function(e){var t=Object(g.b)(),a=!!localStorage.getItem("rememberMe"),l=Object(n.useState)(""),c=Object(O.a)(l,2),m=c[0],o=c[1],i=Object(n.useState)(a),s=Object(O.a)(i,2),u=s[0],d=s[1],b=function(){d(!u)};return r.a.createElement(k.a,{initialValues:{email:"",password:""},validationSchema:_.object().shape({email:_.string().email("Email is invalid").required("Email is required"),password:_.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout(function(){var n={email:a.email,password:a.password};t(function(e){var t=p.a.post("".concat(v,"/login"),e).then(function(e){return e.data});return{type:E,payload:t}}(n)).then(function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===u?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):o("Check out your Account or Password again")}).catch(function(e){o("Check out your Account or Password again"),setTimeout(function(){o("")},3e3)}),r(!1)},500)}},function(e){var t=e.values,a=e.touched,n=e.errors,l=e.isSubmitting,c=e.handleChange,o=e.handleBlur,i=e.handleSubmit;return r.a.createElement("div",{className:"app"},r.a.createElement(L,{level:2},"\ub85c\uadf8\uc778"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:i,style:{width:"350px"}},r.a.createElement(P.a.Item,{required:!0},r.a.createElement(F.a,{id:"email",prefix:r.a.createElement(T.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",type:"email",value:t.email,onChange:c,onBlur:o,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(P.a.Item,{required:!0},r.a.createElement(F.a,{id:"password",prefix:r.a.createElement(T.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",type:"password",value:t.password,onChange:c,onBlur:o,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),m&&r.a.createElement("label",null,r.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},m)),r.a.createElement(P.a.Item,null,r.a.createElement(N.a,{id:"rememberMe",onChange:b,checked:u},"\uc544\uc774\ub514 \uae30\uc5b5\ud558\uae30"),r.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"\ube44\ubc00\ubc88\ud638 \ucc3e\uae30"),r.a.createElement("div",null,r.a.createElement(D.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{minWidth:"100%"},disabled:l,onSubmit:i},"\ub85c\uadf8\uc778")),r.a.createElement("a",{href:"/register"},"\ud68c\uc6d0\uac00\uc785"))))})}),A=a(98),B=a.n(A),K={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},R={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var W=function(e){var t=Object(g.b)();return r.a.createElement(k.a,{initialValues:{email:"",name:"",password:"",confirmPassword:""},validationSchema:_.object().shape({name:_.string().required("Name is required"),email:_.string().email("Email is invalid").required("Email is required"),password:_.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:_.string().oneOf([_.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,n){var r=n.setSubmitting;setTimeout(function(){var n={email:a.email,password:a.password,name:a.name,image:"http://gravatar.com/avatar/".concat(B()().unix(),"?d=identicon")};t(function(e){var t=p.a.post("".concat(v,"/register"),e).then(function(e){return e.data});return{type:b,payload:t}}(n)).then(function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)}),r(!1)},500)}},function(e){var t=e.values,a=e.touched,n=e.errors,l=e.isSubmitting,c=e.handleChange,m=e.handleBlur,o=e.handleSubmit;return r.a.createElement("div",{className:"app"},r.a.createElement("h2",null,"\ud68c\uc6d0\uac00\uc785"),r.a.createElement("br",null),r.a.createElement(P.a,Object.assign({style:{minWidth:"375px"}},K,{onSubmit:o}),r.a.createElement(P.a.Item,{required:!0,label:"\uc774\ub984"},r.a.createElement(F.a,{id:"name",placeholder:"\uc774\ub984",type:"text",value:t.name,onChange:c,onBlur:m,className:n.name&&a.name?"text-input error":"text-input"}),n.name&&a.name&&r.a.createElement("div",{className:"input-feedback"},n.name)),r.a.createElement(P.a.Item,{required:!0,label:"\uc774\uba54\uc77c",hasFeedback:!0,validateStatus:n.email&&a.email?"error":"success"},r.a.createElement(F.a,{id:"email",placeholder:"\uc774\uba54\uc77c",type:"email",value:t.email,onChange:c,onBlur:m,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email)),r.a.createElement(P.a.Item,{required:!0,label:"\ube44\ubc00\ubc88\ud638",hasFeedback:!0,validateStatus:n.password&&a.password?"error":"success"},r.a.createElement(F.a,{id:"password",placeholder:"\ube44\ubc00\ubc88\ud638",type:"password",value:t.password,onChange:c,onBlur:m,className:n.password&&a.password?"text-input error":"text-input"}),n.password&&a.password&&r.a.createElement("div",{className:"input-feedback"},n.password)),r.a.createElement(P.a.Item,{required:!0,label:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",hasFeedback:!0},r.a.createElement(F.a,{id:"confirmPassword",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",type:"password",value:t.confirmPassword,onChange:c,onBlur:m,className:n.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),n.confirmPassword&&a.confirmPassword&&r.a.createElement("div",{className:"input-feedback"},n.confirmPassword)),r.a.createElement(P.a.Item,R,r.a.createElement(D.a,{onClick:o,type:"primary",disabled:l},"\ud68c\uc6d0\uac00\uc785"))))})},z=a(541),M=a(36);var X=Object(o.f)(function(e){var t=Object(g.c)(function(e){return e.user});return t.userData&&!t.userData.isAuth?r.a.createElement(z.a,{mode:e.mode},r.a.createElement(z.a.Item,{key:"mail"},r.a.createElement(M.b,{to:"/login"},"\ub85c\uadf8\uc778")),r.a.createElement(z.a.Item,{key:"app"},r.a.createElement(M.b,{to:"/register"},"\ud68c\uc6d0\uac00\uc785"))):r.a.createElement(z.a,{mode:e.mode},r.a.createElement(z.a.Item,{key:"exam"},r.a.createElement(M.b,{to:"/exam"},"\uc871\ubcf4")),r.a.createElement(z.a.Item,{key:"create"},r.a.createElement(M.b,{to:"/exam/upload"},"\uacfc\ubaa9 \uc62c\ub9ac\uae30")),r.a.createElement(z.a.Item,{key:"logout"},r.a.createElement("a",{onClick:function(){p.a.get("".concat(v,"/logout")).then(function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")})}},"\ub85c\uadf8\uc544\uc6c3")))}),V=a(542);a(527);var U=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],l=t[1];return r.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"menu__logo"},r.a.createElement("a",{href:"/"},"\ub85c\uace0")),r.a.createElement("div",{className:"menu__container"},r.a.createElement("div",{className:"menu_rigth"},r.a.createElement(X,{mode:"horizontal"})),r.a.createElement(D.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},r.a.createElement(T.a,{type:"align-right"})),r.a.createElement(V.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:a},r.a.createElement(X,{mode:"inline"}))))};var J=function(){return r.a.createElement("div",{style:{height:"80px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"1rem"}},r.a.createElement("p",null," FOOTER "))},H=w.a.Title,$=F.a.TextArea,G=[{value:1,label:"1\ucc28"},{value:2,label:"2\ucc28"},{value:3,label:"3\ucc28"},{value:4,label:"4\ucc28"},{value:5,label:"5\ucc28"},{value:6,label:"6\ucc28"},{value:7,label:"7\ucc28"},{value:8,label:"1\ud559\uae30"},{value:9,label:"2\ud559\uae30"},{value:10,label:"\uc911\uac04\uace0\uc0ac"},{value:11,label:"\uae30\ub9d0\uace0\uc0ac"}],Q=[{value:1,label:"1\ud559\ub144"},{value:2,label:"2\ud559\ub144"},{value:3,label:"3\ud559\ub144"},{value:4,label:"4\ud559\ub144"}];var Y=function(e){var t=Object(g.c)(function(e){return e.user}),a=Object(n.useState)(""),l=Object(O.a)(a,2),c=l[0],m=l[1],o=Object(n.useState)(""),i=Object(O.a)(o,2),s=i[0],u=i[1],d=Object(n.useState)(""),E=Object(O.a)(d,2),b=E[0],f=E[1],h=Object(n.useState)(1),v=Object(O.a)(h,2),y=v[0],w=v[1],x=Object(n.useState)(1),I=Object(O.a)(x,2),j=I[0],C=I[1],S=function(a){if(a.preventDefault(),t.userData&&!t.userData.isAuth)return alert("Please Log in First");var n={writer:t.userData._id,subject:c,professor:s,description:b,char:y,level:j};p.a.post("/api/exam/uploadExam",n).then(function(t){t.data.success?(alert("exam Uploaded Successfully"),e.history.push("/")):alert("Failed to upload exam")})};return r.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},r.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},r.a.createElement(H,{level:2},"\uacfc\ubaa9 \uc5c5\ub85c\ub4dc")),r.a.createElement(P.a,{onSubmit:S},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\uacfc\ubaa9"),r.a.createElement(F.a,{onChange:function(e){m(e.currentTarget.value)},value:c}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\uad50\uc218"),r.a.createElement(F.a,{onChange:function(e){console.log(e.currentTarget.value),u(e.currentTarget.value)},value:s}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\uc124\uba85"),r.a.createElement($,{onChange:function(e){f(e.currentTarget.value)},value:b}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(e){w(e.currentTarget.value)}},G.map(function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.label)})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(e){C(e.currentTarget.value)}},Q.map(function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.label)})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(D.a,{type:"primary",size:"large",onClick:S},"\uc81c\ucd9c")))},Z=a(544);var ee=function(e){return r.a.createElement("div",null,e.images.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{style:{width:"50%"},src:"https://sjogbosite.herokuapp.com/".concat(e),alt:"img"}))}))};a(528);var te=function(e){var t=e.match.params.examId,a=Object(n.useState)([]),l=Object(O.a)(a,2),c=l[0],m=l[1],o=Object(n.useState)([]),i=Object(O.a)(o,2),s=i[0],u=i[1],d={examId:t},E=Object(n.useState)(!1),b=Object(O.a)(E,2),f=b[0],h=b[1],v=function(){h(!0)},g=function(){h(!1)};Object(n.useEffect)(function(){p.a.post("/api/exam/getExam",d).then(function(e){e.data.success?(console.log(e.data.exam),m(e.data.exam)):alert("Failed to get exam Info")}),p.a.post("/api/problem/getProblems",d).then(function(e){e.data.success?(console.log("response.data.problems",e.data.problems),u(e.data.problems)):alert("Failed to get problem")})},[]);var y=s.map(function(e,a){return r.a.createElement("div",{style:{position:"relative"},key:a},r.a.createElement(I.a,null,r.a.createElement("p",{id:"p_wrap"},e._id,e.content),r.a.createElement(ee,{images:e.images}),r.a.createElement("br",null),r.a.createElement("a",{href:"/exam/".concat(t,"/").concat(e._id)},r.a.createElement(D.a,null,"\ub313\uae00")),r.a.createElement(D.a,{type:"primary",onClick:v,key:e._id},"Open"),r.a.createElement(V.a,{key:e._id,title:"Basic Drawer",placement:"right",closable:!1,onClose:g,visible:f,getContainer:!1,style:{position:"absolute"}},e._id)))});return c.writer?r.a.createElement("div",null,r.a.createElement("div",{className:"site-card-border-less-wrapper"},r.a.createElement(I.a,{title:"\uac15\uc758 \uc815\ubcf4",bordered:!0},r.a.createElement(Z.a,null,r.a.createElement(Z.a.Item,{label:"\uac15\uc758"},c.subject),r.a.createElement(Z.a.Item,{label:"\uac15\uc0ac"},c.professor," \uad50\uc218\ub2d8"),r.a.createElement(Z.a.Item,{label:"\ud559\ub144"},c.level,"\ud559\ub144"),r.a.createElement(Z.a.Item,{label:"\ucc28\uc2dc"},c.char,"\ucc28(\ud559\uae30)"),r.a.createElement(Z.a.Item,{label:"\uc124\uba85"},c.description)))),r.a.createElement(D.a,null,r.a.createElement("a",{href:"".concat(e.match.url,"/upload")},"\ubb38\uc81c \uc62c\ub9ac\uae30")),r.a.createElement("div",null,y)):r.a.createElement("div",null,"Loading...")},ae=a(545),ne=a(260),re=a(261),le=a(268),ce=a(262),me=a(270),oe=z.a.SubMenu,ie=function(e){function t(){var e,a;Object(ne.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(le.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).rootSubmenuKeys=["1","2","3","4"],a.state={openKeys:["1"]},a.onOpenChange=function(e){var t=e.find(function(e){return-1===a.state.openKeys.indexOf(e)});-1===a.rootSubmenuKeys.indexOf(t)?a.setState({openKeys:e}):a.setState({openKeys:t?[t]:[]})},a}return Object(me.a)(t,e),Object(re.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z.a,{mode:"inline",openKeys:this.state.openKeys,onOpenChange:this.onOpenChange,style:{width:256}},r.a.createElement(oe,{key:"1",title:"1\ud559\ub144"},r.a.createElement(oe,{title:"\uc0dd\ud654\ud559"},r.a.createElement(oe,{title:"\uc774\ud56d \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,r.a.createElement("a",{href:"/exam/5f05a4bd631b145e203d5cc5"},"1\ucc28")),r.a.createElement(z.a.Item,null,"2\ucc28"),r.a.createElement(z.a.Item,null,"3\ucc28"),r.a.createElement(z.a.Item,null,"4\ucc28"),r.a.createElement(z.a.Item,null,"5\ucc28")),r.a.createElement(oe,{title:"\uc870\uc81c\uc5f4 \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,r.a.createElement("a",{href:"/exam/5f05a786f101dc3fd881ba9b"},"1\ucc28")),r.a.createElement(z.a.Item,null,"2\ucc28"),r.a.createElement(z.a.Item,null,"3\ucc28"))),r.a.createElement(oe,{title:"\uc0dd\ub9ac\ud559"},r.a.createElement(oe,{title:"\ud55c\ud638\uc7ac \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"),r.a.createElement(z.a.Item,null,"2\ucc28"),r.a.createElement(z.a.Item,null,"3\ucc28"),r.a.createElement(z.a.Item,null,"4\ucc28"),r.a.createElement(z.a.Item,null,"5\ucc28")),r.a.createElement(oe,{title:"\uc774\uc7a5\ud5cc \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"),r.a.createElement(z.a.Item,null,"2\ucc28"),r.a.createElement(z.a.Item,null,"3\ucc28"))),r.a.createElement(oe,{title:"\ubc1c\uc0dd\ud559"},r.a.createElement(oe,{title:"\ud55c\ud638\uc7ac \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"),r.a.createElement(z.a.Item,null,"2\ucc28"),r.a.createElement(z.a.Item,null,"3\ucc28"))),r.a.createElement(oe,{title:"\ud574\ubd80\ud559"},r.a.createElement(oe,{title:"\uae30\ubb34\ub77c \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"),r.a.createElement(z.a.Item,null,"2\ucc28")),r.a.createElement(oe,{title:"\ub0a8\uc0c1\uc12d \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28")),r.a.createElement(oe,{title:"\ud669\uc778\uad6c \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"))),r.a.createElement(oe,{title:"\uc870\uc9c1\ud559"},r.a.createElement(oe,{title:"\uc724\uc5ec\uc131 \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"),r.a.createElement(z.a.Item,null,"2\ucc28"),r.a.createElement(z.a.Item,null,"3\ucc28"),r.a.createElement(z.a.Item,null,"4\ucc28"),r.a.createElement(z.a.Item,null,"5\ucc28"),r.a.createElement(z.a.Item,null,"6\ucc28"),r.a.createElement(z.a.Item,null,"7\ucc28"))),r.a.createElement(oe,{title:"\uc0dd\ubb3c\uacf5\ud559"},r.a.createElement(oe,{title:"\ubc31\uc2b9\uc900 \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"),r.a.createElement(z.a.Item,null,"2\ucc28"))),r.a.createElement(oe,{title:"\uae30\uc0dd\ucda9\ud559"},r.a.createElement(oe,{title:"\uc724\ud76c\uc815 \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"))),r.a.createElement(oe,{title:"\ubbf8\uc0dd\ubb3c\ud559"},r.a.createElement(oe,{title:"\ubc15\uc6a9\ud638 \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28"))),r.a.createElement(oe,{title:"\uc57d\ub9ac\ud559"},r.a.createElement(oe,{title:"\uc774\uc18c\uc601 \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"2\ucc28")),r.a.createElement(oe,{title:"\ub958\ud310\ub3d9 \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,"1\ucc28")))),r.a.createElement(oe,{key:"2",title:"2\ud559\ub144"},r.a.createElement(z.a.Item,null,"Option 5"),r.a.createElement(z.a.Item,null,"Option 6")),r.a.createElement(oe,{key:"3",title:"3\ud559\ub144"},r.a.createElement(oe,{title:"\ubc29\uc0ac\uc120\uacfc\ud559"},r.a.createElement(oe,{title:"\uc724\uc815\ud76c \uad50\uc218\ub2d8"},r.a.createElement(z.a.Item,null,r.a.createElement("a",{href:"/exam/5f0c4ba8b4136d2b0c0939a0"},"1\ud559\uae30")),r.a.createElement(z.a.Item,null,"2\ud559\uae30")))),r.a.createElement(oe,{key:"4",title:"4\ud559\ub144"})))}}]),t}(r.a.Component);Object(o.f)(function(e){var t=Object(g.c)(function(e){return e.user});return t.userData&&!t.userData.isAuth?r.a.createElement(ae.a,{message:"Informational Notes",description:"\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4",type:"info",showIcon:!0}):r.a.createElement(ie,null)});var se=a(174),ue=a(140);var de=function(e){var t=Object(n.useState)([]),a=Object(O.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(se.a,{onDrop:function(t){var a=new FormData;a.append("file",t[0]),p.a.post("/api/problem/image",a,{header:{"content-type":"multipart/fomr-data"}}).then(function(t){t.data.success?(c([].concat(Object(ue.a)(l),[t.data.filePath])),e.refreshFunction([].concat(Object(ue.a)(l),[t.data.filePath]))):alert("\ud30c\uc77c\uc744 \uc800\uc7a5\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")})}},function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",Object.assign({style:{width:300,height:240,border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"}},t()),r.a.createElement("input",a()),r.a.createElement(T.a,{type:"plus",style:{fontSize:"3rem"}}))}),r.a.createElement("div",{style:{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}},l.map(function(t,a){return r.a.createElement("div",{onClick:function(){return function(t){var a=l.indexOf(t),n=Object(ue.a)(l);n.splice(a,1),c(n),e.refreshFunction(n)}(t)},key:a},r.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px"},src:"https://sjogbosite.herokuapp.com/".concat(t),alt:"hello"}))})))},pe=w.a.Title,Ee=F.a.TextArea;var be=function(e){e.props;var t=e.history,a=e.match,l=Object(g.c)(function(e){return e.user}),c=a.params.examId,m=Object(n.useState)(""),o=Object(O.a)(m,2),i=o[0],s=o[1],u=Object(n.useState)([]),d=Object(O.a)(u,2),E=d[0],b=d[1];return r.a.createElement("div",{style:{maxWidth:"700px",margin:"2rem auto"}},r.a.createElement("div",{style:{textAlign:"center",marginBottom:"2rem"}},r.a.createElement(pe,{level:2},"\ubb38\uc81c \uc62c\ub9ac\uae30")),r.a.createElement(P.a,{onSubmit:function(e){e.preventDefault();var a={writer:l.userData._id,postId:c,content:i,images:E};p.a.post("/api/problem/uploadProblem",a).then(function(e){e.data.success?t.goBack():(console.log(e.data),alert("\ubb38\uc81c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud588\uc2b5\ub2c8\ub2e4."))})}},r.a.createElement("label",null,"\uc0ac\uc9c4\uc73c\ub85c \uc62c\ub9ac\uae30"),r.a.createElement(de,{refreshFunction:function(e){b(e)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"\uae00\ub85c \uc62c\ub9ac\uae30"),r.a.createElement(Ee,{onChange:function(e){s(e.currentTarget.value)},value:i}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"\ud655\uc778")))},fe=a(534),he=F.a.TextArea;var ve=function(e){var t=Object(g.c)(function(e){return e.user}),a=Object(n.useState)(""),l=Object(O.a)(a,2),c=l[0],m=l[1],o=Object(n.useState)(!1),i=Object(O.a)(o,2),s=i[0],u=i[1],d=function(a){a.preventDefault();var n={writer:t.userData._id,problemId:e.problemId,responseTo:e.comment._id,content:c};p.a.post("/api/comment/saveComment",n).then(function(t){t.data.success?(m(""),u(!s),e.refreshFunction(t.data.result)):alert("Failed to save Comment")})},E=[r.a.createElement("span",{onClick:function(){u(!s)},key:"comment-basic-reply-to"},"+")];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(fe.a,{actions:E,content:r.a.createElement("p",null,e.comment.content)}),s&&r.a.createElement("form",{style:{display:"flex"},onSubmit:d},r.a.createElement(he,{style:{width:"100%",borderRadius:"5px"},onChange:function(e){m(e.currentTarget.value)},value:c,placeholder:"\ub313\uae00 \uc785\ub825"}),r.a.createElement("br",null),r.a.createElement(D.a,{style:{width:"20%",height:"52px"},onClick:d},"\uc81c\ucd9c")))},ge=a(537);var ye=function e(t){var a=Object(n.useState)(0),l=Object(O.a)(a,2),c=l[0],m=l[1],o=Object(n.useState)(!1),i=Object(O.a)(o,2),s=i[0],u=i[1];Object(n.useEffect)(function(){var e=0;t.CommentLists.map(function(a){a.responseTo===t.parentCommentId&&e++}),m(e)},[t.CommentLists,t.parentCommentId]);var d;return r.a.createElement("div",null,c>0&&r.a.createElement(ge.a,{style:{marginLeft:"40px"},onClick:function(){u(!s)}}),s&&(d=t.parentCommentId,t.CommentLists.map(function(a,n){return r.a.createElement(r.a.Fragment,null,a.responseTo===d&&r.a.createElement("div",{style:{width:"80%",marginLeft:"40px"}},r.a.createElement(ve,{comment:a,problemId:t.problemId,refreshFunction:t.refreshFunction}),r.a.createElement(e,{CommentLists:t.CommentLists,parentCommentId:a._id,problemId:t.problemId,refreshFunction:t.refreshFunction})))})))},Oe=F.a.TextArea;var we=function(e){var t=Object(g.c)(function(e){return e.user}),a=Object(n.useState)(""),l=Object(O.a)(a,2),c=l[0],m=l[1],o=function(a){a.preventDefault();var n={content:c,writer:t.userData._id,problemId:e.problemId};p.a.post("/api/comment/saveComment",n).then(function(t){t.data.success?(m(""),e.refreshFunction(t.data.result)):alert("Failed to save Comment")})};return r.a.createElement("div",null,console.log(e.CommentLists),e.CommentLists&&e.CommentLists.map(function(t,a){return!t.responseTo&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{comment:t,problemId:e.problemId,refreshFunction:e.refreshFunction}),r.a.createElement(ye,{CommentLists:e.CommentLists,problemId:e.problemId,parentCommentId:t._id,refreshFunction:e.refreshFunction}))}),r.a.createElement("form",{style:{display:"flex"},onSubmit:o},r.a.createElement(Oe,{style:{width:"100%",borderRadius:"5px"},onChange:function(e){m(e.currentTarget.value)},value:c,placeholder:"\ubb38\uc81c \uc785\ub825"}),r.a.createElement("br",null),r.a.createElement(D.a,{style:{width:"20%",height:"52px"},onClick:o},"\uc81c\ucd9c")))};var xe=function(e){var t=e.match.params.problemId,a=Object(n.useState)([]),l=Object(O.a)(a,2),c=l[0],m=l[1],o=Object(n.useState)([]),i=Object(O.a)(o,2),s=i[0],u=i[1];console.log(t);var d={problemId:t};return Object(n.useEffect)(function(){p.a.post("/api/problem/getProblem",d).then(function(e){e.data.success?(console.log(e.data.problem),m(e.data.problem)):alert("Failed to get problem Info")}),p.a.post("/api/comment/getComments",d).then(function(e){e.data.success?(console.log("response.data.comments",e.data.comments),u(e.data.comments)):alert("Failed to get exam Info")})},[]),r.a.createElement("div",null,r.a.createElement("div",{className:"site-card-border-less-wrapper"},r.a.createElement(I.a,{title:"\ubb38\uc81c",bordered:!0},c.content)),r.a.createElement("div",null,r.a.createElement(I.a,{title:"\ub313\uae00",bordered:!0},r.a.createElement(we,{CommentLists:s,problemId:c._id,refreshFunction:function(e){u(s.concat(e))}}))))};m.a.Content,m.a.Sider;var Ie=function(){return r.a.createElement("div",{style:{backgroundColor:"white"}},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(U,null),r.a.createElement("div",{style:{paddingTop:"75px",minHeight:"calc(100vh - 80px)"}},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:y(S,null)}),r.a.createElement(o.a,{exact:!0,path:"/login",component:y(q,!1)}),r.a.createElement(o.a,{exact:!0,path:"/register",component:y(W,!1)}),r.a.createElement(o.a,{exact:!0,path:"/exam/upload",component:y(Y,!0)}),r.a.createElement(o.a,{exact:!0,path:"/exam/:examId",component:y(te,!0)}),r.a.createElement(o.a,{exact:!0,path:"/exam/:examId/upload",component:y(be,!0)}),r.a.createElement(o.a,{exact:!0,path:"/exam/:examId/:problemId",component:y(xe,!0)}))),r.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=a(70),Ce=a(265);function Se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Se(a,!0).forEach(function(t){Object(Ce.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Se(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var _e=Object(je.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return ke({},e,{register:t.payload});case E:return ke({},e,{loginSucces:t.payload});case f:return ke({},e,{userData:t.payload});case h:return ke({},e);default:return e}}}),Pe=a(266),Fe=a.n(Pe),Te=a(267),Ne=Object(je.a)(Fe.a,Te.a)(je.d);c.a.render(r.a.createElement(g.a,{store:Ne(_e,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},r.a.createElement(M.a,null,r.a.createElement(Ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[273,1,2]]]);
//# sourceMappingURL=main.cd9fdfe2.chunk.js.map