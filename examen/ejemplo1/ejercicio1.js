var array = [3,4,6,3,2,6,6,9,6,3,7,9,9,4, 8];

var elementos = {};

array.forEach(function(valor){
  elementos[valor] = (elementos[valor] || 0) + 1;
});

console.log(elementos);