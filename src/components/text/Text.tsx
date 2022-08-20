import React from 'react'
import { Text as TextBase } from 'react-native'
import { TextProps } from './types'

/**
 * Component to render the application texts
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @version 0.0.1
 * @returns
 */
const Text: React.FC<TextProps> = ({ children, style }) => {
    return <TextBase style={style}>{children}</TextBase>
}

export default Text
