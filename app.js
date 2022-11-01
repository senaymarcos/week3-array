
// Hello everyone,
// In this week's assignment, you are asked to work with arrays and loops.
// In the given array, only one item is written 2 times. Others are written 3 times.
//  Print the item written 2 times in the array to the console.

// Input: [2, 2, 3, 2, 3]
// Output: 3

// Input: [0, 1, 0, 1, 0, 99, 1, 99]
// Output: 99

// Input: [7, 1, 1, 7, 1, 7, 99, 99, 12, 8, 12, 12, 99, 8]
// Output: 8

// Criteria:
// ===============
// - Drawing flowchart for the solution of the problem. (35)
// - Print the correct result to the console. (55)
// - Adding comment lines. (10)

let array=[23,23,4,5,4,23,8,5,8,4,8];

let repeatNumber23=[];
let repeatNumber4=[];
let repeatNumber5=[];
let repeatNumber8=[];

let bigArray=[];


for (let i = 0; i < array.length; i++) {
   
 if( array[i]==23 && array.includes(23)){
      repeatNumber23.push(23);
     
  }

else if( array[i]==4 && array.includes(4)){
    repeatNumber4.push(4);

}

 else if( array[i]==5 && array.includes(5)){
        repeatNumber5.push(5);
       
}
else if( array[i]==8 && array.includes(8)){
    repeatNumber8.push(8);
    
}
}

bigArray.push(repeatNumber23);
bigArray.push(repeatNumber4);
bigArray.push(repeatNumber5);
bigArray.push(repeatNumber8);
console.log(bigArray);




for (let index = 0; index < bigArray.length; index++) {
   for (let j = 0; j < bigArray[index].length; j++) {
       const element = bigArray[index][j];
       if (element.length==2) {
           console.log(element);
       }
   }
    
}

console.log(element);

