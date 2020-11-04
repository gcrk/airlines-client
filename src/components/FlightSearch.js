import React, { Component } from 'react';
import '../App.css'

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
    this._handleInput = this._handleInput.bind(this)
    // this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleInput(event) {
    this.setState({query: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('_handleSubmit', event);
    // this.props.onSubmit( this.state.query ); - this line is to pass this.state.query into props, not used until called in parent component

  }
  render () {
    return (
        <form onSubmit={this._handleSubmit}>
          <input className="input-field" type="search" placeholder="destination" onInput={this._handleInput}/>
          <input type="submit" value="search"/>
        </form>
    )
  }
}

export default FlightSearch;
