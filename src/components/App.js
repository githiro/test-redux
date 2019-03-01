import React, { Component } from 'react';
import { connect } from 'react-redux'// connect関数をimport

import { increment, decrement } from '../actions'// actions

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

// 上記はこのようにも書ける
// const mapDispatchToProps = ({ increment, decrement })


// StateとActionをComponentに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(App)
