import React, { memo } from 'react'
import Styles from './logo-styles.scss'
import { LogoSVG } from '@/presentation/images'

const LogoBig: React.FC = () => {
  return (
    <div className={Styles.logoBig}>
      <LogoSVG className={Styles.image} />
      <div>
        <span>MEDICINE</span>
        <span>TIME</span>
      </div>
    </div>
  )
}

export default memo(LogoBig)
