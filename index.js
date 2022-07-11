module.exports = { push, pop, unshift };

function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

function pop(arr, item) {
  const lastitem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastitem;
}

//i = arr.length - 1; i >= 0; i--
function unshift(arr, item) {
  for (i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1]; // index of the array is equal to array[i + 1]
    arr[0] = item; // first item in array should be item we pass down, then increment i by one
    return arr.length;
  }
  //for loop that iterates through each item in the array
  //update/shift the index up one
  //change the length of the array
}
