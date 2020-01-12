import React, { Component } from 'react';
const SERVER = "http://52.15.229.11:8080";

class AddFood extends Component {
    constructor(params) {
        super(params)
        this.username = params.username;
    }

    addFood() {
        let inputs = document.querySelectorAll('.add_food_container>input');
        let select = document.querySelector('.add_food_container>select');
        let food = {
            name: inputs[0].value,
            exp_date: inputs[1].value,
            availability: inputs[2].checked,
            category: select.value,
        }
        console.log(food);
    }

    render() {
        return <div className="add_food_container">
            <label><b>Food Name</b></label>
            <input type="text" required />

            <label><b>Category</b></label>
            <select>
                <option value="fruits/vegetables">fruits/vegetables</option>
                <option value="gains/nuts">gains/nuts</option>
                <option value="meat/seafood">meat/seafood</option>
                <option value="dairy">dairy</option>
                <option value="sweets">sweets</option>
            </select>

            <label><b>Expiration Date</b></label>
            <input type="text" placeholder="yyyy-mm-dd" required />

            <label><b>Availability to share</b></label>
            <input type="checkbox" />

            <button type="submit" onClick={this.addFood}>Add!</button>
        </div>
    }
}

export default AddFood