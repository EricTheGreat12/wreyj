/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;\n    --gameboard-height: max(min(calc(98vh - 264px), 420px), 240px);\n    --gameboard-width: max(min(calc(var(--gameboard-height) / 6 * 5),\n         calc(100vw)), 200px);\n    --dark: #121213;\n    --light: #d7dadc;\n    --dark-grey: #3a3a3c;\n    --med-grey: #565758;\n    --light-grey: #818384;\n    --yellow: #b59f3b;\n    --green: #538d4e;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100vh;\n}\n\nbody {\n    background-color: var(--dark);\n    color: var(--light);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\nheader {\n    width: min(500px, 98vw);\n    height: 50px;\n    flex: none;\n    font-size: 36px;\n    font-weight: 700;\n    letter-spacing: .2rem;\n    border-bottom: 1px solid var(--dark-grey);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameBoard {\n    padding: 10px;\n    box-sizing: border-box;\n    height: var(--gameboard-height);\n    width: var(--gameboard-width);\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n}\n\n.gameBoardRow {\n    display: flex;\n    gap: 5px;\n    margin: auto 0;\n}\n\n.shakeRow {\n    animation: Shake .7s;\n}\n\n@keyframes Shake {\n    10%, 90% {\n      transform: translateX(-1px);\n    }\n\n    20%, 80% {\n      transform: translateX(2px);\n    }\n\n    30%, 50%, 70% {\n      transform: translateX(-4px);\n    }\n\n    40%, 60% {\n      transform: translateX(4px);\n    }\n  }\n\n.squareContainer {\n    position: relative;\n    width: 20%;\n}\n\n.squareContainer::before {\n    content: \"\";\n    display: block;\n    padding-top: 100%;\n}\n\n.square {\n    position: absolute;\n    top:      0;\n    left:     0;\n    bottom:   0;\n    right:    0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid var(--dark-grey);\n    font-size: 32px;\n    font-weight: bold;\n    cursor: default;\n}\n\n.present {\n    background-color: var(--yellow);\n    border: none;\n}\n\n.correct {\n    background-color: var(--green);\n    border: none;\n}\n\n.absent {\n    background-color: var(--dark-grey);\n    border: none;\n}\n\n.unchecked {\n    border-color: var(--med-grey);\n}\n\n#keyboard {\n    width: min(500px, 100vw);\n    height: 200px;\n    flex: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    box-sizing: border-box;\n    padding: 0 8px 10px;\n}\n\n.keyboardRow {\n    width: 100%;\n    height: 58px;\n    display: flex;\n    justify-content: center;\n}\n\n.key {\n    margin: 0 6px 0 0;\n    padding: 0;\n    flex: 1;\n    border: none;\n    border-radius: 4px;\n    background-color: var(--light-grey);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    color: var(--light);\n    font-weight: bold;\n}\n\n.key:last-of-type {\n    margin: 0;\n}\n\n.bigKey {\n    flex: 1.5;\n    font-size: 12px;\n}\n\n.spacer {\n    flex: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8DAA8D;IAC9D,8DAA8D;IAC9D;6BACyB;IACzB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,yCAAyC;IACzC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,6BAA6B;IAC7B,aAAa;IACb,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,cAAc;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI;MACE,2BAA2B;IAC7B;;IAEA;MACE,0BAA0B;IAC5B;;IAEA;MACE,2BAA2B;IAC7B;;IAEA;MACE,0BAA0B;IAC5B;EACF;;AAEF;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;IAClC,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,OAAO;IACP,YAAY;IACZ,kBAAkB;IAClB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,SAAS;AACb","sourcesContent":[":root {\n    font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;\n    --gameboard-height: max(min(calc(98vh - 264px), 420px), 240px);\n    --gameboard-width: max(min(calc(var(--gameboard-height) / 6 * 5),\n         calc(100vw)), 200px);\n    --dark: #121213;\n    --light: #d7dadc;\n    --dark-grey: #3a3a3c;\n    --med-grey: #565758;\n    --light-grey: #818384;\n    --yellow: #b59f3b;\n    --green: #538d4e;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100vh;\n}\n\nbody {\n    background-color: var(--dark);\n    color: var(--light);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\nheader {\n    width: min(500px, 98vw);\n    height: 50px;\n    flex: none;\n    font-size: 36px;\n    font-weight: 700;\n    letter-spacing: .2rem;\n    border-bottom: 1px solid var(--dark-grey);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameBoard {\n    padding: 10px;\n    box-sizing: border-box;\n    height: var(--gameboard-height);\n    width: var(--gameboard-width);\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n}\n\n.gameBoardRow {\n    display: flex;\n    gap: 5px;\n    margin: auto 0;\n}\n\n.shakeRow {\n    animation: Shake .7s;\n}\n\n@keyframes Shake {\n    10%, 90% {\n      transform: translateX(-1px);\n    }\n\n    20%, 80% {\n      transform: translateX(2px);\n    }\n\n    30%, 50%, 70% {\n      transform: translateX(-4px);\n    }\n\n    40%, 60% {\n      transform: translateX(4px);\n    }\n  }\n\n.squareContainer {\n    position: relative;\n    width: 20%;\n}\n\n.squareContainer::before {\n    content: \"\";\n    display: block;\n    padding-top: 100%;\n}\n\n.square {\n    position: absolute;\n    top:      0;\n    left:     0;\n    bottom:   0;\n    right:    0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid var(--dark-grey);\n    font-size: 32px;\n    font-weight: bold;\n    cursor: default;\n}\n\n.present {\n    background-color: var(--yellow);\n    border: none;\n}\n\n.correct {\n    background-color: var(--green);\n    border: none;\n}\n\n.absent {\n    background-color: var(--dark-grey);\n    border: none;\n}\n\n.unchecked {\n    border-color: var(--med-grey);\n}\n\n#keyboard {\n    width: min(500px, 100vw);\n    height: 200px;\n    flex: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    box-sizing: border-box;\n    padding: 0 8px 10px;\n}\n\n.keyboardRow {\n    width: 100%;\n    height: 58px;\n    display: flex;\n    justify-content: center;\n}\n\n.key {\n    margin: 0 6px 0 0;\n    padding: 0;\n    flex: 1;\n    border: none;\n    border-radius: 4px;\n    background-color: var(--light-grey);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    color: var(--light);\n    font-weight: bold;\n}\n\n.key:last-of-type {\n    margin: 0;\n}\n\n.bigKey {\n    flex: 1.5;\n    font-size: 12px;\n}\n\n.spacer {\n    flex: 0.5;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


