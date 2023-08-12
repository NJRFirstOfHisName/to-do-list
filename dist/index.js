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
    transition: all 1s;
    grid-template-rows: 0.5fr 0.4fr 0.25fr 1fr 1fr 3fr;
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
  }

  .mobile-header {
    margin: 0.5em 2.5em;
  }

  img {
    margin: 4px 0 0 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: minmax(250px, 20vw) auto;\n  grid-template-rows: 5em auto;\n  height: 100vh;\n  width: 100vw;\n  background-color: #fde047;\n}\n\n#header {\n  margin: 0.25em 0.5em;\n  font-weight: bold;\n  font-size: 50px;\n  justify-self: start;\n  grid-column: 1/3;\n}\n\n#sidebar {\n  background-color: #fde047;\n  display: grid;\n  grid-template-rows: 0.5fr 0.4fr 0.25fr 0.4fr 1fr 3fr;\n  align-items: baseline;\n  border-top: 5px solid black;\n}\n\n#projectForm {\n  display: grid;\n  gap: 5px;\n  margin: 5px;\n}\n\n#projectsLabel {\n  font-size: large;\n  font-weight: bold;\n  margin: 0 1.5em;\n}\n\n#projects {\n  border: none;\n  font-size: large;\n  width: 70%;\n  justify-self: end;\n  margin: 0 1.5em;\n}\n\nbutton {\n  background-color: white;\n  border: none;\n  justify-self: center;\n  height: 2em;\n  border-radius: 20px;\n  font-size: larger;\n  font-weight: 600;\n}\n\n#projectFormButton {\n  width: 55%;\n  align-self: baseline;\n  margin: 2%;\n}\n\n#projectWrapper {\n  overflow: hidden;\n  margin: 10px;\n}\n\n#projectAdd {\n  margin-top: -30%;\n  transition: all 0.5s;\n  align-items: center;\n  display: grid;\n  justify-content: center;\n  grid-template-rows: auto;\n}\n\n#newProject {\n  font-size: medium;\n  margin: 10px;\n}\n\n#projectAdd p {\n  text-align: center;\n  font-size: small;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  border-radius: 5px;\n}\n\n#inputFormButton {\n  align-self: end;\n  margin: 5px;\n  width: 45%;\n}\n\n#inputWrapper {\n  overflow: hidden;\n}\n\n#inputForm {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n  margin: 10px;\n  margin-top: -100%;\n  transition: all 1s;\n}\n\n#inputForm.expanded,\n#projectAdd.expanded,\n#completedList.expanded {\n  margin-top: 0;\n}\n\n#titleInput {\n  grid-column: 1 / 4;\n}\n\n#descriptionForm {\n  grid-column: 1 / 5;\n  resize: none;\n}\n\n#dueDate {\n  grid-column: 1 / 3;\n}\n\n#dueDateLabel {\n  grid-column: 3 / 5;\n}\n\n#priorityDiv {\n  grid-column: 1 / 5;\n}\n\n#priority {\n  position: relative;\n  vertical-align: middle;\n}\n\n#dueDateLabel,\n#priorityLabel {\n  font-size: small;\n}\n\n#addBtn {\n  grid-column: 2 / 4;\n  width: 50%;\n  font-size: medium;\n}\n\n#container {\n  background-color: #fefce8;\n}\n\n#tdList,\n#completedList {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));\n  gap: 20px;\n  background-color: #fde047;\n  padding: 10px;\n}\n\nh4 {\n  margin: 1em 3em;\n}\n\n.entry {\n  display: grid;\n  grid-template-columns: 0.25fr 1fr 1fr 1fr;\n  grid-template-areas:\n    \"check title title dueDate\"\n    \"description description description description\"\n    \". . . delete\";\n  border-radius: 10px;\n  margin: 5px;\n  padding: 10px;\n  gap: 0;\n  background-color: #fef08a;\n}\n\n.entry {\n  border: 1px solid black;\n}\n\n.check {\n  grid-area: check;\n  width: 15px;\n}\n\n.title {\n  grid-area: title;\n  align-self: center;\n  justify-self: start;\n  font-size: larger;\n}\n\n.dueDate {\n  grid-area: dueDate;\n}\n\n.description {\n  grid-area: description;\n}\n\n.delete {\n  grid-area: delete;\n  width: 20%;\n  align-self: end;\n  justify-self: end;\n}\n\n.priority {\n  color: red;\n}\n\n#completedWrapper {\n  overflow: hidden;\n}\n\n#completedList {\n  margin-top: -100%;\n  transition: all 0.3s ease-out;\n}\n\n.menu-button {\n  display: none;\n}\n\n@media (max-width: 500px) {\n  body {\n    grid-template-columns: auto;\n  }\n\n  h4 {\n    margin: 1em 5em;\n  }\n\n  #container {\n    width: 100vw;\n  }\n\n  #sidebar {\n    overflow: hidden;\n    position: fixed;\n    height: 100%;\n    top: 5em;\n    margin-left: -100%;\n    transition: all 1s;\n    grid-template-rows: 0.5fr 0.4fr 0.25fr 1fr 1fr 3fr;\n  }\n\n  #sidebar.expanded {\n    margin-left: 0;\n    display: grid;\n  }\n\n  h4 {\n    margin: 1em 1em;\n  }\n\n  .menu-button {\n    display: block;\n    position: fixed;\n    left: 1em;\n    bottom: 1em;\n    background-color: #fde047;\n    text-align: center;\n    border-radius: 50%;\n  }\n\n  .mobile-header {\n    margin: 0.5em 2.5em;\n  }\n\n  img {\n    margin: 4px 0 0 0;\n  }\n}\n"],"sourceRoot":""}]);
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
    parent.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsT0FBTyxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLCtCQUErQix3Q0FBd0MsR0FBRyxVQUFVLGNBQWMsa0JBQWtCLG9EQUFvRCxpQ0FBaUMsa0JBQWtCLGlCQUFpQiw4QkFBOEIsR0FBRyxhQUFhLHlCQUF5QixzQkFBc0Isb0JBQW9CLHdCQUF3QixxQkFBcUIsR0FBRyxjQUFjLDhCQUE4QixrQkFBa0IseURBQXlELDBCQUEwQixnQ0FBZ0MsR0FBRyxrQkFBa0Isa0JBQWtCLGFBQWEsZ0JBQWdCLEdBQUcsb0JBQW9CLHFCQUFxQixzQkFBc0Isb0JBQW9CLEdBQUcsZUFBZSxpQkFBaUIscUJBQXFCLGVBQWUsc0JBQXNCLG9CQUFvQixHQUFHLFlBQVksNEJBQTRCLGlCQUFpQix5QkFBeUIsZ0JBQWdCLHdCQUF3QixzQkFBc0IscUJBQXFCLEdBQUcsd0JBQXdCLGVBQWUseUJBQXlCLGVBQWUsR0FBRyxxQkFBcUIscUJBQXFCLGlCQUFpQixHQUFHLGlCQUFpQixxQkFBcUIseUJBQXlCLHdCQUF3QixrQkFBa0IsNEJBQTRCLDZCQUE2QixHQUFHLGlCQUFpQixzQkFBc0IsaUJBQWlCLEdBQUcsbUJBQW1CLHVCQUF1QixxQkFBcUIsY0FBYyxHQUFHLHNCQUFzQixpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixnQkFBZ0IsZUFBZSxHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDBDQUEwQyxhQUFhLGlCQUFpQixzQkFBc0IsdUJBQXVCLEdBQUcsMEVBQTBFLGtCQUFrQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxzQkFBc0IsdUJBQXVCLGlCQUFpQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxlQUFlLHVCQUF1QiwyQkFBMkIsR0FBRyxvQ0FBb0MscUJBQXFCLEdBQUcsYUFBYSx1QkFBdUIsZUFBZSxzQkFBc0IsR0FBRyxnQkFBZ0IsOEJBQThCLEdBQUcsOEJBQThCLGtCQUFrQixnRUFBZ0UsY0FBYyw4QkFBOEIsa0JBQWtCLEdBQUcsUUFBUSxvQkFBb0IsR0FBRyxZQUFZLGtCQUFrQiw4Q0FBOEMsMklBQTJJLHdCQUF3QixnQkFBZ0Isa0JBQWtCLFdBQVcsOEJBQThCLEdBQUcsWUFBWSw0QkFBNEIsR0FBRyxZQUFZLHFCQUFxQixnQkFBZ0IsR0FBRyxZQUFZLHFCQUFxQix1QkFBdUIsd0JBQXdCLHNCQUFzQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsa0JBQWtCLDJCQUEyQixHQUFHLGFBQWEsc0JBQXNCLGVBQWUsb0JBQW9CLHNCQUFzQixHQUFHLGVBQWUsZUFBZSxHQUFHLHVCQUF1QixxQkFBcUIsR0FBRyxvQkFBb0Isc0JBQXNCLGtDQUFrQyxHQUFHLGtCQUFrQixrQkFBa0IsR0FBRywrQkFBK0IsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLHNCQUFzQixLQUFLLGtCQUFrQixtQkFBbUIsS0FBSyxnQkFBZ0IsdUJBQXVCLHNCQUFzQixtQkFBbUIsZUFBZSx5QkFBeUIseUJBQXlCLHlEQUF5RCxLQUFLLHlCQUF5QixxQkFBcUIsb0JBQW9CLEtBQUssVUFBVSxzQkFBc0IsS0FBSyxvQkFBb0IscUJBQXFCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLGdDQUFnQyx5QkFBeUIseUJBQXlCLEtBQUssc0JBQXNCLDBCQUEwQixLQUFLLFdBQVcsd0JBQXdCLEtBQUssR0FBRyxxQkFBcUI7QUFDanpNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFN2QyxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQjtBQUNPO0FBQ047QUFDTTtBQUNGOztBQUUxQztBQUNBLElBQU1LLE9BQU8sR0FBR3FCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztBQUVuRCxJQUFJcUMsUUFBUSxHQUFHLEVBQUU7QUFFakJBLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNFLEVBQUUsRUFBSztFQUN2QkMsWUFBWSxDQUFDQyxPQUFPLENBQUNGLEVBQUUsQ0FBQ3RCLFNBQVMsRUFBRWpELElBQUksQ0FBQ0MsU0FBUyxDQUFDc0UsRUFBRSxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDOztBQUVGO0FBQ0FKLHlEQUFZLENBQUNDLFFBQVEsRUFBRTNELE9BQU8sQ0FBQzBCLEtBQUssQ0FBQzs7QUFFckM7QUFDQTFCLE9BQU8sQ0FBQ2lFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ3ZDUCx5REFBWSxDQUFDQyxRQUFRLEVBQUUzRCxPQUFPLENBQUMwQixLQUFLLENBQUM7QUFDdkMsQ0FBQyxDQUFDOztBQUVGO0FBQ0FMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUMyQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUMzRSxJQUFNQyxVQUFVLEdBQUc3QyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDeEQ0QyxVQUFVLENBQUNwQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7RUFDdkNtQyxVQUFVLENBQUNwQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDMUMsQ0FBQyxDQUFDOztBQUVGO0FBQ0FWLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDMkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDcEUsSUFBTTdDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQzVELElBQU1ILEtBQUssR0FBR2EsMERBQWEsQ0FBQ1osWUFBWSxFQUFFcEIsT0FBTyxDQUFDO0VBQ2xEa0IsdURBQVUsQ0FBQ0MsS0FBSyxFQUFFQyxZQUFZLENBQUM7RUFDL0IsSUFBSUQsS0FBSyxFQUFFQyxZQUFZLENBQUNNLEtBQUssR0FBRyxFQUFFO0VBQ2xDZ0MseURBQVksQ0FBQ0MsUUFBUSxFQUFFM0QsT0FBTyxDQUFDMEIsS0FBSyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQzs7QUFFRjtBQUNBTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQzJDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ2hFLElBQU1yRSxLQUFLLEdBQUd5QixRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7RUFDbkQsSUFBTXpCLFdBQVcsR0FBR3dCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0VBQzlELElBQU14QixPQUFPLEdBQUd1QixRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7RUFDbEQsSUFBTXZCLFFBQVEsR0FBR3NCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztFQUVwRCxJQUFJMUIsS0FBSyxDQUFDOEIsS0FBSyxDQUFDeUMsSUFBSSxDQUFDLENBQUMsRUFBRTtJQUN0QixJQUFNQyxXQUFXLEdBQUcsSUFBSXpFLG9EQUFRLENBQzlCQyxLQUFLLENBQUM4QixLQUFLLEVBQ1g3QixXQUFXLENBQUM2QixLQUFLLEVBQ2pCNUIsT0FBTyxDQUFDNEIsS0FBSyxFQUNiM0IsUUFBUSxDQUFDNEMsT0FBTyxFQUNoQjNDLE9BQU8sQ0FBQzBCLEtBQ1YsQ0FBQztJQUNEVywwREFBYSxDQUFDK0IsV0FBVyxDQUFDO0lBQzFCVCxRQUFRLENBQUMxRSxJQUFJLENBQUNtRixXQUFXLENBQUM7O0lBRTFCO0lBQ0F4RSxLQUFLLENBQUM4QixLQUFLLEdBQUcsRUFBRTtJQUNoQjdCLFdBQVcsQ0FBQzZCLEtBQUssR0FBRyxFQUFFO0lBQ3RCNUIsT0FBTyxDQUFDNEIsS0FBSyxHQUFHLEVBQUU7SUFDbEIzQixRQUFRLENBQUM0QyxPQUFPLEdBQUcsS0FBSztJQUN4QnRCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDUSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFFakUsSUFBTXNDLE9BQU8sR0FBR2hELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztJQUNsRCxJQUFJK0MsT0FBTyxDQUFDdkMsU0FBUyxDQUFDd0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQzFDRCxPQUFPLENBQUN2QyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEM7SUFDQTtFQUNGLENBQUMsTUFBTTtJQUNMO0lBQ0FuQyxLQUFLLENBQUM4QixLQUFLLEdBQUcsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQU02QyxTQUFTLEdBQUdsRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFDdERpRCxTQUFTLENBQUNOLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDTyxPQUFPLEVBQUs7RUFDL0MsSUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE1BQU0sQ0FBQ0MsVUFBVTtFQUN4QztFQUNBLElBQUlILE9BQU8sQ0FBQ0UsTUFBTSxDQUFDNUMsU0FBUyxDQUFDd0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQy9DWCxRQUFRLEdBQUdBLFFBQVEsQ0FBQ2lCLE1BQU0sQ0FBQyxVQUFDQyxJQUFJO01BQUEsT0FBS0EsSUFBSSxDQUFDckMsU0FBUyxLQUFLaUMsTUFBTSxDQUFDMUYsRUFBRTtJQUFBLEVBQUM7SUFDbEUwRixNQUFNLENBQUNLLE1BQU0sQ0FBQyxDQUFDO0VBQ2pCO0VBQ0E7RUFDQSxJQUFJTixPQUFPLENBQUNFLE1BQU0sQ0FBQzVDLFNBQVMsQ0FBQ3dDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUM5QyxJQUFNUyxXQUFXLEdBQUdwQixRQUFRLENBQUM1RixHQUFHLENBQUMsVUFBQ2lILENBQUM7TUFBQSxPQUFLQSxDQUFDLENBQUN4QyxTQUFTO0lBQUEsRUFBQyxDQUFDeUMsT0FBTyxDQUFDUixNQUFNLENBQUMxRixFQUFFLENBQUM7SUFDdkU0RSxRQUFRLENBQUNvQixXQUFXLENBQUMsQ0FBQzdFLFNBQVMsR0FBRyxDQUFDeUQsUUFBUSxDQUFDb0IsV0FBVyxDQUFDLENBQUNuQyxZQUFZO0lBQ3JFUCwwREFBYSxDQUFDc0IsUUFBUSxDQUFDb0IsV0FBVyxDQUFDLENBQUM7SUFDcENOLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDLENBQUM7RUFDakI7RUFDQTtFQUNBLElBQUlOLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDM0YsRUFBRSxLQUFLLGlCQUFpQixFQUFFO0lBQzNDLElBQU1tQixTQUFTLEdBQUdzRSxPQUFPLENBQUNFLE1BQU07SUFDaEM7SUFDQSxJQUNFeEUsU0FBUyxDQUFDZ0Ysa0JBQWtCLENBQUNDLGlCQUFpQixDQUFDckQsU0FBUyxDQUFDd0MsUUFBUSxDQUMvRCxXQUNGLENBQUMsRUFDRDtNQUNBcEUsU0FBUyxDQUFDa0YsU0FBUyxHQUFHLGFBQWE7SUFDckMsQ0FBQyxNQUFNO01BQ0xsRixTQUFTLENBQUNrRixTQUFTLEdBQUcsYUFBYTtJQUNyQztJQUNBLElBQU0zQixhQUFhLEdBQUdwQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDOURtQyxhQUFhLENBQUMzQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDMUMwQixhQUFhLENBQUMzQixTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDN0M7QUFDRixDQUFDLENBQUM7QUFFRixJQUFNc0QsVUFBVSxHQUFHaEUsUUFBUSxDQUFDaUUsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUN6REQsVUFBVSxDQUFDcEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDekMsSUFBTUksT0FBTyxHQUFHaEQsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0VBQ2xEK0MsT0FBTyxDQUFDdkMsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3RDLENBQUMsQ0FBQzs7QUFFRjtBQUNBVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDMkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDekUsSUFBTXNCLFNBQVMsR0FBR2xFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUN0RGlFLFNBQVMsQ0FBQ3pELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztBQUN4QyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FkZExpc3RJdGVtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jaGVja1Byb2plY3RzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludExpc3RJdGVtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9wcmludFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy50YXNrSUQgPSBgaWQke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIpfWA7XG4gIH1cblxuICBnZXQgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgZ2V0IGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIGdldCBnZXRDb21wbGV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcbiAgfVxuXG4gIGdldCBnZXRQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICB9XG5cbiAgZ2V0IGdldFRhc2tJRCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrSUQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHNldCBkdWVEYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xuICAgIHRoaXMuX2NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgfVxuXG4gIHNldCBwcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8vIHRpbWVMZWZ0KCkge1xuICAvLyAgICAgaWYoZHVlRGF0ZSkge1xuICAvLyAgICAgICAgIG5vdyA9IG5ldyBEYXRlKCk7XG4gIC8vICAgICAgICAgcmV0dXJuIChub3cuZ2V0VGltZSgpIC0gdGhpcy5kdWVEYXRlLmdldFRpbWUoKSkvMzYwMDA7XG4gIC8vICAgICB9XG4gIC8vIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QodmFsaWQsIHByb2plY3RJbnB1dCkge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcblxuICBjb25zdCBwcm9qZWN0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RFcnJvclwiKTtcbiAgaWYgKHZhbGlkKSB7XG4gICAgLy8gQ3JlYXRlcyBuZXcgcHJvamVjdCB3aXRoIHN1cHBsaWVkIG5hbWUgYW5kIGFkZHMgaXQgdG8gdGhlIHNlbGVjdCBib3hcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBuZXdQcm9qZWN0LnZhbHVlID0gYCR7cHJvamVjdElucHV0LnZhbHVlfVByb2plY3RgO1xuICAgIG5ld1Byb2plY3QudGV4dCA9IHByb2plY3RJbnB1dC52YWx1ZTtcbiAgICBwcm9qZWN0LmFkZChuZXdQcm9qZWN0KTtcblxuICAgIC8vIE1ha2VzIG5ld1Byb2plY3QgdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgcHJvamVjdC52YWx1ZSA9IG5ld1Byb2plY3QudmFsdWU7XG4gICAgcHJvamVjdEVycm9yLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QWRkXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0RXJyb3IuaW5uZXJIVE1MID0gXCJQcm9qZWN0IG5hbWUgaW4gdXNlLlwiO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1Byb2plY3RzKHByb2plY3RJbnB1dCwgcHJvamVjdCkge1xuICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gIC8vIENoZWNrcyB0aGUgcHJvamVjdHMgaW4gdGhlIDxzZWxlY3Q+IGJveCB0byBzZWUgaWYgb25lIGV4aXN0cyB3aXRoIHRoZSBzYW1lIG5hbWVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0Lm9wdGlvbnNbaV0udmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZXhpc3RpbmdQcm9qZWN0LnNsaWNlKDAsIC03KSAmJlxuICAgICAgdmFsaWRcbiAgICApIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBwcm9qZWN0IGhhcyB1bmlxdWUgbmFtZSwgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcbiAgcmV0dXJuIHZhbGlkO1xufVxuIiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TGlzdEl0ZW0oTGlzdEl0ZW0pIHtcbiAgLy8gRW5jbG9zZXMgYWxsIHRhc2tzIGluIGEgZGl2IHdpdGggYSB1bmlxdWUgaWQgYW5kIHNoYXJlZCBjbGFzc1xuICBjb25zdCBuZXdFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0VudHJ5LmNsYXNzTmFtZSA9IFwiZW50cnlcIjtcbiAgbmV3RW50cnkuaWQgPSBMaXN0SXRlbS5nZXRUYXNrSUQ7XG5cbiAgLy8gQ3JlYXRlIGNoZWNrYm94IGZvciBtYXJraW5nIHRhc2tzIGFzIGNvbXBsZXRlIChvciB1bi1tYXJraW5nKVxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgY2hlY2tib3guY2xhc3NOYW1lID0gXCJjaGVja1wiO1xuICBjaGVja2JveC5jaGVja2VkID0gTGlzdEl0ZW0uZ2V0Q29tcGxldGVkO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgLy8gQ3JlYXRlIGxhYmVsIHdpdGggdGhlIHRhc2sncyB0aXRsZSBhbmQgaGlnaGxpZ2h0cyBpdCBpZiBpdCdzIGEgcHJpb3JpdHlcbiAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5ld0xhYmVsLmlubmVySFRNTCA9IExpc3RJdGVtLmdldFRpdGxlO1xuICBuZXdMYWJlbC5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG4gIGlmIChMaXN0SXRlbS5nZXRQcmlvcml0eSkge1xuICAgIG5ld0xhYmVsLmNsYXNzTmFtZSArPSBcIiBwcmlvcml0eVwiO1xuICB9XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKG5ld0xhYmVsKTtcblxuICAvLyBBZGQgZGVzY3JpcHRpb24uIElmIG5vIGRlc2NyaXB0aW9uIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc2NyaXB0aW9uVGV4dC5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uVGV4dC5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXREZXNjcmlwdGlvbjtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcblxuICAvLyBBZGQgZHVlIGRhdGUuIElmIG5vIGRhdGUgaXMgc3VwcGxpZWQgZmllbGQgd2lsbCBiZSBibGFua1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZURhdGUuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RHVlRGF0ZTtcbiAgZHVlRGF0ZS5jbGFzc05hbWUgPSBcImR1ZURhdGVcIjtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgLy8gQWRkIGJ1dHRvbiB0byBkZWxldGUgdGFza1xuICAvLyBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVsZXRlQnRuLnNyYyA9IGRlbGV0ZUljb247XG4gIC8vIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSBcIkRlbGV0ZVwiO1xuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gXCJkZWxldGVcIjtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAvLyBBZGRzIHRhc2sgdG8gYXBwcm9wcmlhdGUgZGl2IGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0J3MgbWFya2VkIGNvbXBsZXRlXG4gIGlmICghTGlzdEl0ZW0uZ2V0Q29tcGxldGVkKSB7XG4gICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJcIik7XG4gICAgY29uc3QgdGRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZExpc3RcIik7XG4gICAgdGRMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgfSBlbHNlIHtcbiAgICBuZXdMYWJlbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcImxpbmUtdGhyb3VnaFwiKTtcbiAgICBjb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRMaXN0XCIpO1xuICAgIGNvbXBsZXRlZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9XG59XG4iLCJpbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5cbmNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRMaXN0XCIpO1xuY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcblxuLy8gQ2hlY2tzIGxpc3Qgb2YgdG8tZG8ncyBhbmQgcHJpbnRzIGVhY2ggb25lIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCBwcm9qZWN0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludFByb2plY3QoZnVsbExpc3QsIHZhbHVlKSB7XG4gIHRkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb21wbGV0ZWRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGZ1bGxMaXN0LmZvckVhY2goKExpc3RJdGVtKSA9PiB7XG4gICAgaWYgKExpc3RJdGVtLmdldFByb2plY3QgPT09IHZhbHVlKSB7XG4gICAgICBwcmludExpc3RJdGVtKExpc3RJdGVtKTtcbiAgICB9XG4gIH0pO1xuICAvLyBPYmplY3QuZW50cmllcyh3aW5kb3cubG9jYWxTdG9yYWdlKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gIC8vICAgaWYgKEpTT04ucGFyc2UodmFsKS5nZXRQcm9qZWN0ID09PSB2YWx1ZSkge1xuICAvLyAgICAgcHJpbnRMaXN0SXRlbShKU09OLnBhcnNlKHZhbCkpO1xuICAvLyAgIH1cbiAgLy8gfSk7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMjB2dykgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZW0gYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xufVxuXG4jaGVhZGVyIHtcbiAgbWFyZ2luOiAwLjI1ZW0gMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG59XG5cbiNzaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjRmciAwLjI1ZnIgMC40ZnIgMWZyIDNmcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgYmxhY2s7XG59XG5cbiNwcm9qZWN0Rm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuI3Byb2plY3RzTGFiZWwge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDEuNWVtO1xufVxuXG4jcHJvamVjdHMge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHdpZHRoOiA3MCU7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBtYXJnaW46IDAgMS41ZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBoZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNwcm9qZWN0Rm9ybUJ1dHRvbiB7XG4gIHdpZHRoOiA1NSU7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICBtYXJnaW46IDIlO1xufVxuXG4jcHJvamVjdFdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNwcm9qZWN0QWRkIHtcbiAgbWFyZ2luLXRvcDogLTMwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG59XG5cbiNuZXdQcm9qZWN0IHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3Byb2plY3RBZGQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNpbnB1dEZvcm1CdXR0b24ge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDUlO1xufVxuXG4jaW5wdXRXcmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2lucHV0Rm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi10b3A6IC0xMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbiNpbnB1dEZvcm0uZXhwYW5kZWQsXG4jcHJvamVjdEFkZC5leHBhbmRlZCxcbiNjb21wbGV0ZWRMaXN0LmV4cGFuZGVkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuI3RpdGxlSW5wdXQge1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG59XG5cbiNkZXNjcmlwdGlvbkZvcm0ge1xuICBncmlkLWNvbHVtbjogMSAvIDU7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuI2R1ZURhdGUge1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG59XG5cbiNkdWVEYXRlTGFiZWwge1xuICBncmlkLWNvbHVtbjogMyAvIDU7XG59XG5cbiNwcmlvcml0eURpdiB7XG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcbn1cblxuI3ByaW9yaXR5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jZHVlRGF0ZUxhYmVsLFxuI3ByaW9yaXR5TGFiZWwge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4jYWRkQnRuIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZjZTg7XG59XG5cbiN0ZExpc3QsXG4jY29tcGxldGVkTGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1ZW0sIDFmcikpO1xuICBnYXA6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAxZW0gM2VtO1xufVxuXG4uZW50cnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImNoZWNrIHRpdGxlIHRpdGxlIGR1ZURhdGVcIlxuICAgIFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cIlxuICAgIFwiLiAuIC4gZGVsZXRlXCI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBnYXA6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWYwOGE7XG59XG5cbi5lbnRyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY2hlY2sge1xuICBncmlkLWFyZWE6IGNoZWNrO1xuICB3aWR0aDogMTVweDtcbn1cblxuLnRpdGxlIHtcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmR1ZURhdGUge1xuICBncmlkLWFyZWE6IGR1ZURhdGU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG59XG5cbi5kZWxldGUge1xuICBncmlkLWFyZWE6IGRlbGV0ZTtcbiAgd2lkdGg6IDIwJTtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuLnByaW9yaXR5IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuI2NvbXBsZXRlZFdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jY29tcGxldGVkTGlzdCB7XG4gIG1hcmdpbi10b3A6IC0xMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLm1lbnUtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGJvZHkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAgfVxuXG4gIGg0IHtcbiAgICBtYXJnaW46IDFlbSA1ZW07XG4gIH1cblxuICAjY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuICAjc2lkZWJhciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjRmciAwLjI1ZnIgMWZyIDFmciAzZnI7XG4gIH1cblxuICAjc2lkZWJhci5leHBhbmRlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxuXG4gIGg0IHtcbiAgICBtYXJnaW46IDFlbSAxZW07XG4gIH1cblxuICAubWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAxZW07XG4gICAgYm90dG9tOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLm1vYmlsZS1oZWFkZXIge1xuICAgIG1hcmdpbjogMC41ZW0gMi41ZW07XG4gIH1cblxuICBpbWcge1xuICAgIG1hcmdpbjogNHB4IDAgMCAwO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLCtDQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixvREFBb0Q7RUFDcEQscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VB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Q0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAyMHZ3KSBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZW0gYXV0bztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIG1hcmdpbjogMC4yNWVtIDAuNWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNGZyIDAuMjVmciAwLjRmciAxZnIgM2ZyO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0c0xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAxLjVlbTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICB3aWR0aDogNzAlO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBtYXJnaW46IDAgMS41ZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jcHJvamVjdEZvcm1CdXR0b24ge1xcbiAgd2lkdGg6IDU1JTtcXG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI3Byb2plY3RXcmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0QWRkIHtcXG4gIG1hcmdpbi10b3A6IC0zMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbiNuZXdQcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdEFkZCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2lucHV0Rm9ybUJ1dHRvbiB7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBtYXJnaW46IDVweDtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbiNpbnB1dFdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2lucHV0Rm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogLTEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbiNpbnB1dEZvcm0uZXhwYW5kZWQsXFxuI3Byb2plY3RBZGQuZXhwYW5kZWQsXFxuI2NvbXBsZXRlZExpc3QuZXhwYW5kZWQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuI3RpdGxlSW5wdXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbn1cXG5cXG4jZGVzY3JpcHRpb25Gb3JtIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI2R1ZURhdGUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4jZHVlRGF0ZUxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNTtcXG59XFxuXFxuI3ByaW9yaXR5RGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbiNkdWVEYXRlTGFiZWwsXFxuI3ByaW9yaXR5TGFiZWwge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG59XFxuXFxuI2FkZEJ0biB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmNlODtcXG59XFxuXFxuI3RkTGlzdCxcXG4jY29tcGxldGVkTGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTVlbSwgMWZyKSk7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaDQge1xcbiAgbWFyZ2luOiAxZW0gM2VtO1xcbn1cXG5cXG4uZW50cnkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImNoZWNrIHRpdGxlIHRpdGxlIGR1ZURhdGVcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXG4gICAgXFxcIi4gLiAuIGRlbGV0ZVxcXCI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjA4YTtcXG59XFxuXFxuLmVudHJ5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgZ3JpZC1hcmVhOiBjaGVjaztcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgZ3JpZC1hcmVhOiBkdWVEYXRlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiNjb21wbGV0ZWRXcmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNjb21wbGV0ZWRMaXN0IHtcXG4gIG1hcmdpbi10b3A6IC0xMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICB9XFxuXFxuICBoNCB7XFxuICAgIG1hcmdpbjogMWVtIDVlbTtcXG4gIH1cXG5cXG4gICNjb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICB9XFxuXFxuICAjc2lkZWJhciB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDVlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC40ZnIgMC4yNWZyIDFmciAxZnIgM2ZyO1xcbiAgfVxcblxcbiAgI3NpZGViYXIuZXhwYW5kZWQge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG5cXG4gIGg0IHtcXG4gICAgbWFyZ2luOiAxZW0gMWVtO1xcbiAgfVxcblxcbiAgLm1lbnUtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMWVtO1xcbiAgICBib3R0b206IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB9XFxuXFxuICAubW9iaWxlLWhlYWRlciB7XFxuICAgIG1hcmdpbjogMC41ZW0gMi41ZW07XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBtYXJnaW46IDRweCAwIDAgMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL2FkZExpc3RJdGVtXCI7XG5pbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XG5pbXBvcnQgY2hlY2tQcm9qZWN0cyBmcm9tIFwiLi9jaGVja1Byb2plY3RzXCI7XG5pbXBvcnQgcHJpbnRQcm9qZWN0IGZyb20gXCIuL3ByaW50UHJvamVjdFwiO1xuXG4vLyBEb20gZWxlbWVudHMgdXNlZCBmb3IgYW5kIGluIGV2ZW50IGxpc3RlbmVyc1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbmxldCBmdWxsTGlzdCA9IFtdO1xuXG5mdWxsTGlzdC5mb3JFYWNoKChMSSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMSS5nZXRUYXNrSUQsIEpTT04uc3RyaW5naWZ5KExJKSk7XG59KTtcblxuLy8gUHJpbnRzIGNvbnRlbnRzIG9mIGRlZmF1bHQgcHJvamVjdCBvbiBwYWdlIGxvYWRcbnByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG5cbi8vIFByaW50cyBjb250ZW50cyBvZiBzZWxlY3RlZCBwcm9qZWN0IHdoZW4gc2VsZWN0aW9uIGlzIGNoYW5nZWRcbnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIHByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG59KTtcblxuLy8gRXhwYW5kcyBvciBjb2xsYXBzZXMgdGhlIGZvcm0gZm9yIGFkZGluZyBhIHByb2plY3Qgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0Rm9ybUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0QWRkXCIpO1xuICBwcm9qZWN0QWRkLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgcHJvamVjdEFkZC5jbGFzc0xpc3QudG9nZ2xlKFwiY29sbGFwc2VkXCIpO1xufSk7XG5cbi8vIENyZWF0ZXMgbmV3IHByb2plY3Qgd2hlbiAnTmV3IFByb2plY3QnIGJ1dHRvbiBpcyBwcmVzc2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0SW5wdXRcIik7XG4gIGNvbnN0IHZhbGlkID0gY2hlY2tQcm9qZWN0cyhwcm9qZWN0SW5wdXQsIHByb2plY3QpO1xuICBhZGRQcm9qZWN0KHZhbGlkLCBwcm9qZWN0SW5wdXQpO1xuICBpZiAodmFsaWQpIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG59KTtcblxuLy8gQ3JlYXRlcyBhIG5ldywgdW5jb21wbGV0ZWQgdGFzayB3aGVuICdBZGQnIGJ1dHRvbiBpcyBwcmVzc2VkIElGIHRpdGxlIGlzIHByZXNlbnRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZUlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25Gb3JtXCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG5cbiAgaWYgKHRpdGxlLnZhbHVlLnRyaW0oKSkge1xuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gbmV3IExpc3RJdGVtKFxuICAgICAgdGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eS5jaGVja2VkLFxuICAgICAgcHJvamVjdC52YWx1ZVxuICAgICk7XG4gICAgcHJpbnRMaXN0SXRlbShuZXdMaXN0SXRlbSk7XG4gICAgZnVsbExpc3QucHVzaChuZXdMaXN0SXRlbSk7XG5cbiAgICAvLyBDbGVhcnMgYWxsIGlucHV0c1xuICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgcHJpb3JpdHkuY2hlY2tlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRGb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gICAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZXhwYW5kZWRcIikpIHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICAgIH1cbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdMaXN0SXRlbS5nZXRUYXNrSUQsIEpTT04uc3RyaW5naWZ5KG5ld0xpc3RJdGVtKSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgdGhlIHRpdGxlIGlzIHdoaXRlc3BhY2UsIHJlbW92ZXMgaXQgYW5kIHdhaXRzIGZvciBhIG5ldyB0aXRsZS5cbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gIH1cbn0pO1xuXG4vLyBMaXN0ZW5zIGZvciBhbnkgY2xpY2tzIHdpdGhpbiB0aGUgdGFza3MgY29udGFpbmVyLlxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQudGFyZ2V0LnBhcmVudE5vZGU7XG4gIC8vIElmIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZCwgZGVsZXRlcyB0YXNrLlxuICBpZiAoZWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlXCIpKSB7XG4gICAgZnVsbExpc3QgPSBmdWxsTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0VGFza0lEICE9PSBwYXJlbnQuaWQpO1xuICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgfVxuICAvLyBJZiBjaGVja2JveCBpcyBjbGlja2VkLCB0b2dnbGVzICdjb21wbGV0ZWQnIGFuZCBtb3ZlcyB0YXNrIGZyb20gJ3Rhc2tzJyB0byAnY29tcGxldGVkJyBvciB2aWNlLXZlcnNhXG4gIGlmIChlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja1wiKSkge1xuICAgIGNvbnN0IHRvZ2dsZUluZGV4ID0gZnVsbExpc3QubWFwKChlKSA9PiBlLmdldFRhc2tJRCkuaW5kZXhPZihwYXJlbnQuaWQpO1xuICAgIGZ1bGxMaXN0W3RvZ2dsZUluZGV4XS5jb21wbGV0ZWQgPSAhZnVsbExpc3RbdG9nZ2xlSW5kZXhdLmdldENvbXBsZXRlZDtcbiAgICBwcmludExpc3RJdGVtKGZ1bGxMaXN0W3RvZ2dsZUluZGV4XSk7XG4gICAgcGFyZW50LnJlbW92ZSgpO1xuICB9XG4gIC8vIElmICdDb21wbGV0ZWQnIGhlYWRlciBpcyBjbGlja2VkLCBleHBhbmRzIHRoZSBsaXN0IG9mIGNvbXBsZXRlZCB0YXNrc1xuICBpZiAoZWxlbWVudC50YXJnZXQuaWQgPT09IFwiZXhwYW5kQ29tcGxldGVkXCIpIHtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBlbGVtZW50LnRhcmdldDtcbiAgICAvLyBSaWRpY3Vsb3VzIGNoYWluZWQgRE9NIGxpc3QgcG9pbnRzIHRvIHRoZSBjb21wbGV0ZWRMaXN0IGRpdiB0byBjaGVjayBpZiBpdCdzIGNvbGxhcHNlZFxuICAgIGlmIChcbiAgICAgIGNvbXBsZXRlZC5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICBcImNvbGxhcHNlZFwiXG4gICAgICApXG4gICAgKSB7XG4gICAgICBjb21wbGV0ZWQuaW5uZXJUZXh0ID0gXCJDb21wbGV0ZWQg4pa/XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlZC5pbm5lclRleHQgPSBcIkNvbXBsZXRlZCDilrZcIjtcbiAgICB9XG4gICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcbiAgICBjb21wbGV0ZWRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbiAgICBjb21wbGV0ZWRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XG4gIH1cbn0pO1xuXG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1dHRvblwiKTtcbm1vYmlsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59KTtcblxuLy8gRXhwYW5kcyBvciBjb2xsYXBzZXMgZm9ybSBmb3IgYWRkaW5nIGEgbmV3IHRhc2sgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1CdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1cIik7XG4gIGlucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG59KTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJMaXN0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiX2NsYXNzQ2FsbENoZWNrIiwiY29tcGxldGVkIiwidGFza0lEIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2V0IiwiX3RpdGxlIiwiX2Rlc2NyaXB0aW9uIiwiX2R1ZURhdGUiLCJfcHJpb3JpdHkiLCJfY29tcGxldGVkIiwiX3Byb2plY3QiLCJzZXQiLCJkZWZhdWx0IiwiYWRkUHJvamVjdCIsInZhbGlkIiwicHJvamVjdElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RFcnJvciIsIm5ld1Byb2plY3QiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJ0ZXh0IiwiYWRkIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2hlY2tQcm9qZWN0cyIsIm9wdGlvbnMiLCJleGlzdGluZ1Byb2plY3QiLCJ0b0xvd2VyQ2FzZSIsImRlbGV0ZUljb24iLCJwcmludExpc3RJdGVtIiwibmV3RW50cnkiLCJjbGFzc05hbWUiLCJnZXRUYXNrSUQiLCJjaGVja2JveCIsInR5cGUiLCJjaGVja2VkIiwiZ2V0Q29tcGxldGVkIiwiYXBwZW5kQ2hpbGQiLCJuZXdMYWJlbCIsImdldFRpdGxlIiwiZ2V0UHJpb3JpdHkiLCJkZXNjcmlwdGlvblRleHQiLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJkZWxldGVCdG4iLCJzcmMiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidGRMaXN0IiwiY29tcGxldGVkTGlzdCIsInByaW50UHJvamVjdCIsImZ1bGxMaXN0IiwiZm9yRWFjaCIsImdldFByb2plY3QiLCJMSSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdEFkZCIsInRyaW0iLCJuZXdMaXN0SXRlbSIsInNpZGViYXIiLCJjb250YWlucyIsImNvbnRhaW5lciIsImVsZW1lbnQiLCJwYXJlbnQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZmlsdGVyIiwidGFzayIsInJlbW92ZSIsInRvZ2dsZUluZGV4IiwiZSIsImluZGV4T2YiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJmaXJzdEVsZW1lbnRDaGlsZCIsImlubmVyVGV4dCIsIm1vYmlsZU1lbnUiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==