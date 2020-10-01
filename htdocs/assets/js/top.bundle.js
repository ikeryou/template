/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"top": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/Main.coffee","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Main.coffee":
/*!****************************!*\
  !*** ./src/js/Main.coffee ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Entry, Main, main,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Entry = __webpack_require__(/*! ./core/Entry */ "./src/js/core/Entry.coffee");

Main = (function(superClass) {
  extend(Main, superClass);

  function Main() {
    this.init = bind(this.init, this);
    Main.__super__.constructor.call(this);
  }

  Main.prototype.init = function() {
    Main.__super__.init.call(this);
    return console.log('init');
  };

  return Main;

})(Entry);

module.exports = Main;

main = new Main();

main.init();


/***/ }),

/***/ "./src/js/core/Conf.coffee":
/*!*********************************!*\
  !*** ./src/js/core/Conf.coffee ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Conf, Util;

Util = __webpack_require__(/*! ../libs/Util */ "./src/js/libs/Util.coffee");

Conf = (function() {
  function Conf() {
    var key, ref, val;
    this.RELEASE = false;
    this.FLG = {
      PARAM: false,
      STATS: false,
      DEBUG: location.href.indexOf('_m.html') > 0,
      TEST: false
    };
    if (this.RELEASE) {
      ref = this.FLG;
      for (key in ref) {
        val = ref[key];
        this.FLG[key] = false;
      }
    }
    this.BREAKPOINT = 750;
    this.PATH_IMG = '/assets/img/';
    this.IS_PC = !isMobile.any;
    this.IS_SP = isMobile.any;
    this.IS_SIMPLE = isMobile.android.device || Util.isIE() || (!isMobile.any && Util.isSafari()) || isMobile.tablet;
    this.IS_WEBGL = Util.useWebGL();
    this.SCALE_MIN = 0.000001;
  }

  return Conf;

})();

module.exports = new Conf();


/***/ }),

/***/ "./src/js/core/Entry.coffee":
/*!**********************************!*\
  !*** ./src/js/core/Entry.coffee ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Conf, Delay, Entry, Func, Param, Profiler, Resize, Update, Util,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

window.$ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

window.THREE = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

window.TweenMax = __webpack_require__(/*! gsap */ "./node_modules/gsap/esm/index.js").TweenMax;

window.CustomEase = __webpack_require__(/*! gsap */ "./node_modules/gsap/esm/index.js").CustomEase;

window.TimelineMax = __webpack_require__(/*! gsap */ "./node_modules/gsap/esm/index.js").TimelineMax;

window.isMobile = __webpack_require__(/*! ismobilejs */ "./node_modules/ismobilejs/isMobile.js");

Param = __webpack_require__(/*! ./Param */ "./src/js/core/Param.coffee");

Profiler = __webpack_require__(/*! ./Profiler */ "./src/js/core/Profiler.coffee");

Func = __webpack_require__(/*! ./Func */ "./src/js/core/Func.coffee");

Conf = __webpack_require__(/*! ./Conf */ "./src/js/core/Conf.coffee");

Delay = __webpack_require__(/*! ../libs/Delay */ "./src/js/libs/Delay.coffee");

Util = __webpack_require__(/*! ../libs/Util */ "./src/js/libs/Util.coffee");

Resize = __webpack_require__(/*! ../libs/Resize */ "./src/js/libs/Resize.coffee");

Update = __webpack_require__(/*! ../libs/Update */ "./src/js/libs/Update.coffee");

Entry = (function() {
  function Entry() {
    this._resize = bind(this._resize, this);
    this._update = bind(this._update, this);
    this.init = bind(this.init, this);
    this.isJp = (window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage).substr(0, 2) === 'ja';
  }

  Entry.prototype.init = function() {
    Number.isNaN = Number.isNaN || function(any) {
      return typeof any === 'number' && isNaN(any);
    };
    if (isMobile.any) {
      $('body').addClass('is-sp');
      $('.is-hover').removeClass('is-hover');
      if (isMobile.android.device) {
        $('body').addClass('is-android');
      }
    } else {
      $('body').addClass('is-pc');
    }
    if (Util.isIE()) {
      $('body').addClass('is-ie');
    }
    if (Util.isFF()) {
      $('body').addClass('is-ff');
    }
    if (Conf.IS_SIMPLE) {
      $('body').addClass('is-simple');
    }
    if (!Conf.IS_WEBGL) {
      $('body').addClass('is-nowebgl');
    }
    Resize.add(this._resize, true);
    return Update.add(this._update);
  };

  Entry.prototype._update = function() {};

  Entry.prototype._resize = function() {};

  return Entry;

})();

module.exports = Entry;


/***/ }),

/***/ "./src/js/core/Func.coffee":
/*!*********************************!*\
  !*** ./src/js/core/Func.coffee ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Conf, Func, Param, Profiler, Resize, Scroller, Size, Type, Util,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Util = __webpack_require__(/*! ../libs/Util */ "./src/js/libs/Util.coffee");

Resize = __webpack_require__(/*! ../libs/Resize */ "./src/js/libs/Resize.coffee");

Size = __webpack_require__(/*! ../libs/obj/Size */ "./src/js/libs/obj/Size.coffee");

Type = __webpack_require__(/*! ./Type */ "./src/js/core/Type.coffee");

Conf = __webpack_require__(/*! ./Conf */ "./src/js/core/Conf.coffee");

Profiler = __webpack_require__(/*! ./Profiler */ "./src/js/core/Profiler.coffee");

Scroller = __webpack_require__(/*! ./Scroller */ "./src/js/core/Scroller.coffee");

Param = __webpack_require__(/*! ./Param */ "./src/js/core/Param.coffee");

Func = (function() {
  function Func() {
    this.useScreen = bind(this.useScreen, this);
    this.r = bind(this.r, this);
    this.sh2 = bind(this.sh2, this);
    this.sh = bind(this.sh, this);
    this.sw = bind(this.sw, this);
    this.inUrl = bind(this.inUrl, this);
    this.clickable = bind(this.clickable, this);
    this.cos2 = bind(this.cos2, this);
    this.cos1 = bind(this.cos1, this);
    this.sin2 = bind(this.sin2, this);
    this.sin1 = bind(this.sin1, this);
    this.val = bind(this.val, this);
    this.isLG = bind(this.isLG, this);
    this.isXS = bind(this.isXS, this);
    this.screen = bind(this.screen, this);
    this.ratio = bind(this.ratio, this);
  }

  Func.prototype.ratio = function() {
    return window.devicePixelRatio || 1;
  };

  Func.prototype.screen = function() {
    if (window.innerWidth <= Conf.BREAKPOINT) {
      return Type.SCREEN.XS;
    } else {
      return Type.SCREEN.LG;
    }
  };

  Func.prototype.isXS = function() {
    return this.screen() === Type.SCREEN.XS;
  };

  Func.prototype.isLG = function() {
    return this.screen() === Type.SCREEN.LG;
  };

  Func.prototype.val = function(xs, lg) {
    if (this.isXS()) {
      return xs;
    } else {
      return lg;
    }
  };

  Func.prototype.sin1 = function(radian) {
    return Math.sin(radian) + Math.sin(2 * radian);
  };

  Func.prototype.sin2 = function(radian) {
    return (Math.sin(radian) + Math.sin(2.2 * radian + 5.52) + Math.sin(2.9 * radian + 0.93) + Math.sin(4.6 * radian + 8.94)) / 4;
  };

  Func.prototype.cos1 = function(radian) {
    return Math.cos(radian) + Math.cos(2 * radian);
  };

  Func.prototype.cos2 = function(radian) {
    return (Math.cos(radian) + Math.cos(2.2 * radian + 5.52) + Math.cos(2.9 * radian + 0.93) + Math.cos(4.6 * radian + 8.94)) / 4;
  };

  Func.prototype.clickable = function(bool) {
    var body, c;
    c = 'is-no-pointer';
    body = $('body');
    if (bool) {
      return body.removeClass(c);
    } else {
      return body.addClass(c);
    }
  };

  Func.prototype.inUrl = function(str) {
    return location.href.indexOf(str) > 0;
  };

  Func.prototype.sw = function() {
    return window.innerWidth;
  };

  Func.prototype.sh = function() {
    return window.innerHeight;
  };

  Func.prototype.sh2 = function() {
    if (this.useScreen()) {
      return screen.height;
    } else {
      return window.innerHeight;
    }
  };

  Func.prototype.r = function(val) {
    var base, sw;
    base = this.val(750, 1400);
    sw = this.sw();
    return (val / base) * sw;
  };

  Func.prototype.useScreen = function() {
    return Conf.IS_SP && (typeof screen !== "undefined" && screen !== null) && this.isXS();
  };

  return Func;

})();

module.exports = new Func();


/***/ }),

/***/ "./src/js/core/Param.coffee":
/*!**********************************!*\
  !*** ./src/js/core/Param.coffee ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Conf, Func, Param, Resize, Size, Type, Update, Util, dat,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

dat = __webpack_require__(/*! dat-gui */ "./node_modules/dat-gui/index.js");

Conf = __webpack_require__(/*! ./Conf */ "./src/js/core/Conf.coffee");

Type = __webpack_require__(/*! ./Type */ "./src/js/core/Type.coffee");

Func = __webpack_require__(/*! ./Func */ "./src/js/core/Func.coffee");

Util = __webpack_require__(/*! ../libs/Util */ "./src/js/libs/Util.coffee");

Update = __webpack_require__(/*! ../libs/Update */ "./src/js/libs/Update.coffee");

Resize = __webpack_require__(/*! ../libs/Resize */ "./src/js/libs/Resize.coffee");

Size = __webpack_require__(/*! ../libs/obj/Size */ "./src/js/libs/obj/Size.coffee");

