import { useAppSelector } from '../store/hooks'
import TrainCard from './TrainCard'
import styles from './TrainCardsContainer.module.css'

export default function TrainCardsContainer() {
  const trains = useAppSelector((state) => state.TrainsSearchResults.trains)

  if (trains.length === 0) {
    return <p className="empty">Поездов не нашлось. Попробуйте другие города.</p>
  }

  return (
    <div className={styles.list}>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  )
}
