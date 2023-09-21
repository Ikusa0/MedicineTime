import React from 'react'
import Styles from './error-message-styles.scss'

type PropsType = {
  text: string
}

const ErrorMessage: React.FC<PropsType> = (props: PropsType) => {
  const { text } = props
  // Regex used to find '/* */'
  const parts = text.split(/(\/\*.*?\*\/)/g)

  return (
    <p className={`${Styles.error}`}>
      {parts.map((part, index) => {
        if (part.startsWith('/*') && part.endsWith('*/')) {
          const content = part.substring(2, part.length - 2)
          return <span key={index}>{content}</span>
        } else {
          return part
        }
      })}
    </p>
  )
}

export default ErrorMessage
