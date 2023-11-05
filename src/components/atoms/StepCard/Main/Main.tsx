import { MainFactory } from './Main.factory'

import { useCoffeeContext } from '~hooks'

const StepCardMainContent = () => {
  const {
    state: { step },
  } = useCoffeeContext()

  return (
    <main>
      <MainFactory step={step} />
    </main>
  )
}

export { StepCardMainContent }
