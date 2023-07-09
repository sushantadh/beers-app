import { pagination } from '../types/pagination'
import beersAxios from '../utils/beersAxios'
import handleError from '../utils/errorHandler'

export const fetchBeers = async (pagination: pagination) => {
  try {
    const response = await beersAxios.get('/beers', {
      params: {
        page: pagination.page,
        per_page: pagination.pageSize,
      },
    })

    return response

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return handleError(err)
  }
}
