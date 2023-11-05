import classNames from 'classnames'

import { IButtonDefaultProps } from '..'
import { TypographyWeight } from '../../Typography/Paragraph'

import { IconPosition } from '~enums'

export enum ButtonComponentVariant {
  primary = 'primary',
  secondary = 'secondary',
  none = 'none',
}

export enum ButtonSize {
  default = 'default',
}

export interface IButtonComponentProps extends IButtonDefaultProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  weight?: TypographyWeight
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  componentVariant?: ButtonComponentVariant
  textClassName?: string
}

const primaryButtonStyles = 'bg-custom-blue text-white'
const secondaryButtonStyles = 'bg-custom-gray-400 text-white'

const Button = ({
  text,
  weight = TypographyWeight.normal,
  className,
  type,
  onClick,
  componentVariant = ButtonComponentVariant.primary,
  icon,
  fontSize,
  iconPosition,
  textClassName,
  ...rest
}: IButtonComponentProps) => (
  <button
    type={type}
    className={classNames(
      'text-base py-3 px-8 hover:opacity-90 rounded-lg',
      {
        [primaryButtonStyles]: componentVariant === ButtonComponentVariant.primary,
        [secondaryButtonStyles]: componentVariant === ButtonComponentVariant.secondary,
      },
      icon && 'flex items-center space-x-2',
      className,
    )}
    onClick={onClick}
    {...rest}
  >
    {icon && iconPosition === IconPosition.LEFT && icon}
    <span className={classNames(weight, fontSize, textClassName)}>{text}</span>
    {icon && iconPosition === IconPosition.RIGHT && icon}
  </button>
)

export { Button }
