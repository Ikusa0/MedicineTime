import { createContext } from 'react'

export type FormContextTypes = {
  warning: boolean
  loading: boolean
  email: string
  password: string
  error: string
}

const FormContext = createContext<FormContextTypes | null>(null)

export default FormContext
