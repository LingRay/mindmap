// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import $ from 'jquery'

// 'bower_codemirror': './bower_components/codemirror/lib/codemirror.js',
// 'bower_codemirror_xml.js': './bower_components/codemirror/mode/xml/xml.js',
// 'bower_codemirror_javascript': './bower_components/codemirror/mode/javascript/javascript.js',
// 'bower_codemirror_cssjs': './bower_components/codemirror/mode/css/css.js',
// 'bower_codemirror_htmlmixed': './bower_components/codemirror/mode/htmlmixed/htmlmixed.js',
// 'bower_codemirror_markdown': './bower_components/codemirror/mode/markdown/markdown.js',
// 'bower_codemirror_overlay': './bower_components/codemirror/addon/mode/overlay.js',
// 'bower_codemirror_gfm': './bower_components/codemirror/mode/gfm/gfm.js',
// // 'bower_angular-ui-codemirror':'./bower_components/angular-ui-codemirror/ui-codemirror.js',
// 'bower_marked': './bower_components/marked/lib/marked.js',
// 'bower_kity': './bower_components/kity/dist/kity.js',
// 'bower_hotbox': './bower_components/hotbox/hotbox.js',
// 'bower_jsondiff': './bower_components/json-diff/json-diff.js',
// 'bower_kityminder_core': './bower_components/kityminder-core/dist/kityminder.core.js',
// 'bower_color_picker':'./bower_components/color-picker/dist/color-picker.js',

require('../bower_components/codemirror/lib/codemirror.js')
require('../bower_components/codemirror/mode/xml/xml.js')
require('../bower_components/codemirror/mode/javascript/javascript.js')
require('../bower_components/codemirror/mode/css/css.js')
require('../bower_components/codemirror/mode/htmlmixed/htmlmixed.js')
require('../bower_components/codemirror/mode/markdown/markdown.js')
require('../bower_components/codemirror/addon/mode/overlay.js')
require('../bower_components/codemirror/mode/gfm/gfm.js')
// require('../bower_components/angular-ui-codemirror/ui-codemirror.js')
require('../bower_components/marked/lib/marked.js')
require('../bower_components/kity/dist/kity.js')
require('../bower_components/hotbox/hotbox.js')
require('../bower_components/json-diff/json-diff.js')
require('../bower_components/kityminder-core/dist/kityminder.core.js')
// require('../bower_components/color-picker/dist/color-picker.js')
require('./script/expose-editor.js')


Vue.config.productionTip = true
Vue.use(ElementUI)


// console.log(editor);
/* eslint-disable no-new */
new Vue({el: '#app', router, store, template: '<App/>', components: {
    App
  }})
