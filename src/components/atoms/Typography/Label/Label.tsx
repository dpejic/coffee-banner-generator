import classNames from 'classnames'

import { ITypographyDefaultProps } from '..'

import { FontSize, FontWeight, Status } from '~enums'

export interface ILabelProps extends ITypographyDefaultProps, React.LabelHTMLAttributes<HTMLLabelElement> {
  status?: Status
  htmlFor?: string
  fontSize?: FontSize
  fontWeight?: FontWeight
}

const Label = ({
  text = '',
  status = Status.default,
  fontSize = FontSize.normal,
  className,
  fontWeight = FontWeight.normal,
  ...rest
}: ILabelProps): JSX.Element => {
  const textColorClass = `text-${status}-color`

  return (
    <label className={classNames(fontSize, textColorClass, fontWeight, className)} {...rest}>
      {text}
    </label>
  )
}

export { Label }
