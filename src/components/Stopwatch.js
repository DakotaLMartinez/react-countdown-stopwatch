import React, { Component } from 'react';
import Clock from './Clock';

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      time: 0,
      days: 0,
      hours: 0, 
      minutes: 0, 
      seconds: 0,
    }
  }

  componentWillMount() {
    this.updateTimes(this.state.time);
  }

  toggleStopwatch() {
    if(this.state.active) {
      clearInterval(this.interval);
      this.setState({
        time: this.convertCurrentTimeToMilliseconds()
      });
    } else {
      const now = Date.parse(new Date());
      this.interval = setInterval(() => this.getTimeElapsed(now), 1000); 
    }
    this.setState({
      active: !this.state.active
    });
  }

  getTimeElapsed(startTime) {
    const time    = this.state.time + Date.parse(new Date()) - startTime;
    this.updateTimes(time);
  }

  updateTimes(time) {
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours   = Math.floor((time/1000/60/60) % 24);
    const days    = Math.floor((time/1000/60/60/24));
    this.setState({ days, hours, minutes, seconds });
  }

  convertCurrentTimeToMilliseconds() {
    return this.state.seconds * 1000 +
    this.state.minutes * 1000 * 60 +
    this.state.hours   * 1000 * 60 * 60 + 
    this.state.days    * 1000 * 60 * 60 * 24;
  }

  clearStopwatch() {
    this.setState({
      time: 0
    });
    this.updateTimes(0);
  }
  
  render() {
    return (
      <div>
        <div className="dib">
          <button
            id="toggle"
            className="ba bw2 b--black bg-light-blue w-100 w-auto-ns white pa1 ph2 pointer ma2"
            onClick={() => this.toggleStopwatch()}>
            {this.state.active ? 'Stop' : 'Start'}
          </button>
        </div>
        <div className="dib">
          <Clock 
            days={this.state.days}
            hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds} />
        </div>
        <div className="dib">
          <button
            id="clear"
            className="ba bw2 b--black bg-light-red w-100 w-auto-ns white pa1 ph2 pointer mt2"
            onClick={() => this.clearStopwatch()}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;