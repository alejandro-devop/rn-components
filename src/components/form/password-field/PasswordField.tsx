import React from 'react'
import TextField from '../text-field'
import { PasswordFieldProps } from './types'
import { TextFieldProps } from '../text-field/types'

const PasswordField: React.FC<TextFieldProps & PasswordFieldProps> = ({ label, ...otherProps }) => {
    const [opened, setOpened] = React.useState(false)
    const handleAction = () => setOpened(!opened)

    return (
        <TextField
            label={label}
            icon="lock"
            actionIcon={opened ? 'eye-slash' : 'eye'}
            onActionTriggered={handleAction}
            isPassword={!opened}
            {...otherProps}
        />
    )
}

export default PasswordField
