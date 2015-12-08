var car = {
  color: 'Red',
  make: 'Tesla',
  model: 'Model S',
  minSpeed: 0,
  maxSpeed: 120,
  currentSpeed: 0
}

var jacobsCar = {
  color: 'Black',
  make: 'Porche',
  model: '911',
  minSpeed: 0,
  maxSpeed: 202,
  currentSpeed: 0
}

/* Go faster */

var goFaster = function(){
  this.currentSpeed = this.currentSpeed + 10;
}

console.log(car.currentSpeed);

var boundFunction = goFaster.bind(car);
boundFunction();

console.log(car.currentSpeed);

var jacobsCarBoundFunc = goFaster.bind(jacobsCar);
jacobsCarBoundFunc();

console.log("car speed: " + car.currentSpeed)
console.log("jacobs car speed: " + jacobsCar.currentSpeed)


/* Magically Transform Car */

var magicallyTransform = function(color, make, model){
  this.color = color;
  this.make = make;
  this.model = model;
  this.averageSpeed = (this.minSpeed + this.maxSpeed)/2;
}

magicallyTransform.call(car, "Blue", "Ferrari", "458");
console.log(car);

magicallyTransform.call(jacobsCar, "Blue", "Ferrari", "458");
console.log(jacobsCar);

var newParams = ["Green", "Ford", "Pinto"];
magicallyTransform.apply(car, newParams);
console.log(car);

magicallyTransform.apply(jacobsCar, newParams);
console.log(jacobsCar);


var driveThru = {
  total: 0,
  makeOrder: function(){
    setTimeout(function(){
        this.total = 3.50
    }.bind(this), 5000)
  }
}

driveThru.makeOrder();

setTimeout(function(){
  console.log("Drive Thru total: " + driveThru.total);
},6000)
