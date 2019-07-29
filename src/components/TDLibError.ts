export class TDLibError extends Error {
  public readonly code: number

  public readonly type?: string

  public constructor (code: number, message?: string, type?: string) {
    super(message)
    this.type = type
    this.code = code
    this.name = 'TDLibError'
    this.code = code
    this.type = type
    this.stack = (new Error()).stack

    Error.call(this, this.message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TDLibError)
    } else {
      this.stack = (new Error()).stack
    }
  }

  public toString (): string {
    return this.message
  }
}
