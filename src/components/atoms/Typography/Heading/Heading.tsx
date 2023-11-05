import classNames from 'classnames'

import { ITypographyDefaultProps, TypographyVariant } from '..'

import { FontSize } from '~enums'

export interface IHeadingProps extends ITypographyDefaultProps {
  variant: TypographyVariant
}

const Heading = ({ text, className, fontSize = FontSize.normal, variant, ...props }: IHeadingProps) => {
  const Tag = variant as unknown as keyof JSX.IntrinsicElements

  return (
    <Tag className={classNames('text-primary', fontSize, className)} {...props}>
      {text}
    </Tag>
  )
}

export { Heading }
