import { Header, PageMenu } from '@/presentation/components'
import EnvironmentCard from '@/presentation/components/environment-card/environment-card'
import { HeaderContext } from '@/presentation/contexts'
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
  const isLoading = true

  return (
    <div className={`${Styles.environmentList} ${isEmpty ? Styles.empty : ''}`}>
      <HeaderContext.Provider value={{ title: 'Ambientes' }}>
        <Header />
        <div className={Styles.content}>
          {isLoading
            ? (
            <>
              <div className={Styles.environmentCardGrid}>
                <EnvironmentCard />
                <EnvironmentCard />
                <EnvironmentCard />
                <EnvironmentCard />
              </div>
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
              <div className={Styles.environmentCardGrid}>
                {environments.map((environment, index) => {
                  return <EnvironmentCard {...environment} key={index} />
                })}
              </div>
            </>
                )}
        </div>
      </HeaderContext.Provider>
    </div>
  )
}

export default EnvironmentList
