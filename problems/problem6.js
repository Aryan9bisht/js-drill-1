
// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the consol
const inventory = require('../inventory');

function problem6(inventory){
    let carNames = [];
    for(let i =0;i<inventory.length;i++){
        if(inventory[i].car_make== 'Audi' || inventory[i].car_make == 'BMW'){
          let desiredCar = inventory[i];
          carNames.push(desiredCar);
        }

    }
 console.log(JSON.stringify(carNames)); 
}

//getCarName(inventory);

module.exports = problem6;