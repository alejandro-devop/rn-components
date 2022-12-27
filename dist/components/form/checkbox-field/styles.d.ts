import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
export declare type StyleGuide = {
    root: ViewStyle;
    controlWrapper: ViewStyle;
    controlIcon: FontAwesomeIconStyle;
};
export declare type ParamsGiven = {
    primary?: boolean;
    secondary?: boolean;
};
declare const styling: StyleDefType<StyleGuide, ParamsGiven>;
export default styling;
