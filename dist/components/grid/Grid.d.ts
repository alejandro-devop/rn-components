import React from 'react';
interface GridProps {
    children: React.ReactNode;
    cols?: number;
    gap?: number;
    rowMargin?: number;
    contentPadding?: number;
}
declare const Grid: React.FC<GridProps>;
export default Grid;
