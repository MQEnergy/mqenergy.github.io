(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0641"],{"9bbd":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("PageHeader",{attrs:{title:"用户列表",content:"包含用户信息的列表，带有常规操作。","hidden-breadcrumb":""}})],1),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[t.loading?i("div",{staticStyle:{position:"relative",height:"100px"}},[i("Spin",{attrs:{fix:"",size:"large"}})],1):t._e(),i("List",{attrs:{"item-layout":"vertical"}},[t._l(t.data,(function(e,a){return i("ListItem",{key:a},[i("ListItemMeta",[i("i-link",{attrs:{slot:"avatar",to:e.userLink,target:"_blank"},slot:"avatar"},[i("Avatar",{attrs:{src:e.avatar}})],1),i("i-link",{attrs:{slot:"title",to:e.userLink,target:"_blank"},slot:"title"},[t._v("\n                        "+t._s(e.name)+"\n                    ")])],1),i("div",[i("p",[t._v("\n                        ID："+t._s(e.id)+"\n                        "),i("Button",{attrs:{size:"small",icon:"md-copy"},on:{click:function(e){return t.handleCopyId(a)}}},[t._v("复制")])],1),i("p",[t._v("\n                        邮箱地址："+t._s(e.mail)+"\n                    ")])]),i("div",{staticClass:"ivu-mt-8"},[e.is_check?i("Tag",{attrs:{color:"green"}},[t._v("已验证邮箱")]):i("Tag",{attrs:{color:"red"}},[t._v("未验证邮箱")]),1===e.status?i("Tag",{attrs:{color:"blue"}},[t._v("普通用户")]):t._e(),2===e.status?i("Tag",{attrs:{color:"purple"}},[t._v("管理员")]):t._e(),3===e.status?i("Tag",{attrs:{color:"volcano"}},[t._v("运营人员")]):t._e(),i("Button",{staticClass:"ivu-ml",attrs:{size:"small",icon:"md-list"},on:{click:function(e){return t.handleCollapse(a)}}},[t._v("展开操作")])],1),e.is_collapse?i("template",{slot:"action"},[i("li",[i("Poptip",{attrs:{confirm:"",transfer:"",disabled:1===e.status,title:"确认将该用户设置为普通用户吗？"},on:{"on-ok":function(e){return t.handleSetStatus(a,1)}}},[i("Button",{attrs:{type:"primary",disabled:1===e.status,size:"small"}},[t._v("普通用户")])],1)],1),i("li",[i("Poptip",{attrs:{confirm:"",transfer:"",disabled:2===e.status,title:"确认将该用户设置为管理员吗？"},on:{"on-ok":function(e){return t.handleSetStatus(a,2)}}},[i("Button",{attrs:{type:"primary",disabled:2===e.status,size:"small"}},[t._v("管理员")])],1)],1),i("li",[i("Poptip",{attrs:{confirm:"",transfer:"",disabled:3===e.status,title:"确认将该用户设置为运营人员吗？"},on:{"on-ok":function(e){return t.handleSetStatus(a,3)}}},[i("Button",{attrs:{type:"primary",disabled:3===e.status,size:"small"}},[t._v("运营人员")])],1)],1)]):t._e()],2)})),i("div",{staticClass:"ivu-mt ivu-text-center",attrs:{slot:"footer"},slot:"footer"},[i("Page",{attrs:{total:100,"show-elevator":"","show-sizer":"","show-total":"",simple:t.isMobile}})],1)],2)],1)],1)},s=[],r=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),n=i("2f62"),o=[{id:"123456700",name:"Aresn",avatar:"https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",userLink:"https://dev.iviewui.com/user/1016955559255085056",mail:"user@iview.design",status:2,is_check:1,is_collapse:0},{id:"123456701",name:"中小鱼",avatar:"https://dev-file.iviewui.com/userinfoYLhfo1S945BOLuFT96NRStYeYDFRviF5/avatar",userLink:"https://dev.iviewui.com/user/1023876335417823232",mail:"user@iview.design",status:1,is_check:0,is_collapse:0},{id:"123456702",name:"Echo",avatar:"https://dev-file.iviewui.com/userinfoxlXwHVwZkCQtl1Zyd1wrvF78b1rZkhfK/avatar",userLink:"https://dev.iviewui.com/user/1023207710763651072",mail:"user@iview.design",status:3,is_check:1,is_collapse:0},{id:"123456703",name:"唐不苦",avatar:"https://dev-file.iviewui.com/userinfosvaY5tb7yfnSFTTimcjy3vuSG6RC28v2/avatar",userLink:"https://dev.iviewui.com/user/1024122983062573056",mail:"user@iview.design",status:1,is_check:1,is_collapse:0},{id:"123456704",name:"甜筒",avatar:"https://dev-file.iviewui.com/userinforaP8NeQgYpmKgkpWlqZP7rfewbHiIzJY/avatar",userLink:"https://dev.iviewui.com/user/1020220337314467840",mail:"user@iview.design",status:1,is_check:0,is_collapse:0},{id:"123456705",name:"冷月呆呆",avatar:"https://dev-file.iviewui.com/userinfoQdhnYDF2VFOrQSTPR9963k8BbMjeqyTm/avatar",userLink:"https://dev.iviewui.com/user/1023157012558647296",mail:"user@iview.design",status:1,is_check:1,is_collapse:0}];function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(r["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c={name:"list-user-list",data:function(){return{data:[],loading:!1}},computed:u({},Object(n["e"])("admin/layout",["isMobile"])),methods:{getData:function(){var t=this;this.loading=!0,setTimeout((function(){t.loading=!1,t.data=o}),1e3)},handleCopyId:function(t){var e=this.data[t].id;this.$Copy({text:e})},handleCollapse:function(t){this.data[t].is_collapse=!this.data[t].is_collapse},handleSetStatus:function(t,e){this.data[t].status=e,this.$Message.success("设置成功！")}},mounted:function(){this.getData()}},d=c,v=i("2877"),p=Object(v["a"])(d,a,s,!1,null,null,null);e["default"]=p.exports}}]);