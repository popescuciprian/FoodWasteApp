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
            FoodServer.emitter.emit("GET_FOODS_SUCCESS");
        });

        FoodServer.emitter.addListener('EXPOSE_FOOD', (food) => {
            FoodServer.foodList[FoodServer.foodList.indexOf(food)].availability = true;
            if (FoodServer.publicFoodList.indexOf(food) === -1)
                FoodServer.publicFoodList.push(food);
            FoodServer.emitter.emit("GET_FOODS_SUCCESS");
            FoodServer.emitter.emit("GET_PUBLIC_FOODS_SUCCESS");
            
        });
    }

    exposeFood(food) {
        food.availability = true;
        FoodServer.exposeFood(food);
    }
    render() {
        return <div className="food_container">
            {
                this.state.foodList.map((food) => {
                    let colorString = "black";
                    let DAY = 86400000;
                    if (Date.parse(food.exp_date) < Date.now()) {
                        colorString = "red";
                    }
                    if (Date.parse(food.exp_date) > Date.now() && Date.parse(food.exp_date) < Date.now() + 7 * DAY) {
                        colorString = "orange";
                    }
                    return <div style={{ color: colorString }} className="food_item" key={food.id}>
                        <div>{food.name}</div>
                        <div>{food.category}</div>
                        <div>{"Exp.:" + food.exp_date.slice(0, 10)}</div>
                        <div>{food.availability ? "Public" : "Private"}</div>
                        <button type="button" onClick={() => this.exposeFood(food)}>Expose</button>
                    </div>
                }
                )
            }
        </div>
    }
}

export default FoodContainer;