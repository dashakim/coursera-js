var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
 console.log( i + ": " + item + " (массив:" + arr + ")" );
});

var arr = [1, 2, 3, 4, 5]
var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

console.log( result ); 

var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = arr.map(function(name) {
    return name.length;
});

console.log(arrLength);

function getSums(arr) {
    var result = [];
    if (!arr.length) return result; // проверяем не пустой ли массив
    var totalSum = arr.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);
    
    return result;
}

console.log(getSums([1,2,3,4,5]));
console.log(getSums([-2,-1,0,1]));