import { Airgram } from '../airgram'

export function createState (starting: Record<string, any>) {
  let state = { ...starting }
  const getState = () => ({ ...state })
  const setState = (next: Record<string, any> | ((state: Record<string, any>) => Record<string, any>)) => {
    if (typeof next === 'function') {
      state = { ...state, ...next(state) }
    } else {
      state = { ...state, ...next }
    }
  }
  return { getState, setState }
}

export function createContext ({ state, ...options }: Airgram.ContextOptions): Airgram.Context {
  return Object.assign(options, createState(state))
}
