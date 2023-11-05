import classNames from 'classnames'

import { IButtonDefaultProps } from '..'
import { Typography, TypographyVariant } from '../../Typography'
import { TypographyWeight } from '../../Typography/Paragraph'

import { FontSize } from '~enums'

export interface IRadioProps extends IButtonDefaultProps, React.InputHTMLAttributes<HTMLInputElement> {
  weight?: TypographyWeight
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  wrapperClassName?: string
  id: string
  labelClassName?: string
}

const Radio = ({
  text,
  weight = TypographyWeight.normal,
  fontSize = FontSize.normal,
  className,
  onChange,
  wrapperClassName,
  labelClassName,
  value,
  id,
  ...rest
}: IRadioProps) => (
  <div className={classNames(wrapperClassName)}>
    <input
      type="radio"
      className={classNames('text-base cursor-pointer', weight, fontSize, className)}
      onChange={onChange}
      id={id}
      {...rest}
      value={value as string}
    />
    <Typography
      variant={TypographyVariant.label}
      htmlFor={id}
      text={text}
      className={classNames('cursor-pointer', labelClassName)}
    />
  </div>
)

export { Radio }
