var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(cV){
  var x = cV.x;
  var y = cV.y;
  var z = Math.sqrt(x*x + y*y);

  // console.log("currentValue", currentValue);
  // console.log("i", i);
  // console.log("z", z);
  // console.log("blah", currentValue.x);
  // // console.log("input", input);
  // console.log("----------");

  return z;
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);