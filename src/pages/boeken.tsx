import Head from "next/head";
import styles from "static/scss/pages/Home.module.scss";

import MetaHead from "components/meta-head/MetaHead";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

export default function Boeken() {
  return (
    <div>
      <Head>
        <MetaHead title="Bij bokkie - Boeken" />
        <script
          async={false}
          src="https://www.airbnb.com/embeddable/airbnb_jssdk"
        ></script>
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.text}>
          <h2>Boeken</h2>
          <p>
            Als u direct wilt boeken kan dat via onze pagina op{" "}
            <a href="https://www.airbnb.com/h/bij-bokkie">Airbnb</a>. Het is
            iets goedkoper als u direct bij ons boekt.
          </p>
          <p>
            U kunt ons bereiken op onderstaand mailadres:{" "}
            <a href="mailto:jolanda@vandevathorst.nl">
              jolanda@vandevathorst.nl
            </a>
          </p>
          <br />
          <hr />
          <br />
          <strong>
            Boeken via <a href="https://www.airbnb.com/h/bij-bokkie">Airbnb</a>.
          </strong>
        </div>

        <div className={`${styles.textCol2}`}>
          <div className={styles.col} style={{ paddingRight: "2em" }}>
            <br />
            <br />
          </div>

          {/* <div className={styles.col}>
            <div
              className="airbnb-embed-frame"
              data-id="49037382"
              data-view="home"
              data-hide-reviews="true"
              style={{ width: "450px", height: "300px", margin: "auto" }}
            >
              <a href="https://www.airbnb.com/rooms/49037382?guests=1&amp;adults=1&amp;s=66&amp;unique_share_id=9d4f60ac-25fb-433d-9f8a-c1e6c0b10045&amp;source=embed_widget">
                View On Airbnb
              </a>
              <a
                href="https://www.airbnb.com/rooms/49037382?guests=1&amp;adults=1&amp;s=66&amp;unique_share_id=9d4f60ac-25fb-433d-9f8a-c1e6c0b10045&amp;source=embed_widget"
                rel="nofollow"
              >
                Rustige studio met uitzicht op de dijk
              </a>
            </div>
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
