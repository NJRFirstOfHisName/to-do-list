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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRQcm9qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVsQyxTQUFTQyxhQUFhQSxDQUFDQyxRQUFRLEVBQUU7RUFDOUM7RUFDQSxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM5Q0YsUUFBUSxDQUFDRyxTQUFTLEdBQUcsT0FBTztFQUM1QkgsUUFBUSxDQUFDSSxFQUFFLEdBQUdMLFFBQVEsQ0FBQ00sU0FBUzs7RUFFaEM7RUFDQSxJQUFNQyxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNoREksUUFBUSxDQUFDQyxJQUFJLEdBQUcsVUFBVTtFQUMxQkQsUUFBUSxDQUFDSCxTQUFTLEdBQUcsT0FBTztFQUM1QkcsUUFBUSxDQUFDRSxPQUFPLEdBQUdULFFBQVEsQ0FBQ1UsWUFBWTtFQUN4Q1QsUUFBUSxDQUFDVSxXQUFXLENBQUNKLFFBQVEsQ0FBQzs7RUFFOUI7RUFDQSxJQUFNSyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNoRFMsUUFBUSxDQUFDQyxTQUFTLEdBQUdiLFFBQVEsQ0FBQ2MsUUFBUTtFQUN0Q0YsUUFBUSxDQUFDUixTQUFTLEdBQUcsT0FBTztFQUM1QixJQUFJSixRQUFRLENBQUNlLFdBQVcsRUFBRTtJQUN4QkgsUUFBUSxDQUFDUixTQUFTLElBQUksV0FBVztFQUNuQztFQUNBSCxRQUFRLENBQUNVLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDOztFQUU5QjtFQUNBLElBQU1JLGVBQWUsR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ25EYSxlQUFlLENBQUNaLFNBQVMsR0FBRyxhQUFhO0VBQ3pDWSxlQUFlLENBQUNILFNBQVMsR0FBR2IsUUFBUSxDQUFDaUIsY0FBYztFQUNuRGhCLFFBQVEsQ0FBQ1UsV0FBVyxDQUFDSyxlQUFlLENBQUM7O0VBRXJDO0VBQ0EsSUFBTUUsT0FBTyxHQUFHaEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDZSxPQUFPLENBQUNMLFNBQVMsR0FBR2IsUUFBUSxDQUFDbUIsVUFBVTtFQUN2Q0QsT0FBTyxDQUFDZCxTQUFTLEdBQUcsU0FBUztFQUM3QkgsUUFBUSxDQUFDVSxXQUFXLENBQUNPLE9BQU8sQ0FBQzs7RUFFN0I7RUFDQTtFQUNBLElBQU1FLFNBQVMsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ2lCLFNBQVMsQ0FBQ0MsR0FBRyxHQUFHdkIsbURBQVU7RUFDMUI7RUFDQXNCLFNBQVMsQ0FBQ2hCLFNBQVMsR0FBRyxRQUFRO0VBQzlCSCxRQUFRLENBQUNVLFdBQVcsQ0FBQ1MsU0FBUyxDQUFDOztFQUUvQjtFQUNBLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQ1UsWUFBWSxFQUFFO0lBQzFCRSxRQUFRLENBQUNVLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQztJQUNqRCxJQUFNQyxNQUFNLEdBQUd0QixRQUFRLENBQUN1QixjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ2hERCxNQUFNLENBQUNiLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDO0VBQzlCLENBQUMsTUFBTTtJQUNMVyxRQUFRLENBQUNVLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztJQUM3RCxJQUFNRyxhQUFhLEdBQUd4QixRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzlEQyxhQUFhLENBQUNmLFdBQVcsQ0FBQ1YsUUFBUSxDQUFDO0VBQ3JDO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUU1QyxJQUFNdUIsTUFBTSxHQUFHdEIsUUFBUSxDQUFDdUIsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxJQUFNQyxhQUFhLEdBQUd4QixRQUFRLENBQUN1QixjQUFjLENBQUMsZUFBZSxDQUFDOztBQUU5RDtBQUNlLFNBQVNFLFlBQVlBLENBQUNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFO0VBQ3BETCxNQUFNLENBQUNYLFNBQVMsR0FBRyxFQUFFO0VBQ3JCYSxhQUFhLENBQUNiLFNBQVMsR0FBRyxFQUFFO0VBQzVCZSxRQUFRLENBQUNFLE9BQU8sQ0FBQyxVQUFDOUIsUUFBUSxFQUFLO0lBQzdCLElBQUlBLFFBQVEsQ0FBQytCLFVBQVUsS0FBS0YsS0FBSyxFQUFFO01BQ2pDOUIsMERBQWEsQ0FBQ0MsUUFBUSxDQUFDO0lBQ3pCO0VBQ0YsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludExpc3RJdGVtKExpc3RJdGVtKSB7XG4gIC8vIEVuY2xvc2VzIGFsbCB0YXNrcyBpbiBhIGRpdiB3aXRoIGEgdW5pcXVlIGlkIGFuZCBzaGFyZWQgY2xhc3NcbiAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdFbnRyeS5jbGFzc05hbWUgPSBcImVudHJ5XCI7XG4gIG5ld0VudHJ5LmlkID0gTGlzdEl0ZW0uZ2V0VGFza0lEO1xuXG4gIC8vIENyZWF0ZSBjaGVja2JveCBmb3IgbWFya2luZyB0YXNrcyBhcyBjb21wbGV0ZSAob3IgdW4tbWFya2luZylcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IExpc3RJdGVtLmdldENvbXBsZXRlZDtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gIC8vIENyZWF0ZSBsYWJlbCB3aXRoIHRoZSB0YXNrJ3MgdGl0bGUgYW5kIGhpZ2hsaWdodHMgaXQgaWYgaXQncyBhIHByaW9yaXR5XG4gIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuZXdMYWJlbC5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXRUaXRsZTtcbiAgbmV3TGFiZWwuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICBpZiAoTGlzdEl0ZW0uZ2V0UHJpb3JpdHkpIHtcbiAgICBuZXdMYWJlbC5jbGFzc05hbWUgKz0gXCIgcHJpb3JpdHlcIjtcbiAgfVxuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG5cbiAgLy8gQWRkIGRlc2NyaXB0aW9uLiBJZiBubyBkZXNjcmlwdGlvbiBpcyBzdXBwbGllZCBmaWVsZCB3aWxsIGJlIGJsYW5rXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvblRleHQuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb247XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dCk7XG5cbiAgLy8gQWRkIGR1ZSBkYXRlLiBJZiBubyBkYXRlIGlzIHN1cHBsaWVkIGZpZWxkIHdpbGwgYmUgYmxhbmtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVEYXRlLmlubmVySFRNTCA9IExpc3RJdGVtLmdldER1ZURhdGU7XG4gIGR1ZURhdGUuY2xhc3NOYW1lID0gXCJkdWVEYXRlXCI7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIC8vIEFkZCBidXR0b24gdG8gZGVsZXRlIHRhc2tcbiAgLy8gY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlbGV0ZUJ0bi5zcmMgPSBkZWxldGVJY29uO1xuICAvLyBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgLy8gQWRkcyB0YXNrIHRvIGFwcHJvcHJpYXRlIGRpdiBkZXBlbmRpbmcgb24gd2hldGhlciBpdCdzIG1hcmtlZCBjb21wbGV0ZVxuICBpZiAoIUxpc3RJdGVtLmdldENvbXBsZXRlZCkge1xuICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwiXCIpO1xuICAgIGNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRMaXN0XCIpO1xuICAgIHRkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XG4gIH0gZWxzZSB7XG4gICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XG4gICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcbiAgICBjb21wbGV0ZWRMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5cbmNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRMaXN0XCIpO1xuY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcblxuLy8gQ2hlY2tzIGxpc3Qgb2YgdG8tZG8ncyBhbmQgcHJpbnRzIGVhY2ggb25lIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCBwcm9qZWN0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludFByb2plY3QoZnVsbExpc3QsIHZhbHVlKSB7XG4gIHRkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb21wbGV0ZWRMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGZ1bGxMaXN0LmZvckVhY2goKExpc3RJdGVtKSA9PiB7XG4gICAgaWYgKExpc3RJdGVtLmdldFByb2plY3QgPT09IHZhbHVlKSB7XG4gICAgICBwcmludExpc3RJdGVtKExpc3RJdGVtKTtcbiAgICB9XG4gIH0pO1xuICAvLyBPYmplY3QuZW50cmllcyh3aW5kb3cubG9jYWxTdG9yYWdlKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gIC8vICAgaWYgKEpTT04ucGFyc2UodmFsKS5nZXRQcm9qZWN0ID09PSB2YWx1ZSkge1xuICAvLyAgICAgcHJpbnRMaXN0SXRlbShKU09OLnBhcnNlKHZhbCkpO1xuICAvLyAgIH1cbiAgLy8gfSk7XG59XG4iXSwibmFtZXMiOlsiZGVsZXRlSWNvbiIsInByaW50TGlzdEl0ZW0iLCJMaXN0SXRlbSIsIm5ld0VudHJ5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJnZXRUYXNrSUQiLCJjaGVja2JveCIsInR5cGUiLCJjaGVja2VkIiwiZ2V0Q29tcGxldGVkIiwiYXBwZW5kQ2hpbGQiLCJuZXdMYWJlbCIsImlubmVySFRNTCIsImdldFRpdGxlIiwiZ2V0UHJpb3JpdHkiLCJkZXNjcmlwdGlvblRleHQiLCJnZXREZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJnZXREdWVEYXRlIiwiZGVsZXRlQnRuIiwic3JjIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRkTGlzdCIsImdldEVsZW1lbnRCeUlkIiwiY29tcGxldGVkTGlzdCIsInByaW50UHJvamVjdCIsImZ1bGxMaXN0IiwidmFsdWUiLCJmb3JFYWNoIiwiZ2V0UHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=