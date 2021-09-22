// here I write my action creators
// functions that return actions

import { Dispatch } from 'redux'
import { Book } from '../types/Book'

// redux-thunk is a middleware allowing you to dispatch not only JS OBJECTS anymore,
// but also gives redux the ability to dispatch FUNCTIONS (can be async)

// our goal is to write an action creator that does not only return the JS OBJECT (the action)
// but also handling the async fetch, getting the data out of the API and then dispatch
// the action with the array of books as the payload

export const getBooksAction = () => {
  return async (dispatch: Dispatch, getState: any) => {
    // dispatch here is coming thanks to redux-thunk
    // fetch the books here!
    // this function can handle async operations (like a fetch) or conditionally dispatch the action,
    // delay the dispatching of an action, do complex data manipulation
    try {
      dispatch({
        type: 'SET_LOADING',
        payload: true,
      })
      let resp = await fetch('https://striveschool-api.herokuapp.com/food-books')
      console.log(getState())
      if (resp.ok) {
        let books = await resp.json()
        dispatch({
          type: 'GET_BOOKS',
          payload: books,
        })
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        })
        dispatch({
          type: 'SET_ERROR',
          payload: false,
        })
      } else {
        console.log('error')
        dispatch({
          type: 'SET_LOADING',
          payload: false,
        })
        dispatch({
          type: 'SET_ERROR',
          payload: true,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'SET_LOADING',
        payload: false,
      })
      dispatch({
        type: 'SET_ERROR',
        payload: true,
      })
    }
  }
}

export const addItemToCartAction = (book: Book) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: book,
  }
}

// export const addItemToCartAction = (book) => ({
//   type: 'ADD_ITEM_TO_CART',
//   payload: book,
// })

export const removeItemFromCartAction = (index: number) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: index,
})

// ({
// })
// is for returning an object out of your arrow function

export const setUsernameAction = (name: string) => ({
  type: 'SET_USERNAME',
  payload: name,
})
