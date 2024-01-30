// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
const inventory = require('../inventory');

function problem3(inventory){
    let carData = [];
    for(let i =0;i<inventory.length;i++){
        carData[i]=(inventory[i].car_model);
    }
    for(let i =0;i<carData.length;i++){
        for(let j=i;j<carData.length;j++){
            if(carData[i]>carData[j]){
            let temp = carData[i];
            carData[i]=carData[j];
            carData[j]=temp;
            }
        }
    }
    console.log(carData);
}

problem3(inventory);
module.exports = problem3;