import { Card } from 'react-bootstrap'
import ItemProp from '../../../types/listItem'
import './style.css'

export default function ListItem(props: ItemProp) {
  const { item } = props
  return (
    <Card className='item-card'>
      <Card.Body className='d-flex flex-row align-items-center '>
        <img src={item?.image_url} alt={item.name} className='image' />
        <div className='detail d-flex'>
          <h5 className='item-name'>{item.name}</h5>
        </div>
      </Card.Body>
    </Card>
  )
}
