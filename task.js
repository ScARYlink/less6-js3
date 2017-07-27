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
var str = 'я учу javascript!';
document.write(str.slice(1, 5) + str.slice(5,16));