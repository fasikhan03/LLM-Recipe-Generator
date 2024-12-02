import express from "express";
import Recipe from "../models/Recipe.js";

const router = express.Router();

// @route GET http://localhost:5050/api/recipes/allRecipes
// @description Get all recipes
// @access Public

router.get("/allRecipes", async (req, res) => {
	try {
		const recipes = await Recipe.find({});
		if (!recipes) return res.status(404).json({ message: "No recipes found" });
		res.status(200).json(recipes);
	} catch (err) {
		res.status(505).json({ error: err.message });
	}
});
export default router;
