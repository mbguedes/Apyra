import styles from "../../styles/Services.module.css";

const servicesData = [
  {
    title: "Gestão de Tráfego",
    description: "Anúncios otimizados em Google, Meta, TikTok e LinkedIn Ads para maximizar seu ROAS com precisão cirúrgica.",
    icon: "📈"
  },
  {
    title: "Branding & Design",
    description: "Criamos identidades visuais memoráveis e interfaces envolventes que transmitem a essência da sua marca.",
    icon: "✨"
  },
  {
    title: "SEO Estratégico",
    description: "Posicione sua empresa no topo das buscas do Google e atraia tráfego orgânico altamente qualificado.",
    icon: "🎯"
  },
  {
    title: "Social Media",
    description: "Estratégia de conteúdo inteligente para redes sociais que gera engajamento e constrói comunidade.",
    icon: "📱"
  }
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
        
        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.card}>
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
