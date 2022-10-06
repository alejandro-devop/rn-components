import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    actionsWrapper: ViewStyle
    iconWrapper: ViewStyle
    root: ViewStyle
}

export type ParamsType = {}

const styles: StyleDefType<StyleGuide, ParamsType> = ({}) => ({
    actionsWrapper: {
        alignItems: 'center',
        paddingVertical: 10
    },
    iconWrapper: {
        position: 'absolute',
        right: 30,
        bottom: 25,
        backgroundColor: '#FFF'
    },
    root: {}
})

export default styles
