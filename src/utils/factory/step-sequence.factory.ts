import { StepCoffee } from '~enums'

export const stepSequenceFactory = (step: StepCoffee) => {
  const stepSequence = {
    [StepCoffee.STEP1]: StepCoffee.STEP2,
    [StepCoffee.STEP2]: StepCoffee.STEP3,
    [StepCoffee.STEP3]: StepCoffee.STEP3,
  }
  return stepSequence[step] || step
}
