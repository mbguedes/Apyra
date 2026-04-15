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
                src="/dashboard-ui.png" 
                alt="Dashboard visual de performance data-driven"
                fill
                className={styles.realImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.overlay}></div>
              <span className={styles.imageBadge}>Data Driven</span>
            </div>
            
            {/* Stats overlapping or directly below to give context to the 'Data Driven' image */}
            <div className={styles.statsCard}>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>+150</span>
                <span className={styles.statLabel}>Projetos Entregues</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.statBox}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Retenção de Clientes</span>
              </div>
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
                No universo digital, os dados são como uma montanha de informações brutas. 
                Muitas vezes sem formato, são apenas volume. A Apyra existe para lapidar 
                essa informação e desenhar o caminho ao topo.
              </p>
            </div>

            <div className={styles.storyBlocks}>
              <div className={styles.storyBlock}>
                <div className={styles.blockIcon}>⛰️</div>
                <div className={styles.blockText}>
                  <h3 className={styles.blockTitle}>O Significado de Apyra</h3>
                  <p className={styles.blockDesc}>
                    Do Tupi, significa <strong>vértice</strong>: o ponto onde as linhas se encontram e formam o cume. Em um anúncio, 
                    é o encontro exato entre estratégia de alto nível, a ferramenta certa e a transparência total.
                  </p>
                </div>
              </div>

              <div className={styles.storyBlock}>
                <div className={styles.blockIcon}>⚙️</div>
                <div className={styles.blockText}>
                  <h3 className={styles.blockTitle}>Experiência Global</h3>
                  <p className={styles.blockDesc}>
                    Fundada por Stefan Fagury e Márcio B. Guedes, com bagagem na gestão de contas globais. 
                    Somos a consultoria que transforma orçamentos em vértices de crescimento, convertendo 
                    cada centavo em lucratividade.
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
