import { useState } from "react";
import styles from "../../styles/CircleButton.module.css"

const CircleButton = () => {
 const [isOn, setIsOn] = useState(false);

  const ChangeColor = () => {
    setIsOn(!isOn);
  }

  console.log(isOn);
  

  return (
    <div className={styles.container}>
      <div className={styles.circle} style={{
        backgroundColor: isOn ? "yellow" : undefined
      }}></div>
      <button onClick={ChangeColor}>Change</button>
    </div>
  );
};

export default CircleButton;