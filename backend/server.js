import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/index.js";
import { MongoClient, ServerApiVersion } from "mongodb";
import Recipe from "./models/Recipe.js";
import { recipes } from "./data/recipes.js";

const app = express();
const uri =
	"mongodb+srv://Group11:knowmyrecipe@recipedb.utuzlz9.mongodb.net/?retryWrites=true&w=majority&appName=RecipeDB";

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 5050;

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
		/* ADD DATA ONE TIME - RUN BELOW LINE ONLY ONCE */
		// Recipe.insertMany(recipes);
	})
	.catch((error) => console.log(`${error} did not connect`));
