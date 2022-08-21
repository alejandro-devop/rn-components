import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer';
export declare type StyleGuide = {
    root: ViewStyle;
    title: TextStyle;
};
export declare type ParamsGiven = {
    size?: '1' | '2' | '3' | '4' | '5' | '6';
};
declare const styles: StyleDefType<StyleGuide, ParamsGiven>;
export default styles;
