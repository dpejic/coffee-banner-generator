import classNames from 'classnames'

import { IInputDefaultProps } from '..'
import { TypographyWeight } from '../../Typography/Paragraph'

import { FontSize } from '~enums'

export interface ITextProps extends IInputDefaultProps, React.InputHTMLAttributes<HTMLInputElement> {
  weight?: TypographyWeight
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  wrapperClassName?: string
  id: string
}

const Text = ({
  value,
  weight = TypographyWeight.normal,
  fontSize = FontSize.normal,
  className,
  onChange,
  wrapperClassName,
  id,
  ...rest
}: ITextProps) => (
  <div className={classNames(wrapperClassName)}>
    <input
      type="text"
      className={classNames(
        'text-base border min-h-[45px] h-full border-custom-gray-200 focus-visible:border-custom-gray-200 focus-visible:outline-none rounded pl-2',
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

export { Text }
