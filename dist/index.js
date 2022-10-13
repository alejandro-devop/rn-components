'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');
var rnThemizer = require('@alejandro.dev/rn-themizer');
var reactNativeFontawesome = require('@fortawesome/react-native-fontawesome');
var ColorPickerBase = require('react-native-wheel-color-picker');
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
var faPalette = require('@fortawesome/free-solid-svg-icons/faPalette');
var faDumbbell = require('@fortawesome/free-solid-svg-icons/faDumbbell');
var faHouse = require('@fortawesome/free-solid-svg-icons/faHouse');
var faImage = require('@fortawesome/free-solid-svg-icons/faImage');
var faPhone = require('@fortawesome/free-solid-svg-icons/faPhone');
var faBars = require('@fortawesome/free-solid-svg-icons/faBars');
var faStar = require('@fortawesome/free-solid-svg-icons/faStar');
var faLocation = require('@fortawesome/free-solid-svg-icons/faLocation');
var faMusic = require('@fortawesome/free-solid-svg-icons/faMusic');
var faHeart = require('@fortawesome/free-solid-svg-icons/faHeart');
var faArrowRight = require('@fortawesome/free-solid-svg-icons/faArrowRight');
var faArrowDown = require('@fortawesome/free-solid-svg-icons/faArrowDown');
var faArrowUp = require('@fortawesome/free-solid-svg-icons/faArrowUp');
var faArrowLeft = require('@fortawesome/free-solid-svg-icons/faArrowLeft');
var faBomb = require('@fortawesome/free-solid-svg-icons/faBomb');
var faPoo = require('@fortawesome/free-solid-svg-icons/faPoo');
var faCameraRetro = require('@fortawesome/free-solid-svg-icons/faCameraRetro');
var faCloud = require('@fortawesome/free-solid-svg-icons/faCloud');
var faComment = require('@fortawesome/free-solid-svg-icons/faComment');
var faCommentAlt = require('@fortawesome/free-solid-svg-icons/faCommentAlt');
var faHippo = require('@fortawesome/free-solid-svg-icons/faHippo');
var faFaceSmile = require('@fortawesome/free-solid-svg-icons/faFaceSmile');
var faCalendarDays = require('@fortawesome/free-solid-svg-icons/faCalendarDays');
var faPaperclip = require('@fortawesome/free-solid-svg-icons/faPaperclip');
var faFile = require('@fortawesome/free-solid-svg-icons/faFile');
var faFileAlt = require('@fortawesome/free-solid-svg-icons/faFileAlt');
var faShoppingCart = require('@fortawesome/free-solid-svg-icons/faShoppingCart');
var faClipboard = require('@fortawesome/free-solid-svg-icons/faClipboard');
var faFilter = require('@fortawesome/free-solid-svg-icons/faFilter');
var faCircleInfo = require('@fortawesome/free-solid-svg-icons/faCircleInfo');
var faCar = require('@fortawesome/free-solid-svg-icons/faCar');
var faGhost = require('@fortawesome/free-solid-svg-icons/faGhost');
var faAppleAlt = require('@fortawesome/free-solid-svg-icons/faAppleAlt');
var faCircleUser = require('@fortawesome/free-solid-svg-icons/faCircleUser');
var faPen = require('@fortawesome/free-solid-svg-icons/faPen');
var faUmbrella = require('@fortawesome/free-solid-svg-icons/faUmbrella');
var faGift = require('@fortawesome/free-solid-svg-icons/faGift');
var faFilm = require('@fortawesome/free-solid-svg-icons/faFilm');
var faList = require('@fortawesome/free-solid-svg-icons/faList');
var faGear = require('@fortawesome/free-solid-svg-icons/faGear');
var faTrash = require('@fortawesome/free-solid-svg-icons/faTrash');
var faCircleUp = require('@fortawesome/free-solid-svg-icons/faCircleUp');
var faCircleDown = require('@fortawesome/free-solid-svg-icons/faCircleDown');
var faRotateRight = require('@fortawesome/free-solid-svg-icons/faRotateRight');
var faBookmark = require('@fortawesome/free-solid-svg-icons/faBookmark');
var faPrint = require('@fortawesome/free-solid-svg-icons/faPrint');
var faCamera = require('@fortawesome/free-solid-svg-icons/faCamera');
var faMinus = require('@fortawesome/free-solid-svg-icons/faMinus');
var faShare = require('@fortawesome/free-solid-svg-icons/faShare');
var faFire = require('@fortawesome/free-solid-svg-icons/faFire');
var faPlane = require('@fortawesome/free-solid-svg-icons/faPlane');
var faMagnet = require('@fortawesome/free-solid-svg-icons/faMagnet');
var faHand = require('@fortawesome/free-solid-svg-icons/faHand');
var faFolder = require('@fortawesome/free-solid-svg-icons/faFolder');
var faFolderOpen = require('@fortawesome/free-solid-svg-icons/faFolderOpen');
var faMoneyBill = require('@fortawesome/free-solid-svg-icons/faMoneyBill');
var faThumbsUp = require('@fortawesome/free-solid-svg-icons/faThumbsUp');
var faThumbsDown = require('@fortawesome/free-solid-svg-icons/faThumbsDown');
var faComments = require('@fortawesome/free-solid-svg-icons/faComments');
var faLemon = require('@fortawesome/free-solid-svg-icons/faLemon');
var faKey = require('@fortawesome/free-solid-svg-icons/faKey');
var faPaperPlane = require('@fortawesome/free-solid-svg-icons/faPaperPlane');
var faCode = require('@fortawesome/free-solid-svg-icons/faCode');
var faGlobe = require('@fortawesome/free-solid-svg-icons/faGlobe');
var faTruck = require('@fortawesome/free-solid-svg-icons/faTruck');
var faCity = require('@fortawesome/free-solid-svg-icons/faCity');
var faTicket = require('@fortawesome/free-solid-svg-icons/faTicket');
var faTree = require('@fortawesome/free-solid-svg-icons/faTree');
var faWifi = require('@fortawesome/free-solid-svg-icons/faWifi');
var faBicycle = require('@fortawesome/free-solid-svg-icons/faBicycle');
var faSliders = require('@fortawesome/free-solid-svg-icons/faSliders');
var faBrush = require('@fortawesome/free-solid-svg-icons/faBrush');
var faHashtag = require('@fortawesome/free-solid-svg-icons/faHashtag');
var faFlask = require('@fortawesome/free-solid-svg-icons/faFlask');
var faCompass = require('@fortawesome/free-solid-svg-icons/faCompass');
var faDumpsterFire = require('@fortawesome/free-solid-svg-icons/faDumpsterFire');
var faPerson = require('@fortawesome/free-solid-svg-icons/faPerson');
var faPersonDress = require('@fortawesome/free-solid-svg-icons/faPersonDress');
var faAddressBook = require('@fortawesome/free-solid-svg-icons/faAddressBook');
var faBath = require('@fortawesome/free-solid-svg-icons/faBath');
var faHandshake = require('@fortawesome/free-solid-svg-icons/faHandshake');
var faEarthAmericas = require('@fortawesome/free-solid-svg-icons/faEarthAmericas');
var faGamepad = require('@fortawesome/free-solid-svg-icons/faGamepad');
var faFeather = require('@fortawesome/free-solid-svg-icons/faFeather');
var faSun = require('@fortawesome/free-solid-svg-icons/faSun');
var faLink = require('@fortawesome/free-solid-svg-icons/faLink');
var faPenFancy = require('@fortawesome/free-solid-svg-icons/faPenFancy');
var faFish = require('@fortawesome/free-solid-svg-icons/faFish');
var faBug = require('@fortawesome/free-solid-svg-icons/faBug');
var faShop = require('@fortawesome/free-solid-svg-icons/faShop');
var faMugSaucer = require('@fortawesome/free-solid-svg-icons/faMugSaucer');
var faShirt = require('@fortawesome/free-solid-svg-icons/faShirt');
var faAnchor = require('@fortawesome/free-solid-svg-icons/faAnchor');
var faBagShopping = require('@fortawesome/free-solid-svg-icons/faBagShopping');
var faGauge = require('@fortawesome/free-solid-svg-icons/faGauge');
var faUserSecret = require('@fortawesome/free-solid-svg-icons/faUserSecret');
var faStethoscope = require('@fortawesome/free-solid-svg-icons/faStethoscope');
var faCarSide = require('@fortawesome/free-solid-svg-icons/faCarSide');
var faHandHoldingHeart = require('@fortawesome/free-solid-svg-icons/faHandHoldingHeart');
var faLocationPin = require('@fortawesome/free-solid-svg-icons/faLocationPin');
var faInfo = require('@fortawesome/free-solid-svg-icons/faInfo');
var faCross = require('@fortawesome/free-solid-svg-icons/faCross');
var faCreditCard = require('@fortawesome/free-solid-svg-icons/faCreditCard');
var faDatabase = require('@fortawesome/free-solid-svg-icons/faDatabase');
var faCopy = require('@fortawesome/free-solid-svg-icons/faCopy');
var faMobile = require('@fortawesome/free-solid-svg-icons/faMobile');
var faHourglass = require('@fortawesome/free-solid-svg-icons/faHourglass');
var faNewspaper = require('@fortawesome/free-solid-svg-icons/faNewspaper');
var faTable = require('@fortawesome/free-solid-svg-icons/faTable');
var faBuilding = require('@fortawesome/free-solid-svg-icons/faBuilding');
var faStore = require('@fortawesome/free-solid-svg-icons/faStore');
var faFlag = require('@fortawesome/free-solid-svg-icons/faFlag');
var faNetworkWired = require('@fortawesome/free-solid-svg-icons/faNetworkWired');
var faShield = require('@fortawesome/free-solid-svg-icons/faShield');
var faAddressCard = require('@fortawesome/free-solid-svg-icons/faAddressCard');
var faServer = require('@fortawesome/free-solid-svg-icons/faServer');
var faUserNurse = require('@fortawesome/free-solid-svg-icons/faUserNurse');
var faUserNinja = require('@fortawesome/free-solid-svg-icons/faUserNinja');
var faSchool = require('@fortawesome/free-solid-svg-icons/faSchool');
var faFileInvoice = require('@fortawesome/free-solid-svg-icons/faFileInvoice');
var faRocket = require('@fortawesome/free-solid-svg-icons/faRocket');
var faLaptop = require('@fortawesome/free-solid-svg-icons/faLaptop');
var faRestroom = require('@fortawesome/free-solid-svg-icons/faRestroom');
var faPowerOff = require('@fortawesome/free-solid-svg-icons/faPowerOff');
var faSitemap = require('@fortawesome/free-solid-svg-icons/faSitemap');
var faDesktop = require('@fortawesome/free-solid-svg-icons/faDesktop');
var faMoon = require('@fortawesome/free-solid-svg-icons/faMoon');
var faCalendarWeek = require('@fortawesome/free-solid-svg-icons/faCalendarWeek');
var faPause = require('@fortawesome/free-solid-svg-icons/faPause');
var faLanguage = require('@fortawesome/free-solid-svg-icons/faLanguage');
var faDoorOpen = require('@fortawesome/free-solid-svg-icons/faDoorOpen');
var faHotel = require('@fortawesome/free-solid-svg-icons/faHotel');
var faShower = require('@fortawesome/free-solid-svg-icons/faShower');
var faPlaceOfWorship = require('@fortawesome/free-solid-svg-icons/faPlaceOfWorship');
var faWallet = require('@fortawesome/free-solid-svg-icons/faWallet');
var faToggleOn = require('@fortawesome/free-solid-svg-icons/faToggleOn');
var faToggleOff = require('@fortawesome/free-solid-svg-icons/faToggleOff');
var faMotorcycle = require('@fortawesome/free-solid-svg-icons/faMotorcycle');
var faTrain = require('@fortawesome/free-solid-svg-icons/faTrain');
var faWrench = require('@fortawesome/free-solid-svg-icons/faWrench');
var faMicrochip = require('@fortawesome/free-solid-svg-icons/faMicrochip');
var faTrophy = require('@fortawesome/free-solid-svg-icons/faTrophy');
var faHospital = require('@fortawesome/free-solid-svg-icons/faHospital');
var faHammer = require('@fortawesome/free-solid-svg-icons/faHammer');
var faRobot = require('@fortawesome/free-solid-svg-icons/faRobot');
var faFileContract = require('@fortawesome/free-solid-svg-icons/faFileContract');
var faCrown = require('@fortawesome/free-solid-svg-icons/faCrown');
var faVirus = require('@fortawesome/free-solid-svg-icons/faVirus');
var faRepeat = require('@fortawesome/free-solid-svg-icons/faRepeat');
var faCube = require('@fortawesome/free-solid-svg-icons/faCube');
var faMedal = require('@fortawesome/free-solid-svg-icons/faMedal');
var faBullseye = require('@fortawesome/free-solid-svg-icons/faBullseye');
var faRadio = require('@fortawesome/free-solid-svg-icons/faRadio');
var faRoute = require('@fortawesome/free-solid-svg-icons/faRoute');
var faPlug = require('@fortawesome/free-solid-svg-icons/faPlug');
var faCalculator = require('@fortawesome/free-solid-svg-icons/faCalculator');
var faCertificate = require('@fortawesome/free-solid-svg-icons/faCertificate');
var faRoad = require('@fortawesome/free-solid-svg-icons/faRoad');
var faUserTie = require('@fortawesome/free-solid-svg-icons/faUserTie');
var faTruckMonster = require('@fortawesome/free-solid-svg-icons/faTruckMonster');
var faWarehouse = require('@fortawesome/free-solid-svg-icons/faWarehouse');
var faRuler = require('@fortawesome/free-solid-svg-icons/faRuler');
var faSoap = require('@fortawesome/free-solid-svg-icons/faSoap');
var faScroll = require('@fortawesome/free-solid-svg-icons/faScroll');
var faCoins = require('@fortawesome/free-solid-svg-icons/faCoins');
var faLightbulb = require('@fortawesome/free-solid-svg-icons/faLightbulb');
var faKeyboard = require('@fortawesome/free-solid-svg-icons/faKeyboard');
var faEraser = require('@fortawesome/free-solid-svg-icons/faEraser');
var faUnlock = require('@fortawesome/free-solid-svg-icons/faUnlock');
var faTablet = require('@fortawesome/free-solid-svg-icons/faTablet');
var faGlasses = require('@fortawesome/free-solid-svg-icons/faGlasses');
var faImages = require('@fortawesome/free-solid-svg-icons/faImages');
var faWandMagic = require('@fortawesome/free-solid-svg-icons/faWandMagic');
var faVest = require('@fortawesome/free-solid-svg-icons/faVest');
var faUtensils = require('@fortawesome/free-solid-svg-icons/faUtensils');
var faUserGraduate = require('@fortawesome/free-solid-svg-icons/faUserGraduate');
var faUserDoctor = require('@fortawesome/free-solid-svg-icons/faUserDoctor');
var faTv = require('@fortawesome/free-solid-svg-icons/faTv');
var faTooth = require('@fortawesome/free-solid-svg-icons/faTooth');
var faToolbox = require('@fortawesome/free-solid-svg-icons/faToolbox');
var faToiletPaper = require('@fortawesome/free-solid-svg-icons/faToiletPaper');
var faSocks = require('@fortawesome/free-solid-svg-icons/faSocks');
var faSignsPost = require('@fortawesome/free-solid-svg-icons/faSignsPost');
var faScrewdriverWrench = require('@fortawesome/free-solid-svg-icons/faScrewdriverWrench');
var faScrewdriver = require('@fortawesome/free-solid-svg-icons/faScrewdriver');
var faScissors = require('@fortawesome/free-solid-svg-icons/faScissors');
var faScaleBalanced = require('@fortawesome/free-solid-svg-icons/faScaleBalanced');
var faSackDollar = require('@fortawesome/free-solid-svg-icons/faSackDollar');
var faPizzaSlice = require('@fortawesome/free-solid-svg-icons/faPizzaSlice');
var faPaw = require('@fortawesome/free-solid-svg-icons/faPaw');
var faPanorama = require('@fortawesome/free-solid-svg-icons/faPanorama');
var faMessage = require('@fortawesome/free-solid-svg-icons/faMessage');
var faMapLocation = require('@fortawesome/free-solid-svg-icons/faMapLocation');
var faIceCream = require('@fortawesome/free-solid-svg-icons/faIceCream');
var faGasPump = require('@fortawesome/free-solid-svg-icons/faGasPump');
var faGaugeHigh = require('@fortawesome/free-solid-svg-icons/faGaugeHigh');
var faFaceAngry = require('@fortawesome/free-solid-svg-icons/faFaceAngry');
var faFaceSmileBeam = require('@fortawesome/free-solid-svg-icons/faFaceSmileBeam');
var faFaceKissBeam = require('@fortawesome/free-solid-svg-icons/faFaceKissBeam');
var faDog = require('@fortawesome/free-solid-svg-icons/faDog');
var faCubes = require('@fortawesome/free-solid-svg-icons/faCubes');
var faCouch = require('@fortawesome/free-solid-svg-icons/faCouch');
var faChildren = require('@fortawesome/free-solid-svg-icons/faChildren');
var faChartLine = require('@fortawesome/free-solid-svg-icons/faChartLine');
var faBurger = require('@fortawesome/free-solid-svg-icons/faBurger');
var faBullhorn = require('@fortawesome/free-solid-svg-icons/faBullhorn');
var faBucket = require('@fortawesome/free-solid-svg-icons/faBucket');
var faBroom = require('@fortawesome/free-solid-svg-icons/faBroom');
var faBreadSlice = require('@fortawesome/free-solid-svg-icons/faBreadSlice');
var faBoxesStacked = require('@fortawesome/free-solid-svg-icons/faBoxesStacked');
var faBoxOpen = require('@fortawesome/free-solid-svg-icons/faBoxOpen');
var faBowlingBall = require('@fortawesome/free-solid-svg-icons/faBowlingBall');
var faBowlRice = require('@fortawesome/free-solid-svg-icons/faBowlRice');
var faBottleWater = require('@fortawesome/free-solid-svg-icons/faBottleWater');
var faBookOpenReader = require('@fortawesome/free-solid-svg-icons/faBookOpenReader');
var faBookOpen = require('@fortawesome/free-solid-svg-icons/faBookOpen');
var faBone = require('@fortawesome/free-solid-svg-icons/faBone');
var faBan = require('@fortawesome/free-solid-svg-icons/faBan');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ColorPickerBase__default = /*#__PURE__*/_interopDefaultLegacy(ColorPickerBase);

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

