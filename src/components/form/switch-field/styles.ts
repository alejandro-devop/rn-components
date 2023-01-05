import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'

export type StyleGuide = {
    root: ViewStyle
    controlWrapper: ViewStyle
    controlIcon: FontAwesomeIconStyle
}
export type ParamsType = {
    primary?: boolean
    secondary?: boolean
    checked?: boolean
    controlSize?: number
}
const defaultControlSize = 30
const styling: StyleDefType<StyleGuide, ParamsType> = ({ palette, params, applyIf, size }) => ({
    controlWrapper: {
        width: (params?.controlSize || defaultControlSize) * 2 - 10,
        height: params?.controlSize || defaultControlSize,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${palette.buttons?.default}7f`,
        ...applyIf(!params?.primary && !params?.secondary && params?.checked, {
            backgroundColor: palette.buttons?.default
        }),
        ...applyIf(params?.primary && params?.checked, {
            backgroundColor: palette.primaryColor
        }),
        ...applyIf(params?.secondary && params?.checked, {
            backgroundColor: palette.secondaryColor
        })
    },
    controlIcon: {
        ...size(params?.controlSize || defaultControlSize),
        borderWidth: 2,
        borderColor: palette.buttons?.default,
        backgroundColor: '#FFF',
        borderRadius: 100,
        position: 'absolute',
        ...applyIf(!params?.checked, {
            left: 0
        }),
        ...applyIf(params?.checked, {
            right: 0
        })
    },
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10
    }
})

export default styling
