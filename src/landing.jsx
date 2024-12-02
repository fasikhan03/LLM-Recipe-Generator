import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import food1 from "./assets/veg.png";
import food2 from "./assets/spag.jpg";

const LandingPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [photoSlideIndex, setPhotoSlideIndex] = useState(0);
  const slides = [
    {
      title: "LLM-Powered Recipe Generator",
      content:
        "Discover new recipes with the help of AI, personalized to your preferences.",
    },
    {
      title: "Ingredient Alternatives",
      content:
        "Find substitutes for any ingredients to fit your dietary needs.",
    },
    {
      title: "Custom Recommendations",
      content:
        "Get recipe recommendations based on your tastes and previous searches.",
    },
  ];

  const photoSlides = [food1, food2];

  useEffect(() => {
    const nextSlide = () => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const nextPhotoSlide = () => {
      setPhotoSlideIndex((prevIndex) => (prevIndex + 1) % photoSlides.length);
    };
    const photoSlideInterval = setInterval(nextPhotoSlide, 3000);

    return () => clearInterval(photoSlideInterval);
  }, [photoSlides.length]);

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@400;700&display=swap");

        body {
          font-family: "Roboto", sans-serif;
          background-color: #f8e9a1;
          color: #f76c6c;
          padding: 20px;
          /*background-image: url(/assets/cooking.jpg);*/
          background-size: cover;
          background-position: center;
        }
  
        .welcome-container {
          text-align: center;
          max-width: 700px;
          margin: auto;
          margin-top: 50px;
        }
  
        .welcome-container h1 {
          font-family: "Pacifico", cursive;
          color: #355c7d;
          font-size: 3em;
        }
  
        .welcome-container p {
          font-size: 1.2em;
          margin-bottom: 40px;
        }
  
        a.button {
          display: inline-block;
          background-color: #f67280;
          color: #ffffff;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-family: "Pacifico", cursive;
          text-decoration: none;
          transition: background-color 0.3s ease;
          margin: 10px;
        }
  
        a.button:hover {
          background-color: #0056b3;
        }
        #features {
          margin-top: 50px;
          text-align: center;
        }
        #feature-slide {
          display: none;
        }
        #feature-slide.active {
          display: block;
        }
        .welcome-container,
        .features,
        footer {
          text-align: center;
          max-width: 700px;
          margin: auto;
        }
  
        .welcome-container h1,
        .features h2 {
          font-family: "Pacifico", cursive;
          color: #355c7d;
        }
  
        a.button {
          background-color: #f67280;
          color: #ffffff;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-family: "Pacifico", cursive;
          text-decoration: none;
          transition: background-color 0.3s ease;
          margin: 10px;
        }
  
        a.button:hover {
          background-color: #0056b3;
        }
  
        footer {
          margin-top: auto;
          padding: 200px 0;
        }
  
        /* Features Slideshow Styles */
        #feature-slideshow {
          position: relative;
          max-width: 700px;
          margin: auto;
        }
  
        .feature-slide {
          animation: fadeEffect 3s infinite;
          display: none;
        }
  
        .feature-slide.active {
          display: block;
        }
  
        @keyframes fadeEffect {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }
        #image-slideshow {
          max-width: 700px;
          margin: 20px auto;
          height: 200px; /* Adjust based on your image sizes */
          background-color: #ddd; /* Placeholder color, remove or replace with actual images */
        }
      `}</style>
      <div className="welcome-container">
        <h1>Welcome to Know My Recipe!</h1>
        <p>
          Discover new recipes, share your culinary adventures, and become a
          part of our food lover's community.
        </p>
        <Link to="/signup" className="button">
          Join Now
        </Link>
        <Link to="/newrecipe" className="button">
          Add a New Recipe
        </Link>
      </div>
      {/* <div id="food-photo-slideshow"> */}
      <div
        style={{
          // padding: "auto",
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          // alignItems: "center",
          // height: "250px",
          // width: "750px",
        }}
      >
        {photoSlides.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Food Slide ${index}`}
            style={{
              display: index === photoSlideIndex ? "block" : "none",
              width: "70%",
              height: "auto",
            }}
          />
        ))}
      </div>
      <section className="features" id="features">
        <h2>Features</h2>
        <div id="feature-slideshow">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`feature-slide ${
                index === slideIndex ? "active" : ""
              }`}
              style={{ display: index === slideIndex ? "block" : "none" }}
            >
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <p>© 2024 Know My Recipe. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LandingPage;
