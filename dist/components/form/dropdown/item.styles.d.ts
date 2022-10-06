import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer';
export declare type StyleGuide = {
    root: ViewStyle;
    label: TextStyle;
    radiusWrapper: ViewStyle;
    radiusContent: ViewStyle;
};
export declare type ParamsType = {
    active?: boolean;
};
declare const styles: StyleDefType<StyleGuide, ParamsType>;
export default styles;
