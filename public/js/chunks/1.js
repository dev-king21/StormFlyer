(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/JobApplication.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/JobApplication.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/Header.vue */ "./resources/js/src/views/base/Header.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _views_components_extra_components_upload_FileUpload_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/components/extra-components/upload/FileUpload.vue */ "./resources/js/src/views/components/extra-components/upload/FileUpload.vue");
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
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a,
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    FileUpload: _views_components_extra_components_upload_FileUpload_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      appl: {},
      full_days: [{
        id: 0,
        label: 'Full Days'
      }, {
        id: 1,
        label: 'Part Days'
      }],
      full_time: [{
        id: 0,
        label: 'Full Time'
      }, {
        id: 1,
        label: 'Part Time'
      }],
      team_work: [{
        id: 0,
        label: 'Yes - Happy to work in a team'
      }, {
        id: 1,
        label: 'No - I prefer to work alone'
      }],
      drive_licence: [{
        id: 0,
        label: 'Yes'
      }, {
        id: 1,
        label: 'No'
      }],
      access_car: [{
        id: 0,
        label: 'Yes'
      }, {
        id: 1,
        label: 'No'
      }],
      own_car: [{
        id: 0,
        label: 'Yes'
      }, {
        id: 1,
        label: 'No'
      }],
      week_days: [{
        id: 0,
        label: 'Weekeneds Only'
      }, {
        id: 1,
        label: 'Weekdays only'
      }, {
        id: 2,
        label: 'Weekends & Weekdays'
      }],
      position: [{
        id: 0,
        label: 'Leaflet Distributor'
      }, {
        id: 1,
        label: 'Supervisor'
      }],
      current_postion: {},
      current_full_days: {},
      current_full_time: {},
      current_drive_licence: {},
      current_access_car: {},
      current_own_car: {},
      current_week_days: {},
      current_team_work: {},
      employee_type: {}
    };
  },
  computed: {
    document: function document() {
      console.log(this.appl.document);
      return this.appl.document;
    }
  },
  methods: {
    submitDocument: function submitDocument() {
      var _this = this;

      this.appl.position = this.current_position.label;
      this.appl.full_days = this.current_full_days.label;
      this.appl.full_time = this.current_full_time.label;
      this.appl.drive_licence = this.current_drive_licence.label;
      this.appl.access_car = this.current_access_car.label;
      this.appl.own_car = this.current_own_car.label;
      this.appl.team_work = this.current_team_work.label;
      this.appl.week_days = this.current_week_days.label;
      this.appl.employee_type = this.employee_type;

      if (this.appl.first_name === '' || this.appl.last_name === '' || this.appl.address === '' || this.appl.post_code === '' || this.appl.email === '' || this.appl.phone === '' || this.appl.dob === '' || this.appl.ins_number === '' || !this.appl.start_date || this.appl.start_date === '' || !this.employee_type || this.employee_type === '') {
        return this.$vs.notify({
          title: 'Error',
          text: 'You must fill out all fields in the application form',
          iconPack: 'feather',
          icon: 'icon-info',
          color: 'danger'
        });
      }

      if (!this.appl.position || !this.appl.full_days || !this.appl.full_time || !this.appl.drive_licence || !this.appl.access_car || !this.appl.own_car || !this.appl.team_work || !this.appl.week_days) {
        return this.$vs.notify({
          title: 'Error',
          text: 'You must fill out all fields in the application form',
          iconPack: 'feather',
          icon: 'icon-info',
          color: 'danger'
        });
      }

      if (!this.appl.document) {
        return this.$vs.notify({
          title: 'Error',
          text: 'You must select document file to upload.',
          iconPack: 'feather',
          icon: 'icon-info',
          color: 'danger'
        });
      }

      var headers = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };
      var formData = new FormData();

      for (var key in this.appl) {
        if (key === 'start_date') formData.append('start_date', this.formatDate(this.appl.start_date));else formData.append(key, this.appl[key]);
      }

      this.$vs.loading({
        color: 'red',
        type: 'sound'
      });
      this.$http.post('/api/job/application', formData, headers).then(function (response) {
        var data = response.data;

        _this.$vs.loading.close();

        _this.$vs.notify({
          title: 'Success',
          text: 'We have successfully received your Application information. <br> Please wait until we will contact to you soon.',
          iconPack: 'feather',
          icon: 'icon-info',
          color: 'success'
        });

        setTimeout(_this.$router.push("/mail/test/".concat(data._id)), 1000);
      })["catch"](function (error) {
        _this.$vs.loading.close();

        console.log(error);
      });
    },
    changeUploadFile: function changeUploadFile(_ref) {
      var action = _ref.action,
          name = _ref.name,
          file = _ref.file;
      this.appl.document = file;
    },
    formatDate: function formatDate(date) {
      var d = new Date(date),
          year = d.getFullYear();
      var month = "".concat(d.getMonth() + 1),
          day = "".concat(d.getDate());
      if (month.length < 2) month = "0".concat(month);
      if (day.length < 2) day = "0".concat(day);
      console.log("".concat(month, "/").concat(day, "/").concat(year));
      return "".concat(month, "/").concat(day, "/").concat(year);
    }
  },
  created: function created() {
    this.current_position = this.position[0];
    this.current_full_days = this.full_days[0];
    this.current_full_time = this.full_time[0];
    this.current_drive_licence = this.drive_licence[0];
    this.current_access_car = this.access_car[0];
    this.current_own_car = this.own_car[1];
    this.current_week_days = this.week_days[0];
    this.current_team_work = this.team_work[0];
    this.employee_type = 'employed';
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    onSuccess: {
      type: Function,
      required: true
    },
    upload_key: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      selected: false,
      document: undefined
    };
  },
  methods: {
    handleDragover: function handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleDrop: function handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.validateAndUpload(files);
    },
    handleClick: function handleClick(e) {
      var files = e.target.files;
      this.validateAndUpload(files);
    },
    validateAndUpload: function validateAndUpload(files) {
      if (files.length !== 1) {
        this.$vs.notify({
          title: 'Error - Too Many Files',
          text: 'Only support uploading one file!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return;
      }

      var rawFile = files[0]; // only use files[0]

      if (!this.isImage(rawFile) && !this.isPDF(rawFile)) {
        this.$vs.notify({
          title: 'File Format Error',
          text: 'Only supports upload .png, .gif, .jpg, .jpeg, pdf suffix files',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
        return false;
      }

      this.uploadFile(rawFile);
    },
    isImage: function isImage(file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name);
    },
    isPDF: function isPDF(file) {
      return /\.(pdf)$/.test(file.name);
    },
    uploadFile: function uploadFile(file) {
      this.$refs['fileInput'].value = null; // fix can't select the same excel

      this.document = file;
      this.selected = true;
      var sendData = {};
      sendData.action = 'change';
      sendData.name = this.upload_key;
      sendData.file = file;
      this.onSuccess(sendData); //this.readerData(file)
    },
    cancelAction: function cancelAction() {
      this.selected = false;
      var sendData = {};
      sendData.action = 'remove';
      sendData.name = this.upload_key;
      this.onSuccess(sendData);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  color: #151515;\n}[dir] .wrapper {\n  background: #d8d8d8;\n}\n.wrapper .vs-input, .wrapper .v-select {\n  width: 100% !important;\n}\n[dir] .wrapper .vs-input, [dir] .wrapper .v-select {\n  margin-bottom: 1.2rem;\n}\n[dir] .wrapper div.text-danger {\n  margin-bottom: 1.2rem;\n}\n[dir] .wrapper .vdp-datepicker {\n  margin-bottom: 1.2rem;\n}\n[dir] .wrapper .vdp-datepicker input {\n  border-radius: 0;\n}\n[dir] .wrapper .vs-input--input, [dir] .wrapper .vs__dropdown-toggle {\n  border-radius: 0 !important;\n}\n.wrapper .required-item:before {\n  color: #ee0000;\n  content: \"*\";\n}\n.wrapper .hint-lb {\n  color: #aaa;\n}\n[dir] .wrapper .vs-button {\n  border-radius: 0 !important;\n}", ""]);

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
exports.push([module.i, "[dir] .red-bg {\n  background: #da2f1b;\n}\n@media (min-width: 768px) {\n.site-header {\n    font-size: 5rem;\n    line-height: 5.6rem;\n}\n[dir] .site-header {\n    padding: 2rem;\n}\n.site-header .logo {\n    width: 12rem;\n    height: 12rem;\n}\n[dir=ltr] .site-header .logo-text {\n    text-shadow: 2px 2px 5px #00000066;\n}\n[dir=rtl] .site-header .logo-text {\n    text-shadow: -2px 2px 5px #00000066;\n}\n}\n@media (max-width: 768px) {\n.site-header {\n    font-size: 2.6rem;\n    line-height: 3.4rem;\n}\n[dir] .site-header {\n    padding: 1rem;\n}\n.site-header .logo {\n    width: 6rem;\n    height: 6rem;\n}\n[dir=ltr] .site-header .logo-text {\n    text-shadow: 2px 2px 5px #00000066;\n}\n[dir=rtl] .site-header .logo-text {\n    text-shadow: -2px 2px 5px #00000066;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./JobApplication.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/JobApplication.vue?vue&type=template&id=0255d506&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/JobApplication.vue?vue&type=template&id=0255d506& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "w-full" }, [
        _c("div", { staticClass: "flex items-center justify-center mx-8" }, [
          _c(
            "div",
            {
              staticClass:
                "bg-white xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-full xs:w-full my-8 px-10 py-10"
            },
            [
              _c(
                "div",
                {
                  staticClass: "text-center font-bold",
                  staticStyle: { "font-size": "2rem" }
                },
                [_vm._v("Leaflet Distributor Job Application Form")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mt-4" }, [
                _vm._v(
                  "\r\n                    Thank you for your interest in working with us. \r\n                    Please check below for available job opportunities \r\n                    that meet your criteria and send your application \r\n                    by filling out the job Application Form.\r\n                "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font-bold my-6" }, [
                _vm._v("PERSONAL DETAILS")
              ]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col w-1/2" },
                      [
                        _c("vs-input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          attrs: {
                            color: "green",
                            placeholder: "First",
                            name: "FirstName",
                            "data-vv-validate-on": "blur"
                          },
                          model: {
                            value: _vm.appl.first_name,
                            callback: function($$v) {
                              _vm.$set(_vm.appl, "first_name", $$v)
                            },
                            expression: "appl.first_name"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-danger text-sm" }, [
                          _vm._v(_vm._s(_vm.errors.first("FirstName")))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col w-1/2" },
                      [
                        _c("vs-input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          attrs: {
                            color: "green",
                            placeholder: "Last",
                            name: "LastName",
                            "data-vv-validate-on": "blur"
                          },
                          model: {
                            value: _vm.appl.last_name,
                            callback: function($$v) {
                              _vm.$set(_vm.appl, "last_name", $$v)
                            },
                            expression: "appl.last_name"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-danger text-sm" }, [
                          _vm._v(_vm._s(_vm.errors.first("LastName")))
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      color: "green",
                      name: "Address",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.appl.address,
                      callback: function($$v) {
                        _vm.$set(_vm.appl, "address", $$v)
                      },
                      expression: "appl.address"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("Address")))
                  ]),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      color: "green",
                      name: "PostCode",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.appl.post_code,
                      callback: function($$v) {
                        _vm.$set(_vm.appl, "post_code", $$v)
                      },
                      expression: "appl.post_code"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("PostCode")))
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email",
                        expression: "'required|email'"
                      }
                    ],
                    attrs: {
                      color: "green",
                      name: "Email",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.appl.email,
                      callback: function($$v) {
                        _vm.$set(_vm.appl, "email", $$v)
                      },
                      expression: "appl.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("Email")))
                  ]),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      color: "green",
                      name: "Phone",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.appl.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.appl, "phone", $$v)
                      },
                      expression: "appl.phone"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("Phone")))
                  ]),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      color: "green",
                      name: "DOB",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.appl.dob,
                      callback: function($$v) {
                        _vm.$set(_vm.appl, "dob", $$v)
                      },
                      expression: "appl.dob"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("DOB")))
                  ]),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    attrs: {
                      color: "green",
                      name: "InsuranceNumber",
                      "data-vv-validate-on": "blur"
                    },
                    model: {
                      value: _vm.appl.ins_number,
                      callback: function($$v) {
                        _vm.$set(_vm.appl, "ins_number", $$v)
                      },
                      expression: "appl.ins_number"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-danger text-sm" }, [
                    _vm._v(_vm._s(_vm.errors.first("InsuranceNumber")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "font-bold my-4" }, [
                    _vm._v("DISTRIBUTOR APPLICATION DETAILS")
                  ]),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      color: "green",
                      clearable: false,
                      options: _vm.position
                    },
                    model: {
                      value: _vm.current_position,
                      callback: function($$v) {
                        _vm.current_position = $$v
                      },
                      expression: "current_position"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(8),
                  _vm._v(" "),
                  _c("datepicker", {
                    attrs: { placeholder: "MM/DD/YYYY", format: "MM/dd/yyyy" },
                    model: {
                      value: _vm.appl.start_date,
                      callback: function($$v) {
                        _vm.$set(_vm.appl, "start_date", $$v)
                      },
                      expression: "appl.start_date"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(9),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row mb-4" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col w-1/2" },
                      [
                        _c(
                          "vs-radio",
                          {
                            attrs: {
                              color: "green",
                              "vs-name": "employee_type",
                              "vs-value": "employed"
                            },
                            model: {
                              value: _vm.employee_type,
                              callback: function($$v) {
                                _vm.employee_type = $$v
                              },
                              expression: "employee_type"
                            }
                          },
                          [_vm._v("Employed ")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col w-1/2" },
                      [
                        _c(
                          "vs-radio",
                          {
                            attrs: {
                              color: "green",
                              "vs-name": "employee_type",
                              "vs-value": "self-employed"
                            },
                            model: {
                              value: _vm.employee_type,
                              callback: function($$v) {
                                _vm.employee_type = $$v
                              },
                              expression: "employee_type"
                            }
                          },
                          [_vm._v("self-Employed")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col w-1/2" },
                      [
                        _c(
                          "vs-radio",
                          {
                            attrs: {
                              color: "green",
                              "vs-name": "employee_type",
                              "vs-value": "unemployed"
                            },
                            model: {
                              value: _vm.employee_type,
                              callback: function($$v) {
                                _vm.employee_type = $$v
                              },
                              expression: "employee_type"
                            }
                          },
                          [_vm._v("Unemployed")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col w-1/2" },
                      [
                        _c(
                          "vs-radio",
                          {
                            attrs: {
                              color: "green",
                              "vs-name": "employee_type",
                              "vs-value": "student"
                            },
                            model: {
                              value: _vm.employee_type,
                              callback: function($$v) {
                                _vm.employee_type = $$v
                              },
                              expression: "employee_type"
                            }
                          },
                          [_vm._v("Student")]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(10),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      color: "green",
                      clearable: false,
                      options: _vm.drive_licence
                    },
                    model: {
                      value: _vm.current_drive_licence,
                      callback: function($$v) {
                        _vm.current_drive_licence = $$v
                      },
                      expression: "current_drive_licence"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      color: "green",
                      clearable: false,
                      options: _vm.access_car
                    },
                    model: {
                      value: _vm.current_access_car,
                      callback: function($$v) {
                        _vm.current_access_car = $$v
                      },
                      expression: "current_access_car"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(12),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      color: "green",
                      clearable: false,
                      options: _vm.own_car
                    },
                    model: {
                      value: _vm.current_own_car,
                      callback: function($$v) {
                        _vm.current_own_car = $$v
                      },
                      expression: "current_own_car"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(13),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      color: "green",
                      clearable: false,
                      options: _vm.full_time
                    },
                    model: {
                      value: _vm.current_full_time,
                      callback: function($$v) {
                        _vm.current_full_time = $$v
                      },
                      expression: "current_full_time"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(14),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      color: "green",
                      clearable: false,
                      options: _vm.week_days
                    },
                    model: {
                      value: _vm.current_week_days,
                      callback: function($$v) {
                        _vm.current_week_days = $$v
                      },
                      expression: "current_week_days"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(15),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      color: "green",
                      clearable: false,
                      options: _vm.team_work
                    },
                    model: {
                      value: _vm.current_team_work,
                      callback: function($$v) {
                        _vm.current_team_work = $$v
                      },
                      expression: "current_team_work"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(16),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      color: "green",
                      clearable: false,
                      options: _vm.full_days
                    },
                    model: {
                      value: _vm.current_full_days,
                      callback: function($$v) {
                        _vm.current_full_days = $$v
                      },
                      expression: "current_full_days"
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(17),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("file-upload", {
                        attrs: {
                          upload_key: "document",
                          onSuccess: _vm.changeUploadFile
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(18),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-8" },
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: { color: "red" },
                          on: { click: _vm.submitDocument }
                        },
                        [_vm._v("SUBMIT")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]
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
    return _c("div", [
      _vm._v("Name"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("Address"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v(
        "\r\n                        Postcode\r\n                        "
      ),
      _c("span", { staticClass: "hint-lb" }, [
        _c("i", [
          _vm._v(
            "(We will use this postcode to select work close to your area)"
          )
        ])
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("Email"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("Mobile"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("D. O. B"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("National Insurance Number"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("What position are you applying for?"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("Which Date are you Available to Start?"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("What is your current employment status?"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("Do you hold a full UK driving licence?"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("Do you have access to a car to get to desinations?"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v(
        "\r\n                        Are you prepared to travel in your own car \r\n                        to reach destinations in order to  carry out distributution work?\r\n                        "
      ),
      _c("span", { staticClass: "hint-lb" }, [
        _c("i", [
          _vm._v("(Not compulsory but it means we can offer you more work)")
        ])
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v(
        "\r\n                        Availability: \r\n                        "
      ),
      _c("span", { staticClass: "hint-lb" }, [
        _c("i", [_vm._v("(Please specify if you are looking for")]),
        _vm._v(" "),
        _c("b", [_vm._v("full")]),
        _vm._v(" "),
        _c("i", [_vm._v("or")]),
        _vm._v(" "),
        _c("b", [_vm._v("part time")]),
        _vm._v(" "),
        _c("i", [_vm._v("work - Work is available an ad-hoc basis)")])
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v("Which days are you available for work?"),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v(
        "\r\n                        Are yo happy to be introduced to other people in your area so you can work \r\n                        in a team either using your car or someone elses?"
      ),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v(
        "\r\n                        Do you want to work full day's or part day's? \r\n                        "
      ),
      _c("span", { staticClass: "hint-lb" }, [
        _c("i", [
          _vm._v(
            "\r\n                                (Full day reauirements is approximately 8 hours delivering 600 - 1000 leaflets. \r\n                                Half day is approximately 4 hours delivering 300 -500 leaflets)\r\n                            "
          )
        ])
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-8" }, [
      _c("b", [_vm._v("Application Document")]),
      _vm._v(" "),
      _c("span", { staticClass: "hint-lb" }, [
        _vm._v("(File Format: Image(jpg, jpeg, png, gif,) or PDF)")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "required-item" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-8" }, [
      _c("b", [_vm._v("NOTE:")]),
      _vm._v(
        " \r\n                        Once your application has been submitted \r\n                        we will contact you with the next steps within 24 hours. \r\n                        There is no need to contact us by telephone to check the status of your application \r\n                        as we will contact you automatically.\r\n                    "
      )
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
    _c("div", { staticClass: "flex red-bg items-center justify-center" }, [
      _c("img", {
        staticClass: "logo responsive w-1/2",
        attrs: { src: __webpack_require__(/*! @assets/images/pages/logo.jpeg */ "./resources/assets/images/pages/logo.jpeg") }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=template&id=2860e06e&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=template&id=2860e06e& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "excel-import" }, [
    _c("input", {
      ref: "fileInput",
      staticClass: "hidden",
      attrs: { type: "file", accept: ".png, .gif, .jpg, .jpeg" },
      on: { change: _vm.handleClick }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.selected,
            expression: "selected"
          }
        ]
      },
      [
        _c(
          "div",
          { staticClass: "flex justify-between flex-wrap" },
          [
            _vm.document
              ? [
                  _c(
                    "div",
                    { staticClass: "flex items-center" },
                    [
                      _vm.isImage(_vm.document)
                        ? [
                            _c("img", {
                              staticClass: "mr-4",
                              staticStyle: { width: "auto", height: "2.4rem" },
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/file-icons/jpg.png */ "./resources/assets/images/file-icons/jpg.png")
                              }
                            })
                          ]
                        : [
                            _c("img", {
                              staticClass: "mr-4",
                              staticStyle: { width: "auto", height: "2.4rem" },
                              attrs: {
                                src: __webpack_require__(/*! @assets/images/file-icons/pdf.png */ "./resources/assets/images/file-icons/pdf.png")
                              }
                            })
                          ],
                      _vm._v(" "),
                      _c("div", { staticClass: "text-success font-bold" }, [
                        _vm._v(_vm._s(_vm.document.name))
                      ])
                    ],
                    2
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "vs-button",
              {
                staticClass: "mt-4",
                attrs: {
                  type: "border",
                  "icon-pack": "feather",
                  icon: "icon-trash",
                  color: "dark"
                },
                on: {
                  click: function($event) {
                    return _vm.cancelAction()
                  }
                }
              },
              [_vm._v("\n          Remove\n      ")]
            )
          ],
          2
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "p-8 mt-4 cursor-pointer text-center border-2 border-dashed d-theme-border-grey-light d-theme-dark-bg text-xl",
        on: {
          click: function($event) {
            return _vm.$refs.fileInput.click()
          },
          drop: _vm.handleDrop,
          dragover: _vm.handleDragover,
          dragenter: _vm.handleDragover
        }
      },
      [
        _c("feather-icon", {
          staticClass: "block",
          attrs: {
            icon: "UploadCloudIcon",
            svgClasses: "h-16 w-16 stroke-current text-grey"
          }
        }),
        _vm._v(" "),
        _c("span", [_vm._v("Drop Image or PDF Document Here or")]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "font-medium text-primary",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.$refs.fileInput.click()
              }
            }
          },
          [_vm._v("Browse")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/file-icons/jpg.png":
/*!****************************************************!*\
  !*** ./resources/assets/images/file-icons/jpg.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/jpg.png?af5b421a864fd53988f2e23b61b7bb84";

/***/ }),

/***/ "./resources/assets/images/file-icons/pdf.png":
/*!****************************************************!*\
  !*** ./resources/assets/images/file-icons/pdf.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/pdf.png?63e0df68422fbcd4404f9b6efebdb3fc";

/***/ }),

/***/ "./resources/assets/images/pages/logo.jpeg":
/*!*************************************************!*\
  !*** ./resources/assets/images/pages/logo.jpeg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.jpeg?c65f85744d383e0a9f92ecde9a9bdfdb";

/***/ }),

/***/ "./resources/js/src/views/JobApplication.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/JobApplication.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JobApplication_vue_vue_type_template_id_0255d506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobApplication.vue?vue&type=template&id=0255d506& */ "./resources/js/src/views/JobApplication.vue?vue&type=template&id=0255d506&");
/* harmony import */ var _JobApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobApplication.vue?vue&type=script&lang=js& */ "./resources/js/src/views/JobApplication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _JobApplication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobApplication.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _JobApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobApplication_vue_vue_type_template_id_0255d506___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JobApplication_vue_vue_type_template_id_0255d506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/JobApplication.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/JobApplication.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/JobApplication.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./JobApplication.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/JobApplication.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./JobApplication.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/JobApplication.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/JobApplication.vue?vue&type=template&id=0255d506&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/JobApplication.vue?vue&type=template&id=0255d506& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_template_id_0255d506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./JobApplication.vue?vue&type=template&id=0255d506& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/JobApplication.vue?vue&type=template&id=0255d506&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_template_id_0255d506___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobApplication_vue_vue_type_template_id_0255d506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/src/views/components/extra-components/upload/FileUpload.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/upload/FileUpload.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileUpload_vue_vue_type_template_id_2860e06e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=template&id=2860e06e& */ "./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=template&id=2860e06e&");
/* harmony import */ var _FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUpload.vue?vue&type=script&lang=js& */ "./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileUpload_vue_vue_type_template_id_2860e06e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileUpload_vue_vue_type_template_id_2860e06e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/components/extra-components/upload/FileUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=template&id=2860e06e&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=template&id=2860e06e& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_2860e06e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUpload.vue?vue&type=template&id=2860e06e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/components/extra-components/upload/FileUpload.vue?vue&type=template&id=2860e06e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_2860e06e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUpload_vue_vue_type_template_id_2860e06e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);