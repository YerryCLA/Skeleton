import useLocalStorageState from 'use-local-storage-state'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  return useLocalStorageState<T>(key, { defaultValue })
}
