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

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
function addProject(project) {
  //First prompts the user for the new project name and checks that it's not the same as an existing project
  var newProjectName = prompt("Enter the name of your new project:") + "Project";
  for (var i = 0; i < project.options.length; i++) {
    var existingProject = project.options[i].value.toLowerCase();
    if (newProjectName.toLowerCase() === existingProject) {
      alert("A project already exists with that name. Please select a unique project name.");
      newProjectName = "";
    }
  }

  //Creates new project with supplied name and adds it to the select box
  if (newProjectName) {
    var newProject = document.createElement('option');
    newProject.value = newProjectName;
    newProject.text = newProjectName.slice(0, -7);
    project.add(newProject);
  }
}

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
  checkbox.checked = ListItem.getCompleted;
  newEntry.appendChild(checkbox);

  //Create label with the task's title and highlights it if it's a priority
  var newLabel = document.createElement('label');
  newLabel.innerHTML = ListItem.getTitle;
  newLabel.className = "title";
  if (ListItem.getPriority) {
    newLabel.className += " priority";
  }
  newEntry.appendChild(newLabel);

  //Add description. If no description is supplied field will be blank
  var descriptionText = document.createElement('p');
  descriptionText.className = "description";
  descriptionText.innerHTML = ListItem.getDescription;
  newEntry.appendChild(descriptionText);

  //Add due date. If no date is supplied field will be blank
  var dueDate = document.createElement('p');
  dueDate.innerHTML = ListItem.getDueDate;
  dueDate.className = "dueDate";
  newEntry.appendChild(dueDate);

  //Add button to delete task
  var deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "delete";
  newEntry.appendChild(deleteBtn);

  //Adds task to appropriate div depending on whether it's marked complete
  if (!ListItem.getCompleted) {
    newLabel.style.setProperty("text-decoration", "");
    tdList.appendChild(newEntry);
  } else {
    newLabel.style.setProperty("text-decoration", "line-through");
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
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: rgb(247, 236, 221);
}

#inputForm {
    display: grid;
    grid-template-columns: 1fr 1fr .2fr .8fr .5fr;
}

#titleForm {
    grid-column: 1 / span 5;
}

#descriptionForm {
    grid-column: 1 / span 5;
}

#container div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px
}

#container div div{
    grid-template-columns: .25fr 1fr 1fr 1fr;
    grid-template-areas: 
        "check title title dueDate"
        "description description description description"
        ". . . delete";
    border-radius: 20px;
    margin: 5px;
    padding: 10px;
    gap: 0;
    background-color: rgb(224, 240, 242);
}

.entry {
    border: 1px solid black
}

.check {
    grid-area: check;
    width: 15px;
}

.title {
    grid-area: title;
    align-self: center;
    justify-self: start;
}

.dueDate {
    grid-area: dueDate;
}

.description {
    grid-area: description;
}

.delete {
    grid-area: delete;
    background-color: aqua;
    border-color: aquamarine;
    border-radius: 5px;
}

.priority {
    color: red;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,6CAA6C;AACjD;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC;AACJ;;AAEA;IACI,wCAAwC;IACxC;;;sBAGkB;IAClB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,MAAM;IACN,oCAAoC;AACxC;;AAEA;IACI;AACJ;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;IACxB,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd","sourcesContent":["body {\r\n    background-color: rgb(247, 236, 221);\r\n}\r\n\r\n#inputForm {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr .2fr .8fr .5fr;\r\n}\r\n\r\n#titleForm {\r\n    grid-column: 1 / span 5;\r\n}\r\n\r\n#descriptionForm {\r\n    grid-column: 1 / span 5;\r\n}\r\n\r\n#container div{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 20px\r\n}\r\n\r\n#container div div{\r\n    grid-template-columns: .25fr 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n        \"check title title dueDate\"\r\n        \"description description description description\"\r\n        \". . . delete\";\r\n    border-radius: 20px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    gap: 0;\r\n    background-color: rgb(224, 240, 242);\r\n}\r\n\r\n.entry {\r\n    border: 1px solid black\r\n}\r\n\r\n.check {\r\n    grid-area: check;\r\n    width: 15px;\r\n}\r\n\r\n.title {\r\n    grid-area: title;\r\n    align-self: center;\r\n    justify-self: start;\r\n}\r\n\r\n.dueDate {\r\n    grid-area: dueDate;\r\n}\r\n\r\n.description {\r\n    grid-area: description;\r\n}\r\n\r\n.delete {\r\n    grid-area: delete;\r\n    background-color: aqua;\r\n    border-color: aquamarine;\r\n    border-radius: 5px;\r\n}\r\n\r\n.priority {\r\n    color: red;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");





// Dom elements used for and in event listeners
var container = document.getElementById('container');
var tdList = document.getElementById('tdList');
var completedList = document.getElementById('completedList');
var project = document.getElementById('projects');

//Hard-coded entries to simplify testing, will be deleted once project is finished
var defaultList = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Default Item", "This is a default item for defaulting", "07-02-2023", false, "defaultProject");
var defaultList2 = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Default Item", "This is a default item for defaulting", "07-02-2023", false, "defaultProject");
var defaultList3 = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Default Item", "This is a default item for defaulting", "07-02-2023", false, "defaultProject");
var defaultList4 = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Default Item", "This is a default item for defaulting", "07-02-2023", false, "defaultProject");
var defaultCompleted = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Default completed Item", "This is a completed default item for completed defaulting", "01-012-2001", true, "defaultProject");
var testList = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Test Item", "This is a test item for testing", "09-11-2050", false, "testProject");
var testCompleted = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"]("Test completed Item", "This is a completed test item for completed testing", "11-11-1111", true, "testProject");
defaultCompleted.completed = true;
testCompleted.completed = true;
var fullList = [defaultList, testList, defaultCompleted, testCompleted, defaultList2, defaultList3, defaultList4];

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
  (0,_addProject__WEBPACK_IMPORTED_MODULE_3__["default"])(project);
});

