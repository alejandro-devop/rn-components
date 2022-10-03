import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer';
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
export declare type StyleGuide = {
    root: ViewStyle;
    icon: FontAwesomeIconStyle;
};
export declare type ParamsType = {
    variant?: 'primary' | 'secondary' | 'default';
    size?: 'sm' | 'md' | 'lg';
};
declare const styles: StyleDefType<StyleGuide, ParamsType>;
export default styles;
