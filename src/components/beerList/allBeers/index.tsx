import useAllBeersData from '../../../hooks/useAllBeersData'

function AllBeers() {
  const { data, fetch } = useAllBeersData()

  console.log('data', data)

  return <div className='mt-2'>All beers</div>
}

export default AllBeers
