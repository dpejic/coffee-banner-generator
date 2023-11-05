import { TypographyWeight } from 'src/components/atoms/Typography/Paragraph'

import { Typography, TypographyVariant } from '~atoms'
import { FontSize } from '~enums'
import { useCoffeeContext } from '~hooks'
import { stepTitleFactory } from '~utils'

const StepCardHeader = () => {
  const {
    state: { step },
  } = useCoffeeContext()

  return (
    <header className="bg-primary h-[56px] px-6 py-4 border rounded-t-lg">
      <Typography
        variant={TypographyVariant.p}
        text={stepTitleFactory(step)}
        className="text-white"
        weight={TypographyWeight.semiBold}
        fontSize={FontSize.largexl}
      />
    </header>
  )
}

export { StepCardHeader }
