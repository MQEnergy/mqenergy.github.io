(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70fff409"],{"02b5":function(e,t,a){"use strict";var r=a("2197"),n=a.n(r);n.a},"1de2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("page-header",{attrs:{title:"用户列表",content:"","hidden-breadcrumb":""}})],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("list",{ref:"list"})],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"i-table-no-border"},[a("search-form",{ref:"searchForm",attrs:{"show-multi-del":!1,"show-export":!1,"base-search-form":e.baseSeachForm,"advanced-search-form":e.advancedSearchForm},on:{"on-create-form":e.handleOpenUpdateCreate,"on-search":e.searchData,"on-reset":e.getData}}),a("Table",{ref:"table",staticClass:"ivu-mt",attrs:{columns:e.columns,data:e.limitData,loading:e.loading},on:{"on-sort-change":e.handleSortChange,"on-filter-change":e.handleFilterChange,"on-select":e.handleSelect,"on-select-cancel":e.handleSelectCancel,"on-select-all":e.handleSelectAll,"on-select-all-cancel":e.handleSelectAllCancel},scopedSlots:e._u([{key:"status",fn:function(t){var r=t.row;return[0===r.status?a("Badge",{attrs:{status:"default",text:"禁用"}}):e._e(),1===r.status?a("Badge",{attrs:{status:"processing",text:"正常"}}):e._e()]}},{key:"action",fn:function(t){var r=t.row;t.index;return[a("a",{on:{click:function(t){return e.handleOpenUpdateCreate(!0,r.id)}}},[e._v("编辑")])]}}])}),a("div",{staticClass:"ivu-mt ivu-text-center"},[a("Page",{attrs:{total:e.total,"show-total":"",current:e.current},on:{"update:current":function(t){e.current=t},"on-change":e.handleChange}})],1),a("create-form",{ref:"createForm",on:{"on-create-form":e.handleOpenUpdateCreate,"on-ok":e.getData}})],1)},s=[],i=(a("4de4"),a("c740"),a("c975"),a("d81d"),a("fb6a"),a("4e82"),a("a434"),a("d3b7"),a("159b"),a("a34a")),l=a.n(i),c=(a("96cf"),a("1da1")),u=a("2909"),d=a("c24f"),h=a("3d50"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Modal",{attrs:{width:"600","mask-closable":!1,title:"新建标签",loading:e.creating},on:{"on-ok":e.handleCreate,"on-cancel":e.handleCancel},model:{value:e.showCreate,callback:function(t){e.showCreate=t},expression:"showCreate"}},[a("Form",{ref:"create",attrs:{model:e.createData,rules:e.createRules,"label-position":"left","label-width":80}},[a("FormItem",{attrs:{label:"用户名：",prop:"user_name"}},[a("Input",{attrs:{placeholder:"请输入用户名"},model:{value:e.createData.user_name,callback:function(t){e.$set(e.createData,"user_name",t)},expression:"createData.user_name"}})],1),a("FormItem",{attrs:{label:"姓名：",prop:"real_name"}},[a("Input",{attrs:{placeholder:"请输入真实姓名"},model:{value:e.createData.real_name,callback:function(t){e.$set(e.createData,"real_name",t)},expression:"createData.real_name"}})],1),a("FormItem",{attrs:{label:"手机号：",prop:"phone"}},[a("Input",{attrs:{placeholder:"请输入手机号"},model:{value:e.createData.phone,callback:function(t){e.$set(e.createData,"phone",t)},expression:"createData.phone"}})],1),a("FormItem",{attrs:{label:"状态：",prop:"status"}},[a("i-switch",{on:{"on-change":e.handleSwitchChange},model:{value:e.createData.statusFormat,callback:function(t){e.$set(e.createData,"statusFormat",t)},expression:"createData.statusFormat"}})],1)],1)],1)],1)},p=[],m=(a("a15b"),a("ac1f"),a("1276"),{name:"create-form",data:function(){return{showCreate:!1,updateIndex:-1,creating:!0,currentKeyword:"",createData:{user_name:"",real_name:"",phone:"",status:1,statusFormat:!0},createRules:{user_name:[{required:!0,message:"请输入用户名",trigger:"blur"}],real_name:[{required:!0,message:"请输入真实姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}]},info:{}}},methods:{handleShowUpdateCreate:function(e,t){this.showCreate=e,this.updateIndex=t,this.updateIndex>0&&this.handleShow()},handleShow:function(){var e=this;Object(d["c"])({id:this.updateIndex}).then((function(t){e.createData=Object.assign(e.createData,t),e.createData.tagKeywordList=e.createData.tag_keyword?e.createData.tag_keyword.split(","):[]})).finally((function(){e.creating=!1}))},handleHotSwitchChange:function(e){this.createData.is_hot=e?1:0,this.createData.hotFormat=e},handleStatusSwitchChange:function(e){this.createData.status=e?1:0,this.createData.statusFormat=e},handleTagAdd:function(){var e=this.createData.tagKeywordList.indexOf(this.currentKeyword);if(e>=0)return this.$Message.error("关键词已存在"),!1;this.createData.tagKeywordList.push(this.currentKeyword),this.createData.tag_keyword=this.createData.tagKeywordList.join(","),this.currentKeyword=""},handleCloseTag:function(e,t){var a=this.createData.tagKeywordList.indexOf(t);this.createData.tagKeywordList.splice(a,1),this.createData.tag_keyword=this.createData.tagKeywordList.join(",")},handleCreate:function(){var e=this;this.$refs.create.validate((function(t){t?(e.updateIndex<0?Object(d["d"])(e.createData).then(function(){var t=Object(c["a"])(l.a.mark((function t(a){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$Message.success("创建成功"),e.$emit("on-ok"),e.handleCancel();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):(e.createData.id=e.updateIndex,Object(d["e"])(e.createData).then((function(t){e.$Message.success("修改成功"),e.$emit("on-ok"),e.handleCancel()}))),e.creating=!1,e.$nextTick((function(){e.creating=!0}))):(e.creating=!1,e.$nextTick((function(){e.creating=!0})))}))},handleCancel:function(){this.$refs.create.resetFields(),this.createData.tagKeywordList=[],this.$emit("on-create-form",!1,-1)},handleSwitchChange:function(e){this.createData.status=e?1:0,this.createData.statusFormat=e}}}),b=m,v=a("2877"),y=Object(v["a"])(b,f,p,!1,null,"7c76e298",null),g=y.exports,_={components:{searchForm:h["a"],createForm:g},data:function(){return{columns:[{type:"selection",width:60,align:"center"},{title:"ID",key:"id",minWidth:80},{title:"用户名",key:"user_name",minWidth:100},{title:"真实姓名",key:"real_name",minWidth:100},{title:"手机号",key:"phone",minWidth:100},{title:"状态",slot:"status",minWidth:100,filters:[{label:"禁用",value:0},{label:"正常",value:1}],filterMultiple:!0,filterRemote:function(e){this.filterType=e}},{title:"添加时间",key:"created_at",minWidth:140,sortable:"custom"},{title:"操作",slot:"action",align:"center",minWidth:140}],loading:!1,list:[],selectedData:[],current:1,total:0,size:10,sortType:"normal",sortColumns:"",filterType:void 0,searchForm:{},baseSeachForm:{type:"id",keyword:"",options:[{name:"ID",value:"id"},{name:"用户名",value:"user_name"},{name:"姓名",value:"real_name"},{name:"手机号",value:"phone"}]},advancedSearchForm:[{label_name:"用户状态：",label_prop:"status",ele_value:"",ele_type:"select",options:[{value:"0",name:"禁用"},{value:"1",name:"正常"}]},{label_name:"创建时间：",label_prop:"created_at",ele_value:"",ele_type:"daterange",options:[]}]}},computed:{limitData:function(){var e=this,t=Object(u["a"])(this.list),a=this.sortColumns;"asc"===this.sortType&&(t=t.sort((function(e,t){return e[a]>t[a]?1:-1}))),"desc"===this.sortType&&(t=t.sort((function(e,t){return e[a]<t[a]?1:-1}))),this.filterType&&this.filterType.length&&(t=t.filter((function(t){return e.filterType.indexOf(t.status)>=0})));var r=this.selectedData.map((function(e){return e.user_name}));return t.map((function(e){return e._checked=r.indexOf(e.user_name)>=0,e})),t},dataWithPage:function(){var e=this.limitData,t=this.current*this.size-this.size,a=t+this.size;return Object(u["a"])(e).slice(t,a)}},methods:{getData:function(){var e=this;this.loading=!0,Object(d["a"])({page:this.current,limit:this.size}).then(function(){var t=Object(c["a"])(l.a.mark((function t(a){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.list=a.data,e.total=a.total;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){e.loading=!1}))},searchData:function(e){var t=this;this.searchForm=e,this.loading=!0,Object(d["b"])({page:this.current,limit:this.size,search:e}).then(function(){var e=Object(c["a"])(l.a.mark((function e(a){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.list=a.data,t.total=a.total;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){t.loading=!1}))},handleSortChange:function(e){var t=e.key,a=e.order;this.sortColumns=t,this.sortType=a,this.current=1},handleFilterChange:function(){this.current=1},handleSelect:function(e,t){this.selectedData.push(t)},handleSelectCancel:function(e,t){var a=this.selectedData.findIndex((function(e){return e.id===t.id}));this.selectedData.splice(a,1)},handleSelectAll:function(e){var t=this;e.forEach((function(e){t.selectedData.findIndex((function(t){return t.id===e.id}))<0&&t.selectedData.push(e)}))},handleSelectAllCancel:function(){var e=this,t=this.dataWithPage;t.forEach((function(t){var a=e.selectedData.findIndex((function(e){return e.id===t.id}));a>=0&&e.selectedData.splice(a,1)}))},handleClearSelect:function(){this.selectedData=[]},handleClickItem:function(e){var t=this;"delete"===e&&this.$Modal.confirm({title:"删除标签",content:"确定批量删除标签吗？",onOk:function(){t.selectedData.forEach((function(e){var a=t.list.findIndex((function(t){return t.id===e.id}));a>=0&&t.list.splice(a,1)})),t.selectedData=[]}})},handleOpenUpdateCreate:function(e,t){this.$refs.createForm.handleShowUpdateCreate(e,t)},handleDelete:function(e){var t=this;this.updateIndex=e,this.$Modal.confirm({title:"删除标签",content:"确定删除该标签吗？",onOk:function(){Object(d["e"])({id:t.list[e].id}).then((function(e){t.$Message.success("删除成功"),t.current=1,t.getData()})).finally((function(){}))}})},handleChange:function(e){this.current=e,this.searchForm?this.searchData(this.searchForm):this.getData()}}},w=_,D=Object(v["a"])(w,o,s,!1,null,null,null),C=D.exports,k={name:"user-index",components:{list:C},data:function(){return{}},methods:{getData:function(){this.$refs.list.getData()}},mounted:function(){this.getData()}},F=k,x=Object(v["a"])(F,r,n,!1,null,null,null);t["default"]=x.exports},2197:function(e,t,a){},"3d50":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-form"},[a("Form",{ref:"searchForm",attrs:{"label-width":e.labelWidth,"label-position":e.labelPosition}},[a("Row",{staticClass:"search-form-base-row"},[a("Col",e._b({},"Col",e.gridLeft,!1),[a("FormItem",{attrs:{"label-width":0}},[a("Input",{staticStyle:{float:"left","max-width":"450px"},attrs:{clearable:"",search:"","enter-button":"搜索",placeholder:"请输入查询内容"},on:{"on-search":function(t){return e.handleSubmit(1)}},model:{value:e.baseSearchForm.keyword,callback:function(t){e.$set(e.baseSearchForm,"keyword",t)},expression:"baseSearchForm.keyword"}},[a("Select",{staticStyle:{width:"100px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:e.baseSearchForm.type,callback:function(t){e.$set(e.baseSearchForm,"type",t)},expression:"baseSearchForm.type"}},e._l(e.baseSearchForm.options,(function(t,r){return a("Option",{key:r,attrs:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),e.showAdvanced?a("Button",{directives:[{name:"color",rawName:"v-color",value:"#2d8cf0",expression:"'#2d8cf0'"}],staticStyle:{float:"left"},attrs:{type:"text"},on:{click:function(t){e.collapse=!e.collapse}}},[e._v(" "+e._s(e.collapse?"普通搜索":"高级搜索")+" "),a("Icon",{attrs:{type:e.collapse?"ios-arrow-up":"ios-arrow-down"}})],1):e._e()],1)],1),a("Col",e._b({staticClass:"ivu-text-right"},"Col",e.gridRight,!1),[a("FormItem",{attrs:{"label-width":0}},[e.showRefresh?a("Button",{staticClass:"ivu-ml-8",attrs:{type:"success",icon:"md-refresh"},on:{click:e.handleRefresh}},[e._v("刷新 ")]):e._e(),e.showCreate?a("Button",{staticClass:"ivu-ml-8",attrs:{type:"primary",icon:"md-add"},on:{click:e.handleOpenCreate}},[e._v("新建 ")]):e._e(),e.showExport?a("Button",{staticClass:"ivu-ml-8",attrs:{type:"primary",icon:"md-download"},on:{click:e.handleExport}},[e._v("导出 ")]):e._e(),e.showMultiDel?a("Dropdown",{staticClass:"ivu-ml-8",on:{"on-click":e.handleMultiClick}},[a("Button",[e._v(" 更多操作 "),a("Icon",{attrs:{type:"ios-arrow-down"}})],1),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[a("DropdownItem",{attrs:{name:"delete"}},[e._v("批量删除")])],1)],1):e._e()],1)],1)],1),a("Row",{staticStyle:{"margin-top":"10px"}},[e.collapse?[e._l(e.advancedSearchForm,(function(t,r){return a("Col",e._b({key:r},"Col",e.grid,!1),[a("FormItem",{attrs:{label:t.label_name,prop:t.label_prop,"label-for":t.label_prop}},["select"===t.ele_type?[a("Select",{attrs:{placeholder:"请选择",clearable:"","element-id":t.label_prop},model:{value:t.ele_value,callback:function(a){e.$set(t,"ele_value",a)},expression:"item.ele_value"}},e._l(t.options,(function(t,r){return a("Option",{key:r,attrs:{value:t.value}},[e._v(e._s(t.name)+" ")])})),1)]:"input"===t.ele_type?[a("Input",{attrs:{placeholder:"请输入关键词搜索",clearable:"","element-id":t.label_prop},model:{value:t.ele_value,callback:function(a){e.$set(t,"ele_value",a)},expression:"item.ele_value"}})]:"switch"===t.ele_type?[a("i-switch",{attrs:{"true-value":t.options.true_value,"false-value":t.options.false_value},on:{"on-change":e.handleSwitchChange},model:{value:t.ele_value,callback:function(a){e.$set(t,"ele_value",a)},expression:"item.ele_value"}},[[a("span",{attrs:{slot:"open"},slot:"open"},[e._v(e._s(t.options.open))]),a("span",{attrs:{slot:"close"},slot:"close"},[e._v(e._s(t.options.close))])]],2)]:"date"===t.ele_type||"datetime"===t.ele_type||"daterange"===t.ele_type||"datetimerange"===t.ele_type?[a("DatePicker",{ref:"date_picker_"+t.label_prop,refInFor:!0,staticStyle:{width:"100%"},attrs:{value:t.ele_value,type:t.ele_type,format:e.dateFormat(t.format,t.ele_type),options:t.options,placeholder:"请选择日期"},on:{"on-change":function(a){return e.handleDateChange(t.label_prop,r)}}})]:e._e()],2)],1)})),a("Col",e._b({},"Col",e.grid,!1),[e._t("content")],2),a("Col",e._b({staticClass:"ivu-text-right"},"Col",e.grid,!1),[a("FormItem",{attrs:{label:""}},[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit(2)}}},[e._v("高级搜索")]),a("Button",{staticClass:"ivu-ml-8",on:{click:e.handleReset}},[e._v("重置")])],1)],1)]:e._e()],2)],1)],1)},n=[],o=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),s=a("2f62"),i={data:function(){return{}},methods:{dateFormat:function(e,t){switch(t){case"date":case"daterange":return e||"yyyy-MM-dd";case"datetime":case"datetimerange":return e||"yyyy-MM-dd HH:mm";default:return e||"yyyy-MM-dd HH:mm"}}}};function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={name:"search-form",mixins:[i],props:{showRefresh:{type:Boolean,default:!0},showExport:{type:Boolean,default:!0},showCreate:{type:Boolean,default:!0},showAdvanced:{type:Boolean,default:!0},showMultiDel:{type:Boolean,default:!1},baseSearchForm:{type:Object,default:function(){return{}}},advancedSearchForm:{type:Array,default:function(){return[]}}},data:function(){return{gridLeft:{xl:14,lg:14,md:12,sm:24,xs:24},gridRight:{xl:10,lg:10,md:12,sm:24,xs:24},grid:{xl:8,lg:8,md:12,sm:24,xs:24},collapse:!1,searchForm:{time:{}},timeArr:[],selectedKeys:[]}},computed:c({},Object(s["e"])("admin/layout",["isMobile"]),{labelWidth:function(){return this.isMobile?void 0:100},labelPosition:function(){return this.isMobile?"top":"right"}}),methods:{handleSubmit:function(e){var t=this;if(1===e&&""===this.baseSearchForm.keyword)return!1;if(this.searchForm={type:this.baseSearchForm.type,keyword:this.baseSearchForm.keyword},this.advancedSearchForm.length>0){var a={};this.advancedSearchForm.forEach((function(e,r){switch(e.ele_type){case"date":case"datetime":case"daterange":case"datetimerange":a[e.label_prop]=e.ele_value,t.searchForm.time=a;break;default:t.searchForm[e.label_prop]=e.ele_value;break}}))}this.$emit("on-search",this.searchForm)},handleReset:function(){this.baseSearchForm.keyword="",this.advancedSearchForm.length>0&&this.advancedSearchForm.forEach((function(e,t){"switch"!==e.ele_type&&(e.ele_value="")})),this.searchForm={time:{}},this.$emit("on-reset")},handleRefresh:function(){var e=this;if(this.searchForm={type:this.baseSearchForm.type,keyword:this.baseSearchForm.keyword},this.advancedSearchForm.length>0){var t={};this.advancedSearchForm.forEach((function(a,r){switch(a.ele_type){case"date":case"datetime":case"daterange":case"datetimerange":t[a.label_prop]=a.ele_value,e.searchForm.time=t;break;default:e.searchForm[a.label_prop]=a.ele_value;break}}))}this.$emit("on-search",this.searchForm)},handleOpenCreate:function(){this.$emit("on-create-form",!0,-1)},handleExport:function(){this.$emit("on-export")},handleMultiClick:function(e){"delete"===e&&this.$emit("on-multi-del")},handleSwitchChange:function(e){},handleDateChange:function(e,t){var a=this.$refs["date_picker_".concat(e)][0].publicStringValue;this.advancedSearchForm[t].ele_value=a}}},d=u,h=(a("a050"),a("02b5"),a("2877")),f=Object(h["a"])(d,r,n,!1,null,"49ac7946",null);t["a"]=f.exports},"4e82":function(e,t,a){"use strict";var r=a("23e7"),n=a("1c0b"),o=a("7b0b"),s=a("d039"),i=a("b301"),l=[],c=l.sort,u=s((function(){l.sort(void 0)})),d=s((function(){l.sort(null)})),h=i("sort"),f=u||!d||h;r({target:"Array",proto:!0,forced:f},{sort:function(e){return void 0===e?c.call(o(this)):c.call(o(this),n(e))}})},"9a17":function(e,t,a){},a050:function(e,t,a){"use strict";var r=a("9a17"),n=a.n(r);n.a},c24f:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return i})),a.d(t,"e",(function(){return l}));var r=a("b6bd");function n(e){return Object(r["a"])({url:"/user/index",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/user/index",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/user/show",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/user/store",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/user/update",method:"post",data:e})}},fb6a:function(e,t,a){"use strict";var r=a("23e7"),n=a("861d"),o=a("e8b5"),s=a("23cb"),i=a("50c4"),l=a("fc6a"),c=a("8418"),u=a("1dde"),d=a("b622"),h=d("species"),f=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!u("slice")},{slice:function(e,t){var a,r,u,d=l(this),m=i(d.length),b=s(e,m),v=s(void 0===t?m:t,m);if(o(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?n(a)&&(a=a[h],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return f.call(d,b,v);for(r=new(void 0===a?Array:a)(p(v-b,0)),u=0;b<v;b++,u++)b in d&&c(r,u,d[b]);return r.length=u,r}})}}]);