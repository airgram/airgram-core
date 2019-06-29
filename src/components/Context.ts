import * as ag from '../types/airgram'

export function createState (starting: Record<string, any>) {
  let state = { ...starting }
  const getState = () => ({ ...state })
  const setState = (next) => {
    if (typeof next === 'function') {
      state = { ...state, ...next(state) }
    } else {
      state = { ...state, ...next }
    }
  }
  return { getState, setState }
}

export function createContext ({ state, ...options }: ag.ContextOptions): ag.Context {
  return Object.assign(options, createState(state))
}
