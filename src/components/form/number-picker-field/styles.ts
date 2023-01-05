import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    root: ViewStyle
    inputInnerWrapper: ViewStyle
    inputWrapper: ViewStyle
}

export type ParamsType = {}

const styles: StyleDefType<StyleGuide, ParamsType> = ({}) => ({
    inputInnerWrapper: {
        flex: 1,
        paddingTop: 15
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    root: {}
})

export default styles
