
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.



const problem4 = require('./problem4');

const inventory = require('../inventory');

function problem5(inventory){
    let carYears = [];
    carYears = problem4(inventory);
    let length=0;
    
    for(let i =0;i<carYears.length;i++){
        if(carYears[i]<2000){
    length++;
    console.log(carYears[i]);
        }
    }
    console.log(length);
}

//problem5(inventory,carYear);
module.exports = problem5;