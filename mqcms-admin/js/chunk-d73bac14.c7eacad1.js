(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d73bac14"],{1664:function(t,e,i){"use strict";var a=i("a0a5"),s=i.n(a);s.a},3133:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"i-layout-page-header"},[i("PageHeader",{attrs:{title:"搜索列表（项目）","hidden-breadcrumb":"","tab-list":t.tabList,"tab-active-key":t.tabActiveKey},on:{"on-tab-change":t.handleChangeTab}},[i("div",{staticClass:"ivu-mt ivu-mb",staticStyle:{"max-width":"500px",margin:"0 auto"},attrs:{slot:"content"},slot:"content"},[i("Input",{attrs:{search:"",size:"large","enter-button":"搜索",placeholder:"Enter something..."}})],1)])],1),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("Form",[i("FormItem",{attrs:{label:"分类："}},[i("TagSelect",{attrs:{expandable:""},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[i("TagSelectOption",{attrs:{name:"type1"}},[t._v("类别一")]),i("TagSelectOption",{attrs:{name:"type2"}},[t._v("类别二")]),i("TagSelectOption",{attrs:{name:"type3"}},[t._v("类别三")]),i("TagSelectOption",{attrs:{name:"type4"}},[t._v("类别四")]),i("TagSelectOption",{attrs:{name:"type5"}},[t._v("类别五")]),i("TagSelectOption",{attrs:{name:"type6"}},[t._v("类别六")]),i("TagSelectOption",{attrs:{name:"type7"}},[t._v("类别七")]),i("TagSelectOption",{attrs:{name:"type8"}},[t._v("类别八")]),i("TagSelectOption",{attrs:{name:"type9"}},[t._v("类别九")]),i("TagSelectOption",{attrs:{name:"type10"}},[t._v("类别十")]),i("TagSelectOption",{attrs:{name:"type11"}},[t._v("类别十一")]),i("TagSelectOption",{attrs:{name:"type12"}},[t._v("类别十二")]),i("TagSelectOption",{attrs:{name:"type13"}},[t._v("类别十三")]),i("TagSelectOption",{attrs:{name:"type14"}},[t._v("类别十四")]),i("TagSelectOption",{attrs:{name:"type15"}},[t._v("类别十五")]),i("TagSelectOption",{attrs:{name:"type16"}},[t._v("类别十六")])],1)],1),i("Divider",{attrs:{dashed:""}}),i("FormItem",{attrs:{label:"排序："}},[i("RadioGroup",{model:{value:t.order,callback:function(e){t.order=e},expression:"order"}},[i("Radio",{attrs:{label:"new"}},[t._v("最新创建")]),i("Radio",{attrs:{label:"update"}},[t._v("最后更新")])],1)],1)],1)],1),i("project-template",{attrs:{"project-list":t.projectList}}),t.loading?i("div",{directives:[{name:"height",rawName:"v-height",value:120,expression:"120"}],staticStyle:{position:"relative"}},[i("Spin",{attrs:{size:"large",fix:""}})],1):t._e()],1)},s=[],r=i("67e2"),c=i("4950"),n=i("d69a"),o={name:"search-search-projects",mixins:[r["a"]],components:{projectTemplate:c["a"]},data:function(){return{tabActiveKey:"projects",type:[],order:"new",projectList:[],loading:!1}},methods:{getProject:function(){var t=this;this.loading=!0,setTimeout((function(){t.projectList=n["a"],t.loading=!1}),1e3)}},mounted:function(){this.getProject()}},l=o,p=i("2877"),v=Object(p["a"])(l,a,s,!1,null,null,null);e["default"]=v.exports},4950:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Row",{staticClass:"ivu-mt",attrs:{gutter:24}},t._l(t.projectList,(function(e,a){return i("Col",{key:a,staticClass:"ivu-mb",attrs:{xl:t.compact?12:6,lg:t.compact?12:8,md:12,sm:12,xs:24}},[i("i-link",{attrs:{to:e.link,target:"_blank"}},[i("Card",{staticClass:"search-search-projects-item",attrs:{bordered:t.bordered,padding:0}},[i("img",{staticClass:"search-search-projects-item-cover",attrs:{src:e.cover}}),i("div",{staticClass:"ivu-p-8"},[i("div",[i("strong",[t._v(t._s(e.title))])]),i("div",{staticClass:"search-search-projects-item-desc"},[t._v(t._s(e.desc))]),i("div",{staticClass:"search-search-projects-item-extra ivu-mt-8 ivu-pb-8"},[i("Time",{attrs:{time:e.time,type:"date"}}),i("span",{staticClass:"ivu-fr"},[i("AvatarList",{attrs:{list:t.avatarList,size:"small"}})],1)],1)])])],1)],1)})),1)},s=[],r={props:{projectList:{type:Array},compact:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},data:function(){return{avatarList:[{src:"https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar",tip:"史蒂夫·乔布斯"},{src:"https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar",tip:"斯蒂夫·沃兹尼亚克"},{src:"https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar",tip:"乔纳森·伊夫"}]}}},c=r,n=(i("1664"),i("2877")),o=Object(n["a"])(c,a,s,!1,null,null,null);e["a"]=o.exports},"67e2":function(t,e,i){"use strict";i("7f7f");e["a"]={data:function(){return{tabList:[{label:"文章",name:"article"},{label:"项目",name:"projects"},{label:"应用",name:"apps"}]}},methods:{handleChangeTab:function(t){var e=t.name;e!==this.tabActiveKey&&this.$router.push("/search/search-".concat(e))}}}},a0a5:function(t,e,i){},d69a:function(t,e,i){"use strict";e["a"]=[{title:"iView",desc:"一套基于 Vue.js 的企业级 UI 组件库，内含 50+ 常用基础组件",cover:"https://dev-file.iviewui.com/RZ8FQmZfHkcffMlTBCJllBFjEhEsObVo/middle",time:new Date("2016-07-28 14:00:00"),link:"https://www.iviewui.com/"},{title:"iView Pro",desc:"基于 iView 的高阶组件库，对 iView 基础组件的扩展，内含 30+ 业务及高阶组件",cover:"https://dev-file.iviewui.com/WLXm7gp1EbLDtvVQgkeQeyq5OtDm00Jd/middle",time:new Date("2019-02-01 14:00:00"),link:"https://pro.iviewui.com/pro/"},{title:"iView Admin Pro",desc:"基于 iView 的企业级中后台系统，内置 iView 及 iView Pro，功能强大，适用于各种中后台系统，高可配",cover:"https://dev-file.iviewui.com/4Z0QR2L0J1XStxBh99jVJ8qLfsGsOgjU/middle",time:new Date("2019-03-01 14:00:00"),link:"https://pro.iviewui.com/admin-pro/"},{title:"iView Developer",desc:"iView 官方社区，关于 iView 你想知道的一切，都可以在这里向作者提问",cover:"https://dev-file.iviewui.com/ttkIjNPlVDuv4lUTvRX8GIlM2QqSe0jg/middle",time:new Date("2018-06-01 14:00:00"),link:"https://dev.iviewui.com/"},{title:"iView Run",desc:"iView 在线运行编辑器，内置了 iView 环境，直接在线编写 .vue 文件，实时运行",cover:"https://dev-file.iviewui.com/fAenQ8nvRjL7x0i0jEfuDBZHvJfHf3v6/middle",time:new Date("2018-07-01 14:00:00"),link:"https://run.iviewui.com/"},{title:"iView Editor",desc:"基于 iView 的 markdown 编辑器",cover:"https://dev-file.iviewui.com/LrCTN2j94lo9N7wEql7cBr1Ux4rHMvmZ/middle",time:new Date("2018-07-05 14:00:00"),link:"http://editor.iviewui.com/"},{title:"iView Doc",desc:"iView 官方文档",cover:"https://dev-file.iviewui.com/yeKvhT20lMU0f1T3Y743UlGEOLLnZSnp/middle",time:new Date("2016-08-01 14:00:00"),link:"https://www.iviewui.com/"},{title:"iView Cli",desc:"基于 Electron 的 iView 项目快速构建工具",cover:"https://dev-file.iviewui.com/CyrCNmTJfv7D6GFAg39bjT3eRkkRm5dI/middle",time:new Date("2017-09-02 14:00:00"),link:"https://iviewui.com/cli/"}]}}]);