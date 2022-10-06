import { StyleDefType, ViewStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    root: ViewStyle
}

export type ParamsType = {}

const styles: StyleDefType<StyleGuide, ParamsType> = ({}) => ({
    root: {
        paddingHorizontal: 20
    }
})

export default styles
