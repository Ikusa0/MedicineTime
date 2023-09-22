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
  const { state, setState } = useContext(FormContext)!
  const { warning } = state
  const { children, ...inputProps } = props

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div
      className={`${Styles.iconLabeledInput} ${warning ? Styles.warning : ''}`}
    >
      <input {...inputProps} onChange={handleChange}/>
      <label htmlFor={props.id}>
        {props.children}
      </label>
    </div>
  )
}

export default IconLabeledInput
