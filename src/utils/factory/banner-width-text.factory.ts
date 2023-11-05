import { BannerWidthType } from '~enums'

export const bannerWidthTextFactory = (bannerType: BannerWidthType) => {
  switch (bannerType) {
    case BannerWidthType.SMALL:
      return '160px'
    case BannerWidthType.MEDIUM:
      return '300px'
    case BannerWidthType.LARGE:
      return '100%'
    case BannerWidthType.CUSTOM:
      return 'custom'
  }
}
