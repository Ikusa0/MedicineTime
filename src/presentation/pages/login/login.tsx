import React, { useState } from 'react'
import Styles from './login-styles.scss'
import {
  AlternativeLogin,
  ErrorMessage,
  FilledButton,
  IconLabeledInput,
  LoadingBar,
  LogoBig,
  UnfilledButton
} from '@/presentation/components'
import { IoMailOutline as MailIcon } from 'react-icons/io5'
import { SlLock as LockIcon } from 'react-icons/sl'
import FormContext, {
  type FormStateTypes
} from '@/presentation/contexts/form-context'
import { type Validation } from '@/presentation/protocols'
import { type Authentication } from '@/domain/usecases/authentication'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState<FormStateTypes>({
    warning: false,
    loading: false,
    email: '',
    password: '',
    error:
      'Seu /*e-mail*/ ou /*senha*/ parecem estar incorretos, tente novamente.'
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      const emailValidation = validation.validate('email', state.email)
      const passwordValidation = validation.validate('password', state.password)
      if (emailValidation) {
        setState({ ...state, warning: true, error: emailValidation })
        return
      }
      if (passwordValidation) {
        setState({ ...state, warning: true, error: passwordValidation })
        return
      }
      setState({ ...state, loading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      localStorage.setItem('access_token', account.accessToken)
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
                  <a href="#">
                    <span>Esqueceu a senha?</span>
                  </a>
                  <FilledButton disabled={state.loading} type="submit">
                    Entrar
                  </FilledButton>
                </div>
                <AlternativeLogin disabled={state.loading} />
                <legend>
                  <span>Ainda não cadastrado?</span>
                  <UnfilledButton disabled={state.loading} type="button">
                    Criar conta
                  </UnfilledButton>
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
