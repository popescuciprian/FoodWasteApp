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
FoodServer.getPublicFoods = async function getPublicFoods() {
    FoodServer.publicFoodList = [];
    FoodServer.publicFoodList = await fetch(`${SERVER}/foods`)
        .then(response => response.json())
        .catch(err => console.warn(err));
    FoodServer.emitter.emit('GET_PUBLIC_FOODS_SUCCESS')
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

FoodServer.claimFood = async function claimFood(food){
    fetch(`${SERVER}/${this.username}/claim`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(food)
    })
        .then(response => response.json())
        .then(FoodServer.emitter.emit('ADD_FOOD',food))
        .then(FoodServer.emitter.emit('REMOVE_FOOD',food));
}

FoodServer.exposeFood = async function exposeFood(food){
    console.warn(food);
}
export default FoodServer