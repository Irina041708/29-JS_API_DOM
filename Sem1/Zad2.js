// 2. При закрытии страницы (вкладки), необходимо выводить 
// всплывающее окно или диалоговое окно браузера и 
// спросить, уверен ли пользователь, что хочет покинуть 
// страницу?
window.addEventListener('beforeunload',function (event) {
    event.preventDefault();//отмена действия по умолчанию
    confirm('уверен ли пользователь, что хочет покинуть страницу?');
    event.returnValue = true;
})