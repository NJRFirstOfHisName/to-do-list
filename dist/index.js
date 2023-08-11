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
/* eslint-disable no-underscore-dangle */
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
    this.taskID = "id".concat(Math.random().toString(16).slice(2));
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
  var project = document.getElementById("projects");
  var projectError = document.getElementById("projectError");
  if (valid) {
    // Creates new project with supplied name and adds it to the select box
    var newProject = document.createElement("option");
    newProject.value = "".concat(projectInput.value, "Project");
    newProject.text = projectInput.value;
    project.add(newProject);

    // Makes newProject the active project
    project.value = newProject.value;
    projectError.innerHTML = "";
    projectInput.value = "";
    document.getElementById("projectAdd").classList.toggle("expanded");
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

  // Checks the projects in the <select> box to see if one exists with the same name
  for (var i = 0; i < project.options.length; i += 1) {
    var existingProject = project.options[i].value.toLowerCase();
    if (projectInput.value.toLowerCase() === existingProject.slice(0, -7) && valid) {
      valid = false;
    }
  }

  // Returns true if the project has unique name, otherwise returns false
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
  // Encloses all tasks in a div with a unique id and shared class
  var newEntry = document.createElement("div");
  newEntry.className = "entry";
  newEntry.id = ListItem.getTaskID;

  // Create checkbox for marking tasks as complete (or un-marking)
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "check";
  checkbox.checked = ListItem.getCompleted;
  newEntry.appendChild(checkbox);

  // Create label with the task's title and highlights it if it's a priority
  var newLabel = document.createElement("label");
  newLabel.innerHTML = ListItem.getTitle;
  newLabel.className = "title";
  if (ListItem.getPriority) {
    newLabel.className += " priority";
  }
  newEntry.appendChild(newLabel);

  // Add description. If no description is supplied field will be blank
  var descriptionText = document.createElement("p");
  descriptionText.className = "description";
  descriptionText.innerHTML = ListItem.getDescription;
  newEntry.appendChild(descriptionText);

  // Add due date. If no date is supplied field will be blank
  var dueDate = document.createElement("p");
  dueDate.innerHTML = ListItem.getDueDate;
  dueDate.className = "dueDate";
  newEntry.appendChild(dueDate);

  // Add button to delete task
  // const deleteBtn = document.createElement('button');
  var deleteBtn = document.createElement("img");
  deleteBtn.src = _trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  // deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "delete";
  newEntry.appendChild(deleteBtn);

  // Adds task to appropriate div depending on whether it's marked complete
  if (!ListItem.getCompleted) {
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

var tdList = document.getElementById("tdList");
var completedList = document.getElementById("completedList");

// Checks list of to-do's and prints each one that matches the current project
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
    if (JSON.parse(val).getProject === value) {
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
  font-family: "Roboto", sans-serif;
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
  grid-template-rows: 0.5fr 0.4fr 0.25fr 0.4fr 1fr 3fr;
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
  transition: all 0.5s;
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

input,
textarea {
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

#inputForm.expanded,
#projectAdd.expanded,
#completedList.expanded {
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

#dueDateLabel,
#priorityLabel {
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

#tdList,
#completedList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 20px;
  background-color: white;
  padding: 10px;
}

.entry {
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 1fr;
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
  border: 1px solid black;
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
  transition: all 0.3s ease-out;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,SAAS;EACT,aAAa;EACb,8CAA8C;EAC9C,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,oDAAoD;EACpD,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,oBAAoB;EACpB,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,QAAQ;EACR,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,2DAA2D;EAC3D,SAAS;EACT,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC;;;kBAGgB;EAChB,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,MAAM;EACN,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;AAC/B","sourcesContent":["html {\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: minmax(10em, 20em) auto;\n  height: 100%;\n}\n\n#sidebar {\n  background-color: #fde047;\n  display: grid;\n  grid-template-rows: 0.5fr 0.4fr 0.25fr 0.4fr 1fr 3fr;\n  align-items: baseline;\n}\n\n#header {\n  margin: 0 5%;\n  font-weight: bold;\n  font-size: 50px;\n  justify-self: start;\n}\n\n#projectForm {\n  display: grid;\n  gap: 5px;\n  margin: 5px;\n}\n\n#projectsLabel {\n  font-size: large;\n  font-weight: bold;\n  margin: 0 1.5em;\n}\n\n#projects {\n  border: none;\n  font-size: large;\n  width: 70%;\n  justify-self: end;\n  margin: 0 1.5em;\n}\n\nbutton {\n  background-color: white;\n  border: none;\n  justify-self: center;\n  height: 2em;\n  border-radius: 20px;\n  font-size: larger;\n  font-weight: 600;\n}\n\n#projectFormButton {\n  width: 55%;\n  align-self: baseline;\n  margin: 2%;\n}\n\n#projectWrapper {\n  overflow: hidden;\n  margin: 10px;\n}\n\n#projectAdd {\n  margin-top: -30%;\n  transition: all 0.5s;\n  align-items: center;\n  display: grid;\n  justify-content: center;\n  grid-template-rows: auto;\n}\n\n#newProject {\n  font-size: medium;\n  margin: 10px;\n}\n\n#projectAdd p {\n  text-align: center;\n  font-size: small;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  border-radius: 5px;\n}\n\n#inputFormButton {\n  align-self: end;\n  margin: 5px;\n  width: 45%;\n}\n\n#inputWrapper {\n  overflow: hidden;\n}\n\n#inputForm {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n  margin: 10px;\n  margin-top: -100%;\n  transition: all 1s;\n}\n\n#inputForm.expanded,\n#projectAdd.expanded,\n#completedList.expanded {\n  margin-top: 0;\n}\n\n#titleInput {\n  grid-column: 1 / 4;\n}\n\n#descriptionForm {\n  grid-column: 1 / 5;\n  resize: none;\n}\n\n#dueDate {\n  grid-column: 1 / 3;\n}\n\n#dueDateLabel {\n  grid-column: 3 / 5;\n}\n\n#priorityDiv {\n  grid-column: 1 / 5;\n}\n\n#priority {\n  position: relative;\n  vertical-align: middle;\n}\n\n#dueDateLabel,\n#priorityLabel {\n  font-size: small;\n}\n\n#addBtn {\n  grid-column: 2 / 4;\n  width: 50%;\n  font-size: medium;\n}\n\n#container {\n  width: 100%;\n  background-color: #fefce8;\n}\n\n#tdList,\n#completedList {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));\n  gap: 20px;\n  background-color: white;\n  padding: 10px;\n}\n\n.entry {\n  display: grid;\n  grid-template-columns: 0.25fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"check title title dueDate\"\n    \"description description description description\"\n    \". . . delete\";\n  border-radius: 10px;\n  margin: 5px;\n  padding: 10px;\n  gap: 0;\n  background-color: #fef08a;\n}\n\n.entry {\n  border: 1px solid black;\n}\n\n.check {\n  grid-area: check;\n  width: 15px;\n}\n\n.title {\n  grid-area: title;\n  align-self: center;\n  justify-self: start;\n  font-size: larger;\n}\n\n.dueDate {\n  grid-area: dueDate;\n}\n\n.description {\n  grid-area: description;\n}\n\n.delete {\n  grid-area: delete;\n  width: 20%;\n  align-self: end;\n  justify-self: end;\n}\n\n.priority {\n  color: red;\n}\n\n#completedWrapper {\n  overflow: hidden;\n}\n\n#completedList {\n  margin-top: -100%;\n  transition: all 0.3s ease-out;\n}\n"],"sourceRoot":""}]);
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
var project = document.getElementById("projects");
var fullList = [];
localStorage.clear();
fullList.forEach(function (LI) {
  localStorage.setItem(LI.getTaskID, JSON.stringify(LI));
});

// Object.entries(window.localStorage).forEach(())
// Prints contents of default project on page load
(0,_printProject__WEBPACK_IMPORTED_MODULE_5__["default"])(fullList, project.value);

// Prints contents of selected project when selection is changed
project.addEventListener("change", function () {
  (0,_printProject__WEBPACK_IMPORTED_MODULE_5__["default"])(fullList, project.value);
});

// Expands or collapses the form for adding a project when button is pressed
document.getElementById("projectFormButton").addEventListener("click", function () {
  var projectAdd = document.getElementById("projectAdd");
  projectAdd.classList.toggle("expanded");
  projectAdd.classList.toggle("collapsed");
});

// Creates new project when 'New Project' button is pressed
document.getElementById("newProject").addEventListener("click", function () {
  var projectInput = document.getElementById("projectInput");
  var valid = (0,_checkProjects__WEBPACK_IMPORTED_MODULE_4__["default"])(projectInput, project);
  (0,_addProject__WEBPACK_IMPORTED_MODULE_3__["default"])(valid, projectInput);
  (0,_printProject__WEBPACK_IMPORTED_MODULE_5__["default"])(fullList, project.value);
});

// Creates a new, uncompleted task when 'Add' button is pressed IF title is present
document.getElementById("addBtn").addEventListener("click", function () {
  if (document.getElementById("titleInput").value) {
    var newListItem = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"](document.getElementById("titleInput").value, document.getElementById("descriptionForm").value, document.getElementById("dueDate").value, document.getElementById("priority").checked, project.value);
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_2__["default"])(newListItem);
    fullList.push(newListItem);
    localStorage.setItem(newListItem.getTaskID, JSON.stringify(newListItem));
  }
});

// Listens for any clicks within the tasks container.
var container = document.getElementById("container");
container.addEventListener("click", function (element) {
  var parent = element.target.parentNode;
  // If delete button is clicked, deletes task.
  if (element.target.classList.contains("delete")) {
    fullList = fullList.filter(function (task) {
      return task.getTaskID != parent.id;
    });
    parent.remove();
  }
  // If checkbox is clicked, toggles 'completed' and moves task from 'tasks' to 'completed' or vice-versa
  if (element.target.classList.contains("check")) {
    var toggleIndex = fullList.map(function (e) {
      return e.getTaskID;
    }).indexOf(parent.id);
    fullList[toggleIndex].completed = !fullList[toggleIndex].getCompleted;
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_2__["default"])(fullList[toggleIndex]);
    parent.remove();
  }
  // If 'Completed' header is clicked, expands the list of completed tasks
  if (element.target.id === "expandCompleted") {
    // Ridiculous chained DOM list points to the completedList div to check if it's collapsed
    if (element.target.nextElementSibling.firstElementChild.classList.contains("collapsed")) {
      element.target.innerHTML = "Completed ▿";
    } else {
      element.target.innerHTML = "Completed ▸";
    }
    var completedList = document.getElementById("completedList");
    completedList.classList.toggle("expanded");
    completedList.classList.toggle("collapsed");
  }
});

// Expands or collapses form for adding a new task when button is pressed
document.getElementById("inputFormButton").addEventListener("click", function () {
  var inputForm = document.getElementById("inputForm");
  inputForm.classList.toggle("expanded");
  inputForm.classList.toggle("collapsed");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlB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QUFFO0lBQzNDO0lBQ0EsSUFDRWdHLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDUyxrQkFBa0IsQ0FBQ0MsaUJBQWlCLENBQUM1RCxTQUFTLENBQUNvRCxRQUFRLENBQ3BFLFdBQ0YsQ0FBQyxFQUNEO01BQ0FKLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDbkQsU0FBUyxHQUFHLGFBQWE7SUFDMUMsQ0FBQyxNQUFNO01BQ0xpRCxPQUFPLENBQUNFLE1BQU0sQ0FBQ25ELFNBQVMsR0FBRyxhQUFhO0lBQzFDO0lBQ0EsSUFBTTRCLGFBQWEsR0FBR3BDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUM5RG1DLGFBQWEsQ0FBQzNCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUMxQzBCLGFBQWEsQ0FBQzNCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQztFQUM3QztBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDb0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDekUsSUFBTWlCLFNBQVMsR0FBR3RFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUN0RHFFLFNBQVMsQ0FBQzdELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztFQUN0QzRELFNBQVMsQ0FBQzdELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUN6QyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FkZExpc3RJdGVtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jaGVja1Byb2plY3RzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludExpc3RJdGVtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiIFwiLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFza0lEID0gYGlkJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKX1gO1xuICB9XG5cbiAgZ2V0IGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgZ2V0RHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgfVxuXG4gIGdldCBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gIH1cblxuICBnZXQgZ2V0Q29tcGxldGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XG4gIH1cblxuICBnZXQgZ2V0UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgfVxuXG4gIGdldCBnZXRUYXNrSUQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza0lEO1xuICB9XG5cbiAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgc2V0IGNvbXBsZXRlZChjb21wbGV0ZWQpIHtcbiAgICB0aGlzLl9jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cblxuICBzZXQgcHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICAvLyB0aW1lTGVmdCgpIHtcbiAgLy8gICAgIGlmKGR1ZURhdGUpIHtcbiAgLy8gICAgICAgICBub3cgPSBuZXcgRGF0ZSgpO1xuICAvLyAgICAgICAgIHJldHVybiAobm93LmdldFRpbWUoKSAtIHRoaXMuZHVlRGF0ZS5nZXRUaW1lKCkpLzM2MDAwO1xuICAvLyAgICAgfVxuICAvLyB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KHZhbGlkLCBwcm9qZWN0SW5wdXQpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbiAgY29uc3QgcHJvamVjdEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0RXJyb3JcIik7XG4gIGlmICh2YWxpZCkge1xuICAgIC8vIENyZWF0ZXMgbmV3IHByb2plY3Qgd2l0aCBzdXBwbGllZCBuYW1lIGFuZCBhZGRzIGl0IHRvIHRoZSBzZWxlY3QgYm94XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbmV3UHJvamVjdC52YWx1ZSA9IGAke3Byb2plY3RJbnB1dC52YWx1ZX1Qcm9qZWN0YDtcbiAgICBuZXdQcm9qZWN0LnRleHQgPSBwcm9qZWN0SW5wdXQudmFsdWU7XG4gICAgcHJvamVjdC5hZGQobmV3UHJvamVjdCk7XG5cbiAgICAvLyBNYWtlcyBuZXdQcm9qZWN0IHRoZSBhY3RpdmUgcHJvamVjdFxuICAgIHByb2plY3QudmFsdWUgPSBuZXdQcm9qZWN0LnZhbHVlO1xuICAgIHByb2plY3RFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QWRkXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0RXJyb3IuaW5uZXJIVE1MID0gXCJQcm9qZWN0IG5hbWUgaW4gdXNlLlwiO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1Byb2plY3RzKHByb2plY3RJbnB1dCwgcHJvamVjdCkge1xuICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gIC8vIENoZWNrcyB0aGUgcHJvamVjdHMgaW4gdGhlIDxzZWxlY3Q+IGJveCB0byBzZWUgaWYgb25lIGV4aXN0cyB3aXRoIHRoZSBzYW1lIG5hbWVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0Lm9wdGlvbnNbaV0udmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZXhpc3RpbmdQcm9qZWN0LnNsaWNlKDAsIC03KSAmJlxuICAgICAgdmFsaWRcbiAgICApIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9qZWN0IGhhcyB1bmlxdWUgbmFtZSwgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcbiAgcmV0dXJuIHZhbGlkO1xufVxuIiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TGlzdEl0ZW0oTGlzdEl0ZW0pIHtcbiAgLy8gRW5jbG9zZXMgYWxsIHRhc2tzIGluIGEgZGl2IHdpdGggYSB1bmlxdWUgaWQgYW5kIHNoYXJlZCBjbGFzc1xuICBjb25zdCBuZXdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0VudHJ5LmNsYXNzTmFtZSA9IFwiZW50cnlcIjtcbiAgbmV3RW50cnkuaWQgPSBMaXN0SXRlbS5nZXRUYXNrSUQ7XG5cbiAgLy8gQ3JlYXRlIGNoZWNrYm94IGZvciBtYXJraW5nIHRhc2tzIGFzIGNvbXBsZXRlIChvciB1bi1tYXJraW5nKVxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJjaGVja1wiO1xuICBjaGVja2JveC5jaGVja2VkID0gTGlzdEl0ZW0uZ2V0Q29tcGxldGVkO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgLy8gQ3JlYXRlIGxhYmVsIHdpdGggdGhlIHRhc2sncyB0aXRsZSBhbmQgaGlnaGxpZ2h0cyBpdCBpZiBpdCdzIGEgcHJpb3JpdHlcbiAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5ld0xhYmVsLmlubmVySFRNTCA9IExpc3RJdGVtLmdldFRpdGxlO1xuICBuZXdMYWJlbC5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gIGlmIChMaXN0SXRlbS5nZXRQcmlvcml0eSkge1xuICAgIG5ld0xhYmVsLmNsYXNzTmFtZSArPSBcIiBwcmlvcml0eVwiO1xuICB9XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKG5ld0xhYmVsKTtcblxuICAvLyBBZGQgZGVzY3JpcHRpb24uIElmIG5vIGRlc2NyaXB0aW9uIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uVGV4dC5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uVGV4dC5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXREZXNjcmlwdGlvbjtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcblxuICAvLyBBZGQgZHVlIGRhdGUuIElmIG5vIGRhdGUgaXMgc3VwcGxpZWQgZmllbGQgd2lsbCBiZSBibGFua1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZURhdGUuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RHVlRGF0ZTtcbiAgZHVlRGF0ZS5jbGFzc05hbWUgPSBcImR1ZURhdGVcIjtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgLy8gQWRkIGJ1dHRvbiB0byBkZWxldGUgdGFza1xuICAvLyBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlQnRuLnNyYyA9IGRlbGV0ZUljb247XG4gIC8vIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJkZWxldGVcIjtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAvLyBBZGRzIHRhc2sgdG8gYXBwcm9wcmlhdGUgZGl2IGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0J3MgbWFya2VkIGNvbXBsZXRlXG4gIGlmICghTGlzdEl0ZW0uZ2V0Q29tcGxldGVkKSB7XG4gICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJcIik7XG4gICAgdGRMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgfSBlbHNlIHtcbiAgICBuZXdMYWJlbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcImxpbmUtdGhyb3VnaFwiKTtcbiAgICBjb21wbGV0ZWRMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHByaW50TGlzdEl0ZW0gZnJvbSBcIi4vcHJpbnRMaXN0SXRlbVwiO1xuXG5jb25zdCB0ZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRkTGlzdFwiKTtcbmNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZExpc3RcIik7XG5cbi8vIENoZWNrcyBsaXN0IG9mIHRvLWRvJ3MgYW5kIHByaW50cyBlYWNoIG9uZSB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcHJvamVjdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCB2YWx1ZSkge1xuICB0ZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29tcGxldGVkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAvLyBmdWxsTGlzdC5mb3JFYWNoKExpc3RJdGVtID0+IHtcbiAgLy8gICAgIGlmKExpc3RJdGVtLmdldFByb2plY3QgPT09IHZhbHVlKXtcbiAgLy8gICAgICAgICBwcmludExpc3RJdGVtKExpc3RJdGVtKTtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3RJdGVtXCIpXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coTGlzdEl0ZW0pO1xuICAvLyAgICAgfVxuICAvLyB9KVxuICBPYmplY3QuZW50cmllcyh3aW5kb3cubG9jYWxTdG9yYWdlKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgaWYgKEpTT04ucGFyc2UodmFsKS5nZXRQcm9qZWN0ID09PSB2YWx1ZSkge1xuICAgICAgcHJpbnRMaXN0SXRlbShKU09OLnBhcnNlKHZhbCkpO1xuICAgIH1cbiAgfSk7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwZW0sIDIwZW0pIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3NpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNGZyIDAuMjVmciAwLjRmciAxZnIgM2ZyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbiNoZWFkZXIge1xuICBtYXJnaW46IDAgNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbiNwcm9qZWN0Rm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuI3Byb2plY3RzTGFiZWwge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDEuNWVtO1xufVxuXG4jcHJvamVjdHMge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHdpZHRoOiA3MCU7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBtYXJnaW46IDAgMS41ZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNwcm9qZWN0Rm9ybUJ1dHRvbiB7XG4gIHdpZHRoOiA1NSU7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICBtYXJnaW46IDIlO1xufVxuXG4jcHJvamVjdFdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNwcm9qZWN0QWRkIHtcbiAgbWFyZ2luLXRvcDogLTMwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG59XG5cbiNuZXdQcm9qZWN0IHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3Byb2plY3RBZGQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNpbnB1dEZvcm1CdXR0b24ge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDUlO1xufVxuXG4jaW5wdXRXcmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2lucHV0Rm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbiNpbnB1dEZvcm0uZXhwYW5kZWQsXG4jcHJvamVjdEFkZC5leHBhbmRlZCxcbiNjb21wbGV0ZWRMaXN0LmV4cGFuZGVkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuI3RpdGxlSW5wdXQge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG59XG5cbiNkZXNjcmlwdGlvbkZvcm0ge1xuICBncmlkLWNvbHVtbjogMSAvIDU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuI2R1ZURhdGUge1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG59XG5cbiNkdWVEYXRlTGFiZWwge1xuICBncmlkLWNvbHVtbjogMyAvIDU7XG59XG5cbiNwcmlvcml0eURpdiB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcbn1cblxuI3ByaW9yaXR5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jZHVlRGF0ZUxhYmVsLFxuI3ByaW9yaXR5TGFiZWwge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4jYWRkQnRuIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2U4O1xufVxuXG4jdGRMaXN0LFxuI2NvbXBsZXRlZExpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNWVtLCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmVudHJ5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJjaGVjayB0aXRsZSB0aXRsZSBkdWVEYXRlXCJcbiAgICBcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXCJcbiAgICBcIi4gLiAuIGRlbGV0ZVwiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZ2FwOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMDhhO1xufVxuXG4uZW50cnkge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmNoZWNrIHtcbiAgZ3JpZC1hcmVhOiBjaGVjaztcbiAgd2lkdGg6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5kdWVEYXRlIHtcbiAgZ3JpZC1hcmVhOiBkdWVEYXRlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xufVxuXG4uZGVsZXRlIHtcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XG4gIHdpZHRoOiAyMCU7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5wcmlvcml0eSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiNjb21wbGV0ZWRXcmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2NvbXBsZXRlZExpc3Qge1xuICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsUUFBUTtFQUNSLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekM7OztrQkFHZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMGVtLCAyMGVtKSBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC40ZnIgMC4yNWZyIDAuNGZyIDFmciAzZnI7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgbWFyZ2luOiAwIDUlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0c0xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAxLjVlbTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICB3aWR0aDogNzAlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBtYXJnaW46IDAgMS41ZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jcHJvamVjdEZvcm1CdXR0b24ge1xcbiAgd2lkdGg6IDU1JTtcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI3Byb2plY3RXcmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0QWRkIHtcXG4gIG1hcmdpbi10b3A6IC0zMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdEFkZCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2lucHV0Rm9ybUJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBtYXJnaW46IDVweDtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbiNpbnB1dFdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2lucHV0Rm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogLTEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbiNpbnB1dEZvcm0uZXhwYW5kZWQsXFxuI3Byb2plY3RBZGQuZXhwYW5kZWQsXFxuI2NvbXBsZXRlZExpc3QuZXhwYW5kZWQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuI3RpdGxlSW5wdXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbn1cXG5cXG4jZGVzY3JpcHRpb25Gb3JtIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2R1ZURhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4jZHVlRGF0ZUxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNTtcXG59XFxuXFxuI3ByaW9yaXR5RGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbiNkdWVEYXRlTGFiZWwsXFxuI3ByaW9yaXR5TGFiZWwge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuI2FkZEJ0biB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2U4O1xcbn1cXG5cXG4jdGRMaXN0LFxcbiNjb21wbGV0ZWRMaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNWVtLCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmVudHJ5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJjaGVjayB0aXRsZSB0aXRsZSBkdWVEYXRlXFxcIlxcbiAgICBcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiXFxuICAgIFxcXCIuIC4gLiBkZWxldGVcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWYwOGE7XFxufVxcblxcbi5lbnRyeSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNoZWNrIHtcXG4gIGdyaWQtYXJlYTogY2hlY2s7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gIGdyaWQtYXJlYTogZHVlRGF0ZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5kZWxldGUge1xcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICB3aWR0aDogMjAlO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jY29tcGxldGVkV3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29tcGxldGVkTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL2FkZExpc3RJdGVtXCI7XG5pbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XG5pbXBvcnQgY2hlY2tQcm9qZWN0cyBmcm9tIFwiLi9jaGVja1Byb2plY3RzXCI7XG5pbXBvcnQgcHJpbnRQcm9qZWN0IGZyb20gXCIuL3ByaW50UHJvamVjdFwiO1xuXG4vLyBEb20gZWxlbWVudHMgdXNlZCBmb3IgYW5kIGluIGV2ZW50IGxpc3RlbmVyc1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbmxldCBmdWxsTGlzdCA9IFtdO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbmZ1bGxMaXN0LmZvckVhY2goKExJKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExJLmdldFRhc2tJRCwgSlNPTi5zdHJpbmdpZnkoTEkpKTtcbn0pO1xuXG4vLyBPYmplY3QuZW50cmllcyh3aW5kb3cubG9jYWxTdG9yYWdlKS5mb3JFYWNoKCgpKVxuLy8gUHJpbnRzIGNvbnRlbnRzIG9mIGRlZmF1bHQgcHJvamVjdCBvbiBwYWdlIGxvYWRcbnByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG5cbi8vIFByaW50cyBjb250ZW50cyBvZiBzZWxlY3RlZCBwcm9qZWN0IHdoZW4gc2VsZWN0aW9uIGlzIGNoYW5nZWRcbnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIHByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG59KTtcblxuLy8gRXhwYW5kcyBvciBjb2xsYXBzZXMgdGhlIGZvcm0gZm9yIGFkZGluZyBhIHByb2plY3Qgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QWRkXCIpO1xuICBwcm9qZWN0QWRkLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgcHJvamVjdEFkZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xufSk7XG5cbi8vIENyZWF0ZXMgbmV3IHByb2plY3Qgd2hlbiAnTmV3IFByb2plY3QnIGJ1dHRvbiBpcyBwcmVzc2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SW5wdXRcIik7XG4gIGNvbnN0IHZhbGlkID0gY2hlY2tQcm9qZWN0cyhwcm9qZWN0SW5wdXQsIHByb2plY3QpO1xuICBhZGRQcm9qZWN0KHZhbGlkLCBwcm9qZWN0SW5wdXQpO1xuICBwcmludFByb2plY3QoZnVsbExpc3QsIHByb2plY3QudmFsdWUpO1xufSk7XG5cbi8vIENyZWF0ZXMgYSBuZXcsIHVuY29tcGxldGVkIHRhc2sgd2hlbiAnQWRkJyBidXR0b24gaXMgcHJlc3NlZCBJRiB0aXRsZSBpcyBwcmVzZW50XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpLnZhbHVlKSB7XG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBuZXcgTGlzdEl0ZW0oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uRm9ybVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikuY2hlY2tlZCxcbiAgICAgIHByb2plY3QudmFsdWVcbiAgICApO1xuICAgIHByaW50TGlzdEl0ZW0obmV3TGlzdEl0ZW0pO1xuICAgIGZ1bGxMaXN0LnB1c2gobmV3TGlzdEl0ZW0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld0xpc3RJdGVtLmdldFRhc2tJRCwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdEl0ZW0pKTtcbiAgfVxufSk7XG5cbi8vIExpc3RlbnMgZm9yIGFueSBjbGlja3Mgd2l0aGluIHRoZSB0YXNrcyBjb250YWluZXIuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZWxlbWVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgLy8gSWYgZGVsZXRlIGJ1dHRvbiBpcyBjbGlja2VkLCBkZWxldGVzIHRhc2suXG4gIGlmIChlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbiAgICBmdWxsTGlzdCA9IGZ1bGxMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRUYXNrSUQgIT0gcGFyZW50LmlkKTtcbiAgICBwYXJlbnQucmVtb3ZlKCk7XG4gIH1cbiAgLy8gSWYgY2hlY2tib3ggaXMgY2xpY2tlZCwgdG9nZ2xlcyAnY29tcGxldGVkJyBhbmQgbW92ZXMgdGFzayBmcm9tICd0YXNrcycgdG8gJ2NvbXBsZXRlZCcgb3IgdmljZS12ZXJzYVxuICBpZiAoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tcIikpIHtcbiAgICBjb25zdCB0b2dnbGVJbmRleCA9IGZ1bGxMaXN0Lm1hcCgoZSkgPT4gZS5nZXRUYXNrSUQpLmluZGV4T2YocGFyZW50LmlkKTtcbiAgICBmdWxsTGlzdFt0b2dnbGVJbmRleF0uY29tcGxldGVkID0gIWZ1bGxMaXN0W3RvZ2dsZUluZGV4XS5nZXRDb21wbGV0ZWQ7XG4gICAgcHJpbnRMaXN0SXRlbShmdWxsTGlzdFt0b2dnbGVJbmRleF0pO1xuICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgfVxuICAvLyBJZiAnQ29tcGxldGVkJyBoZWFkZXIgaXMgY2xpY2tlZCwgZXhwYW5kcyB0aGUgbGlzdCBvZiBjb21wbGV0ZWQgdGFza3NcbiAgaWYgKGVsZW1lbnQudGFyZ2V0LmlkID09PSBcImV4cGFuZENvbXBsZXRlZFwiKSB7XG4gICAgLy8gUmlkaWN1bG91cyBjaGFpbmVkIERPTSBsaXN0IHBvaW50cyB0byB0aGUgY29tcGxldGVkTGlzdCBkaXYgdG8gY2hlY2sgaWYgaXQncyBjb2xsYXBzZWRcbiAgICBpZiAoXG4gICAgICBlbGVtZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICBcImNvbGxhcHNlZFwiXG4gICAgICApXG4gICAgKSB7XG4gICAgICBlbGVtZW50LnRhcmdldC5pbm5lckhUTUwgPSBcIkNvbXBsZXRlZCDilr9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50YXJnZXQuaW5uZXJIVE1MID0gXCJDb21wbGV0ZWQg4pa4XCI7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZExpc3RcIik7XG4gICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xuICB9XG59KTtcblxuLy8gRXhwYW5kcyBvciBjb2xsYXBzZXMgZm9ybSBmb3IgYWRkaW5nIGEgbmV3IHRhc2sgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1cIik7XG4gIGlucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIGlucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xufSk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiTGlzdEl0ZW0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXJndW1lbnRzIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsIl9jbGFzc0NhbGxDaGVjayIsImNvbXBsZXRlZCIsInRhc2tJRCIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsIl90aXRsZSIsIl9kZXNjcmlwdGlvbiIsIl9kdWVEYXRlIiwiX3ByaW9yaXR5IiwiX2NvbXBsZXRlZCIsIl9wcm9qZWN0Iiwic2V0IiwiZGVmYXVsdCIsImFkZFByb2plY3QiLCJ2YWxpZCIsInByb2plY3RJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9qZWN0RXJyb3IiLCJuZXdQcm9qZWN0IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidGV4dCIsImFkZCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoZWNrUHJvamVjdHMiLCJvcHRpb25zIiwiZXhpc3RpbmdQcm9qZWN0IiwidG9Mb3dlckNhc2UiLCJkZWxldGVJY29uIiwicHJpbnRMaXN0SXRlbSIsIm5ld0VudHJ5IiwiY2xhc3NOYW1lIiwiZ2V0VGFza0lEIiwiY2hlY2tib3giLCJ0eXBlIiwiY2hlY2tlZCIsImdldENvbXBsZXRlZCIsImFwcGVuZENoaWxkIiwibmV3TGFiZWwiLCJnZXRUaXRsZSIsImdldFByaW9yaXR5IiwiZGVzY3JpcHRpb25UZXh0IiwiZ2V0RGVzY3JpcHRpb24iLCJnZXREdWVEYXRlIiwiZGVsZXRlQnRuIiwic3JjIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRkTGlzdCIsImNvbXBsZXRlZExpc3QiLCJwcmludFByb2plY3QiLCJmdWxsTGlzdCIsIk9iamVjdCIsImVudHJpZXMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJmb3JFYWNoIiwiX3JlZiIsIl9yZWYyIiwiX3NsaWNlZFRvQXJyYXkiLCJ2YWwiLCJwYXJzZSIsImdldFByb2plY3QiLCJjbGVhciIsIkxJIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0QWRkIiwibmV3TGlzdEl0ZW0iLCJjb250YWluZXIiLCJlbGVtZW50IiwicGFyZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImNvbnRhaW5zIiwiZmlsdGVyIiwidGFzayIsInJlbW92ZSIsInRvZ2dsZUluZGV4IiwiZSIsImluZGV4T2YiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlucHV0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=