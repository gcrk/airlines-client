import React, { Component } from 'react';
import axios from 'axios';

import FlightSearch from './FlightSearch'
import Seat from './Seat'
class Airline extends Component {

// const SERVER_URL = 'http://localhost:3000/flights.json';

  constructor(){
    super();
    this.state = {
      seats : Array(36).fill(null),
      flights: [],
      searchTerm: '',
      foundFlights: [],
      reservations: [],
      occupiedSeats: 0,
    };
    this.searchFlight = this.searchFlight.bind(this)
    this._foundFlightButton = this._foundFlightButton.bind(this)
    this.handleClick = this.handleClick.bind(this)



  }

  fetchSeats(flightName){
  }

// What happens when a seat is clicked - fires off _handleClick() from Seat.js
handleClick(seat) {
  let occupiedSeats = 0
  occupiedSeats = parseInt(seat)
  // this.setState({occupiedSeats: occupiedSeats})
  console.log(seat, "seat")
  this.setState({reservations: [...this.state.reservations, occupiedSeats]})


}

// What happens when search flight is clicked
  searchFlight(query) {
    axios.get('http://localhost:3000/flights.json').then((results) => {
      this.setState({flights: results.data});
    }).then((results) => {

      let foundFlights = []

      this.state.flights.map(function(flight) {
        console.log(flight.reservations)
        if (flight.destination == query) {
          foundFlights.push(flight)
        }
      })
      this.setState({foundFlights: foundFlights})
    })
    this.setState({searchTerm: query})
    this.setState({foundFlights: []})
    console.log(this.state.foundFlights.reservations)



  }

  _foundFlightButton = value => () => {
    console.log('clicked')
    let reservedSeats = []
    value.map((seat) =>  {
      reservedSeats.push(seat.seat)
    })
    this.setState({reservations: reservedSeats})
  }

  render() {
    return(
      <div className="form-container">
        <FlightSearch onSubmit={this.searchFlight}/>
        <div>
        <ul>
          {this.state.foundFlights.map((flight) => (<li key={flight.flight_number}><strong> {flight[1]} Flight Number: </strong>{flight.flight_number} <strong>Destination: </strong>{flight.destination} <strong>Origin: </strong>{flight.origin} <button onClick={this._foundFlightButton(flight.reservations)}>Select</button></li> ))}
        </ul>
        </div>
        <div className="board-row">
        <Seat onClick={this.handleClick}/>
         </div>
         </div>

    )
  }

}



export default Airline;
