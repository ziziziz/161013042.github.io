
"undefined"!=typeof process&&"node"===process.release.name?global.localizeGlobalNamespace=global:window.localizeGlobalNamespace=window,function(e,r){e.TabGlobalize=function(){function e(r){if(!(this instanceof e))return new e(r);u(r,"locale"),s(r,"locale"),this._locale=r}var r=function(e){return"string"==typeof e?e:"number"==typeof e?""+e:JSON.stringify(e)},a=function(e,a){return e=e.replace(/{[0-9a-zA-Z-_. ]+}/g,function(e){return e=e.replace(/^{([^}]*)}$/,"$1"),r(a[e])})},t=function(){var e=arguments[0];return[].slice.call(arguments,1).forEach(function(r){var a;for(a in r)e[a]=r[a]}),e},n=function(e,r,n){var o;return r=e+(r?": "+a(r,n):""),o=new Error(r),o.code=e,t(o,n),o},o=function(e){return[].reduce.call(e,function(e,r){return 0|(e=(e<<5)-e+r.charCodeAt(0))},0)},l=function(e,r,a,t){var n;return t=t||JSON.stringify(a),n=o(e+r+t),n>0?"a"+n:"b"+Math.abs(n)},i=function(e,r,a,t){if(!a)throw n(e,r,t)},u=function(e,r){i("E_MISSING_PARAMETER","Missing required parameter `{name}`.",void 0!==e,{name:r})},c=function(e,r,a,t){i("E_INVALID_PAR_TYPE","Invalid `{name}` parameter ({value}). {expected} expected.",a,{expected:t,name:r,value:e})},s=function(e,r){c(e,r,void 0===e||"string"==typeof e,"a string")},f=function(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},p=function(e,r,a){var t;for("string"!=typeof e&&(e=String(e)),t=e.length;t<r;t+=1)e=a?e+"0":"0"+e;return e};return e.locale=function(e){return s(e,"locale"),arguments.length&&(this._locale=e),this._locale},e._createError=n,e._formatMessage=a,e._regexpEscape=f,e._runtimeKey=l,e._stringPad=p,e._validateParameterPresence=u,e._validateParameterTypeString=s,e._validateParameterType=c,e}()}(localizeGlobalNamespace),function(e,r){!function(e){var r=e._runtimeKey,a=e._validateParameterType,t=function(e){return null!==e&&""+e=="[object Object]"},n=function(e,r){a(e,r,void 0===e||t(e)||Array.isArray(e),"Array or Plain Object")},o=function(e){return function(r){return"number"!=typeof r&&"string"!=typeof r||(r=[].slice.call(arguments,0)),n(r,"variables"),e(r)}};e._messageFormatterFn=o,e._messageFormat=function(){return{number:function(e,r){if(isNaN(e))throw new Error("'"+e+"' isn't a number.");return e-(r||0)},plural:function(e,r,a,t,n){if({}.hasOwnProperty.call(t,e))return t[e]();r&&(e-=r);var o=a(e,n);return o in t?t[o]():t.other()},select:function(e,r){return{}.hasOwnProperty.call(r,e)?r[e]():r.other()}}}(),e._validateParameterTypeMessageVariables=n,e.messageFormatter=e.prototype.messageFormatter=function(){return e[r("messageFormatter",this._locale,[].slice.call(arguments,0))]},e.formatMessage=e.prototype.formatMessage=function(e){return this.messageFormatter(e).apply({},[].slice.call(arguments,1))}}(e.TabGlobalize)}(localizeGlobalNamespace),function(e,r){!function(e){var r=e._runtimeKey,a=e._validateParameterPresence,t=e._validateParameterType,n=function(e,r){t(e,r,void 0===e||"number"==typeof e,"Number")},o=function(e){return function(r){return a(r,"value"),n(r,"value"),e(r)}};e._pluralGeneratorFn=o,e._validateParameterTypeNumber=n,e.plural=e.prototype.plural=function(e,r){return a(e,"value"),n(e,"value"),this.pluralGenerator(r)(e)},e.pluralGenerator=e.prototype.pluralGenerator=function(a){return a=a||{},e[r("pluralGenerator",this._locale,[a])]}}(e.TabGlobalize)}(localizeGlobalNamespace);

