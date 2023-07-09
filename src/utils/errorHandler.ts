import { isAxiosError } from 'axios'

const handleError = (error: any) => {
  if (isAxiosError(error)) return error?.response?.data
  return {
    error: 'Some error Occured',
    message: 'Some error Occured',
    statusCode: 500,
  }
}

export default handleError
