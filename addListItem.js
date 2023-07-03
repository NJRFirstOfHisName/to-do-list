/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!****************************!*\
  !*** ./src/addListItem.js ***!
  \****************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxTQUFTLEdBQUdmLFFBQVE7SUFDN0I7RUFBQztJQUFBVSxHQUFBO0lBQUFRLEdBQUEsRUFDRCxTQUFBQSxJQUFjZixTQUFTLEVBQUU7TUFDckIsSUFBSSxDQUFDYSxVQUFVLEdBQUdiLFNBQVM7SUFDL0I7RUFBQztJQUFBTyxHQUFBO0lBQUFRLEdBQUEsRUFDRCxTQUFBQSxJQUFZakIsT0FBTyxFQUFFO01BQ2pCLElBQUksQ0FBQ2dCLFFBQVEsR0FBR2hCLE9BQU87SUFDM0I7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQUE7RUFBQSxPQUFBUixRQUFBO0FBQUEsS0FHSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hZGRMaXN0SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiA9IFwiIFwiLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGFza0lEID0gXCJpZFwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuICAgIGdldCBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0RHVlRGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcclxuICAgIH1cclxuICAgIGdldCBnZXRQcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0Q29tcGxldGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZ2V0UHJvamVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcclxuICAgIH1cclxuICAgIGdldCBnZXRUYXNrSUQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0lEXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICBzZXQgZHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcbiAgICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbXBsZXRlZChjb21wbGV0ZWQpIHtcclxuICAgICAgICB0aGlzLl9jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgcHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fcHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHRpbWVMZWZ0KCkge1xyXG4gICAgLy8gICAgIGlmKGR1ZURhdGUpIHtcclxuICAgIC8vICAgICAgICAgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIChub3cuZ2V0VGltZSgpIC0gdGhpcy5kdWVEYXRlLmdldFRpbWUoKSkvMzYwMDA7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB7IExpc3RJdGVtIH0iXSwibmFtZXMiOlsiTGlzdEl0ZW0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwicHJvamVjdCIsIl9jbGFzc0NhbGxDaGVjayIsImNvbXBsZXRlZCIsInRhc2tJRCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZ2V0IiwiX3RpdGxlIiwiX2Rlc2NyaXB0aW9uIiwiX2R1ZURhdGUiLCJfcHJpb3JpdHkiLCJfY29tcGxldGVkIiwiX3Byb2plY3QiLCJzZXQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==