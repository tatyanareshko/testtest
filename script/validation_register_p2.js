//validation
var userName = document.querySelector('#userName');
var error1 = document.querySelector('.error-message');

var emailAddress = document.querySelector('#userEmail');
var error2 = document.querySelector('.error-message2');

var userPassword = document.querySelector('#userPw');
var error3 = document.querySelector('.error-message3');


function inputUserName() {
    let sumError = 0;
    if (userName.value.trim().length < 1) {
        error1.classList.remove('errors');
        sumError++;
    }

    return sumError;
}

userName.addEventListener('blur', inputUserName);

userName.addEventListener('input', function () {
    if (userName.value.trim().length > 1) {
        error1.classList.add('errors');
    }

})

//email validation
var emailValid = /\S+@\S+\.\S+/;

function inputUserEmail() {
    let sumError2 = 0;
    if (emailAddress.value.trim().length === 0 || (emailAddress.value[0] && !emailValid.test(emailAddress.value))) {
        error2.classList.remove('errors');
        sumError2++;
    }

    return sumError2;
}

emailAddress.addEventListener('blur', inputUserEmail);

emailAddress.addEventListener('input', function () {
    if (emailAddress.value.trim().length !== 0 && (emailAddress.value[0] && emailValid.test(emailAddress.value))) {
        error2.classList.add('errors');
    }

})

//valid pswd
function inputUserPswd() {
    let sumError3 = 0;
    if (userPassword.value.trim().length < 6) {
        error3.classList.remove('errors');
        sumError3++;

    }

    return sumError3;
}

userPassword.addEventListener('blur', inputUserPswd);

userPassword.addEventListener('input', function () {
    if (userPassword.value.trim().length > 5) {
        error3.classList.add('errors');
    }

})

var btnSubmit = document.querySelector('.enter-btn');
btnSubmit.addEventListener('click', function (e) {

    inputUserPswd();
    inputUserEmail();
    inputUserName();

    var countError = inputUserName();
    var countError2 = inputUserEmail();
    var countError3 = inputUserName();


    if (countError3 > 0) {
        userPassword.scrollIntoView();
        userPassword.focus();
        e.preventDefault();
    }


    if (countError2 > 0) {
        emailAddress.scrollIntoView();
        emailAddress.focus();
        e.preventDefault();
    }


    if (countError > 0) {
        userName.scrollIntoView();
        userName.focus();
        e.preventDefault();
    }

})


