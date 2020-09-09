let week = [ 'вск', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

toDay = new Date();
console.log(week[toDay.getUTCDay()]);

const addWeek = function (week) {

    for (let i = 0; i < week.length; i++) {
        if (week[i] === week[toDay.getUTCDay()]) {
            if (week[i] === 'сб' || week[i] === 'вск') {
                document.write(`<p><i><b>${week[i]}</b></i></p>`);
            } else {
                document.write(`<p><b>${week[i]}<b></p>`);
            }
        } else if (week[i] === 'сб' || week[i] === 'вск') {
            document.write(`<p><i>${week[i]}</i></p>`);
        } else {
            document.write(`<p>${week[i]}</p>`);
        }
    }

};

addWeek(week);