//Creates a new, uncompleted task when 'Add' button is pressed IF title is present
var addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
  if (document.getElementById('titleForm').value) {
    var newListItem = new _addListItem__WEBPACK_IMPORTED_MODULE_2__["default"](document.getElementById('titleForm').value, document.getElementById('descriptionForm').value, document.getElementById('dueDate').value, document.getElementById('priority').checked, project.value);
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_1__["default"])(newListItem);
    fullList.push(newListItem);
  }
});

//Listens for any clicks within the tasks container.
container.addEventListener('click', function (element) {
  var parent = element.target.parentNode;
  //If delete button is clicked, deletes task.
  if (element.target.classList.contains('delete')) {
    fullList = fullList.filter(function (task) {
      return task.getTaskID != parent.id;
    });
    parent.remove();
  }
  //If checkbox is clicked, toggles 'completed' and moves task from 'tasks' to 'completed' or vice-versa
  if (element.target.classList.contains('check')) {
    var toggleIndex = fullList.map(function (e) {
      return e.getTaskID;
    }).indexOf(parent.id);
    fullList[toggleIndex].completed = !fullList[toggleIndex].getCompleted;
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_1__["default"])(fullList[toggleIndex]);
    parent.remove();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLHNCQUFzQixFQUFFO0VBQ2pELElBQUlDLElBQUksR0FBRyxFQUFFOztFQUViO0VBQ0FBLElBQUksQ0FBQ0MsUUFBUSxHQUFHLFNBQVNBLFFBQVFBLENBQUEsRUFBRztJQUNsQyxPQUFPLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDLElBQUksRUFBRTtNQUM5QixJQUFJQyxPQUFPLEdBQUcsRUFBRTtNQUNoQixJQUFJQyxTQUFTLEdBQUcsT0FBT0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVc7TUFDOUMsSUFBSUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1hDLE9BQU8sSUFBSSxhQUFhLENBQUNFLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztNQUNqRDtNQUNBLElBQUlBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksU0FBUyxDQUFDRSxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDNUM7TUFDQSxJQUFJRSxTQUFTLEVBQUU7UUFDYkQsT0FBTyxJQUFJLFFBQVEsQ0FBQ0UsTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNJLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDRCxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUM7TUFDakY7TUFDQUMsT0FBTyxJQUFJTCxzQkFBc0IsQ0FBQ0ksSUFBSSxDQUFDO01BQ3ZDLElBQUlFLFNBQVMsRUFBRTtRQUNiRCxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLElBQUlELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLElBQUlELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNYQyxPQUFPLElBQUksR0FBRztNQUNoQjtNQUNBLE9BQU9BLE9BQU87SUFDaEIsQ0FBQyxDQUFDLENBQUNJLElBQUksQ0FBQyxFQUFFLENBQUM7RUFDYixDQUFDOztFQUVEO0VBQ0FSLElBQUksQ0FBQ1MsQ0FBQyxHQUFHLFNBQVNBLENBQUNBLENBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO0lBQzNELElBQUksT0FBT0osT0FBTyxLQUFLLFFBQVEsRUFBRTtNQUMvQkEsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUVBLE9BQU8sRUFBRUssU0FBUyxDQUFDLENBQUM7SUFDeEM7SUFDQSxJQUFJQyxzQkFBc0IsR0FBRyxDQUFDLENBQUM7SUFDL0IsSUFBSUosTUFBTSxFQUFFO01BQ1YsS0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDVixNQUFNLEVBQUVVLENBQUMsRUFBRSxFQUFFO1FBQ3BDLElBQUlDLEVBQUUsR0FBRyxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJQyxFQUFFLElBQUksSUFBSSxFQUFFO1VBQ2RGLHNCQUFzQixDQUFDRSxFQUFFLENBQUMsR0FBRyxJQUFJO1FBQ25DO01BQ0Y7SUFDRjtJQUNBLEtBQUssSUFBSUMsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHVCxPQUFPLENBQUNILE1BQU0sRUFBRVksRUFBRSxFQUFFLEVBQUU7TUFDMUMsSUFBSWhCLElBQUksR0FBRyxFQUFFLENBQUNHLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDUyxFQUFFLENBQUMsQ0FBQztNQUNqQyxJQUFJUCxNQUFNLElBQUlJLHNCQUFzQixDQUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUM3QztNQUNGO01BQ0EsSUFBSSxPQUFPVyxLQUFLLEtBQUssV0FBVyxFQUFFO1FBQ2hDLElBQUksT0FBT1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtVQUNsQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHVyxLQUFLO1FBQ2pCLENBQUMsTUFBTTtVQUNMWCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUNELE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDbkdBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR1csS0FBSztRQUNqQjtNQUNGO01BQ0EsSUFBSUgsS0FBSyxFQUFFO1FBQ1QsSUFBSSxDQUFDUixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDWkEsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHUSxLQUFLO1FBQ2pCLENBQUMsTUFBTTtVQUNMUixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQ0csTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQzlEQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdRLEtBQUs7UUFDakI7TUFDRjtNQUNBLElBQUlFLFFBQVEsRUFBRTtRQUNaLElBQUksQ0FBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ1pBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUNHLE1BQU0sQ0FBQ08sUUFBUSxDQUFDO1FBQy9CLENBQUMsTUFBTTtVQUNMVixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDRyxNQUFNLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQ0csTUFBTSxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1VBQ25FQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdVLFFBQVE7UUFDcEI7TUFDRjtNQUNBYixJQUFJLENBQUNvQixJQUFJLENBQUNqQixJQUFJLENBQUM7SUFDakI7RUFDRixDQUFDO0VBQ0QsT0FBT0gsSUFBSTtBQUNiLENBQUM7Ozs7Ozs7Ozs7QUNwRlk7O0FBRWJILE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVLLElBQUksRUFBRTtFQUMvQixJQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQyxDQUFDLENBQUM7RUFDckIsSUFBSWtCLFVBQVUsR0FBR2xCLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDeEIsSUFBSSxDQUFDa0IsVUFBVSxFQUFFO0lBQ2YsT0FBT2pCLE9BQU87RUFDaEI7RUFDQSxJQUFJLE9BQU9rQixJQUFJLEtBQUssVUFBVSxFQUFFO0lBQzlCLElBQUlDLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxRQUFRLENBQUNDLGtCQUFrQixDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNFLElBQUlPLElBQUksR0FBRyw4REFBOEQsQ0FBQ3RCLE1BQU0sQ0FBQ2lCLE1BQU0sQ0FBQztJQUN4RixJQUFJTSxhQUFhLEdBQUcsTUFBTSxDQUFDdkIsTUFBTSxDQUFDc0IsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUM5QyxPQUFPLENBQUN4QixPQUFPLENBQUMsQ0FBQ0UsTUFBTSxDQUFDLENBQUN1QixhQUFhLENBQUMsQ0FBQyxDQUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQztFQUNyRDtFQUNBLE9BQU8sQ0FBQ0osT0FBTyxDQUFDLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNmb0JzQixRQUFRO0VBQ3pCLFNBQUFBLFNBQVlDLEtBQUssRUFBaUQ7SUFBQSxJQUEvQ0MsV0FBVyxHQUFBQyxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFsQixTQUFBLEdBQUFrQixTQUFBLE1BQUcsR0FBRztJQUFBLElBQUVDLE9BQU8sR0FBQUQsU0FBQSxDQUFBMUIsTUFBQSxPQUFBMEIsU0FBQSxNQUFBbEIsU0FBQTtJQUFBLElBQUVvQixRQUFRLEdBQUFGLFNBQUEsQ0FBQTFCLE1BQUEsT0FBQTBCLFNBQUEsTUFBQWxCLFNBQUE7SUFBQSxJQUFFcUIsT0FBTyxHQUFBSCxTQUFBLENBQUExQixNQUFBLE9BQUEwQixTQUFBLE1BQUFsQixTQUFBO0lBQUFzQixlQUFBLE9BQUFQLFFBQUE7SUFDNUQsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDRSxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDRSxTQUFTLEdBQUcsS0FBSztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQ3hDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQ3lDLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDNUQ7RUFBQ0MsWUFBQSxDQUFBYixRQUFBO0lBQUFjLEdBQUE7SUFBQUMsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBZTtNQUNYLE9BQU8sSUFBSSxDQUFDQyxNQUFNO0lBQ3RCO0VBQUM7SUFBQUYsR0FBQTtJQUFBQyxHQUFBLEVBQ0QsU0FBQUEsSUFBQSxFQUFxQjtNQUNqQixPQUFPLElBQUksQ0FBQ0UsWUFBWTtJQUM1QjtFQUFDO0lBQUFILEdBQUE7SUFBQUMsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBaUI7TUFDYixPQUFPLElBQUksQ0FBQ0csUUFBUTtJQUN4QjtFQUFDO0lBQUFKLEdBQUE7SUFBQUMsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBa0I7TUFDZCxPQUFPLElBQUksQ0FBQ0ksU0FBUztJQUN6QjtFQUFDO0lBQUFMLEdBQUE7SUFBQUMsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBbUI7TUFDZixPQUFPLElBQUksQ0FBQ0ssVUFBVTtJQUMxQjtFQUFDO0lBQUFOLEdBQUE7SUFBQUMsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBaUI7TUFDYixPQUFPLElBQUksQ0FBQ00sUUFBUTtJQUN4QjtFQUFDO0lBQUFQLEdBQUE7SUFBQUMsR0FBQSxFQUNELFNBQUFBLElBQUEsRUFBZ0I7TUFDWixPQUFPLElBQUksQ0FBQ04sTUFBTTtJQUN0QjtFQUFDO0lBQUFLLEdBQUE7SUFBQVEsR0FBQSxFQUVELFNBQUFBLElBQVVyQixLQUFLLEVBQUU7TUFDYixJQUFJLENBQUNlLE1BQU0sR0FBR2YsS0FBSztJQUN2QjtFQUFDO0lBQUFhLEdBQUE7SUFBQVEsR0FBQSxFQUNELFNBQUFBLElBQWdCcEIsV0FBVyxFQUFFO01BQ3pCLElBQUksQ0FBQ2UsWUFBWSxHQUFHZixXQUFXO0lBQ25DO0VBQUM7SUFBQVksR0FBQTtJQUFBUSxHQUFBLEVBQ0QsU0FBQUEsSUFBWWxCLE9BQU8sRUFBRTtNQUNqQixJQUFJLENBQUNjLFFBQVEsR0FBR2QsT0FBTztJQUMzQjtFQUFDO0lBQUFVLEdBQUE7SUFBQVEsR0FBQSxFQUNELFNBQUFBLElBQWFqQixRQUFRLEVBQUU7TUFDbkIsSUFBSSxDQUFDYyxTQUFTLEdBQUdkLFFBQVE7SUFDN0I7RUFBQztJQUFBUyxHQUFBO0lBQUFRLEdBQUEsRUFDRCxTQUFBQSxJQUFjZCxTQUFTLEVBQUU7TUFDckIsSUFBSSxDQUFDWSxVQUFVLEdBQUdaLFNBQVM7SUFDL0I7RUFBQztJQUFBTSxHQUFBO0lBQUFRLEdBQUEsRUFDRCxTQUFBQSxJQUFZaEIsT0FBTyxFQUFFO01BQ2pCLElBQUksQ0FBQ2UsUUFBUSxHQUFHZixPQUFPO0lBQzNCOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUFBO0VBQUEsT0FBQU4sUUFBQTtBQUFBLEtBR0o7Ozs7Ozs7Ozs7Ozs7OztBQzVEZSxTQUFTd0IsVUFBVUEsQ0FBQ2xCLE9BQU8sRUFBRTtFQUN4QztFQUNBLElBQUltQixjQUFjLEdBQUdDLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLFNBQVM7RUFDOUUsS0FBSSxJQUFJL0MsQ0FBQyxHQUFDLENBQUMsRUFBR0EsQ0FBQyxHQUFDMkIsT0FBTyxDQUFDcUIsT0FBTyxDQUFDbEQsTUFBTSxFQUFHRSxDQUFDLEVBQUUsRUFBRTtJQUMxQyxJQUFJaUQsZUFBZSxHQUFHdEIsT0FBTyxDQUFDcUIsT0FBTyxDQUFDaEQsQ0FBQyxDQUFDLENBQUNrRCxLQUFLLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELElBQUlMLGNBQWMsQ0FBQ0ssV0FBVyxDQUFDLENBQUMsS0FBS0YsZUFBZSxFQUFFO01BQ2xERyxLQUFLLENBQUMsK0VBQStFLENBQUM7TUFDdEZOLGNBQWMsR0FBRyxFQUFFO0lBQ3ZCO0VBQ0o7O0VBRUE7RUFDQSxJQUFHQSxjQUFjLEVBQUU7SUFDZixJQUFJTyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNqREYsVUFBVSxDQUFDSCxLQUFLLEdBQUdKLGNBQWM7SUFDakNPLFVBQVUsQ0FBQ0csSUFBSSxHQUFHVixjQUFjLENBQUNiLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0NOLE9BQU8sQ0FBQzhCLEdBQUcsQ0FBQ0osVUFBVSxDQUFDO0VBQzNCO0FBQ0o7Ozs7Ozs7Ozs7Ozs7O0FDbEJlLFNBQVNLLGFBQWFBLENBQUNyQyxRQUFRLEVBQUU7RUFFNUM7RUFDQSxJQUFNc0MsUUFBUSxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDOUNJLFFBQVEsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87RUFDNUJELFFBQVEsQ0FBQ2xELEVBQUUsR0FBR1ksUUFBUSxDQUFDd0MsU0FBUzs7RUFFaEM7RUFDQSxJQUFNQyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNoRE8sUUFBUSxDQUFDQyxJQUFJLEdBQUcsVUFBVTtFQUMxQkQsUUFBUSxDQUFDRixTQUFTLEdBQUcsT0FBTztFQUM1QkUsUUFBUSxDQUFDRSxPQUFPLEdBQUczQyxRQUFRLENBQUM0QyxZQUFZO0VBQ3hDTixRQUFRLENBQUNPLFdBQVcsQ0FBQ0osUUFBUSxDQUFDOztFQUU5QjtFQUNBLElBQU1LLFFBQVEsR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ2hEWSxRQUFRLENBQUNDLFNBQVMsR0FBRy9DLFFBQVEsQ0FBQ2dELFFBQVE7RUFDdENGLFFBQVEsQ0FBQ1AsU0FBUyxHQUFHLE9BQU87RUFDNUIsSUFBR3ZDLFFBQVEsQ0FBQ2lELFdBQVcsRUFBQztJQUNwQkgsUUFBUSxDQUFDUCxTQUFTLElBQUksV0FBVztFQUNyQztFQUNBRCxRQUFRLENBQUNPLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDOztFQUU5QjtFQUNBLElBQU1JLGVBQWUsR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNuRGdCLGVBQWUsQ0FBQ1gsU0FBUyxHQUFHLGFBQWE7RUFDekNXLGVBQWUsQ0FBQ0gsU0FBUyxHQUFHL0MsUUFBUSxDQUFDbUQsY0FBYztFQUNuRGIsUUFBUSxDQUFDTyxXQUFXLENBQUNLLGVBQWUsQ0FBQzs7RUFFckM7RUFDQSxJQUFNOUMsT0FBTyxHQUFHNkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDOUIsT0FBTyxDQUFDMkMsU0FBUyxHQUFHL0MsUUFBUSxDQUFDb0QsVUFBVTtFQUN2Q2hELE9BQU8sQ0FBQ21DLFNBQVMsR0FBRyxTQUFTO0VBQzdCRCxRQUFRLENBQUNPLFdBQVcsQ0FBQ3pDLE9BQU8sQ0FBQzs7RUFFN0I7RUFDQSxJQUFNaUQsU0FBUyxHQUFHcEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ2xEbUIsU0FBUyxDQUFDTixTQUFTLEdBQUcsUUFBUTtFQUM5Qk0sU0FBUyxDQUFDZCxTQUFTLEdBQUcsUUFBUTtFQUM5QkQsUUFBUSxDQUFDTyxXQUFXLENBQUNRLFNBQVMsQ0FBQzs7RUFFL0I7RUFDQSxJQUFHLENBQUNyRCxRQUFRLENBQUM0QyxZQUFZLEVBQUM7SUFDdEJFLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO0lBQ2pEQyxNQUFNLENBQUNYLFdBQVcsQ0FBQ1AsUUFBUSxDQUFDO0VBQ2hDLENBQUMsTUFBTTtJQUNIUSxRQUFRLENBQUNRLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztJQUM3REUsYUFBYSxDQUFDWixXQUFXLENBQUNQLFFBQVEsQ0FBQztFQUN2QztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksUUFBUSxPQUFPLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSwrQkFBK0IsNkNBQTZDLEtBQUssb0JBQW9CLHNCQUFzQixzREFBc0QsS0FBSyxvQkFBb0IsZ0NBQWdDLEtBQUssMEJBQTBCLGdDQUFnQyxLQUFLLHVCQUF1QixzQkFBc0IsMkNBQTJDLHNCQUFzQiwyQkFBMkIsaURBQWlELGtLQUFrSyw0QkFBNEIsb0JBQW9CLHNCQUFzQixlQUFlLDZDQUE2QyxLQUFLLGdCQUFnQixvQ0FBb0MsZ0JBQWdCLHlCQUF5QixvQkFBb0IsS0FBSyxnQkFBZ0IseUJBQXlCLDJCQUEyQiw0QkFBNEIsS0FBSyxrQkFBa0IsMkJBQTJCLEtBQUssc0JBQXNCLCtCQUErQixLQUFLLGlCQUFpQiwwQkFBMEIsK0JBQStCLGlDQUFpQywyQkFBMkIsS0FBSyxtQkFBbUIsbUJBQW1CLEtBQUssdUJBQXVCO0FBQ3owRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFdkMsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNQO0FBQ0M7O0FBRXRDO0FBQ0EsSUFBTW9CLFNBQVMsR0FBR3pCLFFBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDdEQsSUFBTUgsTUFBTSxHQUFHdkIsUUFBUSxDQUFDMEIsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxJQUFNRixhQUFhLEdBQUd4QixRQUFRLENBQUMwQixjQUFjLENBQUMsZUFBZSxDQUFDO0FBQzlELElBQU1yRCxPQUFPLEdBQUcyQixRQUFRLENBQUMwQixjQUFjLENBQUMsVUFBVSxDQUFDOztBQUVuRDtBQUNJLElBQU1DLFdBQVcsR0FBRyxJQUFJNUQsb0RBQVEsQ0FBQyxjQUFjLEVBQUMsdUNBQXVDLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQztBQUM3SCxJQUFNNkQsWUFBWSxHQUFHLElBQUk3RCxvREFBUSxDQUFDLGNBQWMsRUFBQyx1Q0FBdUMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDO0FBQzlILElBQU04RCxZQUFZLEdBQUcsSUFBSTlELG9EQUFRLENBQUMsY0FBYyxFQUFDLHVDQUF1QyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7QUFDOUgsSUFBTStELFlBQVksR0FBRyxJQUFJL0Qsb0RBQVEsQ0FBQyxjQUFjLEVBQUMsdUNBQXVDLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQztBQUM5SCxJQUFNZ0UsZ0JBQWdCLEdBQUcsSUFBSWhFLG9EQUFRLENBQUMsd0JBQXdCLEVBQUMsMkRBQTJELEVBQUMsYUFBYSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQztBQUNoSyxJQUFNaUUsUUFBUSxHQUFHLElBQUlqRSxvREFBUSxDQUFDLFdBQVcsRUFBQyxpQ0FBaUMsRUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQztBQUMvRyxJQUFNa0UsYUFBYSxHQUFHLElBQUlsRSxvREFBUSxDQUFDLHFCQUFxQixFQUFDLHFEQUFxRCxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDO0FBRWpKZ0UsZ0JBQWdCLENBQUN4RCxTQUFTLEdBQUcsSUFBSTtBQUNqQzBELGFBQWEsQ0FBQzFELFNBQVMsR0FBRyxJQUFJO0FBRTlCLElBQUkyRCxRQUFRLEdBQUcsQ0FBQ1AsV0FBVyxFQUFFSyxRQUFRLEVBQUVELGdCQUFnQixFQUFFRSxhQUFhLEVBQUVMLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxZQUFZLENBQUM7O0FBRXJIO0FBQ0FJLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFwRSxRQUFRLEVBQUk7RUFDekIsSUFBR0EsUUFBUSxDQUFDcUUsVUFBVSxLQUFLL0QsT0FBTyxDQUFDdUIsS0FBSyxFQUFDO0lBQ3JDUSwwREFBYSxDQUFDckMsUUFBUSxDQUFDO0VBQzNCO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0FNLE9BQU8sQ0FBQ2dFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ3JDZCxNQUFNLENBQUNULFNBQVMsR0FBRyxFQUFFO0VBQ3JCVSxhQUFhLENBQUNWLFNBQVMsR0FBRyxFQUFFO0VBQzVCb0IsUUFBUSxDQUFDQyxPQUFPLENBQUMsVUFBQXBFLFFBQVEsRUFBSTtJQUN6QixJQUFHQSxRQUFRLENBQUNxRSxVQUFVLEtBQUsvRCxPQUFPLENBQUN1QixLQUFLLEVBQUM7TUFDckNRLDBEQUFhLENBQUNyQyxRQUFRLENBQUM7SUFDM0I7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFNdUUsYUFBYSxHQUFHdEMsUUFBUSxDQUFDMEIsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUMzRFksYUFBYSxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUMxQzlDLHVEQUFVLENBQUNsQixPQUFPLENBQUM7QUFDdkIsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBTWtFLE1BQU0sR0FBR3ZDLFFBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDaERhLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDbkMsSUFBR3JDLFFBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzlCLEtBQUssRUFBRTtJQUMzQyxJQUFNNEMsV0FBVyxHQUFHLElBQUl6RSxvREFBUSxDQUM1QmlDLFFBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzlCLEtBQUssRUFDMUNJLFFBQVEsQ0FBQzBCLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOUIsS0FBSyxFQUNoREksUUFBUSxDQUFDMEIsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDOUIsS0FBSyxFQUN4Q0ksUUFBUSxDQUFDMEIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDaEIsT0FBTyxFQUMzQ3JDLE9BQU8sQ0FBQ3VCLEtBQUssQ0FBQztJQUNsQlEsMERBQWEsQ0FBQ29DLFdBQVcsQ0FBQztJQUMxQk4sUUFBUSxDQUFDN0UsSUFBSSxDQUFDbUYsV0FBVyxDQUFDO0VBQzlCO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0FmLFNBQVMsQ0FBQ1ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNJLE9BQU8sRUFBSztFQUM3QyxJQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsTUFBTSxDQUFDQyxVQUFVO0VBQ3hDO0VBQ0EsSUFBR0gsT0FBTyxDQUFDRSxNQUFNLENBQUNFLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQzVDWixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2EsTUFBTSxDQUFDLFVBQUFDLElBQUk7TUFBQSxPQUFJQSxJQUFJLENBQUN6QyxTQUFTLElBQUltQyxNQUFNLENBQUN2RixFQUFFO0lBQUEsRUFBQztJQUMvRHVGLE1BQU0sQ0FBQ08sTUFBTSxDQUFDLENBQUM7RUFDbkI7RUFDQTtFQUNBLElBQUdSLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDRSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUMzQyxJQUFJSSxXQUFXLEdBQUdoQixRQUFRLENBQUMvRixHQUFHLENBQUMsVUFBQWdILENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUM1QyxTQUFTO0lBQUEsRUFBQyxDQUFDNkMsT0FBTyxDQUFDVixNQUFNLENBQUN2RixFQUFFLENBQUM7SUFDbkUrRSxRQUFRLENBQUNnQixXQUFXLENBQUMsQ0FBQzNFLFNBQVMsR0FBRyxDQUFDMkQsUUFBUSxDQUFDZ0IsV0FBVyxDQUFDLENBQUN2QyxZQUFZO0lBQ3JFUCwwREFBYSxDQUFDOEIsUUFBUSxDQUFDZ0IsV0FBVyxDQUFDLENBQUM7SUFDcENSLE1BQU0sQ0FBQ08sTUFBTSxDQUFDLENBQUM7RUFDbkI7QUFDSixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FkZExpc3RJdGVtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludExpc3RJdGVtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIiBcIiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRhc2tJRCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldER1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldENvbXBsZXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldFByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0VGFza0lEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tJRFxyXG4gICAgfVxyXG5cclxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuICAgIHNldCBjb21wbGV0ZWQoY29tcGxldGVkKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IHByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB0aW1lTGVmdCgpIHtcclxuICAgIC8vICAgICBpZihkdWVEYXRlKSB7XHJcbiAgICAvLyAgICAgICAgIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiAobm93LmdldFRpbWUoKSAtIHRoaXMuZHVlRGF0ZS5nZXRUaW1lKCkpLzM2MDAwO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgeyBMaXN0SXRlbSB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAvL0ZpcnN0IHByb21wdHMgdGhlIHVzZXIgZm9yIHRoZSBuZXcgcHJvamVjdCBuYW1lIGFuZCBjaGVja3MgdGhhdCBpdCdzIG5vdCB0aGUgc2FtZSBhcyBhbiBleGlzdGluZyBwcm9qZWN0XHJcbiAgICBsZXQgbmV3UHJvamVjdE5hbWUgPSBwcm9tcHQoXCJFbnRlciB0aGUgbmFtZSBvZiB5b3VyIG5ldyBwcm9qZWN0OlwiKSArIFwiUHJvamVjdFwiO1xyXG4gICAgZm9yKGxldCBpPTAgOyBpPHByb2plY3Qub3B0aW9ucy5sZW5ndGggOyBpKyspIHtcclxuICAgICAgICBsZXQgZXhpc3RpbmdQcm9qZWN0ID0gcHJvamVjdC5vcHRpb25zW2ldLnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKG5ld1Byb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkgPT09IGV4aXN0aW5nUHJvamVjdCkge1xyXG4gICAgICAgICAgICBhbGVydChcIkEgcHJvamVjdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoYXQgbmFtZS4gUGxlYXNlIHNlbGVjdCBhIHVuaXF1ZSBwcm9qZWN0IG5hbWUuXCIpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0TmFtZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQ3JlYXRlcyBuZXcgcHJvamVjdCB3aXRoIHN1cHBsaWVkIG5hbWUgYW5kIGFkZHMgaXQgdG8gdGhlIHNlbGVjdCBib3hcclxuICAgIGlmKG5ld1Byb2plY3ROYW1lKSB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LnZhbHVlID0gbmV3UHJvamVjdE5hbWU7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0ID0gbmV3UHJvamVjdE5hbWUuc2xpY2UoMCwgLTcpO1xyXG4gICAgICAgIHByb2plY3QuYWRkKG5ld1Byb2plY3QpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRMaXN0SXRlbShMaXN0SXRlbSkge1xyXG5cclxuICAgIC8vRW5jbG9zZXMgYWxsIHRhc2tzIGluIGEgZGl2IHdpdGggYSB1bmlxdWUgaWQgYW5kIHNoYXJlZCBjbGFzc1xyXG4gICAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld0VudHJ5LmNsYXNzTmFtZSA9IFwiZW50cnlcIjtcclxuICAgIG5ld0VudHJ5LmlkID0gTGlzdEl0ZW0uZ2V0VGFza0lEO1xyXG5cclxuICAgIC8vQ3JlYXRlIGNoZWNrYm94IGZvciBtYXJraW5nIHRhc2tzIGFzIGNvbXBsZXRlIChvciB1bi1tYXJraW5nKVxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBMaXN0SXRlbS5nZXRDb21wbGV0ZWQ7XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gICAgLy9DcmVhdGUgbGFiZWwgd2l0aCB0aGUgdGFzaydzIHRpdGxlIGFuZCBoaWdobGlnaHRzIGl0IGlmIGl0J3MgYSBwcmlvcml0eVxyXG4gICAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmV3TGFiZWwuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0VGl0bGU7XHJcbiAgICBuZXdMYWJlbC5jbGFzc05hbWUgPSBcInRpdGxlXCI7XHJcbiAgICBpZihMaXN0SXRlbS5nZXRQcmlvcml0eSl7XHJcbiAgICAgICAgbmV3TGFiZWwuY2xhc3NOYW1lICs9IFwiIHByaW9yaXR5XCI7XHJcbiAgICB9XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XHJcblxyXG4gICAgLy9BZGQgZGVzY3JpcHRpb24uIElmIG5vIGRlc2NyaXB0aW9uIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlc2NyaXB0aW9uVGV4dC5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XHJcbiAgICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb247XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xyXG5cclxuICAgIC8vQWRkIGR1ZSBkYXRlLiBJZiBubyBkYXRlIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVEYXRlLmlubmVySFRNTCA9IExpc3RJdGVtLmdldER1ZURhdGU7XHJcbiAgICBkdWVEYXRlLmNsYXNzTmFtZSA9IFwiZHVlRGF0ZVwiO1xyXG4gICAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcblxyXG4gICAgLy9BZGQgYnV0dG9uIHRvIGRlbGV0ZSB0YXNrXHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiO1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICAgIC8vQWRkcyB0YXNrIHRvIGFwcHJvcHJpYXRlIGRpdiBkZXBlbmRpbmcgb24gd2hldGhlciBpdCdzIG1hcmtlZCBjb21wbGV0ZVxyXG4gICAgaWYoIUxpc3RJdGVtLmdldENvbXBsZXRlZCl7XHJcbiAgICAgICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJcIik7XHJcbiAgICAgICAgdGRMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XHJcbiAgICAgICAgY29tcGxldGVkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XHJcbiAgICB9XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMzYsIDIyMSk7XHJcbn1cclxuXHJcbiNpbnB1dEZvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAuMmZyIC44ZnIgLjVmcjtcclxufVxyXG5cclxuI3RpdGxlRm9ybSB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNTtcclxufVxyXG5cclxuI2Rlc2NyaXB0aW9uRm9ybSB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBkaXZ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIGdhcDogMjBweFxyXG59XHJcblxyXG4jY29udGFpbmVyIGRpdiBkaXZ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgXCJjaGVjayB0aXRsZSB0aXRsZSBkdWVEYXRlXCJcclxuICAgICAgICBcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICBcIi4gLiAuIGRlbGV0ZVwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGdhcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDI0MCwgMjQyKTtcclxufVxyXG5cclxuLmVudHJ5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBncmlkLWFyZWE6IGNoZWNrO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuLmR1ZURhdGUge1xyXG4gICAgZ3JpZC1hcmVhOiBkdWVEYXRlO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgICBib3JkZXItY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEM7OztzQkFHa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsTUFBTTtJQUNOLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDIzNiwgMjIxKTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0Rm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAuMmZyIC44ZnIgLjVmcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlRm9ybSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiA1O1xcclxcbn1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb25Gb3JtIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDU7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIgZGl2e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBnYXA6IDIwcHhcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciBkaXYgZGl2e1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgIFxcXCJjaGVjayB0aXRsZSB0aXRsZSBkdWVEYXRlXFxcIlxcclxcbiAgICAgICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgXFxcIi4gLiAuIGRlbGV0ZVxcXCI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDI0MCwgMjQyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2tcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjaGVjaztcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZURhdGUge1xcclxcbiAgICBncmlkLWFyZWE6IGR1ZURhdGU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUge1xcclxcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHByaW50TGlzdEl0ZW0gZnJvbSBcIi4vcHJpbnRMaXN0SXRlbVwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL2FkZExpc3RJdGVtXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tICcuL2FkZFByb2plY3QnO1xuXG4vLyBEb20gZWxlbWVudHMgdXNlZCBmb3IgYW5kIGluIGV2ZW50IGxpc3RlbmVyc1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuY29uc3QgdGRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkTGlzdCcpO1xuY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWRMaXN0Jyk7XG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG5cbi8vSGFyZC1jb2RlZCBlbnRyaWVzIHRvIHNpbXBsaWZ5IHRlc3RpbmcsIHdpbGwgYmUgZGVsZXRlZCBvbmNlIHByb2plY3QgaXMgZmluaXNoZWRcbiAgICBjb25zdCBkZWZhdWx0TGlzdCA9IG5ldyBMaXN0SXRlbShcIkRlZmF1bHQgSXRlbVwiLFwiVGhpcyBpcyBhIGRlZmF1bHQgaXRlbSBmb3IgZGVmYXVsdGluZ1wiLFwiMDctMDItMjAyM1wiLGZhbHNlLCBcImRlZmF1bHRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGRlZmF1bHRMaXN0MiA9IG5ldyBMaXN0SXRlbShcIkRlZmF1bHQgSXRlbVwiLFwiVGhpcyBpcyBhIGRlZmF1bHQgaXRlbSBmb3IgZGVmYXVsdGluZ1wiLFwiMDctMDItMjAyM1wiLGZhbHNlLCBcImRlZmF1bHRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGRlZmF1bHRMaXN0MyA9IG5ldyBMaXN0SXRlbShcIkRlZmF1bHQgSXRlbVwiLFwiVGhpcyBpcyBhIGRlZmF1bHQgaXRlbSBmb3IgZGVmYXVsdGluZ1wiLFwiMDctMDItMjAyM1wiLGZhbHNlLCBcImRlZmF1bHRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGRlZmF1bHRMaXN0NCA9IG5ldyBMaXN0SXRlbShcIkRlZmF1bHQgSXRlbVwiLFwiVGhpcyBpcyBhIGRlZmF1bHQgaXRlbSBmb3IgZGVmYXVsdGluZ1wiLFwiMDctMDItMjAyM1wiLGZhbHNlLCBcImRlZmF1bHRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGRlZmF1bHRDb21wbGV0ZWQgPSBuZXcgTGlzdEl0ZW0oXCJEZWZhdWx0IGNvbXBsZXRlZCBJdGVtXCIsXCJUaGlzIGlzIGEgY29tcGxldGVkIGRlZmF1bHQgaXRlbSBmb3IgY29tcGxldGVkIGRlZmF1bHRpbmdcIixcIjAxLTAxMi0yMDAxXCIsdHJ1ZSwgXCJkZWZhdWx0UHJvamVjdFwiKTtcbiAgICBjb25zdCB0ZXN0TGlzdCA9IG5ldyBMaXN0SXRlbShcIlRlc3QgSXRlbVwiLFwiVGhpcyBpcyBhIHRlc3QgaXRlbSBmb3IgdGVzdGluZ1wiLFwiMDktMTEtMjA1MFwiLCBmYWxzZSwgXCJ0ZXN0UHJvamVjdFwiKTtcbiAgICBjb25zdCB0ZXN0Q29tcGxldGVkID0gbmV3IExpc3RJdGVtKFwiVGVzdCBjb21wbGV0ZWQgSXRlbVwiLFwiVGhpcyBpcyBhIGNvbXBsZXRlZCB0ZXN0IGl0ZW0gZm9yIGNvbXBsZXRlZCB0ZXN0aW5nXCIsXCIxMS0xMS0xMTExXCIsIHRydWUsIFwidGVzdFByb2plY3RcIilcblxuICAgIGRlZmF1bHRDb21wbGV0ZWQuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB0ZXN0Q29tcGxldGVkLmNvbXBsZXRlZCA9IHRydWU7XG5cbiAgICBsZXQgZnVsbExpc3QgPSBbZGVmYXVsdExpc3QsIHRlc3RMaXN0LCBkZWZhdWx0Q29tcGxldGVkLCB0ZXN0Q29tcGxldGVkLCBkZWZhdWx0TGlzdDIsIGRlZmF1bHRMaXN0MywgZGVmYXVsdExpc3Q0XTtcblxuLy9QcmludHMgY29udGVudHMgb2YgZGVmYXVsdCBwcm9qZWN0IG9uIHBhZ2UgbG9hZFxuZnVsbExpc3QuZm9yRWFjaChMaXN0SXRlbSA9PiB7XG4gICAgaWYoTGlzdEl0ZW0uZ2V0UHJvamVjdCA9PT0gcHJvamVjdC52YWx1ZSl7XG4gICAgICAgIHByaW50TGlzdEl0ZW0oTGlzdEl0ZW0pO1xuICAgIH1cbn0pXG5cbi8vUHJpbnRzIGNvbnRlbnRzIG9mIHNlbGVjdGVkIHByb2plY3Qgd2hlbiBzZWxlY3Rpb24gaXMgY2hhbmdlZFxucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgdGRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29tcGxldGVkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZ1bGxMaXN0LmZvckVhY2goTGlzdEl0ZW0gPT4ge1xuICAgICAgICBpZihMaXN0SXRlbS5nZXRQcm9qZWN0ID09PSBwcm9qZWN0LnZhbHVlKXtcbiAgICAgICAgICAgIHByaW50TGlzdEl0ZW0oTGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbi8vQ3JlYXRlcyBuZXcgcHJvamVjdCB3aGVuICdOZXcgUHJvamVjdCcgYnV0dG9uIGlzIHByZXNzZWRcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xufSlcblxuLy9DcmVhdGVzIGEgbmV3LCB1bmNvbXBsZXRlZCB0YXNrIHdoZW4gJ0FkZCcgYnV0dG9uIGlzIHByZXNzZWQgSUYgdGl0bGUgaXMgcHJlc2VudFxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJ0bicpO1xuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUZvcm0nKS52YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdMaXN0SXRlbSA9IG5ldyBMaXN0SXRlbShcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUZvcm0nKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbkZvcm0nKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS5jaGVja2VkLFxuICAgICAgICAgICAgcHJvamVjdC52YWx1ZSk7XG4gICAgICAgIHByaW50TGlzdEl0ZW0obmV3TGlzdEl0ZW0pO1xuICAgICAgICBmdWxsTGlzdC5wdXNoKG5ld0xpc3RJdGVtKTtcbiAgICB9XG59KVxuXG4vL0xpc3RlbnMgZm9yIGFueSBjbGlja3Mgd2l0aGluIHRoZSB0YXNrcyBjb250YWluZXIuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgLy9JZiBkZWxldGUgYnV0dG9uIGlzIGNsaWNrZWQsIGRlbGV0ZXMgdGFzay5cbiAgICBpZihlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpKSB7XG4gICAgICAgIGZ1bGxMaXN0ID0gZnVsbExpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5nZXRUYXNrSUQgIT0gcGFyZW50LmlkKTtcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgICAvL0lmIGNoZWNrYm94IGlzIGNsaWNrZWQsIHRvZ2dsZXMgJ2NvbXBsZXRlZCcgYW5kIG1vdmVzIHRhc2sgZnJvbSAndGFza3MnIHRvICdjb21wbGV0ZWQnIG9yIHZpY2UtdmVyc2FcbiAgICBpZihlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrJykpIHtcbiAgICAgICAgbGV0IHRvZ2dsZUluZGV4ID0gZnVsbExpc3QubWFwKGUgPT4gZS5nZXRUYXNrSUQpLmluZGV4T2YocGFyZW50LmlkKTtcbiAgICAgICAgZnVsbExpc3RbdG9nZ2xlSW5kZXhdLmNvbXBsZXRlZCA9ICFmdWxsTGlzdFt0b2dnbGVJbmRleF0uZ2V0Q29tcGxldGVkO1xuICAgICAgICBwcmludExpc3RJdGVtKGZ1bGxMaXN0W3RvZ2dsZUluZGV4XSlcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkxpc3RJdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFyZ3VtZW50cyIsImR1ZURhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJfY2xhc3NDYWxsQ2hlY2siLCJjb21wbGV0ZWQiLCJ0YXNrSUQiLCJNYXRoIiwicmFuZG9tIiwic2xpY2UiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnZXQiLCJfdGl0bGUiLCJfZGVzY3JpcHRpb24iLCJfZHVlRGF0ZSIsIl9wcmlvcml0eSIsIl9jb21wbGV0ZWQiLCJfcHJvamVjdCIsInNldCIsImRlZmF1bHQiLCJhZGRQcm9qZWN0IiwibmV3UHJvamVjdE5hbWUiLCJwcm9tcHQiLCJvcHRpb25zIiwiZXhpc3RpbmdQcm9qZWN0IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImFsZXJ0IiwibmV3UHJvamVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJhZGQiLCJwcmludExpc3RJdGVtIiwibmV3RW50cnkiLCJjbGFzc05hbWUiLCJnZXRUYXNrSUQiLCJjaGVja2JveCIsInR5cGUiLCJjaGVja2VkIiwiZ2V0Q29tcGxldGVkIiwiYXBwZW5kQ2hpbGQiLCJuZXdMYWJlbCIsImlubmVySFRNTCIsImdldFRpdGxlIiwiZ2V0UHJpb3JpdHkiLCJkZXNjcmlwdGlvblRleHQiLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJkZWxldGVCdG4iLCJzdHlsZSIsInNldFByb3BlcnR5IiwidGRMaXN0IiwiY29tcGxldGVkTGlzdCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiZGVmYXVsdExpc3QiLCJkZWZhdWx0TGlzdDIiLCJkZWZhdWx0TGlzdDMiLCJkZWZhdWx0TGlzdDQiLCJkZWZhdWx0Q29tcGxldGVkIiwidGVzdExpc3QiLCJ0ZXN0Q29tcGxldGVkIiwiZnVsbExpc3QiLCJmb3JFYWNoIiwiZ2V0UHJvamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdQcm9qZWN0QnRuIiwiYWRkQnRuIiwibmV3TGlzdEl0ZW0iLCJlbGVtZW50IiwicGFyZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZmlsdGVyIiwidGFzayIsInJlbW92ZSIsInRvZ2dsZUluZGV4IiwiZSIsImluZGV4T2YiXSwic291cmNlUm9vdCI6IiJ9