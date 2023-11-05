import { useState } from 'react'

import { Button, ButtonVariant, Input, InputVariant, Typography, TypographyVariant } from '~atoms'
import { CoffeeContextActionType } from '~contexts'
import { BannerWidthType } from '~enums'
import { useCoffeeContext } from '~hooks'
import { bannerWidthTextFactory, extractNumberFromConcatenatedString } from '~utils'

const StepCardStep2 = () => {
  const { state, dispatch } = useCoffeeContext()
  const [width, setWidth] = useState<string>('')

  const handleRadioChange = (type: BannerWidthType) => {
    dispatch({ type: CoffeeContextActionType.SELECT_WIDTH, payload: type })

    if (state.selectedCoffeeType !== null) {
      dispatch({ type: CoffeeContextActionType.SELECT_COFFEE, payload: null })
    }
  }

  const handleCustomWidthChange = (value: string) => {
    setWidth(value)

    dispatch({
      type: CoffeeContextActionType.SET_CUSTOM_WIDTH,
      payload: extractNumberFromConcatenatedString(value) || 0,
    })

    if (state.selectedWidth === null) {
      dispatch({ type: CoffeeContextActionType.SELECT_WIDTH, payload: null })
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex space-x-4">
        <Button
          wrapperClassName="flex items-center pl-2.5 space-x-2 h-[180px] bg-custom-gray-100 rounded-lg w-[13%]"
          className="text-custom-gray-300"
          labelClassName="text-custom-gray-300"
          variant={ButtonVariant.radio}
          text={bannerWidthTextFactory(BannerWidthType.SMALL)}
          value={BannerWidthType.SMALL}
          defaultChecked={state.selectedWidth === BannerWidthType.SMALL}
          name="banner-width"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleRadioChange(e?.currentTarget?.value as BannerWidthType)
          }}
          id="select-width-160"
        />

        <Button
          wrapperClassName="flex items-center pl-2.5 space-x-2 h-[180px] bg-custom-gray-100 rounded-lg w-4/12"
          className="text-custom-gray-300"
          labelClassName="text-custom-gray-300"
          variant={ButtonVariant.radio}
          text={bannerWidthTextFactory(BannerWidthType.MEDIUM)}
          value={BannerWidthType.MEDIUM}
          defaultChecked={state.selectedWidth === BannerWidthType.MEDIUM}
          name="banner-width"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleRadioChange(e?.currentTarget?.value as BannerWidthType)
          }}
          id="select-width-300"
        />

        <Button
          wrapperClassName="flex items-center pl-2.5 space-x-2 h-[180px] bg-custom-gray-100 rounded-lg w-7/12"
          className="text-custom-gray-300"
          labelClassName="text-custom-gray-300"
          variant={ButtonVariant.radio}
          text={bannerWidthTextFactory(BannerWidthType.LARGE)}
          defaultChecked={state.selectedWidth === BannerWidthType.LARGE}
          value={BannerWidthType.LARGE}
          name="banner-width"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleRadioChange(e?.currentTarget?.value as BannerWidthType)
          }}
          id="select-width-full"
        />
      </div>
      <div className="mt-4 flex space-x-6 ml-5">
        <Button
          wrapperClassName="flex items-center space-x-2"
          className="text-custom-gray-300"
          labelClassName="text-custom-gray-300"
          variant={ButtonVariant.radio}
          text={bannerWidthTextFactory(BannerWidthType.CUSTOM)}
          defaultChecked={state.selectedWidth === BannerWidthType.CUSTOM}
          value={BannerWidthType.CUSTOM}
          name="banner-width"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleRadioChange(e?.currentTarget?.value as BannerWidthType)
          }}
          id="select-width-custom"
        />
        <div className="flex space-x-3 items-center">
          <Input
            wrapperClassName="flex items-center space-x-2"
            className="text-custom-gray-300 w-[96px]"
            variant={InputVariant.text}
            value={width}
            name="banner-width"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleCustomWidthChange(e?.currentTarget?.value as string)
            }}
            pattern="[0-9]*"
            id="custom-width"
          />
          <Typography variant={TypographyVariant.p} text="px" className="!text-custom-gray-300" />
        </div>
      </div>
    </div>
  )
}

export { StepCardStep2 }
