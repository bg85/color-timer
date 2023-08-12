(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"], {
    /***/
    "7vJP":
    /*!************************************************!*\
      !*** ./src/app/components/home/home.module.ts ***!
      \************************************************/

    /*! exports provided: HomePageModule */

    /***/
    function vJP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "BSWD");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "NOed");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "BSWD":
    /*!**********************************************!*\
      !*** ./src/app/components/home/home.page.ts ***!
      \**********************************************/

    /*! exports provided: HomePage */

    /***/
    function BSWD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "MISJ");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "EkuH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_timer_timer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/timer/timer.service */
      "Ldui");
      /* harmony import */


      var _done_done_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../done/done.component */
      "f+vI");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(pickerController, modalController, timerService) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.pickerController = pickerController;
          this.modalController = modalController;
          this.timerService = timerService;
          this.shouldStart = false;
          this.pickerOptions = {
            buttons: [{
              text: 'Cancel',
              role: 'cancel'
            }, {
              text: 'Start',
              handler: function handler(_) {
                _this.shouldStart = true;
              }
            }],
            columns: [{
              name: 'Interval',
              options: [{
                text: "Seconds",
                value: src_app_services_timer_timer_service__WEBPACK_IMPORTED_MODULE_5__["Interval"].Seconds
              }, {
                text: "Minutes",
                value: src_app_services_timer_timer_service__WEBPACK_IMPORTED_MODULE_5__["Interval"].Minutes
              }, {
                text: "Hours",
                value: src_app_services_timer_timer_service__WEBPACK_IMPORTED_MODULE_5__["Interval"].Hours
              }]
            }, {
              name: 'Amount',
              options: [{
                text: "5",
                value: 5
              }, {
                text: "10",
                value: 10
              }, {
                text: "15",
                value: 15
              }, {
                text: "20",
                value: 20
              }, {
                text: "25",
                value: 25
              }, {
                text: "30",
                value: 30
              }, {
                text: "35",
                value: 35
              }, {
                text: "40",
                value: 40
              }, {
                text: "45",
                value: 45
              }, {
                text: "50",
                value: 50
              }, {
                text: "55",
                value: 55
              }, {
                text: "60",
                value: 60
              }, {
                text: "65",
                value: 65
              }, {
                text: "70",
                value: 70
              }, {
                text: "75",
                value: 75
              }, {
                text: "80",
                value: 80
              }, {
                text: "85",
                value: 85
              }, {
                text: "90",
                value: 90
              }, {
                text: "95",
                value: 95
              }, {
                text: "100",
                value: 100
              }, {
                text: "105",
                value: 105
              }, {
                text: "110",
                value: 110
              }, {
                text: "115",
                value: 115
              }, {
                text: "120",
                value: 120
              }]
            }]
          };

          this.timerService.done = function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.done();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          };
        }

        _createClass(HomePage, [{
          key: "openPicker",
          value: function openPicker() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var picker;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.pickerController.create(this.pickerOptions);

                    case 2:
                      picker = _context3.sent;
                      _context3.next = 5;
                      return picker.present();

                    case 5:
                      picker.onDidDismiss().then(function (_) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var intervalCol, amountCol;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return picker.getColumn('Interval');

                                case 2:
                                  intervalCol = _context2.sent;
                                  _context2.next = 5;
                                  return picker.getColumn('Amount');

                                case 5:
                                  amountCol = _context2.sent;
                                  this.timerService.initialize(intervalCol.options[intervalCol.selectedIndex].value, amountCol.options[amountCol.selectedIndex].value);

                                  if (this.shouldStart) {
                                    this.start();
                                  }

                                case 8:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "start",
          value: function start() {
            this.timerService.start();
            this.shouldStart = false;
          }
        }, {
          key: "stop",
          value: function stop() {
            this.timerService.stop();
          }
        }, {
          key: "started",
          value: function started() {
            return this.timerService.isStarted();
          }
        }, {
          key: "done",
          value: function done() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalController.create({
                        component: _done_done_component__WEBPACK_IMPORTED_MODULE_6__["DoneComponent"],
                        cssClass: 'done-modal'
                      });

                    case 2:
                      modal = _context4.sent;
                      _context4.next = 5;
                      return modal.present();

                    case 5:
                      return _context4.abrupt("return", _context4.sent);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_timer_timer_service__WEBPACK_IMPORTED_MODULE_5__["TimerService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "EkuH":
    /*!************************************************!*\
      !*** ./src/app/components/home/home.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function EkuH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div {\n  width: 100%;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px;\n}\n\n.start-one {\n  background-color: rgba(255, 255, 77, 0.5);\n  height: 33%;\n  color: #e6e600;\n}\n\n.start-two {\n  background-color: rgba(255, 255, 77, 0.8);\n  height: 33%;\n  color: #e6e600;\n}\n\n.start-complete {\n  background-color: #e9e93c;\n  height: 33%;\n  color: #e6e600;\n}\n\n.go-one {\n  background-color: rgba(51, 255, 51, 0.5);\n  height: 34%;\n  color: #00e600;\n}\n\n.go-two {\n  background-color: rgba(51, 255, 51, 0.8);\n  height: 34%;\n  color: #00e600;\n}\n\n.go-complete {\n  background-color: #00e600;\n  height: 34%;\n  color: #00e600;\n}\n\n.end-one {\n  background-color: rgba(255, 71, 26, 0.5);\n  height: 33%;\n  color: #cc2900;\n}\n\n.end-two {\n  background-color: rgba(255, 71, 26, 0.8);\n  height: 33%;\n  color: #cc2900;\n}\n\n.end-complete {\n  background-color: #cc2900;\n  height: 33%;\n  color: #cc2900;\n}\n\ndiv div {\n  padding-top: 32%;\n}\n\n.done-modal {\n  --background: #222;\n}\n\n.little-down {\n  margin-top: 5%;\n}\n\n.my-button {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uc3RhcnQtb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCA3NywgMC41KTtcbiAgaGVpZ2h0OiAzMyU7XG4gIGNvbG9yOiAjZTZlNjAwO1xufVxuXG4uc3RhcnQtdHdvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCA3NywgMC44KTtcbiAgaGVpZ2h0OiAzMyU7XG4gIGNvbG9yOiAjZTZlNjAwO1xufVxuXG4uc3RhcnQtY29tcGxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDYwKTtcbiAgaGVpZ2h0OiAzMyU7XG4gIGNvbG9yOiAjZTZlNjAwO1xufVxuXG4uZ28tb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAyNTUsIDUxLCAwLjUpO1xuICBoZWlnaHQ6IDM0JTtcbiAgY29sb3I6ICMwMGU2MDA7XG59XG5cbi5nby10d28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDI1NSwgNTEsIDAuOCk7XG4gIGhlaWdodDogMzQlO1xuICBjb2xvcjogIzAwZTYwMDtcbn1cblxuLmdvLWNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZTYwMDtcbiAgaGVpZ2h0OiAzNCU7XG4gIGNvbG9yOiAjMDBlNjAwO1xufVxuXG4uZW5kLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDcxLCAyNiwgMC41KTtcbiAgaGVpZ2h0OiAzMyU7XG4gIGNvbG9yOiAjY2MyOTAwO1xufVxuXG4uZW5kLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDcxLCAyNiwgMC44KTtcbiAgaGVpZ2h0OiAzMyU7XG4gIGNvbG9yOiAjY2MyOTAwO1xufVxuXG4uZW5kLWNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMjkwMDtcbiAgaGVpZ2h0OiAzMyU7XG4gIGNvbG9yOiAjY2MyOTAwO1xufVxuXG5kaXYgZGl2IHtcbiAgcGFkZGluZy10b3A6IDMyJTtcbn1cblxuLmRvbmUtbW9kYWwge1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG59XG5cbi5saXR0bGUtZG93biB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4ubXktYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbn1cblxuLy8gI2NvbnRhaW5lciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIHN0cm9uZyB7XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4vLyB9XG5cbi8vICNjb250YWluZXIgcCB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbi8vICAgY29sb3I6ICM4YzhjOGM7XG5cbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIGEge1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyB9Il19 */";
      /***/
    },

    /***/
    "Glrt":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/done/done.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Glrt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"my-button\" (click)=\"dismiss()\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- <div style=\"margin-top: 40%;\">\n    <ion-img [src]=\"imageSrc\"></ion-img>\n  </div> -->\n  <div class=\"vertically-centered\">\n      <div>\n        <h1 class=\"time-up\">TIME IS UP!</h1>\n      </div>\n    <!-- <div style=\"text-align: center;\">\n      <span class=\"letter blue\">T</span>\n      <span class=\"letter blue\">I</span>\n      <span class=\"letter blue\">M</span>\n      <span class=\"letter blue\">E</span>\n    </div>\n    <div style=\"text-align: center;\">\n      <span class=\"letter blue\">I</span>\n      <span class=\"letter blue\">S</span>\n    </div>\n    <div style=\"text-align: center;\">\n      <span class=\"letter blue\">U</span>\n      <span class=\"letter blue\">P</span>\n      <span class=\"letter blue\">!!!!</span>\n    </div> -->\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "HlzF":
    /*!********************************************!*\
      !*** ./node_modules/howler/dist/howler.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function HlzF(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /*!
      *  howler.js v2.2.0
      *  howlerjs.com
      *
      *  (c) 2013-2020, James Simpson of GoldFire Studios
      *  goldfirestudios.com
      *
      *  MIT License
      */


      (function () {
        'use strict';
        /** Global Methods **/

        /***************************************************************************/

        /**
         * Create the global controller. All contained methods and properties apply
         * to all sounds that are currently playing or will be in the future.
         */

        var HowlerGlobal = function HowlerGlobal() {
          this.init();
        };

        HowlerGlobal.prototype = {
          /**
           * Initialize the global Howler object.
           * @return {Howler}
           */
          init: function init() {
            var self = this || Howler; // Create a global ID counter.

            self._counter = 1000; // Pool of unlocked HTML5 Audio objects.

            self._html5AudioPool = [];
            self.html5PoolSize = 10; // Internal properties.

            self._codecs = {};
            self._howls = [];
            self._muted = false;
            self._volume = 1;
            self._canPlayEvent = 'canplaythrough';
            self._navigator = typeof window !== 'undefined' && window.navigator ? window.navigator : null; // Public properties.

            self.masterGain = null;
            self.noAudio = false;
            self.usingWebAudio = true;
            self.autoSuspend = true;
            self.ctx = null; // Set to false to disable the auto audio unlocker.

            self.autoUnlock = true; // Setup the various state values for global tracking.

            self._setup();

            return self;
          },

          /**
           * Get/set the global volume for all sounds.
           * @param  {Float} vol Volume from 0.0 to 1.0.
           * @return {Howler/Float}     Returns self or current volume.
           */
          volume: function volume(vol) {
            var self = this || Howler;
            vol = parseFloat(vol); // If we don't have an AudioContext created yet, run the setup.

            if (!self.ctx) {
              setupAudioContext();
            }

            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
              self._volume = vol; // Don't update any of the nodes if we are muted.

              if (self._muted) {
                return self;
              } // When using Web Audio, we just need to adjust the master gain.


              if (self.usingWebAudio) {
                self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
              } // Loop through and change volume for all HTML5 audio nodes.


              for (var i = 0; i < self._howls.length; i++) {
                if (!self._howls[i]._webAudio) {
                  // Get all of the sounds in this Howl group.
                  var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and change the volumes.


                  for (var j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]);

                    if (sound && sound._node) {
                      sound._node.volume = sound._volume * vol;
                    }
                  }
                }
              }

              return self;
            }

            return self._volume;
          },

          /**
           * Handle muting and unmuting globally.
           * @param  {Boolean} muted Is muted or not.
           */
          mute: function mute(muted) {
            var self = this || Howler; // If we don't have an AudioContext created yet, run the setup.

            if (!self.ctx) {
              setupAudioContext();
            }

            self._muted = muted; // With Web Audio, we just need to mute the master gain.

            if (self.usingWebAudio) {
              self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
            } // Loop through and mute all HTML5 Audio nodes.


            for (var i = 0; i < self._howls.length; i++) {
              if (!self._howls[i]._webAudio) {
                // Get all of the sounds in this Howl group.
                var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and mark the audio node as muted.


                for (var j = 0; j < ids.length; j++) {
                  var sound = self._howls[i]._soundById(ids[j]);

                  if (sound && sound._node) {
                    sound._node.muted = muted ? true : sound._muted;
                  }
                }
              }
            }

            return self;
          },

          /**
           * Handle stopping all sounds globally.
           */
          stop: function stop() {
            var self = this || Howler; // Loop through all Howls and stop them.

            for (var i = 0; i < self._howls.length; i++) {
              self._howls[i].stop();
            }

            return self;
          },

          /**
           * Unload and destroy all currently loaded Howl objects.
           * @return {Howler}
           */
          unload: function unload() {
            var self = this || Howler;

            for (var i = self._howls.length - 1; i >= 0; i--) {
              self._howls[i].unload();
            } // Create a new AudioContext to make sure it is fully reset.


            if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
              self.ctx.close();
              self.ctx = null;
              setupAudioContext();
            }

            return self;
          },

          /**
           * Check for codec support of specific extension.
           * @param  {String} ext Audio file extention.
           * @return {Boolean}
           */
          codecs: function codecs(ext) {
            return (this || Howler)._codecs[ext.replace(/^x-/, '')];
          },

          /**
           * Setup various state values for global tracking.
           * @return {Howler}
           */
          _setup: function _setup() {
            var self = this || Howler; // Keeps track of the suspend/resume state of the AudioContext.

            self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended'; // Automatically begin the 30-second suspend process

            self._autoSuspend(); // Check if audio is available.


            if (!self.usingWebAudio) {
              // No audio is available on this system if noAudio is set to true.
              if (typeof Audio !== 'undefined') {
                try {
                  var test = new Audio(); // Check if the canplaythrough event is available.

                  if (typeof test.oncanplaythrough === 'undefined') {
                    self._canPlayEvent = 'canplay';
                  }
                } catch (e) {
                  self.noAudio = true;
                }
              } else {
                self.noAudio = true;
              }
            } // Test to make sure audio isn't disabled in Internet Explorer.


            try {
              var test = new Audio();

              if (test.muted) {
                self.noAudio = true;
              }
            } catch (e) {} // Check for supported codecs.


            if (!self.noAudio) {
              self._setupCodecs();
            }

            return self;
          },

          /**
           * Check for browser support for various codecs and cache the results.
           * @return {Howler}
           */
          _setupCodecs: function _setupCodecs() {
            var self = this || Howler;
            var audioTest = null; // Must wrap in a try/catch because IE11 in server mode throws an error.

            try {
              audioTest = typeof Audio !== 'undefined' ? new Audio() : null;
            } catch (err) {
              return self;
            }

            if (!audioTest || typeof audioTest.canPlayType !== 'function') {
              return self;
            }

            var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, ''); // Opera version <33 has mixed MP3 support, so we need to check for and block it.

            var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);

            var isOldOpera = checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33;
            self._codecs = {
              mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
              mpeg: !!mpegTest,
              opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
              ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
              oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
              wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
              aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
              caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
              m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
              m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
              mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
              weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
              webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
              dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
              flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
            };
            return self;
          },

          /**
           * Some browsers/devices will only allow audio to be played after a user interaction.
           * Attempt to automatically unlock audio on the first user interaction.
           * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
           * @return {Howler}
           */
          _unlockAudio: function _unlockAudio() {
            var self = this || Howler; // Only run this if Web Audio is supported and it hasn't already been unlocked.

            if (self._audioUnlocked || !self.ctx) {
              return;
            }

            self._audioUnlocked = false;
            self.autoUnlock = false; // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
            // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
            // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.

            if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
              self._mobileUnloaded = true;
              self.unload();
            } // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
            // http://stackoverflow.com/questions/24119684


            self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050); // Call this method on touch start to create and play a buffer,
            // then check if the audio actually played to determine if
            // audio has now been unlocked on iOS, Android, etc.

            var unlock = function unlock(e) {
              // Create a pool of unlocked HTML5 Audio objects that can
              // be used for playing sounds without user interaction. HTML5
              // Audio objects must be individually unlocked, as opposed
              // to the WebAudio API which only needs a single activation.
              // This must occur before WebAudio setup or the source.onended
              // event will not fire.
              while (self._html5AudioPool.length < self.html5PoolSize) {
                try {
                  var audioNode = new Audio(); // Mark this Audio object as unlocked to ensure it can get returned
                  // to the unlocked pool when released.

                  audioNode._unlocked = true; // Add the audio node to the pool.

                  self._releaseHtml5Audio(audioNode);
                } catch (e) {
                  self.noAudio = true;
                  break;
                }
              } // Loop through any assigned audio nodes and unlock them.


              for (var i = 0; i < self._howls.length; i++) {
                if (!self._howls[i]._webAudio) {
                  // Get all of the sounds in this Howl group.
                  var ids = self._howls[i]._getSoundIds(); // Loop through all sounds and unlock the audio nodes.


                  for (var j = 0; j < ids.length; j++) {
                    var sound = self._howls[i]._soundById(ids[j]);

                    if (sound && sound._node && !sound._node._unlocked) {
                      sound._node._unlocked = true;

                      sound._node.load();
                    }
                  }
                }
              } // Fix Android can not play in suspend state.


              self._autoResume(); // Create an empty buffer.


              var source = self.ctx.createBufferSource();
              source.buffer = self._scratchBuffer;
              source.connect(self.ctx.destination); // Play the empty buffer.

              if (typeof source.start === 'undefined') {
                source.noteOn(0);
              } else {
                source.start(0);
              } // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.


              if (typeof self.ctx.resume === 'function') {
                self.ctx.resume();
              } // Setup a timeout to check that we are unlocked on the next event loop.


              source.onended = function () {
                source.disconnect(0); // Update the unlocked state and prevent this check from happening again.

                self._audioUnlocked = true; // Remove the touch start listener.

                document.removeEventListener('touchstart', unlock, true);
                document.removeEventListener('touchend', unlock, true);
                document.removeEventListener('click', unlock, true); // Let all sounds know that audio has been unlocked.

                for (var i = 0; i < self._howls.length; i++) {
                  self._howls[i]._emit('unlock');
                }
              };
            }; // Setup a touch start listener to attempt an unlock in.


            document.addEventListener('touchstart', unlock, true);
            document.addEventListener('touchend', unlock, true);
            document.addEventListener('click', unlock, true);
            return self;
          },

          /**
           * Get an unlocked HTML5 Audio object from the pool. If none are left,
           * return a new Audio object and throw a warning.
           * @return {Audio} HTML5 Audio object.
           */
          _obtainHtml5Audio: function _obtainHtml5Audio() {
            var self = this || Howler; // Return the next object from the pool if one exists.

            if (self._html5AudioPool.length) {
              return self._html5AudioPool.pop();
            } //.Check if the audio is locked and throw a warning.


            var testPlay = new Audio().play();

            if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
              testPlay["catch"](function () {
                console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
              });
            }

            return new Audio();
          },

          /**
           * Return an activated HTML5 Audio object to the pool.
           * @return {Howler}
           */
          _releaseHtml5Audio: function _releaseHtml5Audio(audio) {
            var self = this || Howler; // Don't add audio to the pool if we don't know if it has been unlocked.

            if (audio._unlocked) {
              self._html5AudioPool.push(audio);
            }

            return self;
          },

          /**
           * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
           * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
           * @return {Howler}
           */
          _autoSuspend: function _autoSuspend() {
            var self = this;

            if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
              return;
            } // Check if any sounds are playing.


            for (var i = 0; i < self._howls.length; i++) {
              if (self._howls[i]._webAudio) {
                for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                  if (!self._howls[i]._sounds[j]._paused) {
                    return self;
                  }
                }
              }
            }

            if (self._suspendTimer) {
              clearTimeout(self._suspendTimer);
            } // If no sound has played after 30 seconds, suspend the context.


            self._suspendTimer = setTimeout(function () {
              if (!self.autoSuspend) {
                return;
              }

              self._suspendTimer = null;
              self.state = 'suspending'; // Handle updating the state of the audio context after suspending.

              var handleSuspension = function handleSuspension() {
                self.state = 'suspended';

                if (self._resumeAfterSuspend) {
                  delete self._resumeAfterSuspend;

                  self._autoResume();
                }
              }; // Either the state gets suspended or it is interrupted.
              // Either way, we need to update the state to suspended.


              self.ctx.suspend().then(handleSuspension, handleSuspension);
            }, 30000);
            return self;
          },

          /**
           * Automatically resume the Web Audio AudioContext when a new sound is played.
           * @return {Howler}
           */
          _autoResume: function _autoResume() {
            var self = this;

            if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
              return;
            }

            if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
              clearTimeout(self._suspendTimer);
              self._suspendTimer = null;
            } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
              self.ctx.resume().then(function () {
                self.state = 'running'; // Emit to all Howls that the audio has resumed.

                for (var i = 0; i < self._howls.length; i++) {
                  self._howls[i]._emit('resume');
                }
              });

              if (self._suspendTimer) {
                clearTimeout(self._suspendTimer);
                self._suspendTimer = null;
              }
            } else if (self.state === 'suspending') {
              self._resumeAfterSuspend = true;
            }

            return self;
          }
        }; // Setup the global audio controller.

        var Howler = new HowlerGlobal();
        /** Group Methods **/

        /***************************************************************************/

        /**
         * Create an audio group controller.
         * @param {Object} o Passed in properties for this group.
         */

        var Howl = function Howl(o) {
          var self = this; // Throw an error if no source is provided.

          if (!o.src || o.src.length === 0) {
            console.error('An array of source files must be passed with any new Howl.');
            return;
          }

          self.init(o);
        };

        Howl.prototype = {
          /**
           * Initialize a new Howl group object.
           * @param  {Object} o Passed in properties for this group.
           * @return {Howl}
           */
          init: function init(o) {
            var self = this; // If we don't have an AudioContext created yet, run the setup.

            if (!Howler.ctx) {
              setupAudioContext();
            } // Setup user-defined default properties.


            self._autoplay = o.autoplay || false;
            self._format = typeof o.format !== 'string' ? o.format : [o.format];
            self._html5 = o.html5 || false;
            self._muted = o.mute || false;
            self._loop = o.loop || false;
            self._pool = o.pool || 5;
            self._preload = typeof o.preload === 'boolean' || o.preload === 'metadata' ? o.preload : true;
            self._rate = o.rate || 1;
            self._sprite = o.sprite || {};
            self._src = typeof o.src !== 'string' ? o.src : [o.src];
            self._volume = o.volume !== undefined ? o.volume : 1;
            self._xhr = {
              method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
              headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
              withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
            }; // Setup all other default properties.

            self._duration = 0;
            self._state = 'unloaded';
            self._sounds = [];
            self._endTimers = {};
            self._queue = [];
            self._playLock = false; // Setup event listeners.

            self._onend = o.onend ? [{
              fn: o.onend
            }] : [];
            self._onfade = o.onfade ? [{
              fn: o.onfade
            }] : [];
            self._onload = o.onload ? [{
              fn: o.onload
            }] : [];
            self._onloaderror = o.onloaderror ? [{
              fn: o.onloaderror
            }] : [];
            self._onplayerror = o.onplayerror ? [{
              fn: o.onplayerror
            }] : [];
            self._onpause = o.onpause ? [{
              fn: o.onpause
            }] : [];
            self._onplay = o.onplay ? [{
              fn: o.onplay
            }] : [];
            self._onstop = o.onstop ? [{
              fn: o.onstop
            }] : [];
            self._onmute = o.onmute ? [{
              fn: o.onmute
            }] : [];
            self._onvolume = o.onvolume ? [{
              fn: o.onvolume
            }] : [];
            self._onrate = o.onrate ? [{
              fn: o.onrate
            }] : [];
            self._onseek = o.onseek ? [{
              fn: o.onseek
            }] : [];
            self._onunlock = o.onunlock ? [{
              fn: o.onunlock
            }] : [];
            self._onresume = []; // Web Audio or HTML5 Audio?

            self._webAudio = Howler.usingWebAudio && !self._html5; // Automatically try to enable audio.

            if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
              Howler._unlockAudio();
            } // Keep track of this Howl group in the global controller.


            Howler._howls.push(self); // If they selected autoplay, add a play event to the load queue.


            if (self._autoplay) {
              self._queue.push({
                event: 'play',
                action: function action() {
                  self.play();
                }
              });
            } // Load the source file unless otherwise specified.


            if (self._preload && self._preload !== 'none') {
              self.load();
            }

            return self;
          },

          /**
           * Load the audio file.
           * @return {Howler}
           */
          load: function load() {
            var self = this;
            var url = null; // If no audio is available, quit immediately.

            if (Howler.noAudio) {
              self._emit('loaderror', null, 'No audio support.');

              return;
            } // Make sure our source is in an array.


            if (typeof self._src === 'string') {
              self._src = [self._src];
            } // Loop through the sources and pick the first one that is compatible.


            for (var i = 0; i < self._src.length; i++) {
              var ext, str;

              if (self._format && self._format[i]) {
                // If an extension was specified, use that instead.
                ext = self._format[i];
              } else {
                // Make sure the source is a string.
                str = self._src[i];

                if (typeof str !== 'string') {
                  self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');

                  continue;
                } // Extract the file extension from the URL or base64 data URI.


                ext = /^data:audio\/([^;,]+);/i.exec(str);

                if (!ext) {
                  ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
                }

                if (ext) {
                  ext = ext[1].toLowerCase();
                }
              } // Log a warning if no extension was found.


              if (!ext) {
                console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
              } // Check if this extension is available.


              if (ext && Howler.codecs(ext)) {
                url = self._src[i];
                break;
              }
            }

            if (!url) {
              self._emit('loaderror', null, 'No codec support for selected audio sources.');

              return;
            }

            self._src = url;
            self._state = 'loading'; // If the hosting page is HTTPS and the source isn't,
            // drop down to HTML5 Audio to avoid Mixed Content errors.

            if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
              self._html5 = true;
              self._webAudio = false;
            } // Create a new sound object and add it to the pool.


            new Sound(self); // Load and decode the audio data for playback.

            if (self._webAudio) {
              loadBuffer(self);
            }

            return self;
          },

          /**
           * Play a sound or resume previous playback.
           * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
           * @param  {Boolean} internal Internal Use: true prevents event firing.
           * @return {Number}          Sound ID.
           */
          play: function play(sprite, internal) {
            var self = this;
            var id = null; // Determine if a sprite, sound id or nothing was passed

            if (typeof sprite === 'number') {
              id = sprite;
              sprite = null;
            } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
              // If the passed sprite doesn't exist, do nothing.
              return null;
            } else if (typeof sprite === 'undefined') {
              // Use the default sound sprite (plays the full audio length).
              sprite = '__default'; // Check if there is a single paused sound that isn't ended.
              // If there is, play that sound. If not, continue as usual.

              if (!self._playLock) {
                var num = 0;

                for (var i = 0; i < self._sounds.length; i++) {
                  if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                    num++;
                    id = self._sounds[i]._id;
                  }
                }

                if (num === 1) {
                  sprite = null;
                } else {
                  id = null;
                }
              }
            } // Get the selected node, or get one from the pool.


            var sound = id ? self._soundById(id) : self._inactiveSound(); // If the sound doesn't exist, do nothing.

            if (!sound) {
              return null;
            } // Select the sprite definition.


            if (id && !sprite) {
              sprite = sound._sprite || '__default';
            } // If the sound hasn't loaded, we must wait to get the audio's duration.
            // We also need to wait to make sure we don't run into race conditions with
            // the order of function calls.


            if (self._state !== 'loaded') {
              // Set the sprite value on this sound.
              sound._sprite = sprite; // Mark this sound as not ended in case another sound is played before this one loads.

              sound._ended = false; // Add the sound to the queue to be played on load.

              var soundId = sound._id;

              self._queue.push({
                event: 'play',
                action: function action() {
                  self.play(soundId);
                }
              });

              return soundId;
            } // Don't play the sound if an id was passed and it is already playing.


            if (id && !sound._paused) {
              // Trigger the play event, in order to keep iterating through queue.
              if (!internal) {
                self._loadQueue('play');
              }

              return sound._id;
            } // Make sure the AudioContext isn't suspended, and resume it if it is.


            if (self._webAudio) {
              Howler._autoResume();
            } // Determine how long to play for and where to start playing.


            var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
            var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000 - seek);
            var timeout = duration * 1000 / Math.abs(sound._rate);
            var start = self._sprite[sprite][0] / 1000;
            var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
            sound._sprite = sprite; // Mark the sound as ended instantly so that this async playback
            // doesn't get grabbed by another call to play while this one waits to start.

            sound._ended = false; // Update the parameters of the sound.

            var setParams = function setParams() {
              sound._paused = false;
              sound._seek = seek;
              sound._start = start;
              sound._stop = stop;
              sound._loop = !!(sound._loop || self._sprite[sprite][2]);
            }; // End the sound instantly if seek is at the end.


            if (seek >= stop) {
              self._ended(sound);

              return;
            } // Begin the actual playback.


            var node = sound._node;

            if (self._webAudio) {
              // Fire this when the sound is ready to play to begin Web Audio playback.
              var playWebAudio = function playWebAudio() {
                self._playLock = false;
                setParams();

                self._refreshBuffer(sound); // Setup the playback params.


                var vol = sound._muted || self._muted ? 0 : sound._volume;
                node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                sound._playStart = Howler.ctx.currentTime; // Play the sound using the supported method.

                if (typeof node.bufferSource.start === 'undefined') {
                  sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
                } else {
                  sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
                } // Start a new timer if none is present.


                if (timeout !== Infinity) {
                  self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                }

                if (!internal) {
                  setTimeout(function () {
                    self._emit('play', sound._id);

                    self._loadQueue();
                  }, 0);
                }
              };

              if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
                playWebAudio();
              } else {
                self._playLock = true; // Wait for the audio context to resume before playing.

                self.once('resume', playWebAudio); // Cancel the end timer.

                self._clearTimer(sound._id);
              }
            } else {
              // Fire this when the sound is ready to play to begin HTML5 Audio playback.
              var playHtml5 = function playHtml5() {
                node.currentTime = seek;
                node.muted = sound._muted || self._muted || Howler._muted || node.muted;
                node.volume = sound._volume * Howler.volume();
                node.playbackRate = sound._rate; // Some browsers will throw an error if this is called without user interaction.

                try {
                  var play = node.play(); // Support older browsers that don't support promises, and thus don't have this issue.

                  if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
                    // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
                    self._playLock = true; // Set param values immediately.

                    setParams(); // Releases the lock and executes queued actions.

                    play.then(function () {
                      self._playLock = false;
                      node._unlocked = true;

                      if (!internal) {
                        self._emit('play', sound._id);

                        self._loadQueue();
                      }
                    })["catch"](function () {
                      self._playLock = false;

                      self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' + 'on mobile devices and Chrome where playback was not within a user interaction.'); // Reset the ended and paused values.


                      sound._ended = true;
                      sound._paused = true;
                    });
                  } else if (!internal) {
                    self._playLock = false;
                    setParams();

                    self._emit('play', sound._id);

                    self._loadQueue();
                  } // Setting rate before playing won't work in IE, so we set it again here.


                  node.playbackRate = sound._rate; // If the node is still paused, then we can assume there was a playback issue.

                  if (node.paused) {
                    self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' + 'on mobile devices and Chrome where playback was not within a user interaction.');

                    return;
                  } // Setup the end timer on sprites or listen for the ended event.


                  if (sprite !== '__default' || sound._loop) {
                    self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
                  } else {
                    self._endTimers[sound._id] = function () {
                      // Fire ended on this audio node.
                      self._ended(sound); // Clear this listener.


                      node.removeEventListener('ended', self._endTimers[sound._id], false);
                    };

                    node.addEventListener('ended', self._endTimers[sound._id], false);
                  }
                } catch (err) {
                  self._emit('playerror', sound._id, err);
                }
              }; // If this is streaming audio, make sure the src is set and load again.


              if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
                node.src = self._src;
                node.load();
              } // Play immediately if ready, or wait for the 'canplaythrough'e vent.


              var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS;

              if (node.readyState >= 3 || loadedNoReadyState) {
                playHtml5();
              } else {
                self._playLock = true;

                var listener = function listener() {
                  // Begin playback.
                  playHtml5(); // Clear this listener.

                  node.removeEventListener(Howler._canPlayEvent, listener, false);
                };

                node.addEventListener(Howler._canPlayEvent, listener, false); // Cancel the end timer.

                self._clearTimer(sound._id);
              }
            }

            return sound._id;
          },

          /**
           * Pause playback and save current position.
           * @param  {Number} id The sound ID (empty to pause all in group).
           * @return {Howl}
           */
          pause: function pause(id) {
            var self = this; // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.

            if (self._state !== 'loaded' || self._playLock) {
              self._queue.push({
                event: 'pause',
                action: function action() {
                  self.pause(id);
                }
              });

              return self;
            } // If no id is passed, get all ID's to be paused.


            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
              // Clear the end timer.
              self._clearTimer(ids[i]); // Get the sound.


              var sound = self._soundById(ids[i]);

              if (sound && !sound._paused) {
                // Reset the seek position.
                sound._seek = self.seek(ids[i]);
                sound._rateSeek = 0;
                sound._paused = true; // Stop currently running fades.

                self._stopFade(ids[i]);

                if (sound._node) {
                  if (self._webAudio) {
                    // Make sure the sound has been created.
                    if (!sound._node.bufferSource) {
                      continue;
                    }

                    if (typeof sound._node.bufferSource.stop === 'undefined') {
                      sound._node.bufferSource.noteOff(0);
                    } else {
                      sound._node.bufferSource.stop(0);
                    } // Clean up the buffer source.


                    self._cleanBuffer(sound._node);
                  } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                    sound._node.pause();
                  }
                }
              } // Fire the pause event, unless `true` is passed as the 2nd argument.


              if (!arguments[1]) {
                self._emit('pause', sound ? sound._id : null);
              }
            }

            return self;
          },

          /**
           * Stop playback and reset to start.
           * @param  {Number} id The sound ID (empty to stop all in group).
           * @param  {Boolean} internal Internal Use: true prevents event firing.
           * @return {Howl}
           */
          stop: function stop(id, internal) {
            var self = this; // If the sound hasn't loaded, add it to the load queue to stop when capable.

            if (self._state !== 'loaded' || self._playLock) {
              self._queue.push({
                event: 'stop',
                action: function action() {
                  self.stop(id);
                }
              });

              return self;
            } // If no id is passed, get all ID's to be stopped.


            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
              // Clear the end timer.
              self._clearTimer(ids[i]); // Get the sound.


              var sound = self._soundById(ids[i]);

              if (sound) {
                // Reset the seek position.
                sound._seek = sound._start || 0;
                sound._rateSeek = 0;
                sound._paused = true;
                sound._ended = true; // Stop currently running fades.

                self._stopFade(ids[i]);

                if (sound._node) {
                  if (self._webAudio) {
                    // Make sure the sound's AudioBufferSourceNode has been created.
                    if (sound._node.bufferSource) {
                      if (typeof sound._node.bufferSource.stop === 'undefined') {
                        sound._node.bufferSource.noteOff(0);
                      } else {
                        sound._node.bufferSource.stop(0);
                      } // Clean up the buffer source.


                      self._cleanBuffer(sound._node);
                    }
                  } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                    sound._node.currentTime = sound._start || 0;

                    sound._node.pause(); // If this is a live stream, stop download once the audio is stopped.


                    if (sound._node.duration === Infinity) {
                      self._clearSound(sound._node);
                    }
                  }
                }

                if (!internal) {
                  self._emit('stop', sound._id);
                }
              }
            }

            return self;
          },

          /**
           * Mute/unmute a single sound or all sounds in this Howl group.
           * @param  {Boolean} muted Set to true to mute and false to unmute.
           * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
           * @return {Howl}
           */
          mute: function mute(muted, id) {
            var self = this; // If the sound hasn't loaded, add it to the load queue to mute when capable.

            if (self._state !== 'loaded' || self._playLock) {
              self._queue.push({
                event: 'mute',
                action: function action() {
                  self.mute(muted, id);
                }
              });

              return self;
            } // If applying mute/unmute to all sounds, update the group's value.


            if (typeof id === 'undefined') {
              if (typeof muted === 'boolean') {
                self._muted = muted;
              } else {
                return self._muted;
              }
            } // If no id is passed, get all ID's to be muted.


            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
              // Get the sound.
              var sound = self._soundById(ids[i]);

              if (sound) {
                sound._muted = muted; // Cancel active fade and set the volume to the end value.

                if (sound._interval) {
                  self._stopFade(sound._id);
                }

                if (self._webAudio && sound._node) {
                  sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
                } else if (sound._node) {
                  sound._node.muted = Howler._muted ? true : muted;
                }

                self._emit('mute', sound._id);
              }
            }

            return self;
          },

          /**
           * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
           *   volume() -> Returns the group's volume value.
           *   volume(id) -> Returns the sound id's current volume.
           *   volume(vol) -> Sets the volume of all sounds in this Howl group.
           *   volume(vol, id) -> Sets the volume of passed sound id.
           * @return {Howl/Number} Returns self or current volume.
           */
          volume: function volume() {
            var self = this;
            var args = arguments;
            var vol, id; // Determine the values based on arguments.

            if (args.length === 0) {
              // Return the value of the groups' volume.
              return self._volume;
            } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
              // First check if this is an ID, and if not, assume it is a new volume.
              var ids = self._getSoundIds();

              var index = ids.indexOf(args[0]);

              if (index >= 0) {
                id = parseInt(args[0], 10);
              } else {
                vol = parseFloat(args[0]);
              }
            } else if (args.length >= 2) {
              vol = parseFloat(args[0]);
              id = parseInt(args[1], 10);
            } // Update the volume or return the current volume.


            var sound;

            if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
              // If the sound hasn't loaded, add it to the load queue to change volume when capable.
              if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                  event: 'volume',
                  action: function action() {
                    self.volume.apply(self, args);
                  }
                });

                return self;
              } // Set the group volume.


              if (typeof id === 'undefined') {
                self._volume = vol;
              } // Update one or all volumes.


              id = self._getSoundIds(id);

              for (var i = 0; i < id.length; i++) {
                // Get the sound.
                sound = self._soundById(id[i]);

                if (sound) {
                  sound._volume = vol; // Stop currently running fades.

                  if (!args[2]) {
                    self._stopFade(id[i]);
                  }

                  if (self._webAudio && sound._node && !sound._muted) {
                    sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                  } else if (sound._node && !sound._muted) {
                    sound._node.volume = vol * Howler.volume();
                  }

                  self._emit('volume', sound._id);
                }
              }
            } else {
              sound = id ? self._soundById(id) : self._sounds[0];
              return sound ? sound._volume : 0;
            }

            return self;
          },

          /**
           * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
           * @param  {Number} from The value to fade from (0.0 to 1.0).
           * @param  {Number} to   The volume to fade to (0.0 to 1.0).
           * @param  {Number} len  Time in milliseconds to fade.
           * @param  {Number} id   The sound id (omit to fade all sounds).
           * @return {Howl}
           */
          fade: function fade(from, to, len, id) {
            var self = this; // If the sound hasn't loaded, add it to the load queue to fade when capable.

            if (self._state !== 'loaded' || self._playLock) {
              self._queue.push({
                event: 'fade',
                action: function action() {
                  self.fade(from, to, len, id);
                }
              });

              return self;
            } // Make sure the to/from/len values are numbers.


            from = Math.min(Math.max(0, parseFloat(from)), 1);
            to = Math.min(Math.max(0, parseFloat(to)), 1);
            len = parseFloat(len); // Set the volume to the start position.

            self.volume(from, id); // Fade the volume of one or all sounds.

            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
              // Get the sound.
              var sound = self._soundById(ids[i]); // Create a linear fade or fall back to timeouts with HTML5 Audio.


              if (sound) {
                // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
                if (!id) {
                  self._stopFade(ids[i]);
                } // If we are using Web Audio, let the native methods do the actual fade.


                if (self._webAudio && !sound._muted) {
                  var currentTime = Howler.ctx.currentTime;
                  var end = currentTime + len / 1000;
                  sound._volume = from;

                  sound._node.gain.setValueAtTime(from, currentTime);

                  sound._node.gain.linearRampToValueAtTime(to, end);
                }

                self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
              }
            }

            return self;
          },

          /**
           * Starts the internal interval to fade a sound.
           * @param  {Object} sound Reference to sound to fade.
           * @param  {Number} from The value to fade from (0.0 to 1.0).
           * @param  {Number} to   The volume to fade to (0.0 to 1.0).
           * @param  {Number} len  Time in milliseconds to fade.
           * @param  {Number} id   The sound id to fade.
           * @param  {Boolean} isGroup   If true, set the volume on the group.
           */
          _startFadeInterval: function _startFadeInterval(sound, from, to, len, id, isGroup) {
            var self = this;
            var vol = from;
            var diff = to - from;
            var steps = Math.abs(diff / 0.01);
            var stepLen = Math.max(4, steps > 0 ? len / steps : len);
            var lastTick = Date.now(); // Store the value being faded to.

            sound._fadeTo = to; // Update the volume value on each interval tick.

            sound._interval = setInterval(function () {
              // Update the volume based on the time since the last tick.
              var tick = (Date.now() - lastTick) / len;
              lastTick = Date.now();
              vol += diff * tick; // Make sure the volume is in the right bounds.

              if (diff < 0) {
                vol = Math.max(to, vol);
              } else {
                vol = Math.min(to, vol);
              } // Round to within 2 decimal points.


              vol = Math.round(vol * 100) / 100; // Change the volume.

              if (self._webAudio) {
                sound._volume = vol;
              } else {
                self.volume(vol, sound._id, true);
              } // Set the group's volume.


              if (isGroup) {
                self._volume = vol;
              } // When the fade is complete, stop it and fire event.


              if (to < from && vol <= to || to > from && vol >= to) {
                clearInterval(sound._interval);
                sound._interval = null;
                sound._fadeTo = null;
                self.volume(to, sound._id);

                self._emit('fade', sound._id);
              }
            }, stepLen);
          },

          /**
           * Internal method that stops the currently playing fade when
           * a new fade starts, volume is changed or the sound is stopped.
           * @param  {Number} id The sound id.
           * @return {Howl}
           */
          _stopFade: function _stopFade(id) {
            var self = this;

            var sound = self._soundById(id);

            if (sound && sound._interval) {
              if (self._webAudio) {
                sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
              }

              clearInterval(sound._interval);
              sound._interval = null;
              self.volume(sound._fadeTo, id);
              sound._fadeTo = null;

              self._emit('fade', id);
            }

            return self;
          },

          /**
           * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
           *   loop() -> Returns the group's loop value.
           *   loop(id) -> Returns the sound id's loop value.
           *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
           *   loop(loop, id) -> Sets the loop value of passed sound id.
           * @return {Howl/Boolean} Returns self or current loop value.
           */
          loop: function loop() {
            var self = this;
            var args = arguments;
            var loop, id, sound; // Determine the values for loop and id.

            if (args.length === 0) {
              // Return the grou's loop value.
              return self._loop;
            } else if (args.length === 1) {
              if (typeof args[0] === 'boolean') {
                loop = args[0];
                self._loop = loop;
              } else {
                // Return this sound's loop value.
                sound = self._soundById(parseInt(args[0], 10));
                return sound ? sound._loop : false;
              }
            } else if (args.length === 2) {
              loop = args[0];
              id = parseInt(args[1], 10);
            } // If no id is passed, get all ID's to be looped.


            var ids = self._getSoundIds(id);

            for (var i = 0; i < ids.length; i++) {
              sound = self._soundById(ids[i]);

              if (sound) {
                sound._loop = loop;

                if (self._webAudio && sound._node && sound._node.bufferSource) {
                  sound._node.bufferSource.loop = loop;

                  if (loop) {
                    sound._node.bufferSource.loopStart = sound._start || 0;
                    sound._node.bufferSource.loopEnd = sound._stop;
                  }
                }
              }
            }

            return self;
          },

          /**
           * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
           *   rate() -> Returns the first sound node's current playback rate.
           *   rate(id) -> Returns the sound id's current playback rate.
           *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
           *   rate(rate, id) -> Sets the playback rate of passed sound id.
           * @return {Howl/Number} Returns self or the current playback rate.
           */
          rate: function rate() {
            var self = this;
            var args = arguments;
            var rate, id; // Determine the values based on arguments.

            if (args.length === 0) {
              // We will simply return the current rate of the first node.
              id = self._sounds[0]._id;
            } else if (args.length === 1) {
              // First check if this is an ID, and if not, assume it is a new rate value.
              var ids = self._getSoundIds();

              var index = ids.indexOf(args[0]);

              if (index >= 0) {
                id = parseInt(args[0], 10);
              } else {
                rate = parseFloat(args[0]);
              }
            } else if (args.length === 2) {
              rate = parseFloat(args[0]);
              id = parseInt(args[1], 10);
            } // Update the playback rate or return the current value.


            var sound;

            if (typeof rate === 'number') {
              // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
              if (self._state !== 'loaded' || self._playLock) {
                self._queue.push({
                  event: 'rate',
                  action: function action() {
                    self.rate.apply(self, args);
                  }
                });

                return self;
              } // Set the group rate.


              if (typeof id === 'undefined') {
                self._rate = rate;
              } // Update one or all volumes.


              id = self._getSoundIds(id);

              for (var i = 0; i < id.length; i++) {
                // Get the sound.
                sound = self._soundById(id[i]);

                if (sound) {
                  // Keep track of our position when the rate changed and update the playback
                  // start position so we can properly adjust the seek position for time elapsed.
                  if (self.playing(id[i])) {
                    sound._rateSeek = self.seek(id[i]);
                    sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                  }

                  sound._rate = rate; // Change the playback rate.

                  if (self._webAudio && sound._node && sound._node.bufferSource) {
                    sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
                  } else if (sound._node) {
                    sound._node.playbackRate = rate;
                  } // Reset the timers.


                  var seek = self.seek(id[i]);
                  var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000 - seek;
                  var timeout = duration * 1000 / Math.abs(sound._rate); // Start a new end timer if sound is already playing.

                  if (self._endTimers[id[i]] || !sound._paused) {
                    self._clearTimer(id[i]);

                    self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
                  }

                  self._emit('rate', sound._id);
                }
              }
            } else {
              sound = self._soundById(id);
              return sound ? sound._rate : self._rate;
            }

            return self;
          },

          /**
           * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
           *   seek() -> Returns the first sound node's current seek position.
           *   seek(id) -> Returns the sound id's current seek position.
           *   seek(seek) -> Sets the seek position of the first sound node.
           *   seek(seek, id) -> Sets the seek position of passed sound id.
           * @return {Howl/Number} Returns self or the current seek position.
           */
          seek: function seek() {
            var self = this;
            var args = arguments;
            var seek, id; // Determine the values based on arguments.

            if (args.length === 0) {
              // We will simply return the current position of the first node.
              id = self._sounds[0]._id;
            } else if (args.length === 1) {
              // First check if this is an ID, and if not, assume it is a new seek position.
              var ids = self._getSoundIds();

              var index = ids.indexOf(args[0]);

              if (index >= 0) {
                id = parseInt(args[0], 10);
              } else if (self._sounds.length) {
                id = self._sounds[0]._id;
                seek = parseFloat(args[0]);
              }
            } else if (args.length === 2) {
              seek = parseFloat(args[0]);
              id = parseInt(args[1], 10);
            } // If there is no ID, bail out.


            if (typeof id === 'undefined') {
              return self;
            } // If the sound hasn't loaded, add it to the load queue to seek when capable.


            if (self._state !== 'loaded' || self._playLock) {
              self._queue.push({
                event: 'seek',
                action: function action() {
                  self.seek.apply(self, args);
                }
              });

              return self;
            } // Get the sound.


            var sound = self._soundById(id);

            if (sound) {
              if (typeof seek === 'number' && seek >= 0) {
                // Pause the sound and update position for restarting playback.
                var playing = self.playing(id);

                if (playing) {
                  self.pause(id, true);
                } // Move the position of the track and cancel timer.


                sound._seek = seek;
                sound._ended = false;

                self._clearTimer(id); // Update the seek position for HTML5 Audio.


                if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
                  sound._node.currentTime = seek;
                } // Seek and emit when ready.


                var seekAndEmit = function seekAndEmit() {
                  self._emit('seek', id); // Restart the playback if the sound was playing.


                  if (playing) {
                    self.play(id, true);
                  }
                }; // Wait for the play lock to be unset before emitting (HTML5 Audio).


                if (playing && !self._webAudio) {
                  var emitSeek = function emitSeek() {
                    if (!self._playLock) {
                      seekAndEmit();
                    } else {
                      setTimeout(emitSeek, 0);
                    }
                  };

                  setTimeout(emitSeek, 0);
                } else {
                  seekAndEmit();
                }
              } else {
                if (self._webAudio) {
                  var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                  var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                  return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
                } else {
                  return sound._node.currentTime;
                }
              }
            }

            return self;
          },

          /**
           * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
           * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
           * @return {Boolean} True if playing and false if not.
           */
          playing: function playing(id) {
            var self = this; // Check the passed sound ID (if any).

            if (typeof id === 'number') {
              var sound = self._soundById(id);

              return sound ? !sound._paused : false;
            } // Otherwise, loop through all sounds and check if any are playing.


            for (var i = 0; i < self._sounds.length; i++) {
              if (!self._sounds[i]._paused) {
                return true;
              }
            }

            return false;
          },

          /**
           * Get the duration of this sound. Passing a sound id will return the sprite duration.
           * @param  {Number} id The sound id to check. If none is passed, return full source duration.
           * @return {Number} Audio duration in seconds.
           */
          duration: function duration(id) {
            var self = this;
            var duration = self._duration; // If we pass an ID, get the sound and return the sprite length.

            var sound = self._soundById(id);

            if (sound) {
              duration = self._sprite[sound._sprite][1] / 1000;
            }

            return duration;
          },

          /**
           * Returns the current loaded state of this Howl.
           * @return {String} 'unloaded', 'loading', 'loaded'
           */
          state: function state() {
            return this._state;
          },

          /**
           * Unload and destroy the current Howl object.
           * This will immediately stop all sound instances attached to this group.
           */
          unload: function unload() {
            var self = this; // Stop playing any active sounds.

            var sounds = self._sounds;

            for (var i = 0; i < sounds.length; i++) {
              // Stop the sound if it is currently playing.
              if (!sounds[i]._paused) {
                self.stop(sounds[i]._id);
              } // Remove the source or disconnect.


              if (!self._webAudio) {
                // Set the source to 0-second silence to stop any downloading (except in IE).
                self._clearSound(sounds[i]._node); // Remove any event listeners.


                sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);

                sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false); // Release the Audio object back to the pool.


                Howler._releaseHtml5Audio(sounds[i]._node);
              } // Empty out all of the nodes.


              delete sounds[i]._node; // Make sure all timers are cleared out.

              self._clearTimer(sounds[i]._id);
            } // Remove the references in the global Howler object.


            var index = Howler._howls.indexOf(self);

            if (index >= 0) {
              Howler._howls.splice(index, 1);
            } // Delete this sound from the cache (if no other Howl is using it).


            var remCache = true;

            for (i = 0; i < Howler._howls.length; i++) {
              if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
                remCache = false;
                break;
              }
            }

            if (cache && remCache) {
              delete cache[self._src];
            } // Clear global errors.


            Howler.noAudio = false; // Clear out `self`.

            self._state = 'unloaded';
            self._sounds = [];
            self = null;
            return null;
          },

          /**
           * Listen to a custom event.
           * @param  {String}   event Event name.
           * @param  {Function} fn    Listener to call.
           * @param  {Number}   id    (optional) Only listen to events for this sound.
           * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
           * @return {Howl}
           */
          on: function on(event, fn, id, once) {
            var self = this;
            var events = self['_on' + event];

            if (typeof fn === 'function') {
              events.push(once ? {
                id: id,
                fn: fn,
                once: once
              } : {
                id: id,
                fn: fn
              });
            }

            return self;
          },

          /**
           * Remove a custom event. Call without parameters to remove all events.
           * @param  {String}   event Event name.
           * @param  {Function} fn    Listener to remove. Leave empty to remove all.
           * @param  {Number}   id    (optional) Only remove events for this sound.
           * @return {Howl}
           */
          off: function off(event, fn, id) {
            var self = this;
            var events = self['_on' + event];
            var i = 0; // Allow passing just an event and ID.

            if (typeof fn === 'number') {
              id = fn;
              fn = null;
            }

            if (fn || id) {
              // Loop through event store and remove the passed function.
              for (i = 0; i < events.length; i++) {
                var isId = id === events[i].id;

                if (fn === events[i].fn && isId || !fn && isId) {
                  events.splice(i, 1);
                  break;
                }
              }
            } else if (event) {
              // Clear out all events of this type.
              self['_on' + event] = [];
            } else {
              // Clear out all events of every type.
              var keys = Object.keys(self);

              for (i = 0; i < keys.length; i++) {
                if (keys[i].indexOf('_on') === 0 && Array.isArray(self[keys[i]])) {
                  self[keys[i]] = [];
                }
              }
            }

            return self;
          },

          /**
           * Listen to a custom event and remove it once fired.
           * @param  {String}   event Event name.
           * @param  {Function} fn    Listener to call.
           * @param  {Number}   id    (optional) Only listen to events for this sound.
           * @return {Howl}
           */
          once: function once(event, fn, id) {
            var self = this; // Setup the event listener.

            self.on(event, fn, id, 1);
            return self;
          },

          /**
           * Emit all events of a specific type and pass the sound id.
           * @param  {String} event Event name.
           * @param  {Number} id    Sound ID.
           * @param  {Number} msg   Message to go with event.
           * @return {Howl}
           */
          _emit: function _emit(event, id, msg) {
            var self = this;
            var events = self['_on' + event]; // Loop through event store and fire all functions.

            for (var i = events.length - 1; i >= 0; i--) {
              // Only fire the listener if the correct ID is used.
              if (!events[i].id || events[i].id === id || event === 'load') {
                setTimeout(function (fn) {
                  fn.call(this, id, msg);
                }.bind(self, events[i].fn), 0); // If this event was setup with `once`, remove it.

                if (events[i].once) {
                  self.off(event, events[i].fn, events[i].id);
                }
              }
            } // Pass the event type into load queue so that it can continue stepping.


            self._loadQueue(event);

            return self;
          },

          /**
           * Queue of actions initiated before the sound has loaded.
           * These will be called in sequence, with the next only firing
           * after the previous has finished executing (even if async like play).
           * @return {Howl}
           */
          _loadQueue: function _loadQueue(event) {
            var self = this;

            if (self._queue.length > 0) {
              var task = self._queue[0]; // Remove this task if a matching event was passed.

              if (task.event === event) {
                self._queue.shift();

                self._loadQueue();
              } // Run the task if no event type is passed.


              if (!event) {
                task.action();
              }
            }

            return self;
          },

          /**
           * Fired when playback ends at the end of the duration.
           * @param  {Sound} sound The sound object to work with.
           * @return {Howl}
           */
          _ended: function _ended(sound) {
            var self = this;
            var sprite = sound._sprite; // If we are using IE and there was network latency we may be clipping
            // audio before it completes playing. Lets check the node to make sure it
            // believes it has completed, before ending the playback.

            if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
              setTimeout(self._ended.bind(self, sound), 100);
              return self;
            } // Should this sound loop?


            var loop = !!(sound._loop || self._sprite[sprite][2]); // Fire the ended event.

            self._emit('end', sound._id); // Restart the playback for HTML5 Audio loop.


            if (!self._webAudio && loop) {
              self.stop(sound._id, true).play(sound._id);
            } // Restart this timer if on a Web Audio loop.


            if (self._webAudio && loop) {
              self._emit('play', sound._id);

              sound._seek = sound._start || 0;
              sound._rateSeek = 0;
              sound._playStart = Howler.ctx.currentTime;
              var timeout = (sound._stop - sound._start) * 1000 / Math.abs(sound._rate);
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } // Mark the node as paused.


            if (self._webAudio && !loop) {
              sound._paused = true;
              sound._ended = true;
              sound._seek = sound._start || 0;
              sound._rateSeek = 0;

              self._clearTimer(sound._id); // Clean up the buffer source.


              self._cleanBuffer(sound._node); // Attempt to auto-suspend AudioContext if no sounds are still playing.


              Howler._autoSuspend();
            } // When using a sprite, end the track.


            if (!self._webAudio && !loop) {
              self.stop(sound._id, true);
            }

            return self;
          },

          /**
           * Clear the end timer for a sound playback.
           * @param  {Number} id The sound ID.
           * @return {Howl}
           */
          _clearTimer: function _clearTimer(id) {
            var self = this;

            if (self._endTimers[id]) {
              // Clear the timeout or remove the ended listener.
              if (typeof self._endTimers[id] !== 'function') {
                clearTimeout(self._endTimers[id]);
              } else {
                var sound = self._soundById(id);

                if (sound && sound._node) {
                  sound._node.removeEventListener('ended', self._endTimers[id], false);
                }
              }

              delete self._endTimers[id];
            }

            return self;
          },

          /**
           * Return the sound identified by this ID, or return null.
           * @param  {Number} id Sound ID
           * @return {Object}    Sound object or null.
           */
          _soundById: function _soundById(id) {
            var self = this; // Loop through all sounds and find the one with this ID.

            for (var i = 0; i < self._sounds.length; i++) {
              if (id === self._sounds[i]._id) {
                return self._sounds[i];
              }
            }

            return null;
          },

          /**
           * Return an inactive sound from the pool or create a new one.
           * @return {Sound} Sound playback object.
           */
          _inactiveSound: function _inactiveSound() {
            var self = this;

            self._drain(); // Find the first inactive node to recycle.


            for (var i = 0; i < self._sounds.length; i++) {
              if (self._sounds[i]._ended) {
                return self._sounds[i].reset();
              }
            } // If no inactive node was found, create a new one.


            return new Sound(self);
          },

          /**
           * Drain excess inactive sounds from the pool.
           */
          _drain: function _drain() {
            var self = this;
            var limit = self._pool;
            var cnt = 0;
            var i = 0; // If there are less sounds than the max pool size, we are done.

            if (self._sounds.length < limit) {
              return;
            } // Count the number of inactive sounds.


            for (i = 0; i < self._sounds.length; i++) {
              if (self._sounds[i]._ended) {
                cnt++;
              }
            } // Remove excess inactive sounds, going in reverse order.


            for (i = self._sounds.length - 1; i >= 0; i--) {
              if (cnt <= limit) {
                return;
              }

              if (self._sounds[i]._ended) {
                // Disconnect the audio source when using Web Audio.
                if (self._webAudio && self._sounds[i]._node) {
                  self._sounds[i]._node.disconnect(0);
                } // Remove sounds until we have the pool size.


                self._sounds.splice(i, 1);

                cnt--;
              }
            }
          },

          /**
           * Get all ID's from the sounds pool.
           * @param  {Number} id Only return one ID if one is passed.
           * @return {Array}    Array of IDs.
           */
          _getSoundIds: function _getSoundIds(id) {
            var self = this;

            if (typeof id === 'undefined') {
              var ids = [];

              for (var i = 0; i < self._sounds.length; i++) {
                ids.push(self._sounds[i]._id);
              }

              return ids;
            } else {
              return [id];
            }
          },

          /**
           * Load the sound back into the buffer source.
           * @param  {Sound} sound The sound object to work with.
           * @return {Howl}
           */
          _refreshBuffer: function _refreshBuffer(sound) {
            var self = this; // Setup the buffer source for playback.

            sound._node.bufferSource = Howler.ctx.createBufferSource();
            sound._node.bufferSource.buffer = cache[self._src]; // Connect to the correct node.

            if (sound._panner) {
              sound._node.bufferSource.connect(sound._panner);
            } else {
              sound._node.bufferSource.connect(sound._node);
            } // Setup looping and playback rate.


            sound._node.bufferSource.loop = sound._loop;

            if (sound._loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop || 0;
            }

            sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

            return self;
          },

          /**
           * Prevent memory leaks by cleaning up the buffer source after playback.
           * @param  {Object} node Sound's audio node containing the buffer source.
           * @return {Howl}
           */
          _cleanBuffer: function _cleanBuffer(node) {
            var self = this;
            var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

            if (Howler._scratchBuffer && node.bufferSource) {
              node.bufferSource.onended = null;
              node.bufferSource.disconnect(0);

              if (isIOS) {
                try {
                  node.bufferSource.buffer = Howler._scratchBuffer;
                } catch (e) {}
              }
            }

            node.bufferSource = null;
            return self;
          },

          /**
           * Set the source to a 0-second silence to stop any downloading (except in IE).
           * @param  {Object} node Audio node to clear.
           */
          _clearSound: function _clearSound(node) {
            var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);

            if (!checkIE) {
              node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
            }
          }
        };
        /** Single Sound Methods **/

        /***************************************************************************/

        /**
         * Setup the sound object, which each node attached to a Howl group is contained in.
         * @param {Object} howl The Howl parent group.
         */

        var Sound = function Sound(howl) {
          this._parent = howl;
          this.init();
        };

        Sound.prototype = {
          /**
           * Initialize a new Sound object.
           * @return {Sound}
           */
          init: function init() {
            var self = this;
            var parent = self._parent; // Setup the default parameters.

            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default'; // Generate a unique ID for this sound.

            self._id = ++Howler._counter; // Add itself to the parent's pool.

            parent._sounds.push(self); // Create the new node.


            self.create();
            return self;
          },

          /**
           * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
           * @return {Sound}
           */
          create: function create() {
            var self = this;
            var parent = self._parent;
            var volume = Howler._muted || self._muted || self._parent._muted ? 0 : self._volume;

            if (parent._webAudio) {
              // Create the gain node for controlling volume (the source will connect to this).
              self._node = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();

              self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);

              self._node.paused = true;

              self._node.connect(Howler.masterGain);
            } else if (!Howler.noAudio) {
              // Get an unlocked Audio object from the pool.
              self._node = Howler._obtainHtml5Audio(); // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).

              self._errorFn = self._errorListener.bind(self);

              self._node.addEventListener('error', self._errorFn, false); // Listen for 'canplaythrough' event to let us know the sound is ready.


              self._loadFn = self._loadListener.bind(self);

              self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false); // Setup the new audio node.


              self._node.src = parent._src;
              self._node.preload = parent._preload === true ? 'auto' : parent._preload;
              self._node.volume = volume * Howler.volume(); // Begin loading the source.

              self._node.load();
            }

            return self;
          },

          /**
           * Reset the parameters of this sound to the original state (for recycle).
           * @return {Sound}
           */
          reset: function reset() {
            var self = this;
            var parent = self._parent; // Reset all of the parameters of this sound.

            self._muted = parent._muted;
            self._loop = parent._loop;
            self._volume = parent._volume;
            self._rate = parent._rate;
            self._seek = 0;
            self._rateSeek = 0;
            self._paused = true;
            self._ended = true;
            self._sprite = '__default'; // Generate a new ID so that it isn't confused with the previous sound.

            self._id = ++Howler._counter;
            return self;
          },

          /**
           * HTML5 Audio error listener callback.
           */
          _errorListener: function _errorListener() {
            var self = this; // Fire an error event and pass back the code.

            self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0); // Clear the event listener.


            self._node.removeEventListener('error', self._errorFn, false);
          },

          /**
           * HTML5 Audio canplaythrough listener callback.
           */
          _loadListener: function _loadListener() {
            var self = this;
            var parent = self._parent; // Round up the duration to account for the lower precision in HTML5 Audio.

            parent._duration = Math.ceil(self._node.duration * 10) / 10; // Setup a sprite if none is defined.

            if (Object.keys(parent._sprite).length === 0) {
              parent._sprite = {
                __default: [0, parent._duration * 1000]
              };
            }

            if (parent._state !== 'loaded') {
              parent._state = 'loaded';

              parent._emit('load');

              parent._loadQueue();
            } // Clear the event listener.


            self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
          }
        };
        /** Helper Methods **/

        /***************************************************************************/

        var cache = {};
        /**
         * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
         * @param  {Howl} self
         */

        var loadBuffer = function loadBuffer(self) {
          var url = self._src; // Check if the buffer has already been cached and use it instead.

          if (cache[url]) {
            // Set the duration from the cache.
            self._duration = cache[url].duration; // Load the sound into this Howl.

            loadSound(self);
            return;
          }

          if (/^data:[^;]+;base64,/.test(url)) {
            // Decode the base64 data URI without XHR, since some browsers don't support it.
            var data = atob(url.split(',')[1]);
            var dataView = new Uint8Array(data.length);

            for (var i = 0; i < data.length; ++i) {
              dataView[i] = data.charCodeAt(i);
            }

            decodeAudioData(dataView.buffer, self);
          } else {
            // Load the buffer from the URL.
            var xhr = new XMLHttpRequest();
            xhr.open(self._xhr.method, url, true);
            xhr.withCredentials = self._xhr.withCredentials;
            xhr.responseType = 'arraybuffer'; // Apply any custom headers to the request.

            if (self._xhr.headers) {
              Object.keys(self._xhr.headers).forEach(function (key) {
                xhr.setRequestHeader(key, self._xhr.headers[key]);
              });
            }

            xhr.onload = function () {
              // Make sure we get a successful response back.
              var code = (xhr.status + '')[0];

              if (code !== '0' && code !== '2' && code !== '3') {
                self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');

                return;
              }

              decodeAudioData(xhr.response, self);
            };

            xhr.onerror = function () {
              // If there is an error, switch to HTML5 Audio.
              if (self._webAudio) {
                self._html5 = true;
                self._webAudio = false;
                self._sounds = [];
                delete cache[url];
                self.load();
              }
            };

            safeXhrSend(xhr);
          }
        };
        /**
         * Send the XHR request wrapped in a try/catch.
         * @param  {Object} xhr XHR to send.
         */


        var safeXhrSend = function safeXhrSend(xhr) {
          try {
            xhr.send();
          } catch (e) {
            xhr.onerror();
          }
        };
        /**
         * Decode audio data from an array buffer.
         * @param  {ArrayBuffer} arraybuffer The audio data.
         * @param  {Howl}        self
         */


        var decodeAudioData = function decodeAudioData(arraybuffer, self) {
          // Fire a load error if something broke.
          var error = function error() {
            self._emit('loaderror', null, 'Decoding audio data failed.');
          }; // Load the sound on success.


          var success = function success(buffer) {
            if (buffer && self._sounds.length > 0) {
              cache[self._src] = buffer;
              loadSound(self, buffer);
            } else {
              error();
            }
          }; // Decode the buffer into an audio source.


          if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
            Howler.ctx.decodeAudioData(arraybuffer).then(success)["catch"](error);
          } else {
            Howler.ctx.decodeAudioData(arraybuffer, success, error);
          }
        };
        /**
         * Sound is now loaded, so finish setting everything up and fire the loaded event.
         * @param  {Howl} self
         * @param  {Object} buffer The decoded buffer sound source.
         */


        var loadSound = function loadSound(self, buffer) {
          // Set the duration.
          if (buffer && !self._duration) {
            self._duration = buffer.duration;
          } // Setup a sprite if none is defined.


          if (Object.keys(self._sprite).length === 0) {
            self._sprite = {
              __default: [0, self._duration * 1000]
            };
          } // Fire the loaded event.


          if (self._state !== 'loaded') {
            self._state = 'loaded';

            self._emit('load');

            self._loadQueue();
          }
        };
        /**
         * Setup the audio context when available, or switch to HTML5 Audio mode.
         */


        var setupAudioContext = function setupAudioContext() {
          // If we have already detected that Web Audio isn't supported, don't run this step again.
          if (!Howler.usingWebAudio) {
            return;
          } // Check if we are using Web Audio and setup the AudioContext if we are.


          try {
            if (typeof AudioContext !== 'undefined') {
              Howler.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== 'undefined') {
              Howler.ctx = new webkitAudioContext();
            } else {
              Howler.usingWebAudio = false;
            }
          } catch (e) {
            Howler.usingWebAudio = false;
          } // If the audio context creation still failed, set using web audio to false.


          if (!Howler.ctx) {
            Howler.usingWebAudio = false;
          } // Check if a webview is being used on iOS8 or earlier (rather than the browser).
          // If it is, disable Web Audio as it causes crashing.


          var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform);

          var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);

          var version = appVersion ? parseInt(appVersion[1], 10) : null;

          if (iOS && version && version < 9) {
            var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());

            if (Howler._navigator && !safari) {
              Howler.usingWebAudio = false;
            }
          } // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).


          if (Howler.usingWebAudio) {
            Howler.masterGain = typeof Howler.ctx.createGain === 'undefined' ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
            Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
            Howler.masterGain.connect(Howler.ctx.destination);
          } // Re-run the setup on Howler.


          Howler._setup();
        }; // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.


        if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return {
              Howler: Howler,
              Howl: Howl
            };
          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } // Add support for CommonJS libraries such as browserify.


        if (true) {
          exports.Howler = Howler;
          exports.Howl = Howl;
        } // Add to global in Node.js (for testing, etc).


        if (typeof global !== 'undefined') {
          global.HowlerGlobal = HowlerGlobal;
          global.Howler = Howler;
          global.Howl = Howl;
          global.Sound = Sound;
        } else if (typeof window !== 'undefined') {
          // Define globally in case AMD is not available or unused.
          window.HowlerGlobal = HowlerGlobal;
          window.Howler = Howler;
          window.Howl = Howl;
          window.Sound = Sound;
        }
      })();
      /*!
       *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
       *  
       *  howler.js v2.2.0
       *  howlerjs.com
       *
       *  (c) 2013-2020, James Simpson of GoldFire Studios
       *  goldfirestudios.com
       *
       *  MIT License
       */


      (function () {
        'use strict'; // Setup default properties.

        HowlerGlobal.prototype._pos = [0, 0, 0];
        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
        /** Global Methods **/

        /***************************************************************************/

        /**
         * Helper method to update the stereo panning position of all current Howls.
         * Future Howls will not use this value unless explicitly set.
         * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
         * @return {Howler/Number}     Self or current stereo panning value.
         */

        HowlerGlobal.prototype.stereo = function (pan) {
          var self = this; // Stop right here if not using Web Audio.

          if (!self.ctx || !self.ctx.listener) {
            return self;
          } // Loop through all Howls and update their stereo panning.


          for (var i = self._howls.length - 1; i >= 0; i--) {
            self._howls[i].stereo(pan);
          }

          return self;
        };
        /**
         * Get/set the position of the listener in 3D cartesian space. Sounds using
         * 3D position will be relative to the listener's position.
         * @param  {Number} x The x-position of the listener.
         * @param  {Number} y The y-position of the listener.
         * @param  {Number} z The z-position of the listener.
         * @return {Howler/Array}   Self or current listener position.
         */


        HowlerGlobal.prototype.pos = function (x, y, z) {
          var self = this; // Stop right here if not using Web Audio.

          if (!self.ctx || !self.ctx.listener) {
            return self;
          } // Set the defaults for optional 'y' & 'z'.


          y = typeof y !== 'number' ? self._pos[1] : y;
          z = typeof z !== 'number' ? self._pos[2] : z;

          if (typeof x === 'number') {
            self._pos = [x, y, z];

            if (typeof self.ctx.listener.positionX !== 'undefined') {
              self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
              self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
              self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
            } else {
              self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
            }
          } else {
            return self._pos;
          }

          return self;
        };
        /**
         * Get/set the direction the listener is pointing in the 3D cartesian space.
         * A front and up vector must be provided. The front is the direction the
         * face of the listener is pointing, and up is the direction the top of the
         * listener is pointing. Thus, these values are expected to be at right angles
         * from each other.
         * @param  {Number} x   The x-orientation of the listener.
         * @param  {Number} y   The y-orientation of the listener.
         * @param  {Number} z   The z-orientation of the listener.
         * @param  {Number} xUp The x-orientation of the top of the listener.
         * @param  {Number} yUp The y-orientation of the top of the listener.
         * @param  {Number} zUp The z-orientation of the top of the listener.
         * @return {Howler/Array}     Returns self or the current orientation vectors.
         */


        HowlerGlobal.prototype.orientation = function (x, y, z, xUp, yUp, zUp) {
          var self = this; // Stop right here if not using Web Audio.

          if (!self.ctx || !self.ctx.listener) {
            return self;
          } // Set the defaults for optional 'y' & 'z'.


          var or = self._orientation;
          y = typeof y !== 'number' ? or[1] : y;
          z = typeof z !== 'number' ? or[2] : z;
          xUp = typeof xUp !== 'number' ? or[3] : xUp;
          yUp = typeof yUp !== 'number' ? or[4] : yUp;
          zUp = typeof zUp !== 'number' ? or[5] : zUp;

          if (typeof x === 'number') {
            self._orientation = [x, y, z, xUp, yUp, zUp];

            if (typeof self.ctx.listener.forwardX !== 'undefined') {
              self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
              self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
            } else {
              self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
            }
          } else {
            return or;
          }

          return self;
        };
        /** Group Methods **/

        /***************************************************************************/

        /**
         * Add new properties to the core init.
         * @param  {Function} _super Core init method.
         * @return {Howl}
         */


        Howl.prototype.init = function (_super) {
          return function (o) {
            var self = this; // Setup user-defined default properties.

            self._orientation = o.orientation || [1, 0, 0];
            self._stereo = o.stereo || null;
            self._pos = o.pos || null;
            self._pannerAttr = {
              coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
              coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
              coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
              distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
              maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
              panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
              refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
              rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
            }; // Setup event listeners.

            self._onstereo = o.onstereo ? [{
              fn: o.onstereo
            }] : [];
            self._onpos = o.onpos ? [{
              fn: o.onpos
            }] : [];
            self._onorientation = o.onorientation ? [{
              fn: o.onorientation
            }] : []; // Complete initilization with howler.js core's init function.

            return _super.call(this, o);
          };
        }(Howl.prototype.init);
        /**
         * Get/set the stereo panning of the audio source for this sound or all in the group.
         * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
         * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
         * @return {Howl/Number}    Returns self or the current stereo panning value.
         */


        Howl.prototype.stereo = function (pan, id) {
          var self = this; // Stop right here if not using Web Audio.

          if (!self._webAudio) {
            return self;
          } // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.


          if (self._state !== 'loaded') {
            self._queue.push({
              event: 'stereo',
              action: function action() {
                self.stereo(pan, id);
              }
            });

            return self;
          } // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.


          var pannerType = typeof Howler.ctx.createStereoPanner === 'undefined' ? 'spatial' : 'stereo'; // Setup the group's stereo panning if no ID is passed.

          if (typeof id === 'undefined') {
            // Return the group's stereo panning if no parameters are passed.
            if (typeof pan === 'number') {
              self._stereo = pan;
              self._pos = [pan, 0, 0];
            } else {
              return self._stereo;
            }
          } // Change the streo panning of one or all sounds in group.


          var ids = self._getSoundIds(id);

          for (var i = 0; i < ids.length; i++) {
            // Get the sound.
            var sound = self._soundById(ids[i]);

            if (sound) {
              if (typeof pan === 'number') {
                sound._stereo = pan;
                sound._pos = [pan, 0, 0];

                if (sound._node) {
                  // If we are falling back, make sure the panningModel is equalpower.
                  sound._pannerAttr.panningModel = 'equalpower'; // Check if there is a panner setup and create a new one if not.

                  if (!sound._panner || !sound._panner.pan) {
                    setupPanner(sound, pannerType);
                  }

                  if (pannerType === 'spatial') {
                    if (typeof sound._panner.positionX !== 'undefined') {
                      sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);

                      sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);

                      sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                    } else {
                      sound._panner.setPosition(pan, 0, 0);
                    }
                  } else {
                    sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
                  }
                }

                self._emit('stereo', sound._id);
              } else {
                return sound._stereo;
              }
            }
          }

          return self;
        };
        /**
         * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
         * @param  {Number} x  The x-position of the audio source.
         * @param  {Number} y  The y-position of the audio source.
         * @param  {Number} z  The z-position of the audio source.
         * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
         * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
         */


        Howl.prototype.pos = function (x, y, z, id) {
          var self = this; // Stop right here if not using Web Audio.

          if (!self._webAudio) {
            return self;
          } // If the sound hasn't loaded, add it to the load queue to change position when capable.


          if (self._state !== 'loaded') {
            self._queue.push({
              event: 'pos',
              action: function action() {
                self.pos(x, y, z, id);
              }
            });

            return self;
          } // Set the defaults for optional 'y' & 'z'.


          y = typeof y !== 'number' ? 0 : y;
          z = typeof z !== 'number' ? -0.5 : z; // Setup the group's spatial position if no ID is passed.

          if (typeof id === 'undefined') {
            // Return the group's spatial position if no parameters are passed.
            if (typeof x === 'number') {
              self._pos = [x, y, z];
            } else {
              return self._pos;
            }
          } // Change the spatial position of one or all sounds in group.


          var ids = self._getSoundIds(id);

          for (var i = 0; i < ids.length; i++) {
            // Get the sound.
            var sound = self._soundById(ids[i]);

            if (sound) {
              if (typeof x === 'number') {
                sound._pos = [x, y, z];

                if (sound._node) {
                  // Check if there is a panner setup and create a new one if not.
                  if (!sound._panner || sound._panner.pan) {
                    setupPanner(sound, 'spatial');
                  }

                  if (typeof sound._panner.positionX !== 'undefined') {
                    sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);

                    sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);

                    sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
                  } else {
                    sound._panner.setPosition(x, y, z);
                  }
                }

                self._emit('pos', sound._id);
              } else {
                return sound._pos;
              }
            }
          }

          return self;
        };
        /**
         * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
         * space. Depending on how direction the sound is, based on the `cone` attributes,
         * a sound pointing away from the listener can be quiet or silent.
         * @param  {Number} x  The x-orientation of the source.
         * @param  {Number} y  The y-orientation of the source.
         * @param  {Number} z  The z-orientation of the source.
         * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
         * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
         */


        Howl.prototype.orientation = function (x, y, z, id) {
          var self = this; // Stop right here if not using Web Audio.

          if (!self._webAudio) {
            return self;
          } // If the sound hasn't loaded, add it to the load queue to change orientation when capable.


          if (self._state !== 'loaded') {
            self._queue.push({
              event: 'orientation',
              action: function action() {
                self.orientation(x, y, z, id);
              }
            });

            return self;
          } // Set the defaults for optional 'y' & 'z'.


          y = typeof y !== 'number' ? self._orientation[1] : y;
          z = typeof z !== 'number' ? self._orientation[2] : z; // Setup the group's spatial orientation if no ID is passed.

          if (typeof id === 'undefined') {
            // Return the group's spatial orientation if no parameters are passed.
            if (typeof x === 'number') {
              self._orientation = [x, y, z];
            } else {
              return self._orientation;
            }
          } // Change the spatial orientation of one or all sounds in group.


          var ids = self._getSoundIds(id);

          for (var i = 0; i < ids.length; i++) {
            // Get the sound.
            var sound = self._soundById(ids[i]);

            if (sound) {
              if (typeof x === 'number') {
                sound._orientation = [x, y, z];

                if (sound._node) {
                  // Check if there is a panner setup and create a new one if not.
                  if (!sound._panner) {
                    // Make sure we have a position to setup the node with.
                    if (!sound._pos) {
                      sound._pos = self._pos || [0, 0, -0.5];
                    }

                    setupPanner(sound, 'spatial');
                  }

                  if (typeof sound._panner.orientationX !== 'undefined') {
                    sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);

                    sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);

                    sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
                  } else {
                    sound._panner.setOrientation(x, y, z);
                  }
                }

                self._emit('orientation', sound._id);
              } else {
                return sound._orientation;
              }
            }
          }

          return self;
        };
        /**
         * Get/set the panner node's attributes for a sound or group of sounds.
         * This method can optionall take 0, 1 or 2 arguments.
         *   pannerAttr() -> Returns the group's values.
         *   pannerAttr(id) -> Returns the sound id's values.
         *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
         *   pannerAttr(o, id) -> Set's the values of passed sound id.
         *
         *   Attributes:
         *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
         *                      inside of which there will be no volume reduction.
         *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
         *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
         *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
         *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
         *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
         *                     listener. Can be `linear`, `inverse` or `exponential.
         *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
         *                   will not be reduced any further.
         *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
         *                   This is simply a variable of the distance model and has a different effect depending on which model
         *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
         *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
         *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
         *                     with `inverse` and `exponential`.
         *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
         *                     Can be `HRTF` or `equalpower`.
         *
         * @return {Howl/Object} Returns self or current panner attributes.
         */


        Howl.prototype.pannerAttr = function () {
          var self = this;
          var args = arguments;
          var o, id, sound; // Stop right here if not using Web Audio.

          if (!self._webAudio) {
            return self;
          } // Determine the values based on arguments.


          if (args.length === 0) {
            // Return the group's panner attribute values.
            return self._pannerAttr;
          } else if (args.length === 1) {
            if (typeof args[0] === 'object') {
              o = args[0]; // Set the grou's panner attribute values.

              if (typeof id === 'undefined') {
                if (!o.pannerAttr) {
                  o.pannerAttr = {
                    coneInnerAngle: o.coneInnerAngle,
                    coneOuterAngle: o.coneOuterAngle,
                    coneOuterGain: o.coneOuterGain,
                    distanceModel: o.distanceModel,
                    maxDistance: o.maxDistance,
                    refDistance: o.refDistance,
                    rolloffFactor: o.rolloffFactor,
                    panningModel: o.panningModel
                  };
                }

                self._pannerAttr = {
                  coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                  coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                  coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                  distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
                  maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
                  refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
                  rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                  panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
                };
              }
            } else {
              // Return this sound's panner attribute values.
              sound = self._soundById(parseInt(args[0], 10));
              return sound ? sound._pannerAttr : self._pannerAttr;
            }
          } else if (args.length === 2) {
            o = args[0];
            id = parseInt(args[1], 10);
          } // Update the values of the specified sounds.


          var ids = self._getSoundIds(id);

          for (var i = 0; i < ids.length; i++) {
            sound = self._soundById(ids[i]);

            if (sound) {
              // Merge the new values into the sound.
              var pa = sound._pannerAttr;
              pa = {
                coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
                coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
                coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
                distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
                maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
                refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
                rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
                panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
              }; // Update the panner values or create a new panner if none exists.

              var panner = sound._panner;

              if (panner) {
                panner.coneInnerAngle = pa.coneInnerAngle;
                panner.coneOuterAngle = pa.coneOuterAngle;
                panner.coneOuterGain = pa.coneOuterGain;
                panner.distanceModel = pa.distanceModel;
                panner.maxDistance = pa.maxDistance;
                panner.refDistance = pa.refDistance;
                panner.rolloffFactor = pa.rolloffFactor;
                panner.panningModel = pa.panningModel;
              } else {
                // Make sure we have a position to setup the node with.
                if (!sound._pos) {
                  sound._pos = self._pos || [0, 0, -0.5];
                } // Create a new panner node.


                setupPanner(sound, 'spatial');
              }
            }
          }

          return self;
        };
        /** Single Sound Methods **/

        /***************************************************************************/

        /**
         * Add new properties to the core Sound init.
         * @param  {Function} _super Core Sound init method.
         * @return {Sound}
         */


        Sound.prototype.init = function (_super) {
          return function () {
            var self = this;
            var parent = self._parent; // Setup user-defined default properties.

            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr; // Complete initilization with howler.js core Sound's init function.

            _super.call(this); // If a stereo or position was specified, set it up.


            if (self._stereo) {
              parent.stereo(self._stereo);
            } else if (self._pos) {
              parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            }
          };
        }(Sound.prototype.init);
        /**
         * Override the Sound.reset method to clean up properties from the spatial plugin.
         * @param  {Function} _super Sound reset method.
         * @return {Sound}
         */


        Sound.prototype.reset = function (_super) {
          return function () {
            var self = this;
            var parent = self._parent; // Reset all spatial plugin properties on this sound.

            self._orientation = parent._orientation;
            self._stereo = parent._stereo;
            self._pos = parent._pos;
            self._pannerAttr = parent._pannerAttr; // If a stereo or position was specified, set it up.

            if (self._stereo) {
              parent.stereo(self._stereo);
            } else if (self._pos) {
              parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
            } else if (self._panner) {
              // Disconnect the panner.
              self._panner.disconnect(0);

              self._panner = undefined;

              parent._refreshBuffer(self);
            } // Complete resetting of the sound.


            return _super.call(this);
          };
        }(Sound.prototype.reset);
        /** Helper Methods **/

        /***************************************************************************/

        /**
         * Create a new panner node and save it on the sound.
         * @param  {Sound} sound Specific sound to setup panning on.
         * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
         */


        var setupPanner = function setupPanner(sound, type) {
          type = type || 'spatial'; // Create the new panner node.

          if (type === 'spatial') {
            sound._panner = Howler.ctx.createPanner();
            sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
            sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
            sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
            sound._panner.distanceModel = sound._pannerAttr.distanceModel;
            sound._panner.maxDistance = sound._pannerAttr.maxDistance;
            sound._panner.refDistance = sound._pannerAttr.refDistance;
            sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
            sound._panner.panningModel = sound._pannerAttr.panningModel;

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);

              sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);

              sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);

              sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);

              sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
            }
          } else {
            sound._panner = Howler.ctx.createStereoPanner();

            sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
          }

          sound._panner.connect(sound._node); // Update the connections.


          if (!sound._paused) {
            sound._parent.pause(sound._id, true).play(sound._id, true);
          }
        };
      })();
      /***/

    },

    /***/
    "KaYZ":
    /*!*************************************************!*\
      !*** ./src/app/services/audio/audio.service.ts ***!
      \*************************************************/

    /*! exports provided: AudioService */

    /***/
    function KaYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AudioService", function () {
        return AudioService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! howler */
      "HlzF");
      /* harmony import */


      var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);

      var AudioService = /*#__PURE__*/function () {
        function AudioService() {
          _classCallCheck(this, AudioService);
        }

        _createClass(AudioService, [{
          key: "playStart",
          value: function playStart() {
            var player = new howler__WEBPACK_IMPORTED_MODULE_2__["Howl"]({
              src: ['./assets/sound/start.mp3']
            });
            player.play();
          }
        }, {
          key: "playProgress",
          value: function playProgress() {
            var player = new howler__WEBPACK_IMPORTED_MODULE_2__["Howl"]({
              src: ['./assets/sound/progress.mp3']
            });
            player.play();
          }
        }, {
          key: "playFireworks",
          value: function playFireworks() {
            var player = new howler__WEBPACK_IMPORTED_MODULE_2__["Howl"]({
              src: ['./assets/sound/fireworks.mp3']
            });
            player.play();
          }
        }]);

        return AudioService;
      }();

      AudioService.ctorParameters = function () {
        return [];
      };

      AudioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AudioService);
      /***/
    },

    /***/
    "Ldui":
    /*!*************************************************!*\
      !*** ./src/app/services/timer/timer.service.ts ***!
      \*************************************************/

    /*! exports provided: TimerService, Interval */

    /***/
    function Ldui(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimerService", function () {
        return TimerService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Interval", function () {
        return Interval;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _audio_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../audio/audio.service */
      "KaYZ");

      var TimerService = /*#__PURE__*/function () {
        function TimerService(audio) {
          _classCallCheck(this, TimerService);

          this.audio = audio;
          this.started = false;
          this.stopped = false;
          this.amount = 5;
          this.interval = Interval.Seconds;
          this.startOne = true;
          this.startTwo = false;
          this.startComplete = false;
          this.goOne = true;
          this.goTwo = false;
          this.goComplete = false;
          this.endOne = true;
          this.endTwo = false;
          this.endComplete = false;
        }

        _createClass(TimerService, [{
          key: "initialize",
          value: function initialize(interval, amount) {
            this.interval = interval;
            this.amount = amount;
          }
        }, {
          key: "start",
          value: function start() {
            if (this.started) {
              throw new Error("Timer already started.");
            }

            this.initializeSections();
            this.audio.playStart();
            this.secondsRemaining = this.totalSeconds();
            this.started = true;
            this.tick();
          }
        }, {
          key: "stop",
          value: function stop() {
            this.initializeSections();
            this.stopped = true;
          }
        }, {
          key: "isStarted",
          value: function isStarted() {
            return this.started;
          }
        }, {
          key: "initializeSections",
          value: function initializeSections() {
            this.startOne = true;
            this.startTwo = false;
            this.startComplete = false;
            this.goOne = true;
            this.goTwo = false;
            this.goComplete = false;
            this.endOne = true;
            this.endTwo = false;
            this.endComplete = false;
          }
        }, {
          key: "totalSeconds",
          value: function totalSeconds() {
            switch (this.interval) {
              case Interval.Seconds:
                return this.amount;

              case Interval.Minutes:
                return this.amount * 60;

              case Interval.Hours:
                return this.amount * 360;
            }

            ;
          }
        }, {
          key: "tick",
          value: function tick() {
            var _this3 = this;

            setTimeout(function (_) {
              _this3.updateSections();

              if (_this3.secondsRemaining === 0 || _this3.stopped) {
                _this3.started = false;
                _this3.secondsRemaining = 0;
                _this3.stopped = false;
              }

              if (_this3.secondsRemaining > 0) {
                _this3.secondsRemaining--;

                _this3.tick();
              }
            }, 1000);
          }
        }, {
          key: "updateSections",
          value: function updateSections() {
            var sectionInterval = Math.ceil(this.totalSeconds() / 3);

            if (this.secondsRemaining > sectionInterval * 2) {
              this.startOne = !this.startOne;
              this.startTwo = !this.startTwo;
            }

            if (this.secondsRemaining === sectionInterval * 2) {
              this.startComplete = true;
              this.audio.playProgress();
            }

            if (this.secondsRemaining < sectionInterval * 2 && this.secondsRemaining > sectionInterval) {
              this.goOne = !this.goOne;
              this.goTwo = !this.goTwo;
            }

            if (this.secondsRemaining === sectionInterval) {
              this.goComplete = true;
              this.audio.playProgress();
            }

            if (this.secondsRemaining < sectionInterval) {
              this.endOne = !this.endOne;
              this.endTwo = !this.endTwo;
            }

            if (this.secondsRemaining === 0) {
              this.endComplete = true;
              this.audio.playProgress();
              this.audio.playStart();
              this.done();
              this.initializeSections();
            }
          }
        }]);

        return TimerService;
      }();

      TimerService.ctorParameters = function () {
        return [{
          type: _audio_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"]
        }];
      };

      TimerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TimerService);
      var Interval;

      (function (Interval) {
        Interval[Interval["Seconds"] = 0] = "Seconds";
        Interval[Interval["Minutes"] = 1] = "Minutes";
        Interval[Interval["Hours"] = 2] = "Hours";
      })(Interval || (Interval = {}));
      /***/

    },

    /***/
    "MISJ":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function MISJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"little-down\">\n    <ion-fab-button class=\"my-button\">\n      <ion-icon name=\"timer-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-fab-button *ngIf=\"!started()\"><ion-icon name=\"create-outline\" (click)=\"openPicker()\"></ion-icon></ion-fab-button>\n      <ion-fab-button *ngIf=\"!started()\" (click)=\"start()\"><ion-icon name=\"caret-forward-circle-outline\"></ion-icon></ion-fab-button>\n      <ion-fab-button *ngIf=\"started()\" (click)=\"stop()\"><ion-icon name=\"stop-circle-outline\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <div id=\"finish\" [ngClass]=\"{'end-one': timerService.endOne, 'end-two': timerService.endTwo, 'end-complete': timerService.endComplete}\" >\n    <div>End</div>\n  </div>\n  <div id=\"go\" [ngClass]=\"{'go-one': timerService.goOne, 'go-two': timerService.goTwo, 'go-complete': timerService.goComplete}\">\n    <div>Go</div>\n  </div>\n  <div id=\"start\" [ngClass]=\"{'start-one': timerService.startOne, 'start-two': timerService.startTwo, 'start-complete': timerService.startComplete}\">\n    <div>Start</div>\n  </div>";
      /***/
    },

    /***/
    "NOed":
    /*!********************************************************!*\
      !*** ./src/app/components/home/home-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function NOed(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "BSWD");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "afe5":
    /*!*****************************************************!*\
      !*** ./src/app/components/done/done.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function afe5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: rgb(52, 198, 235, 0.9);\n}\n\n.letter {\n  font-size: 60px;\n}\n\n.yellow {\n  color: yellow;\n}\n\n.time-up {\n  color: white;\n  margin-left: 32%;\n  margin-top: 10%;\n}\n\n.red {\n  color: crimson;\n}\n\n.green {\n  color: lime;\n}\n\n.blue {\n  color: #0a5bfc;\n}\n\n.my-button {\n  --background: transparent;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  --background-hover: transparent;\n}\n\n.vertically-centered {\n  margin-top: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJkb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNTIsIDE5OCwgMjM1LCAwLjkpO1xufVxuXG4ubGV0dGVyIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cbi55ZWxsb3cge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG59XG5cbi50aW1lLXVwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDMyJTtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5yZWQge1xuICAgIGNvbG9yOiBjcmltc29uO1xufVxuXG4uZ3JlZW4ge1xuICAgIGNvbG9yOiBsaW1lO1xufVxuXG4uYmx1ZSB7XG4gICAgY29sb3I6IHJnYigxMCwgOTEsIDI1Milcbn1cblxuLm15LWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbn1cblxuLnZlcnRpY2FsbHktY2VudGVyZWQge1xuICAgIG1hcmdpbi10b3A6IDc1JTtcbn1cbiAgIl19 */";
      /***/
    },

    /***/
    "f+vI":
    /*!***************************************************!*\
      !*** ./src/app/components/done/done.component.ts ***!
      \***************************************************/

    /*! exports provided: DoneComponent */

    /***/
    function fVI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoneComponent", function () {
        return DoneComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_done_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./done.component.html */
      "Glrt");
      /* harmony import */


      var _done_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./done.component.scss */
      "afe5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var DoneComponent = /*#__PURE__*/function () {
        //public imageSrc: string = "./../assets/fireworks.png";
        function DoneComponent(modalController) {
          _classCallCheck(this, DoneComponent);

          this.modalController = modalController;
        }

        _createClass(DoneComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalController.dismiss();
          }
        }]);

        return DoneComponent;
      }();

      DoneComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      DoneComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-done',
        template: _raw_loader_done_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_done_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DoneComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-home-home-module-es5.js.map