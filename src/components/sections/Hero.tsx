import Link from "next/link";
import styles from "../../styles/Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.kicker}>
            Agência de Performance Digital
          </div>
          <h1 className={styles.title}>
            Escale o seu crescimento de forma <span className={styles.highlight}>estratégica</span> e sustentável.
          </h1>
          <p className={styles.description}>
            Aumentamos a Maturidade Digital da sua marca, através de dados, campanhas eficientes, provocações e transparência, trazendo resultados reais em cada etapa do funil.
          </p>
          <div className={styles.actions}>
            <a href="https://wa.me/5511949968105?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Apyra!" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              Fale com um Especialista
            </a>
            <Link href="#servicos" className={styles.secondaryButton}>
              Nossos Serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
