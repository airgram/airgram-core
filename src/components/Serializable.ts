export class Serializable {
  private readonly dataObject: Record<string, unknown> = {}

  public constructor (data: Error | Record<string, unknown>) {
    if (!data) {
      return
    }

    if (data instanceof Error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (Object.getOwnPropertyNames(data)).forEach((name: string) => (this.dataObject[name] = (data as any)[name]))
      return
    }

    this.dataObject = data
  }

  public toJSON (): Record<string, unknown> {
    return this.dataObject
  }

  public toString (): string {
    /// Circular Reference Exception
    const cache: unknown[] = []
    return JSON.stringify(this.dataObject, (_name, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.includes(value)) {
          return
        }
        cache.push(value)
      }
      return value
    }, 2)
  }
}
