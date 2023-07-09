import { useState } from 'react'
import {
  Tab as ReactBootstrapTab,
  Tabs as ReactBootstrapTabs,
} from 'react-bootstrap'
import './style.css'

function BeerTabs(props: BeerListProps) {
  const { id, tabs, defaultIndex } = props

  const [key, setKey] = useState(defaultIndex || tabs[0]?.id || undefined)

  const setActiveTab = (active: string | undefined) => {
    setKey(active)
  }

  return (
    <ReactBootstrapTabs
      id={id}
      activeKey={key}
      onSelect={(k) => setActiveTab(k || undefined)}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {tabs.map((item) => (
        <ReactBootstrapTab eventKey={item.id} title={item.title} key={item.id}>
          {item.component}
        </ReactBootstrapTab>
      ))}
    </ReactBootstrapTabs>
  )
}

interface BeerListProps {
  id: string
  tabs: Array<{ id: string; title: string; component: JSX.Element }>
  defaultIndex?: number
}
export default BeerTabs
