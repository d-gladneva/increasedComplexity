let week = ['пн\n', 'вт\n', 'ср\n', 'чт\n', 'пт\n', 'сб\n', 'вск\n'];
toDay = new Date().getDay() - 1;

const addWeek = function() {

    for (let i = 0; i < 7; i++) {

        if (i === toDay) {
            if (week[i] === 'сб' || week[i] === 'вск') {
                week[i].classList.add('italics');
            } else week[i].classList.add('bold');
        } else if (week[i] === 'сб' || week[i] === 'вск') {
            week[i].classList.add('italics');
        } else {
            week[i].classList.add('bold');
        }
    }
};

addWeek();

console.log(addWeek);