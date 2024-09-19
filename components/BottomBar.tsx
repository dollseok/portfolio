import styles from "../styles/BottomBar.module.scss";

export default function Bottombar() {
  return (
    <section className={styles.bottomBarSection}>
      <div className={styles.bottomBarItem}>HOME</div>
      <div className={styles.bottomBarItem}>PROJECTS</div>
      <div className={styles.bottomBarItem}>CONTACT</div>
    </section>
  );
}
