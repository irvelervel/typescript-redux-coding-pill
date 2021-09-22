import { AnyAction } from 'redux'
import { initialState } from '../store'
// import { ReduxState } from '../types/state'

const bookReducer = (state = initialState.books, action: AnyAction) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        stock: action.payload,
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}

export default bookReducer
