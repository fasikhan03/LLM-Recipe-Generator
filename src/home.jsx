import React from "react";
import dp from "./assets/dp.jpg";
import food1 from "./assets/veg.png";
import food2 from "./assets/spag.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <style>{`
      @import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@400;700&display=swap");
      body {
          /* height: 100%; */
          font-family: "Roboto", sans-serif;
          margin: 0;
          padding: 0;
          /* display: flex; */
          /* flex-direction: column; */
          align-items: center;
          background-color: #f8e9a1;
      }

      header {
          font-family: "Pacifico";
          font-size: 1em;
          width: 100%;
          text-align: center;
          padding: 10px 0;
          background-color: #355c7d;
          color: white;
      }

      .container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 80%;
          /* max-width: 1200px; Adjust based on your layout requirements */
          margin-top: 0px;
          /* flex-grow: 1; */
      }

      .sidebar,
      .sidebar-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: #355c7d;
          padding: 20px;
          gap: 20px;
          max-width: calc(100vw * 0.2);
          height: 100vh;
      }

      .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 100%;
          /* margin: 0 20px; */
          max-height: 100vh;
          overflow-x: scroll;
          scrollbar-width: none;
      }

      .recipe-card {
          background-color: white;
          padding: 20px;
          margin: 20px 0;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px; /* Adjust the card size */
      }

      .recipe-card img {
          width: 100%; /* Adjust based on your preference */
          border-radius: 10px;
          margin-bottom: 15px;
      }

      .button {
          background-color: #355c7d;
          color: #ffffff;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.3s ease;
      }

      .button:hover {
          background-color: #f67280;
      }
      .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px;
          color: white;
      }
      .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background-color: #355c7d;
          color: white;
      }
      .logo-img {
          height: 75px;
          width: 75px;
      }
      .title {
          font-size: 2em;
          text-transform: uppercase;
          font-weight: bold;
          padding-left: 0.75em;
      }
      .links {
          display: flex;
          flex-direction: column;

          gap: 20px;
      }
      #dp {
          align-items: center;
          height: 150px;
          width: 150px;
      }

      `}</style>
      <div className="container">
        <div className="sidebar">
          <div className="logo">
            <img
              src={dp}
              alt="Logo"
              className="logo-img"
              style={{ borderRadius: "50%" }}
            />
            <div className="title">Know My Recipe</div>
          </div>
          <div className="links">
            <Link to="/profile" className="button">
              Profile
            </Link>
            <Link to="/home" className="button">
              Logout
            </Link>
            <Link to="/newrecipe" className="button">
              New Recipe
            </Link>
            <a href="saved-recipes.html" className="button">
              Saved Recipes
            </a>
            <Link to="/explore" className="button">
              Explore
            </Link>
          </div>
        </div>

        <div className="main-content">
          <div className="recipe-card">
            <img src={food2} alt="Recipe Image Placeholder" />
            <h2>Recipe of the Day</h2>
            <p>
              Discover the taste of traditional Italian cuisine with the
              featured recipe: <strong>Classic Spaghetti Carbonara</strong>{" "}
              posted by @<u>Jessie_24</u>
            </p>
            <button className="button">Read More</button>
          </div>
          <div className="recipe-card">
            <img src={food1} alt="Recipe Image Placeholder" />
            <h2>Vegetarian Delight</h2>
            <p>
              Enjoy the freshness of garden vegetables with our Vegetarian
              Delight Salad.
            </p>
            <button className="button">Read More</button>
          </div>
          <div className="recipe-card">
            <img src={food2} alt="Recipe Image Placeholder" />
            <h2>Quick and Easy Snacks</h2>
            <p>
              Whip up some quick and easy snacks perfect for any time of the
              day.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>

        {/* Uncomment and adjust the sidebar-right as needed */}
        {/* <div className="sidebar sidebar-right">
        <a href="new-recipe.html" className="button">New Recipe</a>
        <a href="saved-recipes.html" className="button">Saved Recipes</a>
        <a href="explore.html" className="button">Explore</a>
      </div> */}
      </div>
    </>
  );
}

export default Home;
