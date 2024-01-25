// Задание 1.
// 1. Необходимо выводить на страницу текущую ширину 
// и высоту окна браузера, при изменении значений, вывод
// также должен меняться.
// 2. При закрытии страницы (вкладки), необходимо выводить 
// всплывающее окно или диалоговое окно браузера и 
// спросить, уверен ли пользователь, что хочет покинуть 
// страницу?
// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.

// const height = window.innerHeight;
// const width = window.innerWidth;

// let height = document.documentElement.clientHeight;
// let width = document.documentElement.clientWidth;


// const heightElement = document.querySelector('.height');
// const widthElement = document.querySelector('.width');

// heightElement.textContent = document.documentElement.clientHeight;
// widthElement.textContent = document.documentElement.clientWidth;

// window.addEventListener('resize',function(){
//     heightElement.textContent = document.documentElement.clientHeight;
//     widthElement.textContent = document.documentElement.clientWidth;
// })

// 3. Используйте объект history для управления историей
// переходов на веб-странице. Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.
window.history.back();//назад
window.history.forward();//вперед


// Задание 2
// Даны html и css:
// <style>
//   .box {
//     width: 100px;
//     height: 100px;
//     background-color: lightblue;
//     margin: 10px;
//     display: inline-block;
//   }
// </style>
 
// <button id="addButton">Добавить элемент</button>
// <button id="removeButton">Удалить элемент</button>
// <button id="cloneButton">Клонировать элемент</button>
// <div id="container">
//   <div class="box">1</div>
//   <div class="box">2</div>
//   <div class="box">3</div>
// </div>
 
// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу 
// добавляется новый квадратный элемент (<div>) с размерами 
// 100x100 пикселей. Этот элемент должен иметь класс .box 
// и содержать текст, указывающий порядковый номер элемента
// (1, 2, 3 и так далее).
// - При нажатии на кнопку "Удалить элемент" удаляется 
// последний добавленный элемент, если таковой имеется.
// - При нажатии на кнопку "Клонировать элемент" создается 
// копия последнего добавленного элемента и добавляется на 
// страницу. Если последнего добавленного элемента нет на 
// странице, необходимо вывести сообщение в alert, с надписью
// о невозможности клонирования, так как клонировать нечего.



// https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
// https://pastebin.com/jiVdndXG
// https://disk.yandex.ru/d/dNcHjZs3c96ypw
// https://learn.javascript.ru/
// https://pastebin.com/naYNYBET
// const initialJSON = `[{"id":1702889102621,
// "title":"Статья 1","text":"Text 1"},{"id":1702889103318,"title":"Статья 2","text":"Text 2"}]`;

