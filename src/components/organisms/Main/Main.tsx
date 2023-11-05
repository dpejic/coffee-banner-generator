import { IProps } from './Main.types'

const Main = ({ children }: IProps) => {
  return <main className="max-w-[1440px] mx-auto px-6">{children}</main>
}

export { Main }
