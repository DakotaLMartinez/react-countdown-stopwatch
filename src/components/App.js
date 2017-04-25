import React, { Component, PropTypes } from 'react';
import Countdown from './Countdown';

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
      </div>
    );
  }
}

//App.defaultProps = {
  //
//};

export default App;