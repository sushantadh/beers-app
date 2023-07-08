import { Container } from 'react-bootstrap'
import BeerList from './components/beerList'
import useTabsData from './hooks/useTabsData'

function App() {
  const tabsData = useTabsData()

  return (
    <Container className='mt-5'>
      <BeerList id='beerList' tabs={tabsData} />
    </Container>
  )
}

export default App
