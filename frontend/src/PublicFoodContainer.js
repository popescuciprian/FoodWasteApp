import React, { Component } from 'react';
import FoodServer from './FoodServer'

class PublicFoodContainer extends Component {
    constructor(params) {
        super(params);
        this.state = {
            foodList: []
        }
    }
    componentDidMount() {
        FoodServer.getPublicFoods();
        
        FoodServer.emitter.addListener('GET_PUBLIC_FOODS_SUCCESS', () => {
            this.setState({
                foodList: FoodServer.foodList
            })
        });
    }
    render() {
        return <div className="public_food_container">
            {
                this.state.foodList.map((food) =>
                    <div className="food_item" key={food.id}>
                        <div>{food.name}</div>
                        <div>{food.category}</div>
                        <div>{food.exp_date.slice(0,10)}</div>
                    </div>
                )
            }
        </div>
    }
}

export default PublicFoodContainer;