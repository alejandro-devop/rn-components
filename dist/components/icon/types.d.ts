import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
export declare type IconNameType = 'brain' | 'tag' | 'tags' | 'chevron-right' | 'chevron-left' | 'chevron-up' | 'chevron-down' | 'bed' | 'bed-pulse' | 'heart-pulse' | 'battery' | 'bell' | 'book' | 'briefcase' | 'box-archive' | 'box' | 'calendar' | 'caret-up' | 'caret-down' | 'check' | 'chart-pie' | 'circle' | 'circle-check' | 'lock' | 'user' | 'eye' | 'eye-slash' | 'ellipsis-v' | 'search' | 'glass-water' | 'clock' | 'play' | 'times' | 'refresh' | 'envelope' | 'cogs' | 'home' | 'add';
export interface IconProps {
    name: IconNameType;
    size?: number;
    style?: FontAwesomeIconStyle | any;
}
