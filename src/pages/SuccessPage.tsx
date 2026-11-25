import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectBill } from '../store/selectors'
import { resetBooking } from '../store/slices/booking'
import styles from './SuccessPage.module.css'

export default function SuccessPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { train, trainClass, passengers, from, to, date } = useAppSelector((state) => state.Booking)
  const bill = useAppSelector(selectBill)
  const pnr = useMemo(() => String(Math.floor(1_000_000_000 + Math.random() * 8_999_999_999)), [])

  if (!train || !trainClass) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty">
            Билета нет — бронь пустая.{' '}
            <Link to="/" className={styles.link}>
              Начать заново
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const qrValue = JSON.stringify({
    pnr,
    train: `${train.id} ${train.name}`,
    from,
    to,
    date,
    class: trainClass.type,
    passengers: passengers.map((passenger) => passenger.name),
    total: bill.total,
  })

  // если дату не выбирали в форме — берём дату отправления из карточки поезда
  const prettyDate = date ? new Date(date).toLocaleDateString('ru-RU') : train.departure.date

  const handleBookAnother = () => {
    dispatch(resetBooking())
    navigate('/')
  }

  return (
    <div className="page">
      <div className="container">
        <div className={styles.head}>
          <span className={styles.check}>✓</span>
          <h1 className="pageTitle">Ticket booked</h1>
          <p className="pageSubtitle">Покажите этот QR на входе. PNR {pnr}</p>
        </div>

        <div className={styles.ticket}>
          <div className={styles.main}>
            <div className={styles.route}>
              <div>
                <p className={styles.station}>{from || train.departure.station}</p>
                <p className={styles.time}>{train.departure.time}</p>
                <p className={styles.code}>{train.departure.code}</p>
              </div>
              <div className={styles.middle}>
                <span className={styles.duration}>{train.duration}</span>
                <span className={styles.dash} />
                <span className={styles.trainNumber}>
                  {train.id} · {train.name}
                </span>
              </div>
              <div className={styles.right}>
                <p className={styles.station}>{to || train.arrival.station}</p>
                <p className={styles.time}>{train.arrival.time}</p>
                <p className={styles.code}>{train.arrival.code}</p>
              </div>
            </div>

            <div className={styles.meta}>
              <div>
                <span className={styles.metaLabel}>Date</span>
                <span className={styles.metaValue}>{prettyDate}</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Class</span>
                <span className={styles.metaValue}>{trainClass.type}</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Passengers</span>
                <span className={styles.metaValue}>{passengers.length}</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Paid</span>
                <span className={styles.metaValue}>₹{bill.total}</span>
              </div>
            </div>

            <ul className={styles.passengers}>
              {passengers.map((passenger, index) => (
                <li key={passenger.id}>
                  <span className={styles.seat}>{index + 1}</span>
                  {passenger.name || 'без имени'}, {passenger.age || '—'},{' '}
                  {passenger.gender === 'male' ? 'M' : 'F'}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.side}>
            <div className={styles.qr}>
              <QRCodeSVG value={qrValue} size={132} bgColor="#ffffff" fgColor="#0e1b2c" />
            </div>
            <p className={styles.pnr}>PNR {pnr}</p>
            <button type="button" className="btn" onClick={handleBookAnother}>
              Book another ticket
            </button>
            <button type="button" className="btn btnGhost" onClick={() => window.print()}>
              Download ticket (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
