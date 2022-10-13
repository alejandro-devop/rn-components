import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    actionsWrapper: ViewStyle
    contentWrapper: ViewStyle
    iconWrapper: ViewStyle
    root: ViewStyle
    displayColorWrapper: ViewStyle
    displayColor: ViewStyle
}

export type ParamsType = {}

const styles: StyleDefType<StyleGuide, ParamsType> = ({}) => ({
    actionsWrapper: {
        alignItems: 'center',
        paddingVertical: 10
    },
    displayColor: {
        width: 30,
        height: 30,
        borderRadius: 100
    },
    displayColorWrapper: {
        position: 'absolute',
        right: 60,
        bottom: 22
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 20
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
