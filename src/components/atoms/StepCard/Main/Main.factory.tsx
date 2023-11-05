import { StepCoffee } from '~enums'
import { StepCardStep1, StepCardStep2, StepCardStep3 } from '~molecules'

const MainFactory = ({ step }: { step: StepCoffee }) => {
  const stepComponentMap = {
    [StepCoffee.STEP1]: <StepCardStep1 />,
    [StepCoffee.STEP2]: <StepCardStep2 />,
    [StepCoffee.STEP3]: <StepCardStep3 />,
  }

  return stepComponentMap[step]
}

export { MainFactory }
