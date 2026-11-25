import type { Meal, Promo } from '../../types/booking'

// Еда и промокоды — статичные, по ТЗ. Промокоды не суммируются: новый заменяет старый.
export const MEALS: Meal[] = [
  { name: 'Veg Thali', price: 150 },
  { name: 'Chicken Biryani', price: 220 },
]

export const PROMOS: Promo[] = [
  { code: 'FIRST100', label: '₹100 off on your first booking', discount: 100 },
  { code: 'TRAIN250', label: '₹250 off on tickets above ₹1000', discount: 250 },
  { code: 'GANG300', label: '₹300 off to Varanasi', discount: 300 },
]
