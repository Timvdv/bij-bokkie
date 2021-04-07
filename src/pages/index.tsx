import Head from "next/head";
import styles from "static/scss/pages/Home.module.scss";

import Link from "next/link";
import MetaHead from "components/meta-head/MetaHead";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

const options: any = {
  settings: {},

  caption: {},

  buttons: {},

  progressBar: {},

  thumbnails: {},
};
export default function Home() {
  return (
    <div>
      <Head>
        <MetaHead title="Bij bokkie" />
      </Head>

      <header className={styles.header}>
        <Link href="/">Bij Bokkie</Link>

        <div className={styles.logo}>
          <img src="/logo.png" alt="Bij Bokkie logo" />
        </div>

        <ul className={styles.menu}>
          <li>
            <Link href="/over-ons">Over ons</Link>
          </li>
          <li>
            <Link href="/boeken">Boek nu</Link>
          </li>
        </ul>
      </header>

      <div className={styles.bigPicture}>
        <Image
          src="/v1617737361/interior/IMG_1257_psu2ty.jpg"
          alt="De slaapkamer bij Bokkie"
          width={2000}
          height={1000}
        />
      </div>

      <main className={styles.main}>
        <div className="text">
          <h1>Over bokkie</h1>

          <p>
            Wees welkom in een rustige omgeving in een klein dorpje in de
            Betuwe. Vanuit uw kamer heeft u uitzicht op de dijk. Aan de andere
            kant van de dijk zijn uitgestrekte uiterwaarden en daarachter ligt
            de rivier de Nederrijn. B&amp;B Bij Bokkie ligt direct aan de lange
            afstands wandelroutes het Maarten van Rossumpad en het Limespad en
            langs verschillende fietsroutes.
          </p>
        </div>

        <div className={styles.gallery}>
          <SRLWrapper options={options}>
            <a
              href="/v1617737361/interior/IMG_1257_psu2ty.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/IMG_1257_psu2ty.jpg"
                alt="De slaapkamer bij Bokkie"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1617737361/interior/IMG_1251_gnonmg.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/IMG_1251_gnonmg.jpg"
                alt="De eettafel en keuken bij Bokkie"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1617737361/interior/IMG_1228_fp9m3m.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/IMG_1228_fp9m3m.jpg"
                alt="Een overzicht van Bokkie"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1617737361/interior/DSC00784_qpvfzy.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/DSC00784_qpvfzy.jpg"
                alt="De een de keuken bij Bokkie"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1617737361/interior/IMG_1245_ba1x4t.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/IMG_1245_ba1x4t.jpg"
                alt="Het toilet bij Bokkie"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1617737361/interior/DSC00821_ijssco.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/DSC00821_ijssco.jpg"
                alt="De ananasplant en eetkamer bij Bokkie"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1617737361/interior/DSC00806_qq2j7l.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/DSC00806_qq2j7l.jpg"
                alt="De badkamer bij Bokkie"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1617737361/interior/DSC00809_hhjgw2.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/DSC00809_hhjgw2.jpg"
                alt="De kapstok en gang bij Bokkie"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1617737361/interior/DSC00782_cwsspu.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1617737361/interior/DSC00782_cwsspu.jpg"
                alt="De eetkamer en keuken bij Bokkie"
                width={300}
                height={250}
              />
            </a>
          </SRLWrapper>
        </div>

        <div className="text">
          <h2>Locatie</h2>
          <p>
            In het voorjaar geurt de omgeving van de weelderig bloeiende
            bloesem, begin zomer kunt u overal in de omgeving heerlijke
            aardbeien en kersen kopen en later in het jaar pruimen, appels en
            peren. Op warme dagen kunt u op loopafstand heerlijk luieren aan de
            rivier.
          </p>
        </div>
      </main>

      <div className="text-col-2">
        <div className="col">
          <h2>Contactgegevens</h2>
          <p> Kerkstaat 1 Rijswijk GLD 4023AP</p>
        </div>
        <div className="col">
          <h2>Bereikbaarheid</h2>
          <p>
            Gesitueerd het midden van het land op een rustige plek met een ruime
            parkeerplaats voor de deur bent u met de auto binnen een uur in
            Amsterdam, Utrecht, Rotterdam of Den Bosch. Of binnen 20 minuten in
            de sfeervolle historische plaatsen Wijk bij Duurstede, Buren,
            Culemborg of Tiel.
          </p>
        </div>
      </div>

      <div className="text">
        <h2>Reserveren</h2>
        <p>
          We gebruiken Airbnb. Klik hier om te reserveren is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley
        </p>
      </div>

      <footer className={styles.footer}>
        <ul>
          <li>
            <Link href="/">Bij Bokkie</Link>
          </li>
          <li>&copy; 2021</li>
          <li>KvK 82171416</li>
        </ul>
      </footer>
    </div>
  );
}
