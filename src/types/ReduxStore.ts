import { Book } from './Book'

export interface ReduxStore {
  cart: {
    products: Book[]
  }
  user: {
    firstName: string
  }
  books: {
    stock: Book[]
    error: boolean
    loading: boolean
  }
}
