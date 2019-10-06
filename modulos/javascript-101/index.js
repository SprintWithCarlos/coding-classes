const car = {
  numberOfDoors: 4,
  drive() {
    console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  },
};

const letsRoll = car.drive;


console.log(letsRoll());
