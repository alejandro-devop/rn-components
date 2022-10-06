import React from 'react';
import { IconNameType } from '../icon/types';
interface IconButtonProps {
    icon: IconNameType;
    variant?: 'primary' | 'secondary' | 'default';
    size?: 'sm' | 'md' | 'lg';
    onPress?: () => void;
    disabled?: boolean;
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
