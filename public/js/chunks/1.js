(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/Header.vue */ "./resources/js/src/views/base/Header.vue");
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
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppHeader: _base_Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      name: '',
      company_name: '',
      contact_number: '',
      email: '',
      service: 0,
      details: '',
      services: [{
        id: 0,
        name: 'paint',
        label: 'paint'
      }, {
        id: 1,
        name: 'design',
        label: 'design'
      }, {
        id: 2,
        name: 'print',
        label: 'print'
      }]
    };
  },
  methods: {
    goPage: function goPage(page) {
      this.$router.push(page);
    },
    setService: function setService() {}
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .wrapper {\n  background: #d8d8d8;\n}\n[dir] .wrapper .background {\n  background: #d8d8d8;\n  padding: 0.8rem;\n}\n.wrapper .main-button {\n  width: 32rem;\n  height: 32rem;\n}\n[dir] .wrapper .main-button {\n  background-image: url(\"/images/pages/home-button.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.wrapper .main-button .title {\n  font-size: 3rem !important;\n  font-weight: bold;\n}\n.wrapper .main-button .hint {\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: #6398e8;\n}\n.wrapper .job-button {\n  width: 22rem !important;\n  height: 22rem !important;\n}\n.wrapper .job-button .title {\n  font-size: 2.6rem !important;\n}\n.wrapper .job-button .hint {\n  font-size: 1.2rem !important;\n}\n.wrapper .design-button {\n  width: 18rem !important;\n  height: 18rem !important;\n}\n.wrapper .design-button .title {\n  font-size: 2.2rem !important;\n}\n.wrapper .design-button .hint {\n  font-size: 1rem !important;\n}\n.wrapper .social-icon {\n  width: 6rem;\n  height: 6rem;\n}\n.wrapper .description {\n  color: red;\n  font-size: 2.2rem;\n}\n.wrapper .desc-icon {\n  width: 6.8rem;\n  height: 6.8rem;\n}\n.wrapper .desc-text {\n  font-size: 3.6rem;\n  color: #151515;\n}\n[dir] .wrapper .contact {\n  background: black;\n}\n.wrapper .contact input, .wrapper .contact textarea {\n  font-size: 1.2rem !important;\n  font-family: \"Times New Roman\", Times, serif;\n}\n[dir] .wrapper .contact input, [dir] .wrapper .contact textarea {\n  border-radius: 0 !important;\n}\n.wrapper .contact .vs-input--placeholder {\n  font-size: 1.2rem !important;\n}\n.wrapper .contact .input-span-placeholder {\n  color: #151515 !important;\n}\n[dir] .wrapper .contact .input-span-placeholder {\n  padding: 0.8rem !important;\n}\n[dir] .wrapper .contact .vs-con-textarea {\n  border-radius: 0 !important;\n}\n[dir] .wrapper .contact .v-select {\n  background: white !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .red-bg {\n  background: #da2f1b;\n}\n.site-header {\n  font-size: 5rem;\n  line-height: 5.6rem;\n}\n[dir] .site-header {\n  padding: 2rem;\n}\n.site-header .logo {\n  width: 12rem;\n  height: 12rem;\n}\n[dir=ltr] .site-header .logo-text {\n  text-shadow: 2px 2px 5px #00000066;\n}\n[dir=rtl] .site-header .logo-text {\n  text-shadow: -2px 2px 5px #00000066;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _c("app-header"),
      _vm._v(" "),
      _c("div", { staticClass: "flex justify-between items-start w-full" }, [
        _c(
          "div",
          { staticClass: "flex items-start justify-between w-full px-10" },
          [
            _c(
              "div",
              {
                staticClass:
                  "flex flex-col main-button mt-4 items-center justify-center cursor-pointer text-white text-center",
                on: {
                  click: function($event) {
                    return _vm.goPage("distribution")
                  }
                }
              },
              [
                _c("div", { staticClass: "title text-white" }, [
                  _vm._v("Distribution")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "hint" }, [
                  _vm._v("Get your flyers out there")
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "flex flex-col items-center" }, [
          _c(
            "div",
            {
              staticClass:
                "flex flex-col main-button job-button mt-4 items-center justify-center cursor-pointer text-white text-center",
              on: {
                click: function($event) {
                  return _vm.goPage("job")
                }
              }
            },
            [
              _c("div", { staticClass: "title text-white" }, [_vm._v("Jobs")]),
              _vm._v(" "),
              _c("div", { staticClass: "hint" }, [
                _vm._v("Double tap on text to edit")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "flex items-end justify-end w-full",
              staticStyle: { "margin-top": "-1rem !important" }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-col main-button design-button items-center justify-center cursor-pointer text-white text-center mx-10",
                  on: {
                    click: function($event) {
                      return _vm.goPage("design")
                    }
                  }
                },
                [
                  _c("div", { staticClass: "title text-white" }, [
                    _vm._v("Design")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "hint" }, [
                    _vm._v("Double tap on text to edit")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-col main-button design-button items-center justify-center cursor-pointer text-white text-center mx-10",
                  on: {
                    click: function($event) {
                      return _vm.goPage("testimonial")
                    }
                  }
                },
                [
                  _c("div", { staticClass: "title text-white" }, [
                    _vm._v("Testimonials")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "hint" }, [
                    _vm._v("Double tap on text to edit")
                  ])
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "contact text-white w-full px-8 py-4 mt-4" }, [
        _c(
          "div",
          {
            staticClass: "font-bold text-white",
            staticStyle: { "font-size": "3.6rem" }
          },
          [_vm._v("Request More Information")]
        ),
        _vm._v(" "),
        _c("div", { staticStyle: { "font-size": "2rem" } }, [
          _vm._v(
            "\r\n            For details on any of the services we offer, complete the form below and a member of our team will be in touch.\r\n        "
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row mt-4 mb-8" }, [
          _c(
            "div",
            { staticClass: "vx-col w-1/2 pl-10" },
            [
              _c("vs-input", {
                staticClass: "w-full mt-8",
                attrs: { color: "black", placeholder: "Name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full mt-8",
                attrs: { color: "black", placeholder: "Company Name" },
                model: {
                  value: _vm.company_name,
                  callback: function($$v) {
                    _vm.company_name = $$v
                  },
                  expression: "company_name"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full mt-8",
                attrs: { color: "black", placeholder: "Contact Number" },
                model: {
                  value: _vm.contact_number,
                  callback: function($$v) {
                    _vm.contact_number = $$v
                  },
                  expression: "contact_number"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "w-full mt-8",
                attrs: { color: "black", placeholder: "Email Address" },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "vx-col w-1/2 pl-10" },
            [
              _c("v-select", {
                staticClass: "mt-8",
                attrs: { placeholder: "Which Service", options: _vm.services },
                on: { input: _vm.setService },
                model: {
                  value: _vm.service,
                  callback: function($$v) {
                    _vm.service = $$v
                  },
                  expression: "service"
                }
              }),
              _vm._v(" "),
              _c("vs-textarea", {
                staticClass: "mt-8 w-full bg-white text-black",
                attrs: {
                  placeholder: "Details Required",
                  color: "black",
                  height: "100px"
                },
                model: {
                  value: _vm.details,
                  callback: function($$v) {
                    _vm.details = $$v
                  },
                  expression: "details"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-right mt-8" },
                [
                  _c(
                    "vs-button",
                    {
                      staticClass: "font-bold",
                      staticStyle: { color: "rgb(99, 180, 232)" },
                      attrs: { color: "white" }
                    },
                    [
                      _vm._v(
                        "\r\n                        Send\r\n                    "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex items-center justify-between w-full px-10 my-8" },
      [
        _c("div", { staticClass: "h2 font-bold" }, [
          _vm._v("\r\n            Telephone: 0800 595 777"),
          _c("br"),
          _vm._v(
            "\r\n            Email: info@stormflyerdistribution.com\r\n        "
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("img", {
            staticClass: "social-icon mr-2",
            attrs: {
              src:
                "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/instagram_icon-128.png"
            }
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "social-icon",
            attrs: {
              src:
                "https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/facebook_icon-128.png"
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "vx-row" }, [
      _c("div", { staticClass: "vx-col w-1/2 description pl-20" }, [
        _c("b", [_vm._v("Marketing by storm!")]),
        _vm._v(" "),
        _c("br"),
        _vm._v(
          "\r\n            Weather your audiences are at the most urban parts of the city or the greenest corners of the countryside, we have \r\n            teams of GPS tracked distribution operatives raring to take your marketing distribution by storm to wherever your \r\n            business commands. "
        ),
        _c("br"),
        _c("br"),
        _vm._v(
          " Not only do we make sure your messages reach your targeted areas, we also offer \r\n            streamlining of the entire process. From design & print to targeting and distribution, we have experienced\r\n            marketing & design staff on hand to bring life to whatever message you wish to project. \r\n            Get ready to command the storm!\r\n        "
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-col w-1/2 px-10" }, [
        _c("div", { staticClass: "pr-10" }, [
          _c("img", {
            staticClass: "responsive mt-4",
            staticStyle: { "box-shadow": "2px 2px 12px #00000044" },
            attrs: { src: __webpack_require__(/*! @assets/images/pages/home-flyer.png */ "./resources/assets/images/pages/home-flyer.png") }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "flex items-end mt-8" }, [
            _c("img", { staticClass: "desc-icon" }),
            _vm._v(" "),
            _c("div", { staticClass: "desc-text ml-4" }, [
              _vm._v("U.K WIDE COVERAGE")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex items-end mt-8" }, [
            _c("img", { staticClass: "desc-icon" }),
            _vm._v(" "),
            _c("div", { staticClass: "desc-text ml-4" }, [
              _vm._v("GPS TRACKED")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex items-end mt-8" }, [
            _c("img", { staticClass: "desc-icon" }),
            _vm._v(" "),
            _c("div", { staticClass: "desc-text ml-4" }, [
              _vm._v("DESIGN & PRINT")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Header.vue?vue&type=template&id=5c9ce711&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/base/Header.vue?vue&type=template&id=5c9ce711& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-link", { attrs: { to: "/" } }, [
    _c(
      "div",
      {
        staticClass:
          "flex w-full red-bg items-center justify-center site-header"
      },
      [
        _c("img", {
          staticClass: "logo mr-8",
          attrs: {
            src: __webpack_require__(/*! @assets/images/file-icons/google-chrome-icon-18-256.png */ "./resources/assets/images/file-icons/google-chrome-icon-18-256.png")
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "font-bold text-white text-center uppercase logo-text"
          },
          [
            _vm._v("\n            stormflyer "),
            _c("br"),
            _vm._v(" distribution\n        ")
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/file-icons/google-chrome-icon-18-256.png":
/*!**************************************************************************!*\
  !*** ./resources/assets/images/file-icons/google-chrome-icon-18-256.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/google-chrome-icon-18-256.png?879efbdea22313aeef20d6d94f3a888a";

/***/ }),

/***/ "./resources/assets/images/pages/home-flyer.png":
/*!******************************************************!*\
  !*** ./resources/assets/images/pages/home-flyer.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/home-flyer.png?ac2ee501d0bb3ea9ff5b67008a3ee411";

/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/base/Header.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/base/Header.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_5c9ce711___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=5c9ce711& */ "./resources/js/src/views/base/Header.vue?vue&type=template&id=5c9ce711&");
/* harmony import */ var _Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _Header_vue_vue_type_template_id_5c9ce711___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_5c9ce711___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/base/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Header.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/base/Header.vue?vue&type=template&id=5c9ce711&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/base/Header.vue?vue&type=template&id=5c9ce711& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5c9ce711___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=5c9ce711& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/base/Header.vue?vue&type=template&id=5c9ce711&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5c9ce711___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_5c9ce711___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);