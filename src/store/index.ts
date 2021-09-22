// what the initial state of the application will be?

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import bookReducer from '../reducers/book'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'

import thunk from 'redux-thunk'
import { ReduxStore } from '../types/ReduxStore'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: ReduxStore = {
  cart: {
    products: [],
  },
  user: {
    firstName: '',
  },
  books: {
    stock: [],
    error: false,
    loading: false,
  },
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  books: bookReducer,
})

// splitting up the reducers will make them independent and not-aware any more of the big picture
// the state argument every reducer is now receiving is just their slice of the cake

const configureStore = () => createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default configureStore
