import { useState } from 'react'
import useMyBeerData from '../../../hooks/useMyBeerData'
import List from '../../../shareComponents/list'
import AddBeerToolbar from './AddBeerToolbar'
import ZeroState from './zeroState/ZeroStateView'
import AddBeerFormModal from './AddBeerFormModal'

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
      <AddBeerFormModal
        show={openModal}
        onHide={hideModal}
        handleFormsubmit={addBeer}
        modaltitle='Add New Beer'
        closebuttontext='submit'
        cancelbutton='true'
        cancelbuttontext='Cancel'
        onCancel={hideModal}
      />
    </>
  )
}

export default MyBeers
