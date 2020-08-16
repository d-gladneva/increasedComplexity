// const arrNum = [];
//
// for (let i=0; i<3; i++){
//     const num = prompt('Введите многозначное число');
//     arrNum.push(num);
//     if (String(arrNum[i]).substring(0,1)=== '2' || String(arrNum[i]).substring(0,1)=== '4')
//     console.log(String(arrNum[i]));
// }
//
// console.log(arrNum);
//
// const divider = [];
//
//
// const checkPrimeNum = function() {
//     for (let i=2; i < 10; i++) {
//         let primeNum = true;
//         for (let j = 2; (j < i/2)&&(primeNum = true); j++) {
//             if (i%j===0) {
//                 primeNum = false;
//                 break;
//             }
//         }
//         let n=1;
//         if (primeNum === true){
//             if (i%n===0) {
//                 console.log(i + ' Делители этого числа: ' + n);
//             }
//         }
//     }
// };
//
// checkPrimeNum();

let y=5;

function one(x){
    console.log(x+y);
}

function two(){
    let y=15;
    one(5);
}

two();