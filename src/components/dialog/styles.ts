import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    childContent: ViewStyle
    closeButtonWrapper: ViewStyle
    container: ViewStyle
    header: ViewStyle
    root: ViewStyle
    title: TextStyle
}

export type ParamsType = {}

const styles: StyleDefType<StyleGuide, ParamsType> = ({}) => ({
    childContent: {
        flex: 1
    },
    closeButtonWrapper: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 100
    },
    container: {
        borderRadius: 30,
        height: '80%',
        width: '90%',
        backgroundColor: '#FFF'
    },
    header: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    title: {
        fontSize: 28,
        textAlign: 'center'
    }
})

export default styles
