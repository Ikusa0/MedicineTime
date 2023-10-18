import { PharmacistSVG } from '@/presentation/images'
import React from 'react'
import { MdOutlineAddCircle as AddEnvironmentIcon } from 'react-icons/md'
import Styles from './empty-page-styles.scss'

const EmptyPage: React.FC = () => {
  return (
    <div className={Styles.emptyPage}>
      <div>
        <h1>
          Parece que você ainda não tem nenhum <span>ambiente</span>!
        </h1>
        <div className={Styles.iconWrapper}>
          <AddEnvironmentIcon className={Styles.icon} />
          <span className={Styles.iconLabel}>clique aqui para iniciar</span>
        </div>
      </div>
      <PharmacistSVG className={Styles.banner} />
    </div>
  )
}

export default EmptyPage
