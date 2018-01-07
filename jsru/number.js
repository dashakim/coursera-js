/* typeof
number*/
    console.log(0x55); // 255 in hexadecimal system
    console.log(4e3); // 4000 плавающая точка
    console.log(6e-4); // 0.0006 отрицательная плавающая точка
    console.log(1/0); //infinity    
var n= 0 / 0; //Not a Number === NaN
    console.log ( isNaN (n) ); //true
    console.log ( isNaN ('12' )); //false
var n = '23.44';
    console.log (+n); // 23.44 унарный  +
    console.log ( '24' / '-2'); //-12
    console.log ( parseInt('14px')); // 14 return integer 
    console.log (parseFloat('34.1.2')); // 34.1 return fraction после второй точки ошибка
var n=255;
    console.log (n.toString(16)); // перевод в 16-ричную систему
    console.log (Math.floor(4.1)); //4
    console.log (Math.ceil(5.3)); //6
    console.log (Math.round(2.1))//2
var number = 234567678;
    console.log (number.toLocaleString() ); //красивый вид
// ++ (+1)
// += (+)
//+ сложение строк
// проверка на равенство
// != проверка на равенство
// ==== проверка на идентичность
//  !== проверка на не идентичность
// ! логическое НЕ заменяет true на false
