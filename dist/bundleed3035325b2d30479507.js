/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  user-select: none;
}
body,
html {
  background-color: black;
}
.button,
.button2 {
  padding: 10px 30px;
  font-size: 15px;
}

#list-items,
#list-items2 {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 185px;
}

#list-items a,
#list-items2 a {
  display: block;
  font-size: 18px;
  background-color: #ddd;
  color: black;
  text-decoration: none;
  padding: 10px;
}

#btnHolder {
  display: flex;
  justify-content: center;
  gap: 20px;
}

#pictureContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}

#lamar {
  height: 25rem;
  width: 40rem;
  transition: opacity 2s;
  opacity: 1;
}

.animate {
  transition: opacity 2s;
  opacity: 1;
}

#circleContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 5rem;
  width: 40rem;
  margin: 0px auto;
  gap: 5px;
}

.circle {
  border: 1px solid black;
  background-color: white;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
}

#backBtn,
#forwardBtn {
  background-color: rgb(0, 0, 0);
  color: white;
  border: none;
  font-size: 3rem;
  opacity: 0.3;
}

#backBtn:hover,
#forwardBtn:hover {
  opacity: 1;
  color: white;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB;AACA;;EAEE,uBAAuB;AACzB;AACA;;EAEE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;EACd,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,QAAQ;AACV;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,8BAA8B;EAC9B,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,YAAY;AACd;;AAEA;;EAEE,UAAU;EACV,YAAY;AACd","sourcesContent":["* {\r\n  user-select: none;\r\n}\r\nbody,\r\nhtml {\r\n  background-color: black;\r\n}\r\n.button,\r\n.button2 {\r\n  padding: 10px 30px;\r\n  font-size: 15px;\r\n}\r\n\r\n#list-items,\r\n#list-items2 {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: white;\r\n  min-width: 185px;\r\n}\r\n\r\n#list-items a,\r\n#list-items2 a {\r\n  display: block;\r\n  font-size: 18px;\r\n  background-color: #ddd;\r\n  color: black;\r\n  text-decoration: none;\r\n  padding: 10px;\r\n}\r\n\r\n#btnHolder {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 20px;\r\n}\r\n\r\n#pictureContainer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 10px;\r\n}\r\n\r\n#lamar {\r\n  height: 25rem;\r\n  width: 40rem;\r\n  transition: opacity 2s;\r\n  opacity: 1;\r\n}\r\n\r\n.animate {\r\n  transition: opacity 2s;\r\n  opacity: 1;\r\n}\r\n\r\n#circleContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid black;\r\n  height: 5rem;\r\n  width: 40rem;\r\n  margin: 0px auto;\r\n  gap: 5px;\r\n}\r\n\r\n.circle {\r\n  border: 1px solid black;\r\n  background-color: white;\r\n  height: 2rem;\r\n  width: 2rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n#backBtn,\r\n#forwardBtn {\r\n  background-color: rgb(0, 0, 0);\r\n  color: white;\r\n  border: none;\r\n  font-size: 3rem;\r\n  opacity: 0.3;\r\n}\r\n\r\n#backBtn:hover,\r\n#forwardBtn:hover {\r\n  opacity: 1;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/changePic.js":
/*!**************************!*\
  !*** ./src/changePic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circleClick: () => (/* binding */ circleClick),
/* harmony export */   switchImageBack: () => (/* binding */ switchImageBack),
/* harmony export */   switchImageForward: () => (/* binding */ switchImageForward),
/* harmony export */   timeOut: () => (/* binding */ timeOut)
/* harmony export */ });
/* harmony import */ var _assets_lamarjackson_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/lamarjackson.png */ "./src/assets/lamarjackson.png");
/* harmony import */ var _assets_joeflacco_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/joeflacco.png */ "./src/assets/joeflacco.png");
/* harmony import */ var _assets_markandrews_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/markandrews.png */ "./src/assets/markandrews.png");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object.js */ "./src/object.js");











const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");

