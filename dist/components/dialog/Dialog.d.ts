import React from 'react';
interface DialogProps {
    children?: React.ReactNode;
    open?: boolean;
    onClose?: () => void;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
