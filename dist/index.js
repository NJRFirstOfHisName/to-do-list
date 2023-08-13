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

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE
};

var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result;

  // Check for the difference of less than month
  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);

    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign;

    // Check for cases of one full calendar month
    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;

/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }
  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);
  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }
  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;
  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }
  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months;

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions);

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions);

    // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions);

    // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions);

    // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions);

    // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }
  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft);

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions);

    // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12);

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions);

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions);

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
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

  // If a due date is applied, calculates how much time is remaining and adds it to DOM
  if (ListItem.getDueDate) {
    var dueDateDOM = document.createElement("p");
    var dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(ListItem.getDueDate);
    dueDateDOM.innerText = "Due ".concat((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(dueDate, new Date(), {
      addSuffix: true
    }));
    if (new Date() > dueDate) {
      dueDateDOM.style.color = "red";
    }
    dueDateDOM.className = "dueDate";
    newEntry.appendChild(dueDateDOM);
  }

  // If description is supplied, adds it to DOM
  if (ListItem.getDescription.trim()) {
    var descriptionText = document.createElement("p");
    descriptionText.className = "description";
    descriptionText.innerHTML = ListItem.getDescription;
    newEntry.appendChild(descriptionText);
  }

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
  height: 99vh;
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
  grid-template-rows: 0.5fr 0.35fr 0.4fr 0.4fr 1fr 3fr;
  align-items: baseline;
  border-top: 5px solid black;
  height: 100%;
  overflow: hidden;
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
  margin-top: -75%;
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
  border-top: 5px solid #fde047;
  height: 99%;
}

#tdList,
#completedList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 20px;
  background-color: #fde047;
  padding: 10px;
}

h2 {
  margin: 1em 1em;
}

.entry {
  border: 3px solid black;
  display: grid;
  grid-template-columns: 0.25fr 1fr 1fr 1fr;
  grid-template-rows: 1fr auto auto 0.5fr;
  grid-template-areas:
    "check title title title"
    "dueDate dueDate dueDate dueDate"
    "description description description description"
    ". . . delete";
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  gap: 0;
  background-color: #fef08a;
  animation: insert-task 0.2s;
}

p {
  margin: 0;
}

