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
var faLock = require('@fortawesome/free-solid-svg-icons/faLock');
var faUser = require('@fortawesome/free-solid-svg-icons/faUser');
var faEye = require('@fortawesome/free-solid-svg-icons/faEye');
var faEyeSlash = require('@fortawesome/free-solid-svg-icons/faEyeSlash');
var faEllipsisVertical = require('@fortawesome/free-solid-svg-icons/faEllipsisVertical');
var faSearch = require('@fortawesome/free-solid-svg-icons/faSearch');
var faGlassWater = require('@fortawesome/free-solid-svg-icons/faGlassWater');
var faClock = require('@fortawesome/free-solid-svg-icons/faClock');
var faPlay = require('@fortawesome/free-solid-svg-icons/faPlay');
var faTimes = require('@fortawesome/free-solid-svg-icons/faTimes');
var faRefresh = require('@fortawesome/free-solid-svg-icons/faRefresh');
var faEnvelope = require('@fortawesome/free-solid-svg-icons/faEnvelope');
var faCogs = require('@fortawesome/free-solid-svg-icons/faCogs');
var faHome = require('@fortawesome/free-solid-svg-icons/faHome');
var faAdd = require('@fortawesome/free-solid-svg-icons/faAdd');

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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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
        loader: {
            marginLeft: 10
        },
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
    var children = _a.children, disabled = _a.disabled, onPress = _a.onPress, iconPlacement = _a.iconPlacement, icon = _a.icon, rounded = _a.rounded, variant = _a.variant, color = _a.color, loading = _a.loading, loadingText = _a.loadingText;
    var styling = rnThemizer.useStyling(styling$1, {
        disabled: disabled,
        variant: variant,
        color: color,
        rounded: rounded
    });
    if (loading) {
        return (React__default.default.createElement(reactNative.View, { style: styling.root },
            loadingText && React__default.default.createElement(reactNative.Text, { style: styling.text }, loadingText),
            React__default.default.createElement(reactNative.ActivityIndicator, { style: styling.loader })));
    }
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

