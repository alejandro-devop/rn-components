import { IconNameType } from '../icon/types'

export type ButtonColors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonPlacements = 'left' | 'right'
export type ButtonSizes = 'small' | 'medium' | 'large'
export type ButtonVariants = 'default' | 'solid' | 'outline'

export interface ButtonProps {
    children: React.ReactNode
    color?: ButtonColors
    disabled?: boolean
    icon?: IconNameType
    iconPlacement?: ButtonPlacements
    size?: ButtonSizes
    variant?: ButtonVariants
    rounded?: boolean
    onPress?: () => void
}
