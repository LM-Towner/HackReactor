// Write a function 'transformFirstAndLast' that takes in an array, and returns an object with: 
// 1) the first element of the array as the object's key, and 
// 2) the last element of the array as that key's value.

function transformFirstAndLast(array) {
  var obj = {};

  var key = array[0];
  var value = array[array.length - 1];

  obj[key] = value;
  return obj;
}

transformFirstAndLast(["Queen", "Elizabeth", "Of Hearts", "Beyonce"]);
