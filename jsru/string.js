var str = "I'm a js \"programmer\"  ";
    console.log(str); 
var str = "I\nLove\nmango";
    console.log(str.length);//считает количество символов
var str = "FunJS"
    console.log(str.charAt(4));//для получения символа, вызиваем называя его позицию в строке, первая по дефолту 0
var str = "Я умный блокнот!"
    console.log(str[5]);
 var str = "В ЭТОЙ строКЕ БолЬшие И МАЛЕНЬКИЕ буКОвКи!"
    console.log(str.toLowerCase());  
    
    
var str = "Я не должна была знать"; //ищем в этой строке
var target = "была"; //цель поиска
var pos = 0;
while (true) {
    var foundPos = str.indexOf (target, pos);
    if (foundPos == -1) break;

    console.log ( foundPos ); //нашли на этой позиции
    pos = foundPos + 1; //продолжить поиск со следующей
}

console.log (String.fromCharCode(1233) );
console.log ("банан".charCodeAt(0));//1073, код 'a'

var str = '';
for (var i = 1021; i <= 1141; i++) {
    str +=String.fromCharCode(i);
}

console.log( str );

var str = "Палки";
console.log( str.localeCompare("Ёлки"));

//Сделать первый символ заглавным
var newStr = str[0].toUpperCase + str.slice(1); // ошибка в случае пустой строки

function ucFirst(str) {
    if (!str) return str;
     
    return str[0].toUpperCase() + str.slice(1);
    console.log( ucFirst("крокозяблик"));
}