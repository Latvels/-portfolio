/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/*! exports provided: AI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AI", function() { return AI; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AI =
/*#__PURE__*/
function () {
  function AI() {
    _classCallCheck(this, AI);

    this.body = null;
  }

  _createClass(AI, [{
    key: "control",
    value: function control(body) {
      this.body = body;
    }
  }, {
    key: "update",
    value: function update(time) {}
  }]);

  return AI;
}();

/***/ }),

/***/ "./src/ais/dummy.js":
/*!**************************!*\
  !*** ./src/ais/dummy.js ***!
  \**************************/
/*! exports provided: Dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dummy", function() { return Dummy; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Dummy =
/*#__PURE__*/
function (_AI) {
  _inherits(Dummy, _AI);

  function Dummy() {
    var _this;

    _classCallCheck(this, Dummy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dummy).call(this));
    _this.duration = 1000;
    _this.direction = 'down';
    _this.lastTime = 0;
    return _this;
  }

  _createClass(Dummy, [{
    key: "changeDirection",
    value: function changeDirection() {
      this.direction = 'down,up,left,right'.split(',')[Math.floor(Math.random() * 4)];
    }
  }, {
    key: "update",
    value: function update(time) {
      if (time - this.lastTime > this.duration) {
        this.changeDirection();
        this.lastTime = time;
      }

      this.body.walk(this.direction);

      _get(_getPrototypeOf(Dummy.prototype), "update", this).call(this, time);
    }
  }]);

  return Dummy;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/ais/endScript.js":
/*!******************************!*\
  !*** ./src/ais/endScript.js ***!
  \******************************/
/*! exports provided: EndScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndScript", function() { return EndScript; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var EndScript =
/*#__PURE__*/
function (_AI) {
  _inherits(EndScript, _AI);

  function EndScript() {
    var _this;

    _classCallCheck(this, EndScript);

    // Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
    _this = _possibleConstructorReturn(this, _getPrototypeOf(EndScript).call(this));
    _this.direction = 'left';
    _this.eventTime = 1500;
    _this.lastTime = 0;
    _this.eventStart = false;
    return _this;
  }

  _createClass(EndScript, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      this.eventTime -= time - this.lastTime;

      if (!this.eventStart) {
        // Если событие ешё не началось
        if (this.eventTime < 0) {
          this.eventStart = true; // Врубаем событие

          this.body.hit(this.direction); // Событие - орк бьёт
        }

        this.body.walk(this.direction);
      } else {
        this.body.stand(this.direction);
      }

      this.lastTime = time;

      _get(_getPrototypeOf(EndScript.prototype), "update", this).call(this, time);
    }
  }]);

  return EndScript;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/ais/isAgressive.js":
/*!********************************!*\
  !*** ./src/ais/isAgressive.js ***!
  \********************************/
/*! exports provided: isAgressive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAgressive", function() { return isAgressive; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isAgressive =
/*#__PURE__*/
function () {
  function isAgressive() {
    _classCallCheck(this, isAgressive);
  }

  _createClass(isAgressive, null, [{
    key: "becomeAgressive",
    value: function becomeAgressive() {
      this.agressive = true;
    }
  }, {
    key: "becomePeaceful",
    value: function becomePeaceful() {
      this.agressive = false;
    }
  }, {
    key: "isOrcAgressive",
    value: function isOrcAgressive() {
      return this.agressive;
    }
  }]);

  return isAgressive;
}();

/***/ }),

/***/ "./src/ais/peaceful.js":
/*!*****************************!*\
  !*** ./src/ais/peaceful.js ***!
  \*****************************/
/*! exports provided: Peaceful */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Peaceful", function() { return Peaceful; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
/* harmony import */ var _isAgressive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isAgressive */ "./src/ais/isAgressive.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Peaceful =
/*#__PURE__*/
function (_AI) {
  _inherits(Peaceful, _AI);

  function Peaceful(player) {
    var _this;

    _classCallCheck(this, Peaceful);

    // Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Peaceful).call(this));
    _this.duration = 1050; // Меняет направление каждые 1000 мс

    _this.direction = 'left';
    _this.lastTimeDumb = 0; // Когда в последний раз менял направление

    _this.lastTime = 0;
    _this.player = player; // Передаём игрока, чтобы орк мог следить за ним и атаковать его

    _this.stuck = false; // Если true, орк уперся в стену

    _this.changeWayInit = 500; // Если уперся в препятствие, это время он двигается в любом другом направлении в надежде обойти препятствие

    _this.changeWay = _this.changeWayInit;
    _this.oldX = 0; // В эти переменные будем писать старые координаты. Если новые координаты равны старым, значит орк уперся в препятствие

    _this.oldY = 0;
    _this.lastTimeAgressive = 0;
    _this.durationAgressive = 500; // Насколько часто меняют направление агрессивные орки

    _this.timeOfMarch = 4560; // Когда орк только появился, это время он просто движется в одном направлении. После - начинает действовать самостоятельно

    return _this;
  }

  _createClass(Peaceful, [{
    key: "changeDirection",
    value: function changeDirection() {
      // Один из блоков принятия решений
      this.direction = 'up,left'.split(',')[Math.floor(Math.random() * 2)];
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.timeOfMarch > 0) {
        // Орк ещё марширует, т.е. заходит на локацию
        this.timeOfMarch -= time - this.lastTime;
      } else if (this.stuck) {
        // Если орк застрял, дальнейших проверок else if не будет
        this.changeWay -= time - this.lastTime;

        if (this.changeWay < 0) {
          this.changeWay = this.changeWayInit;
          this.stuck = false;
        }
      } else if (_isAgressive__WEBPACK_IMPORTED_MODULE_1__["isAgressive"].isOrcAgressive()) {
        // Проверка орка на агрессию
        this.agressiveBehaviour(time);
        this.isStuck();
      } else {
        this.dumbBehaviour(time);
        this.isStuck();
      }

      this.lastTime = time;
      this.body.walk(this.direction);

      _get(_getPrototypeOf(Peaceful.prototype), "update", this).call(this, time);
    }
  }, {
    key: "dumbBehaviour",
    value: function dumbBehaviour(time) {
      if (time - this.lastTimeDumb > this.duration) {
        this.changeDirection();
        this.lastTimeDumb = time;
      }
    }
  }, {
    key: "agressiveBehaviour",
    value: function agressiveBehaviour(time) {
      var correction = 10; // орк бьёт на расстоянии 5, ему не нужно быть вплотную к игроку (иначе орк бьёт только при столкновении с игроком, а орки избегают столкновений)

      if (this.body.x + this.body.collisionShape.x - correction < this.player.x + this.player.collisionShape.x + this.player.collisionShape.width && this.body.x + this.body.collisionShape.x + this.body.collisionShape.width + correction > this.player.x + this.player.collisionShape.x && this.body.y + this.body.collisionShape.y - correction < this.player.y + this.player.collisionShape.y + this.player.collisionShape.height && this.body.y + this.body.collisionShape.y + this.body.collisionShape.height + correction > this.player.y + this.player.collisionShape.y) {
        this.attack();
      } // }


      if (time - this.lastTimeAgressive > this.durationAgressive) {
        this.changeAgressiveDirection();
        this.lastTimeAgressive = time;
      }
    }
  }, {
    key: "changeAgressiveDirection",
    value: function changeAgressiveDirection() {
      if (this.body.x >= this.player.x && this.body.y >= this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'left';
        } else {
          this.direction = 'up';
        }
      }

      if (this.body.x < this.player.x && this.body.y >= this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'right';
        } else {
          this.direction = 'up';
        }
      }

      if (this.body.x < this.player.x && this.body.y < this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'right';
        } else {
          this.direction = 'down';
        }
      }

      if (this.body.x >= this.player.x && this.body.y < this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'left';
        } else {
          this.direction = 'down';
        }
      }
    }
  }, {
    key: "isStuck",
    value: function isStuck() {
      // Проверка, возможно орк уперся в препятствие
      if (this.body.x == this.oldX && this.body.y == this.oldY) {
        this.stuck = true;

        if (this.direction == 'up' || this.direction == 'down') {
          if (Math.random() > 0.5) {
            this.direction = 'right';
          } else {
            this.direction = 'left';
          }

          return;
        }

        if (this.direction == 'right' || this.direction == 'left') {
          if (Math.random() > 0.5) {
            this.direction = 'up';
          } else {
            this.direction = 'down';
          }

          return;
        }
      }

      this.oldX = this.body.x;
      this.oldY = this.body.y;
    }
  }, {
    key: "attack",
    value: function attack() {
      this.body.hit();
      this.player.getHit();
    }
  }]);

  return Peaceful;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Animation =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.running = autorun;
    _this.lastTime = 0; // время от последнего фрейма анимации

    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
    /* Для отслеживания последнего кадра. Например, после последнего кадра анимации стрельбы, персонаж перестаёт стрелять
    Эта переменная задается в классе Body. Например: this.view.onEnd = ()=>this.isShooting = false; */

    _this.onEnd = null;
    return _this;
  }

  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.sourceX = this.frames[index].sx;
      this.sourceY = this.frames[index].sy;
    }
  }, {
    key: "run",
    value: function run() {
      // Старт анимации с самого начала
      if (!this.running) {
        this.setFrame(0);
        this.running = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrame + 1 == this.totalFrames) {
        // Если это последний кадр, то...
        if (this.onEnd) {
          // ...если задана концовка, запускаем. Например: this.view.onEnd = ()=>this.isShooting = false;
          this.onEnd();
        }

        if (this.repeat) {
          // ... если задан повтор, повторяем
          this.setFrame(0);
          return;
        }

        this.stop(); // ... иначе - стоп анимация

        return;
      }

      this.setFrame(this.currentFrame + 1);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.running) {
        return;
      }

      if (this.lastTime == 0) {
        // Эта проверка нужна только для первого вызова update(), чтобы инициализировать this.lastTime
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        // Разница по времени между прошлым и текущим кадром: (11-2)>10, (12-2)>10, (13-2)>10 - здесь прошло 10мс, а speed в этом примере как раз равен 10мс, значит меняем кадр
        this.nextFrame();
        this.lastTime = time;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/audio-playback/audios.js":
/*!**************************************!*\
  !*** ./src/audio-playback/audios.js ***!
  \**************************************/
/*! exports provided: arrowPlayAudio, swordPlayAudio, deathOrcPlayAudio, gameOverPlayAudio, gameWinPlayAudio, gamePlayAudio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowPlayAudio", function() { return arrowPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swordPlayAudio", function() { return swordPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deathOrcPlayAudio", function() { return deathOrcPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOverPlayAudio", function() { return gameOverPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameWinPlayAudio", function() { return gameWinPlayAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamePlayAudio", function() { return gamePlayAudio; });
var gameAudio = new Audio('audio/game.mp3');
var gameAudioWin = new Audio('audio/win.mp3');
function arrowPlayAudio() {
  var sound = new Audio();
  sound.src = 'audio/arrow.mp3';
  return sound.play();
}
function swordPlayAudio() {
  var sound = new Audio();
  sound.src = 'audio/sword.mp3';
  sound.volume = 0.2;
  return sound.play();
}
function deathOrcPlayAudio() {
  var sound = new Audio();
  sound.src = 'audio/death-orc.mp3';
  sound.volume = 0.1;
  return sound.play();
}
function gameOverPlayAudio() {
  var sound = new Audio();
  sound.src = 'audio/game-over.mp3';
  sound.volume = 0.4;
  return sound.play();
}
function gameWinPlayAudio(state) {
  gameAudioWin.volume = 0.1;

  if (state == true) {
    gameAudioWin.play();
  } else {
    gameAudioWin.pause();
  }
}
function gamePlayAudio(state) {
  gameAudio.volume = 0.1;
  gameAudio.loop = true;

  if (state == true) {
    gameAudio.play();
  } else {
    gameAudio.pause();
  }
}

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-sheet */ "./src/character-sheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Основа всех персонажей


var Body =
/*#__PURE__*/
function () {
  // Player -> Body ~ CharacterSheet -> SpriteSheet ~ Sprite
  function Body(_ref) {
    var _this = this;

    var imageName = _ref.imageName,
        speed = _ref.speed;

    _classCallCheck(this, Body);

    this.x = -100; // Положение объекта

    this.y = -100;
    this.speed = speed; // Скорость перемещения

    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]('left', 0); // Направление перемещения

    this.lastTime = 0; // Время последнего кадра

    this.animations = {}; // Контейнер для хранения анимаций {walk_down: .., walk_up: .. и т.д. }
    // Форма, которая будет использоваться для коллизии. Она начинается не от левого верхнего угла спрайта, а от x: 18, y: 15

    this.collisionShape = {
      x: 18,
      y: 15,
      width: 28,
      height: 49
    };
    this.isShooting = false;
    this.isHitting = false; // Загружаем необходмые анимации для данного персонажа

    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    'walk_down,walk_up,walk_left,walk_right'.split(',').forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name); // В итоге this.animations = {walk_down: .., walk_up: .. и т.д. }
    });
    'shoot_down,shoot_up,shoot_left,shoot_right'.split(',').forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); // второй аргумен - скорость, false - отменить повтор
    });
    'cut_down,cut_up,cut_left,cut_right'.split(',').forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); // второй аргумен - скорость, false - отменить повтор
    });
    ['death'].forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); // второй аргумен - скорость, false - отменить повтор
    });
    this.stand('left');
  }

  _createClass(Body, [{
    key: "shoot",
    value: function shoot(arrow) {
      var _this2 = this;

      if (!this.isShooting) {
        this.isShooting = true;
        this.view = this.animations["shoot_".concat(this.velocity.direction)];

        this.view.onEnd = function () {
          _this2.isShooting = false;
          arrow.fly(_this2.x, _this2.y, _this2.velocity.direction);
        };

        this.view.run(); // Запустить анимацию
      }
    }
  }, {
    key: "hit",
    value: function hit() {
      var _this3 = this;

      if (!this.isHitting) {
        this.isHitting = true;
        this.view = this.animations["cut_".concat(this.velocity.direction)];

        this.view.onEnd = function () {
          _this3.isHitting = false;
        };

        this.view.run(); // Запустить анимацию
      }
    }
  }, {
    key: "walk",
    value: function walk(direction) {
      if (this.isShooting || this.isHitting) return; // Во время стрельбы нельзя идти. НЕ ПОНИМАЮ КАК РАБОТАЕТ. ЕСЛИ УБРАТЬ ЭТУ СТРОКУ, ПЕРСОНАЖЕМ НЕЛЬЗЯ УПРАВЛЯТЬ

      this.velocity.setDirection(direction, this.speed);
      this.view = this.animations["walk_".concat(direction)]; // Здесь хранится текущая анимация.   this.view хранит объект CharacterSheet

      this.view.run(); // Запустить анимацию
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      // Стоять
      if (this.isShooting || this.isHitting) return; // НЕ ПОНИМАЮ КАК РАБОТАЕТ. ЕСЛИ УБРАТЬ ЭТУ СТРОКУ, ПЕРСОНАЖЕМ НЕЛЬЗЯ УПРАВЛЯТЬ

      this.velocity.setDirection(direction, 0);
      this.view = this.animations["walk_".concat(direction)];
      this.view.stop();
    }
  }, {
    key: "death",
    value: function death() {
      this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]('down', 0); // Останавливаем персонажа

      this.view = this.animations.death; // this.view.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      }

      if (this.isShooting || this.isHitting) {
        // Во время стрельбы и ударов нельзя идти
        this.velocity.move(this, 0);
      } else {
        this.velocity.move(this, time - this.lastTime);
      }

      this.lastTime = time; // Координаты для анимации; this.view хранит объект CharacterSheet

      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y)); // В переменной this.view хранится this.animations = {}. Метод trunc отбрасывет дробную часть

      this.view.update(time);
    }
  }]);

  return Body;
}();

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  function Camera() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height,
        _ref$limitX = _ref.limitX,
        limitX = _ref$limitX === void 0 ? 50000 : _ref$limitX,
        _ref$limitY = _ref.limitY,
        limitY = _ref$limitY === void 0 ? 50000 : _ref$limitY,
        _ref$scrollEdge = _ref.scrollEdge,
        scrollEdge = _ref$scrollEdge === void 0 ? 200 : _ref$scrollEdge;

    _classCallCheck(this, Camera);

    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.limitX = limitX;
    this.limitY = limitY;
    this.watchObject = false;
    this.obj = null;
    this.scrollEdge = scrollEdge;
  }

  _createClass(Camera, [{
    key: "watch",
    value: function watch(obj) {
      this.watchObject = true;
      this.obj = obj;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.watchObject) {
        if (this.obj.x > this.x + this.width - this.scrollEdge) {
          this.x = Math.min(this.limitX, this.obj.x - this.width + this.scrollEdge);
        }

        if (this.obj.x < this.x + this.scrollEdge) {
          this.x = Math.max(0, this.obj.x - this.scrollEdge);
        }

        if (this.obj.y > this.y + this.height - this.scrollEdge) {
          this.y = Math.min(this.limitY, this.obj.y - this.height + this.scrollEdge);
        }

        if (this.obj.y < this.y + this.scrollEdge) {
          this.y = Math.max(0, this.obj.y - this.scrollEdge);
        }
      }
    }
  }, {
    key: "specialPosition",
    value: function specialPosition() {
      this.x = this.width;
      this.y = this.height;
    }
  }]);

  return Camera;
}();

/***/ }),

/***/ "./src/character-sheet.js":
/*!********************************!*\
  !*** ./src/character-sheet.js ***!
  \********************************/
/*! exports provided: CharacterSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var CharacterSheet =
/*#__PURE__*/
function (_SpriteSheet) {
  _inherits(CharacterSheet, _SpriteSheet);

  function CharacterSheet(_ref) {
    var _this;

    var imageName = _ref.imageName;

    _classCallCheck(this, CharacterSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSheet).call(this, {
      imageName: imageName,
      imageWidth: 832,
      imageHeight: 1344
    }));
    _this.sequences = _this.getSequences();
    return _this;
  }

  _createClass(CharacterSheet, [{
    key: "getSequences",
    value: function getSequences() {
      var data = __webpack_require__(/*! ./maps/animations.json */ "./src/maps/animations.json");

      var sequences = {};
      data.layers.forEach(function (layer) {
        sequences[layer.name] = layer.data.filter(function (i) {
          return i > 0;
        });
      });
      return sequences;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _get(_getPrototypeOf(CharacterSheet.prototype), "getAnimation", this).call(this, this.sequences[name], speed, repeat, autorun);
    }
  }]);

  return CharacterSheet;
}(_sprite_sheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"]);

/***/ }),

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
/*! exports provided: Collider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
/* harmony import */ var _remove_from_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-from-array */ "./src/remove-from-array.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Collider =
/*#__PURE__*/
function () {
  function Collider() {
    _classCallCheck(this, Collider);

    this.staticShapes = []; // Массив статичных объектов. Мы используем следующие свойства объекта: {x, y, width, height}

    this.bodies = [];
  }

  _createClass(Collider, [{
    key: "addStaticShapes",
    value: function addStaticShapes(data) {
      var _this = this;

      data.layers.forEach(function (layer) {
        if (layer.type == 'objectgroup')
          /* objects это массив с набором объектов [{...},{...}, и т.д.]0
                    Думаю, конструкция (...layer.objects) создает массив  this.staticShapes = [{...},{...}, и т.д.] */
          {
            var _this$staticShapes;

            (_this$staticShapes = _this.staticShapes).push.apply(_this$staticShapes, _toConsumableArray(layer.objects));
          }
      }); // Добавим ограничение по краям карты. За карту нельзя выйти

      this.staticShapes.push({
        x: 0,
        y: 0,
        width: 1300,
        height: 1
      });
      this.staticShapes.push({
        x: 0,
        y: 0,
        width: 1,
        height: 1300
      }); // this.staticShapes.push({x:1280,y:0,width:1,height:1300}); - Ессли введены эти параметры Орки не могут пройти на карту.

      this.staticShapes.push({
        x: 1280,
        y: 0,
        width: 1300,
        height: 1
      });
    }
  }, {
    key: "addKinematicBody",
    value: function addKinematicBody(body) {
      this.bodies.push({
        x: body.x,
        // старые координаты персонажа
        y: body.y,
        obj: body // сохраняем персонажа с новыми координатами, будем сравнивать новые и старые координаты персонажа

      });
    }
  }, {
    key: "update",
    value: function update(time) {
      this.checkCollision(time); // рассчёт коллизии персонажей со статичными объектами и персонажей между собой
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(time) {
      var _this2 = this;

      var _loop = function _loop(i) {
        var body = _this2.bodies[i];
        var oldX = body.x;
        var oldY = body.y;
        var x = body.obj.x;
        var y = body.obj.y;

        if (x > oldX) {
          // moving right
          _this2.staticShapes.forEach(function (shape) {
            if ( // Если старые координаты находятся перед объектом***
            oldX // координата персонажа
            - 1 // Перемещение между кадрами занимает дробную часть пикселя, чтобы код работал округлим прошлую точку на 1 пиксель
            + body.obj.collisionShape.x // координата формы коллизии внутри персонажа (началом отсчёта служит левый верхний угол персонажа)
            + body.obj.collisionShape.width < shape.x && //* **и новые координаты находятся после объекта, значит персонаж столкнулся с препятствием
            x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x // Персонаж должен касаться препятствия
            && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              // Берем ближайший объект, где остановим персонажа
              x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x) // (наверное можно было просто оставить один shape.x)
              - body.obj.collisionShape.x - body.obj.collisionShape.width;

              _this2.checkInteractiveWithStatic(body, i); // Проверяем интерактив со статичными объектами (например после попадания в дерево, стрела не движется)

            }
          }); // Коллизия персонажей между собой


          for (var j = 0; j < _this2.bodies.length; j++) {
            var shape = _this2.bodies[j];

            if (body != shape) {
              // Если это не тот же самый объект
              if (oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width < shape.obj.x + shape.obj.collisionShape.x && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.obj.x + shape.obj.collisionShape.x && y + body.obj.collisionShape.y < shape.obj.y + shape.obj.collisionShape.y + shape.obj.collisionShape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.obj.y + shape.obj.collisionShape.y) {
                x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.obj.x + shape.obj.collisionShape.x) - body.obj.collisionShape.x - body.obj.collisionShape.width;

                _this2.checkInteractive(body, shape, i, j); // Проверяем интерактив (например стрела бьёт орка, орк бьёт игрока и т.д.)

              }
            }
          }
        }

        if (x < oldX) {
          // moving left
          _this2.staticShapes.forEach(function (shape) {
            if (oldX + 1 + body.obj.collisionShape.x > shape.x + shape.width && x + body.obj.collisionShape.x < shape.x + shape.width && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width) - body.obj.collisionShape.x;

              _this2.checkInteractiveWithStatic(body, i);
            }
          }); // Коллизия персонажей между собой


          for (var _j = 0; _j < _this2.bodies.length; _j++) {
            var _shape = _this2.bodies[_j];

            if (body != _shape) {
              // Если это не тот же самый объект
              if (oldX + 1 + body.obj.collisionShape.x > _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width && x + body.obj.collisionShape.x < _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width && y + body.obj.collisionShape.y < _shape.obj.y + _shape.obj.collisionShape.y + _shape.obj.collisionShape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > _shape.obj.y + _shape.obj.collisionShape.y) {
                x = Math.max(x + body.obj.collisionShape.x, _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width) - body.obj.collisionShape.x;

                _this2.checkInteractive(body, _shape, i, _j);
              }
            }
          }
        }

        if (y > oldY) {
          // moving down
          _this2.staticShapes.forEach(function (shape) {
            if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < shape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;

              _this2.checkInteractiveWithStatic(body, i);
            }
          }); // Коллизия персонажей между собой


          for (var _j2 = 0; _j2 < _this2.bodies.length; _j2++) {
            var _shape2 = _this2.bodies[_j2];

            if (body != _shape2) {
              // Если это не тот же самый объект
              if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < _shape2.obj.y + _shape2.obj.collisionShape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > _shape2.obj.y + _shape2.obj.collisionShape.y && x + body.obj.collisionShape.x < _shape2.obj.x + _shape2.obj.collisionShape.x + _shape2.obj.collisionShape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.height > _shape2.obj.x + _shape2.obj.collisionShape.x) {
                y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, _shape2.obj.y + _shape2.obj.collisionShape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;

                _this2.checkInteractive(body, _shape2, i, _j2);
              }
            }
          }
        }

        if (y < oldY) {
          // moving up
          _this2.staticShapes.forEach(function (shape) {
            if (oldY + 1 + body.obj.collisionShape.y > shape.y + shape.height && y + body.obj.collisionShape.y < shape.y + shape.height && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;

              _this2.checkInteractiveWithStatic(body, i);
            }
          });

          for (var _j3 = 0; _j3 < _this2.bodies.length; _j3++) {
            var _shape3 = _this2.bodies[_j3];

            if (body != _shape3) {
              // Если это не тот же самый объект
              if (oldY + 1 + body.obj.collisionShape.y > _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height && y + body.obj.collisionShape.y < _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height && x + body.obj.collisionShape.x < _shape3.obj.x + _shape3.obj.collisionShape.x + _shape3.obj.collisionShape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > _shape3.obj.x + _shape3.obj.collisionShape.x) {
                y = Math.max(y + body.obj.collisionShape.y, _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height) - body.obj.collisionShape.y;

                _this2.checkInteractive(body, _shape3, i, _j3);
              }
            }
          }
        }

        body.x = x;
        body.y = y;
        body.obj.x = x;
        body.obj.y = y;
      };

      for (var i = 0; i < this.bodies.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "checkInteractive",
    value: function checkInteractive(body, shape, indexOfBody, indexOfShape) {
      if (body.obj.hasOwnProperty('name') && shape.obj.hasOwnProperty('name')) {
        // Проверка на случай, если попадётся объект без названия
        if (body.obj.name == 'arrow' && shape.obj.name == 'orc') {
          // Если стрела коснулась орка
          // На самом деле вместо двух, можно сделать один вызов this.remove(this.bodies,indexOfBody,indexOfShape). Но мне так удобнее отлаживать
          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfBody); // Стрела исчезает, удалить из коллайдера, удалить сам объект

          body.obj.delete(); // Удаляем стрелу

          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfShape); // Отключить его от коллайдера (удалить элемент по индексу из массива this.bodies)

          shape.obj.death(); // Орк погибает
        }
      }
    }
  }, {
    key: "checkInteractiveWithStatic",
    value: function checkInteractiveWithStatic(body, indexOfBody) {
      //
      if (body.obj.hasOwnProperty('name')) {
        // Проверка на случай, если попадётся объект без названия
        if (body.obj.name == 'arrow') {
          body.obj.stop(); // Стрела перестаёт двигаться

          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfBody); // удалить из коллайдера
        }
      }
    }
  }]);

  return Collider;
}();

/***/ }),

