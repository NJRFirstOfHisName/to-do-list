/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/addListItem.js":
/*!****************************!*\
  !*** ./src/addListItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListItem)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ListItem = /*#__PURE__*/function () {
  function ListItem(title) {
    var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : " ";
    var dueDate = arguments.length > 2 ? arguments[2] : undefined;
    var priority = arguments.length > 3 ? arguments[3] : undefined;
    var project = arguments.length > 4 ? arguments[4] : undefined;
    _classCallCheck(this, ListItem);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false;
    this.taskID = "id" + Math.random().toString(16).slice(2);
  }
  _createClass(ListItem, [{
    key: "getTitle",
    get: function get() {
      return this._title;
    }
  }, {
    key: "getDescription",
    get: function get() {
      return this._description;
    }
  }, {
    key: "getDueDate",
    get: function get() {
      return this._dueDate;
    }
  }, {
    key: "getPriority",
    get: function get() {
      return this._priority;
    }
  }, {
    key: "getCompleted",
    get: function get() {
      return this._completed;
    }
  }, {
    key: "getProject",
    get: function get() {
      return this._project;
    }
  }, {
    key: "getTaskID",
    get: function get() {
      return this.taskID;
    }
  }, {
    key: "title",
    set: function set(title) {
      this._title = title;
    }
  }, {
    key: "description",
    set: function set(description) {
      this._description = description;
    }
  }, {
    key: "dueDate",
    set: function set(dueDate) {
      this._dueDate = dueDate;
    }
  }, {
    key: "priority",
    set: function set(priority) {
      this._priority = priority;
    }
  }, {
    key: "completed",
    set: function set(completed) {
      this._completed = completed;
    }
  }, {
    key: "project",
    set: function set(project) {
      this._project = project;
    }

    // timeLeft() {
    //     if(dueDate) {
    //         now = new Date();
    //         return (now.getTime() - this.dueDate.getTime())/36000;
    //     }
    // }
  }]);
  return ListItem;
}(); // export default { ListItem }


/***/ }),

