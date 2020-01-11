import React, { Component } from 'react';
import FoodContainer from './FoodContainer'
import AddFood from './AddFood'
import './App.css';

class FWApp extends Component {
  constructor(params){
      super(params);
      this.username = params.username;
  }

  render() {
    return <div className="FWApp">
      <header className="App-header">
        <h1>FoodWasteApp</h1>
      </header>
        <FoodContainer username={this.username}/>
        <AddFood username={this.username}/>
    </div>
  }
}

export default FWApp;
