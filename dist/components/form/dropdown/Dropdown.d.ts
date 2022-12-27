import React from 'react';
interface DropDownProps {
    options: {
        value: any;
        label: string;
        icon?: string;
    }[];
    onBlur?: () => void;
    onChange?: (eventInfo: {
        name?: string;
        value?: string;
    }) => void;
    onFocus?: () => void;
    placeholder?: string;
    label?: string;
    name?: string;
    secondary?: boolean;
    value?: string;
}
declare const DropDown: React.FC<DropDownProps>;
export default DropDown;
