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
    var tdList = document.getElementById("tdList");
    tdList.appendChild(newEntry);
  } else {
    newLabel.style.setProperty("text-decoration", "line-through");
    var completedList = document.getElementById("completedList");
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUU1QyxJQUFNdUIsTUFBTSxHQUFHdEIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxJQUFNQyxhQUFhLEdBQUd4QixRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDOztBQUU5RDtBQUNlLFNBQVNFLFlBQVlBLENBQUNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO0VBQ3BETCxNQUFNLENBQUNYLFNBQVMsR0FBRyxFQUFFO0VBQ3JCYSxhQUFhLENBQUNiLFNBQVMsR0FBRyxFQUFFO0VBQzVCZSxRQUFRLENBQUNFLE9BQU8sQ0FBQyxVQUFDOUIsUUFBUSxFQUFLO0lBQzdCLElBQUlBLFFBQVEsQ0FBQytCLFVBQVUsS0FBS0YsS0FBSyxFQUFFO01BQ2pDOUIsMERBQWEsQ0FBQ0MsUUFBUSxDQUFDO0lBQ3pCO0VBQ0YsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludExpc3RJdGVtKExpc3RJdGVtKSB7XG4gIC8vIEVuY2xvc2VzIGFsbCB0YXNrcyBpbiBhIGRpdiB3aXRoIGEgdW5pcXVlIGlkIGFuZCBzaGFyZWQgY2xhc3NcbiAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdFbnRyeS5jbGFzc05hbWUgPSBcImVudHJ5XCI7XG4gIG5ld0VudHJ5LmlkID0gTGlzdEl0ZW0uZ2V0VGFza0lEO1xuXG4gIC8vIENyZWF0ZSBjaGVja2JveCBmb3IgbWFya2luZyB0YXNrcyBhcyBjb21wbGV0ZSAob3IgdW4tbWFya2luZylcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IExpc3RJdGVtLmdldENvbXBsZXRlZDtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gIC8vIENyZWF0ZSBsYWJlbCB3aXRoIHRoZSB0YXNrJ3MgdGl0bGUgYW5kIGhpZ2hsaWdodHMgaXQgaWYgaXQncyBhIHByaW9yaXR5XG4gIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuZXdMYWJlbC5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXRUaXRsZTtcbiAgbmV3TGFiZWwuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICBpZiAoTGlzdEl0ZW0uZ2V0UHJpb3JpdHkpIHtcbiAgICBuZXdMYWJlbC5jbGFzc05hbWUgKz0gXCIgcHJpb3JpdHlcIjtcbiAgfVxuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG5cbiAgLy8gQWRkIGRlc2NyaXB0aW9uLiBJZiBubyBkZXNjcmlwdGlvbiBpcyBzdXBwbGllZCBmaWVsZCB3aWxsIGJlIGJsYW5rXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvblRleHQuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb247XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XG5cbiAgLy8gQWRkIGR1ZSBkYXRlLiBJZiBubyBkYXRlIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVEYXRlLmlubmVySFRNTCA9IExpc3RJdGVtLmdldER1ZURhdGU7XG4gIGR1ZURhdGUuY2xhc3NOYW1lID0gXCJkdWVEYXRlXCI7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIC8vIEFkZCBidXR0b24gdG8gZGVsZXRlIHRhc2tcbiAgLy8gY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlbGV0ZUJ0bi5zcmMgPSBkZWxldGVJY29uO1xuICAvLyBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgLy8gQWRkcyB0YXNrIHRvIGFwcHJvcHJpYXRlIGRpdiBkZXBlbmRpbmcgb24gd2hldGhlciBpdCdzIG1hcmtlZCBjb21wbGV0ZVxuICBpZiAoIUxpc3RJdGVtLmdldENvbXBsZXRlZCkge1xuICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwiXCIpO1xuICAgIGNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRMaXN0XCIpO1xuICAgIHRkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XG4gIH0gZWxzZSB7XG4gICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XG4gICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcblxuICAgIGNvbXBsZXRlZExpc3QuYXBwZW5kQ2hpbGQobmV3RW50cnkpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcmludExpc3RJdGVtIGZyb20gXCIuL3ByaW50TGlzdEl0ZW1cIjtcblxuY29uc3QgdGRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZExpc3RcIik7XG5jb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRMaXN0XCIpO1xuXG4vLyBDaGVja3MgbGlzdCBvZiB0by1kbydzIGFuZCBwcmludHMgZWFjaCBvbmUgdGhhdCBtYXRjaGVzIHRoZSBjdXJyZW50IHByb2plY3RcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50UHJvamVjdChmdWxsTGlzdCwgdmFsdWUpIHtcbiAgdGRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbXBsZXRlZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgZnVsbExpc3QuZm9yRWFjaCgoTGlzdEl0ZW0pID0+IHtcbiAgICBpZiAoTGlzdEl0ZW0uZ2V0UHJvamVjdCA9PT0gdmFsdWUpIHtcbiAgICAgIHByaW50TGlzdEl0ZW0oTGlzdEl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIC8vIE9iamVjdC5lbnRyaWVzKHdpbmRvdy5sb2NhbFN0b3JhZ2UpLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgLy8gICBpZiAoSlNPTi5wYXJzZSh2YWwpLmdldFByb2plY3QgPT09IHZhbHVlKSB7XG4gIC8vICAgICBwcmludExpc3RJdGVtKEpTT04ucGFyc2UodmFsKSk7XG4gIC8vICAgfVxuICAvLyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJkZWxldGVJY29uIiwicHJpbnRMaXN0SXRlbSIsIkxpc3RJdGVtIiwibmV3RW50cnkiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsImdldFRhc2tJRCIsImNoZWNrYm94IiwidHlwZSIsImNoZWNrZWQiLCJnZXRDb21wbGV0ZWQiLCJhcHBlbmRDaGlsZCIsIm5ld0xhYmVsIiwiaW5uZXJIVE1MIiwiZ2V0VGl0bGUiLCJnZXRQcmlvcml0eSIsImRlc2NyaXB0aW9uVGV4dCIsImdldERlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsImdldER1ZURhdGUiLCJkZWxldGVCdG4iLCJzcmMiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidGRMaXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb21wbGV0ZWRMaXN0IiwicHJpbnRQcm9qZWN0IiwiZnVsbExpc3QiLCJ2YWx1ZSIsImZvckVhY2giLCJnZXRQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==