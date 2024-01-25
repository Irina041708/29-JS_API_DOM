// Цель: Разработать веб-приложение, которое будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

// Регистрация на Unsplash:

// • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

// Создание приложения:

// • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
// • Получите свой API-ключ после создания приложения. TPMVDCOA9l4-p5LTc6z-trYsNZIByaRJ8GVBt4pCKyI

// Разработка веб-приложения:

// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

// Дополнительные задачи (по желанию):
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
// • Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.


// https://api.unsplash.com/photos?page=${page}&per_page=${perPage}&client_id=${token}


const likeStorage = [];

// Загрузить фотографии.
const loadPhotoAsync = async (container) => {
    const response = await fetch(
        `https://api.unsplash.com/photos?page=${1}&per_page=${4}&client_id=eckV4rRBd7ktLTQohNHqcXZw1shxgS0VfvnKagzz4i4`
    );
    if (!response.ok) {
        throw new Error("Ошибка в получении данных");
    }
    const photo = await response.json();//вернуть объект
    // photo.forEach((item) => console.log(item)); //так можно посмотреть,что получилось на предварительном этапе
    photo.forEach((item) => {
        const countLike = getCountLike(item.id);
        container.insertAdjacentHTML(
            "beforeend",
            `
            <div class="photo">
            <img src="${item.urls.raw}" alt="${item.alt_description}">
            <div class="photo-info">
                <p>Фотограф: ${item.user.first_name} ${item.user.last_name ? item.user.last_name : ""}</p>
                <div class="div-like" photo-id="${item.id}">
                    <p class="count-like">${countLike}</p>
                    <svg class="like" width="30px" height="30px" viewBox="0 0 12 12" 
                    enable-background="new 0 0 12 12" id="Слой_1" version="1.1"
                     xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
                     xmlns:xlink="http://www.w3.org/1999/xlink"><path 
                     d="M8.5,1C7.5206299,1,6.6352539,1.4022217,6,2.0504761C5.3648071,
                     1.4022827,4.4793701,1,3.5,1  C1.5670166,1,0,2.5670166,0,4.5S2,
                     8,6,11c4-3,6-4.5670166,6-6.5S10.4329834,1,8.5,1z" fill="gray"/></svg>
                </div>
            </div>
        </div>
          `
        )
    });
}

// Увеличить счетчик лайков.
const addLike = (photoId) => {
    if (typeof (likeStorage[photoId]) == "undefined" && likeStorage[photoId] == null) {
        likeStorage[photoId] = 1;
    }
    else {
        likeStorage[photoId] ++;
    }
}

// Вернуть количество лайков.
const getCountLike = (photoId) => {
    let countLike = 0;
    if (typeof (likeStorage[photoId]) == "undefined" && likeStorage[photoId] == null) {
        countLike = 0;
    }
    else {
        countLike = likeStorage[photoId];
    }
    return countLike;
}

// Обработчик на лайки
const clickLike = (e) => {
    const divLike = e.target.closest(".div-like");
    if (divLike == null) {
        return;
    }

    const photoId = divLike.getAttribute('photo-id');
    addLike(photoId);
    const countLike = getCountLike(photoId);

    const colorEl = e.target.closest('path');
    if (countLike > 0 && colorEl !== null) {
        colorEl.style.fill = "blue";

    }
    const countEl = divLike.querySelector('.count-like');
    if (countEl !== null) {
        countEl.textContent = countLike;
    }
}

// Установка события для фотографий.
const addEventLike = (clickFhoto) => {
    clickFhoto.addEventListener('click', clickLike);
}

// Инициализация.
async function init(loadPhotoInContainer) {
    await loadPhotoAsync(loadPhotoInContainer);
    addEventLike(loadPhotoInContainer);
}

const loadPhotoInContainer = document.querySelector('#photo-container');
init(loadPhotoInContainer);