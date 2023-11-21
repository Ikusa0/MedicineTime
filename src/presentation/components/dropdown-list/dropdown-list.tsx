import { AuthContext } from '@/presentation/contexts'
import React, { useContext } from 'react'
import { BiSolidExit as ExitIcon } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Styles from './dropdown-list-styles.scss'

const DropdownList: React.FC = () => {
  const { updateCurrentAccount } = useContext(AuthContext)!
  const navigate = useNavigate()

  const logoff = (): void => {
    updateCurrentAccount()
    navigate('/login')
  }

  return (
    <div className={Styles.dropdownList}>
      <div className={Styles.arrowUp}></div>
      <ul className={Styles.listWrapper}>
        <li onClick={logoff} className={Styles.listItem}>
          <ExitIcon className={Styles.icon} />
          <span className={Styles.title}>Sair</span>
        </li>
      </ul>
    </div>
  )
}

export default DropdownList
