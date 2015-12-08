function Animal(name, legs, sound){
  //this = {}
  this.name = name;
  this.legs = legs;
  this.sound = sound;
  this.makeSound = function(){
    console.log("The " + this.name + " says " + this.sound);
  };
  //return this
}

Animal.fur = "Hairy";

/* Make a lot of new animals */
var rat = new Animal("Stinky Potato", 4, "Squeek")
var parrot = new Animal("Blisters", 2, "Cracker")
var dog = new Animal("Dog", 4, "Bark")

rat.scurry = function(){
   console.log("The " + this.name + " scurried away");
}

rat.scurry();

rat.makeSound();
parrot.makeSound();
dog.makeSound();


//DONT DO THIS
var cat = Animal("Cat", 4, "meow")
var cat = Animal("Cat", 4, "meow")


// The new keyword gets these exact results
// var obj = {}
// Camel will be null, because Animal returns nothing
// var camel = Animal.call(obj, "Kramer", 4, "Spits");

/* Show flow */