/***/ "./src/control-state.js":
/*!******************************!*\
  !*** ./src/control-state.js ***!
  \******************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControlState =
/*#__PURE__*/
function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false;
    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire'], [13, 'enter']]);
    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  }

  _createClass(ControlState, [{
    key: "update",
    value: function update(event, pressed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = pressed;
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/game-level */ "./src/scenes/game-level.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./control-state */ "./src/control-state.js");
/* harmony import */ var _scenes_game_over__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scenes/game-over */ "./src/scenes/game-over.js");
/* harmony import */ var _scenes_game_win__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scenes/game-win */ "./src/scenes/game-win.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 640 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height);
    this.screen.loadImages({
      orc: 'img/orc.png',
      elf: 'img/dark-elf.png',
      player: 'img/player2.png',
      title_bg: 'img/bg_title.png',
      title_name: 'img/game_name.png',
      title_start: 'img/start_game.png',
      title_option: 'img/option_game.png',
      title_exit: 'img/exit_game.png',
      you_win: 'img/you_win.png',
      game_over: 'img/game_over.png',
      tiles: 'img/tiles.png',
      tiles2: 'img/tiles2.png',
      quest_person: 'img/girl-for-cave.png'
    });
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_5__["ControlState"]();
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this),
      gameOver: new _scenes_game_over__WEBPACK_IMPORTED_MODULE_6__["GameOver"](this),
      gameWin: new _scenes_game_win__WEBPACK_IMPORTED_MODULE_7__["GameWin"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].START_GAME:
          return this.scenes.gameLevel;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].GAME_OVER:
          return this.scenes.gameOver;

        case _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].GAME_WIN:
          return this.scenes.gameWin;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_4__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/get-quest.js":
/*!**************************!*\
  !*** ./src/get-quest.js ***!
  \**************************/
/*! exports provided: allDeathOrks, showQuestInterface, showPassageDungeon, updateQuest, getQuest, questСompleted, deathOrcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDeathOrks", function() { return allDeathOrks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showQuestInterface", function() { return showQuestInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPassageDungeon", function() { return showPassageDungeon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateQuest", function() { return updateQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuest", function() { return getQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questСompleted", function() { return questСompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deathOrcs", function() { return deathOrcs; });
var allDeathOrks = 0;
var showQuestInterface = false;
var showPassageDungeon = false;
function updateQuest() {
  allDeathOrks = 0;
  showQuestInterface = false;
  showPassageDungeon = false;
}
function getQuest() {
  showQuestInterface = true;
}
function questСompleted() {
  showQuestInterface = false;
  showPassageDungeon = true;
}
function deathOrcs() {
  if (showQuestInterface) {
    allDeathOrks++;
  }

  if (allDeathOrks == 10) {
    questСompleted();
  }
}

/***/ }),

/***/ "./src/image-loader.js":
/*!*****************************!*\
  !*** ./src/image-loader.js ***!
  \*****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var elvenScout = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  elvenScout.run();
};

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! exports provided: Interface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interface", function() { return Interface; });
/* harmony import */ var _text_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-info */ "./src/text-info.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/isAgressive */ "./src/ais/isAgressive.js");
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-quest */ "./src/get-quest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Interface =
/*#__PURE__*/
function () {
  function Interface(game, waves) {
    _classCallCheck(this, Interface);

    this.game = game;
    this.waves = waves;
    this.textInfo = new _text_info__WEBPACK_IMPORTED_MODULE_0__["TextInfo"](game.screen);
    this.context = this.game.screen.context;
    this.lastTime = 0;
    this.player = game.currentScene.player;
    this.fightTextShowed = false; // надпись Fight покажется лишь один раз
    // this.timeToSurvive = 2000000;// Если это время выйдет в ноль, то игра закончится победой

    this.orcsKilled = 0;
    this.widthHealthLine = 150;
    this.endOpacity = 0; // При проигрыше экран дискретно, ступенчато, темнеет. 0 - абсолютно светло, 1 - абсолютно темно
  }

  _createClass(Interface, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime === 0) {
        this.lastTime = time;
      }

      this.showHealthLine();

      if (_get_quest__WEBPACK_IMPORTED_MODULE_2__["showQuestInterface"]) {
        this.questInterface();
      }

      if (_get_quest__WEBPACK_IMPORTED_MODULE_2__["showPassageDungeon"]) {
        this.passageDungeon();
      }

      if (this.player.health === 0) {
        this.endGame(time, 'lose'); // Проиграл
      }

      if (_ais_isAgressive__WEBPACK_IMPORTED_MODULE_1__["isAgressive"].isOrcAgressive()) {
        this.fightText(time);
      }

      this.textInfo.update(time);
      this.lastTime = time;
    }
  }, {
    key: "fightText",
    value: function fightText(time) {
      if (!this.fightTextShowed) {
        this.fightTextShowed = true;
        this.textInfo.showText('You angered the orcs!', time);
      }
    }
  }, {
    key: "showHealthLine",
    value: function showHealthLine() {
      this.context.strokeStyle = '#852727';
      this.context.fillStyle = '#b23d3d';
      this.context.lineWidth = 2;
      this.context.rect(20, 15, this.widthHealthLine, 10);
      this.context.fillRect(20, 15, this.widthHealthLine * (this.player.health / this.player.healthStart), 10); // this.context.fill();

      this.context.stroke();
    }
  }, {
    key: "questInterface",
    value: function questInterface() {
      this.context.fillStyle = '#FFFFFF';
      this.context.font = '20px serif';
      this.context.fillText("Orcs killed - ".concat(_get_quest__WEBPACK_IMPORTED_MODULE_2__["allDeathOrks"], " of 10"), 20, 60);
    }
  }, {
    key: "passageDungeon",
    value: function passageDungeon() {
      this.context.fillStyle = '#FFFFFF';
      this.context.font = '20px serif';
      this.context.fillText("The dungeon is open!", 20, 60);
    }
  }, {
    key: "endGame",
    value: function endGame(time, status) {
      // Постепенно появляется черная заставка и сообщаем сцене, что игра закончена
      this.endOpacity += (time - this.lastTime) / 1000;

      if (this.endOpacity > 1.5) {
        // 1.5, а не 1, чтобы черная заставка ещё повисела немного
        this.changeScene(status);
      }

      var opacity = 0;
      if (this.endOpacity > 0.25) opacity = 0.25;
      if (this.endOpacity > 0.5) opacity = 0.5;
      if (this.endOpacity > 0.75) opacity = 0.75;
      if (this.endOpacity > 1) opacity = 1;
      this.context.fillStyle = "rgb(0,0,0,".concat(opacity, ")");
      this.context.fillRect(0, 0, this.game.screen.width, this.game.screen.height);
    }
  }, {
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case 'lose':
          return this.game.currentScene.gameOverTrigger = true;

        case 'win':
          return this.game.currentScene.winTrigger = true;
      }
    }
  }]);

  return Interface;
}();

/***/ }),

/***/ "./src/maps/animations.json":
/*!**********************************!*\
  !*** ./src/maps/animations.json ***!
  \**********************************/
/*! exports provided: height, layers, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"height":1,"layers":[{"data":[1,2,3,4,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[27,28,29,30,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[40,41,42,43,44,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"spell_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[53,54,55,56,57,58,59,60,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[66,67,68,69,70,71,72,73,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[79,80,81,82,83,84,85,86,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[92,93,94,95,96,97,98,99,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"stab_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[105,106,107,108,109,110,111,112,113,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[118,119,120,121,122,123,124,125,126,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[131,132,133,134,135,136,137,138,139,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[144,145,146,147,148,149,150,151,152,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"walk_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[157,158,159,160,161,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[170,171,172,173,174,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[183,184,185,186,187,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[196,197,198,199,200,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"cut_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[209,210,211,212,213,214,215,216,217,218,219,220,221,0,0,0,0,0,0,0],"height":1,"name":"shoot_up","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[222,223,224,225,226,227,228,229,230,231,232,233,234,0,0,0,0,0,0,0],"height":1,"name":"shoot_left","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[235,236,237,238,239,240,241,242,243,244,245,246,247,0,0,0,0,0,0,0],"height":1,"name":"shoot_down","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[248,249,250,251,252,253,254,255,256,257,258,259,260,0,0,0,0,0,0,0],"height":1,"name":"shoot_right","opacity":1,"type":"tilelayer","visible":false,"width":20,"x":0,"y":0},{"data":[261,262,263,264,265,266,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":1,"name":"death","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextobjectid":1,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.0.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../../resources/playertiles.tsx"}],"tilewidth":64,"type":"map","version":1,"width":20};

/***/ }),

/***/ "./src/maps/level1.json":
/*!******************************!*\
  !*** ./src/maps/level1.json ***!
  \******************************/
/*! exports provided: compressionlevel, editorsettings, height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"compressionlevel":-1,"editorsettings":{"export":{"format":"json","target":"level1.json"}},"height":20,"infinite":false,"layers":[{"data":[1,1,1,1,1,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,64,15,66,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,7,7,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,7,17,4,4,5,5,5,4,4,4,1,1,74,25,76,1,1,1,1,7,7,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,7,17,4,4,4,5,5,5,4,4,4,1,1,74,25,76,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,17,4,4,4,4,5,5,5,4,4,4,1,1,74,25,46,65,65,65,65,65,65,65,65,65,65,65,65,65,66,1,1,1,74,25,25,25,75,75,75,75,75,75,75,75,75,75,75,75,76,1,1,1,84,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,86,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,64,65,66,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,74,25,76,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,84,85,86,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,61,62,62,62,62,63,1,1,1,1,1,1,1,1,1,1,1,1,1,1,71,72,72,72,72,73,1,1,1,1,1,64,65,65,65,65,65,65,65,1,81,82,82,82,82,83,1,1,1,1,1,74,75,75,75,75,75,75,75,1,1,1,1,1,1,1,1,1,1,1,1,84,85,85,85,85,85,85,85,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"id":1,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[48,48,48,48,48,48,48,48,48,0,0,0,30,47,39,39,39,38,18,60,48,27,58,0,59,28,39,60,27,0,0,0,30,39,39,0,39,38,38,57,48,39,0,0,0,48,39,28,0,0,0,0,29,29,39,0,0,29,29,29,48,60,37,0,0,48,0,27,39,0,0,0,60,38,0,0,59,58,0,38,48,27,0,0,60,48,60,0,28,0,0,29,29,29,0,39,0,29,29,29,48,28,58,0,0,48,37,27,27,0,0,58,0,38,0,59,0,38,0,60,48,27,0,0,0,48,28,39,60,0,29,29,29,29,0,39,0,29,29,29,48,59,0,0,0,48,39,59,0,0,0,58,0,60,39,0,0,0,60,0,48,58,0,60,0,0,29,29,29,29,29,29,0,0,0,59,0,57,0,48,48,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,48,48,39,37,0,0,0,0,59,29,29,29,29,0,59,39,39,39,39,59,48,48,48,48,48,48,48,48,37,0,39,0,39,0,58,39,48,48,48,48,48,48,27,0,0,0,27,27,60,27,37,48,39,37,27,37,60,49,48,48,48,48,37,0,57,0,39,28,37,39,39,48,58,0,39,28,28,59,49,48,48,48,28,60,27,39,39,37,0,58,0,48,37,28,60,0,27,0,28,49,48,48,0,0,0,0,0,0,27,0,60,48,27,58,28,39,28,27,39,28,48,48,0,0,0,0,0,0,0,28,49,48,59,37,0,0,0,0,0,0,58,48,0,0,0,0,0,0,39,49,48,48,49,37,57,0,0,60,0,0,39,48,39,27,39,28,60,28,49,48,48,48,49,49,49,49,49,49,48,49,49,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48],"height":20,"id":3,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","id":4,"name":"hitboxes","objects":[{"height":8.70607,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":1310.26,"x":0,"y":-2.17652},{"height":1051.26,"id":2,"name":"","rotation":0,"type":"","visible":true,"width":10.8826,"x":1266.73,"y":-2.17652},{"height":58.766,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":1262.38,"x":0,"y":1221.03},{"height":1212.32,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":43.5304,"x":0,"y":4.35304},{"height":30.4713,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":541.953,"x":32.6478,"y":8.70607},{"height":500.599,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":39.1773,"x":574.601,"y":8.70607},{"height":56.5895,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":276.418,"x":615.955,"y":457.069},{"height":54.413,"id":10,"name":"","rotation":0,"type":"","visible":true,"width":180.651,"x":1086.08,"y":457.069},{"height":54.413,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":180.651,"x":1083.91,"y":328.654},{"height":54.413,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":176.298,"x":1088.26,"y":200.24},{"height":250.3,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":76.1781,"x":700.839,"y":8.70607},{"height":50.0599,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":117.532,"x":779.194,"y":206.769},{"height":52.2364,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":252.476,"x":642.073,"y":333.007},{"height":380.891,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":37.0008,"x":639.896,"y":4.35304},{"height":28.2947,"id":17,"name":"","rotation":0,"type":"","visible":true,"width":182.828,"x":709.545,"y":276.418},{"height":0,"id":18,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":781.37,"y":145.827},{"height":28.2947,"id":19,"name":"","rotation":0,"type":"","visible":true,"width":115.355,"x":777.017,"y":148.003},{"height":28.2947,"id":20,"name":"","rotation":0,"type":"","visible":true,"width":169.768,"x":1099.14,"y":148.003},{"height":26.1182,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":176.298,"x":1094.79,"y":278.594},{"height":23.9417,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":174.121,"x":1096.97,"y":407.009},{"height":30.4713,"id":23,"name":"","rotation":0,"type":"","visible":true,"width":243.77,"x":648.602,"y":404.832},{"height":58.766,"id":25,"name":"","rotation":0,"type":"","visible":true,"width":396.126,"x":43.5304,"y":705.192},{"height":450.539,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":60.9425,"x":644.249,"y":766.134},{"height":163.239,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":50.0599,"x":592.013,"y":1051.26},{"height":104.473,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":50.0599,"x":522.364,"y":1114.38},{"height":41.3538,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":32.6478,"x":463.598,"y":1177.5},{"height":128.415,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":324.301,"x":91.4138,"y":994.669},{"height":30.4713,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":21.7652,"x":208.946,"y":851.019},{"height":34.8243,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":19.5887,"x":1107.85,"y":526.717},{"height":32.6478,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":21.7652,"x":848.842,"y":1105.67},{"height":54.413,"id":38,"name":"","rotation":0,"type":"","visible":true,"width":302.536,"x":968.551,"y":707.368},{"height":509.305,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":52.2364,"x":1216.67,"y":515.835},{"height":50.0599,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":198.063,"x":1046.91,"y":766.134},{"height":52.2364,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":134.944,"x":1110.02,"y":835.783},{"height":28.2947,"id":42,"name":"","rotation":0,"type":"","visible":true,"width":71.8251,"x":1170.97,"y":922.844},{"height":30.4713,"id":43,"name":"","rotation":0,"type":"","visible":true,"width":241.594,"x":520.188,"y":657.309},{"height":39.1773,"id":45,"name":"","rotation":0,"type":"","visible":true,"width":26.1182,"x":1234.09,"y":78.3547},{"height":361,"id":48,"name":"","rotation":0,"type":"","visible":true,"width":21,"x":339,"y":140},{"height":21,"id":50,"name":"","rotation":0,"type":"","visible":true,"width":371,"x":393,"y":535},{"height":146,"id":54,"name":"","rotation":0,"type":"","visible":true,"width":8,"x":1276,"y":1042},{"height":95,"id":56,"name":"","rotation":0,"type":"","visible":true,"width":4,"x":1276.5,"y":1187.5},{"height":63,"id":57,"name":"","rotation":0,"type":"","visible":true,"width":14.5,"x":1262,"y":1217},{"height":128,"id":60,"name":"","rotation":0,"type":"","visible":true,"width":54,"x":708,"y":1092},{"height":54,"id":61,"name":"","rotation":0,"type":"","visible":true,"width":506,"x":766,"y":1168}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextlayerid":5,"nextobjectid":65,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.4.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"tiles.tsx"}],"tilewidth":64,"type":"map","version":1.4,"width":20};

/***/ }),

/***/ "./src/maps/level2.json":
/*!******************************!*\
  !*** ./src/maps/level2.json ***!
  \******************************/
/*! exports provided: compressionlevel, editorsettings, height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = {"compressionlevel":-1,"editorsettings":{"export":{"format":"json","target":"level2.json"}},"height":20,"infinite":false,"layers":[{"data":[42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,21,22,23,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,31,32,33,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,31,32,33,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,31,32,33,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,31,32,33,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,21,35,32,34,22,22,22,23,2,2,2,2,21,22,22,22,22,22,22,23,31,32,32,32,32,32,32,33,2,2,2,2,31,32,32,32,32,32,32,33,31,32,32,32,32,32,32,33,2,2,2,2,31,32,32,32,32,32,32,33],"height":20,"id":1,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,0,14,0,0,0,0,0,15,0,5,14,13,4,13,15,14,3,3,0,0,0,5,0,0,0,5,15,0,0,0,0,14,13,14,15,14,3,3,14,0,13,15,0,0,0,0,0,0,15,13,15,13,15,13,4,13,3,3,0,0,15,0,14,0,14,13,0,0,0,4,0,0,0,14,4,4,3,3,0,14,0,0,3,0,0,0,4,0,0,4,5,4,0,0,13,14,3,3,5,13,0,0,14,0,0,0,0,14,0,0,0,13,0,0,0,0,3,3,0,13,5,0,14,0,4,13,0,0,4,0,15,14,0,15,13,0,3,3,0,3,0,0,0,13,0,0,0,5,0,13,4,0,0,0,14,4,3,3,0,4,0,0,14,0,5,0,0,0,0,4,0,0,14,0,0,0,3,3,0,15,0,0,13,0,0,0,13,4,0,4,5,0,4,0,5,0,3,3,0,14,14,0,14,0,0,4,4,0,0,3,0,0,14,0,0,0,3,3,5,0,0,0,4,0,14,14,0,0,5,0,3,0,13,14,4,0,3,3,0,0,0,0,13,0,0,13,5,0,4,14,14,0,0,0,15,4,3,3,0,0,0,0,4,0,0,14,0,0,13,0,0,3,0,5,0,13,3,3,0,0,0,0,0,0,0,13,0,14,4,0,0,5,0,3,0,0,3,3,0,0,0,0,5,15,0,14,4,4,5,3,0,0,3,0,0,5,3,3,3,0,3,0,0,0,0,0,0,13,0,15,0,0,22,22,22,0,3,3,0,0,0,0,0,0,0,15,0,0,0,13,0,0,32,32,32,0,3,3,0,0,0,0,0,0,0,14,3,26,0,13,0,11,32,32,32,32,3],"height":20,"id":2,"name":"layer2","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"draworder":"topdown","id":3,"name":"hitboxes","objects":[{"height":66.9856459330144,"id":1,"name":"","rotation":0,"type":"","visible":true,"width":1280.38277511962,"x":0,"y":-3.82775119617225},{"height":1221.05263157895,"id":2,"name":"","rotation":0,"type":"","visible":true,"width":55.5023923444976,"x":1224.88038277512,"y":61.244019138756},{"height":149.282296650718,"id":3,"name":"","rotation":0,"type":"","visible":true,"width":93.7799043062203,"x":1136.84210526316,"y":1131.1004784689},{"height":321.531100478469,"id":5,"name":"","rotation":0,"type":"","visible":true,"width":109.090909090909,"x":103.349282296651,"y":813.397129186603},{"height":1.91387559808618,"id":6,"name":"","rotation":0,"type":"","visible":true,"width":1.91387559808612,"x":55.5023923444976,"y":1129.18660287081},{"height":1066.02870813397,"id":7,"name":"","rotation":0,"type":"","visible":true,"width":66.9856459330144,"x":-15.311004784689,"y":63.1578947368421},{"height":55.5023923444976,"id":8,"name":"","rotation":0,"type":"","visible":true,"width":38.2775119617225,"x":70.8133971291866,"y":200.956937799043},{"height":488.038277511962,"id":9,"name":"","rotation":0,"type":"","visible":true,"width":53.5885167464115,"x":133.971291866029,"y":327.272727272727},{"height":49.7607655502393,"id":10,"name":"","rotation":0,"type":"","visible":true,"width":40.1913875598086,"x":193.301435406699,"y":713.875598086124},{"height":116.746411483254,"id":11,"name":"","rotation":0,"type":"","visible":true,"width":44.0191387559809,"x":200.956937799043,"y":206.698564593301},{"height":68.8995215311005,"id":12,"name":"","rotation":0,"type":"","visible":true,"width":40.1913875598086,"x":260.287081339713,"y":55.5023923444976},{"height":250.717703349282,"id":13,"name":"","rotation":0,"type":"","visible":true,"width":42.1052631578947,"x":327.272727272727,"y":266.028708133971},{"height":47.8468899521532,"id":14,"name":"","rotation":0,"type":"","visible":true,"width":45.933014354067,"x":390.430622009569,"y":524.401913875598},{"height":365.55023923445,"id":15,"name":"","rotation":0,"type":"","visible":true,"width":53.5885167464115,"x":323.444976076555,"y":585.645933014354},{"height":55.5023923444976,"id":16,"name":"","rotation":0,"type":"","visible":true,"width":114.832535885167,"x":453.588516746412,"y":775.11961722488},{"height":57.4162679425837,"id":21,"name":"","rotation":0,"type":"","visible":true,"width":111.004784688995,"x":771.291866028708,"y":840.191387559809},{"height":53.5885167464114,"id":22,"name":"","rotation":0,"type":"","visible":true,"width":47.8468899521532,"x":897.607655502392,"y":905.263157894737},{"height":49.7607655502393,"id":24,"name":"","rotation":0,"type":"","visible":true,"width":40.1913875598086,"x":1033.49282296651,"y":974.162679425837},{"height":61.2440191387559,"id":26,"name":"","rotation":0,"type":"","visible":true,"width":118.66028708134,"x":512.918660287081,"y":711.961722488038},{"height":53.5885167464115,"id":27,"name":"","rotation":0,"type":"","visible":true,"width":111.004784688995,"x":583.732057416268,"y":654.545454545455},{"height":243.062200956938,"id":28,"name":"","rotation":0,"type":"","visible":true,"width":51.6746411483253,"x":771.291866028708,"y":526.315789473684},{"height":66.9856459330143,"id":29,"name":"","rotation":0,"type":"","visible":true,"width":61.2440191387559,"x":824.88038277512,"y":771.291866028708},{"height":114.832535885167,"id":30,"name":"","rotation":0,"type":"","visible":true,"width":53.5885167464114,"x":832.535885167464,"y":455.502392344498},{"height":187.55980861244,"id":31,"name":"","rotation":0,"type":"","visible":true,"width":55.5023923444976,"x":895.693779904306,"y":327.272727272727},{"height":244.976076555024,"id":32,"name":"","rotation":0,"type":"","visible":true,"width":65.0717703349283,"x":958.851674641148,"y":585.645933014354},{"height":59.3301435406698,"id":33,"name":"","rotation":0,"type":"","visible":true,"width":122.488038277512,"x":1025.83732057416,"y":777.033492822967},{"height":63.1578947368422,"id":34,"name":"","rotation":0,"type":"","visible":true,"width":137.799043062201,"x":1083.25358851675,"y":838.277511961723},{"height":57.4162679425838,"id":35,"name":"","rotation":0,"type":"","visible":true,"width":65.0717703349283,"x":1157.89473684211,"y":903.349282296651},{"height":63.1578947368421,"id":36,"name":"","rotation":0,"type":"","visible":true,"width":120.574162679426,"x":1029.66507177034,"y":455.502392344498},{"height":55.5023923444977,"id":37,"name":"","rotation":0,"type":"","visible":true,"width":126.315789473684,"x":1094.73684210526,"y":516.746411483254},{"height":57.4162679425837,"id":39,"name":"","rotation":0,"type":"","visible":true,"width":132.057416267943,"x":1090.90909090909,"y":329.186602870813},{"height":61.244019138756,"id":40,"name":"","rotation":0,"type":"","visible":true,"width":59.33014354067,"x":1090.90909090909,"y":133.971291866029},{"height":66.9856459330144,"id":41,"name":"","rotation":0,"type":"","visible":true,"width":72.7272727272727,"x":1152.15311004785,"y":66.9856459330144},{"height":55.5023923444976,"id":42,"name":"","rotation":0,"type":"","visible":true,"width":317.703349282297,"x":706.22009569378,"y":200.956937799043},{"height":128.22966507177,"id":43,"name":"","rotation":0,"type":"","visible":true,"width":65.0717703349283,"x":767.464114832536,"y":256.459330143541},{"height":65.0717703349283,"id":44,"name":"","rotation":0,"type":"","visible":true,"width":63.1578947368421,"x":702.392344497608,"y":453.588516746412},{"height":66.9856459330144,"id":45,"name":"","rotation":0,"type":"","visible":true,"width":59.3301435406698,"x":579.904306220096,"y":327.272727272727},{"height":57.4162679425837,"id":46,"name":"","rotation":0,"type":"","visible":true,"width":59.3301435406698,"x":639.234449760766,"y":392.344497607656},{"height":59.3301435406699,"id":47,"name":"","rotation":0,"type":"","visible":true,"width":61.244019138756,"x":509.090909090909,"y":459.33014354067},{"height":51.6746411483253,"id":48,"name":"","rotation":0,"type":"","visible":true,"width":57.4162679425837,"x":451.674641148325,"y":461.244019138756},{"height":65.0717703349283,"id":49,"name":"","rotation":0,"type":"","visible":true,"width":132.057416267943,"x":447.846889952153,"y":262.200956937799},{"height":61.244019138756,"id":50,"name":"","rotation":0,"type":"","visible":true,"width":53.5885167464114,"x":583.732057416268,"y":135.885167464115},{"height":65.0717703349282,"id":51,"name":"","rotation":0,"type":"","visible":true,"width":57.4162679425838,"x":637.320574162679,"y":65.0717703349282},{"height":149.282296650718,"id":56,"name":"","rotation":0,"type":"","visible":true,"width":466.985645933014,"x":-1.91387559808612,"y":1125.35885167464},{"height":66.9856459330143,"id":57,"name":"","rotation":0,"type":"","visible":true,"width":68.8995215311005,"x":380.861244019139,"y":1023.92344497608},{"height":250.717703349282,"id":58,"name":"","rotation":0,"type":"","visible":true,"width":61.244019138756,"x":511.004784688995,"y":834.44976076555},{"height":61.2440191387559,"id":59,"name":"","rotation":0,"type":"","visible":true,"width":124.401913875598,"x":574.162679425837,"y":1027.75119617225},{"height":61.244019138756,"id":60,"name":"","rotation":0,"type":"","visible":true,"width":124.401913875598,"x":639.234449760766,"y":962.679425837321},{"height":130.143540669856,"id":61,"name":"","rotation":0,"type":"","visible":true,"width":61.2440191387559,"x":704.306220095694,"y":844.019138755981},{"height":177.99043062201,"id":62,"name":"","rotation":0,"type":"","visible":true,"width":49.7607655502392,"x":777.033492822967,"y":1102.39234449761},{"height":151.196172248804,"id":63,"name":"","rotation":0,"type":"","visible":true,"width":304.306220095694,"x":826.794258373206,"y":1131.1004784689},{"height":47.8468899521531,"id":64,"name":"","rotation":0,"type":"","visible":true,"width":40.1913875598086,"x":976.076555023924,"y":1039.23444976077},{"height":51.6746411483252,"id":65,"name":"","rotation":0,"type":"","visible":true,"width":42.1052631578948,"x":974.162679425837,"y":1085.16746411483},{"height":0,"id":66,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":947.368421052632,"y":1301.43540669856},{"height":72.7272727272726,"id":67,"name":"","rotation":0,"type":"","visible":true,"width":61.244019138756,"x":767.464114832536,"y":1023.92344497608},{"height":128.22966507177,"id":68,"name":"","rotation":0,"type":"","visible":true,"width":57.4162679425838,"x":516.746411483254,"y":1154.06698564593},{"height":59.3301435406697,"id":69,"name":"","rotation":0,"type":"","visible":true,"width":47.8468899521531,"x":581.818181818182,"y":1222.96650717703},{"height":0,"id":70,"name":"","rotation":0,"type":"","visible":true,"width":0,"x":625.837320574163,"y":1404.78468899522},{"height":63.1578947368421,"id":71,"name":"","rotation":0,"type":"","visible":true,"width":76.555023923445,"x":246.88995215311,"y":200.956937799043},{"height":36.3636363636365,"id":72,"name":"","rotation":0,"type":"","visible":true,"width":65.0717703349283,"x":384.688995215311,"y":1090.90909090909},{"height":59.33014354067,"id":73,"name":"","rotation":0,"type":"","visible":true,"width":61.244019138756,"x":639.234449760766,"y":1088.995215311},{"height":70.8133971291866,"id":74,"name":"","rotation":0,"type":"","visible":true,"width":315.789473684211,"x":834.44976076555,"y":63.1578947368421},{"height":63.1578947368421,"id":75,"name":"","rotation":0,"type":"","visible":true,"width":187.55980861244,"x":899.521531100479,"y":132.057416267943},{"height":122.488038277512,"id":76,"name":"","rotation":0,"type":"","visible":true,"width":197.129186602871,"x":1023.92344497608,"y":200.956937799043},{"height":63.1578947368421,"id":77,"name":"","rotation":0,"type":"","visible":true,"width":76.5550239234451,"x":1148.32535885167,"y":130.143540669856}],"opacity":1,"type":"objectgroup","visible":true,"x":0,"y":0}],"nextlayerid":4,"nextobjectid":78,"orientation":"orthogonal","renderorder":"left-up","tiledversion":"1.4.3","tileheight":64,"tilesets":[{"firstgid":1,"source":"../newnewnew/tiles2.tsx"}],"tilewidth":64,"type":"map","version":1.4,"width":20};

/***/ }),

