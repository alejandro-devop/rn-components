import React from 'react';
import { TextFieldProps } from '../../../components/form/text-field/types';
interface DropDownProps {
    options: {
        value: any;
        label: string;
        icon?: string;
    }[];
}
declare const DropDown: React.FC<DropDownProps & TextFieldProps>;
export default DropDown;
