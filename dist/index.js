'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');
var rnThemizer = require('@alejandro.dev/rn-themizer');
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

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var styling = function (_a) {
    var _b, _c, _d, _e, _f;
    var palette = _a.palette, params = _a.params, applyFor = _a.applyFor, valueFor = _a.valueFor;
    /**
     * Allows us to reuse the styles for the button
     */
    var buttonColor = valueFor(params === null || params === void 0 ? void 0 : params.color, {
        primary: (_b = palette.buttons) === null || _b === void 0 ? void 0 : _b.primaryColor,
        secondary: (_c = palette.buttons) === null || _c === void 0 ? void 0 : _c.secondaryColor,
        success: palette.success,
        warning: palette.warning,
        danger: palette.danger,
        info: palette.info,
        _default: (_d = palette.buttons) === null || _d === void 0 ? void 0 : _d.default
    });
    return {
        icon: __assign({ marginHorizontal: 5 }, applyFor(params === null || params === void 0 ? void 0 : params.variant, {
            default: {
                color: buttonColor
            },
            solid: {
                color: (_e = palette.buttons) === null || _e === void 0 ? void 0 : _e.textColor
            },
            outline: {
                color: buttonColor
            }
        })),
        root: __assign(__assign({ alignItems: 'center', borderRadius: (params === null || params === void 0 ? void 0 : params.rounded) ? 20 : 5, flexDirection: 'row', justifyContent: 'center', marginHorizontal: 4, padding: 10, paddingHorizontal: (params === null || params === void 0 ? void 0 : params.rounded) ? 20 : 10 }, applyFor(params === null || params === void 0 ? void 0 : params.variant, {
            default: {},
            solid: {
                backgroundColor: buttonColor
            },
            outline: {
                borderWidth: 2,
                borderColor: buttonColor
            }
        })), { opacity: (params === null || params === void 0 ? void 0 : params.disabled) ? 0.4 : 1 }),
        text: __assign({ fontWeight: 'bold' }, applyFor(params === null || params === void 0 ? void 0 : params.variant, {
            default: {
                color: buttonColor
            },
            solid: {
                color: (_f = palette.buttons) === null || _f === void 0 ? void 0 : _f.textColor
            },
            outline: {
                color: buttonColor
            }
        }))
    };
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

/**
 * Renders a button component and allows the user to interacts with it.
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @since 0.0.1
 * @param param0
 * @returns
 */
var Button = function (_a) {
    var children = _a.children, disabled = _a.disabled, onPress = _a.onPress, iconPlacement = _a.iconPlacement, icon = _a.icon, rounded = _a.rounded, variant = _a.variant, color = _a.color;
    var styling$1 = rnThemizer.useStyling(styling, {
        disabled: disabled,
        variant: variant,
        color: color,
        rounded: rounded
    });
    if (disabled) {
        return (React__default.default.createElement(reactNative.View, { style: styling$1.root },
            icon && iconPlacement === 'left' && React__default.default.createElement(Icon, { name: icon, style: styling$1.icon }),
            React__default.default.createElement(reactNative.Text, { style: styling$1.text }, children),
            icon && iconPlacement === 'right' && React__default.default.createElement(Icon, { name: icon, style: styling$1.icon })));
    }
    return (React__default.default.createElement(reactNative.TouchableOpacity, { onPress: onPress, style: styling$1.root },
        icon && iconPlacement === 'left' && React__default.default.createElement(Icon, { name: icon, style: styling$1.icon }),
        React__default.default.createElement(reactNative.Text, { style: styling$1.text }, children),
        icon && iconPlacement === 'right' && React__default.default.createElement(Icon, { name: icon, style: styling$1.icon })));
};
Button.defaultProps = {
    variant: 'default',
    iconPlacement: 'right'
};

/**
 * Component to render the application texts
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @version 0.0.1
 * @returns
 */
var Text = function (_a) {
    var children = _a.children, style = _a.style;
    return React__default.default.createElement(reactNative.Text, { style: style }, children);
};

var styles = function (_a) {
    var params = _a.params, applyFor = _a.applyFor;
    return ({
        root: {
            marginBottom: 10,
            paddingHorizontal: 10
        },
        title: __assign({}, applyFor(params === null || params === void 0 ? void 0 : params.size, {
            '1': {
                fontSize: 32
            },
            '2': {
                fontSize: 28
            },
            '3': {
                fontSize: 24
            },
            '4': {
                fontSize: 20
            },
            '5': {
                fontSize: 16
            },
            '6': {
                fontSize: 12
            }
        }))
    });
};

var Title = function (_a) {
    var children = _a.children, size = _a.size;
    var styling = rnThemizer.useStyling(styles, {
        size: size
    });
    return (React__default.default.createElement(reactNative.View, { style: styling.root },
        React__default.default.createElement(reactNative.Text, { style: styling.title }, children)));
};
Title.defaultProps = {
    size: '1'
};

var registerIcons = function () {
    fontawesomeSvgCore.library.add(faTag.faTag, faBrain.faBrain, faTags.faTags, faChevronRight.faChevronRight, faChevronLeft.faChevronLeft, faChevronUp.faChevronUp, faChevronDown.faChevronDown, faBed.faBed, faBedPulse.faBedPulse, faHeartPulse.faHeartPulse, faBattery.faBattery, faBell.faBell, faBook.faBook, faBriefcase.faBriefcase, faBoxArchive.faBoxArchive, faBox.faBox, faCalendar.faCalendar, faCaretUp.faCaretUp, faCaretDown.faCaretDown, faCheck.faCheck, faChartPie.faChartPie, faCircle.faCircle, faCircleCheck.faCircleCheck);
};

exports.Button = Button;
exports.Icon = Icon;
exports.Text = Text;
exports.Title = Title;
exports.registerIcons = registerIcons;
//# sourceMappingURL=index.js.map
