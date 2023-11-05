import classNames from 'classnames'

export interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

const Image = ({ className, ...rest }: IImageProps) => <img className={classNames(className)} {...rest} />

export { Image }
