import { Button, Container, Row } from 'react-bootstrap'
import './style.css'

function ZeroState(props: ZeroStateProps) {
  const { onAddBeer } = props
  return (
    <Container className='mt-3 pl-0 zerostateContainer d-flex align-items-center justify-content-center'>
      <span>Nothing to see yet.</span>
      <Button
        variant='link'
        className='text-decoration-none fw-bolder'
        onClick={onAddBeer}
      >
        Click here
      </Button>
      <span>to add your first beer</span>
    </Container>
  )
}

interface ZeroStateProps {
  onAddBeer: () => void
}

export default ZeroState
