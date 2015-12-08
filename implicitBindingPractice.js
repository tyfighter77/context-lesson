/*
  Create an object that represents a hotel
  The hotel has a basic room price
  The hotel has a function, calcPrice,
    that takes in:
    - the number of nights stay
    - the desired total gratuity for the whole stay
    the function returns
    - (basic room price * number of nights) + gratuity
*/

var hotel = {
  roomPrice: 30,
  calcPrice: function(nights, gratuity){
    return (this.roomPrice * nights) + gratuity;
  }
};

var total = hotel.calcPrice(3, 30);
console.log("Total Hotel Stay: " + total);