const game = (() => {
    let row = 0;
    let col = 0;

    const gameArray = new Array(6);
    for (let i = 0; i < gameArray.length; i++) {
        gameArray[i] = new Array(5);
    }

    const resetAll = () => {
        row = 0;
        col = 0;
        for (let i = 0; i < gameArray.length; i++) {
            for (let x = 0; x < gameArray[i].length; x++) {
                gameArray[i][x] = { char: "", state: ""};
            }
        }
    }

    const playChar = (char) => {
        if (col < 5) {
            gameArray[row][col].char = char;
            gameArray[row][col].state = "unchecked";
            _gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard.updateSquare(row, col, gameArray[row][col]);
            col++;
        }
    }

    const del = () => {
        if (col > 0) {
            col--
            gameArray[row][col].char = "";
            gameArray[row][col].state = "";
            _gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard.updateSquare(row, col, gameArray[row][col]);
        }
    }

    const enter = () => {
        if (col == 5) {

        }
        else {
            _gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard.shakeRow(row);
        }
    }
    //game.checkWord()

    return { resetAll, playChar, del, enter }
})();

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard)
/* harmony export */ });
const gameBoard = (() => {
    const make = () => {
        const gameBoardDiv = document.createElement("div");
        gameBoardDiv.id = "gameBoard";
        for (let i = 0; i < 6; i++) {
            const row = document.createElement("div");
            row.classList.add("gameBoardRow");
            row.id = `row${i}`;
            gameBoardDiv.append(row);
            for (let x = 0; x < 5; x++) {
                const squareContainer = document.createElement("div");
                squareContainer.classList.add("squareContainer");
                row.append(squareContainer);
                squareContainer.append(makeSquare(i, x));
            }
        }
        return gameBoardDiv;
    }
    
    const makeSquare = (i, x) => {
        const square = document.createElement("div");
        square.id = `${i},${x}`
        square.classList.add("square");
        return square;
    }

    const updateSquare = (i, x, input) => {
        const square = document.getElementById(`${i},${x}`);
        square.className = `square ${input.state}`;
        square.textContent = input.char;
    }

    const shakeRow = (i) => {
        document.getElementById(`row${i}`).animate([
                { transform: "translateX(-1px)" },
                { transform: "translateX(2px)" },
                { transform: "translateX(-4px)" },
                { transform: "translateX(4px)" },
                { transform: "translateX(-4px)" },
                { transform: "translateX(4px)" },
                { transform: "translateX(-4px)" },
                { transform: "translateX(2px)" },
                { transform: "translateX(-1px)" },
            ], 500);
    }

    return { make, updateSquare, shakeRow }
})();


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader)
/* harmony export */ });
const makeHeader = () => {
    const header = document.createElement("header");
    const title = document.createElement("div");
    title.textContent = "WREYJL";
    header.append(title);
    return header;
}



