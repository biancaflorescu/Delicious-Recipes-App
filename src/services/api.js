const API_KEY = "cee2bd4a51c647ec926bae761e6be74d";

const getRandomRecipes = async () => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?number=8&apiKey=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getRandomRecipesByTag = async (recipeTag) => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?number=12&tags=${recipeTag}&apiKey=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getRecipesByIngredients = async (ingredients) => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=12&apiKey=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getRecipesByNutrients = async (
  minCalories,
  maxCalories,
  minCarbs,
  maxCarbs,
  minProtein,
  maxProtein,
  minFat,
  maxFat
) => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/findByNutrients?minCalories=${minCalories}&maxCalories=${maxCalories}&minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&minProtein=${minProtein}&maxProtein=${maxProtein}&minFat=${minFat}&maxFat=${maxFat}&number=12&apiKey=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getRecipeInformation = async (id) => {
  try {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export {
  getRandomRecipes,
  getRandomRecipesByTag,
  getRecipesByIngredients,
  getRecipesByNutrients,
  getRecipeInformation,
};
