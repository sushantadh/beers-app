import useAllBeersData from '../../../hooks/useAllBeersData'

const MyBeers = () => {
  const { data, fetch } = useAllBeersData()
  return <div className='mt-2'>My Beers</div>
}

export default MyBeers
