import { createSlice } from '@reduxjs/toolkit'
import { trainsSearchResults } from '../data/trainsSearchResults'
import type { Train } from '../../types/trainsTypes'

interface TrainsState {
  trains: Train[]
  loading: boolean
  error: string | null
}

const initialState: TrainsState = {
  trains: trainsSearchResults,
  loading: false,
  error: null,
}

const trainsSearchResultsSlice = createSlice({
  name: 'trainsSearchResults',
  initialState,
  reducers: {},
})

export default trainsSearchResultsSlice.reducer
