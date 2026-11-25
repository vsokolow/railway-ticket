import { configureStore } from '@reduxjs/toolkit'
import searchResultsReducer from './slices/searchResults'
import bookingReducer from './slices/booking'

// Ключи длинные и однозначные — так просила ментор, чтобы не путать состояния разных страниц.
export const store = configureStore({
  reducer: {
    TrainsSearchResults: searchResultsReducer,
    Booking: bookingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
