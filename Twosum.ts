const sumUp = (arr: number[], val: number) => {
  let res: number[][] = [];
  let hashTable: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNumber: number = arr[i];
    let num: number = val - arr[i];

    if (hashTable.indexOf(num) !== -1) {
      res.push([currentNumber, num]);
    } else {
      hashTable.push(currentNumber);
    }
  }
  return res;
};

// console.log(sumUp([7, 4, 0, 3, 5, 6, 1, 2, 5], 7));

const OurMerge = (arr1: number[], arr2: number[]) => {
  let res: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
};

const OurSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = OurSort(arr.slice(0, mid));
  let right = OurSort(arr.slice(mid));
  return OurMerge(left, right);
};

console.log(OurMerge([1, 3, 0], [7, 2, 9]));
console.log(OurSort([1, 3, 0, 7, 2, 9, 15, 8, 12]));
