import { Typography, TypographyVariant } from '~atoms'
import { FontSize } from '~enums'

const HeroTypographyGroup = () => {
  return (
    <>
      <Typography
        text="Welcome to the ThinkIT Coffee Banner Generator"
        variant={TypographyVariant.h1}
        fontSize={FontSize.large2xl}
        className="mt-5"
      />
      <Typography
        text="With this tool you are able to quickly craft your ideal coffee banner! Choose your blend and customize every detail for a a captivating brew display."
        variant={TypographyVariant.h2}
        className="mt-5"
      />
      <Typography
        text="Simply complete the three easy steps below, and see your preview update as you go. Then view, copy and paste."
        variant={TypographyVariant.h2}
        fontSize={FontSize.large}
        className="mt-5"
      />
    </>
  )
}

export { HeroTypographyGroup }
