import { IIconDefaultProps } from '../..'

const IconCoder = ({ width = 24, height = 24, className, fill, ...rest }: IIconDefaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      {...rest}
    >
      <path
        id="Vector"
        d="M5 1L1 5L5 9M15 1L19 5L15 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { IconCoder }
