import React, { Component } from 'react';
const SERVER = "http://52.15.229.11:8080";
class FoodContainer extends Component {
    constructor(params) {
        super(params);
        this.username = params.username;
        this.state={
            foodList:[]
        }
    }
    async componentDidMount() {
        this.username = "Toucan"
        this.foodList = await fetch(`${SERVER}/${this.username}/foods`)
            .then(response => response.json())
        this.setState({
            foodList:this.foodList
        })
    }
    render() {
        return <div className="food_container">
            {
                this.state.foodList.map((food) =>
                    <div key={food.category}>
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