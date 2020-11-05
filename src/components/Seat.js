import React, {Component} from 'react';

const _handleClick = (e) => {
  console.log(e.target.value)
}

const Seat = (props) => {
  return (
    <button onClick={_handleClick} className="button">
      X
    </button>
  )
}


export default Seat;
