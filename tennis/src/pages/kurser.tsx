import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Topbar from '../../components/Topbar/Topbar'
import styles from '../styles/Home.module.css'
import courseStyles from '../styles/kurs.module.css'

const kurser = () => {
  return (
    <div className={styles.containerCourse}>
    <Topbar />
    <div className={courseStyles.course_card_container}>

      <div className={courseStyles.course_card}>
          <div className={courseStyles.course_card_inner}>
          <h2>Badmintonkurser</h2>
        <p>Tränad av Mohammad Emran</p>
        <h2>Du kan anmäla dig till kurserna när som helst under året!</h2>
        <h3>Nybörjarkurs i badminton</h3>
        <p>9-15 år för nybörjare</p>
        <p>på torsdagar 18-19
            Pris: 60 €/spelare i 16 timmar
            Start 07.09.2017</p>
            <h3>Nybörjarkurs i badminton</h3>
            <p>Vuxna nybörjare</p>
            <p>på torsdagar 20-21
            Pris: €80/spelare i 16 timmar
            Start 07.09.2017</p>
            <h2>Badminton introduktionslektion 4 tim</h2>
            <p>9-15 år nybörjare</p>

            <p>Tid: enligt överenskommelse
                Pris: €25/spelare</p>

              <p>I klassen får du lära dig racketgrepp och grundläggande slagträning, grunderna i rörelseteknik, servering och mottagande av en serve.</p>

              <p>I priset ingår: fält, coachning, fjäderbollar och vid behov en låneracket.</p>

              <h2>Badminton introduktionslektion 4 tim</h2>
              <p>Vuxna nybörjare</p>

              <p>Tid: enligt överenskommelse
                  Pris: €30/spelare</p>
                
              <p>I klassen får du lära dig racketgrepp och grundläggande slagträning, grunderna i rörelseteknik, servering och mottagande av en serve.</p>

              <p>I priset ingår: fält, coachning, fjäderbollar och vid behov en låneracket.</p>

              <h2>Badmintonintensivkurs 1</h2>
              <p>Juniorer 12-16 år
För spelare med liten skicklighet som vill utvecklas och bli konkurrenskraftiga spelare</p>

              <p>Måndagar från 18:00 till 20:00
Torsdagar kl. 19.00-20.00
Pris: 60 €/spelare i 16 timmar
Start 04/09/2017</p>

              <h2>Badmintonintensivkurs 2</h2>
              <p>Racing juniorer
Kursen är avsedd för nationella A- och B-spelare</p>

            <p>Tisdagar kl. 18.00-20.00
Lördagar från 11.00 till 13.00
Pris: €80/spelare
Start 09/02/2017</p>

          <p>I priset ingår: banor, 16 timmars coachning, fjäderbollar och vid behov en låneracket</p>

          <h2>"Familjen är bäst"
(Föräldrar eller mor- och farföräldrar + barn)</h2>


<p>Pris: 25 €/timme
Tid: enligt överenskommelse
Familjebadminton är ett trevligt sätt att träna tillsammans med familjen och ett utmärkt sätt att lära känna badminton som sport.</p>

<p>I priset ingår: fält, coachning, fjäderbollar och vid behov en låneracket.</p>
          </div>

        
      </div>
    </div>
  </div>
  )
}

export default kurser