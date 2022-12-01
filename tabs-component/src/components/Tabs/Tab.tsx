import React from 'react'
import styles from './Tabs.module.css'

type TabProps = {
    children: any,
    label: string
}

const Tab = ({children}: TabProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Tab