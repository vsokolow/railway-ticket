import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className="page">
      <div className={`${styles.wrap} container`}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Такой страницы нет</h1>
        <p className={styles.text}>
          Похоже, поезд ушёл без вас. Вернитесь на главную и найдите билет заново.
        </p>
        <Link to="/" className="btn">
          На главную
        </Link>
      </div>
    </div>
  )
}
