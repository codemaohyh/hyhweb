(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4b6c450"],{"076e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-box"},[t._m(0),t._m(1),t._m(2),n("div",{staticClass:"footer-item"},[n("div",{staticClass:"footer-other"},[n("div",{staticClass:"footer-other-item"},[n("a",{attrs:{href:"https://space.bilibili.com/444138308?from=search&seid=3399642198415679525",target:"_blank",rel:"noopener noreferrer"}},[n("el-image",{staticClass:"footer-other-item-icon",attrs:{src:r("69ca")}})],1)]),n("div",{staticClass:"footer-other-item"},[n("a",{attrs:{href:"https://qm.qq.com/cgi-bin/qm/qr?k=nT-42kovrX3KEPoiwo8DlERw27LGmBUu&jump_from=webapi",target:"_blank",rel:"noopener noreferrer"}},[n("el-image",{staticClass:"footer-other-item-icon",staticStyle:{width:"30px","margin-top":"35px",height:"30px"},attrs:{src:r("a749")}})],1)])])])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-item"},[r("div",{staticClass:"footer-item-h"},[t._v("关于我们")]),r("div",{staticClass:"footer-item-p"},[t._v("编程猫后援会")]),r("div",{staticClass:"footer-item-p"},[r("a",{attrs:{href:"https://shequ.codemao.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("编程猫社区")])]),r("div",{staticClass:"footer-item-p"},[r("a",{attrs:{href:"https://qm.qq.com/cgi-bin/qm/qr?k=nT-42kovrX3KEPoiwo8DlERw27LGmBUu&jump_from=webapi",target:"_blank",rel:"noopener noreferrer"}},[t._v("加入我们")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-item"},[r("div",{staticClass:"footer-item-h"},[t._v("联系我们")]),r("div",{staticClass:"footer-item-p"},[r("a",{attrs:{href:"/#/post_err",target:"_blank",rel:"noopener noreferrer"}},[t._v("反馈问题")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-item"},[r("div",{staticClass:"footer-item-h"},[t._v("友情链接")]),r("div",{staticClass:"footer-item-p"},[r("a",{attrs:{href:"https://www.codemao.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("编程猫")])]),r("div",{staticClass:"footer-item-p"},[r("a",{attrs:{target:"_blank",rel:"noopener noreferrer"}},[t._v("曈星工作室")])])])}],a={data:function(){return{}}},o=a,s=(r("68b3"),r("9ca4")),l=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=l.exports},"1a8a":function(t,e,r){"use strict";var n=r("4cdb"),i=r.n(n);i.a},"22ef":function(t,e,r){"use strict";var n=r("efe2");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},"4cdb":function(t,e,r){},5139:function(t,e,r){"use strict";var n=r("99ad"),i=r("22ef"),a=RegExp.prototype.exec,o=String.prototype.replace,s=a,l=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=l||u||c;p&&(s=function(t){var e,r,i,s,p=this,f=c&&p.sticky,m=n.call(p),d=p.source,v=0,g=t;return f&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),g=String(t).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==t[p.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,v++),r=new RegExp("^(?:"+d+")",m)),u&&(r=new RegExp("^"+d+"$(?!\\s)",m)),l&&(e=p.lastIndex),i=a.call(f?r:p,g),f?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=p.lastIndex,p.lastIndex+=i[0].length):p.lastIndex=0:l&&i&&(p.lastIndex=p.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=s},"564d":function(t,e,r){},"59da":function(t,e,r){var n=r("2118"),i=r("5139");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"68b3":function(t,e,r){"use strict";var n=r("564d"),i=r.n(n);i.a},"69ca":function(t,e,r){t.exports=r.p+"img/bilibili.8ab5911f.svg"},"99ad":function(t,e,r){"use strict";var n=r("857c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"9d8d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"}},[r("div",{staticClass:"navbar-s"}),r("div",{staticClass:"navbar",class:this.navbarS>=100?"navbarS":""},[r("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal","menu-trigger":"click",router:""}},[r("el-menu-item",{staticClass:"navbar-logo"},[r("div",{staticClass:"logo"})]),t._l(t.navbar,(function(e,n){return r("el-menu-item",{key:n,attrs:{index:e.path}},[t._v(t._s(e.text))])})),t.user.id?t._e():r("el-menu-item",{staticClass:"right"},[r("a",{on:{click:function(e){t.log_box_w=30,t.sign_box=!0,t.sign_name="in"}}},[t._v("登录")])]),t.user.id?r("el-submenu",{staticClass:"right",attrs:{index:"/"}},[r("template",{slot:"title"},[r("el-avatar",{attrs:{size:30,src:t.user.avatar_url}})],1),r("el-menu-item",{on:{click:function(e){return t.sign_out()}}},[t._v("退出登录")])],2):t._e(),r("el-menu-item",{staticClass:"navbar-open",on:{click:function(e){t.drawer=!0}}},[r("i",{staticClass:"el-icon-menu"})])],2)],1),r("el-dialog",{attrs:{title:"登录","close-on-click-modal":!1,visible:t.sign_box,width:t.log_box_w+"%"},on:{"update:visible":function(e){t.sign_box=e}}},[r("signin")],1),r("el-drawer",{attrs:{visible:t.drawer,direction:"rtl","with-header":!1},on:{"update:visible":function(e){t.drawer=e}}},[r("div",{staticStyle:{width:"300px"}},[r("el-menu",{attrs:{"default-active":t.activeIndex,"menu-trigger":"click",router:""}},[t._l(t.navbar,(function(e,n){return r("el-menu-item",{key:n,attrs:{index:e.path}},[t._v(t._s(e.text))])})),t.user.id?t._e():r("el-menu-item",[r("a",{on:{click:function(e){t.log_box_w=90,t.sign_box=!0,t.sign_name="in"}}},[t._v("登录")])]),t.user.id?r("el-submenu",{attrs:{index:"/"}},[r("template",{slot:"title"},[r("el-avatar",{attrs:{size:30,src:t.user.avatar_url}})],1),r("el-menu-item",{on:{click:function(e){return t.sign_out()}}},[t._v("退出登录")])],2):t._e()],2)],1)])],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-dialog",{attrs:{title:"用户协议",visible:t.al_box,width:"500px"},on:{"update:visible":function(e){t.al_box=e}}},[r("span",{staticStyle:{height:"200px",overflow:"auto",display:"block","text-indent":"2rem"}},[t._v(" 编程猫后援会是一款由我们提供服务的网站，为说明网站会如何收集、使用和存储你的个人信息及你享有何种权利，我们将通过本指引向你阐述相关事宜，其中要点如下： "),r("br"),r("br"),t._v("i. 我们将逐一说明我们收集的你的个人信息类型及其对应的用途，以便你了解我们针对某一特定功能所收集的具体个人信息的类别、使用理由及收集方式。 "),r("br"),r("br"),t._v("ii. 当你使用一些功能时，我们会在获得你的同意后，收集你的一些敏感信息，例如你在使用发贴功能时我们会收集你的文本信息，你在使用登录功能时编程猫API会收集你的手机号码及密码信息，并由编程猫的API处理，除非按照相关法律法规要求必须收集，拒绝提供这些信息仅会使你无法使用相关特定功能，但不影响你正常使用网站的其他功能。 "),r("br"),r("br"),t._v("iii. 目前，编程猫后援会官网不会主动共享或转让你的个人信息至（Mai工作室服务器和编程猫API处理）除外的的第三方，如存在其他共享或转让你的个人信息或你需要我们将你的个人信息共享或转让至（编程猫API处理）外的第三方情形时，我们会直接征得或确认第三方征得你对上述行为的明示同意，此外，我们会对对外提供信息的行为进行风险评估。 "),r("br"),r("br"),t._v("iv. 目前，编程猫后援会不会主动从（编程猫API处理）外的第三方获取你的个人信息。如未来为业务发展需要从第三方间接获取你的个人信息，我们会在获取前向你明示你个人信息的来源、类型及使用范围，如编程猫后援会开展业务需进行的个人信息处理活动超出你原本向第三方提供个人信息时的授权同意范围，我们将在处理你的该等个人信息前，征得你的明示同意；此外，我们也将会严格遵守相关法律法规的规定，并要求第三方保障其提供的信息的合法性。 "),r("br"),r("br"),t._v("v. 你可以通过本指引所列途径访问、更正、删除你的个人信息，也可以撤回同意、注销帐号、投诉举报以及设置隐私功能。 "),r("br"),r("br"),t._v("vi. 为了在本指引下收集你的信息，或者向你提供服务、优化我们的服务以及保障你的帐号安全，我们将需要向你索取相关的权限；其中的敏感权限例如通讯录、精确地理位置、摄像头、麦克风、相册等均不会默认开启，只有在你明确同意后才会向我们授权。 需要特别说明的是，获得敏感权限是我们收集特定信息的必要而非充分条件。我们获得具体某一项敏感权限并不代表我们必然会收集你的相关信息；即使我们已经获得敏感权限，也仅在必要时、根据本指引来收集你的相关信息。 ")]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.signForm.al=!1,t.al_box=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.signForm.al=!0,t.al_box=!1}}},[t._v("确 定")])],1)]),0==t.index?r("el-form",{ref:"signForm",staticClass:"demo-signForm",attrs:{model:t.signForm,"status-icon":"",rules:t.rules,"label-position":"top","label-width":"100%"}},[r("div",[r("i",{staticClass:"el-icon-warning-outline"}),t._v(" 使用编程猫账号登录 ")]),r("br"),r("el-form-item",{attrs:{prop:"id"}},[r("el-input",{attrs:{placeholder:"用户名/手机号/邮箱"},model:{value:t.signForm.id,callback:function(e){t.$set(t.signForm,"id",e)},expression:"signForm.id"}})],1),r("el-form-item",{attrs:{prop:"pass"}},[r("el-input",{attrs:{placeholder:"密码",type:"password",autocomplete:"off"},model:{value:t.signForm.pass,callback:function(e){t.$set(t.signForm,"pass",e)},expression:"signForm.pass"}})],1),r("el-form-item",{attrs:{prop:"al"}},[r("el-checkbox",{model:{value:t.signForm.al,callback:function(e){t.$set(t.signForm,"al",e)},expression:"signForm.al"}},[t._v(" 我已阅读并同意 "),r("span",{on:{click:function(e){t.al_box=!0}}},[t._v("《用户协议》")])])],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){return t.submitForm("signForm")}}},[t._v("登录")])],1),r("a",{staticStyle:{float:"left",padding:"10px"},attrs:{target:"_blank",href:"/#/post_err"}},[t._v("登录遇到问题？")]),r("a",{staticStyle:{float:"right",padding:"10px"},attrs:{target:"_blank",href:"https://shequ.codemao.cn"}},[t._v("注册账号")]),r("br")],1):t._e(),1==t.index?r("el-form",{ref:"signForm2",staticClass:"demo-signForm",attrs:{model:t.signForm2,"status-icon":"",rules:t.rules2,"label-position":"top","label-width":"100%"}},[r("el-form-item",{attrs:{prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:t.signForm2.phone,callback:function(e){t.$set(t.signForm2,"phone",e)},expression:"signForm2.phone"}})],1),r("el-form-item",{attrs:{prop:"vpass"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:15}},[r("el-input",{attrs:{placeholder:"验证码",autocomplete:"off"},model:{value:t.signForm2.vpass,callback:function(e){t.$set(t.signForm2,"vpass",e)},expression:"signForm2.vpass"}})],1),r("el-col",{attrs:{span:8}},[r("el-button",{attrs:{disabled:t.vpb_d},on:{click:t.vpb_on}},[t._v(t._s(t.vpb_text))])],1)],1)],1),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){return t.submitForm("signForm2")}}},[t._v("登录")])],1),r("el-button",{attrs:{type:"text"},on:{click:function(e){t.index=0}}},[t._v("密码登录")])],1):t._e()],1)},o=[],s={data:function(){var t=this,e=function(t,e,r){if(!e)return r(new Error("手机号不能为空"));var n=/^1[3|4|5|7|8][0-9]\d{8}$/;if(!n.test(e))return r(new Error("请输入正确的手机号"));r()},r=function(e,r,n){if(0==t.signForm.al)return n(new Error("请勾选用户协议"));n()};return{index:0,vpb_text:"发送验证码",vpb_d:!1,al_box:!1,signForm:{id:"",pass:"",al:!1},rules:{id:[{required:!0,message:"不能为空",trigger:"blur"}],pass:[{required:!0,message:"不能为空",trigger:"blur"}],al:[{validator:r,trigger:"blur"}]},signForm2:{phone:"",vpass:""},rules2:{phone:[{validator:e,trigger:"blur"}],vpass:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},methods:{vpb_on:function(){var t=this;this.$refs["signForm2"].validateField("phone",(function(e){if(e)return!1;t.tackBtn(),t.$axios.post("/api/captcha/rule",{identity:t.signForm2.phone}).then((function(t){console.log(t)}))}))},tackBtn:function(){var t=this,e=60,r=setInterval((function(){0==e?(clearInterval(r),t.vpb_text="发送验证码",t.vpb_d=!1):(t.vpb_d=!0,t.vpb_text=e+"秒后重试",e--)}),1e3)},submitForm:function(t){var e=this;this.$refs[t].validate((function(r){if(!r)return!1;"signForm"==t?e.$store.commit("signin",{id:e.signForm.id,password:e.signForm.pass}):e.$alert("这是一段内容")}))}}},l=s,c=r("9ca4"),u=Object(c["a"])(l,a,o,!1,null,null,null),p=u.exports,f={components:{signin:p},data:function(){return{activeIndex:this.$route.path,navbarS:0,drawer:!1,log_box_w:30,navbar:[{path:"/",text:"首页"},{path:"/blog",text:"博客"},{path:"/forum",text:"论坛"}],user:this.$store.state.user,sign_box:!1,sign_name:"in"}},mounted:function(){window.addEventListener("scroll",this.s)},methods:{s:function(){this.navbarS=document.documentElement.scrollTop},open:function(){console.log(this.w)},sign_out:function(){this.$store.state.user={},this.$store.commit("signout")}},watch:{"$store.state.user":function(){this.user=this.$store.state.user}},created:function(){this.$store.commit("getuser")}},m=f,d=(r("1a8a"),Object(c["a"])(m,n,i,!1,null,null,null));e["a"]=d.exports},a749:function(t,e,r){t.exports=r.p+"img/qq.557e5ebc.svg"},b2a2:function(t,e,r){"use strict";r("e35a");var n=r("1944"),i=r("efe2"),a=r("90fb"),o=r("5139"),s=r("0fc1"),l=a("species"),c=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=a("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),m=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,p){var d=a(t),v=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return e=!0,null},r[d](""),!e}));if(!v||!g||"replace"===t&&(!c||!u||f)||"split"===t&&!m){var b=/./[d],_=r(d,""[t],(function(t,e,r,n,i){return e.exec===o?v&&!i?{done:!0,value:b.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),h=_[0],x=_[1];n(String.prototype,t,h),n(RegExp.prototype,d,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}p&&s(RegExp.prototype[d],"sham",!0)}},e35a:function(t,e,r){"use strict";var n=r("1c8b"),i=r("5139");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})}}]);
//# sourceMappingURL=chunk-c4b6c450.2c1ee749.js.map