var styling = function (_a) {
    var fromPalette = _a.fromPalette, fromVars = _a.fromVars, applyIf = _a.applyIf, params = _a.params, palette = _a.palette;
    return ({
        actionButton: {
            marginLeft: 5,
            height: fromVars('textField.inputWrapper.height', 40),
            width: fromVars('textField.inputWrapper.height', 40),
            justifyContent: 'center',
            alignItems: 'center'
        },
        actionIcon: __assign({ color: palette.primaryColor }, applyIf(params === null || params === void 0 ? void 0 : params.secondary, {
            color: palette.secondaryColor
        })),
        icon: __assign({ color: '#FFF' }, applyIf(params === null || params === void 0 ? void 0 : params.secondary, {
            color: palette.secondaryColor
        })),
        iconWrapper: {
            backgroundColor: palette.primaryColor,
            height: fromVars('textField.inputWrapper.height', 40),
            width: fromVars('textField.inputWrapper.height', 40),
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center'
        },
        input: {
            height: '100%',
            fontSize: fromVars('textField.input.fontSize', 18),
            paddingHorizontal: fromVars('textField.input.paddingHorizontal', 5),
            flex: 1
        },
        maskedValue: {
            flex: 1,
            paddingHorizontal: fromVars('textField.input.paddingHorizontal', 5),
            fontSize: fromVars('textField.input.fontSize', 18)
        },
        inputRow: {
            flexDirection: 'row'
        },
        inputWrapper: __assign({ alignItems: 'center', borderWidth: fromVars('textField.inputWrapper.borderWidth', 1), borderRadius: fromVars('textField.inputWrapper.borderRadius', 5), borderColor: fromPalette('textField.borderColor', '#90a4ae'), height: fromVars('textField.inputWrapper.height', 40), backgroundColor: fromPalette('textField.inputWrapper.bgColor', '#FFF'), flex: 1, flexDirection: 'row' }, applyIf(params === null || params === void 0 ? void 0 : params.focussed, {
            borderWidth: fromVars('textField.inputWrapper.borderWidthFocussed', 2),
            borderColor: fromPalette((params === null || params === void 0 ? void 0 : params.secondary) ? 'secondaryColor' : 'primaryColor', '#90a4ae'),
            shadowColor: fromPalette((params === null || params === void 0 ? void 0 : params.secondary) ? 'secondaryColor' : 'primaryColor', '#90a4ae'),
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
    var icon = _a.icon, label = _a.label, onBlur = _a.onBlur, onChange = _a.onChange, name = _a.name, onFocus = _a.onFocus, placeholder = _a.placeholder, secondary = _a.secondary, value = _a.value, actionIcon = _a.actionIcon, isPassword = _a.isPassword, onActionTriggered = _a.onActionTriggered, onlyMask = _a.onlyMask, onPress = _a.onPress, otherProps = __rest(_a, ["icon", "label", "onBlur", "onChange", "name", "onFocus", "placeholder", "secondary", "value", "actionIcon", "isPassword", "onActionTriggered", "onlyMask", "onPress"]);
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
    var WrapperComponent = onlyMask && onPress ? reactNative.TouchableOpacity : reactNative.View;
    return (React__default.default.createElement(reactNative.View, { style: styling$1.root },
        React__default.default.createElement(reactNative.View, { style: styling$1.labelWrapper }, label && React__default.default.createElement(reactNative.Text, { style: styling$1.label }, label)),
        React__default.default.createElement(reactNative.View, { style: styling$1.inputRow },
            React__default.default.createElement(WrapperComponent, { style: styling$1.inputWrapper, onPress: onPress },
                icon && (React__default.default.createElement(reactNative.View, { style: styling$1.iconWrapper },
                    React__default.default.createElement(Icon, { name: icon, style: styling$1.icon }))),
                !onlyMask ? (React__default.default.createElement(reactNative.TextInput, __assign({ secureTextEntry: isPassword, style: styling$1.input, value: value, placeholder: placeholder, placeholderTextColor: (_b = palette.textField) === null || _b === void 0 ? void 0 : _b.placeholderColor, onFocus: handleFocussed, onBlur: handleLostFocus, onChangeText: handleChange }, otherProps))) : (React__default.default.createElement(reactNative.Text, { style: styling$1.maskedValue }, value))),
            actionIcon && (React__default.default.createElement(reactNative.TouchableOpacity, { style: styling$1.actionButton, onPress: onActionTriggered },
                React__default.default.createElement(Icon, { name: actionIcon, style: styling$1.actionIcon }))))));
};

var PasswordField = function (_a) {
    var label = _a.label, otherProps = __rest(_a, ["label"]);
    var _b = React__default.default.useState(false), opened = _b[0], setOpened = _b[1];
    var handleAction = function () { return setOpened(!opened); };
    return (React__default.default.createElement(TextField, __assign({ label: label, icon: "lock", actionIcon: opened ? 'eye-slash' : 'eye', onActionTriggered: handleAction, isPassword: !opened }, otherProps)));
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

var styles$5 = function (_a) {
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
    var styling = rnThemizer.useStyling(styles$5, {
        size: size
    });
    return (React__default.default.createElement(reactNative.View, { style: styling.root },
        React__default.default.createElement(reactNative.Text, { style: [styling.title, style] }, children)));
};
Title.defaultProps = {
    size: '1'
};

var Image = function (_a) {
    var src = _a.src, style = _a.style;
    return React__default.default.createElement(reactNative.Image, { source: src, style: style });
};

var styles$4 = function (_a) {
    var _b;
    var params = _a.params, size = _a.size, palette = _a.palette, applyFor = _a.applyFor, applyIf = _a.applyIf;
    return ({
        icon: __assign({}, applyFor(params === null || params === void 0 ? void 0 : params.variant, {
            primary: {
                color: '#FFF'
            },
            secondary: {
                color: '#FFF'
            }
        })),
        root: __assign(__assign(__assign({ justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: (_b = palette.buttons) === null || _b === void 0 ? void 0 : _b.default }, applyFor(params === null || params === void 0 ? void 0 : params.size, {
            sm: __assign({}, size(35)),
            md: __assign({}, size(50)),
            lg: __assign({}, size(60))
        })), applyFor(params === null || params === void 0 ? void 0 : params.variant, {
            primary: {
                backgroundColor: palette.primaryColor
            },
            secondary: {
                backgroundColor: palette.secondaryColor
            }
        })), applyIf(params === null || params === void 0 ? void 0 : params.disabled, {
            backgroundColor: 'rgba(0,0,0,0.8)',
            opacity: 0.2
        }))
    });
};

var IconButton = function (_a) {
    var icon = _a.icon, variant = _a.variant, size = _a.size, onPress = _a.onPress, disabled = _a.disabled;
    var styling = rnThemizer.useStyling(styles$4, {
        variant: variant,
        disabled: disabled,
        size: size
    });
    var iconSize = React__default.default.useMemo(function () {
        return {
            sm: 30,
            md: 35,
            lg: 40
        }[size || 'md'];
    }, [size]);
    return (React__default.default.createElement(reactNative.TouchableOpacity, { style: styling.root, onPress: onPress, disabled: disabled },
        React__default.default.createElement(Icon, { name: icon, style: styling.icon, size: iconSize })));
};
IconButton.defaultProps = {
    variant: 'default',
    size: 'md'
};

var styles$3 = function (_a) { return ({
    childContent: {
        flex: 1
    },
    closeButtonWrapper: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    container: {
        borderRadius: 30,
        height: '80%',
        width: '90%',
        backgroundColor: '#FFF'
    },
    header: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    title: {
        fontSize: 28,
        textAlign: 'center'
    }
}); };

var Dialog = function (_a) {
    var open = _a.open, onClose = _a.onClose, children = _a.children, title = _a.title;
    var styling = rnThemizer.useStyling(styles$3);
    return (React__default.default.createElement(reactNative.Modal, { animationType: "fade", transparent: true, visible: open, onRequestClose: onClose },
        React__default.default.createElement(reactNative.View, { style: styling.root },
            React__default.default.createElement(reactNative.View, { style: styling.container },
                React__default.default.createElement(reactNative.View, { style: styling.header },
                    React__default.default.createElement(Text, { style: styling.title }, title),
                    React__default.default.createElement(reactNative.View, { style: styling.closeButtonWrapper },
                        React__default.default.createElement(IconButton, { onPress: onClose, icon: "times", size: "sm", variant: "primary" }))),
                React__default.default.createElement(reactNative.View, { style: styling.childContent }, children)))));
};

var styles$2 = function (_a) { return ({
    actionsWrapper: {
        alignItems: 'center',
        paddingVertical: 10
    },
    iconWrapper: {
        position: 'absolute',
        right: 30,
        bottom: 25,
        backgroundColor: '#FFF'
    },
    root: {}
}); };

var styles$1 = function (_a) { return ({
    root: {
        paddingHorizontal: 20
    }
}); };

var styles = function (_a) {
    var size = _a.size, palette = _a.palette, applyIf = _a.applyIf, params = _a.params;
    return ({
        label: { fontSize: 18, flex: 1, marginLeft: 10 },
        radiusContent: __assign({ backgroundColor: palette.primaryColor, borderRadius: 100 }, size(18)),
        radiusWrapper: __assign(__assign({ alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderRadius: 100, borderColor: 'rgba(0,0,0,0.2)' }, applyIf(params === null || params === void 0 ? void 0 : params.active, {
            borderColor: palette.primaryColor
        })), size(25)),
        root: {
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 50,
            borderWidth: 1,
            marginBottom: 5,
            borderColor: 'rgba(0,0,0,0.2)'
        }
    });
};

var ListItemRenderer = function (_a) {
    var label = _a.label, active = _a.active, onSelect = _a.onSelect;
    var styling = rnThemizer.useStyling(styles, { active: active });
    return (React__default.default.createElement(reactNative.TouchableOpacity, { style: styling.root, onPress: onSelect },
        React__default.default.createElement(reactNative.Text, { style: styling.label }, label),
        React__default.default.createElement(reactNative.TouchableOpacity, { style: styling.radiusWrapper, onPress: onSelect }, active && React__default.default.createElement(reactNative.View, { style: styling.radiusContent }))));
};

var ListRenderer = function (_a) {
    var options = _a.options, onSelctItem = _a.onSelctItem, selectedValue = _a.selectedValue;
    var styling = rnThemizer.useStyling(styles$1);
    return (React__default.default.createElement(reactNative.ScrollView, null,
        React__default.default.createElement(reactNative.View, { style: styling.root }, options === null || options === void 0 ? void 0 : options.map(function (item, key) { return (React__default.default.createElement(ListItemRenderer, { active: item.value === selectedValue, label: item.label, key: "item-".concat(key), onSelect: function () {
                onSelctItem(item.value);
            } })); }))));
};

var DropDown = function (_a) {
    var options = _a.options; _a.onChange; var label = _a.label, placeholder = _a.placeholder, props = __rest(_a, ["options", "onChange", "label", "placeholder"]);
    var styling = rnThemizer.useStyling(styles$2);
    var _b = React__default.default.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React__default.default.useState(null), selected = _c[0], setSelected = _c[1];
    var _d = React__default.default.useState(), displayLabel = _d[0], setDisplayLabel = _d[1];
    var toggleOpen = function () { return setOpen(!open); };
    var onSelect = function () {
        // handle on change
        var itemLabel = options.find(function (item) { return item.value === selected; });
        setDisplayLabel(itemLabel === null || itemLabel === void 0 ? void 0 : itemLabel.label);
        setOpen(false);
    };
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(reactNative.View, { style: styling.root },
            React__default.default.createElement(TextField, __assign({ label: label, placeholder: placeholder }, props, { onlyMask: true, onPress: toggleOpen, value: displayLabel })),
            React__default.default.createElement(reactNative.TouchableOpacity, { style: styling.iconWrapper },
                React__default.default.createElement(Icon, { name: "chevron-down" }))),
        React__default.default.createElement(Dialog, { open: open, onClose: toggleOpen, title: placeholder || label },
            React__default.default.createElement(ListRenderer, { onSelctItem: function (item) { return setSelected(item); }, selectedValue: selected, options: options }),
            React__default.default.createElement(reactNative.View, { style: styling.actionsWrapper },
                React__default.default.createElement(IconButton, { onPress: onSelect, icon: "check", variant: "primary", disabled: !selected })))));
};

var registerIcons = function () {
    fontawesomeSvgCore.library.add(faTag.faTag, faBrain.faBrain, faAdd.faAdd, faTags.faTags, faClock.faClock, faChevronRight.faChevronRight, faChevronLeft.faChevronLeft, faChevronUp.faChevronUp, faChevronDown.faChevronDown, faBed.faBed, faBedPulse.faBedPulse, faHeartPulse.faHeartPulse, faBattery.faBattery, faBell.faBell, faBook.faBook, faGlassWater.faGlassWater, faBriefcase.faBriefcase, faBoxArchive.faBoxArchive, faBox.faBox, faCalendar.faCalendar, faCaretUp.faCaretUp, faCaretDown.faCaretDown, faCheck.faCheck, faChartPie.faChartPie, faCircle.faCircle, faCircleCheck.faCircleCheck, faLock.faLock, faUser.faUser, faEye.faEye, faEyeSlash.faEyeSlash, faEllipsisVertical.faEllipsisVertical, faSearch.faSearch, faPlay.faPlay, faTimes.faTimes, faRefresh.faRefresh, faEnvelope.faEnvelope, faCogs.faCogs, faHome.faHome);
};

exports.Button = Button;
exports.Dialog = Dialog;
exports.DropDown = DropDown;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Image = Image;
exports.PasswordField = PasswordField;
exports.Text = Text;
exports.TextField = TextField;
exports.Title = Title;
exports.registerIcons = registerIcons;
//# sourceMappingURL=index.js.map
