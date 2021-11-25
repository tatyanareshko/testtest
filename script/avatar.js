const renderUserAvatar = () => {
    const avatar = document.querySelector('.user-init');
    const renderName = document.querySelector('#userNames')
    const userName = sessionStorage.getItem('userName');
    if(userName){
        avatar.innerHTML = userName[0];
        renderName.innerHTML = userName;
    }
}

renderUserAvatar();