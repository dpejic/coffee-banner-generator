import { StepCoffee } from '~enums'

export const stepFooterButtonSteps = (step: StepCoffee) => {
  const title = {
    [StepCoffee.STEP1]: 'Next',
    [StepCoffee.STEP2]: 'Next',
    [StepCoffee.STEP3]: 'View and copy code',
  }
  return title[step]
}
