import { useLogoff } from '@/presentation/hooks/use-logoff'
import React from 'react'
import { BiSolidExit as ExitIcon } from 'react-icons/bi'
import Styles from './dropdown-list-styles.scss'

const DropdownList: React.FC = () => {
  const logoff = useLogoff()

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
