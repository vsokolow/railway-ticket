import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleBaggage } from '../store/slices/booking'
import { BAGGAGE_PRICE } from '../types/booking'
import styles from './BaggageBlock.module.css'

export default function BaggageBlock() {
  const dispatch = useAppDispatch()
  const baggage = useAppSelector((state) => state.Booking.baggage)
  const added = baggage > 0

  return (
    <section className={styles.block}>
      <div>
        <h2 className={styles.title}>Extra baggage</h2>
        <p className={styles.text}>
          +15 kg сверх нормы, ₹{BAGGAGE_PRICE} за билет. Стоимость добавится в Bill details.
        </p>
      </div>
      <button
        type="button"
        className={added ? styles.remove : styles.add}
        onClick={() => dispatch(toggleBaggage(BAGGAGE_PRICE))}
      >
        {added ? 'Remove' : 'Add to Ticket'}
      </button>
    </section>
  )
}
