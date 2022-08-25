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

var styling$1 = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var palette = _a.palette, params = _a.params, applyFor = _a.applyFor, valueFor = _a.valueFor, variables = _a.variables;
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
        root: __assign(__assign({ alignItems: 'center', borderRadius: (params === null || params === void 0 ? void 0 : params.rounded) ? 20 : 5, flexDirection: 'row', justifyContent: 'center', marginHorizontal: 4, padding: 10, paddingHorizontal: (params === null || params === void 0 ? void 0 : params.rounded) ? 20 : 10, marginBottom: (_f = variables === null || variables === void 0 ? void 0 : variables.buttons) === null || _f === void 0 ? void 0 : _f.marginBottom }, applyFor(params === null || params === void 0 ? void 0 : params.variant, {
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
                color: (_g = palette.buttons) === null || _g === void 0 ? void 0 : _g.textColor
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
    var styling = rnThemizer.useStyling(styling$1, {
        disabled: disabled,
        variant: variant,
        color: color,
        rounded: rounded
    });
    if (disabled) {
        return (React__default.default.createElement(reactNative.View, { style: styling.root },
            icon && iconPlacement === 'left' && React__default.default.createElement(Icon, { name: icon, style: styling.icon }),
            React__default.default.createElement(reactNative.Text, { style: styling.text }, children),
            icon && iconPlacement === 'right' && React__default.default.createElement(Icon, { name: icon, style: styling.icon })));
    }
    return (React__default.default.createElement(reactNative.TouchableOpacity, { onPress: onPress, style: styling.root },
        icon && iconPlacement === 'left' && React__default.default.createElement(Icon, { name: icon, style: styling.icon }),
        React__default.default.createElement(reactNative.Text, { style: styling.text }, children),
        icon && iconPlacement === 'right' && React__default.default.createElement(Icon, { name: icon, style: styling.icon })));
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
    var children = _a.children, size = _a.size, style = _a.style;
    var styling = rnThemizer.useStyling(styles, {
        size: size
    });
    return (React__default.default.createElement(reactNative.View, { style: styling.root },
        React__default.default.createElement(reactNative.Text, { style: [styling.title, style] }, children)));
};
Title.defaultProps = {
    size: '1'
};

var styling = function (_a) {
    var fromPalette = _a.fromPalette, fromVars = _a.fromVars, applyIf = _a.applyIf, params = _a.params, palette = _a.palette;
    return ({
        input: {
            height: '100%',
            fontSize: fromVars('textField.input.fontSize', 18),
            paddingHorizontal: fromVars('textField.input.paddingHorizontal', 10)
        },
        inputWrapper: __assign({ borderWidth: fromVars('textField.inputWrapper.borderWidth', 1), borderRadius: fromVars('textField.inputWrapper.borderRadius', 5), borderColor: fromPalette('textField.borderColor', '#90a4ae'), height: fromVars('textField.inputWrapper.height', 40), backgroundColor: fromPalette('textField.inputWrapper.bgColor', '#FFF') }, applyIf(params === null || params === void 0 ? void 0 : params.focussed, {
            borderWidth: fromVars('textField.inputWrapper.borderWidthFocussed', 2),
            borderColor: fromPalette('primaryColor', '#90a4ae'),
            shadowColor: fromPalette('primaryColor', '#90a4ae'),
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        })),
        labelWrapper: {
            marginBottom: 5,
            paddingHorizontal: fromVars('textField.label.paddingHorizontal', 10)
        },
        label: __assign({ fontSize: fromVars('textField.label.fontSize', 18), fontWeight: fromVars('textField.label.fontWeight', '600'), color: palette === null || palette === void 0 ? void 0 : palette.primaryColor }, applyIf(params === null || params === void 0 ? void 0 : params.secondary, {
            color: palette === null || palette === void 0 ? void 0 : palette.secondaryColor
        })),
        root: {
            paddingHorizontal: fromVars('textField.root.paddingHorizontal', 18),
            marginBottom: fromVars('textField.root.marginBottom', 18)
        }
    });
};

var TextField = function (_a) {
    var _b;
    var label = _a.label, onBlur = _a.onBlur, onChange = _a.onChange, name = _a.name, onFocus = _a.onFocus, placeholder = _a.placeholder, secondary = _a.secondary, value = _a.value;
    var _c = React__default.default.useState(false), focussed = _c[0], setFocussed = _c[1];
    var palette = rnThemizer.usePalette();
    var styling$1 = rnThemizer.useStyling(styling, { focussed: focussed, secondary: secondary });
    var handleFocussed = React__default.default.useCallback(function () {
        setFocussed(true);
        if (onFocus)
            onFocus();
    }, []);
    var handleLostFocus = React__default.default.useCallback(function () {
        setFocussed(false);
        if (onBlur)
            onBlur();
    }, []);
    var handleChange = function (text) {
        if (onChange) {
            onChange({ name: name, value: text });
        }
    };
    return (React__default.default.createElement(reactNative.View, { style: styling$1.root },
        React__default.default.createElement(reactNative.View, { style: styling$1.labelWrapper }, label && React__default.default.createElement(reactNative.Text, { style: styling$1.label }, label)),
        React__default.default.createElement(reactNative.View, { style: styling$1.inputWrapper },
            React__default.default.createElement(reactNative.TextInput, { style: styling$1.input, value: value, placeholder: placeholder, placeholderTextColor: (_b = palette.textField) === null || _b === void 0 ? void 0 : _b.placeholderColor, onFocus: handleFocussed, onBlur: handleLostFocus, onChangeText: handleChange }))));
};

var registerIcons = function () {
    fontawesomeSvgCore.library.add(faTag.faTag, faBrain.faBrain, faTags.faTags, faChevronRight.faChevronRight, faChevronLeft.faChevronLeft, faChevronUp.faChevronUp, faChevronDown.faChevronDown, faBed.faBed, faBedPulse.faBedPulse, faHeartPulse.faHeartPulse, faBattery.faBattery, faBell.faBell, faBook.faBook, faBriefcase.faBriefcase, faBoxArchive.faBoxArchive, faBox.faBox, faCalendar.faCalendar, faCaretUp.faCaretUp, faCaretDown.faCaretDown, faCheck.faCheck, faChartPie.faChartPie, faCircle.faCircle, faCircleCheck.faCircleCheck);
};

exports.Button = Button;
exports.Icon = Icon;
exports.Text = Text;
exports.TextField = TextField;
exports.Title = Title;
exports.registerIcons = registerIcons;
//# sourceMappingURL=index.js.map
