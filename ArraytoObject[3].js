/* Write a function called "transformEmployeeData" that 
 transforms some employee data from one format to another. */

function transformEmployeeData(array) {
  var employeeArray = [];

  for (var i = 0; i < array.length; i++) {
    var obj = {};
    for (var k = 0; k < array[i].length; k++) {
      obj[array[i][k][0]] = array[i][k][1];
    }
    employeeArray.push(obj);
  }

  return employeeArray;
}

transformEmployeeData([
  [
      ["firstName", "Joe"],
       ["lastName", "Blow"], 
       ["age", 42], 
       ["role", "clerk"]
    ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"]
  ]
]);