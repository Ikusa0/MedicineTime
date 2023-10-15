import { createContext } from 'react'

export type HeaderContextTypes = {
  title: string
}

export const HeaderContext = createContext<HeaderContextTypes>({ title: 'Medicine Time' })
