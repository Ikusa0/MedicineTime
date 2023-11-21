import { type GetStorage, type SetStorage } from '@/data/protocols/cache'
import { isStringifiedObject } from '@/utils'

export class LocalStorageAdapter implements SetStorage, GetStorage {
  set (key: string, value: any): void {
    if (value) {
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      localStorage.setItem(key, value)
    } else {
      localStorage.removeItem(key)
    }
  }

  get (key: string): any {
    let value = localStorage.getItem(key)!
    if (isStringifiedObject(value)) {
      value = JSON.parse(value)
    }
    return value
  }
}
