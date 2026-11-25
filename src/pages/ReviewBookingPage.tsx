import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import PassengerForm from '../components/PassengerForm'
import BillDetails from '../components/BillDetails'
import OffersList from '../components/OffersList'
import MealBlock from '../components/MealBlock'
import BaggageBlock from '../components/BaggageBlock'
import styles from './ReviewBookingPage.module.css'

export default function ReviewBookingPage() {
  const navigate = useNavigate()
  const { train, trainClass, passengers, from, to, date } = useAppSelector((state) => state.Booking)
  const [error, setError] = useState('')

  if (!train || !trainClass) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty">
            Бронь пока пустая — класс вагона не выбран.{' '}
            <Link to="/" className={styles.link}>
              Начать поиск
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleBookNow = () => {
    const filled = passengers.every(
      (passenger) => passenger.name.trim().length > 1 && passenger.age.trim() !== '',
    )
    if (!filled) {
      setError('Заполните имя и возраст каждого пассажира')
      return
    }
    setError('')
    navigate('/payment')
  }

  const prettyDate = date
    ? new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
    : '—'

  return (
    <div className="page">
      <div className="container">
        <h1 className="pageTitle">Review your booking</h1>
        <p className="pageSubtitle">
          {from || 'Any station'} → {to || 'Any station'} · {prettyDate} · {train.id}{' '}
          {train.name} · класс {trainClass.type}
        </p>

        <div className={styles.layout}>
          <div>
            <section className={styles.passengers}>
              <h2 className={styles.sectionTitle}>Passengers</h2>
              {passengers.map((passenger, index) => (
                <PassengerForm
                  key={passenger.id}
                  passenger={passenger}
                  index={index}
                  canRemove={passengers.length > 1}
                />
              ))}
            </section>

            <MealBlock />
            <OffersList />
            <BaggageBlock />
          </div>

          <aside className={styles.aside}>
            <BillDetails />
            {error && <p className={styles.error}>{error}</p>}
            <button type="button" className={`btn ${styles.pay}`} onClick={handleBookNow}>
              Book Now
            </button>
            <button
              type="button"
              className={`btn btnGhost ${styles.cancel}`}
              onClick={() => navigate('/search-results')}
            >
              Cancel
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}
