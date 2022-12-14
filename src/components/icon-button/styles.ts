import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'

export type StyleGuide = {
    root: ViewStyle
    icon: FontAwesomeIconStyle
}

export type ParamsType = {
    variant?: 'primary' | 'secondary' | 'default'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
}

const styles: StyleDefType<StyleGuide, ParamsType> = ({
    params,
    size,
    palette,
    applyFor,
    applyIf
}) => ({
    icon: {
        ...applyFor(params?.variant, {
            primary: {
                color: '#FFF'
            },
            secondary: {
                color: '#FFF'
            }
        })
    },
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: palette.buttons?.default,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        marginHorizontal: 5,
        elevation: 4,
        ...applyFor(params?.size, {
            sm: {
                ...size(35)
            },
            md: {
                ...size(48)
            },
            lg: {
                ...size(60)
            }
        }),
        ...applyFor(params?.variant, {
            primary: {
                backgroundColor: palette.primaryColor
            },
            secondary: {
                backgroundColor: palette.secondaryColor
            }
        }),
        ...applyIf(params?.disabled, {
            backgroundColor: 'rgba(0,0,0,0.8)',
            opacity: 0.2
        })
    }
})

export default styles
