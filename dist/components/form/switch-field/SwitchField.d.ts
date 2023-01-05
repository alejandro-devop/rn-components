import React from 'react';
interface SwitchFieldProps {
    label?: string;
    checked?: boolean;
    primary?: boolean;
    secondary?: boolean;
    onPress?: () => void;
}
declare const SwitchField: React.FC<SwitchFieldProps>;
export default SwitchField;
