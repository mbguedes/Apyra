import Image from "next/image";
import styles from "../../styles/About.module.css";

export function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Visual Column */}
          <div className={styles.visualColumn}>
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/founders.jpg"
                alt="Stefan Fagury e Márcio B. Guedes - Fundadores da Octant"
                fill
                className={styles.realImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlay}></div>
              {/*<span className={styles.imageBadge}>Fundadores</span>*/}
            </div>
            
            {/* Floating Brand Logo overlapping the image */}
            <div className={styles.brandCard}>
              <span className={styles.octantText}>Octant</span>
              <span className={styles.dotText}>.</span>
            </div>
          </div>

          {/* Text Column */}
          <div className={styles.contentColumn}>
            <div className={styles.header}>
              <h2 className={styles.title}>
                Não acreditamos em execução reativa.<br />
                <span className={styles.highlight}>Acreditamos na Engenharia da Performance.</span>
              </h2>
              <p className={styles.leadDescription}>
                No universo digital, navegar sem direção é apenas desperdiçar velocidade.
                A Octant existe para determinar sua posição exata no mercado e traçar o
                rumo mais eficiente até os resultados que a sua marca merece.
              </p>
            </div>

            <div className={styles.storyBlocks}>
              <div className={styles.storyBlock}>
                <div className={styles.blockIcon}>🧭</div>
                <div className={styles.blockText}>
                  <h3 className={styles.blockTitle}>O Significado de Octant</h3>
                  <p className={styles.blockDesc}>
                    Do latim <strong>octans</strong>: instrumento de navegação que permitia aos marinheiros determinar sua posição exata nos oceanos. No digital, somos o instrumento que posiciona sua marca com precisão e traça o caminho mais eficiente até os seus resultados.
                  </p>
                </div>
              </div>

              <div className={styles.storyBlock}>
                <div className={styles.blockIcon}>⚙️</div>
                <div className={styles.blockText}>
                  <h3 className={styles.blockTitle}>Experiência Global</h3>
                  <p className={styles.blockDesc}>
                    Fundada por Stefan Fagury e Márcio B. Guedes, com bagagem na gestão de contas globais. 
                    Somos uma Solução que transforma dados em resultados de forma multidisciplinar, transformando 
                    investimentos em resultados reais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
