const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// Event Listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});



// Get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    // Replace this with your own logic to filter meals based on ingredients
    // For this example, let's assume you have a list of meal objects with properties like mealID, mealName, image, etc.

    let meals = [
        {
            mealID: 'meal0',
            mealName: 'LinsenSuppe',
            image: 'img/Linsensuppe.jpg',
            category: 'Category 1',
            instructions: 'Instructions for Meal 1',
            youtubeLink: 'https://www.youtube.com/watch?v=glp_xs28nzs'
        },
        {
            mealID: 'meal1',
            mealName: 'Mtabal',
            image: 'img/Syrische Auberginen gewürzt.jpg',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/shorts/YHQVl9aIxOY'
        },
        // Add more meal objects as needed


        {
            mealID: 'meal2',
            mealName: 'Taboule',
            image: 'img/Taboule.jpg',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=5sEYkx49du0'
        },

        {
            mealID: 'meal3',
            mealName: 'Mansaf',
            image: 'Img/Mansaf.jpg',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=ELoCBFgo_4U'
        },

        {
            mealID: 'meal4',
            mealName: 'Mlokheye',
            image: 'img/Mlokheye.jpg',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=oclNaCDvefQ'
        },

        {
            mealID: 'meal5',
            mealName: 'Mahashi',
            image: 'img/Mahashi.png',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/shorts/0t7sFXcoyDw'
           
        },

        {
            mealID: 'meal6',
            mealName: 'Kunafa',
            image: 'Img/Kunafa.jpg',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=videoID2'
        },

        {
            mealID: 'meal7',
            mealName: 'Halauet Aljeben',
            image: 'Img/Halauet Aljeben.jpg',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=videoID2'
        },

        {
            mealID: 'meal8',
            mealName: 'Verschiedene syrische Süßigkeiten',
            image: 'Img/Verschiedene syrische Süßigkeiten.jpg',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=videoID2'
        },


    ];

    let html = "";
    meals.forEach(meal => {
        html += `
            <div class="meal-item" data-id="${meal.mealID}">
                <div class="meal-img">
                    <img src="${meal.image}" alt="#">
                </div>
                <div class="meal-name">
                    <h3>${meal.mealName}</h3>
                    <a href="#" class="recipe-btn">Get Recipe</a>
                </div>
            </div>
        `;
    });

    mealList.innerHTML = html;
    mealList.classList.remove('notFound');
}

// Get meal recipe details
function getMealRecipe(mealIDs) {
    mealIDs.preventDefault();
    if (mealIDs.target.classList.contains('recipe-btn')) {
      let mealItem = mealIDs.target.parentElement.parentElement;
      let mealID = mealItem.dataset.id;
      // Replace this with your own logic to get the recipe details of the selected meal
      // For this example, let's assume you have the recipe details for each meal
  
      let mealDetails = {


        // Vorspeisen
        meal0: {
          mealName: 'LinsenSuppe',
          category: 'Category 0',
          instructions: 'Instructions for Meal 1',
          youtubeLink: 'https://www.youtube.com/watch?v=glp_xs28nzs',
          imagePath: 'img/Linsensuppe.jpg'
          
        },

        meal1: {
            mealName: 'Mtabal',
            category: 'Category 2',
            instructions: 'Instructions for Meal 1',
            youtubeLink: 'https://www.youtube.com/shorts/YHQVl9aIxOY',
            imagePath: 'img/Syrische Auberginen gewürzt.jpg'
        },
        
        meal2: {
            mealName: 'Taboule',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=5sEYkx49du0',
            imagePath: 'img/Taboule.jpg'
        },

          // Hauptgerichte

        meal3: {
            mealName: 'Mansaf',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=ELoCBFgo_4U',
            imagePath: 'img/Mansaf.jpg'
        },

        meal4: {
            mealName: 'Mlokheye',
            category: 'Category 2',
            instructions: 'Instructions for Meal 4',
            youtubeLink: 'https://www.youtube.com/watch?v=oclNaCDvefQ',
            imagePath: 'img/Mlokheye.jpg'
        },

        meal5: {
            mealName: 'Mahashi',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/shorts/0t7sFXcoyDw',
            imagePath: 'img/Mahashi.png'
        },


         // Desserts

        meal6: {
            mealName: 'Kunafa',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=abcd1234',
            imagePath: 'img/Kunafa.jpg'
        },

        meal7: {
            mealName: 'Halauet Aljeben',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=abcd1234',
            imagePath: 'img/Halauet Aljeben.jpg'
        },

        meal8: {
            mealName: 'Verschiedene syrische Süßigkeiten',
            category: 'Category 2',
            instructions: 'Instructions for Meal 2',
            youtubeLink: 'https://www.youtube.com/watch?v=abcd1234',
            imagePath: 'img/Verschiedene syrische Süßigkeiten.jpg'
        },


      };
  
      mealRecipeModal(mealID, mealDetails[mealID]);
    }
  }
  
  // Create a modal
  function mealRecipeModal(mealID, meal) {
    let html = `
        <h2 class="recipe-title">${meal.mealName}</h2>
        <p class="recipe-category">${meal.category}</p>
    <div class="recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.instructions}</p>
        </div>
    <div class="recipe-meal-img">
        <img src="${meal.imagePath}" alt="" id="meal-image">
    </div>
        <div class="recipe-link">
        <a href="${meal.youtubeLink}" target="_blank" id="youtube-link">Watch Video</a>
    </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');


}
