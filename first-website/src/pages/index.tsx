import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dotsImg from "../../public/dots.png"
import brawl from "../../public/brawlLogo.png"
import brawlLogo from "../../public/pngegg.png"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <video className={styles.videoTag} loop autoPlay playsInline muted  src="https://www.brawlhalla.com/c/uploads/2021/12/1920X1080-Loop-1.mp4"></video>
      <div className={styles.topbar}>
        <div className={styles.brawl}>
          <Image
          src={brawl}

          ></Image>
        </div>


        <div className={styles.dots}>
        <Image
        src={dotsImg}
        width={50}
        height={50}
        ></Image>
        </div>


      </div>
      

      <div className={styles.fade}>

      <div className={styles.brawlhallaLogo}>
          <Image
          src={brawlLogo}

          ></Image>
        </div >

        <div className={styles.playButton}>
        <a href="https://www.brawlhalla.com/play/">PLAY NOW</a>
        </div>

        

      </div>
      

      <div className={styles.footer}></div>

      
        
    </div>
  )
}

export default Home
