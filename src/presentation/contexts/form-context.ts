import { createContext } from 'react'

export type FormStateTypes = {
  warning: boolean
  loading: boolean
  email: string
  password: string
  error: string
}

type FormContextTypes = {
  state: FormStateTypes
  setState:
  React.Dispatch<React.SetStateAction<FormStateTypes>>
}

const FormContext = createContext<FormContextTypes | null>(null)

export default FormContext
