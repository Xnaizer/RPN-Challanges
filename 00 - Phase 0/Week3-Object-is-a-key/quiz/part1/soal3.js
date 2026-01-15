
function cariMedian(arr) {
  // you can only write your code here!
  console.log(" ")

  for (let i = 1; i < arr.length; i++) {
    for(let j = 0; i > j; j++) {
      // console.log(`${arr[j]} dan ${arr[i]}`);
      if(arr[j] > arr[i]) {
        let x = arr[i]
        arr[i] = arr[j]
        arr[j] = x
      }
    }
    // console.log(" ")
  }

  console.log(arr)

  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
  } else {
    return arr[Math.floor(arr.length / 2  )]
  }

}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

//done
