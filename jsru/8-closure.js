function makeCounter() {
    var currentCount = 0;

    return function () {
        return currentCount++;
    };
}
var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//---------------------

function makeObjectCounter() {
    var res = {
        count:0
    };

    return function () {
        res.count++;
        return res;
    };
}

var objCounter = makeObjectCounter();
var result = objCounter();
result.count = 100;
result['wow'] = 'pizza';
console.log(objCounter());