var burger = document.querySelector('#burger');
var menuList = document.querySelector('.list-menu');

var closeBtn = document.querySelector('#close');

function openBurger() {

    burger.style.display = 'none';
    menuList.classList.add('show');
    closeBtn.style.display = 'block';
}

function closeBurger() {

    burger.style.display = 'block';
    menuList.classList.remove('show');
    closeBtn.style.display = 'none';
}


burger.addEventListener('click', openBurger);

closeBtn.addEventListener('click', closeBurger);