import React, { useState } from 'react'
import { CgMenuGridR as MenuIcon } from 'react-icons/cg'
import DropdownList from '../dropdown-list/dropdown-list'
import Styles from './header-styles.scss'

type PropsType = {
  title: string
}

const Header: React.FC<PropsType> = (props: PropsType) => {
  const { title } = props
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
