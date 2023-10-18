import { makeAPILoadEnvironmentList } from '@/main/factories/usecases/load-environment-list/api-load-environment-list'
import { EnvironmentList } from '@/presentation/pages'
import React from 'react'

export const makeEnvironmentList: React.FC = () => {
  return <EnvironmentList loadEnvironmentList={makeAPILoadEnvironmentList()} />
}
