import classNames from 'classnames'

import { IInputDefaultProps } from '..'
import { TypographyWeight } from '../../Typography/Paragraph'

import { FontSize } from '~enums'

export interface INumberProps extends IInputDefaultProps, React.InputHTMLAttributes<HTMLInputElement> {
  weight?: TypographyWeight
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  wrapperClassName?: string
  id: string
}

const Number = ({
  value,
  weight = TypographyWeight.normal,
  fontSize = FontSize.normal,
  className,
  onChange,
  wrapperClassName,
  id,
  ...rest
}: INumberProps) => (
  <div className={classNames(wrapperClassName)}>
    <input
      type="number"
      className={classNames(
        'text-base border h-[45px] border-custom-gray-200 focus-visible:border-custom-gray-200 focus-visible:outline-none rounded pl-2',
        weight,
        fontSize,
        className,
      )}
      onChange={onChange}
      id={id}
      {...rest}
      value={value as string}
    />
  </div>
)

export { Number }
