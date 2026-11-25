import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={`${styles.header} ${isHome ? styles.dark : styles.light}`}>
      <div className={`${styles.inner} container`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.mark}>◈</span>
          Rail <span className={styles.logoAccent}>Way</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Book tickets</Link>
          <Link to="/search-results">Trains</Link>
        </nav>
      </div>
    </header>
  )
}
