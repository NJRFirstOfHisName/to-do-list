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

var tdList = document.getElementById("tdList");
var completedList = document.getElementById("completedList");

// Checks list of to-do's and prints each one that matches the current project
function printProject(fullList, value) {
  tdList.innerHTML = "";
  completedList.innerHTML = "";
  fullList.forEach(function (ListItem) {
    if (ListItem.getProject === value) {
      (0,_printListItem__WEBPACK_IMPORTED_MODULE_0__["default"])(ListItem);
    }
  });
  // Object.entries(window.localStorage).forEach(([key, val]) => {
  //   if (JSON.parse(val).getProject === value) {
  //     printListItem(JSON.parse(val));
  //   }
  // });
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
fullList.forEach(function (LI) {
  localStorage.setItem(LI.getTaskID, JSON.stringify(LI));
});

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
  if (valid) projectInput.value = "";
  (0,_printProject__WEBPACK_IMPORTED_MODULE_5__["default"])(fullList, project.value);
});

// Creates a new, uncompleted task when 'Add' button is pressed IF title is present
document.getElementById("addBtn").addEventListener("click", function () {
  var title = document.getElementById("titleInput");
  var description = document.getElementById("descriptionForm");
  var dueDate = document.getElementById("dueDate");
  var priority = document.getElementById("priority");
  if (title.value.trim()) {
    var newListItem = new _addListItem__WEBPACK_IMPORTED_MODULE_1__["default"](title.value, description.value, dueDate.value, priority.checked, project.value);
    (0,_printListItem__WEBPACK_IMPORTED_MODULE_2__["default"])(newListItem);
    fullList.push(newListItem);
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.checked = false;
    document.getElementById("inputForm").classList.toggle("expanded");
    // localStorage.setItem(newListItem.getTaskID, JSON.stringify(newListItem));
  } else {
    title.value = "";
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
      element.target.innerText = "Completed ▿";
    } else {
      element.target.innerText = "Completed ▶";
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
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxN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QixXQUFXLENBQUMsQ0FBQztJQUNwQ1AsTUFBTSxDQUFDTSxNQUFNLENBQUMsQ0FBQztFQUNqQjtFQUNBO0VBQ0EsSUFBSVAsT0FBTyxDQUFDRSxNQUFNLENBQUMxRixFQUFFLEtBQUssaUJBQWlCLEVBQUU7SUFDM0M7SUFDQSxJQUNFd0YsT0FBTyxDQUFDRSxNQUFNLENBQUNTLGtCQUFrQixDQUFDQyxpQkFBaUIsQ0FBQ3BELFNBQVMsQ0FBQzRDLFFBQVEsQ0FDcEUsV0FDRixDQUFDLEVBQ0Q7TUFDQUosT0FBTyxDQUFDRSxNQUFNLENBQUNXLFNBQVMsR0FBRyxhQUFhO0lBQzFDLENBQUMsTUFBTTtNQUNMYixPQUFPLENBQUNFLE1BQU0sQ0FBQ1csU0FBUyxHQUFHLGFBQWE7SUFDMUM7SUFDQSxJQUFNMUIsYUFBYSxHQUFHcEMsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzlEbUMsYUFBYSxDQUFDM0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQzFDMEIsYUFBYSxDQUFDM0IsU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO0VBQzdDO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0FWLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMyQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN6RSxJQUFNbUIsU0FBUyxHQUFHL0QsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ3REOEQsU0FBUyxDQUFDdEQsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYWRkTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NoZWNrUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gXCIgXCIsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy50YXNrSUQgPSBgaWQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG4gIH1cblxuICBnZXQgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgZ2V0IGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBnZXRDb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgfVxuXG4gIGdldCBnZXRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICB9XG5cbiAgZ2V0IGdldFRhc2tJRCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrSUQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xuICAgIHRoaXMuX2NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgfVxuXG4gIHNldCBwcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8vIHRpbWVMZWZ0KCkge1xuICAvLyAgICAgaWYoZHVlRGF0ZSkge1xuICAvLyAgICAgICAgIG5vdyA9IG5ldyBEYXRlKCk7XG4gIC8vICAgICAgICAgcmV0dXJuIChub3cuZ2V0VGltZSgpIC0gdGhpcy5kdWVEYXRlLmdldFRpbWUoKSkvMzYwMDA7XG4gIC8vICAgICB9XG4gIC8vIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QodmFsaWQsIHByb2plY3RJbnB1dCkge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcblxuICBjb25zdCBwcm9qZWN0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RFcnJvclwiKTtcbiAgaWYgKHZhbGlkKSB7XG4gICAgLy8gQ3JlYXRlcyBuZXcgcHJvamVjdCB3aXRoIHN1cHBsaWVkIG5hbWUgYW5kIGFkZHMgaXQgdG8gdGhlIHNlbGVjdCBib3hcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0LnZhbHVlID0gYCR7cHJvamVjdElucHV0LnZhbHVlfVByb2plY3RgO1xuICAgIG5ld1Byb2plY3QudGV4dCA9IHByb2plY3RJbnB1dC52YWx1ZTtcbiAgICBwcm9qZWN0LmFkZChuZXdQcm9qZWN0KTtcblxuICAgIC8vIE1ha2VzIG5ld1Byb2plY3QgdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgcHJvamVjdC52YWx1ZSA9IG5ld1Byb2plY3QudmFsdWU7XG4gICAgcHJvamVjdEVycm9yLmlubmVySFRNTCA9IFwiXCI7XG4gICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RBZGRcIikuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RFcnJvci5pbm5lckhUTUwgPSBcIlByb2plY3QgbmFtZSBpbiB1c2UuXCI7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrUHJvamVjdHMocHJvamVjdElucHV0LCBwcm9qZWN0KSB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgLy8gQ2hlY2tzIHRoZSBwcm9qZWN0cyBpbiB0aGUgPHNlbGVjdD4gYm94IHRvIHNlZSBpZiBvbmUgZXhpc3RzIHdpdGggdGhlIHNhbWUgbmFtZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3Qub3B0aW9uc1tpXS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChcbiAgICAgIHByb2plY3RJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBleGlzdGluZ1Byb2plY3Quc2xpY2UoMCwgLTcpICYmXG4gICAgICB2YWxpZFxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIHByb2plY3QgaGFzIHVuaXF1ZSBuYW1lLCBvdGhlcndpc2UgcmV0dXJucyBmYWxzZVxuICByZXR1cm4gdmFsaWQ7XG59XG4iLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi90cmFzaC1jYW4tb3V0bGluZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRMaXN0SXRlbShMaXN0SXRlbSkge1xuICAvLyBFbmNsb3NlcyBhbGwgdGFza3MgaW4gYSBkaXYgd2l0aCBhIHVuaXF1ZSBpZCBhbmQgc2hhcmVkIGNsYXNzXG4gIGNvbnN0IG5ld0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3RW50cnkuY2xhc3NOYW1lID0gXCJlbnRyeVwiO1xuICBuZXdFbnRyeS5pZCA9IExpc3RJdGVtLmdldFRhc2tJRDtcblxuICAvLyBDcmVhdGUgY2hlY2tib3ggZm9yIG1hcmtpbmcgdGFza3MgYXMgY29tcGxldGUgKG9yIHVuLW1hcmtpbmcpXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBjaGVja2JveC5jbGFzc05hbWUgPSBcImNoZWNrXCI7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBMaXN0SXRlbS5nZXRDb21wbGV0ZWQ7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAvLyBDcmVhdGUgbGFiZWwgd2l0aCB0aGUgdGFzaydzIHRpdGxlIGFuZCBoaWdobGlnaHRzIGl0IGlmIGl0J3MgYSBwcmlvcml0eVxuICBjb25zdCBuZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmV3TGFiZWwuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0VGl0bGU7XG4gIG5ld0xhYmVsLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgaWYgKExpc3RJdGVtLmdldFByaW9yaXR5KSB7XG4gICAgbmV3TGFiZWwuY2xhc3NOYW1lICs9IFwiIHByaW9yaXR5XCI7XG4gIH1cbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xuXG4gIC8vIEFkZCBkZXNjcmlwdGlvbi4gSWYgbm8gZGVzY3JpcHRpb24gaXMgc3VwcGxpZWQgZmllbGQgd2lsbCBiZSBibGFua1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IExpc3RJdGVtLmdldERlc2NyaXB0aW9uO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xuXG4gIC8vIEFkZCBkdWUgZGF0ZS4gSWYgbm8gZGF0ZSBpcyBzdXBwbGllZCBmaWVsZCB3aWxsIGJlIGJsYW5rXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXREdWVEYXRlO1xuICBkdWVEYXRlLmNsYXNzTmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAvLyBBZGQgYnV0dG9uIHRvIGRlbGV0ZSB0YXNrXG4gIC8vIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlSWNvbjtcbiAgLy8gZGVsZXRlQnRuLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIC8vIEFkZHMgdGFzayB0byBhcHByb3ByaWF0ZSBkaXYgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQncyBtYXJrZWQgY29tcGxldGVcbiAgaWYgKCFMaXN0SXRlbS5nZXRDb21wbGV0ZWQpIHtcbiAgICBuZXdMYWJlbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcIlwiKTtcbiAgICB0ZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9IGVsc2Uge1xuICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xuICAgIGNvbXBsZXRlZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9XG59XG4iLCJpbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5cbmNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRMaXN0XCIpO1xuY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcblxuLy8gQ2hlY2tzIGxpc3Qgb2YgdG8tZG8ncyBhbmQgcHJpbnRzIGVhY2ggb25lIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCBwcm9qZWN0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludFByb2plY3QoZnVsbExpc3QsIHZhbHVlKSB7XG4gIHRkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb21wbGV0ZWRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGZ1bGxMaXN0LmZvckVhY2goKExpc3RJdGVtKSA9PiB7XG4gICAgaWYgKExpc3RJdGVtLmdldFByb2plY3QgPT09IHZhbHVlKSB7XG4gICAgICBwcmludExpc3RJdGVtKExpc3RJdGVtKTtcbiAgICB9XG4gIH0pO1xuICAvLyBPYmplY3QuZW50cmllcyh3aW5kb3cubG9jYWxTdG9yYWdlKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gIC8vICAgaWYgKEpTT04ucGFyc2UodmFsKS5nZXRQcm9qZWN0ID09PSB2YWx1ZSkge1xuICAvLyAgICAgcHJpbnRMaXN0SXRlbShKU09OLnBhcnNlKHZhbCkpO1xuICAvLyAgIH1cbiAgLy8gfSk7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwZW0sIDIwZW0pIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3NpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNGZyIDAuMjVmciAwLjRmciAxZnIgM2ZyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbiNoZWFkZXIge1xuICBtYXJnaW46IDAgNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG59XG5cbiNwcm9qZWN0Rm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuI3Byb2plY3RzTGFiZWwge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDEuNWVtO1xufVxuXG4jcHJvamVjdHMge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHdpZHRoOiA3MCU7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBtYXJnaW46IDAgMS41ZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNwcm9qZWN0Rm9ybUJ1dHRvbiB7XG4gIHdpZHRoOiA1NSU7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICBtYXJnaW46IDIlO1xufVxuXG4jcHJvamVjdFdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNwcm9qZWN0QWRkIHtcbiAgbWFyZ2luLXRvcDogLTMwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG59XG5cbiNuZXdQcm9qZWN0IHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3Byb2plY3RBZGQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNpbnB1dEZvcm1CdXR0b24ge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDUlO1xufVxuXG4jaW5wdXRXcmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2lucHV0Rm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbiNpbnB1dEZvcm0uZXhwYW5kZWQsXG4jcHJvamVjdEFkZC5leHBhbmRlZCxcbiNjb21wbGV0ZWRMaXN0LmV4cGFuZGVkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuI3RpdGxlSW5wdXQge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG59XG5cbiNkZXNjcmlwdGlvbkZvcm0ge1xuICBncmlkLWNvbHVtbjogMSAvIDU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuI2R1ZURhdGUge1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG59XG5cbiNkdWVEYXRlTGFiZWwge1xuICBncmlkLWNvbHVtbjogMyAvIDU7XG59XG5cbiNwcmlvcml0eURpdiB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcbn1cblxuI3ByaW9yaXR5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jZHVlRGF0ZUxhYmVsLFxuI3ByaW9yaXR5TGFiZWwge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4jYWRkQnRuIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2U4O1xufVxuXG4jdGRMaXN0LFxuI2NvbXBsZXRlZExpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNWVtLCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmVudHJ5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJjaGVjayB0aXRsZSB0aXRsZSBkdWVEYXRlXCJcbiAgICBcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXCJcbiAgICBcIi4gLiAuIGRlbGV0ZVwiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZ2FwOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMDhhO1xufVxuXG4uZW50cnkge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmNoZWNrIHtcbiAgZ3JpZC1hcmVhOiBjaGVjaztcbiAgd2lkdGg6IDE1cHg7XG59XG5cbi50aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5kdWVEYXRlIHtcbiAgZ3JpZC1hcmVhOiBkdWVEYXRlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xufVxuXG4uZGVsZXRlIHtcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XG4gIHdpZHRoOiAyMCU7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5wcmlvcml0eSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiNjb21wbGV0ZWRXcmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2NvbXBsZXRlZExpc3Qge1xuICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiw4Q0FBOEM7RUFDOUMsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsUUFBUTtFQUNSLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekM7OztrQkFHZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMGVtLCAyMGVtKSBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC40ZnIgMC4yNWZyIDAuNGZyIDFmciAzZnI7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgbWFyZ2luOiAwIDUlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0c0xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAxLjVlbTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICB3aWR0aDogNzAlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBtYXJnaW46IDAgMS41ZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jcHJvamVjdEZvcm1CdXR0b24ge1xcbiAgd2lkdGg6IDU1JTtcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI3Byb2plY3RXcmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0QWRkIHtcXG4gIG1hcmdpbi10b3A6IC0zMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdEFkZCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2lucHV0Rm9ybUJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBtYXJnaW46IDVweDtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbiNpbnB1dFdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2lucHV0Rm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogLTEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbiNpbnB1dEZvcm0uZXhwYW5kZWQsXFxuI3Byb2plY3RBZGQuZXhwYW5kZWQsXFxuI2NvbXBsZXRlZExpc3QuZXhwYW5kZWQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuI3RpdGxlSW5wdXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbn1cXG5cXG4jZGVzY3JpcHRpb25Gb3JtIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2R1ZURhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4jZHVlRGF0ZUxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNTtcXG59XFxuXFxuI3ByaW9yaXR5RGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbiNkdWVEYXRlTGFiZWwsXFxuI3ByaW9yaXR5TGFiZWwge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuI2FkZEJ0biB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2U4O1xcbn1cXG5cXG4jdGRMaXN0LFxcbiNjb21wbGV0ZWRMaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNWVtLCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmVudHJ5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJjaGVjayB0aXRsZSB0aXRsZSBkdWVEYXRlXFxcIlxcbiAgICBcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cXFwiXFxuICAgIFxcXCIuIC4gLiBkZWxldGVcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWYwOGE7XFxufVxcblxcbi5lbnRyeSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNoZWNrIHtcXG4gIGdyaWQtYXJlYTogY2hlY2s7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gIGdyaWQtYXJlYTogZHVlRGF0ZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5kZWxldGUge1xcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICB3aWR0aDogMjAlO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jY29tcGxldGVkV3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29tcGxldGVkTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL2FkZExpc3RJdGVtXCI7XG5pbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XG5pbXBvcnQgY2hlY2tQcm9qZWN0cyBmcm9tIFwiLi9jaGVja1Byb2plY3RzXCI7XG5pbXBvcnQgcHJpbnRQcm9qZWN0IGZyb20gXCIuL3ByaW50UHJvamVjdFwiO1xuXG4vLyBEb20gZWxlbWVudHMgdXNlZCBmb3IgYW5kIGluIGV2ZW50IGxpc3RlbmVyc1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbmxldCBmdWxsTGlzdCA9IFtdO1xuXG5mdWxsTGlzdC5mb3JFYWNoKChMSSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMSS5nZXRUYXNrSUQsIEpTT04uc3RyaW5naWZ5KExJKSk7XG59KTtcblxuLy8gUHJpbnRzIGNvbnRlbnRzIG9mIGRlZmF1bHQgcHJvamVjdCBvbiBwYWdlIGxvYWRcbnByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG5cbi8vIFByaW50cyBjb250ZW50cyBvZiBzZWxlY3RlZCBwcm9qZWN0IHdoZW4gc2VsZWN0aW9uIGlzIGNoYW5nZWRcbnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIHByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG59KTtcblxuLy8gRXhwYW5kcyBvciBjb2xsYXBzZXMgdGhlIGZvcm0gZm9yIGFkZGluZyBhIHByb2plY3Qgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QWRkXCIpO1xuICBwcm9qZWN0QWRkLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgcHJvamVjdEFkZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xufSk7XG5cbi8vIENyZWF0ZXMgbmV3IHByb2plY3Qgd2hlbiAnTmV3IFByb2plY3QnIGJ1dHRvbiBpcyBwcmVzc2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SW5wdXRcIik7XG4gIGNvbnN0IHZhbGlkID0gY2hlY2tQcm9qZWN0cyhwcm9qZWN0SW5wdXQsIHByb2plY3QpO1xuICBhZGRQcm9qZWN0KHZhbGlkLCBwcm9qZWN0SW5wdXQpO1xuICBpZiAodmFsaWQpIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG59KTtcblxuLy8gQ3JlYXRlcyBhIG5ldywgdW5jb21wbGV0ZWQgdGFzayB3aGVuICdBZGQnIGJ1dHRvbiBpcyBwcmVzc2VkIElGIHRpdGxlIGlzIHByZXNlbnRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25Gb3JtXCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG5cbiAgaWYgKHRpdGxlLnZhbHVlLnRyaW0oKSkge1xuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gbmV3IExpc3RJdGVtKFxuICAgICAgdGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eS5jaGVja2VkLFxuICAgICAgcHJvamVjdC52YWx1ZVxuICAgICk7XG4gICAgcHJpbnRMaXN0SXRlbShuZXdMaXN0SXRlbSk7XG4gICAgZnVsbExpc3QucHVzaChuZXdMaXN0SXRlbSk7XG5cbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Rm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TGlzdEl0ZW0uZ2V0VGFza0lELCBKU09OLnN0cmluZ2lmeShuZXdMaXN0SXRlbSkpO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5cbi8vIExpc3RlbnMgZm9yIGFueSBjbGlja3Mgd2l0aGluIHRoZSB0YXNrcyBjb250YWluZXIuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZWxlbWVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgLy8gSWYgZGVsZXRlIGJ1dHRvbiBpcyBjbGlja2VkLCBkZWxldGVzIHRhc2suXG4gIGlmIChlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbiAgICBmdWxsTGlzdCA9IGZ1bGxMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRUYXNrSUQgIT0gcGFyZW50LmlkKTtcbiAgICBwYXJlbnQucmVtb3ZlKCk7XG4gIH1cbiAgLy8gSWYgY2hlY2tib3ggaXMgY2xpY2tlZCwgdG9nZ2xlcyAnY29tcGxldGVkJyBhbmQgbW92ZXMgdGFzayBmcm9tICd0YXNrcycgdG8gJ2NvbXBsZXRlZCcgb3IgdmljZS12ZXJzYVxuICBpZiAoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tcIikpIHtcbiAgICBjb25zdCB0b2dnbGVJbmRleCA9IGZ1bGxMaXN0Lm1hcCgoZSkgPT4gZS5nZXRUYXNrSUQpLmluZGV4T2YocGFyZW50LmlkKTtcbiAgICBmdWxsTGlzdFt0b2dnbGVJbmRleF0uY29tcGxldGVkID0gIWZ1bGxMaXN0W3RvZ2dsZUluZGV4XS5nZXRDb21wbGV0ZWQ7XG4gICAgcHJpbnRMaXN0SXRlbShmdWxsTGlzdFt0b2dnbGVJbmRleF0pO1xuICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgfVxuICAvLyBJZiAnQ29tcGxldGVkJyBoZWFkZXIgaXMgY2xpY2tlZCwgZXhwYW5kcyB0aGUgbGlzdCBvZiBjb21wbGV0ZWQgdGFza3NcbiAgaWYgKGVsZW1lbnQudGFyZ2V0LmlkID09PSBcImV4cGFuZENvbXBsZXRlZFwiKSB7XG4gICAgLy8gUmlkaWN1bG91cyBjaGFpbmVkIERPTSBsaXN0IHBvaW50cyB0byB0aGUgY29tcGxldGVkTGlzdCBkaXYgdG8gY2hlY2sgaWYgaXQncyBjb2xsYXBzZWRcbiAgICBpZiAoXG4gICAgICBlbGVtZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICBcImNvbGxhcHNlZFwiXG4gICAgICApXG4gICAgKSB7XG4gICAgICBlbGVtZW50LnRhcmdldC5pbm5lclRleHQgPSBcIkNvbXBsZXRlZCDilr9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC50YXJnZXQuaW5uZXJUZXh0ID0gXCJDb21wbGV0ZWQg4pa2XCI7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZExpc3RcIik7XG4gICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xuICB9XG59KTtcblxuLy8gRXhwYW5kcyBvciBjb2xsYXBzZXMgZm9ybSBmb3IgYWRkaW5nIGEgbmV3IHRhc2sgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1cIik7XG4gIGlucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59KTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJMaXN0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhcmd1bWVudHMiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiX2NsYXNzQ2FsbENoZWNrIiwiY29tcGxldGVkIiwidGFza0lEIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2V0IiwiX3RpdGxlIiwiX2Rlc2NyaXB0aW9uIiwiX2R1ZURhdGUiLCJfcHJpb3JpdHkiLCJfY29tcGxldGVkIiwiX3Byb2plY3QiLCJzZXQiLCJkZWZhdWx0IiwiYWRkUHJvamVjdCIsInZhbGlkIiwicHJvamVjdElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RFcnJvciIsIm5ld1Byb2plY3QiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJ0ZXh0IiwiYWRkIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2hlY2tQcm9qZWN0cyIsIm9wdGlvbnMiLCJleGlzdGluZ1Byb2plY3QiLCJ0b0xvd2VyQ2FzZSIsImRlbGV0ZUljb24iLCJwcmludExpc3RJdGVtIiwibmV3RW50cnkiLCJjbGFzc05hbWUiLCJnZXRUYXNrSUQiLCJjaGVja2JveCIsInR5cGUiLCJjaGVja2VkIiwiZ2V0Q29tcGxldGVkIiwiYXBwZW5kQ2hpbGQiLCJuZXdMYWJlbCIsImdldFRpdGxlIiwiZ2V0UHJpb3JpdHkiLCJkZXNjcmlwdGlvblRleHQiLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJkZWxldGVCdG4iLCJzcmMiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidGRMaXN0IiwiY29tcGxldGVkTGlzdCIsInByaW50UHJvamVjdCIsImZ1bGxMaXN0IiwiZm9yRWFjaCIsImdldFByb2plY3QiLCJMSSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdEFkZCIsInRyaW0iLCJuZXdMaXN0SXRlbSIsImNvbnRhaW5lciIsImVsZW1lbnQiLCJwYXJlbnQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiY29udGFpbnMiLCJmaWx0ZXIiLCJ0YXNrIiwicmVtb3ZlIiwidG9nZ2xlSW5kZXgiLCJlIiwiaW5kZXhPZiIsIm5leHRFbGVtZW50U2libGluZyIsImZpcnN0RWxlbWVudENoaWxkIiwiaW5uZXJUZXh0IiwiaW5wdXRGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==