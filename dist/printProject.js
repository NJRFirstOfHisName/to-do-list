/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsRUFBRTtFQUNyQmtCLGFBQWEsQ0FBQ2xCLFNBQVMsR0FBRyxFQUFFO0VBQzVCd0IsUUFBUSxDQUFDQyxPQUFPLENBQUMsVUFBQ3RDLFFBQVEsRUFBSztJQUM3QixJQUFJQSxRQUFRLENBQUN1QyxVQUFVLEtBQUsvVCxLQUFLLEVBQUU7TUFDakN1UiwwREFBYSxDQUFDQyxRQUFRLENBQUM7SUFDekI7RUFDRixDQUFDLENBQUM7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yb3VuZGluZ01ldGhvZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcHJpbnRQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIG9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgO1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vYXNzaWduL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgb2JqZWN0KTtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwidmFyIHJvdW5kaW5nTWFwID0ge1xuICBjZWlsOiBNYXRoLmNlaWwsXG4gIHJvdW5kOiBNYXRoLnJvdW5kLFxuICBmbG9vcjogTWF0aC5mbG9vcixcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfSAvLyBNYXRoLnRydW5jIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcbn07XG5cbnZhciBkZWZhdWx0Um91bmRpbmdNZXRob2QgPSAndHJ1bmMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gbWV0aG9kID8gcm91bmRpbmdNYXBbbWV0aG9kXSA6IHJvdW5kaW5nTWFwW2RlZmF1bHRSb3VuZGluZ01ldGhvZF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpO1xuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGF0ZUxlZnQpLmdldFRpbWUoKSAtIHRvRGF0ZShkYXRlUmlnaHQpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzTGFzdERheU9mTW9udGggZnJvbSBcIi4uL2lzTGFzdERheU9mTW9udGgvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyB1c2luZyB0cnVuYyBhcyBhIGRlZmF1bHQgcm91bmRpbmcgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICB2YXIgcmVzdWx0O1xuXG4gIC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gMSAmJiBkYXRlTGVmdC5nZXREYXRlKCkgPiAyNykge1xuICAgICAgLy8gVGhpcyB3aWxsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIGVuZCBvZiBGZWIgYW5kIGFzc2lnbiBhIGhpZ2hlciBlbmQgb2YgbW9udGggZGF0ZVxuICAgICAgLy8gdG8gY29tcGFyZSBpdCB3aXRoIEphblxuICAgICAgZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuICAgIGRhdGVMZWZ0LnNldE1vbnRoKGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBzaWduICogZGlmZmVyZW5jZSk7XG5cbiAgICAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcbiAgICB2YXIgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ247XG5cbiAgICAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcbiAgICBpZiAoaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGlydHlEYXRlTGVmdCkpICYmIGRpZmZlcmVuY2UgPT09IDEgJiYgY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAxKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9XG5cbiAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZ2V0Um91bmRpbmdNZXRob2Qob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJvdW5kaW5nTWV0aG9kKShkaWZmKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgYXNzaWduIGZyb20gXCIuLi9fbGliL2Fzc2lnbi9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZTtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBhc3NpZ24oY2xvbmVPYmplY3Qob3B0aW9ucyksIHtcbiAgICBhZGRTdWZmaXg6IEJvb2xlYW4ob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZFN1ZmZpeCksXG4gICAgY29tcGFyaXNvbjogY29tcGFyaXNvblxuICB9KTtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRocztcblxuICAvLyAwIHVwIHRvIDIgbWluc1xuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTtcblxuICAgIC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcblxuICAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpO1xuXG4gICAgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuXG4gICAgICAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG5cbiAgICAgIC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiBlbmRPZkRheShkYXRlKS5nZXRUaW1lKCkgPT09IGVuZE9mTW9udGgoZGF0ZSkuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludExpc3RJdGVtKExpc3RJdGVtKSB7XG4gIC8vIEVuY2xvc2VzIGFsbCB0YXNrcyBpbiBhIGRpdiB3aXRoIGEgdW5pcXVlIGlkIGFuZCBzaGFyZWQgY2xhc3NcbiAgY29uc3QgbmV3RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdFbnRyeS5jbGFzc05hbWUgPSBcImVudHJ5XCI7XG4gIG5ld0VudHJ5LmlkID0gTGlzdEl0ZW0uZ2V0VGFza0lEO1xuXG4gIC8vIENyZWF0ZSBjaGVja2JveCBmb3IgbWFya2luZyB0YXNrcyBhcyBjb21wbGV0ZSAob3IgdW4tbWFya2luZylcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcbiAgY2hlY2tib3guY2hlY2tlZCA9IExpc3RJdGVtLmdldENvbXBsZXRlZDtcbiAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gIC8vIENyZWF0ZSBsYWJlbCB3aXRoIHRoZSB0YXNrJ3MgdGl0bGUgYW5kIGhpZ2hsaWdodHMgaXQgaWYgaXQncyBhIHByaW9yaXR5XG4gIGNvbnN0IG5ld0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuZXdMYWJlbC5pbm5lckhUTUwgPSBMaXN0SXRlbS5nZXRUaXRsZTtcbiAgbmV3TGFiZWwuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICBpZiAoTGlzdEl0ZW0uZ2V0UHJpb3JpdHkpIHtcbiAgICBuZXdMYWJlbC5jbGFzc05hbWUgKz0gXCIgcHJpb3JpdHlcIjtcbiAgfVxuICBuZXdFbnRyeS5hcHBlbmRDaGlsZChuZXdMYWJlbCk7XG5cbiAgLy8gSWYgYSBkdWUgZGF0ZSBpcyBhcHBsaWVkLCBjYWxjdWxhdGVzIGhvdyBtdWNoIHRpbWUgaXMgcmVtYWluaW5nIGFuZCBhZGRzIGl0IHRvIERPTVxuICBpZiAoTGlzdEl0ZW0uZ2V0RHVlRGF0ZSkge1xuICAgIGNvbnN0IGR1ZURhdGVET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcGFyc2VJU08oTGlzdEl0ZW0uZ2V0RHVlRGF0ZSk7XG4gICAgZHVlRGF0ZURPTS5pbm5lclRleHQgPSBgRHVlICR7Zm9ybWF0RGlzdGFuY2UoZHVlRGF0ZSwgbmV3IERhdGUoKSwge1xuICAgICAgYWRkU3VmZml4OiB0cnVlLFxuICAgIH0pfWA7XG4gICAgaWYgKG5ldyBEYXRlKCkgPiBkdWVEYXRlKSB7XG4gICAgICBkdWVEYXRlRE9NLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gICAgZHVlRGF0ZURPTS5jbGFzc05hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBuZXdFbnRyeS5hcHBlbmRDaGlsZChkdWVEYXRlRE9NKTtcbiAgfVxuXG4gIC8vIElmIGRlc2NyaXB0aW9uIGlzIHN1cHBsaWVkLCBhZGRzIGl0IHRvIERPTVxuICBpZiAoTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb24udHJpbSgpKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb25UZXh0LmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvblRleHQuaW5uZXJIVE1MID0gTGlzdEl0ZW0uZ2V0RGVzY3JpcHRpb247XG4gICAgbmV3RW50cnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0KTtcbiAgfVxuXG4gIC8vIEFkZCBidXR0b24gdG8gZGVsZXRlIHRhc2tcbiAgLy8gY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlbGV0ZUJ0bi5zcmMgPSBkZWxldGVJY29uO1xuICAvLyBkZWxldGVCdG4uaW5uZXJIVE1MID0gXCJEZWxldGVcIjtcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9IFwiZGVsZXRlXCI7XG4gIG5ld0VudHJ5LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgLy8gQWRkcyB0YXNrIHRvIGFwcHJvcHJpYXRlIGRpdiBkZXBlbmRpbmcgb24gd2hldGhlciBpdCdzIG1hcmtlZCBjb21wbGV0ZVxuICBpZiAoIUxpc3RJdGVtLmdldENvbXBsZXRlZCkge1xuICAgIG5ld0xhYmVsLnN0eWxlLnNldFByb3BlcnR5KFwidGV4dC1kZWNvcmF0aW9uXCIsIFwiXCIpO1xuICAgIGNvbnN0IHRkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGRMaXN0XCIpO1xuICAgIHRkTGlzdC5hcHBlbmRDaGlsZChuZXdFbnRyeSk7XG4gIH0gZWxzZSB7XG4gICAgbmV3TGFiZWwuc3R5bGUuc2V0UHJvcGVydHkoXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJsaW5lLXRocm91Z2hcIik7XG4gICAgY29uc3QgY29tcGxldGVkTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGxldGVkTGlzdFwiKTtcbiAgICBjb21wbGV0ZWRMaXN0LmFwcGVuZENoaWxkKG5ld0VudHJ5KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHByaW50TGlzdEl0ZW0gZnJvbSBcIi4vcHJpbnRMaXN0SXRlbVwiO1xuXG5jb25zdCB0ZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRkTGlzdFwiKTtcbmNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBsZXRlZExpc3RcIik7XG5cbi8vIENoZWNrcyBsaXN0IG9mIHRvLWRvJ3MgYW5kIHByaW50cyBlYWNoIG9uZSB0aGF0IG1hdGNoZXMgdGhlIGN1cnJlbnQgcHJvamVjdFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRQcm9qZWN0KGZ1bGxMaXN0LCB2YWx1ZSkge1xuICB0ZExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29tcGxldGVkTGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICBmdWxsTGlzdC5mb3JFYWNoKChMaXN0SXRlbSkgPT4ge1xuICAgIGlmIChMaXN0SXRlbS5nZXRQcm9qZWN0ID09PSB2YWx1ZSkge1xuICAgICAgcHJpbnRMaXN0SXRlbShMaXN0SXRlbSk7XG4gICAgfVxuICB9KTtcbiAgLy8gT2JqZWN0LmVudHJpZXMod2luZG93LmxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAvLyAgIGlmIChKU09OLnBhcnNlKHZhbCkuZ2V0UHJvamVjdCA9PT0gdmFsdWUpIHtcbiAgLy8gICAgIHByaW50TGlzdEl0ZW0oSlNPTi5wYXJzZSh2YWwpKTtcbiAgLy8gICB9XG4gIC8vIH0pO1xufVxuIl0sIm5hbWVzIjpbImFzc2lnbiIsInRhcmdldCIsIm9iamVjdCIsIlR5cGVFcnJvciIsInByb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY2xvbmVPYmplY3QiLCJkZWZhdWx0TG9jYWxlIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInNldERlZmF1bHRPcHRpb25zIiwibmV3T3B0aW9ucyIsImdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMiLCJkYXRlIiwidXRjRGF0ZSIsIkRhdGUiLCJVVEMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJzZXRVVENGdWxsWWVhciIsImdldFRpbWUiLCJyZXF1aXJlZEFyZ3MiLCJyZXF1aXJlZCIsImFyZ3MiLCJsZW5ndGgiLCJyb3VuZGluZ01hcCIsImNlaWwiLCJNYXRoIiwicm91bmQiLCJmbG9vciIsInRydW5jIiwidmFsdWUiLCJkZWZhdWx0Um91bmRpbmdNZXRob2QiLCJnZXRSb3VuZGluZ01ldGhvZCIsIm1ldGhvZCIsInRvSW50ZWdlciIsImRpcnR5TnVtYmVyIiwiTmFOIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJ0b0RhdGUiLCJjb21wYXJlQXNjIiwiZGlydHlEYXRlTGVmdCIsImRpcnR5RGF0ZVJpZ2h0IiwiYXJndW1lbnRzIiwiZGF0ZUxlZnQiLCJkYXRlUmlnaHQiLCJkaWZmIiwiZGF5c0luV2VlayIsImRheXNJblllYXIiLCJtYXhUaW1lIiwicG93IiwibWlsbGlzZWNvbmRzSW5NaW51dGUiLCJtaWxsaXNlY29uZHNJbkhvdXIiLCJtaWxsaXNlY29uZHNJblNlY29uZCIsIm1pblRpbWUiLCJtaW51dGVzSW5Ib3VyIiwibW9udGhzSW5RdWFydGVyIiwibW9udGhzSW5ZZWFyIiwicXVhcnRlcnNJblllYXIiLCJzZWNvbmRzSW5Ib3VyIiwic2Vjb25kc0luTWludXRlIiwic2Vjb25kc0luRGF5Iiwic2Vjb25kc0luV2VlayIsInNlY29uZHNJblllYXIiLCJzZWNvbmRzSW5Nb250aCIsInNlY29uZHNJblF1YXJ0ZXIiLCJkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyIsInllYXJEaWZmIiwibW9udGhEaWZmIiwiZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIiwiaXNMYXN0RGF5T2ZNb250aCIsImRpZmZlcmVuY2VJbk1vbnRocyIsInNpZ24iLCJkaWZmZXJlbmNlIiwiYWJzIiwicmVzdWx0Iiwic2V0RGF0ZSIsInNldE1vbnRoIiwiaXNMYXN0TW9udGhOb3RGdWxsIiwiZGlmZmVyZW5jZUluU2Vjb25kcyIsIm9wdGlvbnMiLCJyb3VuZGluZ01ldGhvZCIsImVuZE9mRGF5IiwiZGlydHlEYXRlIiwic2V0SG91cnMiLCJlbmRPZk1vbnRoIiwibW9udGgiLCJzZXRGdWxsWWVhciIsIk1JTlVURVNfSU5fREFZIiwiTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMiLCJNSU5VVEVTX0lOX01PTlRIIiwiTUlOVVRFU19JTl9UV09fTU9OVEhTIiwiZm9ybWF0RGlzdGFuY2UiLCJkaXJ0eUJhc2VEYXRlIiwiX3JlZiIsIl9vcHRpb25zJGxvY2FsZSIsImxvY2FsZSIsIlJhbmdlRXJyb3IiLCJjb21wYXJpc29uIiwibG9jYWxpemVPcHRpb25zIiwiYWRkU3VmZml4IiwiQm9vbGVhbiIsInNlY29uZHMiLCJvZmZzZXRJblNlY29uZHMiLCJtaW51dGVzIiwibW9udGhzIiwiaW5jbHVkZVNlY29uZHMiLCJob3VycyIsImRheXMiLCJuZWFyZXN0TW9udGgiLCJtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIiwieWVhcnMiLCJidWlsZEZvcm1hdExvbmdGbiIsInVuZGVmaW5lZCIsIndpZHRoIiwiU3RyaW5nIiwiZGVmYXVsdFdpZHRoIiwiZm9ybWF0IiwiZm9ybWF0cyIsImJ1aWxkTG9jYWxpemVGbiIsImRpcnR5SW5kZXgiLCJjb250ZXh0IiwidmFsdWVzQXJyYXkiLCJmb3JtYXR0aW5nVmFsdWVzIiwiZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCIsIl9kZWZhdWx0V2lkdGgiLCJfd2lkdGgiLCJ2YWx1ZXMiLCJpbmRleCIsImFyZ3VtZW50Q2FsbGJhY2siLCJidWlsZE1hdGNoRm4iLCJzdHJpbmciLCJtYXRjaFBhdHRlcm4iLCJtYXRjaFBhdHRlcm5zIiwiZGVmYXVsdE1hdGNoV2lkdGgiLCJtYXRjaFJlc3VsdCIsIm1hdGNoIiwibWF0Y2hlZFN0cmluZyIsInBhcnNlUGF0dGVybnMiLCJkZWZhdWx0UGFyc2VXaWR0aCIsImtleSIsIkFycmF5IiwiaXNBcnJheSIsImZpbmRJbmRleCIsInBhdHRlcm4iLCJ0ZXN0IiwiZmluZEtleSIsInZhbHVlQ2FsbGJhY2siLCJyZXN0Iiwic2xpY2UiLCJwcmVkaWNhdGUiLCJhcnJheSIsImJ1aWxkTWF0Y2hQYXR0ZXJuRm4iLCJwYXJzZVJlc3VsdCIsInBhcnNlUGF0dGVybiIsImZvcm1hdERpc3RhbmNlTG9jYWxlIiwibGVzc1RoYW5YU2Vjb25kcyIsIm9uZSIsIm90aGVyIiwieFNlY29uZHMiLCJoYWxmQU1pbnV0ZSIsImxlc3NUaGFuWE1pbnV0ZXMiLCJ4TWludXRlcyIsImFib3V0WEhvdXJzIiwieEhvdXJzIiwieERheXMiLCJhYm91dFhXZWVrcyIsInhXZWVrcyIsImFib3V0WE1vbnRocyIsInhNb250aHMiLCJhYm91dFhZZWFycyIsInhZZWFycyIsIm92ZXJYWWVhcnMiLCJhbG1vc3RYWWVhcnMiLCJ0b2tlbiIsImNvdW50IiwidG9rZW5WYWx1ZSIsInJlcGxhY2UiLCJ0b1N0cmluZyIsImRhdGVGb3JtYXRzIiwiZnVsbCIsImxvbmciLCJtZWRpdW0iLCJzaG9ydCIsInRpbWVGb3JtYXRzIiwiZGF0ZVRpbWVGb3JtYXRzIiwiZm9ybWF0TG9uZyIsInRpbWUiLCJkYXRlVGltZSIsImZvcm1hdFJlbGF0aXZlTG9jYWxlIiwibGFzdFdlZWsiLCJ5ZXN0ZXJkYXkiLCJ0b2RheSIsInRvbW9ycm93IiwibmV4dFdlZWsiLCJmb3JtYXRSZWxhdGl2ZSIsIl9kYXRlIiwiX2Jhc2VEYXRlIiwiX29wdGlvbnMiLCJlcmFWYWx1ZXMiLCJuYXJyb3ciLCJhYmJyZXZpYXRlZCIsIndpZGUiLCJxdWFydGVyVmFsdWVzIiwibW9udGhWYWx1ZXMiLCJkYXlWYWx1ZXMiLCJkYXlQZXJpb2RWYWx1ZXMiLCJhbSIsInBtIiwibWlkbmlnaHQiLCJub29uIiwibW9ybmluZyIsImFmdGVybm9vbiIsImV2ZW5pbmciLCJuaWdodCIsImZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMiLCJvcmRpbmFsTnVtYmVyIiwicmVtMTAwIiwibG9jYWxpemUiLCJlcmEiLCJxdWFydGVyIiwiZGF5IiwiZGF5UGVyaW9kIiwibWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiIsInBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4iLCJtYXRjaEVyYVBhdHRlcm5zIiwicGFyc2VFcmFQYXR0ZXJucyIsImFueSIsIm1hdGNoUXVhcnRlclBhdHRlcm5zIiwicGFyc2VRdWFydGVyUGF0dGVybnMiLCJtYXRjaE1vbnRoUGF0dGVybnMiLCJwYXJzZU1vbnRoUGF0dGVybnMiLCJtYXRjaERheVBhdHRlcm5zIiwicGFyc2VEYXlQYXR0ZXJucyIsIm1hdGNoRGF5UGVyaW9kUGF0dGVybnMiLCJwYXJzZURheVBlcmlvZFBhdHRlcm5zIiwicGFyc2VJbnQiLCJjb2RlIiwid2Vla1N0YXJ0c09uIiwiZmlyc3RXZWVrQ29udGFpbnNEYXRlIiwicGFyc2VJU08iLCJhcmd1bWVudCIsIl9vcHRpb25zJGFkZGl0aW9uYWxEaSIsImFkZGl0aW9uYWxEaWdpdHMiLCJkYXRlU3RyaW5ncyIsInNwbGl0RGF0ZVN0cmluZyIsInBhcnNlWWVhclJlc3VsdCIsInBhcnNlWWVhciIsInBhcnNlRGF0ZSIsInJlc3REYXRlU3RyaW5nIiwieWVhciIsInRpbWVzdGFtcCIsIm9mZnNldCIsInBhcnNlVGltZSIsInRpbWV6b25lIiwicGFyc2VUaW1lem9uZSIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsImdldFVUQ01pbGxpc2Vjb25kcyIsInBhdHRlcm5zIiwiZGF0ZVRpbWVEZWxpbWl0ZXIiLCJ0aW1lWm9uZURlbGltaXRlciIsImRhdGVSZWdleCIsInRpbWVSZWdleCIsInRpbWV6b25lUmVnZXgiLCJkYXRlU3RyaW5nIiwic3BsaXQiLCJ0aW1lU3RyaW5nIiwic3Vic3RyIiwiZXhlYyIsInJlZ2V4IiwiUmVnRXhwIiwiY2FwdHVyZXMiLCJjZW50dXJ5IiwiaXNXZWVrRGF0ZSIsImRheU9mWWVhciIsInBhcnNlRGF0ZVVuaXQiLCJ3ZWVrIiwiZGF5T2ZXZWVrIiwidmFsaWRhdGVXZWVrRGF0ZSIsImRheU9mSVNPV2Vla1llYXIiLCJ2YWxpZGF0ZURhdGUiLCJ2YWxpZGF0ZURheU9mWWVhckRhdGUiLCJtYXgiLCJwYXJzZVRpbWVVbml0IiwidmFsaWRhdGVUaW1lIiwicGFyc2VGbG9hdCIsInRpbWV6b25lU3RyaW5nIiwidmFsaWRhdGVUaW1lem9uZSIsImlzb1dlZWtZZWFyIiwiZm91cnRoT2ZKYW51YXJ5RGF5IiwiZ2V0VVRDRGF5Iiwic2V0VVRDRGF0ZSIsImRheXNJbk1vbnRocyIsImlzTGVhcFllYXJJbmRleCIsIl95ZWFyIiwiX2hvdXJzIiwiX3R5cGVvZiIsImFyZ1N0ciIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJzdGFjayIsImRlbGV0ZUljb24iLCJwcmludExpc3RJdGVtIiwiTGlzdEl0ZW0iLCJuZXdFbnRyeSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlkIiwiZ2V0VGFza0lEIiwiY2hlY2tib3giLCJ0eXBlIiwiY2hlY2tlZCIsImdldENvbXBsZXRlZCIsImFwcGVuZENoaWxkIiwibmV3TGFiZWwiLCJpbm5lckhUTUwiLCJnZXRUaXRsZSIsImdldFByaW9yaXR5IiwiZ2V0RHVlRGF0ZSIsImR1ZURhdGVET00iLCJkdWVEYXRlIiwiaW5uZXJUZXh0IiwiY29uY2F0Iiwic3R5bGUiLCJjb2xvciIsImdldERlc2NyaXB0aW9uIiwidHJpbSIsImRlc2NyaXB0aW9uVGV4dCIsImRlbGV0ZUJ0biIsInNyYyIsInNldFByb3BlcnR5IiwidGRMaXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb21wbGV0ZWRMaXN0Iiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByaW50UHJvamVjdCIsImZ1bGxMaXN0IiwiZm9yRWFjaCIsImdldFByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9