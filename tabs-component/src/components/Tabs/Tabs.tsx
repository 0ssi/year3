import styles from "./Tabs.module.css"
import { Children, useState } from "react";
import React from 'react'
import Tab from "./Tab";

type TabProps = {
    children: any
};

const Tabs = ({children}: TabProps) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const childArray: any[] = Children.map(children, child => {
    if(child.type !== Tab)
        throw new Error("Invalid child. ");
    return child;
  });

  return (
    <div className={styles.tabs}>
        <div className={styles.topbar}>
        { childArray.map((child, index) => (
            <button key={child.props.label} className={index === activeIndex ? styles.active : ""} onClick={() => setActiveIndex(index)}>{ child.props.label }</button>
        ))}
    </div>
<div className={styles.content}>
    { childArray[activeIndex] }
</div>
    </div>
  );
}

export default Tabs