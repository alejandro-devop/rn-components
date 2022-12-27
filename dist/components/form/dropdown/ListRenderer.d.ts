import React from 'react';
interface ListRendererProps {
    options?: {
        value: any;
        label: string;
        icon?: any;
    }[];
    onSelctItem: (itemId: any) => void;
    selectedValue?: any;
}
declare const ListRenderer: React.FC<ListRendererProps>;
export default ListRenderer;
