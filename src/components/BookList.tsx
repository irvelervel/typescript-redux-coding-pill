import { Book as BookType } from '../types/Book'
import Book from './Book'

interface BookListProps {
  books: BookType[]
  changeBook: (book: BookType) => void
  bookSelected: BookType
}

const BookList = ({ books, changeBook, bookSelected }: BookListProps) => (
  <div>
    {books.map((book) => (
      <Book key={book.id} book={book} changeBook={changeBook} bookSelected={bookSelected} />
    ))}
  </div>
)

export default BookList
