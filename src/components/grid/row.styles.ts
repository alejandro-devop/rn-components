import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    root: ViewStyle
}

export type ParamsType = {
    rowMargin?: number
}

const styles: StyleDefType<StyleGuide, ParamsType> = ({ params }) => ({
    root: {
        marginBottom: params?.rowMargin,
        flexDirection: 'row',
        flexShrink: 1
    }
})

export default styles
