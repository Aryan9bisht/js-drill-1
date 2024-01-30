
// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.



const inventory =require('../inventory');


function problem4(inventory){
    let carYears =[];
    for(let i =0;i<inventory.length;i++){
        carYears[i]=inventory[i].car_year;
    }
 //   console.log(carYears);
 return carYears;
}
problem4(inventory);
module.exports = problem4;