const prompt = require('prompt-sync')({sigint: true});

console.log()
console.log("Challenge01")
console.log()
let students = ['Tre','Sonny','Crystal','Ilyas','Greg','Fernando','Timothy','Patrick','Steve','Jimothy','Pat','Arnold','Andy']
for(let x=0; x <= students.length-1; x++){
    console.log(students[x])
}

console.log()
console.log("Challenge02")
console.log()
let grades = [100, 80, 110, 75, 83, 64]
for(let y=grades.length-1; y>=0 ; y--){
    console.log(grades[y])
}

console.log()
console.log("Challenge03")
console.log()
let positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for(let z = 0; z<=positiveNumbers.length-1 ; z++){
    if(positiveNumbers[z]%2 === 0){
        console.log(positiveNumbers[z])
    }
}

console.log()
console.log("Challenge04")
console.log()
let mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
for(let a = 0; a <= mixedSignNumbers.length-1 ; a++){
    if(mixedSignNumbers[a]%2 === 0){
        console.log(mixedSignNumbers[a])
    }
}

console.log()
console.log("Challenge05")
console.log()
let symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.pop()
symmetricalCapitals.shift()
symmetricalCapitals.shift()
for(let b = 0; b <= symmetricalCapitals.length-1; b++){
console.log(symmetricalCapitals[b])
}

console.log()
console.log("Challenge06")
console.log()
let fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift("A")
fibonacciNumbers.push("Z","Y")
for(let c = 0; c <= fibonacciNumbers.length-1; c++){
    console.log(fibonacciNumbers[c])
}

console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code // don't take it so seriously...
let arr = [5,6,12,15,20]
arr.pop()
arr.shift()
arr.shift()
arr.unshift("A")
arr.push("Z","Y")
for(let d = 0; d <= arr.length-1; d++){
    console.log(arr[d])
}






  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code
  emptyArray.unshift(3,2)
  emptyArray.push("a","h","p")

  let i = 0
  while(i < emptyArray.length){
    console.log(emptyArray[i])
    i++
  }




  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code

  for(let i = 3; i <= 10; i++){
    console.log(students[i])
  }


  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 10 Code
  
  let stu = students.slice(3,11)

  for(let i = 0; i < stu.length; i++){
    console.log(stu[i])
  }


  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Pull the items at indices 4-6 (inclusive) (so delete items at indexes 4,5 and 6) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 11 Code

  dinosaurs.splice(4,3) //4부터 3개
  for(let i = 0; i < dinosaurs.length; i++){
    console.log(dinosaurs[i]) // console.log out each item from the ORIGINAL array는 []을 쓰라는 거임.
  }

  
  
  
  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 12 Code

console.log(dinosaurs.join("*"))

  
  console.log("\n");

  console.log("Challenge 13");
  // Challenge 13
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 13 Code

dinosaurs.reverse()
console.log(dinosaurs)

  
  console.log("\n");
  console.log("Challenge 14");
  // Challenge 14
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 14 Code

  let ux = [1,2,3,4,5]
  let uy = ['a','b', 'c']
  let xy = ux.concat(uy)

  for(let i = 0; i < xy.length; i++){
    console.log(xy[i])
  }
  console.log(ux)
  console.log(uy)