Param = (function() {
  function Param() {
    this._resize = bind(this._resize, this);
    this._update = bind(this._update, this);
    this._listen = bind(this._listen, this);
    this._addGui = bind(this._addGui, this);
    this._init = bind(this._init, this);
    this._gui;
    this.camera = {
      pos: {
        value: 15,
        min: 9,
        max: 20
      },
      z: {
        value: 0,
        min: -100,
        max: 100
      }
    };
    this._init();
  }

  Param.prototype._init = function() {
    Update.add(this._update);
    Resize.add(this._resize, true);
    this._update();
    if (!Conf.FLG.PARAM) {
      return;
    }
    this._gui = new dat.GUI();
    this._addGui(this.camera, 'camera');
    return $('.dg').css('zIndex', 99999999);
  };

  Param.prototype._addGui = function(obj, folderName) {
    var folder, key, results, val;
    folder = this._gui.addFolder(folderName);
    results = [];
    for (key in obj) {
      val = obj[key];
      if (val.use == null) {
        if (key.indexOf('color') > 0) {
          results.push(folder.addColor(val, 'value').name(key));
        } else {
          if (val.list != null) {
            results.push(folder.add(val, 'value', val.list).name(key));
          } else {
            results.push(folder.add(val, 'value', val.min, val.max).name(key));
          }
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Param.prototype._listen = function(param, name) {
    if (name == null) {
      name = param;
    }
    return this._gui.add(this, param).name(name).listen();
  };

  Param.prototype._update = function() {};

  Param.prototype._resize = function() {};

  return Param;

})();

module.exports = new Param();


/***/ }),

/***/ "./src/js/core/Profiler.coffee":
/*!*************************************!*\
  !*** ./src/js/core/Profiler.coffee ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Conf, Profiler, Stats, Update;

Conf = __webpack_require__(/*! ./Conf */ "./src/js/core/Conf.coffee");

Stats = __webpack_require__(/*! stats-js */ "./node_modules/stats-js/build/stats.min.js");

Update = __webpack_require__(/*! ../libs/Update */ "./src/js/libs/Update.coffee");

Profiler = (function() {
  function Profiler() {
    this.fps = 60;
    this.averageFps = this.fps;
    this.isLow = false;
    this._totalFps = 0;
    this._cnt = 0;
    this._stats = new Stats();
    this._stats.domElement.style.position = 'fixed';
    this._stats.domElement.style.left = '0px';
    this._stats.domElement.style.top = '0px';
    this._stats.domElement.style.zIndex = '99999';
    document.body.appendChild(this._stats.domElement);
    if (!Conf.FLG.STATS) {
      this._stats.domElement.style.display = 'none';
    }
    Update.add((function(_this) {
      return function() {
        _this._cnt++;
        return _this._stats.update();
      };
    })(this));
  }

  return Profiler;

})();

module.exports = new Profiler();


/***/ }),

/***/ "./src/js/core/Scroller.coffee":
/*!*************************************!*\
  !*** ./src/js/core/Scroller.coffee ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Conf, Resize, Scroller, Size, Tween, Update,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Conf = __webpack_require__(/*! ./Conf */ "./src/js/core/Conf.coffee");

Tween = __webpack_require__(/*! ./Tween */ "./src/js/core/Tween.coffee");

Update = __webpack_require__(/*! ../libs/Update */ "./src/js/libs/Update.coffee");

Resize = __webpack_require__(/*! ../libs/Resize */ "./src/js/libs/Resize.coffee");

Size = __webpack_require__(/*! ../libs/obj/Size */ "./src/js/libs/obj/Size.coffee");

Scroller = (function() {
  function Scroller() {
    this.move = bind(this.move, this);
    this.setNormal = bind(this.setNormal, this);
    this.resume = bind(this.resume, this);
    this.pause = bind(this.pause, this);
    this.set = bind(this.set, this);
    this.change = bind(this.change, this);
    this._resize = bind(this._resize, this);
    this._update = bind(this._update, this);
    this._init = bind(this._init, this);
    this.normal = 0;
    this.val = 0;
    this.docSize = new Size();
    this.old = 0;
    this.d = 0;
    this._document = $(document);
    this.sw = 0;
    this.sh = 0;
    this._cnt = 0;
    this._buffer = -1;
    this._move = {
      tg: 0
    };
    this.updateFlg = true;
    this._init();
  }

  Scroller.prototype._init = function() {
    Update.add(this._update);
    Resize.add(this._resize, true);
    return this._update();
  };

  Scroller.prototype._update = function() {
    if (!this.updateFlg) {
      return;
    }
    this._cnt++;
    this.old = this.val;
    this.val = $(window).scrollTop();
    return this.d = Math.abs(this.old - this.val);
  };

  Scroller.prototype._resize = function() {
    this.docSize.height = this._document.height();
    this.sw = window.innerWidth;
    return this.sh = window.innerHeight;
  };

  Scroller.prototype.change = function(opt) {
    if (opt.mode === "set") {
      this.updateFlg = false;
      this._document = opt.el;
      this.set(0);
      return this._resize();
    } else {
      this.updateFlg = true;
      this._document = $(document);
      this.set(opt.val);
      return this._resize();
    }
  };

  Scroller.prototype.set = function(val) {
    $(window).scrollTop(val);
    this.old = this.val = val;
    return this.d = 0;
  };

  Scroller.prototype.pause = function() {
    this._buffer = $(window).scrollTop() / (this.docSize.height - window.innerHeight);
    return this.setNormal(0);
  };

  Scroller.prototype.resume = function() {
    if (this._buffer === -1) {
      return;
    }
    this.setNormal(this._buffer);
    return this._buffer = -1;
  };

  Scroller.prototype.setNormal = function(val) {
    var s;
    s = (this.docSize.height - window.innerHeight) * val;
    return $(window).scrollTop(s);
  };

  Scroller.prototype.move = function(opt) {
    var delay, dura;
    dura = opt.duration || 1;
    delay = opt.delay || 0;
    this._move.tg = $(window).scrollTop();
    return Tween.a(this._move, {
      tg: opt.tg
    }, dura, delay, Power2.easeInOut, null, (function(_this) {
      return function() {
        return $(window).scrollTop(_this._move.tg);
      };
    })(this));
  };

  return Scroller;

})();

module.exports = new Scroller();


/***/ }),

/***/ "./src/js/core/Tween.coffee":
/*!**********************************!*\
  !*** ./src/js/core/Tween.coffee ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Tween,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Tween = (function() {
  function Tween() {
    this.kill = bind(this.kill, this);
    this.set = bind(this.set, this);
    this.a = bind(this.a, this);
  }

  Tween.prototype.a = function(target, param, duration, delay, easing, onStart, onUpdate, onComplete) {
    var from, key, to, val;
    TweenMax.killTweensOf(target);
    from = {};
    to = {};
    for (key in param) {
      val = param[key];
      if (val[0] != null) {
        from[key] = val[0];
        to[key] = val[1];
      } else {
        to[key] = val;
      }
    }
    from.force3D = true;
    TweenMax.set(target, from);
    if (easing != null) {
      to.ease = easing;
    } else {
      to.ease = Power0.easeNone;
    }
    if (delay != null) {
      to.delay = delay;
    }
    if (onStart != null) {
      to.onStart = onStart;
    }
    if (onUpdate != null) {
      to.onUpdate = onUpdate;
    }
    if (onComplete != null) {
      to.onComplete = onComplete;
    }
    to.force3D = true;
    return TweenMax.to(target, duration, to);
  };

  Tween.prototype.set = function(target, to) {
    to.force3D = true;
    return TweenMax.set(target, to);
  };

  Tween.prototype.kill = function(target) {
    return TweenMax.killTweensOf(target);
  };

  return Tween;

})();

module.exports = new Tween();


/***/ }),

/***/ "./src/js/core/Type.coffee":
/*!*********************************!*\
  !*** ./src/js/core/Type.coffee ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Type;

Type = (function() {
  function Type() {
    this.SCREEN = {
      XS: 0,
      LG: 1
    };
    this.FPS = {
      HIGH: 0,
      MID: 1
    };
  }

  return Type;

})();

module.exports = new Type();


/***/ }),

/***/ "./src/js/libs/Delay.coffee":
/*!**********************************!*\
  !*** ./src/js/libs/Delay.coffee ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Delay,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Delay = (function() {
  function Delay() {
    this._slice = bind(this._slice, this);
    this._update = bind(this._update, this);
    this.remove = bind(this.remove, this);
    this.add = bind(this.add, this);
    this._registFunc = [];
    this._init();
  }

  Delay.prototype._init = function() {
    var t;
    return t = window.requestAnimationFrame(this._update);
  };

  Delay.prototype.add = function(func, delay) {
    this._slice();
    return this._registFunc.push({
      f: func,
      d: Number(delay),
      flg: true
    });
  };

  Delay.prototype.remove = function(func) {
    var arr, i, j, len, ref, val;
    arr = [];
    ref = this._registFunc;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if ((val != null) && val.f !== func) {
        arr.push(val);
      }
    }
    return this._registFunc = arr;
  };

  Delay.prototype._update = function() {
    var i, j, len, ref, val;
    ref = this._registFunc;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if ((val != null) && val.flg && --val.d <= 0) {
        val.f();
        val.flg = false;
      }
    }
    return window.requestAnimationFrame(this._update);
  };

  Delay.prototype._slice = function() {
    var i, j, k, len, len1, newArr, ref, ref1, val;
    ref = this._registFunc;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if ((val != null) && !val.flg) {
        this._registFunc[i] = null;
      }
    }
    newArr = [];
    ref1 = this._registFunc;
    for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
      val = ref1[i];
      if (val != null) {
        newArr.push(val);
      }
    }
    return this._registFunc = newArr;
  };

  return Delay;

})();

module.exports = new Delay();


/***/ }),

/***/ "./src/js/libs/Resize.coffee":
/*!***********************************!*\
  !*** ./src/js/libs/Resize.coffee ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Resize, Util,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Util = __webpack_require__(/*! ./Util */ "./src/js/libs/Util.coffee");

Resize = (function() {
  function Resize() {
    this.oldSize = bind(this.oldSize, this);
    this.size = bind(this.size, this);
    this.sh = bind(this.sh, this);
    this.sw = bind(this.sw, this);
    this._setStageSize = bind(this._setStageSize, this);
    this._call = bind(this._call, this);
    this._eResize = bind(this._eResize, this);
    this.refresh = bind(this.refresh, this);
    this._init = bind(this._init, this);
    this._resizeList = [];
    this._size = {
      width: 0,
      height: 0
    };
    this._oldSize = {
      width: 0,
      height: 0
    };
    this._timer;
    this._init();
  }

  Resize.prototype._init = function() {
    window.addEventListener('resize', this._eResize);
    return this._setStageSize();
  };

  Resize.prototype.add = function(func, isCall) {
    this._resizeList.push(func);
    if ((isCall != null) && isCall) {
      return func(this._size);
    }
  };

  Resize.prototype.remove = function(func) {
    var arr, i, j, len, ref, val;
    arr = [];
    ref = this._resizeList;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val !== func) {
        arr.push(val);
      }
    }
    return this._resizeList = arr;
  };

  Resize.prototype.refresh = function() {
    return this._call();
  };

  Resize.prototype._eResize = function(e) {
    if (isMobile.any && window.innerWidth === this._size.width) {
      return;
    }
    this._setStageSize();
    if (this._timer != null) {
      clearInterval(this._timer);
      this._timer = null;
    }
    return this._timer = setTimeout(this._call, 300);
  };

  Resize.prototype._call = function() {
    var i, j, len, ref, results, val;
    ref = this._resizeList;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      results.push(val(this._size));
    }
    return results;
  };

  Resize.prototype._setStageSize = function() {
    this._oldSize.width = this._size.width;
    this._oldSize.height = this._size.height;
    this._size.width = window.innerWidth;
    return this._size.height = window.innerHeight;
  };

  Resize.prototype.sw = function() {
    this._setStageSize();
    return this._size.width;
  };

  Resize.prototype.sh = function() {
    this._setStageSize();
    return this._size.height;
  };

  Resize.prototype.size = function() {
    return this._size;
  };

  Resize.prototype.oldSize = function() {
    return this._oldSize;
  };

  return Resize;

})();

