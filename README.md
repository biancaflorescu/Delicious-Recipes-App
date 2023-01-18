# Delicious - Recipes App

The objective of my project is to create a website that contains a multitude of culinary recipes to help people who are passionate about cooking. My project name is DELICIOUS and you can find it here: https://lovely-marshmallow-86deca.netlify.app/

The technologies I have used are **HTML, CSS, JavaScript** and as libraries I have used **React** and **Bootstrap**. All the data for this project is taken from an online API, named spoonacular API, using the fetch method. 

The project consists of several pages, such as: the main page displaying 8 random recipes, a page displaying 12 recipes from a certain category, a category that can be selected by clicking on one of the 4 dropdown selections in the navbar, functionality implemented using the useParams and useSearchParams methods.

The other pages are the search page, where the user can search by ingredients or by nutrients, filling in the related forms and the details page, a page where you are redirected by clicking on any recipe from any page, implemented using its ID. The details page contains more information about a recipe, such as: wine pairing, ingredients and instructions. 

Each page, besides a navbar that I’ve already talked about, has a footer, where the user can fill a form to subscribe for newsletters. The functionality implemented here is that after submitting, a modal window with a thank you message is being displayed.

A problem I encountered was the fact that some recipes’ data from this API comes empty. In order not to give an error and not to block the whole project, I added an implementation using the ternary operator to set default data.
