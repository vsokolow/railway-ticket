import ClassCard from './ClassCard'
import type { Train, TrainClass } from '../types/trainsTypes'
import styles from './ClassCardsContainer.module.css'

interface Props {
  train: Train
  classes: TrainClass[]
}

export default function ClassCardsContainer({ train, classes }: Props) {
  return (
    <div className={styles.list}>
      {classes.map((trainClass) => (
        <ClassCard key={trainClass.type} {...trainClass} train={train} />
      ))}
    </div>
  )
}
