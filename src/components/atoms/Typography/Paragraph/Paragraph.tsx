import classNames from 'classnames'

import { ITypographyDefaultProps } from '..'

import { FontSize, FontWeight } from '~enums'

export enum TypographyWeight {
  normal = FontWeight.normal,
  semiBold = FontWeight.semiBold,
  medium = FontWeight.medium,
  light = FontWeight.light,
  bold = FontWeight.bold,
}

export interface IParagraphProps extends ITypographyDefaultProps {
  weight?: TypographyWeight
}

const Paragraph = ({
  text,
  weight = TypographyWeight.normal,
  fontSize = FontSize.normal,
  className,
}: IParagraphProps) => <p className={classNames('text-primary', weight, fontSize, className)}>{text}</p>

export { Paragraph }
