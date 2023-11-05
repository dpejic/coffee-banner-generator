import { MainFactory } from './Main.factory'

import { useCoffeeContext } from '~hooks'

const StepCardMainContent = () => {
  const {
    state: { step },
  } = useCoffeeContext()

  return (
    <main className="px-4 py-5">
      <MainFactory step={step} />
    </main>
  )
}

export { StepCardMainContent }
