/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/*!*****************************!*\
  !*** ./src/printProject.js ***!
  \*****************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU11QixNQUFNLEdBQUd0QixRQUFRLENBQUN3QixjQUFjLENBQUMsUUFBUSxDQUFDO0FBQ2hELElBQU1ELGFBQWEsR0FBR3ZCLFFBQVEsQ0FBQ3dCLGNBQWMsQ0FBQyxlQUFlLENBQUM7O0FBRTlEO0FBQ2UsU0FBU0MsWUFBWUEsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEVBQUU7RUFDcERMLE1BQU0sQ0FBQ1gsU0FBUyxHQUFHLEVBQUU7RUFDckJZLGFBQWEsQ0FBQ1osU0FBUyxHQUFHLEVBQUU7RUFDNUI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQWlCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsSUFBQSxFQUFnQjtJQUFBLElBQUFDLEtBQUEsR0FBQUMsY0FBQSxDQUFBRixJQUFBO01BQWRHLEdBQUcsR0FBQUYsS0FBQTtNQUFFRyxHQUFHLEdBQUFILEtBQUE7SUFDcEQsSUFBSUksSUFBSSxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUFDRyxVQUFVLEtBQUtiLEtBQUssRUFBRTtNQUN4QzlCLDBEQUFhLENBQUN5QyxJQUFJLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLENBQUM7SUFDaEM7RUFDRixDQUFDLENBQUM7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50UHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi90cmFzaC1jYW4tb3V0bGluZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRMaXN0SXRlbShMaXN0SXRlbSkge1xuICAvLyBFbmNsb3NlcyBhbGwgdGFza3MgaW4gYSBkaXYgd2l0aCBhIHVuaXF1ZSBpZCBhbmQgc2hhcmVkIGNsYXNzXG4gIGNvbnN0IG5ld0VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3RW50cnkuY2xhc3NOYW1lID0gXCJlbnRyeVwiO1xuICBuZXdFbnRyeS5pZCA9IExpc3RJdGVtLmdldFRhc2tJRDtcblxuICAvLyBDcmVhdGUgY2hlY2tib3ggZm9yIG1hcmtpbmcgdGFza3MgYXMgY29tcGxldGUgKG9yIHVuLW1hcmtpbmcpXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBjaGVja2JveC5jbGFzc05hbWUgPSBcImNoZWNrXCI7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBMaXN0SXRlbS5nZXRDb21wbGV0ZWQ7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAvLyBDcmVhdGUgbGFiZWwgd2l0aCB0aGUgdGFzaydzIHRpdGxlIGFuZCBoaWdobGlnaHRzIGl0IGlmIGl0J3MgYSBwcmlvcml0eVxuICBjb25zdCBuZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmV3TGFiZWwuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0VGl0bGU7XG4gIG5ld0xhYmVsLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgaWYgKExpc3RJdGVtLmdldFByaW9yaXR5KSB7XG4gICAgbmV3TGFiZWwuY2xhc3NOYW1lICs9IFwiIHByaW9yaXR5XCI7XG4gIH1cbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xuXG4gIC8vIEFkZCBkZXNjcmlwdGlvbi4gSWYgbm8gZGVzY3JpcHRpb24gaXMgc3VwcGxpZWQgZmllbGQgd2lsbCBiZSBibGFua1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IExpc3RJdGVtLmdldERlc2NyaXB0aW9uO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHQpO1xuXG4gIC8vIEFkZCBkdWUgZGF0ZS4gSWYgbm8gZGF0ZSBpcyBzdXBwbGllZCBmaWVsZCB3aWxsIGJlIGJsYW5rXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXREdWVEYXRlO1xuICBkdWVEYXRlLmNsYXNzTmFtZSA9IFwiZHVlRGF0ZVwiO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAvLyBBZGQgYnV0dG9uIHRvIGRlbGV0ZSB0YXNrXG4gIC8vIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkZWxldGVCdG4uc3JjID0gZGVsZXRlSWNvbjtcbiAgLy8gZGVsZXRlQnRuLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcImRlbGV0ZVwiO1xuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gIC8vIEFkZHMgdGFzayB0byBhcHByb3ByaWF0ZSBkaXYgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQncyBtYXJrZWQgY29tcGxldGVcbiAgaWYgKCFMaXN0SXRlbS5nZXRDb21wbGV0ZWQpIHtcbiAgICBuZXdMYWJlbC5zdHlsZS5zZXRQcm9wZXJ0eShcInRleHQtZGVjb3JhdGlvblwiLCBcIlwiKTtcbiAgICB0ZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9IGVsc2Uge1xuICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwibGluZS10aHJvdWdoXCIpO1xuICAgIGNvbXBsZXRlZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcmludExpc3RJdGVtIGZyb20gXCIuL3ByaW50TGlzdEl0ZW1cIjtcblxuY29uc3QgdGRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZExpc3RcIik7XG5jb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRMaXN0XCIpO1xuXG4vLyBDaGVja3MgbGlzdCBvZiB0by1kbydzIGFuZCBwcmludHMgZWFjaCBvbmUgdGhhdCBtYXRjaGVzIHRoZSBjdXJyZW50IHByb2plY3RcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50UHJvamVjdChmdWxsTGlzdCwgdmFsdWUpIHtcbiAgdGRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbXBsZXRlZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gZnVsbExpc3QuZm9yRWFjaChMaXN0SXRlbSA9PiB7XG4gIC8vICAgICBpZihMaXN0SXRlbS5nZXRQcm9qZWN0ID09PSB2YWx1ZSl7XG4gIC8vICAgICAgICAgcHJpbnRMaXN0SXRlbShMaXN0SXRlbSk7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0SXRlbVwiKVxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKExpc3RJdGVtKTtcbiAgLy8gICAgIH1cbiAgLy8gfSlcbiAgT2JqZWN0LmVudHJpZXMod2luZG93LmxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgIGlmIChKU09OLnBhcnNlKHZhbCkuZ2V0UHJvamVjdCA9PT0gdmFsdWUpIHtcbiAgICAgIHByaW50TGlzdEl0ZW0oSlNPTi5wYXJzZSh2YWwpKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImRlbGV0ZUljb24iLCJwcmludExpc3RJdGVtIiwiTGlzdEl0ZW0iLCJuZXdFbnRyeSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlkIiwiZ2V0VGFza0lEIiwiY2hlY2tib3giLCJ0eXBlIiwiY2hlY2tlZCIsImdldENvbXBsZXRlZCIsImFwcGVuZENoaWxkIiwibmV3TGFiZWwiLCJpbm5lckhUTUwiLCJnZXRUaXRsZSIsImdldFByaW9yaXR5IiwiZGVzY3JpcHRpb25UZXh0IiwiZ2V0RGVzY3JpcHRpb24iLCJkdWVEYXRlIiwiZ2V0RHVlRGF0ZSIsImRlbGV0ZUJ0biIsInNyYyIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0ZExpc3QiLCJjb21wbGV0ZWRMaXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmludFByb2plY3QiLCJmdWxsTGlzdCIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImZvckVhY2giLCJfcmVmIiwiX3JlZjIiLCJfc2xpY2VkVG9BcnJheSIsImtleSIsInZhbCIsIkpTT04iLCJwYXJzZSIsImdldFByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9