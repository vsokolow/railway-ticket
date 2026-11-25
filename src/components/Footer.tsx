import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <span>Rail Way — демо-проект модуля 3, данные вымышленные</span>
        <span className={styles.year}>2026</span>
      </div>
    </footer>
  )
}
