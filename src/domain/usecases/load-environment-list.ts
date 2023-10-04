import { type EnvironmentModel } from '@/domain/models'

export interface LoadEnvironmentList {
  load: () => Promise<EnvironmentModel[]>
}
