import React, { Component } from 'react';
import './App.css';

import Info from './components/info';
import EstimateForm from './components/EstimateForm';

class App extends Component {
  state = {
    showForm: false
  };

  handleShowEstimateForm = event => {
    console.log(event);
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    return (
      <div>
        <Info onHandleShowEstimateForm={this.handleShowEstimateForm}/>
        <br/>
        {this.state.showForm && <EstimateForm />}
      </div>
    );
  }
}

export default App;
