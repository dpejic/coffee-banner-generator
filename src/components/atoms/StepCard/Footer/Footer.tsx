import { useState } from 'react'

import { ButtonComponentVariant } from '../../Buttons/Button'
import { TypographyWeight } from '../../Typography/Paragraph'

import { Button, ButtonVariant, Icon, IconVariant } from '~atoms'
import { CoffeeContextActionType } from '~contexts'
import { IconPosition, StepCoffee } from '~enums'
import { useCoffeeContext } from '~hooks'
import { ViewCodeModal } from '~molecules'
import { stepFooterButtonSteps, stepSequenceFactory } from '~utils'

const StepCardFooter = () => {
  const { state, dispatch } = useCoffeeContext()
  const [openModal, setOpenModal] = useState(false)

  const handleNextStep = () => {
    if (state.step === StepCoffee.STEP3) {
      createCode()
      return
    }
    const nextStep = stepSequenceFactory(state.step)

    dispatch({ type: CoffeeContextActionType.SET_STEP, payload: nextStep })
  }

  const startOver = () => {
    dispatch({ type: CoffeeContextActionType.RESET_ALL })
  }

  const createCode = () => {
    setOpenModal(true)
  }

  const onCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <footer className="flex justify-end pt-7">
      {openModal && <ViewCodeModal openModal={openModal} onClose={onCloseModal} />}
      {state.step === StepCoffee.STEP3 && (
        <Button
          variant={ButtonVariant.button}
          text="Start Over"
          weight={TypographyWeight.semiBold}
          icon={<Icon variant={IconVariant.back} fill={'none'} />}
          iconPosition={IconPosition.RIGHT}
          textClassName="text-custom-gray-500"
          componentVariant={ButtonComponentVariant.none}
          className="hover:bg-custom-gray-200 mr-auto"
          onClick={startOver}
        />
      )}
      <Button variant={ButtonVariant.button} text={stepFooterButtonSteps(state.step)} onClick={handleNextStep} />
    </footer>
  )
}

export { StepCardFooter }
