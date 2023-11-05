import { IconBack, IconClose, IconCoder, IconCopy } from './Pack'

export enum IconVariant {
  back = 'back',
  coder = 'coder',
  close = 'close',
  copy = 'copy',
}

export interface IIconDefaultProps extends React.SVGAttributes<SVGElement> {
  className?: string
  width?: number
  height?: number
  fill: string
}

type IconPropsWithType<V extends IconVariant> = IIconDefaultProps & { variant: V }

const IconVariantComponent = ({ variant, ...props }: IconPropsWithType<IconVariant>) => {
  switch (variant) {
    case IconVariant.back:
      return <IconBack {...props} />

    case IconVariant.coder:
      return <IconCoder {...props} />

    case IconVariant.close:
      return <IconClose {...props} />

    case IconVariant.copy:
      return <IconCopy {...props} />
  }
}

const Icon = ({ variant, ...props }: IconPropsWithType<IconVariant>): JSX.Element => (
  <IconVariantComponent variant={variant} {...props} />
)

IconVariantComponent.displayName = 'Icon'

export { Icon }
