import React, { Component } from 'react';
import '../App.css'

class FlightSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      listOpen: false,
    }
    this._handleInput = this._handleInput.bind(this)
    // this._handleSubmit = this._handleSubmit.bind(this)
     this._toggleDropDown = this._toggleDropDown.bind(this)
  }
  _handleInput(event) {
    event.preventDefault()

    console.log('event', this.state.query)
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('_handleSubmit', event);
        this.setState({query: event.target.value})
    // this.props.onSubmit( this.state.query ); - this line is to pass this.state.query into props, not used until called in parent component

  }

  _toggleDropDown(event) {
    console.log('clicked')
    this.setState({listOpen: true})
  }
  render () {
    let dropDown = this.state.listOpen
    let toggleDropDown;
    if (dropDown) {
      toggleDropDown = <SubMenu />
    }
    return (
      <div>
        <form onSubmit={this._handleSubmit} className="dd-wrapper">
        <div className="dd-header">
          <input className="input-field dd-header" type="search" value={this.state.query}placeholder="destination" onClick={this._toggleDropDown}/>
          {toggleDropDown}
          <input type="submit" value="search"/>
          </div>
        </form>
        </div>

    )
  }
}

class SubMenu extends Component {
  render(){
    return(
      <ul className="dd-list">
        <li className="dd-list-item" value="SYD" onClick={this._handleInput}>
          <button onClick={this._handleSubmit}>Sydney AU</button>
        </li>
        <li className="dd-list-item">
          <button  value="MEL" onInput={this._handleInput}>Melbourne AU</button>
        </li>
        <li className="dd-list-item">
          <button value="ADL" onInput={this._handleInput}>Adelaide AU</button>
        </li>
    </ul>
    )
  }
}
// button onClick update state.query to value
export default FlightSearch;
