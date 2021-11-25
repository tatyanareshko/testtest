

var btnOpenChangePassword = document.querySelector('.btn-forgot-password');

const showModalChangePassword = () => {
    const modalOpen = document.querySelector('.changePasswordPage');
    modalOpen.classList.add('modal_open');

    const allContentBlur = document.querySelector('.loginPage');
    allContentBlur.classList.add('add-opacity');
}

btnOpenChangePassword.addEventListener('click', showModalChangePassword);


const closeModalChangePassword = () => {
    const modalOpen = document.querySelector('.changePasswordPage');
    modalOpen.classList.remove('modal_open');

    const allContentBlur = document.querySelector('.loginPage');
    allContentBlur.classList.remove('add-opacity');
}
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModalChangePassword();
    }
})