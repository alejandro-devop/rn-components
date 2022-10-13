import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import TextField from '../text-field'
import Icon from '../../icon'
import Dialog from '../../dialog'
import IconButton from '../../icon-button'
import { TextFieldProps } from '../../../components/form/text-field/types'
import ColorPickerBase from 'react-native-wheel-color-picker'

interface ColorPickerProps {}

const ColorPicker: React.FC<ColorPickerProps & TextFieldProps> = ({
    onChange,
    label,
    placeholder,
    name,
    value,
    ...props
}) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles)
    const [open, setOpen] = React.useState(false)
    const [selectedColor, setSelectedColor] = React.useState<any>(value)
    const ref = React.useRef(null)
    const toggleOpen = () => setOpen(!open)

    const onSelect = () => {
        if (onChange) {
            onChange({ name, value: selectedColor })
        }
        setOpen(false)
    }

    const onColorChange = (color: string) => {
        setSelectedColor(color)
    }

    const displayStyles = {
        backgroundColor: selectedColor
    }
    const generateRandomColor = React.useCallback(() => {
        let maxVal = 0xffffff // 16777215
        let randomNumber = Math.random() * maxVal
        randomNumber = Math.floor(randomNumber)
        const parsedNumber = randomNumber.toString(16)
        let randColor = parsedNumber.padStart(6)
        return `#${randColor.toUpperCase()}`
    }, [])

    React.useEffect(() => {
        if (!selectedColor) {
            const generatedColor = generateRandomColor()
            setSelectedColor(generatedColor)
            console.log('Generated color: ', generatedColor)
            if (onChange) {
                onChange({ name, value: generatedColor })
            }
        }
    }, [selectedColor])

    return (
        <>
            <View style={styling.root}>
                <TextField
                    label={label}
                    placeholder={placeholder}
                    {...props}
                    onlyMask
                    onPress={toggleOpen}
                    value={selectedColor}
                />
                <TouchableOpacity onPress={toggleOpen} style={styling.displayColorWrapper}>
                    <View style={{ ...styling.displayColor, ...displayStyles }} />
                </TouchableOpacity>
                <TouchableOpacity style={styling.iconWrapper} onPress={toggleOpen}>
                    <Icon name="palette" />
                </TouchableOpacity>
            </View>
            <Dialog open={open} onClose={toggleOpen} title={placeholder || label}>
                <View style={styling.contentWrapper}>
                    <TextField onlyMask value={selectedColor} />
                    {open && (
                        <ColorPickerBase
                            ref={ref}
                            color={selectedColor}
                            onColorChange={onColorChange}
                            thumbSize={40}
                            sliderSize={40}
                            noSnap={true}
                            row={false}
                        />
                    )}
                </View>
                <View style={styling.actionsWrapper}>
                    <IconButton
                        onPress={onSelect}
                        icon="check"
                        variant="primary"
                        disabled={!selectedColor}
                    />
                </View>
            </Dialog>
        </>
    )
}

export default ColorPicker