/***/ "./src/printListItem.js":
/*!******************************!*\
  !*** ./src/printListItem.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printListItem)
/* harmony export */ });
function printListItem(ListItem) {
  //Encloses all tasks in a div with a unique id and shared class
  var newEntry = document.createElement('div');
  newEntry.className = "entry";
  newEntry.id = ListItem.getTaskID;

  //Create checkbox for marking tasks as complete (or un-marking)
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "check";
  newEntry.appendChild(checkbox);

  //Create label with the task's title and highlights it if it's a priority
  var newLabel = document.createElement('label');
  newLabel.innerHTML = ListItem.getTitle;
  if (ListItem.getPriority) {
    newLabel.className = "priority";
  }
  newEntry.appendChild(newLabel);

  //Add description. If no description is supplied field will be blank
  var descriptionText = document.createElement('p');
  descriptionText.innerHTML = ListItem.getDescription;
  newEntry.appendChild(descriptionText);

  //Add due date. If no date is supplied field will be blank
  var dueDate = document.createElement('p');
  dueDate.innerHTML = ListItem.getDueDate;
  newEntry.appendChild(dueDate);

  //Add button to delete task
  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "delete";
  newEntry.appendChild(deleteBtn);

  //Adds task to appropriate div depending on whether it's marked complete
  if (!ListItem.getCompleted) {
    var tdList = document.getElementById('tdList');
    tdList.appendChild(newEntry);
  } else {
    newLabel.style.setProperty("text-decoration", "line-through");
    var completedList = document.getElementById('completedList');
    completedList.appendChild(newEntry);
  }
}

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, `#inputForm {
    display: grid;
    grid-template-columns: 1fr 1fr .2fr .8fr .5fr;
}

#title {
    grid-column: 1 / span 5;
}

#description {
    grid-column: 1 / span 5;
}

.entry {
    display: flex;
    margin: 5px;
}

.priority {
    color: red;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,6CAA6C;AACjD;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,UAAU;AACd","sourcesContent":["#inputForm {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr .2fr .8fr .5fr;\r\n}\r\n\r\n#title {\r\n    grid-column: 1 / span 5;\r\n}\r\n\r\n#description {\r\n    grid-column: 1 / span 5;\r\n}\r\n\r\n.entry {\r\n    display: flex;\r\n    margin: 5px;\r\n}\r\n\r\n.priority {\r\n    color: red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _printListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printListItem */ "./src/printListItem.js");
/* harmony import */ var _addListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addListItem */ "./src/addListItem.js");




// Dom elements used for and in event listeners
var container = document.getElementById('container');
var tdList = document.getElementById('tdList');
var completedList = document.getElementById('completedList');
var project = document.getElementById('projects');

//Hard-coded entries to simplify testing, will be deleted once project is finished
var defaultList = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Default Item", "This is a default item for defaulting", "07-02-2023", false, "defaultProject");
var defaultCompleted = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Default completed Item", "This is a completed default item for completed defaulting", "01-012-2001", true, "defaultProject");
var testList = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Test Item", "This is a test item for testing", "09-11-2050", false, "testProject");
var testCompleted = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Test completed Item", "This is a completed test item for completed testing", "11-11-1111", true, "testProject");
defaultCompleted.completed = true;
testCompleted.completed = true;
var fullList = [defaultList, testList, defaultCompleted, testCompleted];

//Prints contents of default project on page load
fullList.forEach(function (ListItem) {
  if (ListItem.getProject === project.value) {
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_1__["default"])(ListItem);
  }
});

//Prints contents of selected project when selection is changed
project.addEventListener('change', function () {
  tdList.innerHTML = "";
  completedList.innerHTML = "";
  fullList.forEach(function (ListItem) {
    if (ListItem.getProject === project.value) {
      (0,_printListItem__WEBPACK_IMPORTED_MODULE_1__["default"])(ListItem);
    }
  });
});

//Creates new project when 'New Project' button is pressed
var newProjectBtn = document.getElementById('newProject');
newProjectBtn.addEventListener('click', function () {
  //First prompts the user for the new project name and checks that it's not the same as an existing project
  var newProjectName = prompt("Enter the name of your new project:") + "Project";
  for (var i = 0; i < project.options.length; i++) {
    var existingProject = project.options[i].value.toLowerCase();
    if (newProjectName.toLowerCase() === existingProject) {
      alert("A project already exists with that name. Please select a unique project name.");
      newProjectName = "";
    }
  }
  if (newProjectName) {
    var newProject = document.createElement('option');
    newProject.value = newProjectName;
    newProject.text = newProjectName.slice(0, -7);
    project.add(newProject);
  }
});

//Creates a new, uncompleted task when 'Add' button is pressed IF title is present
var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
  var title = document.getElementById('title').value;
  if (title) {
    var description = document.getElementById('description').value;
    var date = document.getElementById('dueDate').value;
    var priority = document.getElementById('priority').checked;
    var newListItem = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, date, priority, project.value);
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_1__["default"])(newListItem);
    fullList.push(newListItem);
  }
});

//Listens for any clicks within the tasks container.
container.addEventListener('click', function (e) {
  var f = e.target.parentNode;
  //If delete button is clicked, deletes task.
  if (e.target.classList.contains('delete')) {
    fullList = fullList.filter(function (task) {
      return task.getTaskID != f.id;
    });
    f.remove();
  }
  //If checkbox is clicked, moves task from 'tasks' to 'completed' or vice-versa
  if (e.target.classList.contains('check')) {
    var labelChange = e.target.nextElementSibling;
    if (e.target.checked) {
      labelChange.style.setProperty("text-decoration", "line-through");
      completedList.appendChild(f);
    } else {
      labelChange.style.setProperty("text-decoration", "");
      tdList.appendChild(f);
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxVQUFDZSxDQUFDLEVBQUs7RUFDdkMsSUFBTUMsQ0FBQyxHQUFHRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsVUFBVTtFQUM3QjtFQUNBLElBQUdILENBQUMsQ0FBQ0UsTUFBTSxDQUFDRSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUN0Q3hCLFFBQVEsR0FBR0EsUUFBUSxDQUFDeUIsTUFBTSxDQUFDLFVBQUFDLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUNqRCxTQUFTLElBQUkyQyxDQUFDLENBQUNwRixFQUFFO0lBQUEsRUFBQztJQUMxRG9GLENBQUMsQ0FBQ08sTUFBTSxDQUFDLENBQUM7RUFDZDtFQUNBO0VBQ0EsSUFBR1IsQ0FBQyxDQUFDRSxNQUFNLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ3JDLElBQU1JLFdBQVcsR0FBR1QsQ0FBQyxDQUFDRSxNQUFNLENBQUNRLGtCQUFrQjtJQUMvQyxJQUFHVixDQUFDLENBQUNFLE1BQU0sQ0FBQ0osT0FBTyxFQUFFO01BQ2pCVyxXQUFXLENBQUNwQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUM7TUFDaEVDLGFBQWEsQ0FBQ2QsV0FBVyxDQUFDd0MsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsTUFBTTtNQUNIUSxXQUFXLENBQUNwQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUM7TUFDcERILE1BQU0sQ0FBQ1YsV0FBVyxDQUFDd0MsQ0FBQyxDQUFDO0lBQ3pCO0VBQ0o7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FkZExpc3RJdGVtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludExpc3RJdGVtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIiBcIiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRhc2tJRCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIGdldCBnZXREdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldFByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcclxuICAgIH1cclxuICAgIGdldCBnZXRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcclxuICAgIH1cclxuICAgIGdldCBnZXRQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldFRhc2tJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrSURcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBkdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuICAgIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIH1cclxuICAgIHNldCBwcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gdGltZUxlZnQoKSB7XHJcbiAgICAvLyAgICAgaWYoZHVlRGF0ZSkge1xyXG4gICAgLy8gICAgICAgICBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmR1ZURhdGUuZ2V0VGltZSgpKS8zNjAwMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHsgTGlzdEl0ZW0gfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TGlzdEl0ZW0oTGlzdEl0ZW0pIHtcclxuXHJcbiAgICAvL0VuY2xvc2VzIGFsbCB0YXNrcyBpbiBhIGRpdiB3aXRoIGEgdW5pcXVlIGlkIGFuZCBzaGFyZWQgY2xhc3NcclxuICAgIGNvbnN0IG5ld0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdFbnRyeS5jbGFzc05hbWUgPSBcImVudHJ5XCI7XHJcbiAgICBuZXdFbnRyeS5pZCA9IExpc3RJdGVtLmdldFRhc2tJRDtcclxuXHJcbiAgICAvL0NyZWF0ZSBjaGVja2JveCBmb3IgbWFya2luZyB0YXNrcyBhcyBjb21wbGV0ZSAob3IgdW4tbWFya2luZylcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjaGVja2JveC5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gICAgLy9DcmVhdGUgbGFiZWwgd2l0aCB0aGUgdGFzaydzIHRpdGxlIGFuZCBoaWdobGlnaHRzIGl0IGlmIGl0J3MgYSBwcmlvcml0eVxyXG4gICAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmV3TGFiZWwuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0VGl0bGU7XHJcbiAgICBpZihMaXN0SXRlbS5nZXRQcmlvcml0eSl7XHJcbiAgICAgICAgbmV3TGFiZWwuY2xhc3NOYW1lID0gXCJwcmlvcml0eVwiO1xyXG4gICAgfVxyXG4gICAgbmV3RW50cnkuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xyXG5cclxuICAgIC8vQWRkIGRlc2NyaXB0aW9uLiBJZiBubyBkZXNjcmlwdGlvbiBpcyBzdXBwbGllZCBmaWVsZCB3aWxsIGJlIGJsYW5rXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb247XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xyXG5cclxuICAgIC8vQWRkIGR1ZSBkYXRlLiBJZiBubyBkYXRlIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVEYXRlLmlubmVySFRNTCA9IExpc3RJdGVtLmdldER1ZURhdGU7XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuXHJcbiAgICAvL0FkZCBidXR0b24gdG8gZGVsZXRlIHRhc2tcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XHJcbiAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJkZWxldGVcIjtcclxuICAgIG5ld0VudHJ5LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcblxyXG4gICAgLy9BZGRzIHRhc2sgdG8gYXBwcm9wcmlhdGUgZGl2IGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0J3MgbWFya2VkIGNvbXBsZXRlXHJcbiAgICBpZighTGlzdEl0ZW0uZ2V0Q29tcGxldGVkKXtcclxuICAgICAgICBjb25zdCB0ZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGRMaXN0Jyk7XHJcbiAgICAgICAgdGRMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWRMaXN0Jyk7XHJcbiAgICAgICAgY29tcGxldGVkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XHJcbiAgICB9XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2lucHV0Rm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIC4yZnIgLjhmciAuNWZyO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDU7XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbiB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNTtcclxufVxyXG5cclxuLmVudHJ5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLnByaW9yaXR5IHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2lucHV0Rm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAuMmZyIC44ZnIgLjVmcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDU7XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiA1O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vYWRkTGlzdEl0ZW1cIjtcblxuLy8gRG9tIGVsZW1lbnRzIHVzZWQgZm9yIGFuZCBpbiBldmVudCBsaXN0ZW5lcnNcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbmNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZExpc3QnKTtcbmNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGVkTGlzdCcpO1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuXG4vL0hhcmQtY29kZWQgZW50cmllcyB0byBzaW1wbGlmeSB0ZXN0aW5nLCB3aWxsIGJlIGRlbGV0ZWQgb25jZSBwcm9qZWN0IGlzIGZpbmlzaGVkXG4gICAgY29uc3QgZGVmYXVsdExpc3QgPSBuZXcgTGlzdEl0ZW0oXCJEZWZhdWx0IEl0ZW1cIixcIlRoaXMgaXMgYSBkZWZhdWx0IGl0ZW0gZm9yIGRlZmF1bHRpbmdcIixcIjA3LTAyLTIwMjNcIixmYWxzZSwgXCJkZWZhdWx0UHJvamVjdFwiKTtcbiAgICBjb25zdCBkZWZhdWx0Q29tcGxldGVkID0gbmV3IExpc3RJdGVtKFwiRGVmYXVsdCBjb21wbGV0ZWQgSXRlbVwiLFwiVGhpcyBpcyBhIGNvbXBsZXRlZCBkZWZhdWx0IGl0ZW0gZm9yIGNvbXBsZXRlZCBkZWZhdWx0aW5nXCIsXCIwMS0wMTItMjAwMVwiLHRydWUsIFwiZGVmYXVsdFByb2plY3RcIik7XG4gICAgY29uc3QgdGVzdExpc3QgPSBuZXcgTGlzdEl0ZW0oXCJUZXN0IEl0ZW1cIixcIlRoaXMgaXMgYSB0ZXN0IGl0ZW0gZm9yIHRlc3RpbmdcIixcIjA5LTExLTIwNTBcIiwgZmFsc2UsIFwidGVzdFByb2plY3RcIik7XG4gICAgY29uc3QgdGVzdENvbXBsZXRlZCA9IG5ldyBMaXN0SXRlbShcIlRlc3QgY29tcGxldGVkIEl0ZW1cIixcIlRoaXMgaXMgYSBjb21wbGV0ZWQgdGVzdCBpdGVtIGZvciBjb21wbGV0ZWQgdGVzdGluZ1wiLFwiMTEtMTEtMTExMVwiLCB0cnVlLCBcInRlc3RQcm9qZWN0XCIpXG5cbiAgICBkZWZhdWx0Q29tcGxldGVkLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdGVzdENvbXBsZXRlZC5jb21wbGV0ZWQgPSB0cnVlO1xuXG4gICAgbGV0IGZ1bGxMaXN0ID0gW2RlZmF1bHRMaXN0LCB0ZXN0TGlzdCwgZGVmYXVsdENvbXBsZXRlZCwgdGVzdENvbXBsZXRlZF07XG5cbi8vUHJpbnRzIGNvbnRlbnRzIG9mIGRlZmF1bHQgcHJvamVjdCBvbiBwYWdlIGxvYWRcbmZ1bGxMaXN0LmZvckVhY2goTGlzdEl0ZW0gPT4ge1xuICAgIGlmKExpc3RJdGVtLmdldFByb2plY3QgPT09IHByb2plY3QudmFsdWUpe1xuICAgICAgICBwcmludExpc3RJdGVtKExpc3RJdGVtKTtcbiAgICB9XG59KVxuXG4vL1ByaW50cyBjb250ZW50cyBvZiBzZWxlY3RlZCBwcm9qZWN0IHdoZW4gc2VsZWN0aW9uIGlzIGNoYW5nZWRcbnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHRkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbXBsZXRlZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmdWxsTGlzdC5mb3JFYWNoKExpc3RJdGVtID0+IHtcbiAgICAgICAgaWYoTGlzdEl0ZW0uZ2V0UHJvamVjdCA9PT0gcHJvamVjdC52YWx1ZSl7XG4gICAgICAgICAgICBwcmludExpc3RJdGVtKExpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgIH0pXG59KVxuXG4vL0NyZWF0ZXMgbmV3IHByb2plY3Qgd2hlbiAnTmV3IFByb2plY3QnIGJ1dHRvbiBpcyBwcmVzc2VkXG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy9GaXJzdCBwcm9tcHRzIHRoZSB1c2VyIGZvciB0aGUgbmV3IHByb2plY3QgbmFtZSBhbmQgY2hlY2tzIHRoYXQgaXQncyBub3QgdGhlIHNhbWUgYXMgYW4gZXhpc3RpbmcgcHJvamVjdFxuICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IHByb21wdChcIkVudGVyIHRoZSBuYW1lIG9mIHlvdXIgbmV3IHByb2plY3Q6XCIpICsgXCJQcm9qZWN0XCI7XG4gICAgZm9yKGxldCBpPTAgOyBpPHByb2plY3Qub3B0aW9ucy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgbGV0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3Qub3B0aW9uc1tpXS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAobmV3UHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZXhpc3RpbmdQcm9qZWN0KSB7XG4gICAgICAgICAgICBhbGVydChcIkEgcHJvamVjdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoYXQgbmFtZS4gUGxlYXNlIHNlbGVjdCBhIHVuaXF1ZSBwcm9qZWN0IG5hbWUuXCIpO1xuICAgICAgICAgICAgbmV3UHJvamVjdE5hbWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmKG5ld1Byb2plY3ROYW1lKSB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG5ld1Byb2plY3QudmFsdWUgPSBuZXdQcm9qZWN0TmFtZTtcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0ID0gbmV3UHJvamVjdE5hbWUuc2xpY2UoMCwgLTcpO1xuICAgICAgICBwcm9qZWN0LmFkZChuZXdQcm9qZWN0KTtcbiAgICB9XG59KVxuXG4vL0NyZWF0ZXMgYSBuZXcsIHVuY29tcGxldGVkIHRhc2sgd2hlbiAnQWRkJyBidXR0b24gaXMgcHJlc3NlZCBJRiB0aXRsZSBpcyBwcmVzZW50XG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQnRuJyk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBpZih0aXRsZSkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS5jaGVja2VkO1xuICAgICAgICBjb25zdCBuZXdMaXN0SXRlbSA9IG5ldyBMaXN0SXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0LnZhbHVlKTtcbiAgICAgICAgcHJpbnRMaXN0SXRlbShuZXdMaXN0SXRlbSk7XG4gICAgICAgIGZ1bGxMaXN0LnB1c2gobmV3TGlzdEl0ZW0pO1xuICAgIH1cbn0pXG5cbi8vTGlzdGVucyBmb3IgYW55IGNsaWNrcyB3aXRoaW4gdGhlIHRhc2tzIGNvbnRhaW5lci5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgZiA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgLy9JZiBkZWxldGUgYnV0dG9uIGlzIGNsaWNrZWQsIGRlbGV0ZXMgdGFzay5cbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG4gICAgICAgIGZ1bGxMaXN0ID0gZnVsbExpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5nZXRUYXNrSUQgIT0gZi5pZCk7XG4gICAgICAgIGYucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vSWYgY2hlY2tib3ggaXMgY2xpY2tlZCwgbW92ZXMgdGFzayBmcm9tICd0YXNrcycgdG8gJ2NvbXBsZXRlZCcgb3IgdmljZS12ZXJzYVxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICBjb25zdCBsYWJlbENoYW5nZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgaWYoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgbGFiZWxDaGFuZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XG4gICAgICAgICAgICBjb21wbGV0ZWRMaXN0LmFwcGVuZENoaWxkKGYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFiZWxDaGFuZ2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJcIik7XG4gICAgICAgICAgICB0ZExpc3QuYXBwZW5kQ2hpbGQoZik7XG4gICAgICAgIH1cbiAgICB9XG59KSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJMaXN0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhcmd1bWVudHMiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiX2NsYXNzQ2FsbENoZWNrIiwiY29tcGxldGVkIiwidGFza0lEIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2V0IiwiX3RpdGxlIiwiX2Rlc2NyaXB0aW9uIiwiX2R1ZURhdGUiLCJfcHJpb3JpdHkiLCJfY29tcGxldGVkIiwiX3Byb2plY3QiLCJzZXQiLCJkZWZhdWx0IiwicHJpbnRMaXN0SXRlbSIsIm5ld0VudHJ5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZ2V0VGFza0lEIiwiY2hlY2tib3giLCJ0eXBlIiwiYXBwZW5kQ2hpbGQiLCJuZXdMYWJlbCIsImlubmVySFRNTCIsImdldFRpdGxlIiwiZ2V0UHJpb3JpdHkiLCJkZXNjcmlwdGlvblRleHQiLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJkZWxldGVCdG4iLCJnZXRDb21wbGV0ZWQiLCJ0ZExpc3QiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJjb21wbGV0ZWRMaXN0IiwiY29udGFpbmVyIiwiZGVmYXVsdExpc3QiLCJkZWZhdWx0Q29tcGxldGVkIiwidGVzdExpc3QiLCJ0ZXN0Q29tcGxldGVkIiwiZnVsbExpc3QiLCJmb3JFYWNoIiwiZ2V0UHJvamVjdCIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld1Byb2plY3RCdG4iLCJuZXdQcm9qZWN0TmFtZSIsInByb21wdCIsIm9wdGlvbnMiLCJleGlzdGluZ1Byb2plY3QiLCJ0b0xvd2VyQ2FzZSIsImFsZXJ0IiwibmV3UHJvamVjdCIsInRleHQiLCJhZGQiLCJhZGRCdG4iLCJkYXRlIiwiY2hlY2tlZCIsIm5ld0xpc3RJdGVtIiwiZSIsImYiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJmaWx0ZXIiLCJ0YXNrIiwicmVtb3ZlIiwibGFiZWxDaGFuZ2UiLCJuZXh0RWxlbWVudFNpYmxpbmciXSwic291cmNlUm9vdCI6IiJ9