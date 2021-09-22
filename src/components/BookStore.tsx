import { Component } from 'react'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getBooksAction } from '../actions'
import { ReduxStore } from '../types/ReduxStore'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { Book } from '../types/Book'

interface BookStoreProps {
  getBooks: () => void
  books: ReduxStore['books']
}

interface BookStoreState {
  bookSelected: Book | null
}

const mapStateToProps = (state: ReduxStore) => state

const mapDispatchToProps = (dispatch: ThunkDispatch<Action, any, any>) => ({
  getBooks: () => dispatch(getBooksAction()),
})

class BookStore extends Component<BookStoreProps, BookStoreState> {
  state: BookStoreState = {
    bookSelected: null,
  }

  componentDidMount = () => {
    this.props.getBooks()
  }

  changeBook = (book: Book) => this.setState({ bookSelected: book })

  render() {
    return (
      <Row>
        {this.props.books.loading ? (
          <p>LOADING...</p>
        ) : (
          <>
            <Col md={4}>
              <BookList
                bookSelected={this.state.bookSelected!}
                changeBook={this.changeBook}
                books={this.props.books.stock}
              />
            </Col>
            <Col md={8}>
              <BookDetail bookSelected={this.state.bookSelected!} />
            </Col>
          </>
        )}
        {this.props.books.error && <p>AWW SNAP, WE GOT AN ERROR!</p>}
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore)
