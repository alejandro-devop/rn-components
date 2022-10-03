import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import Icon from '../icon'
import { IconNameType } from '../icon/types'

interface IconButtonProps {
    icon: IconNameType
    variant?: 'primary' | 'secondary' | 'default'
    size?: 'sm' | 'md' | 'lg'
    onPress?: () => void
}

const IconButton: React.FC<IconButtonProps> = ({ icon, variant, size, onPress }) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles, {
        variant,
        size
    })
    const iconSize = React.useMemo(() => {
        return {
            sm: 30,
            md: 35,
            lg: 40
        }[size || 'md']
    }, [size])
    return (
        <TouchableOpacity style={styling.root} onPress={onPress}>
            <Icon name={icon} style={styling.icon} size={iconSize} />
        </TouchableOpacity>
    )
}

IconButton.defaultProps = {
    variant: 'default',
    size: 'md'
}

export default IconButton
