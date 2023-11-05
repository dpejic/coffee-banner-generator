import { Link } from 'react-router-dom'

import { Image, Typography, TypographyVariant } from '~atoms'
import { FontSize } from '~enums'

const Header = () => {
  return (
    <header className="bg-custom-gray-400 h-[180px] w-full">
      <div className="grid grid-flow-col items-center justify-between max-w-[1440px] mx-auto">
        <Link to="/">
          <Image src="/assets/images/logo.png" alt="Ocean Think IT" className="pl-6 py-10 h-[180px]" />
        </Link>
        <Typography
          text="Coffee Banner Generator"
          variant={TypographyVariant.p}
          fontSize={FontSize.large3xl}
          className="!text-white pr-7"
        />
      </div>
    </header>
  )
}

export { Header }
