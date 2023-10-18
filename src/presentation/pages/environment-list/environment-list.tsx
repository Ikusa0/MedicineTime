import { EnvironmentCardGrid, Header, PageMenu } from '@/presentation/components'
import { PharmacistSVG } from '@/presentation/images'
import React from 'react'
import { MdOutlineAddCircle as AddEnvironmentIcon } from 'react-icons/md'
import Styles from './environment-list-styles.scss'

const EnvironmentList: React.FC = () => {
  const environments = [
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
  const isEmpty = false
  const isLoading = false

  return (
    <div className={`${Styles.environmentList} ${isEmpty ? Styles.empty : ''}`}>
      <Header title="Ambientes" />
      <div className={Styles.content}>
        {isLoading
          ? (
          <>
            <EnvironmentCardGrid />
          </>
            )
          : isEmpty
            ? (
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
              environments={environments}
            />
          </>
              )}
      </div>
    </div>
  )
}

export default EnvironmentList