module.exports = new Resize();


/***/ }),

/***/ "./src/js/libs/Update.coffee":
/*!***********************************!*\
  !*** ./src/js/libs/Update.coffee ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Update,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Update = (function() {
  function Update() {
    this._update = bind(this._update, this);
    this.remove = bind(this.remove, this);
    this.add = bind(this.add, this);
    this.cnt = 0;
    this._updateList = [];
    this.play = true;
    this._init();
  }

  Update.prototype._init = function() {
    var t;
    return t = window.requestAnimationFrame(this._update);
  };

  Update.prototype.add = function(func) {
    return this._updateList.push(func);
  };

  Update.prototype.remove = function(func) {
    var arr, i, j, len, ref, val;
    arr = [];
    ref = this._updateList;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      val = ref[i];
      if (val !== func) {
        arr.push(val);
      }
    }
    return this._updateList = arr;
  };

  Update.prototype._update = function() {
    var i, j, len, ref, val;
    if (this.play) {
      this.cnt++;
      ref = this._updateList;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        val = ref[i];
        if (val != null) {
          val();
        }
      }
    }
    return window.requestAnimationFrame(this._update);
  };

  return Update;

})();

module.exports = new Update();


/***/ }),

/***/ "./src/js/libs/Util.coffee":
/*!*********************************!*\
  !*** ./src/js/libs/Util.coffee ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Util,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Util = (function() {
  function Util() {
    this.useWebGL = bind(this.useWebGL, this);
    this.getHexColor = bind(this.getHexColor, this);
    this.isSafari = bind(this.isSafari, this);
    this.isFF = bind(this.isFF, this);
    this.isChrome = bind(this.isChrome, this);
    this.isWin = bind(this.isWin, this);
    this.isIE2 = bind(this.isIE2, this);
    this.isIE = bind(this.isIE, this);
    this.numStr = bind(this.numStr, this);
    this.distance = bind(this.distance, this);
    this.sort = bind(this.sort, this);
    this.replaceAll = bind(this.replaceAll, this);
    this.sliceNull = bind(this.sliceNull, this);
    this.shuffle = bind(this.shuffle, this);
    this.degree = bind(this.degree, this);
    this.radian = bind(this.radian, this);
    this.mix = bind(this.mix, this);
    this.map = bind(this.map, this);
    this.clamp = bind(this.clamp, this);
    this.rangeInt = bind(this.rangeInt, this);
    this.range = bind(this.range, this);
    this.paramNum = bind(this.paramNum, this);
    this.randomArr = bind(this.randomArr, this);
    this.randomListInt = bind(this.randomListInt, this);
    this.randomList = bind(this.randomList, this);
    this.hit = bind(this.hit, this);
    this.randomInt = bind(this.randomInt, this);
    this.random2 = bind(this.random2, this);
    this.random = bind(this.random, this);
  }

  Util.prototype.random = function(min, max) {
    return Math.random() * (max - min) + min;
  };

  Util.prototype.random2 = function(min, max) {
    var r;
    r = Math.random() * (max - min) + min;
    if (this.hit(2)) {
      r *= -1;
    }
    return r;
  };

  Util.prototype.randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  Util.prototype.hit = function(range) {
    if (range < 2 || (range == null)) {
      range = 2;
    }
    return this.randomInt(0, range - 1) === 0;
  };

  Util.prototype.randomList = function(list) {
    var area;
    area = this.randomArr(list);
    return this.random(area.min, area.max);
  };

  Util.prototype.randomListInt = function(list) {
    var area;
    area = this.randomArr(list);
    return this.randomInt(area.min, area.max);
  };

  Util.prototype.randomArr = function(arr) {
    return arr[this.randomInt(0, arr.length - 1)];
  };

  Util.prototype.paramNum = function(obj) {
    var key, num, val;
    num = 0;
    for (val in obj) {
      key = obj[val];
      num++;
    }
    return num;
  };

  Util.prototype.range = function(val) {
    return this.random(-val, val);
  };

  Util.prototype.rangeInt = function(val) {
    return this.randomInt(-val, val);
  };

  Util.prototype.clamp = function(val, min, max) {
    return Math.min(max, Math.max(val, min));
  };

  Util.prototype.map = function(num, toMin, toMax, fromMin, fromMax) {
    var p;
    if (num <= fromMin) {
      return toMin;
    }
    if (num >= fromMax) {
      return toMax;
    }
    p = (toMax - toMin) / (fromMax - fromMin);
    return ((num - fromMin) * p) + toMin;
  };

  Util.prototype.mix = function(x, y, a) {
    return x * (1 - a) + y * a;
  };

  Util.prototype.radian = function(degree) {
    return degree * Math.PI / 180;
  };

  Util.prototype.degree = function(radian) {
    return radian * 180 / Math.PI;
  };

  Util.prototype.shuffle = function(arr) {
    var i, j, k, results;
    i = arr.length;
    results = [];
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      if (i === j) {
        continue;
      }
      k = arr[i];
      arr[i] = arr[j];
      results.push(arr[j] = k);
    }
    return results;
  };

  Util.prototype.sliceNull = function(arr) {
    var i, l, len1, newArr, val;
    newArr = [];
    for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
      val = arr[i];
      if (val !== null) {
        newArr.push(val);
      }
    }
    return newArr;
  };

  Util.prototype.replaceAll = function(val, org, dest) {
    return val.split(org).join(dest);
  };

  Util.prototype.sort = function(arr, para, desc) {
    if (desc == null) {
      desc = false;
    }
    if (desc) {
      return arr.sort((function(_this) {
        return function(a, b) {
          return b[para] - a[para];
        };
      })(this));
    } else {
      return arr.sort((function(_this) {
        return function(a, b) {
          return a[para] - b[para];
        };
      })(this));
    }
  };

  Util.prototype.distance = function(x1, y1, x2, y2) {
    var dx, dy;
    dx = x1 - x2;
    dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  };

  Util.prototype.numStr = function(num, keta) {
    var i, len, str;
    str = String(num);
    if (str.length >= keta) {
      return str;
    }
    len = keta - str.length;
    i = 0;
    while (i < len) {
      str = '0' + str;
      i++;
    }
    return str;
  };

  Util.prototype.isIE = function() {
    var ua;
    ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1 || ua.indexOf('edge') !== -1;
  };

  Util.prototype.isIE2 = function() {
    var ua;
    ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
  };

  Util.prototype.isWin = function() {
    return window.navigator.platform.indexOf('Win') !== -1;
  };

  Util.prototype.isChrome = function() {
    return window.navigator.userAgent.toLowerCase().indexOf('chrome') !== -1;
  };

  Util.prototype.isFF = function() {
    return window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  };

  Util.prototype.isSafari = function() {
    return (window.navigator.userAgent.toLowerCase().indexOf('safari') !== -1) && !this.isChrome();
  };

  Util.prototype.getHexColor = function(r, g, b) {
    var str;
    str = (r << 16 | g << 8 | b).toString(16);
    return '#' + new Array(7 - str.length).join('0') + str;
  };

  Util.prototype.useWebGL = function() {
    var c, e, w;
    try {
      c = document.createElement('canvas');
      w = c.getContext('webgl') || c.getContext('experimental-webgl');
      return !!(window.WebGLRenderingContext && w && w.getShaderPrecisionFormat);
    } catch (error) {
      e = error;
      return false;
    }
  };

  Util.prototype.getQuery = function(key) {
    var qs, regex;
    key = key.replace(/[€[]/, "€€€[").replace(/[€]]/, "€€€]");
    regex = new RegExp("[€€?&]" + key + "=([^&#]*)");
    qs = regex.exec(window.location.href);
    if (qs === null) {
      return "";
    } else {
      return qs[1];
    }
  };

  return Util;

})();

module.exports = new Util();


/***/ }),

