import { IIconDefaultProps } from '../..'

const IconClose = ({ width = 24, height = 24, className, fill, ...rest }: IIconDefaultProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}`}
      height={`${height}`}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      {...rest}
    >
      <g id="tabler-icon-x">
        <path
          id="Vector"
          d="M18 6L6 18M6 6L18 18"
          stroke="#696969"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export { IconClose }
