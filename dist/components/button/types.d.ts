/// <reference types="react" />
import { IconNameType } from '../icon/types';
export declare type ButtonColors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export declare type ButtonPlacements = 'left' | 'right';
export declare type ButtonSizes = 'small' | 'medium' | 'large';
export declare type ButtonVariants = 'default' | 'solid' | 'outline';
export interface ButtonProps {
    children: React.ReactNode;
    color?: ButtonColors;
    disabled?: boolean;
    icon?: IconNameType;
    iconPlacement?: ButtonPlacements;
    size?: ButtonSizes;
    variant?: ButtonVariants;
    rounded?: boolean;
    onPress?: () => void;
    loading?: boolean;
    loadingText?: string;
}
