import { Modal, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import MyBeer from '../../../types/myBeer'
import AddBeerForm from './AddBeerForm'

function AddBeerFormModal(props: ModalProps) {
  const {
    show,
    onHide,
    modaltitle,
    cancelbutton,
    closebuttontext,
    cancelbuttontext,
    closebutton,
    handleFormsubmit,
    onCancel,
  } = props

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<MyBeer>({ mode: 'all' })

  const onSubmit = (data: MyBeer) => {
    if (handleFormsubmit) {
      handleFormsubmit(data)
    }

    reset()

    if (onHide) {
      onHide()
    }
  }

  const handleCancel = () => {
    reset()
    if (onCancel) {
      onCancel()
    }
  }

  return (
    <Modal
      show={show}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      className='rounded-0'
      centered
    >
      <Modal.Header closeButton={Boolean(closebutton)} className='border-0'>
        {modaltitle ? (
          <Modal.Title id='contained-modal-title-vcenter'>
            {modaltitle}
          </Modal.Title>
        ) : null}
      </Modal.Header>
      <Modal.Body>
        <img
          src='/houzz-beer.png'
          className='img-thumbnail p-3 mb-3'
          style={{ height: '120px' }}
        />
        <AddBeerForm register={register} errors={errors} />
      </Modal.Body>
      <Modal.Footer className='border-0'>
        {Boolean(cancelbutton) && onCancel ? (
          <Button onClick={handleCancel} variant='secondary'>
            {cancelbuttontext}
          </Button>
        ) : null}
        <Button onClick={handleSubmit(onSubmit)} disabled={!isValid}>
          {closebuttontext}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

interface ModalProps {
  show: boolean
  onHide: () => void
  closebuttontext: string
  closebutton?: string
  cancelbuttontext?: string
  modaltitle?: string
  cancelbutton?: string
  onCancel?: () => void
  handleFormsubmit?: (data: MyBeer) => void
}

export default AddBeerFormModal
