import { useAppSelector } from '../store/hooks'
import { selectBill } from '../store/selectors'
import styles from './BillDetails.module.css'

export default function BillDetails() {
  const { base, meal, mealName, baggage, service, discount, total } = useAppSelector(selectBill)

  return (
    <section className={styles.bill}>
      <h2 className={styles.title}>Bill details</h2>

      <ul className={styles.rows}>
        <li>
          <span>Base fare</span>
          <span className={styles.value}>₹{base}</span>
        </li>
        {meal > 0 && (
          <li>
            <span>Meal · {mealName}</span>
            <span className={styles.value}>₹{meal}</span>
          </li>
        )}
        {baggage > 0 && (
          <li>
            <span>Extra baggage</span>
            <span className={styles.value}>₹{baggage}</span>
          </li>
        )}
        <li>
          <span>Service charge</span>
          <span className={styles.value}>₹{service}</span>
        </li>
        {discount > 0 && (
          <li className={styles.discount}>
            <span>Discount</span>
            <span>−₹{discount}</span>
          </li>
        )}
      </ul>

      <div className={styles.total}>
        <span>Total charge</span>
        <span className={styles.totalValue}>₹{total}</span>
      </div>
    </section>
  )
}
