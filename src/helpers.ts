/**
 * Creates an object composed of the picked object properties.
 * @param obj The source object
 * @param paths The property paths to pick
 */
export function pick<T, K extends keyof T> (obj: T, paths: K[]): Pick<T, K> {
  return { ...paths.reduce((mem, key) => ({ ...mem, [key]: obj[key] }), {}) } as Pick<T, K>
}
