(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88498612"],{"1de2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("PageHeader",{attrs:{title:"用户列表",content:"","hidden-breadcrumb":""}})],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("search-form",{on:{"on-submit":t.getData,"on-reset":t.getData}}),a("list",{ref:"list"})],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Form",{ref:"form",attrs:{model:t.data,rules:t.rules,"label-width":t.labelWidth,"label-position":t.labelPosition}},[a("Row",{attrs:{gutter:24,type:"flex",justify:"end"}},[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"用户名：",prop:"name","label-for":"name"}},[a("Input",{attrs:{placeholder:"请输入用户名","element-id":"name"},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"状态：",prop:"status","label-for":"status"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"status"},model:{value:t.data.status,callback:function(e){t.$set(t.data,"status",e)},expression:"data.status"}},[a("Option",{attrs:{value:0}},[t._v("禁用")]),a("Option",{attrs:{value:1}},[t._v("正常")])],1)],1)],1),t.collapse?[a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"手机号：",prop:"phone","label-for":"phone"}},[a("InputNumber",{directives:[{name:"width",rawName:"v-width",value:"100%",expression:"'100%'"}],attrs:{placeholder:"请输入手机号","element-id":"phone"},model:{value:t.data.phone,callback:function(e){t.$set(t.data,"phone",e)},expression:"data.phone"}})],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"更新日期：",prop:"date","label-for":"date"}},[a("DatePicker",{directives:[{name:"width",rawName:"v-width",value:"100%",expression:"'100%'"}],attrs:{placeholder:"请选择","element-id":"date"},model:{value:t.data.date,callback:function(e){t.$set(t.data,"date",e)},expression:"data.date"}})],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"使用状态：",prop:"status2","label-for":"status2"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"status2"},model:{value:t.data.status2,callback:function(e){t.$set(t.data,"status2",e)},expression:"data.status2"}},[a("Option",{attrs:{value:0}},[t._v("关闭")]),a("Option",{attrs:{value:1}},[t._v("运行中")])],1)],1)],1),a("Col",t._b({},"Col",t.grid,!1),[a("FormItem",{attrs:{label:"使用状态：",prop:"status3","label-for":"status3"}},[a("Select",{attrs:{placeholder:"请选择","element-id":"status3"},model:{value:t.data.status3,callback:function(e){t.$set(t.data,"status3",e)},expression:"data.status3"}},[a("Option",{attrs:{value:0}},[t._v("关闭")]),a("Option",{attrs:{value:1}},[t._v("运行中")])],1)],1)],1)]:t._e(),a("Col",t._b({staticClass:"ivu-text-right"},"Col",t.grid,!1),[a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("查询")]),a("Button",{staticClass:"ivu-ml-8",on:{click:t.handleReset}},[t._v("重置")]),a("a",{directives:[{name:"font",rawName:"v-font",value:14,expression:"14"}],staticClass:"ivu-ml-8",on:{click:function(e){t.collapse=!t.collapse}}},[t.collapse?[t._v("\n                        收起 "),a("Icon",{attrs:{type:"ios-arrow-up"}})]:[t._v("\n                        展开 "),a("Icon",{attrs:{type:"ios-arrow-down"}})]],2)],1)],1)],2)],1)},l=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={data:function(){return{grid:{xl:8,lg:8,md:12,sm:24,xs:24},collapse:!1,data:{name:"",status:"",phone:null,date:"",status2:"",status3:""},rules:{}}},computed:u({},Object(o["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:{handleSubmit:function(){this.$emit("on-submit",this.data)},handleReset:function(){this.$refs.form.resetFields(),this.$emit("on-reset")}}},h=d,m=a("2877"),f=Object(m["a"])(h,s,l,!1,null,null,null),p=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"i-table-no-border"},[a("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.handleOpenCreate}},[t._v("新建")]),a("Button",{directives:[{name:"show",rawName:"v-show",value:t.selectedData.length,expression:"selectedData.length"}],staticClass:"ivu-ml-8",attrs:{icon:"md-list"}},[t._v("批量操作")]),a("Dropdown",{directives:[{name:"show",rawName:"v-show",value:t.selectedData.length,expression:"selectedData.length"}],staticClass:"ivu-ml-8",on:{"on-click":t.handleClickItem}},[a("Button",[t._v("\n            更多操作\n            "),a("Icon",{attrs:{type:"ios-arrow-down"}})],1),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[a("DropdownItem",{attrs:{name:"delete"}},[t._v("删除")])],1)],1),a("Alert",{staticClass:"ivu-mt",attrs:{"show-icon":""}},[a("div",{directives:[{name:"font",rawName:"v-font",value:14,expression:"14"}]},[t._v("\n            已选择 "),a("strong",{directives:[{name:"color",rawName:"v-color",value:"#2d8cf0",expression:"'#2d8cf0'"}]},[t._v(t._s(t.selectedData.length))]),t._v(" 项\n            "),a("a",{staticClass:"ivu-ml",on:{click:t.handleClearSelect}},[t._v("清空")])])]),a("Table",{ref:"table",staticClass:"ivu-mt",attrs:{columns:t.columns,data:t.limitData,loading:t.loading},on:{"on-sort-change":t.handleSortChange,"on-filter-change":t.handleFilterChange,"on-select":t.handleSelect,"on-select-cancel":t.handleSelectCancel,"on-select-all":t.handleSelectAll,"on-select-all-cancel":t.handleSelectAllCancel},scopedSlots:t._u([{key:"id",fn:function(e){var n=e.row;return[a("div",[t._v(t._s(n.id))])]}},{key:"user_name",fn:function(e){var n=e.row;return[a("div",[t._v(t._s(n.user_name))])]}},{key:"real_name",fn:function(e){var n=e.row;return[a("div",[t._v(t._s(n.real_name))])]}},{key:"status",fn:function(e){var n=e.row;return[0===n.status?a("Badge",{attrs:{status:"default",text:"禁用"}}):t._e(),1===n.status?a("Badge",{attrs:{status:"processing",text:"正常"}}):t._e()]}},{key:"created_at",fn:function(e){var a=e.row;return[t._v("\n            "+t._s(a.created_at)+"\n        ")]}},{key:"action",fn:function(e){e.row;var n=e.index;return[a("a",{on:{click:function(e){return t.handleUpdate(n)}}},[t._v("编辑")])]}}])}),a("div",{staticClass:"ivu-mt ivu-text-center"},[a("Page",{attrs:{total:t.total,"show-total":"",current:t.current},on:{"update:current":function(e){t.current=e},"on-change":t.handleChange}})],1),a("Modal",{attrs:{title:"新建用户",loading:t.creating},on:{"on-ok":t.handleCreate,"on-cancel":t.handleCancel},model:{value:t.showCreate,callback:function(e){t.showCreate=e},expression:"showCreate"}},[a("Form",{ref:"create",attrs:{model:t.createData,rules:t.createRules,"label-position":"left","label-width":80}},[a("FormItem",{attrs:{label:"用户名：",prop:"user_name"}},[a("Input",{attrs:{placeholder:"请输入用户名"},model:{value:t.createData.user_name,callback:function(e){t.$set(t.createData,"user_name",e)},expression:"createData.user_name"}})],1),a("FormItem",{attrs:{label:"姓名：",prop:"real_name"}},[a("Input",{attrs:{placeholder:"请输入真实姓名"},model:{value:t.createData.real_name,callback:function(e){t.$set(t.createData,"real_name",e)},expression:"createData.real_name"}})],1),a("FormItem",{attrs:{label:"手机号：",prop:"phone"}},[a("Input",{attrs:{placeholder:"请输入手机号"},model:{value:t.createData.phone,callback:function(e){t.$set(t.createData,"phone",e)},expression:"createData.phone"}})],1),a("FormItem",{attrs:{label:"状态：",prop:"status"}},[a("i-switch",{on:{"on-change":t.handleSwitchChange},model:{value:t.createData.statusFormat,callback:function(e){t.$set(t.createData,"statusFormat",e)},expression:"createData.statusFormat"}})],1)],1)],1)],1)},b=[],g=(a("20d6"),a("967e")),_=a.n(g),w=(a("96cf"),a("3b8d")),C=(a("55dd"),a("75fc")),D=a("c24f"),x={data:function(){return{columns:[{type:"selection",width:60,align:"center"},{title:"ID",key:"id",minWidth:80},{title:"用户名",key:"user_name",minWidth:100},{title:"真实姓名",key:"real_name",minWidth:100},{title:"手机号",key:"phone",minWidth:100},{title:"状态",slot:"status",minWidth:100,filters:[{label:"禁用",value:0},{label:"正常",value:1}],filterMultiple:!0,filterRemote:function(t){this.filterType=t}},{title:"添加时间",key:"created_at",minWidth:140,sortable:"custom"},{title:"操作",slot:"action",align:"center",minWidth:140}],loading:!1,list:[],selectedData:[],current:1,total:0,size:10,sortType:"normal",sortColumns:"",filterType:void 0,showCreate:!1,createData:{user_name:"",real_name:"",phone:"",status:1,statusFormat:!0},createRules:{user_name:[{required:!0,message:"请输入用户名",trigger:"blur"}],real_name:[{required:!0,message:"请输入真实姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}]},creating:!0,updateIndex:-1}},computed:{limitData:function(){var t=this,e=Object(C["a"])(this.list),a=this.sortColumns;"asc"===this.sortType&&(e=e.sort((function(t,e){return t[a]>e[a]?1:-1}))),"desc"===this.sortType&&(e=e.sort((function(t,e){return t[a]<e[a]?1:-1}))),this.filterType&&this.filterType.length&&(e=e.filter((function(e){return t.filterType.indexOf(e.status)>=0})));var n=this.selectedData.map((function(t){return t.user_name}));return e.map((function(t){return t._checked=n.indexOf(t.user_name)>=0,t})),e},dataWithPage:function(){var t=this.limitData,e=this.current*this.size-this.size,a=e+this.size;return Object(C["a"])(t).slice(e,a)}},methods:{getData:function(){var t=this;this.loading=!0,Object(D["a"])({page:this.current,limit:this.size}).then(function(){var e=Object(w["a"])(_.a.mark((function e(a){return _.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.list=a.data,t.total=a.total;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){t.loading=!1}))},handleSortChange:function(t){var e=t.key,a=t.order;this.sortColumns=e,this.sortType=a,this.current=1},handleFilterChange:function(){this.current=1},handleSelect:function(t,e){this.selectedData.push(e)},handleSelectCancel:function(t,e){var a=this.selectedData.findIndex((function(t){return t.id===e.id}));this.selectedData.splice(a,1)},handleSelectAll:function(t){var e=this;t.forEach((function(t){e.selectedData.findIndex((function(e){return e.id===t.id}))<0&&e.selectedData.push(t)}))},handleSelectAllCancel:function(){var t=this,e=this.dataWithPage;e.forEach((function(e){var a=t.selectedData.findIndex((function(t){return t.id===e.id}));a>=0&&t.selectedData.splice(a,1)}))},handleClearSelect:function(){this.selectedData=[]},handleClickItem:function(t){var e=this;"delete"===t&&(this.selectedData.forEach((function(t){var a=e.list.findIndex((function(e){return e.id===t.id}));a>=0&&e.list.splice(a,1)})),this.selectedData=[])},handleOpenCreate:function(){this.updateIndex=-1,this.showCreate=!0},handleCreate:function(){var t=this;this.$refs.create.validate((function(e){if(e){if(t.updateIndex<0)Object(D["b"])(t.createData).then(function(){var e=Object(w["a"])(_.a.mark((function e(a){return _.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success("创建成功"),t.getData(),t.handleCancel();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());else{var a=t.list[t.updateIndex];t.createData.id=a.id,Object(D["c"])(t.createData).then((function(e){var n=t.list.findIndex((function(t){return t.id===a.id}));t.list[n].user_name=t.createData.user_name,t.list[n].real_name=t.createData.real_name,t.list[n].phone=t.createData.phone,t.list[n].status=t.createData.status,t.$Message.success("修改成功"),t.handleCancel()}))}t.showCreate=!1,t.creating=!1,t.$nextTick((function(){t.creating=!0}))}else t.creating=!1,t.$nextTick((function(){t.creating=!0}))}))},handleUpdate:function(t){this.updateIndex=t;var e=this.list[t];this.createData={user_name:e.user_name,real_name:e.real_name,phone:e.phone,status:e.status,statusFormat:1===e.status},this.showCreate=!0},handleCancel:function(){this.$refs.create.resetFields()},handleChange:function(t){this.current=t,this.getData()},handleSwitchChange:function(t){this.createData.status=t?1:0,this.createData.statusFormat=t}}},y=x,k=Object(m["a"])(y,v,b,!1,null,null,null),O=k.exports,I={name:"user-index",components:{searchForm:p,list:O},data:function(){return{}},methods:{getData:function(){this.$refs.list.getData()}},mounted:function(){this.getData()}},j=I,F=Object(m["a"])(j,n,r,!1,null,null,null);e["default"]=F.exports},"2f21":function(t,e,a){"use strict";var n=a("79e5");t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"55dd":function(t,e,a){"use strict";var n=a("5ca1"),r=a("d8e8"),s=a("4bf8"),l=a("79e5"),i=[].sort,o=[1,2,3];n(n.P+n.F*(l((function(){o.sort(void 0)}))||!l((function(){o.sort(null)}))||!a("2f21")(i)),"Array",{sort:function(t){return void 0===t?i.call(s(this)):i.call(s(this),r(t))}})},c24f:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return l}));var n=a("b6bd");function r(t){return Object(n["a"])({url:"/user/index",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/user/store",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/user/update",method:"post",data:t})}}}]);