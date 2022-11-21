const checkPalin = (word: string) => {
  word = word.toLowerCase();
  let newWord: string[] = word.split("");
  let alpha: string[] = "abcdefghijklmnopqrstuvqxyz".split("");
  let beta: string[] = [];

  newWord.forEach((el) => {
    if (alpha.indexOf(el) > -1) {
      beta.push(el);
    }
  });

  let result2 = beta.join("");
  let res = beta.reverse().join("");

  if (res === result2) {
    return true;
  } else {
    return false;
  }
};

// console.log(checkPalin("Machine Gun"));

const reserver = (x: number[]) => {
  for (let i = 0; i < x.length; i++) {
    let rev = x[i];
    x[i] = x[x.length - 1 - i];
    x[x.length - 1 - i] = rev;

    return x;
  }
};

// console.log(reserver([1, 2, 3, 4]));

// BINARY ---- SEARCH
const Binary = (arr: number[], value: number) => {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  console.log("start:", start, mid, end);

  while (value !== arr[mid] && start < end) {
    console.log("Loop:", start, mid, end);
    if (value < mid) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  console.log("Finish:", start, mid, end);
  if (value === arr[mid]) {
    return mid;
  } else {
    return -1;
  }
};
// console.log(Binary([1, 4, 6, 8, 29, 2, 3, 5], 3));

const oddValue = (arr: number) => {
  const store: number[] = [];

  for (let i = 0; i <= arr; i++) {
    if (i % 2 !== 0) {
      store.push(i);
    }
  }
  return store;
};

// console.log(oddValue([1, 2, 3, 4, 5, 6, 7]));
// c onsole.log(oddValue(1000));

const palin = (wrd: string) => {
  let word: string[] = wrd.toLowerCase().split("");
  let letter: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  let entry: string[] = [];

  word.forEach((el) => {
    if (letter.indexOf(el) > -1) {
      entry.push(el);
    }
  });

  let wrd1 = entry.join("");
  let wrd2 = entry.reverse().join("");

  if (wrd1 === wrd2) {
    return true;
  }
  return false;
};

console.log(palin("madam"));

const BinaryWord = (arr: any[], val: any) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  console.log("starting point", start, mid, end);

  while (val !== arr[mid] && start < end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
    console.log("looping point", start, mid, end);
  }
  console.log("ending point", start, mid, end);

  if (val === arr[mid]) {
    return true;
  }
  return false;
};

// console.log(
//   BinaryWord())



let state = [
  "Abia",
  "Adamawa",
  "Akwa-Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross RiverDelta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const stateBinary = (arr:string [], value: string) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end)/ 2);

  
}
