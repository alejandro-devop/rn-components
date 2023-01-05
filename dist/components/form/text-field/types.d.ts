import { IconNameType } from '../../icon/types';
import { KeyboardTypeOptions } from 'react-native';
export interface TextFieldProps {
    label?: string;
    secondary?: boolean;
    name?: string;
    onBlur?: () => void;
    onChange?: (eventInfo: {
        name?: string;
        value?: string;
    }) => void;
    onFocus?: () => void;
    placeholder?: string;
    value?: string;
    icon?: IconNameType;
    actionIcon?: IconNameType;
    onActionTriggered?: () => void;
    isPassword?: boolean;
    autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
    keyboardType?: KeyboardTypeOptions;
    onlyMask?: boolean;
    onPress?: () => void;
}
