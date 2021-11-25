/* const PROFILE_DATA = 'https://dating-site1.herokuapp.com/api/tutorials';

const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Error code ${res.status}`);

    }
    return res.json();
}

const getProfile = async () => {
    const res = await getResourse(PROFILE_DATA);
    return res;
}
 */

//POST
/* const postData = () => {
    const userName = document.querySelector('#userName').value;
    const userPassword = document.querySelector('#userPw').value;
    const userEmail = document.querySelector('#userEmail').value;
    const userDateDOB = document.querySelector('.dateDOB').value;
    const userMonthDOB = document.querySelector('#monthDOB').value;
    const userYearDOB = document.querySelector('.yearDOB').value;

    /* const id = window.location.search.split('?profile=')[1]; */

   /*  const currentUser = {
        name: userName,
        email: userEmail,
        password: userPassword,
        dayDOB: userDateDOB,
        monthDOB: userMonthDOB,
        yearDOB: userYearDOB,  */
        /* sexType: sexType */
    /* };

    const dataAll =  getProfile();

    for (let i = 0; i < dataAll.length; i++) {

        if (dataAll[i].email !== currentUser.userEmail) {
            fetch(PROFILE_DATA,
                {
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            "name": userName,
                            "email": userEmail,
                            "password": userPassword,
                            "dayDOB": userDateDOB,
                            "monthDOB": userMonthDOB,
                            " yearDOB": userYearDOB,
                        }
                    ),
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    }
                }).then(
                    (response) => {
                        return response.json();
                    }
                ).then(
                    (data) => {
                        console.log(data);
                    }
                )
        }else{
            alert('ВВЕДИТЕ ДРУГОЙ ПОЧТОВЫЙ АДРЕС ИЛИ ИМЯ ПОЛЬЗОВАТЕЛЯ');
        return false;
        }


    }
}



postData();

document.querySelector('.enter-btn').addEventListener('click', postData); */









//SIGNUP LOCALSTORAGE(SESSIONSTORAGE)

const createAccountData = (event) => {
    event.preventDefault();
    const userName = document.querySelector('#userName').value;
    const userPassword = document.querySelector('#userPw').value;
    const userEmail = document.querySelector('#userEmail').value;
    const userDateDOB = document.querySelector('.dateDOB').value;
    const userMonthDOB = document.querySelector('#monthDOB').value;
    const userYearDOB = document.querySelector('.yearDOB').value;

    /* const sexType = document.querySelector('.gender').addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.id === 'manGender') {
            event.preventDefault();
            const genderType = 1;
            return genderType;
        }
        if (event.target.id === 'womanGender') {
            event.preventDefault();
            const genderType = 0;
            return genderType;
        }
         return genderType; 
        
    }) */

    if (!localStorage.getItem('accounts')) {
        localStorage.setItem('accounts', JSON.stringify([]))
    }

    const currentUser = {
        name: userName,
        email: userEmail,
        password: userPassword,
        dayDOB: userDateDOB,
        monthDOB: userMonthDOB,
        yearDOB: userYearDOB,
        /* sexType: sexType */
    };

    let currentAccounts = JSON.parse(localStorage.getItem('accounts'));

    const checkResult = checkAccounts(currentAccounts, currentUser);

    if (checkResult) {
        currentAccounts.push(currentUser);
    }

    localStorage.setItem('accounts', JSON.stringify(currentAccounts));

}


const checkAccounts = (allUsers, userData) => {
    const checkUser = allUsers.some((item) => {
        return (
           
            item.email === userData.email
        )
    });

    if (checkUser) {
        alert('ВВЕДИТЕ ДРУГОЙ ПОЧТОВЫЙ АДРЕС ИЛИ ИМЯ ПОЛЬЗОВАТЕЛЯ');
        return false;
    } else {
        alert('РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО');
        window.location.href = 'page1-LogIn.html';
        return true;
    }
}




const formSignUp = document.querySelector('.login_form');
formSignUp.addEventListener('submit', createAccountData);


