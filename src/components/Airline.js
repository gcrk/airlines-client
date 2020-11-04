import React, { Component } from 'react'
import axios from 'axios'

import FlightSearch from './FlightSearch'
import Seat from './Seat'
class Airline extends Component {

// const SERVER_URL = 'http://localhost:3000/flights.json';

  constructor(){
    super();
    this.state = {
      seats : Array(36).fill(null),
      flights: [{destination: 'sydney', origin: 'melbourne'}, {destination: 'melbourne'}],
      searchTerm: '',
      foundFlights: [],
      occupiedSeats: 0
    };
    this.searchFlight = this.searchFlight.bind(this)


  }

  fetchSeats(flightName){
    console.log('1')
  }

// What happens when a seat is clicked - fires off _handleClick() from Seat.js
handleClick(e) {

}
  renderSeat(i) {
  return (
    <Seat
      value={this.state.seats[i]}
      onClick={() => this.handleClick(i)}
    />
  );
}

// What happens when search flight is clicked
  searchFlight(query) {
    axios.get('http://localhost:3000/flights.json').then((results) => {
      this.setState({flights: results.data});
    });
    this.setState({searchTerm: query})
    this.setState({foundFlights: []})

    let foundFlights = []

    this.state.flights.map(function(flight) {
      if (flight.destination == query) {
        foundFlights.push(flight)
        console.log(foundFlights)
      }
    })

    this.setState({foundFlights: foundFlights})
  }


  render() {
    return(
      <div className="form-container">
        <FlightSearch onSubmit={this.searchFlight}/>
        <div>
        <ul>
          {this.state.foundFlights.map((flight) => (<li>Destination: {flight.destination} Origin:{flight.origin}</li>))}
        </ul>
        </div>
      <div>

        <div>
        <div className="board-row">
        {this.renderSeat(0)}
        {this.renderSeat(1)}
        {this.renderSeat(2)}
        {this.renderSeat(3)}
        {this.renderSeat(4)}
        {this.renderSeat(5)}
        {this.renderSeat(6)}
        {this.renderSeat(7)}
        {this.renderSeat(8)}
      </div>
      <div className="board-row">
        {this.renderSeat(9)}
        {this.renderSeat(10)}
        {this.renderSeat(11)}
        {this.renderSeat(12)}
        {this.renderSeat(13)}
        {this.renderSeat(14)}
        {this.renderSeat(15)}
        {this.renderSeat(16)}
        {this.renderSeat(17)}
      </div>
      <div className="board-row">
        {this.renderSeat(18)}
        {this.renderSeat(19)}
        {this.renderSeat(20)}
        {this.renderSeat(21)}
        {this.renderSeat(22)}
        {this.renderSeat(23)}
        {this.renderSeat(24)}
        {this.renderSeat(25)}
        {this.renderSeat(26)}
      </div>
      <div className="board-row">
        {this.renderSeat(27)}
        {this.renderSeat(28)}
        {this.renderSeat(29)}
        {this.renderSeat(30)}
        {this.renderSeat(31)}
        {this.renderSeat(32)}
        {this.renderSeat(33)}
        {this.renderSeat(34)}
        {this.renderSeat(35)}
      </div>
         </div>
         </div>


      </div>
    )
  }

}



export default Airline;
