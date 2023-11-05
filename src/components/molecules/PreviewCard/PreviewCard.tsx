import { PreviewCardHeader, PreviewCardMain, PreviewCardSkeleton } from '~atoms'
import { BannerWidthType } from '~enums'
import { useCoffeeContext } from '~hooks'
import { bannerWidthTextFactory, extractNumberFromConcatenatedString } from '~utils'

const PreviewCard = () => {
  const {
    state: { coffee, selectedWidth, customWidth, title, description },
  } = useCoffeeContext()

  if (!coffee) {
    return <PreviewCardSkeleton />
  }

  const bannerWidth =
    selectedWidth === BannerWidthType.CUSTOM
      ? `${customWidth}px`
      : bannerWidthTextFactory(selectedWidth || BannerWidthType.MEDIUM)

  const bannerWidthNumber = extractNumberFromConcatenatedString(bannerWidth)

  return (
    <section
      style={{
        border: '1px solid #9A9A9F',
        width: bannerWidth,
      }}
      id="code-block"
    >
      <PreviewCardHeader title={title} />
      <PreviewCardMain
        description={description}
        image={coffee.image}
        ingredients={coffee.ingredients}
        width={bannerWidthNumber || 300}
        widthType={selectedWidth}
      />
    </section>
  )
}

export { PreviewCard }
