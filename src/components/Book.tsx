import { Card } from 'react-bootstrap'
import { Book as BookType } from '../types/Book'

interface BookProps {
  book: BookType
  changeBook: (book: BookType) => void
  bookSelected: BookType
}

const Book = ({ book, changeBook, bookSelected }: BookProps) => (
  <Card
    className={bookSelected?.id === book.id ? 'border-thick mt-3' : 'mt-3'}
    onClick={() => changeBook(book)}
    style={{ cursor: 'pointer' }}
  >
    <Card.Body className="d-flex">
      <img className="book-image" src={book.imageUrl} alt="book cover" />
      <div>
        <Card.Text className="font-weight-bold">{book.title}</Card.Text>
        <p>{book.price}</p>
      </div>
    </Card.Body>
  </Card>
)

export default Book
