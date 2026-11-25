import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { applyPromo, clearPromo } from '../store/slices/booking'
import { PROMOS } from '../store/data/offers'
import styles from './OffersList.module.css'

export default function OffersList() {
  const dispatch = useAppDispatch()
  const { promo } = useAppSelector((state) => state.Booking)
  const [manualCode, setManualCode] = useState('')
  const [error, setError] = useState('')

  const apply = (code: string) => {
    const found = PROMOS.find((item) => item.code === code.trim().toUpperCase())
    if (!found) {
      setError('Такого промокода нет')
      return
    }
    setError('')
    dispatch(applyPromo({ code: found.code, discount: found.discount }))
    setManualCode('')
  }

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Offers</h2>

      <ul className={styles.list}>
        {PROMOS.map((item) => (
          <li key={item.code} className={styles.offer}>
            <div>
              <span className={styles.code}>{item.code}</span>
              <p className={styles.label}>{item.label}</p>
            </div>
            <button
              type="button"
              className={styles.apply}
              onClick={() => apply(item.code)}
              disabled={promo === item.code}
            >
              {promo === item.code ? 'Applied' : 'Apply'}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.manual}>
        <input
          className={styles.input}
          placeholder="Enter promo code"
          value={manualCode}
          onChange={(event) => setManualCode(event.target.value)}
        />
        <button type="button" className={styles.apply} onClick={() => apply(manualCode)}>
          Apply code
        </button>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      {promo && (
        <p className={styles.applied}>
          Применён <b>{promo}</b>
          <button type="button" className={styles.clear} onClick={() => dispatch(clearPromo())}>
            Remove
          </button>
        </p>
      )}
    </section>
  )
}
