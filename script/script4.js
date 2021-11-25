const changeSlider = () => {
    let sliderBox = document.querySelector('.sliderImgUser');
    let mainPhoto = document.querySelector('#mainUserPhoto');


    sliderBox.addEventListener('click', (event) => {

        if (event.target.tagName === 'IMG') {
            let addphoto = mainPhoto.src;
            mainPhoto.src = event.target.src;
            event.target.src = addphoto;
        }

    })

}


const PROFILE_DATA = 'https://dating-site1.herokuapp.com/api/tutorials';

const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Error code ${res.status}`);

    }
    return res.json();
}

const getProfile = async (id) => {
    const res = await getResourse(`${PROFILE_DATA}/${id}`);
    console.log(res);
    return res;
}

/* 
const sayHello = () => {
    let greedBtn = document.querySelector('.greed_btn');
    greedBtn.addEventListener('click', (event) => {

        if (event.target.tagName === 'A') {
            alert(`ВАШЕ ПРИВЕТСТВИЕ ОТПРАВЛЕНО.`);
        }

    })

} */

const sayHello = () => {
    var button = document.querySelector('.greed_btn');
   
    
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
    
}





const renderProfile = async () => {
    const id = window.location.search.split('?profile=')[1];

    const profileData = await getProfile(id);

    const profileContainer = document.querySelector('.profileInformation');
    profileContainer.innerHTML = '';
    console.log(profileData.sexType);
    if (profileData.sexType === 1) {

        profileContainer.innerHTML = `
    <div class="swiper-slide leftPoitionPhoto">

    <div class="mainPhotoUser">
        <img id="mainUserPhoto" src=${profileData.image} alt="mainPhoto">
        <div class="info_user_common">
            <p class="name_user">${profileData.name}<span> ${profileData.age}</span></p>
            <p class="country_user">${profileData.country}</p>
        </div>
    </div>


    <div class="sliderImgUser">
        <div>
            <img src=".//images/page5/photo2.jpg">
        </div>
        <div>
            <img src=".//images/page5/photo3.png">
        </div>
        <div>
            <img src=".//images/page5/photo4.png">
        </div>
        <div>
            <img src=".//images/page5/photo5.png">
        </div>
    </div>


</div>


<div class="rightSectionInfo">
    <div class="nameUserMain">
        <p>${profileData.name} <span>${profileData.age}</span></p>
        <div class="greed_btn">
            <a href="#">Поприветствовать<img src=".//images/page4/hello.png"></a>
        </div>
    </div>

    <div class="userDescr">

        <div class="stavka">
            <p>Ставка</p>
        </div>
        <div class="money">
            <p>15 654 руб</p>
        </div>

        <div class="heightUser">
            <p>Рост</p>
        </div>
        <div class="heightUserValue">
            <p>${profileData.height} см</p>
        </div>

        <div class="weightUser">
            <p>Вес</p>
        </div>
        <div class="weightUserValue">
            <p>${profileData.weight} кг</p>
        </div>

        <div class="colorEyesUser">
            <p>Цвет глаз</p>
        </div>
        <div class="colorEyesUserValue">
            <p>${profileData.colorEyes}</p>
        </div>

        <div class="hairUser">
            <p>Цвет волос</p>
        </div>
        <div class="hairUserValue">
            <p>${profileData.colorHair}</p>
        </div>

        <div class="goalMeetUser">
            <p>Цель знакомства</p>
        </div>
        <div class="goalMeetUserValue">
            <p>${profileData.goalMeeting}</p>
        </div>

    </div>

    <div class="aboutMe">

        <h6>О себе</h6>
        <p>${profileData.aboutMyself}</p>
    </div>

   
</div>

    `
    }
    if (profileData.sexType === 0) {
        profileContainer.innerHTML = `
    <div class="swiper-slide leftPoitionPhoto">

    <div class="mainPhotoUser">
        <img id="mainUserPhoto" src=${profileData.image} alt="mainPhoto">
        <div class="info_user_common">
            <p class="name_user">${profileData.name}<span> ${profileData.age}</span></p>
            <p class="country_user">${profileData.country}</p>
        </div>
    </div>


    <div class="sliderImgUser">
        <div>
            <img src=".//images/page11/girl1.jpg">
        </div>
        <div>
            <img src=".//images/page11/girl2.jpg">
        </div>
        <div>
            <img src=".//images/page11/girl3.jpg">
        </div>
        <div>
            <img src=".//images/page11/girl4.jpg">
        </div>
    </div>


</div>


<div class="rightSectionInfo">
    <div class="nameUserMain">
        <p>${profileData.name} <span>${profileData.age}</span></p>
        <div class="greed_btn">
            <a href="#">Поприветствовать<img src=".//images/page4/hello.png"></a>
        </div>
    </div>

    <div class="userDescr">

        <div class="stavka">
            <p>Ставка</p>
        </div>
        <div class="money">
            <p>15 654 руб</p>
        </div>

        <div class="heightUser">
            <p>Рост</p>
        </div>
        <div class="heightUserValue">
            <p>${profileData.height} см</p>
        </div>

        <div class="weightUser">
            <p>Вес</p>
        </div>
        <div class="weightUserValue">
            <p>${profileData.weight} кг</p>
        </div>

        <div class="colorEyesUser">
            <p>Цвет глаз</p>
        </div>
        <div class="colorEyesUserValue">
            <p>${profileData.colorEyes}</p>
        </div>

        <div class="hairUser">
            <p>Цвет волос</p>
        </div>
        <div class="hairUserValue">
            <p>${profileData.colorHair}</p>
        </div>

        <div class="goalMeetUser">
            <p>Цель знакомства</p>
        </div>
        <div class="goalMeetUserValue">
            <p>${profileData.goalMeeting}</p>
        </div>

    </div>

    <div class="aboutMe">

        <h6>О себе</h6>
        <p>${profileData.aboutMyself}</p>
    </div>

   
</div>

    `

    }
    changeSlider();
    sayHello();
}

renderProfile();