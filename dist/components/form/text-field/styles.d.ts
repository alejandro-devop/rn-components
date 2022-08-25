import { StyleDefType, TextStyle, ViewStyle } from '@alejandro.dev/rn-themizer';
export declare type StyleGuide = {
    input: ViewStyle;
    inputWrapper: ViewStyle;
    label: TextStyle;
    labelWrapper: ViewStyle;
    root: ViewStyle;
};
export declare type ParamsGiven = {
    focussed?: boolean;
    primary?: boolean;
    secondary?: boolean;
};
declare const styling: StyleDefType<StyleGuide, ParamsGiven>;
export default styling;