/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyboard": () => (/* binding */ keyboard)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


const keyboard = (() => {

    const chars = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['spacer', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'spacer'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']];

    const make = () => {
        const keyBoardDiv = document.createElement("div");
        keyBoardDiv.id = "keyboard";
        for (let i in chars) {
            let row = document.createElement("div");
            row.classList.add("keyboardRow");
            keyBoardDiv.append(row);
            for (let x in chars[i]) {
                row.append(makeKey(chars[i][x]));
            }
        }
        return keyBoardDiv;
    }

    const makeKey = (char) => {
        let key;
        if (char == 'spacer') {
            key = document.createElement("div");
            key.classList.add(char);
        }
        else if (char == 'ENTER') {
            key = document.createElement("button");
            key.id = char;
            key.textContent = char;
            key.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_0__.game.enter)
            key.classList.add("key", "bigKey");
        }
        else if (char == 'DEL') {
            key = document.createElement("button");
            key.id = char;
            key.textContent = char;
            key.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_0__.game.del)

            key.classList.add("key", "bigKey");
        }
        else {
            key = document.createElement("button");
            key.id = char;
            key.textContent = char;
            key.addEventListener("click", (e) => _game__WEBPACK_IMPORTED_MODULE_0__.game.playChar(e.target.id))
            key.classList.add("key");
        }
        
        return key;
    }
    return { make }
})();

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const page = (() => {
    const make = () => {
        document.body.append(
            (0,_header__WEBPACK_IMPORTED_MODULE_2__.makeHeader)(), _gameBoard__WEBPACK_IMPORTED_MODULE_1__.gameBoard.make(), _keyboard__WEBPACK_IMPORTED_MODULE_3__.keyboard.make());
    }

    const reset = () => {
        while (document.body.firstChild.nextSibling) {
            document.body.firstChild.nextSibling.remove();
        }
        make();
    }

    return { reset }
})();

