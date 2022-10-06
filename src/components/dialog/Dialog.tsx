import React from 'react'
import { View, Modal } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import Text from '../text'
import IconButton from '../icon-button'

interface DialogProps {
    children?: React.ReactNode
    open?: boolean
    onClose?: () => void
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles)
    return (
        <Modal animationType="slide" transparent visible={open} onRequestClose={onClose}>
            <View style={styling.root}>
                <View style={styling.container}>
                    <View style={styling.header}>
                        <Text style={styling.title}>Title</Text>
                        <View style={styling.closeButtonWrapper}>
                            <IconButton
                                onPress={onClose}
                                icon="times"
                                size="sm"
                                variant="primary"
                            />
                        </View>
                    </View>
                    <View style={styling.childContent}>{children}</View>
                </View>
            </View>
        </Modal>
    )
}

export default Dialog
