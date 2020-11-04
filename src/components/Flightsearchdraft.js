import React, { Component } from 'react';
import '../App.css'

class Flightsearchdraft extends Component {
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
    console.log('_handleSubmit', event.target.tagName);
      // this.setState({query: event.target.value})
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
        <div className="dd-header">
          <input className="input-field dd-header" type="search" value={this.state.query} onChange={this._handleSubmit}  placeholder="destination" onClick={this._toggleDropDown}/>
          {toggleDropDown}
          <input type="submit" value="search"/>
          </div> 
        </div>

    )
  }
}

class SubMenu extends Component {
  render(){
    return(
      <div className="dd-list">

          <button value="SYD" onClick={this._handleSubmit}>Sydney AU</button>

          <button  value="MEL" onChange={this._handleInput}>Melbourne AU</button>

          <button value="ADL" onChange={this._handleInput}>Adelaide AU</button>
      </div>
    )
  }
}
// button onClick update state.query to value
export default Flightsearchdraft;