/***/ "./src/modal-dialogue.js":
/*!*******************************!*\
  !*** ./src/modal-dialogue.js ***!
  \*******************************/
/*! exports provided: runOnceQuest, showModalDialog, updateModalDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runOnceQuest", function() { return runOnceQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModalDialog", function() { return showModalDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModalDialog", function() { return updateModalDialog; });
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-quest */ "./src/get-quest.js");

var TAKE_QUEST = document.getElementById('take_quest');
var ADANDON_THE_QUEST = document.getElementById('abandon_the_quest');
var runOnceQuest = false;

TAKE_QUEST.onclick = function () {
  console.log('You take quest!');
  $('#staticBackdrop').modal('hide');
  runOnceQuest = true;
  Object(_get_quest__WEBPACK_IMPORTED_MODULE_0__["getQuest"])();
};

ADANDON_THE_QUEST.onclick = function () {
  console.log('Abandon the quest!');
  $('#staticBackdrop').modal('hide');
  runOnceQuest = false;
};

function showModalDialog() {
  $('#staticBackdrop').modal('show');
  $('#staticBackdrop').modal('handleUpdate');
}
function updateModalDialog() {
  $('#staticBackdrop').modal('handleUpdate');
}

/***/ }),

/***/ "./src/newLevel.js":
/*!*************************!*\
  !*** ./src/newLevel.js ***!
  \*************************/
/*! exports provided: nextLevelInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextLevelInfo", function() { return nextLevelInfo; });
function nextLevelInfo() {
  $('#infoModal').modal('show'); // $('#staticBackdrop').modal('handleUpdate');
}

/***/ }),

/***/ "./src/orc.js":
/*!********************!*\
  !*** ./src/orc.js ***!
  \********************/
/*! exports provided: Orc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orc", function() { return Orc; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _ais_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/dummy */ "./src/ais/dummy.js");
/* harmony import */ var _ais_endScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ais/endScript */ "./src/ais/endScript.js");
/* harmony import */ var _ais_peaceful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ais/peaceful */ "./src/ais/peaceful.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ais/isAgressive */ "./src/ais/isAgressive.js");
/* harmony import */ var _audio_playback_audios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio-playback/audios */ "./src/audio-playback/audios.js");
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-quest */ "./src/get-quest.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var Orc =
/*#__PURE__*/
function (_Body) {
  _inherits(Orc, _Body);

  function Orc(player) {
    var _this;

    var aiType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'peaceful';

    _classCallCheck(this, Orc);

    // Передаём игрока, чтобы орк мог следить за ним и атаковать его
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Orc).call(this, {
      imageName: 'orc',
      speed: 50
    }));
    if (aiType == 'dummy') _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();
    if (aiType == 'endScript') _this.ai = new _ais_endScript__WEBPACK_IMPORTED_MODULE_2__["EndScript"]();
    if (aiType == 'peaceful') _this.ai = new _ais_peaceful__WEBPACK_IMPORTED_MODULE_3__["Peaceful"](player);
    _this.allDeathOrks = 0;
    _this.name = 'orc'; // Для коллайдера, что опознать этот объект

    _this.ai.control(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Orc, [{
    key: "update",
    value: function update(time) {
      if (this.ai) {
        this.ai.update(time); // Если ИИ не отключен
      }

      _get(_getPrototypeOf(Orc.prototype), "update", this).call(this, time);
    }
  }, {
    key: "death",
    value: function death() {
      Object(_get_quest__WEBPACK_IMPORTED_MODULE_6__["deathOrcs"])();
      Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_5__["deathOrcPlayAudio"])();
      this.ai = null; // Отключаем ИИ

      _ais_isAgressive__WEBPACK_IMPORTED_MODULE_4__["isAgressive"].becomeAgressive();

      _get(_getPrototypeOf(Orc.prototype), "death", this).call(this);
    }
  }]);

  return Orc;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _audio_playback_audios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio-playback/audios */ "./src/audio-playback/audios.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Player =
/*#__PURE__*/
function (_Body) {
  _inherits(Player, _Body);

  // Player -> Body ~ CharacterSheet -> SpriteSheet ~ Sprite
  function Player(control, game_level) {
    var _this;

    _classCallCheck(this, Player);

    // control - управление клавиатурой
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, {
      imageName: 'player',
      speed: 100
    }));
    _this.control = control;
    _this.game_level = game_level;
    _this.arrow = false; // Позволяем стрелять только если на руках есть стрела

    _this.timeArrow = 1000; // Константа, время между появлением следующей стрелы, чтобы стрелы не создавались как из пулемёта

    _this.timerForCreatingArrow = 0; // Таймер для стрел

    _this.lastTimeForArrow = 0;
    _this.name = 'player'; // Для коллайдера, что опознать этот объект

    _this.healthStart = 20; // Начальное количество жизней

    _this.health = _this.healthStart;
    _this.undead = 1000; // Константа времени бессмертия, после получения урона игрок бессмертен

    _this.timerUndead = -1;
    /* Таймер для обратного отсчёта. Если он равен диапазону от 0 до this.undead, значит идёт обратный отсчёт и игрок бессмертен
          Если -1, игрок может получить урон */

    _this.lastTimeForUndead = 0;
    return _this;
  }

  _createClass(Player, [{
    key: "addArrow",
    value: function addArrow(arrow) {
      this.arrow = arrow;
    }
  }, {
    key: "getHit",
    value: function getHit() {
      // Игрок получил удар
      Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_1__["swordPlayAudio"])();

      if (this.timerUndead === -1) {
        // Если игрок смертен
        if (this.health > 0) this.health -= 1;
        this.timerUndead = this.undead; // Делаем игрока бессмертным на время
      }
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTimeForArrow === 0) {
        this.lastTimeForArrow = time;
      }

      if (this.lastTimeForUndead === 0) {
        this.lastTimeForUndead = time;
      }

      if (this.control.fire) {
        if (this.timerForCreatingArrow === 0) {
          // Если стрелу можно создавать
          this.timerForCreatingArrow = this.timeArrow;
          this.game_level.shooting();
          if (this.arrow) this.shoot(this.arrow); // Использовать именно эту стрелу, т.к. персонаж может иметь разные стрелы
        }
      } else if (this.control.up) {
        this.walk('up');
      } else if (this.control.down) {
        this.walk('down');
      } else if (this.control.left) {
        this.walk('left');
      } else if (this.control.right) {
        this.walk('right');
      } else {
        this.stand(this.velocity.direction);
      }

      if (this.timerForCreatingArrow > 0) this.timerForCreatingArrow -= time - this.lastTimeForArrow;else this.timerForCreatingArrow = 0;
      this.lastTimeForArrow = time;

      if (this.timerUndead != -1) {
        // Игрок бессмертен, this.timerUndead > 0
        this.timerUndead -= time - this.lastTime;

        if (this.timerUndead < 0) {
          this.timerUndead = -1; // Игрок снова смертен
        }
      }

      this.timerUndead = -1;
      this.lastTimeForUndead = time;

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, time);
    } // update

  }]);

  return Player;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/projectile.js":
/*!***************************!*\
  !*** ./src/projectile.js ***!
  \***************************/
/*! exports provided: Projectile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectile", function() { return Projectile; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Projectile =
/*#__PURE__*/
function () {
  // Его расширяет projectiles/arrow.js
  function Projectile(direction, speed, x, y) {
    _classCallCheck(this, Projectile);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.direction, speed);
    this.lastTime = 0;
    this.active = false; // Если стрела активна, она отображается через this.game.screen.drawSprite и летит в цель. А вообще стрела в невидимом состоянии всегда находится на экране

    this.collisionShape = {
      x: 27,
      y: 27,
      width: 10,
      height: 10
    }; // Нужно для коллайдера (расчёт столкновений). Размер спрайта 64х64

    this.deleted = false; // Родитель будет отслеживать эту переменную, если она true, значит родитель удалит этот объект
  }

  _createClass(Projectile, [{
    key: "fly",
    value: function fly(x, y, direction) {
      this.x = x;
      this.y = y;
      this.velocity.setDirection(direction, this.speed);
      this.active = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      // При попадании в статичное препятствие, projectile теряет скорость
      this.speed = 0;
      this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.direction, this.speed);
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.deleted = true;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        // Инициализация  this.lastTime
        this.lastTime = time;
        return;
      }

      this.velocity.move(this, time - this.lastTime);
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y)); // На этом этапе пока не известно что это будет спрайт или анимация

      this.lastTime = time;
    }
  }]);

  return Projectile;
}();

/***/ }),

/***/ "./src/projectiles/arrow.js":
/*!**********************************!*\
  !*** ./src/projectiles/arrow.js ***!
  \**********************************/
/*! exports provided: Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectile */ "./src/projectile.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Arrow =
/*#__PURE__*/
function (_Projectile) {
  _inherits(Arrow, _Projectile);

  function Arrow(direction, speed, x, y) {
    var _this;

    _classCallCheck(this, Arrow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Arrow).call(this, direction, speed, x, y));
    _this.sprites = {};
    _this.name = 'arrow';
    var tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.sprites.left = tiles.getSprite(9);
    _this.sprites.right = tiles.getSprite(10);
    _this.sprites.down = tiles.getSprite(19);
    _this.sprites.up = tiles.getSprite(20);
    _this.view = _this.sprites[direction];
    return _this;
  }

  _createClass(Arrow, [{
    key: "fly",
    value: function fly(x, y, direction) {
      _get(_getPrototypeOf(Arrow.prototype), "fly", this).call(this, x, y, direction);

      this.view = this.sprites[direction];
    }
  }]);

  return Arrow;
}(_projectile__WEBPACK_IMPORTED_MODULE_0__["Projectile"]);

/***/ }),

/***/ "./src/quest-person.js":
/*!*****************************!*\
  !*** ./src/quest-person.js ***!
  \*****************************/
/*! exports provided: QuestPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestPerson", function() { return QuestPerson; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _ais_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/dummy */ "./src/ais/dummy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var QuestPerson =
/*#__PURE__*/
function (_Body) {
  _inherits(QuestPerson, _Body);

  function QuestPerson() {
    var _this;

    _classCallCheck(this, QuestPerson);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestPerson).call(this, {
      imageName: 'quest_person',
      speed: 5
    }));
    _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();

    _this.ai.control(_assertThisInitialized(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(QuestPerson, [{
    key: "update",
    value: function update(time) {
      this.ai.update(time);

      _get(_getPrototypeOf(QuestPerson.prototype), "update", this).call(this, time);
    }
  }]);

  return QuestPerson;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/remove-from-array.js":
/*!**********************************!*\
  !*** ./src/remove-from-array.js ***!
  \**********************************/
/*! exports provided: RemoveFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromArray", function() { return RemoveFromArray; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RemoveFromArray =
/*#__PURE__*/
function () {
  function RemoveFromArray() {
    _classCallCheck(this, RemoveFromArray);
  }

  _createClass(RemoveFromArray, null, [{
    key: "remove",
    value: function remove(arr, indexes) {
      // Удалить элементы из массива по индексу
      // arguments - псевдо массив, в котором хранятся все аргументы, переданные в функцию
      // [].slice() - создает пустой массив

      /* arrayOfIndexes - массив, который содержит все аргументы (кроме первого) переданные в функцию
             Это массив индексов, которые нужно удалить из основного массива arr */
      var arrayOfIndexes = [].slice.call(arguments, 1); // Вернуть отфильтрованный массив

      return arr.filter(function (item, index) {
        return (// Например arrayOfIndexes = [1], то есть нужно удалить один элемент по индексу 1
          // indexOf - возвращает индекс искомого элемента. Например: ['a','b'].indexOf('b') //-> 1
          // Каждый элемент массива arr сверяет свой индекс с индексами в arrayOfIndexes.
          // Если его индекса в arrayOfIndexes нет, то метод indexOf вернёт -1, значит будет true и элемент не будет удалён из массива
          arrayOfIndexes.indexOf(index) == -1
        );
      });
    } // remove

  }]);

  return RemoveFromArray;
}();

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/game-level.js":
/*!**********************************!*\
  !*** ./src/scenes/game-level.js ***!
  \**********************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/player.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../camera */ "./src/camera.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../collider */ "./src/collider.js");
/* harmony import */ var _projectiles_arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projectiles/arrow */ "./src/projectiles/arrow.js");
/* harmony import */ var _waves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../waves */ "./src/waves.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interface */ "./src/interface.js");
/* harmony import */ var _remove_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../remove-from-array */ "./src/remove-from-array.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ais/isAgressive */ "./src/ais/isAgressive.js");
/* harmony import */ var _audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../audio-playback/audios */ "./src/audio-playback/audios.js");
/* harmony import */ var _quest_person__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../quest-person */ "./src/quest-person.js");
/* harmony import */ var _modal_dialogue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modal-dialogue */ "./src/modal-dialogue.js");
/* harmony import */ var _training__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../training */ "./src/training.js");
/* harmony import */ var _newLevel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../newLevel */ "./src/newLevel.js");
/* harmony import */ var _get_quest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../get-quest */ "./src/get-quest.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var GameLevel =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameLevel, _Scene);

  function GameLevel(game) {
    _classCallCheck(this, GameLevel);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
        imageName: 'tiles',
        imageWidth: 640,
        imageHeight: 640
      });
      _ais_isAgressive__WEBPACK_IMPORTED_MODULE_9__["isAgressive"].becomePeaceful(); // Сделать орков мирными

      this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.game.control, this);
      this.player.x = 224;
      this.player.y = 118; // this.player.x = 990;
      // this.player.y = 1040;

      this.questPerson = new _quest_person__WEBPACK_IMPORTED_MODULE_11__["QuestPerson"]();
      this.questPerson.x = 940;
      this.questPerson.y = 90;
      this.collider = new _collider__WEBPACK_IMPORTED_MODULE_4__["Collider"](); // Учитывает взаимодействие между объектами, например, не даёт проходить объектам сквозь друг друга
      // Используем webpack поэтому загрузчик json файлов работает по умолчанию

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap('level1', mapData, this.tiles); // createMap возвращает объект TileMap

      this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_3__["Camera"]({
        width: this.game.screen.width,
        height: this.game.screen.height,
        limitX: this.map.width - this.game.screen.width,
        limitY: this.map.height - this.game.screen.height
      });
      this.mainCamera.specialPosition(); // Загнать камеру в самый угол

      this.mainCamera.watch(this.player);
      this.game.screen.setCamera(this.mainCamera);
      this.collider.addStaticShapes(mapData);
      this.collider.addKinematicBody(this.player);
      this.collider.addKinematicBody(this.questPerson);
      this.orcArmy = []; // Массив орков, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

      this.waves = new _waves__WEBPACK_IMPORTED_MODULE_6__["Waves"](this.game); // Контролирует появление противников

      this.waves.init();
      this.interface = new _interface__WEBPACK_IMPORTED_MODULE_7__["Interface"](this.game, this.waves); // Шкала здоровья, таймер в углу экрана

      this.projectiles = []; // Массив стрел, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

      this.gameOverTrigger = false; // Если interface сделает эту переменную true, переходим к проигрышной сцене

      this.winTrigger = false; // Если interface сделает эту переменную true, переходим к победной сцене
      // updateModalDialog();

      Object(_training__WEBPACK_IMPORTED_MODULE_13__["showTraining"])();
      Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(false);
      Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(true);
    }
  }, {
    key: "update",
    value: function update(time) {
      var _this = this;

      if (this.gameOverTrigger) {
        // Закончим игру
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(false);
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameOverPlayAudio"])();
        Object(_get_quest__WEBPACK_IMPORTED_MODULE_15__["updateQuest"])();
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_OVER);
      }

      this.player.update(time);

      if (this.projectiles.length > 0) {
        this.projectiles.forEach(function (arrow, index) {
          if (arrow.active) {
            // active становится true в методе Player -> Body.shoot()
            arrow.update(time);
          }

          if (arrow.deleted) {
            _this.projectiles = _remove_from_array__WEBPACK_IMPORTED_MODULE_8__["RemoveFromArray"].remove(_this.projectiles, index);
          }
        });
      }

      if (this.orcArmy.length > 0) {
        this.orcArmy.forEach(function (orc) {
          orc.update(time);
        });
      } // console.log(this.player.x, this.player.y);
      // console.log(this.questPerson.x, this.questPerson.y);


      this.questPerson.update(time);
      this.collider.update(time);
      this.mainCamera.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      var _this2 = this;

      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map);

      if (this.orcArmy.length > 0) {
        this.orcArmy.forEach(function (orc) {
          _this2.game.screen.drawSprite(orc.view);
        });
      }

      this.game.screen.drawSprite(this.player.view);

      if (this.projectiles.length > 0) {
        // Отрисовка стрел
        this.projectiles.forEach(function (arrow) {
          if (arrow.active) {
            // active становится true в методе Player -> Body.shoot()
            _this2.game.screen.drawSprite(arrow.view);
          }
        });
      }

      this.game.screen.drawSprite(this.questPerson.view);
      this.waves.update(time);
      this.interface.update(time);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);

      if (this.player.x >= 870 && this.player.x <= 1070 && this.player.y >= 100 && this.player.y <= 130) {
        if (_modal_dialogue__WEBPACK_IMPORTED_MODULE_12__["runOnceQuest"] == false) {
          Object(_modal_dialogue__WEBPACK_IMPORTED_MODULE_12__["showModalDialog"])();
        }
      } // go to next level for map


      if (this.player.x >= 1100 && this.player.x <= 1200 && this.player.y >= 30 && this.player.y <= 60) {
        if (_get_quest__WEBPACK_IMPORTED_MODULE_15__["allDeathOrks"] >= 10) {
          this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
            imageName: 'tiles2',
            imageWidth: 640,
            imageHeight: 640
          });

          _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

          Object(_newLevel__WEBPACK_IMPORTED_MODULE_14__["nextLevelInfo"])();
          this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.game.control, this);
          this.player.x = 224;
          this.player.y = 118;
          this.collider = new _collider__WEBPACK_IMPORTED_MODULE_4__["Collider"](); // Учитывает взаимодействие между объектами, например, не даёт проходить объектам сквозь друг друга

          var mapData = __webpack_require__(/*! ../maps/level2.json */ "./src/maps/level2.json");

          this.map = this.game.screen.createMap('level2', mapData, this.tiles); // createMap возвращает объект TileMap

          this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_3__["Camera"]({
            width: this.game.screen.width,
            height: this.game.screen.height,
            limitX: this.map.width - this.game.screen.width,
            limitY: this.map.height - this.game.screen.height
          });
          this.mainCamera.specialPosition();
          this.mainCamera.watch(this.player);
          this.game.screen.setCamera(this.mainCamera);
          this.collider.addStaticShapes(mapData);
          this.collider.addKinematicBody(this.player); // убираем персонажей куда подальше

          this.questPerson.x = 1400;
          this.questPerson.y = 1000; // this.orc.x = 1400;
          // this.orc.y = 1000;
          // this.orcArmy = [];// Массив орков, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива
          // this.waves = new Waves(this.game);

          this.interface = new _interface__WEBPACK_IMPORTED_MODULE_7__["Interface"](this.game); // Шкала здоровья, таймер в углу экрана

          this.projectiles = []; // Массив стрел, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

          this.gameOverTrigger = false; // Если interface сделает эту переменную true, переходим к проигрышной сцене

          this.winTrigger = false; // Если interface сделает эту переменную true, переходим к победной сцене
          // updateModalDialog();

          Object(_get_quest__WEBPACK_IMPORTED_MODULE_15__["updateQuest"])();
          Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(false);
          Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(true);
        }
      }

      if (this.player.x >= 600 && this.player.x <= 700 && this.player.y >= 1150 && this.player.y <= 1300) {
        // Закончим игру
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gamePlayAudio"])(false);
        Object(_get_quest__WEBPACK_IMPORTED_MODULE_15__["updateQuest"])();
        Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["gameWinPlayAudio"])(true);
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_WIN);
      }
    }
  }, {
    key: "shooting",
    value: function shooting() {
      // Стрельба игрока
      var arrow = new _projectiles_arrow__WEBPACK_IMPORTED_MODULE_5__["Arrow"]('down', 400, this.player.x, this.player.y);
      this.player.addArrow(arrow);
      this.projectiles.push(arrow); // Все объекты из этого массива будут отрисованы в методе render

      this.collider.addKinematicBody(arrow);
      setTimeout(function () {
        return Object(_audio_playback_audios__WEBPACK_IMPORTED_MODULE_10__["arrowPlayAudio"])();
      }, 500);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/game-over.js":
/*!*********************************!*\
  !*** ./src/scenes/game-over.js ***!
  \*********************************/
/*! exports provided: GameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOver", function() { return GameOver; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var GameOver =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameOver, _Scene);

  function GameOver(game) {
    _classCallCheck(this, GameOver);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameOver).call(this, game));
  }

  _createClass(GameOver, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameOver.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.enter) {
        // При нажатии на "enter" начать новую игру
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title_bg');
      this.game.screen.drawImage(0, 0, 'game_over');

      _get(_getPrototypeOf(GameOver.prototype), "render", this).call(this, time);
    }
  }]);

  return GameOver;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/game-win.js":
/*!********************************!*\
  !*** ./src/scenes/game-win.js ***!
  \********************************/
/*! exports provided: GameWin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameWin", function() { return GameWin; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var GameWin =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameWin, _Scene);

  function GameWin(game) {
    _classCallCheck(this, GameWin);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameWin).call(this, game));
  }

  _createClass(GameWin, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameWin.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.enter) {
        // При нажатии на "enter" начать новую игру
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title_bg');
      this.game.screen.drawImage(0, 0, 'you_win');

      _get(_getPrototypeOf(GameWin.prototype), "render", this).call(this, time);
    }
  }]);

  return GameWin;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.print(60, 80, 'Loading...');

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.game.control.enter) {
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title_bg');
      this.game.screen.drawImage(0, 0, 'title_name');
      this.game.screen.drawImage(0, 0, 'title_start');
      this.game.screen.drawImage(0, 0, 'title_option');
      this.game.screen.drawImage(0, 0, 'title_exit');

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/image-loader.js");
/* harmony import */ var _tite_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tite-map */ "./src/tite-map.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Screen =
/*#__PURE__*/
function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
    this.camera = null;
    this.isCameraSet = false;
    this.addStylesToCanvas();
  }

  _createClass(Screen, [{
    key: "addStylesToCanvas",
    value: function addStylesToCanvas() {
      this.canvas.style.display = 'block';
      this.canvas.style.position = 'absolute';
      this.canvas.style.left = '0';
      this.canvas.style.right = '0';
      this.canvas.style.top = '0';
      this.canvas.style.bottom = '0';
      this.canvas.style.margin = 'auto';
      document.body.style.background = '#FFFFFF';
    }
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
      this.isCameraSet = true;
    }
  }, {
    key: "loadImages",
    value: function loadImages(imageFiles) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](imageFiles);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
  }, {
    key: "createMap",
    value: function createMap(name, mapData, tileset) {
      var _this2 = this;

      var mapImage = document.createElement('canvas');
      mapImage.width = mapData.width * mapData.tilewidth;
      mapImage.height = mapData.height * mapData.tileheight;
      var mapContext = mapImage.getContext('2d');
      var hitboxes = [];
      var row;
      var col;
      mapData.layers.forEach(function (layer) {
        if (layer.type == 'tilelayer') {
          row = 0;
          col = 0;
          layer.data.forEach(function (index) {
            if (index > 0) {
              mapContext.drawImage(_this2.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tilewidth, mapData.tileheight, col * mapData.tilewidth, row * mapData.tileheight, mapData.tilewidth, mapData.tileheight);
            }

            col++;

            if (col > mapData.width - 1) {
              col = 0;
              row++;
            }
          });
        }

        if (layer.type == 'objectgroup') {
          hitboxes.push.apply(hitboxes, _toConsumableArray(layer.objects.map(function (obj) {
            return {
              x1: obj.x,
              x2: obj.x + obj.width,
              y1: obj.y,
              y2: obj.y + obj.height
            };
          })));
        }
      });
      this.images[name] = mapImage;
      return new _tite_map__WEBPACK_IMPORTED_MODULE_1__["TileMap"]({
        imageName: name,
        sourceX: 0,
        sourceY: 0,
        width: mapImage.width,
        height: mapImage.height,
        hitboxes: hitboxes
      });
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      this.context.fillStyle = '#FFFFFF';
      this.context.font = '22px Georgia';
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      var spriteX = sprite.x;
      var spriteY = sprite.y;

      if (this.isCameraSet) {
        spriteX -= this.camera.x;
        spriteY -= this.camera.y;
      }

      if (spriteX >= this.width || spriteY >= this.height || spriteX + sprite.width <= 0 || spriteY + sprite.height <= 0) {
        return;
      }

      var sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
      var sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
      var width = Math.min(this.width, spriteX + sprite.width) - Math.max(0, spriteX);
      var height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);
      this.context.drawImage(this.images[sprite.imageName], sourceX, sourceY, width, height, Math.max(0, spriteX), Math.max(0, spriteY), width, height);
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/sprite-sheet.js":
/*!*****************************!*\
  !*** ./src/sprite-sheet.js ***!
  \*****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(SpriteSheet, [{
    key: "getAnimation",
    value: function getAnimation(indexes, speed) {
      var _this = this;

      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (index) {
          return {
            sx: _this.getSourceX(index),
            sy: _this.getSourceY(index)
          };
        }),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/text-info.js":
/*!**************************!*\
  !*** ./src/text-info.js ***!
  \**************************/
/*! exports provided: TextInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInfo", function() { return TextInfo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextInfo =
/*#__PURE__*/
function () {
  function TextInfo(screen) {
    _classCallCheck(this, TextInfo);

    this.x = 0;
    this.y = 0;
    this.screen = screen;
    this.showTextBoolean = false; // Показывать ли текст

    this.text = '';
    this.lastTime = 0;
    this.howLongToShow = 5000; // Сколько времени показывать текст

    this.timeToStop = 0; // Время когда нужно завершить показ

    this.fontSize = 0;
    this.startFontSize = 150;
  }

  _createClass(TextInfo, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.showTextBoolean) {
        this.fontSize -= (time - this.lastTime) / 10;
        this.setXY();
        this.screen.print(this.x, this.y, this.text, this.fontSize);

        if (time > this.timeToStop) {
          this.showTextBoolean = false;
        }
      }

      this.lastTime = time;
    }
  }, {
    key: "showText",
    value: function showText(text, time) {
      this.text = text;
      this.showTextBoolean = true;
      this.timeToStop = time + this.howLongToShow;
      this.fontSize = this.startFontSize;
      this.setXY();
    }
  }, {
    key: "setXY",
    value: function setXY() {
      this.x = this.screen.width / 2 - this.fontSize * 1.5;
      this.y = this.screen.height / 2 + this.fontSize / 4.5;
    }
  }]);

  return TextInfo;
}();

