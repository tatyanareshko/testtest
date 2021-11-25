const getResourse = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Error code ${res.status}`);

    }
    return res.json();
}



const getAllProfiles = async () => {
    const res = await getResourse (PROFILE_DATA);

    return res;
}

getAllProfiles();

const openSearchPanel = () => {
    let searchInput = document.querySelector('#searchInput');
    searchInput.classList.toggle('open-search');
    searchInput.focus();
}


const closeSearchList = (event) => {
    const searchList = document.querySelector('#search-list');
    let searchInput = document.querySelector('#searchInput');
    
    if (!searchList.classList.contains('hide-search')) {
       
        searchList.classList.add('hide-search');
         searchInput.blur();
    }
}


const openSearchList = () => {
    let searchList = document.querySelector('#search-list');
    searchList.classList.remove('hide-search');
}

const renderSearchList = async (event) => {
    let data = await getAllProfiles();
    /* console.log(data); */
    const searchContainer = document.querySelector('#search-list');

    data = reduceSearchData(event, data);

    if (data.length > 0) {
        searchContainer.innerHTML = '';

        data.forEach((item) => {
            searchContainer.innerHTML += `
        <li class="search-item">
                                <div class="item">
                                <a href="page4-profile.html?profile=${item.id}">
                             
                                    <p class="item-title">${item.name}</p>
                                </div>
                                </a>
                            </li>        
        `;


        })
    }
}

const reduceSearchData = (event, profileItems) => {
    const searchValue = event.target.value.toLowerCase();

    const filterPosts = profileItems.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchValue) /* || item.includes(searchValue) */
        )
    })
    return filterPosts;
}

document.querySelector('.search').addEventListener('click', openSearchPanel);

document.querySelector('#searchInput').addEventListener('input', openSearchList);

document.querySelector('#searchInput').addEventListener('input', renderSearchList);

document.querySelector('.search').addEventListener('click', closeSearchList);
    

