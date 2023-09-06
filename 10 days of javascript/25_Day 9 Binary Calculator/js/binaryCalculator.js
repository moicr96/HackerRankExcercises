let btn1 = document.getElementById('btn1');
let h1 = document.getElementById('h1');

btn0.onclick = function() {
    h1.innerHTML=h1.innerHTML+"0";
};
btn1.onclick = function() {
    h1.innerHTML=h1.innerHTML+"1";
};
btnClr.onclick = function() {
    h1.innerHTML="";
};

btnSum.onclick = function() {
    h1.innerHTML=h1.innerHTML+"+";
};
btnSub.onclick = function() {
    h1.innerHTML=h1.innerHTML+"-";
};
btnMul.onclick = function() {
    h1.innerHTML=h1.innerHTML+"*";
};
btnDiv.onclick = function() {
    h1.innerHTML=h1.innerHTML+"/";
};

btnEql.onclick = function() {
    h1.innerHTML=calculateBinary(h1.innerHTML)
};


function calculateBinary(expr){
    let [pre,post]=expr.split(/[+|\-|\*|\/]/).map(binary=>parseInt(parseInt(binary, 2).toString(10).trim()));
    let sign=expr.match(/[+|\-|\*|\/]/)[0];
    let res=eval(pre+sign+post);
    return res.toString(2);
}
// console.log(calculateBinary('11011+1000'))//=>100011
// console.log(calculateBinary('1000-0100'))//=>100
// console.log(calculateBinary('1000/0100'))//=>10
// console.log(calculateBinary('10*10'))//=>100