page.reset();
_game__WEBPACK_IMPORTED_MODULE_0__.game.resetAll();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsYUFBYTtBQUNiLENBQUM7Ozs7OztVQ3RERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNVO0FBQ0Y7QUFDQTtBQUNsQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFVLElBQUksc0RBQWMsSUFBSSxvREFBYTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQSxnREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dyZXlqLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93cmV5ai8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93cmV5ai8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93cmV5ai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93cmV5ai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93cmV5ai8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dyZXlqLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL3dyZXlqLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly93cmV5ai8uL3NyYy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly93cmV5ai93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93cmV5ai93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93cmV5ai93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd3JleWovd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93cmV5ai93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dyZXlqLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2xlYXIgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtLWdhbWVib2FyZC1oZWlnaHQ6IG1heChtaW4oY2FsYyg5OHZoIC0gMjY0cHgpLCA0MjBweCksIDI0MHB4KTtcXG4gICAgLS1nYW1lYm9hcmQtd2lkdGg6IG1heChtaW4oY2FsYyh2YXIoLS1nYW1lYm9hcmQtaGVpZ2h0KSAvIDYgKiA1KSxcXG4gICAgICAgICBjYWxjKDEwMHZ3KSksIDIwMHB4KTtcXG4gICAgLS1kYXJrOiAjMTIxMjEzO1xcbiAgICAtLWxpZ2h0OiAjZDdkYWRjO1xcbiAgICAtLWRhcmstZ3JleTogIzNhM2EzYztcXG4gICAgLS1tZWQtZ3JleTogIzU2NTc1ODtcXG4gICAgLS1saWdodC1ncmV5OiAjODE4Mzg0O1xcbiAgICAtLXllbGxvdzogI2I1OWYzYjtcXG4gICAgLS1ncmVlbjogIzUzOGQ0ZTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDk4dncpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lQm9hcmQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IHZhcigtLWdhbWVib2FyZC1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lQm9hcmRSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxufVxcblxcbi5zaGFrZVJvdyB7XFxuICAgIGFuaW1hdGlvbjogU2hha2UgLjdzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIFNoYWtlIHtcXG4gICAgMTAlLCA5MCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcXG4gICAgfVxcblxcbiAgICAyMCUsIDgwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XFxuICAgIH1cXG5cXG4gICAgMzAlLCA1MCUsIDcwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpO1xcbiAgICB9XFxuXFxuICAgIDQwJSwgNjAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcXG4gICAgfVxcbiAgfVxcblxcbi5zcXVhcmVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi5zcXVhcmVDb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy10b3A6IDEwMCU7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogICAgICAwO1xcbiAgICBsZWZ0OiAgICAgMDtcXG4gICAgYm90dG9tOiAgIDA7XFxuICAgIHJpZ2h0OiAgICAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucHJlc2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFic2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnVuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWVkLWdyZXkpO1xcbn1cXG5cXG4ja2V5Ym9hcmQge1xcbiAgICB3aWR0aDogbWluKDUwMHB4LCAxMDB2dyk7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCA4cHggMTBweDtcXG59XFxuXFxuLmtleWJvYXJkUm93IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5rZXkge1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmtleTpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5iaWdLZXkge1xcbiAgICBmbGV4OiAxLjU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnNwYWNlciB7XFxuICAgIGZsZXg6IDAuNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhEQUE4RDtJQUM5RCw4REFBOEQ7SUFDOUQ7NkJBQ3lCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFFBQVE7SUFDUixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtNQUNFLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLDBCQUEwQjtJQUM1Qjs7SUFFQTtNQUNFLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLDBCQUEwQjtJQUM1QjtFQUNGOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixPQUFPO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2xlYXIgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtLWdhbWVib2FyZC1oZWlnaHQ6IG1heChtaW4oY2FsYyg5OHZoIC0gMjY0cHgpLCA0MjBweCksIDI0MHB4KTtcXG4gICAgLS1nYW1lYm9hcmQtd2lkdGg6IG1heChtaW4oY2FsYyh2YXIoLS1nYW1lYm9hcmQtaGVpZ2h0KSAvIDYgKiA1KSxcXG4gICAgICAgICBjYWxjKDEwMHZ3KSksIDIwMHB4KTtcXG4gICAgLS1kYXJrOiAjMTIxMjEzO1xcbiAgICAtLWxpZ2h0OiAjZDdkYWRjO1xcbiAgICAtLWRhcmstZ3JleTogIzNhM2EzYztcXG4gICAgLS1tZWQtZ3JleTogIzU2NTc1ODtcXG4gICAgLS1saWdodC1ncmV5OiAjODE4Mzg0O1xcbiAgICAtLXllbGxvdzogI2I1OWYzYjtcXG4gICAgLS1ncmVlbjogIzUzOGQ0ZTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDk4dncpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lQm9hcmQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IHZhcigtLWdhbWVib2FyZC1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lQm9hcmRSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxufVxcblxcbi5zaGFrZVJvdyB7XFxuICAgIGFuaW1hdGlvbjogU2hha2UgLjdzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIFNoYWtlIHtcXG4gICAgMTAlLCA5MCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXB4KTtcXG4gICAgfVxcblxcbiAgICAyMCUsIDgwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7XFxuICAgIH1cXG5cXG4gICAgMzAlLCA1MCUsIDcwJSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpO1xcbiAgICB9XFxuXFxuICAgIDQwJSwgNjAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcXG4gICAgfVxcbiAgfVxcblxcbi5zcXVhcmVDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi5zcXVhcmVDb250YWluZXI6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy10b3A6IDEwMCU7XFxufVxcblxcbi5zcXVhcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogICAgICAwO1xcbiAgICBsZWZ0OiAgICAgMDtcXG4gICAgYm90dG9tOiAgIDA7XFxuICAgIHJpZ2h0OiAgICAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ucHJlc2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFic2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnVuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWVkLWdyZXkpO1xcbn1cXG5cXG4ja2V5Ym9hcmQge1xcbiAgICB3aWR0aDogbWluKDUwMHB4LCAxMDB2dyk7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMCA4cHggMTBweDtcXG59XFxuXFxuLmtleWJvYXJkUm93IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNThweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5rZXkge1xcbiAgICBtYXJnaW46IDAgNnB4IDAgMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmtleTpsYXN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5iaWdLZXkge1xcbiAgICBmbGV4OiAxLjU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnNwYWNlciB7XFxuICAgIGZsZXg6IDAuNTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lQm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICAgIGxldCByb3cgPSAwO1xuICAgIGxldCBjb2wgPSAwO1xuXG4gICAgY29uc3QgZ2FtZUFycmF5ID0gbmV3IEFycmF5KDYpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdhbWVBcnJheVtpXSA9IG5ldyBBcnJheSg1KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldEFsbCA9ICgpID0+IHtcbiAgICAgICAgcm93ID0gMDtcbiAgICAgICAgY29sID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ2FtZUFycmF5W2ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUFycmF5W2ldW3hdID0geyBjaGFyOiBcIlwiLCBzdGF0ZTogXCJcIn07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGF5Q2hhciA9IChjaGFyKSA9PiB7XG4gICAgICAgIGlmIChjb2wgPCA1KSB7XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2xdLmNoYXIgPSBjaGFyO1xuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sXS5zdGF0ZSA9IFwidW5jaGVja2VkXCI7XG4gICAgICAgICAgICBnYW1lQm9hcmQudXBkYXRlU3F1YXJlKHJvdywgY29sLCBnYW1lQXJyYXlbcm93XVtjb2xdKTtcbiAgICAgICAgICAgIGNvbCsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICAgICAgY29sLS1cbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbF0uY2hhciA9IFwiXCI7XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2xdLnN0YXRlID0gXCJcIjtcbiAgICAgICAgICAgIGdhbWVCb2FyZC51cGRhdGVTcXVhcmUocm93LCBjb2wsIGdhbWVBcnJheVtyb3ddW2NvbF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50ZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChjb2wgPT0gNSkge1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnYW1lQm9hcmQuc2hha2VSb3cocm93KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2dhbWUuY2hlY2tXb3JkKClcblxuICAgIHJldHVybiB7IHJlc2V0QWxsLCBwbGF5Q2hhciwgZGVsLCBlbnRlciB9XG59KSgpOyIsImV4cG9ydCBjb25zdCBnYW1lQm9hcmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1ha2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVCb2FyZERpdi5pZCA9IFwiZ2FtZUJvYXJkXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRSb3dcIik7XG4gICAgICAgICAgICByb3cuaWQgPSBgcm93JHtpfWA7XG4gICAgICAgICAgICBnYW1lQm9hcmREaXYuYXBwZW5kKHJvdyk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChzcXVhcmVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZUNvbnRhaW5lci5hcHBlbmQobWFrZVNxdWFyZShpLCB4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZERpdjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbWFrZVNxdWFyZSA9IChpLCB4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5pZCA9IGAke2l9LCR7eH1gXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVNxdWFyZSA9IChpLCB4LCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSwke3h9YCk7XG4gICAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSBgc3F1YXJlICR7aW5wdXQuc3RhdGV9YDtcbiAgICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gaW5wdXQuY2hhcjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFrZVJvdyA9IChpKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3cke2l9YCkuYW5pbWF0ZShbXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMXB4KVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgycHgpXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC00cHgpXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDRweClcIiB9LFxuICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTRweClcIiB9LFxuICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNHB4KVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNHB4KVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgycHgpXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xcHgpXCIgfSxcbiAgICAgICAgICAgIF0sIDUwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZSwgdXBkYXRlU3F1YXJlLCBzaGFrZVJvdyB9XG59KSgpO1xuIiwiY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV1JFWUpMXCI7XG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgbWFrZUhlYWRlciB9IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGNvbnN0IGtleWJvYXJkID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNoYXJzID0gW1snUScsICdXJywgJ0UnLCAnUicsICdUJywgJ1knLCAnVScsICdJJywgJ08nLCAnUCddLFxuICAgICAgICBbJ3NwYWNlcicsICdBJywgJ1MnLCAnRCcsICdGJywgJ0cnLCAnSCcsICdKJywgJ0snLCAnTCcsICdzcGFjZXInXSxcbiAgICAgICAgWydFTlRFUicsICdaJywgJ1gnLCAnQycsICdWJywgJ0InLCAnTicsICdNJywgJ0RFTCddXTtcblxuICAgIGNvbnN0IG1ha2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleUJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAga2V5Qm9hcmREaXYuaWQgPSBcImtleWJvYXJkXCI7XG4gICAgICAgIGZvciAobGV0IGkgaW4gY2hhcnMpIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJrZXlib2FyZFJvd1wiKTtcbiAgICAgICAgICAgIGtleUJvYXJkRGl2LmFwcGVuZChyb3cpO1xuICAgICAgICAgICAgZm9yIChsZXQgeCBpbiBjaGFyc1tpXSkge1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQobWFrZUtleShjaGFyc1tpXVt4XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlCb2FyZERpdjtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlS2V5ID0gKGNoYXIpID0+IHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgaWYgKGNoYXIgPT0gJ3NwYWNlcicpIHtcbiAgICAgICAgICAgIGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZChjaGFyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGFyID09ICdFTlRFUicpIHtcbiAgICAgICAgICAgIGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBrZXkuaWQgPSBjaGFyO1xuICAgICAgICAgICAga2V5LnRleHRDb250ZW50ID0gY2hhcjtcbiAgICAgICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5lbnRlcilcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKFwia2V5XCIsIFwiYmlnS2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJ0RFTCcpIHtcbiAgICAgICAgICAgIGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBrZXkuaWQgPSBjaGFyO1xuICAgICAgICAgICAga2V5LnRleHRDb250ZW50ID0gY2hhcjtcbiAgICAgICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5kZWwpXG5cbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKFwia2V5XCIsIFwiYmlnS2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGtleS5pZCA9IGNoYXI7XG4gICAgICAgICAgICBrZXkudGV4dENvbnRlbnQgPSBjaGFyO1xuICAgICAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gZ2FtZS5wbGF5Q2hhcihlLnRhcmdldC5pZCkpXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZChcImtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgcmV0dXJuIHsgbWFrZSB9XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBtYWtlSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBrZXlib2FyZCB9IGZyb20gXCIuL2tleWJvYXJkXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5jb25zdCBwYWdlID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWtlID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChcbiAgICAgICAgICAgIG1ha2VIZWFkZXIoKSwgZ2FtZUJvYXJkLm1ha2UoKSwga2V5Ym9hcmQubWFrZSgpKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkLm5leHRTaWJsaW5nLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIG1ha2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyByZXNldCB9XG59KSgpO1xuXG5wYWdlLnJlc2V0KCk7XG5nYW1lLnJlc2V0QWxsKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=