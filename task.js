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
