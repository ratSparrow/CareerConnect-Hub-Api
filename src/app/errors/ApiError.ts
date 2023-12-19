class ApiError extends Error {
  statusCode: number
  constructor(statusCode: number, message: string, stack = '') {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
      
      this.statusCode = statusCode
      this.message = message
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default ApiError
