import { type AddAccount, type UpdateCurrentAccount } from '@/domain/usecases'
import {
  AlternativeLogin,
  ErrorMessage,
  FilledButton,
  IconLabeledInput,
  LoadingBar,
  LogoBig,
  UnfilledButton
} from '@/presentation/components'
import { FormContext, type FormStateTypes } from '@/presentation/contexts'
import { type Validation } from '@/presentation/protocols'
import React, { useEffect, useState } from 'react'
import { FaCircleUser as UserIcon } from 'react-icons/fa6'
import { IoMailOutline as MailIcon } from 'react-icons/io5'
import { SlLock as LockIcon } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import Styles from './register-styles.scss'

type Props = {
  validation: Validation
  addAccount: AddAccount
  updateCurrentAccount: UpdateCurrentAccount
}

const Register: React.FC<Props> = ({ validation, addAccount, updateCurrentAccount }: Props) => {
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
      updateCurrentAccount.save(account)
      navigate('/')
    } catch (err: any) {
      setState({ ...state, loading: false, error: err.message })
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
                <div className={Styles.submitWrapper}>
                  <FilledButton disabled={state.loading} type="submit">
                    Cadastrar
                  </FilledButton>
                </div>
                <AlternativeLogin disabled={state.loading} />
                <legend>
                  <span>Já possui conta?</span>
                  <Link to="/login">
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

export default Register