const mark = new _object_js__WEBPACK_IMPORTED_MODULE_3__.ImgDisplay(_assets_markandrews_png__WEBPACK_IMPORTED_MODULE_2__, circle2);
const lamar = new _object_js__WEBPACK_IMPORTED_MODULE_3__.ImgDisplay(_assets_lamarjackson_png__WEBPACK_IMPORTED_MODULE_0__, circle1);
const joe = new _object_js__WEBPACK_IMPORTED_MODULE_3__.ImgDisplay(_assets_joeflacco_png__WEBPACK_IMPORTED_MODULE_1__, circle3);
function switchImageForward(forwardBtn, imgEle, parentEle, picArr) {
  forwardBtn.addEventListener("click", (e) => {
    if (imgEle.src === picArr[0]) {
      imgEle.src = picArr[1];
      mark.circle.style.backgroundColor = "#2e2e2e";
      lamar.circle.style.backgroundColor = "white";
      joe.circle.style.backgroundColor = "white";
    } else {
      if (imgEle.src === picArr[1]) {
        imgEle.src = picArr[2];
        joe.circle.style.backgroundColor = "#2e2e2e";
        lamar.circle.style.backgroundColor = "white";
        mark.circle.style.backgroundColor = "white";
      } else {
        if (imgEle.src === picArr[2]) {
          imgEle.src = picArr[0];
          lamar.circle.style.backgroundColor = "#2e2e2e";
          mark.circle.style.backgroundColor = "white";
          joe.circle.style.backgroundColor = "white";
        }
      }
    }
  });
}

function switchImageBack(backBtn, imgEle, parentEle, picArr) {
  backBtn.addEventListener("click", (e) => {
    if (imgEle.src === picArr[0]) {
      imgEle.src = picArr[2];
      circle3.style.backgroundColor = "#2e2e2e";
      circle1.style.backgroundColor = "white";
      circle2.style.backgroundColor = "white";
    } else {
      if (imgEle.src === picArr[2]) {
        imgEle.src = picArr[1];
        circle2.style.backgroundColor = "#2e2e2e";
        circle1.style.backgroundColor = "white";
        circle3.style.backgroundColor = "white";
      } else {
        if (imgEle.src === picArr[1]) {
          imgEle.src = picArr[0];
          circle1.style.backgroundColor = "#2e2e2e";
          circle2.style.backgroundColor = "white";
          circle3.style.backgroundColor = "white";
        }
      }
    }
  });
}

function circleClick(imgEle, picArr) {
  circle1.addEventListener("click", () => {
    imgEle.src = picArr[0];
    circle1.style.backgroundColor = "#2e2e2e";
    circle2.style.backgroundColor = "white";
    circle3.style.backgroundColor = "white";
  });
  circle2.addEventListener("click", () => {
    imgEle.src = picArr[1];
    circle2.style.backgroundColor = "#2e2e2e";
    circle1.style.backgroundColor = "white";
    circle3.style.backgroundColor = "white";
  });
  circle3.addEventListener("click", () => {
    imgEle.src = picArr[2];
    circle3.style.backgroundColor = "#2e2e2e";
    circle1.style.backgroundColor = "white";
    circle2.style.backgroundColor = "white";
  });
}

function timeOut(imgEle, picArr) {
  let eleClass = document.querySelector(".animate");
  setInterval(() => {
    if (imgEle.src === picArr[0]) {
      imgEle.src = picArr[1];
      circle2.style.backgroundColor = "#2e2e2e";
      circle1.style.backgroundColor = "white";
      circle3.style.backgroundColor = "white";
    } else {
      if (imgEle.src === picArr[1]) {
        imgEle.src = picArr[2];
        circle3.style.backgroundColor = "#2e2e2e";
        circle1.style.backgroundColor = "white";
        circle2.style.backgroundColor = "white";
      } else {
        if (imgEle.src === picArr[2]) {
          imgEle.src = picArr[0];
          circle1.style.backgroundColor = "#2e2e2e";
          circle2.style.backgroundColor = "white";
          circle3.style.backgroundColor = "white";
        }
      }
    }
  }, 4000);
}


/***/ }),

/***/ "./src/displayImg.js":
/*!***************************!*\
  !*** ./src/displayImg.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayImage: () => (/* binding */ displayImage)
