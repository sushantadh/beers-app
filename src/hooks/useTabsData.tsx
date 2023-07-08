import AllBeers from '../components/beerList/allBeers'
import MyBeers from '../components/beerList/myBeers'

function useTabsData() {
  return [
    {
      id: 'allBeers',
      title: 'All Beers',
      component: <AllBeers />,
    },
    {
      id: 'myBeers',
      title: 'My Beers',
      component: <MyBeers />,
    },
  ]
}

export default useTabsData
