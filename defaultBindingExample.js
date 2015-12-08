var sushi;

function makeSushi(){
  this.sushi = "California Roll"
}

makeSushi();

console.log(sushi);

setTimeout(function(){
  this.moreSushi = "Vegas Roll"
}, 1000)
