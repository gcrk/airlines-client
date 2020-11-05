import React, {Component} from 'react';

class Seat extends Component {
  constructor(props){
    super(props)
    this.state = {
      clickedSeat: 0
    }
    this._handleClick = this._handleClick.bind(this)
  }

_handleClick (e) {
    this.setState({clickedSeat: e.target.value})
    this.props.onClick(this.state.clickedSeat)
  }

  render () {
  return (
    <div>
    <button onClick={this._handleClick} className="button" value={1}>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='2'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='3'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='4'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='5'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='6'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='7'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='8'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='9'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='10'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='11'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='12'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='13'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='14'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='15'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='16'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='17'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='18'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='19'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='20'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='21'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='22'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='23'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='24'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='25'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='26'>
      X
    </button>
    <button onClick={this._handleClick} className="button" value='27'>
      X
    </button>
    </div>
  )
}
}

export default Seat;
