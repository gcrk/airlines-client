import React, {Component} from 'react';

const _handleClick = (e) => {
  console.log(e)
}

const Seat = (props) => {
  return (
    <button onClick={_handleClick} className="button">
      X
    </button>
  )
}


export default Seat;
