import { Outlet } from 'react-router-dom'

import { Header, Main } from '~organisms'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export { AppLayout }
