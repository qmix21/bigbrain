/*! Wiki.js - wiki.js.org - Licensed under AGPL */
(this.webpackJsonp=this.webpackJsonp||[]).push([["editor-code"],{"./client/components/editor/editor-code.vue":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editor-code"},[o("div",{staticClass:"editor-code-main"},[o("div",{staticClass:"editor-code-editor"},[o("codemirror",{ref:"cm",attrs:{options:e.cmOptions},on:{ready:e.onCmReady,input:e.onCmInput},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)])])};s._withStripped=!0;var i=o("./node_modules/lodash/debounce.js"),n=o.n(i),r=o("./node_modules/lodash/set.js"),a=o.n(r);o("./node_modules/codemirror/lib/codemirror.js"),o("./node_modules/codemirror/lib/codemirror.css"),o("./node_modules/codemirror/mode/markdown/markdown.js"),o("./node_modules/codemirror/addon/selection/active-line.js"),o("./node_modules/codemirror/addon/display/fullscreen.js"),o("./node_modules/codemirror/addon/display/fullscreen.css"),o("./node_modules/codemirror/addon/selection/mark-selection.js"),o("./node_modules/codemirror/addon/scroll/annotatescrollbar.js"),o("./node_modules/codemirror/addon/search/matchesonscrollbar.js"),o("./node_modules/codemirror/addon/search/searchcursor.js"),o("./node_modules/codemirror/addon/search/match-highlighter.js");const l=/Mac/.test(navigator.platform)?"Cmd":"Ctrl";var d={data:()=>({code:"<h1>Title</h1>\n\n<p>Some text here</p>",cmOptions:{tabSize:2,mode:"text/html",theme:"wikijs-dark",lineNumbers:!0,lineWrapping:!0,line:!0,styleActiveLine:!0,highlightSelectionMatches:{annotateScrollbar:!0},viewportMargin:50}}),computed:{cm(){return this.$refs.cm.codemirror},isMobile(){return this.$vuetify.breakpoint.smAndDown}},methods:{onCmReady(e){let t=this;const o={F11(e){e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc(e){e.getOption("fullScreen")&&e.setOption("fullScreen",!1)}};a()(o,"".concat(l,"-S"),e=>{t.$parent.save()}),e.setSize(null,"calc(100vh - 64px)"),e.setOption("extraKeys",o),this.onCmInput(this.code)},onCmInput:n()((function(e){this.$store.set("editor/content",e)}),500)}},c=(o("./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&"),o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),h=Object(c.a)(d,s,[],!1,null,null,null);h.options.__file="client/components/editor/editor-code.vue";t.default=h.exports},"./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,o){"use strict";var s=o("./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&");o.n(s).a},"./node_modules/cache-loader/dist/cjs.js?!./node_modules/style-loader/dist/index.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,o){var s=o("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&");"string"==typeof s&&(s=[[e.i,s,""]]);var i={insert:"head",singleton:!1};o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(s,i);s.locals&&(e.exports=s.locals)},"./node_modules/codemirror/addon/scroll/annotatescrollbar.js":function(e,t,o){!function(e){"use strict";function t(e,t){function o(e){clearTimeout(s.doRedraw),s.doRedraw=setTimeout((function(){s.redraw()}),e)}this.cm=e,this.options=t,this.buttonHeight=t.scrollButtonHeight||e.getOption("scrollButtonHeight"),this.annotations=[],this.doRedraw=this.doUpdate=null,this.div=e.getWrapperElement().appendChild(document.createElement("div")),this.div.style.cssText="position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none",this.computeScale();var s=this;e.on("refresh",this.resizeHandler=function(){clearTimeout(s.doUpdate),s.doUpdate=setTimeout((function(){s.computeScale()&&o(20)}),100)}),e.on("markerAdded",this.resizeHandler),e.on("markerCleared",this.resizeHandler),!1!==t.listenForChanges&&e.on("change",this.changeHandler=function(){o(250)})}e.defineExtension("annotateScrollbar",(function(e){return"string"==typeof e&&(e={className:e}),new t(this,e)})),e.defineOption("scrollButtonHeight",0),t.prototype.computeScale=function(){var e=this.cm,t=(e.getWrapperElement().clientHeight-e.display.barHeight-2*this.buttonHeight)/e.getScrollerElement().scrollHeight;if(t!=this.hScale)return this.hScale=t,!0},t.prototype.update=function(e){this.annotations=e,this.redraw()},t.prototype.redraw=function(e){!1!==e&&this.computeScale();var t=this.cm,o=this.hScale,s=document.createDocumentFragment(),i=this.annotations,n=t.getOption("lineWrapping"),r=n&&1.5*t.defaultTextHeight(),a=null,l=null;function d(e,o){return a!=e.line&&(a=e.line,l=t.getLineHandle(a)),l.widgets&&l.widgets.length||n&&l.height>r?t.charCoords(e,"local")[o?"top":"bottom"]:t.heightAtLine(l,"local")+(o?0:l.height)}var c=t.lastLine();if(t.display.barWidth)for(var h,u=0;u<i.length;u++){var m=i[u];if(!(m.to.line>c)){for(var p=h||d(m.from,!0)*o,f=d(m.to,!1)*o;u<i.length-1&&!(i[u+1].to.line>c)&&!((h=d(i[u+1].from,!0)*o)>f+.9);)f=d((m=i[++u]).to,!1)*o;if(f!=p){var g=Math.max(f-p,3),v=s.appendChild(document.createElement("div"));v.style.cssText="position: absolute; right: 0px; width: "+Math.max(t.display.barWidth-1,2)+"px; top: "+(p+this.buttonHeight)+"px; height: "+g+"px",v.className=this.options.className,m.id&&v.setAttribute("annotation-id",m.id)}}}this.div.textContent="",this.div.appendChild(s)},t.prototype.clear=function(){this.cm.off("refresh",this.resizeHandler),this.cm.off("markerAdded",this.resizeHandler),this.cm.off("markerCleared",this.resizeHandler),this.changeHandler&&this.cm.off("change",this.changeHandler),this.div.parentNode.removeChild(this.div)}}(o("./node_modules/codemirror/lib/codemirror.js"))},"./node_modules/codemirror/addon/search/match-highlighter.js":function(e,t,o){!function(e){"use strict";var t={style:"matchhighlight",minChars:2,delay:100,wordsOnly:!1,annotateScrollbar:!1,showToken:!1,trim:!0};function o(e){for(var o in this.options={},t)this.options[o]=(e&&e.hasOwnProperty(o)?e:t)[o];this.overlay=this.timeout=null,this.matchesonscroll=null,this.active=!1}function s(e){var t=e.state.matchHighlighter;(t.active||e.hasFocus())&&n(e,t)}function i(e){var t=e.state.matchHighlighter;t.active||(t.active=!0,n(e,t))}function n(e,t){clearTimeout(t.timeout),t.timeout=setTimeout((function(){l(e)}),t.options.delay)}function r(e,t,o,s){var i=e.state.matchHighlighter;if(e.addOverlay(i.overlay=function(e,t,o){return{token:function(s){if(s.match(e)&&(!t||function(e,t){return!(e.start&&t.test(e.string.charAt(e.start-1))||e.pos!=e.string.length&&t.test(e.string.charAt(e.pos)))}(s,t)))return o;s.next(),s.skipTo(e.charAt(0))||s.skipToEnd()}}}(t,o,s)),i.options.annotateScrollbar&&e.showMatchesOnScrollbar){var n=o?new RegExp("\\b"+t.replace(/[\\\[.+*?(){|^$]/g,"\\$&")+"\\b"):t;i.matchesonscroll=e.showMatchesOnScrollbar(n,!1,{className:"CodeMirror-selection-highlight-scrollbar"})}}function a(e){var t=e.state.matchHighlighter;t.overlay&&(e.removeOverlay(t.overlay),t.overlay=null,t.matchesonscroll&&(t.matchesonscroll.clear(),t.matchesonscroll=null))}function l(e){e.operation((function(){var t=e.state.matchHighlighter;if(a(e),e.somethingSelected()||!t.options.showToken){var o=e.getCursor("from"),s=e.getCursor("to");if(o.line==s.line&&(!t.options.wordsOnly||function(e,t,o){if(null!==e.getRange(t,o).match(/^\w+$/)){if(t.ch>0){var s={line:t.line,ch:t.ch-1};if(null===e.getRange(s,t).match(/\W/))return!1}return!(o.ch<e.getLine(t.line).length&&(s={line:o.line,ch:o.ch+1},null===e.getRange(o,s).match(/\W/)))}return!1}(e,o,s))){var i=e.getRange(o,s);t.options.trim&&(i=i.replace(/^\s+|\s+$/g,"")),i.length>=t.options.minChars&&r(e,i,!1,t.options.style)}}else{for(var n=!0===t.options.showToken?/[\w$]/:t.options.showToken,l=e.getCursor(),d=e.getLine(l.line),c=l.ch,h=c;c&&n.test(d.charAt(c-1));)--c;for(;h<d.length&&n.test(d.charAt(h));)++h;c<h&&r(e,d.slice(c,h),n,t.options.style)}}))}e.defineOption("highlightSelectionMatches",!1,(function(t,n,r){if(r&&r!=e.Init&&(a(t),clearTimeout(t.state.matchHighlighter.timeout),t.state.matchHighlighter=null,t.off("cursorActivity",s),t.off("focus",i)),n){var d=t.state.matchHighlighter=new o(n);t.hasFocus()?(d.active=!0,l(t)):t.on("focus",i),t.on("cursorActivity",s)}}))}(o("./node_modules/codemirror/lib/codemirror.js"),o("./node_modules/codemirror/addon/search/matchesonscrollbar.js"))},"./node_modules/codemirror/addon/search/matchesonscrollbar.js":function(e,t,o){!function(e){"use strict";function t(e,t,o,s){this.cm=e,this.options=s;var i={listenForChanges:!1};for(var n in s)i[n]=s[n];i.className||(i.className="CodeMirror-search-match"),this.annotation=e.annotateScrollbar(i),this.query=t,this.caseFold=o,this.gap={from:e.firstLine(),to:e.lastLine()+1},this.matches=[],this.update=null,this.findMatches(),this.annotation.update(this.matches);var r=this;e.on("change",this.changeHandler=function(e,t){r.onChange(t)})}function o(e,t,o){return e<=t?e:Math.max(t,e+o)}e.defineExtension("showMatchesOnScrollbar",(function(e,o,s){return"string"==typeof s&&(s={className:s}),s||(s={}),new t(this,e,o,s)})),t.prototype.findMatches=function(){if(this.gap){for(var t=0;t<this.matches.length&&!((i=this.matches[t]).from.line>=this.gap.to);t++)i.to.line>=this.gap.from&&this.matches.splice(t--,1);for(var o=this.cm.getSearchCursor(this.query,e.Pos(this.gap.from,0),{caseFold:this.caseFold,multiline:this.options.multiline}),s=this.options&&this.options.maxMatches||1e3;o.findNext();){var i;if((i={from:o.from(),to:o.to()}).from.line>=this.gap.to)break;if(this.matches.splice(t++,0,i),this.matches.length>s)break}this.gap=null}},t.prototype.onChange=function(t){var s=t.from.line,i=e.changeEnd(t).line,n=i-t.to.line;if(this.gap?(this.gap.from=Math.min(o(this.gap.from,s,n),t.from.line),this.gap.to=Math.max(o(this.gap.to,s,n),t.from.line)):this.gap={from:t.from.line,to:i+1},n)for(var r=0;r<this.matches.length;r++){var a=this.matches[r],l=o(a.from.line,s,n);l!=a.from.line&&(a.from=e.Pos(l,a.from.ch));var d=o(a.to.line,s,n);d!=a.to.line&&(a.to=e.Pos(d,a.to.ch))}clearTimeout(this.update);var c=this;this.update=setTimeout((function(){c.updateAfterChange()}),250)},t.prototype.updateAfterChange=function(){this.findMatches(),this.annotation.update(this.matches)},t.prototype.clear=function(){this.cm.off("change",this.changeHandler),this.annotation.clear()}}(o("./node_modules/codemirror/lib/codemirror.js"),o("./node_modules/codemirror/addon/search/searchcursor.js"),o("./node_modules/codemirror/addon/scroll/annotatescrollbar.js"))},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-resources-loader/lib/loader.js?!./node_modules/vuetify-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./client/components/editor/editor-code.vue?vue&type=style&index=0&lang=scss&":function(e,t,o){}}]);