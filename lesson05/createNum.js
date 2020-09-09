const arrNum = [];

for (let i=0; i<7; i++){
    const num = prompt('Введите многозначное число');
    arrNum.push(num);
    if (String(arrNum[i]).substring(0,1)=== '2' || String(arrNum[i]).substring(0,1)=== '4')
    console.log(String(arrNum[i]));
}

console.log(arrNum);



const checkPrimeNum = function () {
    for (let i = 2; i <= 100; i++) {
        let primeNum = true;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && i !== j) {
                primeNum = false;
                break;
            } else {
                primeNum = true;
            }
        }
        if (primeNum) {
            console.log(i + ' Делители этого числа: ' + 1 + ' '+ i);
        }
    }
};

checkPrimeNum();

