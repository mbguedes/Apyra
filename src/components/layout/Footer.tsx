import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "../../styles/Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>Octant<span className={styles.dot}>.</span></span>
            <span className={styles.description}>
               Transformando presença digital em performance real.
            </span>
          </div>
          <div className={styles.links}>
            <div className={styles.column}>
              <h4 className={styles.title}>Empresa</h4>
              <Link href="#sobre" className={styles.link}>Sobre</Link>
              <Link href="#servicos" className={styles.link}>Serviços</Link>
              <Link href="#diferenciais" className={styles.link}>Diferenciais</Link>
            </div>
            <div className={styles.column}>
              <h4 className={styles.title}>Social</h4>
              <div className={styles.socialRow}>
                <a href="#" className={styles.socialLink} aria-label="Instagram"><FaInstagram size={22} /></a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn"><FaLinkedin size={22} /></a>
                <a href="#" className={styles.socialLink} aria-label="Facebook"><FaFacebook size={22} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Octant - Mídia Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
