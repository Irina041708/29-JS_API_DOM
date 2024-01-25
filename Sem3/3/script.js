document.addEventListener('DOMContentLoaded', () => {
    const errorMessage = document.querySelector('.error-message');
    const usernameInput = document.querySelector('.username-input');
    const passwordInput = document.querySelector('.password-input');


    const registerBtn = document.querySelector('.register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            // Сохраняем значения логина и пароля пользователя
            localStorage.setItem('username', usernameInput.value);
            localStorage.setItem('password', passwordInput.value);
            window.location.href = "login.html"; // переходим на страницу входа
        });
    }

    const registerBtn1 = document.querySelector('.register-btn1');
    if (registerBtn1) {
        registerBtn1.addEventListener('click', () => {
            window.location.href = "index.html"; // переходим на страницу входа
        });
    }

    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (usernameInput.value === localStorage.getItem('username') &&
                passwordInput.value === localStorage.getItem('password')) {
                window.location.href = "welcome.html"; // переходим на страницу приветствия
            } else {
                errorMessage.textContent = "Неверный логин или пароль";
            }
        });
    }
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            window.location.href = "login.html"; // переходим обратно на страницу входа
        });
    }
});