// Duplikasi method .find
// Duplikasi method .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.

// .indexOf

// let index = books.indexOf("LOTR");
// console.log(index);

const books = ["LOTR", "Harry Potter", "Sherlock", "Naruto"];
const indexOfDuplicate = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      return i;
    }
  }
  //when the loop is finished and there's no item found, return -1
  return -1;
};
let duplicateIndexOf = indexOfDuplicate(books, "Harry Potter");

console.log(duplicateIndexOf);

// .find duplicate

const findDuplicate = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
};

console.log(
  findDuplicate(fruits, (val, idx, arr) => {
    return val.length > 4;
  })
);
