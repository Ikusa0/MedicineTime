import { type Authentication } from '@/domain/usecases'
import {
  AlternativeLogin,
  ErrorMessage,
  FilledButton,
  IconLabeledInput,
  LoadingBar,
  LogoBig,
  UnfilledButton
} from '@/presentation/components'
import { AuthContext, FormContext, type FormStateTypes } from '@/presentation/contexts'
import { type Validation } from '@/presentation/protocols'
import React, { useContext, useEffect, useState } from 'react'
import { IoMailOutline as MailIcon } from 'react-icons/io5'
import { SlLock as LockIcon } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import Styles from './login-styles.scss'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const { updateCurrentAccount } = useContext(AuthContext)!
  const navigate = useNavigate()
  const [state, setState] = useState<FormStateTypes>({
    warning: false,
    loading: false,
    email: '',
    password: '',
    error: ''
  })

  useEffect(() => {
    if (state.error) setState({ ...state, warning: true })
  }, [state.error])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      const emailValidationError = validation.validate('email', {
        value: state.email
      })
      const passwordValidationError = validation.validate('password', {
        value: state.password
      })
      if (emailValidationError) {
        setState({ ...state, error: emailValidationError })
        return
      }
      if (passwordValidationError) {
        setState({ ...state, error: passwordValidationError })
        return
      }
      setState({ ...state, loading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      updateCurrentAccount(account)
      navigate('/')
    } catch (err: any) {
      setState({ ...state, loading: false, error: err.message })
    }
  }

  return (
    <div className={Styles.login}>
      {state.loading && <LoadingBar />}
      <div className={Styles.content}>
        <div className={Styles.logoWrapper}>
          <LogoBig />
        </div>
        <FormContext.Provider value={{ state, setState }}>
          <form onSubmit={handleSubmit}>
            <div className={Styles.formWrapper}>
              <div className={Styles.errorWrapper}>
                {state.warning && <ErrorMessage text={state.error} />}
              </div>
              <span className={Styles.title}>Faça login na sua conta</span>
              <div className={Styles.inputWrapper}>
                <IconLabeledInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  required
                >
                  <MailIcon size={24} />
                </IconLabeledInput>
                <IconLabeledInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha"
                  required
                >
                  <LockIcon size={24} />
                </IconLabeledInput>
              </div>
              <div className={Styles.submitWrapper}>
                <Link className={state.loading ? Styles.disabledAnchor : ''} to="/recover">
                  <span>Esqueceu a senha?</span>
                </Link>
                <div className={Styles.buttonWrapper}>
                  <FilledButton disabled={state.loading} type="submit">
                    Entrar
                  </FilledButton>
                </div>
              </div>
            </div>
            <div className={Styles.alternativeLoginWrapper}>
              <AlternativeLogin disabled={state.loading} />
            </div>
            <footer>
              <span>Ainda não cadastrado?</span>
              <Link to="/register">
                <div className={Styles.buttonWrapper}>
                  <UnfilledButton disabled={state.loading} type="button">
                    Criar conta
                  </UnfilledButton>
                </div>
              </Link>
            </footer>
          </form>
        </FormContext.Provider>
      </div>
    </div>
  )
}

export default Login
