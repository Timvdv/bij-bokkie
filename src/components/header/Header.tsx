import styles from "components/header/header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.textLink}>
        <Link href="/">Bij Bokkie</Link>
      </span>

      <div className={styles.logo}>
        <Link href="/">
          <img
            src="http://timvandevathorst.nl/bij-bokkie/logo.png"
            alt="Bij Bokkie logo"
          />
        </Link>
      </div>

      <ul className={styles.menu}>
        <li>
          <Link href="/over-ons.html">Over ons</Link>
        </li>
        <li className={styles.bookButton}>
          <Link href="/boeken.html">Boek nu</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
