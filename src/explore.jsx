import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Explore() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5050/api/recipes/allRecipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setRecipes(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleDislike = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    recipe.recipe_likes+=1;
  };

  const handleLike = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    recipe.recipe_likes+=1;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const recipe = recipes[currentRecipeIndex];
  console.log("Current recipe:", recipe);

  return (
    <>
      <style>
        {`
        .explore-container {
          text-align: center;
          max-width: 600px;
          margin: auto;
          padding: 20px;
        }

        .explore-heading {
          margin-bottom: 10px;
          font-family: "Roboto", sans-serif;
        }

        .explore-text {
          margin-bottom: 20px;
        }

        .recipe-card {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .recipe-info {
          margin: 0 20px;
        }

        .recipe-image {
          width: 250px;
          height: auto;
          border-radius: 8px;
        }

        .like-button,
        .dislike-button {
          cursor: pointer;
          padding: 10px;
          border: none;
          border-radius: 5px;
        }

        .like-button {
          background-color: #4caf50; /* Green */
          color: white;
        }

        .dislike-button {
          background-color: #f44336; /* Red */
          color: white;
        }
      `}
      </style>
      <div className="explore-container">
        <h1 className="explore-heading">Know My Recipe</h1>
        <p className="explore-text">We think you might like these</p>
        <div className="recipe-card">
          <button className="dislike-button" onClick={handleDislike}>
            Dislike
          </button>
          <div className="recipe-info">
            <img
              src={`/${recipe.recipe_photo}`} // Ensure your image path is correct
              alt="Recipe"
              className="recipe-image"
            />
            <h2>{recipe.recipe_title}</h2>
          </div>
          <button className="like-button" onClick={handleLike}>
            Like
          </button>
        </div>
        <Link to="/feed">Back to Feed</Link>
      </div>
    </>
  );
}

export default Explore;
