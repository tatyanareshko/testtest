const PROFILE_DATA = 'https://dating-site1.herokuapp.com/api/tutorials';

const getData = () => {
    fetch('https://dating-site1.herokuapp.com/api/tutorials')
        .then(
            (req) => {
                return req.json();
            }
        )
        .then(
            (data) => {

                let topUsers = document.querySelector('#top');

               

                topUsers.innerHTML = '';
               
                //top Users

                for (let i = 0; i < data.length; i++) {
                    if (data[i].type === "top") {



                        topUsers.innerHTML += `
                        <div class="card_user">
                            <a href="page4-profile.html?profile=${data[i].id}">
                                 <img src=${data[i].image}>
                            </a>
                            <div class="info_user_common">
                                <p class="name_user">${data[i].name}<span> ${data[i].age}</span></p>
                                <p class="country_user">${data[i].country}</p>
                            <div class="greed_btn">
                                <a href="#">Поприветствовать<img src=".//images/page4/hello.png"></a>
                            </div>
                        </div>
                    </div>
                `

                    }
                }

            }

        )
        .catch(
            err => {
                console.log(err);
            }

        )

        setTimeout (sayHello, 1000);
 }

getData();
