import { Card } from 'react-bootstrap'
import ItemProp from '../../../types/listItem'
import './style.css'

export default function ListItem(props: ItemProp) {
  const { item } = props
  return (
    <Card className='item-card'>
      <Card.Body className='d-flex flex-row align-items-center '>
        <img src={item?.image_url} alt={item.name} className='image' />
        <div className='detail d-flex flex-column justify-content-start'>
          <div className='item-name'>{item.name}</div>
          <div className='tagline'>{item.tagline}</div>
          <div className='description'>{item.description}</div>
        </div>
      </Card.Body>
    </Card>
  )
}
