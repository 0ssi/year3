import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CircleButton from "../components/CircleButton/CirlceButton";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <CircleButton/>
    </div>
  )
}

export default Home