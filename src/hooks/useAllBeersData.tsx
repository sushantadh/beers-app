import { useEffect, useState } from 'react'
import { fetchBeers } from '../services/beersService'
import BeerData from '../types/beerData'

export default (pageSize = 10) => {
  const [beers, setBeers] = useState<BeerData>(() => {
    return {
      data: [],
      page: 1,
      loading: false,
      error: null,
    }
  })

  useEffect(() => {
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetch = async () => {
    setBeers((prev) => {
      return { ...prev, loading: true }
    })
    const response = await fetchBeers({ page: beers?.page, pageSize: pageSize })

    if (response?.statusCode !== 200) {
      setBeers((prev) => {
        return { ...prev, loading: false, error: response.message }
      })

      if (response?.data?.length) {
        setBeers((prev) => {
          return {
            ...prev,
            data: [...prev.data, ...response.data],
            page: prev?.page + 1,
            loading: false,
            error: null,
          }
        })
      }
    }
  }
  return { data: beers, fetch: fetch }
}