/***/ }),

/***/ "./src/tite-map.js":
/*!*************************!*\
  !*** ./src/tite-map.js ***!
  \*************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TileMap =
/*#__PURE__*/
function (_Sprite) {
  _inherits(TileMap, _Sprite);

  function TileMap(props) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileMap).call(this, props));
    _this.hitboxes = props.hitboxes || [];
    return _this;
  }

  return TileMap;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/training.js":
/*!*************************!*\
  !*** ./src/training.js ***!
  \*************************/
/*! exports provided: showTraining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTraining", function() { return showTraining; });
function showTraining() {
  $('#exampleModal').modal('show'); // $('#staticBackdrop').modal('handleUpdate');
}

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector =
/*#__PURE__*/
function () {
  function Vector(direction, speed) {
    _classCallCheck(this, Vector);

    this.setDirection(direction, speed);
  }

  _createClass(Vector, [{
    key: "setDirection",
    value: function setDirection(direction, speed) {
      this.direction = direction;
      this.speed = speed;
      this.x = 0;
      this.y = 0;

      switch (direction) {
        case 'up':
          this.y = -speed;
          break;

        case 'down':
          this.y = speed;
          break;

        case 'right':
          this.x = speed;
          break;

        case 'left':
          this.x = -speed;
          break;
      }
    }
  }, {
    key: "move",
    value: function move(object, dt) {
      object.x += dt * (this.x / 1000);
      object.y += dt * (this.y / 1000);
    }
  }]);

  return Vector;
}();

/***/ }),

/***/ "./src/waves.js":
/*!**********************!*\
  !*** ./src/waves.js ***!
  \**********************/
