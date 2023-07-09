import { Button, Container } from 'react-bootstrap'

function AddBeerToolbar(props: AddBeerProps) {
  const { onAddBeer } = props
  return (
    <Container className='mt-3 pl-0 d-flex justify-content-end'>
      <Button type='button' variant='primary'>
        Add a new beer
      </Button>
    </Container>
  )
}

interface AddBeerProps {
  onAddBeer: () => void
}

export default AddBeerToolbar
