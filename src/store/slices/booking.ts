import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Train, TrainClass } from '../../types/train'
import type { BookingState, Meal, Passenger } from '../../types/booking'

const emptyPassenger = (id: number): Passenger => ({
  id,
  name: '',
  age: '',
  gender: 'male',
})

const initialState: BookingState = {
  from: '',
  to: '',
  date: '',
  passengersCount: 1,
  train: null,
  trainClass: null,
  passengers: [emptyPassenger(1)],
  meal: null,
  baggage: 0,
  promo: '',
  discount: 0,
}

interface SearchPayload {
  from: string
  to: string
  date: string
  passengersCount: number
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // Главная страница: сохранили параметры поиска и сразу создали нужное число форм пассажиров
    setSearch(state, action: PayloadAction<SearchPayload>) {
      state.from = action.payload.from
      state.to = action.payload.to
      state.date = action.payload.date
      state.passengersCount = action.payload.passengersCount
      state.passengers = Array.from({ length: action.payload.passengersCount }, (_, i) =>
        emptyPassenger(i + 1),
      )
    },
    // Клик по классу вагона на странице результатов
    selectTrain(state, action: PayloadAction<{ train: Train; trainClass: TrainClass }>) {
      state.train = action.payload.train
      state.trainClass = action.payload.trainClass
    },
    updatePassenger(
      state,
      action: PayloadAction<{ id: number; field: 'name' | 'age' | 'gender'; value: string }>,
    ) {
      const passenger = state.passengers.find((p) => p.id === action.payload.id)
      if (!passenger) return
      if (action.payload.field === 'gender') {
        passenger.gender = action.payload.value as 'male' | 'female'
      } else {
        passenger[action.payload.field] = action.payload.value
      }
    },
    removePassenger(state, action: PayloadAction<number>) {
      if (state.passengers.length <= 1) return
      state.passengers = state.passengers.filter((p) => p.id !== action.payload)
      state.passengersCount = state.passengers.length
    },
    toggleMeal(state, action: PayloadAction<Meal>) {
      const same = state.meal?.name === action.payload.name
      state.meal = same ? null : action.payload
    },
    toggleBaggage(state, action: PayloadAction<number>) {
      state.baggage = state.baggage === 0 ? action.payload : 0
    },
    // Промокоды не суммируются: применение нового заменяет предыдущий
    applyPromo(state, action: PayloadAction<{ code: string; discount: number }>) {
      state.promo = action.payload.code
      state.discount = action.payload.discount
    },
    clearPromo(state) {
      state.promo = ''
      state.discount = 0
    },
    resetBooking: () => initialState,
  },
})

export const {
  setSearch,
  selectTrain,
  updatePassenger,
  removePassenger,
  toggleMeal,
  toggleBaggage,
  applyPromo,
  clearPromo,
  resetBooking,
} = bookingSlice.actions

export default bookingSlice.reducer
