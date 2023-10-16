import { type EnvironmentModel } from '@/domain/models'
import { Card, EnvironmentIcon } from '@/presentation/components'
import React from 'react'
import Styles from './environment-card-styles.scss'

function isEnvironmentModel (obj: any): obj is EnvironmentModel {
  return 'id' in obj && 'name' in obj && 'address' in obj && 'iconName' in obj
}

const EnvironmentCard: React.FC<EnvironmentModel | object> = (props: EnvironmentModel | object) => {
  if (isEnvironmentModel(props)) {
    const { name, address, iconName } = props
    return (
      <Card>
        <div className={Styles.content}>
          <div className={Styles.iconWrapper}>
            <EnvironmentIcon iconName={iconName} className={Styles.icon} />
            <h3>{name}</h3>
          </div>
          <span>{address}</span>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <div className={`${Styles.content} ${Styles.empty}`}>
        <div className={Styles.iconWrapper}>
          <div className={Styles.icon}></div>
          <div className={Styles.text}></div>
        </div>
        <div className={Styles.subTextWrapper}>
          <div className={Styles.subText}></div>
          <div className={Styles.subText}></div>
          <div className={Styles.subText}></div>
        </div>
      </div>
    </Card>
  )
}

export default EnvironmentCard
