import { type EnvironmentModel } from '@/domain/models'
import { type LoadEnvironmentList } from '@/domain/usecases'
import { EnvironmentCardGrid, Header, PageMenu } from '@/presentation/components'
import ErrorPage from '@/presentation/components/error-page/error-page'
import { useErrorHandler } from '@/presentation/hooks/use-error-handler'
import React, { useEffect, useState } from 'react'
import { MdOutlineAddCircle as AddEnvironmentIcon } from 'react-icons/md'
import { EmptyPage } from './components/'
import Styles from './environment-list-styles.scss'

type PropsType = {
  loadEnvironmentList: LoadEnvironmentList
}

const EnvironmentList: React.FC<PropsType> = ({ loadEnvironmentList }: PropsType) => {
  const [state, setState] = useState({
    environments: [] as EnvironmentModel[],
    isLoading: true,
    isEmpty: false,
    error: false,
    reload: false
  })
  const handleError = useErrorHandler((): void => {
    setState({ ...state, isLoading: false, error: true })
  })

  const reload = (): void => {
    setState({ ...state, error: false, reload: !state.reload, isLoading: true })
  }

  useEffect(() => {
    void (async function () {
      try {
        state.environments = await loadEnvironmentList.load()

        if (state.environments.length === 0) {
          state.isEmpty = true
        }

        setState({ ...state, isLoading: false })
      } catch (error: any) {
        handleError(error)
      }
    })()
  }, [state.reload])

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
            <ErrorPage reloadFunction={reload} />
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
