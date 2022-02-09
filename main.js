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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;\n    --gameboard-height: max(min(calc(98vh - 264px), 420px), 240px);\n    --gameboard-width: max(min(calc(var(--gameboard-height) / 6 * 5),\n         calc(100vw)), 200px);\n    --dark: #121213;\n    --light: #d7dadc;\n    --dark-grey: #3a3a3c;\n    --med-grey: #565758;\n    --light-grey: #818384;\n    --yellow: #b59f3b;\n    --green: #538d4e;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100vh;\n}\n\nbody {\n    background-color: var(--dark);\n    color: var(--light);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\nheader {\n    width: min(500px, 98vw);\n    height: 50px;\n    flex: none;\n    font-size: 36px;\n    font-weight: 700;\n    letter-spacing: .2rem;\n    border-bottom: 1px solid var(--dark-grey);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameBoard {\n    padding: 10px;\n    box-sizing: border-box;\n    height: var(--gameboard-height);\n    width: var(--gameboard-width);\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n}\n\n.gameBoardRow {\n    display: flex;\n    gap: 5px;\n    margin: auto 0;\n}\n\n.shakeRow {\n    animation: Shake .7s;\n}\n\n.squareContainer {\n    position: relative;\n    width: 20%;\n}\n\n.squareContainer::before {\n    content: \"\";\n    display: block;\n    padding-top: 100%;\n}\n\n.square {\n    position: absolute;\n    top:      0;\n    left:     0;\n    bottom:   0;\n    right:    0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid var(--dark-grey);\n    font-size: 32px;\n    font-weight: bold;\n    cursor: default;\n}\n\n#keyboard {\n    width: min(500px, 100vw);\n    height: 200px;\n    flex: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    box-sizing: border-box;\n    padding: 0 8px 10px;\n}\n\n.keyboardRow {\n    width: 100%;\n    height: 58px;\n    display: flex;\n    justify-content: center;\n}\n\n.key {\n    margin: 0 6px 0 0;\n    padding: 0;\n    flex: 1;\n    border: none;\n    border-radius: 4px;\n    background-color: var(--light-grey);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    color: var(--light);\n    font-weight: bold;\n}\n\n.key:last-of-type {\n    margin: 0;\n}\n\n.bigKey {\n    flex: 1.5;\n    font-size: 12px;\n}\n\n.spacer {\n    flex: 0.5;\n}\n\n.present {\n    background-color: var(--yellow);\n    border-color: var(--yellow);\n    animation: Flip 1s;\n}\n\n.correct {\n    background-color: var(--green);\n    border-color: var(--green);\n    animation: Flip 1s;\n}\n\n.absent {\n    background-color: var(--dark-grey);\n    border-color: var(--dark-grey);\n    animation: Flip 1s;\n}\n\n.unchecked {\n    border-color: var(--med-grey);\n}\n\n@keyframes Flip {\n    from {\n        transform: rotateX(180deg);\n        color: var(--dark);\n        background-color: var(--dark);\n        border-color: var(--dark-grey);\n    }\n    50% {\n        transform: rotateX(270deg);\n        color: var(--dark);\n        background-color: var(--dark);\n        border-color: var(--dark-grey);\n    }\n    to {\n        transform: rotateX(360deg);\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8DAA8D;IAC9D,8DAA8D;IAC9D;6BACyB;IACzB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,yCAAyC;IACzC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,6BAA6B;IAC7B,aAAa;IACb,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,cAAc;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,WAAW;IACX,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;IAClC,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,OAAO;IACP,YAAY;IACZ,kBAAkB;IAClB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,+BAA+B;IAC/B,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;IAClC,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI;QACI,0BAA0B;QAC1B,kBAAkB;QAClB,6BAA6B;QAC7B,8BAA8B;IAClC;IACA;QACI,0BAA0B;QAC1B,kBAAkB;QAClB,6BAA6B;QAC7B,8BAA8B;IAClC;IACA;QACI,0BAA0B;IAC9B;AACJ","sourcesContent":[":root {\n    font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;\n    --gameboard-height: max(min(calc(98vh - 264px), 420px), 240px);\n    --gameboard-width: max(min(calc(var(--gameboard-height) / 6 * 5),\n         calc(100vw)), 200px);\n    --dark: #121213;\n    --light: #d7dadc;\n    --dark-grey: #3a3a3c;\n    --med-grey: #565758;\n    --light-grey: #818384;\n    --yellow: #b59f3b;\n    --green: #538d4e;\n}\n\nhtml, body {\n    margin: 0;\n    height: 100vh;\n}\n\nbody {\n    background-color: var(--dark);\n    color: var(--light);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\nheader {\n    width: min(500px, 98vw);\n    height: 50px;\n    flex: none;\n    font-size: 36px;\n    font-weight: 700;\n    letter-spacing: .2rem;\n    border-bottom: 1px solid var(--dark-grey);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#gameBoard {\n    padding: 10px;\n    box-sizing: border-box;\n    height: var(--gameboard-height);\n    width: var(--gameboard-width);\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n}\n\n.gameBoardRow {\n    display: flex;\n    gap: 5px;\n    margin: auto 0;\n}\n\n.shakeRow {\n    animation: Shake .7s;\n}\n\n.squareContainer {\n    position: relative;\n    width: 20%;\n}\n\n.squareContainer::before {\n    content: \"\";\n    display: block;\n    padding-top: 100%;\n}\n\n.square {\n    position: absolute;\n    top:      0;\n    left:     0;\n    bottom:   0;\n    right:    0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid var(--dark-grey);\n    font-size: 32px;\n    font-weight: bold;\n    cursor: default;\n}\n\n#keyboard {\n    width: min(500px, 100vw);\n    height: 200px;\n    flex: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    box-sizing: border-box;\n    padding: 0 8px 10px;\n}\n\n.keyboardRow {\n    width: 100%;\n    height: 58px;\n    display: flex;\n    justify-content: center;\n}\n\n.key {\n    margin: 0 6px 0 0;\n    padding: 0;\n    flex: 1;\n    border: none;\n    border-radius: 4px;\n    background-color: var(--light-grey);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    color: var(--light);\n    font-weight: bold;\n}\n\n.key:last-of-type {\n    margin: 0;\n}\n\n.bigKey {\n    flex: 1.5;\n    font-size: 12px;\n}\n\n.spacer {\n    flex: 0.5;\n}\n\n.present {\n    background-color: var(--yellow);\n    border-color: var(--yellow);\n    animation: Flip 1s;\n}\n\n.correct {\n    background-color: var(--green);\n    border-color: var(--green);\n    animation: Flip 1s;\n}\n\n.absent {\n    background-color: var(--dark-grey);\n    border-color: var(--dark-grey);\n    animation: Flip 1s;\n}\n\n.unchecked {\n    border-color: var(--med-grey);\n}\n\n@keyframes Flip {\n    from {\n        transform: rotateX(180deg);\n        color: var(--dark);\n        background-color: var(--dark);\n        border-color: var(--dark-grey);\n    }\n    50% {\n        transform: rotateX(270deg);\n        color: var(--dark);\n        background-color: var(--dark);\n        border-color: var(--dark-grey);\n    }\n    to {\n        transform: rotateX(360deg);\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");



