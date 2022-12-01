import Topbar from '../../components/Topbar/Topbar'
import styles from '../styles/Home.module.css'
import priceStyles from '../styles/pris.module.css'

import React from 'react'

const pris = () => {
  return (
    <div className={styles.container}>
    <Topbar />
    
    <div className={priceStyles.price_container}>
      <div className={priceStyles.price_card}>
        <div className={priceStyles.price_list}>
        <h1>Prislista</h1>
        </div>
        <div className={priceStyles.price_card_container}>



        <div className={priceStyles.price_card_left}>
        <h3>Tennis</h3>
        <p>8:00 - 16:00 18€/timme</p>
        <p>16:00 - 22:00 20€/timme</p>


        <h3>Badminton</h3>
        <p>8:00 - 16:00 16 €/timme</p>
        <p>16:00 - 22:00 18 €/timme</p>

        <h3>Bordtennis</h3>
        <p>8:00 - 22:00 6 €/timme</p>

        <div className={priceStyles.speedminton}>
          <h3>Speedminton</h3><p>(Spelas på tennisbana)</p>
        </div>
        <div className={priceStyles.price_racket}>
          <h3>Racket hyra 2€</h3>
          </div>
        </div>




        <div className={priceStyles.price_card_right}>

      
       
          

          <h3>Seriekort</h3>
          <p>Tennis</p>
          <p>11 h (må-sö klo 8-16) 180 €</p>
          <p>11 h (må-sö kl 8-22) 200 €</p>

          <p>Badminton</p>
          <p>11 h (må-sö klo 8-16) 160 €</p>
          <p>11 h (må-sö kl 8-22) 180 €</p>

          <div className={priceStyles.study}>
          <h5>Studerande får 2 € rabatt av normalpriset</h5>
          <h5> (visa studentkortet i kassan)</h5>
          </div>
          <p>må-to 08:00-16:00</p>
          <p>fre-sö 08:00-22:00</p>
        </div>
        </div>

      </div>
    </div>

  </div>
  )
}

export default pris