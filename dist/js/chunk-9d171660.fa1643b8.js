(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d171660"],{"07e4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{class:{abcdefg:!0},attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:6}},[a("a-form-item",{attrs:{label:"员工姓名"}},[a("a-input",{attrs:{placeholder:"请输入姓名信息"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}})],1)],1),a("a-col",{attrs:{md:6,sm:6}},[a("a-form-item",{attrs:{label:"员工性别"}},[a("a-select",{staticStyle:{width:"100%"},model:{value:e.queryParam.sex,callback:function(t){e.$set(e.queryParam,"sex",t)},expression:"queryParam.sex"}},[a("a-select-option",{attrs:{value:""}},[e._v("全部")]),a("a-select-option",{attrs:{value:"男"}},[e._v("男")]),a("a-select-option",{attrs:{value:"女"}},[e._v("女")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:6}},[a("a-form-item",{attrs:{label:"开户银行"}},[a("a-input",{attrs:{placeholder:"请输入开户行信息"},model:{value:e.queryParam.bankName,callback:function(t){e.$set(e.queryParam,"bankName",t)},expression:"queryParam.bankName"}})],1)],1),a("a-col",{attrs:{md:6,sm:6}},[a("a-form-item",{attrs:{label:"银行卡号"}},[a("a-input",{attrs:{placeholder:"请输入银行卡信息"},model:{value:e.queryParam.bankName,callback:function(t){e.$set(e.queryParam,"bankName",t)},expression:"queryParam.bankName"}})],1)],1),a("a-col",{attrs:{md:6,sm:6}},[a("a-form-item",{attrs:{label:"入职时间"}},[a("a-range-picker",{model:{value:e.queryParam.time,callback:function(t){e.$set(e.queryParam,"time",t)},expression:"queryParam.time"}})],1)],1),a("a-col",{attrs:{md:6,sm:6}},[a("a-form-item",{attrs:{label:"证件号码"}},[a("a-input",{attrs:{placeholder:"请输入证件号码"},model:{value:e.queryParam.idcard,callback:function(t){e.$set(e.queryParam,"idcard",t)},expression:"queryParam.idcard"}})],1)],1),a("a-col",{attrs:{md:6,sm:6}},[a("a-form-item",{attrs:{label:"手机号码"}},[a("a-input",{attrs:{placeholder:"请输入手机号码"},model:{value:e.queryParam.phone,callback:function(t){e.$set(e.queryParam,"phone",t)},expression:"queryParam.phone"}})],1)],1),a("a-col",{attrs:{md:6,sm:6}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{staticStyle:{"margin-left":"0px",float:"left"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px",float:"left"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("a-col",{attrs:{md:24,sm:24}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:e.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:e.columns,dataSource:e.userList,pagination:!0,scroll:{x:6e3,y:800}}})]],2)],1)},r=[],s=(a("96cf"),a("3b8d")),i=a("da05"),o=a("290c"),c=a("261e"),l=a("0fea"),m=a("5d2d"),u=a("ca00"),d=a("c1df"),p=[{title:"姓名",width:200,align:"center",key:"name",dataIndex:"name",slots:{title:"name"},scopedSlots:{customRender:"name"}},{title:"性别",width:100,align:"center",key:"sex",dataIndex:"sex",slots:{title:"sex"},scopedSlots:{customRender:"sex"}},{title:"人员性质",width:200,align:"center",key:"employee_feature",dataIndex:"employee_feature",slots:{title:"employee_feature"},scopedSlots:{customRender:"employee_feature"}},{title:"单位名称",width:200,align:"center",key:"company_name",dataIndex:"company_name",slots:{title:"company_name"},scopedSlots:{customRender:"company_name"}},{title:"所属中心",width:200,align:"center",key:"center_name",dataIndex:"center_name",slots:{title:"center_name"},scopedSlots:{customRender:"center_name"}},{title:"岗位名称",width:200,align:"center",key:"job_name",dataIndex:"job_name",slots:{title:"job_name"},scopedSlots:{customRender:"job_name"}},{title:"职级",width:300,align:"center",key:"job_level",dataIndex:"job_level",slots:{title:"job_level"},scopedSlots:{customRender:"job_level"}},{title:"入职时间",width:200,align:"center",key:"join_time",dataIndex:"join_time",slots:{title:"join_time"},scopedSlots:{customRender:"join_time"}},{title:"劳动合同期限",width:300,align:"center",key:"contract_time",dataIndex:"contract_time",slots:{title:"contract_time"},scopedSlots:{customRender:"contract_time"}},{title:"公司司龄",width:100,align:"center",key:"work_year",dataIndex:"work_year",slots:{title:"work_year"},scopedSlots:{customRender:"work_year"}},{title:"银行账号",width:300,align:"center",key:"bank_no",dataIndex:"bank_no",slots:{title:"bank_no"},scopedSlots:{customRender:"bank_no"}},{title:"开户行",width:500,align:"center",key:"bank_name",dataIndex:"bank_name",slots:{title:"bank_name"},scopedSlots:{customRender:"bank_name"}},{title:"试用期",width:200,align:"center",key:"probation_status",dataIndex:"probation_status",slots:{title:"probation_status"},scopedSlots:{customRender:"probation_status"}},{title:"转正日期",width:200,align:"center",key:"confirm_date",dataIndex:"confirm_date",slots:{title:"confirm_date"},scopedSlots:{customRender:"confirm_date"}},{title:"在职状态",width:100,align:"center",key:"work_status",dataIndex:"work_status",slots:{title:"work_status"},scopedSlots:{customRender:"work_status"}},{title:"离职时间",width:200,align:"center",key:"off_time",dataIndex:"off_time",slots:{title:"off_time"},scopedSlots:{customRender:"off_time"}},{title:"病产孕",width:100,align:"center",key:"pregnancy",dataIndex:"pregnancy",slots:{title:"pregnancy"},scopedSlots:{customRender:"pregnancy"}},{title:"病产孕时间",width:300,align:"center",key:"pregnancy_time",dataIndex:"pregnancy_time",slots:{title:"pregnancy_time"},scopedSlots:{customRender:"pregnancy_time"}},{title:"证件号",width:300,align:"center",key:"id_card",dataIndex:"id_card",slots:{title:"id_card"},scopedSlots:{customRender:"id_card"}},{title:"通讯号码",width:200,align:"center",key:"phone",dataIndex:"phone",slots:{title:"phone"},scopedSlots:{customRender:"phone"}},{title:"工资卡开户行",width:500,align:"center",key:"salary_bank_name",dataIndex:"salary_bank_name",slots:{title:"salary_bank_name"},scopedSlots:{customRender:"salary_bank_name"}},{title:"工资卡卡号",width:300,align:"center",key:"salary_bank_no",dataIndex:"salary_bank_no",slots:{title:"salary_bank_no"},scopedSlots:{customRender:"salary_bank_no"}},{title:"离职办理状态",width:300,align:"center",key:"off_work_status",dataIndex:"off_work_status",slots:{title:"off_work_status"},scopedSlots:{customRender:"off_work_status"}},{title:"工资归属单位",width:500,align:"center",key:"wages_team",dataIndex:"wages_team",slots:{title:"wages_team"},scopedSlots:{customRender:"wages_team"}},{title:"工资主体单位",width:200,align:"center",key:"wages_main_unit",dataIndex:"wages_main_unit",slots:{title:"wages_main_unit"},scopedSlots:{customRender:"wages_main_unit"}},{title:"编制状态",width:100,align:"center",key:"compilation_status",dataIndex:"compilation_status",slots:{title:"compilation_status"},scopedSlots:{customRender:"compilation_status"}}],y={name:"RegisterQuery",components:{ATextarea:c["a"],ARow:o["a"],ACol:i["b"]},props:{reBizCode:{type:String,default:""}},data:function(){return{columns:p,previewVisible:!1,previewImage:"",fileList:[],userList:[],queryParam:{},spinning:!1}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loadData();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=m["c"]("cur_user"),this.queryParam=m["c"]("system_register_list_user@".concat(t.username)),""!=this.queryParam&&null!=this.queryParam&&"{}"!=JSON.stringify(this.queryParam)){e.next=8;break}return this.queryParam={},e.next=6,this.getDate();case 6:e.next=11;break;case 8:return this.queryParam.time.length>0&&(this.queryParam.time[0]=u["i"](this.queryParam.time[0],"yyyy-MM-dd"),this.queryParam.time[1]=u["i"](this.queryParam.time[1],"yyyy-MM-dd"),this.queryParam.time=[d(this.queryParam.time[0],"YYYY-MM-DD"),d(this.queryParam.time[1],"YYYY-MM-DD")]),e.next=11,this.searchQuery();case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDate:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.searchQuery();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDetailWF:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var a,n,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=JSON.parse(JSON.stringify(t)),n=m["c"]("cur_user"),r=a["tname"],s="知会"==a["type"]?"notify":"workflow",i="/workflow/view?table_name=".concat(r,"&id=").concat(a.id,"&processLogID=").concat(a.pid,"&user=").concat(n.username,"&type=").concat(s),this.$router.push(i);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),searchQuery:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=m["c"]("cur_user"),a=t["username"],e.next=4,l["ib"](a,this.queryParam);case 4:this.userList=e.sent,m["d"]("system_register_list_user@".concat(t.username),JSON.stringify(this.queryParam),3600);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),searchReset:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.queryParam={};case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},_=y,h=(a("1eba"),a("2877")),f=Object(h["a"])(_,n,r,!1,null,"5a88c54f",null);t["default"]=f.exports},"133a":function(e,t,a){},"1eba":function(e,t,a){"use strict";var n=a("133a"),r=a.n(n);r.a}}]);