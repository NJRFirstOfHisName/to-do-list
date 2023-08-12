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
  function ListItem(title, description, dueDate, priority, project) {
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
    var tdList = document.getElementById("tdList");
    tdList.appendChild(newEntry);
  } else {
    newLabel.style.setProperty("text-decoration", "line-through");
    var completedList = document.getElementById("completedList");
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
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  display: grid;
  grid-template-columns: minmax(250px, 20vw) auto;
  grid-template-rows: 5em auto;
  height: 100vh;
  width: 100vw;
  background-color: #fde047;
}

#header {
  margin: 0.25em 0.5em;
  font-weight: bold;
  font-size: 50px;
  justify-self: start;
  grid-column: 1/3;
}

#sidebar {
  background-color: #fde047;
  display: grid;
  grid-template-rows: 0.5fr 0.4fr 0.25fr 0.4fr 1fr 3fr;
  align-items: baseline;
  border-top: 5px solid black;
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
  background-color: #fefce8;
}

#tdList,
#completedList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 20px;
  background-color: #fde047;
  padding: 10px;
}

h4 {
  margin: 1em 3em;
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
  animation: insert-task 0.2s;
}

.entry-remove {
  animation: remove-task 0.2s;
}

@keyframes insert-task {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes remove-task {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
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

.menu-button {
  display: none;
}

@media (max-width: 500px) {
  body {
    grid-template-columns: auto;
  }

  h4 {
    margin: 1em 5em;
  }

  #container {
    width: 100vw;
  }

  #sidebar {
    overflow: hidden;
    position: fixed;
    height: 100%;
    top: 5em;
    margin-left: -100%;
    transition: ease-out 0.6s;
    grid-template-rows: 0.5fr 0.4fr 0.25fr 1fr 1fr 3fr;
    z-index: 1;
  }

  #sidebar.expanded {
    margin-left: 0;
    display: grid;
  }

  h4 {
    margin: 1em 1em;
  }

  .menu-button {
    display: block;
    position: fixed;
    left: 1em;
    bottom: 1em;
    background-color: #fde047;
    text-align: center;
    border-radius: 50%;
    z-index: 2;
  }

  .mobile-header {
    margin: 0.5em 2.5em;
  }

  img {
    margin: 4px 0 0 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: minmax(250px, 20vw) auto;\n  grid-template-rows: 5em auto;\n  height: 100vh;\n  width: 100vw;\n  background-color: #fde047;\n}\n\n#header {\n  margin: 0.25em 0.5em;\n  font-weight: bold;\n  font-size: 50px;\n  justify-self: start;\n  grid-column: 1/3;\n}\n\n#sidebar {\n  background-color: #fde047;\n  display: grid;\n  grid-template-rows: 0.5fr 0.4fr 0.25fr 0.4fr 1fr 3fr;\n  align-items: baseline;\n  border-top: 5px solid black;\n}\n\n#projectForm {\n  display: grid;\n  gap: 5px;\n  margin: 5px;\n}\n\n#projectsLabel {\n  font-size: large;\n  font-weight: bold;\n  margin: 0 1.5em;\n}\n\n#projects {\n  border: none;\n  font-size: large;\n  width: 70%;\n  justify-self: end;\n  margin: 0 1.5em;\n}\n\nbutton {\n  background-color: white;\n  border: none;\n  justify-self: center;\n  height: 2em;\n  border-radius: 20px;\n  font-size: larger;\n  font-weight: 600;\n}\n\n#projectFormButton {\n  width: 55%;\n  align-self: baseline;\n  margin: 2%;\n}\n\n#projectWrapper {\n  overflow: hidden;\n  margin: 10px;\n}\n\n#projectAdd {\n  margin-top: -30%;\n  transition: all 0.5s;\n  align-items: center;\n  display: grid;\n  justify-content: center;\n  grid-template-rows: auto;\n}\n\n#newProject {\n  font-size: medium;\n  margin: 10px;\n}\n\n#projectAdd p {\n  text-align: center;\n  font-size: small;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  border-radius: 5px;\n}\n\n#inputFormButton {\n  align-self: end;\n  margin: 5px;\n  width: 45%;\n}\n\n#inputWrapper {\n  overflow: hidden;\n}\n\n#inputForm {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n  margin: 10px;\n  margin-top: -100%;\n  transition: all 1s;\n}\n\n#inputForm.expanded,\n#projectAdd.expanded,\n#completedList.expanded {\n  margin-top: 0;\n}\n\n#titleInput {\n  grid-column: 1 / 4;\n}\n\n#descriptionForm {\n  grid-column: 1 / 5;\n  resize: none;\n}\n\n#dueDate {\n  grid-column: 1 / 3;\n}\n\n#dueDateLabel {\n  grid-column: 3 / 5;\n}\n\n#priorityDiv {\n  grid-column: 1 / 5;\n}\n\n#priority {\n  position: relative;\n  vertical-align: middle;\n}\n\n#dueDateLabel,\n#priorityLabel {\n  font-size: small;\n}\n\n#addBtn {\n  grid-column: 2 / 4;\n  width: 50%;\n  font-size: medium;\n}\n\n#container {\n  background-color: #fefce8;\n}\n\n#tdList,\n#completedList {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));\n  gap: 20px;\n  background-color: #fde047;\n  padding: 10px;\n}\n\nh4 {\n  margin: 1em 3em;\n}\n\n.entry {\n  display: grid;\n  grid-template-columns: 0.25fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"check title title dueDate\"\n    \"description description description description\"\n    \". . . delete\";\n  border-radius: 10px;\n  margin: 5px;\n  padding: 10px;\n  gap: 0;\n  background-color: #fef08a;\n  animation: insert-task 0.2s;\n}\n\n.entry-remove {\n  animation: remove-task 0.2s;\n}\n\n@keyframes insert-task {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes remove-task {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(0);\n  }\n}\n\n.entry {\n  border: 1px solid black;\n}\n\n.check {\n  grid-area: check;\n  width: 15px;\n}\n\n.title {\n  grid-area: title;\n  align-self: center;\n  justify-self: start;\n  font-size: larger;\n}\n\n.dueDate {\n  grid-area: dueDate;\n}\n\n.description {\n  grid-area: description;\n}\n\n.delete {\n  grid-area: delete;\n  width: 20%;\n  align-self: end;\n  justify-self: end;\n}\n\n.priority {\n  color: red;\n}\n\n#completedWrapper {\n  overflow: hidden;\n}\n\n#completedList {\n  margin-top: -100%;\n  transition: all 0.3s ease-out;\n}\n\n.menu-button {\n  display: none;\n}\n\n@media (max-width: 500px) {\n  body {\n    grid-template-columns: auto;\n  }\n\n  h4 {\n    margin: 1em 5em;\n  }\n\n  #container {\n    width: 100vw;\n  }\n\n  #sidebar {\n    overflow: hidden;\n    position: fixed;\n    height: 100%;\n    top: 5em;\n    margin-left: -100%;\n    transition: ease-out 0.6s;\n    grid-template-rows: 0.5fr 0.4fr 0.25fr 1fr 1fr 3fr;\n    z-index: 1;\n  }\n\n  #sidebar.expanded {\n    margin-left: 0;\n    display: grid;\n  }\n\n  h4 {\n    margin: 1em 1em;\n  }\n\n  .menu-button {\n    display: block;\n    position: fixed;\n    left: 1em;\n    bottom: 1em;\n    background-color: #fde047;\n    text-align: center;\n    border-radius: 50%;\n    z-index: 2;\n  }\n\n  .mobile-header {\n    margin: 0.5em 2.5em;\n  }\n\n  img {\n    margin: 4px 0 0 0;\n  }\n}\n"],"sourceRoot":""}]);
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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

  // Closes the menu if user is on a mobile screen
  var sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("expanded")) {
    sidebar.classList.toggle("expanded");
  }
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

    // Clears all inputs
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.checked = false;
    document.getElementById("inputForm").classList.toggle("expanded");

    // Closes the menu if user is on a mobile device
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("expanded")) {
      sidebar.classList.toggle("expanded");
    }
    // localStorage.setItem(newListItem.getTaskID, JSON.stringify(newListItem));
  } else {
    // If the title is whitespace, removes it and waits for a new title.
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
      return task.getTaskID !== parent.id;
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
    parent.classList.add("entry-remove");
    parent.addEventListener("animationend", function () {
      parent.remove();
    });
  }
  // If 'Completed' header is clicked, expands the list of completed tasks
  if (element.target.id === "expandCompleted") {
    var completed = element.target;
    // Ridiculous chained DOM list points to the completedList div to check if it's collapsed
    if (completed.nextElementSibling.firstElementChild.classList.contains("collapsed")) {
      completed.innerText = "Completed ▿";
    } else {
      completed.innerText = "Completed ▶";
    }
    var completedList = document.getElementById("completedList");
    completedList.classList.toggle("expanded");
    completedList.classList.toggle("collapsed");
  }
});
var mobileMenu = document.querySelector(".menu-button");
mobileMenu.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("expanded");
});

