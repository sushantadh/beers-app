import useAllBeersData from '../../../hooks/useAllBeersData'
import List from '../../../shareComponents/list'

function AllBeers() {
  const { data, fetch } = useAllBeersData()

  return <List listData={data} onFetchMore={fetch} />
}

export default AllBeers
