import { useState } from 'react'
import useMyBeerData from '../../../hooks/useMyBeerData'
import List from '../../../shareComponents/list'
import AddBeerToolbar from './AddBeerToolbar'
import ZeroState from './zeroState/ZeroStateView'
import ModalComponent from '../../../shareComponents/Modal'

const MyBeers = () => {
  const { data, addBeer } = useMyBeerData()
  const [openModal, setOpenModal] = useState(false)

  const onOpenModal = () => {
    setOpenModal(true)
  }

  const hideModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <AddBeerToolbar onAddBeer={onOpenModal} />
      {!data?.length ? <ZeroState onAddBeer={onOpenModal} /> : null}
      {data?.length ? (
        <List listData={{ data: data, page: 0, loading: false, error: null }} />
      ) : null}
      <ModalComponent
        show={openModal}
        onHide={hideModal}
        modaltitle='Add New Beer'
        modalbody={<div>Modal 1 body</div>}
        closebuttontext='submit'
        closebutton={'true'}
      />
    </>
  )
}

export default MyBeers
