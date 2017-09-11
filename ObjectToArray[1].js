// Write a function called "getAllKeys" which returns an array of all the input object's keys.
// Example input: 

function getAllKeys(obj) {
  var arr = [];
  for (var prop in obj) {
    arr.push(prop);
  }
  return arr;
}

getAllKeys({
  name: "Sam",
  age: 25,
  hasPets: true
});