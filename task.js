/**
 * Created by scarylink on 27.07.2017.
 */
//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
/*var date = '2025-12-31';
var delimiter = date.split('-');
console.log(delimiter);
var newDate = delimiter[2] + '/' + delimiter[1] + '/'+delimiter[0];
console.log(newDate);
*/

/*Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.*/
/*var str = 'я учу javascript!';
document.write(str.length);
*/

/*Дана строка 'я учу javascript!'. Вырежте из нее слово 'учу' и слово 'javascript'*/
/*var str = 'я учу javascript!';
document.write(str.slice(1, 5) + str.slice(5,16));
*/

/*Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.*/
/*var string = 'я учу javascript!';
var result = string.split(' ');
console.log(result);
*/

/*Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'*/
/*var arr = ['я', 'учу', 'javascript', '!'];
document.write(arr.join('+'));
*/

/*Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.*/
/*var string = 'var_test_text';
var delimiter = string.split('_');
console.log(delimiter);
for (var i=1; i < delimiter.length; i++) {
    delimiter[i] = delimiter[i].slice(0, 1).toUpperCase() + delimiter[i].slice(1);
}
var result = delimiter.join('');
alert(result);
    */

//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

var arr1 = ['a', 'b', 'c'];
var arr2 = [1, 2, 3];
var arr3 = arr1.concat(arr2);
console.log(arr3);

//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
var ar1 = ['a', 'b', 'c'];
ar1.push(1,2,3);
console.log(ar1);

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
var _arr1 = [1, 2, 3];
console.log(_arr1.reverse());

//