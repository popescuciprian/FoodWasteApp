import React, { Component } from 'react';
import FoodContainer from './FoodContainer'
import AddFood from './AddFood'
import './App.css';
import FoodServer from './FoodServer';
import PublicFoodContainer from './PublicFoodContainer';
class FWApp extends Component {
  constructor(params) {
    super(params);
    this.username = params.username;
    FoodServer.username = this.username;
  }

  render() {
    return <div className="FWApp">
      <header className="App-header">
        <h1>FoodWasteApp</h1>
      </header>
      <PublicFoodContainer />
      <FoodContainer username={this.username} />
      <AddFood username={this.username} />
      <div className="fb-share-button" data-href="http://52.15.229.11:3000/" data-layout="button" data-size="large"><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F52.15.229.11%3A8080%2F${this.username}%2Ffb_foods&amp;src=sdkpreparse`} className="fb-xfbml-parse-ignore">Share to Facebook!</a></div>
    </div>
  }
}

export default FWApp;
