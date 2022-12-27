import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './item.styles'
import Icon from '../../icon'

const ListItemRenderer: React.FC<{
    label: string
    icon?: string
    active?: boolean
    onSelect: () => void
}> = ({ label, active, icon, onSelect }) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles, { active })
    return (
        <TouchableOpacity style={styling.root} onPress={onSelect}>
            {icon && (
                <View>
                    <Icon name={icon as any} />
                </View>
            )}
            <Text style={styling.label}>{label}</Text>
            <TouchableOpacity style={styling.radiusWrapper} onPress={onSelect}>
                {active && <View style={styling.radiusContent} />}
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default ListItemRenderer
