import { StepCoffee } from '~enums'

export const stepTitleFactory = (step: StepCoffee) => {
  const stepTitle = {
    [StepCoffee.STEP1]: '1. Select your coffee',
    [StepCoffee.STEP2]: '2. Choose your width',
    [StepCoffee.STEP3]: '3. Customize title and description',
  }
  return stepTitle[step]
}
