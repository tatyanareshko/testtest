// Generate token for user auth
const generateToken = () => {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};




//// LOGIN LOCALSTORAGE(SESSIONSTORAGE)

const isAuthorisation = () => {
    if (!sessionStorage.getItem('user-token')) {
        sessionStorage.setItem('user-token', '');
        window.location.href = "page1-LogIn.html";
    }
}


const writeAccountData = (event) => {
    event.preventDefault();
    const userEmail = document.querySelector('#userEmail').value;
    const userPassword = document.querySelector('#userPw').value;
    //как добавить имя в логин если его нет полях только при регистрации (чтоб первую букву вытащить)
    /* const userName = document.querySelector('#userName').value; */


    sessionStorage.setItem('userEmail', userEmail);
    sessionStorage.setItem('userPw', userPassword);

    let accounts = JSON.parse(localStorage.getItem('accounts'));

    const currentUser = {
        email: userEmail,
        password: userPassword
    }

    isUser(accounts, currentUser);

}


const isUser = (allUsers, userData) => {
    const checkUser = allUsers.some((item) => {
        let isUserAccount = (item.email === userData.email &&
            item.password === userData.password);
        if (isUserAccount) {

           sessionStorage.setItem('userName', item.name);
           
        }
        return isUserAccount;

    });

    if (!checkUser) {
        alert('ПРОВЕРЬТЕ ПОЧТОВЫЙ АДРЕС ИЛИ ПАРОЛЬ');
        return false;
    } else {
        sessionStorage.setItem('user-token', generateToken())
        window.location.href = 'page3_main.html';
        return true;
    }

}


let formLogin = document.querySelector('.login_form');

formLogin.addEventListener('submit', writeAccountData);




