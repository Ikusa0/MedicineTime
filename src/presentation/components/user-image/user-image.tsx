import React from 'react'
import Styles from './user-image-styles.scss'

type PropsType = React.DetailedHTMLProps<
React.HTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> & {
  letter: string
}

const UserImage: React.FC<PropsType> = (props: PropsType) => {
  const { letter, ...buttonProps } = props

  return (
    <button {...buttonProps} className={Styles.userImage}>
      <span>{letter}</span>
    </button>
  )
}

export default UserImage
