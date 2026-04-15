import styles from "../../styles/Differentials.module.css";

const features = [
  {
    title: "Estratégia Data-Driven",
    description: "Decisões baseadas em números e dados reais, não em achismos."
  },
  {
    title: "Processos Ágeis",
    description: "Velocidade de execução sem comprometer a qualidade da entrega final."
  },
  {
    title: "Foco Absoluto em ROAS",
    description: "Cada centavo investido tem como principal objetivo o retorno sobre investimento das campanhas."
  }
];

export function Differentials() {
  return (
    <section id="diferenciais" className={styles.differentials}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Por que a Apyra?</h2>
            <p className={styles.subtitle}>
              Vamos além dos likes e visualizações. Nosso foco é faturamento, crescimento sustentável e brand equity.
            </p>
          </div>
          <div className={styles.features}>
            {features.map((item, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.check}>✓</div>
                <div>
                  <h4 className={styles.featureTitle}>{item.title}</h4>
                  <p className={styles.featureDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
