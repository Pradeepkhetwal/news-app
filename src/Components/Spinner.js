import React, { Component } from 'react'
import Spinning from './Spinning.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className="container ">
        <img className ="my-4 " src={Spinning} alt="Loading" />
      </div>
    )
  }
}
