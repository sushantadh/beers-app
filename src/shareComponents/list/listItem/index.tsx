import { Card } from 'react-bootstrap'
import ItemProp from '../../../types/listItem'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './style.css'
import getIngredients from '../../../helpers/ingredients'

export default function ListItem(props: ItemProp) {
  const { item } = props
  return (
    <>
      <Card className='item-card'>
        <Card.Body className='d-flex flex-row align-items-center '>
          <img
            src={item?.image_url}
            alt={item.name}
            className='image'
            data-tooltip-id={item?.image_url}
            data-tooltip-content={getIngredients(item?.ingredients)}
            data-data-tooltip-place='bottom'
          />
          <div className='detail d-flex flex-column justify-content-start'>
            <div className='item-name'>{item.name}</div>
            <div className='tagline'>{item.tagline}</div>
            <div className='description'>{item.description}</div>
          </div>
        </Card.Body>
        <ReactTooltip id={item?.image_url} />
      </Card>
    </>
  )
}
