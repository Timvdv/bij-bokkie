import styles from "components/header/header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Bij Bokkie</Link>

      <div className={styles.logo}>
        <Link href="/">
          <img src="/bij-bokkie/logo.png" alt="Bij Bokkie logo" />
        </Link>
      </div>

      <ul className={styles.menu}>
        <li>
          <Link href="/bij-bokkie/over-ons.html">Over ons</Link>
        </li>
        <li>
          <Link href="/bij-bokkie/boeken.html">Boek nu</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
