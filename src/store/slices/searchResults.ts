import { createSlice } from '@reduxjs/toolkit'
import { searchResults } from '../data/trains'
import type { Train } from '../../types/train'

interface SearchResultsState {
  trains: Train[]
  loading: boolean
  error: string | null
}

const initialState: SearchResultsState = {
  trains: searchResults,
  loading: false,
  error: null,
}

const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {},
})

export default searchResultsSlice.reducer
