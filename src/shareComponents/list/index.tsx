import { Col, Container, Row } from 'react-bootstrap'
import ListProps from '../../types/list'
import ListItem from './listItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const List = (props: ListProps) => {
  const { listData, onFetchMore } = props

  return (
    <Container className='mt-3 pl-0'>
      {listData.data.length ? (
        <Row>
          {listData?.data?.map((item) => (
            <Col md={6} sm={12} lg={6} xl={6} xs={12} xxl={6} key={item?.id}>
              <ListItem item={item} />
            </Col>
          ))}
        </Row>
      ) : null}
      {onFetchMore && listData?.loading ? (
        <div className='row mt-5 mb-5 d-flex'>
          <div className='d-flex align-items-center justify-content-center'>
            Loading...
          </div>
        </div>
      ) : null}
      {onFetchMore ? (
        <div className='row mt-5 mb-5 d-flex'>
          {!listData?.loading ? (
            <button
              type='button'
              className='btn btn-link fw-bolder text-decoration-none d-flex align-items-center justify-content-center'
              disabled={listData?.loading}
              onClick={() => onFetchMore()}
            >
              <span>Load More</span>
              <FontAwesomeIcon icon={faAngleDown} className='px-2' />
            </button>
          ) : (
            <div>Loading... </div>
          )}
        </div>
      ) : null}
    </Container>
  )
}

export default List
