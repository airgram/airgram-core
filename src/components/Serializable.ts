export class Serializable {
  private readonly dataObject: Record<string, any> = {}

  constructor (data: Error) {
    if (!data) {
      return
    }

    if (data instanceof Error) {
      (Object.getOwnPropertyNames(data)).forEach((name: string) => (this.dataObject[name] = (data as any)[name]))
      return
    }

    this.dataObject = data
  }

  public toJSON () {
    return this.dataObject
  }

  public toString () {
    /// Circular Reference Exception
    const cache: any[] = []
    return JSON.stringify(this.dataObject, (name, value) => {
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
