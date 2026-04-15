import Link from "next/link";
import styles from "../../styles/Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            Agência de Performance Digital
          </div>
          <h1 className={styles.title}>
            Alcance o <span className={styles.highlight}>Vértice</span> do seu Crescimento
          </h1>
          <p className={styles.description}>
            Transformamos a montanha de dados do universo digital no caminho exato para o topo. Engenharia da performance aplicada ao seu negócio.
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
