import React from 'react';
declare type GridConfiguratorType = {
    cols?: number;
    gap?: number;
    rowMargin?: number;
    contentPadding?: number;
};
declare const GridConfiguratorContext: React.Context<GridConfiguratorType>;
export default GridConfiguratorContext;