.entry-remove {
  animation: remove-task 0.15s;
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

.check {
  grid-area: check;
  width: 20px;
  height: 20px;
  outline: 2px solid black;
  background-color: white;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.check:hover {
  background-color: lightblue;
  cursor: pointer;
}

.check:checked {
  background-color: black;
  height: 10px;
  width: 10px;
}

.title {
  grid-area: title;
  align-self: center;
  justify-self: start;
  font-size: larger;
  text-align: center;
  width: 100%;
  font-weight: bold;
}

.dueDate {
  grid-area: dueDate;
  font-size: small;
  font-style: italic;
}

.description {
  grid-area: description;
}

.delete {
  grid-area: delete;
  width: 30%;
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

@media (max-width: 800px) {
  body {
    grid-template-columns: auto;
  }

  #container {
    width: 100vw;
    height: 98%;
  }

  h2 {
    margin: 0.5em 1em;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\n  font-family: \"Roboto\", sans-serif;\n}\n\nbody {\n  margin: 0;\n  display: grid;\n  grid-template-columns: minmax(250px, 20vw) auto;\n  grid-template-rows: 5em auto;\n  height: 99vh;\n  width: 100vw;\n  background-color: #fde047;\n}\n\n#header {\n  margin: 0.25em 0.5em;\n  font-weight: bold;\n  font-size: 50px;\n  justify-self: start;\n  grid-column: 1/3;\n}\n\n#sidebar {\n  background-color: #fde047;\n  display: grid;\n  grid-template-rows: 0.5fr 0.35fr 0.4fr 0.4fr 1fr 3fr;\n  align-items: baseline;\n  border-top: 5px solid black;\n  height: 100%;\n  overflow: hidden;\n}\n\n#projectForm {\n  display: grid;\n  gap: 5px;\n  margin: 5px;\n}\n\n#projectsLabel {\n  font-size: large;\n  font-weight: bold;\n  margin: 0 1.5em;\n}\n\n#projects {\n  border: none;\n  font-size: large;\n  width: 70%;\n  justify-self: end;\n  margin: 0 1.5em;\n}\n\nbutton {\n  background-color: white;\n  border: none;\n  justify-self: center;\n  height: 2em;\n  border-radius: 20px;\n  font-size: larger;\n  font-weight: 600;\n}\n\n#projectFormButton {\n  width: 55%;\n  align-self: baseline;\n  margin: 2%;\n}\n\n#projectWrapper {\n  overflow: hidden;\n  margin: 10px;\n}\n\n#projectAdd {\n  margin-top: -30%;\n  transition: all 0.5s;\n  align-items: center;\n  display: grid;\n  justify-content: center;\n  grid-template-rows: auto;\n}\n\n#newProject {\n  font-size: medium;\n  margin: 10px;\n}\n\n#projectAdd p {\n  text-align: center;\n  font-size: small;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  border-radius: 5px;\n}\n\n#inputFormButton {\n  align-self: end;\n  margin: 5px;\n  width: 45%;\n}\n\n#inputWrapper {\n  overflow: hidden;\n}\n\n#inputForm {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n  margin: 10px;\n  margin-top: -75%;\n  transition: all 1s;\n}\n\n#inputForm.expanded,\n#projectAdd.expanded,\n#completedList.expanded {\n  margin-top: 0;\n}\n\n#titleInput {\n  grid-column: 1 / 4;\n}\n\n#descriptionForm {\n  grid-column: 1 / 5;\n  resize: none;\n}\n\n#dueDate {\n  grid-column: 1 / 3;\n}\n\n#dueDateLabel {\n  grid-column: 3 / 5;\n}\n\n#priorityDiv {\n  grid-column: 1 / 5;\n}\n\n#priority {\n  position: relative;\n  vertical-align: middle;\n}\n\n#dueDateLabel,\n#priorityLabel {\n  font-size: small;\n}\n\n#addBtn {\n  grid-column: 2 / 4;\n  width: 50%;\n  font-size: medium;\n}\n\n#container {\n  background-color: #fefce8;\n  border-top: 5px solid #fde047;\n  height: 99%;\n}\n\n#tdList,\n#completedList {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));\n  gap: 20px;\n  background-color: #fde047;\n  padding: 10px;\n}\n\nh2 {\n  margin: 1em 1em;\n}\n\n.entry {\n  border: 3px solid black;\n  display: grid;\n  grid-template-columns: 0.25fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr auto auto 0.5fr;\n  grid-template-areas:\n    \"check title title title\"\n    \"dueDate dueDate dueDate dueDate\"\n    \"description description description description\"\n    \". . . delete\";\n  border-radius: 10px;\n  margin: 5px;\n  padding: 10px;\n  gap: 0;\n  background-color: #fef08a;\n  animation: insert-task 0.2s;\n}\n\np {\n  margin: 0;\n}\n\n.entry-remove {\n  animation: remove-task 0.15s;\n}\n\n@keyframes insert-task {\n  0% {\n    transform: scale(0);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes remove-task {\n  0% {\n    transform: scale(1);\n  }\n\n  100% {\n    transform: scale(0);\n  }\n}\n\n.check {\n  grid-area: check;\n  width: 20px;\n  height: 20px;\n  outline: 2px solid black;\n  background-color: white;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\n.check:hover {\n  background-color: lightblue;\n  cursor: pointer;\n}\n\n.check:checked {\n  background-color: black;\n  height: 10px;\n  width: 10px;\n}\n\n.title {\n  grid-area: title;\n  align-self: center;\n  justify-self: start;\n  font-size: larger;\n  text-align: center;\n  width: 100%;\n  font-weight: bold;\n}\n\n.dueDate {\n  grid-area: dueDate;\n  font-size: small;\n  font-style: italic;\n}\n\n.description {\n  grid-area: description;\n}\n\n.delete {\n  grid-area: delete;\n  width: 30%;\n  align-self: end;\n  justify-self: end;\n}\n\n.priority {\n  color: red;\n}\n\n#completedWrapper {\n  overflow: hidden;\n}\n\n#completedList {\n  margin-top: -100%;\n  transition: all 0.3s ease-out;\n}\n\n.menu-button {\n  display: none;\n}\n\n@media (max-width: 800px) {\n  body {\n    grid-template-columns: auto;\n  }\n\n  #container {\n    width: 100vw;\n    height: 98%;\n  }\n\n  h2 {\n    margin: 0.5em 1em;\n  }\n\n  #sidebar {\n    overflow: hidden;\n    position: fixed;\n    height: 100%;\n    top: 5em;\n    margin-left: -100%;\n    transition: ease-out 0.6s;\n    grid-template-rows: 0.5fr 0.4fr 0.25fr 1fr 1fr 3fr;\n    z-index: 1;\n  }\n\n  #sidebar.expanded {\n    margin-left: 0;\n    display: grid;\n  }\n\n  .menu-button {\n    display: block;\n    position: fixed;\n    left: 1em;\n    bottom: 1em;\n    background-color: #fde047;\n    text-align: center;\n    border-radius: 50%;\n    z-index: 2;\n  }\n\n  .mobile-header {\n    margin: 0.5em 2.5em;\n  }\n\n  img {\n    margin: 4px 0 0 0;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
    parent.classList.add("entry-remove");
    parent.addEventListener("animationend", function () {
      parent.remove();
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLE9BQU8sYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVks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QU0sQ0FBQyxVQUFVLENBQUM7QUFDeEMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYWRkTGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NoZWNrUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50TGlzdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3ByaW50UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgb2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICA7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBvYmplY3QpO1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxufTtcblxudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIHVzaW5nIHRydW5jIGFzIGEgZGVmYXVsdCByb3VuZGluZyBtZXRob2QuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7XG5cbiAgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG4gICAgZGF0ZUxlZnQuc2V0TW9udGgoZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTtcblxuICAgIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjtcblxuICAgIC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuICAgIGlmIChpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkaXJ0eURhdGVMZWZ0KSkgJiYgZGlmZmVyZW5jZSA9PT0gMSAmJiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IDEpIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH1cblxuICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0Um91bmRpbmdNZXRob2QgfSBmcm9tIFwiLi4vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL19saWIvYXNzaWduL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUyA9IDI1MjA7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IDQzMjAwO1xudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlO1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGFzc2lnbihjbG9uZU9iamVjdChvcHRpb25zKSwge1xuICAgIGFkZFN1ZmZpeDogQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSxcbiAgICBjb21wYXJpc29uOiBjb21wYXJpc29uXG4gIH0pO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzO1xuXG4gIC8vIDAgdXAgdG8gMiBtaW5zXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIDAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuXG4gIC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7XG5cbiAgICAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAgIC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgICAgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCIuLi9lbmRPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRhc2tJRCA9IGBpZCR7TWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMil9YDtcbiAgfVxuXG4gIGdldCBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgZ2V0IGdldER1ZURhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gIH1cblxuICBnZXQgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IGdldENvbXBsZXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxldGVkO1xuICB9XG5cbiAgZ2V0IGdldFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XG4gIH1cblxuICBnZXQgZ2V0VGFza0lEKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tJRDtcbiAgfVxuXG4gIHNldCB0aXRsZSh0aXRsZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIHNldCBjb21wbGV0ZWQoY29tcGxldGVkKSB7XG4gICAgdGhpcy5fY29tcGxldGVkID0gY29tcGxldGVkO1xuICB9XG5cbiAgc2V0IHByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuX3Byb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgLy8gdGltZUxlZnQoKSB7XG4gIC8vICAgICBpZihkdWVEYXRlKSB7XG4gIC8vICAgICAgICAgbm93ID0gbmV3IERhdGUoKTtcbiAgLy8gICAgICAgICByZXR1cm4gKG5vdy5nZXRUaW1lKCkgLSB0aGlzLmR1ZURhdGUuZ2V0VGltZSgpKS8zNjAwMDtcbiAgLy8gICAgIH1cbiAgLy8gfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdCh2YWxpZCwgcHJvamVjdElucHV0KSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG4gIGNvbnN0IHByb2plY3RFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEVycm9yXCIpO1xuICBpZiAodmFsaWQpIHtcbiAgICAvLyBDcmVhdGVzIG5ldyBwcm9qZWN0IHdpdGggc3VwcGxpZWQgbmFtZSBhbmQgYWRkcyBpdCB0byB0aGUgc2VsZWN0IGJveFxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5ld1Byb2plY3QudmFsdWUgPSBgJHtwcm9qZWN0SW5wdXQudmFsdWV9UHJvamVjdGA7XG4gICAgbmV3UHJvamVjdC50ZXh0ID0gcHJvamVjdElucHV0LnZhbHVlO1xuICAgIHByb2plY3QuYWRkKG5ld1Byb2plY3QpO1xuXG4gICAgLy8gTWFrZXMgbmV3UHJvamVjdCB0aGUgYWN0aXZlIHByb2plY3RcbiAgICBwcm9qZWN0LnZhbHVlID0gbmV3UHJvamVjdC52YWx1ZTtcbiAgICBwcm9qZWN0RXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RBZGRcIikuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RFcnJvci5pbm5lckhUTUwgPSBcIlByb2plY3QgbmFtZSBpbiB1c2UuXCI7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrUHJvamVjdHMocHJvamVjdElucHV0LCBwcm9qZWN0KSB7XG4gIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgLy8gQ2hlY2tzIHRoZSBwcm9qZWN0cyBpbiB0aGUgPHNlbGVjdD4gYm94IHRvIHNlZSBpZiBvbmUgZXhpc3RzIHdpdGggdGhlIHNhbWUgbmFtZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3Qub3B0aW9uc1tpXS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChcbiAgICAgIHByb2plY3RJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBleGlzdGluZ1Byb2plY3Quc2xpY2UoMCwgLTcpICYmXG4gICAgICB2YWxpZFxuICAgICkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIHByb2plY3QgaGFzIHVuaXF1ZSBuYW1lLCBvdGhlcndpc2UgcmV0dXJucyBmYWxzZVxuICByZXR1cm4gdmFsaWQ7XG59XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludExpc3RJdGVtKExpc3RJdGVtKSB7XG4gIC8vIEVuY2xvc2VzIGFsbCB0YXNrcyBpbiBhIGRpdiB3aXRoIGEgdW5pcXVlIGlkIGFuZCBzaGFyZWQgY2xhc3NcbiAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdFbnRyeS5jbGFzc05hbWUgPSBcImVudHJ5XCI7XG4gIG5ld0VudHJ5LmlkID0gTGlzdEl0ZW0uZ2V0VGFza0lEO1xuXG4gIC8vIENyZWF0ZSBjaGVja2JveCBmb3IgbWFya2luZyB0YXNrcyBhcyBjb21wbGV0ZSAob3IgdW4tbWFya2luZylcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IExpc3RJdGVtLmdldENvbXBsZXRlZDtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gIC8vIENyZWF0ZSBsYWJlbCB3aXRoIHRoZSB0YXNrJ3MgdGl0bGUgYW5kIGhpZ2hsaWdodHMgaXQgaWYgaXQncyBhIHByaW9yaXR5XG4gIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuZXdMYWJlbC5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXRUaXRsZTtcbiAgbmV3TGFiZWwuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICBpZiAoTGlzdEl0ZW0uZ2V0UHJpb3JpdHkpIHtcbiAgICBuZXdMYWJlbC5jbGFzc05hbWUgKz0gXCIgcHJpb3JpdHlcIjtcbiAgfVxuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG5cbiAgLy8gSWYgYSBkdWUgZGF0ZSBpcyBhcHBsaWVkLCBjYWxjdWxhdGVzIGhvdyBtdWNoIHRpbWUgaXMgcmVtYWluaW5nIGFuZCBhZGRzIGl0IHRvIERPTVxuICBpZiAoTGlzdEl0ZW0uZ2V0RHVlRGF0ZSkge1xuICAgIGNvbnN0IGR1ZURhdGVET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcGFyc2VJU08oTGlzdEl0ZW0uZ2V0RHVlRGF0ZSk7XG4gICAgZHVlRGF0ZURPTS5pbm5lclRleHQgPSBgRHVlICR7Zm9ybWF0RGlzdGFuY2UoZHVlRGF0ZSwgbmV3IERhdGUoKSwge1xuICAgICAgYWRkU3VmZml4OiB0cnVlLFxuICAgIH0pfWA7XG4gICAgaWYgKG5ldyBEYXRlKCkgPiBkdWVEYXRlKSB7XG4gICAgICBkdWVEYXRlRE9NLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgZHVlRGF0ZURPTS5jbGFzc05hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkdWVEYXRlRE9NKTtcbiAgfVxuXG4gIC8vIElmIGRlc2NyaXB0aW9uIGlzIHN1cHBsaWVkLCBhZGRzIGl0IHRvIERPTVxuICBpZiAoTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb24udHJpbSgpKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb247XG4gICAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcbiAgfVxuXG4gIC8vIEFkZCBidXR0b24gdG8gZGVsZXRlIHRhc2tcbiAgLy8gY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlbGV0ZUJ0bi5zcmMgPSBkZWxldGVJY29uO1xuICAvLyBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgLy8gQWRkcyB0YXNrIHRvIGFwcHJvcHJpYXRlIGRpdiBkZXBlbmRpbmcgb24gd2hldGhlciBpdCdzIG1hcmtlZCBjb21wbGV0ZVxuICBpZiAoIUxpc3RJdGVtLmdldENvbXBsZXRlZCkge1xuICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwiXCIpO1xuICAgIGNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRMaXN0XCIpO1xuICAgIHRkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XG4gIH0gZWxzZSB7XG4gICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XG4gICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcbiAgICBjb21wbGV0ZWRMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHByaW50TGlzdEl0ZW0gZnJvbSBcIi4vcHJpbnRMaXN0SXRlbVwiO1xuXG5jb25zdCB0ZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRkTGlzdFwiKTtcbmNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZExpc3RcIik7XG5cbi8vIENoZWNrcyBsaXN0IG9mIHRvLWRvJ3MgYW5kIHByaW50cyBlYWNoIG9uZSB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcHJvamVjdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCB2YWx1ZSkge1xuICB0ZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29tcGxldGVkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBmdWxsTGlzdC5mb3JFYWNoKChMaXN0SXRlbSkgPT4ge1xuICAgIGlmIChMaXN0SXRlbS5nZXRQcm9qZWN0ID09PSB2YWx1ZSkge1xuICAgICAgcHJpbnRMaXN0SXRlbShMaXN0SXRlbSk7XG4gICAgfVxuICB9KTtcbiAgLy8gT2JqZWN0LmVudHJpZXMod2luZG93LmxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAvLyAgIGlmIChKU09OLnBhcnNlKHZhbCkuZ2V0UHJvamVjdCA9PT0gdmFsdWUpIHtcbiAgLy8gICAgIHByaW50TGlzdEl0ZW0oSlNPTi5wYXJzZSh2YWwpKTtcbiAgLy8gICB9XG4gIC8vIH0pO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDIwdncpIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNWVtIGF1dG87XG4gIGhlaWdodDogOTl2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xufVxuXG4jaGVhZGVyIHtcbiAgbWFyZ2luOiAwLjI1ZW0gMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG59XG5cbiNzaWRlYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjM1ZnIgMC40ZnIgMC40ZnIgMWZyIDNmcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3Byb2plY3RGb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4jcHJvamVjdHNMYWJlbCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgMS41ZW07XG59XG5cbiNwcm9qZWN0cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgd2lkdGg6IDcwJTtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIG1hcmdpbjogMCAxLjVlbTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3Byb2plY3RGb3JtQnV0dG9uIHtcbiAgd2lkdGg6IDU1JTtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gIG1hcmdpbjogMiU7XG59XG5cbiNwcm9qZWN0V3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI3Byb2plY3RBZGQge1xuICBtYXJnaW4tdG9wOiAtMzAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbn1cblxuI25ld1Byb2plY3Qge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4jcHJvamVjdEFkZCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2lucHV0Rm9ybUJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0NSU7XG59XG5cbiNpbnB1dFdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jaW5wdXRGb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogLTc1JTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4jaW5wdXRGb3JtLmV4cGFuZGVkLFxuI3Byb2plY3RBZGQuZXhwYW5kZWQsXG4jY29tcGxldGVkTGlzdC5leHBhbmRlZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbiN0aXRsZUlucHV0IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xufVxuXG4jZGVzY3JpcHRpb25Gb3JtIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xuICByZXNpemU6IG5vbmU7XG59XG5cbiNkdWVEYXRlIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufVxuXG4jZHVlRGF0ZUxhYmVsIHtcbiAgZ3JpZC1jb2x1bW46IDMgLyA1O1xufVxuXG4jcHJpb3JpdHlEaXYge1xuICBncmlkLWNvbHVtbjogMSAvIDU7XG59XG5cbiNwcmlvcml0eSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuI2R1ZURhdGVMYWJlbCxcbiNwcmlvcml0eUxhYmVsIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuI2FkZEJ0biB7XG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbiNjb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmY2U4O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2ZkZTA0NztcbiAgaGVpZ2h0OiA5OSU7XG59XG5cbiN0ZExpc3QsXG4jY29tcGxldGVkTGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1ZW0sIDFmcikpO1xuICBnYXA6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAxZW0gMWVtO1xufVxuXG4uZW50cnkge1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gYXV0byAwLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImNoZWNrIHRpdGxlIHRpdGxlIHRpdGxlXCJcbiAgICBcImR1ZURhdGUgZHVlRGF0ZSBkdWVEYXRlIGR1ZURhdGVcIlxuICAgIFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb25cIlxuICAgIFwiLiAuIC4gZGVsZXRlXCI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBnYXA6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWYwOGE7XG4gIGFuaW1hdGlvbjogaW5zZXJ0LXRhc2sgMC4ycztcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVudHJ5LXJlbW92ZSB7XG4gIGFuaW1hdGlvbjogcmVtb3ZlLXRhc2sgMC4xNXM7XG59XG5cbkBrZXlmcmFtZXMgaW5zZXJ0LXRhc2sge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByZW1vdmUtdGFzayB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxufVxuXG4uY2hlY2sge1xuICBncmlkLWFyZWE6IGNoZWNrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNoZWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVjazpjaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi50aXRsZSB7XG4gIGdyaWQtYXJlYTogdGl0bGU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZHVlRGF0ZSB7XG4gIGdyaWQtYXJlYTogZHVlRGF0ZTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xufVxuXG4uZGVsZXRlIHtcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XG4gIHdpZHRoOiAzMCU7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cbi5wcmlvcml0eSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiNjb21wbGV0ZWRXcmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2NvbXBsZXRlZExpc3Qge1xuICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5tZW51LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICBib2R5IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIH1cblxuICAjY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA5OCU7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAwLjVlbSAxZW07XG4gIH1cblxuICAjc2lkZWJhciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCAwLjZzO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC40ZnIgMC4yNWZyIDFmciAxZnIgM2ZyO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAjc2lkZWJhci5leHBhbmRlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxuXG4gIC5tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDFlbTtcbiAgICBib3R0b206IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlMDQ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC5tb2JpbGUtaGVhZGVyIHtcbiAgICBtYXJnaW46IDAuNWVtIDIuNWVtO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXJnaW46IDRweCAwIDAgMDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiwrQ0FBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isb0RBQW9EO0VBQ3BELHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFFBQVE7RUFDUixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLHVDQUF1QztFQUN2Qzs7OztrQkFJZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrREFBa0Q7SUFDbEQsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDIwdncpIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVlbSBhdXRvO1xcbiAgaGVpZ2h0OiA5OXZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTA0NztcXG59XFxuXFxuI2hlYWRlciB7XFxuICBtYXJnaW46IDAuMjVlbSAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjM1ZnIgMC40ZnIgMC40ZnIgMWZyIDNmcjtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuI3Byb2plY3RzTGFiZWwge1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwIDEuNWVtO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIG1hcmdpbjogMCAxLjVlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNwcm9qZWN0Rm9ybUJ1dHRvbiB7XFxuICB3aWR0aDogNTUlO1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICBtYXJnaW46IDIlO1xcbn1cXG5cXG4jcHJvamVjdFdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3Byb2plY3RBZGQge1xcbiAgbWFyZ2luLXRvcDogLTMwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuXFxuI25ld1Byb2plY3Qge1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0QWRkIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jaW5wdXRGb3JtQnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuI2lucHV0V3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jaW5wdXRGb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tdG9wOiAtNzUlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4jaW5wdXRGb3JtLmV4cGFuZGVkLFxcbiNwcm9qZWN0QWRkLmV4cGFuZGVkLFxcbiNjb21wbGV0ZWRMaXN0LmV4cGFuZGVkIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbiN0aXRsZUlucHV0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG59XFxuXFxuI2Rlc2NyaXB0aW9uRm9ybSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDU7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiNkdWVEYXRlIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuI2R1ZURhdGVMYWJlbCB7XFxuICBncmlkLWNvbHVtbjogMyAvIDU7XFxufVxcblxcbiNwcmlvcml0eURpdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDU7XFxufVxcblxcbiNwcmlvcml0eSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4jZHVlRGF0ZUxhYmVsLFxcbiNwcmlvcml0eUxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbiNhZGRCdG4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZjZTg7XFxuICBib3JkZXItdG9wOiA1cHggc29saWQgI2ZkZTA0NztcXG4gIGhlaWdodDogOTklO1xcbn1cXG5cXG4jdGRMaXN0LFxcbiNjb21wbGV0ZWRMaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNWVtLCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDFlbSAxZW07XFxufVxcblxcbi5lbnRyeSB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG8gYXV0byAwLjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJjaGVjayB0aXRsZSB0aXRsZSB0aXRsZVxcXCJcXG4gICAgXFxcImR1ZURhdGUgZHVlRGF0ZSBkdWVEYXRlIGR1ZURhdGVcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvblxcXCJcXG4gICAgXFxcIi4gLiAuIGRlbGV0ZVxcXCI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjA4YTtcXG4gIGFuaW1hdGlvbjogaW5zZXJ0LXRhc2sgMC4ycztcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5lbnRyeS1yZW1vdmUge1xcbiAgYW5pbWF0aW9uOiByZW1vdmUtdGFzayAwLjE1cztcXG59XFxuXFxuQGtleWZyYW1lcyBpbnNlcnQtdGFzayB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByZW1vdmUtdGFzayB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIH1cXG59XFxuXFxuLmNoZWNrIHtcXG4gIGdyaWQtYXJlYTogY2hlY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uY2hlY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2s6Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gIGdyaWQtYXJlYTogZHVlRGF0ZTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2NvbXBsZXRlZFdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2NvbXBsZXRlZExpc3Qge1xcbiAgbWFyZ2luLXRvcDogLTEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIH1cXG5cXG4gICNjb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogOTglO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBtYXJnaW46IDAuNWVtIDFlbTtcXG4gIH1cXG5cXG4gICNzaWRlYmFyIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRvcDogNWVtO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwMCU7XFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuNnM7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC40ZnIgMC4yNWZyIDFmciAxZnIgM2ZyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgI3NpZGViYXIuZXhwYW5kZWQge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG5cXG4gIC5tZW51LWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDFlbTtcXG4gICAgYm90dG9tOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGUwNDc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgLm1vYmlsZS1oZWFkZXIge1xcbiAgICBtYXJnaW46IDAuNWVtIDIuNWVtO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWFyZ2luOiA0cHggMCAwIDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL2FkZExpc3RJdGVtXCI7XG5pbXBvcnQgcHJpbnRMaXN0SXRlbSBmcm9tIFwiLi9wcmludExpc3RJdGVtXCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XG5pbXBvcnQgY2hlY2tQcm9qZWN0cyBmcm9tIFwiLi9jaGVja1Byb2plY3RzXCI7XG5pbXBvcnQgcHJpbnRQcm9qZWN0IGZyb20gXCIuL3ByaW50UHJvamVjdFwiO1xuXG4vLyBEb20gZWxlbWVudHMgdXNlZCBmb3IgYW5kIGluIGV2ZW50IGxpc3RlbmVyc1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbmxldCBmdWxsTGlzdCA9IFtdO1xuXG5mdWxsTGlzdC5mb3JFYWNoKChMSSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMSS5nZXRUYXNrSUQsIEpTT04uc3RyaW5naWZ5KExJKSk7XG59KTtcblxuLy8gUHJpbnRzIGNvbnRlbnRzIG9mIGRlZmF1bHQgcHJvamVjdCBvbiBwYWdlIGxvYWRcbnByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG5cbi8vIFByaW50cyBjb250ZW50cyBvZiBzZWxlY3RlZCBwcm9qZWN0IHdoZW4gc2VsZWN0aW9uIGlzIGNoYW5nZWRcbnByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIHByaW50UHJvamVjdChmdWxsTGlzdCwgcHJvamVjdC52YWx1ZSk7XG5cbiAgLy8gQ2xvc2VzIHRoZSBtZW51IGlmIHVzZXIgaXMgb24gYSBtb2JpbGUgc2NyZWVuXG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucyhcImV4cGFuZGVkXCIpKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gIH1cbn0pO1xuXG4vLyBFeHBhbmRzIG9yIGNvbGxhcHNlcyB0aGUgZm9ybSBmb3IgYWRkaW5nIGEgcHJvamVjdCB3aGVuIGJ1dHRvbiBpcyBwcmVzc2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RGb3JtQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RBZGRcIik7XG4gIHByb2plY3RBZGQuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICBwcm9qZWN0QWRkLmNsYXNzTGlzdC50b2dnbGUoXCJjb2xsYXBzZWRcIik7XG59KTtcblxuLy8gQ3JlYXRlcyBuZXcgcHJvamVjdCB3aGVuICdOZXcgUHJvamVjdCcgYnV0dG9uIGlzIHByZXNzZWRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RJbnB1dFwiKTtcbiAgY29uc3QgdmFsaWQgPSBjaGVja1Byb2plY3RzKHByb2plY3RJbnB1dCwgcHJvamVjdCk7XG4gIGFkZFByb2plY3QodmFsaWQsIHByb2plY3RJbnB1dCk7XG4gIGlmICh2YWxpZCkgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbiAgcHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCBwcm9qZWN0LnZhbHVlKTtcbn0pO1xuXG4vLyBDcmVhdGVzIGEgbmV3LCB1bmNvbXBsZXRlZCB0YXNrIHdoZW4gJ0FkZCcgYnV0dG9uIGlzIHByZXNzZWQgSUYgdGl0bGUgaXMgcHJlc2VudFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5wdXRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbkZvcm1cIik7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcblxuICBpZiAodGl0bGUudmFsdWUudHJpbSgpKSB7XG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBuZXcgTGlzdEl0ZW0oXG4gICAgICB0aXRsZS52YWx1ZSxcbiAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgZHVlRGF0ZS52YWx1ZSxcbiAgICAgIHByaW9yaXR5LmNoZWNrZWQsXG4gICAgICBwcm9qZWN0LnZhbHVlXG4gICAgKTtcbiAgICBwcmludExpc3RJdGVtKG5ld0xpc3RJdGVtKTtcbiAgICBmdWxsTGlzdC5wdXNoKG5ld0xpc3RJdGVtKTtcblxuICAgIC8vIENsZWFycyBhbGwgaW5wdXRzXG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgICBwcmlvcml0eS5jaGVja2VkID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dEZvcm1cIikuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuXG4gICAgLy8gQ2xvc2VzIHRoZSBtZW51IGlmIHVzZXIgaXMgb24gYSBtb2JpbGUgZGV2aWNlXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJleHBhbmRlZFwiKSkge1xuICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKFwiZXhwYW5kZWRcIik7XG4gICAgfVxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld0xpc3RJdGVtLmdldFRhc2tJRCwgSlNPTi5zdHJpbmdpZnkobmV3TGlzdEl0ZW0pKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgdGl0bGUgaXMgd2hpdGVzcGFjZSwgcmVtb3ZlcyBpdCBhbmQgd2FpdHMgZm9yIGEgbmV3IHRpdGxlLlxuICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5cbi8vIExpc3RlbnMgZm9yIGFueSBjbGlja3Mgd2l0aGluIHRoZSB0YXNrcyBjb250YWluZXIuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZWxlbWVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgLy8gSWYgZGVsZXRlIGJ1dHRvbiBpcyBjbGlja2VkLCBkZWxldGVzIHRhc2suXG4gIGlmIChlbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGVcIikpIHtcbiAgICBmdWxsTGlzdCA9IGZ1bGxMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5nZXRUYXNrSUQgIT09IHBhcmVudC5pZCk7XG4gICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoXCJlbnRyeS1yZW1vdmVcIik7XG4gICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgcGFyZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG4gIC8vIElmIGNoZWNrYm94IGlzIGNsaWNrZWQsIHRvZ2dsZXMgJ2NvbXBsZXRlZCcgYW5kIG1vdmVzIHRhc2sgZnJvbSAndGFza3MnIHRvICdjb21wbGV0ZWQnIG9yIHZpY2UtdmVyc2FcbiAgaWYgKGVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrXCIpKSB7XG4gICAgY29uc3QgdG9nZ2xlSW5kZXggPSBmdWxsTGlzdC5tYXAoKGUpID0+IGUuZ2V0VGFza0lEKS5pbmRleE9mKHBhcmVudC5pZCk7XG4gICAgZnVsbExpc3RbdG9nZ2xlSW5kZXhdLmNvbXBsZXRlZCA9ICFmdWxsTGlzdFt0b2dnbGVJbmRleF0uZ2V0Q29tcGxldGVkO1xuICAgIHByaW50TGlzdEl0ZW0oZnVsbExpc3RbdG9nZ2xlSW5kZXhdKTtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImVudHJ5LXJlbW92ZVwiKTtcbiAgICBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICBwYXJlbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gSWYgJ0NvbXBsZXRlZCcgaGVhZGVyIGlzIGNsaWNrZWQsIGV4cGFuZHMgdGhlIGxpc3Qgb2YgY29tcGxldGVkIHRhc2tzXG4gIGlmIChlbGVtZW50LnRhcmdldC5pZCA9PT0gXCJleHBhbmRDb21wbGV0ZWRcIikge1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGVsZW1lbnQudGFyZ2V0O1xuICAgIC8vIFJpZGljdWxvdXMgY2hhaW5lZCBET00gbGlzdCBwb2ludHMgdG8gdGhlIGNvbXBsZXRlZExpc3QgZGl2IHRvIGNoZWNrIGlmIGl0J3MgY29sbGFwc2VkXG4gICAgaWYgKFxuICAgICAgY29tcGxldGVkLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICAgIFwiY29sbGFwc2VkXCJcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGNvbXBsZXRlZC5pbm5lclRleHQgPSBcIkNvbXBsZXRlZCDilr9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGVkLmlubmVyVGV4dCA9IFwiQ29tcGxldGVkIOKWtlwiO1xuICAgIH1cbiAgICBjb25zdCBjb21wbGV0ZWRMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wbGV0ZWRMaXN0XCIpO1xuICAgIGNvbXBsZXRlZExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImV4cGFuZGVkXCIpO1xuICAgIGNvbXBsZXRlZExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcImNvbGxhcHNlZFwiKTtcbiAgfVxufSk7XG5cbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnV0dG9uXCIpO1xubW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbn0pO1xuXG4vLyBFeHBhbmRzIG9yIGNvbGxhcHNlcyBmb3JtIGZvciBhZGRpbmcgYSBuZXcgdGFzayB3aGVuIGJ1dHRvbiBpcyBwcmVzc2VkXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Rm9ybUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0Rm9ybVwiKTtcbiAgaW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJleHBhbmRlZFwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsImFzc2lnbiIsInRhcmdldCIsIm9iamVjdCIsIlR5cGVFcnJvciIsInByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY2xvbmVPYmplY3QiLCJkZWZhdWx0TG9jYWxlIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInNldERlZmF1bHRPcHRpb25zIiwibmV3T3B0aW9ucyIsImdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMiLCJkYXRlIiwidXRjRGF0ZSIsIkRhdGUiLCJVVEMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJzZXRVVENGdWxsWWVhciIsImdldFRpbWUiLCJyZXF1aXJlZEFyZ3MiLCJyZXF1aXJlZCIsImFyZ3MiLCJyb3VuZGluZ01hcCIsImNlaWwiLCJNYXRoIiwicm91bmQiLCJmbG9vciIsInRydW5jIiwidmFsdWUiLCJkZWZhdWx0Um91bmRpbmdNZXRob2QiLCJnZXRSb3VuZGluZ01ldGhvZCIsIm1ldGhvZCIsInRvSW50ZWdlciIsImRpcnR5TnVtYmVyIiwiTmFOIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJ0b0RhdGUiLCJjb21wYXJlQXNjIiwiZGlydHlEYXRlTGVmdCIsImRpcnR5RGF0ZVJpZ2h0IiwiYXJndW1lbnRzIiwiZGF0ZUxlZnQiLCJkYXRlUmlnaHQiLCJkaWZmIiwiZGF5c0luV2VlayIsImRheXNJblllYXIiLCJtYXhUaW1lIiwicG93IiwibWlsbGlzZWNvbmRzSW5NaW51dGUiLCJtaWxsaXNlY29uZHNJbkhvdXIiLCJtaWxsaXNlY29uZHNJblNlY29uZCIsIm1pblRpbWUiLCJtaW51dGVzSW5Ib3VyIiwibW9udGhzSW5RdWFydGVyIiwibW9udGhzSW5ZZWFyIiwicXVhcnRlcnNJblllYXIiLCJzZWNvbmRzSW5Ib3VyIiwic2Vjb25kc0luTWludXRlIiwic2Vjb25kc0luRGF5Iiwic2Vjb25kc0luV2VlayIsInNlY29uZHNJblllYXIiLCJzZWNvbmRzSW5Nb250aCIsInNlY29uZHNJblF1YXJ0ZXIiLCJkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyIsInllYXJEaWZmIiwibW9udGhEaWZmIiwiZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIiwiaXNMYXN0RGF5T2ZNb250aCIsImRpZmZlcmVuY2VJbk1vbnRocyIsInNpZ24iLCJkaWZmZXJlbmNlIiwiYWJzIiwicmVzdWx0Iiwic2V0RGF0ZSIsInNldE1vbnRoIiwiaXNMYXN0TW9udGhOb3RGdWxsIiwiZGlmZmVyZW5jZUluU2Vjb25kcyIsIm9wdGlvbnMiLCJyb3VuZGluZ01ldGhvZCIsImVuZE9mRGF5IiwiZGlydHlEYXRlIiwic2V0SG91cnMiLCJlbmRPZk1vbnRoIiwibW9udGgiLCJzZXRGdWxsWWVhciIsIk1JTlVURVNfSU5fREFZIiwiTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMiLCJNSU5VVEVTX0lOX01PTlRIIiwiTUlOVVRFU19JTl9UV09fTU9OVEhTIiwiZm9ybWF0RGlzdGFuY2UiLCJkaXJ0eUJhc2VEYXRlIiwiX3JlZiIsIl9vcHRpb25zJGxvY2FsZSIsImxvY2FsZSIsIlJhbmdlRXJyb3IiLCJjb21wYXJpc29uIiwibG9jYWxpemVPcHRpb25zIiwiYWRkU3VmZml4IiwiQm9vbGVhbiIsInNlY29uZHMiLCJvZmZzZXRJblNlY29uZHMiLCJtaW51dGVzIiwibW9udGhzIiwiaW5jbHVkZVNlY29uZHMiLCJob3VycyIsImRheXMiLCJuZWFyZXN0TW9udGgiLCJtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIiwieWVhcnMiLCJidWlsZEZvcm1hdExvbmdGbiIsIndpZHRoIiwiU3RyaW5nIiwiZGVmYXVsdFdpZHRoIiwiZm9ybWF0IiwiZm9ybWF0cyIsImJ1aWxkTG9jYWxpemVGbiIsImRpcnR5SW5kZXgiLCJjb250ZXh0IiwidmFsdWVzQXJyYXkiLCJmb3JtYXR0aW5nVmFsdWVzIiwiZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCIsIl9kZWZhdWx0V2lkdGgiLCJfd2lkdGgiLCJ2YWx1ZXMiLCJpbmRleCIsImFyZ3VtZW50Q2FsbGJhY2siLCJidWlsZE1hdGNoRm4iLCJzdHJpbmciLCJtYXRjaFBhdHRlcm4iLCJtYXRjaFBhdHRlcm5zIiwiZGVmYXVsdE1hdGNoV2lkdGgiLCJtYXRjaFJlc3VsdCIsIm1hdGNoIiwibWF0Y2hlZFN0cmluZyIsInBhcnNlUGF0dGVybnMiLCJkZWZhdWx0UGFyc2VXaWR0aCIsImtleSIsIkFycmF5IiwiaXNBcnJheSIsImZpbmRJbmRleCIsInBhdHRlcm4iLCJ0ZXN0IiwiZmluZEtleSIsInZhbHVlQ2FsbGJhY2siLCJyZXN0Iiwic2xpY2UiLCJwcmVkaWNhdGUiLCJhcnJheSIsImJ1aWxkTWF0Y2hQYXR0ZXJuRm4iLCJwYXJzZVJlc3VsdCIsInBhcnNlUGF0dGVybiIsImZvcm1hdERpc3RhbmNlTG9jYWxlIiwibGVzc1RoYW5YU2Vjb25kcyIsIm9uZSIsIm90aGVyIiwieFNlY29uZHMiLCJoYWxmQU1pbnV0ZSIsImxlc3NUaGFuWE1pbnV0ZXMiLCJ4TWludXRlcyIsImFib3V0WEhvdXJzIiwieEhvdXJzIiwieERheXMiLCJhYm91dFhXZWVrcyIsInhXZWVrcyIsImFib3V0WE1vbnRocyIsInhNb250aHMiLCJhYm91dFhZZWFycyIsInhZZWFycyIsIm92ZXJYWWVhcnMiLCJhbG1vc3RYWWVhcnMiLCJ0b2tlbiIsImNvdW50IiwidG9rZW5WYWx1ZSIsInJlcGxhY2UiLCJkYXRlRm9ybWF0cyIsImZ1bGwiLCJsb25nIiwibWVkaXVtIiwic2hvcnQiLCJ0aW1lRm9ybWF0cyIsImRhdGVUaW1lRm9ybWF0cyIsImZvcm1hdExvbmciLCJ0aW1lIiwiZGF0ZVRpbWUiLCJmb3JtYXRSZWxhdGl2ZUxvY2FsZSIsImxhc3RXZWVrIiwieWVzdGVyZGF5IiwidG9kYXkiLCJ0b21vcnJvdyIsIm5leHRXZWVrIiwiZm9ybWF0UmVsYXRpdmUiLCJfZGF0ZSIsIl9iYXNlRGF0ZSIsIl9vcHRpb25zIiwiZXJhVmFsdWVzIiwibmFycm93IiwiYWJicmV2aWF0ZWQiLCJ3aWRlIiwicXVhcnRlclZhbHVlcyIsIm1vbnRoVmFsdWVzIiwiZGF5VmFsdWVzIiwiZGF5UGVyaW9kVmFsdWVzIiwiYW0iLCJwbSIsIm1pZG5pZ2h0Iiwibm9vbiIsIm1vcm5pbmciLCJhZnRlcm5vb24iLCJldmVuaW5nIiwibmlnaHQiLCJmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzIiwib3JkaW5hbE51bWJlciIsInJlbTEwMCIsImxvY2FsaXplIiwiZXJhIiwicXVhcnRlciIsImRheSIsImRheVBlcmlvZCIsIm1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4iLCJwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIiwibWF0Y2hFcmFQYXR0ZXJucyIsInBhcnNlRXJhUGF0dGVybnMiLCJhbnkiLCJtYXRjaFF1YXJ0ZXJQYXR0ZXJucyIsInBhcnNlUXVhcnRlclBhdHRlcm5zIiwibWF0Y2hNb250aFBhdHRlcm5zIiwicGFyc2VNb250aFBhdHRlcm5zIiwibWF0Y2hEYXlQYXR0ZXJucyIsInBhcnNlRGF5UGF0dGVybnMiLCJtYXRjaERheVBlcmlvZFBhdHRlcm5zIiwicGFyc2VEYXlQZXJpb2RQYXR0ZXJucyIsInBhcnNlSW50IiwiY29kZSIsIndlZWtTdGFydHNPbiIsImZpcnN0V2Vla0NvbnRhaW5zRGF0ZSIsInBhcnNlSVNPIiwiYXJndW1lbnQiLCJfb3B0aW9ucyRhZGRpdGlvbmFsRGkiLCJhZGRpdGlvbmFsRGlnaXRzIiwiZGF0ZVN0cmluZ3MiLCJzcGxpdERhdGVTdHJpbmciLCJwYXJzZVllYXJSZXN1bHQiLCJwYXJzZVllYXIiLCJwYXJzZURhdGUiLCJyZXN0RGF0ZVN0cmluZyIsInllYXIiLCJ0aW1lc3RhbXAiLCJvZmZzZXQiLCJwYXJzZVRpbWUiLCJ0aW1lem9uZSIsInBhcnNlVGltZXpvbmUiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsImdldFVUQ1NlY29uZHMiLCJnZXRVVENNaWxsaXNlY29uZHMiLCJwYXR0ZXJucyIsImRhdGVUaW1lRGVsaW1pdGVyIiwidGltZVpvbmVEZWxpbWl0ZXIiLCJkYXRlUmVnZXgiLCJ0aW1lUmVnZXgiLCJ0aW1lem9uZVJlZ2V4IiwiZGF0ZVN0cmluZyIsInNwbGl0IiwidGltZVN0cmluZyIsInN1YnN0ciIsImV4ZWMiLCJyZWdleCIsIlJlZ0V4cCIsImNhcHR1cmVzIiwiY2VudHVyeSIsImlzV2Vla0RhdGUiLCJkYXlPZlllYXIiLCJwYXJzZURhdGVVbml0Iiwid2VlayIsImRheU9mV2VlayIsInZhbGlkYXRlV2Vla0RhdGUiLCJkYXlPZklTT1dlZWtZZWFyIiwidmFsaWRhdGVEYXRlIiwidmFsaWRhdGVEYXlPZlllYXJEYXRlIiwibWF4IiwicGFyc2VUaW1lVW5pdCIsInZhbGlkYXRlVGltZSIsInBhcnNlRmxvYXQiLCJ0aW1lem9uZVN0cmluZyIsInZhbGlkYXRlVGltZXpvbmUiLCJpc29XZWVrWWVhciIsImZvdXJ0aE9mSmFudWFyeURheSIsImdldFVUQ0RheSIsInNldFVUQ0RhdGUiLCJkYXlzSW5Nb250aHMiLCJpc0xlYXBZZWFySW5kZXgiLCJfeWVhciIsIl9ob3VycyIsIl90eXBlb2YiLCJhcmdTdHIiLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwic3RhY2siLCJMaXN0SXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiX2NsYXNzQ2FsbENoZWNrIiwiY29tcGxldGVkIiwidGFza0lEIiwicmFuZG9tIiwiX2NyZWF0ZUNsYXNzIiwiZ2V0IiwiX3RpdGxlIiwiX2Rlc2NyaXB0aW9uIiwiX2R1ZURhdGUiLCJfcHJpb3JpdHkiLCJfY29tcGxldGVkIiwiX3Byb2plY3QiLCJzZXQiLCJkZWZhdWx0IiwiYWRkUHJvamVjdCIsInZhbGlkIiwicHJvamVjdElucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByb2plY3RFcnJvciIsIm5ld1Byb2plY3QiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImFkZCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNoZWNrUHJvamVjdHMiLCJleGlzdGluZ1Byb2plY3QiLCJ0b0xvd2VyQ2FzZSIsImRlbGV0ZUljb24iLCJwcmludExpc3RJdGVtIiwibmV3RW50cnkiLCJjbGFzc05hbWUiLCJnZXRUYXNrSUQiLCJjaGVja2JveCIsInR5cGUiLCJjaGVja2VkIiwiZ2V0Q29tcGxldGVkIiwiYXBwZW5kQ2hpbGQiLCJuZXdMYWJlbCIsImdldFRpdGxlIiwiZ2V0UHJpb3JpdHkiLCJnZXREdWVEYXRlIiwiZHVlRGF0ZURPTSIsImlubmVyVGV4dCIsInN0eWxlIiwiY29sb3IiLCJnZXREZXNjcmlwdGlvbiIsInRyaW0iLCJkZXNjcmlwdGlvblRleHQiLCJkZWxldGVCdG4iLCJzcmMiLCJzZXRQcm9wZXJ0eSIsInRkTGlzdCIsImNvbXBsZXRlZExpc3QiLCJwcmludFByb2plY3QiLCJmdWxsTGlzdCIsImZvckVhY2giLCJnZXRQcm9qZWN0Iiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIkxJIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaWRlYmFyIiwiY29udGFpbnMiLCJwcm9qZWN0QWRkIiwibmV3TGlzdEl0ZW0iLCJjb250YWluZXIiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImZpbHRlciIsInRhc2siLCJyZW1vdmUiLCJ0b2dnbGVJbmRleCIsImUiLCJpbmRleE9mIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJtb2JpbGVNZW51IiwicXVlcnlTZWxlY3RvciIsImlucHV0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=