"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[428],{2428:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h1",[n._v("EventTest组件")]),t("pre",{ref:"pre",on:{click:n.handler}},[n._v("本是同根生,相煎何太急")]),t("Event1",{nativeOn:{click:function(e){return n.handler1.apply(null,arguments)}}}),t("hr"),t("pre",{on:{memeda:n.handler2}},[n._v("     大江东去浪淘尽,千古风流人物\n  ")]),t("Event2",{on:{click:n.handler3,xxx:n.handler4}}),t("hr"),t("el-button",{attrs:{type:"success"},on:{click:n.ceshi}},[n._v("我是按钮")])],1)},c=[],r=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},o=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{background:"#ccc",height:"80px"}},[t("h2",[n._v("Event1组件")]),t("span",[n._v("其它内容")])])}],u=t(1001),i={},s=(0,u.Z)(i,r,o,!1,null,null,null),a=s.exports,h=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticStyle:{background:"#ccc",height:"80px"}},[t("h2",[n._v("Event2组件")]),t("button",{on:{click:function(e){return n.$emit("click","自定义事件click")}}},[n._v("分发自定义click事件")]),t("br"),t("button",{on:{click:function(e){return n.$emit("xxx","我是自定义事件xxx")}}},[n._v("分发自定义xxx事件")]),t("br")])},v=[],f={},p=(0,u.Z)(f,h,v,!1,null,null,null),d=p.exports,_={name:"EventTest",components:{Event1:a,Event2:d},methods:{handler:function(n){this.$refs.pre.style.color="red",console.log("我是原生DOM事件",n)},handler1:function(){console.log("event1事件回调测试")},handler2:function(){},handler3:function(n){console.log(n)},handler4:function(n){console.log(n)},ceshi:function(n){console.log(n)}}},x=_,k=(0,u.Z)(x,l,c,!1,null,null,null),m=k.exports}}]);