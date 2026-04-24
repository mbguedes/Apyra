import styles from "../../styles/Differentials.module.css";

const features = [
  {
    title: "Estratégia Data-Driven",
    description: "Transformamos dados brutos em inteligência de negócio. Nossas ações são fundamentadas em métricas concretas, garantindo que cada passo seja estratégico e justificável."
  },
  {
    title: "Processos Ágeis",
    description: "Unimos a mentalidade Lean à excelência técnica. Entregamos valor de forma contínua e iterativa sem perder qualidade, garantindo que o seu projeto evolua no ritmo que o mercado exige."
  },
  {
    title: "Transparência na Entrega",
    description: "Visibilidade total sobre o que está sendo feito e os resultados alcançados. Comunicação clara e sem letras miúdas, você acompanha cada etapa do processo através de dashboards e relatórios em tempo real."
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
              Substituímos a intuição por engenharia de dados. Nosso foco é a eficiência operacional e o crescimento sustentável, garantindo que cada investimento se transforme em resultado escalável para o seu negócio. Indo muito além de likes e visualizações. Valor no que realmente importa: lucratividade, processos inteligentes e o fortalecimento do valor da sua marca através da inovação.
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
