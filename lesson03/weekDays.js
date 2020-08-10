const lang = prompt('Введите язык');
const weekDaysRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'];
const weekDaysEn = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// через if
if (lang === 'ru') {
    console.log(weekDaysRu);
} else if (lang === 'en') {
    console.log(weekDaysEn);
}

// через switch-case
switch (lang) {
    case 'ru':
        console.log(weekDaysRu);
        break;
    case 'en':
        console.log(weekDaysEn);
        break;
}

// через многомерный массив без ифов и switch
const langArr = [];
langArr['ru'] = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'];
langArr['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(langArr[lang]);

const namePerson = prompt('Введите имя');

namePerson === 'Артем' ? console.log("директор") : namePerson === 'Максим' ? console.log("преподаватель") : console.log("студент");