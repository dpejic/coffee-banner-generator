import { Route, Routes } from 'react-router-dom'

import { CoffeeContextProvider } from '~contexts'
import { HomePage } from '~pages'
import { AppLayout } from '~templates'

function App() {
  return (
    <CoffeeContextProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </CoffeeContextProvider>
  )
}

export default App
