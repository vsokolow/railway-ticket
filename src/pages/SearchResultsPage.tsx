import TicketSearchForm from '../components/TicketSearchForm'
import TrainCardsContainer from '../components/TrainCardsContainer'
import { useAppSelector } from '../store/hooks'
import styles from './SearchResultsPage.module.css'

const plural = (count: number) => {
  if (count % 10 === 1 && count % 100 !== 11) return 'пассажир'
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return 'пассажира'
  return 'пассажиров'
}

export default function SearchResultsPage() {
  const { from, to, date, passengersCount } = useAppSelector((state) => state.Booking)

  const prettyDate = date
    ? new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
    : ''

  return (
    <div className="page">
      <div className="container">
        <TicketSearchForm variant="compact" />

        <header className={styles.head}>
          <div>
            <h1 className="pageTitle">Available trains</h1>
            <p className="pageSubtitle">
              {from || 'Any station'} → {to || 'Any station'}
              {prettyDate && ` · ${prettyDate}`} · {passengersCount} {plural(passengersCount)}
            </p>
          </div>
          <span className={styles.hint}>Выберите класс вагона, чтобы перейти к брони</span>
        </header>

        <TrainCardsContainer />
      </div>
    </div>
  )
}
