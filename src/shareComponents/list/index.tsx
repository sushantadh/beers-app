import { Col, Container, Row } from 'react-bootstrap'
import ListProps from '../../types/list'
import ListItem from './listItem'

const List = (props: ListProps) => {
  const { listData, onFetchMore } = props

  return (
    <Container className='mt-3'>
      <Row>
        {listData.data.length
          ? listData?.data?.map((item) => (
              <Col md={6} sm={12} lg={6} xl={6} xs={12} xxl={6} key={item?.id}>
                <ListItem item={item} />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  )
}

export default List
