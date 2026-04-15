import styles from "../../styles/Experience.module.css";

export function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <p className={styles.label}>Bagagem de gestão em marcas globais como</p>
        <div className={styles.brands}>
          <span className={styles.brand}>Amazon</span>
          <span className={styles.separator}>|</span>
          <span className={styles.brand}>Reckitt</span>
          <span className={styles.separator}>|</span>
          <span className={styles.brand}>Renault</span>
          <span className={styles.separator}>|</span>
          <span className={styles.brand}>Sanofi</span>
        </div>
      </div>
    </section>
  );
}
