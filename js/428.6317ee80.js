"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[428],{2428:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("EventTest组件")]),t("pre",{ref:"pre",on:{click:e.handler}},[e._v("本是同根生,相煎何太急")]),t("Event1",{nativeOn:{click:function(n){return e.handler1.apply(null,arguments)}}}),t("hr"),t("pre",{on:{memeda:e.handler2}},[e._v("     大江东去浪淘尽,千古风流人物\n  ")]),t("Event2",{on:{click:e.handler3,xxx:e.handler4}}),t("hr"),t("el-button",{attrs:{type:"success"},on:{click:e.ceshi}},[e._v("我是按钮")])],1)},c=[],r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{background:"#ccc",height:"80px"}},[t("h2",[e._v("Event1组件")]),t("span",[e._v("其它内容")])])}],u=t(1001),s={},i=(0,u.Z)(s,r,o,!1,null,null,null),a=i.exports,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{background:"#ccc",height:"80px"}},[t("h2",[e._v("Event2组件")]),t("button",{on:{click:function(n){return e.$emit("click","自定义事件click")}}},[e._v("分发自定义click事件")]),t("br"),t("button",{on:{click:function(n){return e.$emit("xxx","我是自定义事件xxx")}}},[e._v("分发自定义xxx事件")]),t("br")])},v=[],p={},d=(0,u.Z)(p,h,v,!1,null,null,null),f=d.exports,_={name:"EventTest",components:{Event1:a,Event2:f},methods:{handler(e){this.$refs.pre.style.color="red",console.log("我是原生DOM事件",e)},handler1(){console.log("event1事件回调测试")},handler2(){},handler3(e){console.log(e)},handler4(e){console.log(e)},ceshi(e){console.log(e)}}},x=_,k=(0,u.Z)(x,l,c,!1,null,null,null),m=k.exports}}]);