import { useAppDispatch } from '../store/hooks'
import { removePassenger, updatePassenger } from '../store/slices/booking'
import type { Passenger } from '../types/booking'
import styles from './PassengerForm.module.css'

interface Props {
  passenger: Passenger
  index: number
  canRemove: boolean
}

export default function PassengerForm({ passenger, index, canRemove }: Props) {
  const dispatch = useAppDispatch()

  const onChange = (field: 'name' | 'age' | 'gender', value: string) => {
    dispatch(updatePassenger({ id: passenger.id, field, value }))
  }

  return (
    <fieldset className={styles.card}>
      <legend className={styles.legend}>Passenger {index + 1}</legend>

      <div className={styles.grid}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input
            className={styles.input}
            value={passenger.name}
            onChange={(event) => onChange('name', event.target.value)}
            placeholder="As on the ticket"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Age</span>
          <input
            className={styles.input}
            type="number"
            min={1}
            max={120}
            value={passenger.age}
            onChange={(event) => onChange('age', event.target.value)}
            placeholder="28"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Gender</span>
          <select
            className={styles.input}
            value={passenger.gender}
            onChange={(event) => onChange('gender', event.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <button
          type="button"
          className={styles.remove}
          onClick={() => dispatch(removePassenger(passenger.id))}
          disabled={!canRemove}
        >
          Remove
        </button>
      </div>
    </fieldset>
  )
}
