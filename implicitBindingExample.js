/*
Younger= Age / 2.0 + 7.0
Older= (Age - 7.0) * 2
*/

var calcDatingAgeRange = function(){
  //Here
  this.datingMin = (this.age / 2) + 7;
  this.datingMax = (this.age -7) * 2;
  //ToHere
}

var person = {
  name: "Single Steve",
  age: 27,
  datingMin: 0,
  datingMax: 0,
  calcRange: calcDatingAgeRange,
  innerCalc: {
    calcRange: calcDatingAgeRange
  }
}

var personF = {
  name: "Single Sally",
  age: 62,
  datingMin: 0,
  datingMax: 0,
}

/* What happens if we pull the function out into a var */
var ageRangeFunc = person.calcRange;
ageRangeFunc();
// console.log("min:" + person.datingMin + " :: max:" + person.datingMax);

// console.log("min:" + personF.datingMin + " :: max:" + personF.datingMax);
personF.cRangeThingFunc = calcDatingAgeRange;
personF.cRangeThingFunc();
// console.log("min:" + personF.datingMin + " :: max:" + personF.datingMax);

person.calcRange();

// console.log("min:" + person.datingMin + " :: max:" + person.datingMax);



/* Make a new function called pickup and add it to the person
The function should say "I'm " + name + ", How you doin' ?"*/


/* Invoke the function on the person and then not on the person.*/
