import { type EnvironmentModel } from '@/domain/models'
import { type LoadEnvironmentList } from '@/domain/usecases'
import { EnvironmentCardGrid, Header, PageMenu } from '@/presentation/components'
import ErrorPage from '@/presentation/components/error-page/error-page'
import React, { useEffect, useState } from 'react'
import { MdOutlineAddCircle as AddEnvironmentIcon } from 'react-icons/md'
import { EmptyPage } from './components/'
import Styles from './environment-list-styles.scss'

type PropsType = {
  loadEnvironmentList?: LoadEnvironmentList
}

const EnvironmentList: React.FC<PropsType> = ({ loadEnvironmentList }: PropsType) => {
  const [state, setState] = useState({
    environments: [] as EnvironmentModel[],
    isLoading: true,
    isEmpty: false,
    error: false
  })

  useEffect(() => {
    void (async function () {
      try {
        // throw new Error('Faiô')
        state.environments = [
          {
            id: '1',
            name: 'Casa de Glaube',
            address: 'Rua Anísio Ferreira Aguiar, 25. apto. 103',
            iconName: 'house'
          },
          {
            id: '1',
            name: 'Casa de Glaube',
            address: 'Rua Anísio Ferreira Aguiar, 25. apto. 103',
            iconName: 'house'
          },
          {
            id: '1',
            name: 'Casa de Glaube',
            address: 'Rua Anísio Ferreira Aguiar, 25. apto. 103',
            iconName: 'house'
          }
        ]

        if (state.environments.length === 0) {
          state.isEmpty = true
        }

        setState({ ...state, isLoading: false })

        // await loadEnvironmentList.load()
      } catch (e: any) {
        setState({ ...state, isLoading: false, error: true })
      }
    })()
  }, [])

  return (
    <div
      className={`${Styles.environmentList} ${state.isEmpty ? Styles.empty : ''} ${
        state.error ? Styles.error : ''
      }`}
    >
      <Header title="Ambientes" />
      <div className={Styles.content}>
        {state.error
          ? (
          <div className={Styles.blankPage}>
            <ErrorPage reloadFunction={() => {}} />
          </div>
            )
          : state.isLoading
            ? (
          <EnvironmentCardGrid />
              )
            : state.isEmpty
              ? (
          <div className={Styles.blankPage}>
            <EmptyPage />
          </div>
                )
              : (
          <>
            <PageMenu>
              <button className={Styles.iconWrapper}>
                <AddEnvironmentIcon className={Styles.icon} />
                <span className={Styles.iconLabel}>Novo ambiente</span>
              </button>
            </PageMenu>
            <EnvironmentCardGrid
              className={Styles.environmentCardGrid}
              environments={state.environments}
            />
          </>
                )}
      </div>
    </div>
  )
}

export default EnvironmentList
