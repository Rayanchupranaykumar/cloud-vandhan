const originalArray = [5, 2, 9, 1, 5, 6];

// Use the sort method with a custom comparison function to sort in descending order
const descendingArray = originalArray.sort(function(a, b) {
  return b - a;
});