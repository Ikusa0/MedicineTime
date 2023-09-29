import { FacebookSVG, GoogleSVG } from '@/presentation/images'
import React from 'react'
import Styles from './alternative-login-styles.scss'

type PropsType = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

const AlternativeLogin: React.FC<PropsType> = (props: PropsType) => {
  return (
    <div className={Styles.alternativeLoginWrapper}>
      <span>ou entre usando</span>
      <div>
        <button {...props} type="button">
          <FacebookSVG />
        </button>
        <button {...props} type="button">
          <GoogleSVG />
        </button>
      </div>
    </div>
  )
}

export default AlternativeLogin
