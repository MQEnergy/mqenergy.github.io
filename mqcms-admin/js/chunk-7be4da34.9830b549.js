(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7be4da34"],{"4e82":function(t,e,a){"use strict";var n=a("23e7"),r=a("1c0b"),i=a("7b0b"),o=a("d039"),s=a("b301"),c=[],l=c.sort,u=o((function(){c.sort(void 0)})),d=o((function(){c.sort(null)})),h=s("sort"),m=u||!d||h;n({target:"Array",proto:!0,forced:m},{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),r(t))}})},bc60:function(t,e,a){},c24f:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"e",(function(){return c}));var n=a("b6bd");function r(t){return Object(n["a"])({url:"/user/index",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/user/index",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/user/show",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/user/store",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/user/update",method:"post",data:t})}},cc6b:function(t,e,a){"use strict";var n=a("bc60"),r=a.n(n);r.a},f406:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"i-layout-page-header"},[a("page-header",{attrs:{title:"附件列表",content:"","hidden-breadcrumb":""}})],1),a("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[a("list",{ref:"list"})],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"i-table-no-border"},[a("search-form",{ref:"searchForm",staticStyle:{"border-bottom":"1px solid #eee"},attrs:{"show-multi-action":!0,"multi-actions":t.multiActions,"show-export":!1,"show-import":!0,"show-create":!1,"base-search-form":t.baseSearchForm,"advanced-search-form":t.advancedSearchForm},on:{"on-import":t.handleShowImport,"on-create-form":t.handleOpenUpdateCreate,"on-search":t.searchData,"on-reset":t.getData,"on-show-recyle":t.handleShowRecyle,"on-multi-del":t.handleMultiDel}}),a("div",{staticClass:"ivu-mt"},[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":t.handleChangeMode},model:{value:t.modeType,callback:function(e){t.modeType=e},expression:"modeType"}},[a("Radio",{attrs:{label:"list"}},[a("Icon",{attrs:{type:"md-menu"}})],1),a("Radio",{attrs:{label:"thumb"}},[a("Icon",{attrs:{type:"md-apps"}})],1)],1),t.loading?a("div",{staticStyle:{position:"relative",height:"100px"}},[a("Spin",{attrs:{fix:"",size:"large"}})],1):0===t.limitData.length?a("empty"):a("div",["list"===t.modeType?a("div",[a("Table",{ref:"table",staticClass:"ivu-mt",attrs:{columns:t.columns,data:t.limitData,loading:t.loading},on:{"on-sort-change":t.handleSortChange,"on-filter-change":t.handleFilterChange,"on-select":t.handleSelect,"on-select-cancel":t.handleSelectCancel,"on-select-all":t.handleSelectAll,"on-select-all-cancel":t.handleSelectAllCancel},scopedSlots:t._u([{key:"attach_name",fn:function(t){var e=t.row;return[a("List",[a("ListItem",[a("ListItemMeta",{attrs:{avatar:e.attach_full_url,title:e.attach_name,description:e.attach_origin_name}})],1)],1)]}},{key:"attach_size",fn:function(e){var n=e.row;return[t._v(" 大小："+t._s(parseFloat(n.attach_size/1e3).toFixed(2)>1024?parseFloat(n.attach_size/1e3/1e3).toFixed(2)+"MB":parseFloat(n.attach_size/1e3).toFixed(2)+"KB")),a("br"),t._v(" 类型："+t._s(n.attach_minetype)+" ")]}},{key:"attach_type",fn:function(e){var n=e.row;return[1===n.attach_type?a("Tag",{attrs:{color:"primary"}},[t._v("图片")]):t._e(),2===n.attach_type?a("Tag",{attrs:{color:"success"}},[t._v("视频")]):t._e(),3===n.attach_type?a("Tag",{attrs:{color:"error"}},[t._v("其他")]):t._e()]}},{key:"status",fn:function(e){var n=e.row;return[0===n.status?a("Badge",{attrs:{status:"default",text:"禁用"}}):t._e(),1===n.status?a("Badge",{attrs:{status:"processing",text:"正常"}}):t._e()]}},{key:"action",fn:function(e){var n=e.row,r=e.index;return[a("a",{on:{click:function(e){return t.handleShow(r)}}},[t._v("查看")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.handleOpenUpdateCreate(!0,n.id)}}},[t._v("编辑")]),a("Divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.handleRemove(r)}}},[t._v("删除")])]}}],null,!1,1824597263)})],1):a("div",[a("Row",{staticClass:"ivu-mt search-search-projects",attrs:{gutter:24}},t._l(t.limitData,(function(e,n){return a("Col",{key:n,staticClass:"ivu-mb",attrs:{xxl:3,xl:6,lg:6,md:12,sm:12,xs:24}},[a("Card",{staticClass:"search-search-projects-item",attrs:{bordered:t.bordered,padding:0}},[1===e.attach_type?a("img",{staticClass:"search-search-projects-item-cover",attrs:{src:e.attach_full_url}}):t._e(),2===e.attach_type?a("video",{staticClass:"search-search-projects-item-cover",attrs:{muted:"",autoplay:""},domProps:{muted:!0}},[a("source",{attrs:{src:e.attach_full_url,type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")]):t._e(),a("div",{staticClass:"search-search-projects-item-extra"},[a("Time",{attrs:{time:e.created_at,type:"datetime"}})],1),a("Divider",{staticClass:"ivu-mb-8 ivu-mt-8"}),a("Row",{staticClass:"ivu-text-center ivu-pb-8"},[a("Col",{staticClass:"ivu-br",attrs:{span:"12"}},[a("Tooltip",{attrs:{placement:"top",content:"删除图片"}},[a("Button",{attrs:{icon:"md-trash",type:"text",size:"large"},on:{click:function(e){return t.handleRemove(n)}}})],1)],1),a("Col",{attrs:{span:"12"}},[a("Tooltip",{attrs:{placement:"top",content:"查看"}},[a("Button",{attrs:{icon:"md-eye",type:"text",size:"large"}})],1)],1)],1)],1)],1)})),1)],1),a("div",{staticClass:"ivu-mt ivu-text-right",attrs:{slot:"footer"},slot:"footer"},[a("Page",{attrs:{total:t.total,"show-total":"",current:t.current,"show-elevator":"","show-sizer":"","page-size":t.size},on:{"update:current":function(e){t.current=e},"on-change":t.handleChange,"on-page-size-change":t.handlePageSizeChange}})],1)])],1),a("create-form",{ref:"createForm",on:{"on-create-form":t.handleOpenUpdateCreate,"on-ok":t.getData}}),a("Modal",{attrs:{title:"选择图片",width:"800","mask-closable":!1},on:{"on-ok":t.handleOk,"on-cancel":t.handleCancel},model:{value:t.uploadFormSeen,callback:function(e){t.uploadFormSeen=e},expression:"uploadFormSeen"}},[a("upload-form",{ref:"uploadForm",attrs:{multiple:!1},on:{"on-success":t.handleSuccess,"on-show-image":t.handleShowImage}})],1)],1)},o=[],s=(a("4de4"),a("c740"),a("c975"),a("d81d"),a("fb6a"),a("4e82"),a("a434"),a("d3b7"),a("159b"),a("a34a")),c=a.n(s),l=(a("96cf"),a("1da1")),u=a("2909"),d=a("b6bd");function h(t){return Object(d["a"])({url:"/attachment/index",method:"get",params:t})}function m(t){return Object(d["a"])({url:"/attachment/index",method:"post",data:t})}function f(t){return Object(d["a"])({url:"/attachment/delete",method:"post",data:t})}var p=a("3d50"),g=a("f449"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Modal",{attrs:{width:"600","mask-closable":!1,title:"新建标签",loading:t.creating},on:{"on-ok":t.handleCreate,"on-cancel":t.handleCancel},model:{value:t.showCreate,callback:function(e){t.showCreate=e},expression:"showCreate"}},[a("Form",{ref:"create",attrs:{model:t.createData,rules:t.createRules,"label-position":"left","label-width":80}},[a("FormItem",{attrs:{label:"用户名：",prop:"user_name"}},[a("Input",{attrs:{placeholder:"请输入用户名"},model:{value:t.createData.user_name,callback:function(e){t.$set(t.createData,"user_name",e)},expression:"createData.user_name"}})],1),a("FormItem",{attrs:{label:"姓名：",prop:"real_name"}},[a("Input",{attrs:{placeholder:"请输入真实姓名"},model:{value:t.createData.real_name,callback:function(e){t.$set(t.createData,"real_name",e)},expression:"createData.real_name"}})],1),a("FormItem",{attrs:{label:"手机号：",prop:"phone"}},[a("Input",{attrs:{placeholder:"请输入手机号"},model:{value:t.createData.phone,callback:function(e){t.$set(t.createData,"phone",e)},expression:"createData.phone"}})],1),a("FormItem",{attrs:{label:"状态：",prop:"status"}},[a("i-switch",{on:{"on-change":t.handleSwitchChange},model:{value:t.createData.statusFormat,callback:function(e){t.$set(t.createData,"statusFormat",e)},expression:"createData.statusFormat"}})],1)],1)],1)],1)},b=[],y=(a("a15b"),a("ac1f"),a("1276"),a("c24f")),_={name:"create-form",data:function(){return{showCreate:!1,updateIndex:-1,creating:!0,currentKeyword:"",createData:{user_name:"",real_name:"",phone:"",status:1,statusFormat:!0},createRules:{user_name:[{required:!0,message:"请输入用户名",trigger:"blur"}],real_name:[{required:!0,message:"请输入真实姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}]},info:{}}},methods:{handleShowUpdateCreate:function(t,e){this.showCreate=t,this.updateIndex=e,this.updateIndex>0&&this.handleShow()},handleShow:function(){var t=this;Object(y["c"])({id:this.updateIndex}).then((function(e){t.createData=Object.assign(t.createData,e),t.createData.tagKeywordList=t.createData.tag_keyword?t.createData.tag_keyword.split(","):[]})).finally((function(){t.creating=!1}))},handleHotSwitchChange:function(t){this.createData.is_hot=t?1:0,this.createData.hotFormat=t},handleStatusSwitchChange:function(t){this.createData.status=t?1:0,this.createData.statusFormat=t},handleTagAdd:function(){var t=this.createData.tagKeywordList.indexOf(this.currentKeyword);if(t>=0)return this.$Message.error("关键词已存在"),!1;this.createData.tagKeywordList.push(this.currentKeyword),this.createData.tag_keyword=this.createData.tagKeywordList.join(","),this.currentKeyword=""},handleCloseTag:function(t,e){var a=this.createData.tagKeywordList.indexOf(e);this.createData.tagKeywordList.splice(a,1),this.createData.tag_keyword=this.createData.tagKeywordList.join(",")},handleCreate:function(){var t=this;this.$refs.create.validate((function(e){e?(t.updateIndex<0?Object(y["d"])(t.createData).then(function(){var e=Object(l["a"])(c.a.mark((function e(a){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$Message.success("创建成功"),t.$emit("on-ok"),t.handleCancel();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):(t.createData.id=t.updateIndex,Object(y["e"])(t.createData).then((function(e){t.$Message.success("修改成功"),t.$emit("on-ok"),t.handleCancel()}))),t.creating=!1,t.$nextTick((function(){t.creating=!0}))):(t.creating=!1,t.$nextTick((function(){t.creating=!0})))}))},handleCancel:function(){this.$refs.create.resetFields(),this.createData.tagKeywordList=[],this.$emit("on-create-form",!1,-1)},handleSwitchChange:function(t){this.createData.status=t?1:0,this.createData.statusFormat=t}}},w=_,D=a("2877"),C=Object(D["a"])(w,v,b,!1,null,"acf4e22a",null),x=C.exports,k=a("50b2"),S={components:{SearchForm:p["a"],CreateForm:x,Empty:k["a"],UploadForm:g["a"]},data:function(){return{modeType:"list",columns:[{type:"selection",width:80,align:"left"},{title:"ID",width:80,key:"id"},{title:"附件信息",key:"attach_name",minWidth:300,slot:"attach_name"},{title:"附件参数",key:"attach_size",width:200,slot:"attach_size"},{title:"类型",key:"attach_type",minWidth:80,slot:"attach_type"},{title:"添加时间",key:"created_at",width:180,sortable:"custom"},{title:"操作",slot:"action",align:"center",width:200}],bordered:!0,loading:!1,list:[],selectedData:[],current:1,total:0,size:10,sortType:"normal",sortColumns:"",filterType:void 0,searchForm:{},baseSearchForm:{type:"id",keyword:"",options:[{name:"ID",value:"id"},{name:"附件名称",value:"attach_name"},{name:"附件原名称",value:"attach_origin_name"}]},advancedSearchForm:[{label_name:"附件类型：",label_prop:"attach_type",ele_value:"",ele_type:"select",options:[{value:"1",name:"单图"},{value:"2",name:"视频"},{value:"3",name:"其他"}]},{label_name:"创建时间：",label_prop:"created_at",ele_value:"",ele_type:"daterange",options:{}}],multiActions:[{name:"查看回收站",value:"on-show-recyle"},{name:"批量删除",value:"on-multi-del"}],uploadFormSeen:!1}},computed:{limitData:function(){var t=this,e=Object(u["a"])(this.list),a=this.sortColumns;"asc"===this.sortType&&(e=e.sort((function(t,e){return t[a]>e[a]?1:-1}))),"desc"===this.sortType&&(e=e.sort((function(t,e){return t[a]<e[a]?1:-1}))),this.filterType&&this.filterType.length&&(e=e.filter((function(e){return t.filterType.indexOf(e.status)>=0})));var n=this.selectedData.map((function(t){return t.id}));return e.map((function(t){return t._checked=n.indexOf(t.id)>=0,t})),e},dataWithPage:function(){var t=this.limitData,e=this.current*this.size-this.size,a=e+this.size;return Object(u["a"])(t).slice(e,a)}},methods:{getData:function(){var t=this;this.loading=!0,h({page:this.current,limit:this.size}).then(function(){var e=Object(l["a"])(c.a.mark((function e(a){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.list=a.data,t.total=a.total;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){t.loading=!1}))},searchData:function(t){var e=this;this.list=[],this.searchForm=t,this.loading=!0,m({page:this.current,search:t,limit:this.size}).then(function(){var t=Object(l["a"])(c.a.mark((function t(a){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.list=a.data,e.total=a.total;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){e.loading=!1}))},handleSortChange:function(t){var e=t.key,a=t.order;this.sortColumns=e,this.sortType=a,this.current=1},handleFilterChange:function(){this.current=1},handleSelect:function(t,e){this.selectedData.push(e)},handleSelectCancel:function(t,e){var a=this.selectedData.findIndex((function(t){return t.id===e.id}));this.selectedData.splice(a,1)},handleSelectAll:function(t){var e=this;t.forEach((function(t){e.selectedData.findIndex((function(e){return e.id===t.id}))<0&&e.selectedData.push(t)}))},handleSelectAllCancel:function(){var t=this,e=this.dataWithPage;e.forEach((function(e){var a=t.selectedData.findIndex((function(t){return t.id===e.id}));a>=0&&t.selectedData.splice(a,1)}))},handleClearSelect:function(){this.selectedData=[]},handleClickItem:function(t){var e=this;"delete"===t&&this.$Modal.confirm({title:"删除标签",content:"确定批量删除标签吗？",onOk:function(){e.selectedData.forEach((function(t){var a=e.list.findIndex((function(e){return e.id===t.id}));a>=0&&e.list.splice(a,1)})),e.selectedData=[]}})},handleOpenUpdateCreate:function(t,e){this.$refs.createForm.handleShowUpdateCreate(t,e)},handleRemove:function(t){var e=this;this.updateIndex=t,this.$Modal.confirm({title:"删除提示",content:"确定删除该记录吗？",onOk:function(){f({id:e.list[t].id}).then((function(t){e.$Message.success("删除成功"),e.current=1,e.getData()})).finally((function(){}))}})},handleChange:function(t){this.current=t,this.searchForm?this.searchData(this.searchForm):this.getData()},handlePageSizeChange:function(t){this.current=1,this.size=t,this.searchForm?this.searchData(this.searchForm):this.getData()},handleShowImport:function(){this.uploadFormSeen=!0},handleOk:function(){console.log("OK")},handleCancel:function(){this.uploadFormSeen=!1},handleSuccess:function(){console.log("OK")},handleShowImage:function(){console.log("OK")},handleShowRecyle:function(){console.log("recyle")},handleChangeMode:function(t){this.size="thumb"===t?24:10,this.getData(),console.log(t)},handleMultiDel:function(){var t=this;if(0===this.selectedData.length)return this.$Message.error("请选择列表"),!1;this.$Modal.confirm({title:"删除提示",content:"确定删除该记录吗？",onOk:function(){f({id:t.list[index].id}).then((function(e){t.$Message.success("删除成功"),t.current=1,t.getData()})).finally((function(){}))}})},handleShow:function(){console.log("show")}}},F=S,O=(a("cc6b"),Object(D["a"])(F,i,o,!1,null,"e2f0665e",null)),I=O.exports,j={name:"attachment-index",components:{list:I},data:function(){return{}},methods:{getData:function(){this.$refs.list.getData()}},mounted:function(){this.getData()}},$=j,T=Object(D["a"])($,n,r,!1,null,null,null);e["default"]=T.exports},fb6a:function(t,e,a){"use strict";var n=a("23e7"),r=a("861d"),i=a("e8b5"),o=a("23cb"),s=a("50c4"),c=a("fc6a"),l=a("8418"),u=a("1dde"),d=a("b622"),h=d("species"),m=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!u("slice")},{slice:function(t,e){var a,n,u,d=c(this),p=s(d.length),g=o(t,p),v=o(void 0===e?p:e,p);if(i(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!i(a.prototype)?r(a)&&(a=a[h],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return m.call(d,g,v);for(n=new(void 0===a?Array:a)(f(v-g,0)),u=0;g<v;g++,u++)g in d&&l(n,u,d[g]);return n.length=u,n}})}}]);