/***/ "./src/js/libs/obj/Size.coffee":
/*!*************************************!*\
  !*** ./src/js/libs/obj/Size.coffee ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Size,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Size = (function() {
  function Size(width, height) {
    this.copy = bind(this.copy, this);
    this.set = bind(this.set, this);
    this.equal = bind(this.equal, this);
    this.max = bind(this.max, this);
    this.min = bind(this.min, this);
    this.height2 = bind(this.height2, this);
    this.width2 = bind(this.width2, this);
    this.width = width || 0;
    this.height = height || 0;
  }

  Size.prototype.width2 = function() {
    return ~~(this.width * 0.5);
  };

  Size.prototype.height2 = function() {
    return ~~(this.height * 0.5);
  };

  Size.prototype.min = function() {
    return Math.min(this.width, this.height);
  };

  Size.prototype.max = function() {
    return Math.max(this.width, this.height);
  };

  Size.prototype.equal = function(width, height) {
    return this.width === width && this.height === height;
  };

  Size.prototype.set = function(width, height) {
    this.width = width;
    return this.height = height;
  };

  Size.prototype.copy = function(size) {
    this.width = size.width;
    return this.height = size.height;
  };

  return Size;

})();

module.exports = Size;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL01haW4uY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL0NvbmYuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL0VudHJ5LmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9GdW5jLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9QYXJhbS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvUHJvZmlsZXIuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qcy9jb3JlL1Njcm9sbGVyLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29yZS9Ud2Vlbi5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvcmUvVHlwZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnMvRGVsYXkuY29mZmVlIiwid2VicGFjazovLy8uL3NyYy9qcy9saWJzL1Jlc2l6ZS5jb2ZmZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYnMvVXBkYXRlLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGlicy9VdGlsLmNvZmZlZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGlicy9vYmovU2l6ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFDLE1BQUQsR0FBVTtXQUNWLElBQUMsT0FBRCxHQUFVO0VBSFA7O2lCQVVMLE9BQU0sU0FBQyxJQUFEO0lBRUosSUFBQyxNQUFELEdBQVMsSUFBSSxDQUFDO1dBQ2QsSUFBQyxPQUFELEdBQVUsSUFBSSxDQUFDO0VBSFg7Ozs7OztBQVVSLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwiZmlsZSI6InRvcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwidG9wXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvanMvTWFpbi5jb2ZmZWVcIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIkVudHJ5ID0gcmVxdWlyZSgnLi9jb3JlL0VudHJ5JylcblxuXG5jbGFzcyBNYWluIGV4dGVuZHMgRW50cnlcblxuICBjb25zdHJ1Y3RvcjogLT5cblxuICAgIHN1cGVyKClcblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDliJ3mnJ/ljJZcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpbml0OiA9PlxuXG4gICAgc3VwZXIoKVxuXG4gICAgY29uc29sZS5sb2coJ2luaXQnKVxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gTWFpblxuXG5tYWluID0gbmV3IE1haW4oKVxubWFpbi5pbml0KClcbiIsIlV0aWwgPSByZXF1aXJlKCcuLi9saWJzL1V0aWwnKVxuXG5jbGFzcyBDb25mXG5cbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgICAjIOacrOeVquODleODqeOCsFxuICAgIEBSRUxFQVNFID0gZmFsc2VcblxuICAgICMg44OV44Op44Kw6Zai6YCjXG4gICAgQEZMRyA9IHtcbiAgICAgIFBBUkFNOmZhbHNlXG4gICAgICBTVEFUUzpmYWxzZVxuICAgICAgREVCVUc6bG9jYXRpb24uaHJlZi5pbmRleE9mKCdfbS5odG1sJykgPiAwXG4gICAgICBURVNUOmZhbHNlXG4gICAgfTtcblxuICAgICMg5pys55Wq44OV44Op44Kw44GMdHJ1ZeOBruWgtOWQiOOAgeODleODqeOCsOmWoumAo+OBr+WFqOOBpmZhbHNl44GrXG4gICAgaWYgQFJFTEVBU0VcbiAgICAgIGZvciBrZXksdmFsIG9mIEBGTEdcbiAgICAgICAgQEZMR1trZXldID0gZmFsc2VcblxuICAgICMg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG4gICAgQEJSRUFLUE9JTlQgPSA3NTBcblxuICAgICMg55S75YOP44OR44K5XG4gICAgQFBBVEhfSU1HID0gJy9hc3NldHMvaW1nLydcblxuICAgIEBJU19QQyA9ICFpc01vYmlsZS5hbnlcbiAgICBASVNfU1AgPSBpc01vYmlsZS5hbnlcblxuICAgIEBJU19TSU1QTEUgPSBpc01vYmlsZS5hbmRyb2lkLmRldmljZSB8fCBVdGlsLmlzSUUoKSB8fCAoIWlzTW9iaWxlLmFueSAmJiBVdGlsLmlzU2FmYXJpKCkpIHx8IGlzTW9iaWxlLnRhYmxldFxuXG4gICAgQElTX1dFQkdMID0gVXRpbC51c2VXZWJHTCgpXG5cbiAgICBAU0NBTEVfTUlOID0gMC4wMDAwMDFcblxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IENvbmYoKVxuIiwid2luZG93LiQgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2pxdWVyeScpXG53aW5kb3cuVEhSRUUgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgndGhyZWUnKVxud2luZG93LlR3ZWVuTWF4ICAgICAgICAgICAgICA9IHJlcXVpcmUoJ2dzYXAnKS5Ud2Vlbk1heFxud2luZG93LkN1c3RvbUVhc2UgICAgICAgICAgICA9IHJlcXVpcmUoJ2dzYXAnKS5DdXN0b21FYXNlXG53aW5kb3cuVGltZWxpbmVNYXggICAgICAgICAgID0gcmVxdWlyZSgnZ3NhcCcpLlRpbWVsaW5lTWF4XG53aW5kb3cuaXNNb2JpbGUgICAgICAgICAgICAgID0gcmVxdWlyZSgnaXNtb2JpbGVqcycpXG5cblBhcmFtICAgID0gcmVxdWlyZSgnLi9QYXJhbScpXG5Qcm9maWxlciA9IHJlcXVpcmUoJy4vUHJvZmlsZXInKVxuRnVuYyAgICAgPSByZXF1aXJlKCcuL0Z1bmMnKVxuQ29uZiAgICAgPSByZXF1aXJlKCcuL0NvbmYnKVxuRGVsYXkgICAgPSByZXF1aXJlKCcuLi9saWJzL0RlbGF5JylcblV0aWwgICAgID0gcmVxdWlyZSgnLi4vbGlicy9VdGlsJylcblJlc2l6ZSAgID0gcmVxdWlyZSgnLi4vbGlicy9SZXNpemUnKVxuVXBkYXRlICAgPSByZXF1aXJlKCcuLi9saWJzL1VwZGF0ZScpXG5cblxuXG4jIOOCqOODs+ODiOODquODvOODneOCpOODs+ODiFxuY2xhc3MgRW50cnlcblxuICBjb25zdHJ1Y3RvcjogLT5cblxuICAgIEBpc0pwID0gKHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UpLnN1YnN0cigwLDIpID09ICdqYSdcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDliJ3mnJ/ljJZcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaW5pdDogPT5cblxuICAgICMgaWYgQ29uZi5SRUxFQVNFXG4gICAgIyAgIGNvbnNvbGUud2FybiA9ID0+XG4gICAgIyAgICAgcmV0dXJuXG4gICAgICAjIGNvbnNvbGUubG9nID0gPT5cbiAgICAgICMgICByZXR1cm5cblxuICAgIE51bWJlci5pc05hTiA9IE51bWJlci5pc05hTiB8fCAoYW55KSAtPlxuICAgICAgcmV0dXJuIHR5cGVvZiBhbnkgPT0gJ251bWJlcicgJiYgaXNOYU4oYW55KVxuXG4gICAgaWYgaXNNb2JpbGUuYW55XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLXNwJylcbiAgICAgICQoJy5pcy1ob3ZlcicpLnJlbW92ZUNsYXNzKCdpcy1ob3ZlcicpXG4gICAgICBpZiBpc01vYmlsZS5hbmRyb2lkLmRldmljZVxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLWFuZHJvaWQnKVxuICAgIGVsc2VcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtcGMnKVxuXG4gICAgaWYgVXRpbC5pc0lFKClcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtaWUnKVxuXG4gICAgaWYgVXRpbC5pc0ZGKClcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtZmYnKVxuXG4gICAgaWYgQ29uZi5JU19TSU1QTEVcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXMtc2ltcGxlJylcblxuICAgIGlmICFDb25mLklTX1dFQkdMXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLW5vd2ViZ2wnKVxuXG4gICAgUmVzaXplLmFkZChAX3Jlc2l6ZSwgdHJ1ZSlcbiAgICBVcGRhdGUuYWRkKEBfdXBkYXRlKVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF91cGRhdGU6ID0+XG5cblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDjg6rjgrXjgqTjgrpcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX3Jlc2l6ZTogPT5cblxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gRW50cnlcbiIsIlV0aWwgICAgID0gcmVxdWlyZSgnLi4vbGlicy9VdGlsJylcblJlc2l6ZSAgID0gcmVxdWlyZSgnLi4vbGlicy9SZXNpemUnKVxuU2l6ZSAgICAgPSByZXF1aXJlKCcuLi9saWJzL29iai9TaXplJylcblR5cGUgICAgID0gcmVxdWlyZSgnLi9UeXBlJylcbkNvbmYgICAgID0gcmVxdWlyZSgnLi9Db25mJylcblByb2ZpbGVyID0gcmVxdWlyZSgnLi9Qcm9maWxlcicpXG5TY3JvbGxlciA9IHJlcXVpcmUoJy4vU2Nyb2xsZXInKVxuUGFyYW0gICAgPSByZXF1aXJlKCcuL1BhcmFtJylcblxuIyDlhbHpgJrplqLmlbBcbmNsYXNzIEZ1bmNcblxuICBjb25zdHJ1Y3RvcjogLT5cblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDjg6zjg4bjgqPjg4rjga7jgYLjga7lgKRcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmF0aW86ID0+XG5cbiAgICByZXR1cm4gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMVxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDjgrnjgq/jg6rjg7zjg7Pjgr/jgqTjg5flj5blvpdcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2NyZWVuOiA9PlxuXG4gICAgaWYgd2luZG93LmlubmVyV2lkdGggPD0gQ29uZi5CUkVBS1BPSU5UXG4gICAgICByZXR1cm4gVHlwZS5TQ1JFRU4uWFNcbiAgICBlbHNlXG4gICAgICByZXR1cm4gVHlwZS5TQ1JFRU4uTEdcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDjgrnjgq/jg6rjg7zjg7Pjgr/jgqTjg5cgWFNcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNYUzogPT5cblxuICAgIHJldHVybiAoQHNjcmVlbigpID09IFR5cGUuU0NSRUVOLlhTKVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOOCueOCr+ODquODvOODs+OCv+OCpOODlyBMR1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0xHOiA9PlxuXG4gICAgcmV0dXJuIChAc2NyZWVuKCkgPT0gVHlwZS5TQ1JFRU4uTEcpXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg44K544Kv44Oq44O844Oz44K/44Kk44OX44Gn5YiG5bKQXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHZhbDogKHhzLCBsZykgPT5cblxuICAgIGlmIEBpc1hTKClcbiAgICAgIHJldHVybiB4c1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBsZ1xuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOOCs+OCr+OBruOBguOCi+OCteOCpOODsyAxXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNpbjE6IChyYWRpYW4pID0+XG5cbiAgICByZXR1cm4gTWF0aC5zaW4ocmFkaWFuKSArIE1hdGguc2luKDIgKiByYWRpYW4pXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg44Kz44Kv44Gu44GC44KL44K144Kk44OzIDJcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2luMjogKHJhZGlhbikgPT5cblxuICAgIHJldHVybiAoXG4gICAgICBNYXRoLnNpbihyYWRpYW4pICtcbiAgICAgIE1hdGguc2luKDIuMiAqIHJhZGlhbiArIDUuNTIpICtcbiAgICAgIE1hdGguc2luKDIuOSAqIHJhZGlhbiArIDAuOTMpICtcbiAgICAgIE1hdGguc2luKDQuNiAqIHJhZGlhbiArIDguOTQpXG4gICAgKSAvIDRcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDjgrPjgq/jga7jgYLjgovjgrXjgqTjg7MgMVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb3MxOiAocmFkaWFuKSA9PlxuXG4gICAgcmV0dXJuIE1hdGguY29zKHJhZGlhbikgKyBNYXRoLmNvcygyICogcmFkaWFuKVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOOCs+OCr+OBruOBguOCi+OCteOCpOODsyAyXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvczI6IChyYWRpYW4pID0+XG5cbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5jb3MocmFkaWFuKSArXG4gICAgICBNYXRoLmNvcygyLjIgKiByYWRpYW4gKyA1LjUyKSArXG4gICAgICBNYXRoLmNvcygyLjkgKiByYWRpYW4gKyAwLjkzKSArXG4gICAgICBNYXRoLmNvcyg0LjYgKiByYWRpYW4gKyA4Ljk0KVxuICAgICkgLyA0XG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg55S76Z2i5YWo5L2T44Gu5pON5L2cT04vT0ZGXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsaWNrYWJsZTogKGJvb2wpID0+XG5cbiAgICBjID0gJ2lzLW5vLXBvaW50ZXInXG4gICAgYm9keSA9ICQoJ2JvZHknKVxuXG4gICAgaWYgYm9vbFxuICAgICAgYm9keS5yZW1vdmVDbGFzcyhjKVxuICAgIGVsc2VcbiAgICAgIGJvZHkuYWRkQ2xhc3MoYylcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgI1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpblVybDogKHN0cikgPT5cblxuICAgIHJldHVybiBsb2NhdGlvbi5ocmVmLmluZGV4T2Yoc3RyKSA+IDBcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgI1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdzogPT5cblxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNoOiA9PlxuXG4gICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNoMjogPT5cblxuICAgIGlmIEB1c2VTY3JlZW4oKVxuICAgICAgcmV0dXJuIHNjcmVlbi5oZWlnaHRcbiAgICBlbHNlXG4gICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0XG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICNcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcjogKHZhbCkgPT5cblxuICAgIGJhc2UgPSBAdmFsKDc1MCwgMTQwMClcbiAgICBzdyA9IEBzdygpXG5cbiAgICByZXR1cm4gKHZhbCAvIGJhc2UpICogc3dcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgI1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2VTY3JlZW46ID0+XG5cbiAgICByZXR1cm4gQ29uZi5JU19TUCAmJiBzY3JlZW4/ICYmIEBpc1hTKClcblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRnVuYygpXG4iLCJkYXQgICAgPSByZXF1aXJlKCdkYXQtZ3VpJylcbkNvbmYgICA9IHJlcXVpcmUoJy4vQ29uZicpXG5UeXBlICAgPSByZXF1aXJlKCcuL1R5cGUnKVxuRnVuYyAgID0gcmVxdWlyZSgnLi9GdW5jJylcblV0aWwgICA9IHJlcXVpcmUoJy4uL2xpYnMvVXRpbCcpXG5VcGRhdGUgPSByZXF1aXJlKCcuLi9saWJzL1VwZGF0ZScpXG5SZXNpemUgPSByZXF1aXJlKCcuLi9saWJzL1Jlc2l6ZScpXG5TaXplICAgPSByZXF1aXJlKCcuLi9saWJzL29iai9TaXplJylcblxuXG4jIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIyDjg5Hjg6njg6Hjg7zjgr9cbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBQYXJhbVxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuXG4gICAgQF9ndWlcblxuICAgIEBjYW1lcmEgPSB7XG4gICAgICBwb3M6e3ZhbHVlOjE1LCBtaW46OSwgbWF4OjIwfVxuICAgICAgejp7dmFsdWU6MCwgbWluOi0xMDAsIG1heDoxMDB9XG4gICAgfVxuXG4gICAgQF9pbml0KClcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOWIneacn+WMllxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9pbml0OiA9PlxuXG4gICAgVXBkYXRlLmFkZChAX3VwZGF0ZSlcbiAgICBSZXNpemUuYWRkKEBfcmVzaXplLCB0cnVlKVxuICAgIEBfdXBkYXRlKClcblxuICAgIGlmICFDb25mLkZMRy5QQVJBTVxuICAgICAgcmV0dXJuXG5cbiAgICBAX2d1aSA9IG5ldyBkYXQuR1VJKClcbiAgICBAX2FkZEd1aShAY2FtZXJhLCAnY2FtZXJhJylcblxuICAgICQoJy5kZycpLmNzcygnekluZGV4JywgOTk5OTk5OTkpXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgI1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9hZGRHdWk6IChvYmosIGZvbGRlck5hbWUpID0+XG5cbiAgICBmb2xkZXIgPSBAX2d1aS5hZGRGb2xkZXIoZm9sZGVyTmFtZSlcblxuICAgIGZvciBrZXksdmFsIG9mIG9ialxuICAgICAgaWYgIXZhbC51c2U/XG4gICAgICAgIGlmIGtleS5pbmRleE9mKCdjb2xvcicpID4gMFxuICAgICAgICAgIGZvbGRlci5hZGRDb2xvcih2YWwsICd2YWx1ZScpLm5hbWUoa2V5KVxuICAgICAgICBlbHNlXG4gICAgICAgICAgaWYgdmFsLmxpc3Q/XG4gICAgICAgICAgICBmb2xkZXIuYWRkKHZhbCwgJ3ZhbHVlJywgdmFsLmxpc3QpLm5hbWUoa2V5KVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGZvbGRlci5hZGQodmFsLCAndmFsdWUnLCB2YWwubWluLCB2YWwubWF4KS5uYW1lKGtleSlcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX2xpc3RlbjogKHBhcmFtLCBuYW1lKSA9PlxuXG4gICAgaWYgIW5hbWU/IHRoZW4gbmFtZSA9IHBhcmFtXG4gICAgQF9ndWkuYWRkKEAsIHBhcmFtKS5uYW1lKG5hbWUpLmxpc3RlbigpXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDmm7TmlrBcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfdXBkYXRlOiA9PlxuXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDjg6rjgrXjgqTjgrpcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfcmVzaXplOiA9PlxuXG5cblxuXG5cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBQYXJhbSgpXG4iLCJDb25mICAgPSByZXF1aXJlKCcuL0NvbmYnKVxuU3RhdHMgID0gcmVxdWlyZSgnc3RhdHMtanMnKVxuVXBkYXRlID0gcmVxdWlyZSgnLi4vbGlicy9VcGRhdGUnKVxuXG5cbmNsYXNzIFByb2ZpbGVyXG5cbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgICBAZnBzID0gNjBcbiAgICBAYXZlcmFnZUZwcyA9IEBmcHNcbiAgICBAaXNMb3cgPSBmYWxzZVxuXG4gICAgQF90b3RhbEZwcyA9IDBcbiAgICBAX2NudCA9IDBcblxuICAgIEBfc3RhdHMgPSBuZXcgU3RhdHMoKVxuICAgIEBfc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcbiAgICBAX3N0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCAgICAgPSAnMHB4J1xuICAgIEBfc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgICAgICA9ICcwcHgnXG4gICAgQF9zdGF0cy5kb21FbGVtZW50LnN0eWxlLnpJbmRleCAgID0gJzk5OTk5J1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQF9zdGF0cy5kb21FbGVtZW50KVxuXG4gICAgaWYgIUNvbmYuRkxHLlNUQVRTXG4gICAgICBAX3N0YXRzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgVXBkYXRlLmFkZCg9PlxuXG4gICAgICBAX2NudCsrXG5cbiAgICAgIEBfc3RhdHMudXBkYXRlKClcbiAgICAgICMgQGZwcyA9IE51bWJlcigkKCcjZnBzVGV4dCcpLmh0bWwoKS5zcGxpdCgnICcpWzBdKVxuICAgICAgIyBpZiBOdW1iZXIuaXNOYU4oQGZwcylcbiAgICAgICMgICBAZnBzID0gMFxuICAgICAgI1xuICAgICAgIyBpZiBAZnBzP1xuICAgICAgIyAgIEBfdG90YWxGcHMgKz0gQGZwc1xuICAgICAgIyBAYXZlcmFnZUZwcyA9IEBfdG90YWxGcHMgLyBAX2NudFxuICAgICAgI1xuICAgICAgIyBpZiBAX2NudCA+PSA2MCAqIDVcbiAgICAgICMgICBAX2NudCA9IDBcbiAgICAgICMgICBAX3RvdGFsRnBzID0gMFxuXG4gICAgKVxuXG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJvZmlsZXIoKVxuIiwiQ29uZiAgID0gcmVxdWlyZSgnLi9Db25mJylcblR3ZWVuICA9IHJlcXVpcmUoJy4vVHdlZW4nKVxuVXBkYXRlID0gcmVxdWlyZSgnLi4vbGlicy9VcGRhdGUnKVxuUmVzaXplID0gcmVxdWlyZSgnLi4vbGlicy9SZXNpemUnKVxuU2l6ZSAgID0gcmVxdWlyZSgnLi4vbGlicy9vYmovU2l6ZScpXG5cblxuY2xhc3MgU2Nyb2xsZXJcblxuICBjb25zdHJ1Y3RvcjogLT5cblxuICAgIEBub3JtYWwgPSAwXG4gICAgQHZhbCA9IDBcbiAgICBAZG9jU2l6ZSA9IG5ldyBTaXplKClcbiAgICBAb2xkID0gMFxuICAgIEBkID0gMFxuXG4gICAgQF9kb2N1bWVudCA9ICQoZG9jdW1lbnQpXG5cbiAgICBAc3cgPSAwXG4gICAgQHNoID0gMFxuXG4gICAgQF9jbnQgPSAwXG5cbiAgICBAX2J1ZmZlciA9IC0xXG5cbiAgICBAX21vdmUgPSB7XG4gICAgICB0ZzowXG4gICAgfVxuXG4gICAgQHVwZGF0ZUZsZyA9IHRydWVcblxuICAgIEBfaW5pdCgpXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDliJ3mnJ/ljJZcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfaW5pdDogPT5cblxuICAgIFVwZGF0ZS5hZGQoQF91cGRhdGUpXG4gICAgUmVzaXplLmFkZChAX3Jlc2l6ZSwgdHJ1ZSlcblxuICAgIEBfdXBkYXRlKClcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOabtOaWsFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF91cGRhdGU6ID0+XG5cbiAgICBpZiAhQHVwZGF0ZUZsZ1xuICAgICAgcmV0dXJuXG5cbiAgICBAX2NudCsrXG4gICAgIyBpZiArK0BfY250ICUgMzAgPT0gMFxuICAgICMgICBAdmFsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG4gICAgIyAgIEBub3JtYWwgPSBAdmFsIC8gKCQoZG9jdW1lbnQpLmhlaWdodCgpIC0gd2luZG93LmlubmVySGVpZ2h0KVxuXG4gICAgI2lmIEBfY250ICUgMyA9PSAwXG5cbiAgICBAb2xkID0gQHZhbFxuICAgIEB2YWwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKClcblxuICAgIEBkID0gTWF0aC5hYnMoQG9sZCAtIEB2YWwpXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg44Oq44K144Kk44K6XG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX3Jlc2l6ZTogPT5cblxuICAgIEBkb2NTaXplLmhlaWdodCA9IEBfZG9jdW1lbnQuaGVpZ2h0KClcblxuICAgIEBzdyA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgQHNoID0gd2luZG93LmlubmVySGVpZ2h0XG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICNcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjaGFuZ2U6IChvcHQpID0+XG5cbiAgICBpZiBvcHQubW9kZSA9PSBcInNldFwiXG4gICAgICBAdXBkYXRlRmxnID0gZmFsc2VcbiAgICAgIEBfZG9jdW1lbnQgPSBvcHQuZWxcbiAgICAgIEBzZXQoMClcbiAgICAgIEBfcmVzaXplKClcbiAgICBlbHNlXG4gICAgICBAdXBkYXRlRmxnID0gdHJ1ZVxuICAgICAgQF9kb2N1bWVudCA9ICQoZG9jdW1lbnQpXG4gICAgICBAc2V0KG9wdC52YWwpXG4gICAgICBAX3Jlc2l6ZSgpXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0OiAodmFsKSA9PlxuXG4gICAgJCh3aW5kb3cpLnNjcm9sbFRvcCh2YWwpXG5cbiAgICBAb2xkID0gQHZhbCA9IHZhbFxuICAgIEBkID0gMFxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcGF1c2U6ID0+XG5cbiAgICBAX2J1ZmZlciA9ICQod2luZG93KS5zY3JvbGxUb3AoKSAvIChAZG9jU2l6ZS5oZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgQHNldE5vcm1hbCgwKVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICNcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXN1bWU6ID0+XG5cbiAgICBpZiBAX2J1ZmZlciA9PSAtMVxuICAgICAgcmV0dXJuXG5cbiAgICBAc2V0Tm9ybWFsKEBfYnVmZmVyKVxuICAgIEBfYnVmZmVyID0gLTFcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0Tm9ybWFsOiAodmFsKSA9PlxuXG4gICAgcyA9IChAZG9jU2l6ZS5oZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpICogdmFsXG4gICAgJCh3aW5kb3cpLnNjcm9sbFRvcChzKVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICNcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtb3ZlOiAob3B0KSA9PlxuXG4gICAgZHVyYSA9IG9wdC5kdXJhdGlvbiB8fCAxXG4gICAgZGVsYXkgPSBvcHQuZGVsYXkgfHwgMFxuXG4gICAgQF9tb3ZlLnRnID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXG4gICAgVHdlZW4uYShAX21vdmUsIHtcbiAgICAgIHRnOm9wdC50Z1xuICAgIH0sIGR1cmEsIGRlbGF5LCBQb3dlcjIuZWFzZUluT3V0LCBudWxsLCA9PlxuICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcChAX21vdmUudGcpXG4gICAgKVxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjcm9sbGVyKClcbiIsIlxuY2xhc3MgVHdlZW5cblxuICBjb25zdHJ1Y3RvcjogLT5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgVHdlZW5NYXjjgqLjg4vjg6Hjg7zjgrfjg6fjg7PoqK3lrppcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYTogKHRhcmdldCwgcGFyYW0sIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBvblN0YXJ0LCBvblVwZGF0ZSwgb25Db21wbGV0ZSkgPT5cblxuICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZih0YXJnZXQpXG5cbiAgICBmcm9tID0ge31cbiAgICB0byA9IHt9XG5cbiAgICBmb3Iga2V5LHZhbCBvZiBwYXJhbVxuICAgICAgaWYgdmFsWzBdP1xuICAgICAgICBmcm9tW2tleV0gPSB2YWxbMF1cbiAgICAgICAgdG9ba2V5XSAgID0gdmFsWzFdXG4gICAgICBlbHNlXG4gICAgICAgIHRvW2tleV0gPSB2YWxcblxuICAgIGZyb20uZm9yY2UzRCA9IHRydWVcbiAgICBUd2Vlbk1heC5zZXQodGFyZ2V0LCBmcm9tKVxuXG4gICAgaWYgZWFzaW5nP1xuICAgICAgdG8uZWFzZSA9IGVhc2luZ1xuICAgIGVsc2VcbiAgICAgIHRvLmVhc2UgPSBQb3dlcjAuZWFzZU5vbmVcblxuICAgIGlmIGRlbGF5P1xuICAgICAgdG8uZGVsYXkgPSBkZWxheVxuXG4gICAgaWYgb25TdGFydD9cbiAgICAgIHRvLm9uU3RhcnQgPSBvblN0YXJ0XG4gICAgaWYgb25VcGRhdGU/XG4gICAgICB0by5vblVwZGF0ZSA9IG9uVXBkYXRlXG4gICAgaWYgb25Db21wbGV0ZT9cbiAgICAgIHRvLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlXG5cbiAgICB0by5mb3JjZTNEID0gdHJ1ZVxuICAgIHJldHVybiBUd2Vlbk1heC50byh0YXJnZXQsIGR1cmF0aW9uLCB0bylcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBUd2Vlbk1heOODkeODqeODoeODvOOCv+ioreWumlxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXQ6ICh0YXJnZXQsIHRvKSA9PlxuXG4gICAgdG8uZm9yY2UzRCA9IHRydWVcbiAgICBUd2Vlbk1heC5zZXQodGFyZ2V0LCB0bylcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgI1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBraWxsOiAodGFyZ2V0KSA9PlxuXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHRhcmdldClcblxuXG5cblxuXG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHdlZW4oKVxuIiwiXG5jbGFzcyBUeXBlXG5cbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgICAjIOOCueOCr+ODquODvOODs+OCv+OCpOODl1xuICAgICMgWFMgOiDjgrnjg57jg5vns7tcbiAgICAjIExHIDogUEPns7tcbiAgICBAU0NSRUVOID0ge1xuICAgICAgWFMgOiAwXG4gICAgICBMRyA6IDFcbiAgICB9XG5cbiAgICBARlBTID0ge1xuICAgICAgSElHSCA6IDBcbiAgICAgIE1JRCA6IDFcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgpXG4iLCJcbiMg6YGF5bu25a6f6KGM6Zai5pWw44Kv44Op44K5XG5jbGFzcyBEZWxheVxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICBcbiAgICBAX3JlZ2lzdEZ1bmMgPSBbXVxuICAgIFxuICAgIEBfaW5pdCgpXG4gIFxuICBcbiAgXG4gIF9pbml0OiAtPlxuICAgIFxuICAgIHQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEBfdXBkYXRlKVxuICBcbiAgXG4gIFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg6Zai5pWw44KS55m76YyyXG4gICMgQGZ1bmMgIDog6Zai5pWwXG4gICMgQGRlbGF5IDog44GT44Gu44OV44Os44O844Og5b6M44Gr5a6f6KGMXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWRkOiAoZnVuYywgZGVsYXkpID0+XG4gICAgXG4gICAgQF9zbGljZSgpXG4gICAgXG4gICAgQF9yZWdpc3RGdW5jLnB1c2goe1xuICAgICAgZjogICBmdW5jXG4gICAgICBkOiAgIE51bWJlcihkZWxheSlcbiAgICAgIGZsZzogdHJ1ZVxuICAgIH0pXG4gIFxuICBcbiAgXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDplqLmlbDjgpLliYrpmaRcbiAgIyBAZnVuYyA6IOmWouaVsFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbW92ZTogKGZ1bmMpID0+XG4gIFxuICAgIGFyciA9IFtdXG4gICAgZm9yIHZhbCxpIGluIEBfcmVnaXN0RnVuY1xuICAgICAgaWYgdmFsPyAmJiB2YWwuZiAhPSBmdW5jXG4gICAgICAgIGFyci5wdXNoKHZhbClcbiAgICBAX3JlZ2lzdEZ1bmMgPSBhcnJcbiAgXG4gIFxuICBcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOabtOaWsFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF91cGRhdGU6ID0+XG5cbiAgICBmb3IgdmFsLGkgaW4gQF9yZWdpc3RGdW5jXG4gICAgICBpZiB2YWw/ICYmIHZhbC5mbGcgJiYgLS12YWwuZCA8PSAwXG4gICAgICAgIHZhbC5mKClcbiAgICAgICAgdmFsLmZsZyA9IGZhbHNlXG4gICAgXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShAX3VwZGF0ZSlcbiAgXG4gIFxuICBcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOWun+ihjOa4iOOBv+mWouaVsOOBruWJiumZpFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9zbGljZTogPT5cbiAgICBcbiAgICBmb3IgdmFsLGkgaW4gQF9yZWdpc3RGdW5jXG4gICAgICBpZiB2YWw/ICYmICF2YWwuZmxnXG4gICAgICAgIEBfcmVnaXN0RnVuY1tpXSA9IG51bGxcbiAgICBcbiAgICBuZXdBcnIgPSBbXVxuICAgIGZvciB2YWwsaSBpbiBAX3JlZ2lzdEZ1bmNcbiAgICAgIGlmIHZhbD8gdGhlbiBuZXdBcnIucHVzaCh2YWwpXG4gICAgXG4gICAgQF9yZWdpc3RGdW5jID0gbmV3QXJyXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IERlbGF5KCkiLCJVdGlsID0gcmVxdWlyZSgnLi9VdGlsJylcblxuIyDjg6rjgrXjgqTjgrrjgq/jg6njgrlcbmNsYXNzIFJlc2l6ZVxuXG5cbiAgY29uc3RydWN0b3I6IC0+XG5cbiAgICAjIOODquOCteOCpOOCuuaZguOBq+Wun+ihjOOBleOBm+OCi+mWouaVsOOCkuS/neaMgVxuICAgIEBfcmVzaXplTGlzdCA9IFtdXG5cbiAgICAjIOOCteOCpOOCulxuICAgIEBfc2l6ZSA9IHtcbiAgICAgIHdpZHRoOjBcbiAgICAgIGhlaWdodDowXG4gICAgfVxuICAgIEBfb2xkU2l6ZSA9IHtcbiAgICAgIHdpZHRoOjBcbiAgICAgIGhlaWdodDowXG4gICAgfVxuXG4gICAgQF90aW1lclxuXG4gICAgQF9pbml0KClcblxuXG5cbiAgX2luaXQ6ID0+XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgQF9lUmVzaXplKVxuICAgIEBfc2V0U3RhZ2VTaXplKClcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOmWouaVsOOCkueZu+mMslxuICAjIEBmdW5jICAgOiDplqLmlbAg44Oq44K144Kk44K65pmC44Gr44Km44Kj44Oz44OJ44Km44K144Kk44K644KS5byV5pWw44Go44GX44Gm5rih44GZXG4gICMgQGlzQ2FsbCA6IHRydWXjga7loLTlkIjjgZPjga7lvozjgZnjgZDjgavlrp/ooYzjgZXjgozjgosgZGVmPWZhbHNlXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWRkOiAoZnVuYywgaXNDYWxsKSAtPlxuXG4gICAgQF9yZXNpemVMaXN0LnB1c2goZnVuYylcblxuICAgIGlmIGlzQ2FsbD8gJiYgaXNDYWxsXG4gICAgICBmdW5jKEBfc2l6ZSlcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOmWouaVsOOCkuWJiumZpFxuICAjIEBmdW5jIDog6Zai5pWwXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVtb3ZlOiAoZnVuYykgLT5cblxuICAgIGFyciA9IFtdXG4gICAgZm9yIHZhbCxpIGluIEBfcmVzaXplTGlzdFxuICAgICAgaWYgdmFsICE9IGZ1bmNcbiAgICAgICAgYXJyLnB1c2godmFsKVxuICAgIEBfcmVzaXplTGlzdCA9IGFyclxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg44Oq44K144Kk44K644KS5aSW44GL44KJ5a6f6KGMXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVmcmVzaDogPT5cblxuICAgICMgQF9lUmVzaXplKClcbiAgICBAX2NhbGwoKVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg44Kk44OZ44Oz44OIIOODquOCteOCpOOCulxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIF9lUmVzaXplOiAoZSkgPT5cblxuICAgIGlmIGlzTW9iaWxlLmFueSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA9PSBAX3NpemUud2lkdGhcbiAgICAgIHJldHVyblxuXG4gICAgIyDjgrnjg4bjg7zjgrjjgrXjgqTjgrrjga7mm7TmlrBcbiAgICBAX3NldFN0YWdlU2l6ZSgpXG5cbiAgICAjIOeZu+mMsuOBl+OBpuOBguOCi+mWouaVsOOCkuWun+ihjFxuICAgIGlmIEBfdGltZXI/XG4gICAgICBjbGVhckludGVydmFsKEBfdGltZXIpXG4gICAgICBAX3RpbWVyID0gbnVsbFxuICAgIEBfdGltZXIgPSBzZXRUaW1lb3V0KEBfY2FsbCwgMzAwKVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg55m76Yyy44GX44Gm44GC44KL6Zai5pWw44KS5a6f6KGMXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX2NhbGw6ID0+XG5cbiAgICBmb3IgdmFsLGkgaW4gQF9yZXNpemVMaXN0XG4gICAgICB2YWwoQF9zaXplKVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg44K544OG44O844K444K144Kk44K644Gu5pu05pawXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgX3NldFN0YWdlU2l6ZTogPT5cblxuICAgIEBfb2xkU2l6ZS53aWR0aCAgPSBAX3NpemUud2lkdGhcbiAgICBAX29sZFNpemUuaGVpZ2h0ID0gQF9zaXplLmhlaWdodFxuXG4gICAgQF9zaXplLndpZHRoICA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgQF9zaXplLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg44K544OG44O844K45bmFXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3c6ID0+XG5cbiAgICBAX3NldFN0YWdlU2l6ZSgpXG4gICAgcmV0dXJuIEBfc2l6ZS53aWR0aFxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg44K544OG44O844K46auY44GVXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2g6ID0+XG5cbiAgICBAX3NldFN0YWdlU2l6ZSgpXG4gICAgcmV0dXJuIEBfc2l6ZS5oZWlnaHRcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOOCteOCpOOCulxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNpemU6ID0+XG5cbiAgICByZXR1cm4gQF9zaXplXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDliY3jga7jgrXjgqTjgrpcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvbGRTaXplOiA9PlxuXG4gICAgcmV0dXJuIEBfb2xkU2l6ZVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUmVzaXplKClcbiIsIlxuXG4jIOeUu+mdouabtOaWsOOCr+ODqeOCuVxuY2xhc3MgVXBkYXRlXG5cblxuICBjb25zdHJ1Y3RvcjotPlxuXG4gICAgIyDmm7TmlrDlm57mlbBcbiAgICBAY250ID0gMFxuXG4gICAgIyDmr47jg5Xjg6zjg7zjg6Dlrp/ooYzjgZXjgZvjgovplqLmlbDjgpLkv53mjIFcbiAgICBAX3VwZGF0ZUxpc3QgPSBbXVxuXG4gICAgQHBsYXkgPSB0cnVlXG5cblxuICAgIEBfaW5pdCgpXG5cblxuICBfaW5pdDogLT5cblxuICAgIHQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKEBfdXBkYXRlKVxuXG5cblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOWun+ihjOOBl+OBn+OBhOmWouaVsOOCkueZu+mMslxuICAjIEBmdW5jIDog6Zai5pWwXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWRkOiAoZnVuYykgPT5cblxuICAgIEBfdXBkYXRlTGlzdC5wdXNoKGZ1bmMpXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDlrp/ooYzjgZfjgZ/jgYTplqLmlbDjgpLliYrpmaRcbiAgIyBAZnVuYyA6IOmWouaVsFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbW92ZTogKGZ1bmMpID0+XG5cbiAgICBhcnIgPSBbXVxuICAgIGZvciB2YWwsIGkgaW4gQF91cGRhdGVMaXN0XG4gICAgICBpZiB2YWwgIT0gZnVuY1xuICAgICAgICBhcnIucHVzaCh2YWwpXG4gICAgQF91cGRhdGVMaXN0ID0gYXJyXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDmm7TmlrBcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBfdXBkYXRlOiA9PlxuXG4gICAgaWYgQHBsYXlcblxuICAgICAgQGNudCsrXG5cbiAgICAgICMg55m76Yyy44GX44Gm44KL6Zai5pWw44KS5a6f6KGMXG4gICAgICBmb3IgdmFsLGkgaW4gQF91cGRhdGVMaXN0XG4gICAgICAgIGlmIHZhbD8gdGhlbiB2YWwoKVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShAX3VwZGF0ZSlcblxuXG5cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBVcGRhdGUoKVxuIiwiXG5cbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIOS+v+WIqemWouaVsOOCr+ODqeOCuVxuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIFV0aWxcblxuICBjb25zdHJ1Y3RvcjogLT5cblxuXG4gICMg44Op44Oz44OA44Og44Gq5pWwKGZsb2F0KVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQG1pbiA6IOacgOWwj+WApChmbG9hdClcbiAgIyBAbWF4IDog5pyA5aSn5YCkKGZsb2F0KVxuICAjIHJldHVybiA6IG1pbijlkKvjgoAp44GL44KJbWF4KOWQq+OCgCnjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbAoZmxvYXQpXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tOiAobWluLCBtYXgpID0+XG5cbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG5cblxuXG4gIHJhbmRvbTI6IChtaW4sIG1heCkgPT5cblxuICAgIHIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cbiAgICBpZiBAaGl0KDIpXG4gICAgICByICo9IC0xXG4gICAgcmV0dXJuIHJcblxuXG5cbiAgIyDjg6njg7Pjg4Djg6DjgarmlbAoaW50KVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQG1pbiA6IOacgOWwj+WApChpbnQpXG4gICMgQG1heCA6IOacgOWkp+WApChpbnQpXG4gICMgcmV0dXJuIDogbWluKOWQq+OCgCnjgYvjgoltYXgo5ZCr44KAKeOBvuOBp+OBruODqeODs+ODgOODoOOBquaVsChpbnQpXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tSW50OiAobWluLCBtYXgpID0+XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG5cblxuICAjIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQHJhbmdlIDogMuS7peS4iuOBruWIhuavjShpbnQpXG4gICMgcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhpdDogKHJhbmdlKSA9PlxuXG4gICAgaWYgcmFuZ2UgPCAyIHx8ICFyYW5nZT8gdGhlbiByYW5nZSA9IDJcbiAgICByZXR1cm4gKEByYW5kb21JbnQoMCwgcmFuZ2UgLSAxKSA9PSAwKVxuXG5cblxuICAjIOikh+aVsOaMh+WumuOBl+OBn+evhOWbsuOBruS4reOBi+OCieODqeODs+ODgOODoOOBquaVsOOCkuWPluW+lyhmbG9hdClcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIEBsaXN0IDogW3ttaW465pyA5bCP5YCkKGZvYXQpLCBtYXg65pyA5aSn5YCkKGZsb2F0KX0sLi4uXVxuICAjIHJldHVybiA6IG1pbijlkKvjgoAp44GL44KJbWF4KOWQq+OCgCnjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbAoZmxvYXQpXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tTGlzdDogKGxpc3QpID0+XG5cbiAgICBhcmVhID0gQHJhbmRvbUFycihsaXN0KVxuICAgIHJldHVybiBAcmFuZG9tKGFyZWEubWluLCBhcmVhLm1heClcblxuXG5cbiAgIyDopIfmlbDmjIflrprjgZfjgZ/nr4Tlm7Ljga7kuK3jgYvjgonjg6njg7Pjg4Djg6DjgarmlbDjgpLlj5blvpcoaW50KVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQGxpc3QgOiBbe21pbjrmnIDlsI/lgKQoaW50KSwgbWF4OuacgOWkp+WApChpbnQpfSwuLi5dXG4gICMgcmV0dXJuIDogbWluKOWQq+OCgCnjgYvjgoltYXgo5ZCr44KAKeOBvuOBp+OBruODqeODs+ODgOODoOOBquaVsChpbnQpXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZG9tTGlzdEludDogKGxpc3QpID0+XG5cbiAgICBhcmVhID0gQHJhbmRvbUFycihsaXN0KVxuICAgIHJldHVybiBAcmFuZG9tSW50KGFyZWEubWluLCBhcmVhLm1heClcblxuXG5cbiAgIyDphY3liJflhoXjga7lgKTjgpLjg6njg7Pjg4Djg6Djgavlj5blvpdcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5kb21BcnI6IChhcnIpID0+XG5cbiAgICByZXR1cm4gYXJyW0ByYW5kb21JbnQoMCwgYXJyLmxlbmd0aCAtIDEpXVxuXG5cblxuICAjIOODkeODqeODoeODvOOCv+aVsFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHBhcmFtTnVtOiAob2JqKSA9PlxuXG4gICAgbnVtID0gMFxuICAgIGZvciB2YWwsa2V5IG9mIG9ialxuICAgICAgbnVtKytcblxuICAgIHJldHVybiBudW1cblxuXG5cbiAgIyAt5oyH5a6a5YCk44GL44KJ5oyH5a6a5YCk44G+44Gn44Gu44Op44Oz44OA44Og44Gq5pWwKGZsb2F0KVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQHZhbCA6IOaMh+WumuWApChmbG9hdClcbiAgIyByZXR1cm4gOiAtQHZhbOOBi+OCiUB2YWzjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbAoZmxvYXQpXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2U6ICh2YWwpID0+XG5cbiAgICByZXR1cm4gQHJhbmRvbSgtdmFsLCB2YWwpXG5cblxuXG4gICMgLeaMh+WumuWApOOBi+OCieaMh+WumuWApOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVsChpbnQpXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBAdmFsIDog5oyH5a6a5YCkKGludClcbiAgIyByZXR1cm4gOiAtQHZhbOOBi+OCiUB2YWzjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbAoaW50KVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlSW50OiAodmFsKSA9PlxuXG4gICAgcmV0dXJuIEByYW5kb21JbnQoLXZhbCwgdmFsKVxuXG5cblxuICAjIOWApOOCkuevhOWbsuWGheOBq+OBiuOBleOCgeOCi1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQHZhbCA6IOWApFxuICAjIEBtaW4gOiDmnIDlsI/lgKRcbiAgIyBAbWF4IDog5pyA5aSn5YCkXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2xhbXA6ICh2YWwsIG1pbiwgbWF4KSA9PlxuXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgodmFsLCBtaW4pKVxuXG5cblxuICAjIOWApOOBruODnuODg+ODlOODs+OCsFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQG51bSAgICAgOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKRcbiAgIyBAdG9NaW4gICA6IOWkieaPm+W+jOOBruacgOWwj+WApFxuICAjIEB0b01heCAgIDog5aSJ5o+b5b6M44Gu5pyA5aSn5YCkXG4gICMgQGZyb21NaW4gOiDlpInmj5vliY3jga7mnIDlsI/lgKRcbiAgIyBAZnJvbU1heCA6IOWkieaPm+WJjeOBruacgOWkp+WApFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcDogKG51bSwgdG9NaW4sIHRvTWF4LCBmcm9tTWluLCBmcm9tTWF4KSA9PlxuXG4gICAgaWYgbnVtIDw9IGZyb21NaW4gdGhlbiByZXR1cm4gdG9NaW5cbiAgICBpZiBudW0gPj0gZnJvbU1heCB0aGVuIHJldHVybiB0b01heFxuXG4gICAgcCA9ICh0b01heCAtIHRvTWluKSAvIChmcm9tTWF4IC0gZnJvbU1pbilcbiAgICByZXR1cm4gKChudW0gLSBmcm9tTWluKSAqIHApICsgdG9NaW5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWl4OiAoeCwgeSwgYSkgPT5cblxuICAgIHJldHVybiB4ICogKDEgLSBhKSArIHkgKiBhXG5cblxuXG4gICMg44Op44K444Ki44Oz44Gr5aSJ5o+bXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFkaWFuOiAoZGVncmVlKSA9PlxuXG4gICAgcmV0dXJuIGRlZ3JlZSAqIE1hdGguUEkgLyAxODBcblxuXG5cbiAgIyDop5LluqbjgavlpInmj5tcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWdyZWU6IChyYWRpYW4pID0+XG5cbiAgICByZXR1cm4gcmFkaWFuICogMTgwIC8gTWF0aC5QSVxuXG5cblxuICAjIOmFjeWIl+OCkuODqeODs+ODgOODoOOBq+S4puOBueabv+OBiFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNodWZmbGU6IChhcnIpID0+XG5cbiAgICBpID0gYXJyLmxlbmd0aFxuICAgIHdoaWxlIC0taVxuICAgICAgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpXG4gICAgICBpZiBpID09IGogdGhlbiBjb250aW51ZVxuICAgICAgayA9IGFycltpXVxuICAgICAgYXJyW2ldID0gYXJyW2pdXG4gICAgICBhcnJbal0gPSBrXG5cblxuXG4gICMgbnVsbOOCkuWJiumZpOOBl+OBn+mFjeWIl+OCkui/lOOBmVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNsaWNlTnVsbDogKGFycikgPT5cblxuICAgIG5ld0FyciA9IFtdXG4gICAgZm9yIHZhbCxpIGluIGFyclxuICAgICAgaWYgdmFsICE9IG51bGxcbiAgICAgICAgbmV3QXJyLnB1c2godmFsKVxuXG4gICAgcmV0dXJuIG5ld0FyclxuXG5cblxuICAjIOaWh+Wtl+WIl+OBruWFqOe9ruaPm1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGw6ICh2YWwsIG9yZywgZGVzdCkgPT5cblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpXG5cblxuXG4gICMg6YWN5YiX5YaF44Gu44OR44Op44Oh44O844K/44KS5q+U6LyD44GX44Gm44K944O844OIXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBAYXJyICA6IOmFjeWIl1xuICAjIEBwYXJhIDog44OR44Op44Oh44O844K/44O85ZCNXG4gICMgQGRlc2MgOiDpmY3poIbjgYvjganjgYbjgYsoYm9vbGVhbikg44OH44OV44Kp44Or44OI44Gv5piH6aCGXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc29ydDogKGFyciwgcGFyYSwgZGVzYykgPT5cblxuICAgIGlmICFkZXNjPyB0aGVuIGRlc2MgPSBmYWxzZVxuXG4gICAgaWYgZGVzY1xuICAgICAgYXJyLnNvcnQoKGEsIGIpID0+XG4gICAgICAgIHJldHVybiBiW3BhcmFdIC0gYVtwYXJhXVxuICAgICAgKVxuICAgIGVsc2VcbiAgICAgIGFyci5zb3J0KChhLCBiKSA9PlxuICAgICAgICByZXR1cm4gYVtwYXJhXSAtIGJbcGFyYV1cbiAgICAgIClcblxuXG5cbiAgIyDvvJLngrnplpPjga7ot53pm6JcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkaXN0YW5jZTogKHgxLCB5MSwgeDIsIHkyKSA9PlxuXG4gICAgZHggPSB4MSAtIHgyXG4gICAgZHkgPSB5MSAtIHkyXG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KVxuXG5cblxuICAjIOaVsOWApOOCkuaWh+Wtl+WIl+OBq+WkieaPm1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQG51bSAgOiDmlbDlgKRcbiAgIyBAa2V0YSA6IOahgeaVsFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG51bVN0cjogKG51bSwga2V0YSkgPT5cblxuICAgIHN0ciA9IFN0cmluZyhudW0pXG5cbiAgICBpZiBzdHIubGVuZ3RoID49IGtldGFcbiAgICAgIHJldHVybiBzdHJcblxuICAgIGxlbiA9IGtldGEgLSBzdHIubGVuZ3RoXG4gICAgaSA9IDBcbiAgICB3aGlsZSBpIDwgbGVuXG4gICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICAgIGkrK1xuXG4gICAgcmV0dXJuIHN0clxuXG5cblxuICAjIElF44GL44Gp44GG44GLIEVkZ2XlkKvjgoBcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0lFOiA9PlxuXG4gICAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuICh1YS5pbmRleE9mKCdtc2llJykgIT0gLTEgfHwgdWEuaW5kZXhPZigndHJpZGVudC83JykgIT0gLTHjgIB8fCB1YS5pbmRleE9mKCdlZGdlJykgIT0gLTEpXG5cblxuXG4gICMgSUXjgYvjganjgYbjgYsgRWRnZeWQq+OBvuOBquOBhFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSUUyOiA9PlxuXG4gICAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXG4gICAgcmV0dXJuICh1YS5pbmRleE9mKCdtc2llJykgIT0gLTEgfHwgdWEuaW5kZXhPZigndHJpZGVudC83JykgIT0gLTEpXG5cblxuXG4gICMgV0lO44GL44Gp44GG44GLXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNXaW46ID0+XG5cbiAgICByZXR1cm4gKHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgIT0gLTEpXG5cblxuXG4gICMgZ29vZ2xlQ2hyb21l44GL44Gp44GG44GLXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNDaHJvbWU6ID0+XG5cbiAgICByZXR1cm4gKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgIT0gLTEpXG5cblxuXG4gICMgRmlyZUZveOOBi+OBqeOBhuOBi1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRkY6ID0+XG5cbiAgICByZXR1cm4gKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9IC0xKVxuXG5cblxuICAjIFNhZmFyaeOBi+OBqeOBhuOBi1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzU2FmYXJpOiA9PlxuXG4gICAgcmV0dXJuICh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NhZmFyaScpICE9IC0xKSAmJiAhQGlzQ2hyb21lKClcblxuXG5cbiAgIyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIEByIDogMH4yNTVcbiAgIyBAZyA6IDB+MjU1XG4gICMgQGIgOiAwfjI1NVxuICAjIHJldHVybiA6IGV4ICcjRkZGRkZGJ1xuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEhleENvbG9yOiAocixnLGIpID0+XG5cbiAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KVxuICAgIHJldHVybiAnIycgKyBuZXcgQXJyYXkoNyAtIHN0ci5sZW5ndGgpLmpvaW4oJzAnKSArIHN0clxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgd2ViR0zkvb/jgYjjgovjgYtcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1c2VXZWJHTDogPT5cblxuICAgIHRyeVxuXG4gICAgICBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIHcgPSBjLmdldENvbnRleHQoJ3dlYmdsJykgfHwgYy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnKVxuICAgICAgcmV0dXJuICEhKHdpbmRvdy5XZWJHTFJlbmRlcmluZ0NvbnRleHQgJiYgdyAmJiB3LmdldFNoYWRlclByZWNpc2lvbkZvcm1hdClcblxuICAgIGNhdGNoIGVcblxuICAgICAgcmV0dXJuIGZhbHNlXG5cblxuXG4gICMg44Kv44Ko44Oq5oqc44GN5Ye644GXXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBAa2V5IDog5oqc44GN5Ye644GZ44OR44Op44Oh44O844K/5ZCNKFN0cmluZylcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRRdWVyeTogKGtleSkgLT5cblxuICAgIGtleSA9IGtleS5yZXBsYWNlKC9b4oKsW10vLFwi4oKs4oKs4oKsW1wiKS5yZXBsYWNlKC9b4oKsXV0vLFwi4oKs4oKs4oKsXVwiKTtcbiAgICByZWdleCA9IG5ldyBSZWdFeHAoXCJb4oKs4oKsPyZdXCIra2V5K1wiPShbXiYjXSopXCIpO1xuICAgIHFzID0gcmVnZXguZXhlYyh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgcXMgPT0gbnVsbFxuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHFzWzFdO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBVdGlsKClcbiIsIlxuXG5cbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIOOCteOCpOOCulxuIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNsYXNzIFNpemVcblxuXG4gIGNvbnN0cnVjdG9yOiAod2lkdGgsIGhlaWdodCkgLT5cblxuICAgIEB3aWR0aCAgPSB3aWR0aCB8fCAwXG4gICAgQGhlaWdodCA9IGhlaWdodCB8fCAwXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDljYrliIZcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB3aWR0aDI6ID0+XG5cbiAgICByZXR1cm4gfn4oQHdpZHRoICogMC41KVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg5Y2K5YiGXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaGVpZ2h0MjogPT5cblxuICAgIHJldHVybiB+fihAaGVpZ2h0ICogMC41KVxuXG5cblxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMg5bCP44GV44GE5pa5XG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWluOiA9PlxuXG4gICAgcmV0dXJuIE1hdGgubWluKEB3aWR0aCwgQGhlaWdodClcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOOBp+OBi+OBhOaWuVxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1heDogPT5cblxuICAgIHJldHVybiBNYXRoLm1heChAd2lkdGgsIEBoZWlnaHQpXG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDlkIzjgZjjgYvjganjgYbjgYtcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBlcXVhbDogKHdpZHRoLCBoZWlnaHQpID0+XG5cbiAgICByZXR1cm4gKEB3aWR0aCA9PSB3aWR0aCAmJiBAaGVpZ2h0ID09IGhlaWdodClcblxuXG5cbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIOWApOOCu+ODg+ODiFxuICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldDogKHdpZHRoLCBoZWlnaHQpID0+XG5cbiAgICBAd2lkdGggID0gd2lkdGhcbiAgICBAaGVpZ2h0ID0gaGVpZ2h0XG5cblxuXG4gICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyDjgrPjg5Tjg7xcbiAgIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb3B5OiAoc2l6ZSkgPT5cblxuICAgIEB3aWR0aCA9IHNpemUud2lkdGhcbiAgICBAaGVpZ2h0ID0gc2l6ZS5oZWlnaHRcblxuXG5cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==