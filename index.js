/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}

v assert.equal(addTime(10, 20, 0), '10:20', 'Правильно форматирует время');
v assert.equal(addTime(1, 2, 0), '01:02', 'Правильно форматирует время');
v assert.equal(addTime(12, 30, 2), '12:32', 'При добавлении 2 мин. к 12:30 получится 12:32');
> assert.equal(addTime(12, 30, 30), '13:00', 'При добавлении 30 мин. к 12:30 получится 13:00');
x assert.equal(addTime(23, 59, 31), '00:30', 'При добавлении 31 мин. к 23:59 получится 00:30');
x assert.equal(addTime(11, 50, 61), '12:51', 'При добавлении 61 мин. к 11:50 получится 12:51');
x assert.equal(addTime(23, 1, 80), '00:21', 'При добавлении 80 мин. к 23:01 получится 00:21');

*/

module.exports = function (hours, minutes, interval) {
    var extrahours = Math.floor((minutes + interval) / 60);
    var newMinutes = (minutes + interval) % 60;
    var newHours = (hours + extrahours) % 24;

    return formatDate(newHours, newMinutes);
};

var formatDate = function (hours, minutes) { 
    return intToString(hours) + ':' + intToString(minutes);
}

var intToString = function (num) {
    var numStr = num.toString();
    if (num >= 0 && num <= 9)
        return '0' + numStr;

    return numStr;
}
