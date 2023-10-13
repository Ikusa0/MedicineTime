import HeaderContext from '@/presentation/contexts/header-context'
import React, { useContext, useState } from 'react'
import DropdownList from '../dropdown-list/dropdown-list'
import UserImage from '../user-image/user-image'
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
        <UserImage onClick={toggleDropdownList} letter="A" />
        {state.isDropdownListActive && <DropdownList />}
      </div>
    </header>
  )
}

export default Header
