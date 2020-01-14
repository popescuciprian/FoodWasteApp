import React, { Component } from 'react';
import FoodServer from './FoodServer'

class PublicFoodContainer extends Component {
    constructor(params) {
        super(params);
        this.state = {
            publicFoodList: []
        }
    }
    componentDidMount() {
        FoodServer.getPublicFoods();
        
        FoodServer.emitter.addListener('GET_PUBLIC_FOODS_SUCCESS', () => {
            this.setState({
                publicFoodList: FoodServer.publicFoodList
            })
        });

        FoodServer.emitter.addListener('ADD_FOOD', (food) => {
            FoodServer.publicFoodList.push(food);
            this.setState({
                foodList: FoodServer.publicFoodList
            })
        });
    }
    claimFood(food){
       food.availability = false;
       FoodServer.sendFood(food);
    }
    render() {
        return <div className="public_food_container">
            {
                this.state.publicFoodList.map((food) =>
                    <div className="food_item" key={food.id}>
                        <div>{food.name}</div>
                        <div>{food.category}</div>
                        <div>{"Exp.:"+food.exp_date.slice(0,10)}</div>
                        <button type="button" onClick={()=>this.claimFood(food)}>Claim</button>
                    </div>
                )
            }
        </div>
    }
}

export default PublicFoodContainer;