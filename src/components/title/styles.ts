import { StyleDefType, ViewStyle, TextStyle } from '@alejandro.dev/rn-themizer'

export type StyleGuide = {
    root: ViewStyle
    title: TextStyle
}

export type ParamsGiven = {
    size?: '1' | '2' | '3' | '4' | '5' | '6'
}

const styles: StyleDefType<StyleGuide, ParamsGiven> = ({ params, applyFor }) => ({
    root: {
        marginBottom: 10,
        paddingHorizontal: 10
    },
    title: {
        ...applyFor(params?.size, {
            '1': {
                fontSize: 32
            },
            '2': {
                fontSize: 28
            },
            '3': {
                fontSize: 24
            },
            '4': {
                fontSize: 20
            },
            '5': {
                fontSize: 16
            },
            '6': {
                fontSize: 12
            }
        })
    }
})

export default styles
