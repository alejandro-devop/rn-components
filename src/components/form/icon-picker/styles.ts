import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'

export type StyleGuide = {
    actionsWrapper: ViewStyle
    contentWrapper: ViewStyle
    iconWrapper: ViewStyle
    root: ViewStyle
    displayColorWrapper: ViewStyle
    selectedIconWrapper: ViewStyle
    displayColor: ViewStyle
    iconListWrapper: ViewStyle
    icon: FontAwesomeIconStyle
    selectedIcon: FontAwesomeIconStyle
}

export type ParamsType = {}

const styles: StyleDefType<StyleGuide, ParamsType> = ({ size, palette }) => ({
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
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    },
    iconWrapper: {
        position: 'absolute',
        right: 30,
        bottom: 25,
        backgroundColor: '#FFF'
    },
    iconListWrapper: {
        ...size(45),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginHorizontal: 5,
        marginBottom: 4
    },
    selectedIcon: {
        color: '#FFF'
    },
    selectedIconWrapper: {
        backgroundColor: palette.primaryColor
    },
    root: {}
})

export default styles
