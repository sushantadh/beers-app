import { Container } from 'react-bootstrap'
import BeerTabs from './components/beerList'
import useTabsData from './hooks/useTabsData'

function App() {
  const tabsData = useTabsData()

  return (
    <Container className='mt-5'>
      <BeerTabs id='beerTabs' tabs={tabsData} defaultIndex={0} />
    </Container>
  )
}

export default App
