import React from 'react'
import Styles from './card-styles.scss'

type PropsType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Card: React.FC<PropsType> = (props: PropsType) => {
  return (
    <button {...props} className={Styles.card}>
    </button>
  )
}

export default Card
