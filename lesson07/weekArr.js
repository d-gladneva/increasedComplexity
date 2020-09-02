//
// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'];
//
// // toDay = new Date().getDay() - 1;
//
// const addWeek = function (week) {
//
//     const arrWeek = document.querySelector('#arr_week');
//
//     week.forEach((el) => {
//         arrWeek.insertAdjacentHTML('beforeEnd',  `<li class="cell">${el}</li>`);
//     });
// };
//
// addWeek(week);
//
//
//
//

let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'];

toDay = new Date().getDay() - 1;

const addWeek = function (week) {

    for (let i = 0; i < 7; i++) {
        if (i === toDay) {
            if (week[i] === 'сб' || week[i] === 'вск') {
                document.write(`<p><b>${week[i]}</b></p>`);
            } else {
                document.write(`<p><i>${week[i]}</i></p>`);
            }
        } else if (week[i] === 'сб' || week[i] === 'вск') {
            document.write(`<p><b>${week[i]}</b></p>`);
        } else {
            document.write(`<p><i>${week[i]}</i></p>`);
        }
    }

};

addWeek(week);
