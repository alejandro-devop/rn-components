import React from 'react'
import { IconProps } from './types'
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

/**
 * Renders a fontawesome icon
 * @version 1.0.0
 * @since 0.0.1
 * @returns
 */
const Icon: React.FC<IconProps> = ({ name, style, size }) => {
    return (
        <View>
            <FontAwesomeIcon icon={name} style={style} size={size} />
        </View>
    )
}

Icon.defaultProps = {
    size: 24
}

export default Icon
