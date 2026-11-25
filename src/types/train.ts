// Типы поездов. Всё, что приходит «с сервера», лежит отдельно от данных и от слайсов —
// так просила ментор на консультации 20.11.

export type ClassType = '3A' | '2A' | '1A'
export type ClassStatus = 'AVL' | 'WL'

export interface TrainClass {
  type: ClassType
  status: ClassStatus
  seats: number
  price: number
  tatkal: boolean
}

export interface TrainStop {
  name: string
  code: string
  time: string
}

export interface Train {
  id: number
  number: string
  name: string
  from: TrainStop
  to: TrainStop
  duration: string
  classes: TrainClass[]
}
