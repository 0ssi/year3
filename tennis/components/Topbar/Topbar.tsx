import React from 'react'
import styles from '../topbar/Topbar.module.css'
import Link from 'next/link'

const Topbar = () => {
  return (
    <div className={styles.topbar}>
        <h1 className={styles.titleH1}>
            <Link href='/'>Tenniscenter</Link>
        </h1>


        <p className={styles.p}>
            <Link href='https://playtomic.io/wl/e7ca04ef-22b1-4b8d-8e1d-0812485f3e7f?q=TENNIS~2022-09-27~~~'>Bokning</Link>
        </p>

        <p className={styles.p}>
            <Link href='/pris'>Prislista</Link>
        </p>

        <p className={styles.p}>
            <Link href='/kurser'>Kurser</Link>
        </p>
        <p className={styles.p}>
            <Link href='/tider'>Öppettider</Link>
        </p>
    </div>
  )
}

export default Topbar