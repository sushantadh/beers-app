import { Form } from 'react-bootstrap'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import MyBeer from '../../../types/myBeer'

function AddBeerForm(props: AddBeerForm) {
  const { register, errors } = props
  return (
    <Form>
      <Form.Group controlId='name' className='mb-4'>
        <Form.Control
          type='text'
          placeholder='Beer name *'
          {...register('name', { required: true })}
          isInvalid={!!errors.name}
        />
        {errors.name && (
          <Form.Control.Feedback type='invalid'>
            Name is required
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId='tagline' className='mb-4'>
        <Form.Control
          type='text'
          placeholder='Genere *'
          {...register('tagline', { required: true })}
          isInvalid={!!errors.tagline}
        />
        {errors.tagline && (
          <Form.Control.Feedback type='invalid'>
            Genre is required
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId='description' className='mb-4'>
        <Form.Control
          as='textarea'
          placeholder='Description *'
          rows={3}
          {...register('description', { required: true })}
          isInvalid={!!errors.description}
        />
        {errors.description && (
          <Form.Control.Feedback type='invalid'>
            Description is required
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </Form>
  )
}

interface AddBeerForm {
  register: UseFormRegister<MyBeer>
  errors: FieldErrors<MyBeer>
}

export default AddBeerForm
