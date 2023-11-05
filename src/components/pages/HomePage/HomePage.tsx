import { StepCoffee } from '~enums'
import { useCoffeeContext } from '~hooks'
import { HeroTypographyGroup } from '~molecules'
import { PreviewCardSection, StepCard } from '~organisms'

const HomePage = () => {
  const {
    state: { step },
  } = useCoffeeContext()

  return (
    <>
      <HeroTypographyGroup />
      <div className="flex mt-11 space-x-20">
        <StepCard />
        {step === StepCoffee.STEP3 && <PreviewCardSection />}
      </div>
    </>
  )
}

export { HomePage }
