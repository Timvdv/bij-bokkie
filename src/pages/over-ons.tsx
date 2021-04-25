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
          <h2>Over ons</h2>
          <p>
            Wij zijn Matthijs en Jolanda. Sinds 1992 wonen we hier op Kerkstraat
            1 in Rijswijk (Gld). Dit pand uit 1944 werd na de oorlog het lokale
            dorpscafé. Het werd gesloten in de jaren 70 en daarna gebruikt als
            woonhuis. Eigenaar van het café was Antonie Petrus Baauw in het dorp
            beter bekend als Bokkie. Zijn bijnaam kreeg hij omdat hij zonder
            remmen met zijn auto tegen van de dijk reed en tegen een boom
            botste. Twee grote bulten op zijn hoofd zorgden voor zijn bijnaam
            Bokkie Baauw. Vandaar dat we onze B&B ‘Bij Bokkie’ hebben genoemd.
          </p>

          <p>
            Sinds de kinderen het huis uit zijn hebben we een deel van ons huis
            omgevormd in een B&B. Wij vinden het leuk om mensen te ontvangen en
            een paar fijne dagen te bezorgen. Als het seizoen het toelaat kunt u
            meegenieten van het fruit uit onze tuin en verse bloemen.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
