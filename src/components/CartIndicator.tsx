import React, { Component, KeyboardEvent } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { connect } from 'react-redux'
import { FormControl } from 'react-bootstrap'
import { setUsernameAction } from '../actions'
import { ReduxStore } from '../types/ReduxStore'
import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router-dom'

// const mapStateToProps = (state) => state
// mapStateToProps is a function returning an object
// const mapStateToProps = (state) => {
//   return {
//     ...state
//     // with the spread operator you're taking all the properties from state
//     // and create a new object out of them
//   }
// }

// const mapStateToProps = (state) => ({
//   cartLength: state.cart.products.length
// })

interface CartIndicatorProps extends RouteComponentProps {
  user: ReduxStore['user']
  cart: ReduxStore['cart']
  setUsername: (name: string) => void
}

interface CartIndicatorState {
  username: string
}

const mapStateToProps = (state: ReduxStore) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUsername: (name: string) => {
    dispatch(setUsernameAction(name))
  },
})

class CartIndicator extends Component<CartIndicatorProps, CartIndicatorState> {
  state = {
    username: '',
  }

  render() {
    return (
      <div className="ml-auto mt-2">
        {this.props.user.firstName ? (
          <Button color="primary" onClick={() => this.props.history.push('/cart')}>
            <span>Welcome, {this.props.user.firstName}!</span>
            <FaShoppingCart className="ml-2" />
            <span className="ml-2">{this.props.cart.products.length}</span>
          </Button>
        ) : (
          <FormControl
            type="text"
            placeholder="your name?"
            value={this.state.username}
            onChange={(e) => {
              this.setState({ username: e.target.value })
            }}
            onKeyDown={(e: KeyboardEvent) => {
              if (e.key === 'Enter') {
                // dispatch the action!
                this.props.setUsername(this.state.username)
              }
            }}
          />
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartIndicator))
