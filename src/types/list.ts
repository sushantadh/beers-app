import BeerData from './beerData'

interface ListProps {
  listData: BeerData
  onFetchMore?: () => void
}

export default ListProps
