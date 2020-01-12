import { EventEmitter } from 'fbemitter'
const SERVER = "http://52.15.229.11:8080";

let FoodServer = {};

FoodServer.emitter = new EventEmitter();

FoodServer.getFoods = async function getFoods() {
    FoodServer.foodList = [];
    FoodServer.foodList = await fetch(`${SERVER}/${this.username}/foods`)
        .then(response => response.json())
        .catch(err => console.warn(err));
    FoodServer.emitter.emit('GET_FOODS_SUCCESS')
}

FoodServer.sendFood = async function sendFood(food) {
    fetch(`${SERVER}/${this.username}/foods`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(food)
    })
        .then(response => response.json())
        .then(FoodServer.emitter.emit('ADD_FOOD',food));
}
export default FoodServer