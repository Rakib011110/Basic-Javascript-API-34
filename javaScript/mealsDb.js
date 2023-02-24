const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))



}


const displayMeals = meals => {

  // console.log(meals); 

  const mealContainer = document.getElementById('mealContainer')

  mealContainer.innerText = ''

  meals.forEach(meal => {

    console.log(meal);
    const mealDiv = document.createElement('div')

    mealDiv.classList.add('col')
    mealDiv.innerHTML = ` 
        
    
        <div class="card h-100">
          <img src="${meal.strMealThumb} " class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"> %${meal.strMeal} </h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>

            <button onclick="loadMealsDetals(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetailsModal">
  Details
</button>
          </div>
        </div>
    
        
        `

    mealContainer.appendChild(mealDiv)

  })


  //  
}


const searchMeal = () => {


  const searchText = document.getElementById('searchField').value
  console.log(searchText);
  loadMeals(searchText)



}





const loadMealsDetals = idMeal => {

  console.log('amr sonar bangla');

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
`
  console.log(url);

  fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]))

}



const displayMealsDetails = meal => {

  document.getElementById('mealsDetailsModalLabel').innerText = meal.strMeal
  const mealDetails = document.getElementById('mealBody')
  mealDetails.innerHTML = ` 
  <img src="${meal.strMealThumb} " class="card-img-top" alt="..." />
  
  
  
  `
}





loadMeals("chi")