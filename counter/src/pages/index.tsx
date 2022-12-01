import type { NextPage } from 'next'
import { useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Counter from '../components/counter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

const [secret, setSecret] = useState(false);

const counterChange = (value: number) => {
  if(value === 10) setSecret(true)
  else setSecret(false);
}

  return (
    <div>
      <Counter onChange={counterChange} />
      { secret && <div>Countern är 10!</div> }
    </div>
  )
}

export default Home
