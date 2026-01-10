//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let diff = arr[1] - arr[0];
  let result = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if(Number(arr[i + 1] - arr[i]) !== diff) {
      result = false;
      break;
    }

    console.log(arr[i + 1] + '-' + arr[i] + "=" + Number(arr[i + 1] - arr[i]), diff)
  }

  return result;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
