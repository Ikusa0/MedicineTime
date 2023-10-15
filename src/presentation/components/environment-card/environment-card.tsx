import { type EnvironmentModel } from '@/domain/models'
import { Card, EnvironmentIcon } from '@/presentation/components'
import React from 'react'
import Styles from './environment-card-styles.scss'

const EnvironmentCard: React.FC<EnvironmentModel> = (props: EnvironmentModel) => {
  return (
    <Card>
      <div className={Styles.content}>
        <div className={Styles.iconWrapper}>
          <EnvironmentIcon iconName={props.iconName} className={Styles.icon} />
          <h3>{props.name}</h3>
        </div>
        <span>{props.address}</span>
      </div>
    </Card>
  )
}

export default EnvironmentCard
