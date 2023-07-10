import { useState } from 'react'
import MyBeer from '../types/myBeer'

export default () => {
  const [beers, setBeers] = useState<MyBeer[]>([])

  const addBeer = (data: MyBeer) => {
    const dataToAdd = {
      ...data,
      id: beers?.length + 1,
      image_url: '/houzz-beer.png',
    }
    setBeers([...beers, dataToAdd])
  }
  return { data: beers, addBeer: addBeer }
}
