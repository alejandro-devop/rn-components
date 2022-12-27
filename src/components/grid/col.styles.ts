import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    root: ViewStyle
}

export type ParamsType = {
    colSize?: number
}

const styles: StyleDefType<StyleGuide, ParamsType> = ({ params }) => ({
    root: {
        flex: params?.colSize,
        marginHorizontal: 2
    }
})

export default styles
