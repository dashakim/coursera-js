var d = new Date(2011, 1, 28);
d.setDate(d.getDate() + 2);
console.log(d);
var dateNow = new Date(2012, 1, 20, 3, 12);

console.log( dateNow );

function getWeekDate(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[date.getDay()];
}

var date = new Date(2004, 0, 3);
console.log(getWeekDate(date));