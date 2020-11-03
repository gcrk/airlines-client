import React, { Component } from 'react';

class FlightSearch extends Component {
  render () {
    return (
      <form>
        <input type="search" placeholder="destination"/>
        <input type="submit" value="search"/>
      </form>
    )
  }
}

export default FlightSearch;
