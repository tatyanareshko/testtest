
const sayHello = () => {
    var buttons = document.querySelectorAll('.greed_btn');
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const modalOpen = document.querySelector('.greed_mes');
            const mainBackground = document.querySelector('.mainBack');

            modalOpen.classList.add('modal_open');
            mainBackground.classList.add('add-opacity');

             if (modalOpen.classList.contains('modal_open')) {
                setTimeout(() => {
                    modalOpen.classList.remove('modal_open');
                    mainBackground.classList.remove('add-opacity');
                }, 2000)
            } 
        })
    })
}
