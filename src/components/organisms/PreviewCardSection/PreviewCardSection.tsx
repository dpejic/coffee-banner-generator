import classNames from 'classnames'

import { IPreviewCardProps } from './PreviewCardSection.types'

import { Typography, TypographyVariant, TypographyWeight } from '~atoms'
import { PreviewCard } from '~molecules'

const PreviewCardSection = ({ className }: IPreviewCardProps) => {
  return (
    <section className={classNames('w-full max-w-[475px] h-auto shadow-md rounded-b-lg p-5', className)}>
      <Typography
        variant={TypographyVariant.p}
        text="Preview:"
        weight={TypographyWeight.bold}
        className="!text-custom-blue"
      />
      <div className="px-11 py-6">
        <PreviewCard />
      </div>
    </section>
  )
}

export { PreviewCardSection }
