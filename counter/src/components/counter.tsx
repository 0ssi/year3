import styles from "./Counter.module.css"
import { useState } from "react";

type CounterProps = {
 onChange?: (value: number) => void
};

const Counter = (props: CounterProps) => {
  const [count, setCount,] = useState(0);

  const subtract = () => {
  setCount(count - 1)
  if(props.onChange)
    props.onChange(count - 1);
  }
const add = () => {
  setCount(count + 1)
  if(props.onChange)
    props.onChange(count + 1);
  }


return (
  <div className={styles.container}>
   <button className={styles.button} onClick={add}>+</button>
   <button className={styles.button} onClick={subtract}>-</button>
   <p>{count}</p>
  </div>
)

}

export default Counter