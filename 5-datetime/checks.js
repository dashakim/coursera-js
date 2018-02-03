// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var date = require('./index.js');

// var time = date('2017-05-16 13:45')
//     .add(24, 'hours')
//     .subtract(1, 'months')
//     .add(3, 'days')
//     .add(15, 'minutes');
// assert.deepEqual(
//     time.value,
//     '2017-04-20 14:00',

//     'Если к дате "2017-05-16 13:45" ' +
//     'прибавить 24 часа, 3 дня и 15 минут, вычесть 1 месяц, ' +
//     'то получится "2017-04-20 14:00"'
// );

// assert.throws принимает функцию и
// проверяет, что она выбрасывает исключение определенного типа
assert.throws(
    function () {
        date('2017-05-16 13:45').add(2, 'light-years');
    },
    TypeError,

    'Если попытаться прибавить к дате световой год, ' +
    'то выбросится исключение TypeError'
);

assert.throws(
    function () {
        date('2017-05-16 13:45').add(-2, 'years');
    },
    TypeError,

    'Если попытаться передать в функцию add отрицательное число – выбросится исключение TypeError'
);

console.info('OK!');

var input = '2017-05-16 13:45'.split(' ');
var date = input[0];
var dateParts = input.split(' ')
var time = input[1];

// -------
var result = input.match( /[- :]/gi );
var year = result[1];
var month = result[2];
var  days = result[3];

