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

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    const obj = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b,
      };

    return obj; //solo se puede retornar una sola cosa de una funci[on]

    /* otra forma
        return {
            length:a,
            width:b,
            perimeter:2*(a+b),
            area:a*b
    */
    

    /*otra forma
    function Rectangle(a, b) {
    this.length=a;
    this.width=b;
    this.perimeter=2*(a+b);
    this.area=a*b;
    }
    */

    }



function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}