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
/*!******************************!*\
  !*** ./src/checkProjects.js ***!
  \******************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tQcm9qZWN0cy5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05lLFNBQVNBLGFBQWFBLENBQUNDLFlBQVksRUFBRUMsT0FBTyxFQUFFO0VBQzNELElBQUlDLEtBQUssR0FBRyxJQUFJOztFQUVoQjtFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixPQUFPLENBQUNHLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2xELElBQU1HLGVBQWUsR0FBR0wsT0FBTyxDQUFDRyxPQUFPLENBQUNELENBQUMsQ0FBQyxDQUFDSSxLQUFLLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELElBQ0VSLFlBQVksQ0FBQ08sS0FBSyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxLQUFLRixlQUFlLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFDakVQLEtBQUssRUFDTDtNQUNBQSxLQUFLLEdBQUcsS0FBSztJQUNmO0VBQ0Y7O0VBRUE7RUFDQSxPQUFPQSxLQUFLO0FBQ2QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jaGVja1Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tQcm9qZWN0cyhwcm9qZWN0SW5wdXQsIHByb2plY3QpIHtcbiAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICAvLyBDaGVja3MgdGhlIHByb2plY3RzIGluIHRoZSA8c2VsZWN0PiBib3ggdG8gc2VlIGlmIG9uZSBleGlzdHMgd2l0aCB0aGUgc2FtZSBuYW1lXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gcHJvamVjdC5vcHRpb25zW2ldLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKFxuICAgICAgcHJvamVjdElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGV4aXN0aW5nUHJvamVjdC5zbGljZSgwLCAtNykgJiZcbiAgICAgIHZhbGlkXG4gICAgKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvamVjdCBoYXMgdW5pcXVlIG5hbWUsIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlXG4gIHJldHVybiB2YWxpZDtcbn1cbiJdLCJuYW1lcyI6WyJjaGVja1Byb2plY3RzIiwicHJvamVjdElucHV0IiwicHJvamVjdCIsInZhbGlkIiwiaSIsIm9wdGlvbnMiLCJsZW5ndGgiLCJleGlzdGluZ1Byb2plY3QiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9