const game = (() => {
    let word = "QWACK";
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
            checkWord();
        }
        else {
            _gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard.shakeRow(row);
        }
    }
    
    const checkWord = () => {
        let guess = "";
        for (let i in gameArray[row]) {
            guess += gameArray[row][i].char;
        }
        let i = 0;
        function loop() {
            checkChar(i);
            setTimeout(function() {
                i++;
                if (i < 5) {
                    loop();
                }
                else if (i == 5 && row < 5) {
                    col = 0
                    row++;
                }
            }, 100)
        }
        loop();
    }

    const checkChar = (i) => {
        if (gameArray[row][i].char == word[i]) {
            gameArray[row][i].state = "correct";
            _keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.updateKey(gameArray[row][i])
            _gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard.updateSquare(row, i, gameArray[row][i]);
        }
        else if (word.includes(gameArray[row][i].char)) {
            gameArray[row][i].state = "present";
            _keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.updateKey(gameArray[row][i])
            _gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard.updateSquare(row, i, gameArray[row][i]);
        }
        else {
            gameArray[row][i].state = "absent";
            _keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.updateKey(gameArray[row][i])
            _gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameBoard.updateSquare(row, i, gameArray[row][i]);

        }
    }

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
    
    const updateKey = (input) => {
        const key = document.getElementById(input.char);
        key.className = `key ${input.state}`;
    }

    return { make, updateKey }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDYixDQUFDOztBQUVEO0FBQ0EsZ0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cmV5ai8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd3JleWovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dyZXlqLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd3JleWovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dyZXlqLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dyZXlqLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dyZXlqLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93cmV5ai8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3dyZXlqLy4vc3JjL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly93cmV5ai8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd3JleWovLi9zcmMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vd3JleWovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd3JleWovd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd3JleWovd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dyZXlqL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd3JleWovd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93cmV5ai8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogJ0NsZWFyIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgLS1nYW1lYm9hcmQtaGVpZ2h0OiBtYXgobWluKGNhbGMoOTh2aCAtIDI2NHB4KSwgNDIwcHgpLCAyNDBweCk7XFxuICAgIC0tZ2FtZWJvYXJkLXdpZHRoOiBtYXgobWluKGNhbGModmFyKC0tZ2FtZWJvYXJkLWhlaWdodCkgLyA2ICogNSksXFxuICAgICAgICAgY2FsYygxMDB2dykpLCAyMDBweCk7XFxuICAgIC0tZGFyazogIzEyMTIxMztcXG4gICAgLS1saWdodDogI2Q3ZGFkYztcXG4gICAgLS1kYXJrLWdyZXk6ICMzYTNhM2M7XFxuICAgIC0tbWVkLWdyZXk6ICM1NjU3NTg7XFxuICAgIC0tbGlnaHQtZ3JleTogIzgxODM4NDtcXG4gICAgLS15ZWxsb3c6ICNiNTlmM2I7XFxuICAgIC0tZ3JlZW46ICM1MzhkNGU7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogbWluKDUwMHB4LCA5OHZ3KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmbGV4OiBub25lO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2FtZUJvYXJkIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgaGVpZ2h0OiB2YXIoLS1nYW1lYm9hcmQtaGVpZ2h0KTtcXG4gICAgd2lkdGg6IHZhcigtLWdhbWVib2FyZC13aWR0aCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ2FtZUJvYXJkUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbn1cXG5cXG4uc2hha2VSb3cge1xcbiAgICBhbmltYXRpb246IFNoYWtlIC43cztcXG59XFxuXFxuLnNxdWFyZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnNxdWFyZUNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLXRvcDogMTAwJTtcXG59XFxuXFxuLnNxdWFyZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAgICAgIDA7XFxuICAgIGxlZnQ6ICAgICAwO1xcbiAgICBib3R0b206ICAgMDtcXG4gICAgcmlnaHQ6ICAgIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNrZXlib2FyZCB7XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDEwMHZ3KTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgZmxleDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwIDhweCAxMHB4O1xcbn1cXG5cXG4ua2V5Ym9hcmRSb3cge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1OHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmtleSB7XFxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ua2V5Omxhc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmJpZ0tleSB7XFxuICAgIGZsZXg6IDEuNTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4uc3BhY2VyIHtcXG4gICAgZmxleDogMC41O1xcbn1cXG5cXG4ucHJlc2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgYW5pbWF0aW9uOiBGbGlwIDFzO1xcbn1cXG5cXG4uY29ycmVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGFuaW1hdGlvbjogRmxpcCAxcztcXG59XFxuXFxuLmFic2VudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYW5pbWF0aW9uOiBGbGlwIDFzO1xcbn1cXG5cXG4udW5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tZWQtZ3JleSk7XFxufVxcblxcbkBrZXlmcmFtZXMgRmxpcCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDI3MGRlZyk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKTtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOERBQThEO0lBQzlELDhEQUE4RDtJQUM5RDs2QkFDeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsT0FBTztJQUNQLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQiw2QkFBNkI7UUFDN0IsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2xlYXIgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtLWdhbWVib2FyZC1oZWlnaHQ6IG1heChtaW4oY2FsYyg5OHZoIC0gMjY0cHgpLCA0MjBweCksIDI0MHB4KTtcXG4gICAgLS1nYW1lYm9hcmQtd2lkdGg6IG1heChtaW4oY2FsYyh2YXIoLS1nYW1lYm9hcmQtaGVpZ2h0KSAvIDYgKiA1KSxcXG4gICAgICAgICBjYWxjKDEwMHZ3KSksIDIwMHB4KTtcXG4gICAgLS1kYXJrOiAjMTIxMjEzO1xcbiAgICAtLWxpZ2h0OiAjZDdkYWRjO1xcbiAgICAtLWRhcmstZ3JleTogIzNhM2EzYztcXG4gICAgLS1tZWQtZ3JleTogIzU2NTc1ODtcXG4gICAgLS1saWdodC1ncmV5OiAjODE4Mzg0O1xcbiAgICAtLXllbGxvdzogI2I1OWYzYjtcXG4gICAgLS1ncmVlbjogIzUzOGQ0ZTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDk4dncpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZsZXg6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4ycmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lQm9hcmQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBoZWlnaHQ6IHZhcigtLWdhbWVib2FyZC1oZWlnaHQpO1xcbiAgICB3aWR0aDogdmFyKC0tZ2FtZWJvYXJkLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5nYW1lQm9hcmRSb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxufVxcblxcbi5zaGFrZVJvdyB7XFxuICAgIGFuaW1hdGlvbjogU2hha2UgLjdzO1xcbn1cXG5cXG4uc3F1YXJlQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4uc3F1YXJlQ29udGFpbmVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6ICAgICAgMDtcXG4gICAgbGVmdDogICAgIDA7XFxuICAgIGJvdHRvbTogICAwO1xcbiAgICByaWdodDogICAgMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI2tleWJvYXJkIHtcXG4gICAgd2lkdGg6IG1pbig1MDBweCwgMTAwdncpO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBmbGV4OiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDEwcHg7XFxufVxcblxcbi5rZXlib2FyZFJvdyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDU4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ua2V5IHtcXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5rZXk6bGFzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYmlnS2V5IHtcXG4gICAgZmxleDogMS41O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5zcGFjZXIge1xcbiAgICBmbGV4OiAwLjU7XFxufVxcblxcbi5wcmVzZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBhbmltYXRpb246IEZsaXAgMXM7XFxufVxcblxcbi5jb3JyZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgYW5pbWF0aW9uOiBGbGlwIDFzO1xcbn1cXG5cXG4uYWJzZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBhbmltYXRpb246IEZsaXAgMXM7XFxufVxcblxcbi51bmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1lZC1ncmV5KTtcXG59XFxuXFxuQGtleWZyYW1lcyBGbGlwIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICB9XFxuICAgIDUwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMjcwZGVnKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyBrZXlib2FyZCB9IGZyb20gXCIuL2tleWJvYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gKCgpID0+IHtcbiAgICBsZXQgd29yZCA9IFwiVEVSS0lcIjtcbiAgICBsZXQgcm93ID0gMDtcbiAgICBsZXQgY29sID0gMDtcblxuICAgIGNvbnN0IGdhbWVBcnJheSA9IG5ldyBBcnJheSg2KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBnYW1lQXJyYXlbaV0gPSBuZXcgQXJyYXkoNSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRBbGwgPSAoKSA9PiB7XG4gICAgICAgIHJvdyA9IDA7XG4gICAgICAgIGNvbCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdhbWVBcnJheVtpXS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGdhbWVBcnJheVtpXVt4XSA9IHsgY2hhcjogXCJcIiwgc3RhdGU6IFwiXCJ9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxheUNoYXIgPSAoY2hhcikgPT4ge1xuICAgICAgICBpZiAoY29sIDwgNSkge1xuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sXS5jaGFyID0gY2hhcjtcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbF0uc3RhdGUgPSBcInVuY2hlY2tlZFwiO1xuICAgICAgICAgICAgZ2FtZUJvYXJkLnVwZGF0ZVNxdWFyZShyb3csIGNvbCwgZ2FtZUFycmF5W3Jvd11bY29sXSk7XG4gICAgICAgICAgICBjb2wrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNvbCA+IDApIHtcbiAgICAgICAgICAgIGNvbC0tXG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2xdLmNoYXIgPSBcIlwiO1xuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sXS5zdGF0ZSA9IFwiXCI7XG4gICAgICAgICAgICBnYW1lQm9hcmQudXBkYXRlU3F1YXJlKHJvdywgY29sLCBnYW1lQXJyYXlbcm93XVtjb2xdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoY29sID09IDUpIHtcbiAgICAgICAgICAgIGNoZWNrV29yZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2FtZUJvYXJkLnNoYWtlUm93KHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2hlY2tXb3JkID0gKCkgPT4ge1xuICAgICAgICBsZXQgZ3Vlc3MgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpIGluIGdhbWVBcnJheVtyb3ddKSB7XG4gICAgICAgICAgICBndWVzcyArPSBnYW1lQXJyYXlbcm93XVtpXS5jaGFyO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgICAgIGNoZWNrQ2hhcihpKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICBsb29wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGkgPT0gNSAmJiByb3cgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IDBcbiAgICAgICAgICAgICAgICAgICAgcm93Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICB9XG4gICAgICAgIGxvb3AoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0NoYXIgPSAoaSkgPT4ge1xuICAgICAgICBpZiAoZ2FtZUFycmF5W3Jvd11baV0uY2hhciA9PSB3b3JkW2ldKSB7XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtpXS5zdGF0ZSA9IFwiY29ycmVjdFwiO1xuICAgICAgICAgICAga2V5Ym9hcmQudXBkYXRlS2V5KGdhbWVBcnJheVtyb3ddW2ldKVxuICAgICAgICAgICAgZ2FtZUJvYXJkLnVwZGF0ZVNxdWFyZShyb3csIGksIGdhbWVBcnJheVtyb3ddW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3b3JkLmluY2x1ZGVzKGdhbWVBcnJheVtyb3ddW2ldLmNoYXIpKSB7XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtpXS5zdGF0ZSA9IFwicHJlc2VudFwiO1xuICAgICAgICAgICAga2V5Ym9hcmQudXBkYXRlS2V5KGdhbWVBcnJheVtyb3ddW2ldKVxuICAgICAgICAgICAgZ2FtZUJvYXJkLnVwZGF0ZVNxdWFyZShyb3csIGksIGdhbWVBcnJheVtyb3ddW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2ldLnN0YXRlID0gXCJhYnNlbnRcIjtcbiAgICAgICAgICAgIGtleWJvYXJkLnVwZGF0ZUtleShnYW1lQXJyYXlbcm93XVtpXSlcbiAgICAgICAgICAgIGdhbWVCb2FyZC51cGRhdGVTcXVhcmUocm93LCBpLCBnYW1lQXJyYXlbcm93XVtpXSk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHJlc2V0QWxsLCBwbGF5Q2hhciwgZGVsLCBlbnRlciB9XG59KSgpOyIsImV4cG9ydCBjb25zdCBnYW1lQm9hcmQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1ha2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVCb2FyZERpdi5pZCA9IFwiZ2FtZUJvYXJkXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJnYW1lQm9hcmRSb3dcIik7XG4gICAgICAgICAgICByb3cuaWQgPSBgcm93JHtpfWA7XG4gICAgICAgICAgICBnYW1lQm9hcmREaXYuYXBwZW5kKHJvdyk7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDU7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChzcXVhcmVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZUNvbnRhaW5lci5hcHBlbmQobWFrZVNxdWFyZShpLCB4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVCb2FyZERpdjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbWFrZVNxdWFyZSA9IChpLCB4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5pZCA9IGAke2l9LCR7eH1gXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICByZXR1cm4gc3F1YXJlO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZVNxdWFyZSA9IChpLCB4LCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSwke3h9YCk7XG4gICAgICAgIHNxdWFyZS5jbGFzc05hbWUgPSBgc3F1YXJlICR7aW5wdXQuc3RhdGV9YDtcbiAgICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gaW5wdXQuY2hhcjtcbiAgICB9XG5cbiAgICBjb25zdCBzaGFrZVJvdyA9IChpKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByb3cke2l9YCkuYW5pbWF0ZShbXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMXB4KVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgycHgpXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC00cHgpXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDRweClcIiB9LFxuICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTRweClcIiB9LFxuICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoNHB4KVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNHB4KVwiIH0sXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgycHgpXCIgfSxcbiAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKC0xcHgpXCIgfSxcbiAgICAgICAgICAgIF0sIDUwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZSwgdXBkYXRlU3F1YXJlLCBzaGFrZVJvdyB9XG59KSgpO1xuIiwiY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV1JFWUpMXCI7XG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgbWFrZUhlYWRlciB9IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGNvbnN0IGtleWJvYXJkID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNoYXJzID0gW1snUScsICdXJywgJ0UnLCAnUicsICdUJywgJ1knLCAnVScsICdJJywgJ08nLCAnUCddLFxuICAgICAgICBbJ3NwYWNlcicsICdBJywgJ1MnLCAnRCcsICdGJywgJ0cnLCAnSCcsICdKJywgJ0snLCAnTCcsICdzcGFjZXInXSxcbiAgICAgICAgWydFTlRFUicsICdaJywgJ1gnLCAnQycsICdWJywgJ0InLCAnTicsICdNJywgJ0RFTCddXTtcblxuICAgIGNvbnN0IG1ha2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleUJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAga2V5Qm9hcmREaXYuaWQgPSBcImtleWJvYXJkXCI7XG4gICAgICAgIGZvciAobGV0IGkgaW4gY2hhcnMpIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJrZXlib2FyZFJvd1wiKTtcbiAgICAgICAgICAgIGtleUJvYXJkRGl2LmFwcGVuZChyb3cpO1xuICAgICAgICAgICAgZm9yIChsZXQgeCBpbiBjaGFyc1tpXSkge1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQobWFrZUtleShjaGFyc1tpXVt4XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlCb2FyZERpdjtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlS2V5ID0gKGNoYXIpID0+IHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgaWYgKGNoYXIgPT0gJ3NwYWNlcicpIHtcbiAgICAgICAgICAgIGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZChjaGFyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGFyID09ICdFTlRFUicpIHtcbiAgICAgICAgICAgIGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBrZXkuaWQgPSBjaGFyO1xuICAgICAgICAgICAga2V5LnRleHRDb250ZW50ID0gY2hhcjtcbiAgICAgICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5lbnRlcilcbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKFwia2V5XCIsIFwiYmlnS2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJ0RFTCcpIHtcbiAgICAgICAgICAgIGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBrZXkuaWQgPSBjaGFyO1xuICAgICAgICAgICAga2V5LnRleHRDb250ZW50ID0gY2hhcjtcbiAgICAgICAgICAgIGtleS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZS5kZWwpXG5cbiAgICAgICAgICAgIGtleS5jbGFzc0xpc3QuYWRkKFwia2V5XCIsIFwiYmlnS2V5XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGtleS5pZCA9IGNoYXI7XG4gICAgICAgICAgICBrZXkudGV4dENvbnRlbnQgPSBjaGFyO1xuICAgICAgICAgICAga2V5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gZ2FtZS5wbGF5Q2hhcihlLnRhcmdldC5pZCkpXG4gICAgICAgICAgICBrZXkuY2xhc3NMaXN0LmFkZChcImtleVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXBkYXRlS2V5ID0gKGlucHV0KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0LmNoYXIpO1xuICAgICAgICBrZXkuY2xhc3NOYW1lID0gYGtleSAke2lucHV0LnN0YXRlfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbWFrZSwgdXBkYXRlS2V5IH1cbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IHsgbWFrZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsga2V5Ym9hcmQgfSBmcm9tIFwiLi9rZXlib2FyZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuY29uc3QgcGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFrZSA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoXG4gICAgICAgICAgICBtYWtlSGVhZGVyKCksIGdhbWVCb2FyZC5tYWtlKCksIGtleWJvYXJkLm1ha2UoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlIChkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZC5uZXh0U2libGluZy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBtYWtlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcmVzZXQgfVxufSkoKTtcblxucGFnZS5yZXNldCgpO1xuZ2FtZS5yZXNldEFsbCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
