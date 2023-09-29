import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Styles from './register-styles.scss'
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
import { FaCircleUser as UserIcon } from 'react-icons/fa6'
import FormContext, {
  type FormStateTypes
} from '@/presentation/contexts/form-context'
import { type Validation } from '@/presentation/protocols'
import { type SaveAccessToken, type AddAccount } from '@/domain/usecases'

type Props = {
  validation: Validation
  addAccount: AddAccount
  saveAccessToken: SaveAccessToken
}

const Login: React.FC<Props> = ({ validation, addAccount, saveAccessToken }: Props) => {
  const navigate = useNavigate()
  const [state, setState] = useState<FormStateTypes>({
    warning: false,
    loading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    error: ''
  })

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    try {
      const emailValidationError = validation.validate('email', state.email)
      const passwordValidationError = validation.validate(
        'password',
        state.password
      )
      const passwordConfirmationValidationError = validation.validate('passwordConfirmation', state.passwordConfirmation)
      if (emailValidationError) {
        setState({ ...state, warning: true, error: emailValidationError })
        return
      }
      if (passwordValidationError) {
        setState({ ...state, warning: true, error: passwordValidationError })
        return
      }
      if (passwordConfirmationValidationError) {
        setState({ ...state, warning: true, error: passwordConfirmationValidationError })
        return
      }
      setState({ ...state, loading: true })
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
      saveAccessToken.save(account.accessToken)
      navigate('/')
    } catch (err: any) {
      setState({ ...state, warning: true, loading: false, error: err.message })
    }
  }

  return (
    <div className={Styles.register}>
      {state.loading && <LoadingBar />}
      <div className={Styles.content}>
        <LogoBig />
        <FormContext.Provider value={{ state, setState }}>
          <section className={Styles.form}>
            {state.warning && <ErrorMessage text={state.error} />}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Crie uma conta para iniciar</legend>
                <IconLabeledInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  required
                >
                  <UserIcon size={24} />
                </IconLabeledInput>
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
                <IconLabeledInput
                  type="passwordConfirmation"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Confirme sua senha"
                  required
                >
                  <LockIcon size={24} />
                </IconLabeledInput>
                <div className={Styles.submitWrapper}>
                  <FilledButton disabled={state.loading} type="submit">
                    Cadastrar
                  </FilledButton>
                </div>
                <AlternativeLogin disabled={state.loading} />
                <legend>
                  <span>Já possui conta?</span>
                  <Link to="/register">
                    <UnfilledButton disabled={state.loading} type="button">
                      Entrar
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
