import { Container } from "react-bootstrap";
import { useEffectOnce } from "../../customHooks/customHooks";
import { getRecipeInformation } from "../../services/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "./about.css";

const About = () => {
  const [recipeInformation, setRecipeInformation] = useState();

  const params = useParams();
  const id = params.id;
  console.log(id);

  useEffectOnce(() => {
    const getData = async () => {
      const data = await getRecipeInformation(id);
      console.log(data);

      const recipeInformationData = {
        id: data.id,
        image: data.image ? data.image : "../placeholder.jpg",
        title: data.title,
        price: data.pricePerServing ? data.pricePerServing : 200,
        likes: data.aggregateLikes ? data.aggregateLikes : 5,
        timer: data.readyInMinutes ? data.readyInMinutes : 30,
        summary: data.summary,
        winePairingText: data.winePairing.pairingText
          ? data.winePairing.pairingText
          : "This dish works really well with Chardonnay, Sauvignon Blanc, and Gruener Veltliner. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. You could try Buddha Kat Winery Chardonnay. Reviewers quite like it with a 4 out of 5 star rating and a price of about 25 dollars per bottle.",
        winePairingImage:
          data.winePairing.productMatches &&
          data.winePairing.productMatches.length > 0
            ? data.winePairing.productMatches[0].imageUrl
            : "https://spoonacular.com/productImages/430639-312x231.jpg",
        winePairingDescription:
          data.winePairing.productMatches &&
          data.winePairing.productMatches.length > 0
            ? data.winePairing.productMatches[0].description
            : "Very aromatic with notes of hazelnut, vanilla, and a touch of oak followed by sweet raisins and a touch of yeast. Clean lasting finish. Good now but will reward those allow it to age. A favorite pre-prandial beverage. Consider it with nuts before dinner as an aperitif, or after dinner with dessert, especially chocolates and fruit-based desserts. Also wonderful on cold afternoons, served with biscotti to dip in Italian-style",
        winePairingLink:
          data.winePairing.productMatches &&
          data.winePairing.productMatches.length > 0
            ? data.winePairing?.productMatches[0].link
            : "https://www.amazon.com/Amber-Falls-Winery-Sarahs-Riesling/dp/B017J8DFHU?tag=spoonacular-20",
        ingredients: data.extendedIngredients.map((ingredient) => {
          return {
            measureAmount: ingredient.measures.metric.amount,
            measureUnit: ingredient.measures.metric.unitShort,
            image: ingredient.image,
            name: ingredient.name,
          };
        }),
        instructions: data.analyzedInstructions[0].steps.map(
          (step) => step.step
        ),
      };
      console.log(recipeInformationData);

      setRecipeInformation(recipeInformationData);
    };
    getData();
    console.log(recipeInformation);
  }, []);

  console.log(recipeInformation);

  return (
    <div className="recipes-container">
      <Container className="about-container">
        <h2 className="about-title">{recipeInformation?.title}</h2>
        <img
          src={recipeInformation?.image}
          alt="recipe"
          className="about-image"
        />

        <div className="about-icons-container">
          <div>
            <img
              src={require("../../assets/icons/dollar.png")}
              alt="dollar"
              width="40"
              height="40"
            />
            <p>${recipeInformation?.price} per serving</p>
          </div>

          <div>
            <img
              src={require("../../assets/icons/heart.png")}
              alt="heart"
              width="40"
              height="40"
            />
            <p>{recipeInformation?.likes} likes</p>
          </div>

          <div>
            <img
              src={require("../../assets/icons/timer.png")}
              alt="timer"
              width="40"
              height="40"
            />
            <p>Ready in {recipeInformation?.timer} minutes</p>
          </div>
        </div>

        <div className="about-summary">
          <p
            dangerouslySetInnerHTML={{ __html: recipeInformation?.summary }}
          ></p>
        </div>

        <div className="wine-pairing">
          <p>{recipeInformation?.winePairingText}</p>
          <div className="wine">
            <img src={recipeInformation?.winePairingImage} alt="wine" />
            <div>
              <p>{recipeInformation?.winePairingDescription}</p>
              <a href={recipeInformation?.winePairingLink} target="_blank">
                &#187; Get this wine on Amazon
              </a>
            </div>
          </div>
        </div>

        <div className="about-ingredients">
          <p className="title">Ingredients</p>
          <div className="ingredients">
            {recipeInformation?.ingredients.map((ingredient) => (
              <div className="ingredient">
                <p className="ingredient-measure">
                  {ingredient?.measureAmount} {ingredient?.measureUnit}
                </p>
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient?.image}`}
                  alt={ingredient?.name}
                />
                <p>{ingredient?.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-instructions">
          <p className="title mtop">Instructions</p>
          <div className="about-steps">
            {recipeInformation?.instructions.map((step, index) => (
              <p>
                <span>{index + 1}.</span> {step}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
