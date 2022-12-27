import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    root: ViewStyle
}

export type ParamsType = {
    contentPadding?: number
}

const styles: StyleDefType<StyleGuide, ParamsType> = ({ params }) => ({
    root: {
        flex: 1,
        padding: params?.contentPadding
    }
})

export default styles
