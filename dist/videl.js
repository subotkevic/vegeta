/*!
 * Videl (https://github.com/subotkevic/videl)
 * (c) 2017 Artur Subotkevič
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Videl"] = factory();
	else
		root["Videl"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* unused harmony default export */ var _unused_webpack_default_export = (camelCase);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
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
  data() {
    return {};
  },

  props: {
    'is-white': Boolean,
    'is-light': Boolean,
    'is-dark': Boolean,
    'is-black': Boolean,
    'is-link': Boolean,
    'is-primary': Boolean,
    'is-info': Boolean,
    'is-success': Boolean,
    'is-warning': Boolean,
    'is-danger': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'is-outlined': Boolean,
    'is-inverted': Boolean,
    'is-hovered': Boolean,
    'is-focused': Boolean,
    'is-active': Boolean,
    'is-loading': Boolean,
    'is-disabled': Boolean,
    'el': {
      type: String,
      default: 'a'
    }
  },

  computed: {
    classes() {
      return {
        'is-white': this.isWhite,
        'is-light': this.isLight,
        'is-dark': this.isDark,
        'is-black': this.isBlock,
        'is-link': this.isLink,
        'is-primary': this.isPrimary,
        'is-info': this.isInfo,
        'is-success': this.isSuccess,
        'is-warning': this.isWarning,
        'is-danger': this.isDanger,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge,
        'is-outlined': this.isOutlined,
        'is-inverted': this.isInverted,
        'is-hovered': this.isHovered,
        'is-focused': this.isFocused,
        'is-active': this.isActive,
        'is-loading': this.isLoading,
        'is-disabled': this.isDisabled
      };
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

let sizeWords = ['three-quarters', 'two-thirds', 'half', 'one-third', 'one-quarter'];
let sizePrefixes = ['is', 'is-offset'];
let sizeSuffixes = ['mobile', 'tablet', 'desktop'];
let sizeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let properties = {
  'is-narrow': Boolean,
  'is-narrow-mobile': Boolean,
  'is-narrow-tablet': Boolean,
  'is-narrow-desktop': Boolean
};
let sizes = [];
let sizesCamel = [];

// Word sizes
for (let word of sizeWords) {
  generateSizes(word);
}

// Num sizes
for (let num of sizeNums) {
  generateSizes(num);
}

function generateSizes(word) {
  for (let prefix of sizePrefixes) {
    let size = prefix + '-' + word;

    sizes.push(size);
    sizesCamel.push(camelCase(size));

    Object.assign(properties, {
      [size]: Boolean
    });

    // Suffixes
    for (let suffix of sizeSuffixes) {
      let sizeWithSuffix = size + '-' + suffix;

      sizes.push(sizeWithSuffix);
      sizesCamel.push(camelCase(sizeWithSuffix));

      Object.assign(properties, {
        [sizeWithSuffix]: Boolean
      });
    }
  }
}

function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      sizingClasses: {}
    };
  },

  created() {
    for (let [index, word] of sizes.entries()) {
      Object.assign(this.sizingClasses, {
        [sizes[index]]: this[sizesCamel[index]]
      });
    }
  },

  computed: {
    classes() {
      let classes = {
        'is-narrow': this.isNarrow,
        'is-narrow-mobile': this.isNarrowMobile,
        'is-narrow-tablet': this.isNarrowTablet,
        'is-narrow-desktop': this.isNarrowDesktop
      };

      return Object.assign(this.sizingClasses, classes);
    }
  },

  props: properties
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-mobile': Boolean,
    'is-desktop': Boolean,
    'is-multiline': Boolean,
    'is-gapless': Boolean
  },

  computed: {
    classes() {
      return {
        'is-mobile': this.isMobile,
        'is-desktop': this.isDesktop,
        'is-multiline': this.isMultiline,
        'is-gapless': this.isGapless
      };
    }
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-fluid': Boolean
  },

  computed: {
    classes() {
      return {
        'is-fluid': this.isFluid
      };
    }
  }
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean
  },

  computed: {
    classes() {
      return {
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'el': {
      type: String,
      default: 'a'
    }
  },

  computed: {
    classes() {
      return {
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'has-icon': Boolean,
    'has-icon-right': Boolean,
    'is-loading': Boolean,
    'is-expanded': Boolean
  },

  computed: {
    classes() {
      return {
        'has-icon': this.hasIcon,
        'has-icon-right': this.hasIconRight,
        'is-loading': this.isLoading,
        'is-expanded': this.isExpanded
      };
    }
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'has-addons': Boolean,
    'has-addons-centered': Boolean,
    'has-addons-right': Boolean,
    'is-grouped': Boolean,
    'is-horizontal': Boolean
  },

  computed: {
    classes() {
      return {
        'has-addons': this.hasAddons,
        'has-addons-centered': this.hasAddonsCentered,
        'has-addons-right': this.hasAddonsRight,
        'is-grouped': this.isGrouped,
        'is-horizontal': this.isHorizontal
      };
    }
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-normal': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean
  },

  computed: {
    classes() {
      return {
        'is-normal': this.isNormal,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge
      };
    }
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-white': Boolean,
    'is-light': Boolean,
    'is-dark': Boolean,
    'is-black': Boolean,
    'is-link': Boolean,
    'is-primary': Boolean,
    'is-info': Boolean,
    'is-success': Boolean,
    'is-warning': Boolean,
    'is-danger': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'is-hovered': Boolean,
    'is-focused': Boolean
  },

  computed: {
    classes() {
      return {
        'is-white': this.isWhite,
        'is-light': this.isLight,
        'is-dark': this.isDark,
        'is-black': this.isBlock,
        'is-link': this.isLink,
        'is-primary': this.isPrimary,
        'is-info': this.isInfo,
        'is-success': this.isSuccess,
        'is-warning': this.isWarning,
        'is-danger': this.isDanger,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge,
        'is-hovered': this.isHovered,
        'is-focused': this.isFocused
      };
    }
  }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    'is-white': Boolean,
    'is-light': Boolean,
    'is-dark': Boolean,
    'is-black': Boolean,
    'is-link': Boolean,
    'is-primary': Boolean,
    'is-info': Boolean,
    'is-success': Boolean,
    'is-warning': Boolean,
    'is-danger': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'is-hovered': Boolean,
    'is-focused': Boolean
  },

  computed: {
    classes() {
      return {
        'is-white': this.isWhite,
        'is-light': this.isLight,
        'is-dark': this.isDark,
        'is-black': this.isBlock,
        'is-link': this.isLink,
        'is-primary': this.isPrimary,
        'is-info': this.isInfo,
        'is-success': this.isSuccess,
        'is-warning': this.isWarning,
        'is-danger': this.isDanger,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge,
        'is-hovered': this.isHovered,
        'is-focused': this.isFocused
      };
    }
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    'is-white': Boolean,
    'is-light': Boolean,
    'is-dark': Boolean,
    'is-black': Boolean,
    'is-link': Boolean,
    'is-primary': Boolean,
    'is-info': Boolean,
    'is-success': Boolean,
    'is-warning': Boolean,
    'is-danger': Boolean,
    'is-small': Boolean,
    'is-medium': Boolean,
    'is-large': Boolean,
    'is-hovered': Boolean,
    'is-focused': Boolean,
    'value': {}
  },

  computed: {
    classes() {
      return {
        'is-white': this.isWhite,
        'is-light': this.isLight,
        'is-dark': this.isDark,
        'is-black': this.isBlock,
        'is-link': this.isLink,
        'is-primary': this.isPrimary,
        'is-info': this.isInfo,
        'is-success': this.isSuccess,
        'is-warning': this.isWarning,
        'is-danger': this.isDanger,
        'is-small': this.isSmall,
        'is-medium': this.isMedium,
        'is-large': this.isLarge,
        'is-hovered': this.isHovered,
        'is-focused': this.isFocused
      };
    }
  }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

let sizePrefixes = ['is'];
let sizeNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let properties = {
  'is-ancestor': Boolean,
  'is-parent': Boolean,
  'is-child': Boolean,
  'is-vertical': Boolean
};
let sizes = [];
let sizesCamel = [];

// Sizes
for (let num of sizeNums) {
  generateSizes(num);
}

function generateSizes(word) {
  for (let prefix of sizePrefixes) {
    let size = prefix + '-' + word;

    sizes.push(size);
    sizesCamel.push(camelCase(size));

    Object.assign(properties, {
      [size]: Boolean
    });
  }
}

function camelCase(string) {
  return string.replace(/(\-[a-z0-9])/g, function ($1) {
    return $1.toUpperCase().replace('-', '');
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      sizingClasses: {}
    };
  },

  created() {
    for (let [index, word] of sizes.entries()) {
      Object.assign(this.sizingClasses, {
        [sizes[index]]: this[sizesCamel[index]]
      });
    }
  },

  computed: {
    classes() {
      let classes = {
        'is-ancestor': this.isAncestor,
        'is-parent': this.isParent,
        'is-child': this.isChild,
        'is-vertical': this.isVertical
      };

      return Object.assign(this.sizingClasses, classes);
    }
  },

  props: properties
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_camel_case__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Container_Container__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Container_Container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Container_Container__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Columns_Column__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Columns_Column___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Columns_Column__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Box_Box__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Box_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Box_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Button_Button__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Button_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_Button_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Content_Content__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Content_Content___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Content_Content__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Form_Field__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Form_Field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_Form_Field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Form_Label__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Form_Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_Form_Label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Form_Control__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Form_Control___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_Form_Control__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Form_Input__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Form_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_Form_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Form_Select__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_Form_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_Form_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__videl_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__videl_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__videl_scss__);
// Helpers


// Components

















// Styles


const defaults = {
  componentPrefix: 'Vd'
};

const components = {
  Container: __WEBPACK_IMPORTED_MODULE_1__components_Container_Container___default.a,
  Columns: __WEBPACK_IMPORTED_MODULE_2__components_Columns_Columns___default.a,
  Column: __WEBPACK_IMPORTED_MODULE_3__components_Columns_Column___default.a,
  Tile: __WEBPACK_IMPORTED_MODULE_4__components_Tile_Tile___default.a,
  Box: __WEBPACK_IMPORTED_MODULE_5__components_Box_Box___default.a,
  Button: __WEBPACK_IMPORTED_MODULE_6__components_Button_Button___default.a,
  Content: __WEBPACK_IMPORTED_MODULE_7__components_Content_Content___default.a,
  Delete: __WEBPACK_IMPORTED_MODULE_8__components_Delete_Delete___default.a,
  Field: __WEBPACK_IMPORTED_MODULE_9__components_Form_Field___default.a,
  FieldLabel: __WEBPACK_IMPORTED_MODULE_10__components_Form_FieldLabel___default.a,
  FieldBody: __WEBPACK_IMPORTED_MODULE_11__components_Form_FieldBody___default.a,
  Label: __WEBPACK_IMPORTED_MODULE_12__components_Form_Label___default.a,
  Control: __WEBPACK_IMPORTED_MODULE_13__components_Form_Control___default.a,
  Input: __WEBPACK_IMPORTED_MODULE_14__components_Form_Input___default.a,
  Textarea: __WEBPACK_IMPORTED_MODULE_15__components_Form_Textarea___default.a,
  Select: __WEBPACK_IMPORTED_MODULE_16__components_Form_Select___default.a
};

const Videl = {
  install(Vue) {
    Object.keys(components).forEach(name => {
      Vue.component(defaults.componentPrefix + name, components[name]);
    });
  }
};

// Automatically install Videl if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Videl);
}

/* harmony default export */ __webpack_exports__["default"] = (Videl);

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "column",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.el == 'button') ? _c('button', {
    staticClass: "delete",
    class: _vm.classes
  }) : _c('a', {
    staticClass: "delete",
    class: _vm.classes
  })
},staticRenderFns: []}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label",
    class: _vm.classes
  }, [_c('vd-label', [_vm._t("default")], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticClass: "input",
    class: _vm.classes,
    attrs: {
      "type": "text"
    }
  })
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.el == 'button') ? _c('button', {
    staticClass: "button",
    class: _vm.classes
  }, [_vm._t("default")], 2) : _c('a', {
    staticClass: "button",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-body"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tile",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "select",
    class: _vm.classes
  }, [_c('select', [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('textarea', {
    staticClass: "textarea",
    class: _vm.classes
  }, [_vm._v(_vm._s(_vm.value))])
},staticRenderFns: []}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "label"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ })
/******/ ]);
});
//# sourceMappingURL=videl.js.map