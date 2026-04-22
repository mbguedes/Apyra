import styles from "../../styles/Experience.module.css";

export function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <p className={styles.label}>Bagagem de gestão em marcas globais como</p>
        <div className={styles.brands}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className={styles.brandImg} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Reckitt_logo.svg" alt="Reckitt" className={styles.brandImg} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Renault_2021_Text.svg" alt="Renault" className={styles.brandImg} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Sanofi_logo_%282022%29.svg" alt="Sanofi" className={styles.brandImg} />
        </div>
      </div>
    </section>
  );
}
