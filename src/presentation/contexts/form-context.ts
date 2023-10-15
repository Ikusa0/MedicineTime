import { createContext } from 'react'

export type FormStateTypes = {
  warning: boolean
  loading: boolean
  error: string
} & Record<string, any>

type FormContextTypes = {
  state: FormStateTypes
  setState: React.Dispatch<React.SetStateAction<FormStateTypes>>
}

export const FormContext = createContext<FormContextTypes | null>(null)
