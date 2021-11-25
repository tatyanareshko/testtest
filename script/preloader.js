
document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector('.wrap-preloader');
    container.classList.add('loaded_hiding');
    window.setTimeout(function () {
        container.classList.add('preloader-show');
        container.classList.remove('loaded_hiding');
    }, 1000);

})
