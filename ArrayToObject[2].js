// Write a function 'fromListToObject' which takes in an array of arrays, 
// and returns an object with each pair of elements in the array as a 
// key-value pair.

function fromListToObject(array) {
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    var key = array[i][0];
    var value = array[i][1];
    obj[key] = value;
  }

  return obj;
}

fromListToObject([["make", "Ford"], ["model", "Mustang"], ["year", 1964]]);