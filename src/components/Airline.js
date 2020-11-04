import React, { Component } from 'react';
import FlightSearch from './FlightSearch'

class Airline extends Component {
  render() {
    return(
        <div className="form-container">
          <FlightSearch />
        </div>
    )
  }

}

export default Airline;
