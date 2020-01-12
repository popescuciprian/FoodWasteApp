import { EventEmitter } from 'fbemitter'
const SERVER = "http://52.15.229.11:8080";
class FoodServer {
    
    constructor(username) {
        this.foodList = [];
        this.emitter = new EventEmitter();
        this.username = username;
    }

    async getFoods() {
        let foodList = await fetch(`${SERVER}/${this.username}/foods`)
            .then(response => response.json())
            .catch(err => console.warn(err));
        this.foodList = foodList;
        this.emitter.emit('GET_FOODS_SUCCESS');
    }

    async sendFood(food) {
        fetch(`${SERVER}/${this.username}/foods`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .then(response =>response.json())
            .then(msg=>alert(msg))
            .then(this.emitter.emit('RELOAD_FOODS'));
    }
}
FoodServer.emitter = new EventEmitter();

export default FoodServer