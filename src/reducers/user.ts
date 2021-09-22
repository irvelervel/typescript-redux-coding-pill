import { AnyAction } from 'redux'
import { initialState } from '../store'

const userReducer = (state = initialState.user, action: AnyAction) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        firstName: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
