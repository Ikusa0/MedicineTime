import { LogoSVG } from '@/presentation/images'
import React, { memo } from 'react'
import Styles from './logo-styles.scss'

const LogoMedium: React.FC = () => {
  return (
    <div className={Styles.logoMedium}>
      <LogoSVG className={Styles.image} />
      <div>
        <span>MEDICINE</span>
        <span>TIME</span>
      </div>
    </div>
  )
}

export default memo(LogoMedium)
