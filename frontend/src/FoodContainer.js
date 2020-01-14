import React, { Component } from 'react';
import FoodServer from './FoodServer'

class FoodContainer extends Component {
    constructor(params) {
        super(params);
        this.username = params.username;
        this.state = {
            foodList: [],
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
            if (FoodServer.foodList.indexOf(food) === -1)
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
                    <div className="food_item" key={food.id}>
                        <div>{food.name}</div>
                        <div>{food.category}</div>
                        <div>{"Exp.:" + food.exp_date.slice(0, 10)}</div>
                        <div>{food.availability ? "Public" : "Private"}</div>
                    </div>
                )
            }
        </div>
    }
}

export default FoodContainer;