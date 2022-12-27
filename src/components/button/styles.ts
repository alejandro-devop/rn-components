import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer'
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'
import { ButtonColors, ButtonPlacements, ButtonSizes, ButtonVariants } from './types'

export type StyleGuide = {
    icon?: FontAwesomeIconStyle
    root: ViewStyle
    text: TextStyle
    loader: ViewStyle
}

export type ParamsGiven = {
    disabled?: boolean
    color?: ButtonColors
    variant?: ButtonVariants
    size?: ButtonSizes
    iconPlacement?: ButtonPlacements
    rounded?: boolean
}

const styling: StyleDefType<StyleGuide, ParamsGiven> = ({
    palette,
    params,
    applyFor,
    valueFor,
    variables
}) => {
    /**
     * Allows us to reuse the styles for the button
     */
    const buttonColor = valueFor(params?.color, {
        primary: palette.buttons?.primaryColor,
        secondary: palette.buttons?.secondaryColor,
        success: palette.success,
        warning: palette.warning,
        danger: palette.danger,
        info: palette.info,
        _default: palette.buttons?.default
    })

    return {
        loader: {
            marginLeft: 10
        },
        icon: {
            marginHorizontal: 5,
            ...applyFor(params?.variant, {
                default: {
                    color: buttonColor
                },
                solid: {
                    color: palette.buttons?.textColor
                },
                outline: {
                    color: buttonColor
                }
            })
        },
        root: {
            alignItems: 'center',
            borderRadius: params?.rounded ? 20 : 5,
            flexDirection: 'row',
            justifyContent: 'center',
            marginHorizontal: 4,
            padding: 10,
            paddingHorizontal: params?.rounded ? 20 : 10,
            marginBottom: variables?.buttons?.marginBottom,
            backgroundColor: '#FFF',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 4,
            ...applyFor(params?.variant, {
                default: {},
                solid: {
                    backgroundColor: buttonColor
                },
                outline: {
                    borderWidth: 3,
                    borderColor: buttonColor
                }
            }),
            opacity: params?.disabled ? 0.4 : 1
        },
        text: {
            fontWeight: 'bold',
            ...applyFor(params?.variant, {
                default: {
                    color: buttonColor
                },
                solid: {
                    color: palette.buttons?.textColor
                },
                outline: {
                    color: buttonColor
                }
            })
        }
    }
}

export default styling
