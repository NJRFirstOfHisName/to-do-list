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
}();


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
function addProject(valid, projectInput) {
  var project = document.getElementById('projects');
  var projectError = document.getElementById('projectError');
  if (valid) {
    //Creates new project with supplied name and adds it to the select box
    var newProject = document.createElement('option');
    newProject.value = projectInput.value + "Project";
    newProject.text = projectInput.value;
    project.add(newProject);

    //Makes newProject the active project
    project.value = newProject.value;
    projectError.innerHTML = "";
    projectInput.value = "";
    document.getElementById('projectAdd').classList.toggle('expanded');
  } else {
    projectError.innerHTML = "Project name in use.";
  }
}

/***/ }),

/***/ "./src/checkProjects.js":
/*!******************************!*\
  !*** ./src/checkProjects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkProjects)
/* harmony export */ });
function checkProjects(projectInput, project) {
  var valid = true;

  //Checks the projects in the <select> box to see if one exists with the same name
  for (var i = 0; i < project.options.length; i++) {
    var existingProject = project.options[i].value.toLowerCase();
    if (projectInput.value.toLowerCase() === existingProject.slice(0, -7) && valid) {
      valid = false;
    }
  }

  //Returns true if the project has unique name, otherwise returns false
  return valid;
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
/* harmony import */ var _trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trash-can-outline.svg */ "./src/trash-can-outline.svg");

function printListItem(ListItem) {
  //Encloses all tasks in a div with a unique id and shared class
  var newEntry = document.createElement('div');
  newEntry.className = "entry";
  newEntry.id = ListItem._TaskID;

  //Create checkbox for marking tasks as complete (or un-marking)
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "check";
  checkbox.checked = ListItem._completed;
  newEntry.appendChild(checkbox);

  //Create label with the task's title and highlights it if it's a priority
  var newLabel = document.createElement('label');
  newLabel.innerHTML = ListItem._title;
  newLabel.className = "title";
  if (ListItem._priority) {
    newLabel.className += " priority";
  }
  newEntry.appendChild(newLabel);

  //Add description. If no description is supplied field will be blank
  var descriptionText = document.createElement('p');
  descriptionText.className = "description";
  descriptionText.innerHTML = ListItem._description;
  newEntry.appendChild(descriptionText);

  //Add due date. If no date is supplied field will be blank
  var dueDate = document.createElement('p');
  dueDate.innerHTML = ListItem._dueDate;
  dueDate.className = "dueDate";
  newEntry.appendChild(dueDate);

  //Add button to delete task
  // const deleteBtn = document.createElement('button');
  var deleteBtn = document.createElement('img');
  deleteBtn.src = _trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  // deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "delete";
  newEntry.appendChild(deleteBtn);

  //Adds task to appropriate div depending on whether it's marked complete
  if (!ListItem._completed) {
    newLabel.style.setProperty("text-decoration", "");
    tdList.appendChild(newEntry);
  } else {
    newLabel.style.setProperty("text-decoration", "line-through");
    completedList.appendChild(newEntry);
  }
}

/***/ }),

/***/ "./src/printProject.js":
/*!*****************************!*\
  !*** ./src/printProject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printProject)
/* harmony export */ });
/* harmony import */ var _printListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printListItem */ "./src/printListItem.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var tdList = document.getElementById('tdList');
var completedList = document.getElementById('completedList');

