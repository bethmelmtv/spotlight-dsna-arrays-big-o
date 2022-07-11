module.exports = { push, pop };

function push(arr, item) {
  arr[arr.length] = item;
  return arr.length;
}

function pop(arr, item) {
  const lastitem = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastitem;
}
