import type { Train } from '../../types/trainsTypes'

// Те же три поезда, что в классе на консультации 20 ноября (Нелли скидывала в чат).
// По ТЗ список статичный: страница результатов всегда показывает эти поезда,
// независимо от выбранных городов и даты.
export const trainsSearchResults: Train[] = [
  {
    id: 22426,
    name: 'VANDE BHARAT',
    runsOn: 'Everyday',
    departure: { date: 'Nov 16', time: '11:25 PM', station: 'New Delhi', code: 'NDLS' },
    arrival: { date: 'Nov 17', time: '7:25 AM', station: 'Lucknow', code: 'LJN' },
    duration: '8 hours',
    classes: [
      { type: '3A', status: 'available', availability: 46, fareType: 'Tatkal', price: 800 },
      { type: '2A', status: 'available', availability: 6, fareType: 'Tatkal', price: 1000 },
      { type: '1A', status: 'waiting', availability: 36, fareType: 'Tatkal', price: 1200 },
    ],
  },
  {
    id: 22412,
    name: 'ARUNACHAL EXP',
    runsOn: 'Everyday',
    departure: { date: 'Nov 16', time: '11:45 PM', station: 'New Delhi', code: 'NDLS' },
    arrival: { date: 'Nov 17', time: '7:45 AM', station: 'Lucknow', code: 'LJN' },
    duration: '8 hours',
    classes: [
      { type: '3A', status: 'available', availability: 446, fareType: 'Tatkal', price: 800 },
      { type: '2A', status: 'available', availability: 166, fareType: 'Tatkal', price: 1000 },
      { type: '1A', status: 'waiting', availability: 6, fareType: 'Tatkal', price: 1400 },
    ],
  },
  {
    id: 12572,
    name: 'SHATABDI EXPRESS',
    runsOn: 'Everyday',
    departure: { date: 'Nov 16', time: '11:50 PM', station: 'New Delhi', code: 'NDLS' },
    arrival: { date: 'Nov 17', time: '9:50 AM', station: 'Lucknow', code: 'LJN' },
    duration: '10 hours',
    classes: [
      { type: '3A', status: 'available', availability: 446, fareType: 'Tatkal', price: 800 },
      { type: '2A', status: 'available', availability: 166, fareType: 'Tatkal', price: 1000 },
    ],
  },
]

export default trainsSearchResults
