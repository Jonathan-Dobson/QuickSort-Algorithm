var a = [9, 4, 8, 1, 3, 7, 5, 2, 6];

function divide(a, start, end) {
  if (end <= start) return;
  pivot_location = sort(a, start, end);
  divide(a, start, pivot_location - 1);
  divide(a, pivot_location + 1, end);
}

function sort(a, start, end) {
  pivot_value = a[end];
  i = start - 1;
  for (var j = start; j <= end - 1; j++) {
    if (a[j] < pivot_value) {
      i++;
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    i++;
    let temp = a[i];
    a[i] = a[end];
    a[end] = temp;
  }
  return i;
}

divide(a, 0, a.length - 1);
console.log("array", a);
