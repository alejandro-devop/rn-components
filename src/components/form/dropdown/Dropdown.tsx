import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import TextField from '../text-field'
import Icon from '../../icon'
import Dialog from '../../dialog'
import ListRenderer from './ListRenderer'
import IconButton from '../../icon-button'
import { TextFieldProps } from '../../../components/form/text-field/types'

interface DropDownProps {
    options: { value: any; label: string }[]
}

const DropDown: React.FC<DropDownProps & TextFieldProps> = ({
    options,
    onChange,
    label,
    name,
    placeholder,
    ...props
}) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles)
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(null)
    const [displayLabel, setDisplayLabel] = React.useState<string | undefined>()
    const toggleOpen = () => setOpen(!open)

    const onSelect = () => {
        // handle on change
        const itemLabel = options.find((item) => item.value === selected)
        setDisplayLabel(itemLabel?.label)
        if (onChange) {
            onChange({ name, value: selected as any })
        }
        setOpen(false)
    }

    return (
        <>
            <View style={styling.root}>
                <TextField
                    label={label}
                    placeholder={placeholder}
                    {...props}
                    onlyMask
                    onPress={toggleOpen}
                    value={displayLabel}
                />
                <TouchableOpacity style={styling.iconWrapper}>
                    <Icon name="chevron-down" />
                </TouchableOpacity>
            </View>
            <Dialog open={open} onClose={toggleOpen} title={placeholder || label}>
                <ListRenderer
                    onSelctItem={(item: any) => setSelected(item)}
                    selectedValue={selected}
                    options={options}
                />
                <View style={styling.actionsWrapper}>
                    <IconButton
                        onPress={onSelect}
                        icon="check"
                        variant="primary"
                        disabled={!selected}
                    />
                </View>
            </Dialog>
        </>
    )
}

export default DropDown
