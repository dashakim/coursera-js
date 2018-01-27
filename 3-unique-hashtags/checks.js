// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var normalizeHashTags = require('./index.js');

leosDeepEqual(
    normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']),
    'web, coursera, javascript, script, programming',
    'Список "web, coursera, JavaScript, Coursera, script, programming"' +
    ' содержит хэштеги "web, coursera, javascript, script, programming"'
);

console.info('OK!');

function leosDeepEqual(actual, expected, message) {
    return assert.deepEqual(actual, expected, "\nExpected: " + expected + "\nActual:   " + actual + "\nMessage:" + message);
}