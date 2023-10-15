import { HeaderContext } from '@/presentation/contexts'
import React, { useContext, useState } from 'react'
import { CgMenuGridR as MenuIcon } from 'react-icons/cg'
import DropdownList from '../dropdown-list/dropdown-list'
import Styles from './header-styles.scss'

const Header: React.FC = () => {
  const { title } = useContext(HeaderContext)
  const [state, setState] = useState({
    isDropdownListActive: false
  })

  const toggleDropdownList = (): void => {
    setState({ isDropdownListActive: !state.isDropdownListActive })
  }

  return (
    <header className={Styles.header}>
      <div className={Styles.content}>
        <span className={Styles.pageTitle}>{title}</span>
        <MenuIcon className={Styles.menuIcon} onClick={toggleDropdownList} />
        {state.isDropdownListActive && <DropdownList />}
      </div>
    </header>
  )
}

export default Header
