import TicketSearchForm from '../components/TicketSearchForm'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.grain} />
      <div className={`${styles.inner} container`}>
        <p className={styles.kicker}>Indian Railways · demo booking</p>
        <h1 className={styles.title}>Let&rsquo;s find the ticket</h1>
        <p className={styles.subtitle}>
          Три шага: выбрал города — посмотрел поезда — забронировал. Без регистрации и без сервера.
        </p>

        <div className={styles.formWrap}>
          <TicketSearchForm />
        </div>

        <ul className={styles.perks}>
          <li>199 станций в подсказках</li>
          <li>Классы 3A / 2A / 1A</li>
          <li>Еда, багаж и промокоды</li>
          <li>QR-билет сразу после оплаты</li>
        </ul>
      </div>
    </section>
  )
}
