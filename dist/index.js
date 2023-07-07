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
  // const deleteBtn = document.createElement('button');
  var deleteBtn = document.createElement('img');
  deleteBtn.src = _trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  // deleteBtn.innerHTML = "Delete";
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

var tdList = document.getElementById('tdList');
var completedList = document.getElementById('completedList');

//Checks list of to-do's and prints each one that matches the current project
function printProject(fullList, value) {
  tdList.innerHTML = "";
  completedList.innerHTML = "";
  fullList.forEach(function (ListItem) {
    if (ListItem.getProject === value) {
      (0,_printListItem__WEBPACK_IMPORTED_MODULE_0__["default"])(ListItem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxh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LGlCQUFpQixDQUFDLENBQUMrQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN2RSxJQUFNaUIsU0FBUyxHQUFHakUsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ3REZ0UsU0FBUyxDQUFDeEQsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDO0VBQ3RDdUQsU0FBUyxDQUFDeEQsU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYWRkTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NoZWNrUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uID0gXCIgXCIsIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50YXNrSUQgPSBcImlkXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIGdldCBnZXREdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldFByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcclxuICAgIH1cclxuICAgIGdldCBnZXRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbXBsZXRlZDtcclxuICAgIH1cclxuICAgIGdldCBnZXRQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldFRhc2tJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrSURcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBkdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuICAgIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBzZXQgY29tcGxldGVkKGNvbXBsZXRlZCkge1xyXG4gICAgICAgIHRoaXMuX2NvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIH1cclxuICAgIHNldCBwcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gdGltZUxlZnQoKSB7XHJcbiAgICAvLyAgICAgaWYoZHVlRGF0ZSkge1xyXG4gICAgLy8gICAgICAgICBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmR1ZURhdGUuZ2V0VGltZSgpKS8zNjAwMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQcm9qZWN0KHZhbGlkLCBwcm9qZWN0SW5wdXQpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcclxuXHJcbiAgICBsZXQgcHJvamVjdEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RFcnJvcicpO1xyXG4gICAgaWYodmFsaWQpIHtcclxuICAgICAgICAvL0NyZWF0ZXMgbmV3IHByb2plY3Qgd2l0aCBzdXBwbGllZCBuYW1lIGFuZCBhZGRzIGl0IHRvIHRoZSBzZWxlY3QgYm94XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LnZhbHVlID0gcHJvamVjdElucHV0LnZhbHVlICsgXCJQcm9qZWN0XCI7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0ID0gcHJvamVjdElucHV0LnZhbHVlO1xyXG4gICAgICAgIHByb2plY3QuYWRkKG5ld1Byb2plY3QpO1xyXG5cclxuICAgICAgICAvL01ha2VzIG5ld1Byb2plY3QgdGhlIGFjdGl2ZSBwcm9qZWN0XHJcbiAgICAgICAgcHJvamVjdC52YWx1ZSA9IG5ld1Byb2plY3QudmFsdWU7XHJcbiAgICAgICAgcHJvamVjdEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFkZCcpLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7ICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0RXJyb3IuaW5uZXJIVE1MID0gXCJQcm9qZWN0IG5hbWUgaW4gdXNlLlwiO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tQcm9qZWN0cyhwcm9qZWN0SW5wdXQsIHByb2plY3QpIHtcclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgLy9DaGVja3MgdGhlIHByb2plY3RzIGluIHRoZSA8c2VsZWN0PiBib3ggdG8gc2VlIGlmIG9uZSBleGlzdHMgd2l0aCB0aGUgc2FtZSBuYW1lXHJcbiAgICBmb3IobGV0IGk9MCA7IGk8cHJvamVjdC5vcHRpb25zLmxlbmd0aCA7IGkrKykge1xyXG4gICAgICAgIGxldCBleGlzdGluZ1Byb2plY3QgPSBwcm9qZWN0Lm9wdGlvbnNbaV0udmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAocHJvamVjdElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGV4aXN0aW5nUHJvamVjdC5zbGljZSgwLCAtNykgJiYgdmFsaWQpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9SZXR1cm5zIHRydWUgaWYgdGhlIHByb2plY3QgaGFzIHVuaXF1ZSBuYW1lLCBvdGhlcndpc2UgcmV0dXJucyBmYWxzZVxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG59IiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi90cmFzaC1jYW4tb3V0bGluZS5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRMaXN0SXRlbShMaXN0SXRlbSkge1xyXG5cclxuICAgIC8vRW5jbG9zZXMgYWxsIHRhc2tzIGluIGEgZGl2IHdpdGggYSB1bmlxdWUgaWQgYW5kIHNoYXJlZCBjbGFzc1xyXG4gICAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld0VudHJ5LmNsYXNzTmFtZSA9IFwiZW50cnlcIjtcclxuICAgIG5ld0VudHJ5LmlkID0gTGlzdEl0ZW0uZ2V0VGFza0lEO1xyXG5cclxuICAgIC8vQ3JlYXRlIGNoZWNrYm94IGZvciBtYXJraW5nIHRhc2tzIGFzIGNvbXBsZXRlIChvciB1bi1tYXJraW5nKVxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBMaXN0SXRlbS5nZXRDb21wbGV0ZWQ7XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gICAgLy9DcmVhdGUgbGFiZWwgd2l0aCB0aGUgdGFzaydzIHRpdGxlIGFuZCBoaWdobGlnaHRzIGl0IGlmIGl0J3MgYSBwcmlvcml0eVxyXG4gICAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmV3TGFiZWwuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0VGl0bGU7XHJcbiAgICBuZXdMYWJlbC5jbGFzc05hbWUgPSBcInRpdGxlXCI7XHJcbiAgICBpZihMaXN0SXRlbS5nZXRQcmlvcml0eSl7XHJcbiAgICAgICAgbmV3TGFiZWwuY2xhc3NOYW1lICs9IFwiIHByaW9yaXR5XCI7XHJcbiAgICB9XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XHJcblxyXG4gICAgLy9BZGQgZGVzY3JpcHRpb24uIElmIG5vIGRlc2NyaXB0aW9uIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlc2NyaXB0aW9uVGV4dC5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uXCI7XHJcbiAgICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb247XHJcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xyXG5cclxuICAgIC8vQWRkIGR1ZSBkYXRlLiBJZiBubyBkYXRlIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVEYXRlLmlubmVySFRNTCA9IExpc3RJdGVtLmdldER1ZURhdGU7XHJcbiAgICBkdWVEYXRlLmNsYXNzTmFtZSA9IFwiZHVlRGF0ZVwiO1xyXG4gICAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcblxyXG4gICAgLy9BZGQgYnV0dG9uIHRvIGRlbGV0ZSB0YXNrXHJcbiAgICAvLyBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZGVsZXRlQnRuLnNyYyA9IGRlbGV0ZUljb247XHJcbiAgICAvLyBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcclxuICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xyXG4gICAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHJcbiAgICAvL0FkZHMgdGFzayB0byBhcHByb3ByaWF0ZSBkaXYgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQncyBtYXJrZWQgY29tcGxldGVcclxuICAgIGlmKCFMaXN0SXRlbS5nZXRDb21wbGV0ZWQpe1xyXG4gICAgICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwiXCIpO1xyXG4gICAgICAgIHRkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHByaW50TGlzdEl0ZW0gZnJvbSBcIi4vcHJpbnRMaXN0SXRlbVwiO1xyXG5cclxuY29uc3QgdGRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RkTGlzdCcpO1xyXG5jb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRlZExpc3QnKTtcclxuXHJcbi8vQ2hlY2tzIGxpc3Qgb2YgdG8tZG8ncyBhbmQgcHJpbnRzIGVhY2ggb25lIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCBwcm9qZWN0XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50UHJvamVjdChmdWxsTGlzdCwgdmFsdWUpIHtcclxuICAgIHRkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29tcGxldGVkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZnVsbExpc3QuZm9yRWFjaChMaXN0SXRlbSA9PiB7XHJcbiAgICAgICAgaWYoTGlzdEl0ZW0uZ2V0UHJvamVjdCA9PT0gdmFsdWUpe1xyXG4gICAgICAgICAgICBwcmludExpc3RJdGVtKExpc3RJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMGVtLCAyMGVtKSBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAuNGZyIC4yNWZyIC40ZnIgMWZyIDNmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbn1cclxuXHJcbiNwcm9qZWN0Rm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuI3Byb2plY3RzTGFiZWwge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwIDEuNWVtO1xyXG59XHJcblxyXG4jcHJvamVjdHMge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICAgIG1hcmdpbjogMCAxLjVlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbiNwcm9qZWN0Rm9ybUJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4jcHJvamVjdFdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuI3Byb2plY3RBZGQge1xyXG4gICAgbWFyZ2luLXRvcDogLTMwJTsgXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxufVxyXG5cclxuI25ld1Byb2plY3Qge1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbiNwcm9qZWN0QWRkIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSBcclxuXHJcbiNpbnB1dEZvcm1CdXR0b24ge1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4jaW5wdXRXcmFwcGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNpbnB1dEZvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG59XHJcblxyXG4jaW5wdXRGb3JtLmV4cGFuZGVkLCAjcHJvamVjdEFkZC5leHBhbmRlZCwgI2NvbXBsZXRlZExpc3QuZXhwYW5kZWQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuI3RpdGxlSW5wdXQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb25Gb3JtIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuI2R1ZURhdGUge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG59XHJcblxyXG5cclxuI2R1ZURhdGVMYWJlbCB7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIDU7XHJcbn1cclxuXHJcbiNwcmlvcml0eURpdiB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDU7XHJcbn1cclxuXHJcbiNwcmlvcml0eSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4jZHVlRGF0ZUxhYmVsLCAjcHJpb3JpdHlMYWJlbCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4jYWRkQnRuIHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZjZTg7XHJcbn1cclxuXHJcbiN0ZExpc3QsICNjb21wbGV0ZWRMaXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNWVtLCAxZnIpKTtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmVudHJ5e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjI1ZnIgMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICBcImNoZWNrIHRpdGxlIHRpdGxlIGR1ZURhdGVcIlxyXG4gICAgICAgIFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIFwiLiAuIC4gZGVsZXRlXCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZ2FwOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjA4YTtcclxufVxyXG5cclxuLmVudHJ5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBncmlkLWFyZWE6IGNoZWNrO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uZHVlRGF0ZSB7XHJcbiAgICBncmlkLWFyZWE6IGR1ZURhdGU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG59XHJcblxyXG4ucHJpb3JpdHkge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI2NvbXBsZXRlZFdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2NvbXBsZXRlZExpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsUUFBUTtJQUNSLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEM7OztzQkFHa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsTUFBTTtJQUNOLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwZW0sIDIwZW0pIGF1dG87XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IC41ZnIgLjRmciAuMjVmciAuNGZyIDFmciAzZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIG1hcmdpbjogMCA1JTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RGb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHNMYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW46IDAgMS41ZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgIG1hcmdpbjogMCAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RGb3JtQnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDU1JTtcXHJcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICAgIG1hcmdpbjogMiU7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0V3JhcHBlciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RBZGQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMzAlOyBcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI25ld1Byb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdEFkZCBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LCB0ZXh0YXJlYSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn0gXFxyXFxuXFxyXFxuI2lucHV0Rm9ybUJ1dHRvbiB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIHdpZHRoOiA0NSU7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dFdyYXBwZXIge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRGb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0Rm9ybS5leHBhbmRlZCwgI3Byb2plY3RBZGQuZXhwYW5kZWQsICNjb21wbGV0ZWRMaXN0LmV4cGFuZGVkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlSW5wdXQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxufVxcclxcblxcclxcbiNkZXNjcmlwdGlvbkZvcm0ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDU7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2R1ZURhdGUge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNkdWVEYXRlTGFiZWwge1xcclxcbiAgICBncmlkLWNvbHVtbjogMyAvIDU7XFxyXFxufVxcclxcblxcclxcbiNwcmlvcml0eURpdiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcXHJcXG59XFxyXFxuXFxyXFxuI3ByaW9yaXR5IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4jZHVlRGF0ZUxhYmVsLCAjcHJpb3JpdHlMYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxyXFxufVxcclxcblxcclxcbiNhZGRCdG4ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZjZTg7XFxyXFxufVxcclxcblxcclxcbiN0ZExpc3QsICNjb21wbGV0ZWRMaXN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTVlbSwgMWZyKSk7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5lbnRyeXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICBcXFwiY2hlY2sgdGl0bGUgdGl0bGUgZHVlRGF0ZVxcXCJcXHJcXG4gICAgICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXHJcXG4gICAgICAgIFxcXCIuIC4gLiBkZWxldGVcXFwiO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMDhhO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50cnkge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFja1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2sge1xcclxcbiAgICBncmlkLWFyZWE6IGNoZWNrO1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZURhdGUge1xcclxcbiAgICBncmlkLWFyZWE6IGR1ZURhdGU7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUge1xcclxcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbXBsZXRlZFdyYXBwZXIge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcGxldGVkTGlzdCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi9hZGRMaXN0SXRlbVwiO1xuaW1wb3J0IHByaW50TGlzdEl0ZW0gZnJvbSBcIi4vcHJpbnRMaXN0SXRlbVwiO1xuaW1wb3J0IGFkZFByb2plY3QgZnJvbSAnLi9hZGRQcm9qZWN0JztcbmltcG9ydCBjaGVja1Byb2plY3RzIGZyb20gJy4vY2hlY2tQcm9qZWN0cyc7XG5pbXBvcnQgcHJpbnRQcm9qZWN0IGZyb20gJy4vcHJpbnRQcm9qZWN0JztcblxuLy8gRG9tIGVsZW1lbnRzIHVzZWQgZm9yIGFuZCBpbiBldmVudCBsaXN0ZW5lcnNcbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcblxuLy9IYXJkLWNvZGVkIGVudHJpZXMgdG8gc2ltcGxpZnkgdGVzdGluZywgd2lsbCBiZSBkZWxldGVkIG9uY2UgcHJvamVjdCBpcyBmaW5pc2hlZFxuICAgIGNvbnN0IGRlZmF1bHRMaXN0ID0gbmV3IExpc3RJdGVtKFwiRGVmYXVsdCBJdGVtXCIsXCJUaGlzIGlzIGEgZGVmYXVsdCBpdGVtIGZvciBkZWZhdWx0aW5nXCIsXCIwNy0wMi0yMDIzXCIsZmFsc2UsIFwiZGVmYXVsdFByb2plY3RcIik7XG4gICAgY29uc3QgZGVmYXVsdExpc3QyID0gbmV3IExpc3RJdGVtKFwiQWxzbyBkZWZhdWx0IEl0ZW1cIixcIlRoaXMgaXMgYSBkZWZhdWx0IGl0ZW0gZm9yIGRlZmF1bHRpbmcsIGJ1dCB3aXRoIGEgc2xpZ2h0bHkgbG9uZ2VyIHN0cmluZyB0byB0ZXN0IHdyYXBwaW5nXCIsXCIwNy0wMi0yMDIzXCIsZmFsc2UsIFwiZGVmYXVsdFByb2plY3RcIik7XG4gICAgY29uc3QgZGVmYXVsdExpc3QzID0gbmV3IExpc3RJdGVtKFwiTG90cyBvZiBkZWZhdWx0IEl0ZW0ocylcIixcIlRoaXMgaXMgYSBkZWZhdWx0IGl0ZW0gZm9yIGRlZmF1bHRpbmcsIGJ1dCB3aXRoIGFuIGV4Y2VwdGlvbmFsbHkgbG9uZyBzdHJpbmcgc28gdGhhdCBJIGNhbiB0ZXN0IHRleHQgd3JhcHBpbmcgYW5kIHBvdGVudGlhbGx5IGNvbmNhdGVuYXRpbmcsIHdoaWNoIEknbSBub3QgZW50aXJlbHkgc3VyZSBob3cgdG8gaW1wbGVtZW50IHlldCBidXQgd2hpY2ggSSB3aWxsIGFsc28gaGF2ZSB0byBmaWd1cmUgb3V0IGF0IHNvbWUgcG9pbnQuXCIsXCIwNy0wMi0yMDIzXCIsZmFsc2UsIFwiZGVmYXVsdFByb2plY3RcIik7XG4gICAgY29uc3QgZGVmYXVsdExpc3Q0ID0gbmV3IExpc3RJdGVtKFwiR2V0dGluZyBzaWNrIG9mIHRoZXNlIGRlZmF1bHQgSXRlbXNcIixcIkFzIGl0IHR1cm5zIG91dCB0aGF0IHN0cmluZyB3YXNuJ3QgcXVpdGUgYXMgZXhjZXB0aW9uYWxseSBsb25nIGFzIEkgaGFkIGhvcGVkLCBidXQgSSB0aGluayBJJ20ganVzdCBnb2luZyB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaW4gdGhlIGRlc2NyaXB0aW9uIGFuZCBjYWxsIGl0IGEgZGF5LlwiLFwiMDctMDItMjAyM1wiLGZhbHNlLCBcImRlZmF1bHRQcm9qZWN0XCIpO1xuICAgIGNvbnN0IGRlZmF1bHRDb21wbGV0ZWQgPSBuZXcgTGlzdEl0ZW0oXCJEZWZhdWx0IGNvbXBsZXRlZCBJdGVtXCIsXCJUaGlzIGlzIGEgY29tcGxldGVkIGRlZmF1bHQgaXRlbSBmb3IgY29tcGxldGVkIGRlZmF1bHRpbmdcIixcIjAxLTAxMi0yMDAxXCIsdHJ1ZSwgXCJkZWZhdWx0UHJvamVjdFwiKTtcbiAgICBjb25zdCB0ZXN0TGlzdCA9IG5ldyBMaXN0SXRlbShcIlRlc3QgSXRlbVwiLFwiVGhpcyBpcyBhIHRlc3QgaXRlbSBmb3IgdGVzdGluZ1wiLFwiMDktMTEtMjA1MFwiLCBmYWxzZSwgXCJ0ZXN0UHJvamVjdFwiKTtcbiAgICBjb25zdCB0ZXN0Q29tcGxldGVkID0gbmV3IExpc3RJdGVtKFwiVGVzdCBjb21wbGV0ZWQgSXRlbVwiLFwiVGhpcyBpcyBhIGNvbXBsZXRlZCB0ZXN0IGl0ZW0gZm9yIGNvbXBsZXRlZCB0ZXN0aW5nXCIsXCIxMS0xMS0xMTExXCIsIHRydWUsIFwidGVzdFByb2plY3RcIilcblxuICAgIGRlZmF1bHRDb21wbGV0ZWQuY29tcGxldGVkID0gdHJ1ZTtcbiAgICB0ZXN0Q29tcGxldGVkLmNvbXBsZXRlZCA9IHRydWU7XG5cbiAgICBsZXQgZnVsbExpc3QgPSBbZGVmYXVsdExpc3QsIHRlc3RMaXN0LCBkZWZhdWx0Q29tcGxldGVkLCB0ZXN0Q29tcGxldGVkLCBkZWZhdWx0TGlzdDIsIGRlZmF1bHRMaXN0MywgZGVmYXVsdExpc3Q0XTtcblxuLy9QcmludHMgY29udGVudHMgb2YgZGVmYXVsdCBwcm9qZWN0IG9uIHBhZ2UgbG9hZFxucHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCBwcm9qZWN0LnZhbHVlKTtcblxuLy9QcmludHMgY29udGVudHMgb2Ygc2VsZWN0ZWQgcHJvamVjdCB3aGVuIHNlbGVjdGlvbiBpcyBjaGFuZ2VkXG5wcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBwcmludFByb2plY3QoZnVsbExpc3QsIHByb2plY3QudmFsdWUpO1xufSlcblxuLy9FeHBhbmRzIG9yIGNvbGxhcHNlcyB0aGUgZm9ybSBmb3IgYWRkaW5nIGEgcHJvamVjdCB3aGVuIGJ1dHRvbiBpcyBwcmVzc2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm1CdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RBZGQnKTtcbiAgICBwcm9qZWN0QWRkLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkJyk7XG4gICAgcHJvamVjdEFkZC5jbGFzc0xpc3QudG9nZ2xlKCdjb2xsYXBzZWQnKTtcbn0pXG5cbi8vQ3JlYXRlcyBuZXcgcHJvamVjdCB3aGVuICdOZXcgUHJvamVjdCcgYnV0dG9uIGlzIHByZXNzZWRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW5wdXQnKTtcbiAgICBsZXQgdmFsaWQgPSBjaGVja1Byb2plY3RzKHByb2plY3RJbnB1dCwgcHJvamVjdCk7XG4gICAgYWRkUHJvamVjdCh2YWxpZCwgcHJvamVjdElucHV0KTtcbiAgICBwcmludFByb2plY3QoZnVsbExpc3QsIHByb2plY3QudmFsdWUpO1xufSlcblxuLy9DcmVhdGVzIGEgbmV3LCB1bmNvbXBsZXRlZCB0YXNrIHdoZW4gJ0FkZCcgYnV0dG9uIGlzIHByZXNzZWQgSUYgdGl0bGUgaXMgcHJlc2VudFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlucHV0JykudmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBuZXcgTGlzdEl0ZW0oXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJbnB1dCcpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uRm9ybScpLnZhbHVlLFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZSxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLmNoZWNrZWQsXG4gICAgICAgICAgICBwcm9qZWN0LnZhbHVlKTtcbiAgICAgICAgcHJpbnRMaXN0SXRlbShuZXdMaXN0SXRlbSk7XG4gICAgICAgIGZ1bGxMaXN0LnB1c2gobmV3TGlzdEl0ZW0pO1xuICAgIH1cbn0pXG5cbi8vTGlzdGVucyBmb3IgYW55IGNsaWNrcyB3aXRoaW4gdGhlIHRhc2tzIGNvbnRhaW5lci5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAvL0lmIGRlbGV0ZSBidXR0b24gaXMgY2xpY2tlZCwgZGVsZXRlcyB0YXNrLlxuICAgIGlmKGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICAgICAgZnVsbExpc3QgPSBmdWxsTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmdldFRhc2tJRCAhPSBwYXJlbnQuaWQpO1xuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vSWYgY2hlY2tib3ggaXMgY2xpY2tlZCwgdG9nZ2xlcyAnY29tcGxldGVkJyBhbmQgbW92ZXMgdGFzayBmcm9tICd0YXNrcycgdG8gJ2NvbXBsZXRlZCcgb3IgdmljZS12ZXJzYVxuICAgIGlmKGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2snKSkge1xuICAgICAgICBsZXQgdG9nZ2xlSW5kZXggPSBmdWxsTGlzdC5tYXAoZSA9PiBlLmdldFRhc2tJRCkuaW5kZXhPZihwYXJlbnQuaWQpO1xuICAgICAgICBmdWxsTGlzdFt0b2dnbGVJbmRleF0uY29tcGxldGVkID0gIWZ1bGxMaXN0W3RvZ2dsZUluZGV4XS5nZXRDb21wbGV0ZWQ7XG4gICAgICAgIHByaW50TGlzdEl0ZW0oZnVsbExpc3RbdG9nZ2xlSW5kZXhdKVxuICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vSWYgJ0NvbXBsZXRlZCcgaGVhZGVyIGlzIGNsaWNrZWQsIGV4cGFuZHMgdGhlIGxpc3Qgb2YgY29tcGxldGVkIHRhc2tzXG4gICAgaWYoZWxlbWVudC50YXJnZXQuaWQgPT09IFwiZXhwYW5kQ29tcGxldGVkXCIpe1xuICAgICAgICAvL1JpZGljdWxvdXMgY2hhaW5lZCBET00gbGlzdCBwb2ludHMgdG8gdGhlIGNvbXBsZXRlZExpc3QgZGl2IHRvIGNoZWNrIGlmIGl0J3MgY29sbGFwc2VkXG4gICAgICAgIGlmKGVsZW1lbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgICAgICBlbGVtZW50LnRhcmdldC5pbm5lckhUTUwgPSBcIkNvbXBsZXRlZCDilr9cIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC50YXJnZXQuaW5uZXJIVE1MID0gXCJDb21wbGV0ZWQg4pa4XCJcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRlZExpc3QnKTtcbiAgICAgICAgY29tcGxldGVkTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZCcpO1xuICAgICAgICBjb21wbGV0ZWRMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlZCcpO1xuICAgIH1cbn0pXG5cbi8vRXhwYW5kcyBvciBjb2xsYXBzZXMgZm9ybSBmb3IgYWRkaW5nIGEgbmV3IHRhc2sgd2hlbiBidXR0b24gaXMgcHJlc3NlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Rm9ybUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dEZvcm0nKTtcbiAgICBpbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICBpbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnY29sbGFwc2VkJyk7XG59KSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJMaXN0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhcmd1bWVudHMiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiX2NsYXNzQ2FsbENoZWNrIiwiY29tcGxldGVkIiwidGFza0lEIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2V0IiwiX3RpdGxlIiwiX2Rlc2NyaXB0aW9uIiwiX2R1ZURhdGUiLCJfcHJpb3JpdHkiLCJfY29tcGxldGVkIiwiX3Byb2plY3QiLCJzZXQiLCJkZWZhdWx0IiwiYWRkUHJvamVjdCIsInZhbGlkIiwicHJvamVjdElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RFcnJvciIsIm5ld1Byb2plY3QiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJ0ZXh0IiwiYWRkIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2hlY2tQcm9qZWN0cyIsIm9wdGlvbnMiLCJleGlzdGluZ1Byb2plY3QiLCJ0b0xvd2VyQ2FzZSIsImRlbGV0ZUljb24iLCJwcmludExpc3RJdGVtIiwibmV3RW50cnkiLCJjbGFzc05hbWUiLCJnZXRUYXNrSUQiLCJjaGVja2JveCIsInR5cGUiLCJjaGVja2VkIiwiZ2V0Q29tcGxldGVkIiwiYXBwZW5kQ2hpbGQiLCJuZXdMYWJlbCIsImdldFRpdGxlIiwiZ2V0UHJpb3JpdHkiLCJkZXNjcmlwdGlvblRleHQiLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJkZWxldGVCdG4iLCJzcmMiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidGRMaXN0IiwiY29tcGxldGVkTGlzdCIsInByaW50UHJvamVjdCIsImZ1bGxMaXN0IiwiZm9yRWFjaCIsImdldFByb2plY3QiLCJkZWZhdWx0TGlzdCIsImRlZmF1bHRMaXN0MiIsImRlZmF1bHRMaXN0MyIsImRlZmF1bHRMaXN0NCIsImRlZmF1bHRDb21wbGV0ZWQiLCJ0ZXN0TGlzdCIsInRlc3RDb21wbGV0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdEFkZCIsIm5ld0xpc3RJdGVtIiwiY29udGFpbmVyIiwiZWxlbWVudCIsInBhcmVudCIsInRhcmdldCIsInBhcmVudE5vZGUiLCJjb250YWlucyIsImZpbHRlciIsInRhc2siLCJyZW1vdmUiLCJ0b2dnbGVJbmRleCIsImUiLCJpbmRleE9mIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbnB1dEZvcm0iXSwic291cmNlUm9vdCI6IiJ9