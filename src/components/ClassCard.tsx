import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectTrain } from '../store/slices/booking'
import type { Train, TrainClass } from '../types/trainsTypes'
import styles from './ClassCard.module.css'

// Пропсы — это поля TrainClass (приходят спредом из контейнера, как в классе) плюс поезд
interface Props extends TrainClass {
  train: Train
}

const typeClass: Record<TrainClass['type'], string> = {
  '3A': styles.t3,
  '2A': styles.t2,
  '1A': styles.t1,
}

export default function ClassCard({ train, ...trainClass }: Props) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSelect = () => {
    dispatch(selectTrain({ train, trainClass }))
    navigate('/review-booking')
  }

  return (
    <button
      type="button"
      className={[styles.card, typeClass[trainClass.type]].join(' ')}
      onClick={handleSelect}
    >
      <span className={styles.class}>{trainClass.type}</span>
      <span className={trainClass.status === 'available' ? styles.avl : styles.wl}>
        {trainClass.status === 'available'
          ? `Avl - ${String(trainClass.availability).padStart(3, '0')}`
          : `WL - ${trainClass.availability}`}
      </span>
      {trainClass.fareType && <span className={styles.tatkal}>{trainClass.fareType}</span>}
      <span className={styles.price}>₹{trainClass.price}</span>
    </button>
  )
}
