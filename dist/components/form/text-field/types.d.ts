import { IconNameType } from '../../icon/types';
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
}