/*! exports provided: Waves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waves", function() { return Waves; });
/* harmony import */ var _orc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orc */ "./src/orc.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Waves =
/*#__PURE__*/
function () {
  function Waves(game) {
    _classCallCheck(this, Waves);

    this.game = game;
    this.orcArmy = game.currentScene.orcArmy; // Массив, содержащий всех существующих орков. Этот класс пополняет этот массив новыми орками

    this.collider = game.currentScene.collider; // Будем добавлять орков в коллайдер

    this.player = game.currentScene.player; // Передаём игрока, чтобы орк мог следить за ним и атаковать его

    this.lastTime = 0;
    this.timeLeftForNextWave = 500; // Таймер для обратного отсчёта. Первая волна начнётся через 1000 мс

    this.timeForNextWave = 10000; // Константа, следующая волная будет через это время
  }

  _createClass(Waves, [{
    key: "init",
    value: function init() {// this.waves = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.timeLeftForNextWave < 0) {
        this.nextWave(time);
      }

      this.timeLeftForNextWave -= time - this.lastTime;
      this.lastTime = time;
    }
  }, {
    key: "nextWave",
    value: function nextWave(time) {
      var _this = this;

      var orcSquad = []; // Создать за один раз нескольких орков

      for (var i = 0; i < 2; i++) {
        var orc = new _orc__WEBPACK_IMPORTED_MODULE_0__["Orc"](this.player); // Передаём игрока, чтобы орк мог следить за ним и атаковать его

        orc.x = 1246; // После отладки сделай 1350

        orc.y = 1030 + i * 70;
        orcSquad.push(orc);
      }

      orcSquad.forEach(function (orc) {
        _this.collider.addKinematicBody(orc);

        _this.orcArmy.push(orc);
      });
      this.timeLeftForNextWave = this.timeForNextWave;
    }
  }]);

  return Waves;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9lbmRTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9pc0FncmVzc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWlzL3BlYWNlZnVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FtZXJhLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFyYWN0ZXItc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXQtcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwtZGlhbG9ndWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld0xldmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9vcmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0LXBlcnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVtb3ZlLWZyb20tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtd2luLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGl0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYWluaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVzLmpzIl0sIm5hbWVzIjpbIkFJIiwiYm9keSIsInRpbWUiLCJEdW1teSIsImR1cmF0aW9uIiwiZGlyZWN0aW9uIiwibGFzdFRpbWUiLCJzcGxpdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoYW5nZURpcmVjdGlvbiIsIndhbGsiLCJFbmRTY3JpcHQiLCJldmVudFRpbWUiLCJldmVudFN0YXJ0IiwiaGl0Iiwic3RhbmQiLCJpc0FncmVzc2l2ZSIsImFncmVzc2l2ZSIsIlBlYWNlZnVsIiwicGxheWVyIiwibGFzdFRpbWVEdW1iIiwic3R1Y2siLCJjaGFuZ2VXYXlJbml0IiwiY2hhbmdlV2F5Iiwib2xkWCIsIm9sZFkiLCJsYXN0VGltZUFncmVzc2l2ZSIsImR1cmF0aW9uQWdyZXNzaXZlIiwidGltZU9mTWFyY2giLCJpc09yY0FncmVzc2l2ZSIsImFncmVzc2l2ZUJlaGF2aW91ciIsImlzU3R1Y2siLCJkdW1iQmVoYXZpb3VyIiwiY29ycmVjdGlvbiIsIngiLCJjb2xsaXNpb25TaGFwZSIsIndpZHRoIiwieSIsImhlaWdodCIsImF0dGFjayIsImNoYW5nZUFncmVzc2l2ZURpcmVjdGlvbiIsImdldEhpdCIsIkFuaW1hdGlvbiIsImltYWdlTmFtZSIsImZyYW1lcyIsInNwZWVkIiwicmVwZWF0IiwiYXV0b3J1biIsInNvdXJjZVgiLCJzeCIsInNvdXJjZVkiLCJzeSIsInJ1bm5pbmciLCJjdXJyZW50RnJhbWUiLCJ0b3RhbEZyYW1lcyIsImxlbmd0aCIsIm9uRW5kIiwiaW5kZXgiLCJzZXRGcmFtZSIsInN0b3AiLCJuZXh0RnJhbWUiLCJTcHJpdGUiLCJnYW1lQXVkaW8iLCJBdWRpbyIsImdhbWVBdWRpb1dpbiIsImFycm93UGxheUF1ZGlvIiwic291bmQiLCJzcmMiLCJwbGF5Iiwic3dvcmRQbGF5QXVkaW8iLCJ2b2x1bWUiLCJkZWF0aE9yY1BsYXlBdWRpbyIsImdhbWVPdmVyUGxheUF1ZGlvIiwiZ2FtZVdpblBsYXlBdWRpbyIsInN0YXRlIiwicGF1c2UiLCJnYW1lUGxheUF1ZGlvIiwibG9vcCIsIkJvZHkiLCJ2ZWxvY2l0eSIsIlZlY3RvciIsImFuaW1hdGlvbnMiLCJpc1Nob290aW5nIiwiaXNIaXR0aW5nIiwiYW5pbWF0aW9uU2hlZXQiLCJDaGFyYWN0ZXJTaGVldCIsImZvckVhY2giLCJuYW1lIiwiZ2V0QW5pbWF0aW9uIiwiYXJyb3ciLCJ2aWV3IiwiZmx5IiwicnVuIiwic2V0RGlyZWN0aW9uIiwiZGVhdGgiLCJtb3ZlIiwic2V0WFkiLCJ0cnVuYyIsInVwZGF0ZSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1pbiIsIm1heCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInNlcXVlbmNlcyIsImdldFNlcXVlbmNlcyIsImRhdGEiLCJyZXF1aXJlIiwibGF5ZXJzIiwibGF5ZXIiLCJmaWx0ZXIiLCJpIiwiU3ByaXRlU2hlZXQiLCJDb2xsaWRlciIsInN0YXRpY1NoYXBlcyIsImJvZGllcyIsInR5cGUiLCJwdXNoIiwib2JqZWN0cyIsImNoZWNrQ29sbGlzaW9uIiwic2hhcGUiLCJjaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyIsImoiLCJjaGVja0ludGVyYWN0aXZlIiwiaW5kZXhPZkJvZHkiLCJpbmRleE9mU2hhcGUiLCJoYXNPd25Qcm9wZXJ0eSIsIlJlbW92ZUZyb21BcnJheSIsInJlbW92ZSIsImRlbGV0ZSIsIkNvbnRyb2xTdGF0ZSIsInVwIiwiZG93biIsImxlZnQiLCJyaWdodCIsImZpcmUiLCJrZXlNYXAiLCJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXNzZWQiLCJoYXMiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJHYW1lIiwic2NyZWVuIiwiU2NyZWVuIiwibG9hZEltYWdlcyIsIm9yYyIsImVsZiIsInRpdGxlX2JnIiwidGl0bGVfbmFtZSIsInRpdGxlX3N0YXJ0IiwidGl0bGVfb3B0aW9uIiwidGl0bGVfZXhpdCIsInlvdV93aW4iLCJnYW1lX292ZXIiLCJ0aWxlcyIsInRpbGVzMiIsInF1ZXN0X3BlcnNvbiIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiZ2FtZU92ZXIiLCJHYW1lT3ZlciIsImdhbWVXaW4iLCJHYW1lV2luIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIkdBTUVfT1ZFUiIsIkdBTUVfV0lOIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJhbGxEZWF0aE9ya3MiLCJzaG93UXVlc3RJbnRlcmZhY2UiLCJzaG93UGFzc2FnZUR1bmdlb24iLCJ1cGRhdGVRdWVzdCIsImdldFF1ZXN0IiwicXVlc3TQoW9tcGxldGVkIiwiZGVhdGhPcmNzIiwiSW1hZ2VMb2FkZXIiLCJpbWFnZUZpbGVzIiwiaW1hZ2VzIiwicHJvbWlzZXMiLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwicmVzb2x2ZSIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aW5kb3ciLCJlbHZlblNjb3V0IiwiSW50ZXJmYWNlIiwiZ2FtZSIsIndhdmVzIiwidGV4dEluZm8iLCJUZXh0SW5mbyIsImNvbnRleHQiLCJmaWdodFRleHRTaG93ZWQiLCJvcmNzS2lsbGVkIiwid2lkdGhIZWFsdGhMaW5lIiwiZW5kT3BhY2l0eSIsInNob3dIZWFsdGhMaW5lIiwicXVlc3RJbnRlcmZhY2UiLCJwYXNzYWdlRHVuZ2VvbiIsImhlYWx0aCIsImVuZEdhbWUiLCJmaWdodFRleHQiLCJzaG93VGV4dCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwibGluZVdpZHRoIiwicmVjdCIsImZpbGxSZWN0IiwiaGVhbHRoU3RhcnQiLCJzdHJva2UiLCJmb250IiwiZmlsbFRleHQiLCJvcGFjaXR5IiwiZ2FtZU92ZXJUcmlnZ2VyIiwid2luVHJpZ2dlciIsIlRBS0VfUVVFU1QiLCJnZXRFbGVtZW50QnlJZCIsIkFEQU5ET05fVEhFX1FVRVNUIiwicnVuT25jZVF1ZXN0Iiwib25jbGljayIsImNvbnNvbGUiLCJsb2ciLCIkIiwibW9kYWwiLCJzaG93TW9kYWxEaWFsb2ciLCJ1cGRhdGVNb2RhbERpYWxvZyIsIm5leHRMZXZlbEluZm8iLCJPcmMiLCJhaVR5cGUiLCJhaSIsImJlY29tZUFncmVzc2l2ZSIsIlBsYXllciIsImdhbWVfbGV2ZWwiLCJ0aW1lQXJyb3ciLCJ0aW1lckZvckNyZWF0aW5nQXJyb3ciLCJsYXN0VGltZUZvckFycm93IiwidW5kZWFkIiwidGltZXJVbmRlYWQiLCJsYXN0VGltZUZvclVuZGVhZCIsInNob290aW5nIiwic2hvb3QiLCJQcm9qZWN0aWxlIiwiYWN0aXZlIiwiZGVsZXRlZCIsIkFycm93Iiwic3ByaXRlcyIsImdldFNwcml0ZSIsIlF1ZXN0UGVyc29uIiwiYXJyIiwiaW5kZXhlcyIsImFycmF5T2ZJbmRleGVzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiaXRlbSIsImluZGV4T2YiLCJjb25zdHJ1Y3RvciIsImJlY29tZVBlYWNlZnVsIiwicXVlc3RQZXJzb24iLCJjb2xsaWRlciIsIm1hcERhdGEiLCJtYXAiLCJjcmVhdGVNYXAiLCJtYWluQ2FtZXJhIiwic3BlY2lhbFBvc2l0aW9uIiwid2F0Y2giLCJzZXRDYW1lcmEiLCJhZGRTdGF0aWNTaGFwZXMiLCJhZGRLaW5lbWF0aWNCb2R5Iiwib3JjQXJteSIsIldhdmVzIiwiaW50ZXJmYWNlIiwicHJvamVjdGlsZXMiLCJzaG93VHJhaW5pbmciLCJmaW5pc2giLCJmaWxsIiwiZHJhd1Nwcml0ZSIsImFkZEFycm93Iiwic2V0VGltZW91dCIsImVudGVyIiwiZHJhd0ltYWdlIiwibG9hZGVkQXQiLCJpc0ltYWdlc0xvYWRlZCIsInByaW50IiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiZ2V0Q29udGV4dCIsImNhbWVyYSIsImlzQ2FtZXJhU2V0IiwiYWRkU3R5bGVzVG9DYW52YXMiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRpbGVzZXQiLCJtYXBJbWFnZSIsInRpbGV3aWR0aCIsInRpbGVoZWlnaHQiLCJtYXBDb250ZXh0IiwiaGl0Ym94ZXMiLCJyb3ciLCJjb2wiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIngxIiwieDIiLCJ5MSIsInkyIiwiVGlsZU1hcCIsImNvbG9yIiwidGV4dCIsInNwcml0ZSIsInNwcml0ZVgiLCJzcHJpdGVZIiwiYWJzIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJzaG93VGV4dEJvb2xlYW4iLCJob3dMb25nVG9TaG93IiwidGltZVRvU3RvcCIsImZvbnRTaXplIiwic3RhcnRGb250U2l6ZSIsInByb3BzIiwib2JqZWN0IiwiZHQiLCJ0aW1lTGVmdEZvck5leHRXYXZlIiwidGltZUZvck5leHRXYXZlIiwibmV4dFdhdmUiLCJvcmNTcXVhZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU1BLEVBQWI7QUFBQTtBQUFBO0FBQ0UsZ0JBQWM7QUFBQTs7QUFDWixTQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNEOztBQUhIO0FBQUE7QUFBQSw0QkFLVUEsSUFMVixFQUtnQjtBQUNaLFdBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNEO0FBUEg7QUFBQTtBQUFBLDJCQVNTQyxJQVRULEVBU2UsQ0FFWjtBQVhIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRU8sSUFBTUMsS0FBYjtBQUFBO0FBQUE7QUFB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dUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsWUFBTXdDLEdBQUcsR0FBRyxJQUFJa0csd0NBQUosQ0FBUSxLQUFLM08sTUFBYixDQUFaLENBRDBCLENBQ087O0FBQ2pDeUksV0FBRyxDQUFDMUgsQ0FBSixHQUFRLElBQVIsQ0FGMEIsQ0FFYjs7QUFDYjBILFdBQUcsQ0FBQ3ZILENBQUosR0FBUSxPQUFPK0UsQ0FBQyxHQUFHLEVBQW5CO0FBQ0E0UCxnQkFBUSxDQUFDdFAsSUFBVCxDQUFja0MsR0FBZDtBQUNEOztBQUNEb04sY0FBUSxDQUFDMVIsT0FBVCxDQUFpQixVQUFDc0UsR0FBRCxFQUFTO0FBQ3hCLGFBQUksQ0FBQ2tJLFFBQUwsQ0FBY1MsZ0JBQWQsQ0FBK0IzSSxHQUEvQjs7QUFDQSxhQUFJLENBQUM0SSxPQUFMLENBQWE5SyxJQUFiLENBQWtCa0MsR0FBbEI7QUFDRCxPQUhEO0FBS0EsV0FBS2lOLG1CQUFMLEdBQTJCLEtBQUtDLGVBQWhDO0FBQ0Q7QUF6Q0g7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQUkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvZHkgPSBudWxsO1xuICB9XG5cbiAgY29udHJvbChib2R5KSB7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgQUkgfSBmcm9tICcuLi9haSc7XG5cbmV4cG9ydCBjbGFzcyBEdW1teSBleHRlbmRzIEFJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmR1cmF0aW9uID0gMTAwMDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgfVxuXG4gIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duLHVwLGxlZnQscmlnaHQnLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG4gICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQUkgfSBmcm9tICcuLi9haSc7XG5cbmV4cG9ydCBjbGFzcyBFbmRTY3JpcHQgZXh0ZW5kcyBBSSB7XG4gIGNvbnN0cnVjdG9yKCkgeyAvLyDQl9C00LXRgdGMINGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INC/0LDRgNCw0LzQtdGC0YDRiywg0L3QsNC/0YDQuNC80LXRgCwg0LrQsNC60LjQtSDQt9Cw0LTQsNGH0Lgg0YMg0L/QtdGA0YHQvtC90LDQttCwLCDQtdCz0L4g0L/QsNC80Y/RgtGMLCDRh9GC0L4g0LTQtdC70LDQtdGCINC/0YDRj9C80L4g0YHQtdC50YfQsNGBINC4INGCLtC0LlxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgdGhpcy5ldmVudFRpbWUgPSAxNTAwO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuZXZlbnRTdGFydCA9IGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG4gICAgdGhpcy5ldmVudFRpbWUgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICBpZiAoIXRoaXMuZXZlbnRTdGFydCkgeyAvLyDQldGB0LvQuCDRgdC+0LHRi9GC0LjQtSDQtdGI0ZEg0L3QtSDQvdCw0YfQsNC70L7RgdGMXG4gICAgICBpZiAodGhpcy5ldmVudFRpbWUgPCAwKSB7XG4gICAgICAgIHRoaXMuZXZlbnRTdGFydCA9IHRydWU7Ly8g0JLRgNGD0LHQsNC10Lwg0YHQvtCx0YvRgtC40LVcbiAgICAgICAgdGhpcy5ib2R5LmhpdCh0aGlzLmRpcmVjdGlvbik7Ly8g0KHQvtCx0YvRgtC40LUgLSDQvtGA0Log0LHRjNGR0YJcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9keS53YWxrKHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib2R5LnN0YW5kKHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICBzdXBlci51cGRhdGUodGltZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBpc0FncmVzc2l2ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgc3RhdGljIGJlY29tZUFncmVzc2l2ZSgpIHtcbiAgICB0aGlzLmFncmVzc2l2ZSA9IHRydWU7XG4gIH1cblxuICBzdGF0aWMgYmVjb21lUGVhY2VmdWwoKSB7XG4gICAgdGhpcy5hZ3Jlc3NpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBpc09yY0FncmVzc2l2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hZ3Jlc3NpdmU7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFJIH0gZnJvbSAnLi4vYWknO1xuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuL2lzQWdyZXNzaXZlJztcblxuZXhwb3J0IGNsYXNzIFBlYWNlZnVsIGV4dGVuZHMgQUkge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHsgLy8g0JfQtNC10YHRjCDRhdGA0LDQvdGP0YLRgdGPINCy0YHQtSDQv9Cw0YDQsNC80LXRgtGA0YssINC90LDQv9GA0LjQvNC10YAsINC60LDQutC40LUg0LfQsNC00LDRh9C4INGDINC/0LXRgNGB0L7QvdCw0LbQsCwg0LXQs9C+INC/0LDQvNGP0YLRjCwg0YfRgtC+INC00LXQu9Cw0LXRgiDQv9GA0Y/QvNC+INGB0LXQudGH0LDRgSDQuCDRgi7QtC5cbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZHVyYXRpb24gPSAxMDUwOy8vINCc0LXQvdGP0LXRgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC60LDQttC00YvQtSAxMDAwINC80YFcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICB0aGlzLmxhc3RUaW1lRHVtYiA9IDA7Ly8g0JrQvtCz0LTQsCDQsiDQv9C+0YHQu9C10LTQvdC40Lkg0YDQsNC3INC80LXQvdGP0Lsg0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyOy8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxuXG4gICAgdGhpcy5zdHVjayA9IGZhbHNlOy8vINCV0YHQu9C4IHRydWUsINC+0YDQuiDRg9C/0LXRgNGB0Y8g0LIg0YHRgtC10L3Rg1xuICAgIHRoaXMuY2hhbmdlV2F5SW5pdCA9IDUwMDsvLyDQldGB0LvQuCDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtSwg0Y3RgtC+INCy0YDQtdC80Y8g0L7QvSDQtNCy0LjQs9Cw0LXRgtGB0Y8g0LIg0LvRjtCx0L7QvCDQtNGA0YPQs9C+0Lwg0L3QsNC/0YDQsNCy0LvQtdC90LjQuCDQsiDQvdCw0LTQtdC20LTQtSDQvtCx0L7QudGC0Lgg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxuICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xuICAgIHRoaXMub2xkWCA9IDA7Ly8g0JIg0Y3RgtC4INC/0LXRgNC10LzQtdC90L3Ri9C1INCx0YPQtNC10Lwg0L/QuNGB0LDRgtGMINGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiy4g0JXRgdC70Lgg0L3QvtCy0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDRgNCw0LLQvdGLINGB0YLQsNGA0YvQvCwg0LfQvdCw0YfQuNGCINC+0YDQuiDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxuICAgIHRoaXMub2xkWSA9IDA7XG5cbiAgICB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uQWdyZXNzaXZlID0gNTAwOy8vINCd0LDRgdC60L7Qu9GM0LrQviDRh9Cw0YHRgtC+INC80LXQvdGP0Y7RgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INCw0LPRgNC10YHRgdC40LLQvdGL0LUg0L7RgNC60LhcbiAgICB0aGlzLnRpbWVPZk1hcmNoID0gNDU2MDsvLyDQmtC+0LPQtNCwINC+0YDQuiDRgtC+0LvRjNC60L4g0L/QvtGP0LLQuNC70YHRjywg0Y3RgtC+INCy0YDQtdC80Y8g0L7QvSDQv9GA0L7RgdGC0L4g0LTQstC40LbQtdGC0YHRjyDQsiDQvtC00L3QvtC8INC90LDQv9GA0LDQstC70LXQvdC40LguINCf0L7RgdC70LUgLSDQvdCw0YfQuNC90LDQtdGCINC00LXQudGB0YLQstC+0LLQsNGC0Ywg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3QvlxuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKCkgeyAvLyDQntC00LjQvSDQuNC3INCx0LvQvtC60L7QsiDQv9GA0LjQvdGP0YLQuNGPINGA0LXRiNC10L3QuNC5XG4gICAgdGhpcy5kaXJlY3Rpb24gPSAndXAsbGVmdCcuc3BsaXQoJywnKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWVPZk1hcmNoID4gMCkgeyAvLyDQntGA0Log0LXRidGRINC80LDRgNGI0LjRgNGD0LXRgiwg0YIu0LUuINC30LDRhdC+0LTQuNGCINC90LAg0LvQvtC60LDRhtC40Y5cbiAgICAgIHRoaXMudGltZU9mTWFyY2ggLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0dWNrKSB7IC8vINCV0YHQu9C4INC+0YDQuiDQt9Cw0YHRgtGA0Y/Quywg0LTQsNC70YzQvdC10LnRiNC40YUg0L/RgNC+0LLQtdGA0L7QuiBlbHNlIGlmINC90LUg0LHRg9C00LXRglxuICAgICAgdGhpcy5jaGFuZ2VXYXkgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgICBpZiAodGhpcy5jaGFuZ2VXYXkgPCAwKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xuICAgICAgICB0aGlzLnN0dWNrID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FncmVzc2l2ZS5pc09yY0FncmVzc2l2ZSgpKSB7IC8vINCf0YDQvtCy0LXRgNC60LAg0L7RgNC60LAg0L3QsCDQsNCz0YDQtdGB0YHQuNGOXG4gICAgICB0aGlzLmFncmVzc2l2ZUJlaGF2aW91cih0aW1lKTtcbiAgICAgIHRoaXMuaXNTdHVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR1bWJCZWhhdmlvdXIodGltZSk7XG4gICAgICB0aGlzLmlzU3R1Y2soKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB0aGlzLmJvZHkud2Fsayh0aGlzLmRpcmVjdGlvbik7XG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xuICB9XG5cbiAgZHVtYkJlaGF2aW91cih0aW1lKSB7XG4gICAgaWYgKCh0aW1lIC0gdGhpcy5sYXN0VGltZUR1bWIpID4gdGhpcy5kdXJhdGlvbikge1xuICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICAgIHRoaXMubGFzdFRpbWVEdW1iID0gdGltZTtcbiAgICB9XG4gIH1cblxuICBhZ3Jlc3NpdmVCZWhhdmlvdXIodGltZSkge1xuICAgIGNvbnN0IGNvcnJlY3Rpb24gPSAxMDsvLyDQvtGA0Log0LHRjNGR0YIg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQuCA1LCDQtdC80YMg0L3QtSDQvdGD0LbQvdC+INCx0YvRgtGMINCy0L/Qu9C+0YLQvdGD0Y4g0Log0LjQs9GA0L7QutGDICjQuNC90LDRh9C1INC+0YDQuiDQsdGM0ZHRgiDRgtC+0LvRjNC60L4g0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuCDRgSDQuNCz0YDQvtC60L7QvCwg0LAg0L7RgNC60Lgg0LjQt9Cx0LXQs9Cw0Y7RgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LkpXG4gICAgaWYgKHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnggLSBjb3JyZWN0aW9uIDwgdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnggKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS53aWR0aFxuICAgICAgJiYgdGhpcy5ib2R5LnggKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueCArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS53aWR0aCArIGNvcnJlY3Rpb24gPiB0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUueFxuICAgICAgJiYgdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueSAtIGNvcnJlY3Rpb24gPCB0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLmhlaWdodFxuICAgICAgJiYgdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueSArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS5oZWlnaHQgKyBjb3JyZWN0aW9uID4gdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnkpIHsgdGhpcy5hdHRhY2soKTsgfVxuICAgIC8vIH1cbiAgICBpZiAoKHRpbWUgLSB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlKSA+IHRoaXMuZHVyYXRpb25BZ3Jlc3NpdmUpIHtcbiAgICAgIHRoaXMuY2hhbmdlQWdyZXNzaXZlRGlyZWN0aW9uKCk7XG4gICAgICB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlID0gdGltZTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYm9keS54ID49IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPj0gdGhpcy5wbGF5ZXIueSkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmJvZHkueCA8IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPj0gdGhpcy5wbGF5ZXIueSkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5ib2R5LnggPCB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55IDwgdGhpcy5wbGF5ZXIueSkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmJvZHkueCA+PSB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55IDwgdGhpcy5wbGF5ZXIueSkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc1N0dWNrKCkgeyAvLyDQn9GA0L7QstC10YDQutCwLCDQstC+0LfQvNC+0LbQvdC+INC+0YDQuiDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxuICAgIGlmICh0aGlzLmJvZHkueCA9PSB0aGlzLm9sZFggJiYgdGhpcy5ib2R5LnkgPT0gdGhpcy5vbGRZKSB7XG4gICAgICB0aGlzLnN0dWNrID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAndXAnIHx8IHRoaXMuZGlyZWN0aW9uID09ICdkb3duJykge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0JyB8fCB0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpIHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9sZFggPSB0aGlzLmJvZHkueDtcbiAgICB0aGlzLm9sZFkgPSB0aGlzLmJvZHkueTtcbiAgfVxuXG4gIGF0dGFjaygpIHtcbiAgICB0aGlzLmJvZHkuaGl0KCk7XG4gICAgdGhpcy5wbGF5ZXIuZ2V0SGl0KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpbWFnZU5hbWUsIGZyYW1lcywgc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlLCB3aWR0aCA9IDY0LCBoZWlnaHQgPSA2NCxcbiAgfSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGltYWdlTmFtZSxcbiAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcbiAgICAgIHNvdXJjZVk6IGZyYW1lc1swXS5zeSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7Ly8g0LLRgNC10LzRjyDQvtGCINC/0L7RgdC70LXQtNC90LXQs9C+INGE0YDQtdC50LzQsCDQsNC90LjQvNCw0YbQuNC4XG4gICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xuICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XG5cbiAgICAvKiDQlNC70Y8g0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINC/0L7RgdC70LXQtNC90LXQs9C+INC60LDQtNGA0LAuINCd0LDQv9GA0LjQvNC10YAsINC/0L7RgdC70LUg0L/QvtGB0LvQtdC00L3QtdCz0L4g0LrQsNC00YDQsCDQsNC90LjQvNCw0YbQuNC4INGB0YLRgNC10LvRjNCx0YssINC/0LXRgNGB0L7QvdCw0LYg0L/QtdGA0LXRgdGC0LDRkdGCINGB0YLRgNC10LvRj9GC0YxcbiAgICDQrdGC0LAg0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LfQsNC00LDQtdGC0YHRjyDQsiDQutC70LDRgdGB0LUgQm9keS4g0J3QsNC/0YDQuNC80LXRgDogdGhpcy52aWV3Lm9uRW5kID0gKCk9PnRoaXMuaXNTaG9vdGluZyA9IGZhbHNlOyAqL1xuICAgIHRoaXMub25FbmQgPSBudWxsO1xuICB9XG5cbiAgc2V0RnJhbWUoaW5kZXgpIHtcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xuICAgIHRoaXMuc291cmNlWCA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeDtcbiAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XG4gIH1cblxuICBydW4oKSB7IC8vINCh0YLQsNGA0YIg0LDQvdC40LzQsNGG0LjQuCDRgSDRgdCw0LzQvtCz0L4g0L3QsNGH0LDQu9CwXG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICBuZXh0RnJhbWUoKSB7XG4gICAgaWYgKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC/0L7RgdC70LXQtNC90LjQuSDQutCw0LTRgCwg0YLQvi4uLlxuICAgICAgaWYgKHRoaXMub25FbmQpIHsgLy8gLi4u0LXRgdC70Lgg0LfQsNC00LDQvdCwINC60L7QvdGG0L7QstC60LAsINC30LDQv9GD0YHQutCw0LXQvC4g0J3QsNC/0YDQuNC80LXRgDogdGhpcy52aWV3Lm9uRW5kID0gKCk9PnRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXBlYXQpIHsgLy8gLi4uINC10YHQu9C4INC30LDQtNCw0L0g0L/QvtCy0YLQvtGALCDQv9C+0LLRgtC+0YDRj9C10LxcbiAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zdG9wKCk7Ly8gLi4uINC40L3QsNGH0LUgLSDRgdGC0L7QvyDQsNC90LjQvNCw0YbQuNGPXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RnJhbWUodGhpcy5jdXJyZW50RnJhbWUgKyAxKTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkgeyAvLyDQrdGC0LAg0L/RgNC+0LLQtdGA0LrQsCDQvdGD0LbQvdCwINGC0L7Qu9GM0LrQviDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LLRi9C30L7QstCwIHVwZGF0ZSgpLCDRh9GC0L7QsdGLINC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDRgtGMIHRoaXMubGFzdFRpbWVcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5zcGVlZCkgeyAvLyDQoNCw0LfQvdC40YbQsCDQv9C+INCy0YDQtdC80LXQvdC4INC80LXQttC00YMg0L/RgNC+0YjQu9GL0Lwg0Lgg0YLQtdC60YPRidC40Lwg0LrQsNC00YDQvtC8OiAoMTEtMik+MTAsICgxMi0yKT4xMCwgKDEzLTIpPjEwIC0g0LfQtNC10YHRjCDQv9GA0L7RiNC70L4gMTDQvNGBLCDQsCBzcGVlZCDQsiDRjdGC0L7QvCDQv9GA0LjQvNC10YDQtSDQutCw0Log0YDQsNC3INGA0LDQstC10L0gMTDQvNGBLCDQt9C90LDRh9C40YIg0LzQtdC90Y/QtdC8INC60LDQtNGAXG4gICAgICB0aGlzLm5leHRGcmFtZSgpO1xuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBnYW1lQXVkaW8gPSBuZXcgQXVkaW8oJ2F1ZGlvL2dhbWUubXAzJyk7XG5jb25zdCBnYW1lQXVkaW9XaW4gPSBuZXcgQXVkaW8oJ2F1ZGlvL3dpbi5tcDMnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93UGxheUF1ZGlvKCkge1xuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xuICBzb3VuZC5zcmMgPSAnYXVkaW8vYXJyb3cubXAzJztcbiAgcmV0dXJuIHNvdW5kLnBsYXkoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3b3JkUGxheUF1ZGlvKCkge1xuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xuICBzb3VuZC5zcmMgPSAnYXVkaW8vc3dvcmQubXAzJztcbiAgc291bmQudm9sdW1lID0gMC4yO1xuICByZXR1cm4gc291bmQucGxheSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVhdGhPcmNQbGF5QXVkaW8oKSB7XG4gIGNvbnN0IHNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gIHNvdW5kLnNyYyA9ICdhdWRpby9kZWF0aC1vcmMubXAzJztcbiAgc291bmQudm9sdW1lID0gMC4xO1xuICByZXR1cm4gc291bmQucGxheSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtZU92ZXJQbGF5QXVkaW8oKSB7XG4gIGNvbnN0IHNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gIHNvdW5kLnNyYyA9ICdhdWRpby9nYW1lLW92ZXIubXAzJztcbiAgc291bmQudm9sdW1lID0gMC40O1xuICByZXR1cm4gc291bmQucGxheSgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVXaW5QbGF5QXVkaW8oc3RhdGUpIHtcbiAgZ2FtZUF1ZGlvV2luLnZvbHVtZSA9IDAuMTtcbiAgaWYgKHN0YXRlID09IHRydWUpIHtcbiAgICBnYW1lQXVkaW9XaW4ucGxheSgpO1xuICB9IGVsc2Uge1xuICAgIGdhbWVBdWRpb1dpbi5wYXVzZSgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnYW1lUGxheUF1ZGlvKHN0YXRlKSB7XG4gIGdhbWVBdWRpby52b2x1bWUgPSAwLjE7XG4gIGdhbWVBdWRpby5sb29wID0gdHJ1ZTtcbiAgaWYgKHN0YXRlID09IHRydWUpIHtcbiAgICBnYW1lQXVkaW8ucGxheSgpO1xuICB9IGVsc2Uge1xuICAgIGdhbWVBdWRpby5wYXVzZSgpO1xuICB9XG59XG4iLCIvLyDQntGB0L3QvtCy0LAg0LLRgdC10YUg0L/QtdGA0YHQvtC90LDQttC10LlcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJy4vdmVjdG9yJztcbmltcG9ydCB7IENoYXJhY3RlclNoZWV0IH0gZnJvbSAnLi9jaGFyYWN0ZXItc2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgQm9keSB7Ly8gUGxheWVyIC0+IEJvZHkgfiBDaGFyYWN0ZXJTaGVldCAtPiBTcHJpdGVTaGVldCB+IFNwcml0ZVxuICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSwgc3BlZWQgfSkge1xuICAgIHRoaXMueCA9IC0xMDA7Ly8g0J/QvtC70L7QttC10L3QuNC1INC+0LHRitC10LrRgtCwXG4gICAgdGhpcy55ID0gLTEwMDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7Ly8g0KHQutC+0YDQvtGB0YLRjCDQv9C10YDQtdC80LXRidC10L3QuNGPXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoJ2xlZnQnLCAwKTsvLyDQndCw0L/RgNCw0LLQu9C10L3QuNC1INC/0LXRgNC10LzQtdGJ0LXQvdC40Y9cbiAgICB0aGlzLmxhc3RUaW1lID0gMDsvLyDQktGA0LXQvNGPINC/0L7RgdC70LXQtNC90LXQs9C+INC60LDQtNGA0LBcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTsvLyDQmtC+0L3RgtC10LnQvdC10YAg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuSB7d2Fsa19kb3duOiAuLiwgd2Fsa191cDogLi4g0Lgg0YIu0LQuIH1cblxuICAgIC8vINCk0L7RgNC80LAsINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQtNC70Y8g0LrQvtC70LvQuNC30LjQuC4g0J7QvdCwINC90LDRh9C40L3QsNC10YLRgdGPINC90LUg0L7RgiDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDRgdC/0YDQsNC50YLQsCwg0LAg0L7RgiB4OiAxOCwgeTogMTVcbiAgICB0aGlzLmNvbGxpc2lvblNoYXBlID0ge1xuICAgICAgeDogMTgsIHk6IDE1LCB3aWR0aDogMjgsIGhlaWdodDogNDksXG4gICAgfTtcblxuICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNIaXR0aW5nID0gZmFsc2U7XG5cbiAgICAvLyDQl9Cw0LPRgNGD0LbQsNC10Lwg0L3QtdC+0LHRhdC+0LTQvNGL0LUg0LDQvdC40LzQsNGG0LjQuCDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0L/QtdGA0YHQvtC90LDQttCwXG4gICAgY29uc3QgYW5pbWF0aW9uU2hlZXQgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoeyBpbWFnZU5hbWUgfSk7XG4gICAgJ3dhbGtfZG93bix3YWxrX3VwLHdhbGtfbGVmdCx3YWxrX3JpZ2h0Jy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lKTsvLyDQkiDQuNGC0L7Qs9C1IHRoaXMuYW5pbWF0aW9ucyA9IHt3YWxrX2Rvd246IC4uLCB3YWxrX3VwOiAuLiDQuCDRgi7QtC4gfVxuICAgIH0pO1xuICAgICdzaG9vdF9kb3duLHNob290X3VwLHNob290X2xlZnQsc2hvb3RfcmlnaHQnLnNwbGl0KCcsJykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUsIDUwLCBmYWxzZSk7Ly8g0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC9IC0g0YHQutC+0YDQvtGB0YLRjCwgZmFsc2UgLSDQvtGC0LzQtdC90LjRgtGMINC/0L7QstGC0L7RgFxuICAgIH0pO1xuICAgICdjdXRfZG93bixjdXRfdXAsY3V0X2xlZnQsY3V0X3JpZ2h0Jy5zcGxpdCgnLCcpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lLCA1MCwgZmFsc2UpOy8vINCy0YLQvtGA0L7QuSDQsNGA0LPRg9C80LXQvSAtINGB0LrQvtGA0L7RgdGC0YwsIGZhbHNlIC0g0L7RgtC80LXQvdC40YLRjCDQv9C+0LLRgtC+0YBcbiAgICB9KTtcbiAgICBbJ2RlYXRoJ10uZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUsIDUwLCBmYWxzZSk7Ly8g0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC9IC0g0YHQutC+0YDQvtGB0YLRjCwgZmFsc2UgLSDQvtGC0LzQtdC90LjRgtGMINC/0L7QstGC0L7RgFxuICAgIH0pO1xuICAgIHRoaXMuc3RhbmQoJ2xlZnQnKTtcbiAgfVxuXG4gIHNob290KGFycm93KSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvb3RpbmcpIHtcbiAgICAgIHRoaXMuaXNTaG9vdGluZyA9IHRydWU7XG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYHNob290XyR7dGhpcy52ZWxvY2l0eS5kaXJlY3Rpb259YF07XG4gICAgICB0aGlzLnZpZXcub25FbmQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xuICAgICAgICBhcnJvdy5mbHkodGhpcy54LCB0aGlzLnksIHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcbiAgICAgIH07XG4gICAgICB0aGlzLnZpZXcucnVuKCk7Ly8g0JfQsNC/0YPRgdGC0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cbiAgICB9XG4gIH1cblxuICBoaXQoKSB7XG4gICAgaWYgKCF0aGlzLmlzSGl0dGluZykge1xuICAgICAgdGhpcy5pc0hpdHRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW2BjdXRfJHt0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbn1gXTtcbiAgICAgIHRoaXMudmlldy5vbkVuZCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5pc0hpdHRpbmcgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgICB0aGlzLnZpZXcucnVuKCk7Ly8g0JfQsNC/0YPRgdGC0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cbiAgICB9XG4gIH1cblxuICB3YWxrKGRpcmVjdGlvbikge1xuICAgIGlmICh0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpIHJldHVybjsgLy8g0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0L3QtdC70YzQt9GPINC40LTRgtC4LiDQndCVINCf0J7QndCY0JzQkNCuINCa0JDQmiDQoNCQ0JHQntCi0JDQldCiLiDQldCh0JvQmCDQo9CR0KDQkNCi0Kwg0K3QotCjINCh0KLQoNCe0JrQoywg0J/QldCg0KHQntCd0JDQltCV0Jwg0J3QldCb0KzQl9CvINCj0J/QoNCQ0JLQm9Cv0KLQrFxuICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XG4gICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zW2B3YWxrXyR7ZGlyZWN0aW9ufWBdOy8vINCX0LTQtdGB0Ywg0YXRgNCw0L3QuNGC0YHRjyDRgtC10LrRg9GJ0LDRjyDQsNC90LjQvNCw0YbQuNGPLiAgIHRoaXMudmlldyDRhdGA0LDQvdC40YIg0L7QsdGK0LXQutGCIENoYXJhY3RlclNoZWV0XG4gICAgdGhpcy52aWV3LnJ1bigpOy8vINCX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXG4gIH1cblxuICBzdGFuZChkaXJlY3Rpb24pIHsgLy8g0KHRgtC+0Y/RgtGMXG4gICAgaWYgKHRoaXMuaXNTaG9vdGluZyB8fCB0aGlzLmlzSGl0dGluZykgcmV0dXJuOy8vINCd0JUg0J/QntCd0JjQnNCQ0K4g0JrQkNCaINCg0JDQkdCe0KLQkNCV0KIuINCV0KHQm9CYINCj0JHQoNCQ0KLQrCDQrdCi0KMg0KHQotCg0J7QmtCjLCDQn9CV0KDQodCe0J3QkNCW0JXQnCDQndCV0JvQrNCX0K8g0KPQn9Cg0JDQktCb0K/QotCsXG4gICAgdGhpcy52ZWxvY2l0eS5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCAwKTtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnNbYHdhbGtfJHtkaXJlY3Rpb259YF07XG4gICAgdGhpcy52aWV3LnN0b3AoKTtcbiAgfVxuXG4gIGRlYXRoKCkge1xuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKCdkb3duJywgMCk7Ly8g0J7RgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L/QtdGA0YHQvtC90LDQttCwXG4gICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zLmRlYXRoO1xuICAgIC8vIHRoaXMudmlldy5zdG9wKCk7XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aGlzLmxhc3RUaW1lID09IDApIHtcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpIHsgLy8g0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0Lgg0YPQtNCw0YDQvtCyINC90LXQu9GM0LfRjyDQuNC00YLQuFxuICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywgdGltZSAtIHRoaXMubGFzdFRpbWUpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuXG4gICAgLy8g0JrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINCw0L3QuNC80LDRhtC40Lg7IHRoaXMudmlldyDRhdGA0LDQvdC40YIg0L7QsdGK0LXQutGCIENoYXJhY3RlclNoZWV0XG4gICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKTsgLy8g0JIg0L/QtdGA0LXQvNC10L3QvdC+0LkgdGhpcy52aWV3INGF0YDQsNC90LjRgtGB0Y8gdGhpcy5hbmltYXRpb25zID0ge30uINCc0LXRgtC+0LQgdHJ1bmMg0L7RgtCx0YDQsNGB0YvQstC10YIg0LTRgNC+0LHQvdGD0Y4g0YfQsNGB0YLRjFxuICAgIHRoaXMudmlldy51cGRhdGUodGltZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCwgbGltaXRYID0gNTAwMDAsIGxpbWl0WSA9IDUwMDAwLCBzY3JvbGxFZGdlID0gMjAwLFxuICB9ID0ge30pIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMubGltaXRYID0gbGltaXRYO1xuICAgIHRoaXMubGltaXRZID0gbGltaXRZO1xuICAgIHRoaXMud2F0Y2hPYmplY3QgPSBmYWxzZTtcbiAgICB0aGlzLm9iaiA9IG51bGw7XG4gICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTtcbiAgfVxuXG4gIHdhdGNoKG9iaikge1xuICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xuICAgIHRoaXMub2JqID0gb2JqO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAodGhpcy53YXRjaE9iamVjdCkge1xuICAgICAgaWYgKHRoaXMub2JqLnggPiAodGhpcy54ICsgdGhpcy53aWR0aCAtIHRoaXMuc2Nyb2xsRWRnZSkpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMub2JqLnggLSB0aGlzLndpZHRoICsgdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub2JqLnggPCAodGhpcy54ICsgdGhpcy5zY3JvbGxFZGdlKSkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLm9iai54IC0gdGhpcy5zY3JvbGxFZGdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub2JqLnkgPiAodGhpcy55ICsgdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMubGltaXRZLCB0aGlzLm9iai55IC0gdGhpcy5oZWlnaHQgKyB0aGlzLnNjcm9sbEVkZ2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vYmoueSA8ICh0aGlzLnkgKyB0aGlzLnNjcm9sbEVkZ2UpKSB7XG4gICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMub2JqLnkgLSB0aGlzLnNjcm9sbEVkZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNwZWNpYWxQb3NpdGlvbigpIHtcbiAgICB0aGlzLnggPSB0aGlzLndpZHRoO1xuICAgIHRoaXMueSA9IHRoaXMuaGVpZ2h0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4vc3ByaXRlLXNoZWV0JztcblxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgU3ByaXRlU2hlZXQge1xuICBjb25zdHJ1Y3Rvcih7IGltYWdlTmFtZSB9KSB7XG4gICAgc3VwZXIoe1xuICAgICAgaW1hZ2VOYW1lLFxuICAgICAgaW1hZ2VXaWR0aDogODMyLFxuICAgICAgaW1hZ2VIZWlnaHQ6IDEzNDQsXG4gICAgfSk7XG4gICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xuICB9XG5cbiAgZ2V0U2VxdWVuY2VzKCkge1xuICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL21hcHMvYW5pbWF0aW9ucy5qc29uJyk7XG4gICAgY29uc3Qgc2VxdWVuY2VzID0ge307XG4gICAgZGF0YS5sYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IHtcbiAgICAgIHNlcXVlbmNlc1tsYXllci5uYW1lXSA9IGxheWVyLmRhdGEuZmlsdGVyKChpKSA9PiBpID4gMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcXVlbmNlcztcbiAgfVxuXG4gIGdldEFuaW1hdGlvbihuYW1lLCBzcGVlZCA9IDEwMCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0QW5pbWF0aW9uKHRoaXMuc2VxdWVuY2VzW25hbWVdLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVtb3ZlRnJvbUFycmF5IH0gZnJvbSAnLi9yZW1vdmUtZnJvbS1hcnJheSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbXTsvLyDQnNCw0YHRgdC40LIg0YHRgtCw0YLQuNGH0L3Ri9GFINC+0LHRitC10LrRgtC+0LIuINCc0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10Lwg0YHQu9C10LTRg9GO0YnQuNC1INGB0LLQvtC50YHRgtCy0LAg0L7QsdGK0LXQutGC0LA6IHt4LCB5LCB3aWR0aCwgaGVpZ2h0fVxyXG4gICAgdGhpcy5ib2RpZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFN0YXRpY1NoYXBlcyhkYXRhKSB7XHJcbiAgICBkYXRhLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICBpZiAobGF5ZXIudHlwZSA9PSAnb2JqZWN0Z3JvdXAnKVxyXG4gICAgICAvKiBvYmplY3RzINGN0YLQviDQvNCw0YHRgdC40LIg0YEg0L3QsNCx0L7RgNC+0Lwg0L7QsdGK0LXQutGC0L7QsiBbey4uLn0sey4uLn0sINC4INGCLtC0Ll0wXHJcbiAgICAgICAgICAgICAgICDQlNGD0LzQsNGOLCDQutC+0L3RgdGC0YDRg9C60YbQuNGPICguLi5sYXllci5vYmplY3RzKSDRgdC+0LfQtNCw0LXRgiDQvNCw0YHRgdC40LIgIHRoaXMuc3RhdGljU2hhcGVzID0gW3suLi59LHsuLi59LCDQuCDRgi7QtC5dICovIHsgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCguLi5sYXllci5vYmplY3RzKTsgfVxyXG4gICAgfSk7XHJcbiAgICAvLyDQlNC+0LHQsNCy0LjQvCDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0LrRgNCw0Y/QvCDQutCw0YDRgtGLLiDQl9CwINC60LDRgNGC0YMg0L3QtdC70YzQt9GPINCy0YvQudGC0LhcclxuICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe1xyXG4gICAgICB4OiAwLCB5OiAwLCB3aWR0aDogMTMwMCwgaGVpZ2h0OiAxLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHtcclxuICAgICAgeDogMCwgeTogMCwgd2lkdGg6IDEsIGhlaWdodDogMTMwMCxcclxuICAgIH0pO1xyXG4gICAgLy8gdGhpcy5zdGF0aWNTaGFwZXMucHVzaCh7eDoxMjgwLHk6MCx3aWR0aDoxLGhlaWdodDoxMzAwfSk7IC0g0JXRgdGB0LvQuCDQstCy0LXQtNC10L3RiyDRjdGC0Lgg0L/QsNGA0LDQvNC10YLRgNGLINCe0YDQutC4INC90LUg0LzQvtCz0YPRgiDQv9GA0L7QudGC0Lgg0L3QsCDQutCw0YDRgtGDLlxyXG4gICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCh7XHJcbiAgICAgIHg6IDEyODAsIHk6IDAsIHdpZHRoOiAxMzAwLCBoZWlnaHQ6IDEsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZEtpbmVtYXRpY0JvZHkoYm9keSkge1xyXG4gICAgdGhpcy5ib2RpZXMucHVzaCh7XHJcbiAgICAgIHg6IGJvZHkueCwgLy8g0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICB5OiBib2R5LnksXHJcbiAgICAgIG9iajogYm9keSwgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INC/0LXRgNGB0L7QvdCw0LbQsCDRgSDQvdC+0LLRi9C80Lgg0LrQvtC+0YDQtNC40L3QsNGC0LDQvNC4LCDQsdGD0LTQtdC8INGB0YDQsNCy0L3QuNCy0LDRgtGMINC90L7QstGL0LUg0Lgg0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbih0aW1lKTsvLyDRgNCw0YHRgdGH0ZHRgiDQutC+0LvQu9C40LfQuNC4INC/0LXRgNGB0L7QvdCw0LbQtdC5INGB0L4g0YHRgtCw0YLQuNGH0L3Ri9C80Lgg0L7QsdGK0LXQutGC0LDQvNC4INC4INC/0LXRgNGB0L7QvdCw0LbQtdC5INC80LXQttC00YMg0YHQvtCx0L7QuVxyXG4gIH1cclxuXHJcbiAgY2hlY2tDb2xsaXNpb24odGltZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvZGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBib2R5ID0gdGhpcy5ib2RpZXNbaV07XHJcbiAgICAgIGNvbnN0IG9sZFggPSBib2R5Lng7XHJcbiAgICAgIGNvbnN0IG9sZFkgPSBib2R5Lnk7XHJcbiAgICAgIGxldCB7IHggfSA9IGJvZHkub2JqO1xyXG4gICAgICBsZXQgeyB5IH0gPSBib2R5Lm9iajtcclxuICAgICAgaWYgKHggPiBvbGRYKSB7IC8vIG1vdmluZyByaWdodFxyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goKHNoYXBlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIC8vINCV0YHQu9C4INGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCw0YXQvtC00Y/RgtGB0Y8g0L/QtdGA0LXQtCDQvtCx0YrQtdC60YLQvtC8KioqXHJcbiAgICAgICAgICAgICgob2xkWCAvLyDQutC+0L7RgNC00LjQvdCw0YLQsCDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgICAgICAgICAgICAtIDEvLyDQn9C10YDQtdC80LXRidC10L3QuNC1INC80LXQttC00YMg0LrQsNC00YDQsNC80Lgg0LfQsNC90LjQvNCw0LXRgiDQtNGA0L7QsdC90YPRjiDRh9Cw0YHRgtGMINC/0LjQutGB0LXQu9GPLCDRh9GC0L7QsdGLINC60L7QtCDRgNCw0LHQvtGC0LDQuyDQvtC60YDRg9Cz0LvQuNC8INC/0YDQvtGI0LvRg9GOINGC0L7Rh9C60YMg0L3QsCAxINC/0LjQutGB0LXQu9GMXHJcbiAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC8vINC60L7QvtGA0LTQuNC90LDRgtCwINGE0L7RgNC80Ysg0LrQvtC70LvQuNC30LjQuCDQstC90YPRgtGA0Lgg0L/QtdGA0YHQvtC90LDQttCwICjQvdCw0YfQsNC70L7QvCDQvtGC0YHRh9GR0YLQsCDRgdC70YPQttC40YIg0LvQtdCy0YvQuSDQstC10YDRhdC90LjQuSDRg9Cz0L7QuyDQv9C10YDRgdC+0L3QsNC20LApXHJcbiAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPCBzaGFwZS54KVxyXG4gICAgICAgICAgICAvLyogKirQuCDQvdC+0LLRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC90LDRhdC+0LTRj9GC0YHRjyDQv9C+0YHQu9C1INC+0LHRitC10LrRgtCwLCDQt9C90LDRh9C40YIg0L/QtdGA0YHQvtC90LDQtiDRgdGC0L7Qu9C60L3Rg9C70YHRjyDRgSDQv9GA0LXQv9GP0YLRgdGC0LLQuNC10LxcclxuICAgICAgICAgICAgJiYgKCh4XHJcbiAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54XHJcbiAgICAgICAgICAgICAgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxyXG5cclxuICAgICAgICAgICAgLy8g0J/QtdGA0YHQvtC90LDQtiDQtNC+0LvQttC10L0g0LrQsNGB0LDRgtGM0YHRjyDQv9GA0LXQv9GP0YLRgdGC0LLQuNGPXHJcbiAgICAgICAgICAgICYmICgoeVxyXG4gICAgICAgICAgICAgICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpXHJcblxyXG4gICAgICAgICAgICAmJiAoKHlcclxuICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnlcclxuICAgICAgICAgICAgICArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgKSB7IC8vINCR0LXRgNC10Lwg0LHQu9C40LbQsNC50YjQuNC5INC+0LHRitC10LrRgiwg0LPQtNC1INC+0YHRgtCw0L3QvtCy0LjQvCDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgICAgICAgICAgeCA9IE1hdGgubWluKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgsIHNoYXBlLngpLy8gKNC90LDQstC10YDQvdC+0LUg0LzQvtC20L3QviDQsdGL0LvQviDQv9GA0L7RgdGC0L4g0L7RgdGC0LDQstC40YLRjCDQvtC00LjQvSBzaGFwZS54KVxyXG4gICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmVXaXRoU3RhdGljKGJvZHksIGkpOy8vINCf0YDQvtCy0LXRgNGP0LXQvCDQuNC90YLQtdGA0LDQutGC0LjQsiDRgdC+INGB0YLQsNGC0LjRh9C90YvQvNC4INC+0LHRitC10LrRgtCw0LzQuCAo0L3QsNC/0YDQuNC80LXRgCDQv9C+0YHQu9C1INC/0L7Qv9Cw0LTQsNC90LjRjyDQsiDQtNC10YDQtdCy0L4sINGB0YLRgNC10LvQsCDQvdC1INC00LLQuNC20LXRgtGB0Y8pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFggLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA8IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXHJcbiAgICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXHJcbiAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgeCA9IE1hdGgubWluKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgsIHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aDtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopOy8vINCf0YDQvtCy0LXRgNGP0LXQvCDQuNC90YLQtdGA0LDQutGC0LjQsiAo0L3QsNC/0YDQuNC80LXRgCDRgdGC0YDQtdC70LAg0LHRjNGR0YIg0L7RgNC60LAsINC+0YDQuiDQsdGM0ZHRgiDQuNCz0YDQvtC60LAg0Lgg0YIu0LQuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeCA8IG9sZFgpIHsgLy8gbW92aW5nIGxlZnRcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCgob2xkWCArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA+IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSlcclxuICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCwgc2hhcGUueCArIHNoYXBlLndpZHRoKSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLng7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFggKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKVxyXG4gICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aClcclxuICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkpXHJcbiAgICAgICAgICAgICAgJiYgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngsIHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueDtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeSA+IG9sZFkpIHsgLy8gbW92aW5nIGRvd25cclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKChzaGFwZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLnkpXHJcbiAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSlcclxuICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgJiYgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgeSA9IE1hdGgubWluKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0LCBzaGFwZS55KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSwgaSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vINCa0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFkgLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcclxuICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSlcclxuICAgICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcclxuICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodDtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSwgc2hhcGUsIGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeSA8IG9sZFkpIHsgLy8gbW92aW5nIHVwXHJcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaCgoc2hhcGUpID0+IHtcclxuICAgICAgICAgIGlmICgoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpXHJcbiAgICAgICAgICAgICYmICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKVxyXG4gICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAmJiAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LCBpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3Qgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgIGlmIChib2R5ICE9IHNoYXBlKSB7IC8vINCV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgIGlmICgoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodClcclxuICAgICAgICAgICAgICAmJiAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpKVxyXG4gICAgICAgICAgICAgICYmICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksIHNoYXBlLCBpLCBqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgYm9keS54ID0geDtcclxuICAgICAgYm9keS55ID0geTtcclxuICAgICAgYm9keS5vYmoueCA9IHg7XHJcbiAgICAgIGJvZHkub2JqLnkgPSB5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tJbnRlcmFjdGl2ZShib2R5LCBzaGFwZSwgaW5kZXhPZkJvZHksIGluZGV4T2ZTaGFwZSkge1xyXG4gICAgaWYgKGJvZHkub2JqLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgc2hhcGUub2JqLmhhc093blByb3BlcnR5KCduYW1lJykpIHsgLy8g0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L/QvtC/0LDQtNGR0YLRgdGPINC+0LHRitC10LrRgiDQsdC10Lcg0L3QsNC30LLQsNC90LjRj1xyXG4gICAgICBpZiAoYm9keS5vYmoubmFtZSA9PSAnYXJyb3cnICYmIHNoYXBlLm9iai5uYW1lID09ICdvcmMnKSB7IC8vINCV0YHQu9C4INGB0YLRgNC10LvQsCDQutC+0YHQvdGD0LvQsNGB0Ywg0L7RgNC60LBcclxuICAgICAgICAvLyDQndCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0LLQvNC10YHRgtC+INC00LLRg9GFLCDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINC+0LTQuNC9INCy0YvQt9C+0LIgdGhpcy5yZW1vdmUodGhpcy5ib2RpZXMsaW5kZXhPZkJvZHksaW5kZXhPZlNoYXBlKS4g0J3QviDQvNC90LUg0YLQsNC6INGD0LTQvtCx0L3QtdC1INC+0YLQu9Cw0LbQuNCy0LDRgtGMXHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBSZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLCBpbmRleE9mQm9keSk7Ly8g0KHRgtGA0LXQu9CwINC40YHRh9C10LfQsNC10YIsINGD0LTQsNC70LjRgtGMINC40Lcg0LrQvtC70LvQsNC50LTQtdGA0LAsINGD0LTQsNC70LjRgtGMINGB0LDQvCDQvtCx0YrQtdC60YJcclxuICAgICAgICBib2R5Lm9iai5kZWxldGUoKTsvLyDQo9C00LDQu9GP0LXQvCDRgdGC0YDQtdC70YNcclxuICAgICAgICB0aGlzLmJvZGllcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5ib2RpZXMsIGluZGV4T2ZTaGFwZSk7Ly8g0J7RgtC60LvRjtGH0LjRgtGMINC10LPQviDQvtGCINC60L7Qu9C70LDQudC00LXRgNCwICjRg9C00LDQu9C40YLRjCDRjdC70LXQvNC10L3RgiDQv9C+INC40L3QtNC10LrRgdGDINC40Lcg0LzQsNGB0YHQuNCy0LAgdGhpcy5ib2RpZXMpXHJcbiAgICAgICAgc2hhcGUub2JqLmRlYXRoKCk7IC8vINCe0YDQuiDQv9C+0LPQuNCx0LDQtdGCXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrSW50ZXJhY3RpdmVXaXRoU3RhdGljKGJvZHksIGluZGV4T2ZCb2R5KSB7IC8vXHJcbiAgICBpZiAoYm9keS5vYmouaGFzT3duUHJvcGVydHkoJ25hbWUnKSkgeyAvLyDQn9GA0L7QstC10YDQutCwINC90LAg0YHQu9GD0YfQsNC5LCDQtdGB0LvQuCDQv9C+0L/QsNC00ZHRgtGB0Y8g0L7QsdGK0LXQutGCINCx0LXQtyDQvdCw0LfQstCw0L3QuNGPXHJcbiAgICAgIGlmIChib2R5Lm9iai5uYW1lID09ICdhcnJvdycpIHtcclxuICAgICAgICBib2R5Lm9iai5zdG9wKCk7Ly8g0KHRgtGA0LXQu9CwINC/0LXRgNC10YHRgtCw0ZHRgiDQtNCy0LjQs9Cw0YLRjNGB0Y9cclxuICAgICAgICB0aGlzLmJvZGllcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5ib2RpZXMsIGluZGV4T2ZCb2R5KTsvLyDRg9C00LDQu9C40YLRjCDQuNC3INC60L7Qu9C70LDQudC00LXRgNCwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnRyb2xTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXAgPSBmYWxzZTtcbiAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5maXJlID0gZmFsc2U7XG4gICAgdGhpcy5rZXlNYXAgPSBuZXcgTWFwKFtcbiAgICAgIFszNywgJ2xlZnQnXSxcbiAgICAgIFszOSwgJ3JpZ2h0J10sXG4gICAgICBbMzgsICd1cCddLFxuICAgICAgWzQwLCAnZG93biddLFxuICAgICAgWzMyLCAnZmlyZSddLFxuICAgICAgWzEzLCAnZW50ZXInXSxcbiAgICBdKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgZmFsc2UpKTtcbiAgfVxuXG4gIHVwZGF0ZShldmVudCwgcHJlc3NlZCkge1xuICAgIGlmICh0aGlzLmtleU1hcC5oYXMoZXZlbnQua2V5Q29kZSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXNbdGhpcy5rZXlNYXAuZ2V0KGV2ZW50LmtleUNvZGUpXSA9IHByZXNzZWQ7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTY3JlZW4gfSBmcm9tICcuL3NjcmVlbic7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vc2NlbmVzL21lbnUnO1xyXG5pbXBvcnQgeyBHYW1lTGV2ZWwgfSBmcm9tICcuL3NjZW5lcy9nYW1lLWxldmVsJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IHsgQ29udHJvbFN0YXRlIH0gZnJvbSAnLi9jb250cm9sLXN0YXRlJztcclxuaW1wb3J0IHsgR2FtZU92ZXIgfSBmcm9tICcuL3NjZW5lcy9nYW1lLW92ZXInO1xyXG5pbXBvcnQgeyBHYW1lV2luIH0gZnJvbSAnLi9zY2VuZXMvZ2FtZS13aW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGggPSA2NDAsIGhlaWdodCA9IDY0MCB9ID0ge30pIHtcclxuICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuc2NyZWVuLmxvYWRJbWFnZXMoe1xyXG4gICAgICBvcmM6ICdpbWcvb3JjLnBuZycsXHJcbiAgICAgIGVsZjogJ2ltZy9kYXJrLWVsZi5wbmcnLFxyXG4gICAgICBwbGF5ZXI6ICdpbWcvcGxheWVyMi5wbmcnLFxyXG4gICAgICB0aXRsZV9iZzogJ2ltZy9iZ190aXRsZS5wbmcnLFxyXG4gICAgICB0aXRsZV9uYW1lOiAnaW1nL2dhbWVfbmFtZS5wbmcnLFxyXG4gICAgICB0aXRsZV9zdGFydDogJ2ltZy9zdGFydF9nYW1lLnBuZycsXHJcbiAgICAgIHRpdGxlX29wdGlvbjogJ2ltZy9vcHRpb25fZ2FtZS5wbmcnLFxyXG4gICAgICB0aXRsZV9leGl0OiAnaW1nL2V4aXRfZ2FtZS5wbmcnLFxyXG4gICAgICB5b3Vfd2luOiAnaW1nL3lvdV93aW4ucG5nJyxcclxuICAgICAgZ2FtZV9vdmVyOiAnaW1nL2dhbWVfb3Zlci5wbmcnLFxyXG4gICAgICB0aWxlczogJ2ltZy90aWxlcy5wbmcnLFxyXG4gICAgICB0aWxlczI6ICdpbWcvdGlsZXMyLnBuZycsXHJcbiAgICAgIHF1ZXN0X3BlcnNvbjogJ2ltZy9naXJsLWZvci1jYXZlLnBuZycsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpLFxyXG4gICAgICBnYW1lT3ZlcjogbmV3IEdhbWVPdmVyKHRoaXMpLFxyXG4gICAgICBnYW1lV2luOiBuZXcgR2FtZVdpbih0aGlzKSxcclxuICAgIH07XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTY2VuZShzdGF0dXMpIHtcclxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgICBjYXNlIFNjZW5lLlNUQVJUX0dBTUU6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVMZXZlbDtcclxuICAgICAgY2FzZSBTY2VuZS5HQU1FX09WRVI6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVPdmVyO1xyXG4gICAgICBjYXNlIFNjZW5lLkdBTUVfV0lOOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lV2luO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnJhbWUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gIH1cclxuXHJcbiAgcnVuKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGxldCBhbGxEZWF0aE9ya3MgPSAwO1xyXG5leHBvcnQgbGV0IHNob3dRdWVzdEludGVyZmFjZSA9IGZhbHNlO1xyXG5leHBvcnQgbGV0IHNob3dQYXNzYWdlRHVuZ2VvbiA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVF1ZXN0KCkge1xyXG4gIGFsbERlYXRoT3JrcyA9IDA7XHJcbiAgc2hvd1F1ZXN0SW50ZXJmYWNlID0gZmFsc2U7XHJcbiAgc2hvd1Bhc3NhZ2VEdW5nZW9uID0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdCgpIHtcclxuICBzaG93UXVlc3RJbnRlcmZhY2UgPSB0cnVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVzdNChb21wbGV0ZWQoKSB7XHJcbiAgc2hvd1F1ZXN0SW50ZXJmYWNlID0gZmFsc2U7XHJcbiAgc2hvd1Bhc3NhZ2VEdW5nZW9uID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYXRoT3JjcygpIHtcclxuICBpZiAoc2hvd1F1ZXN0SW50ZXJmYWNlKSB7XHJcbiAgICBhbGxEZWF0aE9ya3MrKztcclxuICB9XHJcbiAgaWYgKGFsbERlYXRoT3JrcyA9PSAxMCkge1xyXG4gICAgcXVlc3TQoW9tcGxldGVkKClcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VGaWxlcykge1xuICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKSB7XG4gICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsIHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9XG5cbiAgbG9hZEltYWdlKG5hbWUsIHNyYykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xuICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZWx2ZW5TY291dCA9IG5ldyBHYW1lKCk7XHJcbiAgZWx2ZW5TY291dC5ydW4oKTtcclxufTtcclxuIiwiaW1wb3J0IHsgVGV4dEluZm8gfSBmcm9tICcuL3RleHQtaW5mbyc7XHJcbmltcG9ydCB7IGlzQWdyZXNzaXZlIH0gZnJvbSAnLi9haXMvaXNBZ3Jlc3NpdmUnO1xyXG5pbXBvcnQgeyBhbGxEZWF0aE9ya3MsIHNob3dRdWVzdEludGVyZmFjZSwgc2hvd1Bhc3NhZ2VEdW5nZW9uIH0gZnJvbSAnLi9nZXQtcXVlc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyZmFjZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgd2F2ZXMpIHtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB0aGlzLndhdmVzID0gd2F2ZXM7XHJcbiAgICB0aGlzLnRleHRJbmZvID0gbmV3IFRleHRJbmZvKGdhbWUuc2NyZWVuKTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZ2FtZS5zY3JlZW4uY29udGV4dDtcclxuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgdGhpcy5wbGF5ZXIgPSBnYW1lLmN1cnJlbnRTY2VuZS5wbGF5ZXI7XHJcbiAgICB0aGlzLmZpZ2h0VGV4dFNob3dlZCA9IGZhbHNlOy8vINC90LDQtNC/0LjRgdGMIEZpZ2h0INC/0L7QutCw0LbQtdGC0YHRjyDQu9C40YjRjCDQvtC00LjQvSDRgNCw0LdcclxuICAgIC8vIHRoaXMudGltZVRvU3Vydml2ZSA9IDIwMDAwMDA7Ly8g0JXRgdC70Lgg0Y3RgtC+INCy0YDQtdC80Y8g0LLRi9C50LTQtdGCINCyINC90L7Qu9GMLCDRgtC+INC40LPRgNCwINC30LDQutC+0L3Rh9C40YLRgdGPINC/0L7QsdC10LTQvtC5XHJcblxyXG4gICAgdGhpcy5vcmNzS2lsbGVkID0gMDtcclxuXHJcbiAgICB0aGlzLndpZHRoSGVhbHRoTGluZSA9IDE1MDtcclxuXHJcbiAgICB0aGlzLmVuZE9wYWNpdHkgPSAwOy8vINCf0YDQuCDQv9GA0L7QuNCz0YDRi9GI0LUg0Y3QutGA0LDQvSDQtNC40YHQutGA0LXRgtC90L4sINGB0YLRg9C/0LXQvdGH0LDRgtC+LCDRgtC10LzQvdC10LXRgi4gMCAtINCw0LHRgdC+0LvRjtGC0L3QviDRgdCy0LXRgtC70L4sIDEgLSDQsNCx0YHQvtC70Y7RgtC90L4g0YLQtdC80L3QvlxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmICh0aGlzLmxhc3RUaW1lID09PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd0hlYWx0aExpbmUoKTtcclxuICAgIGlmIChzaG93UXVlc3RJbnRlcmZhY2UpIHtcclxuICAgICAgdGhpcy5xdWVzdEludGVyZmFjZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNob3dQYXNzYWdlRHVuZ2Vvbikge1xyXG4gICAgICB0aGlzLnBhc3NhZ2VEdW5nZW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucGxheWVyLmhlYWx0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmVuZEdhbWUodGltZSwgJ2xvc2UnKTsvLyDQn9GA0L7QuNCz0YDQsNC7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQWdyZXNzaXZlLmlzT3JjQWdyZXNzaXZlKCkpIHtcclxuICAgICAgdGhpcy5maWdodFRleHQodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50ZXh0SW5mby51cGRhdGUodGltZSk7XHJcblxyXG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgfVxyXG5cclxuICBmaWdodFRleHQodGltZSkge1xyXG4gICAgaWYgKCF0aGlzLmZpZ2h0VGV4dFNob3dlZCkge1xyXG4gICAgICB0aGlzLmZpZ2h0VGV4dFNob3dlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudGV4dEluZm8uc2hvd1RleHQoJ1lvdSBhbmdlcmVkIHRoZSBvcmNzIScsIHRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0hlYWx0aExpbmUoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzg1MjcyNyc7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNiMjNkM2QnO1xyXG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IDI7XHJcbiAgICB0aGlzLmNvbnRleHQucmVjdCgyMCwgMTUsIHRoaXMud2lkdGhIZWFsdGhMaW5lLCAxMCk7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMjAsIDE1LCB0aGlzLndpZHRoSGVhbHRoTGluZSAqICh0aGlzLnBsYXllci5oZWFsdGggLyB0aGlzLnBsYXllci5oZWFsdGhTdGFydCksIDEwKTtcclxuICAgIC8vIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBxdWVzdEludGVyZmFjZSgpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9ICcyMHB4IHNlcmlmJztcclxuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgT3JjcyBraWxsZWQgLSAke2FsbERlYXRoT3Jrc30gb2YgMTBgLCAyMCwgNjApO1xyXG4gIH1cclxuICBwYXNzYWdlRHVuZ2VvbigpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9ICcyMHB4IHNlcmlmJztcclxuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChgVGhlIGR1bmdlb24gaXMgb3BlbiFgLCAyMCwgNjApO1xyXG4gIH1cclxuXHJcbiAgZW5kR2FtZSh0aW1lLCBzdGF0dXMpIHtcclxuICAgIC8vINCf0L7RgdGC0LXQv9C10L3QvdC+INC/0L7Rj9Cy0LvRj9C10YLRgdGPINGH0LXRgNC90LDRjyDQt9Cw0YHRgtCw0LLQutCwINC4INGB0L7QvtCx0YnQsNC10Lwg0YHRhtC10L3QtSwg0YfRgtC+INC40LPRgNCwINC30LDQutC+0L3Rh9C10L3QsFxyXG4gICAgdGhpcy5lbmRPcGFjaXR5ICs9ICh0aW1lIC0gdGhpcy5sYXN0VGltZSkgLyAxMDAwO1xyXG4gICAgaWYgKHRoaXMuZW5kT3BhY2l0eSA+IDEuNSkgeyAvLyAxLjUsINCwINC90LUgMSwg0YfRgtC+0LHRiyDRh9C10YDQvdCw0Y8g0LfQsNGB0YLQsNCy0LrQsCDQtdGJ0ZEg0L/QvtCy0LjRgdC10LvQsCDQvdC10LzQvdC+0LPQvlxyXG4gICAgICB0aGlzLmNoYW5nZVNjZW5lKHN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG9wYWNpdHkgPSAwO1xyXG4gICAgaWYgKHRoaXMuZW5kT3BhY2l0eSA+IDAuMjUpIG9wYWNpdHkgPSAwLjI1O1xyXG4gICAgaWYgKHRoaXMuZW5kT3BhY2l0eSA+IDAuNSkgb3BhY2l0eSA9IDAuNTtcclxuICAgIGlmICh0aGlzLmVuZE9wYWNpdHkgPiAwLjc1KSBvcGFjaXR5ID0gMC43NTtcclxuICAgIGlmICh0aGlzLmVuZE9wYWNpdHkgPiAxKSBvcGFjaXR5ID0gMTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYHJnYigwLDAsMCwke29wYWNpdHl9KWA7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5nYW1lLnNjcmVlbi53aWR0aCwgdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlICdsb3NlJzogcmV0dXJuIHRoaXMuZ2FtZS5jdXJyZW50U2NlbmUuZ2FtZU92ZXJUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgY2FzZSAnd2luJzogcmV0dXJuIHRoaXMuZ2FtZS5jdXJyZW50U2NlbmUud2luVHJpZ2dlciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdldFF1ZXN0LCB1cGRhdGVRdWVzdCB9IGZyb20gJy4vZ2V0LXF1ZXN0JztcclxuXHJcbmNvbnN0IFRBS0VfUVVFU1QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFrZV9xdWVzdCcpO1xyXG5jb25zdCBBREFORE9OX1RIRV9RVUVTVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYmFuZG9uX3RoZV9xdWVzdCcpO1xyXG5leHBvcnQgbGV0IHJ1bk9uY2VRdWVzdCA9IGZhbHNlO1xyXG5cclxuVEFLRV9RVUVTVC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCdZb3UgdGFrZSBxdWVzdCEnKTtcclxuICAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnaGlkZScpO1xyXG4gIHJ1bk9uY2VRdWVzdCA9IHRydWU7XHJcbiAgZ2V0UXVlc3QoKTtcclxufTtcclxuXHJcblxyXG5BREFORE9OX1RIRV9RVUVTVC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnNvbGUubG9nKCdBYmFuZG9uIHRoZSBxdWVzdCEnKTtcclxuXHJcbiAgJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hpZGUnKTtcclxuXHJcbiAgcnVuT25jZVF1ZXN0ID0gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsRGlhbG9nKCkge1xyXG4gICQoJyNzdGF0aWNCYWNrZHJvcCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hhbmRsZVVwZGF0ZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTW9kYWxEaWFsb2coKSB7XHJcbiAgJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hhbmRsZVVwZGF0ZScpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBuZXh0TGV2ZWxJbmZvKCkge1xuICAkKCcjaW5mb01vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgLy8gJCgnI3N0YXRpY0JhY2tkcm9wJykubW9kYWwoJ2hhbmRsZVVwZGF0ZScpO1xufVxuIiwiaW1wb3J0IHsgQm9keSB9IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgeyBEdW1teSB9IGZyb20gJy4vYWlzL2R1bW15JztcbmltcG9ydCB7IEVuZFNjcmlwdCB9IGZyb20gJy4vYWlzL2VuZFNjcmlwdCc7XG5pbXBvcnQgeyBQZWFjZWZ1bCB9IGZyb20gJy4vYWlzL3BlYWNlZnVsJztcbmltcG9ydCB7IGlzQWdyZXNzaXZlIH0gZnJvbSAnLi9haXMvaXNBZ3Jlc3NpdmUnO1xuaW1wb3J0IHsgZGVhdGhPcmNQbGF5QXVkaW8gfSBmcm9tICcuL2F1ZGlvLXBsYXliYWNrL2F1ZGlvcyc7XG5pbXBvcnQgeyBkZWF0aE9yY3MgfSBmcm9tICcuL2dldC1xdWVzdCc7XG5cbmV4cG9ydCBjbGFzcyBPcmMgZXh0ZW5kcyBCb2R5IHtcbiAgY29uc3RydWN0b3IocGxheWVyLCBhaVR5cGUgPSAncGVhY2VmdWwnKSB7IC8vINCf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxuICAgIHN1cGVyKHsgaW1hZ2VOYW1lOiAnb3JjJywgc3BlZWQ6IDUwIH0pO1xuICAgIGlmIChhaVR5cGUgPT0gJ2R1bW15JykgdGhpcy5haSA9IG5ldyBEdW1teSgpO1xuICAgIGlmIChhaVR5cGUgPT0gJ2VuZFNjcmlwdCcpIHRoaXMuYWkgPSBuZXcgRW5kU2NyaXB0KCk7XG4gICAgaWYgKGFpVHlwZSA9PSAncGVhY2VmdWwnKSB0aGlzLmFpID0gbmV3IFBlYWNlZnVsKHBsYXllcik7XG5cbiAgICB0aGlzLmFsbERlYXRoT3JrcyA9IDA7XG4gICAgdGhpcy5uYW1lID0gJ29yYyc7Ly8g0JTQu9GPINC60L7Qu9C70LDQudC00LXRgNCwLCDRh9GC0L4g0L7Qv9C+0LfQvdCw0YLRjCDRjdGC0L7RgiDQvtCx0YrQtdC60YJcbiAgICB0aGlzLmFpLmNvbnRyb2wodGhpcyk7XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aGlzLmFpKSB7XG4gICAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTsvLyDQldGB0LvQuCDQmNCYINC90LUg0L7RgtC60LvRjtGH0LXQvVxuICAgIH1cbiAgICBzdXBlci51cGRhdGUodGltZSk7XG4gIH1cblxuICBkZWF0aCgpIHtcbiAgICBkZWF0aE9yY3MoKTtcbiAgICBkZWF0aE9yY1BsYXlBdWRpbygpO1xuICAgIHRoaXMuYWkgPSBudWxsOy8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQmNCYXG4gICAgaXNBZ3Jlc3NpdmUuYmVjb21lQWdyZXNzaXZlKCk7XG4gICAgc3VwZXIuZGVhdGgoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQm9keSB9IGZyb20gJy4vYm9keSc7XG5pbXBvcnQgeyBzd29yZFBsYXlBdWRpbyB9IGZyb20gJy4vYXVkaW8tcGxheWJhY2svYXVkaW9zJztcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEJvZHkgeyAvLyBQbGF5ZXIgLT4gQm9keSB+IENoYXJhY3RlclNoZWV0IC0+IFNwcml0ZVNoZWV0IH4gU3ByaXRlXG4gIGNvbnN0cnVjdG9yKGNvbnRyb2wsIGdhbWVfbGV2ZWwpIHsgLy8gY29udHJvbCAtINGD0L/RgNCw0LLQu9C10L3QuNC1INC60LvQsNCy0LjQsNGC0YPRgNC+0LlcbiAgICBzdXBlcih7IGltYWdlTmFtZTogJ3BsYXllcicsIHNwZWVkOiAxMDAgfSk7XG4gICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcbiAgICB0aGlzLmdhbWVfbGV2ZWwgPSBnYW1lX2xldmVsO1xuICAgIHRoaXMuYXJyb3cgPSBmYWxzZTsvLyDQn9C+0LfQstC+0LvRj9C10Lwg0YHRgtGA0LXQu9GP0YLRjCDRgtC+0LvRjNC60L4g0LXRgdC70Lgg0L3QsCDRgNGD0LrQsNGFINC10YHRgtGMINGB0YLRgNC10LvQsFxuICAgIHRoaXMudGltZUFycm93ID0gMTAwMDsvLyDQmtC+0L3RgdGC0LDQvdGC0LAsINCy0YDQtdC80Y8g0LzQtdC20LTRgyDQv9C+0Y/QstC70LXQvdC40LXQvCDRgdC70LXQtNGD0Y7RidC10Lkg0YHRgtGA0LXQu9GLLCDRh9GC0L7QsdGLINGB0YLRgNC10LvRiyDQvdC1INGB0L7Qt9C00LDQstCw0LvQuNGB0Ywg0LrQsNC6INC40Lcg0L/Rg9C70LXQvNGR0YLQsFxuICAgIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID0gMDsvLyDQotCw0LnQvNC10YAg0LTQu9GPINGB0YLRgNC10LtcbiAgICB0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPSAwO1xuICAgIHRoaXMubmFtZSA9ICdwbGF5ZXInOy8vINCU0LvRjyDQutC+0LvQu9Cw0LnQtNC10YDQsCwg0YfRgtC+INC+0L/QvtC30L3QsNGC0Ywg0Y3RgtC+0YIg0L7QsdGK0LXQutGCXG5cbiAgICB0aGlzLmhlYWx0aFN0YXJ0ID0gMjA7Ly8g0J3QsNGH0LDQu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC20LjQt9C90LXQuVxuICAgIHRoaXMuaGVhbHRoID0gdGhpcy5oZWFsdGhTdGFydDtcblxuICAgIHRoaXMudW5kZWFkID0gMTAwMDsvLyDQmtC+0L3RgdGC0LDQvdGC0LAg0LLRgNC10LzQtdC90Lgg0LHQtdGB0YHQvNC10YDRgtC40Y8sINC/0L7RgdC70LUg0L/QvtC70YPRh9C10L3QuNGPINGD0YDQvtC90LAg0LjQs9GA0L7QuiDQsdC10YHRgdC80LXRgNGC0LXQvVxuICAgIHRoaXMudGltZXJVbmRlYWQgPSAtMTsvKiDQotCw0LnQvNC10YAg0LTQu9GPINC+0LHRgNCw0YLQvdC+0LPQviDQvtGC0YHRh9GR0YLQsC4g0JXRgdC70Lgg0L7QvSDRgNCw0LLQtdC9INC00LjQsNC/0LDQt9C+0L3RgyDQvtGCIDAg0LTQviB0aGlzLnVuZGVhZCwg0LfQvdCw0YfQuNGCINC40LTRkdGCINC+0LHRgNCw0YLQvdGL0Lkg0L7RgtGB0YfRkdGCINC4INC40LPRgNC+0Log0LHQtdGB0YHQvNC10YDRgtC10L1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JXRgdC70LggLTEsINC40LPRgNC+0Log0LzQvtC20LXRgiDQv9C+0LvRg9GH0LjRgtGMINGD0YDQvtC9ICovXG4gICAgdGhpcy5sYXN0VGltZUZvclVuZGVhZCA9IDA7XG4gIH1cblxuICBhZGRBcnJvdyhhcnJvdykge1xuICAgIHRoaXMuYXJyb3cgPSBhcnJvdztcbiAgfVxuXG4gIGdldEhpdCgpIHsgLy8g0JjQs9GA0L7QuiDQv9C+0LvRg9GH0LjQuyDRg9C00LDRgFxuICAgIHN3b3JkUGxheUF1ZGlvKCk7XG4gICAgaWYgKHRoaXMudGltZXJVbmRlYWQgPT09IC0xKSB7IC8vINCV0YHQu9C4INC40LPRgNC+0Log0YHQvNC10YDRgtC10L1cbiAgICAgIGlmICh0aGlzLmhlYWx0aCA+IDApIHRoaXMuaGVhbHRoIC09IDE7XG4gICAgICB0aGlzLnRpbWVyVW5kZWFkID0gdGhpcy51bmRlYWQ7Ly8g0JTQtdC70LDQtdC8INC40LPRgNC+0LrQsCDQsdC10YHRgdC80LXRgNGC0L3Ri9C8INC90LAg0LLRgNC10LzRj1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgaWYgKHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9PT0gMCkge1xuICAgICAgdGhpcy5sYXN0VGltZUZvckFycm93ID0gdGltZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYXN0VGltZUZvclVuZGVhZCA9PT0gMCkge1xuICAgICAgdGhpcy5sYXN0VGltZUZvclVuZGVhZCA9IHRpbWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJvbC5maXJlKSB7XG4gICAgICBpZiAodGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPT09IDApIHsgLy8g0JXRgdC70Lgg0YHRgtGA0LXQu9GDINC80L7QttC90L4g0YHQvtC30LTQsNCy0LDRgtGMXG4gICAgICAgIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID0gdGhpcy50aW1lQXJyb3c7XG4gICAgICAgIHRoaXMuZ2FtZV9sZXZlbC5zaG9vdGluZygpO1xuICAgICAgICBpZiAodGhpcy5hcnJvdykgdGhpcy5zaG9vdCh0aGlzLmFycm93KTsvLyDQmNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LjQvNC10L3QvdC+INGN0YLRgyDRgdGC0YDQtdC70YMsINGCLtC6LiDQv9C10YDRgdC+0L3QsNC2INC80L7QttC10YIg0LjQvNC10YLRjCDRgNCw0LfQvdGL0LUg0YHRgtGA0LXQu9GLXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wudXApIHtcbiAgICAgIHRoaXMud2FsaygndXAnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5kb3duKSB7XG4gICAgICB0aGlzLndhbGsoJ2Rvd24nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5sZWZ0KSB7XG4gICAgICB0aGlzLndhbGsoJ2xlZnQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbC5yaWdodCkge1xuICAgICAgdGhpcy53YWxrKCdyaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YW5kKHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPiAwKSB0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyAtPSAodGltZSAtIHRoaXMubGFzdFRpbWVGb3JBcnJvdyk7XG4gICAgZWxzZSB0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9IDA7XG5cbiAgICB0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPSB0aW1lO1xuXG4gICAgaWYgKHRoaXMudGltZXJVbmRlYWQgIT0gLTEpIHsgLy8g0JjQs9GA0L7QuiDQsdC10YHRgdC80LXRgNGC0LXQvSwgdGhpcy50aW1lclVuZGVhZCA+IDBcbiAgICAgIHRoaXMudGltZXJVbmRlYWQgLT0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcbiAgICAgIGlmICh0aGlzLnRpbWVyVW5kZWFkIDwgMCkge1xuICAgICAgICB0aGlzLnRpbWVyVW5kZWFkID0gLTE7Ly8g0JjQs9GA0L7QuiDRgdC90L7QstCwINGB0LzQtdGA0YLQtdC9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudGltZXJVbmRlYWQgPSAtMTtcbiAgICB0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID0gdGltZTtcblxuICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcbiAgfS8vIHVwZGF0ZVxufVxuIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnLi92ZWN0b3InO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZSB7Ly8g0JXQs9C+INGA0LDRgdGI0LjRgNGP0LXRgiBwcm9qZWN0aWxlcy9hcnJvdy5qc1xuICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkLCB4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgc3BlZWQpO1xuICAgIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7Ly8g0JXRgdC70Lgg0YHRgtGA0LXQu9CwINCw0LrRgtC40LLQvdCwLCDQvtC90LAg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINGH0LXRgNC10LcgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlINC4INC70LXRgtC40YIg0LIg0YbQtdC70YwuINCQINCy0L7QvtCx0YnQtSDRgdGC0YDQtdC70LAg0LIg0L3QtdCy0LjQtNC40LzQvtC8INGB0L7RgdGC0L7Rj9C90LjQuCDQstGB0LXQs9C00LAg0L3QsNGF0L7QtNC40YLRgdGPINC90LAg0Y3QutGA0LDQvdC1XG4gICAgdGhpcy5jb2xsaXNpb25TaGFwZSA9IHtcbiAgICAgIHg6IDI3LCB5OiAyNywgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwLFxuICAgIH07Ly8g0J3Rg9C20L3QviDQtNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAgKNGA0LDRgdGH0ZHRgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LkpLiDQoNCw0LfQvNC10YAg0YHQv9GA0LDQudGC0LAgNjTRhTY0XG4gICAgdGhpcy5kZWxldGVkID0gZmFsc2U7Ly8g0KDQvtC00LjRgtC10LvRjCDQsdGD0LTQtdGCINC+0YLRgdC70LXQttC40LLQsNGC0Ywg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOLCDQtdGB0LvQuCDQvtC90LAgdHJ1ZSwg0LfQvdCw0YfQuNGCINGA0L7QtNC40YLQtdC70Ywg0YPQtNCw0LvQuNGCINGN0YLQvtGCINC+0LHRitC10LrRglxuICB9XG5cbiAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3AoKSB7IC8vINCf0YDQuCDQv9C+0L/QsNC00LDQvdC40Lgg0LIg0YHRgtCw0YLQuNGH0L3QvtC1INC/0YDQtdC/0Y/RgtGB0YLQstC40LUsIHByb2plY3RpbGUg0YLQtdGA0Y/QtdGCINGB0LrQvtGA0L7RgdGC0YxcbiAgICB0aGlzLnNwZWVkID0gMDtcbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XG4gIH1cblxuICBkZWxldGUoKSB7XG4gICAgdGhpcy5kZWxldGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgaWYgKHRoaXMubGFzdFRpbWUgPT0gMCkgeyAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyAgdGhpcy5sYXN0VGltZVxuICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCB0aW1lIC0gdGhpcy5sYXN0VGltZSk7XG4gICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKTsvLyDQndCwINGN0YLQvtC8INGN0YLQsNC/0LUg0L/QvtC60LAg0L3QtSDQuNC30LLQtdGB0YLQvdC+INGH0YLQviDRjdGC0L4g0LHRg9C00LXRgiDRgdC/0YDQsNC50YIg0LjQu9C4INCw0L3QuNC80LDRhtC40Y9cbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gJy4uL3Byb2plY3RpbGUnO1xuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xuXG5leHBvcnQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBQcm9qZWN0aWxlIHtcbiAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCwgeCwgeSkge1xuICAgIHN1cGVyKGRpcmVjdGlvbiwgc3BlZWQsIHgsIHkpO1xuICAgIHRoaXMuc3ByaXRlcyA9IHt9O1xuICAgIHRoaXMubmFtZSA9ICdhcnJvdyc7XG4gICAgY29uc3QgdGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxuICAgICAgaW1hZ2VXaWR0aDogNjQwLFxuICAgICAgaW1hZ2VIZWlnaHQ6IDY0MCxcbiAgICB9KTtcbiAgICB0aGlzLnNwcml0ZXMubGVmdCA9IHRpbGVzLmdldFNwcml0ZSg5KTtcbiAgICB0aGlzLnNwcml0ZXMucmlnaHQgPSB0aWxlcy5nZXRTcHJpdGUoMTApO1xuICAgIHRoaXMuc3ByaXRlcy5kb3duID0gdGlsZXMuZ2V0U3ByaXRlKDE5KTtcbiAgICB0aGlzLnNwcml0ZXMudXAgPSB0aWxlcy5nZXRTcHJpdGUoMjApO1xuICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xuICB9XG5cbiAgZmx5KHgsIHksIGRpcmVjdGlvbikge1xuICAgIHN1cGVyLmZseSh4LCB5LCBkaXJlY3Rpb24pO1xuICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCb2R5IH0gZnJvbSAnLi9ib2R5JztcbmltcG9ydCB7IER1bW15IH0gZnJvbSAnLi9haXMvZHVtbXknO1xuXG5leHBvcnQgY2xhc3MgUXVlc3RQZXJzb24gZXh0ZW5kcyBCb2R5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoeyBpbWFnZU5hbWU6ICdxdWVzdF9wZXJzb24nLCBzcGVlZDogNSB9KTtcbiAgICB0aGlzLmFpID0gbmV3IER1bW15KCk7XG4gICAgdGhpcy5haS5jb250cm9sKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTtcbiAgICBzdXBlci51cGRhdGUodGltZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBSZW1vdmVGcm9tQXJyYXkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUoYXJyLCBpbmRleGVzKSB7IC8vINCj0LTQsNC70LjRgtGMINGN0LvQtdC80LXQvdGC0Ysg0LjQtyDQvNCw0YHRgdC40LLQsCDQv9C+INC40L3QtNC10LrRgdGDXG4gICAgLy8gYXJndW1lbnRzIC0g0L/RgdC10LLQtNC+INC80LDRgdGB0LjQsiwg0LIg0LrQvtGC0L7RgNC+0Lwg0YXRgNCw0L3Rj9GC0YHRjyDQstGB0LUg0LDRgNCz0YPQvNC10L3RgtGLLCDQv9C10YDQtdC00LDQvdC90YvQtSDQsiDRhNGD0L3QutGG0LjRjlxuICAgIC8vIFtdLnNsaWNlKCkgLSDRgdC+0LfQtNCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXG4gICAgLyogYXJyYXlPZkluZGV4ZXMgLSDQvNCw0YHRgdC40LIsINC60L7RgtC+0YDRi9C5INGB0L7QtNC10YDQttC40YIg0LLRgdC1INCw0YDQs9GD0LzQtdC90YLRiyAo0LrRgNC+0LzQtSDQv9C10YDQstC+0LPQvikg0L/QtdGA0LXQtNCw0L3QvdGL0LUg0LIg0YTRg9C90LrRhtC40Y5cbiAgICAgICAgICAg0K3RgtC+INC80LDRgdGB0LjQsiDQuNC90LTQtdC60YHQvtCyLCDQutC+0YLQvtGA0YvQtSDQvdGD0LbQvdC+INGD0LTQsNC70LjRgtGMINC40Lcg0L7RgdC90L7QstC90L7Qs9C+INC80LDRgdGB0LjQstCwIGFyciAqL1xuICAgIGNvbnN0IGFycmF5T2ZJbmRleGVzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgLy8g0JLQtdGA0L3Rg9GC0Ywg0L7RgtGE0LjQu9GM0YLRgNC+0LLQsNC90L3Ri9C5INC80LDRgdGB0LjQslxuICAgIHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpbmRleCkgPT5cblxuICAgIC8vINCd0LDQv9GA0LjQvNC10YAgYXJyYXlPZkluZGV4ZXMgPSBbMV0sINGC0L4g0LXRgdGC0Ywg0L3Rg9C20L3QviDRg9C00LDQu9C40YLRjCDQvtC00LjQvSDRjdC70LXQvNC10L3RgiDQv9C+INC40L3QtNC10LrRgdGDIDFcbiAgICAvLyBpbmRleE9mIC0g0LLQvtC30LLRgNCw0YnQsNC10YIg0LjQvdC00LXQutGBINC40YHQutC+0LzQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsC4g0J3QsNC/0YDQuNC80LXRgDogWydhJywnYiddLmluZGV4T2YoJ2InKSAvLy0+IDFcbiAgICAvLyDQmtCw0LbQtNGL0Lkg0Y3Qu9C10LzQtdC90YIg0LzQsNGB0YHQuNCy0LAgYXJyINGB0LLQtdGA0Y/QtdGCINGB0LLQvtC5INC40L3QtNC10LrRgSDRgSDQuNC90LTQtdC60YHQsNC80Lgg0LIgYXJyYXlPZkluZGV4ZXMuXG4gICAgLy8g0JXRgdC70Lgg0LXQs9C+INC40L3QtNC10LrRgdCwINCyIGFycmF5T2ZJbmRleGVzINC90LXRgiwg0YLQviDQvNC10YLQvtC0IGluZGV4T2Yg0LLQtdGA0L3RkdGCIC0xLCDQt9C90LDRh9C40YIg0LHRg9C00LXRgiB0cnVlINC4INGN0LvQtdC80LXQvdGCINC90LUg0LHRg9C00LXRgiDRg9C00LDQu9GR0L0g0LjQtyDQvNCw0YHRgdC40LLQsFxuICAgICAgYXJyYXlPZkluZGV4ZXMuaW5kZXhPZihpbmRleCkgPT0gLTEpO1xuICB9Ly8gcmVtb3ZlXG59XG4iLCJleHBvcnQgY2xhc3MgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxuXG4gIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cblxuICBzdGF0aWMgZ2V0IFNUQVJUX0dBTUUoKSB7IHJldHVybiAnU1RBUlRfR0FNRSc7IH1cblxuICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XG5cbiAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTic7IH1cblxuICBzdGF0aWMgZ2V0IEZJTklTSEVEKCkgeyByZXR1cm4gJ0ZJTklTSEVEJzsgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XG4gIH1cblxuICBmaW5pc2goc3RhdHVzKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cblxuICByZW5kZXIodGltZSkge1xuXG4gIH1cbn1cbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5pbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gJy4uL2NhbWVyYSc7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSAnLi4vY29sbGlkZXInO1xyXG5pbXBvcnQgeyBBcnJvdyB9IGZyb20gJy4uL3Byb2plY3RpbGVzL2Fycm93JztcclxuaW1wb3J0IHsgV2F2ZXMgfSBmcm9tICcuLi93YXZlcyc7XHJcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IFJlbW92ZUZyb21BcnJheSB9IGZyb20gJy4uL3JlbW92ZS1mcm9tLWFycmF5JztcclxuaW1wb3J0IHsgaXNBZ3Jlc3NpdmUgfSBmcm9tICcuLi9haXMvaXNBZ3Jlc3NpdmUnO1xyXG5pbXBvcnQge1xyXG4gIGFycm93UGxheUF1ZGlvLCBnYW1lUGxheUF1ZGlvLCBnYW1lT3ZlclBsYXlBdWRpbywgZ2FtZVdpblBsYXlBdWRpbyxcclxufSBmcm9tICcuLi9hdWRpby1wbGF5YmFjay9hdWRpb3MnO1xyXG5pbXBvcnQgeyBRdWVzdFBlcnNvbiB9IGZyb20gJy4uL3F1ZXN0LXBlcnNvbic7XHJcbmltcG9ydCB7IHNob3dNb2RhbERpYWxvZywgcnVuT25jZVF1ZXN0IH0gZnJvbSAnLi4vbW9kYWwtZGlhbG9ndWUnO1xyXG5pbXBvcnQgeyBzaG93VHJhaW5pbmcgfSBmcm9tICcuLi90cmFpbmluZyc7XHJcbmltcG9ydCB7IG5leHRMZXZlbEluZm8gfSBmcm9tICcuLi9uZXdMZXZlbCc7XHJcbmltcG9ydCB7IGFsbERlYXRoT3JrcywgdXBkYXRlUXVlc3QsIHF1ZXN00KFvbXBsZXRlZCB9IGZyb20gJy4uL2dldC1xdWVzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUxldmVsIGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKTtcclxuICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICBpbWFnZU5hbWU6ICd0aWxlcycsXHJcbiAgICAgIGltYWdlV2lkdGg6IDY0MCxcclxuICAgICAgaW1hZ2VIZWlnaHQ6IDY0MCxcclxuICAgIH0pO1xyXG5cclxuICAgIGlzQWdyZXNzaXZlLmJlY29tZVBlYWNlZnVsKCk7Ly8g0KHQtNC10LvQsNGC0Ywg0L7RgNC60L7QsiDQvNC40YDQvdGL0LzQuFxyXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZS5jb250cm9sLCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnBsYXllci54ID0gMjI0O1xyXG4gICAgdGhpcy5wbGF5ZXIueSA9IDExODtcclxuXHJcbiAgICAvLyB0aGlzLnBsYXllci54ID0gOTkwO1xyXG4gICAgLy8gdGhpcy5wbGF5ZXIueSA9IDEwNDA7XHJcblxyXG4gICAgdGhpcy5xdWVzdFBlcnNvbiA9IG5ldyBRdWVzdFBlcnNvbigpO1xyXG4gICAgdGhpcy5xdWVzdFBlcnNvbi54ID0gOTQwO1xyXG4gICAgdGhpcy5xdWVzdFBlcnNvbi55ID0gOTA7XHJcblxyXG4gICAgdGhpcy5jb2xsaWRlciA9IG5ldyBDb2xsaWRlcigpOy8vINCj0YfQuNGC0YvQstCw0LXRgiDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNC1INC80LXQttC00YMg0L7QsdGK0LXQutGC0LDQvNC4LCDQvdCw0L/RgNC40LzQtdGALCDQvdC1INC00LDRkdGCINC/0YDQvtGF0L7QtNC40YLRjCDQvtCx0YrQtdC60YLQsNC8INGB0LrQstC+0LfRjCDQtNGA0YPQsyDQtNGA0YPQs9CwXHJcblxyXG4gICAgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10Lwgd2VicGFjayDQv9C+0Y3RgtC+0LzRgyDQt9Cw0LPRgNGD0LfRh9C40LoganNvbiDRhNCw0LnQu9C+0LIg0YDQsNCx0L7RgtCw0LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG4gICAgY29uc3QgbWFwRGF0YSA9IHJlcXVpcmUoJy4uL21hcHMvbGV2ZWwxLmpzb24nKTtcclxuICAgIHRoaXMubWFwID0gdGhpcy5nYW1lLnNjcmVlbi5jcmVhdGVNYXAoJ2xldmVsMScsIG1hcERhdGEsIHRoaXMudGlsZXMpOy8vIGNyZWF0ZU1hcCDQstC+0LfQstGA0LDRidCw0LXRgiDQvtCx0YrQtdC60YIgVGlsZU1hcFxyXG4gICAgdGhpcy5tYWluQ2FtZXJhID0gbmV3IENhbWVyYSh7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0LFxyXG4gICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgbGltaXRZOiB0aGlzLm1hcC5oZWlnaHQgLSB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYWluQ2FtZXJhLnNwZWNpYWxQb3NpdGlvbigpOy8vINCX0LDQs9C90LDRgtGMINC60LDQvNC10YDRgyDQsiDRgdCw0LzRi9C5INGD0LPQvtC7XHJcbiAgICB0aGlzLm1haW5DYW1lcmEud2F0Y2godGhpcy5wbGF5ZXIpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5zZXRDYW1lcmEodGhpcy5tYWluQ2FtZXJhKTtcclxuXHJcbiAgICB0aGlzLmNvbGxpZGVyLmFkZFN0YXRpY1NoYXBlcyhtYXBEYXRhKTtcclxuICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keSh0aGlzLnBsYXllcik7XHJcbiAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5xdWVzdFBlcnNvbik7XHJcblxyXG4gICAgdGhpcy5vcmNBcm15ID0gW107Ly8g0JzQsNGB0YHQuNCyINC+0YDQutC+0LIsINC90L7QstGL0LUg0YHRgtGA0LXQu9GLINCx0YPQtNGD0YIg0LTQvtCx0LDQstC70Y/RgtGM0YHRjyDRgdGO0LTQsCwg0LAg0LzQtdGC0L7QtCByZW5kZXIg0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstGL0LLQsNGC0Ywg0LLRgdC1INC+0LHRitC10LrRgtGLINC40Lcg0Y3RgtC+0LPQviDQvNCw0YHRgdC40LLQsFxyXG4gICAgdGhpcy53YXZlcyA9IG5ldyBXYXZlcyh0aGlzLmdhbWUpOy8vINCa0L7QvdGC0YDQvtC70LjRgNGD0LXRgiDQv9C+0Y/QstC70LXQvdC40LUg0L/RgNC+0YLQuNCy0L3QuNC60L7QslxyXG5cclxuICAgIHRoaXMud2F2ZXMuaW5pdCgpO1xyXG5cclxuICAgIHRoaXMuaW50ZXJmYWNlID0gbmV3IEludGVyZmFjZSh0aGlzLmdhbWUsIHRoaXMud2F2ZXMpOy8vINCo0LrQsNC70LAg0LfQtNC+0YDQvtCy0YzRjywg0YLQsNC50LzQtdGAINCyINGD0LPQu9GDINGN0LrRgNCw0L3QsFxyXG4gICAgdGhpcy5wcm9qZWN0aWxlcyA9IFtdOy8vINCc0LDRgdGB0LjQsiDRgdGC0YDQtdC7LCDQvdC+0LLRi9C1INGB0YLRgNC10LvRiyDQsdGD0LTRg9GCINC00L7QsdCw0LLQu9GP0YLRjNGB0Y8g0YHRjtC00LAsINCwINC80LXRgtC+0LQgcmVuZGVyINCx0YPQtNC10YIg0L7RgtGA0LjRgdC+0LLRi9Cy0LDRgtGMINCy0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcclxuICAgIHRoaXMuZ2FtZU92ZXJUcmlnZ2VyID0gZmFsc2U7Ly8g0JXRgdC70LggaW50ZXJmYWNlINGB0LTQtdC70LDQtdGCINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjiB0cnVlLCDQv9C10YDQtdGF0L7QtNC40Lwg0Log0L/RgNC+0LjQs9GA0YvRiNC90L7QuSDRgdGG0LXQvdC1XHJcbiAgICB0aGlzLndpblRyaWdnZXIgPSBmYWxzZTsvLyDQldGB0LvQuCBpbnRlcmZhY2Ug0YHQtNC10LvQsNC10YIg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOIHRydWUsINC/0LXRgNC10YXQvtC00LjQvCDQuiDQv9C+0LHQtdC00L3QvtC5INGB0YbQtdC90LVcclxuICAgIC8vIHVwZGF0ZU1vZGFsRGlhbG9nKCk7XHJcbiAgICBzaG93VHJhaW5pbmcoKTtcclxuICAgIGdhbWVXaW5QbGF5QXVkaW8oZmFsc2UpO1xyXG4gICAgZ2FtZVBsYXlBdWRpbyh0cnVlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICBpZiAodGhpcy5nYW1lT3ZlclRyaWdnZXIpIHsgLy8g0JfQsNC60L7QvdGH0LjQvCDQuNCz0YDRg1xyXG4gICAgICBnYW1lUGxheUF1ZGlvKGZhbHNlKTtcclxuICAgICAgZ2FtZU92ZXJQbGF5QXVkaW8oKTtcclxuICAgICAgdXBkYXRlUXVlc3QoKTtcclxuICAgICAgdGhpcy5maW5pc2goU2NlbmUuR0FNRV9PVkVSKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBsYXllci51cGRhdGUodGltZSk7XHJcbiAgICBpZiAodGhpcy5wcm9qZWN0aWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgoYXJyb3csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGFycm93LmFjdGl2ZSkgeyAvLyBhY3RpdmUg0YHRgtCw0L3QvtCy0LjRgtGB0Y8gdHJ1ZSDQsiDQvNC10YLQvtC00LUgUGxheWVyIC0+IEJvZHkuc2hvb3QoKVxyXG4gICAgICAgICAgYXJyb3cudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyb3cuZGVsZXRlZCkge1xyXG4gICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5wcm9qZWN0aWxlcywgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3JjQXJteS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMub3JjQXJteS5mb3JFYWNoKChvcmMpID0+IHtcclxuICAgICAgICBvcmMudXBkYXRlKHRpbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5xdWVzdFBlcnNvbi54LCB0aGlzLnF1ZXN0UGVyc29uLnkpO1xyXG5cclxuICAgIHRoaXMucXVlc3RQZXJzb24udXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5jb2xsaWRlci51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLm1haW5DYW1lcmEudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XHJcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5tYXApO1xyXG5cclxuICAgIGlmICh0aGlzLm9yY0FybXkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm9yY0FybXkuZm9yRWFjaCgob3JjKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKG9yYy52aWV3KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucGxheWVyLnZpZXcpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb2plY3RpbGVzLmxlbmd0aCA+IDApIHsgLy8g0J7RgtGA0LjRgdC+0LLQutCwINGB0YLRgNC10LtcclxuICAgICAgdGhpcy5wcm9qZWN0aWxlcy5mb3JFYWNoKChhcnJvdykgPT4ge1xyXG4gICAgICAgIGlmIChhcnJvdy5hY3RpdmUpIHsgLy8gYWN0aXZlINGB0YLQsNC90L7QstC40YLRgdGPIHRydWUg0LIg0LzQtdGC0L7QtNC1IFBsYXllciAtPiBCb2R5LnNob290KClcclxuICAgICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZShhcnJvdy52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnF1ZXN0UGVyc29uLnZpZXcpO1xyXG4gICAgdGhpcy53YXZlcy51cGRhdGUodGltZSk7XHJcbiAgICB0aGlzLmludGVyZmFjZS51cGRhdGUodGltZSk7XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcblxyXG4gICAgaWYgKHRoaXMucGxheWVyLnggPj0gODcwICYmIHRoaXMucGxheWVyLnggPD0gMTA3MCAmJiB0aGlzLnBsYXllci55ID49IDEwMCAmJiB0aGlzLnBsYXllci55IDw9IDEzMCkge1xyXG4gICAgICBpZiAocnVuT25jZVF1ZXN0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgc2hvd01vZGFsRGlhbG9nKCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdvIHRvIG5leHQgbGV2ZWwgZm9yIG1hcFxyXG4gICAgaWYgKHRoaXMucGxheWVyLnggPj0gMTEwMCAmJiB0aGlzLnBsYXllci54IDw9IDEyMDAgJiYgdGhpcy5wbGF5ZXIueSA+PSAzMCAmJiB0aGlzLnBsYXllci55IDw9IDYwKSB7XHJcbiAgICAgIGlmIChhbGxEZWF0aE9ya3MgPj0gMTApIHtcclxuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgICAgIGltYWdlTmFtZTogJ3RpbGVzMicsXHJcbiAgICAgICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgICAgICBpbWFnZUhlaWdodDogNjQwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICBuZXh0TGV2ZWxJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZS5jb250cm9sLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIueCA9IDIyNDtcclxuICAgICAgICB0aGlzLnBsYXllci55ID0gMTE4O1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKCk7Ly8g0KPRh9C40YLRi9Cy0LDQtdGCINCy0LfQsNC40LzQvtC00LXQudGB0YLQstC40LUg0LzQtdC20LTRgyDQvtCx0YrQtdC60YLQsNC80LgsINC90LDQv9GA0LjQvNC10YAsINC90LUg0LTQsNGR0YIg0L/RgNC+0YXQvtC00LjRgtGMINC+0LHRitC10LrRgtCw0Lwg0YHQutCy0L7Qt9GMINC00YDRg9CzINC00YDRg9Cz0LBcclxuXHJcbiAgICAgICAgY29uc3QgbWFwRGF0YSA9IHJlcXVpcmUoJy4uL21hcHMvbGV2ZWwyLmpzb24nKTtcclxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKCdsZXZlbDInLCBtYXBEYXRhLCB0aGlzLnRpbGVzKTsvLyBjcmVhdGVNYXAg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCIFRpbGVNYXBcclxuICAgICAgICB0aGlzLm1haW5DYW1lcmEgPSBuZXcgQ2FtZXJhKHtcclxuICAgICAgICAgIHdpZHRoOiB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgICAgICAgIGxpbWl0WDogdGhpcy5tYXAud2lkdGggLSB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgbGltaXRZOiB0aGlzLm1hcC5oZWlnaHQgLSB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1haW5DYW1lcmEuc3BlY2lhbFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLndhdGNoKHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnNldENhbWVyYSh0aGlzLm1haW5DYW1lcmEpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZFN0YXRpY1NoYXBlcyhtYXBEYXRhKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5wbGF5ZXIpO1xyXG5cclxuICAgICAgICAvLyDRg9Cx0LjRgNCw0LXQvCDQv9C10YDRgdC+0L3QsNC20LXQuSDQutGD0LTQsCDQv9C+0LTQsNC70YzRiNC1XHJcbiAgICAgICAgdGhpcy5xdWVzdFBlcnNvbi54ID0gMTQwMDtcclxuICAgICAgICB0aGlzLnF1ZXN0UGVyc29uLnkgPSAxMDAwO1xyXG4gICAgICAgIC8vIHRoaXMub3JjLnggPSAxNDAwO1xyXG4gICAgICAgIC8vIHRoaXMub3JjLnkgPSAxMDAwO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm9yY0FybXkgPSBbXTsvLyDQnNCw0YHRgdC40LIg0L7RgNC60L7Qsiwg0L3QvtCy0YvQtSDRgdGC0YDQtdC70Ysg0LHRg9C00YPRgiDQtNC+0LHQsNCy0LvRj9GC0YzRgdGPINGB0Y7QtNCwLCDQsCDQvNC10YLQvtC0IHJlbmRlciDQsdGD0LTQtdGCINC+0YLRgNC40YHQvtCy0YvQstCw0YLRjCDQstGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwXHJcbiAgICAgICAgLy8gdGhpcy53YXZlcyA9IG5ldyBXYXZlcyh0aGlzLmdhbWUpO1xyXG5cclxuICAgICAgICB0aGlzLmludGVyZmFjZSA9IG5ldyBJbnRlcmZhY2UodGhpcy5nYW1lKTsvLyDQqNC60LDQu9CwINC30LTQvtGA0L7QstGM0Y8sINGC0LDQudC80LXRgCDQsiDRg9Cz0LvRgyDRjdC60YDQsNC90LBcclxuICAgICAgICB0aGlzLnByb2plY3RpbGVzID0gW107Ly8g0JzQsNGB0YHQuNCyINGB0YLRgNC10LssINC90L7QstGL0LUg0YHRgtGA0LXQu9GLINCx0YPQtNGD0YIg0LTQvtCx0LDQstC70Y/RgtGM0YHRjyDRgdGO0LTQsCwg0LAg0LzQtdGC0L7QtCByZW5kZXIg0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstGL0LLQsNGC0Ywg0LLRgdC1INC+0LHRitC10LrRgtGLINC40Lcg0Y3RgtC+0LPQviDQvNCw0YHRgdC40LLQsFxyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUcmlnZ2VyID0gZmFsc2U7Ly8g0JXRgdC70LggaW50ZXJmYWNlINGB0LTQtdC70LDQtdGCINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjiB0cnVlLCDQv9C10YDQtdGF0L7QtNC40Lwg0Log0L/RgNC+0LjQs9GA0YvRiNC90L7QuSDRgdGG0LXQvdC1XHJcbiAgICAgICAgdGhpcy53aW5UcmlnZ2VyID0gZmFsc2U7Ly8g0JXRgdC70LggaW50ZXJmYWNlINGB0LTQtdC70LDQtdGCINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjiB0cnVlLCDQv9C10YDQtdGF0L7QtNC40Lwg0Log0L/QvtCx0LXQtNC90L7QuSDRgdGG0LXQvdC1XHJcbiAgICAgICAgLy8gdXBkYXRlTW9kYWxEaWFsb2coKTtcclxuICAgICAgICB1cGRhdGVRdWVzdCgpO1xyXG4gICAgICAgIGdhbWVXaW5QbGF5QXVkaW8oZmFsc2UpO1xyXG4gICAgICAgIGdhbWVQbGF5QXVkaW8odHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnBsYXllci54ID49IDYwMCAmJiB0aGlzLnBsYXllci54IDw9IDcwMCAmJiB0aGlzLnBsYXllci55ID49IDExNTAgJiYgdGhpcy5wbGF5ZXIueSA8PSAxMzAwKSB7IC8vINCX0LDQutC+0L3Rh9C40Lwg0LjQs9GA0YNcclxuICAgICAgZ2FtZVBsYXlBdWRpbyhmYWxzZSk7XHJcbiAgICAgIHVwZGF0ZVF1ZXN0KCk7XHJcbiAgICAgIGdhbWVXaW5QbGF5QXVkaW8odHJ1ZSk7XHJcbiAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkdBTUVfV0lOKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob290aW5nKCkgeyAvLyDQodGC0YDQtdC70YzQsdCwINC40LPRgNC+0LrQsFxyXG4gICAgY29uc3QgYXJyb3cgPSBuZXcgQXJyb3coJ2Rvd24nLCA0MDAsIHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xyXG4gICAgdGhpcy5wbGF5ZXIuYWRkQXJyb3coYXJyb3cpO1xyXG4gICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKGFycm93KTsvLyDQktGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwINCx0YPQtNGD0YIg0L7RgtGA0LjRgdC+0LLQsNC90Ysg0LIg0LzQtdGC0L7QtNC1IHJlbmRlclxyXG4gICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KGFycm93KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gYXJyb3dQbGF5QXVkaW8oKSwgNTAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlciBleHRlbmRzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgIHN1cGVyKGdhbWUpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KCk7XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aGlzLmdhbWUuY29udHJvbC5lbnRlcikgeyAvLyDQn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcImVudGVyXCIg0L3QsNGH0LDRgtGMINC90L7QstGD0Y4g0LjQs9GA0YNcbiAgICAgIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcih0aW1lKSB7XG4gICAgdGhpcy51cGRhdGUodGltZSk7XG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3RpdGxlX2JnJyk7XG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ2dhbWVfb3ZlcicpO1xuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVdpbiBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZS5jb250cm9sLmVudGVyKSB7IC8vINCf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwiZW50ZXJcIiDQvdCw0YfQsNGC0Ywg0L3QvtCy0YPRjiDQuNCz0YDRg1xyXG4gICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9iZycpO1xyXG4gICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3SW1hZ2UoMCwgMCwgJ3lvdV93aW4nKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuLi9zY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xuICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgc3VwZXIoZ2FtZSk7XG4gICAgdGhpcy5sb2FkZWRBdCA9IDA7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKTtcbiAgICB0aGlzLmxvYWRlZEF0ID0gMDtcbiAgfVxuXG4gIHVwZGF0ZSh0aW1lKSB7XG4gICAgaWYgKHRoaXMubG9hZGVkQXQgPT0gMCAmJiB0aGlzLmdhbWUuc2NyZWVuLmlzSW1hZ2VzTG9hZGVkID09IHRydWUpIHtcbiAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApIHtcbiAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHRpbWUpIHtcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDYwLCA4MCwgJ0xvYWRpbmcuLi4nKTtcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xuXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgIHN1cGVyKGdhbWUpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBzdXBlci5pbml0KCk7XG4gIH1cblxuICB1cGRhdGUodGltZSkge1xuICAgIGlmICh0aGlzLmdhbWUuY29udHJvbC5lbnRlcikge1xuICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKHRpbWUpIHtcbiAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfYmcnKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfbmFtZScpO1xuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9zdGFydCcpO1xuICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsIDAsICd0aXRsZV9vcHRpb24nKTtcbiAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLCAwLCAndGl0bGVfZXhpdCcpO1xuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL2ltYWdlLWxvYWRlcic7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tICcuL3RpdGUtbWFwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xyXG4gICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hZGRTdHlsZXNUb0NhbnZhcygpO1xyXG4gIH1cclxuXHJcbiAgYWRkU3R5bGVzVG9DYW52YXMoKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvdHRvbSA9ICcwJztcclxuICAgIHRoaXMuY2FudmFzLnN0eWxlLm1hcmdpbiA9ICdhdXRvJztcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcjRkZGRkZGJztcclxuICB9XHJcblxyXG4gIHNldENhbWVyYShjYW1lcmEpIHtcclxuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgdGhpcy5pc0NhbWVyYVNldCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBsb2FkSW1hZ2VzKGltYWdlRmlsZXMpIHtcclxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBJbWFnZUxvYWRlcihpbWFnZUZpbGVzKTtcclxuICAgIGxvYWRlci5sb2FkKCkudGhlbigobmFtZXMpID0+IHtcclxuICAgICAgdGhpcy5pbWFnZXMgPSBPYmplY3QuYXNzaWduKHRoaXMuaW1hZ2VzLCBsb2FkZXIuaW1hZ2VzKTtcclxuICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGVsZW1lbnRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KSB7XHJcbiAgICBjb25zdCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgbWFwSW1hZ2Uud2lkdGggPSBtYXBEYXRhLndpZHRoICogbWFwRGF0YS50aWxld2lkdGg7XHJcbiAgICBtYXBJbWFnZS5oZWlnaHQgPSBtYXBEYXRhLmhlaWdodCAqIG1hcERhdGEudGlsZWhlaWdodDtcclxuICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBJbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29uc3QgaGl0Ym94ZXMgPSBbXTtcclxuICAgIGxldCByb3c7IGxldFxyXG4gICAgICBjb2w7XHJcbiAgICBtYXBEYXRhLmxheWVycy5mb3JFYWNoKChsYXllcikgPT4ge1xyXG4gICAgICBpZiAobGF5ZXIudHlwZSA9PSAndGlsZWxheWVyJykge1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgICAgY29sID0gMDtcclxuICAgICAgICBsYXllci5kYXRhLmZvckVhY2goKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcclxuICAgICAgICAgICAgICB0aWxlc2V0LmdldFNvdXJjZVgoaW5kZXgpLCB0aWxlc2V0LmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgICAgaWYgKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHtcclxuICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxheWVyLnR5cGUgPT0gJ29iamVjdGdyb3VwJykge1xyXG4gICAgICAgIGhpdGJveGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cy5tYXAoKG9iaikgPT4gKHtcclxuICAgICAgICAgIHgxOiBvYmoueCwgeDI6IG9iai54ICsgb2JqLndpZHRoLCB5MTogb2JqLnksIHkyOiBvYmoueSArIG9iai5oZWlnaHQsXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmltYWdlc1tuYW1lXSA9IG1hcEltYWdlO1xyXG4gICAgcmV0dXJuIG5ldyBUaWxlTWFwKHtcclxuICAgICAgaW1hZ2VOYW1lOiBuYW1lLFxyXG4gICAgICBzb3VyY2VYOiAwLFxyXG4gICAgICBzb3VyY2VZOiAwLFxyXG4gICAgICB3aWR0aDogbWFwSW1hZ2Uud2lkdGgsXHJcbiAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxyXG4gICAgICBoaXRib3hlcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmlsbChjb2xvcikge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaW50KHgsIHksIHRleHQpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI0ZGRkZGRic7XHJcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9ICcyMnB4IEdlb3JnaWEnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0ltYWdlKHgsIHksIGltYWdlTmFtZSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLCB4LCB5KTtcclxuICB9XHJcblxyXG4gIGRyYXdTcHJpdGUoc3ByaXRlKSB7XHJcbiAgICBsZXQgc3ByaXRlWCA9IHNwcml0ZS54O1xyXG4gICAgbGV0IHNwcml0ZVkgPSBzcHJpdGUueTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NhbWVyYVNldCkge1xyXG4gICAgICBzcHJpdGVYIC09IHRoaXMuY2FtZXJhLng7XHJcbiAgICAgIHNwcml0ZVkgLT0gdGhpcy5jYW1lcmEueTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIChzcHJpdGVYID49IHRoaXMud2lkdGgpXHJcbiAgICAgIHx8IChzcHJpdGVZID49IHRoaXMuaGVpZ2h0KVxyXG4gICAgICB8fCAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIDw9IDApXHJcbiAgICAgIHx8ICgoc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIDw9IDApXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvdXJjZVggPSBzcHJpdGUuc291cmNlWCArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVgpKTtcclxuICAgIGNvbnN0IHNvdXJjZVkgPSBzcHJpdGUuc291cmNlWSArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVkpKTtcclxuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5taW4odGhpcy53aWR0aCwgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBNYXRoLm1heCgwLCBzcHJpdGVYKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKHRoaXMuaGVpZ2h0LCBzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgLSBNYXRoLm1heCgwLCBzcHJpdGVZKTtcclxuXHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICBzb3VyY2VYLFxyXG4gICAgICBzb3VyY2VZLFxyXG4gICAgICB3aWR0aCxcclxuICAgICAgaGVpZ2h0LFxyXG4gICAgICBNYXRoLm1heCgwLCBzcHJpdGVYKSxcclxuICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWSksXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBoZWlnaHQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NCxcbiAgfSkge1xuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgIHRoaXMuaW1hZ2VXaWR0aCA9IGltYWdlV2lkdGg7XG4gICAgdGhpcy5pbWFnZUhlaWdodCA9IGltYWdlSGVpZ2h0O1xuICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcbiAgICB0aGlzLnNwcml0ZUhlaWdodCA9IHNwcml0ZUhlaWdodDtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbihpbmRleGVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpIHtcbiAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgZnJhbWVzOiBpbmRleGVzLm1hcCgoaW5kZXgpID0+ICh7IHN4OiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KSB9KSksXG4gICAgICBzcGVlZCxcbiAgICAgIHJlcGVhdCxcbiAgICAgIGF1dG9ydW4sXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHQsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTcHJpdGUoaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFNwcml0ZSh7XG4gICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgc291cmNlWDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSxcbiAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXG4gICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHQsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTb3VyY2VYKGluZGV4KSB7XG4gICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XG4gIH1cblxuICBnZXRTb3VyY2VZKGluZGV4KSB7XG4gICAgcmV0dXJuIE1hdGgudHJ1bmMoKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMuaW1hZ2VXaWR0aCkgKiB0aGlzLnNwcml0ZUhlaWdodDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpbWFnZU5hbWUsIHNvdXJjZVgsIHNvdXJjZVksIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0LFxuICB9KSB7XG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgdGhpcy5zb3VyY2VYID0gc291cmNlWDtcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gIH1cblxuICBzZXRYWSh4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGV4dEluZm8ge1xuICBjb25zdHJ1Y3RvcihzY3JlZW4pIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XG4gICAgdGhpcy5zaG93VGV4dEJvb2xlYW4gPSBmYWxzZTsvLyDQn9C+0LrQsNC30YvQstCw0YLRjCDQu9C4INGC0LXQutGB0YJcbiAgICB0aGlzLnRleHQgPSAnJztcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLmhvd0xvbmdUb1Nob3cgPSA1MDAwOy8vINCh0LrQvtC70YzQutC+INCy0YDQtdC80LXQvdC4INC/0L7QutCw0LfRi9Cy0LDRgtGMINGC0LXQutGB0YJcbiAgICB0aGlzLnRpbWVUb1N0b3AgPSAwOy8vINCS0YDQtdC80Y8g0LrQvtCz0LTQsCDQvdGD0LbQvdC+INC30LDQstC10YDRiNC40YLRjCDQv9C+0LrQsNC3XG4gICAgdGhpcy5mb250U2l6ZSA9IDA7XG4gICAgdGhpcy5zdGFydEZvbnRTaXplID0gMTUwO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG93VGV4dEJvb2xlYW4pIHtcbiAgICAgIHRoaXMuZm9udFNpemUgLT0gKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSAvIDEwO1xuICAgICAgdGhpcy5zZXRYWSgpO1xuICAgICAgdGhpcy5zY3JlZW4ucHJpbnQodGhpcy54LCB0aGlzLnksIHRoaXMudGV4dCwgdGhpcy5mb250U2l6ZSk7XG4gICAgICBpZiAodGltZSA+IHRoaXMudGltZVRvU3RvcCkge1xuICAgICAgICB0aGlzLnNob3dUZXh0Qm9vbGVhbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgfVxuXG4gIHNob3dUZXh0KHRleHQsIHRpbWUpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuc2hvd1RleHRCb29sZWFuID0gdHJ1ZTtcbiAgICB0aGlzLnRpbWVUb1N0b3AgPSB0aW1lICsgdGhpcy5ob3dMb25nVG9TaG93O1xuICAgIHRoaXMuZm9udFNpemUgPSB0aGlzLnN0YXJ0Rm9udFNpemU7XG4gICAgdGhpcy5zZXRYWSgpO1xuICB9XG5cbiAgc2V0WFkoKSB7XG4gICAgdGhpcy54ID0gdGhpcy5zY3JlZW4ud2lkdGggLyAyIC0gdGhpcy5mb250U2l6ZSAqIDEuNTtcbiAgICB0aGlzLnkgPSB0aGlzLnNjcmVlbi5oZWlnaHQgLyAyICsgdGhpcy5mb250U2l6ZSAvIDQuNTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xuXG5leHBvcnQgY2xhc3MgVGlsZU1hcCBleHRlbmRzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGl0Ym94ZXMgPSBwcm9wcy5oaXRib3hlcyB8fCBbXTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dUcmFpbmluZygpIHtcclxuICAkKCcjZXhhbXBsZU1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAvLyAkKCcjc3RhdGljQmFja2Ryb3AnKS5tb2RhbCgnaGFuZGxlVXBkYXRlJyk7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcbiAgICB0aGlzLnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKTtcbiAgfVxuXG4gIHNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKSB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAndXAnOlxuICAgICAgICB0aGlzLnkgPSAtc3BlZWQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgdGhpcy55ID0gc3BlZWQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRoaXMueCA9IHNwZWVkO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRoaXMueCA9IC1zcGVlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgbW92ZShvYmplY3QsIGR0KSB7XG4gICAgb2JqZWN0LnggKz0gZHQgKiAodGhpcy54IC8gMTAwMCk7XG4gICAgb2JqZWN0LnkgKz0gZHQgKiAodGhpcy55IC8gMTAwMCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE9yYyB9IGZyb20gJy4vb3JjJztcblxuZXhwb3J0IGNsYXNzIFdhdmVzIHtcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5vcmNBcm15ID0gZ2FtZS5jdXJyZW50U2NlbmUub3JjQXJteTsvLyDQnNCw0YHRgdC40LIsINGB0L7QtNC10YDQttCw0YnQuNC5INCy0YHQtdGFINGB0YPRidC10YHRgtCy0YPRjtGJ0LjRhSDQvtGA0LrQvtCyLiDQrdGC0L7RgiDQutC70LDRgdGBINC/0L7Qv9C+0LvQvdGP0LXRgiDRjdGC0L7RgiDQvNCw0YHRgdC40LIg0L3QvtCy0YvQvNC4INC+0YDQutCw0LzQuFxuXG4gICAgdGhpcy5jb2xsaWRlciA9IGdhbWUuY3VycmVudFNjZW5lLmNvbGxpZGVyOy8vINCR0YPQtNC10Lwg0LTQvtCx0LDQstC70Y/RgtGMINC+0YDQutC+0LIg0LIg0LrQvtC70LvQsNC50LTQtdGAXG4gICAgdGhpcy5wbGF5ZXIgPSBnYW1lLmN1cnJlbnRTY2VuZS5wbGF5ZXI7Ly8g0J/QtdGA0LXQtNCw0ZHQvCDQuNCz0YDQvtC60LAsINGH0YLQvtCx0Ysg0L7RgNC6INC80L7QsyDRgdC70LXQtNC40YLRjCDQt9CwINC90LjQvCDQuCDQsNGC0LDQutC+0LLQsNGC0Ywg0LXQs9C+XG4gICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy50aW1lTGVmdEZvck5leHRXYXZlID0gNTAwOy8vINCi0LDQudC80LXRgCDQtNC70Y8g0L7QsdGA0LDRgtC90L7Qs9C+INC+0YLRgdGH0ZHRgtCwLiDQn9C10YDQstCw0Y8g0LLQvtC70L3QsCDQvdCw0YfQvdGR0YLRgdGPINGH0LXRgNC10LcgMTAwMCDQvNGBXG4gICAgdGhpcy50aW1lRm9yTmV4dFdhdmUgPSAxMDAwMDsvLyDQmtC+0L3RgdGC0LDQvdGC0LAsINGB0LvQtdC00YPRjtGJ0LDRjyDQstC+0LvQvdCw0Y8g0LHRg9C00LXRgiDRh9C10YDQtdC3INGN0YLQviDQstGA0LXQvNGPXG4gIH1cblxuICBpbml0KCkge1xuICAgIC8vIHRoaXMud2F2ZXMgPSAwO1xuICB9XG5cbiAgdXBkYXRlKHRpbWUpIHtcbiAgICBpZiAodGhpcy5sYXN0VGltZSA9PSAwKSB7XG4gICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSA8IDApIHtcbiAgICAgIHRoaXMubmV4dFdhdmUodGltZSk7XG4gICAgfVxuICAgIHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSAtPSAodGltZSAtIHRoaXMubGFzdFRpbWUpO1xuICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICB9XG5cbiAgbmV4dFdhdmUodGltZSkge1xuICAgIGNvbnN0IG9yY1NxdWFkID0gW107Ly8g0KHQvtC30LTQsNGC0Ywg0LfQsCDQvtC00LjQvSDRgNCw0Lcg0L3QtdGB0LrQvtC70YzQutC40YUg0L7RgNC60L7QslxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBjb25zdCBvcmMgPSBuZXcgT3JjKHRoaXMucGxheWVyKTsvLyDQn9C10YDQtdC00LDRkdC8INC40LPRgNC+0LrQsCwg0YfRgtC+0LHRiyDQvtGA0Log0LzQvtCzINGB0LvQtdC00LjRgtGMINC30LAg0L3QuNC8INC4INCw0YLQsNC60L7QstCw0YLRjCDQtdCz0L5cbiAgICAgIG9yYy54ID0gMTI0NjsvLyDQn9C+0YHQu9C1INC+0YLQu9Cw0LTQutC4INGB0LTQtdC70LDQuSAxMzUwXG4gICAgICBvcmMueSA9IDEwMzAgKyBpICogNzA7XG4gICAgICBvcmNTcXVhZC5wdXNoKG9yYyk7XG4gICAgfVxuICAgIG9yY1NxdWFkLmZvckVhY2goKG9yYykgPT4ge1xuICAgICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KG9yYyk7XG4gICAgICB0aGlzLm9yY0FybXkucHVzaChvcmMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aW1lTGVmdEZvck5leHRXYXZlID0gdGhpcy50aW1lRm9yTmV4dFdhdmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=