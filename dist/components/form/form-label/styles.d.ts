import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer';
export declare type StyleGuide = {
    label: TextStyle;
    labelWrapper: ViewStyle;
};
export declare type ParamsType = {
    primary?: boolean;
    secondary?: boolean;
    spacingBottom?: boolean;
};
declare const styles: StyleDefType<StyleGuide, ParamsType>;
export default styles;
