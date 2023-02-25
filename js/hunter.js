const lodePhoneItems = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}
const displayPhones = phones =>{
    const phonesContainer = document.getElementById(`phones-container`);
    phonesContainer.textContent = "";
    // display no phones found....
    const alertMassage = document.getElementById(`alert-massage`);
    if(phones.length === 0){
        alertMassage.classList.remove(`d-none`);
    }
    else{
        alertMassage.classList.add(`d-none`);
    }



    phones.forEach(phones =>{
        const phoneDiv = document.createElement(`div`);
        phoneDiv.classList.add(`col`);
        phoneDiv.innerHTML =`
<div class="card h-100 p-3">
    <img src="${phones.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${phones.phone_name}</h5>
        <p>Brand: ${phones.brand}</p>
        <p class="card-text">${phones.slug
        }</p>
    </div>
    </div>`
    phonesContainer.appendChild(phoneDiv);
    })
}
document.getElementById(`btn-search-phone`).addEventListener(`click`, function(){
    const searchInputField = document.getElementById(`Search-field`);
    const searchText = searchInputField.value;
    lodePhoneItems(searchText);
})

// lodePhoneItems();