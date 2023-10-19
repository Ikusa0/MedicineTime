import React from 'react'
import FilledButton from '../button/filled-button'
import Styles from './error-page-styles.scss'

type PropsType = {
  reloadFunction: (props?: Record<string, any>) => void
}

const ErrorPage: React.FC<PropsType> = ({ reloadFunction }: PropsType) => {
  return (
    <div className={Styles.errorPage}>
      <h1>Um erro inexperado ocorreu</h1>
      <div className={Styles.circle}>
        <span>!</span>
      </div>
      <div className={Styles.buttonWrapper}>
        <FilledButton onClick={reloadFunction}>Tentar novamente</FilledButton>
      </div>
      <div className={Styles.textWrapper}>
        <span>Parece que tivemos um problema com sua requisição.</span>
        <span>Por favor, tente novamente!</span>
      </div>
    </div>
  )
}

export default ErrorPage
