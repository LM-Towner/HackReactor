// Write a function called "listAllValues"
//  which returns an array of all the input object's values.

function listAllValues(obj) {
  return Object.values(obj);
}

listAllValues({
  a: "a",
  number: 11,
  hungry: true,
  grammyWins: 1
});