//Checks list of to-do's and prints each one that matches the current project
function printProject(fullList, value) {
  tdList.innerHTML = "";
  completedList.innerHTML = "";
  // fullList.forEach(ListItem => {
  //     if(ListItem.getProject === value){
  //         printListItem(ListItem);
  //         console.log("ListItem")
  //         console.log(ListItem);
  //     }
  // })
  Object.entries(window.localStorage).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];
    if (JSON.parse(val)._project === value) {
      (0,_printListItem__WEBPACK_IMPORTED_MODULE_0__["default"])(JSON.parse(val));
    }
  });
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
___CSS_LOADER_EXPORT___.push([module.id, `html {
    height: 100%;
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
    display: grid;
    grid-template-columns: minmax(10em, 20em) auto;
    height: 100%;
}

#sidebar {
    background-color: #fde047;
    display: grid;
    grid-template-rows: .5fr .4fr .25fr .4fr 1fr 3fr;
    align-items: baseline;
}

#header {
    margin: 0 5%;
    font-weight: bold;
    font-size: 50px;
    justify-self: start;
}

#projectForm {
    display: grid;
    gap: 5px;
    margin: 5px;
}

#projectsLabel {
    font-size: large;
    font-weight: bold;
    margin: 0 1.5em;
}

#projects {
    border: none;
    font-size: large;
    width: 70%;
    justify-self: end;
    margin: 0 1.5em;
}

button {
    background-color: white;
    border: none;
    justify-self: center;
    height: 2em;
    border-radius: 20px;
    font-size: larger;
    font-weight: 600;
}

#projectFormButton {
    width: 55%;
    align-self: baseline;
    margin: 2%;
}

#projectWrapper {
    overflow: hidden;
    margin: 10px;
}

#projectAdd {
    margin-top: -30%; 
    transition: all .5s;
    align-items: center;
    display: grid;
    justify-content: center;
    grid-template-rows: auto;
}

#newProject {
    font-size: medium;
    margin: 10px;
}

#projectAdd p {
    text-align: center;
    font-size: small;
    margin: 0;
}

input, textarea {
    border: none;
    border-radius: 5px;
} 

#inputFormButton {
    align-self: end;
    margin: 5px;
    width: 45%;
}

#inputWrapper {
    overflow: hidden;
}

#inputForm {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    margin: 10px;
    margin-top: -100%;
    transition: all 1s;
}

#inputForm.expanded, #projectAdd.expanded, #completedList.expanded {
    margin-top: 0;
}

#titleInput {
    grid-column: 1 / 4;
}

#descriptionForm {
    grid-column: 1 / 5;
    resize: none;
}

#dueDate {
    grid-column: 1 / 3;
}


#dueDateLabel {
    grid-column: 3 / 5;
}

#priorityDiv {
    grid-column: 1 / 5;
}

#priority {
    position: relative;
    vertical-align: middle;
}

#dueDateLabel, #priorityLabel {
    font-size: small;
}

#addBtn {
    grid-column: 2 / 4;
    width: 50%;
    font-size: medium;
}

#container {
    width: 100%;
    background-color: #fefce8;
}

#tdList, #completedList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    gap: 20px;
    background-color: white;
    padding: 10px;
}

.entry{
    display: grid;
    grid-template-columns: .25fr 1fr 1fr 1fr;
    grid-template-areas: 
        "check title title dueDate"
        "description description description description"
        ". . . delete";
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
    gap: 0;
    background-color: #fef08a;
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
    font-size: larger;
}

.dueDate {
    grid-area: dueDate;
}

.description {
    grid-area: description;
}

.delete {
    grid-area: delete;
    width: 20%;
    align-self: end;
    justify-self: end;
}

.priority {
    color: red;
}

#completedWrapper {
    overflow: hidden;
}

#completedList {
    margin-top: -100%;
    transition: all .3s ease-out;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8CAA8C;IAC9C,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,gDAAgD;IAChD,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,oBAAoB;IACpB,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,QAAQ;IACR,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,wCAAwC;IACxC;;;sBAGkB;IAClB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,MAAM;IACN,yBAAyB;AAC7B;;AAEA;IACI;AACJ;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;AAChC","sourcesContent":["html {\r\n    height: 100%;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-columns: minmax(10em, 20em) auto;\r\n    height: 100%;\r\n}\r\n\r\n#sidebar {\r\n    background-color: #fde047;\r\n    display: grid;\r\n    grid-template-rows: .5fr .4fr .25fr .4fr 1fr 3fr;\r\n    align-items: baseline;\r\n}\r\n\r\n#header {\r\n    margin: 0 5%;\r\n    font-weight: bold;\r\n    font-size: 50px;\r\n    justify-self: start;\r\n}\r\n\r\n#projectForm {\r\n    display: grid;\r\n    gap: 5px;\r\n    margin: 5px;\r\n}\r\n\r\n#projectsLabel {\r\n    font-size: large;\r\n    font-weight: bold;\r\n    margin: 0 1.5em;\r\n}\r\n\r\n#projects {\r\n    border: none;\r\n    font-size: large;\r\n    width: 70%;\r\n    justify-self: end;\r\n    margin: 0 1.5em;\r\n}\r\n\r\nbutton {\r\n    background-color: white;\r\n    border: none;\r\n    justify-self: center;\r\n    height: 2em;\r\n    border-radius: 20px;\r\n    font-size: larger;\r\n    font-weight: 600;\r\n}\r\n\r\n#projectFormButton {\r\n    width: 55%;\r\n    align-self: baseline;\r\n    margin: 2%;\r\n}\r\n\r\n#projectWrapper {\r\n    overflow: hidden;\r\n    margin: 10px;\r\n}\r\n\r\n#projectAdd {\r\n    margin-top: -30%; \r\n    transition: all .5s;\r\n    align-items: center;\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-template-rows: auto;\r\n}\r\n\r\n#newProject {\r\n    font-size: medium;\r\n    margin: 10px;\r\n}\r\n\r\n#projectAdd p {\r\n    text-align: center;\r\n    font-size: small;\r\n    margin: 0;\r\n}\r\n\r\ninput, textarea {\r\n    border: none;\r\n    border-radius: 5px;\r\n} \r\n\r\n#inputFormButton {\r\n    align-self: end;\r\n    margin: 5px;\r\n    width: 45%;\r\n}\r\n\r\n#inputWrapper {\r\n    overflow: hidden;\r\n}\r\n\r\n#inputForm {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    gap: 5px;\r\n    margin: 10px;\r\n    margin-top: -100%;\r\n    transition: all 1s;\r\n}\r\n\r\n#inputForm.expanded, #projectAdd.expanded, #completedList.expanded {\r\n    margin-top: 0;\r\n}\r\n\r\n#titleInput {\r\n    grid-column: 1 / 4;\r\n}\r\n\r\n#descriptionForm {\r\n    grid-column: 1 / 5;\r\n    resize: none;\r\n}\r\n\r\n#dueDate {\r\n    grid-column: 1 / 3;\r\n}\r\n\r\n\r\n#dueDateLabel {\r\n    grid-column: 3 / 5;\r\n}\r\n\r\n#priorityDiv {\r\n    grid-column: 1 / 5;\r\n}\r\n\r\n#priority {\r\n    position: relative;\r\n    vertical-align: middle;\r\n}\r\n\r\n#dueDateLabel, #priorityLabel {\r\n    font-size: small;\r\n}\r\n\r\n#addBtn {\r\n    grid-column: 2 / 4;\r\n    width: 50%;\r\n    font-size: medium;\r\n}\r\n\r\n#container {\r\n    width: 100%;\r\n    background-color: #fefce8;\r\n}\r\n\r\n#tdList, #completedList {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));\r\n    gap: 20px;\r\n    background-color: white;\r\n    padding: 10px;\r\n}\r\n\r\n.entry{\r\n    display: grid;\r\n    grid-template-columns: .25fr 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n        \"check title title dueDate\"\r\n        \"description description description description\"\r\n        \". . . delete\";\r\n    border-radius: 10px;\r\n    margin: 5px;\r\n    padding: 10px;\r\n    gap: 0;\r\n    background-color: #fef08a;\r\n}\r\n\r\n.entry {\r\n    border: 1px solid black\r\n}\r\n\r\n.check {\r\n    grid-area: check;\r\n    width: 15px;\r\n}\r\n\r\n.title {\r\n    grid-area: title;\r\n    align-self: center;\r\n    justify-self: start;\r\n    font-size: larger;\r\n}\r\n\r\n.dueDate {\r\n    grid-area: dueDate;\r\n}\r\n\r\n.description {\r\n    grid-area: description;\r\n}\r\n\r\n.delete {\r\n    grid-area: delete;\r\n    width: 20%;\r\n    align-self: end;\r\n    justify-self: end;\r\n}\r\n\r\n.priority {\r\n    color: red;\r\n}\r\n\r\n#completedWrapper {\r\n    overflow: hidden;\r\n}\r\n\r\n#completedList {\r\n    margin-top: -100%;\r\n    transition: all .3s ease-out;\r\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/trash-can-outline.svg":
/*!***********************************!*\
  !*** ./src/trash-can-outline.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaIiAvPjwvc3ZnPg==";

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
/* harmony import */ var _addListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addListItem */ "./src/addListItem.js");
/* harmony import */ var _printListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printListItem */ "./src/printListItem.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _checkProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkProjects */ "./src/checkProjects.js");
/* harmony import */ var _printProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./printProject */ "./src/printProject.js");







// Dom elements used for and in event listeners
var project = document.getElementById('projects');

//Hard-coded entries to simplify testing, will be deleted once project is finished
var defaultList = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Default Item", "This is a default item for defaulting", "07-02-2023", false, "defaultProject");
var defaultList2 = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Also default Item", "This is a default item for defaulting, but with a slightly longer string to test wrapping", "07-02-2023", false, "defaultProject");
var defaultList3 = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Lots of default Item(s)", "This is a default item for defaulting, but with an exceptionally long string so that I can test text wrapping and potentially concatenating, which I'm not entirely sure how to implement yet but which I will also have to figure out at some point.", "07-02-2023", false, "defaultProject");
var defaultList4 = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Getting sick of these default Items", "As it turns out that string wasn't quite as exceptionally long as I had hoped, but I think I'm just going to limit the number of characters in the description and call it a day.", "07-02-2023", false, "defaultProject");
var defaultCompleted = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Default completed Item", "This is a completed default item for completed defaulting", "01-012-2001", true, "defaultProject");
var testList = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Test Item", "This is a test item for testing", "09-11-2050", false, "testProject");
var testCompleted = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"]("Test completed Item", "This is a completed test item for completed testing", "11-11-1111", true, "testProject");
defaultCompleted.completed = true;
testCompleted.completed = true;
var fullList = [defaultList, testList, defaultCompleted, testCompleted, defaultList2, defaultList3, defaultList4];
console.log(fullList);
localStorage.clear();
fullList.forEach(function (ListItem) {
  localStorage.setItem(ListItem.getTaskID, JSON.stringify(ListItem));
});

// Object.entries(window.localStorage).forEach(())
//Prints contents of default project on page load
(0,_printProject__WEBPACK_IMPORTED_MODULE_5__["default"])(fullList, project.value);

//Prints contents of selected project when selection is changed
project.addEventListener('change', function () {
  (0,_printProject__WEBPACK_IMPORTED_MODULE_5__["default"])(fullList, project.value);
});

//Expands or collapses the form for adding a project when button is pressed
document.getElementById('projectFormButton').addEventListener('click', function () {
  var projectAdd = document.getElementById('projectAdd');
  projectAdd.classList.toggle('expanded');
  projectAdd.classList.toggle('collapsed');
});

//Creates new project when 'New Project' button is pressed
document.getElementById('newProject').addEventListener('click', function () {
  var projectInput = document.getElementById('projectInput');
  var valid = (0,_checkProjects__WEBPACK_IMPORTED_MODULE_4__["default"])(projectInput, project);
  (0,_addProject__WEBPACK_IMPORTED_MODULE_3__["default"])(valid, projectInput);
  (0,_printProject__WEBPACK_IMPORTED_MODULE_5__["default"])(fullList, project.value);
});

//Creates a new, uncompleted task when 'Add' button is pressed IF title is present
document.getElementById('addBtn').addEventListener('click', function () {
  if (document.getElementById('titleInput').value) {
    var newListItem = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"](document.getElementById('titleInput').value, document.getElementById('descriptionForm').value, document.getElementById('dueDate').value, document.getElementById('priority').checked, project.value);
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_2__["default"])(newListItem);
    fullList.push(newListItem);
    localStorage.setItem(newListItem.getTaskID, JSON.stringify(newListItem));
    console.log(JSON.parse(localStorage.getItem(newListItem.getTaskID)));
    console.log(localStorage.length);
    console.log(newListItem.getTaskID);
  }
});

//Listens for any clicks within the tasks container.
var container = document.getElementById('container');
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
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_2__["default"])(fullList[toggleIndex]);
    parent.remove();
  }
  //If 'Completed' header is clicked, expands the list of completed tasks
  if (element.target.id === "expandCompleted") {
    //Ridiculous chained DOM list points to the completedList div to check if it's collapsed
    if (element.target.nextElementSibling.firstElementChild.classList.contains('collapsed')) {
      element.target.innerHTML = "Completed ▿";
    } else {
      element.target.innerHTML = "Completed ▸";
    }
    var completedList = document.getElementById('completedList');
    completedList.classList.toggle('expanded');
    completedList.classList.toggle('collapsed');
  }
});

//Expands or collapses form for adding a new task when button is pressed
document.getElementById('inputFormButton').addEventListener('click', function () {
  var inputForm = document.getElementById('inputForm');
  inputForm.classList.toggle('expanded');
  inputForm.classList.toggle('collapsed');
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsT0FBTyxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGdDQUFnQyxxQkFBcUIsMENBQTBDLEtBQUssY0FBYyxrQkFBa0Isc0JBQXNCLHVEQUF1RCxxQkFBcUIsS0FBSyxrQkFBa0Isa0NBQWtDLHNCQUFzQix5REFBeUQsOEJBQThCLEtBQUssaUJBQWlCLHFCQUFxQiwwQkFBMEIsd0JBQXdCLDRCQUE0QixLQUFLLHNCQUFzQixzQkFBc0IsaUJBQWlCLG9CQUFvQixLQUFLLHdCQUF3Qix5QkFBeUIsMEJBQTBCLHdCQUF3QixLQUFLLG1CQUFtQixxQkFBcUIseUJBQXlCLG1CQUFtQiwwQkFBMEIsd0JBQXdCLEtBQUssZ0JBQWdCLGdDQUFnQyxxQkFBcUIsNkJBQTZCLG9CQUFvQiw0QkFBNEIsMEJBQTBCLHlCQUF5QixLQUFLLDRCQUE0QixtQkFBbUIsNkJBQTZCLG1CQUFtQixLQUFLLHlCQUF5Qix5QkFBeUIscUJBQXFCLEtBQUsscUJBQXFCLDBCQUEwQiw0QkFBNEIsNEJBQTRCLHNCQUFzQixnQ0FBZ0MsaUNBQWlDLEtBQUsscUJBQXFCLDBCQUEwQixxQkFBcUIsS0FBSyx1QkFBdUIsMkJBQTJCLHlCQUF5QixrQkFBa0IsS0FBSyx5QkFBeUIscUJBQXFCLDJCQUEyQixNQUFNLDBCQUEwQix3QkFBd0Isb0JBQW9CLG1CQUFtQixLQUFLLHVCQUF1Qix5QkFBeUIsS0FBSyxvQkFBb0Isc0JBQXNCLDhDQUE4QyxpQkFBaUIscUJBQXFCLDBCQUEwQiwyQkFBMkIsS0FBSyw0RUFBNEUsc0JBQXNCLEtBQUsscUJBQXFCLDJCQUEyQixLQUFLLDBCQUEwQiwyQkFBMkIscUJBQXFCLEtBQUssa0JBQWtCLDJCQUEyQixLQUFLLDJCQUEyQiwyQkFBMkIsS0FBSyxzQkFBc0IsMkJBQTJCLEtBQUssbUJBQW1CLDJCQUEyQiwrQkFBK0IsS0FBSyx1Q0FBdUMseUJBQXlCLEtBQUssaUJBQWlCLDJCQUEyQixtQkFBbUIsMEJBQTBCLEtBQUssb0JBQW9CLG9CQUFvQixrQ0FBa0MsS0FBSyxpQ0FBaUMsc0JBQXNCLG9FQUFvRSxrQkFBa0IsZ0NBQWdDLHNCQUFzQixLQUFLLGVBQWUsc0JBQXNCLGlEQUFpRCxrS0FBa0ssNEJBQTRCLG9CQUFvQixzQkFBc0IsZUFBZSxrQ0FBa0MsS0FBSyxnQkFBZ0Isb0NBQW9DLGdCQUFnQix5QkFBeUIsb0JBQW9CLEtBQUssZ0JBQWdCLHlCQUF5QiwyQkFBMkIsNEJBQTRCLDBCQUEwQixLQUFLLGtCQUFrQiwyQkFBMkIsS0FBSyxzQkFBc0IsK0JBQStCLEtBQUssaUJBQWlCLDBCQUEwQixtQkFBbUIsd0JBQXdCLDBCQUEwQixLQUFLLG1CQUFtQixtQkFBbUIsS0FBSywyQkFBMkIseUJBQXlCLEtBQUssd0JBQXdCLDBCQUEwQixxQ0FBcUMsS0FBSyxtQkFBbUI7QUFDOWtMO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk92QyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dCO0FBQ087QUFDTjtBQUNNO0FBQ0Y7O0FBRTFDO0FBQ0EsSUFBTS9ELE9BQU8sR0FBR3FCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQzs7QUFFbkQ7QUFDSSxJQUFNMkMsV0FBVyxHQUFHLElBQUl2RSxvREFBUSxDQUFDLGNBQWMsRUFBQyx1Q0FBdUMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDO0FBQzdILElBQU13RSxZQUFZLEdBQUcsSUFBSXhFLG9EQUFRLENBQUMsbUJBQW1CLEVBQUMsMkZBQTJGLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQztBQUN2TCxJQUFNeUUsWUFBWSxHQUFHLElBQUl6RSxvREFBUSxDQUFDLHlCQUF5QixFQUFDLHVQQUF1UCxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7QUFDelYsSUFBTTBFLFlBQVksR0FBRyxJQUFJMUUsb0RBQVEsQ0FBQyxxQ0FBcUMsRUFBQyxtTEFBbUwsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDO0FBQ2pTLElBQU0yRSxnQkFBZ0IsR0FBRyxJQUFJM0Usb0RBQVEsQ0FBQyx3QkFBd0IsRUFBQywyREFBMkQsRUFBQyxhQUFhLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDO0FBQ2hLLElBQU00RSxRQUFRLEdBQUcsSUFBSTVFLG9EQUFRLENBQUMsV0FBVyxFQUFDLGlDQUFpQyxFQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDO0FBQy9HLElBQU02RSxhQUFhLEdBQUcsSUFBSTdFLG9EQUFRLENBQUMscUJBQXFCLEVBQUMscURBQXFELEVBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUM7QUFFakoyRSxnQkFBZ0IsQ0FBQ25FLFNBQVMsR0FBRyxJQUFJO0FBQ2pDcUUsYUFBYSxDQUFDckUsU0FBUyxHQUFHLElBQUk7QUFFOUIsSUFBSW9ELFFBQVEsR0FBRyxDQUFDVyxXQUFXLEVBQUVLLFFBQVEsRUFBRUQsZ0JBQWdCLEVBQUVFLGFBQWEsRUFBRUwsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLFlBQVksQ0FBQztBQUNqSEksT0FBTyxDQUFDQyxHQUFHLENBQUNuQixRQUFRLENBQUM7QUFFckJJLFlBQVksQ0FBQ2dCLEtBQUssQ0FBQyxDQUFDO0FBQ3BCcEIsUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQ2pFLFFBQVEsRUFBSztFQUMzQmdFLFlBQVksQ0FBQ2lCLE9BQU8sQ0FBQ2pGLFFBQVEsQ0FBQ2tGLFNBQVMsRUFBRXRGLElBQUksQ0FBQ0MsU0FBUyxDQUFDRyxRQUFRLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUM7O0FBRUY7QUFDSjtBQUNBMkQseURBQVksQ0FBQ0MsUUFBUSxFQUFFdEQsT0FBTyxDQUFDMEIsS0FBSyxDQUFDOztBQUVyQztBQUNBMUIsT0FBTyxDQUFDNkUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07RUFDckN4Qix5REFBWSxDQUFDQyxRQUFRLEVBQUV0RCxPQUFPLENBQUMwQixLQUFLLENBQUM7QUFDekMsQ0FBQyxDQUFDOztBQUVGO0FBQ0FMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUN1RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN6RSxJQUFNQyxVQUFVLEdBQUd6RCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDeER3RCxVQUFVLENBQUNoRCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7RUFDdkMrQyxVQUFVLENBQUNoRCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDNUMsQ0FBQyxDQUFDOztBQUVGO0FBQ0FWLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDdUQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDbEUsSUFBSXpELFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQzFELElBQUlILEtBQUssR0FBR2EsMERBQWEsQ0FBQ1osWUFBWSxFQUFFcEIsT0FBTyxDQUFDO0VBQ2hEa0IsdURBQVUsQ0FBQ0MsS0FBSyxFQUFFQyxZQUFZLENBQUM7RUFDL0JpQyx5REFBWSxDQUFDQyxRQUFRLEVBQUV0RCxPQUFPLENBQUMwQixLQUFLLENBQUM7QUFDekMsQ0FBQyxDQUFDOztBQUVGO0FBQ0FMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDdUQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDOUQsSUFBR3hELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDSSxLQUFLLEVBQUU7SUFDNUMsSUFBTXFELFdBQVcsR0FBRyxJQUFJckYsb0RBQVEsQ0FDNUIyQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQ0ksS0FBSyxFQUMzQ0wsUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0ksS0FBSyxFQUNoREwsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUNJLEtBQUssRUFDeENMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDcUIsT0FBTyxFQUMzQzNDLE9BQU8sQ0FBQzBCLEtBQUssQ0FBQztJQUNsQlcsMERBQWEsQ0FBQzBDLFdBQVcsQ0FBQztJQUMxQnpCLFFBQVEsQ0FBQ3RFLElBQUksQ0FBQytGLFdBQVcsQ0FBQztJQUMxQnJCLFlBQVksQ0FBQ2lCLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDSCxTQUFTLEVBQUV0RixJQUFJLENBQUNDLFNBQVMsQ0FBQ3dGLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ25GLElBQUksQ0FBQzBFLEtBQUssQ0FBQ04sWUFBWSxDQUFDc0IsT0FBTyxDQUFDRCxXQUFXLENBQUNILFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDcEVKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixZQUFZLENBQUN2RixNQUFNLENBQUM7SUFDaENxRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sV0FBVyxDQUFDSCxTQUFTLENBQUM7RUFDdEM7QUFDSixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFNSyxTQUFTLEdBQUc1RCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDdEQyRCxTQUFTLENBQUNKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDSyxPQUFPLEVBQUs7RUFDN0MsSUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE1BQU0sQ0FBQ0MsVUFBVTtFQUN4QztFQUNBLElBQUdILE9BQU8sQ0FBQ0UsTUFBTSxDQUFDdEQsU0FBUyxDQUFDd0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQzVDaEMsUUFBUSxHQUFHQSxRQUFRLENBQUNpQyxNQUFNLENBQUMsVUFBQUMsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ1osU0FBUyxJQUFJTyxNQUFNLENBQUNyRyxFQUFFO0lBQUEsRUFBQztJQUMvRHFHLE1BQU0sQ0FBQ00sTUFBTSxDQUFDLENBQUM7RUFDbkI7RUFDQTtFQUNBLElBQUdQLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDdEQsU0FBUyxDQUFDd0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQzNDLElBQUlJLFdBQVcsR0FBR3BDLFFBQVEsQ0FBQ3hGLEdBQUcsQ0FBQyxVQUFBNkgsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQ2YsU0FBUztJQUFBLEVBQUMsQ0FBQ2dCLE9BQU8sQ0FBQ1QsTUFBTSxDQUFDckcsRUFBRSxDQUFDO0lBQ25Fd0UsUUFBUSxDQUFDb0MsV0FBVyxDQUFDLENBQUN4RixTQUFTLEdBQUcsQ0FBQ29ELFFBQVEsQ0FBQ29DLFdBQVcsQ0FBQyxDQUFDRyxZQUFZO0lBQ3JFeEQsMERBQWEsQ0FBQ2lCLFFBQVEsQ0FBQ29DLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDUCxNQUFNLENBQUNNLE1BQU0sQ0FBQyxDQUFDO0VBQ25CO0VBQ0E7RUFDQSxJQUFHUCxPQUFPLENBQUNFLE1BQU0sQ0FBQ3RHLEVBQUUsS0FBSyxpQkFBaUIsRUFBQztJQUN2QztJQUNBLElBQUdvRyxPQUFPLENBQUNFLE1BQU0sQ0FBQ1Usa0JBQWtCLENBQUNDLGlCQUFpQixDQUFDakUsU0FBUyxDQUFDd0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQ3BGSixPQUFPLENBQUNFLE1BQU0sQ0FBQ3ZELFNBQVMsR0FBRyxhQUFhO0lBQzVDLENBQUMsTUFBTTtNQUNIcUQsT0FBTyxDQUFDRSxNQUFNLENBQUN2RCxTQUFTLEdBQUcsYUFBYTtJQUM1QztJQUNBLElBQU11QixhQUFhLEdBQUcvQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDOUQ4QixhQUFhLENBQUN0QixTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDMUNxQixhQUFhLENBQUN0QixTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDL0M7QUFDSixDQUFDLENBQUM7O0FBRUY7QUFDQVYsUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ3VELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3ZFLElBQU1tQixTQUFTLEdBQUczRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDdEQwRSxTQUFTLENBQUNsRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7RUFDdENpRSxTQUFTLENBQUNsRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDM0MsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hZGRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvY2hlY2tQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRQcm9qZWN0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24gPSBcIiBcIiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRhc2tJRCA9IFwiaWRcIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldER1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldENvbXBsZXRlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldFByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0VGFza0lEKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tJRFxyXG4gICAgfVxyXG5cclxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuICAgIHNldCBjb21wbGV0ZWQoY29tcGxldGVkKSB7XHJcbiAgICAgICAgdGhpcy5fY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IHByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyB0aW1lTGVmdCgpIHtcclxuICAgIC8vICAgICBpZihkdWVEYXRlKSB7XHJcbiAgICAvLyAgICAgICAgIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiAobm93LmdldFRpbWUoKSAtIHRoaXMuZHVlRGF0ZS5nZXRUaW1lKCkpLzM2MDAwO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QodmFsaWQsIHByb2plY3RJbnB1dCkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xyXG5cclxuICAgIGxldCBwcm9qZWN0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEVycm9yJyk7XHJcbiAgICBpZih2YWxpZCkge1xyXG4gICAgICAgIC8vQ3JlYXRlcyBuZXcgcHJvamVjdCB3aXRoIHN1cHBsaWVkIG5hbWUgYW5kIGFkZHMgaXQgdG8gdGhlIHNlbGVjdCBib3hcclxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG5ld1Byb2plY3QudmFsdWUgPSBwcm9qZWN0SW5wdXQudmFsdWUgKyBcIlByb2plY3RcIjtcclxuICAgICAgICBuZXdQcm9qZWN0LnRleHQgPSBwcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgICAgICAgcHJvamVjdC5hZGQobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICAgIC8vTWFrZXMgbmV3UHJvamVjdCB0aGUgYWN0aXZlIHByb2plY3RcclxuICAgICAgICBwcm9qZWN0LnZhbHVlID0gbmV3UHJvamVjdC52YWx1ZTtcclxuICAgICAgICBwcm9qZWN0RXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0QWRkJykuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTsgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RFcnJvci5pbm5lckhUTUwgPSBcIlByb2plY3QgbmFtZSBpbiB1c2UuXCI7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1Byb2plY3RzKHByb2plY3RJbnB1dCwgcHJvamVjdCkge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAvL0NoZWNrcyB0aGUgcHJvamVjdHMgaW4gdGhlIDxzZWxlY3Q+IGJveCB0byBzZWUgaWYgb25lIGV4aXN0cyB3aXRoIHRoZSBzYW1lIG5hbWVcclxuICAgIGZvcihsZXQgaT0wIDsgaTxwcm9qZWN0Lm9wdGlvbnMubGVuZ3RoIDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3Qub3B0aW9uc1tpXS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0SW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZXhpc3RpbmdQcm9qZWN0LnNsaWNlKDAsIC03KSAmJiB2YWxpZCkge1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL1JldHVybnMgdHJ1ZSBpZiB0aGUgcHJvamVjdCBoYXMgdW5pcXVlIG5hbWUsIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlXHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn0iLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL3RyYXNoLWNhbi1vdXRsaW5lLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludExpc3RJdGVtKExpc3RJdGVtKSB7XHJcblxyXG4gICAgLy9FbmNsb3NlcyBhbGwgdGFza3MgaW4gYSBkaXYgd2l0aCBhIHVuaXF1ZSBpZCBhbmQgc2hhcmVkIGNsYXNzXHJcbiAgICBjb25zdCBuZXdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3RW50cnkuY2xhc3NOYW1lID0gXCJlbnRyeVwiO1xyXG4gICAgbmV3RW50cnkuaWQgPSBMaXN0SXRlbS5fVGFza0lEO1xyXG5cclxuICAgIC8vQ3JlYXRlIGNoZWNrYm94IGZvciBtYXJraW5nIHRhc2tzIGFzIGNvbXBsZXRlIChvciB1bi1tYXJraW5nKVxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBMaXN0SXRlbS5fY29tcGxldGVkO1xyXG4gICAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICAgIC8vQ3JlYXRlIGxhYmVsIHdpdGggdGhlIHRhc2sncyB0aXRsZSBhbmQgaGlnaGxpZ2h0cyBpdCBpZiBpdCdzIGEgcHJpb3JpdHlcclxuICAgIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5ld0xhYmVsLmlubmVySFRNTCA9IExpc3RJdGVtLl90aXRsZTtcclxuICAgIG5ld0xhYmVsLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcclxuICAgIGlmKExpc3RJdGVtLl9wcmlvcml0eSl7XHJcbiAgICAgICAgbmV3TGFiZWwuY2xhc3NOYW1lICs9IFwiIHByaW9yaXR5XCI7XHJcbiAgICB9XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XHJcblxyXG4gICAgLy9BZGQgZGVzY3JpcHRpb24uIElmIG5vIGRlc2NyaXB0aW9uIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlc2NyaXB0aW9uVGV4dC5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XHJcbiAgICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gTGlzdEl0ZW0uX2Rlc2NyaXB0aW9uO1xyXG4gICAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcclxuXHJcbiAgICAvL0FkZCBkdWUgZGF0ZS4gSWYgbm8gZGF0ZSBpcyBzdXBwbGllZCBmaWVsZCB3aWxsIGJlIGJsYW5rXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBMaXN0SXRlbS5fZHVlRGF0ZTtcclxuICAgIGR1ZURhdGUuY2xhc3NOYW1lID0gXCJkdWVEYXRlXCI7XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuXHJcbiAgICAvL0FkZCBidXR0b24gdG8gZGVsZXRlIHRhc2tcclxuICAgIC8vIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVCdG4uc3JjID0gZGVsZXRlSWNvbjtcclxuICAgIC8vIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiO1xyXG4gICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICAgIC8vQWRkcyB0YXNrIHRvIGFwcHJvcHJpYXRlIGRpdiBkZXBlbmRpbmcgb24gd2hldGhlciBpdCdzIG1hcmtlZCBjb21wbGV0ZVxyXG4gICAgaWYoIUxpc3RJdGVtLl9jb21wbGV0ZWQpe1xyXG4gICAgICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwiXCIpO1xyXG4gICAgICAgIHRkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHByaW50TGlzdEl0ZW0gZnJvbSBcIi4vcHJpbnRMaXN0SXRlbVwiO1xyXG5cclxuY29uc3QgdGRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkTGlzdCcpO1xyXG5jb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRlZExpc3QnKTtcclxuXHJcbi8vQ2hlY2tzIGxpc3Qgb2YgdG8tZG8ncyBhbmQgcHJpbnRzIGVhY2ggb25lIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCBwcm9qZWN0XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50UHJvamVjdChmdWxsTGlzdCwgdmFsdWUpIHtcclxuICAgIHRkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29tcGxldGVkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgLy8gZnVsbExpc3QuZm9yRWFjaChMaXN0SXRlbSA9PiB7XHJcbiAgICAvLyAgICAgaWYoTGlzdEl0ZW0uZ2V0UHJvamVjdCA9PT0gdmFsdWUpe1xyXG4gICAgLy8gICAgICAgICBwcmludExpc3RJdGVtKExpc3RJdGVtKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0SXRlbVwiKVxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhMaXN0SXRlbSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSlcclxuICAgIE9iamVjdC5lbnRyaWVzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpLmZvckVhY2goKFtrZXksdmFsXSkgPT4ge1xyXG4gICAgICAgIGlmKEpTT04ucGFyc2UodmFsKS5fcHJvamVjdCA9PT0gdmFsdWUpe1xyXG4gICAgICAgICAgICBwcmludExpc3RJdGVtKEpTT04ucGFyc2UodmFsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwZW0sIDIwZW0pIGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIC40ZnIgLjI1ZnIgLjRmciAxZnIgM2ZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCA1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxufVxyXG5cclxuI3Byb2plY3RGb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4jcHJvamVjdHNMYWJlbCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgMS41ZW07XHJcbn1cclxuXHJcbiNwcm9qZWN0cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgbWFyZ2luOiAwIDEuNWVtO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuI3Byb2plY3RGb3JtQnV0dG9uIHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbiNwcm9qZWN0V3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4jcHJvamVjdEFkZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzAlOyBcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG59XHJcblxyXG4jbmV3UHJvamVjdCB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI3Byb2plY3RBZGQgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59IFxyXG5cclxuI2lucHV0Rm9ybUJ1dHRvbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbiNpbnB1dFdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2lucHV0Rm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbn1cclxuXHJcbiNpbnB1dEZvcm0uZXhwYW5kZWQsICNwcm9qZWN0QWRkLmV4cGFuZGVkLCAjY29tcGxldGVkTGlzdC5leHBhbmRlZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4jdGl0bGVJbnB1dCB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XHJcbn1cclxuXHJcbiNkZXNjcmlwdGlvbkZvcm0ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4jZHVlRGF0ZSB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbn1cclxuXHJcblxyXG4jZHVlRGF0ZUxhYmVsIHtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcclxufVxyXG5cclxuI3ByaW9yaXR5RGl2IHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcclxufVxyXG5cclxuI3ByaW9yaXR5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbiNkdWVEYXRlTGFiZWwsICNwcmlvcml0eUxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbiNhZGRCdG4ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNlODtcclxufVxyXG5cclxuI3RkTGlzdCwgI2NvbXBsZXRlZExpc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1ZW0sIDFmcikpO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZW50cnl7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgIFwiY2hlY2sgdGl0bGUgdGl0bGUgZHVlRGF0ZVwiXHJcbiAgICAgICAgXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgXCIuIC4gLiBkZWxldGVcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBnYXA6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMDhhO1xyXG59XHJcblxyXG4uZW50cnkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2tcclxufVxyXG5cclxuLmNoZWNrIHtcclxuICAgIGdyaWQtYXJlYTogY2hlY2s7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGdyaWQtYXJlYTogdGl0bGU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi5kdWVEYXRlIHtcclxuICAgIGdyaWQtYXJlYTogZHVlRGF0ZTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbn1cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4jY29tcGxldGVkV3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jY29tcGxldGVkTGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxRQUFRO0lBQ1IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztJQUNULHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdDQUF3QztJQUN4Qzs7O3NCQUdrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixNQUFNO0lBQ04seUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTBlbSwgMjBlbSkgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAuNGZyIC4yNWZyIC40ZnIgMWZyIDNmcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luOiAwIDUlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdEZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0c0xhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbjogMCAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gICAgbWFyZ2luOiAwIDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdEZvcm1CdXR0b24ge1xcclxcbiAgICB3aWR0aDogNTUlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgbWFyZ2luOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RXcmFwcGVyIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdEFkZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0zMCU7IFxcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3UHJvamVjdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0QWRkIHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQsIHRleHRhcmVhIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufSBcXHJcXG5cXHJcXG4jaW5wdXRGb3JtQnV0dG9uIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0V3JhcHBlciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNpbnB1dEZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRGb3JtLmV4cGFuZGVkLCAjcHJvamVjdEFkZC5leHBhbmRlZCwgI2NvbXBsZXRlZExpc3QuZXhwYW5kZWQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGl0bGVJbnB1dCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXHJcXG59XFxyXFxuXFxyXFxuI2Rlc2NyaXB0aW9uRm9ybSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZHVlRGF0ZSB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2R1ZURhdGVMYWJlbCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5RGl2IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJpb3JpdHkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbiNkdWVEYXRlTGFiZWwsICNwcmlvcml0eUxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZEJ0biB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNlODtcXHJcXG59XFxyXFxuXFxyXFxuI3RkTGlzdCwgI2NvbXBsZXRlZExpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNWVtLCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudHJ5e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgIFxcXCJjaGVjayB0aXRsZSB0aXRsZSBkdWVEYXRlXFxcIlxcclxcbiAgICAgICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIlxcclxcbiAgICAgICAgXFxcIi4gLiAuIGRlbGV0ZVxcXCI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWYwOGE7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeSB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXFxyXFxufVxcclxcblxcclxcbi5jaGVjayB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2hlY2s7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlRGF0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZHVlRGF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHkge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcGxldGVkV3JhcHBlciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNjb21wbGV0ZWRMaXN0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL2FkZExpc3RJdGVtXCI7XG5pbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tICcuL2FkZFByb2plY3QnO1xuaW1wb3J0IGNoZWNrUHJvamVjdHMgZnJvbSAnLi9jaGVja1Byb2plY3RzJztcbmltcG9ydCBwcmludFByb2plY3QgZnJvbSAnLi9wcmludFByb2plY3QnO1xuXG4vLyBEb20gZWxlbWVudHMgdXNlZCBmb3IgYW5kIGluIGV2ZW50IGxpc3RlbmVyc1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuXG4vL0hhcmQtY29kZWQgZW50cmllcyB0byBzaW1wbGlmeSB0ZXN0aW5nLCB3aWxsIGJlIGRlbGV0ZWQgb25jZSBwcm9qZWN0IGlzIGZpbmlzaGVkXG4gICAgY29uc3QgZGVmYXVsdExpc3QgPSBuZXcgTGlzdEl0ZW0oXCJEZWZhdWx0IEl0ZW1cIixcIlRoaXMgaXMgYSBkZWZhdWx0IGl0ZW0gZm9yIGRlZmF1bHRpbmdcIixcIjA3LTAyLTIwMjNcIixmYWxzZSwgXCJkZWZhdWx0UHJvamVjdFwiKTtcbiAgICBjb25zdCBkZWZhdWx0TGlzdDIgPSBuZXcgTGlzdEl0ZW0oXCJBbHNvIGRlZmF1bHQgSXRlbVwiLFwiVGhpcyBpcyBhIGRlZmF1bHQgaXRlbSBmb3IgZGVmYXVsdGluZywgYnV0IHdpdGggYSBzbGlnaHRseSBsb25nZXIgc3RyaW5nIHRvIHRlc3Qgd3JhcHBpbmdcIixcIjA3LTAyLTIwMjNcIixmYWxzZSwgXCJkZWZhdWx0UHJvamVjdFwiKTtcbiAgICBjb25zdCBkZWZhdWx0TGlzdDMgPSBuZXcgTGlzdEl0ZW0oXCJMb3RzIG9mIGRlZmF1bHQgSXRlbShzKVwiLFwiVGhpcyBpcyBhIGRlZmF1bHQgaXRlbSBmb3IgZGVmYXVsdGluZywgYnV0IHdpdGggYW4gZXhjZXB0aW9uYWxseSBsb25nIHN0cmluZyBzbyB0aGF0IEkgY2FuIHRlc3QgdGV4dCB3cmFwcGluZyBhbmQgcG90ZW50aWFsbHkgY29uY2F0ZW5hdGluZywgd2hpY2ggSSdtIG5vdCBlbnRpcmVseSBzdXJlIGhvdyB0byBpbXBsZW1lbnQgeWV0IGJ1dCB3aGljaCBJIHdpbGwgYWxzbyBoYXZlIHRvIGZpZ3VyZSBvdXQgYXQgc29tZSBwb2ludC5cIixcIjA3LTAyLTIwMjNcIixmYWxzZSwgXCJkZWZhdWx0UHJvamVjdFwiKTtcbiAgICBjb25zdCBkZWZhdWx0TGlzdDQgPSBuZXcgTGlzdEl0ZW0oXCJHZXR0aW5nIHNpY2sgb2YgdGhlc2UgZGVmYXVsdCBJdGVtc1wiLFwiQXMgaXQgdHVybnMgb3V0IHRoYXQgc3RyaW5nIHdhc24ndCBxdWl0ZSBhcyBleGNlcHRpb25hbGx5IGxvbmcgYXMgSSBoYWQgaG9wZWQsIGJ1dCBJIHRoaW5rIEknbSBqdXN0IGdvaW5nIHRvIGxpbWl0IHRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBpbiB0aGUgZGVzY3JpcHRpb24gYW5kIGNhbGwgaXQgYSBkYXkuXCIsXCIwNy0wMi0yMDIzXCIsZmFsc2UsIFwiZGVmYXVsdFByb2plY3RcIik7XG4gICAgY29uc3QgZGVmYXVsdENvbXBsZXRlZCA9IG5ldyBMaXN0SXRlbShcIkRlZmF1bHQgY29tcGxldGVkIEl0ZW1cIixcIlRoaXMgaXMgYSBjb21wbGV0ZWQgZGVmYXVsdCBpdGVtIGZvciBjb21wbGV0ZWQgZGVmYXVsdGluZ1wiLFwiMDEtMDEyLTIwMDFcIix0cnVlLCBcImRlZmF1bHRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IHRlc3RMaXN0ID0gbmV3IExpc3RJdGVtKFwiVGVzdCBJdGVtXCIsXCJUaGlzIGlzIGEgdGVzdCBpdGVtIGZvciB0ZXN0aW5nXCIsXCIwOS0xMS0yMDUwXCIsIGZhbHNlLCBcInRlc3RQcm9qZWN0XCIpO1xuICAgIGNvbnN0IHRlc3RDb21wbGV0ZWQgPSBuZXcgTGlzdEl0ZW0oXCJUZXN0IGNvbXBsZXRlZCBJdGVtXCIsXCJUaGlzIGlzIGEgY29tcGxldGVkIHRlc3QgaXRlbSBmb3IgY29tcGxldGVkIHRlc3RpbmdcIixcIjExLTExLTExMTFcIiwgdHJ1ZSwgXCJ0ZXN0UHJvamVjdFwiKVxuXG4gICAgZGVmYXVsdENvbXBsZXRlZC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRlc3RDb21wbGV0ZWQuY29tcGxldGVkID0gdHJ1ZTtcblxuICAgIGxldCBmdWxsTGlzdCA9IFtkZWZhdWx0TGlzdCwgdGVzdExpc3QsIGRlZmF1bHRDb21wbGV0ZWQsIHRlc3RDb21wbGV0ZWQsIGRlZmF1bHRMaXN0MiwgZGVmYXVsdExpc3QzLCBkZWZhdWx0TGlzdDRdO1xuICAgIGNvbnNvbGUubG9nKGZ1bGxMaXN0KVxuXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICBmdWxsTGlzdC5mb3JFYWNoKChMaXN0SXRlbSkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMaXN0SXRlbS5nZXRUYXNrSUQsIEpTT04uc3RyaW5naWZ5KExpc3RJdGVtKSk7XG4gICAgfSlcblxuICAgIC8vIE9iamVjdC5lbnRyaWVzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpLmZvckVhY2goKCkpXG4vL1ByaW50cyBjb250ZW50cyBvZiBkZWZhdWx0IHByb2plY3Qgb24gcGFnZSBsb2FkXG5wcmludFByb2plY3QoZnVsbExpc3QsIHByb2plY3QudmFsdWUpO1xuXG4vL1ByaW50cyBjb250ZW50cyBvZiBzZWxlY3RlZCBwcm9qZWN0IHdoZW4gc2VsZWN0aW9uIGlzIGNoYW5nZWRcbnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG59KVxuXG4vL0V4cGFuZHMgb3IgY29sbGFwc2VzIHRoZSBmb3JtIGZvciBhZGRpbmcgYSBwcm9qZWN0IHdoZW4gYnV0dG9uIGlzIHByZXNzZWRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFkZCcpO1xuICAgIHByb2plY3RBZGQuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICBwcm9qZWN0QWRkLmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlZCcpO1xufSlcblxuLy9DcmVhdGVzIG5ldyBwcm9qZWN0IHdoZW4gJ05ldyBQcm9qZWN0JyBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbnB1dCcpO1xuICAgIGxldCB2YWxpZCA9IGNoZWNrUHJvamVjdHMocHJvamVjdElucHV0LCBwcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0KHZhbGlkLCBwcm9qZWN0SW5wdXQpO1xuICAgIHByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG59KVxuXG4vL0NyZWF0ZXMgYSBuZXcsIHVuY29tcGxldGVkIHRhc2sgd2hlbiAnQWRkJyBidXR0b24gaXMgcHJlc3NlZCBJRiB0aXRsZSBpcyBwcmVzZW50XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSW5wdXQnKS52YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdMaXN0SXRlbSA9IG5ldyBMaXN0SXRlbShcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlucHV0JykudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25Gb3JtJykudmFsdWUsXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykuY2hlY2tlZCxcbiAgICAgICAgICAgIHByb2plY3QudmFsdWUpO1xuICAgICAgICBwcmludExpc3RJdGVtKG5ld0xpc3RJdGVtKTtcbiAgICAgICAgZnVsbExpc3QucHVzaChuZXdMaXN0SXRlbSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld0xpc3RJdGVtLmdldFRhc2tJRCwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdEl0ZW0pKTtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuZXdMaXN0SXRlbS5nZXRUYXNrSUQpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0xpc3RJdGVtLmdldFRhc2tJRCk7XG4gICAgfVxufSlcblxuLy9MaXN0ZW5zIGZvciBhbnkgY2xpY2tzIHdpdGhpbiB0aGUgdGFza3MgY29udGFpbmVyLlxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIC8vSWYgZGVsZXRlIGJ1dHRvbiBpcyBjbGlja2VkLCBkZWxldGVzIHRhc2suXG4gICAgaWYoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSkge1xuICAgICAgICBmdWxsTGlzdCA9IGZ1bGxMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suZ2V0VGFza0lEICE9IHBhcmVudC5pZCk7XG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICB9XG4gICAgLy9JZiBjaGVja2JveCBpcyBjbGlja2VkLCB0b2dnbGVzICdjb21wbGV0ZWQnIGFuZCBtb3ZlcyB0YXNrIGZyb20gJ3Rhc2tzJyB0byAnY29tcGxldGVkJyBvciB2aWNlLXZlcnNhXG4gICAgaWYoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjaycpKSB7XG4gICAgICAgIGxldCB0b2dnbGVJbmRleCA9IGZ1bGxMaXN0Lm1hcChlID0+IGUuZ2V0VGFza0lEKS5pbmRleE9mKHBhcmVudC5pZCk7XG4gICAgICAgIGZ1bGxMaXN0W3RvZ2dsZUluZGV4XS5jb21wbGV0ZWQgPSAhZnVsbExpc3RbdG9nZ2xlSW5kZXhdLmdldENvbXBsZXRlZDtcbiAgICAgICAgcHJpbnRMaXN0SXRlbShmdWxsTGlzdFt0b2dnbGVJbmRleF0pXG4gICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICB9XG4gICAgLy9JZiAnQ29tcGxldGVkJyBoZWFkZXIgaXMgY2xpY2tlZCwgZXhwYW5kcyB0aGUgbGlzdCBvZiBjb21wbGV0ZWQgdGFza3NcbiAgICBpZihlbGVtZW50LnRhcmdldC5pZCA9PT0gXCJleHBhbmRDb21wbGV0ZWRcIil7XG4gICAgICAgIC8vUmlkaWN1bG91cyBjaGFpbmVkIERPTSBsaXN0IHBvaW50cyB0byB0aGUgY29tcGxldGVkTGlzdCBkaXYgdG8gY2hlY2sgaWYgaXQncyBjb2xsYXBzZWRcbiAgICAgICAgaWYoZWxlbWVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudGFyZ2V0LmlubmVySFRNTCA9IFwiQ29tcGxldGVkIOKWv1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnRhcmdldC5pbm5lckhUTUwgPSBcIkNvbXBsZXRlZCDilrhcIlxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGVkTGlzdCcpO1xuICAgICAgICBjb21wbGV0ZWRMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgICAgIGNvbXBsZXRlZExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJyk7XG4gICAgfVxufSlcblxuLy9FeHBhbmRzIG9yIGNvbGxhcHNlcyBmb3JtIGZvciBhZGRpbmcgYSBuZXcgdGFzayB3aGVuIGJ1dHRvbiBpcyBwcmVzc2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRGb3JtQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Rm9ybScpO1xuICAgIGlucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgIGlucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcbn0pIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsIkxpc3RJdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFyZ3VtZW50cyIsImR1ZURhdGUiLCJwcmlvcml0eSIsInByb2plY3QiLCJfY2xhc3NDYWxsQ2hlY2siLCJjb21wbGV0ZWQiLCJ0YXNrSUQiLCJNYXRoIiwicmFuZG9tIiwic2xpY2UiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnZXQiLCJfdGl0bGUiLCJfZGVzY3JpcHRpb24iLCJfZHVlRGF0ZSIsIl9wcmlvcml0eSIsIl9jb21wbGV0ZWQiLCJfcHJvamVjdCIsInNldCIsImRlZmF1bHQiLCJhZGRQcm9qZWN0IiwidmFsaWQiLCJwcm9qZWN0SW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJvamVjdEVycm9yIiwibmV3UHJvamVjdCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInRleHQiLCJhZGQiLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjaGVja1Byb2plY3RzIiwib3B0aW9ucyIsImV4aXN0aW5nUHJvamVjdCIsInRvTG93ZXJDYXNlIiwiZGVsZXRlSWNvbiIsInByaW50TGlzdEl0ZW0iLCJuZXdFbnRyeSIsImNsYXNzTmFtZSIsIl9UYXNrSUQiLCJjaGVja2JveCIsInR5cGUiLCJjaGVja2VkIiwiYXBwZW5kQ2hpbGQiLCJuZXdMYWJlbCIsImRlc2NyaXB0aW9uVGV4dCIsImRlbGV0ZUJ0biIsInNyYyIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0ZExpc3QiLCJjb21wbGV0ZWRMaXN0IiwicHJpbnRQcm9qZWN0IiwiZnVsbExpc3QiLCJPYmplY3QiLCJlbnRyaWVzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZm9yRWFjaCIsIl9yZWYiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwidmFsIiwicGFyc2UiLCJkZWZhdWx0TGlzdCIsImRlZmF1bHRMaXN0MiIsImRlZmF1bHRMaXN0MyIsImRlZmF1bHRMaXN0NCIsImRlZmF1bHRDb21wbGV0ZWQiLCJ0ZXN0TGlzdCIsInRlc3RDb21wbGV0ZWQiLCJjb25zb2xlIiwibG9nIiwiY2xlYXIiLCJzZXRJdGVtIiwiZ2V0VGFza0lEIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2plY3RBZGQiLCJuZXdMaXN0SXRlbSIsImdldEl0ZW0iLCJjb250YWluZXIiLCJlbGVtZW50IiwicGFyZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNvbnRhaW5zIiwiZmlsdGVyIiwidGFzayIsInJlbW92ZSIsInRvZ2dsZUluZGV4IiwiZSIsImluZGV4T2YiLCJnZXRDb21wbGV0ZWQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlucHV0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=