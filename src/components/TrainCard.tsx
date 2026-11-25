import ClassCardsContainer from './ClassCardsContainer'
import type { Train } from '../types/trainsTypes'
import styles from './TrainCard.module.css'

interface Props {
  train: Train
}

export default function TrainCard({ train }: Props) {
  return (
    <article className={styles.card}>
      <header className={styles.head}>
        <div>
          <h3 className={styles.name}>
            <span className={styles.number}>{train.id}</span> {train.name}
          </h3>
          <p className={styles.route}>
            {train.departure.station} ({train.departure.code}) → {train.arrival.station} (
            {train.arrival.code})
          </p>
        </div>
        <span className={styles.duration}>{train.duration}</span>
      </header>

      <div className={styles.times}>
        <span>{train.departure.time}</span>
        <span className={styles.line} />
        <span>{train.arrival.time}</span>
      </div>

      <p className={styles.runsOn}>Runs on: {train.runsOn}</p>

      <ClassCardsContainer train={train} classes={train.classes} />
    </article>
  )
}
