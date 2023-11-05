import { StepCoffee } from '~enums'

export const stepFooterButtonSteps = (step: StepCoffee) => {
  const title = {
    [StepCoffee.STEP1]: 'Next step',
    [StepCoffee.STEP2]: 'Next step',
    [StepCoffee.STEP3]: 'View and copy code',
  }
  return title[step]
}
