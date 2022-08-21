import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer';
import { ButtonColors, ButtonPlacements, ButtonSizes, ButtonVariants } from './types';
export declare type StyleGuide = {
    root: ViewStyle;
    text: TextStyle;
};
export declare type ParamsGiven = {
    disabled?: boolean;
    color?: ButtonColors;
    variant?: ButtonVariants;
    size?: ButtonSizes;
    iconPlacement?: ButtonPlacements;
};
declare const styling: StyleDefType<StyleGuide, ParamsGiven>;
export default styling;
