import React from 'react';
interface CheckBoxFieldProps {
    label?: string;
    checked?: boolean;
    primary?: boolean;
    secondary?: boolean;
    onPress?: () => void;
}
declare const CheckBoxField: React.FC<CheckBoxFieldProps>;
export default CheckBoxField;
