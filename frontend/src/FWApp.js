import React, { Component } from 'react';
import FoodContainer from './FoodContainer'
import AddFood from './AddFood'
import './App.css';
import FoodServer from './FoodServer';
import PublicFoodContainer from './PublicFoodContainer';


class FWApp extends Component {
  constructor(params){
      super(params);
      this.username = params.username;
      FoodServer.username = this.username;
  }

  render() {
    return <div className="FWApp">
      <header className="App-header">
        <h1>FoodWasteApp</h1>
      </header>
        <PublicFoodContainer/>
        <FoodContainer username={this.username}/>
        <AddFood username={this.username}/>

    </div>
  }
}

export default FWApp;
