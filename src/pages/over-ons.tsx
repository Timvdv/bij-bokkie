import Head from "next/head";
import Image from "next/image";
import styles from "static/scss/pages/Home.module.scss";
import MetaHead from "components/meta-head/MetaHead";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

export default function OverOns() {
  return (
    <div>
      <Head>
        <MetaHead title="Bij Bokkie - Over ons" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.textCol2} data-align="center">
          <div className={styles.col}>
            <h2>Over ons</h2>
            <p>
              Wij zijn Matthijs en Jolanda. Sinds 1992 wonen we hier op
              Kerkstraat 1 in Rijswijk (Gld). Sinds de kinderen het huis uit
              zijn hebben we een deel van ons huis omgevormd tot een B&amp;B.
              Wij vinden het leuk om mensen te ontvangen en een paar fijne dagen
              te bezorgen. Als het seizoen het toelaat kunt u meegenieten van
              het fruit uit onze tuin en verse bloemen.
            </p>
          </div>
          <div className={styles.col}>
            <Image
              className={styles.roundedImage}
              src="/v1619877588/outside/IMG_1281_kf2qk8.jpg"
              alt="Opening van B&amp;B Bij Bokkie"
              width={600}
              height={800}
            />
          </div>
        </div>
        <div className={styles.textCol2} data-align="center">
          <div className={styles.col}>
            <Image
              className={styles.roundedImage}
              src="/v1619877588/outside/642670590.624313_qtb2bv.jpg"
              alt="Opening van B&amp;B Bij Bokkie"
              width={600}
              height={800}
            />
          </div>
          <div className={styles.col}>
            <h2>Over Bokkie</h2>
            <p>
              Dit pand uit 1944 werd na de oorlog het lokale dorpscafé. Het werd
              gesloten in de jaren 70 en daarna gebruikt als woonhuis. Eigenaar
              van het café was Antonie Petrus Baauw, in het dorp beter bekend
              als Bokkie. Zijn bijnaam kreeg hij omdat hij zonder remmen met
              zijn auto van de dijk reed en tegen een boom botste. Twee grote
              bulten op zijn hoofd zorgden voor zijn bijnaam Bokkie Baauw.
              Vandaar dat we onze B&amp;B ‘Bij Bokkie’ hebben genoemd. Het stond
              bekend als een gezellig dorpscafé waar soms zijn geit mee naar
              binnen mocht en dan kreeg zij ook een borreltje.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
