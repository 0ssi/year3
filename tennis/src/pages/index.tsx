import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Topbar from '../../components/Topbar/Topbar'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      
    </div>
  )
}

export default Home
