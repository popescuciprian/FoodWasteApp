import React, { Component } from 'react';
const SERVER = "http://52.15.229.11:8080";

class AddFood extends Component {
    constructor(params) {
        super(params)
        this.username = params.username;
    }

    addFood() {
        let inputs = document.querySelectorAll('.add_food_container>input');
        let food = {
            name:inputs[0].value,
            exp_date:inputs[1].value,
            availability:inputs[3].checked,
            category:inputs[2].value,
        }
        console.log(food);
    }

    render() {
        return <div className="add_food_container">
            <label><b>Food Name</b></label>
            <input type="text" required />

            <label><b>Expiration Date</b></label>
            <input type="text" placeholder="yyyy-mm-dd" required />

            <label><b>Category</b></label>
            <input type="text" required />

            <label><b>Availability to share</b></label>
            <input type="checkbox"/>

            <button type="submit" onClick={this.addFood}>Add!</button>
        </div>
    }
}

export default AddFood