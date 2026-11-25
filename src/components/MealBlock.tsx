import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleMeal } from '../store/slices/booking'
import { MEALS } from '../store/data/offers'
import styles from './MealBlock.module.css'

export default function MealBlock() {
  const dispatch = useAppDispatch()
  const meal = useAppSelector((state) => state.Booking.meal)

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Add a meal</h2>
      <div className={styles.items}>
        {MEALS.map((item) => {
          const added = meal?.name === item.name
          return (
            <div key={item.name} className={styles.item}>
              <div>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>₹{item.price}</p>
              </div>
              <button
                type="button"
                className={added ? styles.remove : styles.add}
                onClick={() => dispatch(toggleMeal(item))}
              >
                {added ? 'Remove' : 'Add'}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
