import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { SERVICE_CHARGE } from '../types/booking'

// Счёт по брони считаем здесь, а не в компоненте: один источник правды.
export const selectBill = createSelector(
  (state: RootState) => state.Booking,
  (booking) => {
    const base = (booking.trainClass?.price ?? 0) * booking.passengersCount
    const meal = booking.meal?.price ?? 0
    const baggage = booking.baggage
    const subtotal = base + meal + baggage + SERVICE_CHARGE
    const discount = Math.min(booking.discount, subtotal)
    return {
      base,
      meal,
      mealName: booking.meal?.name ?? '',
      baggage,
      service: SERVICE_CHARGE,
      discount,
      total: subtotal - discount,
    }
  },
)

export const selectBookingReady = (state: RootState) =>
  Boolean(state.Booking.train && state.Booking.trainClass)
