import React , {Component}from 'react';
import FlightSearch from './FlightSearch'
import Seat from './Seat'
class Airline extends Component {
  render(){
    return(
      <div>
       <FlightSearch />
       <Seat />
      </div> 
    )
  }

}

export default Airline;
