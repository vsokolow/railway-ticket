import ClassCard from './ClassCard'
import type { Train } from '../types/train'
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
            <span className={styles.number}>{train.number}</span> {train.name}
          </h3>
          <p className={styles.route}>
            {train.from.name} ({train.from.code}) → {train.to.name} ({train.to.code})
          </p>
        </div>
        <span className={styles.duration}>{train.duration}</span>
      </header>

      <div className={styles.times}>
        <span>{train.from.time}</span>
        <span className={styles.line} />
        <span>{train.to.time}</span>
      </div>

      <div className={styles.classes}>
        {train.classes.map((trainClass) => (
          <ClassCard key={trainClass.type} train={train} trainClass={trainClass} />
        ))}
      </div>
    </article>
  )
}
