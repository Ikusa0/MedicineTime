import { createContext } from 'react'

export type HeaderContextTypes = {
  title: string
}

const HeaderContext = createContext<HeaderContextTypes>({ title: 'Medicine Time' })

export default HeaderContext
