// // Задание №1 Вычислить результат 158+2 и вывести значение выражения в диалоговое окно.

// let a = 158;
// let b = 2;
// let sum = a+b;
// let product = a*b;
// let dividing = a/b
// let dinamic_dividing = b/a
// console.log(sum, product, dividing, dinamic_dividing);

// // Задание №2 Передать строковый параметр в диалоговое окно. 
// //Например, вывести «Привет, Алевтина!», где имя — это передаваемый параметр.
// // Задание №3 Вызвать диалоговое окно с заголовком «Как вас зовут?»
// // и подсказкой «Имя» в поле ввода. Затем вывести имя, которое ввели.
// // Задание №4 Написать функцию, выводящую в диалоговом окне текст и переменную. 
// // Например, «Привет, Алевтина». Где «Алевтина» — это внешняя переменная.

// your_name = prompt("Как вас зовут?")


// function printName(your_name){
//     console.log('Привет,',{your_name});
// };

// printName(your_name)


// // Задание №5 вывести на экран ****
// // в диалоговом окне текст с сообщением “Вы уверены?” 
// // и кнопками «ОК» , «Отмена».
// // При нажатии на кнопку “ОК” 
// // вывести в диалоговом окне текст с сообщением “Мы рады, что Вы уверены!”.
// // При нажатии на кнопку “Отмена” 
// // вывести в диалоговом окне текст с сообщением “Жаль, что Вы не уверены…”.

// result = confirm ("Вы уверены?")
// if(result){
//     console.log('Мы рады, что Вы уверены!');
// }
// else{
//     console.log('Жаль, что Вы не уверены…');
//     }


// // Задание №6 перепишите код, используя конструкцию switch-case, 
// // запрашивая возраст пользователя через диалоговое окно.


// // let age = 101;

// // if (age == 18) {
// //     alert('Вы совершеннолетний, все можно!');
// // } else if (age == 10) {
// //     alert('Вам надо учить уроки!');
// // } else if (age == 30) {
// //     alert('Ложитесь спать, завтра на работу');
// // } else {
// //     alert('Мы не знаем что Вам делать');
// // }

// let age = parseInt(prompt('Укажите ваш возраст: ' ));
// switch (age) {
//     case 18:
//         console.log('Вы совершеннолетний, все можно!');
//         break;
//     case 10:
//         console.log('Вам надо учить уроки!');
//         break;
//     case 30:
//         console.log('Ложитесь спать, завтра на работу');
//         break;
//     default:
//     console.log('Мы не знаем что Вам делать');
// }

// // Задание №7. Создайте массив с произвольными элементами. 
// // Выведите в документе или консоли все данные из массива. 
// // При желании можете его предварительно отсортировать, 
// // как вам будет удобно(по возрастанию или убыванию)
// let numbers = [5, 1, 3, 4, 2];
// //сортировка
// numbers.sort((a,b)=>a-b);
// //вывод 
// document.write(numbers.join("<br>"));



// // Задание №8. Создайте массив с элементами 'a', 'b', 'c'. 
// // Запишите вместо первого элемента слово, 
// // вместо второго - предложение, 
// // вместо третьего - новую букву. 
// // Массив должен состоять только из строк. 
// // Выведите итоговый массив в документ или в консоль.

// let numbers = [a, b, c];
// numbers[0] = "first";
// numbers[1] = " and second element";
// numbers[2] = " n ";
// document.write(numbers.join("<br>"));



// // Задание №9. Создайте массив с произвольными элементами(числами). 
// // Увеличьте каждый элемент массива на единицу. 
// // Выведите итоговый массив в документ или в консоль.

// let numbers = [5, 1, 3, 4, 2];
// for(let i  = 0; i<numbers.length; i++){
//   numbers[i]+=1
// }
// document.write(numbers.join("<br>"));