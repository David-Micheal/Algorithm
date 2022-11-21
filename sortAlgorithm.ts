const swapData = (arr: number[], idx1: number, idx2: number) => {
  // let temp = arr[i]
  // arr[i] = arr[arr.length - 1 - i];
  // arr[arr.length - 1 - i] = temp;
};

const bubbleSortData = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const bubbleSortData2 = (arr: number[]) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(" ");
// console.log("start: ", bubbleSortData([4, 1, 7, 8, 3, 5]));
// console.log(" ");
console.log("End: ", bubbleSortData2([4, 1, 7, 8, 3, 5]));


const testData1: number[] = [];

Array.apply(null, { length: 10000 }).map((el) => {
  if (el === undefined) {
    el = Math.floor(Math.random() * 1000);
    testData1.push(el);
  }
});

console.log(bubbleSortData(testData1));

for (let i = 0; i <= 5; i++) { 
  for (let j = 5; j >= 0; j--) { 
    console.log(i, j);
  }
}
