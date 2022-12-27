import { StyleDefType, TextStyle, ViewStyle } from '@alejandro.dev/rn-themizer'
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'

export type StyleGuide = {
    actionButton: ViewStyle
    actionIcon: FontAwesomeIconStyle
    input: ViewStyle
    inputWrapper: ViewStyle
    inputRow: ViewStyle
    label: TextStyle
    labelWrapper: ViewStyle
    root: ViewStyle
    icon: FontAwesomeIconStyle
    iconWrapper: ViewStyle
    maskedValue: TextStyle
}

export type ParamsGiven = { focussed?: boolean; primary?: boolean; secondary?: boolean }

const styling: StyleDefType<StyleGuide, ParamsGiven> = ({
    fromPalette,
    fromVars,
    applyIf,
    params,
    palette
}) => ({
    actionButton: {
        marginLeft: 5,
        height: fromVars('textField.inputWrapper.height', 40),
        width: fromVars('textField.inputWrapper.height', 40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionIcon: {
        color: palette.primaryColor,
        ...applyIf(params?.secondary, {
            color: palette.secondaryColor
        })
    },
    icon: {
        color: '#FFF',
        ...applyIf(params?.secondary, {
            color: palette.secondaryColor
        })
    },
    iconWrapper: {
        backgroundColor: palette.primaryColor,
        height: fromVars('textField.inputWrapper.height', 40),
        width: fromVars('textField.inputWrapper.height', 40),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ translateX: -1 }]
    },
    input: {
        height: '100%',
        fontSize: fromVars('textField.input.fontSize', 18),
        paddingHorizontal: fromVars('textField.input.paddingHorizontal', 5),
        flex: 1
    },
    maskedValue: {
        flex: 1,
        paddingHorizontal: fromVars('textField.input.paddingHorizontal', 5),
        fontSize: fromVars('textField.input.fontSize', 18)
    },
    inputRow: {
        flexDirection: 'row'
    },
    inputWrapper: {
        alignItems: 'center',
        borderWidth: fromVars('textField.inputWrapper.borderWidth', 1),
        borderRadius: fromVars('textField.inputWrapper.borderRadius', 5),
        borderColor: fromPalette('textField.borderColor', '#90a4ae'),
        height: fromVars('textField.inputWrapper.height', 40),
        backgroundColor: fromPalette('textField.inputWrapper.bgColor', '#FFF'),
        flex: 1,
        flexDirection: 'row',
        ...applyIf(params?.focussed, {
            borderWidth: fromVars('textField.inputWrapper.borderWidthFocussed', 2),
            borderColor: fromPalette(
                params?.secondary ? 'secondaryColor' : 'primaryColor',
                '#90a4ae'
            ),
            shadowColor: fromPalette(
                params?.secondary ? 'secondaryColor' : 'primaryColor',
                '#90a4ae'
            ),
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        })
    },
    labelWrapper: {
        marginBottom: 5,
        paddingHorizontal: fromVars('textField.label.paddingHorizontal', 10)
    },
    label: {
        fontSize: fromVars('textField.label.fontSize', 18),
        fontWeight: fromVars('textField.label.fontWeight', '600'),
        color: palette?.primaryColor,
        ...applyIf(params?.secondary, {
            color: palette?.secondaryColor
        })
    },
    root: {
        paddingHorizontal: fromVars('textField.root.paddingHorizontal', 18),
        marginBottom: fromVars('textField.root.marginBottom', 18)
    }
})

export default styling
