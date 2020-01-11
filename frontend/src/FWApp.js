import React, { Component } from 'react';
import FoodContainer from './FoodContainer'
import './App.css';

class FWApp extends Component {
  constructor(params){
      super(params);
      const username = params.username;
  }

  render() {
    return <div className="FWApp">
      <header className="App-header">
        <h1>FoodWasteApp</h1>
      </header>
        <FoodContainer username={this.username}/>
    </div>
  }
}

export default FWApp;