(function( root, factory ) {
  root.Localize = root.Localize || {};
  root.Localize.msg = new root.TabGlobalize('zh-Hans');
  factory( root.TabGlobalize, root.Localize );
  if (root.Localize.initFormattersAndParsers) {
    root.Localize.initFormattersAndParsers();
  }
}(localizeGlobalNamespace, function( Globalize ) {
var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.b1234768562 = pluralGeneratorFn(function(n) {
  return 'other';
});
Globalize.b1858542540 = messageFormatterFn((function(  ) {
  return function (d) { return "Range"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a874251083 = messageFormatterFn((function(  ) {
  return function (d) { return "Certified by"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a867644147 = messageFormatterFn((function(  ) {
  return function (d) { return "Live connection"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b586999432 = messageFormatterFn((function(  ) {
  return function (d) { return "Last extract:"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b2113298315 = messageFormatterFn((function(  ) {
  return function (d) { return "将视图快照添加到您的注释中"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1205603878 = messageFormatterFn((function(  ) {
  return function (d) { return "注释"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1897955822 = messageFormatterFn((function(  ) {
  return function (d) { return "关闭面板"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1388711644 = messageFormatterFn((function(  ) {
  return function (d) { return "添加注释..."; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1824838341 = messageFormatterFn((function(  ) {
  return function (d) { return "此视图上没有注释。"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1684524154 = messageFormatterFn((function(  ) {
  return function (d) { return "@提及某人以通知他们。"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1182163194 = messageFormatterFn((function(  ) {
  return function (d) { return "发布"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a134075567 = messageFormatterFn((function(  ) {
  return function (d) { return "视图"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1871979351 = messageFormatterFn((function(  ) {
  return function (d) { return "无法创建视图快照"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1038341602 = messageFormatterFn((function(  ) {
  return function (d) { return "无法加载注释"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a911613184 = messageFormatterFn((function(  ) {
  return function (d) { return "正在加载注释..."; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1920898622 = messageFormatterFn((function(  ) {
  return function (d) { return "检查您的 Internet 连接并重试。"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a998176168 = messageFormatterFn((function(  ) {
  return function (d) { return "检查您的 Internet 连接并刷新以重试"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a58804004 = messageFormatterFn((function(  ) {
  return function (d) { return "无法获取注释"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a242489235 = messageFormatterFn((function(  ) {
  return function (d) { return "无法获取图像"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1514259973 = messageFormatterFn((function(  ) {
  return function (d) { return "无法下载图像"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1457403444 = messageFormatterFn((function(  ) {
  return function (d) { return "正在将快照的筛选器和选择应用于视图..."; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a404262780 = messageFormatterFn((function(  ) {
  return function (d) { return "无法将 " + d.user + " 的快照应用于视图"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b754448223 = messageFormatterFn((function(  ) {
  return function (d) { return "消息太长"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1729103056 = messageFormatterFn((function(  ) {
  return function (d) { return "无法发送。"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b41114385 = messageFormatterFn((function(  ) {
  return function (d) { return "轻击以重试"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b797658984 = messageFormatterFn((function(  ) {
  return function (d) { return "重试"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1262483406 = messageFormatterFn((function(  ) {
  return function (d) { return "无法加载注释"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1203805808 = messageFormatterFn((function(  ) {
  return function (d) { return "将不通知用户"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b308698400 = messageFormatterFn((function(  ) {
  return function (d) { return "用户无权查看此视图，并且将不会获得通知"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a618051778 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function (d) { return plural(d.itemCount, 0, pluralFuncs["zh-Hans"], { one: function() { return "用户";}, other: function() { return d.formattedItemCount + " 个用户";} }) + " 将不会获得通知。"; }
})(messageFormat.plural, {"zh-Hans": Globalize("zh-Hans").pluralGenerator()}), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b2068105979 = messageFormatterFn((function(  ) {
  return function (d) { return "已移除用户"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a280945316 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function (d) { return plural(d.itemCount, 0, pluralFuncs["zh-Hans"], { one: function() { return "用户";}, other: function() { return d.formattedItemCount + " 个用户";} }) + " 将不会获得有关 " + d.comment + " 的通知。"; }
})(messageFormat.plural, {"zh-Hans": Globalize("zh-Hans").pluralGenerator()}), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1148807686 = messageFormatterFn((function(  ) {
  return function (d) { return "出现未知错误"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1988792983 = messageFormatterFn((function(  ) {
  return function (d) { return "移除快照"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b559890551 = messageFormatterFn((function(  ) {
  return function (d) { return "Automatic"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a2003873820 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b560912690 = messageFormatterFn((function(  ) {
  return function (d) { return "Include zero"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b2110009189 = messageFormatterFn((function(  ) {
  return function (d) { return "Independent axis ranges for each row or column"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a43854557 = messageFormatterFn((function(  ) {
  return function (d) { return "Logarithmic"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a788333677 = messageFormatterFn((function(  ) {
  return function (d) { return "Certification mark icon"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1717156653 = messageFormatterFn((function(  ) {
  return function (d) { return "Reset"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b590266950 = messageFormatterFn((function(  ) {
  return function (d) { return "Reversed"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1078942599 = messageFormatterFn((function(  ) {
  return function (d) { return "Scale"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1879654403 = messageFormatterFn((function(  ) {
  return function (d) { return "Show times"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a33374864 = messageFormatterFn((function(  ) {
  return function (d) { return "Subtitle"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b687169034 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function (d) { return plural(d.itemCount, 0, pluralFuncs["zh-Hans"], { one: function() { return "Title";}, other: function() { return "Titles";} }); }
})(messageFormat.plural, {"zh-Hans": Globalize("zh-Hans").pluralGenerator()}), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a764764065 = messageFormatterFn((function(  ) {
  return function (d) { return "Uniform axis range for all rows or columns"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b876907108 = messageFormatterFn((function(  ) {
  return function (d) { return "Uniform"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a891654232 = messageFormatterFn((function(  ) {
  return function (d) { return "Independent"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1687451445 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed end"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b2145238724 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed start"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a276926580 = messageFormatterFn((function(  ) {
  return function (d) { return "Synchronize dual axes"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1243443427 = messageFormatterFn((function(  ) {
  return function (d) { return "New field name:"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a146638528 = messageFormatterFn((function(  ) {
  return function (d) { return "Size of bins:"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b213008462 = messageFormatterFn((function(  ) {
  return function (d) { return "Range of Values:"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a491132758 = messageFormatterFn((function(  ) {
  return function (d) { return "Min:"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b513178063 = messageFormatterFn((function(  ) {
  return function (d) { return "Diff:"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1980866556 = messageFormatterFn((function(  ) {
  return function (d) { return "Max:"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1640637819 = messageFormatterFn((function(  ) {
  return function (d) { return "CntD:"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a614329886 = messageFormatterFn((function(  ) {
  return function (d) { return "Suggest Bin Size"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1890484889 = messageFormatterFn((function(  ) {
  return function (d) { return "字体系列"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b893924772 = messageFormatterFn((function(  ) {
  return function (d) { return "字体大小"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1011691367 = messageFormatterFn((function(  ) {
  return function (d) { return "加粗"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1900729188 = messageFormatterFn((function(  ) {
  return function (d) { return "倾斜"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1299810716 = messageFormatterFn((function(  ) {
  return function (d) { return "下划线"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1656866362 = messageFormatterFn((function(  ) {
  return function (d) { return "颜色"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1129065010 = messageFormatterFn((function(  ) {
  return function (d) { return "左侧"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1442052480 = messageFormatterFn((function(  ) {
  return function (d) { return "居中"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1163253155 = messageFormatterFn((function(  ) {
  return function (d) { return "右侧"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b655950300 = messageFormatterFn((function(  ) {
  return function (d) { return "插入"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1204301363 = messageFormatterFn((function(  ) {
  return function (d) { return "插入字段"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1841354639 = messageFormatterFn((function(  ) {
  return function (d) { return "清除格式"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a227629278 = messageFormatterFn((function(  ) {
  return function (d) { return "清除格式"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1723735885 = messageFormatterFn((function(  ) {
  return function (d) { return "应用"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1559537922 = messageFormatterFn((function(  ) {
  return function (d) { return "应用"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1052769441 = messageFormatterFn((function(  ) {
  return function (d) { return "确定"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.b1688501904 = messageFormatterFn((function(  ) {
  return function (d) { return "确定"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a2110887858 = messageFormatterFn((function(  ) {
  return function (d) { return "重置"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
Globalize.a1551014977 = messageFormatterFn((function(  ) {
  return function (d) { return "重置"; }
})(), Globalize("zh-Hans").pluralGenerator({}));
}));
