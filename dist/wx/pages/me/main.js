require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        isLeapYear: function isLeapYear() {
            var isLeapYear = false;
            if (this.year % 100 == 0) {
                isLeapYear = true;
            } else if (this.year % 4 == 0 && this.year % 100 != 0) {
                isLeapYear = true;
            } else {
                isLeapYear = false;
            }

            return isLeapYear;
        },
        getDayOfYear: function getDayOfYear() {
            return this.isLeapYear() ? 366 : 365;
        }
    },
    computed: {
        year: function year() {
            return new Date().getFullYear();
        },
        days: function days() {
            var start = new Date();
            start.setMonth(0);
            start.setDate(1);
            var offset = new Date() - start;
            return offset / 1000 / 60 / 60 / 24 + 1;
        },
        precent: function precent() {
            return (this.days / this.getDayOfYear() * 100).toFixed(1);
        }
    }
});

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('progress', {
    attrs: {
      "percent": _vm.precent,
      "color": "red"
    }
  }), _vm._v(" "), _c('p', [_vm._v("To Be Great: " + _vm._s(_vm.year) + " past " + _vm._s(_vm.days) + " days (" + _vm._s(_vm.precent) + "%)")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-41bfe7dd", esExports)
  }
}

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "userinfo"
  }, [_c('img', {
    attrs: {
      "src": _vm.userinfo.avatarUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.userinfo.nickName))])], 1), _vm._v(" "), _c('YearProgress', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "addbook btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.scanBook
    }
  }, [_vm._v("Add Book")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("Get User Info")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-25fdf1de", esExports)
  }
}

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(96);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);

app.$mount();

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_template_compiler_index_id_data_v_25fdf1de_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_template_compiler_index_id_data_v_25fdf1de_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/me/Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25fdf1de", Component.options)
  } else {
    hotAPI.reload("data-v-25fdf1de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_YearProgress__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(26);


//
//
//
//
//
//
//
//
//
//
//
//
//

// onGotUserInfo: function (e) {
//       let user = wx.getStorageSync("userinfo");
//     if (!user) {
//       qcloud.setLoginUrl(config.loginUrl);
//       qcloud.login({
//         success: function(userinfo) {
//           console.log("login successfully.", userinfo);
//           showSuccess("Login Success.");
//           wx.setStorageSync("userinfo", userinfo);
//         },
//         fail: function(err) {
//           console.log(err.toString() + ". Login failed");
//         }
//       });
//     }
// }



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    YearProgress: __WEBPACK_IMPORTED_MODULE_2__components_YearProgress__["a" /* default */]
  },
  data: function data() {
    return {
      userinfo: {}
    };
  },
  created: function created() {
    this.userinfo = wx.getStorageSync("userinfo");
  },

  methods: {
    add: function add(isbn) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('UserInfo: ' + _this.userinfo);
                console.log('Start add book: ISBN: ' + isbn);

                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* post */])('/weapp/addbook', {
                  isbn: isbn
                  // openid : this.userinfo.openid
                });

              case 4:
                res = _context.sent;


                console.log(res);

                Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* showSuccess */])('Success Add Book', res.BookName);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    demo: function demo() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* get */])('');

              case 2:
                res = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    scanBook: function scanBook() {
      var _this3 = this;

      // scan from camero or image
      wx.scanCode({
        success: function success(res) {
          console.log(res);
          if (res.result) {
            // addBook(res.result)
            _this3.add(res.result);
          }
        }
      });
    },


    onGotUserInfo: function onGotUserInfo(e) {
      //   console.log(e.detail.userInfo);
      console.log(e);
      this.userinfo = e.target.userInfo;
    }
  }
});

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_template_compiler_index_id_data_v_41bfe7dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__ = __webpack_require__(102);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(5)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-41bfe7dd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_template_compiler_index_id_data_v_41bfe7dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_0_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/YearProgress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] YearProgress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41bfe7dd", Component.options)
  } else {
    hotAPI.reload("data-v-41bfe7dd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[95]);