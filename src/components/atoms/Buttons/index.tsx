import { ReactNode } from 'react'

import { Button as ButtonComponent, ButtonComponentVariant, ButtonSize, IButtonComponentProps } from './Button/Button'
import { IRadioProps, Radio } from './Radio/Radio'

import { FontSize, IconPosition } from '~enums'

export { ButtonComponentVariant, ButtonSize }

export enum ButtonVariant {
  button = 'button',
  radio = 'radio',
}

export interface IButtonDefaultProps {
  text: ReactNode | string
  className?: string
  fontSize?: FontSize
  icon?: ReactNode
  iconPosition?: IconPosition
}

type ButtonProps<V extends ButtonVariant> = V extends ButtonVariant.button
  ? IButtonDefaultProps & IButtonComponentProps
  : V extends ButtonVariant.radio
  ? IButtonDefaultProps & IRadioProps
  : IButtonDefaultProps

type ButtonPropsWithType<V extends ButtonVariant> = ButtonProps<V> & { variant: V }

const ButtonVariantComponent = ({ variant, icon, iconPosition, ...props }: ButtonPropsWithType<ButtonVariant>) => {
  switch (variant) {
    case ButtonVariant.button:
      return <ButtonComponent icon={icon} iconPosition={iconPosition} {...(props as IButtonComponentProps)} />

    case ButtonVariant.radio:
      return <Radio {...(props as IRadioProps)} />
  }
}

const Button = ({
  text,
  variant,
  icon,
  iconPosition = IconPosition.LEFT,
  ...props
}: ButtonPropsWithType<ButtonVariant>): JSX.Element => (
  <ButtonVariantComponent icon={icon} iconPosition={iconPosition} text={text} variant={variant} {...props} />
)

ButtonVariantComponent.displayName = 'Button'

export { Button }
