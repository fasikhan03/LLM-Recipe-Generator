import React from "react";
import recipebg from "./assets/backg.jpg";
function Newrecipe() {
  return (
    <>
      <style>
        {`
      @import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@400;700&display=swap");

      body {
        font-family: "Roboto", sans-serif;
        background-color: #f8e9a1;
        color: #f76c6c;
        padding: 20px;
        background-image: url(${recipebg});
        background-position: center; /* Center the image */
        background-repeat: repeat; /* Do not repeat the image */
        background-size: cover;
      }

      .form-container {
        align-items: center;
        background-color: #ffffff;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 700px;
        margin: auto;
        border: 2px solid #f76c6c;
      }

      .form-group {
        margin-bottom: 20px;
        position: relative;
      }

      .form-group label {
        display: block;
        margin-bottom: 5px;
        font-family: "Pacifico", cursive;
        color: #355c7d;
      }

      .form-group input[type="text"],
      .form-group input[type="email"],
      .form-group input[type="password"],
      .form-group select {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 2px solid #f76c6c;
        font-family: "Roboto", sans-serif;
        transition: border-color 0.3s ease;
      }

      .form-group input[type="text"]:focus,
      .form-group input[type="email"]:focus,
      .form-group input[type="password"]:focus,
      .form-group select:focus {
        border-color: #355c7d;
        outline: none;
      }

      button[type="submit"] {
        background-color: #f67280;
        color: #ffffff;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-family: "Pacifico", cursive;
        transition: background-color 0.3s ease;
        display: block;
        margin: 0 auto;
      }

      button[type="submit"]:hover {
        background-color: #0056b3;
      }
      .heading-text {
        text-align: center;
        font-family: "Pacifico", cursive;
        color: #355c7d;
        margin-bottom: 20px;
      }

      .heading-text h1 {
        margin: 0;
        font-size: 2.5em;
      }

      .heading-text p {
        font-family: "Roboto", sans-serif;
        font-size: 1.2em;
        color: #f76c6c;
      }
      .button{
        background-color: #f67280;
        color: #ffffff;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-family: "Pacifico", cursive;
        transition: background-color 0.3s ease;
        display: block;
        margin: 0 auto;
      }
      .button::hover {
        background-color: #0056b3;
    }
    #heading-text{
            text-align: center;
        font-family: "Pacifico", cursive;
        color: #355c7d;
        margin-bottom: 20px;
        }
      `}
      </style>
      <div className="form-container">
        <h1 id="heading-text">Add a New Recipe</h1>
        <p id="heading-text">Share your wonderful recipe with the world</p>
        <form id="recipeForm">
          <div className="form-group">
            <label for="recipeName">Recipe Name:</label>
            <input type="text" id="recipeName" name="recipeName" required />
          </div>
          <div className="form-group">
            <label for="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label for="ingredients">Ingredients:</label>
            <textarea
              id="ingredients"
              name="ingredients"
              rows="4"
              required
              placeholder="List each ingredient on a new line."
            ></textarea>
          </div>
          <div id="stepsContainer"></div>
          <button type="button" id="addStepBtn" className="add-step-btn">
            Add Step
          </button>
          <button type="submit">Submit Recipe</button>
        </form>
      </div>
    </>
  );
}

export default Newrecipe;
