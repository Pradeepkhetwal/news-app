import React, { Component } from 'react'
import Spinning from './Spinning.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="container">
        <img src={Spinning} alt="Loading" />
      </div>
    )
  }
}
