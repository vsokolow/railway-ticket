import type { Train, TrainClass } from './train'

export interface Passenger {
  id: number
  name: string
  age: string
  gender: 'male' | 'female'
}

export interface Meal {
  name: string
  price: number
}

export interface Promo {
  code: string
  label: string
  discount: number
}

export interface BookingState {
  from: string
  to: string
  date: string
  passengersCount: number
  train: Train | null
  trainClass: TrainClass | null
  passengers: Passenger[]
  meal: Meal | null
  baggage: number
  promo: string
  discount: number
}

export const BAGGAGE_PRICE = 350
export const SERVICE_CHARGE = 50
