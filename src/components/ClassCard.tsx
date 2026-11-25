import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { selectTrain } from '../store/slices/booking'
import type { Train, TrainClass } from '../types/train'
import styles from './ClassCard.module.css'

interface Props {
  train: Train
  trainClass: TrainClass
}

const typeClass: Record<TrainClass['type'], string> = {
  '3A': styles.t3,
  '2A': styles.t2,
  '1A': styles.t1,
}

export default function ClassCard({ train, trainClass }: Props) {
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
      <span className={trainClass.status === 'AVL' ? styles.avl : styles.wl}>
        {trainClass.status === 'AVL'
          ? `Avl - ${String(trainClass.seats).padStart(3, '0')}`
          : `WL - ${trainClass.seats}`}
      </span>
      {trainClass.tatkal && <span className={styles.tatkal}>Tatkal</span>}
      <span className={styles.price}>₹{trainClass.price}</span>
    </button>
  )
}
