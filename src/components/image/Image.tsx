import React from 'react'
import { ImageProps } from './types'
import { Image as ImageBase } from 'react-native'

const Image: React.FC<ImageProps> = ({ src, style }) => {
    return <ImageBase source={src} style={style} />
}

export default Image
