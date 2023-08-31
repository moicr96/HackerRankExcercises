'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


function getLetter(s) {
    let letter;
    if ((s.length < 1 || s.length > 100 || s.toLowerCase() !== s)) {
        console.log('Illegal String!');      
    } else {
        switch (true) {
            case 'aeiou'.includes(s.charAt(0)):
                letter="A";
                break;
            case 'bcdfg'.includes(s.charAt(0)):
                letter="B"; 
                break;
            case 'hjklm'.includes(s.charAt(0)):
                letter="C";
                break;        
            default:
                letter="D";
                break;
        }
    }
    return letter;
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}