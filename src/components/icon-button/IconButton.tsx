import React from 'react'
import { View } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import Icon from '../icon'
import { IconNameType } from '../icon/types'

interface IconButtonProps {
    icon: IconNameType
    variant?: 'primary' | 'secondary' | 'default'
    size?: 'sm' | 'md' | 'lg'
    onPress?: () => void
    disabled?: boolean
}

const IconButton: React.FC<IconButtonProps> = ({ icon, variant, size, disabled }) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles, {
        variant,
        disabled,
        size
    })
    const iconSize = React.useMemo(() => {
        return {
            sm: 20,
            md: 30,
            lg: 40
        }[size || 'md']
    }, [size])
    return (
        <View style={styling.root}>
            <Icon name={icon} style={styling.icon} size={iconSize} />
        </View>
    )
}

IconButton.defaultProps = {
    variant: 'default',
    size: 'md'
}

export default IconButton
