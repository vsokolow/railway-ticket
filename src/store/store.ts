import { configureStore } from '@reduxjs/toolkit'
import trainsSearchResultsReducer from './slices/trainsSearchResults'
import bookingReducer from './slices/booking'

// Ключи длинные и однозначные — так просила ментор, чтобы не путать состояния разных страниц.
export const store = configureStore({
  reducer: {
    TrainsSearchResults: trainsSearchResultsReducer,
    Booking: bookingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
