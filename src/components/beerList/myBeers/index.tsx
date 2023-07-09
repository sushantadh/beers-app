import { useState } from 'react'
import useMyBeerData from '../../../hooks/useMyBeerData'
import List from '../../../shareComponents/list'
import AddBeerToolbar from './AddBeerToolbar'
import ZeroState from './zeroState/ZeroStateView'

const MyBeers = () => {
  const { data, addBeer } = useMyBeerData()
  const [openModal, setOpenModal] = useState(false)

  const onAddBeer = () => {
    setOpenModal(true)
  }

  return (
    <>
      <AddBeerToolbar onAddBeer={onAddBeer} />
      {!data?.length ? <ZeroState onAddBeer={onAddBeer} /> : null}
      {data?.length ? (
        <List listData={{ data: data, page: 0, loading: false, error: null }} />
      ) : null}
    </>
  )
}

export default MyBeers
