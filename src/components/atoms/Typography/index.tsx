import React, { ReactNode } from 'react'

import { Heading } from './Heading'
import { ILabelProps, Label } from './Label'
import { IParagraphProps, Paragraph, TypographyWeight } from './Paragraph'

import { FontSize } from '~enums'

export { TypographyWeight }

export enum TypographyVariant {
  label = 'label',
  link = 'link',
  p = 'p',
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export interface ITypographyDefaultProps {
  text: ReactNode | string
  className?: string
  fontSize?: FontSize
}

export interface ITypographyProps extends ITypographyDefaultProps, ILabelProps, IParagraphProps {
  variant: TypographyVariant
}

const TypographyVariantComponent = React.memo(({ text, variant, ...props }: ITypographyProps) => {
  switch (variant) {
    case TypographyVariant.h1:
    case TypographyVariant.h2:
    case TypographyVariant.h3:
    case TypographyVariant.h4:
    case TypographyVariant.h5:
    case TypographyVariant.h6:
      return <Heading text={text} variant={variant} {...props} />

    case TypographyVariant.p:
      return <Paragraph text={text} {...props} />

    case TypographyVariant.label:
      return <Label text={text} {...props} />

    default:
      return <span>{text}</span>
  }
})

const Typography = ({ text, variant, ...props }: ITypographyProps): JSX.Element => (
  <TypographyVariantComponent text={text} variant={variant} {...props} />
)

TypographyVariantComponent.displayName = 'Typography'

export { Typography }
