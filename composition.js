const num = 266219;

let comp = 1;
numArr = num.toString().split('');

console.log(numArr);

for (let i = 0; i < numArr.length; i++) {
    comp *= numArr[i];
}

console.log('Произведение цифр числа равно:', comp);

compPow = String(comp ** 3);

console.log(compPow.substring(0,2));