/* harmony export */ });
/* harmony import */ var _assets_lamarjackson_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/lamarjackson.png */ "./src/assets/lamarjackson.png");
/* harmony import */ var _assets_joeflacco_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/joeflacco.png */ "./src/assets/joeflacco.png");
/* harmony import */ var _assets_markandrews_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/markandrews.png */ "./src/assets/markandrews.png");
/* harmony import */ var _changePic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changePic.js */ "./src/changePic.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");










let picContainer = document.querySelector("#pictureContainer");
const circle1 = document.querySelector("#circle1");

const picArr = [_assets_lamarjackson_png__WEBPACK_IMPORTED_MODULE_0__, _assets_joeflacco_png__WEBPACK_IMPORTED_MODULE_1__, _assets_markandrews_png__WEBPACK_IMPORTED_MODULE_2__];

function displayImage() {
  const buttonBack = document.createElement("button");
  buttonBack.id = "backBtn";
  buttonBack.textContent = "⇦";
  picContainer.appendChild(buttonBack);

  const img1 = document.createElement("img");
  img1.id = "lamar";
  img1.classList.add("animate");
  img1.src = _assets_lamarjackson_png__WEBPACK_IMPORTED_MODULE_0__;
  picContainer.appendChild(img1);
  const buttonForward = document.createElement("button");
  buttonForward.id = "forwardBtn";
  buttonForward.textContent = "⇨";
  picContainer.appendChild(buttonForward);
  (0,_changePic_js__WEBPACK_IMPORTED_MODULE_3__.switchImageForward)(buttonForward, img1, picContainer, picArr);
  (0,_changePic_js__WEBPACK_IMPORTED_MODULE_3__.switchImageBack)(buttonBack, img1, picContainer, picArr);
  (0,_changePic_js__WEBPACK_IMPORTED_MODULE_3__.circleClick)(img1, picArr);
  (0,_changePic_js__WEBPACK_IMPORTED_MODULE_3__.timeOut)(img1, picArr);
  circle1.style.backgroundColor = "#2e2e2e";
}


/***/ }),

/***/ "./src/dropDownBtn.js":
/*!****************************!*\
  !*** ./src/dropDownBtn.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropDown: () => (/* binding */ dropDown)
/* harmony export */ });


function dropDown(BtnID, eleID) {
  BtnID.addEventListener("click", () => {
    if (eleID.style.display === "none") {
      eleID.style.display = "block";
    } else {
      eleID.style.display = "none";
    }
  });

  eleID.addEventListener("mouseout", () => {
    if (eleID.style.display === "none") {
      eleID.style.display = "block";
    } else {
      eleID.style.display = "none";
    }
  });
}


/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImgDisplay: () => (/* binding */ ImgDisplay)
/* harmony export */ });


class ImgDisplay {
  constructor(img, circle, style) {
    (this.img = img), (this.circle = circle);
  }
}


/***/ }),

/***/ "./src/assets/joeflacco.png":
/*!**********************************!*\
  !*** ./src/assets/joeflacco.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "joeflacco.png";

/***/ }),

/***/ "./src/assets/lamarjackson.png":
/*!*************************************!*\
  !*** ./src/assets/lamarjackson.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "lamarjackson.png";

/***/ }),

/***/ "./src/assets/markandrews.png":
/*!************************************!*\
  !*** ./src/assets/markandrews.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "markandrews.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropDownBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropDownBtn */ "./src/dropDownBtn.js");
/* harmony import */ var _displayImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayImg */ "./src/displayImg.js");



const btn1 = document.querySelector(".button");
const showDiv1 = document.querySelector("#list-items");
const btn2 = document.querySelector(".button2");
const showDiv2 = document.querySelector("#list-items2");

(0,_dropDownBtn__WEBPACK_IMPORTED_MODULE_0__.dropDown)(btn1, showDiv1);
(0,_dropDownBtn__WEBPACK_IMPORTED_MODULE_0__.dropDown)(btn2, showDiv2);

(0,_displayImg__WEBPACK_IMPORTED_MODULE_1__.displayImage)();

})();

/******/ })()
;
//# sourceMappingURL=bundleed3035325b2d30479507.js.map