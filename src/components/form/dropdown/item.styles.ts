import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    root: ViewStyle
    label: TextStyle
    radiusWrapper: ViewStyle
    radiusContent: ViewStyle
}

export type ParamsType = {
    active?: boolean
}

const styles: StyleDefType<StyleGuide, ParamsType> = ({ size, palette, applyIf, params }) => ({
    label: { fontSize: 18, flex: 1, marginLeft: 10 },
    radiusContent: {
        backgroundColor: palette.primaryColor,
        borderRadius: 100,
        ...size(18)
    },
    radiusWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.2)',
        ...applyIf(params?.active, {
            borderColor: palette.primaryColor
        }),
        ...size(25)
    },
    root: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 50,
        borderWidth: 1,
        marginBottom: 5,
        borderColor: 'rgba(0,0,0,0.2)'
    }
})

export default styles