// Expands or collapses form for adding a new task when button is pressed
document.getElementById("inputFormButton").addEventListener("click", function () {
  var inputForm = document.getElementById("inputForm");
  inputForm.classList.toggle("expanded");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLE9BQU8sYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxL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dW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYWRkTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NoZWNrUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRhc2tJRCA9IGBpZCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbiAgfVxuXG4gIGdldCBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBnZXQgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IGdldENvbXBsZXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICB9XG5cbiAgZ2V0IGdldFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gIH1cblxuICBnZXQgZ2V0VGFza0lEKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tJRDtcbiAgfVxuXG4gIHNldCB0aXRsZSh0aXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIHNldCBjb21wbGV0ZWQoY29tcGxldGVkKSB7XG4gICAgdGhpcy5fY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG5cbiAgc2V0IHByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgLy8gdGltZUxlZnQoKSB7XG4gIC8vICAgICBpZihkdWVEYXRlKSB7XG4gIC8vICAgICAgICAgbm93ID0gbmV3IERhdGUoKTtcbiAgLy8gICAgICAgICByZXR1cm4gKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmR1ZURhdGUuZ2V0VGltZSgpKS8zNjAwMDtcbiAgLy8gICAgIH1cbiAgLy8gfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCh2YWxpZCwgcHJvamVjdElucHV0KSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG4gIGNvbnN0IHByb2plY3RFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEVycm9yXCIpO1xuICBpZiAodmFsaWQpIHtcbiAgICAvLyBDcmVhdGVzIG5ldyBwcm9qZWN0IHdpdGggc3VwcGxpZWQgbmFtZSBhbmQgYWRkcyBpdCB0byB0aGUgc2VsZWN0IGJveFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5ld1Byb2plY3QudmFsdWUgPSBgJHtwcm9qZWN0SW5wdXQudmFsdWV9UHJvamVjdGA7XG4gICAgbmV3UHJvamVjdC50ZXh0ID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgIHByb2plY3QuYWRkKG5ld1Byb2plY3QpO1xuXG4gICAgLy8gTWFrZXMgbmV3UHJvamVjdCB0aGUgYWN0aXZlIHByb2plY3RcbiAgICBwcm9qZWN0LnZhbHVlID0gbmV3UHJvamVjdC52YWx1ZTtcbiAgICBwcm9qZWN0RXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RBZGRcIikuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RFcnJvci5pbm5lckhUTUwgPSBcIlByb2plY3QgbmFtZSBpbiB1c2UuXCI7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrUHJvamVjdHMocHJvamVjdElucHV0LCBwcm9qZWN0KSB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgLy8gQ2hlY2tzIHRoZSBwcm9qZWN0cyBpbiB0aGUgPHNlbGVjdD4gYm94IHRvIHNlZSBpZiBvbmUgZXhpc3RzIHdpdGggdGhlIHNhbWUgbmFtZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3Qub3B0aW9uc1tpXS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChcbiAgICAgIHByb2plY3RJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBleGlzdGluZ1Byb2plY3Quc2xpY2UoMCwgLTcpICYmXG4gICAgICB2YWxpZFxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIHByb2plY3QgaGFzIHVuaXF1ZSBuYW1lLCBvdGhlcndpc2UgcmV0dXJucyBmYWxzZVxuICByZXR1cm4gdmFsaWQ7XG59XG4iLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi90cmFzaC1jYW4tb3V0bGluZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRMaXN0SXRlbShMaXN0SXRlbSkge1xuICAvLyBFbmNsb3NlcyBhbGwgdGFza3MgaW4gYSBkaXYgd2l0aCBhIHVuaXF1ZSBpZCBhbmQgc2hhcmVkIGNsYXNzXG4gIGNvbnN0IG5ld0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3RW50cnkuY2xhc3NOYW1lID0gXCJlbnRyeVwiO1xuICBuZXdFbnRyeS5pZCA9IExpc3RJdGVtLmdldFRhc2tJRDtcblxuICAvLyBDcmVhdGUgY2hlY2tib3ggZm9yIG1hcmtpbmcgdGFza3MgYXMgY29tcGxldGUgKG9yIHVuLW1hcmtpbmcpXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBjaGVja2JveC5jbGFzc05hbWUgPSBcImNoZWNrXCI7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBMaXN0SXRlbS5nZXRDb21wbGV0ZWQ7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAvLyBDcmVhdGUgbGFiZWwgd2l0aCB0aGUgdGFzaydzIHRpdGxlIGFuZCBoaWdobGlnaHRzIGl0IGlmIGl0J3MgYSBwcmlvcml0eVxuICBjb25zdCBuZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmV3TGFiZWwuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0VGl0bGU7XG4gIG5ld0xhYmVsLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgaWYgKExpc3RJdGVtLmdldFByaW9yaXR5KSB7XG4gICAgbmV3TGFiZWwuY2xhc3NOYW1lICs9IFwiIHByaW9yaXR5XCI7XG4gIH1cbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xuXG4gIC8vIEFkZCBkZXNjcmlwdGlvbi4gSWYgbm8gZGVzY3JpcHRpb24gaXMgc3VwcGxpZWQgZmllbGQgd2lsbCBiZSBibGFua1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IExpc3RJdGVtLmdldERlc2NyaXB0aW9uO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xuXG4gIC8vIEFkZCBkdWUgZGF0ZS4gSWYgbm8gZGF0ZSBpcyBzdXBwbGllZCBmaWVsZCB3aWxsIGJlIGJsYW5rXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXREdWVEYXRlO1xuICBkdWVEYXRlLmNsYXNzTmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAvLyBBZGQgYnV0dG9uIHRvIGRlbGV0ZSB0YXNrXG4gIC8vIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlSWNvbjtcbiAgLy8gZGVsZXRlQnRuLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIC8vIEFkZHMgdGFzayB0byBhcHByb3ByaWF0ZSBkaXYgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQncyBtYXJrZWQgY29tcGxldGVcbiAgaWYgKCFMaXN0SXRlbS5nZXRDb21wbGV0ZWQpIHtcbiAgICBuZXdMYWJlbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcIlwiKTtcbiAgICBjb25zdCB0ZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRkTGlzdFwiKTtcbiAgICB0ZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9IGVsc2Uge1xuICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xuICAgIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZExpc3RcIik7XG4gICAgY29tcGxldGVkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XG4gIH1cbn1cbiIsImltcG9ydCBwcmludExpc3RJdGVtIGZyb20gXCIuL3ByaW50TGlzdEl0ZW1cIjtcblxuY29uc3QgdGRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZExpc3RcIik7XG5jb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRMaXN0XCIpO1xuXG4vLyBDaGVja3MgbGlzdCBvZiB0by1kbydzIGFuZCBwcmludHMgZWFjaCBvbmUgdGhhdCBtYXRjaGVzIHRoZSBjdXJyZW50IHByb2plY3RcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50UHJvamVjdChmdWxsTGlzdCwgdmFsdWUpIHtcbiAgdGRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbXBsZXRlZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgZnVsbExpc3QuZm9yRWFjaCgoTGlzdEl0ZW0pID0+IHtcbiAgICBpZiAoTGlzdEl0ZW0uZ2V0UHJvamVjdCA9PT0gdmFsdWUpIHtcbiAgICAgIHByaW50TGlzdEl0ZW0oTGlzdEl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIC8vIE9iamVjdC5lbnRyaWVzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgLy8gICBpZiAoSlNPTi5wYXJzZSh2YWwpLmdldFByb2plY3QgPT09IHZhbHVlKSB7XG4gIC8vICAgICBwcmludExpc3RJdGVtKEpTT04ucGFyc2UodmFsKSk7XG4gIC8vICAgfVxuICAvLyB9KTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAyMHZ3KSBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVlbSBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XG59XG5cbiNoZWFkZXIge1xuICBtYXJnaW46IDAuMjVlbSAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cblxuI3NpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNGZyIDAuMjVmciAwLjRmciAxZnIgM2ZyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjaztcbn1cblxuI3Byb2plY3RGb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4jcHJvamVjdHNMYWJlbCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgMS41ZW07XG59XG5cbiNwcm9qZWN0cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgd2lkdGg6IDcwJTtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIG1hcmdpbjogMCAxLjVlbTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3Byb2plY3RGb3JtQnV0dG9uIHtcbiAgd2lkdGg6IDU1JTtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gIG1hcmdpbjogMiU7XG59XG5cbiNwcm9qZWN0V3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3Byb2plY3RBZGQge1xuICBtYXJnaW4tdG9wOiAtMzAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbn1cblxuI25ld1Byb2plY3Qge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4jcHJvamVjdEFkZCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2lucHV0Rm9ybUJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0NSU7XG59XG5cbiNpbnB1dFdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jaW5wdXRGb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogLTEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuI2lucHV0Rm9ybS5leHBhbmRlZCxcbiNwcm9qZWN0QWRkLmV4cGFuZGVkLFxuI2NvbXBsZXRlZExpc3QuZXhwYW5kZWQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4jdGl0bGVJbnB1dCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbn1cblxuI2Rlc2NyaXB0aW9uRm9ybSB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4jZHVlRGF0ZSB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuI2R1ZURhdGVMYWJlbCB7XG4gIGdyaWQtY29sdW1uOiAzIC8gNTtcbn1cblxuI3ByaW9yaXR5RGl2IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xufVxuXG4jcHJpb3JpdHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbiNkdWVEYXRlTGFiZWwsXG4jcHJpb3JpdHlMYWJlbCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbiNhZGRCdG4ge1xuICBncmlkLWNvbHVtbjogMiAvIDQ7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4jY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNlODtcbn1cblxuI3RkTGlzdCxcbiNjb21wbGV0ZWRMaXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTVlbSwgMWZyKSk7XG4gIGdhcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDQge1xuICBtYXJnaW46IDFlbSAzZW07XG59XG5cbi5lbnRyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDFmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiY2hlY2sgdGl0bGUgdGl0bGUgZHVlRGF0ZVwiXG4gICAgXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblwiXG4gICAgXCIuIC4gLiBkZWxldGVcIjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGdhcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjA4YTtcbiAgYW5pbWF0aW9uOiBpbnNlcnQtdGFzayAwLjJzO1xufVxuXG4uZW50cnktcmVtb3ZlIHtcbiAgYW5pbWF0aW9uOiByZW1vdmUtdGFzayAwLjJzO1xufVxuXG5Aa2V5ZnJhbWVzIGluc2VydC10YXNrIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcmVtb3ZlLXRhc2sge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cblxuLmVudHJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5jaGVjayB7XG4gIGdyaWQtYXJlYTogY2hlY2s7XG4gIHdpZHRoOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBncmlkLWFyZWE6IHRpdGxlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uZHVlRGF0ZSB7XG4gIGdyaWQtYXJlYTogZHVlRGF0ZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbn1cblxuLmRlbGV0ZSB7XG4gIGdyaWQtYXJlYTogZGVsZXRlO1xuICB3aWR0aDogMjAlO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4ucHJpb3JpdHkge1xuICBjb2xvcjogcmVkO1xufVxuXG4jY29tcGxldGVkV3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNjb21wbGV0ZWRMaXN0IHtcbiAgbWFyZ2luLXRvcDogLTEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuXG4ubWVudS1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgYm9keSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMWVtIDVlbTtcbiAgfVxuXG4gICNjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG4gICNzaWRlYmFyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiA1ZW07XG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuNnM7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjRmciAwLjI1ZnIgMWZyIDFmciAzZnI7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gICNzaWRlYmFyLmV4cGFuZGVkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMWVtIDFlbTtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDFlbTtcbiAgICBib3R0b206IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC5tb2JpbGUtaGVhZGVyIHtcbiAgICBtYXJnaW46IDAuNWVtIDIuNWVtO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXJnaW46IDRweCAwIDAgMDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtB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RSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrREFBa0Q7SUFDbEQsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAyMHZ3KSBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZW0gYXV0bztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIG1hcmdpbjogMC4yNWVtIDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNGZyIDAuMjVmciAwLjRmciAxZnIgM2ZyO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0c0xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAxLjVlbTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICB3aWR0aDogNzAlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBtYXJnaW46IDAgMS41ZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jcHJvamVjdEZvcm1CdXR0b24ge1xcbiAgd2lkdGg6IDU1JTtcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI3Byb2plY3RXcmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0QWRkIHtcXG4gIG1hcmdpbi10b3A6IC0zMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdEFkZCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2lucHV0Rm9ybUJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBtYXJnaW46IDVweDtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbiNpbnB1dFdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2lucHV0Rm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogLTEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbiNpbnB1dEZvcm0uZXhwYW5kZWQsXFxuI3Byb2plY3RBZGQuZXhwYW5kZWQsXFxuI2NvbXBsZXRlZExpc3QuZXhwYW5kZWQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuI3RpdGxlSW5wdXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbn1cXG5cXG4jZGVzY3JpcHRpb25Gb3JtIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2R1ZURhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4jZHVlRGF0ZUxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNTtcXG59XFxuXFxuI3ByaW9yaXR5RGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbiNkdWVEYXRlTGFiZWwsXFxuI3ByaW9yaXR5TGFiZWwge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuI2FkZEJ0biB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNlODtcXG59XFxuXFxuI3RkTGlzdCxcXG4jY29tcGxldGVkTGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTVlbSwgMWZyKSk7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAxZW0gM2VtO1xcbn1cXG5cXG4uZW50cnkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImNoZWNrIHRpdGxlIHRpdGxlIGR1ZURhdGVcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXG4gICAgXFxcIi4gLiAuIGRlbGV0ZVxcXCI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjA4YTtcXG4gIGFuaW1hdGlvbjogaW5zZXJ0LXRhc2sgMC4ycztcXG59XFxuXFxuLmVudHJ5LXJlbW92ZSB7XFxuICBhbmltYXRpb246IHJlbW92ZS10YXNrIDAuMnM7XFxufVxcblxcbkBrZXlmcmFtZXMgaW5zZXJ0LXRhc2sge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcmVtb3ZlLXRhc2sge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxufVxcblxcbi5lbnRyeSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNoZWNrIHtcXG4gIGdyaWQtYXJlYTogY2hlY2s7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gIGdyaWQtYXJlYTogZHVlRGF0ZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5kZWxldGUge1xcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICB3aWR0aDogMjAlO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jY29tcGxldGVkV3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29tcGxldGVkTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAtMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgfVxcblxcbiAgaDQge1xcbiAgICBtYXJnaW46IDFlbSA1ZW07XFxuICB9XFxuXFxuICAjY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgfVxcblxcbiAgI3NpZGViYXIge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiA1ZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC42cztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjRmciAwLjI1ZnIgMWZyIDFmciAzZnI7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAjc2lkZWJhci5leHBhbmRlZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcblxcbiAgaDQge1xcbiAgICBtYXJnaW46IDFlbSAxZW07XFxuICB9XFxuXFxuICAubWVudS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAxZW07XFxuICAgIGJvdHRvbTogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4gIC5tb2JpbGUtaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwLjVlbSAyLjVlbTtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1hcmdpbjogNHB4IDAgMCAwO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vYWRkTGlzdEl0ZW1cIjtcbmltcG9ydCBwcmludExpc3RJdGVtIGZyb20gXCIuL3ByaW50TGlzdEl0ZW1cIjtcbmltcG9ydCBhZGRQcm9qZWN0IGZyb20gXCIuL2FkZFByb2plY3RcIjtcbmltcG9ydCBjaGVja1Byb2plY3RzIGZyb20gXCIuL2NoZWNrUHJvamVjdHNcIjtcbmltcG9ydCBwcmludFByb2plY3QgZnJvbSBcIi4vcHJpbnRQcm9qZWN0XCI7XG5cbi8vIERvbSBlbGVtZW50cyB1c2VkIGZvciBhbmQgaW4gZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcblxubGV0IGZ1bGxMaXN0ID0gW107XG5cbmZ1bGxMaXN0LmZvckVhY2goKExJKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExJLmdldFRhc2tJRCwgSlNPTi5zdHJpbmdpZnkoTEkpKTtcbn0pO1xuXG4vLyBQcmludHMgY29udGVudHMgb2YgZGVmYXVsdCBwcm9qZWN0IG9uIHBhZ2UgbG9hZFxucHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCBwcm9qZWN0LnZhbHVlKTtcblxuLy8gUHJpbnRzIGNvbnRlbnRzIG9mIHNlbGVjdGVkIHByb2plY3Qgd2hlbiBzZWxlY3Rpb24gaXMgY2hhbmdlZFxucHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgcHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCBwcm9qZWN0LnZhbHVlKTtcblxuICAvLyBDbG9zZXMgdGhlIG1lbnUgaWYgdXNlciBpcyBvbiBhIG1vYmlsZSBzY3JlZW5cbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgfVxufSk7XG5cbi8vIEV4cGFuZHMgb3IgY29sbGFwc2VzIHRoZSBmb3JtIGZvciBhZGRpbmcgYSBwcm9qZWN0IHdoZW4gYnV0dG9uIGlzIHByZXNzZWRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEZvcm1CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEFkZFwiKTtcbiAgcHJvamVjdEFkZC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIHByb2plY3RBZGQuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiKTtcbn0pO1xuXG4vLyBDcmVhdGVzIG5ldyBwcm9qZWN0IHdoZW4gJ05ldyBQcm9qZWN0JyBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdElucHV0XCIpO1xuICBjb25zdCB2YWxpZCA9IGNoZWNrUHJvamVjdHMocHJvamVjdElucHV0LCBwcm9qZWN0KTtcbiAgYWRkUHJvamVjdCh2YWxpZCwgcHJvamVjdElucHV0KTtcbiAgaWYgKHZhbGlkKSBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xuICBwcmludFByb2plY3QoZnVsbExpc3QsIHByb2plY3QudmFsdWUpO1xufSk7XG5cbi8vIENyZWF0ZXMgYSBuZXcsIHVuY29tcGxldGVkIHRhc2sgd2hlbiAnQWRkJyBidXR0b24gaXMgcHJlc3NlZCBJRiB0aXRsZSBpcyBwcmVzZW50XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVJbnB1dFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uRm9ybVwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xuXG4gIGlmICh0aXRsZS52YWx1ZS50cmltKCkpIHtcbiAgICBjb25zdCBuZXdMaXN0SXRlbSA9IG5ldyBMaXN0SXRlbShcbiAgICAgIHRpdGxlLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBkdWVEYXRlLnZhbHVlLFxuICAgICAgcHJpb3JpdHkuY2hlY2tlZCxcbiAgICAgIHByb2plY3QudmFsdWVcbiAgICApO1xuICAgIHByaW50TGlzdEl0ZW0obmV3TGlzdEl0ZW0pO1xuICAgIGZ1bGxMaXN0LnB1c2gobmV3TGlzdEl0ZW0pO1xuXG4gICAgLy8gQ2xlYXJzIGFsbCBpbnB1dHNcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5LmNoZWNrZWQgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Rm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG5cbiAgICAvLyBDbG9zZXMgdGhlIG1lbnUgaWYgdXNlciBpcyBvbiBhIG1vYmlsZSBkZXZpY2VcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZGVkXCIpKSB7XG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgICB9XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3TGlzdEl0ZW0uZ2V0VGFza0lELCBKU09OLnN0cmluZ2lmeShuZXdMaXN0SXRlbSkpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSB0aXRsZSBpcyB3aGl0ZXNwYWNlLCByZW1vdmVzIGl0IGFuZCB3YWl0cyBmb3IgYSBuZXcgdGl0bGUuXG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICB9XG59KTtcblxuLy8gTGlzdGVucyBmb3IgYW55IGNsaWNrcyB3aXRoaW4gdGhlIHRhc2tzIGNvbnRhaW5lci5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICAvLyBJZiBkZWxldGUgYnV0dG9uIGlzIGNsaWNrZWQsIGRlbGV0ZXMgdGFzay5cbiAgaWYgKGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSkge1xuICAgIGZ1bGxMaXN0ID0gZnVsbExpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFRhc2tJRCAhPT0gcGFyZW50LmlkKTtcbiAgICBwYXJlbnQucmVtb3ZlKCk7XG4gIH1cbiAgLy8gSWYgY2hlY2tib3ggaXMgY2xpY2tlZCwgdG9nZ2xlcyAnY29tcGxldGVkJyBhbmQgbW92ZXMgdGFzayBmcm9tICd0YXNrcycgdG8gJ2NvbXBsZXRlZCcgb3IgdmljZS12ZXJzYVxuICBpZiAoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2hlY2tcIikpIHtcbiAgICBjb25zdCB0b2dnbGVJbmRleCA9IGZ1bGxMaXN0Lm1hcCgoZSkgPT4gZS5nZXRUYXNrSUQpLmluZGV4T2YocGFyZW50LmlkKTtcbiAgICBmdWxsTGlzdFt0b2dnbGVJbmRleF0uY29tcGxldGVkID0gIWZ1bGxMaXN0W3RvZ2dsZUluZGV4XS5nZXRDb21wbGV0ZWQ7XG4gICAgcHJpbnRMaXN0SXRlbShmdWxsTGlzdFt0b2dnbGVJbmRleF0pO1xuICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiZW50cnktcmVtb3ZlXCIpO1xuICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuICAvLyBJZiAnQ29tcGxldGVkJyBoZWFkZXIgaXMgY2xpY2tlZCwgZXhwYW5kcyB0aGUgbGlzdCBvZiBjb21wbGV0ZWQgdGFza3NcbiAgaWYgKGVsZW1lbnQudGFyZ2V0LmlkID09PSBcImV4cGFuZENvbXBsZXRlZFwiKSB7XG4gICAgY29uc3QgY29tcGxldGVkID0gZWxlbWVudC50YXJnZXQ7XG4gICAgLy8gUmlkaWN1bG91cyBjaGFpbmVkIERPTSBsaXN0IHBvaW50cyB0byB0aGUgY29tcGxldGVkTGlzdCBkaXYgdG8gY2hlY2sgaWYgaXQncyBjb2xsYXBzZWRcbiAgICBpZiAoXG4gICAgICBjb21wbGV0ZWQubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgXCJjb2xsYXBzZWRcIlxuICAgICAgKVxuICAgICkge1xuICAgICAgY29tcGxldGVkLmlubmVyVGV4dCA9IFwiQ29tcGxldGVkIOKWv1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZWQuaW5uZXJUZXh0ID0gXCJDb21wbGV0ZWQg4pa2XCI7XG4gICAgfVxuICAgIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZExpc3RcIik7XG4gICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xuICB9XG59KTtcblxuY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idXR0b25cIik7XG5tb2JpbGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xufSk7XG5cbi8vIEV4cGFuZHMgb3IgY29sbGFwc2VzIGZvcm0gZm9yIGFkZGluZyBhIG5ldyB0YXNrIHdoZW4gYnV0dG9uIGlzIHByZXNzZWRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGb3JtQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGb3JtXCIpO1xuICBpbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xufSk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiTGlzdEl0ZW0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsIl9jbGFzc0NhbGxDaGVjayIsImNvbXBsZXRlZCIsInRhc2tJRCIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsIl90aXRsZSIsIl9kZXNjcmlwdGlvbiIsIl9kdWVEYXRlIiwiX3ByaW9yaXR5IiwiX2NvbXBsZXRlZCIsIl9wcm9qZWN0Iiwic2V0IiwiZGVmYXVsdCIsImFkZFByb2plY3QiLCJ2YWxpZCIsInByb2plY3RJbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9qZWN0RXJyb3IiLCJuZXdQcm9qZWN0IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidGV4dCIsImFkZCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoZWNrUHJvamVjdHMiLCJvcHRpb25zIiwiZXhpc3RpbmdQcm9qZWN0IiwidG9Mb3dlckNhc2UiLCJkZWxldGVJY29uIiwicHJpbnRMaXN0SXRlbSIsIm5ld0VudHJ5IiwiY2xhc3NOYW1lIiwiZ2V0VGFza0lEIiwiY2hlY2tib3giLCJ0eXBlIiwiY2hlY2tlZCIsImdldENvbXBsZXRlZCIsImFwcGVuZENoaWxkIiwibmV3TGFiZWwiLCJnZXRUaXRsZSIsImdldFByaW9yaXR5IiwiZGVzY3JpcHRpb25UZXh0IiwiZ2V0RGVzY3JpcHRpb24iLCJnZXREdWVEYXRlIiwiZGVsZXRlQnRuIiwic3JjIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRkTGlzdCIsImNvbXBsZXRlZExpc3QiLCJwcmludFByb2plY3QiLCJmdWxsTGlzdCIsImZvckVhY2giLCJnZXRQcm9qZWN0IiwiTEkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNpZGViYXIiLCJjb250YWlucyIsInByb2plY3RBZGQiLCJ0cmltIiwibmV3TGlzdEl0ZW0iLCJjb250YWluZXIiLCJlbGVtZW50IiwicGFyZW50IiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsImZpbHRlciIsInRhc2siLCJyZW1vdmUiLCJ0b2dnbGVJbmRleCIsImUiLCJpbmRleE9mIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbm5lclRleHQiLCJtb2JpbGVNZW51IiwicXVlcnlTZWxlY3RvciIsImlucHV0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=