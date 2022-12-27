import React from 'react';
declare const ListItemRenderer: React.FC<{
    label: string;
    icon?: string;
    active?: boolean;
    onSelect: () => void;
}>;
export default ListItemRenderer;
