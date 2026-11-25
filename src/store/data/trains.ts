import type { Train } from '../../types/train'

// Заглушка вместо сервера. По ТЗ страница результатов всегда показывает эти три поезда,
// независимо от городов и даты. Города из формы отображаются в шапке и едут дальше по стору.
export const searchResults: Train[] = [
  {
    id: 1,
    number: '22426',
    name: 'VANDE BHARAT',
    from: { name: 'New Delhi', code: 'NDLS', time: '06:00' },
    to: { name: 'Varanasi Jn', code: 'BSB', time: '12:30' },
    duration: '6h 30m',
    classes: [
      { type: '3A', status: 'AVL', seats: 46, price: 800, tatkal: true },
      { type: '2A', status: 'AVL', seats: 12, price: 1200, tatkal: false },
      { type: '1A', status: 'WL', seats: 36, price: 2000, tatkal: false },
    ],
  },
  {
    id: 2,
    number: '12560',
    name: 'SHIV GANGA EXP',
    from: { name: 'New Delhi', code: 'NDLS', time: '20:10' },
    to: { name: 'Varanasi Jn', code: 'BSB', time: '06:55' },
    duration: '10h 45m',
    classes: [
      { type: '3A', status: 'AVL', seats: 46, price: 800, tatkal: true },
      { type: '2A', status: 'AVL', seats: 12, price: 1200, tatkal: false },
      { type: '1A', status: 'WL', seats: 36, price: 2000, tatkal: false },
    ],
  },
  {
    id: 3,
    number: '12302',
    name: 'RAJDHANI EXP',
    from: { name: 'New Delhi', code: 'NDLS', time: '16:55' },
    to: { name: 'Varanasi Jn', code: 'BSB', time: '23:40' },
    duration: '6h 45m',
    classes: [
      { type: '3A', status: 'AVL', seats: 46, price: 800, tatkal: true },
      { type: '2A', status: 'AVL', seats: 12, price: 1200, tatkal: false },
      { type: '1A', status: 'WL', seats: 36, price: 2000, tatkal: false },
    ],
  },
]

export default searchResults
