import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
export declare type StyleGuide = {
    root: ViewStyle;
    controlWrapper: ViewStyle;
    controlIcon: FontAwesomeIconStyle;
};
export declare type ParamsType = {
    primary?: boolean;
    secondary?: boolean;
    checked?: boolean;
    controlSize?: number;
};
declare const styling: StyleDefType<StyleGuide, ParamsType>;
export default styling;
