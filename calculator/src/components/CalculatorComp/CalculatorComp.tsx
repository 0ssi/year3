import React, { useState } from 'react'

const Calculator = () => {

const [numInput1, setNumInput1] = useState("");
const [numInput2, setNumInput2] = useState("");
const [result   , setResult   ] = useState( 0);


const add = () => setResult(parseFloat(numInput1) + parseFloat(numInput2)) ;
const sub = () => setResult(parseFloat(numInput1) - parseFloat(numInput2)) ;
const mul = () => setResult(parseFloat(numInput1) * parseFloat(numInput2)) ;
const div = () => setResult(parseFloat(numInput1) / parseFloat(numInput2)) ;
  



  return (
    <div>
      <input type="number" 
      value={numInput1}
      onChange={e => setNumInput1(e.target.value)}
      />
      <input type="number"
      value={numInput2}
      onChange={e => setNumInput2(e.target.value)} />

      <span>{ result }</span>

      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={div}>/</button>
    </div>
  );
}

export default Calculator