import Head from "next/head";
import styles from "static/scss/pages/Home.module.scss";

import MetaHead from "components/meta-head/MetaHead";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

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

      <Header />

      <div className={styles.bigPicture}>
        <Image
          src="/v1617737361/interior/IMG_1257_psu2ty.jpg"
          alt="De slaapkamer Bij Bokkie"
          width={2000}
          height={1000}
        />
      </div>

      <main className={styles.main}>
        <div className="text">
          <h1>B&amp;B Bij Bokkie vanaf 60 euro per nacht.</h1>

          <p>
            Bij Bokkie is een B&B vlakbij de rivier de Nederrijn in een klein
            dorpje in de Betuwe. Vanuit uw kamer heeft u uitzicht op de dijk.
            Aan de andere kant van de dijk zijn uitgestrekte uiterwaarden en
            daarachter de rivier. B&B Bij Bokkie ligt direct aan de lange
            afstands wandelroutes het Maarten van Rossumpad en het Limespad en
            langs verschillende fietsroutes. Bokkie was de bijnaam van de
            eigenaar van het dorpscafé wat vroeger in dit pand gevestigd was.
          </p>
          <p>
            Deze studio is gevestigd is het achterste deel van een woonhuis. De
            ruimte is gescheiden van het woonhuis en is dus voorzien van een
            eigen toegang, privé badkamer en toilet.
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
                alt="De slaapkamer Bij Bokkie"
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
                alt="De eettafel en keuken Bij Bokkie"
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
                alt="De een de keuken Bij Bokkie"
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
                alt="Het toilet Bij Bokkie"
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
                alt="De badkamer Bij Bokkie"
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
                alt="De kapstok en gang Bij Bokkie"
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
                alt="De eetkamer en keuken Bij Bokkie"
                width={300}
                height={250}
              />
            </a>
          </SRLWrapper>
        </div>
        <div className={styles.text}>
          <h2>De omgeving</h2>
          <p>
            In het voorjaar geurt de omgeving van de weelderig bloeiende
            bloesem, begin zomer kunt u overal bij fruitbedrijven in de buurt
            heerlijke aardbeien en kersen kopen en later in het jaar pruimen,
            appels en peren. Op warme dagen kunt u op loopafstand lekker luieren
            aan de rivier.
          </p>
          <p>
            Aan de overkant van de rivier ligt het stadje Wijk bij Duurstede.
            Hier vindt u de restanten van Kasteel Duurstede. Een bezoek aan het
            stadje is zeker de moeite waard. Bovendien vindt u er ook veel
            gezellige terrassen en eetgelegenheden. Ook het dichtstbijzijnde
            Buren met de authentieke stadswal en het voormalige Burgerweeshuis
            en de unieke Oranje geschiedenis is een uitstapje waard.
          </p>

          <p>
            Wilt u meer weten over het dorp Rijswijk zelf, kan ik u meenemen
            naar de Martinuskerk en/of Korenmolen De Hoop zodra de Coronaregels
            dat weer toelaten.
          </p>
        </div>

        <div className={styles.gallery}>
          <SRLWrapper options={options}>
            <a
              href="/v1619192864/outside/IMG_1445_pcnfki.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1619192864/outside/IMG_1445_pcnfki.jpg"
                alt="B&amp;B Bokkie van buiten"
                width={300}
                height={250}
              />
            </a>

            <a
              href="/v1619192864/outside/4b6ab25e-a508-457f-8df2-d93d57eadbef_mfzfk8.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1619192864/outside/4b6ab25e-a508-457f-8df2-d93d57eadbef_mfzfk8.jpg"
                alt="Lekker ontbijt voor twee personen"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1619192864/outside/IMG_0345_mgdpyz.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1619192864/outside/IMG_0345_mgdpyz.jpg"
                alt="Uitje naar de molen"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1619192864/outside/IMG_0437_y9mmvm.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1619192864/outside/IMG_0437_y9mmvm.jpg"
                alt="Weilanden in de buurt"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1619192864/outside/IMG_2185_kobso9.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1619192864/outside/IMG_2185_kobso9.jpg"
                alt="Tot Hier, kunst aan de Lek"
                width={300}
                height={250}
              />
            </a>

            <a
              href="/v1619192864/outside/IMG_1067_juzk3f.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1619192864/outside/IMG_1067_juzk3f.jpg"
                alt="Het Romeinse Limespad"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1619192864/outside/IMG_2290_s39lcn.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1619192864/outside/IMG_2290_s39lcn.jpg"
                alt="Aan de dijk"
                width={300}
                height={250}
              />
            </a>
            <a
              href="/v1619192864/outside/IMG_1968_dktwpu.jpg"
              className={styles.thumbnail}
            >
              <Image
                src="/v1619192864/outside/IMG_1968_dktwpu.jpg"
                alt="De lek met zonsondergang"
                width={300}
                height={250}
              />
            </a>
          </SRLWrapper>
        </div>

        <div className={styles.textCol2}>
          <div className={styles.col}>
            <h2>Prijs - één persoon</h2>
            <p>€ 60 euro voor een persoon per nacht</p>

            <ul>
              <li>Schoonmaakkosten</li>
              <li>Inclusief ontbijt</li>
              <li>Een opgemaakt bed</li>
              <li>bosje bloemen uit de tuin, mits voorradig</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h2>Prijs - twee personen</h2>
            <p>€ 75 euro voor twee personen per nacht </p>

            <ul>
              <li>Schoonmaakkosten</li>
              <li>Inclusief ontbijt</li>
              <li>Een opgemaakt bed</li>
              <li>bosje bloemen uit de tuin, mits voorradig</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className={styles.textCol2}>
          <div className={styles.col}>
            <h2>Ruimte</h2>
            <p>B&amp;B kamer van 17m² inclusief:</p>

            <ul>
              <li>Tweepersoons bed (140x200cm)</li>
              <li>Kitchenette</li>
              <li>Badkamer</li>
              <li>Toilet</li>
              <li>Privé terras </li>
            </ul>

            <strong>In de kamer</strong>

            <ul>
              <li>Gratis Wifi</li>
              <li>Bordspellen </li>
              <li>Boeken en informatiepakket over de omgeving</li>
              <li>EHBO kit</li>
              <li>Brandblusser</li>
              <li>Rookmelder</li>
              <li>Verwarming doormiddel van vloerverwarming</li>
              <li>Muggengaas om het raam af te sluiten</li>
            </ul>
          </div>

          <div className={`${styles.col} ${styles.colHeader}`}>
            <strong>In de keuken</strong>

            <ul>
              <li>Mini koelkast</li>
              <li>Inductiekookplaat</li>
              <li>Kookpan en koekenpan</li>
              <li>Borden, Bestek, glazen, theeglazen en koffiekoppen</li>
              <li>Keukendoeken en afwasmiddel</li>
              <li>Waterkoker</li>
              <li>Nespresso koffiezetapparaat</li>
            </ul>

            <strong>In badkamer en toilet</strong>
            <ul>
              <li>Handdoeken</li>
              <li>Zeep, shampoo, bodylotion</li>
            </ul>

            <strong>Gedeeld</strong>

            <ul>
              <li>Parkeerplaats op eigen terrein</li>
              <li>Gebruik van palletbank zithoek</li>
              <li>Tafeltennistafel</li>
              <li>Mini klimmuur in overleg</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className={styles.text}>
          <h2>Extra</h2>

          <p>
            Rondleiding naar Korenmolen de Hoop en of Martinuskerk -{" "}
            <strong>€ vrijwillige bijdrage</strong>
          </p>

          <p>
            Ophaalservice van het station in Culemborg of bijvoorbeeld een
            busstation - <strong>€ 12,50 per rit</strong> <br />
            Ook bagage pick-up op het station is mogelijk, zodat u zonder bagage
            naar Rijswijk kunt wandelen.
          </p>
        </div>

        <div className={styles.text}>
          <h2>Per auto</h2>
          <p>
            Per auto A2 Afrit Culemborg {">"} richting Kesteren Afslag Rijswijk{" "}
            {">"} De Heuvel Rechtsaf Rijswijk {">"} Pr. Irenestraat Tweede
            straat links {">"} Korte Bosstraat Eerste straat rechts {">"} Baron
            van Brakellstraat Einde rechts{">"} Kerkstraat Laatste huis aan de
            rechterkant: Bij Bokkie
          </p>
        </div>
        <div className={styles.text}>
          <h2>Per trein</h2>
          <p>
            Station Culemborg (pick-up 12,50 euro) Per bus: Vanaf station
            Culemborg lijn: Arriva Bus 46 {">"} richting Tiel Bushalte Kerk,
            Zoelmond Arriva Buurtbus {">"} richting Maurik Bushalte
            Hoekenburgplein, Rijswijk Gelderland 5 minuten lopen naar Bij Bokkie
            op Kerkstraat 1
          </p>

          <p>
            Vanaf station Tiel: Arriva Bus 44 {">"} richting Wageningen Bushalte
            Rabobank, Maurik Arriva Buurtbus 263 {">"} richting Beusichem
            Bushalte Hoekenburgplein, Rijswijk Gelderland 5 minuten lopen naar
            Bij Bokkie op Kerkstraat 1
          </p>

          <p>
            Vanaf station Utrecht: U-OV U-link 41 {">"} richting Wijk bij
            Duurstede Bushalte Steenstraat-centrum, Wijk bij Duurstede 15
            minuten lopen naar Veerdienst Wijk bij Duurstede - Rijswijk 10
            minuten lopen naar Bij Bokkie op Kerkstraat 1
          </p>
        </div>

        <div className={styles.textCol2}>
          <div className={styles.col}>
            <h2>Contactgegevens</h2>
            <p> Kerkstaat 1 Rijswijk GLD 4023AP</p>
            <p>
              <strong>Email</strong>: jolanda@vandevathorst.nl
            </p>
            <p>
              <strong>Telefoon</strong>: 06-12121679
            </p>
          </div>

          <div className={styles.col}>
            <iframe
              title="Bokkie locatie via google maps"
              width="100%"
              height="225"
              style={{ border: 0, outline: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_KEY}&q=Cyberhuis,Netherlands`}
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
