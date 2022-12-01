import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Topbar from '../../components/Topbar/Topbar'
import styles from '../styles/Home.module.css'
import timeStyles from '../styles/tider.module.css'

const tider = () => {
  return (
    <div className={styles.container}>
    <Topbar />
    <div className={timeStyles.time_container}>
        <div className={timeStyles.time_container_inner}>

            <div className={timeStyles.time_container_inner_2}>
            <h2>Vi har öppet</h2>

            <h4>må - fre</h4>
            <h5>kl 8:00 - 22:00</h5>

            <h4>lö-sö</h4>
            <h5>kl 9:00-22:00</h5>

            <h4>I juni och juli</h4>
            <h5>kl 9-21</h5>

            <p>övriga tider enligt överenskommelse</p>

            <h4>På helgerna kundservice vid bokningarna!
Vi rekommenderar att boka online!</h4>
            </div>

        </div>
    </div>
  </div>
  )
}

export default tider