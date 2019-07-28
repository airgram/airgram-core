import { BaseContext, ContextOptions } from '../../types'

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

export function createContext<T extends BaseContext> ({ _, airgram, state, ...options }: ContextOptions): T {
  const ctx: Record<string, any> = { ...options, ...createState(state) }
  if (ctx.request) {
    Object.defineProperty(ctx, 'error', {
      get () {
        return this.response && this.response._ === 'error' ? this.response : null
      },
      enumerable: true
    })
    Object.defineProperty(ctx, 'data', {
      get () {
        return this.response && this.response._ !== 'error' ? this.response : null
      },
      enumerable: true
    })
  }
  Object.defineProperty(ctx, '_', {
    enumerable: true,
    value: _,
    writable: false
  })
  Object.defineProperty(ctx, 'airgram', {
    get () {
      return airgram
    },
    enumerable: true
  })
  return ctx as T
}
