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

const FormContext = createContext<FormContextTypes | null>(null)

export default FormContext
