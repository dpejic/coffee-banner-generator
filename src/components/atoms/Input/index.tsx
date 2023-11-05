import { INumberProps, Number } from './Number/Number'
import { ITextProps, Text } from './Text/Text'
import { ITextAreaProps, TextArea } from './TextArea/TextArea'

import { FontSize } from '~enums'

export enum InputVariant {
  text = 'text',
  textarea = 'textarea',
  number = 'number',
}

export interface IInputDefaultProps {
  className?: string
  fontSize?: FontSize
}

type InputProps<V extends InputVariant> = V extends InputVariant.textarea
  ? IInputDefaultProps & ITextAreaProps
  : V extends InputVariant.text
  ? IInputDefaultProps & ITextProps
  : V extends InputVariant.number
  ? IInputDefaultProps & INumberProps
  : IInputDefaultProps

type InputPropsWithType<V extends InputVariant> = InputProps<V> & { variant: V }

const InputVariantComponent = ({ variant, ...props }: InputPropsWithType<InputVariant>) => {
  switch (variant) {
    case InputVariant.textarea:
      return <TextArea {...(props as ITextAreaProps)} />

    case InputVariant.text:
      return <Text {...(props as ITextProps)} />

    case InputVariant.number:
      return <Number {...(props as INumberProps)} />
  }
}

const Input = ({ value, variant, ...props }: InputPropsWithType<InputVariant>): JSX.Element => (
  <InputVariantComponent value={value} variant={variant} {...props} />
)

InputVariantComponent.displayName = 'Input'

export { Input }
