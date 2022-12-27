import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'

export type StyleGuide = {
    root: ViewStyle
    controlWrapper: ViewStyle
    controlIcon: FontAwesomeIconStyle
}
export type ParamsGiven = {
    primary?: boolean
    secondary?: boolean
}

const styling: StyleDefType<StyleGuide, ParamsGiven> = ({ palette, params, applyIf }) => ({
    controlWrapper: {
        width: 34,
        height: 34,
        borderRadius: 100,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: palette.buttons?.defaultTextColor,
        ...applyIf(params?.primary, {
            borderColor: palette.primaryColor
        }),
        ...applyIf(params?.secondary, {
            borderColor: palette.secondaryColor
        })
    },
    controlIcon: {
        color: palette.buttons?.defaultTextColor,
        ...applyIf(params?.primary, {
            color: palette.primaryColor
        }),
        ...applyIf(params?.secondary, {
            color: palette.secondaryColor
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
