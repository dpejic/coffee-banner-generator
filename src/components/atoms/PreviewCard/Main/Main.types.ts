import { BannerWidthType } from '~enums'

export interface IPreviewCardMainProps {
  description: string
  image: string
  ingredients: string[]
  width: number
  widthType: BannerWidthType | null
}
