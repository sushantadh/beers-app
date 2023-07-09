import { useState } from 'react'
import MyBeer from '../types/myBeer'

export default () => {
  const [beers, setBeers] = useState<MyBeer[]>([])

  const addBeer = (data: MyBeer) => {
    setBeers([...beers, data])
  }
  return { data: beers, addBeer: addBeer }
}
