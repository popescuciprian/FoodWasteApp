import React, { Component } from 'react';
import FoodServer from './FoodServer';

class AddFood extends Component {
    constructor(params) {
        super(params)
        this.username = params.username;
    }

    addFood() {
        let dateRegEx = "([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))";
        let inputs = document.querySelectorAll('.add_food_container>input');
        let select = document.querySelector('.add_food_container>select');
        let food = {
            name: inputs[0].value,
            exp_date: inputs[1].value,
            availability: inputs[2].checked,
            category: select.value,
        }

        if(food.name.length >= 3 && food.exp_date.match(dateRegEx)){
            FoodServer.sendFood(food);
        }
    }

    render() {
        return <div className="add_food_container">
            <label><b>Food Name</b></label>
            <input type="text" required />

            <label><b>Category</b></label>
            <select>
                <option value="fruits/vegetables">fruits/vegetables</option>
                <option value="grains/nuts">grains/nuts</option>
                <option value="meat/seafood">meat/seafood</option>
                <option value="dairy">dairy</option>
                <option value="sweets">sweets</option>
            </select>

            <label><b>Expiration Date</b></label>
            <input type="text" placeholder="yyyy-mm-dd" required />

            <label><b>Availability to share</b></label>
            <input type="checkbox" />

            <button type="submit" onClick={()=>this.addFood()}>Add!</button>
        </div>
    }
}

export default AddFood