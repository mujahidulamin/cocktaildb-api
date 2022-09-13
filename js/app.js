const loadCocktail = async(search) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    const res = await fetch(url);
    const data = await res.json();
    displayCocktail(data.drinks);
}

const displayCocktail = (cocktails) => {
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerHTML = ``;
    // console.log(cocktails);

     //display no phones found
     const noPhoneMeassage = document.getElementById('no-phone-message');
     if(cocktails === null){
         noPhoneMeassage.classList.remove('d-none');
         toggleSpinner(false);
         return
     }else{
         noPhoneMeassage.classList.add('d-none');
     }
    cocktails.forEach(cocktail => {
        const cocktailDiv = document.createElement('div');
        cocktailDiv.classList.add('col');
        cocktailDiv.innerHTML = `
        <div  class="card p-3">
        <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cocktail.strDrink}</h5>
                <p class="card-text">${cocktail.strInstructionsIT.slice(0, 200)}</p>
            </div>
        </div>
        `
        displayContainer.appendChild(cocktailDiv);
    })
    toggleSpinner(false);
}

const searchCocktail = () => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadCocktail(searchText);
    // searchField.value = '';
}

//loader spinner

// spinner function
const toggleSpinner = isLoading => {
    const loadingSpinner = document.getElementById('loader');
    if(isLoading){
        loadingSpinner.classList.remove('d-none');
    }else{
        loadingSpinner.classList.add('d-none');
    }
}







loadCocktail('');