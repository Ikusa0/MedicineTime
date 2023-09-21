import React from 'react'
import { BarLoader } from 'react-spinners'
import Styles from './loading-bar-styles.scss'
import Colors from '@/presentation/styles/colors.scss'

const LoadingBar: React.FC = () => {
  return (
    <div className={Styles.loadingBarWrapper}>
      <BarLoader
        width={'100%'}
        height={'100%'}
        color={Colors.primaryLight}
        speedMultiplier={1}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default LoadingBar
