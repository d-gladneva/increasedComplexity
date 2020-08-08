const num = 266219;

const space = '';
let comp = 1;
numArr = num.toString().split(space);

console.log(numArr);

for (let i = 0; i < numArr.length; i++) {
    comp *= numArr[i];
}

console.log('Произведение цифр числа равно:', comp);

compPow = comp**3;

console.log(compPow);

console.log('Первые две цифры числа:', numArr[0],numArr[1],);