import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setSearch } from '../store/slices/booking'
import { indianRailwayStations } from '../store/data/stations'
import styles from './TicketSearchForm.module.css'

interface Props {
  variant?: 'hero' | 'compact'
}

// Один компонент на главную и на страницу результатов — как на консультации 17.11.
// Вариант вида переключается необязательным пропсом, стили собираются массивом.
export default function TicketSearchForm({ variant = 'hero' }: Props) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const booking = useAppSelector((state) => state.Booking)

  const [from, setFrom] = useState(booking.from)
  const [to, setTo] = useState(booking.to)
  const [date, setDate] = useState(booking.date)
  const [passengersCount, setPassengersCount] = useState(booking.passengersCount)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setSearch({ from, to, date, passengersCount }))
    navigate('/search-results')
  }

  return (
    <form
      className={[styles.form, variant === 'hero' ? styles.hero : styles.compact].join(' ')}
      onSubmit={handleSubmit}
    >
      <div className={styles.field}>
        <label className={styles.label} htmlFor="from">
          Departure
        </label>
        <input
          id="from"
          className={styles.input}
          list="stations"
          placeholder="New Delhi"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="to">
          Arrival
        </label>
        <input
          id="to"
          className={styles.input}
          list="stations"
          placeholder="Varanasi"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          required
        />
      </div>

      <datalist id="stations">
        {indianRailwayStations.map((station, index) => (
          // коды в массиве станций повторяются (HWH, PGT), поэтому ключ с индексом
          <option key={`${station.code}-${index}`} value={`${station.name} (${station.code})`} />
        ))}
      </datalist>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="date">
          Date
        </label>
        <input
          id="date"
          className={styles.input}
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="passengers">
          Passengers
        </label>
        <select
          id="passengers"
          className={styles.input}
          value={passengersCount}
          onChange={(event) => setPassengersCount(Number(event.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>

      <button className={styles.submit} type="submit">
        Ticket, Please!
      </button>
    </form>
  )
}
