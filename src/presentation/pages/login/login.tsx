import { type SaveAccessToken } from '@/domain/usecases'
import { type Authentication } from '@/domain/usecases/authentication'
import {
  AlternativeLogin,
  ErrorMessage,
  FilledButton,
  IconLabeledInput,
  LoadingBar,
  LogoBig,
  UnfilledButton
} from '@/presentation/components'
import FormContext, {
  type FormStateTypes
} from '@/presentation/contexts/form-context'
import { type Validation } from '@/presentation/protocols'
import React, { useEffect, useState } from 'react'
import { IoMailOutline as MailIcon } from 'react-icons/io5'
import { SlLock as LockIcon } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import Styles from './login-styles.scss'

type Props = {
  validation: Validation
  authentication: Authentication
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({
  validation,
  authentication,
  saveAccessToken
}: Props) => {
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

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
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
      saveAccessToken.save(account.accessToken)
      navigate('/')
    } catch (err: any) {
      setState({ ...state, loading: false, error: err.message })
    }
  }

  return (
    <div className={Styles.login}>
      {state.loading && <LoadingBar />}
      <div className={Styles.content}>
        <LogoBig />
        <FormContext.Provider value={{ state, setState }}>
          <section className={Styles.form}>
            {state.warning && <ErrorMessage text={state.error} />}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Faça login na sua conta</legend>
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
                <div className={Styles.submitWrapper}>
                  <Link
                    className={state.loading ? Styles.disabledAnchor : ''}
                    to="/recover"
                  >
                    <span>Esqueceu a senha?</span>
                  </Link>
                  <FilledButton disabled={state.loading} type="submit">
                    Entrar
                  </FilledButton>
                </div>
                <AlternativeLogin disabled={state.loading} />
                <legend>
                  <span>Ainda não cadastrado?</span>
                  <Link to="/register">
                    <UnfilledButton disabled={state.loading} type="button">
                      Criar conta
                    </UnfilledButton>
                  </Link>
                </legend>
              </fieldset>
            </form>
          </section>
        </FormContext.Provider>
      </div>
    </div>
  )
}

export default Login
