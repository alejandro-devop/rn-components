/// <reference types="react" />
import { StyleProp } from 'react-native';
import { TextStyle } from '@alejandro.dev/rn-themizer';
export interface TitleProps {
    children?: React.ReactNode;
    size?: '1' | '2' | '3' | '4' | '5' | '6';
    style?: StyleProp<TextStyle>;
}
