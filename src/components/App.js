import React, { Component } from 'react';
import Countdown from './Countdown';
import Stopwatch from './Stopwatch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
      stopwatchActive: false,
      stopwatchStartTime: null,
      timeOnStopwatch: 0
    }
  }
  //static propTypes = {
  //  stringProp: PropTypes.string.isRequired,
  //  arrayProp: PropTypes.array.isRequired, 
  //  funcProp: PropTypes.func.isRequired
  //};

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  toggleStopwatch() {
    this.setState({
      stopwatchActive: !this.state.stopwatchActive,
      stopwatchStartTime: !this.state.stopwatchActive ? Date.parse(new Date()) : this.state.stopwatchStartTime
    });
  }
  
  render() {
    return (
      <div className="tc mt6 ph4">
        <div id="App-title" className="f2">Countdown to {this.state.deadline}</div>
        <Countdown 
          deadline={this.state.deadline} />
        <div className="mt2">
          <input 
            className="ba bw2 b--light-gray br2 pa1 w-100 w-40-ns"
            type="text" 
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value}) } /> 
          <button 
            className="ba bw2 b--black bg-light-blue w-100 w-auto-ns white pa1 ph2 pointer" 
            onClick={() => this.changeDeadline()}>
              Submit
          </button>
        </div>
        <h2>Stopwatch</h2>
        <Stopwatch active={this.state.stopwatchActive} startTime={this.state.stopwatchStartTime} />
        <button
          className="ba bw2 b--black bg-light-blue w-100 w-auto-ns white pa1 ph2 pointer"
          onClick={() => this.toggleStopwatch()}>
          {this.state.stopwatchActive ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

//App.defaultProps = {
  //
//};

export default App;