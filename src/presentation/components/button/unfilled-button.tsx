import React from 'react'
import Styles from './button-styles.scss'

type PropsType = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

const UnfilledButton: React.FC<PropsType> = (props: PropsType) => {
  const { children } = props

  return (
    <button {...props} className={Styles.unfilledButton}>
      {children}
    </button>
  )
}

export default UnfilledButton
