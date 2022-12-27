import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    label: TextStyle
    labelWrapper: ViewStyle
}

export type ParamsType = {
    primary?: boolean
    secondary?: boolean
    spacingBottom?: boolean
}

const styles: StyleDefType<StyleGuide, ParamsType> = ({ fromVars, applyIf, palette, params }) => ({
    labelWrapper: {
        marginBottom: params?.spacingBottom ? 5 : 0,
        paddingHorizontal: fromVars('textField.label.paddingHorizontal', 10)
    },
    label: {
        fontSize: fromVars('textField.label.fontSize', 18),
        color: palette?.textPrimaryColor,
        ...applyIf(params?.primary, {
            fontWeight: fromVars('textField.label.fontWeight', '600'),
            color: palette?.primaryColor
        }),
        ...applyIf(params?.secondary, {
            fontWeight: fromVars('textField.label.fontWeight', '600'),
            color: palette?.secondaryColor
        })
    }
})

export default styles
