module.exports = { push };

function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}
