//FreeCodeCamp - Javascript-algorithms-and-data-structures
//Basic Algorithmic Scripting

// function factorialize(num) {
//   let total = 1
//   for(let i=num;i>0;i--){ 
//     console.log(i)
//     total = total * i
//   }
//   return total
// }

// factorialize(5);

// ----------------- Find the Longest Word in a String -----------------

function findLongestWordLength(str) {
  let wordArray = str.split(' ')
  let biggest = 0
    wordArray.forEach(x => {
    x.length > biggest ? biggest = x.length : null
    })
  return biggest;
}

//findLongestWordLength("The quick brown fox jumped over the lazy dog");

// ----------------- Palindrome checker -----------------

function palindrome(word) {
  let array = word.split("");
  let reversed = []

  for(let i = array.length -1; i>=0; i-- ){
  reversed.push(array[i])
  }
  console.log(array,reversed)
  reversed = reversed.join("")
  word == reversed ?  console.log("true") : console.log("false")
}
// palindrome("be4b")

function palindrom2(word) {
  let y = word.split('').reverse().join('')
  word === y ? console.log("true") : console.log("false")
}
// palindrom2("beeb")

// ----------------- Return Largest Numbers In Arrays -----------------

function largestOfFour(arr) {
  let result = []
  
  arr.forEach(arrays => {
    let temp = arrays[0]
      arrays.forEach(x => {
        if(temp<x){
          temp = x
        }
    })
    result.push(temp)
  })

console.log(result)
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// -----------------Confirm the Ending-----------------

function confirmEnding(str, target) {

  //get target length
  let targetLength = target.split('').length
  console.log(targetLength)
  //split str with that length

  let strArray = str.split('').reverse()
  let targetArray = target.split('').reverse()

    for(let i=0; i <= targetArray.length -1; i++){
      console.log(strArray[i], targetArray[i])
      if(strArray[i] !== targetArray[i]){
        return false;
      }
    }
    console.log("it Passed")
  return true;
}

// confirmEnding("Bastian", "ian");

// -----------------Repeat a String Repeat a String-----------------

function repeatStringNumTimes(str, num) {

    let strArray = []
    let individual = str.split('').join('') 

        for(let i = 1; i<=num; i++){
            strArray.push(individual)
        }
        let final = strArray.join('') 
        console.log(final)
        return final;  
    }
    
//   repeatStringNumTimes("abc", 3);

// -----------------Truncate a String-----------------

function truncateString(str, num) {
    let result = ""
    console.log(str.length, num)
    if(str.length === num){
        result = str
    } else if(str.length < num) {
        result = str
    } else {
        result = str.slice(0,num) 
        result += "..."
    }  
    return result;
    }

//  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
//  truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);
//   truncateString("Peter Piper picked a peck of pickled peppers", 11);

// -----------------Finders Keepers-----------------
/* Create a function that looks through an array (first argument) 
and returns the first element in the array that passes a truth test 
(second argument). If no element passes the test, return undefined.*/

function findElement(arr, func) {
    let num = 0;

    for(let i = 0; i < arr.length; i++){
        num = arr[i]
        if(func(num) == true)
        {   console.log(num)
            return num
        }
    }
    console.log(num)
    return undefined;
  }
  //findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) //should return 8
  //findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) //should return undefined.
  //findElement([1, 2, 3, 4], num => num % 2 === 0); //should return 2

// -----------------Boo who-----------------
/*Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.*/

function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return bool;
  }
  
  booWho(null);

// booWho(true) //should return true.
// booWho(false) //should return true.
// booWho([1, 2, 3]) //should return false.
// booWho([].slice) //should return false.
// booWho({ "a": 1 }) //should return false.
// booWho(1) //should return false.
// booWho(NaN) //should return false.
// booWho("a") //should return false.
// booWho("true") //should return false.
// booWho("false") //should return false.