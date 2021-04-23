import styles from "components/footer/footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <Link href="/">Bij Bokkie</Link>
        </li>
        <li>&copy; {`${new Date().getFullYear()}`}</li>
        <li>KvK 82171416</li>
      </ul>
    </footer>
  );
};

export default Footer;
