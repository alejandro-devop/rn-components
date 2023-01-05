import React from 'react';
import { TextFieldProps } from '../text-field/types';
interface NumberPickerFieldProps {
    step?: number;
    min?: number;
    max?: number;
}
declare const NumberPickerField: React.FC<TextFieldProps & NumberPickerFieldProps>;
export default NumberPickerField;
