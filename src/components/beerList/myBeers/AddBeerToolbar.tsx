import { Button, Container } from 'react-bootstrap'

function AddBeerToolbar(props: AddBeerProps) {
  const { onAddBeer } = props
  return (
    <Container className='mt-3 ps-0 d-flex justify-content-center justify-content-md-end '>
      <Button type='button' variant='primary' onClick={onAddBeer}>
        Add a new beer
      </Button>
    </Container>
  )
}

interface AddBeerProps {
  onAddBeer: () => void
}

export default AddBeerToolbar
