const recipe = {
  "@context":
    "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/",
  "@type": "Recipe",
  author: "Dakato Kelly",
  cookTime: "COOK TIME: 20min",
  datePublished: "2010-09-21",
  description:
    "This is a great recipe that I found in my Grandma's recipe book. Judging from the weathered look of this recipe card, this was a family favorite.",
  recipeIngredient: [
    "INGREDIENT:",
    "1 ½ cups all-purpose flour",
    "3 ½ teaspoons baking powder",
    "1 teaspoon salt",
    "1 tablespoon white sugar",
    "1 ¼ cups milk",
    "1 egg",
    "3 tablespoons butter, melted"
  ],

  name: "Good Old Fashioned Pancakes",
  recipeInstructions:
    " INSTRUCTIONS:    In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
  recipeYield: "YIELD: 8 servings",
  ending: "Enjoy!"
};

const titleElement = document.getElementById("title");

titleElement.innerText = recipe.name;

document.getElementById("description").innerText = recipe.description;

document.getElementById("author").innerText = recipe.author;

document.getElementById("cookTime").innerText = recipe.cookTime;

document.getElementById("datePublished").innerText = recipe.datePublished;

document.getElementById("recipeYield").innerText = recipe.recipeYield;

document.getElementById("recipeIngredient").innerText = recipe.recipeIngredient;

document.getElementById("recipeInstructions").innerText =
  recipe.recipeInstructions;

document.getElementById("ending").innerText = recipe.ending;
