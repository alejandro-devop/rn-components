import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'
import { FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome'

export type StyleGuide = {
    root: ViewStyle
    icon: FontAwesomeIconStyle
}

export type ParamsType = {
    variant?: 'primary' | 'secondary' | 'default'
    size?: 'sm' | 'md' | 'lg'
}

const styles: StyleDefType<StyleGuide, ParamsType> = ({ params, size, palette, applyFor }) => ({
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
        ...applyFor(params?.size, {
            sm: {
                ...size(35)
            },
            md: {
                ...size(50)
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
        })
    }
})

export default styles
