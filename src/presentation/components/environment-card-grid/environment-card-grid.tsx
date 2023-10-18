import { type EnvironmentModel } from '@/domain/models'
import { EnvironmentCard } from '@/presentation/components'
import React from 'react'
import Styles from './environment-card-grid-styles.scss'

type PropsType = {
  environments?: EnvironmentModel[]
  emptyGridItemQtd?: number
  className?: string
}

const DEFAULT_EMPTY_GRID_ITEM_QTD = 4

const EnvironmentCardGrid: React.FC<PropsType> = (props: PropsType) => {
  const { environments, emptyGridItemQtd } = props

  return (
    <ul className={`${Styles.environmentCardGrid} ${props.className}`}>
      {environments
        ? environments.map((environment) => (
            <EnvironmentCard {...environment} key={environment.id} />
        ))
        : Array.from({ length: emptyGridItemQtd ?? DEFAULT_EMPTY_GRID_ITEM_QTD }).map(
          (_, index) => <EnvironmentCard key={index} />
        )}
    </ul>
  )
}

export default EnvironmentCardGrid
