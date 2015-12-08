/*
  Create a function that you can create new superheroes with
  Each super hero should have:
    - a name,
    - a power,
    - a battle cry,
    - a function to shout the battle cry
    - a function to use the super power
*/

var SuperHero = function(name, power, battlecry){
  // this = {}
  this.name = name;
  this.power = power;
  this.battlecry = battlcry;
  this.shout = function(){
    console.log(this.battlecry);
  }
  this.usePower = function(){
    console.log(this.name + " uses " + this.power);
  }
}

var theFlash = new SuperHero("Flash", "The speedforce", "too slow");
var hoover = new SuperHero("Hoover", "Unlimited consumption", "nom nom nom nom")
var nightcrawler = new SuperHero("Nightcrawler", "teleportation", "BAMF!")
