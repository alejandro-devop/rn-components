import React from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import TextField from '../text-field'
import Icon from '../../icon'
import Dialog from '../../dialog'
import IconButton from '../../icon-button'
import { TextFieldProps } from '../text-field/types'
import { iconType } from '../../icon/types'
import classNames from '../../../utils/classNames'

interface IconPickerProps {}

const IconPicker: React.FC<IconPickerProps & TextFieldProps> = ({
    onChange,
    label,
    placeholder,
    name,
    value,
    ...props
}) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles)
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState('')
    const [selectedIcon, setSelected] = React.useState<any>(value)
    const toggleOpen = () => setOpen(!open)

    const onSelect = () => {
        if (onChange) {
            onChange({ name, value: selectedIcon })
        }
        setOpen(false)
    }

    const iconsToDisplay = React.useMemo(() => {
        let output = [...iconType]
        if (query && query.length > 0) {
            output = output.filter((item) => {
                const exp = new RegExp(`.*${query.toLocaleLowerCase()}.*`)
                return item.match(exp)
            })
        }
        return output
    }, [query, iconType])

    const displayStyles = {
        backgroundColor: selectedIcon
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
                    value={selectedIcon}
                />
                <TouchableOpacity onPress={toggleOpen} style={styling.displayColorWrapper}>
                    <View style={{ ...styling.displayColor, ...displayStyles }} />
                </TouchableOpacity>
                <TouchableOpacity style={styling.iconWrapper} onPress={toggleOpen}>
                    <Icon name="search" />
                </TouchableOpacity>
            </View>
            <Dialog open={open} onClose={toggleOpen} title={placeholder || label}>
                <TextField
                    autoCapitalize="none"
                    icon="search"
                    placeholder="Search for an icon"
                    onChange={({ value }) => setQuery(value as string)}
                    value={query}
                />
                <ScrollView>
                    <View style={styling.contentWrapper}>
                        {iconsToDisplay.map((item) => (
                            <TouchableOpacity
                                style={classNames(
                                    {
                                        iconListWrapper: true,
                                        selectedIconWrapper: item === selectedIcon
                                    },
                                    styling
                                )}
                                onPress={() => setSelected(item)}
                                key={`item-${item}`}
                            >
                                <Icon
                                    name={item}
                                    style={classNames(
                                        {
                                            selectedIcon: item === selectedIcon
                                        },
                                        styling
                                    )}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <View style={styling.actionsWrapper}>
                    <IconButton
                        onPress={onSelect}
                        icon="check"
                        variant="primary"
                        disabled={!selectedIcon}
                    />
                </View>
            </Dialog>
        </>
    )
}

export default IconPicker
