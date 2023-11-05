import { InputTypes } from './Step3.types'

import { Input, InputVariant, Typography, TypographyVariant } from '~atoms'
import { CoffeeContextActionType } from '~contexts'
import { useCoffeeContext } from '~hooks'

const StepCardStep3 = () => {
  const { state, dispatch } = useCoffeeContext()

  const handleInputTextChange = (type: InputTypes, value: string) => {
    switch (type) {
      case InputTypes.TITLE:
        dispatch({ type: CoffeeContextActionType.SET_TITLE, payload: value })
        break
      case InputTypes.DESCRIPTION:
        dispatch({ type: CoffeeContextActionType.SET_DESCRIPTION, payload: value })
        break
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <Typography
          variant={TypographyVariant.label}
          htmlFor="card-title"
          text="Title:"
          className="!text-custom-gray-300"
        />
        <Input
          wrapperClassName="flex items-center space-x-2"
          className="text-custom-gray-300 w-full"
          variant={InputVariant.text}
          value={state.title}
          name="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputTextChange(InputTypes.TITLE, e?.currentTarget?.value as string)
          }}
          id="card-title"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <Typography
          variant={TypographyVariant.label}
          htmlFor="card-description"
          text="Description:"
          className="!text-custom-gray-300"
        />
        <Input
          wrapperClassName="flex items-center space-x-2 w-full"
          className="text-custom-gray-300 w-full pt-2 !min-h-[120px] !h-full"
          variant={InputVariant.textarea}
          value={state.description}
          name="description"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputTextChange(InputTypes.DESCRIPTION, e?.currentTarget?.value as string)
          }}
          cols={4}
          id="card-description"
        />
      </div>
    </div>
  )
}

export { StepCardStep3 }
