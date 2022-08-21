import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer'
import { ButtonColors, ButtonPlacements, ButtonSizes, ButtonVariants } from './types'

export type StyleGuide = {
    root: ViewStyle
    text: TextStyle
}

export type ParamsGiven = {
    disabled?: boolean
    color?: ButtonColors
    variant?: ButtonVariants
    size?: ButtonSizes
    iconPlacement?: ButtonPlacements
}

const styling: StyleDefType<StyleGuide, ParamsGiven> = ({
    palette,
    params,
    applyFor,
    valueFor
}) => {
    return {
        root: {
            padding: 10,
            borderRadius: 5,
            marginHorizontal: 4,
            ...applyFor(params?.variant, {
                default: {},
                solid: {
                    backgroundColor: valueFor(params?.color, {
                        primary: palette.buttons?.primaryColor,
                        secondary: palette.buttons?.secondaryColor,
                        success: palette.success,
                        warning: palette.warning,
                        danger: palette.danger,
                        info: palette.info,
                        _default: palette.buttons?.default
                    })
                },
                outline: {
                    borderWidth: 2,
                    borderColor: valueFor(params?.color, {
                        primary: palette.buttons?.primaryColor,
                        secondary: palette.buttons?.secondaryColor,
                        success: palette.success,
                        warning: palette.warning,
                        danger: palette.danger,
                        info: palette.info,
                        _default: palette.buttons?.default
                    })
                }
            }),
            opacity: params?.disabled ? 0.4 : 1
        },
        text: {
            fontWeight: 'bold',
            ...applyFor(params?.variant, {
                default: {
                    color: valueFor(params?.color, {
                        primary: palette.buttons?.primaryColor,
                        secondary: palette.buttons?.secondaryColor,
                        success: palette.success,
                        warning: palette.warning,
                        danger: palette.danger,
                        info: palette.info,
                        _default: palette.buttons?.defaultTextColor
                    })
                },
                solid: {
                    color: palette.buttons?.textColor
                },
                outline: {
                    color: valueFor(params?.color, {
                        primary: palette.buttons?.primaryColor,
                        secondary: palette.buttons?.secondaryColor,
                        success: palette.success,
                        warning: palette.warning,
                        danger: palette.danger,
                        info: palette.info,
                        _default: palette.buttons?.defaultTextColor
                    })
                }
            })
        }
    }
}

export default styling
