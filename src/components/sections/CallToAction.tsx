import Link from "next/link";
import styles from "../../styles/CallToAction.module.css";

export function CallToAction() {
  return (
    <section id="contato" className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Pronto para elevar seu faturamento?</h2>
          <p className={styles.description}>
            Agende uma consultoria estratégica gratuita. Vamos analisar seu cenário atual
            e desenhar o plano de ação ideal para a sua empresa.
          </p>
          <div className={styles.buttonGroup}>
            <a href="https://wa.me/5511949968105?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Apyra!" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
          <span className={styles.icon}>📱</span>
          Falar com Consultor via WhatsApp
        </a>
          </div>
        </div>
      </div>
    </section>
  );
}
