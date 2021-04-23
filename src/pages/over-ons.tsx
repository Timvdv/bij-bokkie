import Head from "next/head";
import styles from "static/scss/pages/Home.module.scss";

import MetaHead from "components/meta-head/MetaHead";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

export default function OverOns() {
  return (
    <div>
      <Head>
        <MetaHead title="Bij bokkie - Over ons" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.text}>
          <h2>Locatie</h2>
          <p>
            In het voorjaar geurt de omgeving van de weelderig bloeiende
            bloesem, begin zomer kunt u overal in de omgeving heerlijke
            aardbeien en kersen kopen en later in het jaar pruimen, appels en
            peren. Op warme dagen kunt u op loopafstand heerlijk luieren aan de
            rivier.
          </p>
        </div>

        <div className={styles.text}>
          <h2>Bereikbaarheid</h2>
          <p>
            Gesitueerd het midden van het land op een rustige plek met een ruime
            parkeerplaats voor de deur bent u met de auto binnen een uur in
            Amsterdam, Utrecht, Rotterdam of Den Bosch. Of binnen 20 minuten in
            de sfeervolle historische plaatsen Wijk bij Duurstede, Buren,
            Culemborg of Tiel.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
