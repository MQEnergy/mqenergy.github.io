(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fee8180"],{"006e":function(t,a,e){},"061c":function(t,a,e){},"1c03":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"i-layout-page-header"},[e("page-header",{attrs:{title:"用户信息",content:"","hidden-breadcrumb":""}})],1),e("Row",{staticClass:"ivu-pt-16",attrs:{gutter:24}},[e("Col",{attrs:{xl:6,lg:6,md:0,sm:0,xs:0}},[e("Card",{attrs:{shadow:"",title:"个人设置",icon:"md-options",padding:0}},[e("CellGroup",{staticClass:"ivu-pt-8 ivu-pb-8",on:{"on-click":t.handleChangeCell}},[e("Cell",{attrs:{title:"基本设置",name:"info",label:"个人账户信息设置",selected:"info"===t.currentType}}),e("Cell",{attrs:{title:"安全设置",name:"safety",label:"密码、邮箱等设置",selected:"safety"===t.currentType}}),e("Cell",{attrs:{title:"账号绑定",name:"account",label:"绑定第三方社交账户",selected:"account"===t.currentType}}),e("Cell",{attrs:{title:"新消息通知",name:"notification",label:"各种通知的设置",selected:"notification"===t.currentType}})],1)],1)],1),e("Col",{attrs:{xl:18,lg:18,md:24,sm:24,xs:24}},[e("Card",{attrs:{bordered:!1,"dis-hover":""}},[e("Row",[e("Col",{attrs:{xl:0,lg:0,md:24,sm:24,xs:24}},[e("Tabs",{attrs:{value:t.currentType},on:{"on-click":t.handleChangeCell}},[e("TabPane",{attrs:{label:"基本设置",name:"info"}}),e("TabPane",{attrs:{label:"安全设置",name:"safety"}}),e("TabPane",{attrs:{label:"账号绑定",name:"account"}}),e("TabPane",{attrs:{label:"新消息通知",name:"notification"}})],1)],1)],1),"info"===t.currentType?e("info"):t._e(),"safety"===t.currentType?e("safety"):t._e(),"account"===t.currentType?e("account"):t._e(),"notification"===t.currentType?e("notification"):t._e()],1)],1)],1)],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h2",[t._v("基本设置")]),e("Form",{ref:"form",staticClass:"ivu-mt",attrs:{model:t.data,rules:t.rules,"label-position":"top"}},[e("Row",{attrs:{type:"flex",gutter:48}},[e("Col",t._b({},"Col",t.grid1,!1),[e("FormItem",{attrs:{label:"头像",prop:"avatar"}},[e("Avatar",{staticClass:"setting-account-info-avatar",attrs:{src:t.data.avatar,shape:"square"}}),e("Upload",{staticClass:"ivu-mt ivu-mb",attrs:{action:"//jsonplaceholder.typicode.com/posts/"}},[e("Button",{attrs:{icon:"md-camera"}},[t._v("修改头像")])],1)],1)],1),e("Col",t._b({},"Col",t.grid2,!1),[e("FormItem",{attrs:{label:"昵称",prop:"name"}},[e("Input",{attrs:{placeholder:"请输入昵称"},model:{value:t.data.name,callback:function(a){t.$set(t.data,"name",a)},expression:"data.name"}})],1),e("FormItem",{attrs:{label:"邮箱",prop:"mail"}},[e("Input",{attrs:{placeholder:"请输入邮箱"},model:{value:t.data.mail,callback:function(a){t.$set(t.data,"mail",a)},expression:"data.mail"}})],1),e("FormItem",{attrs:{label:"个人介绍",prop:"desc"}},[e("Input",{attrs:{type:"textarea",placeholder:"请输入个人介绍"},model:{value:t.data.desc,callback:function(a){t.$set(t.data,"desc",a)},expression:"data.desc"}})],1),e("FormItem",{attrs:{label:"公司",prop:"company"}},[e("Input",{attrs:{placeholder:"请输入公司"},model:{value:t.data.company,callback:function(a){t.$set(t.data,"company",a)},expression:"data.company"}})],1),e("FormItem",{attrs:{label:"居住地",prop:"city"}}),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("更新基本信息")])],1)],1)],1)],1)],1)},n=[],l={data:function(){return{grid1:{xl:{span:12,order:2},lg:{span:24,order:1},md:{span:24,order:1},sm:{span:24,order:1},xs:{span:24,order:1}},grid2:{xl:{span:12,order:1},lg:{span:24,order:2},md:{span:24,order:2},sm:{span:24,order:2},xs:{span:24,order:2}},data:{avatar:e("85c2"),name:"MQCMS",mail:"123123123@qq.om",desc:"",company:"MQCMS",city:"110000"},rules:{name:[{required:!0,message:"请输入昵称",trigger:"blur"}],mail:[{required:!0,message:"请输入邮箱",trigger:"blur"},{required:!0,type:"email",message:"请输入正确的邮箱",trigger:"blur"}],desc:[{required:!0,message:"请输入个人介绍",trigger:"blur"}],company:[{required:!0,message:"请输入公司",trigger:"blur"}],city:[{required:!0,message:"请选择居住地",trigger:"change"}]}}},methods:{handleSubmit:function(){var t=this;this.$refs.form.validate((function(a){a&&t.$Message.success("信息更新成功!")}))}}},o=l,c=(e("b47e"),e("2877")),p=Object(c["a"])(o,i,n,!1,null,null,null),u=p.exports,d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"setting-account-safety"},[e("h2",[t._v("安全设置")]),e("div",{staticClass:"ivu-mt ivu-pl ivu-pr"},[e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[t._v("账户密码")]),e("p",[t._v("绑定手机和邮箱，并设置密码，帐号更安全")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-link",{attrs:{"link-color":""}},[t._v("修改")])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[t._v("绑定手机")]),e("p",[t._v("已绑定手机号：+86185****0000")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-link",{attrs:{"link-color":""}},[t._v("修改")])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[t._v("密保问题")]),e("p",[t._v("未设置密保问题，密保问题可有效保护账户安全")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-link",{attrs:{"link-color":""}},[t._v("设置")])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[t._v("个性域名")]),e("p",[t._v("已绑定域名：MQCMS.net")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-link",{attrs:{"link-color":""}},[t._v("修改")])],1)],1)],1)])},v=[],m={data:function(){return{}}},f=m,g=(e("dbd9"),Object(c["a"])(f,d,v,!1,null,null,null)),C=g.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"setting-account-account"},[e("h2",[t._v("账号绑定")]),e("div",{staticClass:"ivu-mt ivu-pl ivu-pr"},[e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[e("Avatar",{attrs:{size:"small",src:t.icon.wechat}}),e("span",[t._v("微信")])],1),e("p",[t._v("当前未绑定微信账号")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-link",{attrs:{"link-color":""}},[t._v("绑定")])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[e("Avatar",{attrs:{size:"small",src:t.icon.weibo}}),e("span",[t._v("微博")])],1),e("p",[t._v("当前未绑定微博账号")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-link",{attrs:{"link-color":""}},[t._v("绑定")])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[e("Avatar",{attrs:{size:"small",src:t.icon.facebook}}),e("span",[t._v("Facebook")])],1),e("p",[t._v("当前未绑定 Facebook 账号")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-link",{attrs:{"link-color":""}},[t._v("绑定")])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[e("Avatar",{attrs:{size:"small",src:t.icon.twitter}}),e("span",[t._v("Twitter")])],1),e("p",[t._v("当前未绑定 Twitter 账号")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-link",{attrs:{"link-color":""}},[t._v("绑定")])],1)],1)],1)])},b=[],_=e("cbbd"),y=e.n(_),x=e("fd1c"),w=e.n(x),k=e("f9fe"),j=e.n(k),T=e("29a6"),R=e.n(T),I={data:function(){return{icon:{wechat:y.a,weibo:w.a,facebook:j.a,twitter:R.a}}}},$=I,F=(e("9394"),Object(c["a"])($,h,b,!1,null,null,null)),q=F.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"setting-account-notification"},[e("h2",[t._v("新消息通知")]),e("div",{staticClass:"ivu-mt ivu-pl ivu-pr"},[e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[t._v("陌生人私信")]),e("p",[t._v("未关注的人向您发私信时的通知")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-switch",{attrs:{value:!0}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[t._v("邀请/评论消息")]),e("p",[t._v("有人对我发出邀请时，我会收到消息通知")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-switch",{attrs:{value:!1}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[t._v("赞同/赞赏消息设置")]),e("p",[t._v("有人对我赞同或赞赏时，我会收到消息通知")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-switch",{attrs:{value:!0}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1)],1),e("Divider"),e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{span:"22"}},[e("h4",[t._v("邮件设置")]),e("p",[t._v("重要事件发生时，我将会收到邮件提醒")])]),e("Col",{staticClass:"ivu-text-right",attrs:{span:"2"}},[e("i-switch",{attrs:{value:!0}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("开")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("关")])])],1)],1)],1)])},M=[],A={data:function(){return{}}},E=A,O=(e("675f"),Object(c["a"])(E,D,M,!1,null,null,null)),S=O.exports,z={name:"setting-account",components:{info:u,safety:C,account:q,notification:S},data:function(){return{currentType:"info"}},methods:{handleChangeCell:function(t){this.currentType=t}}},P=z,Q=Object(c["a"])(P,s,r,!1,null,null,null);a["default"]=Q.exports},"29a6":function(t,a,e){t.exports=e.p+"img/icon-social-twitter.5db80e81.svg"},"675f":function(t,a,e){"use strict";var s=e("f1ac"),r=e.n(s);r.a},"846c":function(t,a,e){},"85c2":function(t,a,e){t.exports=e.p+"img/12.2aa02220.png"},9394:function(t,a,e){"use strict";var s=e("061c"),r=e.n(s);r.a},b47e:function(t,a,e){"use strict";var s=e("846c"),r=e.n(s);r.a},cbbd:function(t,a,e){t.exports=e.p+"img/icon-social-wechat.c69ec08c.svg"},dbd9:function(t,a,e){"use strict";var s=e("006e"),r=e.n(s);r.a},f1ac:function(t,a,e){},f9fe:function(t,a,e){t.exports=e.p+"img/icon-social-facebook.e95df60e.svg"},fd1c:function(t,a,e){t.exports=e.p+"img/icon-social-weibo.cbf658a0.svg"}}]);