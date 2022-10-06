import React from 'react';
interface DialogProps {
    children?: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
    title?: string;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
