import type { NextPage } from 'next'
import Tabs from '../components/Tabs/Tabs'
import Tab from '../components/Tabs/Tab'
import List from '../components/List/List'

const colors = [
  "red", "green", "blue", "pink", "purple"
];

const IndexPage: NextPage = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Tab1">Detta är tab1</Tab>
        <Tab label="Tab2">Dehe e en ade tab</Tab>
        <Tab label="Tab3">Sista tabbin</Tab>
      </Tabs>
 

      <List items={colors}/>
    </div>
  )
}

export default IndexPage