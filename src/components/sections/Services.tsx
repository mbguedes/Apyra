import styles from "../../styles/Services.module.css";

const servicesData = [
  { title: "Gestão de Mídia Full Funnel", description: "Programática (Display, Vídeo, Native, Áudio, CTV), Social Ads e DOOH integrados para cobrir cada etapa da jornada do consumidor.", icon: "📈", angle: -90 },
  { title: "Branding & Design", description: "Criamos identidades visuais memoráveis e interfaces envolventes que transmitem a essência da sua marca.", icon: "✨", angle: -18 },
  { title: "Data", description: "Dashboards, analytics avançado e Business Intelligence para transformar dados brutos em decisões estratégicas e vantagem competitiva.", icon: "📊", angle: 54 },
  { title: "Auditoria de Contas", description: "Diagnóstico completo das suas campanhas e presença digital para elevar sua Maturidade Digital e maximizar o retorno sobre investimento.", icon: "🔍", angle: 126 },
  { title: "Desenvolvimento Web", description: "Sites e plataformas desenvolvidos sob medida — cada projeto tratado como peça exclusiva, com código limpo, performance irrepreensível e design que comunica autoridade.", icon: "💎", angle: 198 }
];

export function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Expertise Digital</h2>
          <p className={styles.subtitle}>
            Soluções completas para posicionar, escalar e consolidar sua marca.
          </p>
        </div>
        
        <div className={styles.circle}>
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ '--angle': `${service.angle}deg`, '--radius': '340px' } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
