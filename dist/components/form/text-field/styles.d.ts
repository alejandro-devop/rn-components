import { StyleDefType, TextStyle, ViewStyle } from '@alejandro.dev/rn-themizer';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
export declare type StyleGuide = {
    actionButton: ViewStyle;
    actionIcon: FontAwesomeIconStyle;
    input: ViewStyle;
    inputWrapper: ViewStyle;
    inputRow: ViewStyle;
    label: TextStyle;
    labelWrapper: ViewStyle;
    root: ViewStyle;
    icon: FontAwesomeIconStyle;
    iconWrapper: ViewStyle;
};
export declare type ParamsGiven = {
    focussed?: boolean;
    primary?: boolean;
    secondary?: boolean;
};
declare const styling: StyleDefType<StyleGuide, ParamsGiven>;
export default styling;
