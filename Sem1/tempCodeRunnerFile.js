let height = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;


const heightElement = document.querySelector('.height');
const widthElement = document.querySelector('.width');

heightElement.textContent = document.documentElement.clientHeight;
widthElement.textContent = document.documentElement.clientWidth;

window.addEventListener('resize',function(){
    heightElement.textContent = document.documentElement.clientHeight;
    widthElement.textContent = document.documentElement.clientWidth;
})