var styles$7 = function (_a) {
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
    var styling = rnThemizer.useStyling(styles$7, {
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

var styles$6 = function (_a) {
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
    var styling = rnThemizer.useStyling(styles$6, {
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

var styles$5 = function (_a) { return ({
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
    var styling = rnThemizer.useStyling(styles$5);
    return (React__default.default.createElement(reactNative.Modal, { animationType: "fade", transparent: true, visible: open, onRequestClose: onClose },
        React__default.default.createElement(reactNative.View, { style: styling.root },
            React__default.default.createElement(reactNative.View, { style: styling.container },
                React__default.default.createElement(reactNative.View, { style: styling.header },
                    React__default.default.createElement(Text, { style: styling.title }, title),
                    React__default.default.createElement(reactNative.View, { style: styling.closeButtonWrapper },
                        React__default.default.createElement(IconButton, { onPress: onClose, icon: "times", size: "sm", variant: "primary" }))),
                open && React__default.default.createElement(reactNative.View, { style: styling.childContent }, children)))));
};

var styles$4 = function (_a) { return ({
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

var styles$3 = function (_a) { return ({
    root: {
        paddingHorizontal: 20
    }
}); };

var styles$2 = function (_a) {
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
    var styling = rnThemizer.useStyling(styles$2, { active: active });
    return (React__default.default.createElement(reactNative.TouchableOpacity, { style: styling.root, onPress: onSelect },
        React__default.default.createElement(reactNative.Text, { style: styling.label }, label),
        React__default.default.createElement(reactNative.TouchableOpacity, { style: styling.radiusWrapper, onPress: onSelect }, active && React__default.default.createElement(reactNative.View, { style: styling.radiusContent }))));
};

var ListRenderer = function (_a) {
    var options = _a.options, onSelctItem = _a.onSelctItem, selectedValue = _a.selectedValue;
    var styling = rnThemizer.useStyling(styles$3);
    return (React__default.default.createElement(reactNative.ScrollView, null,
        React__default.default.createElement(reactNative.View, { style: styling.root }, options === null || options === void 0 ? void 0 : options.map(function (item, key) { return (React__default.default.createElement(ListItemRenderer, { active: item.value === selectedValue, label: item.label, key: "item-".concat(key), onSelect: function () {
                onSelctItem(item.value);
            } })); }))));
};

var DropDown = function (_a) {
    var options = _a.options, onChange = _a.onChange, label = _a.label, name = _a.name, placeholder = _a.placeholder, props = __rest(_a, ["options", "onChange", "label", "name", "placeholder"]);
    var styling = rnThemizer.useStyling(styles$4);
    var _b = React__default.default.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React__default.default.useState(null), selected = _c[0], setSelected = _c[1];
    var _d = React__default.default.useState(), displayLabel = _d[0], setDisplayLabel = _d[1];
    var toggleOpen = function () { return setOpen(!open); };
    var onSelect = function () {
        // handle on change
        var itemLabel = options.find(function (item) { return item.value === selected; });
        setDisplayLabel(itemLabel === null || itemLabel === void 0 ? void 0 : itemLabel.label);
        if (onChange) {
            onChange({ name: name, value: selected });
        }
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

var styles$1 = function (_a) { return ({
    actionsWrapper: {
        alignItems: 'center',
        paddingVertical: 10
    },
    displayColor: {
        width: 30,
        height: 30,
        borderRadius: 100
    },
    displayColorWrapper: {
        position: 'absolute',
        right: 60,
        bottom: 22
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 20
    },
    iconWrapper: {
        position: 'absolute',
        right: 30,
        bottom: 25,
        backgroundColor: '#FFF'
    },
    root: {}
}); };

var ColorPicker = function (_a) {
    var onChange = _a.onChange, label = _a.label, placeholder = _a.placeholder, name = _a.name, value = _a.value, props = __rest(_a, ["onChange", "label", "placeholder", "name", "value"]);
    var styling = rnThemizer.useStyling(styles$1);
    var _b = React__default.default.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React__default.default.useState(value), selectedColor = _c[0], setSelectedColor = _c[1];
    var ref = React__default.default.useRef(null);
    var toggleOpen = function () { return setOpen(!open); };
    var onSelect = function () {
        if (onChange) {
            onChange({ name: name, value: selectedColor });
        }
        setOpen(false);
    };
    var onColorChange = function (color) {
        setSelectedColor(color);
    };
    var displayStyles = {
        backgroundColor: selectedColor
    };
    var generateRandomColor = React__default.default.useCallback(function () {
        var maxVal = 0xffffff; // 16777215
        var randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        var parsedNumber = randomNumber.toString(16);
        var randColor = parsedNumber.padStart(6);
        return "#".concat(randColor.toUpperCase());
    }, []);
    React__default.default.useEffect(function () {
        if (!selectedColor) {
            var generatedColor = generateRandomColor();
            setSelectedColor(generatedColor);
            console.log('Generated color: ', generatedColor);
            if (onChange) {
                onChange({ name: name, value: generatedColor });
            }
        }
    }, [selectedColor]);
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(reactNative.View, { style: styling.root },
            React__default.default.createElement(TextField, __assign({ label: label, placeholder: placeholder }, props, { onlyMask: true, onPress: toggleOpen, value: selectedColor })),
            React__default.default.createElement(reactNative.TouchableOpacity, { onPress: toggleOpen, style: styling.displayColorWrapper },
                React__default.default.createElement(reactNative.View, { style: __assign(__assign({}, styling.displayColor), displayStyles) })),
            React__default.default.createElement(reactNative.TouchableOpacity, { style: styling.iconWrapper, onPress: toggleOpen },
                React__default.default.createElement(Icon, { name: "palette" }))),
        React__default.default.createElement(Dialog, { open: open, onClose: toggleOpen, title: placeholder || label },
            React__default.default.createElement(reactNative.View, { style: styling.contentWrapper },
                React__default.default.createElement(TextField, { onlyMask: true, value: selectedColor }),
                open && (React__default.default.createElement(ColorPickerBase__default.default, { ref: ref, color: selectedColor, onColorChange: onColorChange, thumbSize: 40, sliderSize: 40, noSnap: true, row: false }))),
            React__default.default.createElement(reactNative.View, { style: styling.actionsWrapper },
                React__default.default.createElement(IconButton, { onPress: onSelect, icon: "check", variant: "primary", disabled: !selectedColor })))));
};

var styles = function (_a) {
    var size = _a.size, palette = _a.palette;
    return ({
        actionsWrapper: {
            alignItems: 'center',
            paddingVertical: 10
        },
        displayColor: {
            width: 30,
            height: 30,
            borderRadius: 100
        },
        displayColorWrapper: {
            position: 'absolute',
            right: 60,
            bottom: 22
        },
        contentWrapper: {
            flex: 1,
            paddingHorizontal: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
        },
        iconWrapper: {
            position: 'absolute',
            right: 30,
            bottom: 25,
            backgroundColor: '#FFF'
        },
        iconListWrapper: __assign(__assign({}, size(45)), { alignItems: 'center', justifyContent: 'center', borderRadius: 100, marginHorizontal: 5, marginBottom: 4 }),
        selectedIcon: {
            color: '#FFF'
        },
        selectedIconWrapper: {
            backgroundColor: palette.primaryColor
        },
        root: {}
    });
};

var iconType = [
    'brain',
    'tag',
    'tags',
    'chevron-right',
    'chevron-left',
    'chevron-up',
    'chevron-down',
    'bed',
    'bed-pulse',
    'heart-pulse',
    'battery',
    'bell',
    'book',
    'briefcase',
    'box-archive',
    'box',
    'calendar',
    'caret-up',
    'caret-down',
    'check',
    'chart-pie',
    'circle',
    'circle-check',
    'lock',
    'user',
    'eye',
    'eye-slash',
    'ellipsis-v',
    'search',
    'glass-water',
    'clock',
    'play',
    'times',
    'refresh',
    'envelope',
    'cogs',
    'home',
    'add',
    'palette',
    'dumbbell',
    'house',
    'image',
    'phone',
    'bars',
    'star',
    'location',
    'music',
    'heart',
    'arrow-right',
    'arrow-down',
    'arrow-up',
    'arrow-left',
    'bomb',
    'poo',
    'camera-retro',
    'cloud',
    'comment',
    'comment-alt',
    'hippo',
    'face-smile',
    'calendar-days',
    'paperclip',
    'file',
    'file-alt',
    'shopping-cart',
    'clipboard',
    'filter',
    'circle-info',
    'car',
    'ghost',
    'apple-alt',
    'circle-user',
    'pen',
    'umbrella',
    'gift',
    'film',
    'list',
    'gear',
    'trash',
    'circle-up',
    'circle-down',
    'rotate-right',
    'bookmark',
    'print',
    'camera',
    'minus',
    'share',
    'fire',
    'plane',
    'magnet',
    'hand',
    'folder',
    'folder-open',
    'money-bill',
    'thumbs-up',
    'thumbs-down',
    'comments',
    'lemon',
    'key',
    'paper-plane',
    'code',
    'globe',
    'truck',
    'city',
    'ticket',
    'tree',
    'wifi',
    'bicycle',
    'sliders',
    'brush',
    'hashtag',
    'flask',
    'compass',
    'dumpster-fire',
    'person',
    'person-dress',
    'address-book',
    'bath',
    'handshake',
    'earth-americas',
    'gamepad',
    'feather',
    'sun',
    'link',
    'pen-fancy',
    'fish',
    'bug',
    'shop',
    'mug-saucer',
    'shirt',
    'anchor',
    'bag-shopping',
    'gauge',
    'user-secret',
    'stethoscope',
    'car-side',
    'hand-holding-heart',
    'location-pin',
    'info',
    'cross',
    'credit-card',
    'database',
    'copy',
    'mobile',
    'hourglass',
    'newspaper',
    'table',
    'building',
    'store',
    'flag',
    'network-wired',
    'shield',
    'address-card',
    'server',
    'user-nurse',
    'user-ninja',
    'school',
    'file-invoice',
    'rocket',
    'laptop',
    'restroom',
    'power-off',
    'sitemap',
    'desktop',
    'moon',
    'calendar-week',
    'pause',
    'language',
    'door-open',
    'hotel',
    'shower',
    'place-of-worship',
    'wallet',
    'toggle-on',
    'toggle-off',
    'motorcycle',
    'train',
    'wrench',
    'microchip',
    'trophy',
    'hospital',
    'hammer',
    'robot',
    'file-contract',
    'crown',
    'virus',
    'repeat',
    'cube',
    'medal',
    'bullseye',
    'radio',
    'route',
    'plug',
    'calculator',
    'certificate',
    'road',
    'user-tie',
    'truck-monster',
    'warehouse',
    'ruler',
    'soap',
    'scroll',
    'coins',
    'lightbulb',
    'keyboard',
    'eraser',
    'unlock',
    'tablet',
    'glasses',
    'images',
    'wand-magic',
    'vest',
    'utensils',
    'user-graduate',
    'user-doctor',
    'tv',
    'tooth',
    'toolbox',
    'toilet-paper',
    'socks',
    'signs-post',
    'screwdriver-wrench',
    'screwdriver',
    'scissors',
    'scale-balanced',
    'sack-dollar',
    'pizza-slice',
    'paw',
    'panorama',
    'message',
    'map-location',
    'ice-cream',
    'gas-pump',
    'gauge-high',
    'face-angry',
    'face-smile-beam',
    'face-kiss-beam',
    'dog',
    'cubes',
    'couch',
    'children',
    'chart-line',
    'burger',
    'bullhorn',
    'bucket',
    'broom',
    'bread-slice',
    'boxes-stacked',
    'box-open',
    'bowling-ball',
    'bowl-rice',
    'bottle-water',
    'book-open-reader',
    'book-open',
    'bone',
    'ban'
];

var classNames = function (names, styles) {
    var resultedClasses = Object.keys(names).reduce(function (result, currentKey) {
        if (names[currentKey] === true) {
            result.push(styles[currentKey]);
        }
        return result;
    }, []);
    return resultedClasses;
};

var IconPicker = function (_a) {
    var onChange = _a.onChange, label = _a.label, placeholder = _a.placeholder, name = _a.name, value = _a.value, props = __rest(_a, ["onChange", "label", "placeholder", "name", "value"]);
    var styling = rnThemizer.useStyling(styles);
    var _b = React__default.default.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React__default.default.useState(value), selectedIcon = _c[0], setSelected = _c[1];
    var toggleOpen = function () { return setOpen(!open); };
    var onSelect = function () {
        if (onChange) {
            onChange({ name: name, value: selectedIcon });
        }
        setOpen(false);
    };
    var displayStyles = {
        backgroundColor: selectedIcon
    };
    return (React__default.default.createElement(React__default.default.Fragment, null,
        React__default.default.createElement(reactNative.View, { style: styling.root },
            React__default.default.createElement(TextField, __assign({ label: label, placeholder: placeholder }, props, { onlyMask: true, onPress: toggleOpen, value: selectedIcon })),
            React__default.default.createElement(reactNative.TouchableOpacity, { onPress: toggleOpen, style: styling.displayColorWrapper },
                React__default.default.createElement(reactNative.View, { style: __assign(__assign({}, styling.displayColor), displayStyles) })),
            React__default.default.createElement(reactNative.TouchableOpacity, { style: styling.iconWrapper, onPress: toggleOpen },
                React__default.default.createElement(Icon, { name: "search" }))),
        React__default.default.createElement(Dialog, { open: open, onClose: toggleOpen, title: placeholder || label },
            React__default.default.createElement(reactNative.ScrollView, null,
                React__default.default.createElement(reactNative.View, { style: styling.contentWrapper }, iconType.map(function (item) { return (React__default.default.createElement(reactNative.TouchableOpacity, { style: classNames({
                        iconListWrapper: true,
                        selectedIconWrapper: item === selectedIcon
                    }, styling), onPress: function () { return setSelected(item); }, key: "item-".concat(item) },
                    React__default.default.createElement(Icon, { name: item, style: classNames({
                            selectedIcon: item === selectedIcon
                        }, styling) }))); }))),
            React__default.default.createElement(reactNative.View, { style: styling.actionsWrapper },
                React__default.default.createElement(IconButton, { onPress: onSelect, icon: "check", variant: "primary", disabled: !selectedIcon })))));
};

var registerIcons = function () {
    fontawesomeSvgCore.library.add(faTag.faTag, faBrain.faBrain, faAdd.faAdd, faTags.faTags, faClock.faClock, faDumbbell.faDumbbell, faPalette.faPalette, faChevronRight.faChevronRight, faChevronLeft.faChevronLeft, faChevronUp.faChevronUp, faChevronDown.faChevronDown, faBed.faBed, faBedPulse.faBedPulse, faHeartPulse.faHeartPulse, faBattery.faBattery, faBell.faBell, faBook.faBook, faGlassWater.faGlassWater, faBriefcase.faBriefcase, faBoxArchive.faBoxArchive, faBox.faBox, faCalendar.faCalendar, faCaretUp.faCaretUp, faCaretDown.faCaretDown, faCheck.faCheck, faChartPie.faChartPie, faCircle.faCircle, faCircleCheck.faCircleCheck, faLock.faLock, faUser.faUser, faEye.faEye, faEyeSlash.faEyeSlash, faEllipsisVertical.faEllipsisVertical, faSearch.faSearch, faPlay.faPlay, faTimes.faTimes, faRefresh.faRefresh, faEnvelope.faEnvelope, faCogs.faCogs, faHome.faHome, faHouse.faHouse, faImage.faImage, faPhone.faPhone, faBars.faBars, faStar.faStar, faLocation.faLocation, faMusic.faMusic, faHeart.faHeart, faArrowRight.faArrowRight, faArrowDown.faArrowDown, faArrowUp.faArrowUp, faArrowLeft.faArrowLeft, faBomb.faBomb, faPoo.faPoo, faCameraRetro.faCameraRetro, faCloud.faCloud, faComment.faComment, faCommentAlt.faCommentAlt, faHippo.faHippo, faFaceSmile.faFaceSmile, faCalendarDays.faCalendarDays, faPaperclip.faPaperclip, faFile.faFile, faFileAlt.faFileAlt, faShoppingCart.faShoppingCart, faClipboard.faClipboard, faFilter.faFilter, faCircleInfo.faCircleInfo, faCar.faCar, faGhost.faGhost, faAppleAlt.faAppleAlt, faCircleUser.faCircleUser, faPen.faPen, faUmbrella.faUmbrella, faGift.faGift, faFilm.faFilm, faList.faList, faGear.faGear, faTrash.faTrash, faCircleUp.faCircleUp, faCircleDown.faCircleDown, faRotateRight.faRotateRight, faBookmark.faBookmark, faPrint.faPrint, faCamera.faCamera, faMinus.faMinus, faShare.faShare, faFire.faFire, faPlane.faPlane, faMagnet.faMagnet, faHand.faHand, faFolder.faFolder, faFolderOpen.faFolderOpen, faMoneyBill.faMoneyBill, faThumbsUp.faThumbsUp, faThumbsDown.faThumbsDown, faComments.faComments, faLemon.faLemon, faKey.faKey, faPaperPlane.faPaperPlane, faCode.faCode, faGlobe.faGlobe, faTruck.faTruck, faCity.faCity, faTicket.faTicket, faTree.faTree, faWifi.faWifi, faBicycle.faBicycle, faSliders.faSliders, faBrush.faBrush, faHashtag.faHashtag, faFlask.faFlask, faCompass.faCompass, faDumpsterFire.faDumpsterFire, faPerson.faPerson, faPersonDress.faPersonDress, faAddressBook.faAddressBook, faBath.faBath, faHandshake.faHandshake, faEarthAmericas.faEarthAmericas, faGamepad.faGamepad, faFeather.faFeather, faSun.faSun, faLink.faLink, faPenFancy.faPenFancy, faFish.faFish, faBug.faBug, faShop.faShop, faMugSaucer.faMugSaucer, faShirt.faShirt, faAnchor.faAnchor, faBagShopping.faBagShopping, faGauge.faGauge, faUserSecret.faUserSecret, faStethoscope.faStethoscope, faCarSide.faCarSide, faHandHoldingHeart.faHandHoldingHeart, faLocationPin.faLocationPin, faInfo.faInfo, faCross.faCross, faCreditCard.faCreditCard, faDatabase.faDatabase, faCopy.faCopy, faMobile.faMobile, faHourglass.faHourglass, faNewspaper.faNewspaper, faTable.faTable, faBuilding.faBuilding, faStore.faStore, faFlag.faFlag, faNetworkWired.faNetworkWired, faShield.faShield, faAddressCard.faAddressCard, faServer.faServer, faUserNurse.faUserNurse, faUserNinja.faUserNinja, faSchool.faSchool, faFileInvoice.faFileInvoice, faRocket.faRocket, faLaptop.faLaptop, faRestroom.faRestroom, faPowerOff.faPowerOff, faSitemap.faSitemap, faDesktop.faDesktop, faMoon.faMoon, faCalendarWeek.faCalendarWeek, faPause.faPause, faLanguage.faLanguage, faDoorOpen.faDoorOpen, faHotel.faHotel, faShower.faShower, faPlaceOfWorship.faPlaceOfWorship, faWallet.faWallet, faToggleOn.faToggleOn, faToggleOff.faToggleOff, faMotorcycle.faMotorcycle, faTrain.faTrain, faWrench.faWrench, faMicrochip.faMicrochip, faTrophy.faTrophy, faHospital.faHospital, faHammer.faHammer, faRobot.faRobot, faFileContract.faFileContract, faCrown.faCrown, faVirus.faVirus, faRepeat.faRepeat, faCube.faCube, faMedal.faMedal, faBullseye.faBullseye, faRadio.faRadio, faRoute.faRoute, faPlug.faPlug, faCalculator.faCalculator, faCertificate.faCertificate, faRoad.faRoad, faUserTie.faUserTie, faTruckMonster.faTruckMonster, faWarehouse.faWarehouse, faRuler.faRuler, faSoap.faSoap, faScroll.faScroll, faCoins.faCoins, faLightbulb.faLightbulb, faKeyboard.faKeyboard, faEraser.faEraser, faUnlock.faUnlock, faTablet.faTablet, faGlasses.faGlasses, faImages.faImages, faWandMagic.faWandMagic, faVest.faVest, faUtensils.faUtensils, faUserGraduate.faUserGraduate, faUserDoctor.faUserDoctor, faTv.faTv, faTooth.faTooth, faToolbox.faToolbox, faToiletPaper.faToiletPaper, faSocks.faSocks, faSignsPost.faSignsPost, faScrewdriverWrench.faScrewdriverWrench, faScrewdriver.faScrewdriver, faScissors.faScissors, faScaleBalanced.faScaleBalanced, faSackDollar.faSackDollar, faPizzaSlice.faPizzaSlice, faPaw.faPaw, faPanorama.faPanorama, faMoneyBill.faMoneyBill, faMessage.faMessage, faMapLocation.faMapLocation, faIceCream.faIceCream, faGlassWater.faGlassWater, faGasPump.faGasPump, faGaugeHigh.faGaugeHigh, faFaceAngry.faFaceAngry, faFaceSmileBeam.faFaceSmileBeam, faFaceKissBeam.faFaceKissBeam, faDog.faDog, faCubes.faCubes, faCouch.faCouch, faChildren.faChildren, faChartLine.faChartLine, faBurger.faBurger, faBullhorn.faBullhorn, faBucket.faBucket, faBroom.faBroom, faBreadSlice.faBreadSlice, faBoxesStacked.faBoxesStacked, faBoxOpen.faBoxOpen, faBowlingBall.faBowlingBall, faBowlRice.faBowlRice, faBottleWater.faBottleWater, faBookOpenReader.faBookOpenReader, faBookOpen.faBookOpen, faBone.faBone, faBan.faBan);
};

exports.Button = Button;
exports.ColorPicker = ColorPicker;
exports.Dialog = Dialog;
exports.DropDown = DropDown;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.IconPicker = IconPicker;
exports.Image = Image;
exports.PasswordField = PasswordField;
exports.Text = Text;
exports.TextField = TextField;
exports.Title = Title;
exports.iconType = iconType;
exports.registerIcons = registerIcons;
//# sourceMappingURL=index.js.map
