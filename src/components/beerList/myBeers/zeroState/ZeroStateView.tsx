import { Button, Container, Row } from 'react-bootstrap'
import './style.css'

function ZeroState(props: ZeroStateProps) {
  const { onAddBeer } = props
  return (
    <Container className='mt-3 pl-0 zerostateContainer d-flex align-items-center justify-content-center'>
      <span className='d-flex flex-column align-items-center justify-content-center '>
        <span>Nothing to see yet.</span>
        <span>
          <span
            className='fw-bolder text-primary cursor-pointer pe-1'
            onClick={onAddBeer}
          >
            Click here
          </span>
          to add your first beer!
        </span>
      </span>
    </Container>
  )
}

interface ZeroStateProps {
  onAddBeer: () => void
}

export default ZeroState
