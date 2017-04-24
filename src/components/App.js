import React, { Component, PropTypes } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
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
  
  render() {
    return (
      <div className="tc mt6">
        <div id="App-title" className="f2">Countdown to {this.state.deadline}</div>
        <Clock 
          deadline={this.state.deadline} />
        <div className="mt2">
          <input 
            type="text" 
            placeholder='new date'
            onChange={event => this.setState({newDeadline: event.target.value}) } /> 
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

//App.defaultProps = {
  //
//};

export default App;