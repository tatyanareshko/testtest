// GET
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

                let womanUsers = document.querySelector('#woman_page');

                let manUsers = document.querySelector('#man_page');

                topUsers.innerHTML = '';
                womanUsers.innerHTML = '';
                manUsers.innerHTML = '';

                //top Users
             
                for (let i = 0; i < data.length; i++) {
                    if (data[i].type === "top") {

                        topUsers.innerHTML += `
                        <div class="swiper-slide card_user">
                            <a href="page4-profile.html?profile=${data[i].id}">
                                 <img src=${data[i].image}>
                            </a>
                            <div class="info_user_common">
                                <p class="name_user">${data[i].name}<span> ${data[i].age}</span></p>
                                <p class="country_user">${data[i].country}</p>
                            <div class="greed_btn" data-greed="1">
                                <a href="#">Поприветствовать<img src=".//images/page4/hello.png"></a>
                            </div>
                        </div>
                    </div>
                `


                    }
                }


                //Woman Users

                for (let i = 0; i < data.length; i++) {
                    if (data[i].sexType === 0) {

                        womanUsers.innerHTML += `
                        <div class="swiper-slide card_user">
                            <a href="page4-profile.html?profile=${data[i].id}">
                                <img src=${data[i].image}>
                            </a>
                            <div class="info_user_common">
                                <p class="name_user">${data[i].name}<span> ${data[i].age}</span></p>
                                <p class="country_user">${data[i].country}</p>
                            <div class="greed_btn" data-greed="1">
                                <a href="#">Поприветствовать<img src=".//images/page4/hello.png"></a>
                            </div>
                        </div>
                    </div>
                `

                    }
                }

                //Man Users

                for (let i = 0; i < data.length; i++) {
                    if (data[i].sexType === 1) {

                        manUsers.innerHTML += `
                        <div class="swiper-slide card_user">
                            <a href="page4-profile.html?profile=${data[i].id}">
                                <img src=${data[i].image}>
                            </a>
                            <div class="info_user_common">
                               <p class="name_user">${data[i].name}<span> ${data[i].age}</span></p>
                                <p class="country_user">${data[i].country}</p>
                            <div class="greed_btn" data-greed="1">
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

    new Swiper('.image-slider', {
        /*  navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev'
         }, */
        slidesPerView: 4.5,
        watchOverflow: true,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 800,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 20,
            strech: 50,
            slideShadows: true,
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            375: {
                slidesPerView: 0.5,
            },
            320: {
                slidesPerView: 0.5,
            }
        }


    });

    setTimeout(sayHello, 1000);

}

getData();








// POST
/* const postData = () => {
    const inputName = document.querySelector('#fName').value;
    const inputAge = document.querySelector('#age').value;

    fetch('http://localhost:3000/profile',
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    "name": inputName,
                    "age": inputAge
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
}

document.querySelector('#get_data').addEventListener('click', getData)
 */
//postData();

/* document.querySelector('#post_data').addEventListener('click', postData); */

// PUT

/* let currentId = 0;

const getIdUser = (e) => {
    const inputName = document.querySelector('#fName');
    console.log(e.target.parentElement.dataset.id);
    if (e.target.className === 'edit_info' || e.target.className === 'delete_info') {
        inputName.focus();
        return e.target.parentElement.dataset.id;
    }
}

const putData = (curId) => {
    const inputName = document.querySelector('#fName').value;
    const inputAge = document.querySelector('#age').value;

    fetch(`http://localhost:3000/profile/${curId}`,
        {
            method: 'PUT',
            body: JSON.stringify(
                {
                    "name": inputName,
                    "age": inputAge
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
} */

//putData();


/* document.addEventListener('click', (e) => {
    if (e.target.className === 'edit_info') {
        currentId = getIdUser(e);
    }

})


document.querySelector('#put_data').addEventListener('click', () => {
    putData(currentId);
    getData();
});

// PATCH

const patchData = (curId) => {
    const inputName = document.querySelector('#fName').value;
    const inputAge = document.querySelector('#age').value;
    fetch(`http://localhost:3000/profile/${curId}`,
        {
            method: 'PATCH',
            body: JSON.stringify(
                {
                    "name": inputName,

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
}


document.querySelector('#patch_data').addEventListener('click', () => {
    patchData(currentId);
    getData();
}); */


/* document.querySelector('#patch_data').addEventListener('click', patchData); */

//DELETE
/*
const deleteData = (curId) => {
    fetch(`http://localhost:3000/profile/${curId}`,
        {
            method: 'DELETE'
        })
} */

/* deleteData(); */

/* document.addEventListener('click', (e) => {
    if (e.target.className === 'delete_info') {
        deleteData(e.target.parentElement.dataset.id)
    }

}) */