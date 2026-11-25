import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { selectBill } from '../store/selectors'
import styles from './PaymentPage.module.css'

type Method = 'upi' | 'card' | 'netbanking'

const METHODS: { id: Method; label: string; note: string }[] = [
  { id: 'upi', label: 'UPI', note: 'Оплата по QR или по id' },
  { id: 'card', label: 'Credit / Debit card', note: 'Visa, Mastercard, RuPay' },
  { id: 'netbanking', label: 'Net banking', note: 'Все индийские банки' },
]

export default function PaymentPage() {
  const navigate = useNavigate()
  const { train, trainClass, passengers, from, to } = useAppSelector((state) => state.Booking)
  const bill = useAppSelector(selectBill)
  const [method, setMethod] = useState<Method>('upi')
  const [paying, setPaying] = useState(false)

  if (!train || !trainClass) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty">
            Бронь пустая.{' '}
            <Link to="/" className={styles.link}>
              Начать поиск
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handlePay = () => {
    setPaying(true)
    // Заглушка вместо платёжного шлюза: по ТЗ сервера нет
    window.setTimeout(() => navigate('/success'), 600)
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="pageTitle">Payment</h1>
        <p className="pageSubtitle">Шаг 3 из 4 · проверьте данные и выберите способ оплаты</p>

        <div className={styles.layout}>
          <div>
            <section className={styles.summary}>
              <h2 className={styles.sectionTitle}>Booking summary</h2>
              <dl className={styles.dl}>
                <div>
                  <dt>Route</dt>
                  <dd>
                    {from || 'Any station'} → {to || 'Any station'}
                  </dd>
                </div>
                <div>
                  <dt>Train</dt>
                  <dd>
                    {train.number} {train.name}
                  </dd>
                </div>
                <div>
                  <dt>Class</dt>
                  <dd>
                    {trainClass.type} · ₹{trainClass.price}
                  </dd>
                </div>
                <div>
                  <dt>Passengers</dt>
                  <dd>{passengers.map((passenger) => passenger.name || 'без имени').join(', ')}</dd>
                </div>
              </dl>
            </section>

            <section className={styles.methods}>
              <h2 className={styles.sectionTitle}>Payment method</h2>
              {METHODS.map((item) => (
                <label
                  key={item.id}
                  className={[styles.method, method === item.id ? styles.active : ''].join(' ')}
                >
                  <input
                    type="radio"
                    name="method"
                    checked={method === item.id}
                    onChange={() => setMethod(item.id)}
                  />
                  <span>
                    <b>{item.label}</b>
                    <em>{item.note}</em>
                  </span>
                </label>
              ))}

              {method === 'card' && (
                <div className={styles.cardFields}>
                  <input className={styles.input} placeholder="Card number" inputMode="numeric" />
                  <input className={styles.input} placeholder="MM / YY" inputMode="numeric" />
                  <input className={styles.input} placeholder="CVV" inputMode="numeric" />
                </div>
              )}
            </section>
          </div>

          <aside className={styles.aside}>
            <p className={styles.amountLabel}>К оплате</p>
            <p className={styles.amount}>₹{bill.total}</p>
            <button type="button" className="btn" onClick={handlePay} disabled={paying}>
              {paying ? 'Processing…' : 'Pay'}
            </button>
            <button
              type="button"
              className="btn btnGhost"
              onClick={() => navigate('/review-booking')}
            >
              Back
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}
