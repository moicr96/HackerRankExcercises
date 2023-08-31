// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }



// ------------------
// function checkNums(nums) {
//     let falg = true;
    
//     for(let num of nums)
//         if(num < 0 || num > 100)
//             falg = false;
        
//     return falg;
// }

// function getSecondLargest(nums) {
//     // Complete the function
//     if(checkNums(nums)) {
//         nums.sort((a, b) => b - a).join(' ');
//         let secondLargest = nums.filter(( item, index, self) => {
//                     return self.indexOf(item) == index;
//                 })[1];
            
//         return secondLargest;
//     }
    
//     return 'Iliigal nums values!';
// }
// --------------------

function checkNums(nums) {
    if (nums.length>=1  && nums.length<=10) {
        for(let num of nums)
            if(num >= 0 && num <= 100){
                return true;
            }
        return true;
    } else {
        return false;
    }
}
function getSecondLargest(nums) {
    if(checkNums(nums)) {
        nums.sort((a, b) => b - a).join(' '); //se ordena el arreglo de mayor a menor
        let secondLargest = nums.filter(( item, index, self) => { 
            return self.indexOf(item) == index;}) //se eliminan los valores repetidos
            [1]; //se toma el segundo elemento
        return secondLargest;
    }
    return 'Illegal argument';
}

// function main() {
//     const n = +(readLine());
//     const nums = readLine().split(' ').map(Number);
    
//     console.log(getSecondLargest(nums));
// }