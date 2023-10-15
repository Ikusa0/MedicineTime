import React, { type ReactNode } from 'react'
import Styles from './page-menu-styles.scss'

type PropsType = { children?: ReactNode | undefined }

const PageMenu: React.FC<PropsType> = ({ children }: PropsType) => {
  return <div className={Styles.pageMenu}>{children}</div>
}

export default PageMenu
