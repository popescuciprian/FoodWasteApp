import React, { Component } from 'react';
import FoodServer from './FoodServer'

class FoodContainer extends Component {
    constructor(params) {
        super(params);
        this.username = params.username;
        this.state = {
            foodList: []
        }
    }
    componentDidMount() {
        FoodServer.getFoods();
        
        FoodServer.emitter.addListener('GET_FOODS_SUCCESS', () => {
            this.setState({
                foodList: FoodServer.foodList
            })
        });

        FoodServer.emitter.addListener('ADD_FOOD', (food) => {
            console.log('reload intercepted')
            FoodServer.foodList.push(food);
            this.setState({
                foodList: FoodServer.foodList
            })
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