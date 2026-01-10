
/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let abjad = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let hewan = animals.sort()
  let resultFinal = []

  for(let i = 0; i < abjad.length; i++) {
    let result = []

    for(let j = 0; j < hewan.length; j++) {
        if(abjad[i] === hewan[j][0]) {
            result.push(hewan[j])
        }

        // console.log (`${abjad[i]} === ${hewan[j][0]}`)
    }
    if(result.length > 0) {
        resultFinal.push(result)
    }
  }

  return resultFinal;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
