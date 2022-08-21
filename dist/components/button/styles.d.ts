import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
import { ButtonColors, ButtonPlacements, ButtonSizes, ButtonVariants } from './types';
export declare type StyleGuide = {
    icon?: FontAwesomeIconStyle;
    root: ViewStyle;
    text: TextStyle;
};
export declare type ParamsGiven = {
    disabled?: boolean;
    color?: ButtonColors;
    variant?: ButtonVariants;
    size?: ButtonSizes;
    iconPlacement?: ButtonPlacements;
    rounded?: boolean;
};
declare const styling: StyleDefType<StyleGuide, ParamsGiven>;
export default styling;
