import { Modal, Button } from 'react-bootstrap'

function ModalComponent(props: ModalProps) {
  const {
    onHide,
    modalbody,
    modaltitle,
    cancelbutton,
    closebuttontext,
    cancelbuttontext,
    closebutton,
    onCancel,
  } = props
  return (
    <Modal
      {...props}
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
      {modalbody ? <Modal.Body>{modalbody}</Modal.Body> : null}
      <Modal.Footer className='border-0'>
        {Boolean(cancelbutton) && onCancel ? (
          <Button onClick={onCancel} variant='secondary'>
            {cancelbuttontext}
          </Button>
        ) : null}
        <Button onClick={onHide}>{closebuttontext}</Button>
      </Modal.Footer>
    </Modal>
  )
}

interface ModalProps {
  show: boolean
  onHide: () => void
  modalbody: JSX.Element
  closebuttontext: string
  closebutton?: string
  cancelbuttontext?: string
  modaltitle?: string
  cancelbutton?: string
  onCancel?: () => void
}

export default ModalComponent
