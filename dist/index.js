'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');
var reactNativeFontawesome = require('@fortawesome/react-native-fontawesome');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var faTag = require('@fortawesome/free-solid-svg-icons/faTag');
var faBrain = require('@fortawesome/free-solid-svg-icons/faBrain');
var faTags = require('@fortawesome/free-solid-svg-icons/faTags');
var faChevronRight = require('@fortawesome/free-solid-svg-icons/faChevronRight');
var faChevronLeft = require('@fortawesome/free-solid-svg-icons/faChevronLeft');
var faChevronUp = require('@fortawesome/free-solid-svg-icons/faChevronUp');
var faChevronDown = require('@fortawesome/free-solid-svg-icons/faChevronDown');
var faBed = require('@fortawesome/free-solid-svg-icons/faBed');
var faBedPulse = require('@fortawesome/free-solid-svg-icons/faBedPulse');
var faHeartPulse = require('@fortawesome/free-solid-svg-icons/faHeartPulse');
var faBattery = require('@fortawesome/free-solid-svg-icons/faBattery');
var faBell = require('@fortawesome/free-solid-svg-icons/faBell');
var faBook = require('@fortawesome/free-solid-svg-icons/faBook');
var faBox = require('@fortawesome/free-solid-svg-icons/faBox');
var faBoxArchive = require('@fortawesome/free-solid-svg-icons/faBoxArchive');
var faBriefcase = require('@fortawesome/free-solid-svg-icons/faBriefcase');
var faCalendar = require('@fortawesome/free-solid-svg-icons/faCalendar');
var faCaretUp = require('@fortawesome/free-solid-svg-icons/faCaretUp');
var faCaretDown = require('@fortawesome/free-solid-svg-icons/faCaretDown');
var faCheck = require('@fortawesome/free-solid-svg-icons/faCheck');
var faChartPie = require('@fortawesome/free-solid-svg-icons/faChartPie');
var faCircle = require('@fortawesome/free-solid-svg-icons/faCircle');
var faCircleCheck = require('@fortawesome/free-solid-svg-icons/faCircleCheck');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function () {
    return (React__default.default.createElement(reactNative.TouchableOpacity, null,
        React__default.default.createElement(reactNative.Text, null, "Button")));
};

/**
 * Renders a fontawesome icon
 * @version 1.0.0
 * @since 0.0.1
 * @returns
 */
var Icon = function (_a) {
    var name = _a.name, style = _a.style, size = _a.size;
    return (React__default.default.createElement(reactNative.View, null,
        React__default.default.createElement(reactNativeFontawesome.FontAwesomeIcon, { icon: name, style: style, size: size })));
};
Icon.defaultProps = {
    size: 24
};

var Text = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.default.createElement(reactNative.Text, { style: style }, children);
};

var registerIcons = function () {
    fontawesomeSvgCore.library.add(faTag.faTag, faBrain.faBrain, faTags.faTags, faChevronRight.faChevronRight, faChevronLeft.faChevronLeft, faChevronUp.faChevronUp, faChevronDown.faChevronDown, faBed.faBed, faBedPulse.faBedPulse, faHeartPulse.faHeartPulse, faBattery.faBattery, faBell.faBell, faBook.faBook, faBriefcase.faBriefcase, faBoxArchive.faBoxArchive, faBox.faBox, faCalendar.faCalendar, faCaretUp.faCaretUp, faCaretDown.faCaretDown, faCheck.faCheck, faChartPie.faChartPie, faCircle.faCircle, faCircleCheck.faCircleCheck);
};

exports.Button = Button;
exports.Icon = Icon;
exports.Text = Text;
exports.registerIcons = registerIcons;
//# sourceMappingURL=index.js.map
