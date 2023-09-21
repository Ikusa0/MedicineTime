import React from 'react'
import Styles from './button-styles.scss'

type PropsType = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>

const FilledButton: React.FC<PropsType> = (props: PropsType) => {
  const { children } = props

  return (
    <button {...props} className={Styles.filledButton}>
      {children}
    </button>
  )
}

export default FilledButton
