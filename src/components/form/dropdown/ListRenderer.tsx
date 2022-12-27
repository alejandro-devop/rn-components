import React from 'react'
import { ScrollView, View } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './list.styles'
import ListItemRenderer from './ListItemRenderer'

interface ListRendererProps {
    options?: { value: any; label: string; icon?: any }[]
    onSelctItem: (itemId: any) => void
    selectedValue?: any
}

const ListRenderer: React.FC<ListRendererProps> = ({ options, onSelctItem, selectedValue }) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles)
    return (
        <ScrollView>
            <View style={styling.root}>
                {options?.map((item, key) => (
                    <ListItemRenderer
                        active={item.value === selectedValue}
                        label={item.label}
                        icon={item.icon}
                        key={`item-${key}`}
                        onSelect={() => {
                            onSelctItem(item.value)
                        }}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default ListRenderer
