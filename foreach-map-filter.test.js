// forEach

// Function to double each value in the array
function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function(val) {
      newArr.push(val * 2); // Multiply each value by 2 and push to the new array
  });
  return newArr; // Return the new array
}

// Function to filter out only the even values from the array
function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function(val) {
      if (val % 2 === 0) { // Check if the value is even
          newArr.push(val); // If even, push it to the new array
      }
  });
  return newArr; // Return the new array
}

// Function to extract the first and last character of each string in the array
function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function(str) {
      newArr.push(str[0] + str[str.length - 1]); // Concatenate the first and last characters and push to the new array
  });
  return newArr; // Return the new array
}

// Function to add a new key-value pair to each object in the array
function addKeyAndValue(arr, key, value) {
  arr.forEach(function(obj) {
      obj[key] = value; // Add the specified key-value pair to each object
  });
  return arr; // Return the modified array
}

// Function to count the occurrences of vowels in a string
function vowelCount(str) {
  let vowels = 'aeiou';
  let count = {};
  str.toLowerCase().split('').forEach(function(char) {
      if (vowels.indexOf(char) !== -1) {
          if (count[char]) {
              count[char]++;
          } else {
              count[char] = 1;
          }
      }
  });
  return count; // Return an object with vowel counts
}

// Map
// Iterates over each element in the array and transforms it into a new value.

// Function to double each value in the array using map
function doubleValuesWithMap(arr) {
  return arr.map(function(val) {
      return val * 2; // Multiply each value by 2
  });
}

// Function to multiply each value in the array by its index using map
function valTimesIndex(arr) {
  return arr.map(function(val, idx) {
      return val * idx; // Multiply each value by its index
  });
}

// Function to extract the value of a specified key from each object in the array using map
function extractKey(arr, key) {
  return arr.map(function(obj) {
      return obj[key]; // Extract the value of the specified key from each object
  });
}

// Function to concatenate the first and last name from each object in the array using map
function extractFullName(arr) {
  return arr.map(function(obj) {
      return obj.first + ' ' + obj.last; // Concatenate first and last name
  });
}

// Filter
// Iterates over each element in the array and removes elements based on a condition.

// Function to filter objects in the array based on the presence of a specified key
function filterByValue(arr, key) {
  return arr.filter(function(obj) {
      return obj[key] !== undefined; // Filter objects based on the presence of the specified key
  });
}

// Function to double the odd numbers in the array using filter and map
function doubleOddNumbers(arr) {
  return arr.filter(function(val) {
      return val % 2 !== 0; // Filter out odd numbers
  }).map(function(val) {
      return val * 2; // Double each odd number
  });
}
