import React, { Component } from 'react';
import FoodServer from './FoodServer'
const SERVER = "http://52.15.229.11:8080";

class FoodContainer extends Component {
    constructor(params) {
        super(params);
        this.username = params.username;
        this.state = {
            foodList: []
        }
        this.foodServer = new FoodServer(this.username);
    }
    componentDidMount() {
        this.foodServer.getFoods();
        
        this.foodServer.emitter.addListener('GET_FOODS_SUCCESS', () => {
            console.log('get food intercepted');
            this.setState({
                foodList: this.foodServer.foodList
            })
        });

        this.foodServer.emitter.addListener('RELOAD_FOODS', () => {
            console.log('reload intercepted')
            this.foodServer.getFoods();
        });
    }
    render() {
        return <div className="food_container">
            {
                this.state.foodList.map((food) =>
                    <div key={food.id}>
                        <div>{food.name}</div>
                        <div>{food.exp_date}</div>
                        <div>{food.availability.toString()}</div>
                    </div>
                )
            }
        </div>
    }
}

export default FoodContainer;