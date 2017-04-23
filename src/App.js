import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017'
    }
  }

  changeDeadline() {
    this.setState({
      deadline: 'November 25, 2017'
    })
  }
  //static propTypes = {
  //  stringProp: PropTypes.string.isRequired,
  //  arrayProp: PropTypes.array.isRequired, 
  //  funcProp: PropTypes.func.isRequired
  //};
  
  render() {
    return (
      <div className="tc mt6">
        <div id="App-title" className="f2">Countdown to {this.state.deadline}</div>
        <div>
          <span className="mh1" id="Clock-days">14 days</span>
          <span className="mh1" id="Clock-hours">30 hours</span>
          <span className="mh1" id="Clock-minutes">15 minutes</span>
          <span className="mh1" id="Clock-seconds">20 seconds</span>
        </div>
        <div className="mt2">
          <input type="text" placeholder='new date' /> 
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

//App.defaultProps = {
  //
//};

// for docs on prop type validations type `reactvalidateproptypedocs`

module.exports = App;