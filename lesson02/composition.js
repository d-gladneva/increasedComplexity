const num = 266219;

let comp = 1;
numArr = num.toString().split('');

console.log(numArr);

for (let i = 0; i < numArr.length; i++) {
    comp *= numArr[i];
}

console.log('Произведение цифр числа равно:', comp);

compPow = comp ** 3;

compPowArr = compPow.toString().split('');

for (let i = 0; i < 2; i++) {
    console.log(compPowArr[i]);
}