import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import FormContext from '@/presentation/contexts/form-context'

type PropsType = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
> & {
  id?: string
}

const IconLabeledInput: React.FC<PropsType> = (props: PropsType) => {
  const { warning } = useContext(FormContext)!
  const { children, ...inputProps } = props

  return (
    <div
      className={`${Styles.iconLabeledInput} ${warning ? Styles.warning : ''}`}
    >
      <input {...inputProps} />
      <label htmlFor={props.id}>
        {props.children}
      </label>
    </div>
  )
}

export default IconLabeledInput
