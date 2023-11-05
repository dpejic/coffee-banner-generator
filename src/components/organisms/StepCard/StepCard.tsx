import classNames from 'classnames'

import { IStepCardProps } from './StepCard.types'

import { StepCardFooter, StepCardHeader, StepCardMainContent } from '~atoms'

const StepCard = ({ className }: IStepCardProps) => {
  return (
    <section className={classNames('w-full max-w-[834px] h-max shadow-md rounded-b-lg', className)}>
      <StepCardHeader />
      <div className="px-4 py-5">
        <StepCardMainContent />
        <StepCardFooter />
      </div>
    </section>
  )
}

export { StepCard }
