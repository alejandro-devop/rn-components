import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
export declare type StyleGuide = {
    actionsWrapper: ViewStyle;
    contentWrapper: ViewStyle;
    iconWrapper: ViewStyle;
    root: ViewStyle;
    displayColorWrapper: ViewStyle;
    selectedIconWrapper: ViewStyle;
    displayColor: ViewStyle;
    iconListWrapper: ViewStyle;
    icon: FontAwesomeIconStyle;
    selectedIcon: FontAwesomeIconStyle;
};
export declare type ParamsType = {};
declare const styles: StyleDefType<StyleGuide, ParamsType>;
export default styles;
