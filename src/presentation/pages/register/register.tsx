import { type AddAccount } from '@/domain/usecases'
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
import { FaCircleUser as UserIcon } from 'react-icons/fa6'
import { IoMailOutline as MailIcon } from 'react-icons/io5'
import { SlLock as LockIcon } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import Styles from './register-styles.scss'

type Props = {
  validation: Validation
  addAccount: AddAccount
}

const Register: React.FC<Props> = ({ validation, addAccount }: Props) => {
  const { updateCurrentAccount } = useContext(AuthContext)!
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

  useEffect(() => {
    if (state.error) setState({ ...state, warning: true })
  }, [state.error])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      const nameValidationError = validation.validate('name', {
        value: state.name
      })
      const emailValidationError = validation.validate('email', {
        value: state.email
      })
      const passwordValidationError = validation.validate('password', {
        value: state.password
      })
      const passwordConfirmationValidationError = validation.validate('passwordConfirmation', {
        value: state.passwordConfirmation,
        equals: state.password
      })
      if (nameValidationError) {
        setState({ ...state, error: nameValidationError })
        return
      }
      if (emailValidationError) {
        setState({ ...state, error: emailValidationError })
        return
      }
      if (passwordValidationError) {
        setState({ ...state, error: passwordValidationError })
        return
      }
      if (passwordConfirmationValidationError) {
        setState({ ...state, error: passwordConfirmationValidationError })
        return
      }
      setState({ ...state, loading: true })
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
      updateCurrentAccount(account)
      navigate('/')
    } catch (err: any) {
      setState({ ...state, loading: false, error: err.message })
    }
  }

  return (
    <div className={Styles.register}>
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
              <span className={Styles.title}>Crie uma conta para iniciar</span>
              <div className={Styles.inputWrapper}>
                <IconLabeledInput type="text" name="name" id="name" placeholder="Nome" required>
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
                  type="password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  placeholder="Confirme sua senha"
                  required
                >
                  <LockIcon size={24} />
                </IconLabeledInput>
              </div>
              <div className={Styles.buttonWrapper}>
                <FilledButton disabled={state.loading} type="submit">
                  Cadastrar
                </FilledButton>
              </div>
            </div>
            <div className={Styles.alternativeLoginWrapper}>
              <AlternativeLogin disabled={state.loading} />
            </div>
            <footer>
              <span>Já possui conta?</span>
              <Link to="/login">
                <div className={Styles.buttonWrapper}>
                  <UnfilledButton disabled={state.loading} type="button">
                    Entrar
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

export default Register
